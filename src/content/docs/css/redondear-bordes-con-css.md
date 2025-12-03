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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FPFVMW7%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T234944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQC5AT5jTtQYWSHaXseuuctUZ%2BocWasNkhi0mT069GrRcQIgdz3tywGxQomDlToIY7Jkmyfwa7zkcEKjL5eMIRL4OeQq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDOZ5FAxGExjqK1z%2FyircA%2Br0eRRsMlO%2FXDgLgqHfzNvyjItlhoPr7MwfWjOTts59O3WIhEg2wHjxaCeZO5cycsulRpjpT8aTW8khD8ez2fCg0qQIXZr6HvUjVm11Ce7BLCc4zrL9vHsB6rYtBluXh1Rt42nIG55sZFFW42rtRTILVduzPIXUGQn8jt5vhpMzWkcRnbIRyzdqUpc3iA33ScEtBhe1B28%2FBLR4Y5MxtrR59yxbGWi3u4BivCNFnBzk%2BGJAxLTjrUJvkAB4XwmD2DsZ78y2XcGcmXmjjlaviCv5QOssuKZHnGIdnY3nSSYtzeN%2BA0R8mIBl0czG8W8y5%2BLDWVFdsFvn4XbEwQkUlxM0xJhD0YAPQa8bQSbqpW7NRG0WpNdDY5cSNNX36flL2N22KcWxWxCr2kS6oAamPpKT8O5Ecqhs4bk0G1160UwSfIMvodVXqZS2%2BIW35bb%2FkI2n4qVE66Yr8vhhJvW9laA2xXpdJPa4m1hITsnTVFhgIwMHtX0PM0KSvVRz41zHVou5pOVAwC5OFckxI8XCJCqws7dFTkjcxH36SOLNCoNJgh0C7fUZJiEEXkhBERuLRIlKzj0qZikRDTDV3vfBIFXLihUE9zd%2BDIV7keO4YVJcPxolkHkuPQqIW6cuMMKVw8kGOqUBl3pjcyEN%2B99KN0zmILrRk6vMzYVKvphIn5lTM4dA270%2B781siYGFiJTSCSDLoDNG0UAxQRSWPeAwhEf%2FTfqJPj6L5yOvKZBCkjEMD5atEfCQGXGpDu9bYIFJ0PNaSl6C1cPzlpzbuTqwz2yLExUlJ6f9ZIPpLwEtz4w1VJtdJ4lWGroUpl8wzENN0bk%2BigMk%2BElieagsCpL7t2pS1pE8Uks7q7EO&X-Amz-Signature=e6cb425b5ae35a21cf67506d0511f02c561c22f734e1dbbf26a5fa08315a993d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FPFVMW7%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T234944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQC5AT5jTtQYWSHaXseuuctUZ%2BocWasNkhi0mT069GrRcQIgdz3tywGxQomDlToIY7Jkmyfwa7zkcEKjL5eMIRL4OeQq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDOZ5FAxGExjqK1z%2FyircA%2Br0eRRsMlO%2FXDgLgqHfzNvyjItlhoPr7MwfWjOTts59O3WIhEg2wHjxaCeZO5cycsulRpjpT8aTW8khD8ez2fCg0qQIXZr6HvUjVm11Ce7BLCc4zrL9vHsB6rYtBluXh1Rt42nIG55sZFFW42rtRTILVduzPIXUGQn8jt5vhpMzWkcRnbIRyzdqUpc3iA33ScEtBhe1B28%2FBLR4Y5MxtrR59yxbGWi3u4BivCNFnBzk%2BGJAxLTjrUJvkAB4XwmD2DsZ78y2XcGcmXmjjlaviCv5QOssuKZHnGIdnY3nSSYtzeN%2BA0R8mIBl0czG8W8y5%2BLDWVFdsFvn4XbEwQkUlxM0xJhD0YAPQa8bQSbqpW7NRG0WpNdDY5cSNNX36flL2N22KcWxWxCr2kS6oAamPpKT8O5Ecqhs4bk0G1160UwSfIMvodVXqZS2%2BIW35bb%2FkI2n4qVE66Yr8vhhJvW9laA2xXpdJPa4m1hITsnTVFhgIwMHtX0PM0KSvVRz41zHVou5pOVAwC5OFckxI8XCJCqws7dFTkjcxH36SOLNCoNJgh0C7fUZJiEEXkhBERuLRIlKzj0qZikRDTDV3vfBIFXLihUE9zd%2BDIV7keO4YVJcPxolkHkuPQqIW6cuMMKVw8kGOqUBl3pjcyEN%2B99KN0zmILrRk6vMzYVKvphIn5lTM4dA270%2B781siYGFiJTSCSDLoDNG0UAxQRSWPeAwhEf%2FTfqJPj6L5yOvKZBCkjEMD5atEfCQGXGpDu9bYIFJ0PNaSl6C1cPzlpzbuTqwz2yLExUlJ6f9ZIPpLwEtz4w1VJtdJ4lWGroUpl8wzENN0bk%2BigMk%2BElieagsCpL7t2pS1pE8Uks7q7EO&X-Amz-Signature=e4bb03968f882761742a98fc4db82174385da14edd9e4c7302d7823fa06ea72c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
