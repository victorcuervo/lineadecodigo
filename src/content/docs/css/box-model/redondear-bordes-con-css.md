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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EUNA6A6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T073936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHtH0S0Ioyu1%2BlzcByd0GPZI6mqrS%2BHWri0oz8LWOx5RAiAVecJfPrvxi20pXVs03KBoEnnkmIZD6izvobAxkelMkCr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIM6%2Bq8Hd0R%2F7zfgs%2FXKtwDwTDJPUIhW1T%2BSY4M%2BG3dSeyfnmSnfQoxTPhTU%2BDDZEbx%2Bhz%2F9rG1jWCtL2YSNBbojHMhCUNLHb%2BecBKRn4CqlwsFeoLHP8bNh2qefBxSKRnNUN8u5n%2BLbtILH%2BReUcFfjnf0Xg4g%2BWHVRw00%2FwWeiqDU9yQ1IYjXcltwiLoEol9HHMC4PevCuMyqYyBgQ8zBjJ6MWWl%2B5P8iLefOi4lxTCxckL60qL8ztgWVu%2FB5kO1uoGwn3fP9rkZYadPGFV%2FehJ2%2BiDP7Stmx5VgiKjTmBMTtWEwclOERn0ObujIgsRH621aJrfKZeOOowsVVZltJZbDnx9QDeBHAqjGVHKWjtGY38INaSeKl4P6kNt87hK4qoaCa4hxjWqHOBqkFvJm%2B9%2FRWji%2FVCH38KbllcYnAZFB6NJ7OXRN%2FlLqn9zygqhdOBZ%2Fh6mG%2BWaMIkUIofBOyAkWELeFbUJJMP9upWgZ8GNXDmm3I3ED7X0Y1ZY7CQBzZfkwJJVqC7y4XTWf7DbKIFNVtfB%2FWU0idNAjtu9qWZuB3yr4G35a4IF7BCQ6HjpxFXNCf860QTQIqSzN69OdSkqW6jIePntCcSsiu%2Bsoetg7x5Za3vbQxK53nvv433NRGkfIQRIaA69WEq04woLiJygY6pgETzXxu7MNhKJaN0EtOl0T%2BWLOUjAzPX%2BTIUfFRl4%2FtWwYy5limk1FgcrYkBcxfdu5HmsKyYuV6J4V5mEtrCCixxohWAj3dDLfsqQZP356zsSM4u5WfpU0zjoKMUPFjyUojZdELHz2Pg21rK0HWa3D5gzr%2Fqju%2F7qEBnkjHF%2BTzm1FIwCGJ2nEd%2B%2F7pGwThFz3CrsKJlvuFiP3ZRqe9oSRGdEljQeI2&X-Amz-Signature=a6f834afffd94ebf73f2492a4e7ca5bc400679c8c53669f7f6876696d249c300&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EUNA6A6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T073936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHtH0S0Ioyu1%2BlzcByd0GPZI6mqrS%2BHWri0oz8LWOx5RAiAVecJfPrvxi20pXVs03KBoEnnkmIZD6izvobAxkelMkCr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIM6%2Bq8Hd0R%2F7zfgs%2FXKtwDwTDJPUIhW1T%2BSY4M%2BG3dSeyfnmSnfQoxTPhTU%2BDDZEbx%2Bhz%2F9rG1jWCtL2YSNBbojHMhCUNLHb%2BecBKRn4CqlwsFeoLHP8bNh2qefBxSKRnNUN8u5n%2BLbtILH%2BReUcFfjnf0Xg4g%2BWHVRw00%2FwWeiqDU9yQ1IYjXcltwiLoEol9HHMC4PevCuMyqYyBgQ8zBjJ6MWWl%2B5P8iLefOi4lxTCxckL60qL8ztgWVu%2FB5kO1uoGwn3fP9rkZYadPGFV%2FehJ2%2BiDP7Stmx5VgiKjTmBMTtWEwclOERn0ObujIgsRH621aJrfKZeOOowsVVZltJZbDnx9QDeBHAqjGVHKWjtGY38INaSeKl4P6kNt87hK4qoaCa4hxjWqHOBqkFvJm%2B9%2FRWji%2FVCH38KbllcYnAZFB6NJ7OXRN%2FlLqn9zygqhdOBZ%2Fh6mG%2BWaMIkUIofBOyAkWELeFbUJJMP9upWgZ8GNXDmm3I3ED7X0Y1ZY7CQBzZfkwJJVqC7y4XTWf7DbKIFNVtfB%2FWU0idNAjtu9qWZuB3yr4G35a4IF7BCQ6HjpxFXNCf860QTQIqSzN69OdSkqW6jIePntCcSsiu%2Bsoetg7x5Za3vbQxK53nvv433NRGkfIQRIaA69WEq04woLiJygY6pgETzXxu7MNhKJaN0EtOl0T%2BWLOUjAzPX%2BTIUfFRl4%2FtWwYy5limk1FgcrYkBcxfdu5HmsKyYuV6J4V5mEtrCCixxohWAj3dDLfsqQZP356zsSM4u5WfpU0zjoKMUPFjyUojZdELHz2Pg21rK0HWa3D5gzr%2Fqju%2F7qEBnkjHF%2BTzm1FIwCGJ2nEd%2B%2F7pGwThFz3CrsKJlvuFiP3ZRqe9oSRGdEljQeI2&X-Amz-Signature=bb315e7a5fa929c6871a1f26e895f6142725fc445213782d89d28c693e08f71c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
