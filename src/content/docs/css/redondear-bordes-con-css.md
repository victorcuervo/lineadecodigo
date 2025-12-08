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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WY3UBGU2%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T044542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqbXnvAPB%2BxVpLCNt0Cef4SVzVVbHAlNERdR%2Fig9VeeAIgI7s%2Bf4TTpnNoGyKDE9dFdZPP3OmXhH49xUDsqW9KtRAqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPOq%2FLoh%2BuZ7Eb1BSyrcA7R7iMSjM5wK0%2Bb1i9%2FbzeRfmMQhEERedC4mxK82xrU0%2BUZJDXiO8zoyeYWNK9oP5mto5SSsNYmI57mLY8tp1gJcsDc4KBRgizRZLzu%2B9y%2BIS1U0NozEUai9BkmMK7Irr7iw9FLN2GVN4HUlMAfLU%2BTzw1LrjZucSEgQKDY15O6VyxlltNqdg4dl%2BV8VO9%2BzyGKg8r%2Fwums0wacW6lmy%2FuzH5cZhLSw2dz%2Bt9x4l%2B9ZGOOdawjM1SKKo49AntGze%2FCoMxYHGAGHgqgAqmGrEvIVp8%2F4Pgjt%2FpD8A712M03j%2BFh3G0Wp8uKu%2FvzDLA%2FXtrea%2FelswT2eMq9l7gHtN%2B6SMYhmivtVAAlPAw2aEyz41WPN7ytZYqQjzarEVj0I7gnj4DkisVNiEXml9h9RWWYk74Ipjt0GV76YMUBRgE70%2B6%2BY%2FjFe0EkTnVH2C5UOZC%2Bkk5iyGrQbM7HAUT%2FkrvEFljWJ7yRfM%2FOvV%2ByzrqjTTP4aVzbC%2FvCf0%2By7yXqF0d1FnQzPCIQNGTLKbHJlQm5hyQQQoCaUZNMsxdQcLStcnG%2BB%2BEI3VCJ%2FtE3mQNksGJbw5ppPRnVZcz5zDUVRS0DE0%2BrIpw15C8Ek134JpomOg8GADlEQ6p3IuW6i%2BMIuU2ckGOqUBaECRoeb50M7ZHceBFJrTx5Xe46QgVonlJqsKyrBfgCclpswwVJ%2FrZK%2BIWk3ARhybpLJC6aFSzolHnwVNYpH%2FMJPPRDAhlj22%2BfuHJuky0bm6mPS4%2BePRK%2FvBS8tXkRPHAgObKm%2Fyo1xrLu%2FudQmuQ6LYH%2BjWMvuzez%2B1PQwydm%2FU2Y0AKqIgeKJQMqwpLK%2FfftzCwmc9%2BeCBoQmkQ72EgTEAFv6X&X-Amz-Signature=a178a88f5793c8c32111e5fb0b3c18f8e75a3e1c189f705bbda078597887a2db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WY3UBGU2%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T044542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqbXnvAPB%2BxVpLCNt0Cef4SVzVVbHAlNERdR%2Fig9VeeAIgI7s%2Bf4TTpnNoGyKDE9dFdZPP3OmXhH49xUDsqW9KtRAqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPOq%2FLoh%2BuZ7Eb1BSyrcA7R7iMSjM5wK0%2Bb1i9%2FbzeRfmMQhEERedC4mxK82xrU0%2BUZJDXiO8zoyeYWNK9oP5mto5SSsNYmI57mLY8tp1gJcsDc4KBRgizRZLzu%2B9y%2BIS1U0NozEUai9BkmMK7Irr7iw9FLN2GVN4HUlMAfLU%2BTzw1LrjZucSEgQKDY15O6VyxlltNqdg4dl%2BV8VO9%2BzyGKg8r%2Fwums0wacW6lmy%2FuzH5cZhLSw2dz%2Bt9x4l%2B9ZGOOdawjM1SKKo49AntGze%2FCoMxYHGAGHgqgAqmGrEvIVp8%2F4Pgjt%2FpD8A712M03j%2BFh3G0Wp8uKu%2FvzDLA%2FXtrea%2FelswT2eMq9l7gHtN%2B6SMYhmivtVAAlPAw2aEyz41WPN7ytZYqQjzarEVj0I7gnj4DkisVNiEXml9h9RWWYk74Ipjt0GV76YMUBRgE70%2B6%2BY%2FjFe0EkTnVH2C5UOZC%2Bkk5iyGrQbM7HAUT%2FkrvEFljWJ7yRfM%2FOvV%2ByzrqjTTP4aVzbC%2FvCf0%2By7yXqF0d1FnQzPCIQNGTLKbHJlQm5hyQQQoCaUZNMsxdQcLStcnG%2BB%2BEI3VCJ%2FtE3mQNksGJbw5ppPRnVZcz5zDUVRS0DE0%2BrIpw15C8Ek134JpomOg8GADlEQ6p3IuW6i%2BMIuU2ckGOqUBaECRoeb50M7ZHceBFJrTx5Xe46QgVonlJqsKyrBfgCclpswwVJ%2FrZK%2BIWk3ARhybpLJC6aFSzolHnwVNYpH%2FMJPPRDAhlj22%2BfuHJuky0bm6mPS4%2BePRK%2FvBS8tXkRPHAgObKm%2Fyo1xrLu%2FudQmuQ6LYH%2BjWMvuzez%2B1PQwydm%2FU2Y0AKqIgeKJQMqwpLK%2FfftzCwmc9%2BeCBoQmkQ72EgTEAFv6X&X-Amz-Signature=8ae6e4348ea409c7cc83f1cb7084a0e915fbba239fcb88d09cd4bca35e291998&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
