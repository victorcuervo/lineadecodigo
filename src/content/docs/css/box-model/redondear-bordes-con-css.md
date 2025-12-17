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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZXNARW4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T105336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCAZX%2FOQXCoUnhkgZcFhzCVv5BwgfR3082orI%2BTwbUUWgIgc0b1ASRBYGGn5syEyeuFhsFCU4YPFONCbkq8mh3a8Iwq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDMkqMFmdZ5qLd093AyrcA%2Fxx0nfD%2F5%2BWT9ZRV4zsXtqvk8d2fGoSc%2BcIppieK2%2BP8dlvfbbWvlVKpOwRCafPLWHVOlBHz2u4%2F%2Fn8wcOKdEP01XKXzXGz7aWiF3%2BN2KktH7IRZ8CIhgxj3v1i3WQfWUrMgFftxEw%2FxDRybjr99Tg%2BAOsh9nV%2BSi8oqbG1kQx14H%2F%2BfoZ84L%2F79MB6g3pg6p2BMxGL3fjNuGzpNDgyMRHw6TVxsdhrRNkH6jBHLAYF9yW12j2VAu9bC70oU7eDcEvCt2skMMB2mlxqBDyM7eqZl7Fh07ZNqyVzMltWjDtf2bIrRB%2FPQfFs4RccWMoeAUoks2TP%2Fh8aoRe3w6%2FBkf38%2BpyGW6omL4UwqEwpM4E5XnOQWnYJt8WmrG%2BMXWyjHtMuU5InQWMq1q7XV8Lwqste4lef58mQ4T6sS35wISKYX2pV0fsY2aHzZVgrRpl%2B%2Bx%2B08nCPWj1F2YOHqWaGKAGEwDNoSGxAkkKPaa59MtdjDwVgb9aBx6%2Bj3YwPdDVmbsSbhZtrgbdnmrD0D48Mt7RuxhIvxw4zaYRa8q17v9XyHgIxI0uRYANs3kAy7aY4fa1eYI8UpA77P%2FARvQuEF8M4syPXKVxGxnf3qFp8CDJZKaGZsZxgOumHqITCMIOPisoGOqUBonYCOr1SsOw%2Fa3AmWZitbGPGFQ3pwclRobhkQNw6e3TN5fG%2B2EF%2B%2FwFkshcph05hhAEwU3YZvETQeKS2jUb0SvLmP5YGoo%2BQxTzBUWzyTl6835d%2FOZh9zP%2BVGKlbLrbIxdIiOBDEYr3Jg9lBlNvX%2B9F1EuQLITNz94s7H4nMtpYGINzzjXHPilyhWxGEOvuGL%2BRs7b9GbVZhettUOGXEHydh65xO&X-Amz-Signature=75904c3074613db70d12a58da65cdb634e9cc666eb607698902fb9fdf8166694&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZXNARW4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T105336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCAZX%2FOQXCoUnhkgZcFhzCVv5BwgfR3082orI%2BTwbUUWgIgc0b1ASRBYGGn5syEyeuFhsFCU4YPFONCbkq8mh3a8Iwq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDMkqMFmdZ5qLd093AyrcA%2Fxx0nfD%2F5%2BWT9ZRV4zsXtqvk8d2fGoSc%2BcIppieK2%2BP8dlvfbbWvlVKpOwRCafPLWHVOlBHz2u4%2F%2Fn8wcOKdEP01XKXzXGz7aWiF3%2BN2KktH7IRZ8CIhgxj3v1i3WQfWUrMgFftxEw%2FxDRybjr99Tg%2BAOsh9nV%2BSi8oqbG1kQx14H%2F%2BfoZ84L%2F79MB6g3pg6p2BMxGL3fjNuGzpNDgyMRHw6TVxsdhrRNkH6jBHLAYF9yW12j2VAu9bC70oU7eDcEvCt2skMMB2mlxqBDyM7eqZl7Fh07ZNqyVzMltWjDtf2bIrRB%2FPQfFs4RccWMoeAUoks2TP%2Fh8aoRe3w6%2FBkf38%2BpyGW6omL4UwqEwpM4E5XnOQWnYJt8WmrG%2BMXWyjHtMuU5InQWMq1q7XV8Lwqste4lef58mQ4T6sS35wISKYX2pV0fsY2aHzZVgrRpl%2B%2Bx%2B08nCPWj1F2YOHqWaGKAGEwDNoSGxAkkKPaa59MtdjDwVgb9aBx6%2Bj3YwPdDVmbsSbhZtrgbdnmrD0D48Mt7RuxhIvxw4zaYRa8q17v9XyHgIxI0uRYANs3kAy7aY4fa1eYI8UpA77P%2FARvQuEF8M4syPXKVxGxnf3qFp8CDJZKaGZsZxgOumHqITCMIOPisoGOqUBonYCOr1SsOw%2Fa3AmWZitbGPGFQ3pwclRobhkQNw6e3TN5fG%2B2EF%2B%2FwFkshcph05hhAEwU3YZvETQeKS2jUb0SvLmP5YGoo%2BQxTzBUWzyTl6835d%2FOZh9zP%2BVGKlbLrbIxdIiOBDEYr3Jg9lBlNvX%2B9F1EuQLITNz94s7H4nMtpYGINzzjXHPilyhWxGEOvuGL%2BRs7b9GbVZhettUOGXEHydh65xO&X-Amz-Signature=7a9bda8288b9689e4582c7b8500b8b5e75a7d596b2ed6d2ebfce726ecde924a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
