

const Header = ({title}) => {  
  
return (
    <header >
      <h1>{title}</h1>
    </header>
  );
};

// Header.defaultProps = {
//   title:"Default Title"
// }
export default Header

// direct inline styling 
// {/* <header style={{background:"blue", color:'red'}}>
//       <h1>Cohort 4.0 students detail</h1>
//     </header> */}

// using variable inline styling 

// const header = () => {
//   const headerStyle = {
//     background:"green"}
  
  
/* <header style={headerStyle}>
<h1>Cohort 4.0 students detail</h1>
</header> */