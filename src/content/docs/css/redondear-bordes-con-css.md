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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5G7GNHT%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T064153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIAGZoT6lsenVkLUDFUBHvDY9FK%2Fkr8bvjEaY9i2wZb%2FwAiEAxA7ZVmBiLfZTkXtqvbO8Iu71ToMaJdOl7%2Fts3ZpvM%2Bcq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDOIgN0g0ck8e0soqICrcA1KwQQi3bCSNv7Baj70OAZvBa99UzGOpqRSdU2UhNK3GXDffqCzBnQ7TpgCNTLatljif1Ci6Rafk886iEWv7Fd%2FUNhHXVV76aYzmo3zRrYKZLQNIw%2FSxf8who7pblnIXL94BzC5usHEBzHEam52e648pCMG%2FlH53EQYcjyBZfSEuE2gJZ4K4xRgxAux4YyV8GbCZUaQ3ZsrlsArMV6k1E3YZSauIPrCNBHGWsNSIDw1R143c8euUloHhdgY5izygp2oj4qsJ3U6wWSl9QzgE9UD4Um9BC1bK62kd8fA4E%2BXpBj22Qsd9P%2FN%2FqpnpTsLoTi2FisBFSOl6WWCZkXxBb16ijkXtp9kN1RgCsT3pkY1WVrMHA4d0UnQ5uTlJuAvHfdl28ttQc5XO5P3kaWPNOYuJiNvmiPU2ECaDDGY7tZwJQ90XhrmDxE0rea4%2F8hXclRAkB4r3ooBBGp0m2bveFmXMhEoC9GKyNxRGE732fYoXo2BO1B5han20CoCH7zEi6Hw5NjwpHswyOECqMaIQFDtjypxTOeWb7eq1tvZpa7jLV2jMKV3zwk4IcdVyMSGNpy0KeHXXlc6IEpHdPwi2kHitWHyW0LCkcN4R%2FOTrKjuO7AvxHzsKW6URSv6CMLrLxMkGOqUBT49IfInSotgvNKAfVjiVrzfHLOTpokI3ShdfmUE%2Bv59%2B9aGFY4EAoTRi3OtbEZd839akoI60bF6VU3HxE0l8reoGklOCWn9C1YESVdf9OHI8Z%2FW9x5PdfB57ldJf41GMYBw8ksK9pGeByaGURUJtzR58TTKym0M3dd85Y4X4iYp%2FHaqqgEeRkMLcGFUpvUwS9temc2R%2BBUuuXqrIhSFyF8VmNQlz&X-Amz-Signature=20f5c2d6afb1ecfb741cfe856774216ace12f4d068148054561c0c3d91ce2d7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5G7GNHT%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T064153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIAGZoT6lsenVkLUDFUBHvDY9FK%2Fkr8bvjEaY9i2wZb%2FwAiEAxA7ZVmBiLfZTkXtqvbO8Iu71ToMaJdOl7%2Fts3ZpvM%2Bcq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDOIgN0g0ck8e0soqICrcA1KwQQi3bCSNv7Baj70OAZvBa99UzGOpqRSdU2UhNK3GXDffqCzBnQ7TpgCNTLatljif1Ci6Rafk886iEWv7Fd%2FUNhHXVV76aYzmo3zRrYKZLQNIw%2FSxf8who7pblnIXL94BzC5usHEBzHEam52e648pCMG%2FlH53EQYcjyBZfSEuE2gJZ4K4xRgxAux4YyV8GbCZUaQ3ZsrlsArMV6k1E3YZSauIPrCNBHGWsNSIDw1R143c8euUloHhdgY5izygp2oj4qsJ3U6wWSl9QzgE9UD4Um9BC1bK62kd8fA4E%2BXpBj22Qsd9P%2FN%2FqpnpTsLoTi2FisBFSOl6WWCZkXxBb16ijkXtp9kN1RgCsT3pkY1WVrMHA4d0UnQ5uTlJuAvHfdl28ttQc5XO5P3kaWPNOYuJiNvmiPU2ECaDDGY7tZwJQ90XhrmDxE0rea4%2F8hXclRAkB4r3ooBBGp0m2bveFmXMhEoC9GKyNxRGE732fYoXo2BO1B5han20CoCH7zEi6Hw5NjwpHswyOECqMaIQFDtjypxTOeWb7eq1tvZpa7jLV2jMKV3zwk4IcdVyMSGNpy0KeHXXlc6IEpHdPwi2kHitWHyW0LCkcN4R%2FOTrKjuO7AvxHzsKW6URSv6CMLrLxMkGOqUBT49IfInSotgvNKAfVjiVrzfHLOTpokI3ShdfmUE%2Bv59%2B9aGFY4EAoTRi3OtbEZd839akoI60bF6VU3HxE0l8reoGklOCWn9C1YESVdf9OHI8Z%2FW9x5PdfB57ldJf41GMYBw8ksK9pGeByaGURUJtzR58TTKym0M3dd85Y4X4iYp%2FHaqqgEeRkMLcGFUpvUwS9temc2R%2BBUuuXqrIhSFyF8VmNQlz&X-Amz-Signature=9f6a625d0110d4cda669d18432d5a9348a4243fde4977f8d56b327e3fcc10e62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
