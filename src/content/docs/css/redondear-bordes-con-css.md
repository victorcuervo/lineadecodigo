---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Gracias a [CSS3](https://www.manualweb.net/css/) podemos redondear los bordes de los elementos. Y es que para redondear bordes con [CSS3](https://www.manualweb.net/css/) utilizaremos la propiedad [`border-radius`](https://w3api.com/CSS/border-radius/).


La sintaxis general de la propiedad [`border-radius`](https://w3api.com/CSS/border-radius/) es la siguiente:


```css
border-radius: [tamaño|porcentaje];
```


De esta forma podemos indicar **el tamaño o porcentaje** en el que se redondeará cada una de las esquinas de la capa. El valor corresponde con el radio de la circunferencia trazada en la esquina.


Así, si utilizamos:


```css
border-radius: 15px;
```


Veremos el siguiente resultado:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HQ7VLGX%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T142353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIGKrO3FyUWZmWEfN4w3gOvwnu7vfmsskuj7R1Ub2F3W1AiEA124wvSh41e6vaFCAiogKBocvwnfhR0IsBim2jR8AzkUq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDHFsYbRS5wqwGt%2BCRSrcA3GjZfPV%2B0bqOQV56ADsOYPiwEV2GABOscjrBBrs3uQr8IULralXbHOYMpBWLYvarvNk6rb3iSBgBjEppwue9%2FpIchFtfHkjw%2BS%2FWL587962uxpOjLchkSXCFU6HmwAfpX7K5Yc11CqNBb1rC0VnOLcH9uQa6%2Fnz4JW%2Fwhu%2FcKztlRoyo5eeefX83ERgabIi4qQup9gI5%2BthD0chZmfQM3O1haAwDATY1FoGIGFg%2F4%2F48U%2Bz8B6F59PtCPnBhaE1W9cWTOLPcdiVKUBdyhpKvh1xBWezT02ZjrfyIFISnL1VjE7rL0WFOmdf4n1QrXlCcGRRYQyP75IfOaM7IUYrhUY7Q%2F82FoQtuSxq3WEaJmTeOG3NkZ3RTmY7bTtN9W07hIRbPjar7M8JQhIX7jR%2BVQQbM%2F8DjAxRv3%2BFfz5XF5IHsAWUdOkCEBW0THIKoOTmAvnO64M%2B3WC5pkmT8WAcYIz05Xoh13r1dxK8HwXJ9ccTjJ6ybyJcyoOS5BllRvGqjTjYZD888k5SjLWfbdwUzL%2FroCiCWsi4OXVmTLsYQaG15Q3mDEP6fqWfPa%2FeGzGhBSEuZkN2AYHZgmsg7mVV7tivMhzFsWUdFQLw3pLZfvEf3oMgV8384t82SpmmMNyhxskGOqUBwt%2BGJbmV9U2yzq7n%2BF%2FBUCUcuTUx50VBUUnl8PVv2%2Bx%2Fj%2FEqb44Tj%2FkpJ89eKQ33mgBumGQtFGoy5PrKFtBa3krjxkP4h5fbClURXSSxqoKvQ85qZBwpBcqnfLIwbk6wDLs2OgXAoXJMNQFSn2iI0jtEuarP3LRyYa6hmUSkwqDkIBDA9jBrcooKnenoVSkB4%2BxiFRBlWg3Od2hCbidhdPP2bPmU&X-Amz-Signature=43ede4dd7c583513b037b39c1ad246e7f47296be5542efde9c49b6505c8c213c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Podemos especificar un radio para cada una de las esquinas. En este caso se aplicará el orden de las agujas del reloj, empezado por la esquina superior izquierda, siguiendo por la esquina superior derecha, esquina inferior derecha y esquina inferior izquierda.


```css
border-radius: 5px 30px 45px 60px;
```


Si bien tenemos la capacidad de indicar el tamaño de cada de las esquinas por separado mediante las propiedades: border-top-left-radius, border-bottom-left-radius, border-top-right-radius y border-bottom-right-radius.


```css
border-top-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
border-bottom-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
border-top-right-radius: [tamaño|porcentaje] [tamaño|porcentaje];
border-bottom-right-radius: [tamaño|porcentaje] [tamaño|porcentaje;
```


Cuando identificamos los radios de las esquinas por separado podemos indicar de forma diferente los dos radios que conforman la esquina. Por ejemplo, podríamos modificar la esquina superior izquierda de la siguiente forma:


```css
border-top-left-radius: 400px 200px;
```


Y obtendremos el siguiente resultado:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HQ7VLGX%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T142353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIGKrO3FyUWZmWEfN4w3gOvwnu7vfmsskuj7R1Ub2F3W1AiEA124wvSh41e6vaFCAiogKBocvwnfhR0IsBim2jR8AzkUq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDHFsYbRS5wqwGt%2BCRSrcA3GjZfPV%2B0bqOQV56ADsOYPiwEV2GABOscjrBBrs3uQr8IULralXbHOYMpBWLYvarvNk6rb3iSBgBjEppwue9%2FpIchFtfHkjw%2BS%2FWL587962uxpOjLchkSXCFU6HmwAfpX7K5Yc11CqNBb1rC0VnOLcH9uQa6%2Fnz4JW%2Fwhu%2FcKztlRoyo5eeefX83ERgabIi4qQup9gI5%2BthD0chZmfQM3O1haAwDATY1FoGIGFg%2F4%2F48U%2Bz8B6F59PtCPnBhaE1W9cWTOLPcdiVKUBdyhpKvh1xBWezT02ZjrfyIFISnL1VjE7rL0WFOmdf4n1QrXlCcGRRYQyP75IfOaM7IUYrhUY7Q%2F82FoQtuSxq3WEaJmTeOG3NkZ3RTmY7bTtN9W07hIRbPjar7M8JQhIX7jR%2BVQQbM%2F8DjAxRv3%2BFfz5XF5IHsAWUdOkCEBW0THIKoOTmAvnO64M%2B3WC5pkmT8WAcYIz05Xoh13r1dxK8HwXJ9ccTjJ6ybyJcyoOS5BllRvGqjTjYZD888k5SjLWfbdwUzL%2FroCiCWsi4OXVmTLsYQaG15Q3mDEP6fqWfPa%2FeGzGhBSEuZkN2AYHZgmsg7mVV7tivMhzFsWUdFQLw3pLZfvEf3oMgV8384t82SpmmMNyhxskGOqUBwt%2BGJbmV9U2yzq7n%2BF%2FBUCUcuTUx50VBUUnl8PVv2%2Bx%2Fj%2FEqb44Tj%2FkpJ89eKQ33mgBumGQtFGoy5PrKFtBa3krjxkP4h5fbClURXSSxqoKvQ85qZBwpBcqnfLIwbk6wDLs2OgXAoXJMNQFSn2iI0jtEuarP3LRyYa6hmUSkwqDkIBDA9jBrcooKnenoVSkB4%2BxiFRBlWg3Od2hCbidhdPP2bPmU&X-Amz-Signature=b061d9a9bbf30229043aa082ab3939e6ce6514c6fcf1c67623532858821792f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Si queremos modificar los dos radios de todas las esquinas podemos utilizar la versión reducida de [`border-radius`](https://w3api.com/CSS/border-radius/):


```text
border-radius: [tamaño|porcentaje] {1,4} [tamaño|porcentaje] {1,4};
```


Por último tenemos que ser conscientes del soporte de la propiedad [`border-radius`](https://w3api.com/CSS/border-radius/) de [CSS3](https://www.manualweb.net/css/). Ya que no todos los navegadores van a poder ejecutarla. En esos casos, los bordes que hayamos redondeado no se verán.


La implementación de [`border-radius`](https://w3api.com/CSS/border-radius/) que hemos visto es la de la [W3C](https://w3.org/). Hay implementaciones propietarias en los motores de renderizado de los browsers. Este es el caso de [Mozilla Firefox](https://www.ayudaenlaweb.com/navegadores/que-es-firefox/). Dónde las propiedades para redondear los borders con [CSS](https://www.manualweb.net/css/) están especificadas como:


```css
-moz-border-radius: [tamaño|porcentaje];
-moz-border-top-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-moz-border-bottom-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-moz-border-top-right-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-moz-border-bottom-right-radius: [tamaño|porcentaje] [tamaño|porcentaje;
```


En el caso de Webkit (sería, por ejemplo, para versiones antiguas de [Safari](https://ayudaenlaweb.com/navegadores/que-es-safari/)) se soportaba mediante el prefijo `-webkit`:


```text
-webkit-border-radius: [tamaño|porcentaje];
-webkit-border-top-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-webkit-border-bottom-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-webkit-border-top-right-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-webkit-border-bottom-right-radius: [tamaño|porcentaje] [tamaño|porcentaje;
```


Por lo cual, si queremos buscar compatibilidad con nuestros ejemplos anteriores podemos poner lo siguiente:


```css
border-radius: 15px;
-moz-border-radius: 15px;
-webkit-border-radius: 15px;
```


```css
border-radius: 5px 30px 45px 60px;
-moz-border-radius: 5px 30px 45px 60px;
-webkit-border-radius: 15px;
```


```css
border-top-left-radius: 400px 200px;
-moz-border-top-left-radius: 400px 200px;
-webkit-border-radius: 15px;
```


Los navegadores a partir de los cuales se empezó a dar soporte a [`border-radius`](https://w3api.com/CSS/border-radius/) son:

- [Chrome](https://ayudaenlaweb.com/navegadores/que-es-chrome/) 0.2 (con -webkit) y [Chrome](https://ayudaenlaweb.com/navegadores/que-es-chrome/) 4.0 (con el estándar)
- [Opera](https://ayudaenlaweb.com/navegadores/que-es-opera/) 10.5
- [Safari](https://ayudaenlaweb.com/navegadores/que-es-safari/) 3.0 (con -webkit) y [Safari](https://ayudaenlaweb.com/navegadores/que-es-safari/) 5.0 (con el estándar)
- [Firefox](https://www.ayudaenlaweb.com/navegadores/que-es-firefox/) 1.0 (con -moz) y [Firefox](https://www.ayudaenlaweb.com/navegadores/que-es-firefox/) 4.0 (con el estándar)
- [Internet Explorer](https://ayudaenlaweb.com/navegadores/que-es-internet-explorer/) 9
