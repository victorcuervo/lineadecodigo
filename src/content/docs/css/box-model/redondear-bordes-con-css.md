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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTO4WTUJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T181303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF5Ofx9OzMj0afdtYtpGB5zuvv%2B6HgkVPSP8vxhgczgGAiEAjajqNHTFDNlp29ITVOSdPfjpipC6XRipnMC86Yo4rr4qiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEmdUHXCNArOktU%2FmSrcA2E1x67Xlmnq%2BXYOfd6YT%2BaSQmBYUZk1X3a4U9ZgKhnCjF9cct6LSGsHAXwVk42HW1MPoRC9bdXRO6K0Xs6JMfJI7wzoLxkhdJ%2FCsEXnoU4dpDuEzMj5kcYK7M4xFyX8xNx7fdBoSD6v387pdKVB2mxc%2FvL03vKWX2AoIlbaMd7xoz4Dv07ZDsmnujdCGsr6qZGBvzpn1rUu3%2B9dV%2B8v%2FEe16UhCDzhsSpTbk%2FFmF1KSJfaJajbzBQle5eKXHBr4qVQnruDFVuVB9ZKWTShTpVOtWnzqP6WtLSwBLTdcy6lk%2FOnUI4bw7RJzVeKf%2B7Spaca3lakrqNkGunJdSNiNL%2FH2KkQQEdQIVIur4EI3KRV1MXLbSSOi2je%2Fz4L9DC1jrmFJNZ4tMJLNvADNGH3tiO5g6XcHK2uUlzJ3G%2BCSnc6JDQgvor1YtEkBlYs0FA1IQPm5cuiqSpjE0NY43CtJW6HwZzoBvcPPXyqbJx5xKvS2ibq5P1DXB%2FWmz1QHhLJjt8ofGfp0JO4908%2BqF31B7aStltgTJomf%2BT5OdtIJhRSo9hLS2bSeB1ReESZp4SyfFMF0HdkPnEobxw86dZXQH0A2gsuvo60tlhcuWNxptXJKvCAqxQDhl4%2FkDiuXMIufi8oGOqUBDsEjJ5ZEufClOcmpVTw%2FzNIQarDMKlXCwE73Ax82k90%2FhWl%2B2eqv6chdMXAt7P67tTwyueZfXZ7AoWjgUU0dS1X9Wl%2BnPL7xIDVqFkbAp%2FPQ6vT0vDPYo1hy2bwdOzTcHRiFWtJqYfQa4Eqg5Y%2FjobhmX88rwPNYUcj6E6iwf2U5%2BA%2B52B2%2FYXKkbjpcdtCoIXpj3pVHyJIsrYXgXc%2F6nfZevWUl&X-Amz-Signature=a166cc08d60f594b6b25d6fbbed2a951d1fea86895a8938acd944872d27496ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTO4WTUJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T181303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF5Ofx9OzMj0afdtYtpGB5zuvv%2B6HgkVPSP8vxhgczgGAiEAjajqNHTFDNlp29ITVOSdPfjpipC6XRipnMC86Yo4rr4qiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEmdUHXCNArOktU%2FmSrcA2E1x67Xlmnq%2BXYOfd6YT%2BaSQmBYUZk1X3a4U9ZgKhnCjF9cct6LSGsHAXwVk42HW1MPoRC9bdXRO6K0Xs6JMfJI7wzoLxkhdJ%2FCsEXnoU4dpDuEzMj5kcYK7M4xFyX8xNx7fdBoSD6v387pdKVB2mxc%2FvL03vKWX2AoIlbaMd7xoz4Dv07ZDsmnujdCGsr6qZGBvzpn1rUu3%2B9dV%2B8v%2FEe16UhCDzhsSpTbk%2FFmF1KSJfaJajbzBQle5eKXHBr4qVQnruDFVuVB9ZKWTShTpVOtWnzqP6WtLSwBLTdcy6lk%2FOnUI4bw7RJzVeKf%2B7Spaca3lakrqNkGunJdSNiNL%2FH2KkQQEdQIVIur4EI3KRV1MXLbSSOi2je%2Fz4L9DC1jrmFJNZ4tMJLNvADNGH3tiO5g6XcHK2uUlzJ3G%2BCSnc6JDQgvor1YtEkBlYs0FA1IQPm5cuiqSpjE0NY43CtJW6HwZzoBvcPPXyqbJx5xKvS2ibq5P1DXB%2FWmz1QHhLJjt8ofGfp0JO4908%2BqF31B7aStltgTJomf%2BT5OdtIJhRSo9hLS2bSeB1ReESZp4SyfFMF0HdkPnEobxw86dZXQH0A2gsuvo60tlhcuWNxptXJKvCAqxQDhl4%2FkDiuXMIufi8oGOqUBDsEjJ5ZEufClOcmpVTw%2FzNIQarDMKlXCwE73Ax82k90%2FhWl%2B2eqv6chdMXAt7P67tTwyueZfXZ7AoWjgUU0dS1X9Wl%2BnPL7xIDVqFkbAp%2FPQ6vT0vDPYo1hy2bwdOzTcHRiFWtJqYfQa4Eqg5Y%2FjobhmX88rwPNYUcj6E6iwf2U5%2BA%2B52B2%2FYXKkbjpcdtCoIXpj3pVHyJIsrYXgXc%2F6nfZevWUl&X-Amz-Signature=84bf2e70a0072a8e20012a5230f53d12ee89532ac268c50094a54c006903c8ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
