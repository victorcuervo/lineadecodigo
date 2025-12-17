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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNQJWID3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T211159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGfv5EFOtytyqNDF3ArMpLcomy9aT2rslBROyiKSW9SzAiEA6HdsNbYVw6eVvH1Tj%2BXBVpGX4T4sh2uBe%2BVocBGqKocqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLNNChJtK5KX1wpyvyrcA1EoXGSvXykGJR5ZerofM1aXfu86f4QLsTUv4kpNAn8FGO%2BUoOP8jMZ100rPLVvwwL0AjmbhbY%2BfqLipG8%2FUaoz9rF53OF5pken3LD1wud2Y%2BFbLOFY%2FfhBm5JRqlaWpuBDz7rfScuPFmtqhit8KTlEbDOpTTfk%2B1GIz518QPEUxBFsXX8FUYAMk1K9XQOblhaG%2Bgkw6cI2WySR%2FXjzuoOucO1bgZ2keSt7LM5H8kCSHIsUZCsdE8QhD%2BeX5ZzHpZHGSi6yBlivNPLiO1LAW8PC55skB7mY88KjJdKXvjqmnTToeWYh%2BsaCVj4Lba0uVS6Nd%2BKJ4HcyE21RRnKW6ffFKlQC%2FNCXI6b06O3CH2ZnmJPFjcvvIxQf0fLZF%2FVrcw3jIkao0KFmz0rk5zWrjOFR%2Fj883aA5WOtgRMK5ufFQs1FNC%2BaEit49yKdSBtnuQDv%2B%2BFZfLaPUyTIWSTWDKNBwxL3SKFKSufPxFufPlRrL6p8peh2IDb0szzlvgcV2oTC7AEaW2gniFW2jcYKfi%2BZHQRVTGxGkbeP4%2BJnXsny4MR5g8taabk69kWDaEBNLMQ62dXIXICuAh%2FXQxz%2BV3rmS14Yq9HH8RijPkcrgnj2AhpqOmQp80pyoKYP%2FOMLaujMoGOqUBvBaAp2TxEcyztQ5v%2F518efTESN%2FNLOJI0jCq%2BnQ1jKuko90Bocq6w%2FH1rPIni1APjTkhnvaL5VGJjEWg5Hqqzn9mLceyrx%2FpZNKCguCcH2N7Y2BlHp0jgHnmCZ%2B8O3gAULNlgUs%2FHNdJ9fI%2B0f92C7BSHHtoJGz7q8Uo0Jx19cH%2FGFYfNuUMXt7gdyX7r18xTegtGUzNefhx3B9nRRuDTGJ06%2F7C&X-Amz-Signature=08a353c585d5bc0edff097147e972a64fe34f58af6a0f896d97c77094aa97e58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNQJWID3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T211159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGfv5EFOtytyqNDF3ArMpLcomy9aT2rslBROyiKSW9SzAiEA6HdsNbYVw6eVvH1Tj%2BXBVpGX4T4sh2uBe%2BVocBGqKocqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLNNChJtK5KX1wpyvyrcA1EoXGSvXykGJR5ZerofM1aXfu86f4QLsTUv4kpNAn8FGO%2BUoOP8jMZ100rPLVvwwL0AjmbhbY%2BfqLipG8%2FUaoz9rF53OF5pken3LD1wud2Y%2BFbLOFY%2FfhBm5JRqlaWpuBDz7rfScuPFmtqhit8KTlEbDOpTTfk%2B1GIz518QPEUxBFsXX8FUYAMk1K9XQOblhaG%2Bgkw6cI2WySR%2FXjzuoOucO1bgZ2keSt7LM5H8kCSHIsUZCsdE8QhD%2BeX5ZzHpZHGSi6yBlivNPLiO1LAW8PC55skB7mY88KjJdKXvjqmnTToeWYh%2BsaCVj4Lba0uVS6Nd%2BKJ4HcyE21RRnKW6ffFKlQC%2FNCXI6b06O3CH2ZnmJPFjcvvIxQf0fLZF%2FVrcw3jIkao0KFmz0rk5zWrjOFR%2Fj883aA5WOtgRMK5ufFQs1FNC%2BaEit49yKdSBtnuQDv%2B%2BFZfLaPUyTIWSTWDKNBwxL3SKFKSufPxFufPlRrL6p8peh2IDb0szzlvgcV2oTC7AEaW2gniFW2jcYKfi%2BZHQRVTGxGkbeP4%2BJnXsny4MR5g8taabk69kWDaEBNLMQ62dXIXICuAh%2FXQxz%2BV3rmS14Yq9HH8RijPkcrgnj2AhpqOmQp80pyoKYP%2FOMLaujMoGOqUBvBaAp2TxEcyztQ5v%2F518efTESN%2FNLOJI0jCq%2BnQ1jKuko90Bocq6w%2FH1rPIni1APjTkhnvaL5VGJjEWg5Hqqzn9mLceyrx%2FpZNKCguCcH2N7Y2BlHp0jgHnmCZ%2B8O3gAULNlgUs%2FHNdJ9fI%2B0f92C7BSHHtoJGz7q8Uo0Jx19cH%2FGFYfNuUMXt7gdyX7r18xTegtGUzNefhx3B9nRRuDTGJ06%2F7C&X-Amz-Signature=c52fe86ca1fa3a57e152177a5c865cdee781c5e8a6bfedf9def3bd936609dc0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
