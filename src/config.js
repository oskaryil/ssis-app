const config = {
  apiUrl: `http://ssis.nu:4444/api`,
  segment: {
    iosWriteKey: '697mIXeyQUqjEbFJEYS8yrzhn1UzjcL4',
    androidWriteKey: 'MstMxEXp0ZeSB8Kn8uNe4WEwVkzYkZ0o'
  }
  // process.env.NODE_ENV === 'production'
  //   ? `http://ssis.nu:4444/api`
  //   : `http://192.168.1.246:4000/api`
};

export default config;
