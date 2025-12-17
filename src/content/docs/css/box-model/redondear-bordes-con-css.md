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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WX2X7JP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDU%2FpofeyJ5lFcpdiKqWCoFKTkGcFNQcn0pBN3gSEKbmAIgQ8mWC7Y2i5In0sPSRxjcOm0FhYrO0RyG5gS3Pjybg5Uq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDOEacJcyzD6BDwIzhCrcAzQlOczGsl9onPe0r%2FTMpwidIdKwJdq75%2BcA1ATuQz35%2BsfoVV%2BVDEtJDre4tE6GjWe%2FugHvsvv4aSzwqr%2FLgaTVEV75rmaP4t15%2F7U3hNEkr5sf8NaYhULeiE4LZrwNpjr%2BBryHKc%2F2eqF5M%2Fy6rkh4rrB%2Bosst%2Bg5xbpMrLWMmIaPuECdifFn%2BTPZApauTEVf3JMVW7a3iNZScMS7LYFt4kcFBXYUkNInJfn0suxZ9pNDWChcgFZIMT0cUaVH6eKfP8BYPjhSPCIYeB4c9AJ3wbOJRoxh5ApDA8VdzvnTnTOU8AlB22hzo2IcqBBjpDbZT9bkvwqZemYsqzdwH8u4RuBrURMtu4XSaLKpaQwrjrlOG2AnenXecFka%2BcVch12XyZJB5iTILaPZT0L2temcGsRKJQS6P9q9ElmvuFcKXyrCNBeSEVYosVAbxhVeCWOe4PNr5qB4YHuy8Nc4%2BxfHjUS%2F5nJpLrFf%2FRityF0P5wbn60CgFproAxt6ywXXE1PLnhfCt64CKmsq12ijotXJ0sYVurRl0bMiCBbyBFQMxtDtdWL3VG%2FDqj9NM8221LW1uFKj0NpfFN%2B34r36yZ41TzxTgEAzSraDLt9Zcq3tbuI4VIk%2BuxtuEyG8mMNGDiMoGOqUBzVoxEBL%2FhZJqPJPshuZ4jPI1m8pToNroBgLUvu%2FeZS1lgBwcdOnUCa30PIwtpKjRpuubmFS%2BxjJbsJR23mF7anFUn6aEez%2Fxi9zU7vB5U5Z%2BAsotXyjkkNxikgiltValz%2FC231jvnXK5ttRc8OYF6avFqU3UwomO%2FKj%2FJvtAjuxoz1cUTJZlwil3mPKQhLcteyj%2BoA8ICq%2FoOIjqozy8dmKshJeZ&X-Amz-Signature=12c76b4a11fa920e8c9892bc489f7f59efc6f8a3a8dba32fc587884446c82ba3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WX2X7JP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDU%2FpofeyJ5lFcpdiKqWCoFKTkGcFNQcn0pBN3gSEKbmAIgQ8mWC7Y2i5In0sPSRxjcOm0FhYrO0RyG5gS3Pjybg5Uq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDOEacJcyzD6BDwIzhCrcAzQlOczGsl9onPe0r%2FTMpwidIdKwJdq75%2BcA1ATuQz35%2BsfoVV%2BVDEtJDre4tE6GjWe%2FugHvsvv4aSzwqr%2FLgaTVEV75rmaP4t15%2F7U3hNEkr5sf8NaYhULeiE4LZrwNpjr%2BBryHKc%2F2eqF5M%2Fy6rkh4rrB%2Bosst%2Bg5xbpMrLWMmIaPuECdifFn%2BTPZApauTEVf3JMVW7a3iNZScMS7LYFt4kcFBXYUkNInJfn0suxZ9pNDWChcgFZIMT0cUaVH6eKfP8BYPjhSPCIYeB4c9AJ3wbOJRoxh5ApDA8VdzvnTnTOU8AlB22hzo2IcqBBjpDbZT9bkvwqZemYsqzdwH8u4RuBrURMtu4XSaLKpaQwrjrlOG2AnenXecFka%2BcVch12XyZJB5iTILaPZT0L2temcGsRKJQS6P9q9ElmvuFcKXyrCNBeSEVYosVAbxhVeCWOe4PNr5qB4YHuy8Nc4%2BxfHjUS%2F5nJpLrFf%2FRityF0P5wbn60CgFproAxt6ywXXE1PLnhfCt64CKmsq12ijotXJ0sYVurRl0bMiCBbyBFQMxtDtdWL3VG%2FDqj9NM8221LW1uFKj0NpfFN%2B34r36yZ41TzxTgEAzSraDLt9Zcq3tbuI4VIk%2BuxtuEyG8mMNGDiMoGOqUBzVoxEBL%2FhZJqPJPshuZ4jPI1m8pToNroBgLUvu%2FeZS1lgBwcdOnUCa30PIwtpKjRpuubmFS%2BxjJbsJR23mF7anFUn6aEez%2Fxi9zU7vB5U5Z%2BAsotXyjkkNxikgiltValz%2FC231jvnXK5ttRc8OYF6avFqU3UwomO%2FKj%2FJvtAjuxoz1cUTJZlwil3mPKQhLcteyj%2BoA8ICq%2FoOIjqozy8dmKshJeZ&X-Amz-Signature=8d0b8780815656dde00b3458008e386fe93297955fba127c0a29b42e41dd21f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
