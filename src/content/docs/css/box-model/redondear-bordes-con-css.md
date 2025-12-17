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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBDNHKJW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T180643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpp4%2BOHKa1hFSui%2F1ceXyKcJ9ixKIBM2PKUMzI4Ht67AIhAMs7Fk4uXYSkep3TwL%2FY32jdHwd1L0hoSKp95uTWq8YFKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwHi1CHb6gsmWa300Yq3AO8FzHFiYaQIJ9ps1J5hlpKmdWL%2FtzpnMs8s4HBDhryFyHVMdwAUKKmJEMAHxMdqcGZJZzflDBJwtdwqh01%2BoZaHoKploww34BRQCGSYxxHEMFMurXUZ3CZ9jMD6kEQxg26yNcg8WDy%2FhN58IAe4lUkbGPWE7ikM8l3J5oXcMfQjJ5i4eN%2FMLvjiA1jTaOZv8tNIVskZUzy1KF%2BcBCX2ZqhXFC4%2BLhsKacfTHZBsd6LTIjdeUMAlLInTL0gUnjt%2BtQ00ttUHdoz66JkEUr%2BYuAMxH7eKqBQSY94n3ZLadP8Oi3UdjBGIqwUw%2ByG3qvqynsZl0syy5unF%2BLh2sI%2BFwycIrD%2FFSZFsOD%2B889guDMNVgL7denV3MqLdv0Jq%2FMeKdgfwhSxrb2Cll61mCUiyKZLPSO4dQhJAkML6DuBU%2FW7Ga8auwLgnbzofVieJTjNrVhf60kAKOVtmjQVWa75cx4HtFIz1VNnp%2BLMHawrIn1bD%2Bsqd8qXqR3uaUxtajwlP1WLPvnKSr73cAByI47gjWExPB66EHHnEHcVMqcHjrHac6KWSui0SBvVahTV0CUsXB71xY0hTtbOht2zJ7Y9hjARKg2T6RJExUYK%2Be3cOy0C60GXpyFcdVavruuELDCNn4vKBjqkAXVroJmzJqaNZ8PP9qyAtgB3NrVLZCGdxPBcQ1wzndFWLhfT6qoNhn4C14rqHkusRw6rS1ESzD4JUlQcH1iqNv83EQIl8%2Bk8vOO7AMzkO0ISEXI0KRNYbQ5ALooafraFddd6a25107fUOWD%2F2uyh04JNbl%2Bya8EwkmFnIaHFx9jpVpnT2owWAS2eYpdGmGEU603fCeL0PyXBGSd696fXCKmrESzT&X-Amz-Signature=a8d31d030883fa8b24f545c065a977db9e441c13ef43e9185edb31a6d8d69c15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBDNHKJW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T180643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpp4%2BOHKa1hFSui%2F1ceXyKcJ9ixKIBM2PKUMzI4Ht67AIhAMs7Fk4uXYSkep3TwL%2FY32jdHwd1L0hoSKp95uTWq8YFKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwHi1CHb6gsmWa300Yq3AO8FzHFiYaQIJ9ps1J5hlpKmdWL%2FtzpnMs8s4HBDhryFyHVMdwAUKKmJEMAHxMdqcGZJZzflDBJwtdwqh01%2BoZaHoKploww34BRQCGSYxxHEMFMurXUZ3CZ9jMD6kEQxg26yNcg8WDy%2FhN58IAe4lUkbGPWE7ikM8l3J5oXcMfQjJ5i4eN%2FMLvjiA1jTaOZv8tNIVskZUzy1KF%2BcBCX2ZqhXFC4%2BLhsKacfTHZBsd6LTIjdeUMAlLInTL0gUnjt%2BtQ00ttUHdoz66JkEUr%2BYuAMxH7eKqBQSY94n3ZLadP8Oi3UdjBGIqwUw%2ByG3qvqynsZl0syy5unF%2BLh2sI%2BFwycIrD%2FFSZFsOD%2B889guDMNVgL7denV3MqLdv0Jq%2FMeKdgfwhSxrb2Cll61mCUiyKZLPSO4dQhJAkML6DuBU%2FW7Ga8auwLgnbzofVieJTjNrVhf60kAKOVtmjQVWa75cx4HtFIz1VNnp%2BLMHawrIn1bD%2Bsqd8qXqR3uaUxtajwlP1WLPvnKSr73cAByI47gjWExPB66EHHnEHcVMqcHjrHac6KWSui0SBvVahTV0CUsXB71xY0hTtbOht2zJ7Y9hjARKg2T6RJExUYK%2Be3cOy0C60GXpyFcdVavruuELDCNn4vKBjqkAXVroJmzJqaNZ8PP9qyAtgB3NrVLZCGdxPBcQ1wzndFWLhfT6qoNhn4C14rqHkusRw6rS1ESzD4JUlQcH1iqNv83EQIl8%2Bk8vOO7AMzkO0ISEXI0KRNYbQ5ALooafraFddd6a25107fUOWD%2F2uyh04JNbl%2Bya8EwkmFnIaHFx9jpVpnT2owWAS2eYpdGmGEU603fCeL0PyXBGSd696fXCKmrESzT&X-Amz-Signature=02d0ab02668066f40969831ec7409f31710aa04c02366cc1582d1f52a0c09931&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
