export interface Member {
  memberId?: string
  accessToken?: string
  memberNm?: string
  profileTxt?: string
  createDate?: Date
}

export type Book = {
  id: string
  isbn: string
  imgUrl: string
  title: string
  author: string
}
