import React, { useMemo, useState } from 'react';
import { colorscheme } from './colors.ts';

const App: React.FC = () => {
    const [color, setColor] = useState('#000');
    const colorscheme = useMemo(() => colorscheme(color), [color]);

    return (
        <div style={{ margin: '0 auto' }}>
            <h1>Hello world!</h1>

            <input type="color" value={color} onChange={e => setColor(e.currentTarget.value)} />

            <div style={{ display: 'flex' }}>
                {colorscheme.map((shade, index) => (
                    <div key={index} style={{ backgroundColor: shade, height: '1rem', flex: '1 1 auto' }} />
                ))}
            </div>
        </div>
    );
}

export default App;
