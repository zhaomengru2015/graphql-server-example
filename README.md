## Development

```
npm install
node index.js
```

## 参数式获取
```
query getBook($id: ID!){
  book(id: $id){
    author
    title
  }
}

```