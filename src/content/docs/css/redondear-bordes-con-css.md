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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGDMGF4C%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T232150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFhpYDXjWnA7V%2BumnM9Ea65AYhkIqYb3WE28tZ9DrjzgIhAOixe2lwuPEpEzdYyR8txl3YXgAyXu6Dj61jVoTKlsnlKv8DCGgQABoMNjM3NDIzMTgzODA1IgzrqGs%2BB9RSYrGzQ7Iq3AOkcPp%2FWqtm7wRzR678aW9HhXNLPt0NuYc%2FnZG%2BRVB4%2BGag%2BaYgrDELa5F5JoOwFh6lbeLZax2%2F2WtfWI72AS1AMgJdtJGcc%2Fmi1lySWnih9u3HVAQ%2Bdk9NADizMk7e4ci7gJccXQ8iZeQEqLvWf5B8eI9LUvKm5p0pwA9nfvPEX%2FnajibGInb5MvYHqpAu5RDKWdVIuz8KKX8newkUxz632%2B4mTE6w3r8wKbx9PKJyuMaQ9zk4RpzFHbwL1CB0eTwbFX5jD92MRyxe28iXkKbBj9PjOIkkEeubJIyG3N7AA4XOMTucC%2FSRODatuQeaQVcZk995teGivuccEYLI3kXPyFnAb2eFn0O2Dtq1xxWGYGDKYZMNq2a%2BysNiipUr%2BFH%2B3tEQi6QRpEd%2FAxshJmZ46US696jOSJN9hRInF5SCPLvkrkIvvAj6uH387eueOIPecB12B5qlhRD52pcFLwzAQzHX1vhI6afoUVIfRlUu6i81hxgupZS%2FfuLrtZFNjl%2B6ADkDHHqUz1UOJ0IFFgnbsatPHrhuIrzy4VI%2B7cHHU2J6%2B1N2iKMwvs61XIMItUpC7G0xWBkBJsduyzqt58bjcVpY4Kaeku9Unh1JQC4BmiqJlLLcjYOq8vYdVjDVxs3JBjqkATHlu%2BD%2F%2B%2F0sc6z50tY6LYnhnlJUvPNA%2FucjsNZATWr0Z%2B94BDc8VO2BuVC8LUoIf7hLNluwn3lkgXDbNP5owKLvhYj%2BzV%2F5R7YDUS1bW7yo%2B1W79R9DFKeRs1TeF8qGheI%2Fb7EkOQVPKcn9u6YjLDtjGOTZlh28kL1zKOHLz2raikwTLEl%2BmIVt5gCawr2jAqnqI5ukTXztBOf%2Bc5f07Ll83QDB&X-Amz-Signature=23d289f442a00658410cefeda5b8748248ebe66164c88cebd0b4f6d5e5b7163d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGDMGF4C%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T232150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFhpYDXjWnA7V%2BumnM9Ea65AYhkIqYb3WE28tZ9DrjzgIhAOixe2lwuPEpEzdYyR8txl3YXgAyXu6Dj61jVoTKlsnlKv8DCGgQABoMNjM3NDIzMTgzODA1IgzrqGs%2BB9RSYrGzQ7Iq3AOkcPp%2FWqtm7wRzR678aW9HhXNLPt0NuYc%2FnZG%2BRVB4%2BGag%2BaYgrDELa5F5JoOwFh6lbeLZax2%2F2WtfWI72AS1AMgJdtJGcc%2Fmi1lySWnih9u3HVAQ%2Bdk9NADizMk7e4ci7gJccXQ8iZeQEqLvWf5B8eI9LUvKm5p0pwA9nfvPEX%2FnajibGInb5MvYHqpAu5RDKWdVIuz8KKX8newkUxz632%2B4mTE6w3r8wKbx9PKJyuMaQ9zk4RpzFHbwL1CB0eTwbFX5jD92MRyxe28iXkKbBj9PjOIkkEeubJIyG3N7AA4XOMTucC%2FSRODatuQeaQVcZk995teGivuccEYLI3kXPyFnAb2eFn0O2Dtq1xxWGYGDKYZMNq2a%2BysNiipUr%2BFH%2B3tEQi6QRpEd%2FAxshJmZ46US696jOSJN9hRInF5SCPLvkrkIvvAj6uH387eueOIPecB12B5qlhRD52pcFLwzAQzHX1vhI6afoUVIfRlUu6i81hxgupZS%2FfuLrtZFNjl%2B6ADkDHHqUz1UOJ0IFFgnbsatPHrhuIrzy4VI%2B7cHHU2J6%2B1N2iKMwvs61XIMItUpC7G0xWBkBJsduyzqt58bjcVpY4Kaeku9Unh1JQC4BmiqJlLLcjYOq8vYdVjDVxs3JBjqkATHlu%2BD%2F%2B%2F0sc6z50tY6LYnhnlJUvPNA%2FucjsNZATWr0Z%2B94BDc8VO2BuVC8LUoIf7hLNluwn3lkgXDbNP5owKLvhYj%2BzV%2F5R7YDUS1bW7yo%2B1W79R9DFKeRs1TeF8qGheI%2Fb7EkOQVPKcn9u6YjLDtjGOTZlh28kL1zKOHLz2raikwTLEl%2BmIVt5gCawr2jAqnqI5ukTXztBOf%2Bc5f07Ll83QDB&X-Amz-Signature=02a28147834c6b088833b93b0cd513d81c8e965e9c8c32971d3a067561b64f5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
