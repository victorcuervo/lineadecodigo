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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIWBB34L%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T013715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSHRnZgFHkVWpFMyKJKX0I9KcilZmATorHPYf3YsR0ogIgNeUkvBETEOkqTMC%2FNUZbIsNjYCJ7O6%2BR4vxO3T8IIZUq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDHGELmFmJwcxYqYD7SrcA3NjbQreA04twWeKW3Xf%2FGh4hFmI8LYcyhe9sgnzRt9h8X1qyQk21tD2nxA7bf923kH%2FQTfjvQEyGy5Y6ZDDpmtzHXgZ7EHcHu0vzfpx5wXetA21EW7C1Xxw45Y4s6DFtAXPZ9w4LYspD9%2F6Bw5EAKT1W5ptXV0A%2BpCAawZQKQwY1HroADcke%2BWdcv7efQ2ZhtgohaDpeozVrZW%2Flz2cFDCXg2pFdfLQfTPGWZkUV%2FJ2KN2MHbMAEdSMk0rHdRjrQlQHPO9PltMA6%2Fw4zxXe%2B6LIMcJ%2BvXx7%2F%2BTmTHHaXIoQ1NzSPiHzAUgXa5VeAxoQUHqGIUx2egkx9tJHFjLY3tTQ0coXR2jjHSsrEne1e%2FnE1pDpeG64MKymOK3lam59%2FKGGjbwl%2B%2FNQgP%2BqsJBiWl5ZOcd9XvTCu29k0PCbqFKA%2F247D3NapNQPbVdHTZbhljpDcytfl3uRN%2BKJ6B0mGcNujvjaKbFf98Hi9cZYx9iNmmd1SSZVkXpr8wIinW1qJRymB1TeTIuC5%2F6G10DTnJdyEcLos8L0bbUHnmPC6e2MAvhGCv5qtJ85R6qZ0CD4rJwVUHAKcj%2FsfYxp5AA%2FKZJCfs559O1IGSt5JvG1xwkbeIg3GLfsTBFFL4dMMKqMyMkGOqUB8gWyBPv0jNWYm0FVhQ7dqj5ubMJWsQlHArrUePpIP7cXhUH5jkgo%2FxJJK3znnIIeQ6JkKwnG%2FRifDJbnX3nIsRfsF3B%2BGXRVHrAridSx7gKQ0Rwl2ogQP%2FbDUw0CReBaQ7Lglh4%2F7J5Zc8fqIxLn65sJNz%2B4owKYrfGs2U6Tgvjbavwc756LMdrb5DL%2BgB%2FGvRjCFib1yWBqaEhP94FhgFzkQt7Y&X-Amz-Signature=72d0d61aa9a00ce16b31a39732141aa587fe4221137ba66542fd6d7cfc3f5503&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIWBB34L%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T013715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSHRnZgFHkVWpFMyKJKX0I9KcilZmATorHPYf3YsR0ogIgNeUkvBETEOkqTMC%2FNUZbIsNjYCJ7O6%2BR4vxO3T8IIZUq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDHGELmFmJwcxYqYD7SrcA3NjbQreA04twWeKW3Xf%2FGh4hFmI8LYcyhe9sgnzRt9h8X1qyQk21tD2nxA7bf923kH%2FQTfjvQEyGy5Y6ZDDpmtzHXgZ7EHcHu0vzfpx5wXetA21EW7C1Xxw45Y4s6DFtAXPZ9w4LYspD9%2F6Bw5EAKT1W5ptXV0A%2BpCAawZQKQwY1HroADcke%2BWdcv7efQ2ZhtgohaDpeozVrZW%2Flz2cFDCXg2pFdfLQfTPGWZkUV%2FJ2KN2MHbMAEdSMk0rHdRjrQlQHPO9PltMA6%2Fw4zxXe%2B6LIMcJ%2BvXx7%2F%2BTmTHHaXIoQ1NzSPiHzAUgXa5VeAxoQUHqGIUx2egkx9tJHFjLY3tTQ0coXR2jjHSsrEne1e%2FnE1pDpeG64MKymOK3lam59%2FKGGjbwl%2B%2FNQgP%2BqsJBiWl5ZOcd9XvTCu29k0PCbqFKA%2F247D3NapNQPbVdHTZbhljpDcytfl3uRN%2BKJ6B0mGcNujvjaKbFf98Hi9cZYx9iNmmd1SSZVkXpr8wIinW1qJRymB1TeTIuC5%2F6G10DTnJdyEcLos8L0bbUHnmPC6e2MAvhGCv5qtJ85R6qZ0CD4rJwVUHAKcj%2FsfYxp5AA%2FKZJCfs559O1IGSt5JvG1xwkbeIg3GLfsTBFFL4dMMKqMyMkGOqUB8gWyBPv0jNWYm0FVhQ7dqj5ubMJWsQlHArrUePpIP7cXhUH5jkgo%2FxJJK3znnIIeQ6JkKwnG%2FRifDJbnX3nIsRfsF3B%2BGXRVHrAridSx7gKQ0Rwl2ogQP%2FbDUw0CReBaQ7Lglh4%2F7J5Zc8fqIxLn65sJNz%2B4owKYrfGs2U6Tgvjbavwc756LMdrb5DL%2BgB%2FGvRjCFib1yWBqaEhP94FhgFzkQt7Y&X-Amz-Signature=ad1a6476f5135d11edc6fe976af08794b8eb947ea318b8614da7e17782733017&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
