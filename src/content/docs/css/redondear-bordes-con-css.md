---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDEAYEO5%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T140115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDuPoTMJUmgrmHNXateAWBcklQ2tgieTZDyQr8nXPVYqgIgOb1AEA6aTOLhD0pgLbEpnIkiKfaqQR2qeYvL%2BdR4EREq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDJ%2FWb5MCWkiOkEUcZircAyEF09oGNCAZMnv2o9tbRqlIiMjc0TfeRKa%2F2QULbQnsZj9jxLnTm2lMjUs5RnddSbAu0%2FciVWwbHbYOuBUS%2BKkVZpt%2FJJAk02fUB4OXNM9bXOo1Tx2tdtlClzTAK09WWgdiYdjeJR%2BQBuSlC43oBxk5f5ihN4Vou78CmXEPRMda7bxBi5NlTsQAN2IapQqX5PVCzWiUCaub5MGc2WNdw9%2FE5V8kntUVnsyrLMu0x6eef5XqdSAGl2%2FgWInAsUNWWMGQnBs%2BfBvLaT0wAgewA%2FmC1ZWNNVCJx%2Bn7bFRvllqVVR1eDgkTbKai41N3kBHb8hKwH2FS4aTUXxqJNBsWfR4QbPOC%2FiGaM4Va4Kyyo9UjWOMocMjkA4BGt2dVZTT7Da17089lMlmhDWHa8KAwZA%2BuItHSg3iPocIB1wM19pnZeu8NVkPyaFryNq7WAgbz3wDkvG%2Bw5ERtZznEyOIB4cYHasbaNI%2FnT%2FkYsFvDpyKiSZdq14MQQpm%2BCQiZz9%2BafjmHsRiN0GPFoo5KTLB4EiKCC%2BNfEWtgNlpvTrpopA5StpnfoAEScKHzSOBfte7eFMaXClDDcBk7CuLmHbIHZmoWu7aZ20mEEeTGaw%2BIzT7Pj4LWKeXgCStng6AgMIuixskGOqUBruvuqU%2FiUDvQCuy6kj%2BYgQMFcSyd1Sckpj9QcYFdKqcBsClyLZ4chERk5Dud%2FeqFISQ5ep61Wo90VLbCThkpPIkfHLnw%2FnkyDuvTxDSuTVRKe8pIlWfKD9b98pj7m03oFyO8%2B5dg8euiyxB2BKPmdBBa1QHm4lX8yc7dRn9lk8GXgBLkfwUGktYfCLHWvz6kDmaFCmT5%2BVzbfzsLx3T5Arvp0C9l&X-Amz-Signature=060cc168df6914999ebd25af2a2dbb71d99ed2c65f34c324c57d09e7f4ae8cd7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDEAYEO5%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T140115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDuPoTMJUmgrmHNXateAWBcklQ2tgieTZDyQr8nXPVYqgIgOb1AEA6aTOLhD0pgLbEpnIkiKfaqQR2qeYvL%2BdR4EREq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDJ%2FWb5MCWkiOkEUcZircAyEF09oGNCAZMnv2o9tbRqlIiMjc0TfeRKa%2F2QULbQnsZj9jxLnTm2lMjUs5RnddSbAu0%2FciVWwbHbYOuBUS%2BKkVZpt%2FJJAk02fUB4OXNM9bXOo1Tx2tdtlClzTAK09WWgdiYdjeJR%2BQBuSlC43oBxk5f5ihN4Vou78CmXEPRMda7bxBi5NlTsQAN2IapQqX5PVCzWiUCaub5MGc2WNdw9%2FE5V8kntUVnsyrLMu0x6eef5XqdSAGl2%2FgWInAsUNWWMGQnBs%2BfBvLaT0wAgewA%2FmC1ZWNNVCJx%2Bn7bFRvllqVVR1eDgkTbKai41N3kBHb8hKwH2FS4aTUXxqJNBsWfR4QbPOC%2FiGaM4Va4Kyyo9UjWOMocMjkA4BGt2dVZTT7Da17089lMlmhDWHa8KAwZA%2BuItHSg3iPocIB1wM19pnZeu8NVkPyaFryNq7WAgbz3wDkvG%2Bw5ERtZznEyOIB4cYHasbaNI%2FnT%2FkYsFvDpyKiSZdq14MQQpm%2BCQiZz9%2BafjmHsRiN0GPFoo5KTLB4EiKCC%2BNfEWtgNlpvTrpopA5StpnfoAEScKHzSOBfte7eFMaXClDDcBk7CuLmHbIHZmoWu7aZ20mEEeTGaw%2BIzT7Pj4LWKeXgCStng6AgMIuixskGOqUBruvuqU%2FiUDvQCuy6kj%2BYgQMFcSyd1Sckpj9QcYFdKqcBsClyLZ4chERk5Dud%2FeqFISQ5ep61Wo90VLbCThkpPIkfHLnw%2FnkyDuvTxDSuTVRKe8pIlWfKD9b98pj7m03oFyO8%2B5dg8euiyxB2BKPmdBBa1QHm4lX8yc7dRn9lk8GXgBLkfwUGktYfCLHWvz6kDmaFCmT5%2BVzbfzsLx3T5Arvp0C9l&X-Amz-Signature=bc24010a6cd374607a844a328da6d69666556664158687a1e1027759a6428f8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
