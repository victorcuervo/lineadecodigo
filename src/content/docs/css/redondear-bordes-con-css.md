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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJQNPWYH%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T071616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIADR3RFR1vj7Kt1zEreNXsXhFycNr%2F37eWbk8IBNdSm2AiEAqaLuU3zWWVjUumCbEA1w65OgZey7TEhEcPQt0AhLZ3oqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJhKJVtox5VZbytoHCrcA%2BQcxlRpkgriOSE%2FZf8S2n4bmc0wnLOD8KQBb2GFhY8NniezpqDNVQqeSmJh3xxLWRHDXI13mcc5xxQqJN37%2FtpEzpnwXqfcBg15sRnsA5eA67NH99wqoJi1ZtS5uK5GGHrgB19bdP8m6e2RF2d0ST4ce8Y4GBUQPhy16piqDXBvNIwCMpz6SGPr5V3OzxdXmTxMmMX7cXqZ6OEKMXLDnGDFndXRV%2BOVzTxeN5yTD%2FVlbjxFDFnbgvCz5P5CxvYPRFbp5tuZuUvDQu1aDv3TEsGipTLWO5UYu5uZIrmEt5MVi5YIJnClFkHQNe1eBk5LR91ufp%2FIM0v3YSPlPprX2pkc2RQTN8eAqxlCrniedJ%2BUrrtJuIsTSBDs%2Bem0nBIWzva9O7pFwM4akAT0DI8nDZZE%2BtRYO8682%2F58KKXV6I4adjqVWCTxEDiJ83dwdidvK8FJk8Zq6hFzhu7xB%2Bor%2Fm6bS1P6Eop4WYg%2Bm7T54dB78OlECFhvcipQqN3k%2BNqp9X1c4GFLoNgYENdeL6CLw3xugAR3K0pJCafpVk%2BxOeQPrVf1nJ4%2F7B%2B3kCz7%2FbMa89hSIzSTlZpjn6UIkPp%2BFDGnEL8zaMHsMn99bFmXE9LxEIvmNINpekhG06QUMPWj1MkGOqUBgW1ZG4ROYHuKLx3QObe25Hfh3pSUCNZ8C6bkfIsDYpP%2B1pCrv3CePevgKA61vog%2BjT0MIu7B9sJbtsxigsdbZU7adpU2W4PhV1giXEbcYcWnehRPDoEzP44i5ULnZMyUgg2YNS3FgfMlstfCaWDnoJ%2Fk5sCua672xwRlB0h9VEeTvht4nRhFBX8jR9qRouFHkfun8jc7%2FkXOxPIF9J4iuC0EPcbs&X-Amz-Signature=b4d8acd7429f1b09dbf89143e7a8711dad5c62da685ea48fe1cbc1bb2f0479c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJQNPWYH%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T071616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIADR3RFR1vj7Kt1zEreNXsXhFycNr%2F37eWbk8IBNdSm2AiEAqaLuU3zWWVjUumCbEA1w65OgZey7TEhEcPQt0AhLZ3oqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJhKJVtox5VZbytoHCrcA%2BQcxlRpkgriOSE%2FZf8S2n4bmc0wnLOD8KQBb2GFhY8NniezpqDNVQqeSmJh3xxLWRHDXI13mcc5xxQqJN37%2FtpEzpnwXqfcBg15sRnsA5eA67NH99wqoJi1ZtS5uK5GGHrgB19bdP8m6e2RF2d0ST4ce8Y4GBUQPhy16piqDXBvNIwCMpz6SGPr5V3OzxdXmTxMmMX7cXqZ6OEKMXLDnGDFndXRV%2BOVzTxeN5yTD%2FVlbjxFDFnbgvCz5P5CxvYPRFbp5tuZuUvDQu1aDv3TEsGipTLWO5UYu5uZIrmEt5MVi5YIJnClFkHQNe1eBk5LR91ufp%2FIM0v3YSPlPprX2pkc2RQTN8eAqxlCrniedJ%2BUrrtJuIsTSBDs%2Bem0nBIWzva9O7pFwM4akAT0DI8nDZZE%2BtRYO8682%2F58KKXV6I4adjqVWCTxEDiJ83dwdidvK8FJk8Zq6hFzhu7xB%2Bor%2Fm6bS1P6Eop4WYg%2Bm7T54dB78OlECFhvcipQqN3k%2BNqp9X1c4GFLoNgYENdeL6CLw3xugAR3K0pJCafpVk%2BxOeQPrVf1nJ4%2F7B%2B3kCz7%2FbMa89hSIzSTlZpjn6UIkPp%2BFDGnEL8zaMHsMn99bFmXE9LxEIvmNINpekhG06QUMPWj1MkGOqUBgW1ZG4ROYHuKLx3QObe25Hfh3pSUCNZ8C6bkfIsDYpP%2B1pCrv3CePevgKA61vog%2BjT0MIu7B9sJbtsxigsdbZU7adpU2W4PhV1giXEbcYcWnehRPDoEzP44i5ULnZMyUgg2YNS3FgfMlstfCaWDnoJ%2Fk5sCua672xwRlB0h9VEeTvht4nRhFBX8jR9qRouFHkfun8jc7%2FkXOxPIF9J4iuC0EPcbs&X-Amz-Signature=584be0165270c549bda7e43c135f5c82f3a57ce0ebd572d23b0b534087c4c165&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
