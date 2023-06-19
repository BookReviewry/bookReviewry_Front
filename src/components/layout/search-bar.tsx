import React, { useMemo, useState } from 'react'
import { Paper, InputBase, IconButton, debounce } from '@/lib/useClient/mui'
import { Search } from '@mui/icons-material'

const SearchBar = () => {
  const [enteredValue, setEnteredValue] = useState('')

  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredValue(e.target.value)
    searchBookList()
  }

  //디바운싱 처리 + useMemo()로 함수 메모이제이션
  const debouncedOnChangeValue = useMemo(() => debounce(onChangeValue, 500), [])

  const searchBookList = () => {
    //TODO:
    //1. enteredValue로 API 에서 검색
    //2. API에서 받아온 데이터로 검색 리스트 보여주기
  }

  return (
    <Paper
      component='form'
      sx={{
        p: '2px 4px',
        position: 'fixed',
        left: 250,
        top: 30,
        display: 'flex',
        alignItems: 'center',
        width: 400,
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder='Search Keyword'
        inputProps={{ 'aria-label': 'search' }}
        onChange={debouncedOnChangeValue}
      />
      <IconButton
        type='button'
        sx={{ p: '10px' }}
        aria-label='search'
        onClick={searchBookList}
      >
        <Search />
      </IconButton>
    </Paper>
  )
}

export default SearchBar
