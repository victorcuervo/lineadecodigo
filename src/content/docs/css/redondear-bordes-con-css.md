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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2KQEA2C%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T101950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAiLKczPcusiikLOkU9Tl5pP8RD9%2FUCuXS5XqlTreCGhAiEAnbysq8OCOp7Hi%2F3RDluS5w%2BN325zVvRNT2l66M2kU6kq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDKjKjZHrl8MTQASaByrcAzCEtHEwwubMlA2UTwXfISTrLWhyw%2BrglQ3wkaS7ftAfysPsZzkOqvelGyw4hEQjVq%2FB5WkT1bcgQoOUVWOMDbcDCt55DnBBybVGAkOvzuKU8NT%2FqgIAnm6d817ra%2B2yGYuvepSY4oyczmEA08wl5gbZAEy37pUSNztcXgHwrQTiHecmmfg%2BzG043%2F6JNcN6t%2FR5gWJxr%2FwIe43%2BL8xu4uXDP5MFUCkTCK5NBt8sUeD2N3R2CH6TG5Wb7Ny0u%2FMiQRwKOzsyclFDZTELq6ASkmay0u2B%2BZUlZB%2FXZ2bGU5RukSUZaPBmN%2FBSn1AO47C0GXZvVAKPM23aagEu8qLAuLjxTp5NK8cvWGs4gG5CgRXexaouUBZen%2BE4dO8iERkSyA214q9t0Nmo1dDT7b%2F1qXCZdR5itZt0T3f3DIxoABqjKF2JP%2BZCpVvYD7oqgnEZxPS4xD1YfKh%2FtJ5vctl4RagHsfOk8mnGJJt1GoVhgU9%2Fa0gZYN5FDqZ5Av57mS3RHBa2mBP%2BHhh%2Fkhwlayk7O01gVYLvU%2BJGlF0KfWg3J3WSJ7vU0wuz502uF8sNBE%2FZn%2FP4RxWiacK7%2FXweFShqUwUqHdgJbep5QGgMuotOGBpbd5JC9zzze8nsjFh4MK%2FGyskGOqUBS007GZpb8C7CVfswvww3hUuJJ%2BgOzLl158ordx9zKPofJKsD0tKqavcEjMRq6A5TTus0HryVxIM00Y1RpcsDI3W8f40xPSpTFyrpomuzvg51zlvZbwplUKNDZJK4mygmFRoRnl2%2FIQXJpLuvcZkdBsLnB91Efr%2BEQklAwCD9ZjCOFXR5VFMnLB6LKtA0GiDNp6862lQkc5JZSp%2FcchcuQRb3u%2Bd2&X-Amz-Signature=15e371b24b2cdabae6a3c2f8bc704d77385a65cfcfd9db0bb6d042e77d20dd2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2KQEA2C%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T101950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAiLKczPcusiikLOkU9Tl5pP8RD9%2FUCuXS5XqlTreCGhAiEAnbysq8OCOp7Hi%2F3RDluS5w%2BN325zVvRNT2l66M2kU6kq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDKjKjZHrl8MTQASaByrcAzCEtHEwwubMlA2UTwXfISTrLWhyw%2BrglQ3wkaS7ftAfysPsZzkOqvelGyw4hEQjVq%2FB5WkT1bcgQoOUVWOMDbcDCt55DnBBybVGAkOvzuKU8NT%2FqgIAnm6d817ra%2B2yGYuvepSY4oyczmEA08wl5gbZAEy37pUSNztcXgHwrQTiHecmmfg%2BzG043%2F6JNcN6t%2FR5gWJxr%2FwIe43%2BL8xu4uXDP5MFUCkTCK5NBt8sUeD2N3R2CH6TG5Wb7Ny0u%2FMiQRwKOzsyclFDZTELq6ASkmay0u2B%2BZUlZB%2FXZ2bGU5RukSUZaPBmN%2FBSn1AO47C0GXZvVAKPM23aagEu8qLAuLjxTp5NK8cvWGs4gG5CgRXexaouUBZen%2BE4dO8iERkSyA214q9t0Nmo1dDT7b%2F1qXCZdR5itZt0T3f3DIxoABqjKF2JP%2BZCpVvYD7oqgnEZxPS4xD1YfKh%2FtJ5vctl4RagHsfOk8mnGJJt1GoVhgU9%2Fa0gZYN5FDqZ5Av57mS3RHBa2mBP%2BHhh%2Fkhwlayk7O01gVYLvU%2BJGlF0KfWg3J3WSJ7vU0wuz502uF8sNBE%2FZn%2FP4RxWiacK7%2FXweFShqUwUqHdgJbep5QGgMuotOGBpbd5JC9zzze8nsjFh4MK%2FGyskGOqUBS007GZpb8C7CVfswvww3hUuJJ%2BgOzLl158ordx9zKPofJKsD0tKqavcEjMRq6A5TTus0HryVxIM00Y1RpcsDI3W8f40xPSpTFyrpomuzvg51zlvZbwplUKNDZJK4mygmFRoRnl2%2FIQXJpLuvcZkdBsLnB91Efr%2BEQklAwCD9ZjCOFXR5VFMnLB6LKtA0GiDNp6862lQkc5JZSp%2FcchcuQRb3u%2Bd2&X-Amz-Signature=25da4b3ce9e9c5f310f6da71c5fc016cc02c76911faea5701c34f6f3dcc08451&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
