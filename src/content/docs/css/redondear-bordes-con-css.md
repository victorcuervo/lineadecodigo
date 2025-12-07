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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPUTHMY4%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T223813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBxOH0i1CPo2%2FecrKE4soazAq75qxwXsI36c2d9MXAt6AiEAqMUza0J1jg6HkZlcFgLEEl7aFji7DhyBsL5Bt9X1SfUqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKDJBlbyAS6SPml0rircAzB7BZfXFOlLqqvUAatLbhmttDXnRENgQG8GTbuoGg0UbNwdZvIYRNNlH9rFK3ovRZi14Ab27Aaa5QyNLSEORHqp%2Fzi4Mp5yJ7L%2Fpms930d%2BRJoLKpLLyrS8wE89W%2FAsSA7A80TGjNCDVJjG55QwzimbatFZOEFSUtYT4fYpzkmgYzPH381KrykWw7n9xbS6ZHHVWYPjnvvXt%2FcjuyleVsl6BsiRr7rN6wKObJGEdC4%2BNuXv195Rznff41HSsxDzQ8j8SYP0FQZIcap7ebTmUWEUJMnkG34sAloz33PyPIdVBtT3L5ZGdFiwPuz2Dou3nkOaIXrtr7lhIFa2g4vbVvwoexsrAucRHZLMWKyL71M1KJPqQmW1pwT9isah6csxz%2F8ZvzyCVtv3Ici3poaoqW6kyKSz2rHmyiQH%2BrtkIdxjaU1%2B1Xap4mYHT3MaxSETVhhISc71%2BwjhdgYlb9WAm58eq31t1lazAkBPUSp61dWVAqYyNP%2BjBiLnZ9e0RcLNe4gXdpVbW8hFu9yAx0pmJRL1oGOHJzk8EGKWptoJXR7G6JCpCq2hWYe8W3zRdcyaIae2TUvwSsINoj%2B9hg%2FOgNGzW1Vk%2B%2BVbRDxsmqHtAZtWqWKkrYJyGuj9GLj6MPPH18kGOqUBWw0R849zYQbbBTVN0bBLRbbQ0BoOLvZTofJQ0nUi4d26MU9MzsqfW3ia6pHPdgB844LBK9ijyr5L87D2Kit%2BM4t6Yuv%2FlKUQNj9HSBUZIakGodYfuhmBc7tZ9fM7AElRXBP4B5NJoaDCy9rpw2%2FhZWt3IH8jj8xqle5hnvQwcCytxskXxMoMoS74HlJrzwm612I1S%2Fs079CWHNVQukJWm%2F%2BTZGXw&X-Amz-Signature=87195879e2c17656b1ae879e0fb601cf324b3797b85ccc523f7f9141bbac5ef5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPUTHMY4%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T223813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBxOH0i1CPo2%2FecrKE4soazAq75qxwXsI36c2d9MXAt6AiEAqMUza0J1jg6HkZlcFgLEEl7aFji7DhyBsL5Bt9X1SfUqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKDJBlbyAS6SPml0rircAzB7BZfXFOlLqqvUAatLbhmttDXnRENgQG8GTbuoGg0UbNwdZvIYRNNlH9rFK3ovRZi14Ab27Aaa5QyNLSEORHqp%2Fzi4Mp5yJ7L%2Fpms930d%2BRJoLKpLLyrS8wE89W%2FAsSA7A80TGjNCDVJjG55QwzimbatFZOEFSUtYT4fYpzkmgYzPH381KrykWw7n9xbS6ZHHVWYPjnvvXt%2FcjuyleVsl6BsiRr7rN6wKObJGEdC4%2BNuXv195Rznff41HSsxDzQ8j8SYP0FQZIcap7ebTmUWEUJMnkG34sAloz33PyPIdVBtT3L5ZGdFiwPuz2Dou3nkOaIXrtr7lhIFa2g4vbVvwoexsrAucRHZLMWKyL71M1KJPqQmW1pwT9isah6csxz%2F8ZvzyCVtv3Ici3poaoqW6kyKSz2rHmyiQH%2BrtkIdxjaU1%2B1Xap4mYHT3MaxSETVhhISc71%2BwjhdgYlb9WAm58eq31t1lazAkBPUSp61dWVAqYyNP%2BjBiLnZ9e0RcLNe4gXdpVbW8hFu9yAx0pmJRL1oGOHJzk8EGKWptoJXR7G6JCpCq2hWYe8W3zRdcyaIae2TUvwSsINoj%2B9hg%2FOgNGzW1Vk%2B%2BVbRDxsmqHtAZtWqWKkrYJyGuj9GLj6MPPH18kGOqUBWw0R849zYQbbBTVN0bBLRbbQ0BoOLvZTofJQ0nUi4d26MU9MzsqfW3ia6pHPdgB844LBK9ijyr5L87D2Kit%2BM4t6Yuv%2FlKUQNj9HSBUZIakGodYfuhmBc7tZ9fM7AElRXBP4B5NJoaDCy9rpw2%2FhZWt3IH8jj8xqle5hnvQwcCytxskXxMoMoS74HlJrzwm612I1S%2Fs079CWHNVQukJWm%2F%2BTZGXw&X-Amz-Signature=be048319940a97ebe00da942b2a2fcc7d2d535e2aa146deab589d8bb35935bf1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
