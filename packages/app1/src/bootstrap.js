import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Counter = React.lazy(() => import('app2/Counter'));

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1 style={{ color: '#076e95'}}>Hello from Main application! #tamojusto</h1>
      <React.Suspense fallback='Loading Counter...'>
        <Counter
          count={count}
          onIncrement={() => setCount(count + 1)}
          onDecrement={() => setCount(count - 1)}
        />
      </React.Suspense>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
