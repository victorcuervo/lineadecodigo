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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZU736L7%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T000000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICzKyKoDO8QhYPfIpMDOslIgXf6Q2S%2Bw7YHjzw1oPlvoAiBC%2BwiWhuvsJPfFjzKXbCIXQaBN19P4IcFqb62UU9jKwCqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdReOdUTDwss9mbcGKtwDAKC27Dj8b%2F1xkqgXvkyMVKYAH6F4urKtEzQSFmQNOKQjjbNU37GNzMrZLGCewXkNYAwjI10JhBh3yGzpC5Z4YvU7KXfCffbAnjTt4DIG2AZfclFKclFbhqqeIxseWHPQlN7kDZBS%2Fc2bI8UcIZEG4RenSg%2BsO34rOkCNdrBU2zmFwo1NhDIx9Rg5BtQgCC%2BrkZz6bhRZenNN0Ik7ZvTy42CdTfbf8575%2FlalfvzDlnigqITbwEoJQlpaFRtITVKV2XBx8A5m1dLrazVShXunTh772e8Y2FegtlFhyre2hq76zG4boxe0yYFqoPiNDHFOnwT6j%2FYpf7wObQmE6TLSXj%2B2HgphfpsmtQlzahW30M6%2FMm8B%2BjFFiLAwRaFRMEaAPUMw3OQlEFmAJQ%2F0XDt1sg9Q%2B4w%2Bri%2BnIakmjdddo8v0Ids1zhoB%2B4UmkEj%2Fl2732Z%2Bmu9Qliz5q4cqj47QopdOgP2TeRPn40YQzACz3a06g6KdShNvmA2bh8Jeg5y8M9qb%2BcmDe75Fh7aQA4hqTSvwn7Fe7lqYYEGdZuU%2ByhMnxi8BP7zcdqMgFDIo1zrfzsCaLkqB5w715OD2q9CeMQNH28SA%2BJ5Yd%2BwTLQ5OT49SXwDmWYwetaCyJzecw3f3SyQY6pgENTF4Kpydh%2BAO3srnalbVUIzydfK%2FO7y1SaG8dJKrYNyaLU2G%2FkWDPr%2B2gQuo%2FJaCjCzTeJWxA1K%2BMWl642jz9Cilho3VLlmr23RompBMz%2BpmzvnjilHE6fjPYfEXyBOgWovq33PXrogZpXzGin67qo3O3%2BwlTpt0iWrnbXd9GzF%2BhFCnFsczUMOkHudXzB2fIr39NCw4mBEsy5hpR9zVcDqsN3hho&X-Amz-Signature=90f1b8ad5bdbe28321da285151fb947181dd73ac6ae2302a76dbac7a4943c46f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZU736L7%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T000000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICzKyKoDO8QhYPfIpMDOslIgXf6Q2S%2Bw7YHjzw1oPlvoAiBC%2BwiWhuvsJPfFjzKXbCIXQaBN19P4IcFqb62UU9jKwCqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdReOdUTDwss9mbcGKtwDAKC27Dj8b%2F1xkqgXvkyMVKYAH6F4urKtEzQSFmQNOKQjjbNU37GNzMrZLGCewXkNYAwjI10JhBh3yGzpC5Z4YvU7KXfCffbAnjTt4DIG2AZfclFKclFbhqqeIxseWHPQlN7kDZBS%2Fc2bI8UcIZEG4RenSg%2BsO34rOkCNdrBU2zmFwo1NhDIx9Rg5BtQgCC%2BrkZz6bhRZenNN0Ik7ZvTy42CdTfbf8575%2FlalfvzDlnigqITbwEoJQlpaFRtITVKV2XBx8A5m1dLrazVShXunTh772e8Y2FegtlFhyre2hq76zG4boxe0yYFqoPiNDHFOnwT6j%2FYpf7wObQmE6TLSXj%2B2HgphfpsmtQlzahW30M6%2FMm8B%2BjFFiLAwRaFRMEaAPUMw3OQlEFmAJQ%2F0XDt1sg9Q%2B4w%2Bri%2BnIakmjdddo8v0Ids1zhoB%2B4UmkEj%2Fl2732Z%2Bmu9Qliz5q4cqj47QopdOgP2TeRPn40YQzACz3a06g6KdShNvmA2bh8Jeg5y8M9qb%2BcmDe75Fh7aQA4hqTSvwn7Fe7lqYYEGdZuU%2ByhMnxi8BP7zcdqMgFDIo1zrfzsCaLkqB5w715OD2q9CeMQNH28SA%2BJ5Yd%2BwTLQ5OT49SXwDmWYwetaCyJzecw3f3SyQY6pgENTF4Kpydh%2BAO3srnalbVUIzydfK%2FO7y1SaG8dJKrYNyaLU2G%2FkWDPr%2B2gQuo%2FJaCjCzTeJWxA1K%2BMWl642jz9Cilho3VLlmr23RompBMz%2BpmzvnjilHE6fjPYfEXyBOgWovq33PXrogZpXzGin67qo3O3%2BwlTpt0iWrnbXd9GzF%2BhFCnFsczUMOkHudXzB2fIr39NCw4mBEsy5hpR9zVcDqsN3hho&X-Amz-Signature=ec83cf70179ba381401c2f7248042cfe956dbb7bdf92146e854e4ad695102021&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
