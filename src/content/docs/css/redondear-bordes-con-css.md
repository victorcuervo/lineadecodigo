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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SEN2ED6%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T090254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQD%2FvbhHvTkG9%2B8mbNvyf9YUFey%2B1XqBgAyCKVg9s08xLwIgMiu3NwPw6YieOxU5M8GZkgynQyy7ngPhOZaMIG4EuW0q%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDOrsdl9BUeTCbRLb%2BCrcA8Qe%2BRxP4Si5W45kJyRi9VjVcibBaQwEKwZ7OJSRx3%2BZ%2Fjc9xxgpheST%2FcvSrXjV87oikRPDWnjGzmJ0zoQ%2B5eutv6GAObN9HKw9bxLKabWDVY7wo%2BZg%2B1GQsajdu401athU0%2FzTadaO77u58xVe1EfV6%2B9U%2FlhGMUACVPhquHrBuWHTeJpEDuDm%2BdyqVl73ovrS5T2HZuXI7fNe6oFjen3MqJsnboqnqTQcJ4UcSJO3YdX%2BAUIUPpbBWXAej9E8k%2FXNR3ZTHBI4kGlU5GCLw%2F7dfPsgIjueKSm%2FjE1x697bcBKAFBS2I7FkV3qtydEC3jchwiMbHqUhmv2le6ePBDX2r9vdHHfKhIIFcjSyi29dH2DlVtPEIVnubolFUVlkxBVy%2FqR5OJ66XaFxs6FL5gAYToOnVtiNnLyA4tqHEN79CXUKjoQrfmsWk11g6wh07xoQhco8w83rO5IozLPG5ZLDo3OOpQV4ix5Hn2TEJGCJ%2F%2FOIUOUGrCP1%2BTqLppToxk8tXGunbLHCYqxHpvDf63H%2Fgen1lWSN1aR6zhiJopU3g5PPmxxcjmKEXE9Efi6nArxCotb5fFNA2FW1pwtVyyvWj9Yoq%2FeqJYaeSTkBney5%2F9yceRTPJP%2FBdfxFMJWGxckGOqUBUqWwghajA2eGN%2BqFSNBn9RuTCJNmbenO2GoOnT04uCqru97Zf7Dokp17oLReL43re4KApBcO79Brt1RoVpuxK1rSKx5uPyAw3oq6QOd%2FhfWS1bLi85rqvwQbW0CZan4F5MCzatvt5%2BnTEKsMW6idrQIoLp153Vf9byE1P7nyvOm7LAXMSZ%2FW81MJ4c7naX5%2ByoYYdOWA6Xm78qDhkoy0ujSRGecR&X-Amz-Signature=678797c18b5ba399d1ab24db62f16b8fd2911d0322bd6ba3d07725cddf0bc492&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SEN2ED6%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T090254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQD%2FvbhHvTkG9%2B8mbNvyf9YUFey%2B1XqBgAyCKVg9s08xLwIgMiu3NwPw6YieOxU5M8GZkgynQyy7ngPhOZaMIG4EuW0q%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDOrsdl9BUeTCbRLb%2BCrcA8Qe%2BRxP4Si5W45kJyRi9VjVcibBaQwEKwZ7OJSRx3%2BZ%2Fjc9xxgpheST%2FcvSrXjV87oikRPDWnjGzmJ0zoQ%2B5eutv6GAObN9HKw9bxLKabWDVY7wo%2BZg%2B1GQsajdu401athU0%2FzTadaO77u58xVe1EfV6%2B9U%2FlhGMUACVPhquHrBuWHTeJpEDuDm%2BdyqVl73ovrS5T2HZuXI7fNe6oFjen3MqJsnboqnqTQcJ4UcSJO3YdX%2BAUIUPpbBWXAej9E8k%2FXNR3ZTHBI4kGlU5GCLw%2F7dfPsgIjueKSm%2FjE1x697bcBKAFBS2I7FkV3qtydEC3jchwiMbHqUhmv2le6ePBDX2r9vdHHfKhIIFcjSyi29dH2DlVtPEIVnubolFUVlkxBVy%2FqR5OJ66XaFxs6FL5gAYToOnVtiNnLyA4tqHEN79CXUKjoQrfmsWk11g6wh07xoQhco8w83rO5IozLPG5ZLDo3OOpQV4ix5Hn2TEJGCJ%2F%2FOIUOUGrCP1%2BTqLppToxk8tXGunbLHCYqxHpvDf63H%2Fgen1lWSN1aR6zhiJopU3g5PPmxxcjmKEXE9Efi6nArxCotb5fFNA2FW1pwtVyyvWj9Yoq%2FeqJYaeSTkBney5%2F9yceRTPJP%2FBdfxFMJWGxckGOqUBUqWwghajA2eGN%2BqFSNBn9RuTCJNmbenO2GoOnT04uCqru97Zf7Dokp17oLReL43re4KApBcO79Brt1RoVpuxK1rSKx5uPyAw3oq6QOd%2FhfWS1bLi85rqvwQbW0CZan4F5MCzatvt5%2BnTEKsMW6idrQIoLp153Vf9byE1P7nyvOm7LAXMSZ%2FW81MJ4c7naX5%2ByoYYdOWA6Xm78qDhkoy0ujSRGecR&X-Amz-Signature=2098e11003eb930258401c0247d2d47532358fc7247dc73019033012d3ecac4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
