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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJKKPFYS%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T223027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDm3J3pkSe%2BILEl9HFzsLhxPOnv9lgYGYs7ez7xTBiQHAIgPgz8fFkGb%2FjhMmGnkwMLRBzxGVCS0ZqFzx17oYA4KIwqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK4ehq4S2Gc3oK3GRCrcA11hYJO5RcLSLJQAsWuVt%2F7x5ahnnlzvKtpWMHBHL2jb7Gxm54NeDx6sMpJTzeHRZgdblJp3RwzDKqp5DrKg%2BeI1OlG3pa5TKRHbYm1OSpd5orJl0%2F0%2BCjpes0lfwnWlJPQKyRaGx5GFxQZXzQmYu02ok1aV1SUNI31lRgL5jMa7kpab7r0Z%2B0z192piGHC2SMdj%2F03399bShrU9eplPHjQhqh0kx5j4yPIMNZwH5wba4ZgWXCL7IGo%2BWHPBkRVHTdN7YuNusgC5sqiUtmdQwAoZna5FSKUCvFKjeADaKfbbPQ3qXjB8oaVoM2T02Yh6H4QBBZohJrgXUP%2FB7H06ulqzI4pWp%2BoVSohK%2BRg3pZKZyhQ5pkZ%2F7fbu%2FCBU9tBzXkcjRWSA057vvbq8fKdBgAkPC%2Fv6kOoGk4yucAkQFJVK0KFo552Q%2FCAKL0CHbji8z9tWI8jXoKtHzCvZuRFarTViOcbxvLxU%2BY94qRIDGR57M6y%2B7jSnJNfWawKCETPa4zv2HD3rIRQ3buydqP92c2ABnoKOGNdT4DrKcrUNU%2BdGIQi%2B4jhTusla%2F2tsWv%2B5Me5nQwqDl%2FhnL%2B1%2FPLXQIxfLaztxrwLY4nP3%2Ffo%2BN%2B3Z82HiNFC55f0Z41MvMPih3ckGOqUBUJsjjqMXUjd%2FMjw1qsIbXZGnQHLa63qwLJpnsNW1x8ERmzX5HXn3cTe8KrWGkA3pJ1KQ8B8Ev5xGOHInFOieX85g3HteKeRbta0k5pjJxneR6eJzPO%2Fce%2Br%2BZn%2FaEnKq%2FcU3%2BW%2B%2Fwm0ZlR3lfVzlhxeEllW5%2BN7o7iCZ9Vw66DGHdg9HR0FUObZRWh3q3JyYmpBzGoDyxAI%2BFVZ65pSQHq0%2BuECL&X-Amz-Signature=888da74541b9cb53cc705267b48bba408abe998d747b1c78f1dae2e636bc966b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJKKPFYS%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T223027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDm3J3pkSe%2BILEl9HFzsLhxPOnv9lgYGYs7ez7xTBiQHAIgPgz8fFkGb%2FjhMmGnkwMLRBzxGVCS0ZqFzx17oYA4KIwqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK4ehq4S2Gc3oK3GRCrcA11hYJO5RcLSLJQAsWuVt%2F7x5ahnnlzvKtpWMHBHL2jb7Gxm54NeDx6sMpJTzeHRZgdblJp3RwzDKqp5DrKg%2BeI1OlG3pa5TKRHbYm1OSpd5orJl0%2F0%2BCjpes0lfwnWlJPQKyRaGx5GFxQZXzQmYu02ok1aV1SUNI31lRgL5jMa7kpab7r0Z%2B0z192piGHC2SMdj%2F03399bShrU9eplPHjQhqh0kx5j4yPIMNZwH5wba4ZgWXCL7IGo%2BWHPBkRVHTdN7YuNusgC5sqiUtmdQwAoZna5FSKUCvFKjeADaKfbbPQ3qXjB8oaVoM2T02Yh6H4QBBZohJrgXUP%2FB7H06ulqzI4pWp%2BoVSohK%2BRg3pZKZyhQ5pkZ%2F7fbu%2FCBU9tBzXkcjRWSA057vvbq8fKdBgAkPC%2Fv6kOoGk4yucAkQFJVK0KFo552Q%2FCAKL0CHbji8z9tWI8jXoKtHzCvZuRFarTViOcbxvLxU%2BY94qRIDGR57M6y%2B7jSnJNfWawKCETPa4zv2HD3rIRQ3buydqP92c2ABnoKOGNdT4DrKcrUNU%2BdGIQi%2B4jhTusla%2F2tsWv%2B5Me5nQwqDl%2FhnL%2B1%2FPLXQIxfLaztxrwLY4nP3%2Ffo%2BN%2B3Z82HiNFC55f0Z41MvMPih3ckGOqUBUJsjjqMXUjd%2FMjw1qsIbXZGnQHLa63qwLJpnsNW1x8ERmzX5HXn3cTe8KrWGkA3pJ1KQ8B8Ev5xGOHInFOieX85g3HteKeRbta0k5pjJxneR6eJzPO%2Fce%2Br%2BZn%2FaEnKq%2FcU3%2BW%2B%2Fwm0ZlR3lfVzlhxeEllW5%2BN7o7iCZ9Vw66DGHdg9HR0FUObZRWh3q3JyYmpBzGoDyxAI%2BFVZ65pSQHq0%2BuECL&X-Amz-Signature=d59222cf8d90887f715f7dc74263c5584aaa969d9e6301b11a7b68ebf8ca5750&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
