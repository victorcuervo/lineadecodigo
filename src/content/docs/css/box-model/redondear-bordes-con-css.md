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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWRAFMJS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T141417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFcM9qiWsry2K%2FUASx%2BzK5QqokMqKBWynSyiv%2B6IK7wgAiEAz3FZICsFaZPX6ctvwSLqs0pNJOZcRvI1mtMI2uEYSr8q%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDA6eLL3MvhCyeYiEuSrcA6GZNUxM%2Bwi5mUaV8EyoGWego3FD%2BxLX6DAlsu%2BTgn%2F5Fr46KL3XzGgZACldZ6ZYCohVS%2BeuOUxm2fgT6ETPvFd0tqjfY030A%2BGtuh6j48vvA2GHUYEPAeDf7GAd7ze31WN%2FBeE2QBfyl%2Fyms9GeZs5Symb6WUxEo93XT7Otcg6ebsb5jTkxV3b1Wj67roOxSp7q4IlZ9KPAnD4Z%2B50UYJuhi2tre3iY%2B50R84cjNTAM2VfF5CrRmDF6ZlDokANdn5oWvvod0CB5Df6Ovm5tjZ8dRa4GlzdTNtMcpuxmzRIXvCf9tLEmzaF8AaX7BuZQkqsbe5ajLoOC8042IQPqHXr0VDMUO1YYduxGvuPs8wHlmaYAwCO95AGtSABAsuJKgxwCOYNrLsqjxfRNL5wSMhqE3POBomsjdWM%2BIm%2FIGV3y5%2Fm0d1fxZHl7obhfMT6jWGj9ODBS4UgHmhuKFZrEyu1GeuSSVM9xhsOXM%2FdPdR4mzXC24FqQ40c8adHAjFJ%2B7hNwTAvUCyLWiKFRnK576d3mWbvS2xugz7PFRq%2B%2BQfBnn0UDrEFXiXWbMVBfsN9bzTvoEnKB94aqGYlmluMqSso7d5JQVAuC4c%2BmCCWP52nytPPQAl0V1dVBjkF5MJbhisoGOqUBhXPga7V%2F6rnm1yeY3Mv3%2FEjKIqEhukKtz0oCr6VdBZ1sFXvPxsMM1XFJy0C9f%2FuFRFiROQXasNjxRWmS6XgdlUevtnkxocxOdBUxdiKUYjybyCJivVZhXrtoCtp0oAMQAF26AS%2F1TwS7EjF4FL4wUZ6c%2F2ZbzNKyl7%2FJRP%2FgCATzb%2BWETLW%2FmO6jBaXHVccIf0GRs7LrA133SQWWKD5qKjsLSy7D&X-Amz-Signature=1e735ed84f2c25f4999d50cebcf56e0308dfb6432e1e714fe1505b871c05cbf5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWRAFMJS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T141417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFcM9qiWsry2K%2FUASx%2BzK5QqokMqKBWynSyiv%2B6IK7wgAiEAz3FZICsFaZPX6ctvwSLqs0pNJOZcRvI1mtMI2uEYSr8q%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDA6eLL3MvhCyeYiEuSrcA6GZNUxM%2Bwi5mUaV8EyoGWego3FD%2BxLX6DAlsu%2BTgn%2F5Fr46KL3XzGgZACldZ6ZYCohVS%2BeuOUxm2fgT6ETPvFd0tqjfY030A%2BGtuh6j48vvA2GHUYEPAeDf7GAd7ze31WN%2FBeE2QBfyl%2Fyms9GeZs5Symb6WUxEo93XT7Otcg6ebsb5jTkxV3b1Wj67roOxSp7q4IlZ9KPAnD4Z%2B50UYJuhi2tre3iY%2B50R84cjNTAM2VfF5CrRmDF6ZlDokANdn5oWvvod0CB5Df6Ovm5tjZ8dRa4GlzdTNtMcpuxmzRIXvCf9tLEmzaF8AaX7BuZQkqsbe5ajLoOC8042IQPqHXr0VDMUO1YYduxGvuPs8wHlmaYAwCO95AGtSABAsuJKgxwCOYNrLsqjxfRNL5wSMhqE3POBomsjdWM%2BIm%2FIGV3y5%2Fm0d1fxZHl7obhfMT6jWGj9ODBS4UgHmhuKFZrEyu1GeuSSVM9xhsOXM%2FdPdR4mzXC24FqQ40c8adHAjFJ%2B7hNwTAvUCyLWiKFRnK576d3mWbvS2xugz7PFRq%2B%2BQfBnn0UDrEFXiXWbMVBfsN9bzTvoEnKB94aqGYlmluMqSso7d5JQVAuC4c%2BmCCWP52nytPPQAl0V1dVBjkF5MJbhisoGOqUBhXPga7V%2F6rnm1yeY3Mv3%2FEjKIqEhukKtz0oCr6VdBZ1sFXvPxsMM1XFJy0C9f%2FuFRFiROQXasNjxRWmS6XgdlUevtnkxocxOdBUxdiKUYjybyCJivVZhXrtoCtp0oAMQAF26AS%2F1TwS7EjF4FL4wUZ6c%2F2ZbzNKyl7%2FJRP%2FgCATzb%2BWETLW%2FmO6jBaXHVccIf0GRs7LrA133SQWWKD5qKjsLSy7D&X-Amz-Signature=c9a967b6596e5697a0c628b52c5aedd47a383d9f662fc1c7725a1bd61f45ca96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
