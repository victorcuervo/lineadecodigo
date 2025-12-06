---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
slug: /css/redondear-bordes-con-css/
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDLTPDJ4%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T174617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPRgLJxUcpH8ubFivUmf%2FoE171OB2Cqbjy5%2BtRdNiAhAIhAN9Pd3y64M2r0nIavXVJIgXWdhx7zm0YKLh20rOVZrCHKv8DCHoQABoMNjM3NDIzMTgzODA1Igy2capHqoR8R6RGfqsq3ANFE3C1ZJTQeVG2xEDJiEgXAMSxMvywj0cOqiGCxrXVhh94gb9cGo2et3%2F2LW%2BPgIooFd%2B3TJtZIWHDur28EY3GVBsa8CoODqqxi5K8898x2iPIDLSy3hL3ufuZujIfOSeURJXAYeT6DCi%2FuNnspYIxPvsXjB0vnSBOswXIe3UV4601fnuRKWkHik%2FrkMWz%2B3w9ZV0AGg7SKlNjdNh6p4AWXajL%2BRKBfdaAUxGGgWFBeFoSBN2pv0uET8PiNEWM4RCc36w3G5ZArBELKvtNMLTpMx0rNhkol3v7gqB5%2F0AmSMILzSIsY8o5%2BnYFuDIkArWfkARblwlBv6%2FNFZiAfpFtuhlfRRQkVn6Cihv6Y5V%2FSXnyXeJpl%2Bx8pXxgvidMwl5tziQsLES9DXwrgWcISGA3SLolozSAdZKNKU02xBDj3tIqoq8OhEHAOKm4lA8Cu5bPhbD16KNfq2u6C2b%2FbuZXbrfBwLyrqjeICVYyq3SzPnZiqe19INRVVrmNOSe1PEpeeJXT2FENYIyUmMbynzc6iPsnSM%2BbWZfZi0erjRqmX45pYxl6R%2BG9oNXNIMtnGjgza0JpqLOJJ24QI4t9EQrVydc586u6IF9QDdRjITLel1dvWfu%2FPz97Moda0TDuxdHJBjqkASM%2BLqEUMgejxEBKQqH1WazbUyTX6xseP1U4Jc0nikY6DWMpYF7k0jDONOvSCMdkdT2h5W4o%2BqgBZa6b8wVLpmF2IDIFm3JUzcIBFrpG0QlYtyj%2Fv%2FapTZNKviwS2JRn0pTRa8LVg88a%2FhTVxqKw4E7Kw3CmC8j9cP85J8jm6bSKZf7HukxNzcCVES4PW8PjgUL0pDHADQ%2B%2B%2FRDhoGSpSpnZzcsM&X-Amz-Signature=45672454b7f01601e1b227ee0db50bd5a8815f27ccbbc309f4264b87db9f629a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDLTPDJ4%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T174617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPRgLJxUcpH8ubFivUmf%2FoE171OB2Cqbjy5%2BtRdNiAhAIhAN9Pd3y64M2r0nIavXVJIgXWdhx7zm0YKLh20rOVZrCHKv8DCHoQABoMNjM3NDIzMTgzODA1Igy2capHqoR8R6RGfqsq3ANFE3C1ZJTQeVG2xEDJiEgXAMSxMvywj0cOqiGCxrXVhh94gb9cGo2et3%2F2LW%2BPgIooFd%2B3TJtZIWHDur28EY3GVBsa8CoODqqxi5K8898x2iPIDLSy3hL3ufuZujIfOSeURJXAYeT6DCi%2FuNnspYIxPvsXjB0vnSBOswXIe3UV4601fnuRKWkHik%2FrkMWz%2B3w9ZV0AGg7SKlNjdNh6p4AWXajL%2BRKBfdaAUxGGgWFBeFoSBN2pv0uET8PiNEWM4RCc36w3G5ZArBELKvtNMLTpMx0rNhkol3v7gqB5%2F0AmSMILzSIsY8o5%2BnYFuDIkArWfkARblwlBv6%2FNFZiAfpFtuhlfRRQkVn6Cihv6Y5V%2FSXnyXeJpl%2Bx8pXxgvidMwl5tziQsLES9DXwrgWcISGA3SLolozSAdZKNKU02xBDj3tIqoq8OhEHAOKm4lA8Cu5bPhbD16KNfq2u6C2b%2FbuZXbrfBwLyrqjeICVYyq3SzPnZiqe19INRVVrmNOSe1PEpeeJXT2FENYIyUmMbynzc6iPsnSM%2BbWZfZi0erjRqmX45pYxl6R%2BG9oNXNIMtnGjgza0JpqLOJJ24QI4t9EQrVydc586u6IF9QDdRjITLel1dvWfu%2FPz97Moda0TDuxdHJBjqkASM%2BLqEUMgejxEBKQqH1WazbUyTX6xseP1U4Jc0nikY6DWMpYF7k0jDONOvSCMdkdT2h5W4o%2BqgBZa6b8wVLpmF2IDIFm3JUzcIBFrpG0QlYtyj%2Fv%2FapTZNKviwS2JRn0pTRa8LVg88a%2FhTVxqKw4E7Kw3CmC8j9cP85J8jm6bSKZf7HukxNzcCVES4PW8PjgUL0pDHADQ%2B%2B%2FRDhoGSpSpnZzcsM&X-Amz-Signature=7be548e330547a6f4effc6aed47933301bfc72c3cbf61ee46561e20b4e6f1b57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
