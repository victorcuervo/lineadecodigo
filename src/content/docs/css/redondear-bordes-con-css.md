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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHFWUYT7%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T232554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCdBXYQkAEvexcqDp2mcxOR67D8oNi9lC8%2FdLRe%2BboUQwIhAK%2FFhuTFjd%2F2dZMbY3T%2BAAJjlKGYFYsMeGO8ZU6z2U6TKv8DCGgQABoMNjM3NDIzMTgzODA1IgxPSeeSwk%2FZCrAWxzgq3AOxfztmcwFVZ2rdndu3xAA%2Be6HJuNBr%2FIeHSJ7LNbTlBFhAlnV5fAArmI2Kt%2B%2BePKxb3Qxvq6%2Fxfcr8c7or70aBzp7HA2cGB80Wm3q40gXJH%2FoxOcZ%2FhHxeVlchonrKsBP43q9sDcAean7BlOMSyOQTR0xZUy7LVsakTePR08qNtaR28KZvS6tty5KmaykWK%2Bh%2Bkm4Q5xs7bd5zj%2FolVExyBQLZtY3taCqB18y6WjJdLpW6tHKFosI%2FoTInHethn9KS7H92lr4fdBUcyNYsiy62iEk7K9d%2BB8QrUsSWBhSoXnI44zOlYFl1wsvdn5Z5g%2FGAwgh5i5VQ82SEWw%2FMPRbWeX7Z26hvYoASok2d64%2BgLIULk4hweyZj5MttqiZBWy%2BbLbHHSXlcDAwJvP1EIKAriyJy829bwbXdqAblUFfz0SLt4ksu0k5IUgFVCnfbLyS1Ie6wBTfclicwTVDTgqBCtDuhoVpOW7bWDNNYqSOqAACyYPrZ9ZFouvvf8GB6OZZFJa3ONa%2BZ8MRD%2BPqnNxaYdOFquxK%2BYwOrcD4GUhFXwlHRHeCWFodN1JdvG4iMqZEh0Q0kpyha6UNxZrsuamPiYFw%2BfVNgMpG1g%2BkVYJ0STVHgXMyaIMugX7UtfjCKxs3JBjqkAebwAhGORPYIY5UFHQpsJtb3ganwzoOHKz6p1460ijp0NcL43rDGDV1PQsYdnPL2JHD6tC1vpj2wsaLdY6TCjGcqtGvL1gtSGoDwkiYNfOYpSBEs%2Bb6ZLE89fsJ6jAGDsNJszV7n8oYkFRsgPuTwFNdWON2a31tRTPZrbcsU13IoJyDTGNHeLPzXjrgaIsVQr5hJu6AXjPb6pE6ToRzv%2FJYZrCz1&X-Amz-Signature=32361a880d376a1674a44ffb876cd9551a8951ca008608d78299fe385032defe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHFWUYT7%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T232554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCdBXYQkAEvexcqDp2mcxOR67D8oNi9lC8%2FdLRe%2BboUQwIhAK%2FFhuTFjd%2F2dZMbY3T%2BAAJjlKGYFYsMeGO8ZU6z2U6TKv8DCGgQABoMNjM3NDIzMTgzODA1IgxPSeeSwk%2FZCrAWxzgq3AOxfztmcwFVZ2rdndu3xAA%2Be6HJuNBr%2FIeHSJ7LNbTlBFhAlnV5fAArmI2Kt%2B%2BePKxb3Qxvq6%2Fxfcr8c7or70aBzp7HA2cGB80Wm3q40gXJH%2FoxOcZ%2FhHxeVlchonrKsBP43q9sDcAean7BlOMSyOQTR0xZUy7LVsakTePR08qNtaR28KZvS6tty5KmaykWK%2Bh%2Bkm4Q5xs7bd5zj%2FolVExyBQLZtY3taCqB18y6WjJdLpW6tHKFosI%2FoTInHethn9KS7H92lr4fdBUcyNYsiy62iEk7K9d%2BB8QrUsSWBhSoXnI44zOlYFl1wsvdn5Z5g%2FGAwgh5i5VQ82SEWw%2FMPRbWeX7Z26hvYoASok2d64%2BgLIULk4hweyZj5MttqiZBWy%2BbLbHHSXlcDAwJvP1EIKAriyJy829bwbXdqAblUFfz0SLt4ksu0k5IUgFVCnfbLyS1Ie6wBTfclicwTVDTgqBCtDuhoVpOW7bWDNNYqSOqAACyYPrZ9ZFouvvf8GB6OZZFJa3ONa%2BZ8MRD%2BPqnNxaYdOFquxK%2BYwOrcD4GUhFXwlHRHeCWFodN1JdvG4iMqZEh0Q0kpyha6UNxZrsuamPiYFw%2BfVNgMpG1g%2BkVYJ0STVHgXMyaIMugX7UtfjCKxs3JBjqkAebwAhGORPYIY5UFHQpsJtb3ganwzoOHKz6p1460ijp0NcL43rDGDV1PQsYdnPL2JHD6tC1vpj2wsaLdY6TCjGcqtGvL1gtSGoDwkiYNfOYpSBEs%2Bb6ZLE89fsJ6jAGDsNJszV7n8oYkFRsgPuTwFNdWON2a31tRTPZrbcsU13IoJyDTGNHeLPzXjrgaIsVQr5hJu6AXjPb6pE6ToRzv%2FJYZrCz1&X-Amz-Signature=dedaef62d0986cad2622446e5ad09509ed503fde7238fbbe8fe5f537009540da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
