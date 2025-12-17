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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNR4TIQ3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T145034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCc55W7Nq9B26PNeuBU01OmvOtvS1O%2FesHL4UUXqvV1wQIhAJ79bPBNWT%2FAo1JBYrVzl4FR2pq0ba3G5jidVTHKOqtpKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzGfoemDsNLM3W6FoMq3AP0LcHJ3zC9Frag6jnYhV1timakYCNUCxt7%2BAWJFTGa7JmTijgBKQRZuBj8iuauBUcY2Rma1gK0siQwoSIAQL%2B9EDlNszmWIY%2FUvIQ4t20%2BrzzbSdZfPmkkK3f97JJfyEJjLHnBf1DXWe%2Fk4q4%2Bf5aQxd%2BoSDqr2cELa%2FB8Yhv5C001z%2BPAn5VPtbQVKVjJnovcegB4iyxfK52%2F3skUXRHKVzNfeag1%2BDkyMu7cYa9gsQhzsE3o6FXe6uHTef5OOLtthq8WDx%2FLKrkYNgtpYWWQL%2FtQ2NY%2Bo8Y701oUHdwkLKpZdHyV%2Bcgo0l2IvqNI1qsm%2FqN5MI%2FmUnA14NnenxdeCPxdi6Xqivh2FHtOwGOJEW%2BOW5MaCFmm4kBX5bYfPUmKmHPG8HFVxtqZXGegcMYNd%2FQYjQfTgF%2FDJwBWRFdociZTBcIdK7xKdX2QTOKLtot3aL23f2Pj6V0M0hxQbMcqZqwAgsLA0qlqb%2BZXRCGJEYU4qbiBczy%2Boz9SwAutKkKY7UrN5cXjLnyzmsordQROD3%2Bu8V19ydjyhcxBWcajvrLOzWQup4C8gJSFBXGOwJ%2Fl7TtWZS%2Bj5Q0UMbfCTy8LGc%2Fhz%2BnOf7HVaYY2R7tft91an5edqEyLwmzn4zDQgIvKBjqkAeLZCKiG4X%2FIhk69zDDiaIGdWARSnOxdDrKBohqimVoGya59NOstLEjte3PSHxV4pWfabSPwPWjw58ScTY3ve9hIX9qt3Bz91TRrAPECQU94Oxr6oilvWa4VNIwZOI7qWMaGYAGWlh8hr1uEOAh2JDShpUxLFEzbA%2FU%2BqWoWYyu55gIYYyEOJAc%2Bt7ZrpNxZDmjRY7%2Fz2hkxVvox9ndjgLWnHsZr&X-Amz-Signature=65a10721a90af91f2cd2bbceec610681d340e118e020956d90db90dc84866cfe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNR4TIQ3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T145034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCc55W7Nq9B26PNeuBU01OmvOtvS1O%2FesHL4UUXqvV1wQIhAJ79bPBNWT%2FAo1JBYrVzl4FR2pq0ba3G5jidVTHKOqtpKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzGfoemDsNLM3W6FoMq3AP0LcHJ3zC9Frag6jnYhV1timakYCNUCxt7%2BAWJFTGa7JmTijgBKQRZuBj8iuauBUcY2Rma1gK0siQwoSIAQL%2B9EDlNszmWIY%2FUvIQ4t20%2BrzzbSdZfPmkkK3f97JJfyEJjLHnBf1DXWe%2Fk4q4%2Bf5aQxd%2BoSDqr2cELa%2FB8Yhv5C001z%2BPAn5VPtbQVKVjJnovcegB4iyxfK52%2F3skUXRHKVzNfeag1%2BDkyMu7cYa9gsQhzsE3o6FXe6uHTef5OOLtthq8WDx%2FLKrkYNgtpYWWQL%2FtQ2NY%2Bo8Y701oUHdwkLKpZdHyV%2Bcgo0l2IvqNI1qsm%2FqN5MI%2FmUnA14NnenxdeCPxdi6Xqivh2FHtOwGOJEW%2BOW5MaCFmm4kBX5bYfPUmKmHPG8HFVxtqZXGegcMYNd%2FQYjQfTgF%2FDJwBWRFdociZTBcIdK7xKdX2QTOKLtot3aL23f2Pj6V0M0hxQbMcqZqwAgsLA0qlqb%2BZXRCGJEYU4qbiBczy%2Boz9SwAutKkKY7UrN5cXjLnyzmsordQROD3%2Bu8V19ydjyhcxBWcajvrLOzWQup4C8gJSFBXGOwJ%2Fl7TtWZS%2Bj5Q0UMbfCTy8LGc%2Fhz%2BnOf7HVaYY2R7tft91an5edqEyLwmzn4zDQgIvKBjqkAeLZCKiG4X%2FIhk69zDDiaIGdWARSnOxdDrKBohqimVoGya59NOstLEjte3PSHxV4pWfabSPwPWjw58ScTY3ve9hIX9qt3Bz91TRrAPECQU94Oxr6oilvWa4VNIwZOI7qWMaGYAGWlh8hr1uEOAh2JDShpUxLFEzbA%2FU%2BqWoWYyu55gIYYyEOJAc%2Bt7ZrpNxZDmjRY7%2Fz2hkxVvox9ndjgLWnHsZr&X-Amz-Signature=b211eff15bcec7792a40ecd0dde185345edbab638ebb9f413b09b6afc16e7cc1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
