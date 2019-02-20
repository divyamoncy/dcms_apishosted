var config = {
    'development': {
        mysql: {
            url: 'mysql://jfs05joozh6ed38s:iov4xhon4tlfv73k@onnjomlc4vqc55fw.chr7pe7iynqr.eu-west-1.rds.amazonaws.com:3306/tlp2qtt7fp6qfphm',
            username: 'jfs05joozh6ed38s',
            password: 'iov4xhon4tlfv73k',
            database:'tlp2qtt7fp6qfphm',
            host:'onnjomlc4vqc55fw.chr7pe7iynqr.eu-west-1.rds.amazonaws.com',
            port:3306
        },
        firebase: {
            databaseURL: "https://dhwani-54eb7.firebaseio.com"
        }
    },
    'production': {
      mysql: {
        url: 'mysql://jfs05joozh6ed38s:iov4xhon4tlfv73k@onnjomlc4vqc55fw.chr7pe7iynqr.eu-west-1.rds.amazonaws.com:3306/tlp2qtt7fp6qfphm',
        username: 'jfs05joozh6ed38s',
        password: 'iov4xhon4tlfv73k',
        database:'tlp2qtt7fp6qfphm',
        host:'onnjomlc4vqc55fw.chr7pe7iynqr.eu-west-1.rds.amazonaws.com',
            port:3306
        },
        firebase: {
            databaseURL: "https://dhwani-54eb7.firebaseio.com"
        }
    }
  }
  var env = process.env.NODE_ENV || "development";
  module.exports = function(mode) {
    return config[mode || env]
  }