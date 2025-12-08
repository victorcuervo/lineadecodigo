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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROWPCCDH%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T163927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCzvZ8wl1ZlJ%2FhZryXrJnkxac2pzvndFsnCOwhGxULlgIhAMMktdVvX%2B6vnCSrGaDJHcF2pUBIlOeCacr8FYAK7b8dKogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzqWWR4ZcJkPLiSs%2BMq3AM49853GnXWDwe5MGWhZxGw8vnZ3MB%2FeRGju6CYaQpnh84dSPkwwIGPMSnnH9%2F2dm8s0q5mnH%2FZqXz1OErkheuAgGdn3n2%2BpNvfgXzFfaik%2FB%2BBikhWcLvF2oSSsiomJBHgmjuKX9seFAnOLfyNW4hrGp93USn4MxINRRe7X1WR9RJPzG01dCX3CC7lG155rK0a94vndJRUC720IzpCGQtWQw%2BXncWWomqtBmXazGow10iWrA8KO0wlEIu2IhQ6jx390q1jMpiUU6u4rziYNGyFboQ37mTY9n0zNPuJDwcX1ciwOTsZ%2F29hh%2FQSpVJQBuyj3DAYuSupaMvTbnAK1pztdeG6dd7%2FsyAGZTNM7SczHucIpwYFiDa85Q%2Fgd6LrnyV3e89e4LXua%2F6ysqnvXDOs4ubwoQKRYwC42F8dIjNPAg6EI5h4ghzQaAN1GoM4UNVqed64Q4sEYNAiMbZJ%2F2tKx5YSX5UnMD805KzrS4%2B%2FHnrG%2BDn9dYiolwf1nOkHac%2FpDXS%2BwrUGRzts78EnYVCUoswpwfyi%2BAKUEGv3v%2B3VLDNt9v2kb99plF%2BsVxnXLH96VT3pyFaSB%2BqJB1x40UgE%2FBaLxEPwrxVOhsFXE09pGqnIHit2BLL44cmnQDC35NvJBjqkAbTmVft1dKEY%2BYo1HGj2v56%2FkW6WNwhA%2F2OOfALJEpO0yXvJ3gO%2FB9qUyqTHY3CStwi1rzllW9ZFnTCfCoxGOMgliNu%2BDzGD0wUR1pBkRqpfnAPs%2B%2BpUT%2FOtQwEfZtkKuv8tD5s0FrYvIk5pkSpIHuYc7Y7EbyFGEj%2Fdb2oHfXHk2kmXVXp33s5mhYzdV0lNnq%2BD%2F79ic%2B2ZrKnr0yYitRjf3ufd&X-Amz-Signature=329b7ed4565be5a1e9e1c8edd0e80ac938e0b2aab49c918976f2f4852e5c3b0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROWPCCDH%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T163927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCzvZ8wl1ZlJ%2FhZryXrJnkxac2pzvndFsnCOwhGxULlgIhAMMktdVvX%2B6vnCSrGaDJHcF2pUBIlOeCacr8FYAK7b8dKogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzqWWR4ZcJkPLiSs%2BMq3AM49853GnXWDwe5MGWhZxGw8vnZ3MB%2FeRGju6CYaQpnh84dSPkwwIGPMSnnH9%2F2dm8s0q5mnH%2FZqXz1OErkheuAgGdn3n2%2BpNvfgXzFfaik%2FB%2BBikhWcLvF2oSSsiomJBHgmjuKX9seFAnOLfyNW4hrGp93USn4MxINRRe7X1WR9RJPzG01dCX3CC7lG155rK0a94vndJRUC720IzpCGQtWQw%2BXncWWomqtBmXazGow10iWrA8KO0wlEIu2IhQ6jx390q1jMpiUU6u4rziYNGyFboQ37mTY9n0zNPuJDwcX1ciwOTsZ%2F29hh%2FQSpVJQBuyj3DAYuSupaMvTbnAK1pztdeG6dd7%2FsyAGZTNM7SczHucIpwYFiDa85Q%2Fgd6LrnyV3e89e4LXua%2F6ysqnvXDOs4ubwoQKRYwC42F8dIjNPAg6EI5h4ghzQaAN1GoM4UNVqed64Q4sEYNAiMbZJ%2F2tKx5YSX5UnMD805KzrS4%2B%2FHnrG%2BDn9dYiolwf1nOkHac%2FpDXS%2BwrUGRzts78EnYVCUoswpwfyi%2BAKUEGv3v%2B3VLDNt9v2kb99plF%2BsVxnXLH96VT3pyFaSB%2BqJB1x40UgE%2FBaLxEPwrxVOhsFXE09pGqnIHit2BLL44cmnQDC35NvJBjqkAbTmVft1dKEY%2BYo1HGj2v56%2FkW6WNwhA%2F2OOfALJEpO0yXvJ3gO%2FB9qUyqTHY3CStwi1rzllW9ZFnTCfCoxGOMgliNu%2BDzGD0wUR1pBkRqpfnAPs%2B%2BpUT%2FOtQwEfZtkKuv8tD5s0FrYvIk5pkSpIHuYc7Y7EbyFGEj%2Fdb2oHfXHk2kmXVXp33s5mhYzdV0lNnq%2BD%2F79ic%2B2ZrKnr0yYitRjf3ufd&X-Amz-Signature=4786287e9221ef9eea7bbbf7eb25bcc110c660d5a457637c396b7770e101960d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
