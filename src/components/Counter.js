import React from "react";
import { connect } from "react-redux";
import { increment } from "../JS/actions/actionCounter";

const Counter = (props) => {
  return (
    <div>
      <h1>COUNTER</h1>
      <button className="decrement-btn">-</button>
      <span>{props.counter}</span>
      <button className="increment-btn" onClick={props.increment}>
        +
      </button>
    </div>
  );
};


const mapStateToProps=(state)=>{
    return {
        counter: state.count
    }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: () => dispatch(increment()),
//   };
// };

// const mapDispatchToProps = {
//   increment
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
export default connect(mapStateToProps, {increment})(Counter);
