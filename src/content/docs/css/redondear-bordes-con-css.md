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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROLFGLOY%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T152724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDog5FHEaL4Y2S%2FkcNFuXFjTRF4VivCihg8fkayEDFtJQIhAMZrfJ4lGAKTa482qC7pSVQpIMo%2FyuBaykg4u8KtcHVCKv8DCF4QABoMNjM3NDIzMTgzODA1Igwsc0WHnHjBvFlKDSQq3AMc2bwpEm0zrmjUyKTjOQcRBjlZkaU0f8IYF16taFCPtLTkddLoyUgr6jto4sWHBKBLWhFjgSgfr%2BHCIo0kfNVpDF%2BWg7PMPNgEm8%2BYgdjS1kgCmIQNbNjNVETh7%2Ff7hT6PUNOrjsEAOmWPpG1HbNu45eOYqSdRvuv1W3aeILhMZX08bonOT9UIwflBtR8MFv7NjYPrcEELgM1hXMoywCIk6ahz0i759jhWqUkZcAqb8bl0IA8K9xjqEUx8fC4tmVMlP%2FkoecL7xNHdHnK84MpsJmihd1fWBJGK4hT0HU9rK6AnPZmrF6BVQiAnlbPmXZmmc11WVDfPIoJ8PasJtq8abxl%2B3PZpCja%2BIpLWeEGwG%2FDK%2FkWs2%2BFcs%2B0BOGx3rKHpe08K4Joh%2B3EJEidCiXE7FGJcXqTzxewmV1AV3uEb6cDpDfvf8n0hZzR5k6uXZEkyFK%2BszVlsFGJN9TBTbgcxHAWY9%2BBDNpsQOOC%2B3iK8sLu3F5R0wVXdBWhESgufUjTNgXJVsE%2BCvACcorAwRHAFy41SN5%2BQxlH6iEV3PzuJtQdCssSjvSJRxRt2bE%2BS%2FZp78MzQurAXlAjJ8I6s3FqEyxC6qEsS%2FU8eyi%2Bojhat8X3%2FlGoHEWmzbQXTUjDRssvJBjqkAfpZplk%2BDtvgdqoMvQAYyrUm8cGJwKMj2d6HpURhsKj9yzeiXyhsJY5%2B5puUbkURM1Y7L7a1AYQrzlW4EnkyxnyvX3WBmkOHmWinNO4Vr2Exj2%2F7MykI%2F4kV5w61uuUqj%2FM5V9X5jRPz6rTSrhM2VIQdmJ0g0BODk0nVKrXeIIYw90cHbMcYPFE4rmKfkqskSM6ETl53mwSYIjSnI2SvRW10wpU2&X-Amz-Signature=0fdfb6c92b1f8f6b0cd2e44d01c2339fbdf94027b7943609844351b414005716&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROLFGLOY%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T152724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDog5FHEaL4Y2S%2FkcNFuXFjTRF4VivCihg8fkayEDFtJQIhAMZrfJ4lGAKTa482qC7pSVQpIMo%2FyuBaykg4u8KtcHVCKv8DCF4QABoMNjM3NDIzMTgzODA1Igwsc0WHnHjBvFlKDSQq3AMc2bwpEm0zrmjUyKTjOQcRBjlZkaU0f8IYF16taFCPtLTkddLoyUgr6jto4sWHBKBLWhFjgSgfr%2BHCIo0kfNVpDF%2BWg7PMPNgEm8%2BYgdjS1kgCmIQNbNjNVETh7%2Ff7hT6PUNOrjsEAOmWPpG1HbNu45eOYqSdRvuv1W3aeILhMZX08bonOT9UIwflBtR8MFv7NjYPrcEELgM1hXMoywCIk6ahz0i759jhWqUkZcAqb8bl0IA8K9xjqEUx8fC4tmVMlP%2FkoecL7xNHdHnK84MpsJmihd1fWBJGK4hT0HU9rK6AnPZmrF6BVQiAnlbPmXZmmc11WVDfPIoJ8PasJtq8abxl%2B3PZpCja%2BIpLWeEGwG%2FDK%2FkWs2%2BFcs%2B0BOGx3rKHpe08K4Joh%2B3EJEidCiXE7FGJcXqTzxewmV1AV3uEb6cDpDfvf8n0hZzR5k6uXZEkyFK%2BszVlsFGJN9TBTbgcxHAWY9%2BBDNpsQOOC%2B3iK8sLu3F5R0wVXdBWhESgufUjTNgXJVsE%2BCvACcorAwRHAFy41SN5%2BQxlH6iEV3PzuJtQdCssSjvSJRxRt2bE%2BS%2FZp78MzQurAXlAjJ8I6s3FqEyxC6qEsS%2FU8eyi%2Bojhat8X3%2FlGoHEWmzbQXTUjDRssvJBjqkAfpZplk%2BDtvgdqoMvQAYyrUm8cGJwKMj2d6HpURhsKj9yzeiXyhsJY5%2B5puUbkURM1Y7L7a1AYQrzlW4EnkyxnyvX3WBmkOHmWinNO4Vr2Exj2%2F7MykI%2F4kV5w61uuUqj%2FM5V9X5jRPz6rTSrhM2VIQdmJ0g0BODk0nVKrXeIIYw90cHbMcYPFE4rmKfkqskSM6ETl53mwSYIjSnI2SvRW10wpU2&X-Amz-Signature=5003d47ee6db609bc4b3f7688970df435f21c3cb7feb42af486035c8095a47da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
