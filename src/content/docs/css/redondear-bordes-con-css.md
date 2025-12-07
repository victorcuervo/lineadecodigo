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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663M7GBOLM%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T021930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGpzjNkyi7SEqOtaFF4hmGIrSocEl5MXHryS0xnfp0%2FpAiEA%2BQjQNFd1ya6zkFW6sZX3AjRD5iZgXgf5Xw6iGqUm7XUqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLuilA8E7y5IIhs5uCrcA%2FRwcYIRPmrSvLYi8QR7HzczPX2dw3HKekCrxvtEnBkSjZxalJ3%2FZdipCRcvbgQnZnAyKWDgL6ikMl60bADXSFj0DRMJrWNJj5yeTm%2F37Qquz8v%2Brhu4l13a9YIMhGPdEniflg0fHj1q5IGmesgHK1DOQR5TSnGcd3tsc5G%2BVyvU7njWJW01va%2FX1FAd1x5Z7WP%2F9lDa6u76e5sBd3YJ8WiOkAcSHmhiDtW7sqp%2Bp%2FWGfFXIu%2FWTrR0jrhRruQD0Em%2Bn9oHe4bh%2B1Jz7k4dA%2B0HCAXqYg5v4V3TeC0QDByaHbOT20eEiv2IXuVIakKcBEruznY9nZUY3gj573JEiHrvbJjog7hJ8zhdcSsNgsPZEjPzFEIByapCQfZepGWAHaLRqyJGp04uLudSdSeaw9%2B8xYZr5jlTziuN9%2FPv%2FjLgZ9Vj47%2BR5it%2FAQjubCN0yyQu%2BK%2B2akvwCuFSOMuIEt0hdyiMG2COV3eD4swXpVQ7vusopgPQJuOM%2FkbqCO7JgcvVRoyihTaq4QResVyyHn9nbVUH82pYqI5q7sEzPcla3qci%2BSBQWbsInA29pnFPu9lNzXjxrmK%2FdW3oHcq5oWqPZiPXWcra1C%2BweIO1tTt6xonf5TEbfCD3WaPxEMKP90skGOqUBHRW0%2Br%2B4tJ%2F8QixyiBXI%2FiGvW952Y0nXhu8UC8zL1sYoub2qHLtgT%2Fz9FwOCPqChRTiAM77IpRywPKqFrdJPZy9klsa6sRqpU1T79wQ4i7ACn0ORXK97RWO%2BtZsX2ytF2vq%2FtbiZXIML%2FwmTSibK0hDAh22IWm4qP1YwYkPx8GZAlkeFYjZXPeElCIOwoSouBtOz%2FtZFX4fCjpW13ZHJR%2FmiKEgf&X-Amz-Signature=cbec22fa3637954d968a2bb96487c3acb0bb6909e81daf7e0f38c25a46942966&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663M7GBOLM%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T021930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGpzjNkyi7SEqOtaFF4hmGIrSocEl5MXHryS0xnfp0%2FpAiEA%2BQjQNFd1ya6zkFW6sZX3AjRD5iZgXgf5Xw6iGqUm7XUqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLuilA8E7y5IIhs5uCrcA%2FRwcYIRPmrSvLYi8QR7HzczPX2dw3HKekCrxvtEnBkSjZxalJ3%2FZdipCRcvbgQnZnAyKWDgL6ikMl60bADXSFj0DRMJrWNJj5yeTm%2F37Qquz8v%2Brhu4l13a9YIMhGPdEniflg0fHj1q5IGmesgHK1DOQR5TSnGcd3tsc5G%2BVyvU7njWJW01va%2FX1FAd1x5Z7WP%2F9lDa6u76e5sBd3YJ8WiOkAcSHmhiDtW7sqp%2Bp%2FWGfFXIu%2FWTrR0jrhRruQD0Em%2Bn9oHe4bh%2B1Jz7k4dA%2B0HCAXqYg5v4V3TeC0QDByaHbOT20eEiv2IXuVIakKcBEruznY9nZUY3gj573JEiHrvbJjog7hJ8zhdcSsNgsPZEjPzFEIByapCQfZepGWAHaLRqyJGp04uLudSdSeaw9%2B8xYZr5jlTziuN9%2FPv%2FjLgZ9Vj47%2BR5it%2FAQjubCN0yyQu%2BK%2B2akvwCuFSOMuIEt0hdyiMG2COV3eD4swXpVQ7vusopgPQJuOM%2FkbqCO7JgcvVRoyihTaq4QResVyyHn9nbVUH82pYqI5q7sEzPcla3qci%2BSBQWbsInA29pnFPu9lNzXjxrmK%2FdW3oHcq5oWqPZiPXWcra1C%2BweIO1tTt6xonf5TEbfCD3WaPxEMKP90skGOqUBHRW0%2Br%2B4tJ%2F8QixyiBXI%2FiGvW952Y0nXhu8UC8zL1sYoub2qHLtgT%2Fz9FwOCPqChRTiAM77IpRywPKqFrdJPZy9klsa6sRqpU1T79wQ4i7ACn0ORXK97RWO%2BtZsX2ytF2vq%2FtbiZXIML%2FwmTSibK0hDAh22IWm4qP1YwYkPx8GZAlkeFYjZXPeElCIOwoSouBtOz%2FtZFX4fCjpW13ZHJR%2FmiKEgf&X-Amz-Signature=186788fb0398e7eb1763661f311c7ed046f2d10bd2a88e5df35a78b47d6944f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
