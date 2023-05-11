import React, {useState, useEffect, useRef} from 'react'

const typewriter = ({text}) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const index = useRef(0);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [currentText, setCurrentText] = useState('');
    
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        setTimeout(() => {
            setCurrentText((value) => value + text.charAt(index.current));
            index.current += 1;
        }, 900);
    }, [currentText]);
  
    return (
    <div>
        <p>{currentText}</p>
    </div>
  )
}

export default typewriter