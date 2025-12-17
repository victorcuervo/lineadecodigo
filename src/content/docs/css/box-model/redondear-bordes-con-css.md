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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SWL4FUQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T041614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG%2BZGLNupBBDveX1EeouN4QbFtGKK2UIve%2Bc8zTrA9rpAiA5P3ZbussZy4ClzrDFPIuD4bzA3HIDw3ISleDNSratiCr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIM%2F51bWTsR7ogW%2BvLoKtwDFdQtU79f2Pg%2BMO%2Fpnmk%2BGaCnw0ChGPcPaGuERCwYmf88fipiEc%2F5ArbJ9RJTCFoxd6By8eFR%2FILZ9BBInPwIGJnlm%2B9UpAR7rnkUiZwF1sIk0JXr%2Be9ziHOJghtIPjsoEsikIfs3OBKqwe5r9%2FxhyDB43PKaeq%2F0rTFlb0CSJdw%2BFGlTpSrN7LCNmf3JCTHHngqXSMkaQ06DI9VvayGsoSJ8dXpP26T7LSpPXoqComQCoF6NjdIIiufQVR1SsO75ha8danugvg6%2ByCNWX6QLuUnra0rHVLM1G%2FKMBC18a%2BLIKqS5qHXgWqGDP1PbhYvOIwYAmsDEbjyQzS6q5aBYJRAIblWWmY52FcBWK7h7OCWoFUaY26W4XpoRMwg2fBzLVKJxUky6Ffq3F2BrotGl3Sh2%2BkoWSrlh18FuVpE2eOBoVPvXZsV8WPW8pa2IBZTPRZxqFdF7BmHxtBMWiTOGgJPfVrrc8QVT77T%2F6IDfTIucOC7Mb3FiyNFOW17yyClX8LkTQvXnnquiXYfG%2F7lEZr3YO5ewBXxUDeE7uO8X7IVOnEA65RUi%2FRlpHfukT08ySaMvQyPkqBrDIiNp1ISyJz1u%2FA25bhyHnRwm7cWZ4voRC5P1zcsaz41AUPQw%2Bc2IygY6pgFtZIS4l%2BO4CmK8K9zvRfMFt42z06oNH7VsuPrl6EwIBMRRvL5ywbvfiWvz4zWps8ZLmNUV%2FwJwbUvfCGM4RnlMM69S2EfRtfDgK533FQUAd7thDXNE0P2WEoYDxgQ57YSsJCx%2B5Rosl7yFReH7YPpXUQJIQLxQBFpYNIurzNRnyl5r992UlZHQLNXNLuWviHalPoBMY%2F1eyNr2e95vGr5EIPxXtdQh&X-Amz-Signature=7b838e19082f7d51bf49009c0ad9a19870c443a9c0bf7588b329e038b7b8601d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SWL4FUQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T041614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG%2BZGLNupBBDveX1EeouN4QbFtGKK2UIve%2Bc8zTrA9rpAiA5P3ZbussZy4ClzrDFPIuD4bzA3HIDw3ISleDNSratiCr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIM%2F51bWTsR7ogW%2BvLoKtwDFdQtU79f2Pg%2BMO%2Fpnmk%2BGaCnw0ChGPcPaGuERCwYmf88fipiEc%2F5ArbJ9RJTCFoxd6By8eFR%2FILZ9BBInPwIGJnlm%2B9UpAR7rnkUiZwF1sIk0JXr%2Be9ziHOJghtIPjsoEsikIfs3OBKqwe5r9%2FxhyDB43PKaeq%2F0rTFlb0CSJdw%2BFGlTpSrN7LCNmf3JCTHHngqXSMkaQ06DI9VvayGsoSJ8dXpP26T7LSpPXoqComQCoF6NjdIIiufQVR1SsO75ha8danugvg6%2ByCNWX6QLuUnra0rHVLM1G%2FKMBC18a%2BLIKqS5qHXgWqGDP1PbhYvOIwYAmsDEbjyQzS6q5aBYJRAIblWWmY52FcBWK7h7OCWoFUaY26W4XpoRMwg2fBzLVKJxUky6Ffq3F2BrotGl3Sh2%2BkoWSrlh18FuVpE2eOBoVPvXZsV8WPW8pa2IBZTPRZxqFdF7BmHxtBMWiTOGgJPfVrrc8QVT77T%2F6IDfTIucOC7Mb3FiyNFOW17yyClX8LkTQvXnnquiXYfG%2F7lEZr3YO5ewBXxUDeE7uO8X7IVOnEA65RUi%2FRlpHfukT08ySaMvQyPkqBrDIiNp1ISyJz1u%2FA25bhyHnRwm7cWZ4voRC5P1zcsaz41AUPQw%2Bc2IygY6pgFtZIS4l%2BO4CmK8K9zvRfMFt42z06oNH7VsuPrl6EwIBMRRvL5ywbvfiWvz4zWps8ZLmNUV%2FwJwbUvfCGM4RnlMM69S2EfRtfDgK533FQUAd7thDXNE0P2WEoYDxgQ57YSsJCx%2B5Rosl7yFReH7YPpXUQJIQLxQBFpYNIurzNRnyl5r992UlZHQLNXNLuWviHalPoBMY%2F1eyNr2e95vGr5EIPxXtdQh&X-Amz-Signature=a4222a8801377f98ba78319a61e6b6a3ec95a60e0711a4306501a4c7cd115365&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
