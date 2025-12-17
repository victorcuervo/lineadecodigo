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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPFGEUNK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T151818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCECvi8je%2FJs%2FhzTAOdQen8FFlKdzzkbGvLxOccobd9NQIhAKA0o0NQEiTR9uRpE2xsqzKsVXDl9dMRj0oYmpCewX%2FjKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzPd0bW0%2B8kjy%2BM5Wcq3AOQeyvtN2emWMJxGwzpAHazs7oLXg620tXIg22bs96vkpmGAgdTJivffl1ImhWNE%2FPdzupUcmnYESA%2BU0FiiX1hbAZw%2FhyCBjoV2SWL5dv1kh3dN4YssaVaWyAQaWGRUpEecaR%2F%2F5KHDxXwniyPnEO1Mk4gA3GMoILHKNns4zFCT9Cs%2FWF2oeD%2BWyi7%2BZa55TwjjsSIhkGV0NivDXemraAEocLPTwHU5u3OTVasHkAbrU0YuVD0BHMuX829Hb8cJmGHq97OfyIWHe8%2FZt2n5zqW9MoE4ms9iwgqBI3qWphSuBbAGbtwzB2TVuDrBj8VINBQAd2mUu8i1A8g1KnIvnb652qzgrlnLqL%2BIjavUoTb4xQErvEbMiFMQUJ3WjOhHbhEbAH7HLXfAnD04B7naV0oHw%2BoK9Y41Z2NKyCOLZS2FXLX7SXjMPZUNQBUnuUKnlH8TQjU2OoMAUsuPk9zpUPHTKQYvkffde4KaXAcHnoFnaULcwH1XR%2FMUp1sWG1DEWe7Wo7F1sQpbeg%2B%2F41rV64RP9w%2BVWO%2BQcncwshni%2FChiVs8pmiPze%2BakuJb%2B0keOTwrWXhJWRWuAO2tybnqorrMTQRZpebo5InTsyssfs4%2FfMuif8E4q7WrcqpTETDzgIvKBjqkAXRZA6oYQ0KntFJIuNQUW%2FoWlagHc%2FwpjPEf6jknLG7JgyOquHwyL07wQ%2FexrGshCEeKoZyxc5ZvToNYdg036yWzFrEh5s3jovBgerVo8vc1xGnO%2BSlmzYwc2%2BNS4aDknvKqRfws6l3bJs3yxRpFGT03%2FiUnxU80xR0aj%2FCcktGFJr%2FcvqKEswIq79EuELocuLLxr4VwyIIXWt%2B1Rux9aZf4WY1N&X-Amz-Signature=e8aef59ffd5c9130b7aa5f788caf231f92d774c8cd8e9fabed36dbf55db4869c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPFGEUNK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T151818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCECvi8je%2FJs%2FhzTAOdQen8FFlKdzzkbGvLxOccobd9NQIhAKA0o0NQEiTR9uRpE2xsqzKsVXDl9dMRj0oYmpCewX%2FjKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzPd0bW0%2B8kjy%2BM5Wcq3AOQeyvtN2emWMJxGwzpAHazs7oLXg620tXIg22bs96vkpmGAgdTJivffl1ImhWNE%2FPdzupUcmnYESA%2BU0FiiX1hbAZw%2FhyCBjoV2SWL5dv1kh3dN4YssaVaWyAQaWGRUpEecaR%2F%2F5KHDxXwniyPnEO1Mk4gA3GMoILHKNns4zFCT9Cs%2FWF2oeD%2BWyi7%2BZa55TwjjsSIhkGV0NivDXemraAEocLPTwHU5u3OTVasHkAbrU0YuVD0BHMuX829Hb8cJmGHq97OfyIWHe8%2FZt2n5zqW9MoE4ms9iwgqBI3qWphSuBbAGbtwzB2TVuDrBj8VINBQAd2mUu8i1A8g1KnIvnb652qzgrlnLqL%2BIjavUoTb4xQErvEbMiFMQUJ3WjOhHbhEbAH7HLXfAnD04B7naV0oHw%2BoK9Y41Z2NKyCOLZS2FXLX7SXjMPZUNQBUnuUKnlH8TQjU2OoMAUsuPk9zpUPHTKQYvkffde4KaXAcHnoFnaULcwH1XR%2FMUp1sWG1DEWe7Wo7F1sQpbeg%2B%2F41rV64RP9w%2BVWO%2BQcncwshni%2FChiVs8pmiPze%2BakuJb%2B0keOTwrWXhJWRWuAO2tybnqorrMTQRZpebo5InTsyssfs4%2FfMuif8E4q7WrcqpTETDzgIvKBjqkAXRZA6oYQ0KntFJIuNQUW%2FoWlagHc%2FwpjPEf6jknLG7JgyOquHwyL07wQ%2FexrGshCEeKoZyxc5ZvToNYdg036yWzFrEh5s3jovBgerVo8vc1xGnO%2BSlmzYwc2%2BNS4aDknvKqRfws6l3bJs3yxRpFGT03%2FiUnxU80xR0aj%2FCcktGFJr%2FcvqKEswIq79EuELocuLLxr4VwyIIXWt%2B1Rux9aZf4WY1N&X-Amz-Signature=3e11992bb8c31e786cbbfef05736b5bc8cfb4a61228b3977c409e268bbd7e7a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
