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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGCWM7Z6%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T230559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHFO6FEPeILhyxUc2Iae8xQsICl%2BkYLzAoi5S%2B9eW%2BvBAiEAt5L6HrQB%2B0TzBLsxyx5eVcrG5j%2BRZMh1I7zOsk3BSYwqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNyuQ4D8svCRP%2FM%2FeircA524IWEFNUNkQqzc%2FF9kuc6z8aehoHZbEZwHlOtKd3Edu18fm0bXEdIjvUxuZ6%2BHBy4G0PojJ97jex7xI%2FegOvqf5H%2Bglxy0S94i39blWEOHJta5DtteLtYz9ae7r26MHBJhQkWQN88z9ajTMCMmZDBrLXqnT1bK9lYlEqF%2F0URZjma4W8kxwN3dNEO7Gus2sm0PxRS5%2BGXEEly1U0LjQvAbERRtFF2z63hCrLGrAsJEYYEM%2BpyCU1Jh63QLM4WpBhjgsyBO5cH3S2Mbd5sqWAdgh3tkOxP%2FGo3m3JQBmaOiEnEpaZaaN%2BYbd8AP8j%2B2lpiE3WtR%2Bc3vkS0tvI5S%2FBgLHyzi3CxNOKnYq%2FUK3plWM9L1FtDj1RFnbzjSwQ%2BY8pzfcfCA%2FfD0MBmCO6Kd%2BPrpS0jNwfcWswTv3r2939VcPXbSanDbt7ZTLfzieXnQJEZ5N9BK3qTe50qPWf8bTEbOQHAS%2FtF0hRJZPHB0VBW%2B2z0nQXuBnFLJo%2FqHUewxtkXTP0ALBxveIQWpImYtoYBu8xyaz%2BkHxLPIo5OUDxcPHYQiTL4XdtbJBKcGoFUNsvxXRroKJZJ2m4owU%2F41tA9Xc1J3cfH8%2F%2FgijQOEYHkoCGScePpBfpBKRpPeMMyF2MkGOqUBVTggF0QsGRmuURyqeD3Zq%2F%2F12Y4iv3dluq2s%2Fj2Bo3P%2BxWrXF%2B%2Bo4TonGkZhiYmpZNtZn47z2royx4wMLEHJq%2BE%2FtDZkpSsp4%2F%2BXPCqeEQLBzZiwRkMZT3VZdeBFl7%2BCKiAS7AdgkL8EUzkMTpH4Jsum3U6Nm3KZfotH4au5zKP1YsLN%2BwZSQBMzLDTsm%2F6Fgv26H1r5PI6QYRt0jOuJDHCPq9qx&X-Amz-Signature=6195d7677fdf55d8dfd32277cf6c423127041a9e4b635cc58833a328261e995b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGCWM7Z6%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T230559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHFO6FEPeILhyxUc2Iae8xQsICl%2BkYLzAoi5S%2B9eW%2BvBAiEAt5L6HrQB%2B0TzBLsxyx5eVcrG5j%2BRZMh1I7zOsk3BSYwqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNyuQ4D8svCRP%2FM%2FeircA524IWEFNUNkQqzc%2FF9kuc6z8aehoHZbEZwHlOtKd3Edu18fm0bXEdIjvUxuZ6%2BHBy4G0PojJ97jex7xI%2FegOvqf5H%2Bglxy0S94i39blWEOHJta5DtteLtYz9ae7r26MHBJhQkWQN88z9ajTMCMmZDBrLXqnT1bK9lYlEqF%2F0URZjma4W8kxwN3dNEO7Gus2sm0PxRS5%2BGXEEly1U0LjQvAbERRtFF2z63hCrLGrAsJEYYEM%2BpyCU1Jh63QLM4WpBhjgsyBO5cH3S2Mbd5sqWAdgh3tkOxP%2FGo3m3JQBmaOiEnEpaZaaN%2BYbd8AP8j%2B2lpiE3WtR%2Bc3vkS0tvI5S%2FBgLHyzi3CxNOKnYq%2FUK3plWM9L1FtDj1RFnbzjSwQ%2BY8pzfcfCA%2FfD0MBmCO6Kd%2BPrpS0jNwfcWswTv3r2939VcPXbSanDbt7ZTLfzieXnQJEZ5N9BK3qTe50qPWf8bTEbOQHAS%2FtF0hRJZPHB0VBW%2B2z0nQXuBnFLJo%2FqHUewxtkXTP0ALBxveIQWpImYtoYBu8xyaz%2BkHxLPIo5OUDxcPHYQiTL4XdtbJBKcGoFUNsvxXRroKJZJ2m4owU%2F41tA9Xc1J3cfH8%2F%2FgijQOEYHkoCGScePpBfpBKRpPeMMyF2MkGOqUBVTggF0QsGRmuURyqeD3Zq%2F%2F12Y4iv3dluq2s%2Fj2Bo3P%2BxWrXF%2B%2Bo4TonGkZhiYmpZNtZn47z2royx4wMLEHJq%2BE%2FtDZkpSsp4%2F%2BXPCqeEQLBzZiwRkMZT3VZdeBFl7%2BCKiAS7AdgkL8EUzkMTpH4Jsum3U6Nm3KZfotH4au5zKP1YsLN%2BwZSQBMzLDTsm%2F6Fgv26H1r5PI6QYRt0jOuJDHCPq9qx&X-Amz-Signature=72989573de02fb4e529e0c75bd485abfb6518fda1a76f97e6432fcaa61e76277&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
