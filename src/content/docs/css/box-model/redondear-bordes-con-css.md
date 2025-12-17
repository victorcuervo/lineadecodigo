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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZUCHCYR%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T110358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFblhNuHXiwz4IwmZdgMKSg3cg%2FedzkJcHf7qxB4MWj4AiEAs8cfKb6sGV6GWfecmxnJIuistgVxlhtgafHxGzi3PUoq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDAJvTKhnKrC1oSUJ3SrcA4ZceQ3NhSsNQ8skmiZ10CfrFzJY8jld9to93C0wihz%2BuXuS2pnsfjuhEETtNCSI1OT%2BfgzADqSlqd3WlzvR1o%2BtGHgSklAl%2F0u%2BhK6v0nfosv%2BjXEOJuZ0dvOfpSUi%2FOqc6iwrxPNNV%2FZLF6vM328DXDrQc4dfIYnVew%2BdMTxfcXneOBoHdmrbD0Xom8U3P7ZMz61ABe%2B7vKG7GZq1Zz41CnEnM1toknEKMgyX0j7RBf5RTwNHp5QQ95%2FcNYeJC%2FhEyONwIOPGdxTDiSMpLlTy5%2FYrwsw%2F5uES0RGU1jb%2BgUdniIQWi3LkO5E17IDFknUo8ZbMPuJOomI2yG56h3b5bhbc2xeTeNSucbv1SNwgjvp8PxjHQyftKkpzANBTkGDbbD53oslfLRAOW%2FpgzgPu2LQQxN9N0abPmOCl%2FVGjLrwGaKlhx2Iw6e78ac0qHQS%2Fg4jJGcy42yXwN4Gy1k%2FFHXb9QMCyVfKbWWWiw1ZgqFZIR6IlZpUgMrDMGfd6n%2Fwr1L8P9VJR15iTw89t4QeiSslFFsGT9LkU%2FdbRb%2FOMV%2FKU%2BuS%2FEHwOeJOeEgxclj9gC2W1mpOlEgboArgz33NBVtGM1DK97Eaa6ynZeQizpeT4w3SRXZv2smTsaMN%2BOisoGOqUBs1exAW8kUj0RXLaWtc62bSu3yrsGs9soGdpGNHXEpkuNAX3jA34Xy0hCa53CmbZ%2FBvea3SlW6qdPFK1C4UlxnXlSCmI8FlY18%2BhFav3ldgFOAnnbxbxp%2FZrFUEA1wtxea5ChdUn%2FCNL1hrUeJ6drLac3JNwbOR6Dv8GXgQyINVn0%2FqJO21YyS%2B8IWuY5pRrN2ZTskhyW9jTdju4%2BOFSd5nFLsIdN&X-Amz-Signature=84ce011f019e49640cade7bacf2b40286faff15a0e10f97382992e0b37395a65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZUCHCYR%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T110358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFblhNuHXiwz4IwmZdgMKSg3cg%2FedzkJcHf7qxB4MWj4AiEAs8cfKb6sGV6GWfecmxnJIuistgVxlhtgafHxGzi3PUoq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDAJvTKhnKrC1oSUJ3SrcA4ZceQ3NhSsNQ8skmiZ10CfrFzJY8jld9to93C0wihz%2BuXuS2pnsfjuhEETtNCSI1OT%2BfgzADqSlqd3WlzvR1o%2BtGHgSklAl%2F0u%2BhK6v0nfosv%2BjXEOJuZ0dvOfpSUi%2FOqc6iwrxPNNV%2FZLF6vM328DXDrQc4dfIYnVew%2BdMTxfcXneOBoHdmrbD0Xom8U3P7ZMz61ABe%2B7vKG7GZq1Zz41CnEnM1toknEKMgyX0j7RBf5RTwNHp5QQ95%2FcNYeJC%2FhEyONwIOPGdxTDiSMpLlTy5%2FYrwsw%2F5uES0RGU1jb%2BgUdniIQWi3LkO5E17IDFknUo8ZbMPuJOomI2yG56h3b5bhbc2xeTeNSucbv1SNwgjvp8PxjHQyftKkpzANBTkGDbbD53oslfLRAOW%2FpgzgPu2LQQxN9N0abPmOCl%2FVGjLrwGaKlhx2Iw6e78ac0qHQS%2Fg4jJGcy42yXwN4Gy1k%2FFHXb9QMCyVfKbWWWiw1ZgqFZIR6IlZpUgMrDMGfd6n%2Fwr1L8P9VJR15iTw89t4QeiSslFFsGT9LkU%2FdbRb%2FOMV%2FKU%2BuS%2FEHwOeJOeEgxclj9gC2W1mpOlEgboArgz33NBVtGM1DK97Eaa6ynZeQizpeT4w3SRXZv2smTsaMN%2BOisoGOqUBs1exAW8kUj0RXLaWtc62bSu3yrsGs9soGdpGNHXEpkuNAX3jA34Xy0hCa53CmbZ%2FBvea3SlW6qdPFK1C4UlxnXlSCmI8FlY18%2BhFav3ldgFOAnnbxbxp%2FZrFUEA1wtxea5ChdUn%2FCNL1hrUeJ6drLac3JNwbOR6Dv8GXgQyINVn0%2FqJO21YyS%2B8IWuY5pRrN2ZTskhyW9jTdju4%2BOFSd5nFLsIdN&X-Amz-Signature=40db260a09b8af919727c29ce2703a94311585b2501bfce6da515bd97e78af32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
