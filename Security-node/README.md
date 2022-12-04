Get updated with OWASP it will help you look new security issue people are faceing

1. Check Cross site script in your code and prevent it to happend
2. add captia or DOS check on client and server to pervent multiple unwant request multiple time (user express-rate-limit)
3. try to follow proper convetion of data to pervent server side injection
4. Add validation on data on input feild before send data to server to save time and make application faster
5. Helmet is one of the best way to secure you header in nodejs
6. user Encryption on data sending between client and server to encrytion or user token, encrption and other thing to help you.
7. Avoid localStorage to store sensitive data on browser because it remain there if you leave the page better to use session tab close data lose so no one else can access it
8. Try to move to https as soon as possible to make your application more secure
9. CSFR cross site vernable attacted to take user to some verniable website, CSFR on your api help to protect from it

```
https://www.npmjs.com/package/@types/csurf
```

10. do set following attribute in cookies and seesion

- Secure : only through HTTPS (it will send cookies if request in https)
- httpOnly: pervent cookies to access in Javascript
- Domain : set specifiv path to which cookies will access
- expireData : on which cookies will expire.

11. Check denpendency check Owasp
12. For vulnerablitiies check snyk

13. Authentication Issue
14. Access Control on Server
