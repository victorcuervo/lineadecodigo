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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEWG3B45%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T050448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDKYTyQrruzUjml6vuAohiVKZ0siG%2F9ojFnk9T8RIQlUAiAa7E81p7e4Ap2J0%2B9S%2B2uiAkwgDnBAZdgA3R6z4yor9ir%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMh9PUXr%2Fg8u4Kggr4KtwDB%2FmmVmduZDXD6Ff5afw2O0ekYtH44P8OHyYy3q83kKYuqaXEuobeL8TdROaQsYH34RJwFbIYai5%2FZEn6%2BpGokmSQOMgsbA9rimJFfR%2FtK4apD6WeIA4yVKgw0mW6qH%2FRhcSyEvihAOp7p4fg%2F%2FMMPolVc5Ndyg%2FMnxPLWGDva6KYI4HkbYKPdvuENPVZdufK5wN522zN%2B1dPZeQVNtEgcgiVdiWiCsGiw1DD7eJhtwQSr9t58optS1Lcoguk7rb52AWI4F5u3Dne132oYW2ULkxwsIKKoIs7%2F5wu1fMzjgLQ%2BslB2S84FK9TLrTYDxDClC3EY2m7CWIMi6lIZmPJ2ZfkOBuClpcIYDJAt9oY2FYERcIu42FnqxJRkpgsUqUgHt87WdLOrmSl%2FPxxGAkB8L7PzUtaRMpQ7j7Pmq%2FdF%2FaZjAFlGjG4e4K5td7aHE%2FJa5EtiYHx%2Bs1nRELZo3qqW%2BUxyIS4AZv0CIZp%2BFtgGPbruO7kKGqWj39bKuWklT47R1PpjBS6oZCXyDh30sMY4iLS3AuHRIPin3cn8g4zqlDny1vkzc%2BAfCfjcV3Kt2OMFLwXrP6%2FAgELQwejianpjCjctP%2FYUppLtrNFspxTDFzLP49jbWRA64zxSucwwK%2FJyQY6pgEtc0QR4HLQLxRXIPe8x6cepvDbU9oxfC8HXVY3JcJMccMAd16lCy9FBZmzROIz%2FzSYk9hVPRtT7RZe9o8tFc%2BUQEIUrk6sj9FN8n9pDdcXm0reeD5p5d6zHWbxdLhB1qYyVb79e5%2BirTX9YRncYuobRgr%2FVM%2FVtmOd4KM6g4qbL5oPUhmXxZGPt0kRjBk9kGpHeQRpLNEaNcZuk6ozxX%2FXo2MKRriM&X-Amz-Signature=5c84b587d6e8ad9297e5a1d90a263f0e6d1ad658ba6c90d9034744ae1dbbbf46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEWG3B45%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T050448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDKYTyQrruzUjml6vuAohiVKZ0siG%2F9ojFnk9T8RIQlUAiAa7E81p7e4Ap2J0%2B9S%2B2uiAkwgDnBAZdgA3R6z4yor9ir%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMh9PUXr%2Fg8u4Kggr4KtwDB%2FmmVmduZDXD6Ff5afw2O0ekYtH44P8OHyYy3q83kKYuqaXEuobeL8TdROaQsYH34RJwFbIYai5%2FZEn6%2BpGokmSQOMgsbA9rimJFfR%2FtK4apD6WeIA4yVKgw0mW6qH%2FRhcSyEvihAOp7p4fg%2F%2FMMPolVc5Ndyg%2FMnxPLWGDva6KYI4HkbYKPdvuENPVZdufK5wN522zN%2B1dPZeQVNtEgcgiVdiWiCsGiw1DD7eJhtwQSr9t58optS1Lcoguk7rb52AWI4F5u3Dne132oYW2ULkxwsIKKoIs7%2F5wu1fMzjgLQ%2BslB2S84FK9TLrTYDxDClC3EY2m7CWIMi6lIZmPJ2ZfkOBuClpcIYDJAt9oY2FYERcIu42FnqxJRkpgsUqUgHt87WdLOrmSl%2FPxxGAkB8L7PzUtaRMpQ7j7Pmq%2FdF%2FaZjAFlGjG4e4K5td7aHE%2FJa5EtiYHx%2Bs1nRELZo3qqW%2BUxyIS4AZv0CIZp%2BFtgGPbruO7kKGqWj39bKuWklT47R1PpjBS6oZCXyDh30sMY4iLS3AuHRIPin3cn8g4zqlDny1vkzc%2BAfCfjcV3Kt2OMFLwXrP6%2FAgELQwejianpjCjctP%2FYUppLtrNFspxTDFzLP49jbWRA64zxSucwwK%2FJyQY6pgEtc0QR4HLQLxRXIPe8x6cepvDbU9oxfC8HXVY3JcJMccMAd16lCy9FBZmzROIz%2FzSYk9hVPRtT7RZe9o8tFc%2BUQEIUrk6sj9FN8n9pDdcXm0reeD5p5d6zHWbxdLhB1qYyVb79e5%2BirTX9YRncYuobRgr%2FVM%2FVtmOd4KM6g4qbL5oPUhmXxZGPt0kRjBk9kGpHeQRpLNEaNcZuk6ozxX%2FXo2MKRriM&X-Amz-Signature=4cb38bd3a0e5d35f486f797434c74c56355c19da7ed1d981a14eda74a28c5cde&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
