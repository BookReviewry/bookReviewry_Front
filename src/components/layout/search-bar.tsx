import React, { useMemo, useState } from 'react'
import {
  Paper,
  InputBase,
  IconButton,
  debounce,
  List,
  ListItem,
  ListItemText,
  Typography,
  ImageListItem,
  ThemeProvider,
} from '@/lib/useClient/mui'
import { Clear, Search } from '@mui/icons-material'
import data from './DUMMY_BOOKS.json'
import { theme } from '@/assets/styles/theme'

const SearchBar = () => {
  const [enteredValue, setEnteredValue] = useState('')
  const [bookList, setBookList] = useState<Book[]>([])

  //검색어 입력 시 state update,
  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredValue(e.target.value)
    debouncedSearchBooks()
  }

  //책 리스트 검색
  const searchBooks = () => {
    //TODO:
    //1. enteredValue로 API 에서 검색
    const response = fetch('')

    //2. JSON object convert to list
    const searchedBooks: Book[] = []
    for (const key in data) {
      searchedBooks.push({
        id: key,
        isbn: data[key].isbn,
        imgUrl: data[key].imgUrl,
        title: data[key].title,
        author: data[key].author,
      })
    }
    setBookList(searchedBooks)
  }

  //book list, search input 초기화
  const clearBooks = () => {
    setBookList([])
    setEnteredValue('')
  }

  //TODO: 책 디테일 오픈
  const openBookDetail = (isbn: string) => {
    //전달받은 isbn으로 북 디테일 API 조회
    console.log(isbn)
  }

  //디바운싱 처리 + useMemo()로 함수 메모이제이션
  const debouncedSearchBooks = useMemo(() => debounce(searchBooks, 500), [])

  const searchedBookList = bookList.map(book => (
    <ListItem
      id={book.isbn}
      alignItems='flex-start'
      sx={{
        width: '100%',
        height: '100%',
      }}
      onClick={() => openBookDetail(book.isbn)}
    >
      <ImageListItem key={book.id} sx={{ mr: 4 }}>
        <img src={book.imgUrl} alt={book.title} style={{ height: 100 }} />
      </ImageListItem>
      <ListItemText
        primary={book.title}
        secondary={
          <React.Fragment>
            <Typography
              sx={{ display: 'inline' }}
              component='span'
              variant='body2'
              color='text.primary'
            >
              {book.author}
            </Typography>
          </React.Fragment>
        }
      />
    </ListItem>
  ))

  const searchBarBtn =
    bookList.length > 0 ? (
      <IconButton
        type='button'
        sx={{ p: '10px' }}
        aria-label='search'
        onClick={clearBooks}
      >
        <Clear />
      </IconButton>
    ) : (
      <IconButton
        type='button'
        sx={{ p: '10px' }}
        aria-label='search'
        onClick={searchBooks}
      >
        <Search />
      </IconButton>
    )

  return (
    <ThemeProvider theme={theme}>
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
          onChange={onChangeValue}
          value={enteredValue}
        />
        {searchBarBtn}
      </Paper>
      {bookList.length > 0 && (
        <List
          sx={{
            position: 'fixed',
            left: 250,
            top: 80,
            width: '100%',
            maxWidth: 800,
            maxHeight: 400,
            overflow: 'auto',
            bgcolor: 'background.paper',
            mt: '0',
            border: 1,
            borderColor: 'grey.light',
            '& .MuiListItem-root:hover': {
              bgcolor: 'primary.light',
              cursor: 'pointer',
            },
          }}
        >
          {searchedBookList}
        </List>
      )}
    </ThemeProvider>
  )
}

export default SearchBar
