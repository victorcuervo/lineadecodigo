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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VIRLEXD%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T133803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCaEZXoR8ItCrW9%2Bqzigohf47q6SCqBG9yCOc6y6BaNJQIhAKLpFpNd0KIbkHTYSUbmheT64EQkjz7JkhJq85nvohdkKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyw6Gz%2B5jQpaXNynOcq3APBCatAeAQcSjCPgR%2Fi2bH%2B%2Fj2SGfU0MnES8uLl4%2B6wKSdrZzbD%2FTKMYD%2BBojVLuFZSAcDhWrIYmd7DlEGUwC3LCC86fYZqD%2Brg%2FyW2H4FmSxv%2FtSR9VtoLsu3NCMJmgJf81acLWIdAkaG%2BFOIopiqruxGn7l4utydtug19e3mI3DF5sgHT7k5ombqendsac5dki%2B%2FYdfA6gsU1PEjGHoTE8Yar9NSkHKGvOwSgMHHSv05WjHYhcpjZVfJXvTsL9umTP1D9BcjF3jjbYGlnKig%2BLaQgbO1mUEEgu6e76h2sHGZbjUUBk4v%2Bl%2BstTJHIC3cXjBL%2FwLCxeEdsEojL45aHCj0RRRKeG5FCjSUkU9hGij2bBggttY52MQTemDuDVRKQbc4pLDtuitQXuh0NbF6VAVvaAI%2BO%2BP48n%2F%2Bv2zEQtpSKLImwZKaX9jC8deiR2PFBAy7GZ43xVNn8qV743iksVdtC4%2FSZoeBTSkEKCO8T5K6rDbSlXHx5sg7HYvfLMSbEL4kJ6M5YVdZjawgbaUAvsBUKN9OhxnnqCuG943lkvpBPeghB9q%2F8WChc%2BAoCqx5IV3PfJ2BKY5O5RXzp7RIAX1Bwr5Fql%2F0cXbYxUGOVIb%2Bk%2FiNFdQ2126SO3zD0mdXJBjqkAdXNH0Qu4d5r%2FonpacVGU3aNmnnxP8PqGveJADWuOfp2T%2BsRrJ8Q9H6oCAvFC0m1lmTEyIs3eXWDP3kNOLNK%2FHcOuaBBLscskWsFdMzE2Af%2FfRuANIIQvC38vBZpBsz3ziu9y5A1aVA0VftNQXyzxk4MHMauOQoNhMmLJtiKKTCpouPbMygcfGV47nNStb0slLRwDpLB5LMUHUTkHSP0nJ%2FRlyXA&X-Amz-Signature=73fea608a83beb674a666f4c386c29d0046597ebd83dd3567e834c578695e656&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VIRLEXD%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T133803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCaEZXoR8ItCrW9%2Bqzigohf47q6SCqBG9yCOc6y6BaNJQIhAKLpFpNd0KIbkHTYSUbmheT64EQkjz7JkhJq85nvohdkKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyw6Gz%2B5jQpaXNynOcq3APBCatAeAQcSjCPgR%2Fi2bH%2B%2Fj2SGfU0MnES8uLl4%2B6wKSdrZzbD%2FTKMYD%2BBojVLuFZSAcDhWrIYmd7DlEGUwC3LCC86fYZqD%2Brg%2FyW2H4FmSxv%2FtSR9VtoLsu3NCMJmgJf81acLWIdAkaG%2BFOIopiqruxGn7l4utydtug19e3mI3DF5sgHT7k5ombqendsac5dki%2B%2FYdfA6gsU1PEjGHoTE8Yar9NSkHKGvOwSgMHHSv05WjHYhcpjZVfJXvTsL9umTP1D9BcjF3jjbYGlnKig%2BLaQgbO1mUEEgu6e76h2sHGZbjUUBk4v%2Bl%2BstTJHIC3cXjBL%2FwLCxeEdsEojL45aHCj0RRRKeG5FCjSUkU9hGij2bBggttY52MQTemDuDVRKQbc4pLDtuitQXuh0NbF6VAVvaAI%2BO%2BP48n%2F%2Bv2zEQtpSKLImwZKaX9jC8deiR2PFBAy7GZ43xVNn8qV743iksVdtC4%2FSZoeBTSkEKCO8T5K6rDbSlXHx5sg7HYvfLMSbEL4kJ6M5YVdZjawgbaUAvsBUKN9OhxnnqCuG943lkvpBPeghB9q%2F8WChc%2BAoCqx5IV3PfJ2BKY5O5RXzp7RIAX1Bwr5Fql%2F0cXbYxUGOVIb%2Bk%2FiNFdQ2126SO3zD0mdXJBjqkAdXNH0Qu4d5r%2FonpacVGU3aNmnnxP8PqGveJADWuOfp2T%2BsRrJ8Q9H6oCAvFC0m1lmTEyIs3eXWDP3kNOLNK%2FHcOuaBBLscskWsFdMzE2Af%2FfRuANIIQvC38vBZpBsz3ziu9y5A1aVA0VftNQXyzxk4MHMauOQoNhMmLJtiKKTCpouPbMygcfGV47nNStb0slLRwDpLB5LMUHUTkHSP0nJ%2FRlyXA&X-Amz-Signature=d0647a942a702a8dcd75f397d6adfade98fc098d53b25018cced1073a8420e11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
