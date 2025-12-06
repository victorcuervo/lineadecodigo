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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBHH6DIR%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T102126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKxPXroIXdqFVDFVLegTvHLJ4QI9T9Q6xpI3gTYqIj6AIgXxy96f%2FIfXyDa6bviQSDSSZRL6bJsMqn7KErfnWJnU0q%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDDhNiAeBWjTbc5efQCrcA12BIGuMc1q5eDnH8QGCZcoVJTw8h4LylVG%2F7d9F%2Fh4O1WV%2Fndidkip0kqcukfmUFhIyHVVp4KjmuNazrMWUdg3wK6FFMYXqJzfigLGaEhFj2Gi5dchHmGWZlu83ITfrgkuATlWoeaOjPnkd5T%2F0lrfKNAz6nNY7hJrHi2LwzRdaTRRl4OJLeMJeP7kO8XYAid68SBEJqPBBpOYqbC0uzTnndgRM5Dsck75bl8a7mN4%2FDYzo1cjTDc6c%2FbGq5iunDqTFhepWI9%2FSNpytqIdpv97KSjphSjA5Q8%2BykL1QSyds%2Fr5gyiYTRk7AP%2F9H2mF8aM6BX1FFIPCKKyCVsYmijzDxmXCes1cV7vkx4r8M%2F1J%2FnoR15r550nm%2FVVMmzbpU4z2kNUljm%2FD6R49YyJxoV7SYju35PN%2F649gX7qPsE7iVK0WshUWhYwJbG84aWprvy36%2BnYQ4bZ%2BfHqJSoRkZTmuSRSyV7rXzGg%2FrPDtStlWAK%2BYCuH2iLXxSRunOcEBHxb8SfQ8dQn5DZciD78BM9ZVll5sIzblccNJbsMdAiHQNo1z0Lw2%2BE8dBMsJ1vV2vyrHNr%2BxzNfCu92rhJIegK%2BEyooiF4Z7%2F64E77LarGUEIyyjmC56yiRqE%2BoUrMPrqz8kGOqUBQaXkkyQf%2FqX8QP54DYlP8ZCEY1pjyxhRWJRrp%2FplZlMBmamGL%2FZ5EUzpBjQgFB2%2Biw%2BPVo%2BYlkRlXUFAtkD0b%2BGc30Qu%2BJNioLhFgWVHULcQQdhDiaOPH2ZgnVGTb9MdgNQRszKcQcxc6nyRZ1%2FK0kOOWNd7cFB6NsJycAP90hWYi8NkEVlZ2sQqdHcuWGfsjXM3yGq2sjoYgXN34vq7FXkykiIH&X-Amz-Signature=a40f21185ae6751807057a08cfd5be286cda162ff5b3497d8d6bec74abf72a20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBHH6DIR%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T102126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKxPXroIXdqFVDFVLegTvHLJ4QI9T9Q6xpI3gTYqIj6AIgXxy96f%2FIfXyDa6bviQSDSSZRL6bJsMqn7KErfnWJnU0q%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDDhNiAeBWjTbc5efQCrcA12BIGuMc1q5eDnH8QGCZcoVJTw8h4LylVG%2F7d9F%2Fh4O1WV%2Fndidkip0kqcukfmUFhIyHVVp4KjmuNazrMWUdg3wK6FFMYXqJzfigLGaEhFj2Gi5dchHmGWZlu83ITfrgkuATlWoeaOjPnkd5T%2F0lrfKNAz6nNY7hJrHi2LwzRdaTRRl4OJLeMJeP7kO8XYAid68SBEJqPBBpOYqbC0uzTnndgRM5Dsck75bl8a7mN4%2FDYzo1cjTDc6c%2FbGq5iunDqTFhepWI9%2FSNpytqIdpv97KSjphSjA5Q8%2BykL1QSyds%2Fr5gyiYTRk7AP%2F9H2mF8aM6BX1FFIPCKKyCVsYmijzDxmXCes1cV7vkx4r8M%2F1J%2FnoR15r550nm%2FVVMmzbpU4z2kNUljm%2FD6R49YyJxoV7SYju35PN%2F649gX7qPsE7iVK0WshUWhYwJbG84aWprvy36%2BnYQ4bZ%2BfHqJSoRkZTmuSRSyV7rXzGg%2FrPDtStlWAK%2BYCuH2iLXxSRunOcEBHxb8SfQ8dQn5DZciD78BM9ZVll5sIzblccNJbsMdAiHQNo1z0Lw2%2BE8dBMsJ1vV2vyrHNr%2BxzNfCu92rhJIegK%2BEyooiF4Z7%2F64E77LarGUEIyyjmC56yiRqE%2BoUrMPrqz8kGOqUBQaXkkyQf%2FqX8QP54DYlP8ZCEY1pjyxhRWJRrp%2FplZlMBmamGL%2FZ5EUzpBjQgFB2%2Biw%2BPVo%2BYlkRlXUFAtkD0b%2BGc30Qu%2BJNioLhFgWVHULcQQdhDiaOPH2ZgnVGTb9MdgNQRszKcQcxc6nyRZ1%2FK0kOOWNd7cFB6NsJycAP90hWYi8NkEVlZ2sQqdHcuWGfsjXM3yGq2sjoYgXN34vq7FXkykiIH&X-Amz-Signature=084b6412df4dd35a821593385c61f771b83aa8dad2d478be1ea8b35947bc5521&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
