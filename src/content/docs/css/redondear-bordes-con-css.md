---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652R54O3G%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T112040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQC0NMFsG5wW%2BdTVFKw%2FyPcYPKi8MtVk8aUSn7xE5sHVjQIhAPQNzehtZbObBc%2FTDyC4HX5rYtkyAd%2Bb8MizXyCzRub%2BKv8DCEQQABoMNjM3NDIzMTgzODA1IgwK53ZRnC7mcIyDipMq3AOwrXL3SqUDS%2FPzk0GPAOhLROFfKEhqIkpJLUZcvNG4WKEEoqxSwujf7IVFL9f4nx32vHY8e7HhO1cDMQki6Dvuo9xPNlNT5oOkStjs%2BoQ7zpy9GIgN4qXWzbbvbVkbG%2Bkif6mWBP5HVhVvCb8z3fsrR7yPx7b6KJuPpalQwvwI259gmOVL44OyaVc7ZlQ9JPLi4LBS5uS2p%2B05%2FQOwY25ZlqXJFQ4dFmzOa7WZZIv6dvT%2FnG%2B6lBENNICnXOPajM3exctxwcMBSl1aiFv7CJ%2F60TRpHdrsb1t6S6Hnzf6Oou1WlcxdOaF0yekuc1vYpa2xwPn51pgOOkHCrP5jwaU37WHofOHzETZQpFg8T6RBqMLWm9o4lxsG5eRdug95FjimGNX44XlmWTcaMwpAtB5aNKBTNP7hlV2Bv7xLoa6%2FfXYMYoS%2BokTAMNlV75XPrgJs1DyLUGlxLAQzDD16tsQl4r0Vo7GTkQtq%2BPoq9uT5bokwLhYP3mOLea6vnBqoON4IYsTqSHby5ocOAY%2BMAlm3JDJKH7OvNVhp0YphtKEhiporZv7IRc%2B4PIN2ZTyMv57W5gVLmkzoFxsXyo5xFi3Vwg23n0voAvBkGlWoLdialT3sraEKOtGVfFQPSDDGysXJBjqkAQ7p7Cwx5KPWdDuLVS0j3uFcOQDYZ6OWlZ627Wc77fZR0hCwewbffW4NdTFFoOMVSJJ%2BBl5vb5r1KI59i7OjIhipqLBxE4Ucz44RcSDPcfOY0pX4mfzSDqbzNBaJ7h8baJfWK2xUiheCmWyGyIp4xYkjGUTd1RG94U7jDMg3KDsm2YgWFeEs%2BQr0iPQaHflcVB4%2BiuEmtb1pVKlh0NiHNXFIGgdJ&X-Amz-Signature=62a8464867ca1c263485655320320aa25f5f49209577c68cfdfbf989e6307eb0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652R54O3G%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T112040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQC0NMFsG5wW%2BdTVFKw%2FyPcYPKi8MtVk8aUSn7xE5sHVjQIhAPQNzehtZbObBc%2FTDyC4HX5rYtkyAd%2Bb8MizXyCzRub%2BKv8DCEQQABoMNjM3NDIzMTgzODA1IgwK53ZRnC7mcIyDipMq3AOwrXL3SqUDS%2FPzk0GPAOhLROFfKEhqIkpJLUZcvNG4WKEEoqxSwujf7IVFL9f4nx32vHY8e7HhO1cDMQki6Dvuo9xPNlNT5oOkStjs%2BoQ7zpy9GIgN4qXWzbbvbVkbG%2Bkif6mWBP5HVhVvCb8z3fsrR7yPx7b6KJuPpalQwvwI259gmOVL44OyaVc7ZlQ9JPLi4LBS5uS2p%2B05%2FQOwY25ZlqXJFQ4dFmzOa7WZZIv6dvT%2FnG%2B6lBENNICnXOPajM3exctxwcMBSl1aiFv7CJ%2F60TRpHdrsb1t6S6Hnzf6Oou1WlcxdOaF0yekuc1vYpa2xwPn51pgOOkHCrP5jwaU37WHofOHzETZQpFg8T6RBqMLWm9o4lxsG5eRdug95FjimGNX44XlmWTcaMwpAtB5aNKBTNP7hlV2Bv7xLoa6%2FfXYMYoS%2BokTAMNlV75XPrgJs1DyLUGlxLAQzDD16tsQl4r0Vo7GTkQtq%2BPoq9uT5bokwLhYP3mOLea6vnBqoON4IYsTqSHby5ocOAY%2BMAlm3JDJKH7OvNVhp0YphtKEhiporZv7IRc%2B4PIN2ZTyMv57W5gVLmkzoFxsXyo5xFi3Vwg23n0voAvBkGlWoLdialT3sraEKOtGVfFQPSDDGysXJBjqkAQ7p7Cwx5KPWdDuLVS0j3uFcOQDYZ6OWlZ627Wc77fZR0hCwewbffW4NdTFFoOMVSJJ%2BBl5vb5r1KI59i7OjIhipqLBxE4Ucz44RcSDPcfOY0pX4mfzSDqbzNBaJ7h8baJfWK2xUiheCmWyGyIp4xYkjGUTd1RG94U7jDMg3KDsm2YgWFeEs%2BQr0iPQaHflcVB4%2BiuEmtb1pVKlh0NiHNXFIGgdJ&X-Amz-Signature=4d2962d6c4833ff5a46deaf03e998d481bb26beaae2eeb86ac054da20362d510&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
