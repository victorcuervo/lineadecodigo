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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665R7HD5BJ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T024045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIHIBTnlPNfUb0EU4MBWXnIMYX1woLp4AZ0GJS3yCqSV3AiB%2BBKBVD2FIX2DD7liAehkMdktoTcpnHtDJOyPQZ81T1Sr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIM99J9rUR9m7h1NbQSKtwDwokx8fQ6zHeNcHOln6r43wow6cP2CayTzCB54YrjO5rfhZYPVwul0w6W9IdcipHIYR7w%2Bs83f0ZVCjftuxitc6q2uCVTHOjV1j8pdsjInHhf2VxBUR3%2B1sPVHPwT45oLd7R59Wwu7ze8OnmNLa4xQ3TjS9RcXZVY6PwyHXXQuAfL50DfZQljWlGNl2cwRZyOvU4AE7w8TjGfqsFDSiZ9t40tsjQo12gZ5gkciUIJybDR9WwzmWrCpmZwNywY%2FqvYAqrIHZb8L5xoMWFQux10kPpRpKV4HF77GZJeMuRgEgrbtWGcq3lALa%2FeluWsKKk1AjZg7kQ0NAATv7oCNB5bL3vODC3uRWGK2QhSrtihSq2CdF5vb7IdjVf3GUBcRiafbP6uQM4uugrbk4EVaQN%2BG3DPuqYT1sb72eMdwInN37SvPl%2B%2BNi73fhEyTViWAO766cYDU0Cujur4BiV4Vqw352Pdp2bMl42RrAIqk1Y2oPquiw%2Ffy7HkLCRLWjXvOvhbBOjQcz9S9DlPuYeU5DvhZGHLMRbbpKDuTR91SmucxcqflieQuW6bfv9ohKjedNxTejJFurh1PPg360k1OsGEI5b9rQUofSKOpUb3oyxOtM%2BazMMpqcQ4j3irjaEwxdPDyQY6pgEeZiG%2FAUXuYFVVRDJuNvmPb8E%2BRDD4x7z1buD%2BVLZWvoq79hukAkZXD%2B4q1xmmXOHNpT82HbSsLvm89LtbPUMdVxk70QcxNUF84l6DLo84BS4VB22edZhUTxzBVw9Hdctfvae4tdziqZ9TbbX%2BTC%2F4zaSW4Bf4fphlr%2BQDERyaE%2F7j7hiESAhlEvOoxPMHve1yV2OVFh1vgPmfjzTXGbdlJpjFKXxB&X-Amz-Signature=f17918397346bc0b4174a98bf00628f42ec29fa01ac266e54269405a133d27d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665R7HD5BJ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T024045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIHIBTnlPNfUb0EU4MBWXnIMYX1woLp4AZ0GJS3yCqSV3AiB%2BBKBVD2FIX2DD7liAehkMdktoTcpnHtDJOyPQZ81T1Sr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIM99J9rUR9m7h1NbQSKtwDwokx8fQ6zHeNcHOln6r43wow6cP2CayTzCB54YrjO5rfhZYPVwul0w6W9IdcipHIYR7w%2Bs83f0ZVCjftuxitc6q2uCVTHOjV1j8pdsjInHhf2VxBUR3%2B1sPVHPwT45oLd7R59Wwu7ze8OnmNLa4xQ3TjS9RcXZVY6PwyHXXQuAfL50DfZQljWlGNl2cwRZyOvU4AE7w8TjGfqsFDSiZ9t40tsjQo12gZ5gkciUIJybDR9WwzmWrCpmZwNywY%2FqvYAqrIHZb8L5xoMWFQux10kPpRpKV4HF77GZJeMuRgEgrbtWGcq3lALa%2FeluWsKKk1AjZg7kQ0NAATv7oCNB5bL3vODC3uRWGK2QhSrtihSq2CdF5vb7IdjVf3GUBcRiafbP6uQM4uugrbk4EVaQN%2BG3DPuqYT1sb72eMdwInN37SvPl%2B%2BNi73fhEyTViWAO766cYDU0Cujur4BiV4Vqw352Pdp2bMl42RrAIqk1Y2oPquiw%2Ffy7HkLCRLWjXvOvhbBOjQcz9S9DlPuYeU5DvhZGHLMRbbpKDuTR91SmucxcqflieQuW6bfv9ohKjedNxTejJFurh1PPg360k1OsGEI5b9rQUofSKOpUb3oyxOtM%2BazMMpqcQ4j3irjaEwxdPDyQY6pgEeZiG%2FAUXuYFVVRDJuNvmPb8E%2BRDD4x7z1buD%2BVLZWvoq79hukAkZXD%2B4q1xmmXOHNpT82HbSsLvm89LtbPUMdVxk70QcxNUF84l6DLo84BS4VB22edZhUTxzBVw9Hdctfvae4tdziqZ9TbbX%2BTC%2F4zaSW4Bf4fphlr%2BQDERyaE%2F7j7hiESAhlEvOoxPMHve1yV2OVFh1vgPmfjzTXGbdlJpjFKXxB&X-Amz-Signature=221ac282c2e58229d38ecdbf4e006cb814e2d58ce2940c5e968037ba9e0b8e74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
