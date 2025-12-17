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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466724XQZPU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T115540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCG3QKGNbUX8GjDrMOOc34u%2BNIuXs16QFsaQc75KmaYbwIhAJZxvxDFU8KMtO2tYhtjkk%2Ffxujqw8Tc0AVy4jWXDyamKv8DCH0QABoMNjM3NDIzMTgzODA1IgznCbRPwadtQMlUAC0q3AOH6z4U0NeTsr2nWc78g%2FA06WXrL7tZkNLCkt0p5%2F8FSwhqTD9CMDgh4QYmqOUp%2FZynUm2d2IfxuOJDTAo607zWzhMCE9%2F7u6yntPyOvDiv5sBi9lrxjwfRUKubatH9SZY8gb9nA16%2B38Da60Zl1fyDuKfIzoNCswbWwpKdhFXB2YS9jrv1PDmz6AmfjEhrDq4JoNMYjtPQbfpMC7567rSLVQQbYHFYY6vUIbVPm1qjaqlDx1ekReclFGVkehR0h8TpFDkFGkhbVGZ8KchZ1pnMZ0QhYKJ29YIwQ3voDTP7y%2FCeYE1zuZVNsNIVI%2BnSS3gI9S6Fses6wuVnNP8j3Lh3l7fRlJBsWaVYzVFcyeB9rdRAJfPKeFeWsQQoLiV4RJJatbJPjA0bGAIEYK40uN1qpGBekfV3Jtbb2lL63jTyRswd%2Fwv%2FI1GiVR3xy91JM8RlGzvnYxQe8hA%2BDZiqk7upNhJkGgYz8pHVoc4wiPcTAtowkqcU5gZgG9BmIPOXg7AHfi3yiiHKXnD9GN1kTRJYPltxlLWbk%2F50A9HqV8vnHpAECNW5VDl9KihDi5uCepCtHA0Di%2FyynDLYo8sTpIWG%2F3qSVzpNfnH9nF2JC8pTTCz%2FIowQmku%2FAPzcZzDeqorKBjqkAZmUTJBUstAqbfwAOQwvleelpzbE%2BavAnghdmikSe%2F1%2B%2Ft%2Bx2iM5gdgZsl5xTXyLtqgI7xFi9O3YQiOtgLh4KiUtt3ctMB0kMPBMzkyyFeCCUG0oXHjsPEjBRsg2Uu5Pe4gKD1lZalEBghQnvRyN8LL4RCzvhprMgCKOb7Pcb963ja5c9YStpPkyCmMkq9fQkacqZTW6u0j79XDWWM0ZXCp1q%2FUC&X-Amz-Signature=fde07def052bbf7b917db47b24fc6c01e59967b8c334a1f77d1e9d42b724be52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466724XQZPU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T115540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCG3QKGNbUX8GjDrMOOc34u%2BNIuXs16QFsaQc75KmaYbwIhAJZxvxDFU8KMtO2tYhtjkk%2Ffxujqw8Tc0AVy4jWXDyamKv8DCH0QABoMNjM3NDIzMTgzODA1IgznCbRPwadtQMlUAC0q3AOH6z4U0NeTsr2nWc78g%2FA06WXrL7tZkNLCkt0p5%2F8FSwhqTD9CMDgh4QYmqOUp%2FZynUm2d2IfxuOJDTAo607zWzhMCE9%2F7u6yntPyOvDiv5sBi9lrxjwfRUKubatH9SZY8gb9nA16%2B38Da60Zl1fyDuKfIzoNCswbWwpKdhFXB2YS9jrv1PDmz6AmfjEhrDq4JoNMYjtPQbfpMC7567rSLVQQbYHFYY6vUIbVPm1qjaqlDx1ekReclFGVkehR0h8TpFDkFGkhbVGZ8KchZ1pnMZ0QhYKJ29YIwQ3voDTP7y%2FCeYE1zuZVNsNIVI%2BnSS3gI9S6Fses6wuVnNP8j3Lh3l7fRlJBsWaVYzVFcyeB9rdRAJfPKeFeWsQQoLiV4RJJatbJPjA0bGAIEYK40uN1qpGBekfV3Jtbb2lL63jTyRswd%2Fwv%2FI1GiVR3xy91JM8RlGzvnYxQe8hA%2BDZiqk7upNhJkGgYz8pHVoc4wiPcTAtowkqcU5gZgG9BmIPOXg7AHfi3yiiHKXnD9GN1kTRJYPltxlLWbk%2F50A9HqV8vnHpAECNW5VDl9KihDi5uCepCtHA0Di%2FyynDLYo8sTpIWG%2F3qSVzpNfnH9nF2JC8pTTCz%2FIowQmku%2FAPzcZzDeqorKBjqkAZmUTJBUstAqbfwAOQwvleelpzbE%2BavAnghdmikSe%2F1%2B%2Ft%2Bx2iM5gdgZsl5xTXyLtqgI7xFi9O3YQiOtgLh4KiUtt3ctMB0kMPBMzkyyFeCCUG0oXHjsPEjBRsg2Uu5Pe4gKD1lZalEBghQnvRyN8LL4RCzvhprMgCKOb7Pcb963ja5c9YStpPkyCmMkq9fQkacqZTW6u0j79XDWWM0ZXCp1q%2FUC&X-Amz-Signature=f5c8380af1af92a726141a5be3254c4808e1828f9fba1109303186f78b7431b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
