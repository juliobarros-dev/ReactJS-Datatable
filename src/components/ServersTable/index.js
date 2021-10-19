import React, {useContext} from 'react';
import MyContext from '../../context/Context';

export default function ServersTable() {
  const { servers, loading } = useContext(MyContext);
  if (loading) {
    return (
      <div>Buscando Servidores</div>
    );
  }
  const title = 'Tabela de servidores';
  const tableHeaders = [
    'Memoria',
    'vCPUs',
    'Disco',
    'IP'
  ];
  const tableData = {
    Memoria: servers.map(({configuracao: { memoryProvisioned } }) => `${memoryProvisioned} GB`),
    vCPUs: servers.map(({ configuracao: { cpuProvisioned } }) => `${cpuProvisioned} vCPU`),
    Disco: servers.map(({ configuracao: { totalDiskGB } }) => `${totalDiskGB} GB`),
    IP: servers.map((item) => item.ip),
  };

  return (
    <section>
      <div className="title-section">
        {title}
      </div>
      <table>
        <thead>
          <tr>
            <th>
              Select
            </th>
            <th>
              Hostname
            </th>
            {tableHeaders.map((item) => (
              <th key={item}>{item}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {servers.map((item, index) => (
            <tr key={item.id_vm}>
              <td>
                <input type="checkbox" />
              </td>
              <td>
                {`Server ${index + 1}`}
              </td>
              {tableHeaders.map((header) => (
                <td key={header}>
                  {tableData[header][index]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
