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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WKFDRGZ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T221529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGzf6M%2FamTZFljr76%2BkaiOQD4vEOCbWHnbk31i0SssD4AiEAmK6bRoHFZ1QV2v5HSHOUL216DM%2BOyxPjbrafdIAzki0q%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDEh%2Fxbmio72UxN%2B8YyrcA1%2Bz2N1ij%2BOi817EUk%2F5T6sXFrR9kT8BWR%2Bw17Lgot1T2T5OBjtPqsH8O7roGJ5OnY8Fjz6Ucp5gLWDYxssVhvJeeifgJ9VOErgbVM%2FGCk1xBtGTjSpT7UTGO9h%2FlkLh6jf9b9F6fk6gQTiXpLabYlvMZ%2BE5qsXVP6mHL0XujxPvz4gn9J7a5wH5MldV9m3ZUlh1IScHcMorZwvImP4RmOuyDr1kGwiwQ%2FnJze8vL4fG7lT%2B4NissMy3WPMyjE%2FJpN0DatvgAo2v%2Bm8caKsXTetGCqAIB5KFq2tyqAvEH1uZ5mPZnCByGpF0hjIZPRUr3Kxml4JVzLH2t8xDu57iFzqNxplh%2BOh2x0auXMI%2BTl6Nd%2F%2BUe0p811FyhfxsePxsLkckwACbVczuMIz1gOMqUZMv46POJo11%2FJo9sE47KeewMJsq2%2BtYy4OC6F2stfxT9f1%2FmBSrSWZj5DYn%2B2t4TEmvtc5UtjQ5zfcMQuyviQ7cN17A96Z8s8xTsCCK8p%2BlFnKVRkVBKPgX626ZXn24WBuQJOuHRHYOcER7IsPbBrX6HYhGA5TplCM5CD%2BrILKDDR%2FVzWWBAhbPrAmU0300aFnmbUZ3MgwLuJlziEYVlXOtPuERO5IQi9RAjyLOMM%2FU0skGOqUBm7Jk04qzvK61EyPkHGHffsyyN6jB8TygSC0MER0II0O%2BBe5QxaQpIie5EqwqMlY0%2B%2BjevLHMiNFVYAogbw61nPpA%2FCPVQG3SPA0%2Fe4lCs%2BlpnrtzaXEKoz7L%2FbzqfUhWb59R%2Fvzb4Tn%2BrCLt9cCLyaTo5PqHzzAIINABrUV9rfbxbJUHodEzGhnE5tuUeqRAfG42KtNvRgnMG9yj8eSbHUnCR9gS&X-Amz-Signature=9ececfc2f58525ac93bd6339cce60cffb0877e0306d09bb37cb107efb37a81b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WKFDRGZ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T221529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGzf6M%2FamTZFljr76%2BkaiOQD4vEOCbWHnbk31i0SssD4AiEAmK6bRoHFZ1QV2v5HSHOUL216DM%2BOyxPjbrafdIAzki0q%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDEh%2Fxbmio72UxN%2B8YyrcA1%2Bz2N1ij%2BOi817EUk%2F5T6sXFrR9kT8BWR%2Bw17Lgot1T2T5OBjtPqsH8O7roGJ5OnY8Fjz6Ucp5gLWDYxssVhvJeeifgJ9VOErgbVM%2FGCk1xBtGTjSpT7UTGO9h%2FlkLh6jf9b9F6fk6gQTiXpLabYlvMZ%2BE5qsXVP6mHL0XujxPvz4gn9J7a5wH5MldV9m3ZUlh1IScHcMorZwvImP4RmOuyDr1kGwiwQ%2FnJze8vL4fG7lT%2B4NissMy3WPMyjE%2FJpN0DatvgAo2v%2Bm8caKsXTetGCqAIB5KFq2tyqAvEH1uZ5mPZnCByGpF0hjIZPRUr3Kxml4JVzLH2t8xDu57iFzqNxplh%2BOh2x0auXMI%2BTl6Nd%2F%2BUe0p811FyhfxsePxsLkckwACbVczuMIz1gOMqUZMv46POJo11%2FJo9sE47KeewMJsq2%2BtYy4OC6F2stfxT9f1%2FmBSrSWZj5DYn%2B2t4TEmvtc5UtjQ5zfcMQuyviQ7cN17A96Z8s8xTsCCK8p%2BlFnKVRkVBKPgX626ZXn24WBuQJOuHRHYOcER7IsPbBrX6HYhGA5TplCM5CD%2BrILKDDR%2FVzWWBAhbPrAmU0300aFnmbUZ3MgwLuJlziEYVlXOtPuERO5IQi9RAjyLOMM%2FU0skGOqUBm7Jk04qzvK61EyPkHGHffsyyN6jB8TygSC0MER0II0O%2BBe5QxaQpIie5EqwqMlY0%2B%2BjevLHMiNFVYAogbw61nPpA%2FCPVQG3SPA0%2Fe4lCs%2BlpnrtzaXEKoz7L%2FbzqfUhWb59R%2Fvzb4Tn%2BrCLt9cCLyaTo5PqHzzAIINABrUV9rfbxbJUHodEzGhnE5tuUeqRAfG42KtNvRgnMG9yj8eSbHUnCR9gS&X-Amz-Signature=7635a5159fc48b3f16849623d13a1c9c1b14220aa3f02d4ece8cdfa2415c56fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
