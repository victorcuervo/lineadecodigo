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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3XLZGXV%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T010204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIAvpYnM%2Bl0j5W9T%2BJjag4nZ2Mu0dkhNCG8NpPbGWSK%2FNAiEAyUTV0N4ECDQIgoT%2FqtHspXypclFMBKB1xXE6MH9Y3Scq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDEshoWmgfEEQOlon1SrcAwLgnxamlJINpn4I1FCaADXEP8mlrZVPVAA8iHA4Rse%2Fs1Me8Ij9wXvDe1nu5oKg0mXA3t9GrCoQ%2F2AK9VQDyFtfj8pUrUJhv4VsdEWwE0HnstK5jsLYq36UZ0P%2BKsXLaQBgAzaczRQLu%2Fc7ow1sfIxoYq1bxqufcSaWjp9SJztkuFvlxcrg5qfhmgsqKOyjBibvtMnLDICulYcdmB2TW6zfjEV99ndGPCFBpXrcEBgmmsORfyfiJ4EVtkNUEUhB6Ye0lRnv2dzprDuVDG7IcD09BJQvhnHlab3puaeDZXvgmcLm6GeF9XzfpXW0G6nQqnko3Kb479ZJmXsVGpbEH7HLklSISoCy4HWewKrgkQmtVDechB5As%2BDZBiE7LYYMsBpXAgnXzUMtRKuaJJ16tjjdgJgrtcZTwRIoqaXlkksaxiPVZVU%2BRiLSlqmQxbp2KYM7RklOe%2BZMFsfl6k%2BZLmtpgFazOiyshc%2FjytDUbCc8mE7Mxn3NUCjZD%2FVYigrsObSJ9m3UYZHkQ7bCGIp2LG7INk7q8jhKGZJ1XUdGPs367%2BCzF1il1m1s%2BxYEqeYScz25ZnHx9VkIs9fKBr9pjB3oXfqGBKQzBAddwi6YUBNP1FXco8JqOi%2B5T98TMIi0w8kGOqUB6QPWI2nzHgJpTiClFEF5E8IZIWn8HBp3lsWYn5C8d7gALA0s4scrsk4nnn%2Frr1kQOf3dH5Wks0Ylp%2BFawbM1IJAPCqR39zTbfGuUpTnpKky%2BVihXqfzkfXjqO%2BrYo6eHlJG7vUDIq%2FxRpSi24j1EJ14B%2Fv0XtZhvbt6kT64sk2QzxYCrJ2qevGI7v01lgrC2kYQG58DtFUerup%2FAHE42GIpwRi%2FW&X-Amz-Signature=f11b50e1801fbe8dfa329edc921af94abe1f33ef5765c3c20371b2e66e275445&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3XLZGXV%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T010204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIAvpYnM%2Bl0j5W9T%2BJjag4nZ2Mu0dkhNCG8NpPbGWSK%2FNAiEAyUTV0N4ECDQIgoT%2FqtHspXypclFMBKB1xXE6MH9Y3Scq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDEshoWmgfEEQOlon1SrcAwLgnxamlJINpn4I1FCaADXEP8mlrZVPVAA8iHA4Rse%2Fs1Me8Ij9wXvDe1nu5oKg0mXA3t9GrCoQ%2F2AK9VQDyFtfj8pUrUJhv4VsdEWwE0HnstK5jsLYq36UZ0P%2BKsXLaQBgAzaczRQLu%2Fc7ow1sfIxoYq1bxqufcSaWjp9SJztkuFvlxcrg5qfhmgsqKOyjBibvtMnLDICulYcdmB2TW6zfjEV99ndGPCFBpXrcEBgmmsORfyfiJ4EVtkNUEUhB6Ye0lRnv2dzprDuVDG7IcD09BJQvhnHlab3puaeDZXvgmcLm6GeF9XzfpXW0G6nQqnko3Kb479ZJmXsVGpbEH7HLklSISoCy4HWewKrgkQmtVDechB5As%2BDZBiE7LYYMsBpXAgnXzUMtRKuaJJ16tjjdgJgrtcZTwRIoqaXlkksaxiPVZVU%2BRiLSlqmQxbp2KYM7RklOe%2BZMFsfl6k%2BZLmtpgFazOiyshc%2FjytDUbCc8mE7Mxn3NUCjZD%2FVYigrsObSJ9m3UYZHkQ7bCGIp2LG7INk7q8jhKGZJ1XUdGPs367%2BCzF1il1m1s%2BxYEqeYScz25ZnHx9VkIs9fKBr9pjB3oXfqGBKQzBAddwi6YUBNP1FXco8JqOi%2B5T98TMIi0w8kGOqUB6QPWI2nzHgJpTiClFEF5E8IZIWn8HBp3lsWYn5C8d7gALA0s4scrsk4nnn%2Frr1kQOf3dH5Wks0Ylp%2BFawbM1IJAPCqR39zTbfGuUpTnpKky%2BVihXqfzkfXjqO%2BrYo6eHlJG7vUDIq%2FxRpSi24j1EJ14B%2Fv0XtZhvbt6kT64sk2QzxYCrJ2qevGI7v01lgrC2kYQG58DtFUerup%2FAHE42GIpwRi%2FW&X-Amz-Signature=b53dd135d085186a731322fb5337f8472354a8f06000f5c52677f48c65d8503f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
