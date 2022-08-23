module.exports = ({ env }) => ({
  // Forms / Email Stuff
  email: {
    config: {
      provider: "sendgrid", // For community providers pass the full package name (e.g. provider: 'strapi-provider-email-mandrill')
      providerOptions: {
        apiKey: env("SENDGRID_API_KEY"),
      },
      settings: {
        defaultFrom: env("SENDGRID_EMAIL_FROM") || "wdteam@civiconnect.ca",
        defaultReplyTo: env("SENDGRID_EMAIL_REPLY") || "wdteam@civiconnect.ca",
        testAddress: env("SENDGRID_EMAIL_TEST") || "wdteam@civiconnect.ca",
      },
    },
  },
  ezforms: {
    config: {
      captchaProvider: {
        name: "none",
      },
      notificationProviders: [
        {
          name: "email",
          enabled: true,
          config: {
            subject: "Form Submitted",
            from: env("SENDGRID_EMAIL_FROM") || "wdteam@civiconnect.ca",
          },
        },
      ],
    },
  },
  // S3 Buckets
  upload: {
    config: {
      provider: "aws-s3",
      providerOptions: {
        accessKeyId: env("AWS_ACCESS_KEY_ID"),
        secretAccessKey: env("AWS_ACCESS_SECRET"),
        region: env("AWS_REGION"),
        params: {
          Bucket: env("AWS_BUCKET"),
        },
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
});
