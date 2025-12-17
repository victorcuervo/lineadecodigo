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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ENP2PJY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T132514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqwMOEuQQi%2BOWjmHt5%2Bz5reyP0Sid0i%2BP7H49nfEjpMQIgVbAQlidsulKLXA8lecg0Nyir7yzwGNIT4BJ859qc9mkq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDM8C2uMp1WgNanMfvyrcA3YtzvyvsL3%2FXHdjtYmY1ZZoP4WttolMetO5DkNDVG1JcaHMjuQFIP7yRivNtLiyKAboVyeDlPqwic8HXdUlpHXKo77u2GTOag1P0e2AUYMw5XssF%2FztW2m%2FrQW7stGPFUoZNjsF5QRpfXVGqJSwuK23KAFd94xFHffuVgiXl1l6dLhwMBrnN65z4Wmqq5nB7YMzElxS07sPV7S4guzQ8j09gonOyXQg2pYSe6xZvEcxzB4GP1XNGEXo%2FDVMNdtKSMrpbBU%2Fk5zdIG%2B%2BetXi5cOtFdEBqJB6yncDO62v%2B6ltzO71ICMiSkjJUqOlmGjGuRS5QWUZfSZnxJr5yPq4eNmX%2F1MIjXJdrwcOsXJ5GCZf%2BftBQNYqDcVAkNghfVPcF3jFxfc5v9WNgiX6Wm8UDAgMQthe4die1meC%2FzXSHgmg4xXjLPk6guVjRlOGZdEtqSqpNdPZ5HYsNJ8TJw6Hr%2FmjW6gstEK8XNY9IWf2zlbMQhtm5X7BruWN%2BGglO9KVTXIoZYdoQpBXV8%2BYuAFNo8kf3k4gd%2FSohpQGkBdxwYdiqgLLcuPcE3SEtPLzm8gZIiWvUHSDcLrB5CBjv3YPvfsU13F8W8Ye5q0w%2BVgt7HfvndK1DcplIbcf4iHRMN7FisoGOqUBNioBgwzF5Fc%2FV%2F2sIiani%2FQm82H2s%2BjLsXATwfizq8x%2BIVOMUaw2tiffxgIroxJJn51IFnb8BKF0r3hQlxxAdIz%2FQFOMO7Ym96mK0C180XS%2Fhnb1ru1hgM3IiQFTxWTPRh6OYRxH2q08nc%2FyCsVux0v%2FA8sgmwXBvB9I54thDFKwLl1UDYLw6azX783KCXKNFE0c0Bu2CVAMwcwlOOuYkTleJdjY&X-Amz-Signature=40899e9dd2539a4371cf603fdcf3500c8fc159fcbc1d9d9b981c1321dfba7421&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ENP2PJY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T132514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqwMOEuQQi%2BOWjmHt5%2Bz5reyP0Sid0i%2BP7H49nfEjpMQIgVbAQlidsulKLXA8lecg0Nyir7yzwGNIT4BJ859qc9mkq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDM8C2uMp1WgNanMfvyrcA3YtzvyvsL3%2FXHdjtYmY1ZZoP4WttolMetO5DkNDVG1JcaHMjuQFIP7yRivNtLiyKAboVyeDlPqwic8HXdUlpHXKo77u2GTOag1P0e2AUYMw5XssF%2FztW2m%2FrQW7stGPFUoZNjsF5QRpfXVGqJSwuK23KAFd94xFHffuVgiXl1l6dLhwMBrnN65z4Wmqq5nB7YMzElxS07sPV7S4guzQ8j09gonOyXQg2pYSe6xZvEcxzB4GP1XNGEXo%2FDVMNdtKSMrpbBU%2Fk5zdIG%2B%2BetXi5cOtFdEBqJB6yncDO62v%2B6ltzO71ICMiSkjJUqOlmGjGuRS5QWUZfSZnxJr5yPq4eNmX%2F1MIjXJdrwcOsXJ5GCZf%2BftBQNYqDcVAkNghfVPcF3jFxfc5v9WNgiX6Wm8UDAgMQthe4die1meC%2FzXSHgmg4xXjLPk6guVjRlOGZdEtqSqpNdPZ5HYsNJ8TJw6Hr%2FmjW6gstEK8XNY9IWf2zlbMQhtm5X7BruWN%2BGglO9KVTXIoZYdoQpBXV8%2BYuAFNo8kf3k4gd%2FSohpQGkBdxwYdiqgLLcuPcE3SEtPLzm8gZIiWvUHSDcLrB5CBjv3YPvfsU13F8W8Ye5q0w%2BVgt7HfvndK1DcplIbcf4iHRMN7FisoGOqUBNioBgwzF5Fc%2FV%2F2sIiani%2FQm82H2s%2BjLsXATwfizq8x%2BIVOMUaw2tiffxgIroxJJn51IFnb8BKF0r3hQlxxAdIz%2FQFOMO7Ym96mK0C180XS%2Fhnb1ru1hgM3IiQFTxWTPRh6OYRxH2q08nc%2FyCsVux0v%2FA8sgmwXBvB9I54thDFKwLl1UDYLw6azX783KCXKNFE0c0Bu2CVAMwcwlOOuYkTleJdjY&X-Amz-Signature=0274694435a8aabfa6ce4686404958d1a78b3db80a2e2f4d7bf80056cc089ffc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
