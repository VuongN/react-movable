import * as React from 'react';
import { List, arrayMove } from '../src/index';

class DisabledItems extends React.Component<{}, { items: any[] }> {
  state = {
    items: [
      {"name": "Item 1"},
      {"name": "Item 2 -- Disabled", "disabled": true},
      {"name": "Item 3"},
      {"name": "Item 4"},
      {"name": "Item 5 -- Disabled", "disabled": true},
      {"name": "Item 6 -- Disabled", "disabled": true}
    ]
  };
  render() {
    return (
      <div
        style={{
          maxWidth: '300px',
          margin: '0px auto',
          backgroundColor: '#F7F7F7',
          padding: '3em'
        }}
      >
        <List
          values={this.state.items}
          onChange={({ oldIndex, newIndex }) =>
            this.setState((prevState: { items: string[] }) => ({
              items: arrayMove(prevState.items, oldIndex, newIndex)
            }))
          }
          renderList={({ children, props, isDragged }) => (
            <ul
              {...props}
              style={{ padding: 0, cursor: isDragged ? 'grabbing' : undefined }}
            >
              {children}
            </ul>
          )}
          renderItem={({ value, props, isDragged, isSelected }) => (
            <li
              {...props}
              style={{
                ...props.style,
                padding: '1.5em',
                margin: '0.5em 0em',
                listStyleType: 'none',
                cursor: isDragged ? 'grabbing' : 'grab',
                border: '2px solid #CCC',
                boxShadow: '3px 3px #AAA',
                color: value.disabled ? '#888' : '#333',
                borderRadius: '5px',
                fontFamily: 'Arial, "Helvetica Neue", Helvetica, sans-serif',
                backgroundColor: isDragged || isSelected ? '#EEE' : '#FFF'
              }}
            >
              {value.name}
            </li>
          )}
        />
      </div>
    );
  }
}

export default DisabledItems;
