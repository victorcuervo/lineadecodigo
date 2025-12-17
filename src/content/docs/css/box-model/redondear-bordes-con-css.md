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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663J7V4IU4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T104238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQ1phW0CJkJE96iC3WAzf6Uwp0sVrtTGU2m%2ByxnJGN2gIgHz4DskLMdrr18YAgz2n7EJPcL%2BfUmXAg00%2BBGc3FRC0q%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDHmkJRbcUAQTwgxawSrcA6xm41eEFpYv5JWV%2BNghWjlFgVCO2sXkhRUqLtb6z%2FXIcXV%2BYUp%2F7VhZ9xb520B1fomgaYkLpq8mgwN%2BAyQYqaza9YWwNvanrHYISsAJJln6pw6Vqv6nr5dAM0HoA1XIegReGrwxJSJ2tNuR7tTdcJ%2Fin60ijFbBsQq8PQCuq9f%2B0kOXQhRcDLXo0QwhRJaAKFIaecYWkRlqc23U5ZMR48mfg%2Fj9bsMmsnr%2BOnQTc45PKO1l5P5SlMjtDdRrg6yh3af%2FuZo2tJOWnq5KmWI7jqwIYkZ%2BfepT%2BgAVTEXmeiYh4duUFkmf2Q3JCLOatcX4VRuWFFA8gqtRDhtlibV3OfK088mL7qC0%2FyOCWBhBGe17QQ0QeFJVS3oiuKTSlLWiGqUc0kbu73KYX9zGwP%2B1IJre0lO9p5TEtIkoy%2B6U%2B%2BaWUYxnQVjzWo4hV81UeEQClL%2BeNDQcrfxg3HNlJShSaTtc352%2FV5BOf7uO3p3iruiXZhHA6jtQBDru4X6UMjaP%2BVFF%2BxIQ3t38fbjGdGy5wIkkydhs8EMWseEYChKca7n4%2FJhLYpsoxOJNsCEkXRD5dlGbDcFLSZtrAMWk5ki6NBLARuW0fRJmGzkzENUT9PtpjFNHxY46yfNo66QyMKCPisoGOqUBRdAKK8CC18g6Biz7VJRaVB7HYN2FGU3RZ1TJC9wfeTpfBhest0CyWj58tJ5U3dxwN%2FVkaMiEOXo8tCr0wvt6YdKWg0QbcBVqz6dI9s%2BWWTXmZczJTzmUKBsSvUb3HeBnbcOxbaZgr7on1VgdtJYZb7cygbnZJF671a7ssh%2BMaNv6JOtLJIcP2Hmj4Rajz9nBmTY3V1lFKGBclqeDv9ASbWuOFZPt&X-Amz-Signature=67165941a3582a4bff6bb2bb218d0a3858880aeab0b2a0b7f62e0c57350c15f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663J7V4IU4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T104238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQ1phW0CJkJE96iC3WAzf6Uwp0sVrtTGU2m%2ByxnJGN2gIgHz4DskLMdrr18YAgz2n7EJPcL%2BfUmXAg00%2BBGc3FRC0q%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDHmkJRbcUAQTwgxawSrcA6xm41eEFpYv5JWV%2BNghWjlFgVCO2sXkhRUqLtb6z%2FXIcXV%2BYUp%2F7VhZ9xb520B1fomgaYkLpq8mgwN%2BAyQYqaza9YWwNvanrHYISsAJJln6pw6Vqv6nr5dAM0HoA1XIegReGrwxJSJ2tNuR7tTdcJ%2Fin60ijFbBsQq8PQCuq9f%2B0kOXQhRcDLXo0QwhRJaAKFIaecYWkRlqc23U5ZMR48mfg%2Fj9bsMmsnr%2BOnQTc45PKO1l5P5SlMjtDdRrg6yh3af%2FuZo2tJOWnq5KmWI7jqwIYkZ%2BfepT%2BgAVTEXmeiYh4duUFkmf2Q3JCLOatcX4VRuWFFA8gqtRDhtlibV3OfK088mL7qC0%2FyOCWBhBGe17QQ0QeFJVS3oiuKTSlLWiGqUc0kbu73KYX9zGwP%2B1IJre0lO9p5TEtIkoy%2B6U%2B%2BaWUYxnQVjzWo4hV81UeEQClL%2BeNDQcrfxg3HNlJShSaTtc352%2FV5BOf7uO3p3iruiXZhHA6jtQBDru4X6UMjaP%2BVFF%2BxIQ3t38fbjGdGy5wIkkydhs8EMWseEYChKca7n4%2FJhLYpsoxOJNsCEkXRD5dlGbDcFLSZtrAMWk5ki6NBLARuW0fRJmGzkzENUT9PtpjFNHxY46yfNo66QyMKCPisoGOqUBRdAKK8CC18g6Biz7VJRaVB7HYN2FGU3RZ1TJC9wfeTpfBhest0CyWj58tJ5U3dxwN%2FVkaMiEOXo8tCr0wvt6YdKWg0QbcBVqz6dI9s%2BWWTXmZczJTzmUKBsSvUb3HeBnbcOxbaZgr7on1VgdtJYZb7cygbnZJF671a7ssh%2BMaNv6JOtLJIcP2Hmj4Rajz9nBmTY3V1lFKGBclqeDv9ASbWuOFZPt&X-Amz-Signature=e72a7e4cb18a525c17dff42fe43e2e969d43cdd1c6bd157704d0e6212c7473cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
