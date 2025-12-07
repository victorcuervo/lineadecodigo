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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RL4IUA54%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T062830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwCImoqnT8VWSJrJvt%2FU9ZVzML4b%2BPciDsPOFF55tYHQIgV9TCh8jQ6S2wTW6tttEzV%2BiOMLo4gO5qcPVlno8YNxsqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAtUTC6G%2BPN5WDmwxSrcA0eqlf68zCDbR6vXrUrRHIUl3DywVCsMUMNRlDrYaiZ4VSasj%2BQufocwvybztJ7yk7LdanIOs6lFi2L3EXW0iExJN61UMmmG6Q5auWu2Z1J5KUhvNyQMaWC38oryj8S%2FQ4QqQ1ZsyecbG4bKFlpRgVaZ43mMTEZ5wZPBYB8Kv2aR3pM2MAVBYoTsBBsqG8iCKSkTizW%2FB%2FBqnqcc1u%2BUoVh38pZ%2FMrOBPAL8TpddjOm67qXwmQfJyUjL3ePpDUF4REF1zpM6A%2FtvIS8QS%2FKRueg2QalIQxfwzW8oR%2B63Oz4BEYrj2u0nK2Tv%2Bowwsdz4Jy1NOT6V7huQfsvgzXajgeBtQ9koVktfjQxM9qTDK6BgkofQc%2F24tRpvGPOQ0lRozEx0wqnnWQVgq0lYzpM1YY4kKUClTJ4K7wDWECRQqWoW7aanZbIS9rQTcRJDMg4Wt6YmyTLd1NnklLeCPRiJfNPOzgF6uUj8jAa%2BVt8AfUvJ5sGugEZ%2Fjfnxd4GvPN98Xws8mcji%2Fr%2FpVwN6kOJSxidmyU6UbaKGwwpMWevo%2FOu%2BBDW7UkY0Kyd3BNY9ZR6JuZBFVeCknn4LugGZWtf1%2FOFLeUcfCQ8miiNva6TKFMXzj1F9vrh6PnbPVIA%2FMP%2Bj1MkGOqUBVg55lmt4ymuAwzaq%2FNeqEmRO5ecpayn6gcQJE%2BerFbwwI95gJOD%2FDzRHA7yXsafGHmDB1H6%2BEm74JTqMEWwB6YKemxEbuJY%2BEAbEM9p2EeDAwcjy15R%2FbWcysqv8aUDlxVZx9riIi9%2FA6nptj5UL8Pf0QkRf%2FYycuI7wqENvye4Tw8TyAyKu5SrbhDWgOyofDyBdxPUgS5140FMN1zvFUfU4mExw&X-Amz-Signature=d9df8f2a57ee4c7ae9f4e0a52fd66386dd38e54febe6fda46a2b49f4acc78dea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RL4IUA54%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T062830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwCImoqnT8VWSJrJvt%2FU9ZVzML4b%2BPciDsPOFF55tYHQIgV9TCh8jQ6S2wTW6tttEzV%2BiOMLo4gO5qcPVlno8YNxsqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAtUTC6G%2BPN5WDmwxSrcA0eqlf68zCDbR6vXrUrRHIUl3DywVCsMUMNRlDrYaiZ4VSasj%2BQufocwvybztJ7yk7LdanIOs6lFi2L3EXW0iExJN61UMmmG6Q5auWu2Z1J5KUhvNyQMaWC38oryj8S%2FQ4QqQ1ZsyecbG4bKFlpRgVaZ43mMTEZ5wZPBYB8Kv2aR3pM2MAVBYoTsBBsqG8iCKSkTizW%2FB%2FBqnqcc1u%2BUoVh38pZ%2FMrOBPAL8TpddjOm67qXwmQfJyUjL3ePpDUF4REF1zpM6A%2FtvIS8QS%2FKRueg2QalIQxfwzW8oR%2B63Oz4BEYrj2u0nK2Tv%2Bowwsdz4Jy1NOT6V7huQfsvgzXajgeBtQ9koVktfjQxM9qTDK6BgkofQc%2F24tRpvGPOQ0lRozEx0wqnnWQVgq0lYzpM1YY4kKUClTJ4K7wDWECRQqWoW7aanZbIS9rQTcRJDMg4Wt6YmyTLd1NnklLeCPRiJfNPOzgF6uUj8jAa%2BVt8AfUvJ5sGugEZ%2Fjfnxd4GvPN98Xws8mcji%2Fr%2FpVwN6kOJSxidmyU6UbaKGwwpMWevo%2FOu%2BBDW7UkY0Kyd3BNY9ZR6JuZBFVeCknn4LugGZWtf1%2FOFLeUcfCQ8miiNva6TKFMXzj1F9vrh6PnbPVIA%2FMP%2Bj1MkGOqUBVg55lmt4ymuAwzaq%2FNeqEmRO5ecpayn6gcQJE%2BerFbwwI95gJOD%2FDzRHA7yXsafGHmDB1H6%2BEm74JTqMEWwB6YKemxEbuJY%2BEAbEM9p2EeDAwcjy15R%2FbWcysqv8aUDlxVZx9riIi9%2FA6nptj5UL8Pf0QkRf%2FYycuI7wqENvye4Tw8TyAyKu5SrbhDWgOyofDyBdxPUgS5140FMN1zvFUfU4mExw&X-Amz-Signature=0101302e79ee0db0277e0f82fa158d24ee83d322c2dcd98e1d89d38b3078f33c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
