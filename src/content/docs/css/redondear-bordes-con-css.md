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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EO2MUN5%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T021646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIE12CM6MrfASMMIjbn1TotD%2FX5insIJ%2B6qYIDvVxpauUAiEA%2BOLB0bK5E9IrUsTmorpuLGJsgfdv9nVJMp%2BGbnloWxAq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDNS5UnUhignlQfvRdCrcA%2FUG3hNFifGdwyWVAFQNtvRLphu2OGH%2Bj8y0oThBrPS647LceOvFDPE%2BfuSk4Fx6Y9FBYpLov74kYOAzh4MDnDxZrPEAeJlVtNBU3VcI4oqONAiWeVs34d8zeEocPJLVzRFEGwv3HdQpKWq%2FkYI2cmrsq%2BfmCmAUhFyZN9qG94ItqA7qlUKsbkDM89%2F0c0oyQzbiG3qsdylLzCKOn7JFWJe%2B46RZIQOQSRwRl854j1iWbG8pAYNa8%2F47tf6EJ%2FpFky0QrVq5jYhv7yaS03YeKYW1snPCTUMiOM75dFc98PqixAPouUYG1zloNoDRs4SqD6T1z81eB%2FPcfwwy8nfzO%2F3KogAHfSFUYgDYkifENKZVA4KC8HN91ebssTa41EnfpO3FoA3BUHOwqUZvusg0C0C9EUHVEBv2ZD%2BANyBtYlLQf4VigHCld2TSSfLQYhZ61Wgnp%2BdoOTyXszI%2FsAxxT0vqT0xRWpR7%2Fbiq8Rf2f0s2AV2C0sxwka2Bs%2B6LuR3eJU8iwyMRSggqSNRxbyBanzussfrXEayXVDjZTfUGtUkR9ednU1YCIP8wVn%2FrpV1%2FKjWOW1ILDQ6WzyfoEuDJsZiR6W4LCUONGCrid3udQWHGebk4sEgB9qwhKU8uMO7Uw8kGOqUB9%2BiF6SjlnXc0DyjYYSCnALxuyxaG8gS7%2B8IFgmAFuYPLh%2FxjHCBy6svWGhHQGanPJ57%2Fy1E3bhpKR1yYR76Dkls7g1cbExZIJfN%2B6utdIW2Fdh2AS8mQ9aZJqtE%2B3mOBl1qD%2Ftbb33bQlcTtdSj30nvFdhjjXanXKsHwriS7cMhcuheEZ%2FxiZHvwQd4OmHZ%2BInWYbOyLZ63oCuprSLm2CPpizjJU&X-Amz-Signature=7e878ac48547c66965ad6fef8d4a21d3973944c2fb1483d82e86880ecbb0d978&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EO2MUN5%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T021646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIE12CM6MrfASMMIjbn1TotD%2FX5insIJ%2B6qYIDvVxpauUAiEA%2BOLB0bK5E9IrUsTmorpuLGJsgfdv9nVJMp%2BGbnloWxAq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDNS5UnUhignlQfvRdCrcA%2FUG3hNFifGdwyWVAFQNtvRLphu2OGH%2Bj8y0oThBrPS647LceOvFDPE%2BfuSk4Fx6Y9FBYpLov74kYOAzh4MDnDxZrPEAeJlVtNBU3VcI4oqONAiWeVs34d8zeEocPJLVzRFEGwv3HdQpKWq%2FkYI2cmrsq%2BfmCmAUhFyZN9qG94ItqA7qlUKsbkDM89%2F0c0oyQzbiG3qsdylLzCKOn7JFWJe%2B46RZIQOQSRwRl854j1iWbG8pAYNa8%2F47tf6EJ%2FpFky0QrVq5jYhv7yaS03YeKYW1snPCTUMiOM75dFc98PqixAPouUYG1zloNoDRs4SqD6T1z81eB%2FPcfwwy8nfzO%2F3KogAHfSFUYgDYkifENKZVA4KC8HN91ebssTa41EnfpO3FoA3BUHOwqUZvusg0C0C9EUHVEBv2ZD%2BANyBtYlLQf4VigHCld2TSSfLQYhZ61Wgnp%2BdoOTyXszI%2FsAxxT0vqT0xRWpR7%2Fbiq8Rf2f0s2AV2C0sxwka2Bs%2B6LuR3eJU8iwyMRSggqSNRxbyBanzussfrXEayXVDjZTfUGtUkR9ednU1YCIP8wVn%2FrpV1%2FKjWOW1ILDQ6WzyfoEuDJsZiR6W4LCUONGCrid3udQWHGebk4sEgB9qwhKU8uMO7Uw8kGOqUB9%2BiF6SjlnXc0DyjYYSCnALxuyxaG8gS7%2B8IFgmAFuYPLh%2FxjHCBy6svWGhHQGanPJ57%2Fy1E3bhpKR1yYR76Dkls7g1cbExZIJfN%2B6utdIW2Fdh2AS8mQ9aZJqtE%2B3mOBl1qD%2Ftbb33bQlcTtdSj30nvFdhjjXanXKsHwriS7cMhcuheEZ%2FxiZHvwQd4OmHZ%2BInWYbOyLZ63oCuprSLm2CPpizjJU&X-Amz-Signature=3ef6d1f00c005d3d25391414f73db27316a0bfde1887567ffe773b3f5f9803a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
