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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WC76KLKF%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T070101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBGHNQTJ9W8Jd2GFdAGhh8YzxKXAXn%2BqUAbwMqPm3gPtAiBdDxW8D2AaVJ50eMA4CLkX6OgzJ22uyaKS8GFKa31Luir%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMF4VBm28VlHJMe5ZaKtwDaovAly36PQLyxpM6JgeHOdYB3e8t4b4YUoBTW1vV5%2FwPi0N6PwbwmPlDgnlRv97yzTFr5lBnQnR4AlQboezGKXQfCLFhpv1IwqhjdLcQL1tKI6kEFVK2wQLNuBJd%2B7v0c9oOWd5T001tScasCpy7OUm1qbUxLUSUBdIj%2BjHk9FuabvpAOX931WBYEhLcSS%2Bdks5CjiDpo1FPuF%2FQBqH%2B9GGMSEJC5l6Z%2FZJuZZ0OYs4qvmp5ByylD%2BJkDx%2BGf92s6CNS9wH5zMfBdJlqzJD99yeyAOAOOegaiBTI5U12VFWzuqfdkdZpYieCpZBD0Ls44ddKGOqO2CEU2vA2huaOmzb8u7p1PKzDKSO7gb2tld4CtPENLTNmcSWSGrXGdlLNSavgw8pgwi7JtmnMLxjgf0grvSJZT4du44OFmC4a0alC1r%2BXwfdNIcoW%2BL07WE4ikJKf7Anxjp4nJPDsdjg1mlotfTKfZTdj3AmIiEJze8KnApSJJYIAOMPbwIhbuaIANZmIWpWtvmg9Ufvrpf%2Fh%2Bl4bSu32m%2B0Co5UfBbdb0e0HWW8hFOQnSzcnu1%2BLeeJOHAh%2Bt9LmLRQi1jGKRJMKQhJGma7noxx%2BGEBwRwWjfll59XWsIF8QZQpa8N8wgJ%2FPyQY6pgFL0hP%2F2ZBkeMsbGzXxiT3fdhYuQXrKA%2FGAqs2aJ7xcogSiLvJ1F9O62Q6yOTR3wQOQShwhKRiYHpSJtBOvaoQRcabZDGfXwCZVW0C5ZwR4H5MFiVgKMjL6k%2FJKQxfIIsxqmzNifLcMJGi%2FjN%2BL0pHFSjlo2ubqsBWNNoF8sAohd0iPuh1NH%2Fdz7X2%2FDcBcK2qpUg7gutLm3Ltlwhq%2FJlGmRTHxFTYy&X-Amz-Signature=656e70ea7da5233a4b88673539283f99a57f14a82548308226442043509d4135&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WC76KLKF%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T070101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBGHNQTJ9W8Jd2GFdAGhh8YzxKXAXn%2BqUAbwMqPm3gPtAiBdDxW8D2AaVJ50eMA4CLkX6OgzJ22uyaKS8GFKa31Luir%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMF4VBm28VlHJMe5ZaKtwDaovAly36PQLyxpM6JgeHOdYB3e8t4b4YUoBTW1vV5%2FwPi0N6PwbwmPlDgnlRv97yzTFr5lBnQnR4AlQboezGKXQfCLFhpv1IwqhjdLcQL1tKI6kEFVK2wQLNuBJd%2B7v0c9oOWd5T001tScasCpy7OUm1qbUxLUSUBdIj%2BjHk9FuabvpAOX931WBYEhLcSS%2Bdks5CjiDpo1FPuF%2FQBqH%2B9GGMSEJC5l6Z%2FZJuZZ0OYs4qvmp5ByylD%2BJkDx%2BGf92s6CNS9wH5zMfBdJlqzJD99yeyAOAOOegaiBTI5U12VFWzuqfdkdZpYieCpZBD0Ls44ddKGOqO2CEU2vA2huaOmzb8u7p1PKzDKSO7gb2tld4CtPENLTNmcSWSGrXGdlLNSavgw8pgwi7JtmnMLxjgf0grvSJZT4du44OFmC4a0alC1r%2BXwfdNIcoW%2BL07WE4ikJKf7Anxjp4nJPDsdjg1mlotfTKfZTdj3AmIiEJze8KnApSJJYIAOMPbwIhbuaIANZmIWpWtvmg9Ufvrpf%2Fh%2Bl4bSu32m%2B0Co5UfBbdb0e0HWW8hFOQnSzcnu1%2BLeeJOHAh%2Bt9LmLRQi1jGKRJMKQhJGma7noxx%2BGEBwRwWjfll59XWsIF8QZQpa8N8wgJ%2FPyQY6pgFL0hP%2F2ZBkeMsbGzXxiT3fdhYuQXrKA%2FGAqs2aJ7xcogSiLvJ1F9O62Q6yOTR3wQOQShwhKRiYHpSJtBOvaoQRcabZDGfXwCZVW0C5ZwR4H5MFiVgKMjL6k%2FJKQxfIIsxqmzNifLcMJGi%2FjN%2BL0pHFSjlo2ubqsBWNNoF8sAohd0iPuh1NH%2Fdz7X2%2FDcBcK2qpUg7gutLm3Ltlwhq%2FJlGmRTHxFTYy&X-Amz-Signature=d78ccb25863fbd4556359c545ebb0be12e50ab620fd800d893064f2b4b60aae1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
