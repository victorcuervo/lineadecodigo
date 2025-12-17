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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3SZVDQ4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T085313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTkMX40bLCG%2BxnQnFBomyCuO%2Fd84pftKJjpvzYJCh%2FjAIhAJd9Ejp59lHv0iMlB8dEGF81IckqJa7f4KF2NIcHR6kSKv8DCHkQABoMNjM3NDIzMTgzODA1IgzKGcIHFIOCl%2BldO7kq3APT18dHXmN30mtphplYFu4jZ5h2ptAppWQbmZH1JgKRxAdLLRRjbbV5FQ3cmoAY5XBGIx45SkjoYeV3IpAxSW%2B8G%2Bd7Gw3K0CQE3e9N6tX%2F0ZX3I7Ym6t0DlJH5vtPa38%2B%2F3EToy7jd6qFTV2CwCZHP3%2BzBB%2FjtenLMvDtJ6%2F27gTALvjkOtI2fLxmmNyTRCeV2qpJFoYuPgzVvmc%2F%2B4wZdfqO%2BWLjgqp54HcUIEmGwVwuajwEC8aXaMt4qRShvFyWcmTC87rUOM6W5tNFv3boKg8S6M%2FrZteLHm2rQ%2BADNWVptNl6U%2FhdaJrNS%2BbE9Y%2F4uy2hEz0WbJVBGTxnbgvr5RUoBVJPodmbEHvS4BJW4vg5MjHk1Hlz8JS9opo6Nq%2B9v5ImZlHlF1YXmnlWY5KtMzpA%2BOIaksXRy0DIOvnngJKVMMrxXC4GD2snzEmq5fZ1rCeauwwgJICNTEg5MTG0xEI7p1vEKC5HGvwa5kwLNGRqdjsWTesdeP18uItCx0GMeAJLrxiuSrOxu3VpcHmQ9SLRdVssCNT3pznfpetyO22RU0ME3Uctc%2F29krddHeA2s%2BlUivZ27NS3nHM1MQDpZYBWKr9k3Z3k5QNdxLGpdX8a9Q9Y4Nh3iPgGQFzC10onKBjqkARZhg%2FRQ7rXJ7DdmJ87XQin8dwooBu35ZVzmXr5S63a7xrFMlDYMFLZqPQAe5HRmv94yrfDvfIzghZOZEGh3zcdujCEMX0ig5p7SSVWXotEFfBqDrmWC0ud73VXrFOCMavpu4kuudND6x8dAInlw1VvtoliKALfOYd53TEtY6LJgh%2BB0xdyzcrukR3K7oXEYycrLSYuOLrWSO4h%2FZLvtYTeZnqIp&X-Amz-Signature=9945dfc5db046e2db4f78c4ac91d6019e9cdc9b9eb2de78e7ab80067c940a37d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3SZVDQ4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T085313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTkMX40bLCG%2BxnQnFBomyCuO%2Fd84pftKJjpvzYJCh%2FjAIhAJd9Ejp59lHv0iMlB8dEGF81IckqJa7f4KF2NIcHR6kSKv8DCHkQABoMNjM3NDIzMTgzODA1IgzKGcIHFIOCl%2BldO7kq3APT18dHXmN30mtphplYFu4jZ5h2ptAppWQbmZH1JgKRxAdLLRRjbbV5FQ3cmoAY5XBGIx45SkjoYeV3IpAxSW%2B8G%2Bd7Gw3K0CQE3e9N6tX%2F0ZX3I7Ym6t0DlJH5vtPa38%2B%2F3EToy7jd6qFTV2CwCZHP3%2BzBB%2FjtenLMvDtJ6%2F27gTALvjkOtI2fLxmmNyTRCeV2qpJFoYuPgzVvmc%2F%2B4wZdfqO%2BWLjgqp54HcUIEmGwVwuajwEC8aXaMt4qRShvFyWcmTC87rUOM6W5tNFv3boKg8S6M%2FrZteLHm2rQ%2BADNWVptNl6U%2FhdaJrNS%2BbE9Y%2F4uy2hEz0WbJVBGTxnbgvr5RUoBVJPodmbEHvS4BJW4vg5MjHk1Hlz8JS9opo6Nq%2B9v5ImZlHlF1YXmnlWY5KtMzpA%2BOIaksXRy0DIOvnngJKVMMrxXC4GD2snzEmq5fZ1rCeauwwgJICNTEg5MTG0xEI7p1vEKC5HGvwa5kwLNGRqdjsWTesdeP18uItCx0GMeAJLrxiuSrOxu3VpcHmQ9SLRdVssCNT3pznfpetyO22RU0ME3Uctc%2F29krddHeA2s%2BlUivZ27NS3nHM1MQDpZYBWKr9k3Z3k5QNdxLGpdX8a9Q9Y4Nh3iPgGQFzC10onKBjqkARZhg%2FRQ7rXJ7DdmJ87XQin8dwooBu35ZVzmXr5S63a7xrFMlDYMFLZqPQAe5HRmv94yrfDvfIzghZOZEGh3zcdujCEMX0ig5p7SSVWXotEFfBqDrmWC0ud73VXrFOCMavpu4kuudND6x8dAInlw1VvtoliKALfOYd53TEtY6LJgh%2BB0xdyzcrukR3K7oXEYycrLSYuOLrWSO4h%2FZLvtYTeZnqIp&X-Amz-Signature=19218db7a99fc05354ffa4c785c196614b23efc04598bad8e4a109e27f50eca6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
