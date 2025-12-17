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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WG2HJ3YT%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T002847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEaYtfpI0l%2Fuqi7I33OctFVgwiGeC4297WIbBCnHu%2BGEAiBJqMpB6AkuXEYt8yBi8Tg5fhqisxH%2BuqybXduNHpomPir%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIM8chjeMKBdv8jTdQmKtwD0W%2FO3PT%2ByyRJiSmhgEo5VJuIfSNjXibh%2BYHw2SJZxxt77JlfYlpSwci97purdSQjmLBsEtYyYEdZ7FMi8786xt6d%2BjKP8y7jhr8eo5db7tOUIN6soAKFILoaemivUXswqNNTl4hpWOm5ZOgcI96itNs6Yv9BepAlf%2BWAXvY%2FIMAehibqPTi%2BYWkbRf41SLwTiK0k3NQ3qauzoVT6B6vrZbcgnOdVThA61oVxRIDLjKrYwkZyEEV4dfTFdA%2Fz7oeVEefE9ETme6hNNGIhAG3KNPxkwDSrKlbi9cCE8yQFK55GwkBQaXkNFcmltFaTtDYkUbEjZ3AJesh5kXtRndVm38QSI%2F5ZaYQpjU%2FNBZh%2FeB61PB9YxF3ekD17tGcx0B29eUhjhiNKnaP4B5VEmqs0OCZbGWk0blcQAv1YaxAVGwcMVzZl0%2B%2BkrgvYe4sJ4h%2FAWw9f9ZT%2BK1Th5gMjQDNTxK%2F7HZaZKWwzyxEeF%2FlpklwBm6mCsYM19MvOvL%2F1h8FJjPmv2WdnKbzNqT4fcHAExFte3GRCz76Gxpmn2BBxpSbTxDdEnX5eUKP2vfEsr%2Fvpi9L9eTYXvCoTHRs1%2FcCB%2BZR%2BMyr%2BsWZJhFDKgr%2BdzERxLgmdXZIS3QL69KAwnd%2BHygY6pgHgINqQVQ0Q8uBxL3MOvpyYrPRfJynKAxC3K1Jp2p7C5KZ910ilbN9BUrjyTL9HnWoCiODMYqOVaL7KQKAIhhcfmrOLdGUQlo0wM3ZwB16CYp9ec3ZmwNCZFTdVrm6VVWTwYF1qc5UHHAf1WiLHZf7TFuWsCMOLvBwcqRGQN%2F%2F8pw%2BPdbXLqLU0HE1JoAZDHTadn9CMXSRWKl659qYJwwbWKQffG4k2&X-Amz-Signature=a3427a10ec2f2e7c53834cbf9ac09c6fb67fd2f36f34ef2206e09e432be704ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WG2HJ3YT%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T002847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEaYtfpI0l%2Fuqi7I33OctFVgwiGeC4297WIbBCnHu%2BGEAiBJqMpB6AkuXEYt8yBi8Tg5fhqisxH%2BuqybXduNHpomPir%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIM8chjeMKBdv8jTdQmKtwD0W%2FO3PT%2ByyRJiSmhgEo5VJuIfSNjXibh%2BYHw2SJZxxt77JlfYlpSwci97purdSQjmLBsEtYyYEdZ7FMi8786xt6d%2BjKP8y7jhr8eo5db7tOUIN6soAKFILoaemivUXswqNNTl4hpWOm5ZOgcI96itNs6Yv9BepAlf%2BWAXvY%2FIMAehibqPTi%2BYWkbRf41SLwTiK0k3NQ3qauzoVT6B6vrZbcgnOdVThA61oVxRIDLjKrYwkZyEEV4dfTFdA%2Fz7oeVEefE9ETme6hNNGIhAG3KNPxkwDSrKlbi9cCE8yQFK55GwkBQaXkNFcmltFaTtDYkUbEjZ3AJesh5kXtRndVm38QSI%2F5ZaYQpjU%2FNBZh%2FeB61PB9YxF3ekD17tGcx0B29eUhjhiNKnaP4B5VEmqs0OCZbGWk0blcQAv1YaxAVGwcMVzZl0%2B%2BkrgvYe4sJ4h%2FAWw9f9ZT%2BK1Th5gMjQDNTxK%2F7HZaZKWwzyxEeF%2FlpklwBm6mCsYM19MvOvL%2F1h8FJjPmv2WdnKbzNqT4fcHAExFte3GRCz76Gxpmn2BBxpSbTxDdEnX5eUKP2vfEsr%2Fvpi9L9eTYXvCoTHRs1%2FcCB%2BZR%2BMyr%2BsWZJhFDKgr%2BdzERxLgmdXZIS3QL69KAwnd%2BHygY6pgHgINqQVQ0Q8uBxL3MOvpyYrPRfJynKAxC3K1Jp2p7C5KZ910ilbN9BUrjyTL9HnWoCiODMYqOVaL7KQKAIhhcfmrOLdGUQlo0wM3ZwB16CYp9ec3ZmwNCZFTdVrm6VVWTwYF1qc5UHHAf1WiLHZf7TFuWsCMOLvBwcqRGQN%2F%2F8pw%2BPdbXLqLU0HE1JoAZDHTadn9CMXSRWKl659qYJwwbWKQffG4k2&X-Amz-Signature=76e2e57683da4871c825d56b334d16cdf5e5855a14c4f2a08fa5716d9a09222e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
