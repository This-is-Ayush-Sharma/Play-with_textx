import React, { useState } from 'react'


export default function TextForm(props) {

    const handleupclick = () => {
        console.log("upper case was clicked..");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("CONVERTED TO UPPER CASE..","success");
        // setText("you have clicked handle up ");
    };


    const handlelowclick = () => {
        console.log("lower case was clicked..");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("CONVERTED TO LOWER CASE..","success");
    };


    const handleclear = () => {
        setText("");
        setwordcnt(0);
        props.showAlert("CLEARED THE SPACE...","success");
    };


    const handleonchange = (event) => {
        console.log("upper case was clicked..");
        handlewordcnt(document.getElementById("myBox").value);
        setText(event.target.value);
        
    };

    const handlecopy=() =>{
        var text=document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("COPIED TO CLIPBOARD..","success");
    };

    const handleextraspace=() =>{
        var newstr="";
        for(var i=0;i<text.length;i++)
        {
            if(text.charAt(i)===' '&&text.charAt(i+1)!==' ')
            {
                newstr+=text.charAt(i);
            }
            else
            {
                if(text.charAt(i)!==' ')
                newstr+=text.charAt(i);
            }
        }
        setText(newstr.trim());
        props.showAlert("EXTRA SPACES HAVE BEEN REMOVED....","success");
    }

    const handlewordcnt=(a)=>{
        var newstr=a.trim();
        var str="";
        for(var i=0;i<newstr.length;i++)
        {
            if(newstr.charAt(i)===' '&&newstr.charAt(i+1)!==' ')
            {
                str+=newstr.charAt(i);
            }
            else
            {
                if(newstr.charAt(i)!==' ')
                str+=newstr.charAt(i);
            }
        }
        setwordcnt(str.split(" ").length);
    }

    const [text, setText] = useState("");
    const [wordcnt, setwordcnt] = useState(0);
    return (
        <>
            <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea style={{backgroundColor: props.mode==='light'?'white':'grey',color: props.mode==='dark'?'white':'black'}} className="form-control" id="myBox" rows="8" onChange={handleonchange} value={text}></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleupclick}>Convert to upper case</button>
                <button className="btn btn-primary mx-1" onClick={handlelowclick}>Convert to lower case</button>
                <button className="btn btn-primary mx-1" onClick={handlecopy}>Copy Text</button>
                <button className="btn btn-primary mx-1" onClick={handleextraspace}>Extra Space</button>
                <button className="btn btn-primary mx-1" onClick={handleclear}>Clear Text</button>
            </div>
            <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
                <h2>Your Text Summry.</h2>
                {/* <p>{(text.split(" ").length)} words and {text.length} characters</p>
                <p><b>{0.008 * (text.split(" ").length)}</b> Minutes read</p> */}

                <p>{wordcnt} words and {text.length} characters</p>
                <p><b>{0.008 * wordcnt}</b> Minutes read</p>
                <h2>Preview.</h2>
                <p>{text.length>0?text:"Enter something to preview here...."}</p>
            </div>
        </>
    )
}

// to change the state we have to use the setText method to do we cant direclty change the state of the variable text.