---
title: "Gestionando el TimeOut de sesión en ASP"
description: "Gestionando el TimeOut de sesión en ASP permite establecer y forzar el tiempo de sesión del usuario en la web."
date: 2010-03-26
updatedDate: 2026-01-07
tags: ["session","timeout","abandon","response","write"]
slug: asp/sesion/gestionando-el-timeout-de-sesion-en-asp
author: Víctor Cuervo
type: doc
topic: asp
id: 73860b07-9d6c-4375-8599-3659cdc0a520
download: https://github.com/victorcuervo/lineadecodigo_asp/blob/master/usuarios/time-out-sesion.asp
---

Una vez que un usuario se ha conectado a nuestra página web se establece una sesión. Durante todo el tiempo que el usuario se encuentre conectado podemos tener la necesidad de almacenar cierta información en su sesión. Toda esta gestión la podemos realizar mediante el objeto `Session`. 


Cuando el usuario abandona la web, la sesión no es destruida, sino que es eliminada cuando ha transcurrido el tiempo demarcado como tiempo de sesión en el servidor web. Si bien, podemos gestionar la sesión de dos formas.


La primera es estableciendo en la página un tiempo de sesión diferente al del servidor. Para ello utilizamos el atributo `TimeOut` del objeto `Session`. El valor que se le asigna será en minutos como se muestra a continuación:


```javascript
<%
Session.Timeout = 30
%>
```


Pero esta propiedad también es consultiva. Es decir, que podemos ver qué valor tiene el servidor por defecto establecido como timeout de sesión.


```javascript
<%
Response.Write("El tiempo de sesión es: " & Session.Timeout)
%>
```


La segunda forma es más directa y es que con ella podemos forzar el abandono de la sesión directamente. Esto lo conseguimos con el método `Abandon` del objeto `Session`.


```javascript
<%
Session.Abandon
%>
```


Este método lo que hace es borrar toda la información relativa a la sesión del usuario que lo ha ejecutado. Si el usuario, después de haber ejecutado un método `Abandon`, navegase a otra página volvería a crear una nueva sesión.

