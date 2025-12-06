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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667O5LVTOR%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T193243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAWj13Tfe8pSfeFoU4NJH0Ts%2FakaWcEa6ZBJ1dIyxJKIAiEAtztyXJVAMAtqQNvgG8V7C94AgyGNf08lZSRYRzk4d8Eq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDGzBH%2BRAVsR8oYOqUCrcAxxlKknX2ZXDCOI63TXcFEesiuggfjeMOXwflDgrLrhkZh1CSf8l%2FL1QrXBpw%2Bx%2Fyh2qgqL3OjD2V4%2FTJgfHDn5efmbhFZS%2BKdkdsmbFnIDYr%2BRckAe1pI%2F0ScK0cpC43gNI8oC%2BD8JFlAcj2%2BK4nYfiuRrolJ1qzJP5e0ID8rB2y4jf%2BLFXQfVa1Ri1OHMOGbsNNhYVnqV9gU8eMgBLNO4JupXiJX6kkr3tx0QWyefk6w8GAkSBCCA28gHH4oUrkMQnHjTJvfaq%2FA7d567Eu2FgarsS3j2pOwInPk7B%2F8Vwjeb0J3VFbjsqk31XIT4Q0LkOxTXee6All%2F482FjF%2BoZI8bKEVTZ%2FKX7Fp7ZdNY8h%2BjAjL5hv1JhgNEkF%2BlxHdOUJXHvdnScFq4vrpAynCnI9KWlvLURwCo5AkQVI0MltuTv%2FpIZl%2F84tFeh3Tdz7Yup6Lq8%2F8%2BWX3C%2Blfht%2F%2BcTHr9wnE1szDeu%2F61NpA09NZIvZbdUs3zqzVUa1%2F1LD5%2FDKCqAzEumekv3TRF6Nwvhji69ONVedUn%2FVs7kM4DRScBvDBHFdQxfalEMsXgCmS3iE4UDdl7%2FSOBGWMmQb01kEXWHI4t0fmRhK0gy6EMPkJafv9N5ltCDY0HxTMKrH0ckGOqUBhpfEDWi0wNSyh7U4qsz09ciV4KJOa4AR33Aaj6z%2BeJuAdPMkvvNix4iCoAFY%2BH5SHsprDeoQmBFvJO80tkq2mC8s2nHHQ3IKhA4gEmmgFQ7PrXyXc0J%2FnzFZ2tAAguR4C01cP3c8O4Qd%2BcMq4ZHFiv32n%2BAkDEt37oL9xPqF1GR3DWoopgLJwEmnz7nqsigTftFghK26R3gytmflFtDO2TrVdvxF&X-Amz-Signature=ca0f06061bbead1e78eebf5e65d5d0b60089a45e879d091fdf191a1d3c606bb6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667O5LVTOR%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T193243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAWj13Tfe8pSfeFoU4NJH0Ts%2FakaWcEa6ZBJ1dIyxJKIAiEAtztyXJVAMAtqQNvgG8V7C94AgyGNf08lZSRYRzk4d8Eq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDGzBH%2BRAVsR8oYOqUCrcAxxlKknX2ZXDCOI63TXcFEesiuggfjeMOXwflDgrLrhkZh1CSf8l%2FL1QrXBpw%2Bx%2Fyh2qgqL3OjD2V4%2FTJgfHDn5efmbhFZS%2BKdkdsmbFnIDYr%2BRckAe1pI%2F0ScK0cpC43gNI8oC%2BD8JFlAcj2%2BK4nYfiuRrolJ1qzJP5e0ID8rB2y4jf%2BLFXQfVa1Ri1OHMOGbsNNhYVnqV9gU8eMgBLNO4JupXiJX6kkr3tx0QWyefk6w8GAkSBCCA28gHH4oUrkMQnHjTJvfaq%2FA7d567Eu2FgarsS3j2pOwInPk7B%2F8Vwjeb0J3VFbjsqk31XIT4Q0LkOxTXee6All%2F482FjF%2BoZI8bKEVTZ%2FKX7Fp7ZdNY8h%2BjAjL5hv1JhgNEkF%2BlxHdOUJXHvdnScFq4vrpAynCnI9KWlvLURwCo5AkQVI0MltuTv%2FpIZl%2F84tFeh3Tdz7Yup6Lq8%2F8%2BWX3C%2Blfht%2F%2BcTHr9wnE1szDeu%2F61NpA09NZIvZbdUs3zqzVUa1%2F1LD5%2FDKCqAzEumekv3TRF6Nwvhji69ONVedUn%2FVs7kM4DRScBvDBHFdQxfalEMsXgCmS3iE4UDdl7%2FSOBGWMmQb01kEXWHI4t0fmRhK0gy6EMPkJafv9N5ltCDY0HxTMKrH0ckGOqUBhpfEDWi0wNSyh7U4qsz09ciV4KJOa4AR33Aaj6z%2BeJuAdPMkvvNix4iCoAFY%2BH5SHsprDeoQmBFvJO80tkq2mC8s2nHHQ3IKhA4gEmmgFQ7PrXyXc0J%2FnzFZ2tAAguR4C01cP3c8O4Qd%2BcMq4ZHFiv32n%2BAkDEt37oL9xPqF1GR3DWoopgLJwEmnz7nqsigTftFghK26R3gytmflFtDO2TrVdvxF&X-Amz-Signature=9cd6d3346555df2fb40407acec0402941f786da7d9b94cd97ee2ac381f89256a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
