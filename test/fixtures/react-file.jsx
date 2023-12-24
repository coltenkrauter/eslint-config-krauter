import {Button} from './button';

const helloWorld = () => 'Hello, World!';
export default helloWorld;

function emptyListMessage() {
  return 'No items';
}

export function SampleComponent() {
  const fruits = ['apple', 'banana', 'orange'];
  const listTitles = ['sample'];
  const buttonProps = {title: 'title', description: 'description'};

  return (
    <div className='container'>
      <div className='row'>
        <div className='col'>
          {listTitles.map((listTitle) => (
            <div key={listTitle}>
              <ul>
                {fruits.length > 0
                  ? emptyListMessage()
                  : fruits.map((fruit) => (
                    <li style={{display: 'list-item'}} key={fruit}>
                      <Button {...buttonProps} />
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
