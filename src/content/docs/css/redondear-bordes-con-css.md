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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCUC37WA%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T110432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGCLzNy3PhdPlgAOckzw2OyIFDVx7aNRL%2BaVGzIg89BcAiAPOsFksc7AQStTq81rNAwwzywV6hormPAT30Q3Cw3LHyr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMdGsF1bJaongvB1PvKtwD55%2FJ9spxNom5IHEmrShqvhZy%2FfEW6hywhfZKE2%2F8XuTlYVSQ1S1IygzBxE3LQ2jrxGjqBXDeJP08fnj%2BLsyN%2FB7nq42jGkod%2BoD2uK7M7IPf2ZIE3sdB9Kk5IstGAamC9b25SIWuuSuizu2Bf3RAVAhniEUmH7Dt0zGbqsi61hlv4TyFSVkUfOVAnc2FlVqIQ7ckEuawQ4NB%2FOC50YCYAbQLr1h1eL7F%2FEArd1NP%2FxG05afFRvmoJQbno0KRoVpGWHmbTVycky6cIzJp7FrzD6oPBXJtLfseLis2TZD%2BvQ7g9USR57dY6B7HpP1vCBN9GGlFVuprecaPaJ6gvFouB%2FxpQ2fTZGU1%2BP%2Bdchg83mrBIEVgf1BDegXYNalq%2BS7mDxskkgtopJAAeeFbJhPukPiZlPb6u%2BJnOSrE1B3Ne%2BIGpO6KFAzhTJZsM2gY9CCPEitBJPLO3Yr%2BvQY%2FXtN0SpIZJi6Bio%2B3KWjwSIi%2Bx%2F4TfZC34gQqB0%2FR74G5KfiBkmPR3%2F6ncf8sAuTO2EHvKo8oCO3gKkPw7W72q4jHj8pMQdG1g24HfNe%2FWEcElskg3SvyNEEPsoJ3wt3QINtYBNQL8USWD3qjw8tIKivvWP8Mq7W5i92zkJyOGdUwvcbKyQY6pgEOatwv4za0KxQCWEjt2NMlMAg2YyPOyFCMZQSl4ueLYH3S6rvZLZ5UypgJ939vlokAyTAIODZ2uURIsioSQ9CxwJKjyPRJVIsazbCMLNvb89%2BxwUS41Zp8oJluPWWynv5vxzk7H%2F0UB7UUfOnUOmA%2FHFH8AdTI0i7RRMCBSl4f6AmEewG1a%2BTSwM3hMufPRAfb%2BZWtHZrBQePyfJA0Ynj5p7rgOR7o&X-Amz-Signature=4df7e023c4e1b90344f8ca0f314cbabc18e56f5f24e805ca3585d0aa6b87cf3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCUC37WA%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T110432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGCLzNy3PhdPlgAOckzw2OyIFDVx7aNRL%2BaVGzIg89BcAiAPOsFksc7AQStTq81rNAwwzywV6hormPAT30Q3Cw3LHyr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMdGsF1bJaongvB1PvKtwD55%2FJ9spxNom5IHEmrShqvhZy%2FfEW6hywhfZKE2%2F8XuTlYVSQ1S1IygzBxE3LQ2jrxGjqBXDeJP08fnj%2BLsyN%2FB7nq42jGkod%2BoD2uK7M7IPf2ZIE3sdB9Kk5IstGAamC9b25SIWuuSuizu2Bf3RAVAhniEUmH7Dt0zGbqsi61hlv4TyFSVkUfOVAnc2FlVqIQ7ckEuawQ4NB%2FOC50YCYAbQLr1h1eL7F%2FEArd1NP%2FxG05afFRvmoJQbno0KRoVpGWHmbTVycky6cIzJp7FrzD6oPBXJtLfseLis2TZD%2BvQ7g9USR57dY6B7HpP1vCBN9GGlFVuprecaPaJ6gvFouB%2FxpQ2fTZGU1%2BP%2Bdchg83mrBIEVgf1BDegXYNalq%2BS7mDxskkgtopJAAeeFbJhPukPiZlPb6u%2BJnOSrE1B3Ne%2BIGpO6KFAzhTJZsM2gY9CCPEitBJPLO3Yr%2BvQY%2FXtN0SpIZJi6Bio%2B3KWjwSIi%2Bx%2F4TfZC34gQqB0%2FR74G5KfiBkmPR3%2F6ncf8sAuTO2EHvKo8oCO3gKkPw7W72q4jHj8pMQdG1g24HfNe%2FWEcElskg3SvyNEEPsoJ3wt3QINtYBNQL8USWD3qjw8tIKivvWP8Mq7W5i92zkJyOGdUwvcbKyQY6pgEOatwv4za0KxQCWEjt2NMlMAg2YyPOyFCMZQSl4ueLYH3S6rvZLZ5UypgJ939vlokAyTAIODZ2uURIsioSQ9CxwJKjyPRJVIsazbCMLNvb89%2BxwUS41Zp8oJluPWWynv5vxzk7H%2F0UB7UUfOnUOmA%2FHFH8AdTI0i7RRMCBSl4f6AmEewG1a%2BTSwM3hMufPRAfb%2BZWtHZrBQePyfJA0Ynj5p7rgOR7o&X-Amz-Signature=fddf5d7f623f763583bbebac0c18a0ce4fe797198cc422c27e230e501835b1ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
