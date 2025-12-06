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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JMCCVJN%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T100201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbfZg7f6EX2AM%2FTKtyFXSV9T0rYSKAksBJzKu5vi05aQIhAMt8AkKM8lBqbXBJ6LVwQim1HE4%2FY2hZRBz0HThJS7zfKv8DCHMQABoMNjM3NDIzMTgzODA1IgwStLooZrvJR3F7Zpwq3APlyBIqKNqnD1acDV3PMwfGO2PRBVV1nZsqsp0si8nl4ruu3OUHRzfo44UWnsy3f4ebqPkTr3XuDqbQtcWlazDf7l7clV1WCp2Mbp0TbyvB%2BnbP84U32IkrJXfmwhbPcwn%2BgWMYVfjGt9HJL4OtEzWJ4VUxmT1eKTf0kZzBUy8SrU9waUpIXRd29quhciMzVDDAXW7QGzMza96sOb1T9wG6Gb88122zUbB4BFitFop%2FuNLgKL%2Fe8pDeLc5syi9rY6xdns1MbdGLFT6EDkbl2nqu8Y8%2BzLJSS3jK2ByuLfeGcb0gNumYf5BPrh9QuB59IHq8a8OLk215RFMUBavlS6%2BdgjV5%2F7a1IWlGrU8HXwKV8pJdGmqOQwJQxEH6OFsEK3UFYWIW5U6DM8BS3%2FmwMaEa3necF7jjiZFxNzePJKh4oX93dtdmoBvFFOx2c8ISo1OJt2ZyALXiFUM%2F8CbVkKI9t%2FhGqE5GrCROMQuJTEZu77WrgRTHJT0541JbA0O5hnvNxlF2TpVHN1XYASMwulTUfPUWiVfJnfUQlWbT8xPF0kEVZFwMhRTA2VTn4scyvN8avcQoL4XfqosfrZ7R6zBmNrwXSs%2BeuAaYAzrzLFj7x8saJTOMkaxQDtGYcDDU68%2FJBjqkAT9SHPXfaJpbvOie6u8B%2BZEPSpElyQlXmibZbU2hSuApsSLeM1Zpc8APOsBULO77L9%2FNiZzW7MC8w%2Bh5nPL4ICPqzo9YdCzPDu8HUOen2jyhoSS8UEhTQNfkk9BiwiAwB%2Ft1aAfq5J3x4YmZUluvnqrsUO5s1Tfj4z2I6H%2BKGdj3oqf%2BEcGXpI4IGe5bfvtj7KW9TteoSErAeY6FLtKBK23hZt7s&X-Amz-Signature=1fae14c32a25456395e41177777a6f1231ba8c1ddca561c2b98e2ce8403ed699&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JMCCVJN%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T100201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbfZg7f6EX2AM%2FTKtyFXSV9T0rYSKAksBJzKu5vi05aQIhAMt8AkKM8lBqbXBJ6LVwQim1HE4%2FY2hZRBz0HThJS7zfKv8DCHMQABoMNjM3NDIzMTgzODA1IgwStLooZrvJR3F7Zpwq3APlyBIqKNqnD1acDV3PMwfGO2PRBVV1nZsqsp0si8nl4ruu3OUHRzfo44UWnsy3f4ebqPkTr3XuDqbQtcWlazDf7l7clV1WCp2Mbp0TbyvB%2BnbP84U32IkrJXfmwhbPcwn%2BgWMYVfjGt9HJL4OtEzWJ4VUxmT1eKTf0kZzBUy8SrU9waUpIXRd29quhciMzVDDAXW7QGzMza96sOb1T9wG6Gb88122zUbB4BFitFop%2FuNLgKL%2Fe8pDeLc5syi9rY6xdns1MbdGLFT6EDkbl2nqu8Y8%2BzLJSS3jK2ByuLfeGcb0gNumYf5BPrh9QuB59IHq8a8OLk215RFMUBavlS6%2BdgjV5%2F7a1IWlGrU8HXwKV8pJdGmqOQwJQxEH6OFsEK3UFYWIW5U6DM8BS3%2FmwMaEa3necF7jjiZFxNzePJKh4oX93dtdmoBvFFOx2c8ISo1OJt2ZyALXiFUM%2F8CbVkKI9t%2FhGqE5GrCROMQuJTEZu77WrgRTHJT0541JbA0O5hnvNxlF2TpVHN1XYASMwulTUfPUWiVfJnfUQlWbT8xPF0kEVZFwMhRTA2VTn4scyvN8avcQoL4XfqosfrZ7R6zBmNrwXSs%2BeuAaYAzrzLFj7x8saJTOMkaxQDtGYcDDU68%2FJBjqkAT9SHPXfaJpbvOie6u8B%2BZEPSpElyQlXmibZbU2hSuApsSLeM1Zpc8APOsBULO77L9%2FNiZzW7MC8w%2Bh5nPL4ICPqzo9YdCzPDu8HUOen2jyhoSS8UEhTQNfkk9BiwiAwB%2Ft1aAfq5J3x4YmZUluvnqrsUO5s1Tfj4z2I6H%2BKGdj3oqf%2BEcGXpI4IGe5bfvtj7KW9TteoSErAeY6FLtKBK23hZt7s&X-Amz-Signature=3000927900081ab19fae20ba3aa55e597c3dc3b702fba55e5af3304315ab1ba3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
