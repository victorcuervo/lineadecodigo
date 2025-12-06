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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655IWD35L%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T235545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4%2BeXlUT%2FjTLOPk%2BgUzYZ8TjJPYd6xeTbTUQAvquDeTgIgGHwDOS%2FoOEBgeZ4eIyjqNPrkpCEnKzinfj6kPjlOPtIqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB7tHVEup9IZ5O1b4ircA0G6B78eHpf%2Fw%2Bv5Dq1phWiVRtMbVr7rpx3X4LHbCYqavI%2BjXo2p9QLPmHiVL9BL8DnNnk4YvsUNcIpVgd6lb1zcBGQbjAUzD4cJ1MoPrKxJ7Kv5GSX7WM3CWBjylPJRZ%2BgzrWbK2nMhAJIcnCpwKSwuw780S0gl7U%2FmHM351PhKKwQvJFAI0h3wJDfg5JzggbcDIRIpoNNcw82YxPvW5xNX5KDIWbPCmjmThAKhNF%2Br9Vr69w397TtZiQ0dU7veYhTkjFsvzkNM%2FC%2FMRs80nMIDaOD5K4sAvfIXcH%2BEbcSih%2BYQbhQL%2FsNYK8C%2BAb3WG13NSeHtZm%2BQCGeU%2FElp%2FYejw6l0NSysRcM5%2FjYogKFVJdF4cZzfSAHvUyFMuz0yIMd9SCjD7jF0M8lNAhiD2IoSN2Sb2sOEc1xpGhLZXs3%2FnbsRw2S4prEGhajpZYDgFpz7jNcA6XvnwUajtQs4W7mXxypImaEzVet9CIaf3a0qOo9%2FzUV%2BmEnW1c7ms18fM3NRtzccmiEOPiHWbESVKM2j3S8aa5Y076GzeTfxay0TnzhfvZYMmtbsdqZ7wMstbf02XRBdU5CMq9JvtACA%2BatswGq%2Fso%2Bzm%2BAna2d5%2BII5JCvJrcjjqQbFQ9YFMPL90skGOqUBHL12U2RqLn5t6Sl2iEvhs2EliHoo9s%2B1twCfdRJuob3N5v4bMfD249%2ByLqg5ztLEWZURqVsMg3CiIB%2BcbmCqRAoySaA9JGsiNV%2B1bhCEvD9L5ndxTf2MVtn3jpZ1xvoS7VViUlruwVaGk8Y0D8ZKzR8mmtD%2Bbvgy5lkQd75NB9mlZEKuf%2BGMVF6l2VjNOxACzymgiaria7RNNDZVewFzDBb7KmU8&X-Amz-Signature=7f395af7586fcbaeb94ec663cbd0e9656c4ecbfef27394efd2c7c5431ecd9869&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655IWD35L%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T235545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4%2BeXlUT%2FjTLOPk%2BgUzYZ8TjJPYd6xeTbTUQAvquDeTgIgGHwDOS%2FoOEBgeZ4eIyjqNPrkpCEnKzinfj6kPjlOPtIqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB7tHVEup9IZ5O1b4ircA0G6B78eHpf%2Fw%2Bv5Dq1phWiVRtMbVr7rpx3X4LHbCYqavI%2BjXo2p9QLPmHiVL9BL8DnNnk4YvsUNcIpVgd6lb1zcBGQbjAUzD4cJ1MoPrKxJ7Kv5GSX7WM3CWBjylPJRZ%2BgzrWbK2nMhAJIcnCpwKSwuw780S0gl7U%2FmHM351PhKKwQvJFAI0h3wJDfg5JzggbcDIRIpoNNcw82YxPvW5xNX5KDIWbPCmjmThAKhNF%2Br9Vr69w397TtZiQ0dU7veYhTkjFsvzkNM%2FC%2FMRs80nMIDaOD5K4sAvfIXcH%2BEbcSih%2BYQbhQL%2FsNYK8C%2BAb3WG13NSeHtZm%2BQCGeU%2FElp%2FYejw6l0NSysRcM5%2FjYogKFVJdF4cZzfSAHvUyFMuz0yIMd9SCjD7jF0M8lNAhiD2IoSN2Sb2sOEc1xpGhLZXs3%2FnbsRw2S4prEGhajpZYDgFpz7jNcA6XvnwUajtQs4W7mXxypImaEzVet9CIaf3a0qOo9%2FzUV%2BmEnW1c7ms18fM3NRtzccmiEOPiHWbESVKM2j3S8aa5Y076GzeTfxay0TnzhfvZYMmtbsdqZ7wMstbf02XRBdU5CMq9JvtACA%2BatswGq%2Fso%2Bzm%2BAna2d5%2BII5JCvJrcjjqQbFQ9YFMPL90skGOqUBHL12U2RqLn5t6Sl2iEvhs2EliHoo9s%2B1twCfdRJuob3N5v4bMfD249%2ByLqg5ztLEWZURqVsMg3CiIB%2BcbmCqRAoySaA9JGsiNV%2B1bhCEvD9L5ndxTf2MVtn3jpZ1xvoS7VViUlruwVaGk8Y0D8ZKzR8mmtD%2Bbvgy5lkQd75NB9mlZEKuf%2BGMVF6l2VjNOxACzymgiaria7RNNDZVewFzDBb7KmU8&X-Amz-Signature=68b3d19166640fd62a3828d1d6bee3b8bdae92732102a2ac2be605bf42f485d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
