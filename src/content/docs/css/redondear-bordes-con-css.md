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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTMM6KPP%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T094553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpBdhV2HzSr1C35%2BzU0kOsN5yyX76Lx2BEciIwMP3HCQIhAICUMhu32FCOOjVVCg0QFuJhH82Ut%2BkluFUyY8Zs7NjsKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyBa1QUucPWW78TnW4q3AOMVpWOwEDjiFlxo28IZxfKrSGvd6R1%2FqPUEJ4lfJxWtc9LGkM0MRbz041heTSmff0EID6HCKkwET7e%2FfHcwBt5%2FUYTu5nyBCgyQMrs6EY42P1Yk4YUOptxug0hMlzYFLeeMCmtHLN2gQXumjEwjor0ECHWOLbN%2BlMVu%2B91fORYT7qwJ2S7E4x%2BC382wo0JBpiByoH9lG9iOTw7oBoIJXLakuaWvmb5TJFdx1YFzxAOYs1Pbw30wxmJVL8K2Owe77ETfZ85ypvVYFOYPghX0pwoZAYc5%2BLv7I4Zfrw2UXlAhtyMZc3CwvgulggEXLSWvn2PVlwqke3s5x%2BS%2F5VitbgUe6BdazS4kDXJ5faCmKkFheQOrTFMVgXzHHomlMm9%2B7wSj3EpuMPgzuCncpSY%2FpuHRIwClfUNE41W0IX5PguOIthfJNzD0mTL19eFnQ85jY9KDK1s6lA5W4wRHR5r5daHBDBtT2fFCWMDtNPvxls5tdpy48T8i%2FfZYDA%2BI3anjaPWuGiqYlDlZm1129tTtSVrUycuez%2BZKA2gDkBFSXMX9Kb5t%2FUeB5A3u0UBBoKOESlBncPOmDwcWgBTVo7SoLyCmcUslaWftyFj0cvgxGQJYChZL%2B1mSd%2BEokQtvTCB7tnJBjqkAf2FOKvR0MIGQaXn1DGlF9GHsyFImC7WWiMaKUfWCBQT9s9GQ4lroaiwizzmtnjUu6s%2Fw29xaKaua0YUveDZU5VpThYLAB3qY%2Fwx7SvapWpYCa4Nxs7rl9dyd9mErlXi63vUl23TvER9E5wf9Vep%2F53vgCmcypkeNLE9h499ZRejOpgtwtXDkFt%2F0X9pOxjzfEOyntyeJrhgHfOCRfdxHpK6W8Ir&X-Amz-Signature=83056a3efcc3be5edea11f6ae2bb550810236372f09045b309dd0b60ac8dace0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTMM6KPP%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T094553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpBdhV2HzSr1C35%2BzU0kOsN5yyX76Lx2BEciIwMP3HCQIhAICUMhu32FCOOjVVCg0QFuJhH82Ut%2BkluFUyY8Zs7NjsKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyBa1QUucPWW78TnW4q3AOMVpWOwEDjiFlxo28IZxfKrSGvd6R1%2FqPUEJ4lfJxWtc9LGkM0MRbz041heTSmff0EID6HCKkwET7e%2FfHcwBt5%2FUYTu5nyBCgyQMrs6EY42P1Yk4YUOptxug0hMlzYFLeeMCmtHLN2gQXumjEwjor0ECHWOLbN%2BlMVu%2B91fORYT7qwJ2S7E4x%2BC382wo0JBpiByoH9lG9iOTw7oBoIJXLakuaWvmb5TJFdx1YFzxAOYs1Pbw30wxmJVL8K2Owe77ETfZ85ypvVYFOYPghX0pwoZAYc5%2BLv7I4Zfrw2UXlAhtyMZc3CwvgulggEXLSWvn2PVlwqke3s5x%2BS%2F5VitbgUe6BdazS4kDXJ5faCmKkFheQOrTFMVgXzHHomlMm9%2B7wSj3EpuMPgzuCncpSY%2FpuHRIwClfUNE41W0IX5PguOIthfJNzD0mTL19eFnQ85jY9KDK1s6lA5W4wRHR5r5daHBDBtT2fFCWMDtNPvxls5tdpy48T8i%2FfZYDA%2BI3anjaPWuGiqYlDlZm1129tTtSVrUycuez%2BZKA2gDkBFSXMX9Kb5t%2FUeB5A3u0UBBoKOESlBncPOmDwcWgBTVo7SoLyCmcUslaWftyFj0cvgxGQJYChZL%2B1mSd%2BEokQtvTCB7tnJBjqkAf2FOKvR0MIGQaXn1DGlF9GHsyFImC7WWiMaKUfWCBQT9s9GQ4lroaiwizzmtnjUu6s%2Fw29xaKaua0YUveDZU5VpThYLAB3qY%2Fwx7SvapWpYCa4Nxs7rl9dyd9mErlXi63vUl23TvER9E5wf9Vep%2F53vgCmcypkeNLE9h499ZRejOpgtwtXDkFt%2F0X9pOxjzfEOyntyeJrhgHfOCRfdxHpK6W8Ir&X-Amz-Signature=dfe75826348a5a11552b40d2c56044340f2e77e2cee7a897c8ce81ffb9284c40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
