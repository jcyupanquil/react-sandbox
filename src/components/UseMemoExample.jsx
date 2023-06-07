import React, { useEffect, useMemo, useRef, useState } from 'react';

function UseMemoExample() {

  const [number, setNumber] = useState(1);
  const [inc, setInc] = useState(0);

  // const sqrt = getSqrt(number);
  const sqrt = useMemo(() => getSqrt(number), [number]);

  let testVar = 1;

  const renders = useRef(1);

  useEffect(() => {
    renders.current = renders.current + 1;
    testVar += 2; // testVar does always stay the same
  });

  const onClick = () => {
    setInc((prevState) => {
      return prevState + 1;
    });
  }

  return (
    <div>
      <input type='number' value={number} onChange={(e) => setNumber(e.target.value)} />

      <h2 className='my-3'>
        The square root of {number} is: {sqrt}
      </h2>

      <button className='btn btn-primary'
        onClick={onClick}>Re-Render</button>

      <h3>
        Renders: {renders.current}
        Test Var: {testVar}
      </h3>
    </div>
  )
}

function getSqrt(n) {
  for (let i = 0; i <= 10000; i++) {
    console.log(i);
  }
  console.log('Expensive process');
  return Math.sqrt(n);
}

export default UseMemoExample
