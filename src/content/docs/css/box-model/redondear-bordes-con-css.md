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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEPWYXBA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T195855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAqFHp2277usO%2B09xjH2e1ReBAR%2F2YBOsn1C6lHgYnjAIhAK752xHw9OtVeU3bnxeBD52noe89eY9B4ibuB7ikq9euKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyeHFqXYuG80z7asxIq3APFGygduA06crk7rnK1Ml1Bo%2FD5tFRGmjdA3dzwtAaTUmd7XrnleIjs7v9qUqEmly5%2BBHap10glwicZoohYDTCYYTj3nQ3cCaY2ipvAsFEJtcnnn8JXL9Nx6C0SwyNYhAbu4BlGQCDodbIIbKp%2BkilRvw4vKAau%2FhnsrdpIw7wF4A5UvG0eTf4zD%2BX4F8EoriLAezAYvZ797BKm75V%2BiLFf1tc9GiFj5N8QnHtATtFJHQ%2FGwNtXlbEtoGgaDMZ32tILUXjbmWicB1S%2BfnI1L8Xtu9E%2F1xD6AmRSzx%2FPyT1903Pwwc5vmad1HJOPaPTUmnCmvt1fkI12K9Qt9HA5JJ7w6WGHTuiAFbUvGAEfL0gnpPOi6dZHmPDDlqfav2ipEcUuG14MQ%2B%2BcpSRK%2FGxdTTQEpbcM2UgHkeib56SSvZ6RqFCXKtoSjAcTmlrXH2PYXFr2a5PDrhhRwkXAdBdLBqsFrPbnR8Iq4LbmukLvBTqWaWifVgNzdwenTp8rAP9bYRy70jBUyeRwV2FI%2FMjFg6zHtjbMrdRJjaBtKN7OCb%2FOeBGQoXpx6blg3iwnG5gfmUS7tJUz5rrWNBBzX1qA2WErP%2FXvS5TszZbXV7NwVxi%2FQGmU8FlO4iMz0BiiYDDIi4zKBjqkAb5yjlE2G33iMnweTuSISR3A%2BA7XT5PF%2FK4ez3yVRyGr6EiTHSqzfv8Z%2FH5ijsd7YZXkPYLqIYqycBUeK74CaAikdKDYoO6n%2Ff52s7pMLbTvwo5bSdiT0CtQGkk7waothcsxORmN8b%2F0xTzcvKMhbffTUJZx4tGGRxMjADhGdDr2x2sKo8Bpa7mMmGG%2Bar5%2BcAxL0y79YHQhjuQSK8I5HmHNdGkK&X-Amz-Signature=ffc19e998824cfef32b4d7593c5a2d0456129c769dd95c90a021d8b7d10b314d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEPWYXBA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T195855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAqFHp2277usO%2B09xjH2e1ReBAR%2F2YBOsn1C6lHgYnjAIhAK752xHw9OtVeU3bnxeBD52noe89eY9B4ibuB7ikq9euKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyeHFqXYuG80z7asxIq3APFGygduA06crk7rnK1Ml1Bo%2FD5tFRGmjdA3dzwtAaTUmd7XrnleIjs7v9qUqEmly5%2BBHap10glwicZoohYDTCYYTj3nQ3cCaY2ipvAsFEJtcnnn8JXL9Nx6C0SwyNYhAbu4BlGQCDodbIIbKp%2BkilRvw4vKAau%2FhnsrdpIw7wF4A5UvG0eTf4zD%2BX4F8EoriLAezAYvZ797BKm75V%2BiLFf1tc9GiFj5N8QnHtATtFJHQ%2FGwNtXlbEtoGgaDMZ32tILUXjbmWicB1S%2BfnI1L8Xtu9E%2F1xD6AmRSzx%2FPyT1903Pwwc5vmad1HJOPaPTUmnCmvt1fkI12K9Qt9HA5JJ7w6WGHTuiAFbUvGAEfL0gnpPOi6dZHmPDDlqfav2ipEcUuG14MQ%2B%2BcpSRK%2FGxdTTQEpbcM2UgHkeib56SSvZ6RqFCXKtoSjAcTmlrXH2PYXFr2a5PDrhhRwkXAdBdLBqsFrPbnR8Iq4LbmukLvBTqWaWifVgNzdwenTp8rAP9bYRy70jBUyeRwV2FI%2FMjFg6zHtjbMrdRJjaBtKN7OCb%2FOeBGQoXpx6blg3iwnG5gfmUS7tJUz5rrWNBBzX1qA2WErP%2FXvS5TszZbXV7NwVxi%2FQGmU8FlO4iMz0BiiYDDIi4zKBjqkAb5yjlE2G33iMnweTuSISR3A%2BA7XT5PF%2FK4ez3yVRyGr6EiTHSqzfv8Z%2FH5ijsd7YZXkPYLqIYqycBUeK74CaAikdKDYoO6n%2Ff52s7pMLbTvwo5bSdiT0CtQGkk7waothcsxORmN8b%2F0xTzcvKMhbffTUJZx4tGGRxMjADhGdDr2x2sKo8Bpa7mMmGG%2Bar5%2BcAxL0y79YHQhjuQSK8I5HmHNdGkK&X-Amz-Signature=d9b49d143d46b293ab2c8f8ef3208e84de4b570130f8ffa66300cf49933e7c8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
