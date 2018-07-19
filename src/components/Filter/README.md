```js
  initialState = {
    filter: {
      title: 'Исправительно-трудовые лагеря',
      description: 'Появились в 1930 году и действовали вплоть до 50-х годов. В структуру ИТЛ входило лагерное управление вместе с подчиненными ему лагерными отделениями, а также прочие объекты, составлявшие хозяйственную базу лагеря.',
      isActive: true,
      color: '204, 82, 20'
    }
  };

  const filterOnClick = () => {
    const filter = state.filter;
    filter.isActive = !filter.isActive;

    setState({ filter });
  }

  <div style={{backgroundColor: '#000'}}>
    <Filter 
      data={state.filter}
      onChange={filterOnClick}
    />
  </div>
```
