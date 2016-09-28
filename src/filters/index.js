// 过滤器
export const timeFormat = (time) =>{
	const t = time*1
	const oDate=new Date(t);
	//2011-09-08 16:37:60;
	const arr=[
		oDate.getFullYear(),'-',
		filZero(oDate.getMonth()+1),'-',
		filZero(oDate.getDate()),' ',
		filZero(oDate.getHours()),':',
		filZero(oDate.getMinutes()),':',
		filZero(oDate.getSeconds())

	]

	function filZero(num){
		return num>10? num : '0'+num
	}
	return arr.join('');
}

export const spliceIntro = (txt, num) => {
	const len = txt.length;
	const text = len>num ? txt.substring(0,num) : txt;

	return text + '......'
}