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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3EHBF6Q%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T040959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGLMyrS9W7T%2BF5Q7an9d38l5EM3%2BCeIbIm9tIkLCaZLsAiEAoh0ByntPoWg9uw34RqI33%2BsaOH4w4n%2BueyXfTHK1TZkqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLZOjLfFPXmlE7r0qyrcA50VGJLuoI%2BwCKDUQ5AVkGxX1hE0lgxvwI%2FmLYXpuzlAGyS6AYcUMxMXGKTSUpqTZNnIL1DWC9ZLZSKO5UO%2B2%2F0UYmuab7LTT%2FBE%2Fvk6rUygwULgmbNM8EIJKY7Zbr6PXHs0Dm8q6XfOUiQzolpuictLrAMoTpd6jtrz1CB79YZ4JZI2GuyGnUMIdgqeAzUgm7IiA0jp4vMYQ%2BcvktsN9xta2CZo70DHkAfgnOmZ1vQG3zRz6BBAXejtQPDOpNpZLTApjm%2BzGW6F%2Fp%2B%2BYPBsunAlUnBhYA7W72AvjnhEIdIPdVnGPXFYd6%2FzFbPYByYiBUC5IRgR5sC2s9qNP%2BaVFfLSlEa95BFYBuJMVqQOnZDHdHTHxmonRdQ6fcshls3doLS%2Fsva9kVSUEhDLt766Nlyh6G%2BDMpmkF3YhZeLT1trrqhNMeLBpWnlL2dYAxMX9wRKWDHJhdeCuQvLlTDHAMaWrZGew%2F3qfZjvM9jIr4Uvkgk7XIks5LzJw9DDPP0J4TsPge0zANoZzdhDzshZ%2FaCKReu%2F03%2BjW6Oq6z3Tfr9ap%2BTPUokvRt%2BCI3G5M6KqXWpH5XMoel4ZqPE6eig4bdBVcIYgDnhxZDUsfVSKt2yiKEUonDxXEmkqaXdYEMPqT2ckGOqUB4HIQs7x1GosXw2z7AOzKvJgqPvKiRJFAnYT28PpvZePS%2BN8SKygsDhYmi5cUxcrdkQNYarOgZxWYMc1AnnwpKFG%2BJB7AsYf8%2BX4ndsUUnpPvKNKfGJo8bRVNMSOPDrDgFkRte9tRWvfDwWz6RxP%2B%2BZ7vy6vGPVcb%2B9YhnXdlUyw58Faf5Hz5TTAI0STO1Kt%2FXlYaCsAC6YZtl9eJDK6%2F0xW%2BAUWL&X-Amz-Signature=0b364f5303c020ae198a8f7773a8f9d11380a0f5e9427e828e9503f178c66fb8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3EHBF6Q%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T040959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGLMyrS9W7T%2BF5Q7an9d38l5EM3%2BCeIbIm9tIkLCaZLsAiEAoh0ByntPoWg9uw34RqI33%2BsaOH4w4n%2BueyXfTHK1TZkqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLZOjLfFPXmlE7r0qyrcA50VGJLuoI%2BwCKDUQ5AVkGxX1hE0lgxvwI%2FmLYXpuzlAGyS6AYcUMxMXGKTSUpqTZNnIL1DWC9ZLZSKO5UO%2B2%2F0UYmuab7LTT%2FBE%2Fvk6rUygwULgmbNM8EIJKY7Zbr6PXHs0Dm8q6XfOUiQzolpuictLrAMoTpd6jtrz1CB79YZ4JZI2GuyGnUMIdgqeAzUgm7IiA0jp4vMYQ%2BcvktsN9xta2CZo70DHkAfgnOmZ1vQG3zRz6BBAXejtQPDOpNpZLTApjm%2BzGW6F%2Fp%2B%2BYPBsunAlUnBhYA7W72AvjnhEIdIPdVnGPXFYd6%2FzFbPYByYiBUC5IRgR5sC2s9qNP%2BaVFfLSlEa95BFYBuJMVqQOnZDHdHTHxmonRdQ6fcshls3doLS%2Fsva9kVSUEhDLt766Nlyh6G%2BDMpmkF3YhZeLT1trrqhNMeLBpWnlL2dYAxMX9wRKWDHJhdeCuQvLlTDHAMaWrZGew%2F3qfZjvM9jIr4Uvkgk7XIks5LzJw9DDPP0J4TsPge0zANoZzdhDzshZ%2FaCKReu%2F03%2BjW6Oq6z3Tfr9ap%2BTPUokvRt%2BCI3G5M6KqXWpH5XMoel4ZqPE6eig4bdBVcIYgDnhxZDUsfVSKt2yiKEUonDxXEmkqaXdYEMPqT2ckGOqUB4HIQs7x1GosXw2z7AOzKvJgqPvKiRJFAnYT28PpvZePS%2BN8SKygsDhYmi5cUxcrdkQNYarOgZxWYMc1AnnwpKFG%2BJB7AsYf8%2BX4ndsUUnpPvKNKfGJo8bRVNMSOPDrDgFkRte9tRWvfDwWz6RxP%2B%2BZ7vy6vGPVcb%2B9YhnXdlUyw58Faf5Hz5TTAI0STO1Kt%2FXlYaCsAC6YZtl9eJDK6%2F0xW%2BAUWL&X-Amz-Signature=c4116f4279ec97fdd5f8850de080b1174ad74f6d31ea6ef8462494e6c49cc2d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
