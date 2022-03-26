import React from 'react';
import './Questions.css'
const Questions = () => {
    return (
        <div>
            <div className='questions-1'>
                <h2>State Vs Props</h2>
                <table>
                    <tr>
                        <th>Props</th>
                        <th>State</th>
                    </tr>
                    <tr>
                        <td>1. Props are read-only.</td>
                        <td>1. State changes can be asynchronous.</td>

                    </tr>
                    <tr>
                        <td>2. Props  immutable.</td>
                        <td>2. State mutable.</td>

                    </tr>
                    <tr>
                        <td>3. Stateless component can have Props.</td>
                        <td>3. Stateless components cannot have State.</td>

                    </tr>
                    <tr>
                        <td>4. Props দ্বারা child component access করা যায়।</td>
                        <td>4. State দ্বারা child component access করা যায় না।</td>

                    </tr>
                    <tr>
                        <td>5. Props এর data পূনরায় ব্যবহার করা যায়।</td>
                        <td>5. State এর data পূনরায় ব্যবহার করা যায় না।</td>

                    </tr>
                </table>

            </div>
            <div className='questions-2'>
                <h2>How to react works? </h2>
                <h5>React is a JavaScript library.
                    React সম্পূর্ণ JavaScript এর উপর কাজ করে.
                    React Jsx দিয়ে কাজ করে jsx html এর মতো হলে ও আসল html না । এই Jsx webpack compiler  ব্যবহার করে JavaScript code এ পরিবর্তন হয়। এরপর কোন কোড পরিবর্তন হলে  react তার virtual Dom এর সাথে Browser Dom এর সাথে compare করে তা ui তে দেখায়।</h5>
            </div>
            <div className='questions-3'>

            </div>

        </div>
    );
};

export default Questions;