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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJ5KRHHA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T025452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBryWtdcrzmMj7BJSjw1sSK2bmt7kEDCyv0XCRsjfV0JAiAcajPOKMJt%2B7P93wLIeXz%2FeExo1d7xMjRVjVuFeJPzUSr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIM6Lfge4QY8IGeTNylKtwDC9klzZilrA4%2BmV9FOA7a3nNnhX3zQ8E2vA1fv4nh%2BmAT%2BfI2JrvMHw3nZ0xYIRzlaLHmMoIXliab%2BVFZHOZnhvcZvE0rbqQARrysOi8xdndTyXS32Owg34mxIVHOjbvTtaiRHUTFZb9f8t0uxFHYK7hLMjanGmQi3ZtAn9yELwUk4S3s8%2BITHUIfkHnUAyoOCuvPZl8koX6JtsgtNwY45KmFe17VVnq%2FaGjcjbi9uuo9ygHTMl24wFz60nMyH4wIBLCI2jIy6UdTx21yAkrcUUlLBkbHA3hw%2BC3HeGZEBbFCXGGoJ0xNgjneD0Ot9AKCb2Qor9eeOITptUGU1RkBQcuCkgdIuejxKU7VVPjRjLMy2JPlsAJ%2F0p7puVgttmC5zN45B1JPkQSbD0U9P2tbGo0qqnoNzrY3cd8mhzaNUrGt4HgAnOwhXIKDNWsnhc3DGpogl5OrKDu4GAMDqjWnNV50RjVXnu58Ryxt84O1Z1%2BWgsm9y0Y8yOaBehPhid0q9pLWrar%2BpHu24RTyL7x6V2ox0yv2JtCR%2BVfwJsT132Z0l158tqQYn15r6hcAXohoxYzTkH7INZeDi%2BUx3xfUiIY18lrtZxUdhqk%2Fjy6UmOoGMMhfW1JPmHyuuzwwobOIygY6pgFZb5vHvGhbsU3Ecl5pafRiuNXUgJ%2FzIQwtwKfamjIWpZEtM0Z5qaaiLtYU8%2FU8J1E7Dji8XayxdFewbqXYIoLlkES%2BNjXcGosByufi2t69wQ4TwIJCG85sdZN5I%2BnSYnRoXue8YbBVpGitNQXkF5%2BBzXnRc09YjZMNch0jwPXHUHk0cVjQ3UoXtDM%2FGOKYHD1vsLL7j31U5qQwuhHeGAQpp%2BM1rsTy&X-Amz-Signature=457121bc3f70ef7c283b06d055677605a8d09fc43aaa425de426986bfde84e8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJ5KRHHA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T025452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBryWtdcrzmMj7BJSjw1sSK2bmt7kEDCyv0XCRsjfV0JAiAcajPOKMJt%2B7P93wLIeXz%2FeExo1d7xMjRVjVuFeJPzUSr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIM6Lfge4QY8IGeTNylKtwDC9klzZilrA4%2BmV9FOA7a3nNnhX3zQ8E2vA1fv4nh%2BmAT%2BfI2JrvMHw3nZ0xYIRzlaLHmMoIXliab%2BVFZHOZnhvcZvE0rbqQARrysOi8xdndTyXS32Owg34mxIVHOjbvTtaiRHUTFZb9f8t0uxFHYK7hLMjanGmQi3ZtAn9yELwUk4S3s8%2BITHUIfkHnUAyoOCuvPZl8koX6JtsgtNwY45KmFe17VVnq%2FaGjcjbi9uuo9ygHTMl24wFz60nMyH4wIBLCI2jIy6UdTx21yAkrcUUlLBkbHA3hw%2BC3HeGZEBbFCXGGoJ0xNgjneD0Ot9AKCb2Qor9eeOITptUGU1RkBQcuCkgdIuejxKU7VVPjRjLMy2JPlsAJ%2F0p7puVgttmC5zN45B1JPkQSbD0U9P2tbGo0qqnoNzrY3cd8mhzaNUrGt4HgAnOwhXIKDNWsnhc3DGpogl5OrKDu4GAMDqjWnNV50RjVXnu58Ryxt84O1Z1%2BWgsm9y0Y8yOaBehPhid0q9pLWrar%2BpHu24RTyL7x6V2ox0yv2JtCR%2BVfwJsT132Z0l158tqQYn15r6hcAXohoxYzTkH7INZeDi%2BUx3xfUiIY18lrtZxUdhqk%2Fjy6UmOoGMMhfW1JPmHyuuzwwobOIygY6pgFZb5vHvGhbsU3Ecl5pafRiuNXUgJ%2FzIQwtwKfamjIWpZEtM0Z5qaaiLtYU8%2FU8J1E7Dji8XayxdFewbqXYIoLlkES%2BNjXcGosByufi2t69wQ4TwIJCG85sdZN5I%2BnSYnRoXue8YbBVpGitNQXkF5%2BBzXnRc09YjZMNch0jwPXHUHk0cVjQ3UoXtDM%2FGOKYHD1vsLL7j31U5qQwuhHeGAQpp%2BM1rsTy&X-Amz-Signature=ac3baa27af1c6ff39e71c910841b0fb655d1b55f2a952e2e4647d30f4b8bd550&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
