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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7LBYNPW%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T001445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQDQSln0StkhHaDEk%2FG%2Bd0FaxRX4Ego4xwrGq1F2tRFLmQIgQOANxo0uJc6vcy1mHowMB1jttc7LCMK7nLdtMP9Yhw4q%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDMtM8%2BW1MxS5ujgscircAwo%2BAE2ygQP7ojBytz3GOwRQ2TDGxzW3RP4y6sCUfJOECSkwL5gDh9H7Z7RBQZilMyfvn8XEQ8FNLP80UMlY16NwpiWPfuZ9QGX9%2FqVoHIzzwHPHHwEj7%2F3pLV9o22%2FyMpNCma8zz%2FhBfIeZMypZY57g1Ax3KnEU9ORy8S0YEbCVPF4TDvd7qvMQlCt%2BCf%2FJRpfwxIxEUTVlDyLdOHmhdqJrrBOBxrAEmeBRZFCUkv6cjHXYYqWT7hZk5g2eAdIKQZeC4AvxtlYTVYwxuuZEOKyMSdxrqDrJqlTikYGdKFdQ7S1%2BnnVkDDCX%2B18EO9ZWYlcxyZqMT4H%2Fbz5KiSEkuZfq2DQUsNKvflY2YZSMQ0GzQ7623BBa2GuSPfFw%2FZKq8IXoYLGpYjBom%2F34r0pn%2B8u5twhWa3RaWDE5JjDzDkCXcQ66cZyjcRphrEO5Ew2Tqm6ubRkOCybdhcx0x92P%2FQok6k9JvBEvaICUAKIoEWl7PV2J3vZL%2FRLVNpbbpz1aPJGHjiCrPQkwl0%2FoknFwCNB9UeHpt0MzZludagHZkFCnBWM6NsvOTQkYspbytOAPXwxgSaXQADgOIA5vsniq9m%2BYVmFUf7o%2BOLUCaKs%2BF3UGuodSu8u%2Bs8b25Dm3MPSUw8kGOqUBhaBLAyd%2BOQLzsada6De3zaQqZV66q0r1TvcE77N1WEV4z7Phnmtgm6HjMGJv0MPEQ%2BTUTwGgRhlXEMdniDxROj5lUrBjm6k86yULr%2ByFpw4ycJzj8b57KgRm24D7pvAmoQj3IWPbK1OKaTT4wvK6gBHkEqkzqNlBVnCLwwwXWBxWGObzsdfQYaYCmwKQOcMAETAdizHAbKupwQGcjBEjmwCQMiN5&X-Amz-Signature=31992243d09b58520907f80962a83d9cdcc46e96d7dce4f460e6576ddb25f7d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7LBYNPW%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T001445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQDQSln0StkhHaDEk%2FG%2Bd0FaxRX4Ego4xwrGq1F2tRFLmQIgQOANxo0uJc6vcy1mHowMB1jttc7LCMK7nLdtMP9Yhw4q%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDMtM8%2BW1MxS5ujgscircAwo%2BAE2ygQP7ojBytz3GOwRQ2TDGxzW3RP4y6sCUfJOECSkwL5gDh9H7Z7RBQZilMyfvn8XEQ8FNLP80UMlY16NwpiWPfuZ9QGX9%2FqVoHIzzwHPHHwEj7%2F3pLV9o22%2FyMpNCma8zz%2FhBfIeZMypZY57g1Ax3KnEU9ORy8S0YEbCVPF4TDvd7qvMQlCt%2BCf%2FJRpfwxIxEUTVlDyLdOHmhdqJrrBOBxrAEmeBRZFCUkv6cjHXYYqWT7hZk5g2eAdIKQZeC4AvxtlYTVYwxuuZEOKyMSdxrqDrJqlTikYGdKFdQ7S1%2BnnVkDDCX%2B18EO9ZWYlcxyZqMT4H%2Fbz5KiSEkuZfq2DQUsNKvflY2YZSMQ0GzQ7623BBa2GuSPfFw%2FZKq8IXoYLGpYjBom%2F34r0pn%2B8u5twhWa3RaWDE5JjDzDkCXcQ66cZyjcRphrEO5Ew2Tqm6ubRkOCybdhcx0x92P%2FQok6k9JvBEvaICUAKIoEWl7PV2J3vZL%2FRLVNpbbpz1aPJGHjiCrPQkwl0%2FoknFwCNB9UeHpt0MzZludagHZkFCnBWM6NsvOTQkYspbytOAPXwxgSaXQADgOIA5vsniq9m%2BYVmFUf7o%2BOLUCaKs%2BF3UGuodSu8u%2Bs8b25Dm3MPSUw8kGOqUBhaBLAyd%2BOQLzsada6De3zaQqZV66q0r1TvcE77N1WEV4z7Phnmtgm6HjMGJv0MPEQ%2BTUTwGgRhlXEMdniDxROj5lUrBjm6k86yULr%2ByFpw4ycJzj8b57KgRm24D7pvAmoQj3IWPbK1OKaTT4wvK6gBHkEqkzqNlBVnCLwwwXWBxWGObzsdfQYaYCmwKQOcMAETAdizHAbKupwQGcjBEjmwCQMiN5&X-Amz-Signature=143d3ee806064ea39104d96309e11ca9fa7b1620c323782f26deff4c3a07e3f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
