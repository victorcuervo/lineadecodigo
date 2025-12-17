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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6D4GMAM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T200903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICVNsEPq68LI8ML0ycLXl9v2Q7U0bm6cq0OY9K39BoasAiAfHU60%2FFJUkcuytxgQcuSSOePr68J2nlZ1QgcURre77yqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuVxLDYHR%2F8jM4cRyKtwDz%2Frfh8ilOJGoxGhC%2BzaR8AZMSQZw3FyQdcuF4jCN6mk6leTW%2Bsi5kNnzuK%2Fcp5eSQV3R7%2FDeIhoAc98lvHB6NSxU3tYN6a4R10U5Ic0xHjDfYxLOEmwtPvu9U%2F%2BPAaT%2BA9QoaJVDJnXdOr70mlJQvmGNUXrl5o0nuAR41avYoLK3VvmXfoJmmc6rJDFFt9bhhLAsZNuvdOPgfkubmc5ntkh92epaBYQOsfKj1yAw%2BzMDeDJBM941VN1h31b8I4hZ4npxzl%2F%2FvttCNpR5RBdWzs%2F8o%2B2Vb7hTXk69oPhb9j2ITwU9kDtOXPE6IfHsySXJeBVuwc%2FmWTwr39VbKvA%2BPN15fU0No%2FSOixHiYZCPm4XrwdjGH4iyrVHDVWAgAJnxHUWcKvW%2BRnsmvlj8NGyfC7k4bDxPa10u82CyQFWJtmyDjrQChU68rqiyXprunoSBqlk1bjYvd06ffgNdQHmXu8UrNrwQdyifSk8YTkALRBmUCo4fxlx%2Bq0z6%2Bt1i35NEVf8oy34FvWtY%2BnmhL%2BxJGtq44mQH3sdKkvCJc68V14F7MLHXV1hDdyDJntnymo08D8%2F01ygbtPEMrm6QOZYquWXlsgAansehXO9hoibuLAOzG2U8DtIYfMyhTIMw2IqMygY6pgEm9ctyAiICdYqgRNGDaZWhapiVoU%2FfcNqia2xFjt1A9zXY0jGI44tfMcJmotFhlBwqZctFShgroFWGgWbdDbjWfnyfhNHvmGWgdwY%2Fq%2FRoZgjQeXqxPmPka91Spgx7HUoijk%2FLYnmK7xy32jdf1DwOfl7FeTBoG1xoDKArlEmo1CobNTBvZx%2BGq3%2Bn5hbzKB4mx81%2FEhDDN4RK%2BekoINshXvpor3mI&X-Amz-Signature=90320cf9311cfcaa087c005605e72be337f9770e161ab17d20e9951a9d191f58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6D4GMAM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T200903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICVNsEPq68LI8ML0ycLXl9v2Q7U0bm6cq0OY9K39BoasAiAfHU60%2FFJUkcuytxgQcuSSOePr68J2nlZ1QgcURre77yqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuVxLDYHR%2F8jM4cRyKtwDz%2Frfh8ilOJGoxGhC%2BzaR8AZMSQZw3FyQdcuF4jCN6mk6leTW%2Bsi5kNnzuK%2Fcp5eSQV3R7%2FDeIhoAc98lvHB6NSxU3tYN6a4R10U5Ic0xHjDfYxLOEmwtPvu9U%2F%2BPAaT%2BA9QoaJVDJnXdOr70mlJQvmGNUXrl5o0nuAR41avYoLK3VvmXfoJmmc6rJDFFt9bhhLAsZNuvdOPgfkubmc5ntkh92epaBYQOsfKj1yAw%2BzMDeDJBM941VN1h31b8I4hZ4npxzl%2F%2FvttCNpR5RBdWzs%2F8o%2B2Vb7hTXk69oPhb9j2ITwU9kDtOXPE6IfHsySXJeBVuwc%2FmWTwr39VbKvA%2BPN15fU0No%2FSOixHiYZCPm4XrwdjGH4iyrVHDVWAgAJnxHUWcKvW%2BRnsmvlj8NGyfC7k4bDxPa10u82CyQFWJtmyDjrQChU68rqiyXprunoSBqlk1bjYvd06ffgNdQHmXu8UrNrwQdyifSk8YTkALRBmUCo4fxlx%2Bq0z6%2Bt1i35NEVf8oy34FvWtY%2BnmhL%2BxJGtq44mQH3sdKkvCJc68V14F7MLHXV1hDdyDJntnymo08D8%2F01ygbtPEMrm6QOZYquWXlsgAansehXO9hoibuLAOzG2U8DtIYfMyhTIMw2IqMygY6pgEm9ctyAiICdYqgRNGDaZWhapiVoU%2FfcNqia2xFjt1A9zXY0jGI44tfMcJmotFhlBwqZctFShgroFWGgWbdDbjWfnyfhNHvmGWgdwY%2Fq%2FRoZgjQeXqxPmPka91Spgx7HUoijk%2FLYnmK7xy32jdf1DwOfl7FeTBoG1xoDKArlEmo1CobNTBvZx%2BGq3%2Bn5hbzKB4mx81%2FEhDDN4RK%2BekoINshXvpor3mI&X-Amz-Signature=033750ad39d69062f640e2e6a76b7c24158547a24bcec0870e44b657db9be258&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
