import { Counter } from "./testowe/testowe";
import { Toggle } from './testowe/testowe2';
import { Feedback } from "./Feedback";

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      {/* <Counter step={5} />
      <Toggle /> */}
      <Feedback />
      
    </div>
  );
};
