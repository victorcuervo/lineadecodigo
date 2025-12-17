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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZRWRBN5%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T054042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDC5V6GQtTwp9zxEkK8usKLP8toDn2Evnj%2BTtQzS9R0PAIgdbvmIFkflsKSzBr1HzsTBOxLuhjXcpx1MG4kj8Tqz%2FAq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDAoHtVm6NnrBeEPmECrcA7ZFf8wml9UTMn%2FL%2B4UxnpZ7Gau%2Bh%2FLrMkBGLkX%2BqczVjBXDa18e6toLUmXq8JaAOueMx3gcWd0oowI%2FXPDL8gEPiUkr4XSDTXxWPMFozQx0X3pQsFUjKwyvpO0Cy%2BIyCUfqAWA6csmBMNgubiGUAesJODIpWAGtOAXqzR2Tdjld6susdWnoKdvgpAp8BAPuoFINDTyXtoGQe38kgW9z4T0jFzet87cXYDr1ajHJVKDA6Lcu8kk3OXsxAbHaJCOQ0XSvxA2TNYfnd6mjYJUHeM9bZL8MFFFTKS8JrvrWlTC0B%2BBFbBCG3PUwYciHvG2eQNnfBN02I4KCRe9AL0VfsQszoJS2B9CGtxIQmrgjGm4OAQBJvm6csHilQyqUth%2F%2B6aBof7k4io1wRtOzHuCIvY3p0g7Vlbud2aKGKwhVtsVcQfdElqJOG4c7I750oGGNC2po6C6u7gyUdhoRqXdxxnnQBVXHOGnyZ9jEpgpMXu021rjbTjhKIexPFGfaoOOz8J4o7TKf2SXKspsZh2ZWs7hBmMqKbcQQNjDff5RC%2B3IBO46M65s3WZCuD83NomDST8QLPg3TXqFUUzhZ7w22Bh9OWD8Wk2KQ9RXx07Zo6wtCY6kFscfXGEcnf3iCMIqDicoGOqUBaNvyVriBwVK3heeLoG3rpJFgtCGTfzNONtFWXvoh2y3ekp99KSjz7XEH8FGJ36TAOk3DwHll7U6nvquJKTw4IFFx3YneKtpkqZ8W6kPT8dQxjGn27gKW%2BDAzhQMHs%2BboDcx7SlV3cpWud3KpTlrgGV8bKP3Zd%2BvPHF4mbSXWNG0UKkZDJjL%2FyND6gBVr5FvIxh7QTKubI6OZltvVtf9zbXe9dXEt&X-Amz-Signature=c0bf79b3cd18f139fbd288098c299d89978698865ebbd68aeedbfdc0a5d7af00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZRWRBN5%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T054042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDC5V6GQtTwp9zxEkK8usKLP8toDn2Evnj%2BTtQzS9R0PAIgdbvmIFkflsKSzBr1HzsTBOxLuhjXcpx1MG4kj8Tqz%2FAq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDAoHtVm6NnrBeEPmECrcA7ZFf8wml9UTMn%2FL%2B4UxnpZ7Gau%2Bh%2FLrMkBGLkX%2BqczVjBXDa18e6toLUmXq8JaAOueMx3gcWd0oowI%2FXPDL8gEPiUkr4XSDTXxWPMFozQx0X3pQsFUjKwyvpO0Cy%2BIyCUfqAWA6csmBMNgubiGUAesJODIpWAGtOAXqzR2Tdjld6susdWnoKdvgpAp8BAPuoFINDTyXtoGQe38kgW9z4T0jFzet87cXYDr1ajHJVKDA6Lcu8kk3OXsxAbHaJCOQ0XSvxA2TNYfnd6mjYJUHeM9bZL8MFFFTKS8JrvrWlTC0B%2BBFbBCG3PUwYciHvG2eQNnfBN02I4KCRe9AL0VfsQszoJS2B9CGtxIQmrgjGm4OAQBJvm6csHilQyqUth%2F%2B6aBof7k4io1wRtOzHuCIvY3p0g7Vlbud2aKGKwhVtsVcQfdElqJOG4c7I750oGGNC2po6C6u7gyUdhoRqXdxxnnQBVXHOGnyZ9jEpgpMXu021rjbTjhKIexPFGfaoOOz8J4o7TKf2SXKspsZh2ZWs7hBmMqKbcQQNjDff5RC%2B3IBO46M65s3WZCuD83NomDST8QLPg3TXqFUUzhZ7w22Bh9OWD8Wk2KQ9RXx07Zo6wtCY6kFscfXGEcnf3iCMIqDicoGOqUBaNvyVriBwVK3heeLoG3rpJFgtCGTfzNONtFWXvoh2y3ekp99KSjz7XEH8FGJ36TAOk3DwHll7U6nvquJKTw4IFFx3YneKtpkqZ8W6kPT8dQxjGn27gKW%2BDAzhQMHs%2BboDcx7SlV3cpWud3KpTlrgGV8bKP3Zd%2BvPHF4mbSXWNG0UKkZDJjL%2FyND6gBVr5FvIxh7QTKubI6OZltvVtf9zbXe9dXEt&X-Amz-Signature=baa633cde0b7321d109a564a453afa64135b88a381a5a3acc7280653d0cf0c7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
