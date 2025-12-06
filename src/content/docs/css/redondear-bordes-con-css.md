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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WOYR2PK%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T124817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAbap03ihliPXA1by21yXdGF0GHBsj42L0GoVQbPKIbRAiAFCfeXD0qoEc1pCGsKrW55ctR7q4A4%2FqFviYdXiODDKSr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMR53Ch9RBxoDpVEcdKtwD6pd%2BURVOX2UXjeNF%2FupA60fRB0TdLg8JS4QXelU%2FSFDt5ofTht3LGeG%2F7T%2FDxr%2F2T%2ByUe%2B4cgWyXav4n7ZIpIYl4%2BEwI1zw6ajUkl4owoMvslfEFLDf1WdmUjJHrq1yD1rIGJldPs7RG%2B9JCLNBvE%2Bri%2FXOUh5LSuZiW13J2pNR8lJMe3P5oG1PA68tH560SMPoGfXo4yAQ2RW9se3hhLQNSQuCBGzKiNPPCkUV8jRpR8xrooEQnVSIqALS04694YQalAk%2FZ8wFPzXBzGJ4XNMRPCPLEQW4zNv2sTKrLP%2F%2FiCrDK0JzVq63nWv1U9CpQJg5T9%2FnzX4K9oQvu%2FlDUEpzs6uwklsyaMOyLAUWWVBmuBAK4iSuPGRGpaDdiYylFDCCKppV2T1y50sJl%2BMBt8Svgx%2B8Y4sWJobd8rxdXDYtlpmLjrzXhZcJcHzRJzQ3rkflVmU71sX7J6wizlMpwk3GaYczAXZPmHHH6T8Uf0vz4chKobGENzuoRG5JHrrUXwUfkGzjL%2BHDmkJZbiDFsQ9P6L4Ztt0g09IY8wz%2Fqo%2F%2FT%2ByphyjUL8ANVX7tVIfIdlJ8frbwbrn%2FeWk9dSBM8%2FlyWS9GSGIdUfohc5VIkrvUxB5vuv2WPXNCBj7ww9abQyQY6pgF0JhIXjqOLCghpe8nEPgemFZp65fqNrr1WpjqAOd4Tonw0a%2BnEGvrlS100NNuIwMdY82LfgXmDYeQ91YEixGKTbC1JZaGbcHUE6rXBJNGmTV9xFd%2BM%2FEdZf4NmgdLdPwyLmOfwgqWZyO7Yu1g74LYy2ytVABgRx3QdlCN6Q5%2FrwM9a6X3OyuN3fC9B7aXycl2C%2FcpTQ3Qq6fWWln1A8QllFa7rBjJM&X-Amz-Signature=c819eb7efe96209d479d322e773e5b46f16b1556e169fd5d5b248977d26eb47f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WOYR2PK%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T124817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAbap03ihliPXA1by21yXdGF0GHBsj42L0GoVQbPKIbRAiAFCfeXD0qoEc1pCGsKrW55ctR7q4A4%2FqFviYdXiODDKSr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMR53Ch9RBxoDpVEcdKtwD6pd%2BURVOX2UXjeNF%2FupA60fRB0TdLg8JS4QXelU%2FSFDt5ofTht3LGeG%2F7T%2FDxr%2F2T%2ByUe%2B4cgWyXav4n7ZIpIYl4%2BEwI1zw6ajUkl4owoMvslfEFLDf1WdmUjJHrq1yD1rIGJldPs7RG%2B9JCLNBvE%2Bri%2FXOUh5LSuZiW13J2pNR8lJMe3P5oG1PA68tH560SMPoGfXo4yAQ2RW9se3hhLQNSQuCBGzKiNPPCkUV8jRpR8xrooEQnVSIqALS04694YQalAk%2FZ8wFPzXBzGJ4XNMRPCPLEQW4zNv2sTKrLP%2F%2FiCrDK0JzVq63nWv1U9CpQJg5T9%2FnzX4K9oQvu%2FlDUEpzs6uwklsyaMOyLAUWWVBmuBAK4iSuPGRGpaDdiYylFDCCKppV2T1y50sJl%2BMBt8Svgx%2B8Y4sWJobd8rxdXDYtlpmLjrzXhZcJcHzRJzQ3rkflVmU71sX7J6wizlMpwk3GaYczAXZPmHHH6T8Uf0vz4chKobGENzuoRG5JHrrUXwUfkGzjL%2BHDmkJZbiDFsQ9P6L4Ztt0g09IY8wz%2Fqo%2F%2FT%2ByphyjUL8ANVX7tVIfIdlJ8frbwbrn%2FeWk9dSBM8%2FlyWS9GSGIdUfohc5VIkrvUxB5vuv2WPXNCBj7ww9abQyQY6pgF0JhIXjqOLCghpe8nEPgemFZp65fqNrr1WpjqAOd4Tonw0a%2BnEGvrlS100NNuIwMdY82LfgXmDYeQ91YEixGKTbC1JZaGbcHUE6rXBJNGmTV9xFd%2BM%2FEdZf4NmgdLdPwyLmOfwgqWZyO7Yu1g74LYy2ytVABgRx3QdlCN6Q5%2FrwM9a6X3OyuN3fC9B7aXycl2C%2FcpTQ3Qq6fWWln1A8QllFa7rBjJM&X-Amz-Signature=fa03658060e644ff3cb9df5227cab3ac1969dea31a8b6bdddd915258f272ab2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
