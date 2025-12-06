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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T36ALJ3P%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T052240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlidTammsV0LUV2DjzgQBY8xmhk5QkdJuwYNPwMaLeyAIhAKhTPEFUx4o%2B1YokB4Wchs0yFL6D4GT2%2FPa209e6q7huKv8DCG0QABoMNjM3NDIzMTgzODA1Igzr1cTBeweOVWrOZoIq3AMedt9UzqvSihcyiet%2FZ8DuGMjdd1Oa4pTDvo1tK5daRasZ5QAIaYEIkLuxuLZNNlVzOp9tQSgj1knvdIuiwWcfxEhdkIkIeGJN4jjiGbXnHjrLjA9WsuKMudOnRP8EjqWWS2q1jwFgzZjk4OZxxjypmB%2FwCk0DXT5TL8MYjG53jAtJH9t3IQ7c1z2bKSekopHFFkzO4M2zXD651r6w9nM8oCK9Hx%2F34HcyHFaNpcqByI0EP7naEIJ48hkA0V9n3QzTe5hAOHtDORMdVajEkTcH4XCUtWbDEQOVFJEWUfima4rP6UiI1%2Bgp%2FraoEq%2B1CPlWOxFsQ4j1wwhWgmxLrFSATeQ%2FvmSKldTJ3CzuvMLzF5TfVBvpkWOGaVw36KYoUoWX0aKSBqYT1GyGrUJY16bQN6v%2FJ6N440Tvn0jE4UvlKZboj97qQduAyFkg95EjnMP1uNdLLh1tijKhAbeEAfjslifrtmP%2B3BSXddWfRglOyl8t6GFHypcNwS9siEGfyUjMhzZnJU8%2FVhvvKuym4z70fF92temLf9ALOf2Ndew0yCNZGNLsaEqqgBIVlNucxrIVO2y1gIRydk95fHTHSjnXq3X%2FVyL5jxkpRKaubK%2FEpRCbk6zvPotDh6IguzCU3s7JBjqkAduaFJZDbxrbkh6HYfSfmE3TB1oeRVPxOsAQNOilTy9ZHTdkESPyPbr3R%2BYg9SUQVr2Fq%2BVsPs4T1gqxyLHUfEJo2BOa1WPBsJZnKQgYvvz0Yrke6dlvWDWnn5In%2FDuDmB%2Be7rE4ulyLsg5JWZEO3WYjNJYvHCPmo65H4pCB9QeKwOUe4CIJpKJVa1hteJeltRC6M7QfPF%2FRJAW44ETa7ihjc%2BJS&X-Amz-Signature=4b8f0b4b486d8f59f32041ec4a55b40c5a062c4315c1657895a98cf2569078d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T36ALJ3P%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T052240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlidTammsV0LUV2DjzgQBY8xmhk5QkdJuwYNPwMaLeyAIhAKhTPEFUx4o%2B1YokB4Wchs0yFL6D4GT2%2FPa209e6q7huKv8DCG0QABoMNjM3NDIzMTgzODA1Igzr1cTBeweOVWrOZoIq3AMedt9UzqvSihcyiet%2FZ8DuGMjdd1Oa4pTDvo1tK5daRasZ5QAIaYEIkLuxuLZNNlVzOp9tQSgj1knvdIuiwWcfxEhdkIkIeGJN4jjiGbXnHjrLjA9WsuKMudOnRP8EjqWWS2q1jwFgzZjk4OZxxjypmB%2FwCk0DXT5TL8MYjG53jAtJH9t3IQ7c1z2bKSekopHFFkzO4M2zXD651r6w9nM8oCK9Hx%2F34HcyHFaNpcqByI0EP7naEIJ48hkA0V9n3QzTe5hAOHtDORMdVajEkTcH4XCUtWbDEQOVFJEWUfima4rP6UiI1%2Bgp%2FraoEq%2B1CPlWOxFsQ4j1wwhWgmxLrFSATeQ%2FvmSKldTJ3CzuvMLzF5TfVBvpkWOGaVw36KYoUoWX0aKSBqYT1GyGrUJY16bQN6v%2FJ6N440Tvn0jE4UvlKZboj97qQduAyFkg95EjnMP1uNdLLh1tijKhAbeEAfjslifrtmP%2B3BSXddWfRglOyl8t6GFHypcNwS9siEGfyUjMhzZnJU8%2FVhvvKuym4z70fF92temLf9ALOf2Ndew0yCNZGNLsaEqqgBIVlNucxrIVO2y1gIRydk95fHTHSjnXq3X%2FVyL5jxkpRKaubK%2FEpRCbk6zvPotDh6IguzCU3s7JBjqkAduaFJZDbxrbkh6HYfSfmE3TB1oeRVPxOsAQNOilTy9ZHTdkESPyPbr3R%2BYg9SUQVr2Fq%2BVsPs4T1gqxyLHUfEJo2BOa1WPBsJZnKQgYvvz0Yrke6dlvWDWnn5In%2FDuDmB%2Be7rE4ulyLsg5JWZEO3WYjNJYvHCPmo65H4pCB9QeKwOUe4CIJpKJVa1hteJeltRC6M7QfPF%2FRJAW44ETa7ihjc%2BJS&X-Amz-Signature=d32f2ba37cf2f4919bed94211a37417175fca8b0d0131bba075af63d901afb0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
