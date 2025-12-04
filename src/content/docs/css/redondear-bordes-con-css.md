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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SLL5EPK%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T012402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQDR6xTsScRjg9pINC%2BSEKLuwr1uBVltuteBmIj6I2NbqAIhAITCpl%2B2t%2B%2Bc5syTgUnGtQV2bFpm3F%2B3HOgXhXqtbzZEKv8DCDoQABoMNjM3NDIzMTgzODA1IgzhTqAzFfqehZBUCyUq3AMN83YFpDRt9ZUA1X7ZdpQxlTsW37Xh4r%2BH1CnbruYknvVqAn6QDgiABSh7fQjQSdt%2FVwCLThEhTEu2CnUqRJYy6t8CuRJks4CHejlhabrv1356Ou%2FUBM4fZW%2FbQzsWNGVSk9sUCVK5ZvYyTKGtR7G%2BiJuv%2BRkN4%2BfGjx0IasM8kIOOqI0OG8UQk%2FqhXZdu1KKNt%2B48aiZic5ZcXzYtKcyzM73O4P8ThnAuW9LC752vzHhDd0qjwBJIdtwXgxqTmWv0CVXt%2F5eoUzx7y3%2B5R0aEhqEfZ5WSE%2FA9MxDXKTIkCUPL2vY2OpaOVsYxSoLxQ4KtFuMKqu5mpNNninWTzCRnYVMD31ULYKE3QjRLMHWQOrUVvr6NSIl7tZp2dNGAulkfvwqGpzkQTKg%2Fr%2B%2BeOoxQFWN9pMNgg3K1X4qjTzJTrJpC27JHb2MZ3BIsLEGY1AjQ3zL6NRGJ0tP%2BbChFa5gWy5f04BBjgyqlhhxXDPSyGL9abNK%2BjKH0adBvuwluFPvwhmgHYocXOu%2FQGFKINFb6ToITrI6uVonlUOPg53Gty2wmPCgmhY5zWHzb08FGw8s3EWKAL%2BzX9%2BsiGAsTB%2FvZbXsZbpSbqAeXCOvoDxsqNBUtpUjnfdygpnUCUTCvtcPJBjqkAUyIGPeZqBGMDdLc7AqcYhRNMyJN1OPHyHDZZ7LjO2ioAEDjt%2BgrtOtuWOIerAi8sIGbDYubW5uSbeSUfzDRo90dau5ob2XgzyjdX8Hub07qxqSfpWC07yqMGUkSqILugd6trlhsP9Fw%2FjyrpflH9DeKvO4SzvDnUMiU3KQ1WOwHO5iNmts66B36jK629%2BUNJzdpJPZNhmn11NJFt1sSYPeC4jeA&X-Amz-Signature=994e56d06b2eab4467fc9b89b7df16392c8ae8d10a022311242f5d09c5d3176c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SLL5EPK%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T012402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQDR6xTsScRjg9pINC%2BSEKLuwr1uBVltuteBmIj6I2NbqAIhAITCpl%2B2t%2B%2Bc5syTgUnGtQV2bFpm3F%2B3HOgXhXqtbzZEKv8DCDoQABoMNjM3NDIzMTgzODA1IgzhTqAzFfqehZBUCyUq3AMN83YFpDRt9ZUA1X7ZdpQxlTsW37Xh4r%2BH1CnbruYknvVqAn6QDgiABSh7fQjQSdt%2FVwCLThEhTEu2CnUqRJYy6t8CuRJks4CHejlhabrv1356Ou%2FUBM4fZW%2FbQzsWNGVSk9sUCVK5ZvYyTKGtR7G%2BiJuv%2BRkN4%2BfGjx0IasM8kIOOqI0OG8UQk%2FqhXZdu1KKNt%2B48aiZic5ZcXzYtKcyzM73O4P8ThnAuW9LC752vzHhDd0qjwBJIdtwXgxqTmWv0CVXt%2F5eoUzx7y3%2B5R0aEhqEfZ5WSE%2FA9MxDXKTIkCUPL2vY2OpaOVsYxSoLxQ4KtFuMKqu5mpNNninWTzCRnYVMD31ULYKE3QjRLMHWQOrUVvr6NSIl7tZp2dNGAulkfvwqGpzkQTKg%2Fr%2B%2BeOoxQFWN9pMNgg3K1X4qjTzJTrJpC27JHb2MZ3BIsLEGY1AjQ3zL6NRGJ0tP%2BbChFa5gWy5f04BBjgyqlhhxXDPSyGL9abNK%2BjKH0adBvuwluFPvwhmgHYocXOu%2FQGFKINFb6ToITrI6uVonlUOPg53Gty2wmPCgmhY5zWHzb08FGw8s3EWKAL%2BzX9%2BsiGAsTB%2FvZbXsZbpSbqAeXCOvoDxsqNBUtpUjnfdygpnUCUTCvtcPJBjqkAUyIGPeZqBGMDdLc7AqcYhRNMyJN1OPHyHDZZ7LjO2ioAEDjt%2BgrtOtuWOIerAi8sIGbDYubW5uSbeSUfzDRo90dau5ob2XgzyjdX8Hub07qxqSfpWC07yqMGUkSqILugd6trlhsP9Fw%2FjyrpflH9DeKvO4SzvDnUMiU3KQ1WOwHO5iNmts66B36jK629%2BUNJzdpJPZNhmn11NJFt1sSYPeC4jeA&X-Amz-Signature=08d6c72927a46e7f4c1b792543e619bf15f6c5f2387cb938ad1cdafe2bd4bd2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
