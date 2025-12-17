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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TX4IGP6L%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T121159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgKIlGQRi170cO42XSKFXzc4t3MlyNqj6rNMYXr8KRSwIgQ8Jc9jqQe9AkTM1V4L1o0HIksUHbO1akBI4%2FYtBjAHkq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDJAXfqqiSUZNLSJc4CrcAxzqCj6TIc2ADT4OlSbBT%2FvPP1nxYDOcqftX1w6IkG0J%2BKYEVbk1DOundlLAUqOewoZLhDRtl%2BJAHmcA5lNaUonHqEghy2DUuuNEatPuPul0mGeniRJYm2qZPQbwReSDXEViuYFZXDDOXqt%2FhGY5%2FNlq82XZvjZ5xy78Wfj5r9CFaFJYlgfUPX3VIi8Nxip4hNJBAfuhEd3oeFNnGxM4hAa5e3TU0i2l7AsEVbLYrhFJnwAN5gM7EkzHsozlMlMs7NgbHlrgsUiJ3rl302ul7dcK9MB1W6IPVP0tNy4I5aZ7y08ShM0qw5hfG0bpJ7pDBoK4wJv6caHD9ngpvagm7RKTjxE4gX5FEkU08ZfcyIlCsakZP%2B%2FGl%2FAWm1ztnfiUWLU7HhcD1cScGA8MDNyOCzTmmdlCwprOiBhKLHB%2FCgEuar68i0aFoDLcaUpf%2BSU51TPtMufNn%2FVg3Rqwfjed2EfAu5oYDlYEz1wcq%2FEzFpY8%2FZtRXgxPYyv%2FhLyqF4Rp1%2BaoMQcjZgYzSgAdTWR00u85ZYY2N3%2BkKnPRHuQjHqDtHfR%2Bgtck6cFCjTSy%2BqISluUBY5VpvWk0jwEkTT7FtfuCsXzV4ZSsq53ixsuW30GWxCvG267fzjLCCKuLMKaqisoGOqUBCjxVWs0l552gZMeoRwvtBZUXevq9EuRoLIfz1ORG2yuHT41T2TZYGPZQsTYl06oUmdTwZEpZrE%2FAfAInCI1Pd0zy%2F3z698Aj2pR4a1Q8EJRDC8I2Gx8MlxCYKhfLDGp6qcYYP%2BXy75Zhldv3k95G6u3Z9AWeUc8CGWQJd6H26H8hV1UOHr3tn2uqWxGopbUoA1m8Z2gbXZHX2IsPWQhBendlHA7Z&X-Amz-Signature=6b6fd415134df53735fa6b0bd0135240ae9c1338eb1658baa2931d38cee4043a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TX4IGP6L%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T121159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgKIlGQRi170cO42XSKFXzc4t3MlyNqj6rNMYXr8KRSwIgQ8Jc9jqQe9AkTM1V4L1o0HIksUHbO1akBI4%2FYtBjAHkq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDJAXfqqiSUZNLSJc4CrcAxzqCj6TIc2ADT4OlSbBT%2FvPP1nxYDOcqftX1w6IkG0J%2BKYEVbk1DOundlLAUqOewoZLhDRtl%2BJAHmcA5lNaUonHqEghy2DUuuNEatPuPul0mGeniRJYm2qZPQbwReSDXEViuYFZXDDOXqt%2FhGY5%2FNlq82XZvjZ5xy78Wfj5r9CFaFJYlgfUPX3VIi8Nxip4hNJBAfuhEd3oeFNnGxM4hAa5e3TU0i2l7AsEVbLYrhFJnwAN5gM7EkzHsozlMlMs7NgbHlrgsUiJ3rl302ul7dcK9MB1W6IPVP0tNy4I5aZ7y08ShM0qw5hfG0bpJ7pDBoK4wJv6caHD9ngpvagm7RKTjxE4gX5FEkU08ZfcyIlCsakZP%2B%2FGl%2FAWm1ztnfiUWLU7HhcD1cScGA8MDNyOCzTmmdlCwprOiBhKLHB%2FCgEuar68i0aFoDLcaUpf%2BSU51TPtMufNn%2FVg3Rqwfjed2EfAu5oYDlYEz1wcq%2FEzFpY8%2FZtRXgxPYyv%2FhLyqF4Rp1%2BaoMQcjZgYzSgAdTWR00u85ZYY2N3%2BkKnPRHuQjHqDtHfR%2Bgtck6cFCjTSy%2BqISluUBY5VpvWk0jwEkTT7FtfuCsXzV4ZSsq53ixsuW30GWxCvG267fzjLCCKuLMKaqisoGOqUBCjxVWs0l552gZMeoRwvtBZUXevq9EuRoLIfz1ORG2yuHT41T2TZYGPZQsTYl06oUmdTwZEpZrE%2FAfAInCI1Pd0zy%2F3z698Aj2pR4a1Q8EJRDC8I2Gx8MlxCYKhfLDGp6qcYYP%2BXy75Zhldv3k95G6u3Z9AWeUc8CGWQJd6H26H8hV1UOHr3tn2uqWxGopbUoA1m8Z2gbXZHX2IsPWQhBendlHA7Z&X-Amz-Signature=9db9d26b6fbfe5d47f0ac1a98e87174733907804a5044b2bbfa2f559ba7ff137&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
