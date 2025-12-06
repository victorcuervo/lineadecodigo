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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3UGBOUI%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T035320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH18TwiwufX61kNL%2F1x1MPfMByL%2BL0f0oCFQvlD70gD1AiAtmryF36XhcakkjBmrMMKW3efIN%2F1JZMajWlke7OjMvir%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMdmIV9IrLzVLdWmawKtwDYHlriVSt3rBMyVsyuit%2F%2Bem7Om5hIQuaFXpyzYz%2Fyr9nL0g2C%2B5lxX%2BLH3d%2F79bQ7bzxWzAvAW%2BvvtecfF6IHYq7i5%2FaoiLMnYSOfbW3k5MGkbqHJ5%2Bkxaq%2F%2F8q6YHGm1d1QF8lTrwtv7AnsZqFmtNa%2FRM8CAJywFiZ9M2zFikjADmA2ZiBLMOMbLMeGvVxqgAymlcb2k2Lk4DlKBCJRwN1L3ymu2hiEN2adxYStN9WBfhqq2oFAyfc0WeWV6T12cA15MkomFXyvrYSiwNQ%2BoZT9NqwMxiaBR2b9suG2OWU4WUvfsNzR8QVIFZ3HE1A%2BqU9A83Rek1rWIkC78FpNfhX1d5yDpMtErc1Ld8jYU%2FS5QWFWyrewEx23NpNQfhvunoYaVqJQ%2FKgRoVTBgAVF91iv7FkcUvK3Oa62iJI%2BDVP2TIynU0J7STeT9v0xjGcTeXyVnqNC3bmQeHCq1%2FBILwhr5YKS8MG9R82bgHBUYY9YDU6HNgGK0jY45k%2ByzHUeJK7MMksBqp3xsjaqtZA5sVKBczd32eCPrlZ5Po5BcRkEqa6GgbyFywcBKQAPCEpOY494EhSBmf2Z5ttMfZaOSbHGkAy9d0SniKf2cHyGIP4pcwkibP9ON9jK1s0wn8POyQY6pgE44vFnB3hx3aJPfSMWkYYnRFj2AZQHJusY7ArSEqTmLRkylcvjiDmfvzzWyJZo13wUavWnZasM4G9bG1UjMpjIdx0SNCwnstsI1PH12XJKsgURgK9vSRcjISGQzWSXsGpxIC0Ct4t1DnIBT4lzX8vAisbYT4g819l7%2FaSyNMrKRrmRRQcRmGiKFA2nYUw36WfoXnTnNuys7sfyZlSRTsOtWl8DwFjq&X-Amz-Signature=5a67304a035fdf95126388c61dd9ca7cee2bb106a4ae0fd28f3bec9b503f55a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3UGBOUI%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T035320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH18TwiwufX61kNL%2F1x1MPfMByL%2BL0f0oCFQvlD70gD1AiAtmryF36XhcakkjBmrMMKW3efIN%2F1JZMajWlke7OjMvir%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMdmIV9IrLzVLdWmawKtwDYHlriVSt3rBMyVsyuit%2F%2Bem7Om5hIQuaFXpyzYz%2Fyr9nL0g2C%2B5lxX%2BLH3d%2F79bQ7bzxWzAvAW%2BvvtecfF6IHYq7i5%2FaoiLMnYSOfbW3k5MGkbqHJ5%2Bkxaq%2F%2F8q6YHGm1d1QF8lTrwtv7AnsZqFmtNa%2FRM8CAJywFiZ9M2zFikjADmA2ZiBLMOMbLMeGvVxqgAymlcb2k2Lk4DlKBCJRwN1L3ymu2hiEN2adxYStN9WBfhqq2oFAyfc0WeWV6T12cA15MkomFXyvrYSiwNQ%2BoZT9NqwMxiaBR2b9suG2OWU4WUvfsNzR8QVIFZ3HE1A%2BqU9A83Rek1rWIkC78FpNfhX1d5yDpMtErc1Ld8jYU%2FS5QWFWyrewEx23NpNQfhvunoYaVqJQ%2FKgRoVTBgAVF91iv7FkcUvK3Oa62iJI%2BDVP2TIynU0J7STeT9v0xjGcTeXyVnqNC3bmQeHCq1%2FBILwhr5YKS8MG9R82bgHBUYY9YDU6HNgGK0jY45k%2ByzHUeJK7MMksBqp3xsjaqtZA5sVKBczd32eCPrlZ5Po5BcRkEqa6GgbyFywcBKQAPCEpOY494EhSBmf2Z5ttMfZaOSbHGkAy9d0SniKf2cHyGIP4pcwkibP9ON9jK1s0wn8POyQY6pgE44vFnB3hx3aJPfSMWkYYnRFj2AZQHJusY7ArSEqTmLRkylcvjiDmfvzzWyJZo13wUavWnZasM4G9bG1UjMpjIdx0SNCwnstsI1PH12XJKsgURgK9vSRcjISGQzWSXsGpxIC0Ct4t1DnIBT4lzX8vAisbYT4g819l7%2FaSyNMrKRrmRRQcRmGiKFA2nYUw36WfoXnTnNuys7sfyZlSRTsOtWl8DwFjq&X-Amz-Signature=53cca86eb0f57d7e99a3578bd0a52c0e9374f96bc8c83a73ab115c2c9ec68c24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
