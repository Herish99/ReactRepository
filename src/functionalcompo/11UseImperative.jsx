import React, { useRef } from "react";
import MyInput from "./12ImperativeChild";

const UseImperative = () => {
  console.log("parent compo called");
  const ref = useRef(null);

  function handleClick() {
    console.log("called handleClick Parent Compo", ref.current);
    ref.current.focus();
    // This won't work because the DOM node isn't exposed:
    // ref.current.style.opacity = 0.5;
  }
  return (
    <>
      <h5>
        "useImperativeHandle" એ એક React હુક છે જે તમને મદદ કરે છે કે કેવી રીતે
        પારેન્ટ કમ્પોનન્ટથી ચાઇલ્ડ કમ્પોનન્ટની ઇન્સ્ટન્સનો ઉપયોગ કરી શકો છે. આ
        હુક વાપરવામાં આવે છે જ્યારે તમારે ચાઇલ્ડ કમ્પોનન્ટની ઇન્સ્ટન્સનો કેવું
        ભાગ પારેન્ટ કમ્પોનન્ટથી એક્સેસ કરવો છે.
        <hr />
        આકારણે, વાતચીતનું સારૂં વર્ણન આપું છે:
        <hr />
        <b>ચાઇલ્ડ કમ્પોનન્ટ:</b> માનો તમારી પાસે એવું ચાઇલ્ડ કમ્પોનન્ટ છે જેમનું
        તમે કેટલીક વિશિષ્ટ કામગીરીઓ અને ગુણવત્તાઓ ચાહો છે.
        <hr />
        <b>forwardRef નો ઉપયોગ:</b> જો તમારે ચાઇલ્ડ કમ્પોનન્ટની ઇન્સ્ટન્સનો
        રેફરન્સ મેળવવો છે, તો તમે forwardRef ફંક્શનનો ઉપયોગ કરી શકો છો. આમ
        પારંપરિક પરીપ્રેક્ષ્યમાં, આપે પારંપરિક પરીપ્રેક્ષ્યમાં, આપે refનો ઉપયોગ
        કરી ચૂક્યો હશે.
        <hr />
        <b>એક્સપોઝ કરેલ ઇન્સ્ટન્સનો વ્યક્તિગત ભાગ:</b> ચાઇલ્ડ કમ્પોનન્ટમાં
        useImperativeHandle હુકનો ઉપયોગ કરેલો છે. આ હુક તમને મંજુર કરે છે કે
        ચાઇલ્ડ કમ્પોનન્ટની ઇન્સ્ટન્સનું કયું ભાગ ref દ્વારા એક્સેસ કરવું જોઈએ.
        <hr />
        <b>મેથડ્સ/પ્રોપર્ટીઝ એક્સેસ કરવી:</b> પારેન્ટ કમ્પોનન્ટ તમારે આપે તમારી
        ચાઇલ્ડ કમ્પોનન્ટની વિશિષ્ટ મેથડો અથવા ગુણવત્તાઓનો ઉપયોગ કરી શકે છે, જેને
        તમે useImperativeHandle દ્વારા વ્યક્ત કર્યું છે.
        <hr />
        આખો પ્રક્રિયાનું પ્રમુખ ભાગ છે કે "useImperativeHandle" દ્વારા તમે
        ચાઇલ્ડ કમ્પોનન્ટની ઇન્સ્ટન્સની વિશિષ્ટ કામગીરીઓ અને ગુણવત્તાઓ પારેન્ટ
        કમ્પોનન્ટથી એક્સેસ કરી શકો છે.
      </h5>
      <p>
        useImperativeHandle is a React Hook that lets you customize the handle
        exposed as a ref.
      </p>
      <form action="">
        <MyInput label="Enter your name" ref={ref} />
        <button type="button" onClick={handleClick}>
          Edit
        </button>
      </form>
    </>
  );
};

export default UseImperative;
