import React, { useEffect, useState } from 'react';
import Table from '../../components/Table';
import runGoogleScript from '../../../assets/js/google';
import Loader from '../../components/Loader/Loader';
import Modal from '../../components/Modal';

const Rewards: React.FC<any> = (props: any) => {
  //Test Comment
  const [isLoading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<any>(Array(2).fill(Array(4).fill('')));
  const [selectedRecord, setSelectedRecord] = useState<any>(Array(4).fill(''));
  const [action, setAction] = useState<string>('view');
  const [modalView, setModalView] = useState<boolean>(false);
  const getData: any = async () => {
    try {
      setLoading(true);
      const getDataResponse = await runGoogleScript('getData');
      setData(JSON.parse(getDataResponse).data);
      // setUser(getDataResponse.user);
    } catch (error: any) {
      alert(error);
      setData([]);
    }
    setLoading(false);
  };
  useEffect(() => {
    console.log('Inside Table useEffect');
    getData();
  }, []);
  return (
    <section className="container-fluid">
      {modalView && (
        <Modal
          selectedRecord={selectedRecord}
          action={action}
          setSelectedRecord={setSelectedRecord}
          setLoading={setLoading}
          setModalView={setModalView}
        />
      )}
      {isLoading ? (
        <Loader />
      ) : (
        <Table
          data={data}
          setSelectedRecord={setSelectedRecord}
          setAction={setAction}
          setModalView={setModalView}
        />
      )}
    </section>
  );
};

export default Rewards;
