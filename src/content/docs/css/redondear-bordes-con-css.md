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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666L6PCSWY%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T202244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIGfx0BPjANt%2Boxm2nl5%2B6lxti7F1xNYO4aZLd%2BodmN4QAiAx308p%2F2Bs9yto61fgZ953VvAfT%2F6sLzEI2ds4TTJBCyr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMnjEXDb1u3BPWJr4eKtwDBPVbl5V79wCzpjcUW%2BswScOnhL1ZMFHeu%2B%2FKC17fjeL%2FXTDe42UJvaP6loO0sjc%2FDcAnzLZuzKPjzo9eLj3pcvkJ8TsCM%2FJnPI2nR2fWXhYE4%2FzTtEMt%2F%2BVsEOb1mX4HpFWMo3wp%2FuOswHzhik7BVwj1GhRC7QOuqkYw5TZk87ZVqCdgnm%2FjGn0t%2Bih7hIzVgsGroaZjQJsOGAIj9X28cv3Ox9EtfmduxewjdgnjwLpQIUbIqb5npBZO6l8IXqNKn3eJR0ORfJyyfWOl%2B8Lt5WO3iZgpvbqlYGcR5h%2FqquJEqvHTGFv0kK8ATCJbiNATn%2BwYETYl1b%2B2QsplwgsRqC1I1DtuJDkIFeFyW1HmwIYuHtO1L78rkDlyJ3Dwrg3k7jg3LYszhPTr8tpHmKiVaUjuTDsi4AHVuBbAuWEZD7fF2j2GmraEeMFN%2Bv3dG%2BoodsmVtU0N%2BAuGrEDOqxdKVmJGBAt5s%2FvAF0qG4OIdupYT61edm5QcQQSJgUETKwRu9JgVynxFYNvvma77MVap7q9h%2F1Frsq%2BSg4DwmcqGqNzj6ajAGTE1IhVBUyIJx4AEz3sduHBO%2BXzDWdOrhsXmEoEMN1VutiMC3R2L2OS5TuAMt6wYusC4DY0%2BM4cwg5HCyQY6pgEZdNnR1Ml3Ha24NiqygnQ6yQug6Lwpp3CpeCNYF1lqZC72NgVOOAIorDYYYhG0eruyuLQgrPNgmYtlksLq%2Bdl9IRdJi%2BzI46S%2Bxdebl6StkkX9WoB31FpoL%2Bl8KZlos2oGJ%2F3EBWP2w9rJcOBdwluUmNpDATOnEgmYwOlF3UmA37BxCv4ikRJd5oYEHqE0t0M1IOfSdnGf%2FrRv67bFE2E9tnnBcmY4&X-Amz-Signature=e1f70e9f7f2a1559a2fd5fbede86ff67729d96c7f44836b1dea5c07a7c2759b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666L6PCSWY%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T202244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIGfx0BPjANt%2Boxm2nl5%2B6lxti7F1xNYO4aZLd%2BodmN4QAiAx308p%2F2Bs9yto61fgZ953VvAfT%2F6sLzEI2ds4TTJBCyr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMnjEXDb1u3BPWJr4eKtwDBPVbl5V79wCzpjcUW%2BswScOnhL1ZMFHeu%2B%2FKC17fjeL%2FXTDe42UJvaP6loO0sjc%2FDcAnzLZuzKPjzo9eLj3pcvkJ8TsCM%2FJnPI2nR2fWXhYE4%2FzTtEMt%2F%2BVsEOb1mX4HpFWMo3wp%2FuOswHzhik7BVwj1GhRC7QOuqkYw5TZk87ZVqCdgnm%2FjGn0t%2Bih7hIzVgsGroaZjQJsOGAIj9X28cv3Ox9EtfmduxewjdgnjwLpQIUbIqb5npBZO6l8IXqNKn3eJR0ORfJyyfWOl%2B8Lt5WO3iZgpvbqlYGcR5h%2FqquJEqvHTGFv0kK8ATCJbiNATn%2BwYETYl1b%2B2QsplwgsRqC1I1DtuJDkIFeFyW1HmwIYuHtO1L78rkDlyJ3Dwrg3k7jg3LYszhPTr8tpHmKiVaUjuTDsi4AHVuBbAuWEZD7fF2j2GmraEeMFN%2Bv3dG%2BoodsmVtU0N%2BAuGrEDOqxdKVmJGBAt5s%2FvAF0qG4OIdupYT61edm5QcQQSJgUETKwRu9JgVynxFYNvvma77MVap7q9h%2F1Frsq%2BSg4DwmcqGqNzj6ajAGTE1IhVBUyIJx4AEz3sduHBO%2BXzDWdOrhsXmEoEMN1VutiMC3R2L2OS5TuAMt6wYusC4DY0%2BM4cwg5HCyQY6pgEZdNnR1Ml3Ha24NiqygnQ6yQug6Lwpp3CpeCNYF1lqZC72NgVOOAIorDYYYhG0eruyuLQgrPNgmYtlksLq%2Bdl9IRdJi%2BzI46S%2Bxdebl6StkkX9WoB31FpoL%2Bl8KZlos2oGJ%2F3EBWP2w9rJcOBdwluUmNpDATOnEgmYwOlF3UmA37BxCv4ikRJd5oYEHqE0t0M1IOfSdnGf%2FrRv67bFE2E9tnnBcmY4&X-Amz-Signature=c991ded172e05bad88c0e00365bb4f072cfea1d37afc9c8593716ca30c687ab4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
