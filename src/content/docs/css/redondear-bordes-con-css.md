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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2M772GA%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T145538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID4SKWsoUXCvFKi%2FXAlRoDbArtPMjGZN%2FT2Sxvct3W4QAiB%2F0rC3t0dQDw4HgZrJNqUDn2NxGVo3OGKyQcIrkuvi4iqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2F6mtenMXA4xI3JD0KtwDEIvyb%2FaSlnL375z3UvaZPueBxgKnnhaJFyNwDx%2B6NIX4HQjWqNzovgn21V3EXFs9JgAy2WoHYq31%2FqVidcCC5CcS1fB0tjClj6p371toB0p3Y4gU5kM2Mu7BZraEFV5oq2Y52WdPXwXrOL3AH4YBaqeg8iMtiPuYmGDHJlOHdsUSeQWYHL5G2k0UHbvcEembL7j746PYb5aH8ndtFXW2izbuVPtBMVoE47aVLO6QEr4nYT6PlUDM2DDvPSbBAw4n95QAQo7kcyfv9ylxw%2BmfVtpmgj0JHTzCKUIoXVBdE5bPou%2FTGStG3g6TEoK7Jtv9%2FlaN7e4BS2023arO0KcEYC%2FihEmMBSMvaR48lOCXvtGSU%2BSAcyPI7i5t50%2F4TR0Q7Gh%2BVFN%2BTRQ57qb%2FUW%2BKAJI3kMoGDCpq13Loirt9oP1HOVBFbu%2BRN3HIsuHr1E0R2PUqkdiPVIxTok%2FWWoAH7oAaiKAPEFhpTXUIu93vzMmtxR%2FJDDdk3oAlCQVqdp7Dtp32Rf15Lwe0Z2%2BLvd0Aedm69PYt1TktbxnINprJ%2BUtI50LYOEMRuT0bN4IPPo1VYVW9V2sQXgyd%2FsqM%2FSurrBtlo2Vr8oyqALL8aijFwSRoRvc7AtrNMpcF7Xgwk5rVyQY6pgHWhndJrttNGJLY6FV2Q5jwlojHlOXUG3JWrS4SMMVN9qzuiu1Hips1pMNFb8s7h0grd9U%2FZCUBlMjKxeuSQqeS9jkOWHaKQbTRHz5ZT6x6o0o9OC27LS9afkEVdLQq933sZxnGL4FRuAj3%2FR6KFKT8wcukftQ7fr9%2BQklr7oOWu%2B%2Bbl6d5OratRbV4s%2BpSYk5BCTwmVstScggUfMP7G7O9QI9d6D37&X-Amz-Signature=34642d24550e6a5c3dbe9e013188aee8ae8851e44d724ca022cfbbdfdd9f00e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2M772GA%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T145538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID4SKWsoUXCvFKi%2FXAlRoDbArtPMjGZN%2FT2Sxvct3W4QAiB%2F0rC3t0dQDw4HgZrJNqUDn2NxGVo3OGKyQcIrkuvi4iqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2F6mtenMXA4xI3JD0KtwDEIvyb%2FaSlnL375z3UvaZPueBxgKnnhaJFyNwDx%2B6NIX4HQjWqNzovgn21V3EXFs9JgAy2WoHYq31%2FqVidcCC5CcS1fB0tjClj6p371toB0p3Y4gU5kM2Mu7BZraEFV5oq2Y52WdPXwXrOL3AH4YBaqeg8iMtiPuYmGDHJlOHdsUSeQWYHL5G2k0UHbvcEembL7j746PYb5aH8ndtFXW2izbuVPtBMVoE47aVLO6QEr4nYT6PlUDM2DDvPSbBAw4n95QAQo7kcyfv9ylxw%2BmfVtpmgj0JHTzCKUIoXVBdE5bPou%2FTGStG3g6TEoK7Jtv9%2FlaN7e4BS2023arO0KcEYC%2FihEmMBSMvaR48lOCXvtGSU%2BSAcyPI7i5t50%2F4TR0Q7Gh%2BVFN%2BTRQ57qb%2FUW%2BKAJI3kMoGDCpq13Loirt9oP1HOVBFbu%2BRN3HIsuHr1E0R2PUqkdiPVIxTok%2FWWoAH7oAaiKAPEFhpTXUIu93vzMmtxR%2FJDDdk3oAlCQVqdp7Dtp32Rf15Lwe0Z2%2BLvd0Aedm69PYt1TktbxnINprJ%2BUtI50LYOEMRuT0bN4IPPo1VYVW9V2sQXgyd%2FsqM%2FSurrBtlo2Vr8oyqALL8aijFwSRoRvc7AtrNMpcF7Xgwk5rVyQY6pgHWhndJrttNGJLY6FV2Q5jwlojHlOXUG3JWrS4SMMVN9qzuiu1Hips1pMNFb8s7h0grd9U%2FZCUBlMjKxeuSQqeS9jkOWHaKQbTRHz5ZT6x6o0o9OC27LS9afkEVdLQq933sZxnGL4FRuAj3%2FR6KFKT8wcukftQ7fr9%2BQklr7oOWu%2B%2Bbl6d5OratRbV4s%2BpSYk5BCTwmVstScggUfMP7G7O9QI9d6D37&X-Amz-Signature=17affd9937ec84f8f9bae90b81eb56027eb4f004b30df8cf7fbd7199a97f984e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
