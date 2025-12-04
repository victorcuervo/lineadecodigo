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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CGHNW75%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T040049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIH9DIdCNLWVvmUDA8%2BhBCGDhPGIQgfGWfAVuc8A3YrqZAiEA97dAU1ielsbyvAAWEfmzQugB0dx6K4VYBSYsKbOY%2BhIq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDBitVQpbJD%2F6HwX8nyrcA3geqKqaJ8oCnJbZk51niP2CrVAIU%2F%2BRCFbg13d9w%2FrjDYFvkOS30FreFj0P8BBpB3b%2BrXWtnxtbYu%2BAcIH6gNZ%2F3G9aYRJ812y9tXy2YM%2F0qH0yoWMz%2B6%2B8eXS6%2F8EEP7uGpcddbRNe0mV%2BcgypCvkMwIvOrVNOMHw%2F9LN9ar7k6oQFKvFfgvLpxo0eEFxeTIjGQSdK2RntCBx8gQn9U8Cw8km0oPE2fr%2FcwZI7%2BKFIxHiFvQ45d%2Ftr211Xtw7qX5KXY5ZUX6Gpvc6p79JLztTe4oobqr2wrG7lubkaN%2BTgWeQzOLdgRcOESYIUIA0LlgNp2prLvgr%2BTnQAQmUQ9vayvxkTWiZXJ3RJADA01FhYp3S5WSZKeqzIzNbNQCThI98cBqaUzv7QWGGqHHN3ohluj84UF%2FOuowSNzxu%2BdpqdEFLBQD963FfutdjTFnYlIQ13DBcCs%2FM7y4gYYlmMJkQRjW%2BNo4iIazEuBLtGnMMZbz9xkUDtsihQ5R%2F%2FdhsM%2Be8K8yB34Vyq1FLc%2B%2FzflDzU35%2FCZ%2BwDJ%2Fw3rs9%2FGjqWPt%2Bmkle5HBiDVGOOOYTHk9iatJhe5yxvCXnK%2B8RDA%2BCmBk0Ai612lDJ9gB0vE1RxyUxH4lD0fuEfCyP3ML7yw8kGOqUBdkN1rf09Zvms68aQhRLGX95jeY4yCnbhHgrQeCLAf1Vx1mzrdcuFVr6EbYomu%2FX54H6QKaxpxhhHT3skItiYXqM31XolvpfzXTgU%2FfH8YdVY5dO3BJlRbqzG2qNI1UKV44GUnuMqgPRlRtEyqLsQ4Nk9imR3ypj7IWq0B%2FoFlMu%2B67PIz2lvc1U9p6JdKtok4AiLeCR5a8WZN5BfuVVGMkRlQz8w&X-Amz-Signature=429fb75a5c30c8fdbea1fa173934a6a3d80a3ef51a3c676688ad8f30dd2d094e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CGHNW75%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T040049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIH9DIdCNLWVvmUDA8%2BhBCGDhPGIQgfGWfAVuc8A3YrqZAiEA97dAU1ielsbyvAAWEfmzQugB0dx6K4VYBSYsKbOY%2BhIq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDBitVQpbJD%2F6HwX8nyrcA3geqKqaJ8oCnJbZk51niP2CrVAIU%2F%2BRCFbg13d9w%2FrjDYFvkOS30FreFj0P8BBpB3b%2BrXWtnxtbYu%2BAcIH6gNZ%2F3G9aYRJ812y9tXy2YM%2F0qH0yoWMz%2B6%2B8eXS6%2F8EEP7uGpcddbRNe0mV%2BcgypCvkMwIvOrVNOMHw%2F9LN9ar7k6oQFKvFfgvLpxo0eEFxeTIjGQSdK2RntCBx8gQn9U8Cw8km0oPE2fr%2FcwZI7%2BKFIxHiFvQ45d%2Ftr211Xtw7qX5KXY5ZUX6Gpvc6p79JLztTe4oobqr2wrG7lubkaN%2BTgWeQzOLdgRcOESYIUIA0LlgNp2prLvgr%2BTnQAQmUQ9vayvxkTWiZXJ3RJADA01FhYp3S5WSZKeqzIzNbNQCThI98cBqaUzv7QWGGqHHN3ohluj84UF%2FOuowSNzxu%2BdpqdEFLBQD963FfutdjTFnYlIQ13DBcCs%2FM7y4gYYlmMJkQRjW%2BNo4iIazEuBLtGnMMZbz9xkUDtsihQ5R%2F%2FdhsM%2Be8K8yB34Vyq1FLc%2B%2FzflDzU35%2FCZ%2BwDJ%2Fw3rs9%2FGjqWPt%2Bmkle5HBiDVGOOOYTHk9iatJhe5yxvCXnK%2B8RDA%2BCmBk0Ai612lDJ9gB0vE1RxyUxH4lD0fuEfCyP3ML7yw8kGOqUBdkN1rf09Zvms68aQhRLGX95jeY4yCnbhHgrQeCLAf1Vx1mzrdcuFVr6EbYomu%2FX54H6QKaxpxhhHT3skItiYXqM31XolvpfzXTgU%2FfH8YdVY5dO3BJlRbqzG2qNI1UKV44GUnuMqgPRlRtEyqLsQ4Nk9imR3ypj7IWq0B%2FoFlMu%2B67PIz2lvc1U9p6JdKtok4AiLeCR5a8WZN5BfuVVGMkRlQz8w&X-Amz-Signature=02eb8008e006ec08aead95db3c04418fa46162c40480645c69b39ab034e6be90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
