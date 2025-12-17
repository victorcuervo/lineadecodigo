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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAVKY2AW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T042940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEnigE%2B6%2BnsFpMTYDlFox9NBKhfJpE62lbs6tq17i1W0AiA7pdxGG%2FnWBux5Kv%2F4St1r1WOA5EZ%2BrQvN9A7ntW2UzCr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMONT1stNzzyWaDuOmKtwDQJK9pYzFU8%2FFv89JCc54QilKtjailUQfACBQEnSNNPdS%2BoNYbC7u%2BKc1qtXUWHb2mlwcliHnNpqH5Kv3NkWSfywf81zcNECxA1jcS92cYPHLdVTKCV3QIC40KdoVb6fzVEXeDZpLYgobqG%2Fd89A0joLxkfVjqjUcTO9KNM9gCxKviOmjsGhT0BAueKu4i%2Fl35MjarvtjrvsLAXp%2Fx6axNGjgA3%2FPBrO%2F8BQbZboWDqi8snxB59GQ5P4K8dcXTOgquzQOIXqWw7%2FAKdZ%2FP%2FgOsBXXWbJ1uZzWobtOV8CvrAzpB2SNNpvJJbnepC3luoNnU%2BiQMbzOFt77NJjaq2siqQ9eaxJQdR0x06x7RGi0jvzmz0JORLW5C18sGrg6VtoAZCh2UTFhBLMF4SVwZBHy%2BhiiiNOAbXdbNmm1j%2BSbfalIEyl2kcYLiroZ%2FzhDvctCnBu64lVB6ZovvcMCryufOTvJ0dF7V08H%2FuIZBZ1IZg0VVqKyN95R3RST9pGAbmgvK%2FuEr0ZTx4VHdid3pSgXDhrRnvOpD%2FrZOzLlstlzLrfDH8dLXRIML4LDKjDxxs1iS40DYCnYFN14QiMNGMLduFCn91ZrjT8pPvSqElO21RuEVBT1yTspPEx48Rww7M6IygY6pgFhH7uQqClotpJtfBnQl3MV1pbHA1IO7GGghy5XS6qkxHWBzVWzd%2BBWbZZ6Sxw3Y2j%2BPHD7zHwXvHat%2Bo9p4M8CZ6r7Thq3dqVm4GmAby%2F%2Bb%2Fegzs3clDmoCHu570nRxcfkGg%2FPgSpjoJ4w73pcBdKz0OO3DY5dRmACGu3kcXHASGrTu21hAM14fqEEvJbf5MsGt89nshLo%2BID8c7vvkdzHkgDALg%2By&X-Amz-Signature=b444adb146963f273e2034c7af6ad7069f196d6142a73c62f1d91df480344458&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAVKY2AW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T042940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEnigE%2B6%2BnsFpMTYDlFox9NBKhfJpE62lbs6tq17i1W0AiA7pdxGG%2FnWBux5Kv%2F4St1r1WOA5EZ%2BrQvN9A7ntW2UzCr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMONT1stNzzyWaDuOmKtwDQJK9pYzFU8%2FFv89JCc54QilKtjailUQfACBQEnSNNPdS%2BoNYbC7u%2BKc1qtXUWHb2mlwcliHnNpqH5Kv3NkWSfywf81zcNECxA1jcS92cYPHLdVTKCV3QIC40KdoVb6fzVEXeDZpLYgobqG%2Fd89A0joLxkfVjqjUcTO9KNM9gCxKviOmjsGhT0BAueKu4i%2Fl35MjarvtjrvsLAXp%2Fx6axNGjgA3%2FPBrO%2F8BQbZboWDqi8snxB59GQ5P4K8dcXTOgquzQOIXqWw7%2FAKdZ%2FP%2FgOsBXXWbJ1uZzWobtOV8CvrAzpB2SNNpvJJbnepC3luoNnU%2BiQMbzOFt77NJjaq2siqQ9eaxJQdR0x06x7RGi0jvzmz0JORLW5C18sGrg6VtoAZCh2UTFhBLMF4SVwZBHy%2BhiiiNOAbXdbNmm1j%2BSbfalIEyl2kcYLiroZ%2FzhDvctCnBu64lVB6ZovvcMCryufOTvJ0dF7V08H%2FuIZBZ1IZg0VVqKyN95R3RST9pGAbmgvK%2FuEr0ZTx4VHdid3pSgXDhrRnvOpD%2FrZOzLlstlzLrfDH8dLXRIML4LDKjDxxs1iS40DYCnYFN14QiMNGMLduFCn91ZrjT8pPvSqElO21RuEVBT1yTspPEx48Rww7M6IygY6pgFhH7uQqClotpJtfBnQl3MV1pbHA1IO7GGghy5XS6qkxHWBzVWzd%2BBWbZZ6Sxw3Y2j%2BPHD7zHwXvHat%2Bo9p4M8CZ6r7Thq3dqVm4GmAby%2F%2Bb%2Fegzs3clDmoCHu570nRxcfkGg%2FPgSpjoJ4w73pcBdKz0OO3DY5dRmACGu3kcXHASGrTu21hAM14fqEEvJbf5MsGt89nshLo%2BID8c7vvkdzHkgDALg%2By&X-Amz-Signature=df25208c841d2283306937b53f386e945fba37e6937ac7b0c1ec7f7fbb0e984b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
