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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KET2XUD%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T010513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDy%2FTybi3NdVR67fsqNbz1MCsoCMp62kzpIw0L137rL2wIgWUJpAv18MIcWZooJqZCsGb4vvggUuI7yp4%2FZ4ISPLeYq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDC4R2YJo6sGrqlVY1yrcAx2cdu4CPlJOIYoR1PGZkAlngiYcIw2PvKTm%2FTtkhygAYz54tc1WVdXpNOXTrscJIVLZkWyUaAIDmY%2B%2F3XNM3WjR9Z98m0%2BIKwfENNJdTch38SAkJLE8geW6cgYM4KKroBM%2FTV1HCwyFylsE2KVCbJlErd5R2O3eJYoMaDWOThApgox4OF65a9PX%2Fc8ryRYV9iVrcBb2Q3NK4lJP71fk3Ys20LmkPj8bZLz5oR%2B%2FaFPc6wYoOwtdy2sQhhXQIIqPu4keQ9yHA9xxgCyZY7aGvZ1G57cJahWDyqWCSGQCgN%2BjzBUBCs%2Bh2kA%2B9T%2B6AJgXIa%2BTT0PFC%2BY3JULfJtPGYbK%2BV5rNyboafMwWJQRqtqQKNUwBoj%2B3L%2BWBget4M7tUpB0zPNW%2BHT3DIVahy1WAGtl7SmJUGGPb2gR8x8R%2FLtOVZUGz%2Fz3LfzVr%2BwXZlPjV6pOAwskl6qhk4dizOMvdISglOhFTq9s5k%2FXHxPJfrRH3YJKzB4GSCtZ7c0Z4K34D5NGXpxRvoDUyViIo5pxyF%2Fq3YG5KrwGPNrkQfW4gfA2wYzZC%2B0MNWppH1Qgst%2B3oKujJd5Kpg%2Fn9IXoiUhpiaIdELufoXKby%2FNH%2Fla4zs%2FCrdWAYiBtlYVFnFdkyMNb7h8oGOqUBZ61HVSwvoLM8TkHG393e4SPfqBKnY5FkfMYZ7S0r3%2FY9d9Tx54Nd4sjwpYvIBdrXB63q5TwnN6oreVpU9dyW4%2FEcwMk1XLyKo0K%2F743tavqCueEA1nMPFUH95evrIIm%2BstWdc19f2g6jEqctaHSZsHVZeNi7RPLp1uHscuj%2BSZyqbvVoA6kg2zb38Q6e3FMkeXWVwPipD%2FwS21zqEbdZa6Cq85av&X-Amz-Signature=05dddd2b9f6610ca63342aeef5ffa1f8294bc7dea08847e9cb04f958729865fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KET2XUD%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T010513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDy%2FTybi3NdVR67fsqNbz1MCsoCMp62kzpIw0L137rL2wIgWUJpAv18MIcWZooJqZCsGb4vvggUuI7yp4%2FZ4ISPLeYq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDC4R2YJo6sGrqlVY1yrcAx2cdu4CPlJOIYoR1PGZkAlngiYcIw2PvKTm%2FTtkhygAYz54tc1WVdXpNOXTrscJIVLZkWyUaAIDmY%2B%2F3XNM3WjR9Z98m0%2BIKwfENNJdTch38SAkJLE8geW6cgYM4KKroBM%2FTV1HCwyFylsE2KVCbJlErd5R2O3eJYoMaDWOThApgox4OF65a9PX%2Fc8ryRYV9iVrcBb2Q3NK4lJP71fk3Ys20LmkPj8bZLz5oR%2B%2FaFPc6wYoOwtdy2sQhhXQIIqPu4keQ9yHA9xxgCyZY7aGvZ1G57cJahWDyqWCSGQCgN%2BjzBUBCs%2Bh2kA%2B9T%2B6AJgXIa%2BTT0PFC%2BY3JULfJtPGYbK%2BV5rNyboafMwWJQRqtqQKNUwBoj%2B3L%2BWBget4M7tUpB0zPNW%2BHT3DIVahy1WAGtl7SmJUGGPb2gR8x8R%2FLtOVZUGz%2Fz3LfzVr%2BwXZlPjV6pOAwskl6qhk4dizOMvdISglOhFTq9s5k%2FXHxPJfrRH3YJKzB4GSCtZ7c0Z4K34D5NGXpxRvoDUyViIo5pxyF%2Fq3YG5KrwGPNrkQfW4gfA2wYzZC%2B0MNWppH1Qgst%2B3oKujJd5Kpg%2Fn9IXoiUhpiaIdELufoXKby%2FNH%2Fla4zs%2FCrdWAYiBtlYVFnFdkyMNb7h8oGOqUBZ61HVSwvoLM8TkHG393e4SPfqBKnY5FkfMYZ7S0r3%2FY9d9Tx54Nd4sjwpYvIBdrXB63q5TwnN6oreVpU9dyW4%2FEcwMk1XLyKo0K%2F743tavqCueEA1nMPFUH95evrIIm%2BstWdc19f2g6jEqctaHSZsHVZeNi7RPLp1uHscuj%2BSZyqbvVoA6kg2zb38Q6e3FMkeXWVwPipD%2FwS21zqEbdZa6Cq85av&X-Amz-Signature=801ea6ac8a9424f900d45840c320d80f40609db8c58c8df5a4e1f35b36a8e4c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
