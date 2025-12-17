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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HXI4QKP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T044548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEV2O%2Fis7m6%2BnLlAlxPe4e%2FIrYIk%2FH18uBZoVFweExJKAiA0L70zsaaO0S8GV6lOOmAvGXS9wikRCc1XkP00Pa74eCr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMJuTaHjhWI%2BzpEXG2KtwDrXyN8C3a65ySssYbHQdw0dstlWhhjziuWUg09hqB6SQ4n2PtY8dCu2MQ8kTuVu7SsBwZvd8JGVKFpVM5ng5QjGeoR0QEUGAciG6Hs2QErDPQ0WqwbZGvL6UlaRslRKQG2Kc6ACyE1ofyj3QG1u7PTbfLjV37yi43N7OQBGpXGdX7ibfpPDZww4Q1rUCacTGj7%2Fav7foTRdynA5ZTbut8B7ymV6MFEQYn%2BcQV3gmDl%2Bt5yXFXW0nbf5OtmgGZ0BR5M3JWmqogxR%2BpNLMrYFzOXMvVThziFhyQyoaSD2CmfoB503qxC99UlbnCsDkbMJBulGZgjioVegItg2eHkMnqckBmA8gt2ck0FBhK2uB%2FYLubi9wbuXPmkdLmCgH4in0%2FP5tyvMq6%2FoZQcETnBTJ3%2Fz3SmiLtVAWBmXrdgjiOvFV1m0%2Fj8sns3TTx2h%2FUHJ6jG5eviqBrHUJ%2FdQgKLBH95LhJ4p9uFg0BwQND6yRXKjnV6yhoAc3lSGs6OLR3uUq4J1fTPPHfhph6muMWvnEIQfDQCB3g8SSB1ufjAcPNFUoMcK9Z4n1GeM1ObDHd0pZvHwLCgzmbGUnysm2oPyeWiZcQOEVUnAZs4ZV0fwoBUG6FoJDWvuh80mgeFScw5%2BmIygY6pgH%2F9p1QrACT1Hhjv2XL%2B5RasWrXxHkUUnYoVH8%2FweT%2BXIgVefdlt4vs5icTQginzeDa3X%2Fh2CilRx%2FMkac4Sg9CVU%2BrcuXdRm1yM72JY3lZo4SWsZOMLCcnOeRtH6Cc4YL7qXJBbpj%2FzZBMQ3CYAp5mu6aWk6CcvAdRuL5AkQLScXPpK00vIZxQe9FLAaPtJA1%2BH%2FdbGlwJtZWRzjR5Xot%2FhRUHTawP&X-Amz-Signature=36b5eb9cb36f3d7d90b7c5efc025f2d47b68159b6b873ab93213bb5fddefdd0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HXI4QKP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T044548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEV2O%2Fis7m6%2BnLlAlxPe4e%2FIrYIk%2FH18uBZoVFweExJKAiA0L70zsaaO0S8GV6lOOmAvGXS9wikRCc1XkP00Pa74eCr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMJuTaHjhWI%2BzpEXG2KtwDrXyN8C3a65ySssYbHQdw0dstlWhhjziuWUg09hqB6SQ4n2PtY8dCu2MQ8kTuVu7SsBwZvd8JGVKFpVM5ng5QjGeoR0QEUGAciG6Hs2QErDPQ0WqwbZGvL6UlaRslRKQG2Kc6ACyE1ofyj3QG1u7PTbfLjV37yi43N7OQBGpXGdX7ibfpPDZww4Q1rUCacTGj7%2Fav7foTRdynA5ZTbut8B7ymV6MFEQYn%2BcQV3gmDl%2Bt5yXFXW0nbf5OtmgGZ0BR5M3JWmqogxR%2BpNLMrYFzOXMvVThziFhyQyoaSD2CmfoB503qxC99UlbnCsDkbMJBulGZgjioVegItg2eHkMnqckBmA8gt2ck0FBhK2uB%2FYLubi9wbuXPmkdLmCgH4in0%2FP5tyvMq6%2FoZQcETnBTJ3%2Fz3SmiLtVAWBmXrdgjiOvFV1m0%2Fj8sns3TTx2h%2FUHJ6jG5eviqBrHUJ%2FdQgKLBH95LhJ4p9uFg0BwQND6yRXKjnV6yhoAc3lSGs6OLR3uUq4J1fTPPHfhph6muMWvnEIQfDQCB3g8SSB1ufjAcPNFUoMcK9Z4n1GeM1ObDHd0pZvHwLCgzmbGUnysm2oPyeWiZcQOEVUnAZs4ZV0fwoBUG6FoJDWvuh80mgeFScw5%2BmIygY6pgH%2F9p1QrACT1Hhjv2XL%2B5RasWrXxHkUUnYoVH8%2FweT%2BXIgVefdlt4vs5icTQginzeDa3X%2Fh2CilRx%2FMkac4Sg9CVU%2BrcuXdRm1yM72JY3lZo4SWsZOMLCcnOeRtH6Cc4YL7qXJBbpj%2FzZBMQ3CYAp5mu6aWk6CcvAdRuL5AkQLScXPpK00vIZxQe9FLAaPtJA1%2BH%2FdbGlwJtZWRzjR5Xot%2FhRUHTawP&X-Amz-Signature=f29d9131f358916ddc614e78a72e990da2bcbc582a2a6c9493277bb38dab7ddd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
