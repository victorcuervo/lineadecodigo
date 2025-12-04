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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662J7256RP%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T093905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQCNX8V6qDffHJBelvC4K3JC02QSnsuQ3wCvqfJn9hRjlwIhALTG4%2BuZTmZFVm0ZDomKA6n%2FSz0V02ky%2FJWvvdlpTz5fKv8DCEMQABoMNjM3NDIzMTgzODA1IgwpKWw7%2B8n4nNdfrOUq3AMB41SbRC3EQLitIqvo0gyVHAe6SHJAQJpAlXi3cvcwUEEo32X27gAUxMTU8hSV2T2DN5V%2F7jiUQjahgjasI30HR9ao5ySgHCgwGUYeftiwlZoAWCEsmnJQCgfw0ftoyg5J0XbDwMAuLVortZDnlZSAD86fa%2Bhp0e8dwYPVh%2F4%2FgcDQI9buUPnY2ubmz%2FbF2BkzFSnKFxUDPp3od9oJD1XLzRE2ZX6pOisRhaxXHZIjDutSj9x%2BGvM6O2O4uJ4DfkudTLVDSbFcOfJxVZVEoDmZg%2BTl%2FkATPGmkAaov8WC0OHjXl8uv6xKvF6p%2FpNsoM7Lf19uB9PIe6m%2F7wpOxwR%2BmkXXqT%2FkE5dvavVeejXEMio8poQH8vBuRwWxO1zhEvJxPc5TSZFxrmsaS0Sehmg2GyJhBcxn1jVcRJaCwL6hzOwikhRVJopiLyab12E8QnErXdIjObtA2KmdBV18GoixRoVXf8CnyHrR9pnuD9UbTVP79hP%2BY4tJJX8Jnw4D6B2cnkrw5xEwqMHqdDQRTEKdEduw5vxXY%2B87ZcrLs%2BC0Hw5JSeLWQKMmATYVwlB%2BLtrCHMwpCsG%2B5AiRkhc7K86slK3POqTcg1oSjiAYsEZCyjT6kwpzAoO7zFYG2xjCirMXJBjqkAXc6wsQ%2FxM36teLzGWc9qcvk5D9Eb0dTo2hj3bLfOCvFCe%2FkMTsajKg%2FpKUuSZQdEkfv42UDcg2mBCuJirsg41H7XP%2BdOa03bWY17sVuldxoI1I%2Fyq2VrS2eyyPLjzwnb0tAtjixTZADkC83ciRPrL5VEPuW9o2zpYnl%2BomiUoPQAD53UlooaKYTpUYswz57k8ToGnqXigecngXE5TSyUXqv0O%2Bf&X-Amz-Signature=7de43907fd953b35f87b7c412a3560428625cb9e33bb0199e182794585844c6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662J7256RP%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T093905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQCNX8V6qDffHJBelvC4K3JC02QSnsuQ3wCvqfJn9hRjlwIhALTG4%2BuZTmZFVm0ZDomKA6n%2FSz0V02ky%2FJWvvdlpTz5fKv8DCEMQABoMNjM3NDIzMTgzODA1IgwpKWw7%2B8n4nNdfrOUq3AMB41SbRC3EQLitIqvo0gyVHAe6SHJAQJpAlXi3cvcwUEEo32X27gAUxMTU8hSV2T2DN5V%2F7jiUQjahgjasI30HR9ao5ySgHCgwGUYeftiwlZoAWCEsmnJQCgfw0ftoyg5J0XbDwMAuLVortZDnlZSAD86fa%2Bhp0e8dwYPVh%2F4%2FgcDQI9buUPnY2ubmz%2FbF2BkzFSnKFxUDPp3od9oJD1XLzRE2ZX6pOisRhaxXHZIjDutSj9x%2BGvM6O2O4uJ4DfkudTLVDSbFcOfJxVZVEoDmZg%2BTl%2FkATPGmkAaov8WC0OHjXl8uv6xKvF6p%2FpNsoM7Lf19uB9PIe6m%2F7wpOxwR%2BmkXXqT%2FkE5dvavVeejXEMio8poQH8vBuRwWxO1zhEvJxPc5TSZFxrmsaS0Sehmg2GyJhBcxn1jVcRJaCwL6hzOwikhRVJopiLyab12E8QnErXdIjObtA2KmdBV18GoixRoVXf8CnyHrR9pnuD9UbTVP79hP%2BY4tJJX8Jnw4D6B2cnkrw5xEwqMHqdDQRTEKdEduw5vxXY%2B87ZcrLs%2BC0Hw5JSeLWQKMmATYVwlB%2BLtrCHMwpCsG%2B5AiRkhc7K86slK3POqTcg1oSjiAYsEZCyjT6kwpzAoO7zFYG2xjCirMXJBjqkAXc6wsQ%2FxM36teLzGWc9qcvk5D9Eb0dTo2hj3bLfOCvFCe%2FkMTsajKg%2FpKUuSZQdEkfv42UDcg2mBCuJirsg41H7XP%2BdOa03bWY17sVuldxoI1I%2Fyq2VrS2eyyPLjzwnb0tAtjixTZADkC83ciRPrL5VEPuW9o2zpYnl%2BomiUoPQAD53UlooaKYTpUYswz57k8ToGnqXigecngXE5TSyUXqv0O%2Bf&X-Amz-Signature=def0923a7935aa524e8ed2922dd58759c97ac7d32b30a8530bfa148104609b8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
