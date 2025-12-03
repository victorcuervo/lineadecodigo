---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastupdates: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKFKTKWS%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T214438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQDjn%2FHMA4lbASEiINAvoLBTMquYNhUZ29%2FXFpbSIpB3ugIgQgchtWN%2FdlOHOvera2%2BTOEiYR6M6vPmd%2Fn3ngXirBfkq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDIHY3C6ep8VaN1wIZyrcA81ZthRAlGStIiuJxB4ip2bnUCFxbQlpuo9gvIsWdFHMpitrDxhf7nB%2B21nsBVvIW0RQaPy4gzNHb4zuPFlv%2FmXCxgHVzAn3WUsTA1xN9DvkDU1ksL%2FZrtEeNyka6zZgfnrYGibkVCwRMBv2ssbYJs3EpQFuz4YAQ9l5LQte464ML4Ckoy%2BEZ%2FoUvwNluQcqIIt9Sw%2FOZz0YPj7DRaeNjEez8lwCozweYOHTAMjFXRYlYhY5G2pS%2Bsdbni%2FZN%2F%2FzDwDHdjcLYXCurrRGWpgj73VOEjt4TfosCx3%2BALMFqeMdXoXy6v0Oy5U79gL2SZzki49CcmW4oT66gySh4JBP92IZEBvjwlZXGjoqmeBMhvYB6Ep8i21Oa8QNI8gQuW10Ylw4VdudiK3pDneR%2BxV30j3mDgbZ%2FzhGHtqcv630mqm%2Fms3mxxV0R8I389uHOSiAGS8qRm%2F2q6cMqwielGLF2%2F2acNiC%2FWTR%2FpoEjtXXlfsQQXmCh%2Baga8APwY2QWgkN%2FSqBPo2gSjMbFBlPxcwRulz9uK%2FGCMKNoLEoEh2fdOSmbHuNGC9QDMWmDNhEQ2UTNK98GEzeaic5UM7Q2yZwwL4VF8d07qaimyIX%2B1woKS0EVtfmRQd2LJYTrXZTMKzcwskGOqUB1x7YsP9L2L1GdPX%2Fy4SayNVuxPT65Qtstuqnv%2BZzIgip4ZFzyQWtM1JT5NhADZbJxoKO1m8DL3bhPZVXHyrq3uC9hfdrgbB9vOgz1E8gy3Ea4AFQh4TIQY9EFu9HHwHvcfoE4uFVus4YpTXtReTj0K%2FkSgPWGAicN118x%2B03tuXlBJQILDrHFojCNmfnF66M9Bdr7YYD9n1MLLQT6OqDPvmMdkig&X-Amz-Signature=05f25817206506c385d8381810503eed030b7f08df8c5543c58548b9a95f46f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKFKTKWS%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T214438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQDjn%2FHMA4lbASEiINAvoLBTMquYNhUZ29%2FXFpbSIpB3ugIgQgchtWN%2FdlOHOvera2%2BTOEiYR6M6vPmd%2Fn3ngXirBfkq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDIHY3C6ep8VaN1wIZyrcA81ZthRAlGStIiuJxB4ip2bnUCFxbQlpuo9gvIsWdFHMpitrDxhf7nB%2B21nsBVvIW0RQaPy4gzNHb4zuPFlv%2FmXCxgHVzAn3WUsTA1xN9DvkDU1ksL%2FZrtEeNyka6zZgfnrYGibkVCwRMBv2ssbYJs3EpQFuz4YAQ9l5LQte464ML4Ckoy%2BEZ%2FoUvwNluQcqIIt9Sw%2FOZz0YPj7DRaeNjEez8lwCozweYOHTAMjFXRYlYhY5G2pS%2Bsdbni%2FZN%2F%2FzDwDHdjcLYXCurrRGWpgj73VOEjt4TfosCx3%2BALMFqeMdXoXy6v0Oy5U79gL2SZzki49CcmW4oT66gySh4JBP92IZEBvjwlZXGjoqmeBMhvYB6Ep8i21Oa8QNI8gQuW10Ylw4VdudiK3pDneR%2BxV30j3mDgbZ%2FzhGHtqcv630mqm%2Fms3mxxV0R8I389uHOSiAGS8qRm%2F2q6cMqwielGLF2%2F2acNiC%2FWTR%2FpoEjtXXlfsQQXmCh%2Baga8APwY2QWgkN%2FSqBPo2gSjMbFBlPxcwRulz9uK%2FGCMKNoLEoEh2fdOSmbHuNGC9QDMWmDNhEQ2UTNK98GEzeaic5UM7Q2yZwwL4VF8d07qaimyIX%2B1woKS0EVtfmRQd2LJYTrXZTMKzcwskGOqUB1x7YsP9L2L1GdPX%2Fy4SayNVuxPT65Qtstuqnv%2BZzIgip4ZFzyQWtM1JT5NhADZbJxoKO1m8DL3bhPZVXHyrq3uC9hfdrgbB9vOgz1E8gy3Ea4AFQh4TIQY9EFu9HHwHvcfoE4uFVus4YpTXtReTj0K%2FkSgPWGAicN118x%2B03tuXlBJQILDrHFojCNmfnF66M9Bdr7YYD9n1MLLQT6OqDPvmMdkig&X-Amz-Signature=28aeea97484bf6932643959a724fa09cd8ac44de62048d2633e3db4a108bcd71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
