const AWS = require('aws-sdk');
const sharp = require('sharp');

/**
 * 
 * @param {*} event 
 * @returns Promise
 */
function getContent(event) {
  return new Promise(r => {
    const bucket = event.Records[0].s3.bucket.name;
    const key = event.Records[0].s3.object.key;
    const region = event.Records[0].awsRegion;
  
    const s3 = new AWS.S3({
      region: region
    });
  
    s3.getObject({
      Bucket: bucket,
      Key: key
    }).promise().then(function(response) {
      r(response.Body);
    }).catch(function() {
      console.log(arguments);
    })
  });
}

exports.handler = async function(event) {
  console.log('Event is ' + JSON.stringify(event));
  
  // const content = await getContent(event);
  // const transformed = transform(content);
};