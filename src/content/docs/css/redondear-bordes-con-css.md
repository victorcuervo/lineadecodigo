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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGITIKRV%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T183706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCn7kN5JB5DBziTGzeH0rMl1rJgN9qGFPndItYPiCdiWwIhALWM7awxPp1EYpri0RnQEmsF8lFAqHlD8w9e1PpWGCvYKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwxIixx8aI47maxwSMq3AMeqAaTi18sg8G0YPtiTEvSBBFPUwl%2F%2FuJxlQR6YcN34qk7YIGvuX3P7OhOXyqAXPS3pilw%2F9eKMYABVwQ%2FblV4bTO4ypf7ZKEBFSF%2FtTSnAbot44%2FP2EfhJPbrBul1wh94%2BPw4izrALgdvCF1jJqnVNbs7k1g6V8J7ZfSTWSbcECw7rZXCHOpoai2uoJaew1PiBfON2wCsBUoYVnHQPh8yDzeo7q0bsBXMug9Cn2VU%2FI4PFw8TnotBn2BBK4gHl%2FHNL5J6agAoDNJwqyZ2PP2mBz0NlQvAHIhqpsrMvJomODUnllxhvflmWF9PDx07W5%2FiFr84Cb28iF7H7Ngu4cjF1cqWCsvmYsURMT73qV2HUr7g7SgiRBZaFVzIkd2yUF%2BJPYthhiaARu41j%2BGzZTmfztKdUxvCnKA5UoSG7fOMHxrvI5%2BFGP2HMIDAXk7bPq6ZH2xMzh6AxZQbKk9vx%2BkeW7g7lz3B%2BdnPNn5IqfpUabhVfTM%2Fd%2B%2B13TFtpgzNrD62jnNIYi%2FfNOThX50MefCsCnAijOWVJ%2BP6HgOJVpQwtjh9ArhsS4dlPtNQh%2BAfDOhW1SCFmBsTVltv2OnTpV%2FxVKAlk30nfwTyHNSITiQWiS6Lyy8wmggDr16r2DD%2FuNbJBjqkAfCyuEhg0oCmbB1XPQn6QYEYTGMnmRtNUQ6uBbjQ9lVRlt5azciDRShRQcIMGK41itmJT8jnkiJ5xO%2BJMK6KF6oQYyB3sFTtybzo75M%2FAnBd%2FrWSYVqa0M%2FZye6XC460wwEkZP2DV3fIBtxRuvTGDnP6Mc8ZTl46fStJy%2F8UhHt4%2BPqt5Rk9hDIyi7UkacSsDM2jUjL6FLVKwNyP23AbUTD7AkET&X-Amz-Signature=2e7cb24635a45ef0277108776feb4cf8e596d8d49108c5d77ef72bd62e5edbe5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGITIKRV%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T183706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCn7kN5JB5DBziTGzeH0rMl1rJgN9qGFPndItYPiCdiWwIhALWM7awxPp1EYpri0RnQEmsF8lFAqHlD8w9e1PpWGCvYKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwxIixx8aI47maxwSMq3AMeqAaTi18sg8G0YPtiTEvSBBFPUwl%2F%2FuJxlQR6YcN34qk7YIGvuX3P7OhOXyqAXPS3pilw%2F9eKMYABVwQ%2FblV4bTO4ypf7ZKEBFSF%2FtTSnAbot44%2FP2EfhJPbrBul1wh94%2BPw4izrALgdvCF1jJqnVNbs7k1g6V8J7ZfSTWSbcECw7rZXCHOpoai2uoJaew1PiBfON2wCsBUoYVnHQPh8yDzeo7q0bsBXMug9Cn2VU%2FI4PFw8TnotBn2BBK4gHl%2FHNL5J6agAoDNJwqyZ2PP2mBz0NlQvAHIhqpsrMvJomODUnllxhvflmWF9PDx07W5%2FiFr84Cb28iF7H7Ngu4cjF1cqWCsvmYsURMT73qV2HUr7g7SgiRBZaFVzIkd2yUF%2BJPYthhiaARu41j%2BGzZTmfztKdUxvCnKA5UoSG7fOMHxrvI5%2BFGP2HMIDAXk7bPq6ZH2xMzh6AxZQbKk9vx%2BkeW7g7lz3B%2BdnPNn5IqfpUabhVfTM%2Fd%2B%2B13TFtpgzNrD62jnNIYi%2FfNOThX50MefCsCnAijOWVJ%2BP6HgOJVpQwtjh9ArhsS4dlPtNQh%2BAfDOhW1SCFmBsTVltv2OnTpV%2FxVKAlk30nfwTyHNSITiQWiS6Lyy8wmggDr16r2DD%2FuNbJBjqkAfCyuEhg0oCmbB1XPQn6QYEYTGMnmRtNUQ6uBbjQ9lVRlt5azciDRShRQcIMGK41itmJT8jnkiJ5xO%2BJMK6KF6oQYyB3sFTtybzo75M%2FAnBd%2FrWSYVqa0M%2FZye6XC460wwEkZP2DV3fIBtxRuvTGDnP6Mc8ZTl46fStJy%2F8UhHt4%2BPqt5Rk9hDIyi7UkacSsDM2jUjL6FLVKwNyP23AbUTD7AkET&X-Amz-Signature=76234a3203cabd145cd3f0ade598f7f26b4d208506ca9174d211d32189ff4403&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
