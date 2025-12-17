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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YR7FK7FK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T031736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgJDpzw1PPSgSwLc1epOifn80QH%2FAnzVQLsRjUK7IUHAIhAMg3SMFyUkthPMJsgWTA00KZYPX0CabMYgZYqDFnoEBWKv8DCHQQABoMNjM3NDIzMTgzODA1IgyJ6bwA7BzvjA3yi6kq3AM2sQkp4mOkjHl3g7YT6VdQ%2BWhlhNeRZrOIonaEK70l60hTcLpvXRWcT4dFZEidja4weDlmEh8gjE4YTthq6rTJTk6f0hknkWeMu09pNly93s%2FtU7bxaNvbiBeDlLdkhTdixnvY6B%2Fpt6A70l2Ot0xQip%2Bd1yAHcBOzKbsOdDnWjZ9vY9DngVxxmzPjOtb0gyNGhMmhTiEdvZdGhzculh9XQ1G8uP9LBo172rkyNrgoTNPl5JaDmYkABeyubwpjBpZSCYTW9shmJAqo%2FFRB3rVbRMmuyjKcqmzxp55JMGOJwiyup61DjBY8LBFjV8j897qMgs%2FFA26FL4HsUQQCflTRf4UIHoox7QkYbRqKB5%2FN5MaCGjPayAWXm3qhnnAb%2Bya3Qs6Hn8dxlY%2FNWU%2FTJ5oy0qFOEo2lIZX7bIvA%2BQ8LbX0czYr8BxMSbqcrxW9zjzwN0cYh8LfBT8kpRlcHHTy1NTi%2BxlMu8wbLFQu59Mh%2FHB%2BDgZxCyL%2Bn2LcWAHX0McHtMhluxha9jGsly2zJRs29S%2F1y9y0ilRGqzFBFtrLMds43ZwPmADPls3EKmiD2Mo0Kb0guPVIx7uKmN2zWLgvaDRdVoxbN6ok1ezyBnW%2FYYwuYG%2FmM8fDkoEDDRjDKsYjKBjqkAcE9gMxpwR%2FtoPBLKGkluIgQOe46csfyJvfae1enM1HxT1W7sQhfwNTUar%2FVY7DFl1Wym5dqIkK5P5j7uafkiMD%2FE0u3BeP96%2BRHF0DdGHAN5zEEsQ5KCW3vP2S5DzNYDLwgNfbvVzYkRc5S19JE2ycmopnrLnApfFNn0ZbbCa%2BwyZYcNFB7QvXqq4XfxnFRSEg5kvWhr8Ujn40OSo77vjwi1ppH&X-Amz-Signature=e3e17b75f682c80ce62230dfe0ab38d247922be265cdc7e2bc0f2e190cd432db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YR7FK7FK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T031736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgJDpzw1PPSgSwLc1epOifn80QH%2FAnzVQLsRjUK7IUHAIhAMg3SMFyUkthPMJsgWTA00KZYPX0CabMYgZYqDFnoEBWKv8DCHQQABoMNjM3NDIzMTgzODA1IgyJ6bwA7BzvjA3yi6kq3AM2sQkp4mOkjHl3g7YT6VdQ%2BWhlhNeRZrOIonaEK70l60hTcLpvXRWcT4dFZEidja4weDlmEh8gjE4YTthq6rTJTk6f0hknkWeMu09pNly93s%2FtU7bxaNvbiBeDlLdkhTdixnvY6B%2Fpt6A70l2Ot0xQip%2Bd1yAHcBOzKbsOdDnWjZ9vY9DngVxxmzPjOtb0gyNGhMmhTiEdvZdGhzculh9XQ1G8uP9LBo172rkyNrgoTNPl5JaDmYkABeyubwpjBpZSCYTW9shmJAqo%2FFRB3rVbRMmuyjKcqmzxp55JMGOJwiyup61DjBY8LBFjV8j897qMgs%2FFA26FL4HsUQQCflTRf4UIHoox7QkYbRqKB5%2FN5MaCGjPayAWXm3qhnnAb%2Bya3Qs6Hn8dxlY%2FNWU%2FTJ5oy0qFOEo2lIZX7bIvA%2BQ8LbX0czYr8BxMSbqcrxW9zjzwN0cYh8LfBT8kpRlcHHTy1NTi%2BxlMu8wbLFQu59Mh%2FHB%2BDgZxCyL%2Bn2LcWAHX0McHtMhluxha9jGsly2zJRs29S%2F1y9y0ilRGqzFBFtrLMds43ZwPmADPls3EKmiD2Mo0Kb0guPVIx7uKmN2zWLgvaDRdVoxbN6ok1ezyBnW%2FYYwuYG%2FmM8fDkoEDDRjDKsYjKBjqkAcE9gMxpwR%2FtoPBLKGkluIgQOe46csfyJvfae1enM1HxT1W7sQhfwNTUar%2FVY7DFl1Wym5dqIkK5P5j7uafkiMD%2FE0u3BeP96%2BRHF0DdGHAN5zEEsQ5KCW3vP2S5DzNYDLwgNfbvVzYkRc5S19JE2ycmopnrLnApfFNn0ZbbCa%2BwyZYcNFB7QvXqq4XfxnFRSEg5kvWhr8Ujn40OSo77vjwi1ppH&X-Amz-Signature=b2addc6bf5860e957cb3863ddafeeaba240c0b266049e4a13032ca2bd3463ad8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
