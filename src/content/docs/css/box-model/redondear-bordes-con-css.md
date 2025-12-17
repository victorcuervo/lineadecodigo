---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2025-12-17
slug: css/redondear-bordes-con-css
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KHMZVLF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T145417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCIOC04Ayrj2BsStsy5iFJJJwudGDGjCKNVoYcaL1XMOwIhAPLuBPH6O6BwTPwMTbl%2BtCOJP%2BkxI9VhHW8eig8cQh9bKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxLQoz997KtaQxHN94q3AMruOybVpEWipCtuYXVXrLLJTCMWTFjb8ER%2BOHzTf13uPRpP0mOtlmwo90QHulJjrcwDCg3qOERzNTOtsuQaVLeZrOkIYCDG5sm1EY2LeAvNtSv%2Ba6U%2BXdcXTN2gJSWsdoRuGrFnrfKPte71N7lUblhIsLvUfWkdidfviSDTs1oIT3j1yD9V4H48zOjkykHUb1edd%2BzhanEE%2FJ10FaIe939skBGeBYm94ex9PuA7Hc64XaaQvfid%2BSnQxgXmwIP9oItGotYJuCPeJD9WTz76T9fjWeTXer7UvKigTBaNKNIEsdZKwVmdMNJD7Rsvxg6BwYQZKa4sqpUW17%2FFNdvSK%2F4RUWFJZzvkIemlYNPPTEZcRiDo4nH0jaZu2WcBFiajcoFURqeBixb3h7KRygi8bHrkQR4fJqtQEf9r2GYKwjFVWRL6BRfzRf1J%2FLED5%2FIli2o4Dx1Oy35OqCPvIUOh5FibolRGNErujJcpBsOKnYterit1NKEA44YzUtjwwjLZz4v05CMBoC0EijT7M4If16gR7UJkFjgUUSaXyPJYtroUy%2Fe2GrH4wsXWWzamzkXXcQoP0xLODPTMcgrZcrMiES3oAjPzR99KhWcSDFBkwzVdQdOvsEBoRRdiDXkMjC0gYvKBjqkAWmsA9oQ2MLwcDdQLivqVTjmf1gyjfojDJypk0u0cHqLO%2Fb4DaXfu%2FX9xVxUzR0UiRnz3Jt6EiNmg%2BHKgRiqL9aOYElZ0JDW7m%2BYWpfTRDRojvDc0IzUWzW3TAiKcX6OufcV%2FO%2Fd7FJ3jM5MT4TI3m8XdRYUExzqqEZi4RrXbYPYnce2iFKUbv8N8QTxe%2ByP7ER8u%2Bi4owhUQKTqaCdO99CGHjlU&X-Amz-Signature=294cf1497c5532f0f94b3bbb1b98e853142801e10bfe9cf0daaba7751cc53d08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KHMZVLF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T145417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCIOC04Ayrj2BsStsy5iFJJJwudGDGjCKNVoYcaL1XMOwIhAPLuBPH6O6BwTPwMTbl%2BtCOJP%2BkxI9VhHW8eig8cQh9bKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxLQoz997KtaQxHN94q3AMruOybVpEWipCtuYXVXrLLJTCMWTFjb8ER%2BOHzTf13uPRpP0mOtlmwo90QHulJjrcwDCg3qOERzNTOtsuQaVLeZrOkIYCDG5sm1EY2LeAvNtSv%2Ba6U%2BXdcXTN2gJSWsdoRuGrFnrfKPte71N7lUblhIsLvUfWkdidfviSDTs1oIT3j1yD9V4H48zOjkykHUb1edd%2BzhanEE%2FJ10FaIe939skBGeBYm94ex9PuA7Hc64XaaQvfid%2BSnQxgXmwIP9oItGotYJuCPeJD9WTz76T9fjWeTXer7UvKigTBaNKNIEsdZKwVmdMNJD7Rsvxg6BwYQZKa4sqpUW17%2FFNdvSK%2F4RUWFJZzvkIemlYNPPTEZcRiDo4nH0jaZu2WcBFiajcoFURqeBixb3h7KRygi8bHrkQR4fJqtQEf9r2GYKwjFVWRL6BRfzRf1J%2FLED5%2FIli2o4Dx1Oy35OqCPvIUOh5FibolRGNErujJcpBsOKnYterit1NKEA44YzUtjwwjLZz4v05CMBoC0EijT7M4If16gR7UJkFjgUUSaXyPJYtroUy%2Fe2GrH4wsXWWzamzkXXcQoP0xLODPTMcgrZcrMiES3oAjPzR99KhWcSDFBkwzVdQdOvsEBoRRdiDXkMjC0gYvKBjqkAWmsA9oQ2MLwcDdQLivqVTjmf1gyjfojDJypk0u0cHqLO%2Fb4DaXfu%2FX9xVxUzR0UiRnz3Jt6EiNmg%2BHKgRiqL9aOYElZ0JDW7m%2BYWpfTRDRojvDc0IzUWzW3TAiKcX6OufcV%2FO%2Fd7FJ3jM5MT4TI3m8XdRYUExzqqEZi4RrXbYPYnce2iFKUbv8N8QTxe%2ByP7ER8u%2Bi4owhUQKTqaCdO99CGHjlU&X-Amz-Signature=b3a167a407e7de0683a4ef5ad038f2ade99b843effee66095613808bf2ed8f55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Si queremos modificar los dos radios de todas las esquinas podemos utilizar la versión reducida de [`border-radius`](https://w3api.com/CSS/border-radius/):


```css
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


```css
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
