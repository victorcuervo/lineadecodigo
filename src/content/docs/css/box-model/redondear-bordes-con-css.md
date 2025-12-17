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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UISPDG5D%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T020914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWRhN4jDbEXPdHtl%2BFtbqnd0wVFbOgN2HGVQCvZL1wewIhAOy65ygtIpiQTGhlHWNl2bqldd2nndsdVB6U%2FGRGmHKpKv8DCHMQABoMNjM3NDIzMTgzODA1Igwo4DiIyQSMuChGPlAq3AONMRSFoGxqnbqznNBxJYpe7OR49tU1xa198RI8Ps77nfka%2FQAArX1FVz7zlM2rPyA43Oqy1S%2F5rwEf9HuxP%2F8LZwcN39e2RCPZoGLVOVPCwuqDrE1XZr52QPW1%2BSbdkr0LKn4Z0yfADAxYibyQjY7yn68T3xbQSJtvN6fyT%2B%2FW3xAzlXxDVuVjA0Qtb563BW%2B1HAqwOM0bcikKQUKDo5CoWUfXeWLb0FVbcZRE6tAEoJMXzUWZMC2N5C7JDj1eoWPiqLA9zxvIdIHRVxVAXHbQoHdQZQrnt2vu5m%2BGUulk07AXMephcVnckKNJTds2wUy3lag5JgIONBP78NerSzZVnTK1Z9n5zZkQ%2BseoOfliVSI9Fjd5JHCfY18xjYMKyPThQKO0Cupvp6drMH5mKL%2Boab046VZCUp7PH6X4dbqPNf2U6Xv8T3micYd%2Fq2f5kpVGxmKS1aDoeJg162am73WhBTBC7fNNAdZHiVxa3IfWM4bW5uG5AQrr8CTqUKSCPiIaSRub1J6hvnCPjDl5gYxdd1UNlksCGwo01IjgsbCb%2FfmWeCBXVxHXTYwpmLayc5i7hkSRUUZgwrKXiShM6kaSYOdzANTwhCvv%2BU4XYRnGu%2FPt0NyZoKQw2dq%2BKjDNlYjKBjqkAenH6sD39LbROLzts9%2BsIaKVp4bkHZw8sV2ONh%2Fg5s5wcDoH1%2BZNij2YBCCOcI0syE1x0%2BVW8CHkutfveJ9Cs%2BGlfkwSglp%2B4N3ck8I%2FxiGXm3Ipv7pWj7syrodRJ%2BmDH6AQ8oRijDB1b5sqwfzjAxLy09r%2BEq5xwolCluribIN0nwllOnYSQPs4a9zdaR%2FXxoxAPoUxqL64K1YN3nnCToad%2BhBl&X-Amz-Signature=c61e1798359e6bf2afc25cdc22d074987b92461238b06273bcc3137394f29a70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UISPDG5D%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T020914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWRhN4jDbEXPdHtl%2BFtbqnd0wVFbOgN2HGVQCvZL1wewIhAOy65ygtIpiQTGhlHWNl2bqldd2nndsdVB6U%2FGRGmHKpKv8DCHMQABoMNjM3NDIzMTgzODA1Igwo4DiIyQSMuChGPlAq3AONMRSFoGxqnbqznNBxJYpe7OR49tU1xa198RI8Ps77nfka%2FQAArX1FVz7zlM2rPyA43Oqy1S%2F5rwEf9HuxP%2F8LZwcN39e2RCPZoGLVOVPCwuqDrE1XZr52QPW1%2BSbdkr0LKn4Z0yfADAxYibyQjY7yn68T3xbQSJtvN6fyT%2B%2FW3xAzlXxDVuVjA0Qtb563BW%2B1HAqwOM0bcikKQUKDo5CoWUfXeWLb0FVbcZRE6tAEoJMXzUWZMC2N5C7JDj1eoWPiqLA9zxvIdIHRVxVAXHbQoHdQZQrnt2vu5m%2BGUulk07AXMephcVnckKNJTds2wUy3lag5JgIONBP78NerSzZVnTK1Z9n5zZkQ%2BseoOfliVSI9Fjd5JHCfY18xjYMKyPThQKO0Cupvp6drMH5mKL%2Boab046VZCUp7PH6X4dbqPNf2U6Xv8T3micYd%2Fq2f5kpVGxmKS1aDoeJg162am73WhBTBC7fNNAdZHiVxa3IfWM4bW5uG5AQrr8CTqUKSCPiIaSRub1J6hvnCPjDl5gYxdd1UNlksCGwo01IjgsbCb%2FfmWeCBXVxHXTYwpmLayc5i7hkSRUUZgwrKXiShM6kaSYOdzANTwhCvv%2BU4XYRnGu%2FPt0NyZoKQw2dq%2BKjDNlYjKBjqkAenH6sD39LbROLzts9%2BsIaKVp4bkHZw8sV2ONh%2Fg5s5wcDoH1%2BZNij2YBCCOcI0syE1x0%2BVW8CHkutfveJ9Cs%2BGlfkwSglp%2B4N3ck8I%2FxiGXm3Ipv7pWj7syrodRJ%2BmDH6AQ8oRijDB1b5sqwfzjAxLy09r%2BEq5xwolCluribIN0nwllOnYSQPs4a9zdaR%2FXxoxAPoUxqL64K1YN3nnCToad%2BhBl&X-Amz-Signature=fd05e156e1df9a762da9399979d51e14bb1e566273a2971928e90eeeee8d8533&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
