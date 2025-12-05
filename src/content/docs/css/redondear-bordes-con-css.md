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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642OTWIVP%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T191005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICs9mnxPjv6TYpMp5JIz7JHSeerZO%2BZmQP%2BVBSJbGGl7AiEA3SMfLktOYqsgukBlqShZYU0spoBHk6Gn3nbeslPdafUq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDEjlvc3Fc4qwQJAjmyrcA8%2BgQ%2Fa7lkwZMLYrFYBb74n4qeglp6Mqi5ELaCl1x0EVFgTmQhZ8bBjCXK4F8eqlonjCU6%2FLAhv91vKZANEYBhpe4eYyrRE2fRxWWOYX5DgDpVPJreA0qJ02Bk8p78UeApAMLrMCMqsul0kgRFdlAd%2BUXLPkr9pk%2BbaSL9v7q7ASkujvCyDl%2FohD%2FFZ7dt1yQzGXU08MQPkeyc5%2BIi5N8xBIvZHNMILXjrb6cwpyOAo1XjkvBbKXeMa7dPXZ6a3AuUFkofCbDQuLSEFiN73%2B6Rw8H5pj6TasojuqDtrPTPXgg9QfqK91%2FHRSnvr1IXRnHPNJU3CrHBpJMKYbPztTm1KZyvqOhmk0EdS84EoDiwxOOzKjxXYeLwXFvl1bknFjZZsWl43FLpGCXVsMGYgWDcJpd1t5PIXr%2Fe2TDJ8JKc0rdwvBVY6RTxjPorcsFDpN5kgMQi1GqysQsVnOONBn8t4aIAfCdIWVB9bU96kof0lHBIDM%2B9GO6vFLMmT0QtI%2FYcer7S6%2FMuV2hbtdTqgH%2FxSWrY17%2BNXCdg8J71Kg4ODybCj3WTlykbIHJ66C4hbiBDSLwrEvxwPggO8wyRDfHi7eXcKeSgb%2BiscxPf%2BjsCU%2BtOXE9x6QPFWbkVeCMI%2Fvy8kGOqUBH8ZYgJhpopvXgsWB7aCRe22USgt7zDx07M21XPR2uxiV68Nu9kqWANWupl0BqWcwIIUX%2Btkh5XtLpYXhp%2BK8aUNtO2ZILCpB3VLZUZK67y9Ce%2BAHFLoVmOVqTnS8xaQOh4MOB4FC4oXyxdDj9SgcmSR4A12tECOXJmEzDMOWPJ6ew9PmeK1EQy1DVVu5UAmKHeAVArxad96vU8YkeGTM6XDvvpkP&X-Amz-Signature=b6980e3707545b9008e11e4a703baeeffd365977216e86960a4924f83d1b950c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642OTWIVP%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T191005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICs9mnxPjv6TYpMp5JIz7JHSeerZO%2BZmQP%2BVBSJbGGl7AiEA3SMfLktOYqsgukBlqShZYU0spoBHk6Gn3nbeslPdafUq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDEjlvc3Fc4qwQJAjmyrcA8%2BgQ%2Fa7lkwZMLYrFYBb74n4qeglp6Mqi5ELaCl1x0EVFgTmQhZ8bBjCXK4F8eqlonjCU6%2FLAhv91vKZANEYBhpe4eYyrRE2fRxWWOYX5DgDpVPJreA0qJ02Bk8p78UeApAMLrMCMqsul0kgRFdlAd%2BUXLPkr9pk%2BbaSL9v7q7ASkujvCyDl%2FohD%2FFZ7dt1yQzGXU08MQPkeyc5%2BIi5N8xBIvZHNMILXjrb6cwpyOAo1XjkvBbKXeMa7dPXZ6a3AuUFkofCbDQuLSEFiN73%2B6Rw8H5pj6TasojuqDtrPTPXgg9QfqK91%2FHRSnvr1IXRnHPNJU3CrHBpJMKYbPztTm1KZyvqOhmk0EdS84EoDiwxOOzKjxXYeLwXFvl1bknFjZZsWl43FLpGCXVsMGYgWDcJpd1t5PIXr%2Fe2TDJ8JKc0rdwvBVY6RTxjPorcsFDpN5kgMQi1GqysQsVnOONBn8t4aIAfCdIWVB9bU96kof0lHBIDM%2B9GO6vFLMmT0QtI%2FYcer7S6%2FMuV2hbtdTqgH%2FxSWrY17%2BNXCdg8J71Kg4ODybCj3WTlykbIHJ66C4hbiBDSLwrEvxwPggO8wyRDfHi7eXcKeSgb%2BiscxPf%2BjsCU%2BtOXE9x6QPFWbkVeCMI%2Fvy8kGOqUBH8ZYgJhpopvXgsWB7aCRe22USgt7zDx07M21XPR2uxiV68Nu9kqWANWupl0BqWcwIIUX%2Btkh5XtLpYXhp%2BK8aUNtO2ZILCpB3VLZUZK67y9Ce%2BAHFLoVmOVqTnS8xaQOh4MOB4FC4oXyxdDj9SgcmSR4A12tECOXJmEzDMOWPJ6ew9PmeK1EQy1DVVu5UAmKHeAVArxad96vU8YkeGTM6XDvvpkP&X-Amz-Signature=b5b9670ba2b2424c8849808317bc7413e56b887a004fbfb5f31be1805a3921eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
