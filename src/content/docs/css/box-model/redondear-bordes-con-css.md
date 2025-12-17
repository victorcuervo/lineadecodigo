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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZPK3XE2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T102311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDWxP%2B9H000Q9PpvjVclzkMW7sWlTdpTSEvNCf%2Fr%2FD%2FmAiEAyGaxWxPjgcDjHG3z5%2Bk6WZgRuuPr1LGjz6abQ3qXl1cq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDIlW44Ghgu%2Bajr%2BBcCrcA6pS30adU%2BqckozxkPW3n%2BzhAzORo10wtuSiefY1seEPHkw22gq3E%2BInutWWJRht4HYgoGCc%2FTg%2BS2JIt7S%2F0Xr1Ut4HVW7doCgiSf%2F7LE%2BFCrOeBiAIofA3a4rtdrycScGoq1yTGyqv3MWHI8GTM%2BJXCL9T4H24mnthDrndzx8KxqrF8DqTiauA0Q2a0xO5yIDVSV2%2B%2FrpFC8ggcq5uQS6yRNg16wMBHBs6vPD2HJ8y5iD81Q1bVOmCbaSrY0VMQNmdpuSS52Ju7Uea3qcDFGeBnu8SJooxnTd0KqA8x%2BuQ2VNQQGlwarBny5k9HhRvSCiKFoqPzq4fFAuve3KFS7jxCM%2FZCzg0l7mklQf4J2mIsm%2Bs6HYq%2B1WuWK40bMJGg78h9Fc01YNaZGpOsNMu9Kcsd%2B3MHRDbuLo5YhBSYLngcG0rZ6P9eWEVZgkg3UGWVTyk8ri47wBoiSk1au0yTo0p0TsOdw9Pty%2BMvSlVn45%2FTtyMK82TIoipUhSqtlCD%2FLZVkHUoc7Wkzhbwt1JP3nw%2Brs7Chmt7NqBxLhEw0KN2YBPexvOPlF8aYO9jJZOU3tAuvEl1nMZDpxDqM1UdlJymqwDbVBvMUvQezlwXyedAF2oKxLifGFXXDBOjMIfxicoGOqUBbU%2BKPfuNIMed57Qqmvts8ROlpcEgNFf1rl6oLdZqILA1gNWESye5nUDYh%2FP0DM%2FDADKMDhZ4QpwaXlhdAhZ8wFFgYEg4vvpiuotxiaHKIsc5Qq9QWdLNECHl3w3Cn2JLtYvQZrNWtkEhzAFuBFZjHy0fLFuasbR2nOGehjUJ9UKHvHSmJwjvwZ2OU1qVIfvRSSH%2FwGrr7BsVAe9lkDDSdIvukIjj&X-Amz-Signature=22e844f0538d5da44cb2f3c53f6693209f99485d2d674412974f8475c5181110&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZPK3XE2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T102311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDWxP%2B9H000Q9PpvjVclzkMW7sWlTdpTSEvNCf%2Fr%2FD%2FmAiEAyGaxWxPjgcDjHG3z5%2Bk6WZgRuuPr1LGjz6abQ3qXl1cq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDIlW44Ghgu%2Bajr%2BBcCrcA6pS30adU%2BqckozxkPW3n%2BzhAzORo10wtuSiefY1seEPHkw22gq3E%2BInutWWJRht4HYgoGCc%2FTg%2BS2JIt7S%2F0Xr1Ut4HVW7doCgiSf%2F7LE%2BFCrOeBiAIofA3a4rtdrycScGoq1yTGyqv3MWHI8GTM%2BJXCL9T4H24mnthDrndzx8KxqrF8DqTiauA0Q2a0xO5yIDVSV2%2B%2FrpFC8ggcq5uQS6yRNg16wMBHBs6vPD2HJ8y5iD81Q1bVOmCbaSrY0VMQNmdpuSS52Ju7Uea3qcDFGeBnu8SJooxnTd0KqA8x%2BuQ2VNQQGlwarBny5k9HhRvSCiKFoqPzq4fFAuve3KFS7jxCM%2FZCzg0l7mklQf4J2mIsm%2Bs6HYq%2B1WuWK40bMJGg78h9Fc01YNaZGpOsNMu9Kcsd%2B3MHRDbuLo5YhBSYLngcG0rZ6P9eWEVZgkg3UGWVTyk8ri47wBoiSk1au0yTo0p0TsOdw9Pty%2BMvSlVn45%2FTtyMK82TIoipUhSqtlCD%2FLZVkHUoc7Wkzhbwt1JP3nw%2Brs7Chmt7NqBxLhEw0KN2YBPexvOPlF8aYO9jJZOU3tAuvEl1nMZDpxDqM1UdlJymqwDbVBvMUvQezlwXyedAF2oKxLifGFXXDBOjMIfxicoGOqUBbU%2BKPfuNIMed57Qqmvts8ROlpcEgNFf1rl6oLdZqILA1gNWESye5nUDYh%2FP0DM%2FDADKMDhZ4QpwaXlhdAhZ8wFFgYEg4vvpiuotxiaHKIsc5Qq9QWdLNECHl3w3Cn2JLtYvQZrNWtkEhzAFuBFZjHy0fLFuasbR2nOGehjUJ9UKHvHSmJwjvwZ2OU1qVIfvRSSH%2FwGrr7BsVAe9lkDDSdIvukIjj&X-Amz-Signature=1b86d7511ea92e3cddf270a0bc9342e7bcc3e23c6354ea7f46bad9b26c50c635&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
