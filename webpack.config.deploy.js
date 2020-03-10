const merge = require('webpack-merge');

const S3Plugin = require('webpack-s3-plugin');
const AWS = require('aws-sdk');

const prod = require('./webpack.config.prod.js');

module.exports = merge(prod, {
  mode: 'production',
  optimization: {
    minimize: true,
  },
  plugins: [
    new S3Plugin({
      include: /.*/,
      s3Options: {
        credentials: new AWS.SharedIniFileCredentials({profile: 'default'}),
        region: 'eu-west-1'
      },
      s3UploadOptions: {
        Bucket: 'api-docs.notifica.re'
      },
      cloudfrontInvalidateOptions: {
        DistributionId: process.env.CLOUDFRONT_DISTRIBUTION_ID,
        Items: ["/*"]
      }
    })
  ],
});
