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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666462TRN%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T114537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7EOeIE6iD21UqQpYiIcaGkmkueHvM3Y3oSq8j3BaDmAIhAIkQ8uKn%2FikK2QBLW7ykWewRGX4YLZ%2F3rJMUMo9u4eGHKv8DCH0QABoMNjM3NDIzMTgzODA1Igx3jzwpSQFK%2BQzMI%2BYq3ANBp1Wbn1acZniRkopPiueVrQwPlCb%2BRIg%2BEOOlOiYAXHxApPWPsu2YzgNC3YQdQ2LSERvIrMnUPL2iZzuH6GNKFA8tkwjB2FTXv8L0y35%2BCVeELrROOJa129SvNU6A8YIl5LbtMXLPZVIN70vaSkBvyVZBscIxMUcFDFg%2FPmLFvy%2FawYk5mq8A6XsAr7hDYpZE0fp3WVSjZqYX%2BNuLXN0q2BfBWlKTyBIH%2FuKYlaIgsSE4W8lUmB1IG9%2BuxCVxLKlGUZjWZ1uv%2Bud4z8Vpx22f7HPq4bT76N%2BcsXRpCAM%2BEQ8Ueno1Pm%2BnSfoQloTxtgZhXZgJYvBWQApho15%2FyuGSzKf7zyEVsIAE6XqiXasMFdMWIrczG%2F1a1lI4TuOAbR4Z%2Bzv6rtMWGBFDWwcJ5XoIAWKVPq0sYLgqlU0D5dQpGqZm34vtI%2BbdqzPdroTLf85KWSGdPldnVhTbsQdwF1pO3mIk4oZvp1pPifYD2o%2B2SHUPtD8VuZUqa1OtOYAj6KbSxL4JnQPWMe7%2BrIxwrvDrrDOVwfHP3wL585vLyvVrhE17hn0Em1EvXQ5dmVZh9Bvsp5LgmPYWw3NPemPqkbs8alsb3zksLzeBztBS%2B8773WenAJbRos040p5YeTDnqorKBjqkAdCw9I%2FHIHEudysggFTnNtCEkNNhkCqoyCVt7i8oXwActgPf3C%2BkVpOvixV1V8iqNtj9X%2BUmeBSuiya4uJ%2FzsmN1krtGWmEAqHm7hCdI0I4uhm6CQIa2G8Rf6ECcUnMs%2FNOFHLZXRzIOI5hsDOeaYqb6QEY2ZRKZESQ4sYC3yXa2P%2FTSuMH%2F0V9BMLxYAuUOIbPfEVKqaMeOJgUcu1b4lpGtlF2w&X-Amz-Signature=184ac46f8c42deb17236eb3b8e1b3147a45006c3c8127cb8d46caba704d43cc4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666462TRN%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T114537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7EOeIE6iD21UqQpYiIcaGkmkueHvM3Y3oSq8j3BaDmAIhAIkQ8uKn%2FikK2QBLW7ykWewRGX4YLZ%2F3rJMUMo9u4eGHKv8DCH0QABoMNjM3NDIzMTgzODA1Igx3jzwpSQFK%2BQzMI%2BYq3ANBp1Wbn1acZniRkopPiueVrQwPlCb%2BRIg%2BEOOlOiYAXHxApPWPsu2YzgNC3YQdQ2LSERvIrMnUPL2iZzuH6GNKFA8tkwjB2FTXv8L0y35%2BCVeELrROOJa129SvNU6A8YIl5LbtMXLPZVIN70vaSkBvyVZBscIxMUcFDFg%2FPmLFvy%2FawYk5mq8A6XsAr7hDYpZE0fp3WVSjZqYX%2BNuLXN0q2BfBWlKTyBIH%2FuKYlaIgsSE4W8lUmB1IG9%2BuxCVxLKlGUZjWZ1uv%2Bud4z8Vpx22f7HPq4bT76N%2BcsXRpCAM%2BEQ8Ueno1Pm%2BnSfoQloTxtgZhXZgJYvBWQApho15%2FyuGSzKf7zyEVsIAE6XqiXasMFdMWIrczG%2F1a1lI4TuOAbR4Z%2Bzv6rtMWGBFDWwcJ5XoIAWKVPq0sYLgqlU0D5dQpGqZm34vtI%2BbdqzPdroTLf85KWSGdPldnVhTbsQdwF1pO3mIk4oZvp1pPifYD2o%2B2SHUPtD8VuZUqa1OtOYAj6KbSxL4JnQPWMe7%2BrIxwrvDrrDOVwfHP3wL585vLyvVrhE17hn0Em1EvXQ5dmVZh9Bvsp5LgmPYWw3NPemPqkbs8alsb3zksLzeBztBS%2B8773WenAJbRos040p5YeTDnqorKBjqkAdCw9I%2FHIHEudysggFTnNtCEkNNhkCqoyCVt7i8oXwActgPf3C%2BkVpOvixV1V8iqNtj9X%2BUmeBSuiya4uJ%2FzsmN1krtGWmEAqHm7hCdI0I4uhm6CQIa2G8Rf6ECcUnMs%2FNOFHLZXRzIOI5hsDOeaYqb6QEY2ZRKZESQ4sYC3yXa2P%2FTSuMH%2F0V9BMLxYAuUOIbPfEVKqaMeOJgUcu1b4lpGtlF2w&X-Amz-Signature=16d20b166111de1fbbcc99f2e1547ee770d914c018a347a79755c8716e2f4b7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
