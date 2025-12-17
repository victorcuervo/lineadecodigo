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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGJ3MYK4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T123111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCaPQagbnv3ASg4ZzHYEKPsiYBWYJrX0KtcVY1DRr936QIgT6iU011VjPMZJRiizvAsl27EGjtZBc7bCEWCfAYpqc0q%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDKT7j1siCjn5u1RoiyrcA8gEb1P7FQvznSSqyk%2Fue85vemLtl8nBhQNk73GTRhpJxdwFrsn60jfY5FyhGxD06d7hSLm2g73DbkQvcwmStFdwDG455WQxZ4soeV0eWOp2NaKaEEqSmw3VjYhbCWZclcOFN7%2FLPh%2FRInjjLDaOcGpoCJMKZI4dJ%2Fz7IVeBBv38ug%2Bs4IPnOz5W3%2Fqai30bvwV3nPobf0tuHHJiNVnUz38%2F0fMZJNy1fk4BHRchxtejTBogPMVI2p5b6golq3ZxAZcc3KV2RqzTpSkMV2TCsjzhPZEtpCzI6fX0kLpUwp5lVasSlSD8T9r7dq7eTvBTdr%2Fq3EQ7jo6grugPyRHvSTjDoP964A0XbpOL8PlWWGtALTxAt55tP0jXS32Qgr3nvKL5V21KONhZgyI0XKfLu%2F1DmIuRZJ%2BqdfIwc04DrnKpftbUdJqK2WG52WhWMgQAoRJHlQa5tJugu1SHWQRt61ENVQ%2FL%2Bx7SbztN95JZMHHm8AhV6oc0p%2BDJT0uheQAI4sCabjbGx4PClqo%2Fh%2FhNs6yT25pc49Nb%2FKCLRtfP4WmysX7S%2BblPzVpLzZp4DC3IOkpZtWIOKgBCnIedMiuRCp7I9sjh71z4t73ZbwZr94uo7sCCHe2jnYQI86cQMLCqisoGOqUBq0%2BZnwChLmA473cZO0PBmEudP9evz7XExJHQ1U9oB%2Ffg5cvlysZi76BDh79UCrZ%2FpWggjCWE9HON1rHAUp80EUHKBFBrh08uVwVM1a6aBrHPUtvBAgazBlpTMrK%2B2nQxinquHb63qmHYvE%2FUgnHz8xBZ8AKtAnBYYLf3nynK%2BQqq%2Fax5gS8SPwpgZKObaYp4LMCLLQIflA%2FzvFrl7aZD5SWkgQz4&X-Amz-Signature=e2fda9d24d9153f8d443b7c0432d17bd62342308a37e39166c5fa0a8d311a7ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGJ3MYK4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T123111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCaPQagbnv3ASg4ZzHYEKPsiYBWYJrX0KtcVY1DRr936QIgT6iU011VjPMZJRiizvAsl27EGjtZBc7bCEWCfAYpqc0q%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDKT7j1siCjn5u1RoiyrcA8gEb1P7FQvznSSqyk%2Fue85vemLtl8nBhQNk73GTRhpJxdwFrsn60jfY5FyhGxD06d7hSLm2g73DbkQvcwmStFdwDG455WQxZ4soeV0eWOp2NaKaEEqSmw3VjYhbCWZclcOFN7%2FLPh%2FRInjjLDaOcGpoCJMKZI4dJ%2Fz7IVeBBv38ug%2Bs4IPnOz5W3%2Fqai30bvwV3nPobf0tuHHJiNVnUz38%2F0fMZJNy1fk4BHRchxtejTBogPMVI2p5b6golq3ZxAZcc3KV2RqzTpSkMV2TCsjzhPZEtpCzI6fX0kLpUwp5lVasSlSD8T9r7dq7eTvBTdr%2Fq3EQ7jo6grugPyRHvSTjDoP964A0XbpOL8PlWWGtALTxAt55tP0jXS32Qgr3nvKL5V21KONhZgyI0XKfLu%2F1DmIuRZJ%2BqdfIwc04DrnKpftbUdJqK2WG52WhWMgQAoRJHlQa5tJugu1SHWQRt61ENVQ%2FL%2Bx7SbztN95JZMHHm8AhV6oc0p%2BDJT0uheQAI4sCabjbGx4PClqo%2Fh%2FhNs6yT25pc49Nb%2FKCLRtfP4WmysX7S%2BblPzVpLzZp4DC3IOkpZtWIOKgBCnIedMiuRCp7I9sjh71z4t73ZbwZr94uo7sCCHe2jnYQI86cQMLCqisoGOqUBq0%2BZnwChLmA473cZO0PBmEudP9evz7XExJHQ1U9oB%2Ffg5cvlysZi76BDh79UCrZ%2FpWggjCWE9HON1rHAUp80EUHKBFBrh08uVwVM1a6aBrHPUtvBAgazBlpTMrK%2B2nQxinquHb63qmHYvE%2FUgnHz8xBZ8AKtAnBYYLf3nynK%2BQqq%2Fax5gS8SPwpgZKObaYp4LMCLLQIflA%2FzvFrl7aZD5SWkgQz4&X-Amz-Signature=709a4663c90d535d725d008c11b67ab2e886d5368dac7361c706bb93e5afabb1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
