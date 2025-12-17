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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJG5JDMS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T174148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSHgpcMOBAXjsHSulHpkPeOfNBGRzlLMiNWBbpwMbplgIgIYd7m6vMtQA%2BGKeYQHHu165hL%2F7vh32UKYr5I5vb680qiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFWQEmcT76UDAXnVlSrcAwRlnGSMMrlCqjpeGZH1nINBbzR2991LxO13Y6g5QRqRzSdlvXNrpy1SVKzTsA8rZLxgi2yMjbzv%2B49GlsTMEFnw07%2Bpt9UTwcyced3oXakgpaUkOE2HVqedfnkJ2LWHUiETSQkQLTWcf9N%2BzNOtey2x3h2xu0Jjz8hdZ7s6iuPCtwXiZQMkaSMLYt9D25cj7QDb%2Fk%2FtvEI5410KA9gCVuiQ1mY%2Fz7jVq2l6gIslWXpbP1yZNbxUxHuqBrCpTRZbo%2B3By5Xtrq5EcZpZo9kgvUdnoSnKDLvsMb5DnBtnmApuKAMVNSJYSNchtYWdj6%2BYWnmcK0Id9erZqpM2P8nYBZZgbyz3uU7jQMnkg19D51V1CfQ6wjB4zDbBOxVFUO3O7ISKckUmUmSe9e4LHUzEF2f95m5gQfWLjgEy5ycmWY0iFfGLn0jo1RkFbqHMI2qA%2BERqAHyQYavO%2B%2Bb%2Bel9EYoxwi78CwpZHcfNcGEidXnn1wv3EQa%2FZpwh4YgSIjFGZXPqpl79nCWqLPe9EnZhAdU6hheyVGPGKiZrvASqmGr8uUs7WNMv4pfKJ1s2TWa3XKnedzAk8XAeZY7phYh2hKzzgS9Cp2KcA%2FppOLMEbUB16bLhFh0zoeNf7ERBMMN%2Bgi8oGOqUBeVswO6BOB8IZuLQNq5YletHUFdZF9Q3TDKoivAVYe1O0P%2FOPd0D3ZeRDkCmZeqdXH6oTOHjDSrbLOj%2FhhU%2BbErDQGxzTN9WxEiJFLiwHESpJg28ui2aB%2BbYS4HobVSFzT0hncm2SVAaaZBLSkkbSZC%2BSFVSMLQsVZFcFusGWD3%2FzKw2abtoB4SVNRIrqkK3nGCaSKiH%2FE7us5%2Fxc9otu%2BHgn%2BiXR&X-Amz-Signature=a59cf6626d076f24c82e09f20f2b73a09538171c43db70e0b039688c0573dde4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJG5JDMS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T174148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSHgpcMOBAXjsHSulHpkPeOfNBGRzlLMiNWBbpwMbplgIgIYd7m6vMtQA%2BGKeYQHHu165hL%2F7vh32UKYr5I5vb680qiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFWQEmcT76UDAXnVlSrcAwRlnGSMMrlCqjpeGZH1nINBbzR2991LxO13Y6g5QRqRzSdlvXNrpy1SVKzTsA8rZLxgi2yMjbzv%2B49GlsTMEFnw07%2Bpt9UTwcyced3oXakgpaUkOE2HVqedfnkJ2LWHUiETSQkQLTWcf9N%2BzNOtey2x3h2xu0Jjz8hdZ7s6iuPCtwXiZQMkaSMLYt9D25cj7QDb%2Fk%2FtvEI5410KA9gCVuiQ1mY%2Fz7jVq2l6gIslWXpbP1yZNbxUxHuqBrCpTRZbo%2B3By5Xtrq5EcZpZo9kgvUdnoSnKDLvsMb5DnBtnmApuKAMVNSJYSNchtYWdj6%2BYWnmcK0Id9erZqpM2P8nYBZZgbyz3uU7jQMnkg19D51V1CfQ6wjB4zDbBOxVFUO3O7ISKckUmUmSe9e4LHUzEF2f95m5gQfWLjgEy5ycmWY0iFfGLn0jo1RkFbqHMI2qA%2BERqAHyQYavO%2B%2Bb%2Bel9EYoxwi78CwpZHcfNcGEidXnn1wv3EQa%2FZpwh4YgSIjFGZXPqpl79nCWqLPe9EnZhAdU6hheyVGPGKiZrvASqmGr8uUs7WNMv4pfKJ1s2TWa3XKnedzAk8XAeZY7phYh2hKzzgS9Cp2KcA%2FppOLMEbUB16bLhFh0zoeNf7ERBMMN%2Bgi8oGOqUBeVswO6BOB8IZuLQNq5YletHUFdZF9Q3TDKoivAVYe1O0P%2FOPd0D3ZeRDkCmZeqdXH6oTOHjDSrbLOj%2FhhU%2BbErDQGxzTN9WxEiJFLiwHESpJg28ui2aB%2BbYS4HobVSFzT0hncm2SVAaaZBLSkkbSZC%2BSFVSMLQsVZFcFusGWD3%2FzKw2abtoB4SVNRIrqkK3nGCaSKiH%2FE7us5%2Fxc9otu%2BHgn%2BiXR&X-Amz-Signature=1c2811d57058407ca4f688eb8b03be51bac97c33517dd627fc10f8f199ad1cd4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
