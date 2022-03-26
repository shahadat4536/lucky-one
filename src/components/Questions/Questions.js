import React from 'react';
import './Questions.css'
const Questions = () => {
    return (
        <div>
            <div className='questions-1'>
                <h2>State Vs Props</h2>
                <table>
                    <tr>
                        <th>State</th>
                        <th>Props</th>
                    </tr>
                    <tr>
                        <td>1. Props are read-only.</td>
                        <td>1. State changes can be asynchronous.</td>

                    </tr>
                    <tr>
                        <td>2. Props are immutable.</td>
                        <td>2. State is mutable.</td>

                    </tr>
                    <tr>
                        <td>3. Stateless component can have Props.</td>
                        <td>3. Stateless components cannot have State.</td>

                    </tr>
                    <tr>
                        <td>4. Props can be accessed by the child component.</td>
                        <td>4. State cannot be accessed by child components.</td>

                    </tr>
                    <tr>
                        <td>5. Props make components reusable.</td>
                        <td>5. State cannot make components reusable.</td>

                    </tr>
                </table>

            </div>
            <div className='questions-2'>

            </div>
            <div className='questions-3'>

            </div>

        </div>
    );
};

export default Questions;