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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GRIMUF3%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T065901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDqbBMVQFTbtft5%2FrArHwo%2Fk9kV84dAY92kELDGDE1%2FGAiBgtqS6cW5k77Ntv7n583P69qMTo5B7oHoNHesll3AY5yqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMe6D5QyB8pWG0qwzGKtwDeYlAL9glKOqAInLXL8VSNV8jQhCQiT0BK6nB0JJ20nb%2BTjt4O3Ck8Z%2BcOuTyikTv7rZzBv8HpsnaWofNNKyeGi7RPBn%2BuOO%2FO6TsfzjRU7g69YML6B8OviE94uLrmosHZYtLYx4swZ3QaMQg8LLTqzX0flAR6R4gnAaCramj%2FZRv4rfnxsJCyTAC9DIg0C4%2FdeCULu7vvD8Hrquy3hRh1EYj36MZ8OhDWLuLB1vXk0xWnBR%2BiS3rkascfWK3IwdTP6kKg72Nb9SlNrUMNk3mSo9J4fVTIxoRok3NkuWMgLKshqDKFNU9Ey6RKoEzkcqcdtvPW90cr2S%2FNv7h01fz1F0i2yhrDtVZSemrYhbqCPtlMvNboTcbxSB7yMZAGxl2xJEqWu3PWqUm%2BegB0KBugtS8pLSslZVsr3lNm1gdXUunHUQ0Kyytlh3QBa5zTlOmZ1b2KVMP9pnf3%2Bzn3X0hX2RDa9KhyvtFKzs%2F4j8mFJq%2Bw4y4NI8lHr05ZBKXJbeZQgynD%2FlnZoBpb%2FtLBzDFx4KCRZJYgPloBh0maZj1RXACfCJC6Sn8pm2GGzf6S58oAs6W47aeAv7Qv6vHpgzcVUaL6Tbw1ic1sqFkfZf034TVcfJWnWuvvFBBbTwwoKDUyQY6pgGKRS6%2BT269DGy%2FwY7cvBUgM0C1eAZUDwBd%2F8xTY8VAoOBc5%2BE4%2B2%2Fe08Sikv8FI8k3XQUsYFexwsyfCCtfEKAPGZw7qAsIzJpV9u27i3f7vONqOkn8aIOj1ncKZUMxQR6DwmQsEUUY3cfTcCxfZkyHHVTXaMur3b13EwXYyfTX5WtuoGrVdtEjJjRA%2F9TM2%2FTn9bj2ADmPLDBXKELVc0%2FJu%2F7wN7Z4&X-Amz-Signature=2474d4c92fa08fca8dd6400993f8566c8e52cb6071a1364ea37e029469b3bdf2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GRIMUF3%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T065901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDqbBMVQFTbtft5%2FrArHwo%2Fk9kV84dAY92kELDGDE1%2FGAiBgtqS6cW5k77Ntv7n583P69qMTo5B7oHoNHesll3AY5yqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMe6D5QyB8pWG0qwzGKtwDeYlAL9glKOqAInLXL8VSNV8jQhCQiT0BK6nB0JJ20nb%2BTjt4O3Ck8Z%2BcOuTyikTv7rZzBv8HpsnaWofNNKyeGi7RPBn%2BuOO%2FO6TsfzjRU7g69YML6B8OviE94uLrmosHZYtLYx4swZ3QaMQg8LLTqzX0flAR6R4gnAaCramj%2FZRv4rfnxsJCyTAC9DIg0C4%2FdeCULu7vvD8Hrquy3hRh1EYj36MZ8OhDWLuLB1vXk0xWnBR%2BiS3rkascfWK3IwdTP6kKg72Nb9SlNrUMNk3mSo9J4fVTIxoRok3NkuWMgLKshqDKFNU9Ey6RKoEzkcqcdtvPW90cr2S%2FNv7h01fz1F0i2yhrDtVZSemrYhbqCPtlMvNboTcbxSB7yMZAGxl2xJEqWu3PWqUm%2BegB0KBugtS8pLSslZVsr3lNm1gdXUunHUQ0Kyytlh3QBa5zTlOmZ1b2KVMP9pnf3%2Bzn3X0hX2RDa9KhyvtFKzs%2F4j8mFJq%2Bw4y4NI8lHr05ZBKXJbeZQgynD%2FlnZoBpb%2FtLBzDFx4KCRZJYgPloBh0maZj1RXACfCJC6Sn8pm2GGzf6S58oAs6W47aeAv7Qv6vHpgzcVUaL6Tbw1ic1sqFkfZf034TVcfJWnWuvvFBBbTwwoKDUyQY6pgGKRS6%2BT269DGy%2FwY7cvBUgM0C1eAZUDwBd%2F8xTY8VAoOBc5%2BE4%2B2%2Fe08Sikv8FI8k3XQUsYFexwsyfCCtfEKAPGZw7qAsIzJpV9u27i3f7vONqOkn8aIOj1ncKZUMxQR6DwmQsEUUY3cfTcCxfZkyHHVTXaMur3b13EwXYyfTX5WtuoGrVdtEjJjRA%2F9TM2%2FTn9bj2ADmPLDBXKELVc0%2FJu%2F7wN7Z4&X-Amz-Signature=a0454fa78c23655f21e55ae6a70faa7e29168f1b219b54977ce5afdeb3e457f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
