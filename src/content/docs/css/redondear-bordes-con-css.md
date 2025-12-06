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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LI2I4EB%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T161540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCT38sHHmpWjUIDjIfZS8GJvUTjmHW6EQz0qlwPQD98aAIgG%2FsUxgQFKMxf64oidoyEzPOdouLzFRPTX1WZSuD3Q0oq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDPl4dkNyrteYLnP5HSrcA24%2F1XckvmYnvgKAqkM9VjGM609jmAWiqXeHR2NLGAH9BI6wTydMBFEPb5PT9FdlbGul%2Ffc8P4UQmyNspyA4IRKmWPyLzxjaf%2BPivMF2B89bdb5PrGNwcjfo%2FegW5%2Bw45E7hDuZtbQz6VPOKJ4o25frBigQ1xV37hQkYvjxDbFPNt%2B2YaQBcQ%2BZilNvxzHtRx6EUgw%2Fk1B529Av%2BINd7U%2BuOS3HeuFCUSxvoo31Asc169QNH7xqzfCZ5%2B9tKjFLQgen0EG%2FJRcP3NxvpT04o114lS2hn2c3lJBR6rbnamrmUhoMJLcsxbtdNcX2zPpy%2Bkna%2FOlg0OZoBFC4TI7qCwXCuc3dmD4W5iDRObKxihGvXwSnpqtZ2m485OPB8L2%2F0pi8RXAs%2ByYDZzz2yR%2B%2B9wtiQpksWfBlgScGu4rrQlFypEmI8x2ZVeA3VDztYC6Cokh3wrwmApcnzARXD7IqoTq72dTZGw4JoIIXh8Mn4iO7y3iQP03j9FqPjyeg7M%2FB8euaXzKPJ08Asah64jnLNLB%2FnohpeE5omOEgW%2Bybznog2jvmLjRdQLIO97yNF48NksqvXho0w%2FbFlAuc1db%2BtLCE5Kbjv7sHfZhb97f8pL4eV5pK3PSZwAcPF6GiOMKOm0MkGOqUBIKpa2blyWE%2BLPsZ1%2Bqiqknecnx5lJ%2F3axEjjwcfzwT8E%2Fmzyb8ojXrFcn86qmFlo4b3bojdmS2J0w017b1vVPiLu14Poj3EB8ZgHLCx82fRF6b9%2FzGTm4TzLE79wSS%2Ba4pRmwS80ZbTV8guAsb5xmevIZjBFJI0nnLFNCwzs8YngcSSUmZAth%2FsBL20YsSoiDjyOuvmXK57ls%2FuqZq7thUNL6Rkv&X-Amz-Signature=ad2a5a9763a549c59b4c09c95c04c6dbb98a0f884c5006b4786b506d92bc047c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LI2I4EB%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T161540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCT38sHHmpWjUIDjIfZS8GJvUTjmHW6EQz0qlwPQD98aAIgG%2FsUxgQFKMxf64oidoyEzPOdouLzFRPTX1WZSuD3Q0oq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDPl4dkNyrteYLnP5HSrcA24%2F1XckvmYnvgKAqkM9VjGM609jmAWiqXeHR2NLGAH9BI6wTydMBFEPb5PT9FdlbGul%2Ffc8P4UQmyNspyA4IRKmWPyLzxjaf%2BPivMF2B89bdb5PrGNwcjfo%2FegW5%2Bw45E7hDuZtbQz6VPOKJ4o25frBigQ1xV37hQkYvjxDbFPNt%2B2YaQBcQ%2BZilNvxzHtRx6EUgw%2Fk1B529Av%2BINd7U%2BuOS3HeuFCUSxvoo31Asc169QNH7xqzfCZ5%2B9tKjFLQgen0EG%2FJRcP3NxvpT04o114lS2hn2c3lJBR6rbnamrmUhoMJLcsxbtdNcX2zPpy%2Bkna%2FOlg0OZoBFC4TI7qCwXCuc3dmD4W5iDRObKxihGvXwSnpqtZ2m485OPB8L2%2F0pi8RXAs%2ByYDZzz2yR%2B%2B9wtiQpksWfBlgScGu4rrQlFypEmI8x2ZVeA3VDztYC6Cokh3wrwmApcnzARXD7IqoTq72dTZGw4JoIIXh8Mn4iO7y3iQP03j9FqPjyeg7M%2FB8euaXzKPJ08Asah64jnLNLB%2FnohpeE5omOEgW%2Bybznog2jvmLjRdQLIO97yNF48NksqvXho0w%2FbFlAuc1db%2BtLCE5Kbjv7sHfZhb97f8pL4eV5pK3PSZwAcPF6GiOMKOm0MkGOqUBIKpa2blyWE%2BLPsZ1%2Bqiqknecnx5lJ%2F3axEjjwcfzwT8E%2Fmzyb8ojXrFcn86qmFlo4b3bojdmS2J0w017b1vVPiLu14Poj3EB8ZgHLCx82fRF6b9%2FzGTm4TzLE79wSS%2Ba4pRmwS80ZbTV8guAsb5xmevIZjBFJI0nnLFNCwzs8YngcSSUmZAth%2FsBL20YsSoiDjyOuvmXK57ls%2FuqZq7thUNL6Rkv&X-Amz-Signature=a2ee786a25b71c905aaae1fa0b3ccaaf2b6de089bcd9f4b948bfa4961dc6f518&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
