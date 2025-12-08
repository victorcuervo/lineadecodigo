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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZROE6SMC%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T202329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB8h42TE2vi9OSYjalKhSmHzdIzkjuCJ2dcDZv6wof7aAiEA5epLAmVZWXBM83he9fljvhtPd5hTW3YbmnRyXrrLy0gqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAR827xGVFuE79RGbircA9z8ziecrrv%2BUloyzeokzkwqTVE1AAf3eX9XehvNX9X9O3VdYT73PAhsj6tXYwmE4TwP5iOxwEFz8uCd5oD%2BaDrFPhhFVXS3Hcb6V8fy7vuPsP6QgCKATt9SDhslM7364JdqUjLD1QZxWfDOwDjhDCulh%2BfF9AIfgAGurSvXB3XUQpHQwhv54WtaOhyDAa3Lyt24EH7iNk1%2Fg%2FnA9dF%2BC3%2FrLdRutQp3PmQk2uUVEIb1nqbLLLhSdbvRNqNPcWBDg%2BKB0iQI9pq2vB1Rzz1MCTlXJpXQCUGPuYWgfZvyGaDgL2P58HQ463OYdtKsEVMa0%2FUAKIXdlBczENCs6hrlYVvgvRT3PBmthckzBos299GPXEWBYzxpYlFGqPn4hKtD5MYeVaFUyavng2tiFmtTILc4iszqRxgoACGIqYkuAwZUB8gWplYDvFB5tMh1F0NO1iLx1iWjpnbEa4Tn2kXQvZYdlU6ZCNDwjrFAg1PQ2Io2pRVsB%2B8ywqL3kx5O095X8ZtGVFDeqZAPB7CWG4HD8Uc59obIPV7avfNmHv6p%2FmYj7RtSswe3yPicLOH3F3RmSoW4rSTYg4eqWfbQpvQBuJS1h3DJFJkZjv290nBoHl%2FOISnVIEX5lD09o707MLXc3MkGOqUBYePSroriESCnGhuCHzzX9WhOI2tO6Z7450Cmp84DSRg8ZnCwx9W4D7TzTSGKkmvpMu4jWX0%2Bhn%2FDTZp%2B5H211AqrL%2BgpMaxOvlzmkTvAjm10YGmo4cZyo1%2B45C%2FNyXyNjLnPkNwDFWTLSs1h2j3SE9EJfE%2FOBm31OH%2Bo0jHxc7QZOjjMj9CJqGvTdivTp4Nvtm2p93emo86KSZbbwfpLSFN469%2Bq&X-Amz-Signature=81308fce59f737146c7560dbb4572bc058a916ae84569afeb22c356c2e80fdf5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZROE6SMC%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T202329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB8h42TE2vi9OSYjalKhSmHzdIzkjuCJ2dcDZv6wof7aAiEA5epLAmVZWXBM83he9fljvhtPd5hTW3YbmnRyXrrLy0gqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAR827xGVFuE79RGbircA9z8ziecrrv%2BUloyzeokzkwqTVE1AAf3eX9XehvNX9X9O3VdYT73PAhsj6tXYwmE4TwP5iOxwEFz8uCd5oD%2BaDrFPhhFVXS3Hcb6V8fy7vuPsP6QgCKATt9SDhslM7364JdqUjLD1QZxWfDOwDjhDCulh%2BfF9AIfgAGurSvXB3XUQpHQwhv54WtaOhyDAa3Lyt24EH7iNk1%2Fg%2FnA9dF%2BC3%2FrLdRutQp3PmQk2uUVEIb1nqbLLLhSdbvRNqNPcWBDg%2BKB0iQI9pq2vB1Rzz1MCTlXJpXQCUGPuYWgfZvyGaDgL2P58HQ463OYdtKsEVMa0%2FUAKIXdlBczENCs6hrlYVvgvRT3PBmthckzBos299GPXEWBYzxpYlFGqPn4hKtD5MYeVaFUyavng2tiFmtTILc4iszqRxgoACGIqYkuAwZUB8gWplYDvFB5tMh1F0NO1iLx1iWjpnbEa4Tn2kXQvZYdlU6ZCNDwjrFAg1PQ2Io2pRVsB%2B8ywqL3kx5O095X8ZtGVFDeqZAPB7CWG4HD8Uc59obIPV7avfNmHv6p%2FmYj7RtSswe3yPicLOH3F3RmSoW4rSTYg4eqWfbQpvQBuJS1h3DJFJkZjv290nBoHl%2FOISnVIEX5lD09o707MLXc3MkGOqUBYePSroriESCnGhuCHzzX9WhOI2tO6Z7450Cmp84DSRg8ZnCwx9W4D7TzTSGKkmvpMu4jWX0%2Bhn%2FDTZp%2B5H211AqrL%2BgpMaxOvlzmkTvAjm10YGmo4cZyo1%2B45C%2FNyXyNjLnPkNwDFWTLSs1h2j3SE9EJfE%2FOBm31OH%2Bo0jHxc7QZOjjMj9CJqGvTdivTp4Nvtm2p93emo86KSZbbwfpLSFN469%2Bq&X-Amz-Signature=9302353637e1c85f57edc26e184fbe354590b0baaf72b27b55ec5bdb327c4b36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
