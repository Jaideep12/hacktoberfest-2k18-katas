function checkDiv(n)
{
	var sum=0;
	var last=0;
	while(n!=0)
	{
		last=n%10;
		sum+=last;
		n=n/10;
	}
	//var res=Math.round(sum);
	var res=parseInt(sum);
	console.log(res);
	if(res%3==0)
		console.log("Divisible");
	else
		console.log("Not divisible");
}