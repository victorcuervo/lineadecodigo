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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OL7NM3G%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T053713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIByH40vfB3M6kH5nyZFvEOs9op4Khu6k0xfUmyzNdbdrAiEAq4WyEjFruNBuvUH3oEKTTcluIWV0pMN6JE1YSmwcYvoqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL0wbEYer6Uir%2FjcDCrcAyIeci4bPfkkB7ZoqHf4a8A2gy9VXwc34f6iLDnT7GPkD%2BRYB61nZl2Z7JFBYBlZeBEAFXCOq92KafGWe5Pljw485jxy49DCaMy0NfyByy7mbANkg%2Firhl9fxiUc5p4MWzD2TBur%2FHgbQQJ7sqGik1ibpBF%2BTCtoX42DbocyppX%2Bn3TyiJlRLsnzgfkHbgxXiw5JYjhBOgL41ArAOJVXwARmUYp9x%2FXtLxuhinYUCBnywJ2yO%2BwMiuEoCNyheRkuGf5Wa13vovKsP9wH4bxGC4njC%2FI%2F976nQMKve59VWbvgJhiCM0c2IYg4kowo%2Btd8bl9Oir09VokuXC8%2BsOm%2F0mpOEZZVWsQptl9qZGoz0lvzXwzJEhkR0gLGJigWIr%2BPwBoe9THQBEI3Ri6jxKJyVkJn9mG8j7IjBWDPe8HBvs4HVLJpEouNvv0TKqzxCJRSdxrGJIXwdDMbUS0fnLNw1SYFSzgfdolom6PSEays4p4ydkohs8oR1m5G6J%2FFZcjzAO9HiEpuNKAWly5jfXTp%2BU21SjyO1BGWO02hSdUg2dKm2dFmAMXgYpd16abrElnU4J4qIQYwj%2FwDB%2FSNTGtcSsOL1HH6YSnfERfyUsTCjUwTm46nbJoufNgPlS3VMI%2Fl3skGOqUByu4t8DQ1QOChUdDs72sz6hJD5hB1QtSpRKGSQZw7MQsk5KJvtNctCvXUPuJ3eRRDpHNOh5jYjcfQuBGvRJ%2BfTQj0eZe7wzQvJEu7kGwDYs%2Fua5wWpJtQDSx%2F5U5paBGpHNCZFf4TKx9SovZ3COfY7KGpGf3l%2FmvFM9z464StJIvZdYOy681paJq88WOrjwEGq5w%2Byv0sfQVIn9hIpGrgt5xmMDgH&X-Amz-Signature=b2cf4b55cccdd90ec2ead99796ff365b557a8ed6501b9c8a511a3ccdc415d980&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OL7NM3G%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T053713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIByH40vfB3M6kH5nyZFvEOs9op4Khu6k0xfUmyzNdbdrAiEAq4WyEjFruNBuvUH3oEKTTcluIWV0pMN6JE1YSmwcYvoqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL0wbEYer6Uir%2FjcDCrcAyIeci4bPfkkB7ZoqHf4a8A2gy9VXwc34f6iLDnT7GPkD%2BRYB61nZl2Z7JFBYBlZeBEAFXCOq92KafGWe5Pljw485jxy49DCaMy0NfyByy7mbANkg%2Firhl9fxiUc5p4MWzD2TBur%2FHgbQQJ7sqGik1ibpBF%2BTCtoX42DbocyppX%2Bn3TyiJlRLsnzgfkHbgxXiw5JYjhBOgL41ArAOJVXwARmUYp9x%2FXtLxuhinYUCBnywJ2yO%2BwMiuEoCNyheRkuGf5Wa13vovKsP9wH4bxGC4njC%2FI%2F976nQMKve59VWbvgJhiCM0c2IYg4kowo%2Btd8bl9Oir09VokuXC8%2BsOm%2F0mpOEZZVWsQptl9qZGoz0lvzXwzJEhkR0gLGJigWIr%2BPwBoe9THQBEI3Ri6jxKJyVkJn9mG8j7IjBWDPe8HBvs4HVLJpEouNvv0TKqzxCJRSdxrGJIXwdDMbUS0fnLNw1SYFSzgfdolom6PSEays4p4ydkohs8oR1m5G6J%2FFZcjzAO9HiEpuNKAWly5jfXTp%2BU21SjyO1BGWO02hSdUg2dKm2dFmAMXgYpd16abrElnU4J4qIQYwj%2FwDB%2FSNTGtcSsOL1HH6YSnfERfyUsTCjUwTm46nbJoufNgPlS3VMI%2Fl3skGOqUByu4t8DQ1QOChUdDs72sz6hJD5hB1QtSpRKGSQZw7MQsk5KJvtNctCvXUPuJ3eRRDpHNOh5jYjcfQuBGvRJ%2BfTQj0eZe7wzQvJEu7kGwDYs%2Fua5wWpJtQDSx%2F5U5paBGpHNCZFf4TKx9SovZ3COfY7KGpGf3l%2FmvFM9z464StJIvZdYOy681paJq88WOrjwEGq5w%2Byv0sfQVIn9hIpGrgt5xmMDgH&X-Amz-Signature=570daf83c8379eb05dccc3d3adddf249366fe36aae0136bd3d3f58bd707ae893&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
