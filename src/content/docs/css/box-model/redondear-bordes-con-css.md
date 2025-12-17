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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XBOFGFI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T103413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHcdk20ds7xOjpj2JC%2BcEzvycCd%2FYLRDh7LflXWE4wrxAiBxflGShkzVK8Up3rMTVlbO8SKvjTO9yprH%2BnofiOVGZSr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMiDIQ9YGmVkeS8DYsKtwD%2BCSNJnh5BZoBqGgn6FrUy036SIcyLKbVRqxPtJuhO2PXcBFfuyshY7%2F5R6E2Rfe7wZfAP0EAATHrHWRNuDz0aI5sNb%2FnaTc5yjFExphrABBdngvSSIh53QFO3JQnhFs68%2B0A8mzSrFbgvNpqW0kjCNvBpeo14rmIcE7QKoMIvt61NIbaAXiPDmFhUENWhmPpfb02bvATYGCuheSGtkjl5M1mBGG3yuLZSgoUQbPdDOQ4CZjOI1gcJl6sykt4IySaqL8FRFmG04BUO7tZS%2BH%2F2tE9x0bGMs5qkp6WwufoxwboblYfT3T1Fnay81pjArHPaFN6t%2Bnx7DDh8N18Xf07TN58lVKOy9YDd8r9q2%2Firr%2Fuvgvc7zLdPLz3uF9%2FXzJuj4WzSaypld4WSlmzGIFRaC8vLTmFqeck49FBJsQKyPVbcMDj0QxGcRnI3VOVFjhvVNXcsqE4jHxsmr7aVFj0iP9Rd73%2FVaWDHIuu6yZp5KuTfkIreZAmXtWqEohkToj4dNEqq%2F6VY%2BjnThX3TnZGJ3R1hegXDkJi5ddZ9JORn8MIO4Tn5aytGh2WxnRDPTnh0aRS20Ik9NpqCb3GukIgmLKz0wo8yeQ2l0WUBottoX6pPpjoZGlsioF6XUIwxPGJygY6pgHGCgivUX%2Bfa%2B7VgAQfIjG%2BbrPjTIAF2dE%2F2hrHsiVELvam%2BIMAezEsfU%2BTdv8aPKx4FxgAqSFFEkbOjISE5P%2F39yVKOYZ%2FeWwbLDGvmZ%2BRdwON1VbLg%2BV5qKh%2BqgAFW%2B8LNDSoSA7VuKz7zOqnyIxnebr05UfwEBe6OP53PlWLv6hIBSb9Est%2B8dxpaYH5%2FsQ1uIdAE117d%2FSNUVquM2Ap9WK7%2Bf6%2F&X-Amz-Signature=61e3d31bc6c8271a1dafd1e5b3c346fd709382ccf25a4877e9f1ddfed11d8249&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XBOFGFI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T103413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHcdk20ds7xOjpj2JC%2BcEzvycCd%2FYLRDh7LflXWE4wrxAiBxflGShkzVK8Up3rMTVlbO8SKvjTO9yprH%2BnofiOVGZSr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMiDIQ9YGmVkeS8DYsKtwD%2BCSNJnh5BZoBqGgn6FrUy036SIcyLKbVRqxPtJuhO2PXcBFfuyshY7%2F5R6E2Rfe7wZfAP0EAATHrHWRNuDz0aI5sNb%2FnaTc5yjFExphrABBdngvSSIh53QFO3JQnhFs68%2B0A8mzSrFbgvNpqW0kjCNvBpeo14rmIcE7QKoMIvt61NIbaAXiPDmFhUENWhmPpfb02bvATYGCuheSGtkjl5M1mBGG3yuLZSgoUQbPdDOQ4CZjOI1gcJl6sykt4IySaqL8FRFmG04BUO7tZS%2BH%2F2tE9x0bGMs5qkp6WwufoxwboblYfT3T1Fnay81pjArHPaFN6t%2Bnx7DDh8N18Xf07TN58lVKOy9YDd8r9q2%2Firr%2Fuvgvc7zLdPLz3uF9%2FXzJuj4WzSaypld4WSlmzGIFRaC8vLTmFqeck49FBJsQKyPVbcMDj0QxGcRnI3VOVFjhvVNXcsqE4jHxsmr7aVFj0iP9Rd73%2FVaWDHIuu6yZp5KuTfkIreZAmXtWqEohkToj4dNEqq%2F6VY%2BjnThX3TnZGJ3R1hegXDkJi5ddZ9JORn8MIO4Tn5aytGh2WxnRDPTnh0aRS20Ik9NpqCb3GukIgmLKz0wo8yeQ2l0WUBottoX6pPpjoZGlsioF6XUIwxPGJygY6pgHGCgivUX%2Bfa%2B7VgAQfIjG%2BbrPjTIAF2dE%2F2hrHsiVELvam%2BIMAezEsfU%2BTdv8aPKx4FxgAqSFFEkbOjISE5P%2F39yVKOYZ%2FeWwbLDGvmZ%2BRdwON1VbLg%2BV5qKh%2BqgAFW%2B8LNDSoSA7VuKz7zOqnyIxnebr05UfwEBe6OP53PlWLv6hIBSb9Est%2B8dxpaYH5%2FsQ1uIdAE117d%2FSNUVquM2Ap9WK7%2Bf6%2F&X-Amz-Signature=1f9c362a874115d43c721dcc61b1f37945838956de03e852d3f63e7b689ad01e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
