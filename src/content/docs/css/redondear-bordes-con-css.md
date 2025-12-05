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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FUKQ6BI%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T112218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDNfQB03wQ32mdUsSwNmy2VaWg39FPuBibYlRJej2Lq5QIgGtnzRQAb2nTeJJOr%2Fhb4etJH5ULeAOOWSDT3r0zEBU8q%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDJ0qZ%2BOlmUQLopaHjSrcAxV5Ak4MLWOgI7tXAEK0QTgsUI3ciZU1ABkRMRXuhshoagq5QCM5r3ViFd7dbVpfp85WrPe6gvQftyJLob1yKyZmDY9C3tNIF1rx52LD0GB7ACyIYK%2FX5%2BS5m2IDuSHq7DZSyQl%2Be2dMgdC6booheJTqTaO8zL17WnceMkNEkliAHD4rPM2JPChUGE15gke7%2FluY3ZbzTglamLi85OzMN1as7ydWh8heDRKJuD1wcbSHkb95opeydgCnENHI6j2PROlkj4G3X0m7uaFcrb9K%2BI9WwYDmTLW4K2S%2BOND5tW%2BSl8L%2BMZdBG9fMHl%2FbZe5NngfEChrFGhsHPhdHucPD%2BnB8i1qu8JF79OFujHuGjMIQft5GxnDO6uGWExw6vxgHl7npJu7THeHTu4N6DEbR%2BPHojRc%2F1QKwLc%2BTsgXuxt9%2F2g%2BhHgAmack2ffRUhf8wMpSC%2BUXQOFbOOu3KLySgA1njDf1ERDCm6nxGYBykvGZ0rqdzlL9G0NREPrfFaAEIQuajk34TeU46%2BE8%2Bc72QDlyHZ1IQNTwwnb4sFm%2F19yH95AUerHM3DUo55EGBuJLjpkmLXLmZVJ5d%2Ft7mzA0YHsYawtWHMVMrz4e86B0LJ5uE%2BCARQJQxx4xZiN0EMKfeyskGOqUB%2FCZe5CJp9U%2F%2BZnBzgecIiyrXbeA6IFbr6w6LwTMMQDCgmFn%2BzqKg2t7eaVITa0SCz0WeCC3isYijzWtNwkk430itGawRkhIKq8NysVV9Bm3tE26fWMH3DHUOCUelUfBuXEzbXTtnawsd55piI%2Fn7pu8epAAbMxSbUj1wB%2Bp6taOqputk6VaMU4kHJIMD10EjPQpLw4nyjF8L2FqFm0b58QUMCRM5&X-Amz-Signature=4b905f2a041e83ac1ae402bb4a09018bd7f05d6b29a78408d0e8f5597a309a58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FUKQ6BI%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T112218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDNfQB03wQ32mdUsSwNmy2VaWg39FPuBibYlRJej2Lq5QIgGtnzRQAb2nTeJJOr%2Fhb4etJH5ULeAOOWSDT3r0zEBU8q%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDJ0qZ%2BOlmUQLopaHjSrcAxV5Ak4MLWOgI7tXAEK0QTgsUI3ciZU1ABkRMRXuhshoagq5QCM5r3ViFd7dbVpfp85WrPe6gvQftyJLob1yKyZmDY9C3tNIF1rx52LD0GB7ACyIYK%2FX5%2BS5m2IDuSHq7DZSyQl%2Be2dMgdC6booheJTqTaO8zL17WnceMkNEkliAHD4rPM2JPChUGE15gke7%2FluY3ZbzTglamLi85OzMN1as7ydWh8heDRKJuD1wcbSHkb95opeydgCnENHI6j2PROlkj4G3X0m7uaFcrb9K%2BI9WwYDmTLW4K2S%2BOND5tW%2BSl8L%2BMZdBG9fMHl%2FbZe5NngfEChrFGhsHPhdHucPD%2BnB8i1qu8JF79OFujHuGjMIQft5GxnDO6uGWExw6vxgHl7npJu7THeHTu4N6DEbR%2BPHojRc%2F1QKwLc%2BTsgXuxt9%2F2g%2BhHgAmack2ffRUhf8wMpSC%2BUXQOFbOOu3KLySgA1njDf1ERDCm6nxGYBykvGZ0rqdzlL9G0NREPrfFaAEIQuajk34TeU46%2BE8%2Bc72QDlyHZ1IQNTwwnb4sFm%2F19yH95AUerHM3DUo55EGBuJLjpkmLXLmZVJ5d%2Ft7mzA0YHsYawtWHMVMrz4e86B0LJ5uE%2BCARQJQxx4xZiN0EMKfeyskGOqUB%2FCZe5CJp9U%2F%2BZnBzgecIiyrXbeA6IFbr6w6LwTMMQDCgmFn%2BzqKg2t7eaVITa0SCz0WeCC3isYijzWtNwkk430itGawRkhIKq8NysVV9Bm3tE26fWMH3DHUOCUelUfBuXEzbXTtnawsd55piI%2Fn7pu8epAAbMxSbUj1wB%2Bp6taOqputk6VaMU4kHJIMD10EjPQpLw4nyjF8L2FqFm0b58QUMCRM5&X-Amz-Signature=2e45615c747c96867fe6127e03829cf2fdf755a4b20c5c11cee0fc1be5943844&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
