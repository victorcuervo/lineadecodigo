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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZOB7NZZ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T072357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICV3KNGh%2B7UcwP9lTFRCBV0DF%2F90gHXiA3%2BZuaWvpjWJAiEAt1FHbaCjwVVl6G4DGIM52FgnCvojytQ5SE5LTsxKAWgqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIdTiywPthg3dlVJoCrcA2%2F2NWO08O5LkgNDBDi8TP%2FMk8hVSog8vnduuOlmEaPc%2BA9%2BX0%2FwFI0i4JR6x%2FNyv20nZMOT5LNrTzThP27eyDEzH4ZNk7rCtX61cpti8Fp69N4xLryk%2Bj7nBP1P05PR444Qmay0LbsoUEWbiJ4dLjtyjUi4Gzw11HziykfP684pUxgwCf3S9EOhxg%2BmTmvS4ARXbyY7VLkoU2MFYoZMi6jRBFNR%2Fcs0mvgl6fqdohIO0ajeICZuTdhm9zDCTclTUeaBnGYKPjYsaM9FmB9csNgVqS9%2BkQz52dSb%2BGbidHXXho1asGs7fdhsHYPNP8hcGP3mcyFyeDpDyAqf6VS%2BnPQszTdrsRkWB9CKjUFggOR6B3jWLeNyNFycgjNQ8u1sYLbCp4r7d2YQpoC9mMTcVAMdSSL6xo69Tj%2FFhhH4W%2BTtBCmzx%2BO0z0FCFOgGd3qk%2FajToewRZkc7tG%2B3Dm8ZvVzy3XJ7Xc74OzQf1A0kvg7NLpatwSnkEX0lblwSyVsCKVdZKXzjbASKS6Rf5rII4eM3fLrAy2uE5jcFD647oTWkjA5NXYiSNVH%2FBHO%2B6vvCG1OKuaf7uLfbxFWDkABXlQcsKwvf9LwcFVNrrCQeyh4Hxow1vVR29MgiYTO4MPag1MkGOqUBJmVJdtLGASHSTrsLKJxlRpESQYLJTODmPKHAJ4gGHt6Qu44VjYKAvN%2FXxXYsdpNfLTqwKR%2B3RUq0LAYHxbtOoTw4TNOk%2Fww%2BfgZD7Fwh%2FQC5ZirNBSvHyjiHF5nnFLkvSfXEdhcnkYA3tJVSVuGFiPu%2FO5S4trrzuFVpx%2B7SwR4l6N7rLNgzXEMqZU4Y7PXD1Up0vH2QkdAkhtefl14io4v%2BoMwM&X-Amz-Signature=4f52c406ded8c5eb5e12ffe0d2e01c6f9ad315ae120b62f7dacad3d070aec74b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZOB7NZZ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T072357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICV3KNGh%2B7UcwP9lTFRCBV0DF%2F90gHXiA3%2BZuaWvpjWJAiEAt1FHbaCjwVVl6G4DGIM52FgnCvojytQ5SE5LTsxKAWgqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIdTiywPthg3dlVJoCrcA2%2F2NWO08O5LkgNDBDi8TP%2FMk8hVSog8vnduuOlmEaPc%2BA9%2BX0%2FwFI0i4JR6x%2FNyv20nZMOT5LNrTzThP27eyDEzH4ZNk7rCtX61cpti8Fp69N4xLryk%2Bj7nBP1P05PR444Qmay0LbsoUEWbiJ4dLjtyjUi4Gzw11HziykfP684pUxgwCf3S9EOhxg%2BmTmvS4ARXbyY7VLkoU2MFYoZMi6jRBFNR%2Fcs0mvgl6fqdohIO0ajeICZuTdhm9zDCTclTUeaBnGYKPjYsaM9FmB9csNgVqS9%2BkQz52dSb%2BGbidHXXho1asGs7fdhsHYPNP8hcGP3mcyFyeDpDyAqf6VS%2BnPQszTdrsRkWB9CKjUFggOR6B3jWLeNyNFycgjNQ8u1sYLbCp4r7d2YQpoC9mMTcVAMdSSL6xo69Tj%2FFhhH4W%2BTtBCmzx%2BO0z0FCFOgGd3qk%2FajToewRZkc7tG%2B3Dm8ZvVzy3XJ7Xc74OzQf1A0kvg7NLpatwSnkEX0lblwSyVsCKVdZKXzjbASKS6Rf5rII4eM3fLrAy2uE5jcFD647oTWkjA5NXYiSNVH%2FBHO%2B6vvCG1OKuaf7uLfbxFWDkABXlQcsKwvf9LwcFVNrrCQeyh4Hxow1vVR29MgiYTO4MPag1MkGOqUBJmVJdtLGASHSTrsLKJxlRpESQYLJTODmPKHAJ4gGHt6Qu44VjYKAvN%2FXxXYsdpNfLTqwKR%2B3RUq0LAYHxbtOoTw4TNOk%2Fww%2BfgZD7Fwh%2FQC5ZirNBSvHyjiHF5nnFLkvSfXEdhcnkYA3tJVSVuGFiPu%2FO5S4trrzuFVpx%2B7SwR4l6N7rLNgzXEMqZU4Y7PXD1Up0vH2QkdAkhtefl14io4v%2BoMwM&X-Amz-Signature=8d89af89ef5a91aca2d9fa4006811b6d18b6a27041be27be2084f2ea313baec1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
