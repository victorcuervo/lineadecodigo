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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TM7UW3L7%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T082017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDk%2BUXJllCiI7wpOp%2Fz%2BE3tSdQLKhFx3kG4EqXcgSEcyAiEA4hweZKxyTKASwwqQyX7%2BoM1NUsega0hdNIqQhJlWIEQq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDHvyag6Q3eJOZdt9uircA6V0zSbjqKfnnIVBAToXhaHiQUC5k1XKhe1KVH8L1O26A9yMVU2ocQsJPXSJ5eATzroHmnkYR9%2B6qcgUhlJYt1vRtqbYJZZjNF%2F%2BQWVj6Q8LIpQizl1nLK%2FKpgy9si%2Bo82unBWhTyKUSoMo0WvuOQUl9I28JN37j7GmL6fi7mbj%2FHaUZMObVXtQM2NCpiEpXkeW49xzYqVEjXhbVJPBVRa2kA%2BeyOcVTr3bWBtNUrnFGf4AM4v8%2FevjKtTSeYTEyulESu6qNOe4Zk3d7YzLPB5uhJWeDjJPcIdUoUHGdT9l%2BbyAVNjUVgKZQrH0A6UrmrDsE9rZFWFJmtn9j54zi%2F9VXEbvWsjl3QMDpDvdDGYrDHma%2Fui2oWKlwMul881thkex7nbS7STKT9XvPpAIO5w03%2BVMAvaVbl12RhPH7h%2F%2F9Hzh0RkH90CotTSspGW4e0Uvy2y6jok3kU%2FPq4v9W9FlZVRKwhMOllIFagVA5HSFB9bJpR4z%2FjoVoT74wKIn%2BaepN%2Bu2Jq13J1tsb9tdrZrB%2BFnGfJYoq8NHebhA4EDYA13VtzTWupSpBXrWO%2BhGUafg3ynMbBmnnn6JqlVIlEUvLXVHYhwoeCKXVUfAl4T%2BxWcvmmNw3ERNUUZpVMJK9z8kGOqUBRIqrq3Ij%2FIPLXJmdm6VrL6NZXAr9GpM8j0oWnSWho5fgau31yzoqRilidwmn0UApS%2BHawEnocz%2Fme6%2FdmczESgB0129tM2oN7Xje6hYpr%2FRLAz5OhleuBkbMBN47x%2F2LATbrRE3w0glfyVl3HktY8Dmm6I2vNcUvo%2FIkhPlTrXZseq7CGZkbzjllqpqfOg%2FaXUoR8%2BhYjX0kD4Zq0wRn5HwYv2XY&X-Amz-Signature=5fa6133cfbdc47c83f3e53471d7cb128ee963eab0c14c4a6e7a383e90d767376&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TM7UW3L7%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T082017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDk%2BUXJllCiI7wpOp%2Fz%2BE3tSdQLKhFx3kG4EqXcgSEcyAiEA4hweZKxyTKASwwqQyX7%2BoM1NUsega0hdNIqQhJlWIEQq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDHvyag6Q3eJOZdt9uircA6V0zSbjqKfnnIVBAToXhaHiQUC5k1XKhe1KVH8L1O26A9yMVU2ocQsJPXSJ5eATzroHmnkYR9%2B6qcgUhlJYt1vRtqbYJZZjNF%2F%2BQWVj6Q8LIpQizl1nLK%2FKpgy9si%2Bo82unBWhTyKUSoMo0WvuOQUl9I28JN37j7GmL6fi7mbj%2FHaUZMObVXtQM2NCpiEpXkeW49xzYqVEjXhbVJPBVRa2kA%2BeyOcVTr3bWBtNUrnFGf4AM4v8%2FevjKtTSeYTEyulESu6qNOe4Zk3d7YzLPB5uhJWeDjJPcIdUoUHGdT9l%2BbyAVNjUVgKZQrH0A6UrmrDsE9rZFWFJmtn9j54zi%2F9VXEbvWsjl3QMDpDvdDGYrDHma%2Fui2oWKlwMul881thkex7nbS7STKT9XvPpAIO5w03%2BVMAvaVbl12RhPH7h%2F%2F9Hzh0RkH90CotTSspGW4e0Uvy2y6jok3kU%2FPq4v9W9FlZVRKwhMOllIFagVA5HSFB9bJpR4z%2FjoVoT74wKIn%2BaepN%2Bu2Jq13J1tsb9tdrZrB%2BFnGfJYoq8NHebhA4EDYA13VtzTWupSpBXrWO%2BhGUafg3ynMbBmnnn6JqlVIlEUvLXVHYhwoeCKXVUfAl4T%2BxWcvmmNw3ERNUUZpVMJK9z8kGOqUBRIqrq3Ij%2FIPLXJmdm6VrL6NZXAr9GpM8j0oWnSWho5fgau31yzoqRilidwmn0UApS%2BHawEnocz%2Fme6%2FdmczESgB0129tM2oN7Xje6hYpr%2FRLAz5OhleuBkbMBN47x%2F2LATbrRE3w0glfyVl3HktY8Dmm6I2vNcUvo%2FIkhPlTrXZseq7CGZkbzjllqpqfOg%2FaXUoR8%2BhYjX0kD4Zq0wRn5HwYv2XY&X-Amz-Signature=3d3c48924763cab5499f9815d550d41564df4bae51c937edd0d78e8cdb8fca28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
