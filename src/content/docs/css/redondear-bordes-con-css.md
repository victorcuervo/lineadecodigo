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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675MQPOX6%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T090823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdeHUXNQdTxVqPQhZKAtPBXd74Zw6juzQ7gE35%2FgcopgIgffB6%2B8bUpO8NQa1n6m1%2BXJvukpMIAqfpF2%2FsMaoctc4qiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDpmev3yGBcu9G873SrcA2liziEt%2FSNGYm7Zh1ynXoX%2BrzjUx6010qXenz6fUZYBdTIQLBxrZ7%2FC9cTNsf3deGS2qkQZrCGx2APjxGsBsxbCk69U47NUht4MqzayY%2FgUwBZwdotZrdVnKIUV%2F8myKhk%2FNcOv3Ti0XpXkfNJTs4p9jtAwgc1EPM%2Bx27LcrBB8sbVpNudxuhb0ViLiupw4If388B23aw3kMzth%2Flp4ZhvZu6B%2FiBnxPHGbuu9Jtq2%2BPuOz%2FC4ZbsYhtmJieXqjS4%2Fm1VneSZjaM437OdbYEAPi1lUYkQyRAN59Igf6SOQ8aweILmHomK9PVKOe3imX68GZ3cosfl%2BwhGJvo03P97F3HymE1VYj6qWeRB9MZccFXDg1DTHkvWs0aJH42Om4fSKZ7B7GhxftMhC4MsEMmjJABAZdBxLVjbLzxkh96kLNUaVG1cIZCRHQ0O2k3c1UN3UtPPhFGIiD7jkaOdVApJWD5fTPePBsuHRQOBog5tQb0cFr6Ro3%2FIeRL7mSTA1q63d7ITiytPGkEa9zVhZy4I86FH9L271MoQj0rGv32MjAoe0DAV0rB0di4OaPH3h5AOpL7noFtYxsPwIMzoQEvIi8UINiJUn1wxBkk1%2FV1cmFUHeDiwjnmMkwTk7%2BMPvs2ckGOqUBSHWuE14gnnY525IS3lIpuyYHbZbvwN5QRzLzDPyOkEmnG9kYDeZiKsbKgBioPyjZxnd9vmLMfVM5ieX%2BPsWxG%2FaybBi3wA8Ol7%2F6ekmEs0cYFI%2BViJg%2BTf6JV4UvMWfF8%2FQ9X2cFqtMOPdivrv0LCM4Umt3VwkwWDMa%2FOGOM2aij%2B3TuOFuVpBD%2FO%2B6OM8w0m3PkfpY00tcj3EsdT1Xegwei%2Fpdp&X-Amz-Signature=5950e3ec5472bf828a41b21074568119dba1b6730deac495556b0f1596c775fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675MQPOX6%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T090823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdeHUXNQdTxVqPQhZKAtPBXd74Zw6juzQ7gE35%2FgcopgIgffB6%2B8bUpO8NQa1n6m1%2BXJvukpMIAqfpF2%2FsMaoctc4qiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDpmev3yGBcu9G873SrcA2liziEt%2FSNGYm7Zh1ynXoX%2BrzjUx6010qXenz6fUZYBdTIQLBxrZ7%2FC9cTNsf3deGS2qkQZrCGx2APjxGsBsxbCk69U47NUht4MqzayY%2FgUwBZwdotZrdVnKIUV%2F8myKhk%2FNcOv3Ti0XpXkfNJTs4p9jtAwgc1EPM%2Bx27LcrBB8sbVpNudxuhb0ViLiupw4If388B23aw3kMzth%2Flp4ZhvZu6B%2FiBnxPHGbuu9Jtq2%2BPuOz%2FC4ZbsYhtmJieXqjS4%2Fm1VneSZjaM437OdbYEAPi1lUYkQyRAN59Igf6SOQ8aweILmHomK9PVKOe3imX68GZ3cosfl%2BwhGJvo03P97F3HymE1VYj6qWeRB9MZccFXDg1DTHkvWs0aJH42Om4fSKZ7B7GhxftMhC4MsEMmjJABAZdBxLVjbLzxkh96kLNUaVG1cIZCRHQ0O2k3c1UN3UtPPhFGIiD7jkaOdVApJWD5fTPePBsuHRQOBog5tQb0cFr6Ro3%2FIeRL7mSTA1q63d7ITiytPGkEa9zVhZy4I86FH9L271MoQj0rGv32MjAoe0DAV0rB0di4OaPH3h5AOpL7noFtYxsPwIMzoQEvIi8UINiJUn1wxBkk1%2FV1cmFUHeDiwjnmMkwTk7%2BMPvs2ckGOqUBSHWuE14gnnY525IS3lIpuyYHbZbvwN5QRzLzDPyOkEmnG9kYDeZiKsbKgBioPyjZxnd9vmLMfVM5ieX%2BPsWxG%2FaybBi3wA8Ol7%2F6ekmEs0cYFI%2BViJg%2BTf6JV4UvMWfF8%2FQ9X2cFqtMOPdivrv0LCM4Umt3VwkwWDMa%2FOGOM2aij%2B3TuOFuVpBD%2FO%2B6OM8w0m3PkfpY00tcj3EsdT1Xegwei%2Fpdp&X-Amz-Signature=38dafc8bfeea00ec734ddf4d38b1eb6659cd3daae9cf8123ff6a1c7dd342482b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
