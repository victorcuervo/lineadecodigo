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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EMKICNA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T173811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoNJkuoToC%2FBsmtizpzZWKVhL8QrYQ6m4fZXyiJWpPrQIgJqeheuPy8S0J3rhpGcsmNfeOPKhKeYTnYlf8sn7Fyh4qiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOB%2BLeX0kOqde6Dt5ircAyB4vMAdPk%2FBfrlHuvhgk%2FQyqqsE2n1r4BAjZfDNKqIPASEv%2Fk85vJlkL8jYxwVlPFmJAHioIOl%2BiLUqABuSteVKzrwlO8Tu4Fu7OrWIcsSFMmBxb4XHt40ey2604D54S616I%2Bu9vxImEhKWSoNXI44kgy0iLQ2QcmJgLRV65bTBr6tHq9VtVmbfRqa8RK0cyvV6kSaPtM8lnQyFF3PHKDJxK82wkPAlCEwZmrHa2F9o1eSgixjcrmAvUIVVt%2B9WPVNd9qUsy%2FqVvma0ZuDL7%2FcZqj0fU5fEpXzx9NqmOEtxVLbM4k4g97DpZMAWZdDHdKVId4cu4HNTGJshmvbUUIj2INKocRhgpQqu7S%2FX7rN4ayl%2BQq7NIgvS8wkHY9R%2BnYanitfx6yvgDlvuc5YEWIh7kSETC3UvIhNR12eEVq%2B3F7t75zhpWu6NvOgf5gcAMTt4r3JfL5hRmZ39CyqYxSqytPSjnx8hQWCVsozACpli6m1KrccAF9wSS%2F5qbj9ZorRkGWq1eZDjHwFlzP0iXmX0BS5LJVsbyKolusBj%2FvwpsSH%2B7Z5Nvn3VuldhCNWAuOFI0%2BncT%2F%2BdpT%2FHNucfJJE%2BSPPLG5jtPe3w8IP1EFkNPAW8uJ5aZi%2FshLtIMP2ei8oGOqUBOLLmUdQEQQBfooFpdlRKQ0UNPRuq6lC9LNzOoX3NU3z3gA0DKdxZ7ICYjkXlSUT5e1uS%2FYnRI%2BuAmiWfLAKrY54mfrEA8Ql9Zl4w9jUuCFEkoY6KyvNNMjv4QU4eioBSo32bgCdV8m7mpRwGoicTDMFf60wNfC8Wfm%2FKYXe%2BF9Ik4KgFV%2BWNKxrVoLMs5nFtyRQo2sxWLuZ820el7523P8pDZjHX&X-Amz-Signature=9f06e16d0d0c55d6729e686c46e651b5c01edc0823947fd73cd21074f7ca10dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EMKICNA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T173811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoNJkuoToC%2FBsmtizpzZWKVhL8QrYQ6m4fZXyiJWpPrQIgJqeheuPy8S0J3rhpGcsmNfeOPKhKeYTnYlf8sn7Fyh4qiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOB%2BLeX0kOqde6Dt5ircAyB4vMAdPk%2FBfrlHuvhgk%2FQyqqsE2n1r4BAjZfDNKqIPASEv%2Fk85vJlkL8jYxwVlPFmJAHioIOl%2BiLUqABuSteVKzrwlO8Tu4Fu7OrWIcsSFMmBxb4XHt40ey2604D54S616I%2Bu9vxImEhKWSoNXI44kgy0iLQ2QcmJgLRV65bTBr6tHq9VtVmbfRqa8RK0cyvV6kSaPtM8lnQyFF3PHKDJxK82wkPAlCEwZmrHa2F9o1eSgixjcrmAvUIVVt%2B9WPVNd9qUsy%2FqVvma0ZuDL7%2FcZqj0fU5fEpXzx9NqmOEtxVLbM4k4g97DpZMAWZdDHdKVId4cu4HNTGJshmvbUUIj2INKocRhgpQqu7S%2FX7rN4ayl%2BQq7NIgvS8wkHY9R%2BnYanitfx6yvgDlvuc5YEWIh7kSETC3UvIhNR12eEVq%2B3F7t75zhpWu6NvOgf5gcAMTt4r3JfL5hRmZ39CyqYxSqytPSjnx8hQWCVsozACpli6m1KrccAF9wSS%2F5qbj9ZorRkGWq1eZDjHwFlzP0iXmX0BS5LJVsbyKolusBj%2FvwpsSH%2B7Z5Nvn3VuldhCNWAuOFI0%2BncT%2F%2BdpT%2FHNucfJJE%2BSPPLG5jtPe3w8IP1EFkNPAW8uJ5aZi%2FshLtIMP2ei8oGOqUBOLLmUdQEQQBfooFpdlRKQ0UNPRuq6lC9LNzOoX3NU3z3gA0DKdxZ7ICYjkXlSUT5e1uS%2FYnRI%2BuAmiWfLAKrY54mfrEA8Ql9Zl4w9jUuCFEkoY6KyvNNMjv4QU4eioBSo32bgCdV8m7mpRwGoicTDMFf60wNfC8Wfm%2FKYXe%2BF9Ik4KgFV%2BWNKxrVoLMs5nFtyRQo2sxWLuZ820el7523P8pDZjHX&X-Amz-Signature=fe1f8153d57ba233620e3c43f05c08cf9ecc6b7f58e37d7d6774c6df0a1912c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
