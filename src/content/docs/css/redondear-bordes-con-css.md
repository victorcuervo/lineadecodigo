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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQXW75IZ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T110754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCm2aT72CVrRDkIpYUDXmCENZp6pITEWMKS2vA28cdpDQIgGhYkJ0EC7BgsolUxYMynsl7iwud6Niifl%2FbfzmprXmkqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJeEnH%2B%2BBQuVgDATuircAxfvcPCUvl7ipMj%2FKXx2QBVTWroyzB3b6F4wX%2FFryVT7s58SIc8wkEd0FebRyJjPPmkIf1wSBzf%2BCSxDF1cKU%2FL94mnyp4cYcBEqUrqJh5DNxY5x3GFk0EZii8Dia8j%2BynEKEN0NSeoubT8teowdqxeKQz8Xgj84Cfjs296dBAf8x72PwHm9Z6PnkA5OBTxw1ZXsrpnihFnsmHWr4cnF9J4gKrebGekD9g8OhdlOPjdXxUOunimrs3EH1%2BP8gWwZiU%2FCAU%2BM20Ple23BohfFK4nrOwKzEs1MZjZtWjwLcp5BGnuOuQ%2BqmvL5SvEReaAPIL1%2B7hEVv4xtRl0cRbMwphup%2FHtL%2FN9%2BN48E3PuHaRvuZSqOOsBZVKuQ7x1rgOjMdsKL17VyUgdq8Zc6E%2FNwgyjXVXFkW4Gu7CDJf4reWognzwqkXgqZIXSqLgYUbSZ2eTvAI2AxUTTaDn4IDALxMsd%2Bz%2BGHuYrQcvT0hV9FWthnxSrFpyaWo6o6foHppb%2FngaCkIvABx8Xa6ShycNlJ%2Bdame8m3uoAWSHdzxK5WCeLSrWv1YRksU9llyY2A9fHvFyryzw%2BZCj4UUlk3z%2Be%2BrmIy6hF%2F5CQb7G6wo6LI1cM%2BoHs95MB4AKWcRbuEMIHu2ckGOqUBCTVw9As%2FwZwKvv6tcVQxwsz2Y7io%2Bh%2F0KTyDXVeOauPWBaN4PmBiGi5Wv5%2Foo3DnyBfpU8XH0d8YYbKG0oZ6iN2iyhobJGd0mmcDjXgg8wp1G6oslwKkhG%2BfCApOuAt2Ii1M%2BsI%2BLeajiG212%2BhK%2FyurA6%2B4vR5EjVRYsFl3b2uXU%2BSNtpw55XSai%2Fv%2BtWFwdr%2FkKKStIT%2BfA9ZPL68zYgdA8ZfU&X-Amz-Signature=faca83cd9a6cd40b3b7a967e33294026947854d359295d365a8aebfd6142139a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQXW75IZ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T110754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCm2aT72CVrRDkIpYUDXmCENZp6pITEWMKS2vA28cdpDQIgGhYkJ0EC7BgsolUxYMynsl7iwud6Niifl%2FbfzmprXmkqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJeEnH%2B%2BBQuVgDATuircAxfvcPCUvl7ipMj%2FKXx2QBVTWroyzB3b6F4wX%2FFryVT7s58SIc8wkEd0FebRyJjPPmkIf1wSBzf%2BCSxDF1cKU%2FL94mnyp4cYcBEqUrqJh5DNxY5x3GFk0EZii8Dia8j%2BynEKEN0NSeoubT8teowdqxeKQz8Xgj84Cfjs296dBAf8x72PwHm9Z6PnkA5OBTxw1ZXsrpnihFnsmHWr4cnF9J4gKrebGekD9g8OhdlOPjdXxUOunimrs3EH1%2BP8gWwZiU%2FCAU%2BM20Ple23BohfFK4nrOwKzEs1MZjZtWjwLcp5BGnuOuQ%2BqmvL5SvEReaAPIL1%2B7hEVv4xtRl0cRbMwphup%2FHtL%2FN9%2BN48E3PuHaRvuZSqOOsBZVKuQ7x1rgOjMdsKL17VyUgdq8Zc6E%2FNwgyjXVXFkW4Gu7CDJf4reWognzwqkXgqZIXSqLgYUbSZ2eTvAI2AxUTTaDn4IDALxMsd%2Bz%2BGHuYrQcvT0hV9FWthnxSrFpyaWo6o6foHppb%2FngaCkIvABx8Xa6ShycNlJ%2Bdame8m3uoAWSHdzxK5WCeLSrWv1YRksU9llyY2A9fHvFyryzw%2BZCj4UUlk3z%2Be%2BrmIy6hF%2F5CQb7G6wo6LI1cM%2BoHs95MB4AKWcRbuEMIHu2ckGOqUBCTVw9As%2FwZwKvv6tcVQxwsz2Y7io%2Bh%2F0KTyDXVeOauPWBaN4PmBiGi5Wv5%2Foo3DnyBfpU8XH0d8YYbKG0oZ6iN2iyhobJGd0mmcDjXgg8wp1G6oslwKkhG%2BfCApOuAt2Ii1M%2BsI%2BLeajiG212%2BhK%2FyurA6%2B4vR5EjVRYsFl3b2uXU%2BSNtpw55XSai%2Fv%2BtWFwdr%2FkKKStIT%2BfA9ZPL68zYgdA8ZfU&X-Amz-Signature=6f951396d3b1509f1a8b04d0f8b03b327cf970fae18d0e619b0592dbae9fe9f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
