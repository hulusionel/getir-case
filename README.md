# getir-case

This app provides RESTful API with single endpoint for "getir case study" app.

## How to install
### Clone repo and install dependencies
* $ git clone https://github.com/hulusionel/getir-case.git

`cd getir-case`

`npm install`

### Enviroment variables
Create a file named ".env" in the root directory and fill its contents as follows.
```ruby
db_connection = XXX
```

### Run the app
`npm start` 

`npm test` 

## Heroku -  post
https://getircase.herokuapp.com/find

You should request "post" to the api above with the required parameters.

* “startDate” and “endDate” fields will filter the data by createdAt field.

* Sum of the “count” array in the documents will be between “minCount” and “maxCount”.

### Example Request Payload

```jsx
{
  "startDate": "2016-01-26",
  "endDate": "2018-02-02",
  "minCount": 2700,
  "maxCount": 3000
}
```
### Example Response Payload
```jsx
{
  "code":0,
  "msg":"Success",
  "records":[
    {
    "key":"TAKwGc6Jr4i8Z487",
    "createdAt":"2017-01-28T01:22:14.398Z",
    "totalCount":2800
    },
    {
    "key":"NAeQ8eX7e5TEg7oH",
    "createdAt":"2017-01-27T08:19:14.135Z",
    "totalCount":2900
    }
  ]
}
```