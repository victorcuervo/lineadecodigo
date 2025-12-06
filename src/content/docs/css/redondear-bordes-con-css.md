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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GT6ADG3%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T100002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDlbjxqVnZrhaGNJyqGaeT49QaMLVCXZ2D%2B5PBzEl7BlQIgIkzIPDjxPiMTZb5f3vN%2FnUn%2BSnJrESBiooF0CtQBYe0q%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDBwGYPv9TviL%2BZmoVyrcA5OCdSdih0dqxVHCPs8CHxylAC6OayPpp1S0i5%2BI7z1wi7Y6pWob3dShlznAVusA7wdT6IyG3QcBsYAIDBFAsXBE8KFH2w4mqLK8qnfAVGc1%2BM0uCQjxCPYidScdIkl16frmwqcxak%2BsMiyC5lxdNN4YWff1VKcPhdNJYmqURA2HSwM3dLtYsA6GHbiVE8KUtRpo2VoCrrnnJ6BtMcqEkjc7hqVgBcFdGrH3gdaBQvyLQ4OBL7uB85RpkxHsmq5agv4zd%2FOuYFl2Bb6%2BUKmFp40cx8TGmpDazNbUsbrtGkbko2MVl5IBGZGPQvuGC011koAbn7%2FvMYLApt8eLNBJD5sUleaHoVaOx9UEsMS9lt3EiOmkKWLZDJ7fdVn91IwcZojEpOqgzM5Kc3l6DZ%2Fw8TMo2JDiqOrq04178aQgdtfq1XdcsY2BSpDe2mmKsYzoBQl0lmtfNkCCQABO1tpLYux0bCnZNn8B9q3iOhtIlFYlQdjBtHOxl4Rl0OjBWeZakPxMkDdBwSOTx32NDkIi4%2FVNKp71SkUwUpdQBzKMygVe0gEztwoeJdo0FizQYS5TftuzkPMUHFdFKQylFBHOojmW1DfFezL1uP%2BZFQ%2BtAIIckCGJxtsL9wZESK9wMITrz8kGOqUB9J4pkVobb%2FzbLravZM1f2eZHkI0dR8hnK%2BBClJ2gfzwZn84z6NpwiJCbE9QPTpTryOEIGZjm1rJ6YI9mY2z0L1CmHghsu9It3F42KNlL%2BJfgFkFxPL%2F6vkx98VQ3x4hnJMh9PhDJnWw7srWiHgsuEbjx6bnAIsZcOZFUCz3zSvM71LviTavQnIDxdsp6XwjQhHxB0yyOZ3UmARm7HmfubAHXzVBQ&X-Amz-Signature=49b247dc5ed774e5f2cf640a573753756a98f947563a39ce62f15dbe6ba15812&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GT6ADG3%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T100002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDlbjxqVnZrhaGNJyqGaeT49QaMLVCXZ2D%2B5PBzEl7BlQIgIkzIPDjxPiMTZb5f3vN%2FnUn%2BSnJrESBiooF0CtQBYe0q%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDBwGYPv9TviL%2BZmoVyrcA5OCdSdih0dqxVHCPs8CHxylAC6OayPpp1S0i5%2BI7z1wi7Y6pWob3dShlznAVusA7wdT6IyG3QcBsYAIDBFAsXBE8KFH2w4mqLK8qnfAVGc1%2BM0uCQjxCPYidScdIkl16frmwqcxak%2BsMiyC5lxdNN4YWff1VKcPhdNJYmqURA2HSwM3dLtYsA6GHbiVE8KUtRpo2VoCrrnnJ6BtMcqEkjc7hqVgBcFdGrH3gdaBQvyLQ4OBL7uB85RpkxHsmq5agv4zd%2FOuYFl2Bb6%2BUKmFp40cx8TGmpDazNbUsbrtGkbko2MVl5IBGZGPQvuGC011koAbn7%2FvMYLApt8eLNBJD5sUleaHoVaOx9UEsMS9lt3EiOmkKWLZDJ7fdVn91IwcZojEpOqgzM5Kc3l6DZ%2Fw8TMo2JDiqOrq04178aQgdtfq1XdcsY2BSpDe2mmKsYzoBQl0lmtfNkCCQABO1tpLYux0bCnZNn8B9q3iOhtIlFYlQdjBtHOxl4Rl0OjBWeZakPxMkDdBwSOTx32NDkIi4%2FVNKp71SkUwUpdQBzKMygVe0gEztwoeJdo0FizQYS5TftuzkPMUHFdFKQylFBHOojmW1DfFezL1uP%2BZFQ%2BtAIIckCGJxtsL9wZESK9wMITrz8kGOqUB9J4pkVobb%2FzbLravZM1f2eZHkI0dR8hnK%2BBClJ2gfzwZn84z6NpwiJCbE9QPTpTryOEIGZjm1rJ6YI9mY2z0L1CmHghsu9It3F42KNlL%2BJfgFkFxPL%2F6vkx98VQ3x4hnJMh9PhDJnWw7srWiHgsuEbjx6bnAIsZcOZFUCz3zSvM71LviTavQnIDxdsp6XwjQhHxB0yyOZ3UmARm7HmfubAHXzVBQ&X-Amz-Signature=36f43c2367d9d045b6dab8288ad3dc3bdd1ade934f6fc239dd697f4227ef712e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
