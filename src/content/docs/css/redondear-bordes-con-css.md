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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6A3PQBS%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T154211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEOOEsCTzuYzrPZDIIP%2F7SCX6Pv0UpFvL%2FtfeG9WQmVkAiEAly%2FjULQQUPvW8G%2BXOm%2F8g%2FOqOQtqAn97AbDHLqJ8ObYqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPbh1C10RUFK0H%2FYCSrcA3xmZeSxdNXG8Atjqox1u2ydqlUU%2B5fCPGfe8zeABJ2h%2BSG41z4GxjJZ4EZNzzwPQVO%2BaFXXUBM8JPonHPEYSD9Yp0Tm4nqHVyXrtdb30IsTvmpQ6CfesFOOgZGgkYY7F9aS%2FcKmYYmHpuJgwlq9lTVMmW%2BVQmOdswoGZbHgejQTTz9tavg3EK%2FBRMGdtDhGo8nVv92qBaxNu8qrrRNIb3gTKw8qfUxvb90kuCifguoWzYBybEnWY0RxD2LKXu7u6CiIl2%2B3zedrX50q%2Ft24g6ryrPyvoIDf19bbAnfxIdWzNsTgKK4jhgxchtBl%2B%2BfCb%2BBc19FEkdmkcYADahTWTV6C5s8FoF3bANrcCdykJOGpDHZyF0K0dD9rVoHtqNnsKFhVXVnXPN4o6%2B3UsPgU%2BtEnGt2BnecCcEbaYJpaC80X%2FR%2FloamJjPifOvObDMBmJm8lAZ3Eo8Lc5HQST3DMw%2Bkol%2B%2B%2FiD8YQfZHKH6gQD9a8EkrBNGr7jOA32xl0q5gMQ1SLWU7x0IyvZWIGRepJyEt3864bWYJqkqR9zKuROLO6U6uixngEdAurOPtOIyqedjshiyq8oNhuSFO0KjNYZyiLc%2FZjF41i6xHQ2PLIAil3KncALseos58IkhRMLq11skGOqUBU49eyOY9rqLxBr49UT5zuzClAjjaptu88K0Qu%2BdK6%2F30Bd8BYy6PtzHiJnb%2BssPx26NoiT48UJCAfg937MYK%2BcPMZnsAXolThyqrVXaZIyzd0hx56AfWYHEzVdXb9wjHIYn1vNX6mmqO%2FTEdcHSJhmeNgeHzxv32mrESBhhKZKsIkMdYqIn1wTg3iXwF1j9XfaaKnnV0TWwpcbeDKbaMCuBUhc1l&X-Amz-Signature=353215e9736c8a70c60adf81fea23d49c60b6a2004459e19d5db5af0a9adca78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6A3PQBS%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T154211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEOOEsCTzuYzrPZDIIP%2F7SCX6Pv0UpFvL%2FtfeG9WQmVkAiEAly%2FjULQQUPvW8G%2BXOm%2F8g%2FOqOQtqAn97AbDHLqJ8ObYqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPbh1C10RUFK0H%2FYCSrcA3xmZeSxdNXG8Atjqox1u2ydqlUU%2B5fCPGfe8zeABJ2h%2BSG41z4GxjJZ4EZNzzwPQVO%2BaFXXUBM8JPonHPEYSD9Yp0Tm4nqHVyXrtdb30IsTvmpQ6CfesFOOgZGgkYY7F9aS%2FcKmYYmHpuJgwlq9lTVMmW%2BVQmOdswoGZbHgejQTTz9tavg3EK%2FBRMGdtDhGo8nVv92qBaxNu8qrrRNIb3gTKw8qfUxvb90kuCifguoWzYBybEnWY0RxD2LKXu7u6CiIl2%2B3zedrX50q%2Ft24g6ryrPyvoIDf19bbAnfxIdWzNsTgKK4jhgxchtBl%2B%2BfCb%2BBc19FEkdmkcYADahTWTV6C5s8FoF3bANrcCdykJOGpDHZyF0K0dD9rVoHtqNnsKFhVXVnXPN4o6%2B3UsPgU%2BtEnGt2BnecCcEbaYJpaC80X%2FR%2FloamJjPifOvObDMBmJm8lAZ3Eo8Lc5HQST3DMw%2Bkol%2B%2B%2FiD8YQfZHKH6gQD9a8EkrBNGr7jOA32xl0q5gMQ1SLWU7x0IyvZWIGRepJyEt3864bWYJqkqR9zKuROLO6U6uixngEdAurOPtOIyqedjshiyq8oNhuSFO0KjNYZyiLc%2FZjF41i6xHQ2PLIAil3KncALseos58IkhRMLq11skGOqUBU49eyOY9rqLxBr49UT5zuzClAjjaptu88K0Qu%2BdK6%2F30Bd8BYy6PtzHiJnb%2BssPx26NoiT48UJCAfg937MYK%2BcPMZnsAXolThyqrVXaZIyzd0hx56AfWYHEzVdXb9wjHIYn1vNX6mmqO%2FTEdcHSJhmeNgeHzxv32mrESBhhKZKsIkMdYqIn1wTg3iXwF1j9XfaaKnnV0TWwpcbeDKbaMCuBUhc1l&X-Amz-Signature=776fdb12613b8b655a10dff5f17f06f829c19ae3ffee0d1ff70b1ba93655a939&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
