import React from "react";
import { Table } from "@mantine/core";

function TableSotr() {

    const elements = [
        { name: 'Дворядкин Николай', position: 'менеджер по продажам', email: 'kurt_bates@outlook.com', call: '+7(911)609-73-92' },
        { name: 'Дворядкин Николай', position: 'менеджер по продажам', email: 'kurt_bates@outlook.com', call: '+7(911)609-73-92' },
        { name: 'Дворядкин Николай', position: 'менеджер по продажам', email: 'kurt_bates@outlook.com', call: '+7(911)609-73-92' },
        
    ];
    const rows = elements.map((element) => (
        <tr key={element.name}>
            <td>{element.name}</td>
            <td>{element.position}</td>
            <td>{element.email}</td>
            <td>{element.call}</td>
        </tr>
    ));

    return (
        <Table>
            <thead>
                <tr>
                    <th style={{color: 'rgb(98,102,235)'}}>Имя сотрудника</th>
                    <th>Должность</th>
                    <th>Email</th>
                    <th>Телефон</th>
                </tr>
            </thead>
            <tbody>{rows}</tbody>
        </Table>
    );
}
export default TableSotr;