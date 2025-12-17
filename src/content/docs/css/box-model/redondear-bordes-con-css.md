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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFMRTJZD%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T195548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH5SCDz76tVEdeYICsQxjbrpRwJVQMKV88Euy5DV7yP%2FAiBqSET8UWepcqy3VGagsuy5yFevTtbPSUwEtAOMpKRYpyqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWaLDRh8FGq7PnzXOKtwDLenZECbFMGPEGmtmT8207KYMMAyl%2BQa%2FkYNonUDn2ECyexxrFMBaZIuNYW4bYR%2FK88liT1Ls%2FQV1%2FA5Ti%2BzQoFrKBoFORatxocSCRA7LYnehoYdc6utoLtHkV8g0Q1NoCouf7YIRkNaqw0sFbLmgDVullJss9%2FRIgxUrTFHTS9I2IYRyu1F7nCTEUfgecz609PPMMNS5fCAAyGabIaavUukNpfMJGI1aKMVD95VtDq0hqTnMXcB0nnBTJHH%2FFtEQvHtHt9rF4HH0RBeAtGmAWv%2FnWqiapVeQIlnarlIpuvGFlccqwDVAl9FYPhtJ2vl6HiWaeeMZVuKOSiCtX0jc3Q4oR89%2BDut994BsClRiGtubFsKtWL5ZfrkAjFSOkS1rSdjv6Jw0PQP2krtnn1Fwqd5Y31u0ddoZaU2vxuX3142UlpdqTgpijupuzeNF550gmv6MJrYyiZOcfFXqEuf2oHs0s4uMrXkP8Gm1alcu68Mjxn%2FkklPKGEc7vNqSvnGWCm8Kq4LVEL8s3uCGiIDQXXGL9ca9ThI3IFyFgqCjwiB9zbDax%2F2e7eHABAXpg%2Fjd7sunk5445Gg%2FwEYCnh8EYBkKbaH3eQOrbDqi76CJzsSc6CMhXS98REhbj3MwoouMygY6pgE6p%2BNRrGXD1cng0VQG0VZTxEcu9CGj2ZFF2j80B1HR%2Bvx%2F58Kbb9Hp1w6tJQ41rqmCR%2Bgr2Po0Cr%2BF6gn1xxVgg2RF%2F20%2F0G7rHov1ZXrLDfHO%2BmvbJ13jntvKkPolDxySvstNm0xV7SKH4c2j7AAu7Y0%2BDUu%2B3M2W48%2BWGmbr3R1R4uUtS89hSCjQg8gn97GkUqFeByE2I3uBEhk52KovKpy2Bake&X-Amz-Signature=f7d3435ccf71f2bbff7f82533804de2b382f85fae426fe5f9f84a55ff5420e58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFMRTJZD%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T195548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH5SCDz76tVEdeYICsQxjbrpRwJVQMKV88Euy5DV7yP%2FAiBqSET8UWepcqy3VGagsuy5yFevTtbPSUwEtAOMpKRYpyqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWaLDRh8FGq7PnzXOKtwDLenZECbFMGPEGmtmT8207KYMMAyl%2BQa%2FkYNonUDn2ECyexxrFMBaZIuNYW4bYR%2FK88liT1Ls%2FQV1%2FA5Ti%2BzQoFrKBoFORatxocSCRA7LYnehoYdc6utoLtHkV8g0Q1NoCouf7YIRkNaqw0sFbLmgDVullJss9%2FRIgxUrTFHTS9I2IYRyu1F7nCTEUfgecz609PPMMNS5fCAAyGabIaavUukNpfMJGI1aKMVD95VtDq0hqTnMXcB0nnBTJHH%2FFtEQvHtHt9rF4HH0RBeAtGmAWv%2FnWqiapVeQIlnarlIpuvGFlccqwDVAl9FYPhtJ2vl6HiWaeeMZVuKOSiCtX0jc3Q4oR89%2BDut994BsClRiGtubFsKtWL5ZfrkAjFSOkS1rSdjv6Jw0PQP2krtnn1Fwqd5Y31u0ddoZaU2vxuX3142UlpdqTgpijupuzeNF550gmv6MJrYyiZOcfFXqEuf2oHs0s4uMrXkP8Gm1alcu68Mjxn%2FkklPKGEc7vNqSvnGWCm8Kq4LVEL8s3uCGiIDQXXGL9ca9ThI3IFyFgqCjwiB9zbDax%2F2e7eHABAXpg%2Fjd7sunk5445Gg%2FwEYCnh8EYBkKbaH3eQOrbDqi76CJzsSc6CMhXS98REhbj3MwoouMygY6pgE6p%2BNRrGXD1cng0VQG0VZTxEcu9CGj2ZFF2j80B1HR%2Bvx%2F58Kbb9Hp1w6tJQ41rqmCR%2Bgr2Po0Cr%2BF6gn1xxVgg2RF%2F20%2F0G7rHov1ZXrLDfHO%2BmvbJ13jntvKkPolDxySvstNm0xV7SKH4c2j7AAu7Y0%2BDUu%2B3M2W48%2BWGmbr3R1R4uUtS89hSCjQg8gn97GkUqFeByE2I3uBEhk52KovKpy2Bake&X-Amz-Signature=453c0ad26f0881218e3cb30166624f339d69320a6db240570da75e350acd3126&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
