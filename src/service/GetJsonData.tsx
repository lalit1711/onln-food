class GetDataJson {
  post(url: any, body: any) {
    return new Promise((resolve, reject) => {
      try {
        fetch(url, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify(body)
        })
          .then(res => res.json())
          .then(result => {
            resolve(result);
          });
      } catch (err) {
        reject(err);
      }
    });
  }

  get(url: any) {
    return new Promise((resolve, reject) => {
      try {
        fetch(url)
          .then(res => res.json())
          .then(result => {
            return result;
          });
      } catch (err) {
        reject(err);
      }
    });
  }
}

export default GetDataJson;
