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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WF7KK2KG%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T131309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVjtY%2B1Muq9spdLGziRH77ZXdmRR8XK%2FD25znmxHwUdAIgFsHQiyZHneIpWB2S1pNz3e472Nu2jViEyMZBiqXbcBsq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDOYY2fxD11YMwCYy%2FCrcAyXZ4VXB9dNVcvFIeokZqJdTXbHMaAtRQKv9GsYQ64eYrzWiqoEUuphyUlJVIgEh2sAjvx4cRNI9bd7%2BmNdYi8lu4G9%2FMSUJzL8RaR7U0S2sbC46g5nEy%2FjBNn7ecBEVXGAyVYKnKej7I1zCJQE1NCKw3JXBjtpzO8kowZZKGDZahXT0GooVr4ceZkqB8XyeFoCXab5hy9KWm%2F5A%2BSPNmqZGylvza7ChPEDJBRtdGvZMC5QsFaW2JO4qxmW%2F4GGDmKRIyAQW0wvlqnoaJ%2BiOymy0RWyHZmbDLU0dz2kBayrXRCafjupt%2BCnRB4txmvPS5KTGs%2B3k%2BrvPYXAzNzfxHzF6vUbcXOCa%2F0ZAWfpSG6g5jd%2F1FkWRO3Poq%2B9uULikLy3ao1mfoJTSfrCaJh0kT%2BegpVTFGvxvrYZtK0wnOk1GwXqFdgkEMfIaMP1DOMrvq7HeQECrV0I5QyB9bgvQ2JvWxQi518bxi6egaZNITHejZM91bHL1GQr9ghTrUFF8d35ZbU6%2FgsdKyuP61cUHU%2FgCA7IoKF0YqeyrasEiRsIAD2cVYxU9QtoI3LnGf7n%2F2O%2Be%2FURjfB9Sbz6187UPu44r8kC36fTxp7KZOmdYvrIMK6Z5xmTP7uteAc%2FKMJjIyskGOqUBVOQ02vV8nT3bVmAdo8Eb8s7b9OyctqL3pVimxUcFl7g5zYbPzK3GpuPgrs9CSlSE4BaYwAnFhmbx1aCCPrdhdJZ63GF6Nm%2BUOo7da79I12ondpfNrvW%2FPcKn1f9LXuN0%2BmkUo9MExA7BfztLb2X8cVOyVvC8imKhMSVL9rVDi1xEGWYHNFrFXXaKiWBEqC44QGMUXtb2Fbnf3WoPTlsSygVu8LFF&X-Amz-Signature=06974d597fbe95ab2ff6579b1b3f6fa98fb70b43834b28381ac81eb5e34ecdd9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WF7KK2KG%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T131309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVjtY%2B1Muq9spdLGziRH77ZXdmRR8XK%2FD25znmxHwUdAIgFsHQiyZHneIpWB2S1pNz3e472Nu2jViEyMZBiqXbcBsq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDOYY2fxD11YMwCYy%2FCrcAyXZ4VXB9dNVcvFIeokZqJdTXbHMaAtRQKv9GsYQ64eYrzWiqoEUuphyUlJVIgEh2sAjvx4cRNI9bd7%2BmNdYi8lu4G9%2FMSUJzL8RaR7U0S2sbC46g5nEy%2FjBNn7ecBEVXGAyVYKnKej7I1zCJQE1NCKw3JXBjtpzO8kowZZKGDZahXT0GooVr4ceZkqB8XyeFoCXab5hy9KWm%2F5A%2BSPNmqZGylvza7ChPEDJBRtdGvZMC5QsFaW2JO4qxmW%2F4GGDmKRIyAQW0wvlqnoaJ%2BiOymy0RWyHZmbDLU0dz2kBayrXRCafjupt%2BCnRB4txmvPS5KTGs%2B3k%2BrvPYXAzNzfxHzF6vUbcXOCa%2F0ZAWfpSG6g5jd%2F1FkWRO3Poq%2B9uULikLy3ao1mfoJTSfrCaJh0kT%2BegpVTFGvxvrYZtK0wnOk1GwXqFdgkEMfIaMP1DOMrvq7HeQECrV0I5QyB9bgvQ2JvWxQi518bxi6egaZNITHejZM91bHL1GQr9ghTrUFF8d35ZbU6%2FgsdKyuP61cUHU%2FgCA7IoKF0YqeyrasEiRsIAD2cVYxU9QtoI3LnGf7n%2F2O%2Be%2FURjfB9Sbz6187UPu44r8kC36fTxp7KZOmdYvrIMK6Z5xmTP7uteAc%2FKMJjIyskGOqUBVOQ02vV8nT3bVmAdo8Eb8s7b9OyctqL3pVimxUcFl7g5zYbPzK3GpuPgrs9CSlSE4BaYwAnFhmbx1aCCPrdhdJZ63GF6Nm%2BUOo7da79I12ondpfNrvW%2FPcKn1f9LXuN0%2BmkUo9MExA7BfztLb2X8cVOyVvC8imKhMSVL9rVDi1xEGWYHNFrFXXaKiWBEqC44QGMUXtb2Fbnf3WoPTlsSygVu8LFF&X-Amz-Signature=b7187d2f35a9410b25b29348455ed7c2c5e228eeb7862583181765d7ea64efe2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
