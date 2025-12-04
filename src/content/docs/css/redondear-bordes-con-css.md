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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZ7Q3656%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T234828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICoZDTDn%2B%2FU8rXphNCglyCH0%2BY0ne9%2B4%2FAaME9yc6dN0AiEAvEi%2FDOgH2PjxeFTKg0Yv2Aa7jq4WQx33dFaiNusV%2F%2Bwq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDE0cEPOnzqgMz7YsZyrcA%2FPOijdd8ervNTcbqzRDGhqkB%2Be%2F%2Bo%2F5RNZ%2Br4boo4qw5IgfTFmxFMoyeBzJ%2FIVJxTds7WUeRHLeuIQm9NPGNSMPgVtFB33300FubiRNH0nPxEitPapoIP9IuhuPIpZaFw1%2BhgLy4NV5ZZbLBHn6%2FnPZzKXlA6UKvDMqE1UK0LcQfJem3hPdjfUPoscn0rmvRa8AuRYi9bewqa0jd40nmTYGqDMGdJdqBwC7OK8VII%2BhXRZNVBLro3b9fhefwBz7%2FanQMvwIqdSnnj8G1vQTdneES4uPbHS5YDC%2FBA%2BULYgR6%2BgdDuxZnkbSXO1FRmc8EarIzoIASP%2FGqmRfU1r4MSJC5RzTwGrNSO0Zq0Y6jLmOiWfjc1yeARsO46jwz4ZzlGrIMdA%2FXKW%2BtdiMp%2BYgYjUolnber8zwHwsZLOPI95gadvv%2BNf4iZjVsiP6ZPEAxyc0Fz9BcNsOds8wOlHVU2goGrOwTn%2BvYIZRMSlRWaRSt2D2kdneHGixJzZN13g3j9GefAdn2SieLOTv8nLrtVzWgMBtE658Km6j8P1hVBaySUF8NWMR7myKKwaKEdCcd4n7eR5AuvJmNzTnPpegSXe5%2Bnrvxj8ygBX1f07k0EUUF7%2BkIhkw8BsyZmU3vMKGMyMkGOqUBAGBiqUcAcqFMNI9eZaW%2BngHOiI61yGnll10kIwyoTs1t3x%2Fdl17pXuljnoClJgKS%2BonSk%2BLGpcR3kYH3uJz1Plj%2BbZt7LMYVCxwZ2AqoXk8zTmBcs6Cp4HGF%2Fa5p1pkiTTGCydUNd%2BqjOfZ4ewmg0vVp2NEe9w40fOKYaPO8y6Kz2DqueR0MsDhtDvABVSbDCpSuQSgQd%2B2JoDQdSYyJ2qQuR18C&X-Amz-Signature=c812cdf30927f64e175578252f8757d0b150519725f24cf46a11d4f1be8b1b36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZ7Q3656%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T234828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICoZDTDn%2B%2FU8rXphNCglyCH0%2BY0ne9%2B4%2FAaME9yc6dN0AiEAvEi%2FDOgH2PjxeFTKg0Yv2Aa7jq4WQx33dFaiNusV%2F%2Bwq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDE0cEPOnzqgMz7YsZyrcA%2FPOijdd8ervNTcbqzRDGhqkB%2Be%2F%2Bo%2F5RNZ%2Br4boo4qw5IgfTFmxFMoyeBzJ%2FIVJxTds7WUeRHLeuIQm9NPGNSMPgVtFB33300FubiRNH0nPxEitPapoIP9IuhuPIpZaFw1%2BhgLy4NV5ZZbLBHn6%2FnPZzKXlA6UKvDMqE1UK0LcQfJem3hPdjfUPoscn0rmvRa8AuRYi9bewqa0jd40nmTYGqDMGdJdqBwC7OK8VII%2BhXRZNVBLro3b9fhefwBz7%2FanQMvwIqdSnnj8G1vQTdneES4uPbHS5YDC%2FBA%2BULYgR6%2BgdDuxZnkbSXO1FRmc8EarIzoIASP%2FGqmRfU1r4MSJC5RzTwGrNSO0Zq0Y6jLmOiWfjc1yeARsO46jwz4ZzlGrIMdA%2FXKW%2BtdiMp%2BYgYjUolnber8zwHwsZLOPI95gadvv%2BNf4iZjVsiP6ZPEAxyc0Fz9BcNsOds8wOlHVU2goGrOwTn%2BvYIZRMSlRWaRSt2D2kdneHGixJzZN13g3j9GefAdn2SieLOTv8nLrtVzWgMBtE658Km6j8P1hVBaySUF8NWMR7myKKwaKEdCcd4n7eR5AuvJmNzTnPpegSXe5%2Bnrvxj8ygBX1f07k0EUUF7%2BkIhkw8BsyZmU3vMKGMyMkGOqUBAGBiqUcAcqFMNI9eZaW%2BngHOiI61yGnll10kIwyoTs1t3x%2Fdl17pXuljnoClJgKS%2BonSk%2BLGpcR3kYH3uJz1Plj%2BbZt7LMYVCxwZ2AqoXk8zTmBcs6Cp4HGF%2Fa5p1pkiTTGCydUNd%2BqjOfZ4ewmg0vVp2NEe9w40fOKYaPO8y6Kz2DqueR0MsDhtDvABVSbDCpSuQSgQd%2B2JoDQdSYyJ2qQuR18C&X-Amz-Signature=3757a418d2f5f63e7e9e575c4d95f68e183a9bd126eb85116b878a70e8570779&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
