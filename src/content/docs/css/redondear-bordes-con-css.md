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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYT2LCCC%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T002627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmj4QZT4Iz3VZ6D7KkzjvvwzDHN4%2BAug6%2B37vYrCWDJQIgAPu3ZPcZmfVjY8u2cPqwlWJ5oO2n2dXSxGCZhawzUwoq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDJLLLmcGUv9qgBfUQCrcA5%2Bj2iLFzArILHkb%2F6i5bs0XH0I0wjr5VIyWToqXXKB3eNh57k9Zc3qcul6vxRJolACJph12jwDSTsTCSYDlc10ygVhH2Xnhi1l1uG0d%2B4clIMLdnx848IpYD3QKo0JFwgBk1BVF6b%2BaxzkdvJmlhGfCap%2F7q4eW1Mdn2vEiom1O4RbDJ78R2o%2BM7RAQjDRRJKy7CKQFmJL5P8R5XE4doJs%2FppTVhuSpG2Bh8bBmB65U2woksQzfnBbBa9e8MBoGe1Rhpg0YUAAMHHiFe9z0ETyiAxh9HUKgPXcL%2FT0tmaehKOnQl2%2BtfWZzklZ%2FCeldIVzzFo8zP9m%2FgEHhwuFhXifOfzQOR3mKl3feFJL0XF9QkFLdZiHQlXtdnAVdJahfQKXGcc%2BnRyjyBbSJSEIjVIm9EMqstcorWPHmr2mvJdjuKiePM5jCrTgW%2FxRd36AVgztMmMRIAFVJXy67OzkmfbbYojeAxTI%2BXNTAIgVPiG%2B%2B9Gm4c0Q5I01AOvpyQa6kllWvUCl9%2BAY7F6vcqULdP22b8xZjxrviV%2Fy7M%2B%2FSM%2BNGCxWrfcC2Oyu%2FrYJcuDgqEYlyvqKn%2BK2lZl49x8i%2FsxprrrIrqSfljZTmx4WneY%2FDfBtx6e%2FJG6gLG0e1MIrozckGOqUBrSJWkIUSWo9TkJEN4bOgD6UUAWBy9M6REtCUcqj1%2F9PnmDgvpxH1ZYaKVLFAFZo2ewIwpjc%2Fm3OuoYTlSvzQFmOqZ%2BPreGbVv0i7sUQzsAuilcBYFpvlHlQ0Gpe9tyEm3AW1gAhsIoY36o8Oau4AxRlFJOoZ7vNOkERIC%2FvUz9LkzQMPJ0EHekyZrNzLR%2F%2FZpQ51s16hdyPrCN4FMayuNEoA3WcO&X-Amz-Signature=22c7eb523f9e106a428c65204fd04e820d17c9c01c992e0404ced52287c2675c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYT2LCCC%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T002627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmj4QZT4Iz3VZ6D7KkzjvvwzDHN4%2BAug6%2B37vYrCWDJQIgAPu3ZPcZmfVjY8u2cPqwlWJ5oO2n2dXSxGCZhawzUwoq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDJLLLmcGUv9qgBfUQCrcA5%2Bj2iLFzArILHkb%2F6i5bs0XH0I0wjr5VIyWToqXXKB3eNh57k9Zc3qcul6vxRJolACJph12jwDSTsTCSYDlc10ygVhH2Xnhi1l1uG0d%2B4clIMLdnx848IpYD3QKo0JFwgBk1BVF6b%2BaxzkdvJmlhGfCap%2F7q4eW1Mdn2vEiom1O4RbDJ78R2o%2BM7RAQjDRRJKy7CKQFmJL5P8R5XE4doJs%2FppTVhuSpG2Bh8bBmB65U2woksQzfnBbBa9e8MBoGe1Rhpg0YUAAMHHiFe9z0ETyiAxh9HUKgPXcL%2FT0tmaehKOnQl2%2BtfWZzklZ%2FCeldIVzzFo8zP9m%2FgEHhwuFhXifOfzQOR3mKl3feFJL0XF9QkFLdZiHQlXtdnAVdJahfQKXGcc%2BnRyjyBbSJSEIjVIm9EMqstcorWPHmr2mvJdjuKiePM5jCrTgW%2FxRd36AVgztMmMRIAFVJXy67OzkmfbbYojeAxTI%2BXNTAIgVPiG%2B%2B9Gm4c0Q5I01AOvpyQa6kllWvUCl9%2BAY7F6vcqULdP22b8xZjxrviV%2Fy7M%2B%2FSM%2BNGCxWrfcC2Oyu%2FrYJcuDgqEYlyvqKn%2BK2lZl49x8i%2FsxprrrIrqSfljZTmx4WneY%2FDfBtx6e%2FJG6gLG0e1MIrozckGOqUBrSJWkIUSWo9TkJEN4bOgD6UUAWBy9M6REtCUcqj1%2F9PnmDgvpxH1ZYaKVLFAFZo2ewIwpjc%2Fm3OuoYTlSvzQFmOqZ%2BPreGbVv0i7sUQzsAuilcBYFpvlHlQ0Gpe9tyEm3AW1gAhsIoY36o8Oau4AxRlFJOoZ7vNOkERIC%2FvUz9LkzQMPJ0EHekyZrNzLR%2F%2FZpQ51s16hdyPrCN4FMayuNEoA3WcO&X-Amz-Signature=7a3545fdbcdf660e58c8eccb74ae49e63abcbca35a5c05f92171e1542e77ac7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
