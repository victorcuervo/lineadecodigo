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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDBCIE2C%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T075650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCoYf1CXJUWzCJyArUdZsJw7SK3QUnNZLYRYH7VQWjudwIgMf5a6hUDAL0r3Qj3WLLGULGDfOPEOdSO9h3W8UWgkoMq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDHAHSdnKeVYgbAWj%2BircAzgF9Ru%2FruXbccs9OGUScudHAd0av%2FCcnft8Zubb2w2l2Gseq6fCcmwzwmW%2FXzW4UBTqdN6iIvaoBgY5MsbFvLInkyhGTiWyMIuw1agFuDLvADFOudW5WpPzBxgmdqoUBcF5YaqqqIOlukWqUKvEUsxhl5sI0V0YUyAyvG%2FQxa%2BXQgUyV7HGkvwWezCcLRh7unr9SSy0v4O9Ezl%2Fgyab0P9tVQUvcqdG7Pq1pnYuZUYCBfFWZOfgTPazz1zY1uWyDB90%2FAHmrxHroN4IoNvCpiGC9%2Bb7qiNzj1y2%2BX6nZS6cWiLq2fEuZARZa%2F1zueMAqfN4SWHOv0YfNeeahgqPO6TC5ps2ld7zkeyU2qYIM197Cgwy6fvrDskBubMJWigYyiF21y89RIL7S4gebHhYjJblXAj5VyD%2BP2NmQWz2%2FeLwU73iZjZhmqyiNc8azir7VMu18CTCZEJWJQAKOSsXcecsD9M3%2BfiuV4x4TN5vSu%2B9ua5iyGD3LuzOBDow8E8bm6HTFNOM24QeTdSyIRFljG7AcQEC%2FwjsXb9qUDr6ktvSms5zdjdT%2FNQLbuUUe2wxfPrLiWaw9yAqNukx%2BNHz6ISze8OMG7sLssBLH9kQJtY4vG3gxNt9bHJ0U9KCMLC4icoGOqUBBVfhcm9d4Yc4%2F5JBiSyUNuKBQojnIs5as6KVyCNO%2FoVD%2FjDa0uPFLaEGzGo%2BkyjANMS1SgxBy1NbrFTlcs3ild%2BMzorX3b3lUygAdYEwUwgDiET%2Bsuk8H0G9ZlK3unx9k%2Ft53pL5JzsUYoa6ME4Ao%2FVndi5f1NxxFKm%2FdJYShfKJWjPvyBx33g9qFDWPK9NeyUc%2F8yjSq2enWyCd23y7uO%2BCv%2F9k&X-Amz-Signature=e6e58e3079098c5d51a0b51a0d71b09099a7d3ec7122a689e0b62d9632a0c9ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDBCIE2C%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T075650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCoYf1CXJUWzCJyArUdZsJw7SK3QUnNZLYRYH7VQWjudwIgMf5a6hUDAL0r3Qj3WLLGULGDfOPEOdSO9h3W8UWgkoMq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDHAHSdnKeVYgbAWj%2BircAzgF9Ru%2FruXbccs9OGUScudHAd0av%2FCcnft8Zubb2w2l2Gseq6fCcmwzwmW%2FXzW4UBTqdN6iIvaoBgY5MsbFvLInkyhGTiWyMIuw1agFuDLvADFOudW5WpPzBxgmdqoUBcF5YaqqqIOlukWqUKvEUsxhl5sI0V0YUyAyvG%2FQxa%2BXQgUyV7HGkvwWezCcLRh7unr9SSy0v4O9Ezl%2Fgyab0P9tVQUvcqdG7Pq1pnYuZUYCBfFWZOfgTPazz1zY1uWyDB90%2FAHmrxHroN4IoNvCpiGC9%2Bb7qiNzj1y2%2BX6nZS6cWiLq2fEuZARZa%2F1zueMAqfN4SWHOv0YfNeeahgqPO6TC5ps2ld7zkeyU2qYIM197Cgwy6fvrDskBubMJWigYyiF21y89RIL7S4gebHhYjJblXAj5VyD%2BP2NmQWz2%2FeLwU73iZjZhmqyiNc8azir7VMu18CTCZEJWJQAKOSsXcecsD9M3%2BfiuV4x4TN5vSu%2B9ua5iyGD3LuzOBDow8E8bm6HTFNOM24QeTdSyIRFljG7AcQEC%2FwjsXb9qUDr6ktvSms5zdjdT%2FNQLbuUUe2wxfPrLiWaw9yAqNukx%2BNHz6ISze8OMG7sLssBLH9kQJtY4vG3gxNt9bHJ0U9KCMLC4icoGOqUBBVfhcm9d4Yc4%2F5JBiSyUNuKBQojnIs5as6KVyCNO%2FoVD%2FjDa0uPFLaEGzGo%2BkyjANMS1SgxBy1NbrFTlcs3ild%2BMzorX3b3lUygAdYEwUwgDiET%2Bsuk8H0G9ZlK3unx9k%2Ft53pL5JzsUYoa6ME4Ao%2FVndi5f1NxxFKm%2FdJYShfKJWjPvyBx33g9qFDWPK9NeyUc%2F8yjSq2enWyCd23y7uO%2BCv%2F9k&X-Amz-Signature=28a83291b4a1bdd123b040fb46d9ffbbca1b70e793c6eff62bc9b0ea843f7e68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
