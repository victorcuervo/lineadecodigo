---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2025-12-17
slug: css/redondear-bordes-con-css
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMOJSRTJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T103649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtgBcbHBQj5V487gsX3QItM4wrBY4UWqfaTkgHp6TKwwIgNSeRTtIYL0nrtACDJ71jMqDDVA4yn0nwI%2BIpW6ZRdHkq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDGw0GaoWvasnSRLj8CrcA0C4JD3U8YJHzhKKUqDlfLbLuhzhb0eXDrqJVERETSAZGus%2Fvvgjm1GfkNLRz0b9xfENFwiSOODaSZrOkRrBCHjdi%2ByumZ3Y35j9VyMqNpD2674AYfH%2FPtO7vk2siki%2FCb1UGzO0wfwHtJMZnoiA3UAezyOqb9U44L3rt%2FTSEHiemTVA4qXxfuSSan9ebbeSy%2FDGR7qSuZRWyQ5sKiTTmkk97D1dXMlRs8ZFqDwvSK7oHWY55rqv7rZdv8pmRJN%2BHzP2OVf02EoPL4D7ou82SyVdaCUVlWyEoyCcBAXWI2IQnUOOmuwTTXBVsPpzXpak72xFlVZSIxcV5vxOJO1D6dRvQU31IoYoIoQMMAIA9WdFymMya9P4Ch5lwTQiHvEWyGRBYQgclhrqm0%2FJDyjnp%2BBUdoMHkiZ0l2xazPbRRgfP45jAmp4YugDb9TF8mKhju0dhZotnydEkKm4H6sAB%2Bta5anAxO3Sl5qxlaY%2FGU3TSdgdmpnujLgQAVf5rPk1cahFICfnBgG8%2BJK6ZmMHXxxxXry2T1bju4W5%2BAr6lg%2BbCej%2FaMw1Go1uoN6%2FiPWv8lNdQCqj%2BzpSJXE%2BdTptooWVrHfT5856gzhNu2MLkh3iGIu%2FAewa7LxPv3xBMMJ7vicoGOqUBif3QcEQ7J3DX0MkEngealEifTGBOFpFZwtgea9I4I1KixgAaW3345rgzCxwLcaxFZjj9uGtO%2BLIyMWzzM%2FIA%2BEeqM4g43p7rbSkU6aUwwjdaQXKlVvEdiZrua6pW45Is00XZsTP8xVv9IfJhcumlz%2FS2CMhq7zbOBYNurL29Kw07ZJlo5mp0T9PMRov8UInUBjYxNLGWUSMR5Bn5yfrpvIXSEq76&X-Amz-Signature=bb04bd5f156522db5915bb64b14413267dd2fbd22e0b9b6eb023f0cc043a37e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMOJSRTJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T103649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtgBcbHBQj5V487gsX3QItM4wrBY4UWqfaTkgHp6TKwwIgNSeRTtIYL0nrtACDJ71jMqDDVA4yn0nwI%2BIpW6ZRdHkq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDGw0GaoWvasnSRLj8CrcA0C4JD3U8YJHzhKKUqDlfLbLuhzhb0eXDrqJVERETSAZGus%2Fvvgjm1GfkNLRz0b9xfENFwiSOODaSZrOkRrBCHjdi%2ByumZ3Y35j9VyMqNpD2674AYfH%2FPtO7vk2siki%2FCb1UGzO0wfwHtJMZnoiA3UAezyOqb9U44L3rt%2FTSEHiemTVA4qXxfuSSan9ebbeSy%2FDGR7qSuZRWyQ5sKiTTmkk97D1dXMlRs8ZFqDwvSK7oHWY55rqv7rZdv8pmRJN%2BHzP2OVf02EoPL4D7ou82SyVdaCUVlWyEoyCcBAXWI2IQnUOOmuwTTXBVsPpzXpak72xFlVZSIxcV5vxOJO1D6dRvQU31IoYoIoQMMAIA9WdFymMya9P4Ch5lwTQiHvEWyGRBYQgclhrqm0%2FJDyjnp%2BBUdoMHkiZ0l2xazPbRRgfP45jAmp4YugDb9TF8mKhju0dhZotnydEkKm4H6sAB%2Bta5anAxO3Sl5qxlaY%2FGU3TSdgdmpnujLgQAVf5rPk1cahFICfnBgG8%2BJK6ZmMHXxxxXry2T1bju4W5%2BAr6lg%2BbCej%2FaMw1Go1uoN6%2FiPWv8lNdQCqj%2BzpSJXE%2BdTptooWVrHfT5856gzhNu2MLkh3iGIu%2FAewa7LxPv3xBMMJ7vicoGOqUBif3QcEQ7J3DX0MkEngealEifTGBOFpFZwtgea9I4I1KixgAaW3345rgzCxwLcaxFZjj9uGtO%2BLIyMWzzM%2FIA%2BEeqM4g43p7rbSkU6aUwwjdaQXKlVvEdiZrua6pW45Is00XZsTP8xVv9IfJhcumlz%2FS2CMhq7zbOBYNurL29Kw07ZJlo5mp0T9PMRov8UInUBjYxNLGWUSMR5Bn5yfrpvIXSEq76&X-Amz-Signature=1906652a53d75bbe961958537f9195d9e500cba0f5bba8cb0e7fd3cd1f337d2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Si queremos modificar los dos radios de todas las esquinas podemos utilizar la versión reducida de [`border-radius`](https://w3api.com/CSS/border-radius/):


```css
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


```css
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
