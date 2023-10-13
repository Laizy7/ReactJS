// import ListGroup from './components/ListGroup';

// function App() {
//   let items = ['AA', 'BB', 'CC', 'DD', 'EE'];

//   const handleSelecItem = (item: string) => {
//     console.log(item);
//   };

//   return (
//     <div>
//       <ListGroup
//         items={items}
//         heading='Cities'
//         onSelectItem={handleSelecItem}
//       />
//     </div>
//   );
// }

// export default App;

// import Alert from './components/Alert';

// const App = () => {
//   return (
//     <div>
//       <Alert>
//         Haio <span>Lyu</span>
//       </Alert>
//     </div>
//   );
// };

// export default App;

import { useState } from 'react';
import Alert from './components/Alert';
import Button from './components/Button';

const App = () => {
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>
      )}
      <Button color='warning' onClick={() => setAlertVisibility(true)}>
        Deez Butt
      </Button>
    </>
  );
};

export default App;
