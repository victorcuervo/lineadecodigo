---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastupdates: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUUJOXW5%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T222024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQD9KJqgztE2POYUp7MGzycpUvtI6Pps%2B4oKRCgCoyno8QIhAOOevnCtNBOvnAlXUydAo%2FUwYqzwBx%2FsbK1l25yD9FWCKv8DCDcQABoMNjM3NDIzMTgzODA1IgzeNVlpt5i0SjckGTMq3ANyjho6di52j2iWJcFaJMFuJOzseWbcZR6knYhj7uz4lvytgZPQ%2FCIz26R0wxoY7a7YX1sG72T7pOhagTT9LFgcn%2F6H6VQwXD4ucXI4WqUz%2BrlRSVEl2KOUw3P3Ayek5ATxIMQNoo7%2FBmawDy6r%2BRr1oIXpNyQWWKs0XVc6u6QRg%2F3hgcL4kA%2BpANdglkuioIJDCijbqYHqMoD2b%2FT550CYM4d8KDHqTaxZDDVyVyfxB4Du4Ieg0Agg%2F1AaQNJiZQaQbRojPZixe8F%2FiLm7cML6DFfx9eJ90i4hw6NhYSWwMgdPtK4kdjVbwTHFvu043pYQDefl3mR2niLJHhH9kgy%2B6M0nCqmHmEAIokMWE396O0UEi1jIKRGgkc%2F4Nk7irjKnbri0rPCoR8jSPydzyQgK2CXUw2%2FZX1Bay8Pvft5oGUvpjEoOq9FPsXt3iEGwsYl1ex7tPyvTr%2FGc%2BQaUWHEXrZ%2Fie6voVyJ0us89SMmLc0QkD9JunWPrDsZSc1uby%2B3BwoPX9n%2B%2Fxq%2F7lY5DIs%2FcYGyO5GpySAnYjKJRcZxR4rjjM7wf6FoTeHhMeqdu7GTPCj8sh4cFL82N1HmfIndU%2BTVcTY12w7I9GV2PQEskXsCc9ZGmflFeFGLmZjCC3cLJBjqkAQpm1FWGf9mcfna5RUN0ojaVM0U3ASQgdmFVY%2FMw6xvQOhDVhf20RATHtIzsk6Tuk3vMceRoaVZAO8XC7uYNEXznY7%2Fm%2B%2FP0g%2FE42ZMq%2F8udx0o84%2FdfWdZLIenP6G4tRq3K%2BqCCQ%2Ft%2BCSB4SlQkbHJ9Fwx9gfTICROS1KQy5RJVJ%2Fnbx7aOR2v9npxDn8drx3vYE0bC19AEGmC8EAPxTim1ND11&X-Amz-Signature=9921811b52e27d865447c6d6fd03adbe1ee33f2323e034b327bbbdc87ecafe4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUUJOXW5%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T222024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQD9KJqgztE2POYUp7MGzycpUvtI6Pps%2B4oKRCgCoyno8QIhAOOevnCtNBOvnAlXUydAo%2FUwYqzwBx%2FsbK1l25yD9FWCKv8DCDcQABoMNjM3NDIzMTgzODA1IgzeNVlpt5i0SjckGTMq3ANyjho6di52j2iWJcFaJMFuJOzseWbcZR6knYhj7uz4lvytgZPQ%2FCIz26R0wxoY7a7YX1sG72T7pOhagTT9LFgcn%2F6H6VQwXD4ucXI4WqUz%2BrlRSVEl2KOUw3P3Ayek5ATxIMQNoo7%2FBmawDy6r%2BRr1oIXpNyQWWKs0XVc6u6QRg%2F3hgcL4kA%2BpANdglkuioIJDCijbqYHqMoD2b%2FT550CYM4d8KDHqTaxZDDVyVyfxB4Du4Ieg0Agg%2F1AaQNJiZQaQbRojPZixe8F%2FiLm7cML6DFfx9eJ90i4hw6NhYSWwMgdPtK4kdjVbwTHFvu043pYQDefl3mR2niLJHhH9kgy%2B6M0nCqmHmEAIokMWE396O0UEi1jIKRGgkc%2F4Nk7irjKnbri0rPCoR8jSPydzyQgK2CXUw2%2FZX1Bay8Pvft5oGUvpjEoOq9FPsXt3iEGwsYl1ex7tPyvTr%2FGc%2BQaUWHEXrZ%2Fie6voVyJ0us89SMmLc0QkD9JunWPrDsZSc1uby%2B3BwoPX9n%2B%2Fxq%2F7lY5DIs%2FcYGyO5GpySAnYjKJRcZxR4rjjM7wf6FoTeHhMeqdu7GTPCj8sh4cFL82N1HmfIndU%2BTVcTY12w7I9GV2PQEskXsCc9ZGmflFeFGLmZjCC3cLJBjqkAQpm1FWGf9mcfna5RUN0ojaVM0U3ASQgdmFVY%2FMw6xvQOhDVhf20RATHtIzsk6Tuk3vMceRoaVZAO8XC7uYNEXznY7%2Fm%2B%2FP0g%2FE42ZMq%2F8udx0o84%2FdfWdZLIenP6G4tRq3K%2BqCCQ%2Ft%2BCSB4SlQkbHJ9Fwx9gfTICROS1KQy5RJVJ%2Fnbx7aOR2v9npxDn8drx3vYE0bC19AEGmC8EAPxTim1ND11&X-Amz-Signature=e3e67000fdba1eec36e27e89f731b6fbafef93b64f2eeb7258ae6709caf43b02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
