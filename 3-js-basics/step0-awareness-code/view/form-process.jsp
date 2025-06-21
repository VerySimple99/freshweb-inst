<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>jsp demo</title>
</head>
<body bgcolor="yellow">
 요청을 처리하는 서버 프로그램입니다 <br>
 닉네임 : <%=request.getParameter("nickName") %> <br><br>
 점심메뉴 : 
 <% 
       String menu[]=request.getParameterValues("food"); 
  	   for(int i=0;i<menu.length;i++){	
  %>
  		<%=menu[i] %> &nbsp;
 <%  
 		}    
 %>
</body>
</html>











