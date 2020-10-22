import React from "react";

const GroupContentForm: React.FC = () => {
  return <div>GroupContentForm</div>;
};

export default GroupContentForm;

// import React, {useState, useRef} from 'react';
// import JoditEditor from "jodit-react";

// const Example = ({}) => {
// 	const editor = useRef(null)
// 	const [content, setContent] = useState('')

// const config = {
//   "autofocus": true,
//   "defaultFontSizePoints": "pt",
//   "enter": "DIV",
//   "showXPathInStatusbar": false,
//   "buttons": "|,bold,strikethrough,underline,italic,|,|,ul,ol,|,outdent,indent,|,font,fontsize,paragraph,table,|,link,|,align,|,undo,redo,|,selectall,|,cut,copy,paste,|,print,preview"
// }

// return (
//   <JoditEditor
//     ref={editor}
//     value={content}
//     config={config}
//     tabIndex={1}
//     onBlur={(newContent) => setContent(newContent)}
//     onChange={(newContent) => {}}
//   />
// );
// }
