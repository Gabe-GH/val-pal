'use client';

import React, {useState, useEffect, Suspense} from 'react'

const mimicFetchData = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({data: 'Data loaded'})
        }, 10000);
    });
};

const MimicLoading = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        mimicFetchData().then(result => {
            setData(result.data)
        })
    }, []);

  return (
    <div>
        <Suspense>
            <p>Data: {data}</p>
        </Suspense>
    </div>
  )
}

export default MimicLoading