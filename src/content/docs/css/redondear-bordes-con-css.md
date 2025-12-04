---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677LCRUMF%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T064743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQCU9%2FaIA5BAc55Q2KF7K%2FvLXnxgEkQkckWhtgwPOqpKmwIhAJqYrTIksO62HJitZp1hVO1yru1CU89%2BDTV8YadiY6ZZKv8DCD8QABoMNjM3NDIzMTgzODA1Igwnmgowj0U1wPzXiu8q3AP06FYRJ%2FgZiIOhHUo2oDiEeN%2BQplcdUnML7yQTXo2xn4XDLjflQfBis7ZrryP7o4bGhrJb3UPDDEFpkKMHwtwUjR0Q%2FPXglK7X%2F0VuWXFvF3M43huWOQD%2FHkjnm%2BO2I9M8M2B9owlpqBOJWEi3OV4Bj2IW3rri6wwUiBmP1kqNrkl6EZF%2FINTd9jOtTg6bJKYxXFdw1nzKpjY4LdPc7GKCuxz22IwpDo90%2FjYpGt%2BOPy%2FAKWToPPhy9hO65uHk0o%2B95zs49O%2FUzHXZSfzV368Kp8RqMQLTXccQlyeawM%2FySXn01KWvyCbaTOD831Og2t8bswcJhE1UaHEti%2FXN0xHqKouWvSNcbACzuTjJgEP5z7enaHH4XTtddWjH3ffyafv6Wt%2Bd1q9f71ua2u%2FrHYCLk9JzKPanzPYL%2B5Leh50Bqm53iwq5zgjK0SK%2FKpqc6diShJtS4P%2BojAU3BW3MwiNkrs6IUmYoS0uHJbubASZ80RHGeWMjqrUjqB9tik80FjIKqVh%2BqhDVvmgEwWpJQHuN4Nm%2Fk2jwZbG8mBgahtQXW5muxXLK7B6ec%2BnyHoy0EldK74I%2FHBuwBhZrDvk9oA7X2zJdRFOpaJHeFNhXUMjDOJ5kL5DM20erhlOubjD5ysTJBjqkAWNAGL9pe6RN1z1ShZ1FkU1YSzsgMNxXtrhe1Hjeff1T1eGtXvhCFXpo9u7ie9rRxD%2BIZEpWobNGa6u9Ap0BlmZWZZpRW1mmraEteTLPteyo8CHZQlnKKb4kEM2AKQF%2B%2Fg53zPSYPvDh9xG8juffaIqN15p5LAhiAzhySGmV%2BasusriNRoAaD9qyycXPZDLz3sECvDfTpL94rg19g4goJytxKzbO&X-Amz-Signature=269efa8944413de8e6e40293cac2d8dd15b16a0d7a51e3c7ea572aaf26b8b1cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677LCRUMF%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T064743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQCU9%2FaIA5BAc55Q2KF7K%2FvLXnxgEkQkckWhtgwPOqpKmwIhAJqYrTIksO62HJitZp1hVO1yru1CU89%2BDTV8YadiY6ZZKv8DCD8QABoMNjM3NDIzMTgzODA1Igwnmgowj0U1wPzXiu8q3AP06FYRJ%2FgZiIOhHUo2oDiEeN%2BQplcdUnML7yQTXo2xn4XDLjflQfBis7ZrryP7o4bGhrJb3UPDDEFpkKMHwtwUjR0Q%2FPXglK7X%2F0VuWXFvF3M43huWOQD%2FHkjnm%2BO2I9M8M2B9owlpqBOJWEi3OV4Bj2IW3rri6wwUiBmP1kqNrkl6EZF%2FINTd9jOtTg6bJKYxXFdw1nzKpjY4LdPc7GKCuxz22IwpDo90%2FjYpGt%2BOPy%2FAKWToPPhy9hO65uHk0o%2B95zs49O%2FUzHXZSfzV368Kp8RqMQLTXccQlyeawM%2FySXn01KWvyCbaTOD831Og2t8bswcJhE1UaHEti%2FXN0xHqKouWvSNcbACzuTjJgEP5z7enaHH4XTtddWjH3ffyafv6Wt%2Bd1q9f71ua2u%2FrHYCLk9JzKPanzPYL%2B5Leh50Bqm53iwq5zgjK0SK%2FKpqc6diShJtS4P%2BojAU3BW3MwiNkrs6IUmYoS0uHJbubASZ80RHGeWMjqrUjqB9tik80FjIKqVh%2BqhDVvmgEwWpJQHuN4Nm%2Fk2jwZbG8mBgahtQXW5muxXLK7B6ec%2BnyHoy0EldK74I%2FHBuwBhZrDvk9oA7X2zJdRFOpaJHeFNhXUMjDOJ5kL5DM20erhlOubjD5ysTJBjqkAWNAGL9pe6RN1z1ShZ1FkU1YSzsgMNxXtrhe1Hjeff1T1eGtXvhCFXpo9u7ie9rRxD%2BIZEpWobNGa6u9Ap0BlmZWZZpRW1mmraEteTLPteyo8CHZQlnKKb4kEM2AKQF%2B%2Fg53zPSYPvDh9xG8juffaIqN15p5LAhiAzhySGmV%2BasusriNRoAaD9qyycXPZDLz3sECvDfTpL94rg19g4goJytxKzbO&X-Amz-Signature=f8599ba592070ddf85250aebd65331caa5a1f120d3af5f2cf1494cf481c20581&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
