function getData(data) {
    

        return new Promise((resolve, reject) => {
            if (typeof data !== 'number') {
                reject('error');
            } else {
                setTimeout(() => {
                    if (data % 2 === 1) {
                        resolve('odd');
                    } else {
                        resolve('even');
                    }
                }, data % 2 === 1 ? 2000 : 4000);
            }
        });
    }

    module.exports = getData;

    


export default getData
