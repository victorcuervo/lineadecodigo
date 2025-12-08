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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664R34MXRV%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T181852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDaIo7l8Y%2F9A9J0YRTSUhUe7iUNaF0BAtetNHr%2F12OgmQIgUn%2FIP%2Bx7TY65VovJ8byBAm%2FVH5G%2FMREgFIm1UdqWJqoqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMZuindK4Jl0xeOYVSrcAw%2BgrGdgEi4oXM8KO1YeyzXseiX7t1AHbNAa06T6IFEFwOEorw50CCA%2FLH5vichFWSM%2BtoZaLP3znf7rjkT1HbNq%2FYXDhsxVI0MEqlr2%2BSCUhsT3bkLRazJq3J3L6ZOCtkHYYmU%2Bt1uXiP4Yfa5v05gaxEMkroQSKX04TSX3rnx6SsMLawlN9vLIbFpa8E06Au%2BScIguzrZrp3li1Fye%2FyJ4Dw5KSkiaE3rQfEepkdf9iEDxhZMsI6HLxc9e3HEllmh%2Fqrakf8sbMXgJHj75lgQ6awHPezgFm2eGFR2jmTj8XguCNsioyFf6ZJUwo%2BRyZiADXzui6%2FBau5Ah58j4PzeOzQQKzAEoyd9RDsaYqXdShfZPp4lcOiXGiAM3wnqS%2FWKI3JZ5aHWnPK5Q9CuHPzt17MZlACY5131KnB5lF8Tvqq%2FctkSPV1VU%2B%2BuJbabV1rWUPbHA%2FdsSC4RLD6iFVUkonjZQrTDoD4%2BJ4seqSITRAQWfn6nN4JdqQ2cJPG%2BYpvVEB98dZwOGaXYhs6i4KQffsKVRIwy65pXro9bsiIx62bxjAms%2FzzFLchw9XLAl%2BGVHLr%2Bx09bStV%2BNjrcfFmfDcyLTHd5i8BqBOjBaH%2Fkmigfet56oIPxa0scVMKKH3MkGOqUB%2FA3lTBQy7Tq189X79QmskXdc77UMiC3DWVUKtd%2BfstI2vExte2TJk503YHBVchuUiO7nzIlszQH5kUW1glLc4Y5VoFqw0WnrbO33k7%2FBGCPJUm17o8pmNjLJQphkGoidnjNt063adhs3QNVO%2FnOLb1Mbp4XWHlQBM5jou2ZB2ywXzpXaHZ3kq24XyJ%2FEzMjDqTBKsWxVSrC%2BWOtV8DyUGBHFaWDp&X-Amz-Signature=e4ba1da0cf45ff48582adaaedb0884e2222ce48a311bb966acd1c04bd78e44d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664R34MXRV%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T181852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDaIo7l8Y%2F9A9J0YRTSUhUe7iUNaF0BAtetNHr%2F12OgmQIgUn%2FIP%2Bx7TY65VovJ8byBAm%2FVH5G%2FMREgFIm1UdqWJqoqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMZuindK4Jl0xeOYVSrcAw%2BgrGdgEi4oXM8KO1YeyzXseiX7t1AHbNAa06T6IFEFwOEorw50CCA%2FLH5vichFWSM%2BtoZaLP3znf7rjkT1HbNq%2FYXDhsxVI0MEqlr2%2BSCUhsT3bkLRazJq3J3L6ZOCtkHYYmU%2Bt1uXiP4Yfa5v05gaxEMkroQSKX04TSX3rnx6SsMLawlN9vLIbFpa8E06Au%2BScIguzrZrp3li1Fye%2FyJ4Dw5KSkiaE3rQfEepkdf9iEDxhZMsI6HLxc9e3HEllmh%2Fqrakf8sbMXgJHj75lgQ6awHPezgFm2eGFR2jmTj8XguCNsioyFf6ZJUwo%2BRyZiADXzui6%2FBau5Ah58j4PzeOzQQKzAEoyd9RDsaYqXdShfZPp4lcOiXGiAM3wnqS%2FWKI3JZ5aHWnPK5Q9CuHPzt17MZlACY5131KnB5lF8Tvqq%2FctkSPV1VU%2B%2BuJbabV1rWUPbHA%2FdsSC4RLD6iFVUkonjZQrTDoD4%2BJ4seqSITRAQWfn6nN4JdqQ2cJPG%2BYpvVEB98dZwOGaXYhs6i4KQffsKVRIwy65pXro9bsiIx62bxjAms%2FzzFLchw9XLAl%2BGVHLr%2Bx09bStV%2BNjrcfFmfDcyLTHd5i8BqBOjBaH%2Fkmigfet56oIPxa0scVMKKH3MkGOqUB%2FA3lTBQy7Tq189X79QmskXdc77UMiC3DWVUKtd%2BfstI2vExte2TJk503YHBVchuUiO7nzIlszQH5kUW1glLc4Y5VoFqw0WnrbO33k7%2FBGCPJUm17o8pmNjLJQphkGoidnjNt063adhs3QNVO%2FnOLb1Mbp4XWHlQBM5jou2ZB2ywXzpXaHZ3kq24XyJ%2FEzMjDqTBKsWxVSrC%2BWOtV8DyUGBHFaWDp&X-Amz-Signature=7a300678d95cd43b3b57bf6ef0bc68f02b769de6c8bfeea8eadf0d400d875bf4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
