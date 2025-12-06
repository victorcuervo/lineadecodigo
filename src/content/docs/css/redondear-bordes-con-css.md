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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBMGMJCD%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T223321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAzS6DzuMUfsYeYdrxxMfmba4MPi7fzxsREUVIlESdFPAiBZAUHy7aCDoE7Y%2FwG5PCVbBz3hGnmcQ20NypYF%2FQecxyr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMZEw6IEnNS3qfMvCfKtwD19B6I9QkenMp6x6PDAxIwAlnhKbTQccp%2Fh1J2FOXWEJE93qCw0eFiAQvYslj1NZPKv%2BOzMqb8Lw%2FftvdYaKzBAbFBkAx5c0cCjSFcSUN6EeQ%2Fr9gEvg7Tv%2B4rZzgXAaeOdvrMfDv1aAScOf2bYBTxGl8VG8UCyEbi4SI%2Bk8xXBgnNtMyoCV6az%2B7RBCJJkyIzae8FpTnKxiGRPYZXRa%2BYYw%2BtqJjNI6RSret155W4vgc6X5tcYm5I6qHxHYi80IY%2BM0pgN4gDGPUkfuXnwio8a5sNAU1oD%2BAlzat8lsekDHYKYVFws8X5KFBa4PjIEdnW5D8ST%2BMvmbJc%2Bsle837b6UkYy8kJEC3pHfg222XEYN6NO0%2FLH0U%2BWsHrQnMs4cWE6eVWjeeYyETkZ5NNcL7VPHJBPSVH6i3pDni7uzgkj1gISiC3b3MFV8n9qxn6mQc11rGKZLUvGO2VzEDREltVAMcKmk4Pk7cV6c7FMPrThiBLJ7j4GBfOkS4C%2Bt2S%2Bp2cYkNZj0Sp5yiJYXo96XX8iyrGshUvXWsEn6f40QPpiylmYgbp0feQY4u2E8hJB0roo7Ii8nF3eT7ud3UZaMM44gdKwnW2mxQ3ErwZ1m5l%2FrIzOabVQiXcqlzm3kwo9TSyQY6pgGStX2m7BnaaLi6xma6euZl1Ika5heFSwWujJuSqym65xCWn6Lo3h%2FKtJdea5G2WoJ2PV%2BeZdGP81qRZFVXMtqvu3qe2jm%2FKXfNsq0pGVJXuL1%2FWXbqaJG2Rf6%2Bh%2F04DA8U4X1%2BjhXNYbIusiO4N9bQ9Dm3CRSmVRYi4MWB4O6L302X8uBRNS6tvXWEqAtxNDzyEhDfGdjXmyyP1F4VRrhEKcI08iB1&X-Amz-Signature=11d9b3b7745c646e0dc03ea0a125222747c683ba71d3dce1465ef1deed9ecbd0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBMGMJCD%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T223321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAzS6DzuMUfsYeYdrxxMfmba4MPi7fzxsREUVIlESdFPAiBZAUHy7aCDoE7Y%2FwG5PCVbBz3hGnmcQ20NypYF%2FQecxyr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMZEw6IEnNS3qfMvCfKtwD19B6I9QkenMp6x6PDAxIwAlnhKbTQccp%2Fh1J2FOXWEJE93qCw0eFiAQvYslj1NZPKv%2BOzMqb8Lw%2FftvdYaKzBAbFBkAx5c0cCjSFcSUN6EeQ%2Fr9gEvg7Tv%2B4rZzgXAaeOdvrMfDv1aAScOf2bYBTxGl8VG8UCyEbi4SI%2Bk8xXBgnNtMyoCV6az%2B7RBCJJkyIzae8FpTnKxiGRPYZXRa%2BYYw%2BtqJjNI6RSret155W4vgc6X5tcYm5I6qHxHYi80IY%2BM0pgN4gDGPUkfuXnwio8a5sNAU1oD%2BAlzat8lsekDHYKYVFws8X5KFBa4PjIEdnW5D8ST%2BMvmbJc%2Bsle837b6UkYy8kJEC3pHfg222XEYN6NO0%2FLH0U%2BWsHrQnMs4cWE6eVWjeeYyETkZ5NNcL7VPHJBPSVH6i3pDni7uzgkj1gISiC3b3MFV8n9qxn6mQc11rGKZLUvGO2VzEDREltVAMcKmk4Pk7cV6c7FMPrThiBLJ7j4GBfOkS4C%2Bt2S%2Bp2cYkNZj0Sp5yiJYXo96XX8iyrGshUvXWsEn6f40QPpiylmYgbp0feQY4u2E8hJB0roo7Ii8nF3eT7ud3UZaMM44gdKwnW2mxQ3ErwZ1m5l%2FrIzOabVQiXcqlzm3kwo9TSyQY6pgGStX2m7BnaaLi6xma6euZl1Ika5heFSwWujJuSqym65xCWn6Lo3h%2FKtJdea5G2WoJ2PV%2BeZdGP81qRZFVXMtqvu3qe2jm%2FKXfNsq0pGVJXuL1%2FWXbqaJG2Rf6%2Bh%2F04DA8U4X1%2BjhXNYbIusiO4N9bQ9Dm3CRSmVRYi4MWB4O6L302X8uBRNS6tvXWEqAtxNDzyEhDfGdjXmyyP1F4VRrhEKcI08iB1&X-Amz-Signature=dbd9b799a61b353f30cb4b8ba1204e0bc07097549a4e726ec0c4086010b7cfc1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
