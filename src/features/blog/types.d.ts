declare interface Post {
  id: string;
  title: string;
  content: string;
  createDate: string;
}

declare namespace PostApi {
  interface PostRequest {
    title: string;
    content: string;
  }
  interface PostId {
    id: string;
  }
}
