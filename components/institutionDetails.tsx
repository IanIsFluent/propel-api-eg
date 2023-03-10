import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { useStore } from '../state/store';
import { API_BASE_URL } from '../util/constants';

function InstitutionDetails() {
  const [value, setValue] = useState('the-university-of-cambridge');
  const { setQueryName } = useStore();
  const { refetch } = useQuery({
    queryKey: ['instDetails'],
    queryFn: async () => {
      setQueryName('instDetails');
      var res = await fetch(`${API_BASE_URL}/institutions/${value}`);
      return res.json();
    },
  });

  return (
    <div>
      <label
        htmlFor="all"
        style={{
          display: 'inline-block',
          width: '5em',
          marginRight: '.5em',
        }}
      >
        Details
      </label>
      <input
        type="text"
        id="all"
        name="all"
        style={{
          marginRight: '.5em',
          maxWidth: '12em',
        }}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      ></input>
      <button type="button" onClick={() => refetch()}>
        Send
      </button>
    </div>
  );
}

export { InstitutionDetails };
