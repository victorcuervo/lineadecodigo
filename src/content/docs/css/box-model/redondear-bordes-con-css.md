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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYBF7WVL%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T095539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBgi5c2kt%2BW1wpOjtwpUntvYslnob%2F5YouQwJWEfU2LYAiEAm6DVEuA%2FKcXyoTY2op9%2B6Me3Yo1%2FhHvZKwikGPw%2BXhgq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDIUXVE3F%2FhGF5BAcMSrcAyGIvYHhHeEgGbfImWVHkOPr7NCClVhWM%2Fc7XQxF09a4QZqigO0IEGwGUNOXg0O%2F1QHJ8ZTHUQUwCgU6Msu3YFDiFjdqwp9Tg68YYPU%2Bb0hnBJo8ES86RGQZUTYQ%2FdYUm%2Fny1%2BmExDgFxpKVu05MkKO1xJ4%2FNXk6TbCukwD1KpDvOQqWEDYp4%2BKY0e86Wo8pFl3%2BIxzgOoEyOdJ065rmHgCLIdR7KKtHaaKIdeR9B1h%2F0mIqZc3p3AEya%2BUuSR%2FurimAhdT1LX1HJJyMx7RdqsTkMju5HMXy2eq1%2F3Q%2BhelfIPMWO49mUgdTAw8I7lP7zPELzpv5F%2F4TpjE89T6n%2FeotrFp92SFeqY1BQ5i0UJDDFL%2BEEZYe%2Bo4Xqxh7gwxqn4pWgSYD8Dqd7SX1yz2DYEzVBvz6TcEoLMWRZ6iQhuN1rwwsrUSxL7zVUZNyXRun21PoLhDr5GTHRW45LCg8eDtJc1OptC4IRwGKkfv4pqSlohl7vuPUa4f9XrHO40WRSeTYvXrgGPMC0Xy2ZjKdy7wagA9r3HcgkB%2FWj%2FLrR2dRVfJiEpTYIEyxWPcplSMOxu%2F75MX0UmbUo%2FVOftLjbJrAvOklJT36lD%2B2ZZv896FOl81eCm0P6vc%2Bfi0%2BMObwicoGOqUBuqLyE1MxYcZ83d6h3KZf%2BPfHo%2FJFVQjCdBd5h9Nlbl7SxidijP%2BAu2qXe8GB1IzIYUQNvtOnAF4k75fe7IHKEsp7tFLsXocGW%2F8MMQeb6X4aAe57XJyJqTLUTVC1ZXWuPMNQvt%2Fk5YSlY2lPURiycGBj7oUTnb9TxSlx0geB%2BJbgOIGJ7CaCfqN01vSta4yeRz8MSI55I6kjZUEu6F1LscT9R9qS&X-Amz-Signature=13912482a73a7390bc375414e181c187a70258a8ad11b98071276b6b62dd1707&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYBF7WVL%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T095539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBgi5c2kt%2BW1wpOjtwpUntvYslnob%2F5YouQwJWEfU2LYAiEAm6DVEuA%2FKcXyoTY2op9%2B6Me3Yo1%2FhHvZKwikGPw%2BXhgq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDIUXVE3F%2FhGF5BAcMSrcAyGIvYHhHeEgGbfImWVHkOPr7NCClVhWM%2Fc7XQxF09a4QZqigO0IEGwGUNOXg0O%2F1QHJ8ZTHUQUwCgU6Msu3YFDiFjdqwp9Tg68YYPU%2Bb0hnBJo8ES86RGQZUTYQ%2FdYUm%2Fny1%2BmExDgFxpKVu05MkKO1xJ4%2FNXk6TbCukwD1KpDvOQqWEDYp4%2BKY0e86Wo8pFl3%2BIxzgOoEyOdJ065rmHgCLIdR7KKtHaaKIdeR9B1h%2F0mIqZc3p3AEya%2BUuSR%2FurimAhdT1LX1HJJyMx7RdqsTkMju5HMXy2eq1%2F3Q%2BhelfIPMWO49mUgdTAw8I7lP7zPELzpv5F%2F4TpjE89T6n%2FeotrFp92SFeqY1BQ5i0UJDDFL%2BEEZYe%2Bo4Xqxh7gwxqn4pWgSYD8Dqd7SX1yz2DYEzVBvz6TcEoLMWRZ6iQhuN1rwwsrUSxL7zVUZNyXRun21PoLhDr5GTHRW45LCg8eDtJc1OptC4IRwGKkfv4pqSlohl7vuPUa4f9XrHO40WRSeTYvXrgGPMC0Xy2ZjKdy7wagA9r3HcgkB%2FWj%2FLrR2dRVfJiEpTYIEyxWPcplSMOxu%2F75MX0UmbUo%2FVOftLjbJrAvOklJT36lD%2B2ZZv896FOl81eCm0P6vc%2Bfi0%2BMObwicoGOqUBuqLyE1MxYcZ83d6h3KZf%2BPfHo%2FJFVQjCdBd5h9Nlbl7SxidijP%2BAu2qXe8GB1IzIYUQNvtOnAF4k75fe7IHKEsp7tFLsXocGW%2F8MMQeb6X4aAe57XJyJqTLUTVC1ZXWuPMNQvt%2Fk5YSlY2lPURiycGBj7oUTnb9TxSlx0geB%2BJbgOIGJ7CaCfqN01vSta4yeRz8MSI55I6kjZUEu6F1LscT9R9qS&X-Amz-Signature=d1a4410ca989e718af1b9187ee89cb14b5672b0813cabd78d2b3bb5aeee2b57f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
