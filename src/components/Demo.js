function Demo(props) {
  return (
    <>
      <div>{props.children}</div>
    <div>Name
      {props.name}
    </div>
       <div>Age
       {props.age}
     </div>
        <div>Location
        {props.location}
      </div>
      </>
  )
}

export default Demo;