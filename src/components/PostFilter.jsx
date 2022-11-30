import React from 'react';
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";

const PostFilter = ({ filter, setFilter }) => {
   return (
      <div>
         <MyInput placeholer={'Search'} value={filter.query} onChange={e => setFilter({ ...filter, query: e.target.value })} />
         <MySelect
            onChange={e => setFilter({ ...filter, sort: e })}
            value={filter.sort}
            defaultValue={'Сортировка'}
            options={[
               { value: 'title', name: 'По названию' },
               { value: 'body', name: 'По описанию' }
            ]}
         />
      </div>
   );
}

export default PostFilter;
