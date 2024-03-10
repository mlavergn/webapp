// import { h, Component, render } from 'https://esm.sh/preact';
import { html, render, Component } from 'https://esm.sh/htm/preact/standalone'


// Table
export class UserTable extends Component {
    draw(data) {
        return html`
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    ${data.users.map((user) =>
                        html`
                            <tr>
                            <td>${user.id}</td>
                            <td>${user.name}</td>
                            <td>${user.email}</td>
                            </tr>
                        `
                    )}
                </tbody>
            </table>
        `;
    }
}

const state = {
    users: [
        { "id": 1, "name": "John Doe", "email": "john.doe@example.com" },
        { "id": 2, "name": "Jane Doe", "email": "jane.doe@example.com" }
    ]
};

// Create your app
// const app = h('h1', null, 'Hello World!');
// render(app, document.body);

render(html`<${new UserTable().draw} users=${state.users} />`, document.body);
