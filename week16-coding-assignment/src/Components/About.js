import React from 'react'

function About(props) {
console.log("From About.js using props: ", props);
console.log("From About.js: ", props.list.name);
const list = props.list;
  return (
    <>
    <div>About</div>
    Andres age is {list.age}
    </>    
  )
}

export default About