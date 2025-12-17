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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBTMUR7H%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T012707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICD7zcyvi%2F61Ld5EKJWqI8ln1SvDIa4WPqkEpg%2B9wgfVAiEA2aCWFJqtkRyVTPkqqCWMsqCWGGooqFauS2tJYklxzQsq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDFMSHe3Zd%2Ff0eweSlSrcA2CrVUJjaqOFLuMLJ0NCKtt%2Fa4hnxxWbfPM4KOa35GEIBw8gHDH%2B6A2RRgjS3OZ9jP1uYrUoqX9qS31iAH%2B22X9iGFduC4hpXoO%2FwKfic8Bg2Z5rzsbR%2BBYIUA08bfPzIXzuozAwgXGxFPi194M8VUhUBuNHQjXpPbhr7r5edP7BHTJ5o8ysi2h1hrQz%2BG2%2FINRtPbs7RZcVb%2BBzIB3K32egAxf8XqrxSjxxbUDANG2cR4cEu5ZK2Nh%2BLFVsCc9LJYSkK7RLu38G7NAZPWcUl6yCblmNusHyDwUtjNnWO8d2qLBxybHpHpgJv19LcWVPp7MbveU%2BWZ0AAONFbSp%2BDN79s4iVVMpvg7QEiUIBJgwmcn5myRuU%2FFXQIYc%2BCik08pmHc6Ksa5oW8peEff7xXwvg4jZXyuE2k1Jo2mGs8La2CuK3ivJ%2FOCAbiYbutp4mSBOevfwNHgDAL99kuVp9LmGB5S%2BGdqXX3lBXCziNqn9ziaSVuDWYYkGl3OQUtxzM6aWHBGZzq6Sj5JEeQ1YqgKuH45i0ny2jTIKuwSCA5ol8xfdNN1DZd9uWaWk1Ndt502q5NqODmzGX5PvTyW61QzOfIC6L43Ln1DIULw1BN5bW9C0XqSrshceUyoKuMM%2F7h8oGOqUBYI4kIixuy5tbxzjyOEGtzVBAVYz0MLPvAhOaDbnMWyP3wl5aSKx2QrN9n5Eh7SwouJSKhh8y4cMc9rJ7tPlEZi%2FYvmi0Uh3WoqIW6ENyasRyuaS1e7he1QXqAYqvGHpDW50uR5FYm8GOlt5vXpANNTT5J0hXHkKV%2F1vOqCAucMT3Wnb0uPGvjN0eQ1WoemYCmZDhj%2FfzXcwsSw749XHa5NvJ7RA8&X-Amz-Signature=fa6d9f8570a4377c28a72c77d0d6f9826209cd993de73de78905efd98803513d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBTMUR7H%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T012707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICD7zcyvi%2F61Ld5EKJWqI8ln1SvDIa4WPqkEpg%2B9wgfVAiEA2aCWFJqtkRyVTPkqqCWMsqCWGGooqFauS2tJYklxzQsq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDFMSHe3Zd%2Ff0eweSlSrcA2CrVUJjaqOFLuMLJ0NCKtt%2Fa4hnxxWbfPM4KOa35GEIBw8gHDH%2B6A2RRgjS3OZ9jP1uYrUoqX9qS31iAH%2B22X9iGFduC4hpXoO%2FwKfic8Bg2Z5rzsbR%2BBYIUA08bfPzIXzuozAwgXGxFPi194M8VUhUBuNHQjXpPbhr7r5edP7BHTJ5o8ysi2h1hrQz%2BG2%2FINRtPbs7RZcVb%2BBzIB3K32egAxf8XqrxSjxxbUDANG2cR4cEu5ZK2Nh%2BLFVsCc9LJYSkK7RLu38G7NAZPWcUl6yCblmNusHyDwUtjNnWO8d2qLBxybHpHpgJv19LcWVPp7MbveU%2BWZ0AAONFbSp%2BDN79s4iVVMpvg7QEiUIBJgwmcn5myRuU%2FFXQIYc%2BCik08pmHc6Ksa5oW8peEff7xXwvg4jZXyuE2k1Jo2mGs8La2CuK3ivJ%2FOCAbiYbutp4mSBOevfwNHgDAL99kuVp9LmGB5S%2BGdqXX3lBXCziNqn9ziaSVuDWYYkGl3OQUtxzM6aWHBGZzq6Sj5JEeQ1YqgKuH45i0ny2jTIKuwSCA5ol8xfdNN1DZd9uWaWk1Ndt502q5NqODmzGX5PvTyW61QzOfIC6L43Ln1DIULw1BN5bW9C0XqSrshceUyoKuMM%2F7h8oGOqUBYI4kIixuy5tbxzjyOEGtzVBAVYz0MLPvAhOaDbnMWyP3wl5aSKx2QrN9n5Eh7SwouJSKhh8y4cMc9rJ7tPlEZi%2FYvmi0Uh3WoqIW6ENyasRyuaS1e7he1QXqAYqvGHpDW50uR5FYm8GOlt5vXpANNTT5J0hXHkKV%2F1vOqCAucMT3Wnb0uPGvjN0eQ1WoemYCmZDhj%2FfzXcwsSw749XHa5NvJ7RA8&X-Amz-Signature=c57b6e224bcad4707b0abb43631913bcdf4d60fbaed52ff5a60ae78646a0e901&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
