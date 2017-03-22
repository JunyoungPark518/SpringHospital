function goPage(path,action,page) {
	location.href = path + '?action=' + action + '&page=' + page;
}
function goList(path,action,page,pageNo) {
	location.href = path + '?action=' + action + '&page=' + page + '$pageNo=' + pageNo;
}
function goBoardPage(pageNo) {
	location.href = 'board.do?action=list&page=articleList&pageNo=' + pageNo;
}
