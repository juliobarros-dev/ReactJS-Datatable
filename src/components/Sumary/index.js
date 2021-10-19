import React, { useContext } from 'react';
import MyContext from '../../context/Context';

export default function Sumary() {
  const { servers } = useContext(MyContext);
  const title = 'Sumário dos recursos dos servidores';
  const tableHeaders = [
    'Servidores Selecionados',
    'Total de Memória',
    'Total de CPUs',
    'Total de Discos'
  ];
  const tableData = {
    selectedServers: `${servers.length} servidores selecionados`,
    totalMemory: `${servers.reduce((accumulator, { configuracao: { memoryProvisioned } }) => accumulator + memoryProvisioned, 0)} GB`,
    totalCPU: `${servers.reduce((accumulator, { configuracao: { cpuProvisioned } }) => accumulator + cpuProvisioned, 0)} vCPUs`,
    totalDisk: `${servers.reduce((accumulator, { configuracao: { totalDiskGB } }) => accumulator + totalDiskGB, 0)} GB`,
  };
  
  return(
    <section>
      <div className="title-section">
        {title}
      </div>
      <table>
        {tableHeaders.map((item, index) => (
          <tr key={item.id_vm}>
            <th>{item}</th>
            <td>
              {tableData[Object.keys(tableData)[index]]}
            </td>
          </tr>
        ))}
      </table>
    </section>
  );
}
