import React, { useEffect, useMemo, useRef, useState } from 'react'
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
  CircularProgress,
} from '@/lib/useClient/mui'
import { Clear, Search } from '@mui/icons-material'
import data from './DUMMY_BOOKS.json'
import { theme } from '@/assets/styles/theme'

const SearchBar = () => {
  const [enteredValue, setEnteredValue] = useState('')
  const [bookList, setBookList] = useState<Book[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [page, setPage] = useState(1)
  const observerTarget = useRef(null)

  const isFetched: boolean = bookList.length > 0

  //검색어 입력 시 state update,
  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredValue(e.target.value)
    debouncedFetchBooks()
  }

  //책 리스트 검색
  const fetchBooks = async () => {
    setIsLoading(true)

    //TODO:
    //1. enteredValue로 API 에서 검색 -> keyword, page req 넘겨주기
    const response = await fetch('')
    // const data = await response.json()

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
    setBookList(prevBookList => [...prevBookList, ...searchedBooks])
    setPage(prevPage => prevPage + 1)
    setIsLoading(false)
  }

  //책 리스트 무한스크롤 적용
  //TODO: api 연결 시 잘 작동하는지 매칭 필요
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          fetchBooks()
        }
      },
      { threshold: 1 },
    )

    if (observerTarget.current) {
      observer.observe(observerTarget.current)
    }

    return () => {
      if (observerTarget.current) {
        observer.unobserve(observerTarget.current)
      }
    }
  }, [observerTarget])

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
  const debouncedFetchBooks = useMemo(() => debounce(fetchBooks, 500), [])

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

  const searchBarBtn = isFetched ? (
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
      onClick={fetchBooks}
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
      {isFetched && (
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
          {isLoading && (
            <ListItem
              sx={{
                display: 'flex',
                alignContent: 'center',
                justifyContent: 'center',
                my: 2,
              }}
            >
              <CircularProgress sx={{ color: 'grey.light' }}></CircularProgress>
            </ListItem>
          )}
          <div ref={observerTarget}></div>
        </List>
      )}
    </ThemeProvider>
  )
}

export default SearchBar
