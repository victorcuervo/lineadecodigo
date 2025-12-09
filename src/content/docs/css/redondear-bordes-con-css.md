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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKOMAKJO%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T074841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCM98BFDh3LxkJkYiNl4cIfcXtNEwzvBIUQxAt4C9gE%2FQIgAN7V5CCOPfb0hnikoeBmMUwXd%2FLCBgrksjvrK%2BdPdWoqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAOk%2BsGWZxXqoOJmqCrcA%2FGXw41GPjuNhZ%2FM8yNLGunLYrnWVTQ1MWFBBV5%2FnDcWvoRTuOmMVpclw0TZJaW%2FGuEiCzpyPyDji0%2BD3Ei9GRhREYJatFfxjTG60ajO72nd9ME2qHf8e5tzYi1AOCDnT%2FvArVxlgs%2BgHC9iK%2BQMMVxK2%2BWtrCff1bU1yA5X86Gx1JLtq67o6LxGPHmkD7hhETbxfHpmLvkg2FxNCtfW8sSknhlsZ7dHNsUtGwJRM082iwSS%2BbmiLXcfZTfsV8bxxsmW3Z8Ex%2BD9FBvlnfbZ7%2BZKk0vl5qH5KClHwUd3ctYx8EZsotZcmhEGmGtW0hp9pli5zRVcJB%2BwQF5i268m9YnWEtBhd1ulRsamETHaWdp6%2BIL93nxGMCwXJchsvyXXh1%2FO8njf7Kc3SqpvKS6N1iJD7ERUsgeIp9WRMv9%2Br7thd2RGRkNtA2d%2FmMG6hwcKCif23YShTNhgiktjN794jzhVtZ%2B%2FTmLLBaHIzG3cps3gl1RtxDayA57VWMQI54BZWVUDCtDiMf%2BJkqNTdV6IwQJ7trC2PkuQJa9QuQfVg4y3WoD4tlM9sZUbqezXKMpNRMjpSv9UCwrkxfML6hGCpuGUob8rlAToP3rot%2FXqapZ7pJ9TJrfsVgprHCfwMMak38kGOqUBVlJ56N0mCQaG3XJiyaOkCWBplG7O6ODqqnaoHA1ES4hg1ZQr%2FyeMU119JKsjZmRndRecIBf%2FhJhnNvl4a3JbIRa%2FEMreA0%2FjD08xxzB8UPs7hocE2Qk%2BYX%2BrOe8bCjVFcfUEJEIZyLoSojqwJId8%2BREewdne8iM3DT%2FS%2FF%2BD7udKkdELbdk58dgLiSPItNevrlIZqZpJF80iHfcwBW7jJexpOEHC&X-Amz-Signature=691a211ef0faa7b4a1024c925a3e73650cf6b39bb144b5f52678ad73b1e1012d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKOMAKJO%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T074841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCM98BFDh3LxkJkYiNl4cIfcXtNEwzvBIUQxAt4C9gE%2FQIgAN7V5CCOPfb0hnikoeBmMUwXd%2FLCBgrksjvrK%2BdPdWoqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAOk%2BsGWZxXqoOJmqCrcA%2FGXw41GPjuNhZ%2FM8yNLGunLYrnWVTQ1MWFBBV5%2FnDcWvoRTuOmMVpclw0TZJaW%2FGuEiCzpyPyDji0%2BD3Ei9GRhREYJatFfxjTG60ajO72nd9ME2qHf8e5tzYi1AOCDnT%2FvArVxlgs%2BgHC9iK%2BQMMVxK2%2BWtrCff1bU1yA5X86Gx1JLtq67o6LxGPHmkD7hhETbxfHpmLvkg2FxNCtfW8sSknhlsZ7dHNsUtGwJRM082iwSS%2BbmiLXcfZTfsV8bxxsmW3Z8Ex%2BD9FBvlnfbZ7%2BZKk0vl5qH5KClHwUd3ctYx8EZsotZcmhEGmGtW0hp9pli5zRVcJB%2BwQF5i268m9YnWEtBhd1ulRsamETHaWdp6%2BIL93nxGMCwXJchsvyXXh1%2FO8njf7Kc3SqpvKS6N1iJD7ERUsgeIp9WRMv9%2Br7thd2RGRkNtA2d%2FmMG6hwcKCif23YShTNhgiktjN794jzhVtZ%2B%2FTmLLBaHIzG3cps3gl1RtxDayA57VWMQI54BZWVUDCtDiMf%2BJkqNTdV6IwQJ7trC2PkuQJa9QuQfVg4y3WoD4tlM9sZUbqezXKMpNRMjpSv9UCwrkxfML6hGCpuGUob8rlAToP3rot%2FXqapZ7pJ9TJrfsVgprHCfwMMak38kGOqUBVlJ56N0mCQaG3XJiyaOkCWBplG7O6ODqqnaoHA1ES4hg1ZQr%2FyeMU119JKsjZmRndRecIBf%2FhJhnNvl4a3JbIRa%2FEMreA0%2FjD08xxzB8UPs7hocE2Qk%2BYX%2BrOe8bCjVFcfUEJEIZyLoSojqwJId8%2BREewdne8iM3DT%2FS%2FF%2BD7udKkdELbdk58dgLiSPItNevrlIZqZpJF80iHfcwBW7jJexpOEHC&X-Amz-Signature=b5ff005a5b70b0f547db7d3a2ae0839495eae7a4065257fe66d2f63c582f59b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
