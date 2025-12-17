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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HUGGJKD%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T130746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDFKdQFtjy1VXqaXGAwwYgqAX1Ie60hgNPetB%2FBShLTYAIhAMO%2BKDuQ6x26BCqbI9dVs0pL%2FRe0i0qi0yin1gXesFmhKv8DCH4QABoMNjM3NDIzMTgzODA1Igz7%2BO1YBE3ZSwfvuQUq3AMdXOeghMLIJNf0dMAN%2FUr7ER1MzFxszRui1ltTEydqu6rBZ79GKoK7Tb%2BdO0L3buuZAiDfx%2Bm0%2BPR8QmM0ngecOZnn%2BiFAiSeJNu4iUVhtsFnBHhkElL2OXsD%2FWQX4My%2FOrO4DOrnfseZPe%2F7qPIH08fmNB7RZgl7LVL0%2FSGhjV2EjJDmc4efkpg7luyNE4XzMRGnGvjwzBbORqQw4G51Avx9ghewQf1S2%2FmY1LVLreB7bIcrR%2BHus%2BvgtEjXiLhEX0gmVK5qFNcOtRIWLlF6mUk9Z8zo9AqVAknZVp30eBoMSVnwPjujSM0nBN1%2Fiqb97nVeOGOaVMGa8%2B8Q%2F%2Bf4GlIy8ANNabrEXG9Ex6Arl0RE0sLPwRCm2CqkRYbZEbsWG9fkagdvDGVtiNl%2FOUNzG0gkl1R1oxSOoBi6ntumJEOoawnpbM4tlGG2y2BpXqTT4A8ap4BzMq2FFC0%2B2sX%2BHIMXRkyXGhkIhkR3obEMdQ5WBYaouCmRKkrBWKA9ZjPT%2B12tpnKwZ7QtKk9dHHl6iASw1TLLA07158B7Hfw8AnAthw%2BR9GNz4vnzeH0q0quLf9cmcMDHa6hJs5vQ0sLsSp3SONOFkTTNqdSJH9YeKo%2BRYW%2B5ONXkJ7n3O0zDPxYrKBjqkAQxGLJ5DFQOOMDaeyLo%2FTbdFo9Uhw%2FfsNAI9apHAOp2iBFLiTu9CK%2F3S5S9l%2BLPDPoRJ1NMJ5nOwdtIWmz4OdY2keOCMk68lgbVjRsrtvIWLkO9wXro8ZkzIrNFRyNetBqYfiSSVRxKKJQLaWKFE7DHrTw%2BoX0s5mwaAa5K7aQZiXHlWfHJXbvOcrCwv5eWbIIuY5AYfNyevtpWIEDLuvDb8fNfJ&X-Amz-Signature=5605a8654609747171f7b348208d2a0a58d15d722a5981369c6c73bdcf86537a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HUGGJKD%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T130746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDFKdQFtjy1VXqaXGAwwYgqAX1Ie60hgNPetB%2FBShLTYAIhAMO%2BKDuQ6x26BCqbI9dVs0pL%2FRe0i0qi0yin1gXesFmhKv8DCH4QABoMNjM3NDIzMTgzODA1Igz7%2BO1YBE3ZSwfvuQUq3AMdXOeghMLIJNf0dMAN%2FUr7ER1MzFxszRui1ltTEydqu6rBZ79GKoK7Tb%2BdO0L3buuZAiDfx%2Bm0%2BPR8QmM0ngecOZnn%2BiFAiSeJNu4iUVhtsFnBHhkElL2OXsD%2FWQX4My%2FOrO4DOrnfseZPe%2F7qPIH08fmNB7RZgl7LVL0%2FSGhjV2EjJDmc4efkpg7luyNE4XzMRGnGvjwzBbORqQw4G51Avx9ghewQf1S2%2FmY1LVLreB7bIcrR%2BHus%2BvgtEjXiLhEX0gmVK5qFNcOtRIWLlF6mUk9Z8zo9AqVAknZVp30eBoMSVnwPjujSM0nBN1%2Fiqb97nVeOGOaVMGa8%2B8Q%2F%2Bf4GlIy8ANNabrEXG9Ex6Arl0RE0sLPwRCm2CqkRYbZEbsWG9fkagdvDGVtiNl%2FOUNzG0gkl1R1oxSOoBi6ntumJEOoawnpbM4tlGG2y2BpXqTT4A8ap4BzMq2FFC0%2B2sX%2BHIMXRkyXGhkIhkR3obEMdQ5WBYaouCmRKkrBWKA9ZjPT%2B12tpnKwZ7QtKk9dHHl6iASw1TLLA07158B7Hfw8AnAthw%2BR9GNz4vnzeH0q0quLf9cmcMDHa6hJs5vQ0sLsSp3SONOFkTTNqdSJH9YeKo%2BRYW%2B5ONXkJ7n3O0zDPxYrKBjqkAQxGLJ5DFQOOMDaeyLo%2FTbdFo9Uhw%2FfsNAI9apHAOp2iBFLiTu9CK%2F3S5S9l%2BLPDPoRJ1NMJ5nOwdtIWmz4OdY2keOCMk68lgbVjRsrtvIWLkO9wXro8ZkzIrNFRyNetBqYfiSSVRxKKJQLaWKFE7DHrTw%2BoX0s5mwaAa5K7aQZiXHlWfHJXbvOcrCwv5eWbIIuY5AYfNyevtpWIEDLuvDb8fNfJ&X-Amz-Signature=37ea235abcde596729597987fc14487d3253ed3fe4f9d28f6f9f0573ed29fb28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
