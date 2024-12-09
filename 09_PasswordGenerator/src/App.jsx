import { useCallback, useState, useEffect, useRef } from 'react'

function App() {
  const characters = {
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    numbers: "0123456789",
    symbols: "!@#$%^&*()_+-=[]{}|;:,.<>?",
  };

  const [length, setLength] = useState(8);
  const [password, setPassword] = useState('');
  const [settings, setSettings] = useState({
    uppercase: true,
    lowercase: false,
    numbers: true,
    symbols: true
  });

  //  make it variable
  const passwordRef = useRef()

  // Generate Password || using useCallback to avoid redefinition
  const passwordGenerate = useCallback(() => {
    let charset = '';
    if (settings.uppercase) charset += characters.uppercase;
    if (settings.lowercase) charset += characters.lowercase;
    if (settings.numbers) charset += characters.numbers;
    if (settings.symbols) charset += characters.symbols;

    let result = '';
    for (let i = 0; i < length; i++) {
      result += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    setPassword(result);
  }, [length, settings]);

  // clipBoard 
  const clipBoard = useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,11);
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(() => {
    passwordGenerate();
  }, [length, settings, passwordGenerate]);

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setSettings((prevSettings) => ({
      ...prevSettings,
      [name]: checked,
    }));
  };

  return (
    <>
      {/* Input Section */}
      <h1 className="text-center py-4 text-gray-500 font-serif text-2xl">Password Generator</h1>
      <div className="flex justify-center font-serif">
        <div className="relative w-full sm:w-1/4 md:w-1/4">
          <input
            type="text"
            placeholder="P4$5W0rD!"
            value={password}
            readOnly
            ref={passwordRef}
            className="w-full p-3 bg-slate-800 text-white placeholder-gray-400 focus:outline-none"
          />
          <span 
          onClick={clipBoard}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-green-300 cursor-pointer">
            <i className="fas fa-copy" ></i> {/* Clipboard Icon */}
          </span>
        </div>
      </div>

      {/* Card Section */}
      <div className="flex justify-center items-center mt-5">
        <div className="relative w-full sm:w-1/4 md:w-1/4 text-white bg-slate-800 p-5 shadow-lg">
          {/* Character Length */}
          <div className="flex justify-between items-center p-2">
            <label htmlFor="charLength" className="text-lg font-semibold">
              Character Length
            </label>
            <span className="text-green-400" id="charCounter">
              {length}
            </span>
          </div>
          <input
            type="range"
            min={0}
            max={30}
            value={length}
            onChange={(e) => { setLength(e.target.value); }}
            className="w-full h-2 bg-gray-700 appearance-none cursor-pointer focus:outline-none  accent-green-400"
          />

          {/* Options Section */}
          <ul className="mt-5 space-y-3  accent-green-400">
            <li className="flex items-center ">
              <input 
                type="checkbox"
                id="uppercase"
                name="uppercase"
                checked={settings.uppercase}
                onChange={handleCheckboxChange}
                className="mr-2"
              />
              <label htmlFor="uppercase" className="text-sm">
                Include Uppercase Letters
              </label>
            </li>
            <li className="flex items-center">
              <input
                type="checkbox"
                id="lowercase"
                name="lowercase"
                checked={settings.lowercase}
                onChange={handleCheckboxChange}
                className="mr-2"
              />
              <label htmlFor="lowercase" className="text-sm">
                Include Lowercase Letters
              </label>
            </li>
            <li className="flex items-center">
              <input
                type="checkbox"
                id="numbers"
                name="numbers"
                checked={settings.numbers}
                onChange={handleCheckboxChange}
                className="mr-2"
              />
              <label htmlFor="numbers" className="text-sm">
                Include Numbers
              </label>
            </li>
            <li className="flex items-center">
              <input
                type="checkbox"
                id="symbols"
                name="symbols"
                checked={settings.symbols}
                onChange={handleCheckboxChange}
                className="mr-2"
              />
              <label htmlFor="symbols" className="text-sm">
                Include Symbols
              </label>
            </li>
          </ul>

          {/* Generate Button */}
          <button
            type="submit"
            className="w-full bg-green-400 p-4 mt-7 text-black uppercase text-sm font-semibold"
            onClick={passwordGenerate}
          >
            Generate
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
