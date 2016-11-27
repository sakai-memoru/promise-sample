// promise object
function pGetNumberAsync(num){
	return new Promise(
		// function
		function (resolve, reject){
			// 非同期処理
			getNumberAsync(resolve,reject,num);
		}
	);
}

// flow scriting
// function main_flow(){
// 	var inputNum = parseInt(Math.random() * 10);
// 	pGetNumberAsync(inputNum).then(
// 		// success時の処理
// 		function(result){
// 			console.log('result=', + result);
// 		})
// 	.catch(
// 		// failure時の処理
// 		function(err){
// 			console.dir(err);
// 		}
// 	);
// }

// 非同期処理
function getNumberAsync(resolve,reject,num){
	setTimeout(function(){
		var result = num;
		if(result % 2 === 0){
			resolve(result); //
		} else {
			err = new Error('not odd error : result= ' + result);
			reject(err);
		}
	},500);
};

module.exports = pGetNumberAsync;

// debug
// main_flow();
