import React from 'react'

const Button = (props) => {
  // create on click handler for button
  const handleClick = () => {
    // Add your logic here
    console.log('Button clicked!'); // Example logic

    // You can also call a function passed as a prop
    if (props.onClick) {
      props.onClick();
    }
  };
  return (
    <div className="p-2 w-full">
          <button onClick={handleClick} className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            {props.text}
          </button>
        </div>
  )
}
export default Button
