---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMKT7VHD%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T001557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQCVc8AdicsgFF9c1c2Mh2q2eeQfQsedSrQqd0m8KjhAQwIhAOic5epHd9dNjA72%2BNM22meeGLU%2Be3GXtUDzXXrUYctyKv8DCDkQABoMNjM3NDIzMTgzODA1Igyxq4Q6BWUs5fngg50q3AMKy7K9SGsPTFlSbJD9qq6ZjVhyU28YAP1yJb3ky0Oe2h2arlpN7H%2B6yyK%2FDvPY548trf15prlBx%2FLnsDWLJ3Ed1%2FQs60%2FCdE49NmoP48qJitE1Dvnq9YvyHN5nMUEeMZmMjjgKLuhNW2BW2GnV%2BPNIz7c1GozqTMN%2FIh93VjFAsopEnAaeE27h%2FF8hUxiIz10VN1snfJGyY1IpqADvn3RIPDbUGgSa7O9gzBWdupnbmCXdWQAq0qE%2B7eZJPZfzP8sALEIa0qASrx4yBt78TqQq3IkS9zecMQVz15EWSi8eyzuGouR3y82Gijm7gK24iowvkUGfysMnfi5NgeDjAvLETVWV5kLVVLa8lQ4Fa53GzCE3Mb%2BK81WoCsa1c8f9UPXqJ2iChzn3QPe%2BXXOg%2FKti5PPatxIf5rNFPnG9MyHcaisK2SLpq%2BWOdnNpn1kBURXbGknLhDenB%2F4LafETqxJ2aDqny1oLnYA86HpRrj5Wi5EXu3cEmdiSAZGCxGcFyCIfsydWQ0%2BY3M5Vm9GBDz6okzYxHhph88rqQ3AhZ1j45oYe3WKjOX71BwSupB8Uox0sGEj8KpfoIEH5ltQhGdip2hw8Dc0eBroYjF9vRXA7YDLtqswq7Q%2FmjiiYmzDPlcPJBjqkAS1JhsZK8aZb0xVh0E1OfQ5NbVsOBlVQ1t0Ga2gSuXLAO3DVPICZbd5CaJ7QW0lhC1yEqx9e2PTdwSVO%2B7GkWOBuyW0mrcb5Ye9%2BwfvjCJ%2BwVae9fFlV64C4mArEuNUwXX6nmjMpvZOzpCs3%2FiWtktGmsNyfMg9QcTsRkJpzTHsjhWBfvFX%2B1b4GBpIOAPFqjhN6EBjfy7tNxOacI%2B%2BzU%2BdTtbcq&X-Amz-Signature=a6c1d51cabc8c870af63c64b6d79b7c8bac15dee5b03e08290b25694f7c405bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMKT7VHD%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T001557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQCVc8AdicsgFF9c1c2Mh2q2eeQfQsedSrQqd0m8KjhAQwIhAOic5epHd9dNjA72%2BNM22meeGLU%2Be3GXtUDzXXrUYctyKv8DCDkQABoMNjM3NDIzMTgzODA1Igyxq4Q6BWUs5fngg50q3AMKy7K9SGsPTFlSbJD9qq6ZjVhyU28YAP1yJb3ky0Oe2h2arlpN7H%2B6yyK%2FDvPY548trf15prlBx%2FLnsDWLJ3Ed1%2FQs60%2FCdE49NmoP48qJitE1Dvnq9YvyHN5nMUEeMZmMjjgKLuhNW2BW2GnV%2BPNIz7c1GozqTMN%2FIh93VjFAsopEnAaeE27h%2FF8hUxiIz10VN1snfJGyY1IpqADvn3RIPDbUGgSa7O9gzBWdupnbmCXdWQAq0qE%2B7eZJPZfzP8sALEIa0qASrx4yBt78TqQq3IkS9zecMQVz15EWSi8eyzuGouR3y82Gijm7gK24iowvkUGfysMnfi5NgeDjAvLETVWV5kLVVLa8lQ4Fa53GzCE3Mb%2BK81WoCsa1c8f9UPXqJ2iChzn3QPe%2BXXOg%2FKti5PPatxIf5rNFPnG9MyHcaisK2SLpq%2BWOdnNpn1kBURXbGknLhDenB%2F4LafETqxJ2aDqny1oLnYA86HpRrj5Wi5EXu3cEmdiSAZGCxGcFyCIfsydWQ0%2BY3M5Vm9GBDz6okzYxHhph88rqQ3AhZ1j45oYe3WKjOX71BwSupB8Uox0sGEj8KpfoIEH5ltQhGdip2hw8Dc0eBroYjF9vRXA7YDLtqswq7Q%2FmjiiYmzDPlcPJBjqkAS1JhsZK8aZb0xVh0E1OfQ5NbVsOBlVQ1t0Ga2gSuXLAO3DVPICZbd5CaJ7QW0lhC1yEqx9e2PTdwSVO%2B7GkWOBuyW0mrcb5Ye9%2BwfvjCJ%2BwVae9fFlV64C4mArEuNUwXX6nmjMpvZOzpCs3%2FiWtktGmsNyfMg9QcTsRkJpzTHsjhWBfvFX%2B1b4GBpIOAPFqjhN6EBjfy7tNxOacI%2B%2BzU%2BdTtbcq&X-Amz-Signature=e29d2b936af2943c21f67cf5a292d42ce0477848285d7378becf62562d9072bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
