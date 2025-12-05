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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDADC2WQ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T053431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE590zrxhN5YoFlsWrgchnODDwchRuPQ4mu1s1fK1stLAiEA6mqQ5PhDoezALcB%2FHPhWyw7J%2BMVWHjdgYFhlB8PfGAoq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDEXE6kEjHuNYsVOxgircA5LilUIwy0GnhpKtyz0ROZR%2F%2BS80oTkDc7D6gEHOMBgAR71jY7oEY7Hx0QIVjeZ51jBoeVYMdcOhuz6Ajux%2BgSqA2xEV9Ftc1ChHC4pbDMTjAW%2BAVLMmdGdrovmeH5%2BsDQAP9UBdUwRClRGoLsXdY%2BXmXo55S7gQqvcBOD9E2dfIqdLB5OZ9HOIl97ZLBjmXGM7UvFuOQWVtsmuu2jpzT4T6ZZhDIof2Feek8VSUGcSUZmISAAGeB2S4cajOx5e1Bwcwk0VKG%2BtWFkuAxKxr62%2BUqpRtM2SH7Fu2z3Ga%2Bj6hordSZPtzN6OVg1xu6eAIXvpJcTfZgr2THwA72QtfibZs1NlPPXNIXgVftZpVadQpUPg%2B2u05JufEaljZ%2BvgH7PZAOpfA1KDHq01SXZ57Au2D12%2BmVBT1fSSFJt99f7rWZnCb8ypgf%2BhyFHmrwU28eqp1PuYpjDdwU3d57exhKVfL2eXM2krpu1xc7Rpak5MPO10NxGR7Qwb4kBXSBlyLxlo9ULEByQ9hK3eWD3QaoVT4%2FDO1MmDDBvz6Uk2Vm3wxzjtnthfwBjGN6Shox84QsV16e3G89m3JnCk1w%2Fxrsp4iQ9i8%2FK4CgHed0hVZKyvC23Fs1GQ6btwIrGPBMI6yyckGOqUBWQRf%2FAZdT6AFGuGl%2Fhqf9TIWqoo5G%2BVYDgfaxwJEuK5Qpe6RyCKM92O6XWt%2BYPMzwFeQv8d4fYianzIyIqVH0fOY7fmzzIHv13%2BXOxIf%2BLleSGZHwtfGsaEjCpY9VP%2FEysBFpAGADwoa%2FzAJ4cuzaK0Y5Yacd%2B8aMvhGNR%2BIMetK%2FHoBRnN51dGlmtkkQtzq4R0UT%2FUPVzLgW47aXYLIT7PI6sbf&X-Amz-Signature=04d40ecbbf37aaafc658535b637ac46f54d794792f795eafb2465014fab397be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDADC2WQ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T053431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE590zrxhN5YoFlsWrgchnODDwchRuPQ4mu1s1fK1stLAiEA6mqQ5PhDoezALcB%2FHPhWyw7J%2BMVWHjdgYFhlB8PfGAoq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDEXE6kEjHuNYsVOxgircA5LilUIwy0GnhpKtyz0ROZR%2F%2BS80oTkDc7D6gEHOMBgAR71jY7oEY7Hx0QIVjeZ51jBoeVYMdcOhuz6Ajux%2BgSqA2xEV9Ftc1ChHC4pbDMTjAW%2BAVLMmdGdrovmeH5%2BsDQAP9UBdUwRClRGoLsXdY%2BXmXo55S7gQqvcBOD9E2dfIqdLB5OZ9HOIl97ZLBjmXGM7UvFuOQWVtsmuu2jpzT4T6ZZhDIof2Feek8VSUGcSUZmISAAGeB2S4cajOx5e1Bwcwk0VKG%2BtWFkuAxKxr62%2BUqpRtM2SH7Fu2z3Ga%2Bj6hordSZPtzN6OVg1xu6eAIXvpJcTfZgr2THwA72QtfibZs1NlPPXNIXgVftZpVadQpUPg%2B2u05JufEaljZ%2BvgH7PZAOpfA1KDHq01SXZ57Au2D12%2BmVBT1fSSFJt99f7rWZnCb8ypgf%2BhyFHmrwU28eqp1PuYpjDdwU3d57exhKVfL2eXM2krpu1xc7Rpak5MPO10NxGR7Qwb4kBXSBlyLxlo9ULEByQ9hK3eWD3QaoVT4%2FDO1MmDDBvz6Uk2Vm3wxzjtnthfwBjGN6Shox84QsV16e3G89m3JnCk1w%2Fxrsp4iQ9i8%2FK4CgHed0hVZKyvC23Fs1GQ6btwIrGPBMI6yyckGOqUBWQRf%2FAZdT6AFGuGl%2Fhqf9TIWqoo5G%2BVYDgfaxwJEuK5Qpe6RyCKM92O6XWt%2BYPMzwFeQv8d4fYianzIyIqVH0fOY7fmzzIHv13%2BXOxIf%2BLleSGZHwtfGsaEjCpY9VP%2FEysBFpAGADwoa%2FzAJ4cuzaK0Y5Yacd%2B8aMvhGNR%2BIMetK%2FHoBRnN51dGlmtkkQtzq4R0UT%2FUPVzLgW47aXYLIT7PI6sbf&X-Amz-Signature=5c5150ac6d9b188b9b34adf9acdf3b364f455a1e57d94ecc15e202d8f037dd55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
