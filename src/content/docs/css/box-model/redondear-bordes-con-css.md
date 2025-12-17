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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643H4OHBS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T150001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBQJPvWkPT0zSp9wMk3re0XtHEaWn8g2V5O7KVuwqc41AiEApqRnqsEykre4A%2FcfgCO4NbXqnQYW7wP5%2FDk1FvvJvEcqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD7dN945saUGAkBr6yrcAzMZ28f40U2JVEGLlsEbcEYVzSJbsJHv77ceiBvi9dfPHa%2FOJ5gP7Gy%2F0E3u%2BIYPOto2GZraLQQHgs1NjUMGCeZNwKWVQSEX8DqOOeuxQHrf4o5Yy9ie3tnjkqxBmj8d0ZI%2BHnHjOEGFPwEI%2F27SDmRxkYfBAjXTRlVTjHwvkNU1VeL0TxXmFK19GXgifxir3tfZid6pEIe9AdW%2FiDweNkjC2agOWavZ8Quafmlr13br%2FxVQNMKbFilnUvUMnJQlE4G1FDqZG%2FbRG43mfLkSX1t9cDUHuCXeFdVu%2BLb9BgsUhBLSEhW%2BfGHUWHHO49JW9t4vmZH0UbR8nHD2HuMWs7Bt3V112ZvRLL8lsLVW2V6fUfxbbXoW7wGw7kqZzeEdg3HoZcc%2Bz0fWyEy9kob33xC%2BjUu7qVjAvP96fjdIz3cOMZ1HSWe8%2BNEA4H39TPtuv4dK3rghuNTRePVxsKp8UEKnwYYSGYlNc5UIcEdBEcHtVsLB8xmf%2BmNlvDjiZM%2B79Ccf%2Fjp2wjwk%2FiK6%2Bfj0P6IWK4Q5DtCJA0uIlKSZYE5QSqaqYZf3HETMLfdHZwO21GckIsKvZ0461Rd9fM4s%2F6vz8VkrkA%2FkwM0Y%2BdSHeospLq3SIlgjvdIMQM%2BzMOqBi8oGOqUBVTko4SgYQBdo6W8IbgF%2Boy9W48Sw7eHEfRpFqUqJqfx5Q2pofu6cbBICO22niUb77M9ouryOwWt0xytQmwKOsi3sAkMomW9OoOVVSEWCN5TAe4LUt8f64zVtuQAdR%2BbYc8%2F2sPn1pyTf295kbupgpWQWGMHObXnv5X8RG8q%2FVx7Pl4gEdAqI40dI5QOMftN5a5Mzq7SrKavvcCjcoLAowknG4bb1&X-Amz-Signature=b633ceb14badb69b994c21587287864cff87ef922c1953d817d47dc2812dae2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643H4OHBS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T150001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBQJPvWkPT0zSp9wMk3re0XtHEaWn8g2V5O7KVuwqc41AiEApqRnqsEykre4A%2FcfgCO4NbXqnQYW7wP5%2FDk1FvvJvEcqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD7dN945saUGAkBr6yrcAzMZ28f40U2JVEGLlsEbcEYVzSJbsJHv77ceiBvi9dfPHa%2FOJ5gP7Gy%2F0E3u%2BIYPOto2GZraLQQHgs1NjUMGCeZNwKWVQSEX8DqOOeuxQHrf4o5Yy9ie3tnjkqxBmj8d0ZI%2BHnHjOEGFPwEI%2F27SDmRxkYfBAjXTRlVTjHwvkNU1VeL0TxXmFK19GXgifxir3tfZid6pEIe9AdW%2FiDweNkjC2agOWavZ8Quafmlr13br%2FxVQNMKbFilnUvUMnJQlE4G1FDqZG%2FbRG43mfLkSX1t9cDUHuCXeFdVu%2BLb9BgsUhBLSEhW%2BfGHUWHHO49JW9t4vmZH0UbR8nHD2HuMWs7Bt3V112ZvRLL8lsLVW2V6fUfxbbXoW7wGw7kqZzeEdg3HoZcc%2Bz0fWyEy9kob33xC%2BjUu7qVjAvP96fjdIz3cOMZ1HSWe8%2BNEA4H39TPtuv4dK3rghuNTRePVxsKp8UEKnwYYSGYlNc5UIcEdBEcHtVsLB8xmf%2BmNlvDjiZM%2B79Ccf%2Fjp2wjwk%2FiK6%2Bfj0P6IWK4Q5DtCJA0uIlKSZYE5QSqaqYZf3HETMLfdHZwO21GckIsKvZ0461Rd9fM4s%2F6vz8VkrkA%2FkwM0Y%2BdSHeospLq3SIlgjvdIMQM%2BzMOqBi8oGOqUBVTko4SgYQBdo6W8IbgF%2Boy9W48Sw7eHEfRpFqUqJqfx5Q2pofu6cbBICO22niUb77M9ouryOwWt0xytQmwKOsi3sAkMomW9OoOVVSEWCN5TAe4LUt8f64zVtuQAdR%2BbYc8%2F2sPn1pyTf295kbupgpWQWGMHObXnv5X8RG8q%2FVx7Pl4gEdAqI40dI5QOMftN5a5Mzq7SrKavvcCjcoLAowknG4bb1&X-Amz-Signature=3fadbaa307d5f5a7dd3e7e9bd05769b724ac3e18ab6d864a4bfcd1b253aecb3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
