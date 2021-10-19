import DefaultLayout from '../../components/DefaultLayout';
import Sumary from '../../components/Sumary';
import ServersTable from '../../components/ServersTable';

function Home() {
  return (
    <DefaultLayout>
      <Sumary />
      <ServersTable />
    </DefaultLayout>
  );
}

export default Home;