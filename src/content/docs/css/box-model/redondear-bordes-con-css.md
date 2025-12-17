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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KCI4UFO%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T082307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPdXnoo5c2mDT%2FWvK5tTY%2BAOq8kfomQrnHKUrvNp3nWgIhAIXEGz1pZr9eyCDIsIIX%2F9Gvo3uJd6Nat35TIwQV8mQrKv8DCHkQABoMNjM3NDIzMTgzODA1Igx%2F06BGj1Vr8rdrxKkq3APDzpKvkoPwnq%2Fh5BPaxlHk%2B2ZRRCVX766uoY3WBFrBkmgLJ5kKuZ6V9ONR8BaOTkdzqYagwO8WGbTGg%2B%2FphDf2p5%2Fk2WCLRJc4doC4Wc8S7RlP%2FtpGmwRPkwYMq5G2We8v%2BC28KoAyF88qn4MXf8RK0RFSQes4j2AczTXQQM8IMfSG5C8Jyi%2Bylarsilte0hE0L9ExfHsGOWCQn0CCDjv41Wa5dT9f%2B2je5e61gJ9aqbpQiJl%2F050ChFtBQqRvxNwaPyZNpIHKPMbssUXYSFAit2%2BmYfgFvLW9XO2lL10%2BsAurXMB44K74py0hEsy%2Bny8MCpTyzhj0Iv8BpWoqb836QFDTNJXbw6XfNbVT1OOSAF0FLmyjcZTPZVhv1ZK8yM5aH8ICqBA%2BR5otT0QauZA9nMETTwN4XXoUR5aAVvwA%2BCab%2FArzaFqMg4Yir%2BM6UtZm8AxhfzD6ouCUtPwSM90nxzQffTtWQSW6cLAUvVF42MXqyYZ9rReY6nemM51lq75Q2CU1hPKpmyGU6hSRSXuRWWFi3fJtd4kRJE4PNRZE4nivxMXLFhA3qsBVN%2FxXLP1hjUxj075%2Bowodeq5NDvvpMTkabLd2eZ80nLC9FAbA8bax5A0xbW8R%2Fn48DzDRt4nKBjqkAetCQNvvGwPJbHTyo%2FrdwvEfOZv45BVZAYTOubyUL9NFl5mLp%2Fnnj55jUfSSlFtPZQXUS7h6Au5Y%2FWbeyzvZbcNkdjNi9jCLfkLrVDe8YWub5PxJ00frBk1luhpbsHR%2BG39UtHOKXu5oPwNjolSoAry2wTlyDvAmpZmhHb5XTKfx3SS9swIOetf%2FnpzU0Bsw%2Fg87JfrJhGigy%2FGNYWT3QsEkun9D&X-Amz-Signature=abdc2543d06f06838c388fadd7ee845a92c3bef8b1eb5df8e009adc972ee696f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KCI4UFO%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T082307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPdXnoo5c2mDT%2FWvK5tTY%2BAOq8kfomQrnHKUrvNp3nWgIhAIXEGz1pZr9eyCDIsIIX%2F9Gvo3uJd6Nat35TIwQV8mQrKv8DCHkQABoMNjM3NDIzMTgzODA1Igx%2F06BGj1Vr8rdrxKkq3APDzpKvkoPwnq%2Fh5BPaxlHk%2B2ZRRCVX766uoY3WBFrBkmgLJ5kKuZ6V9ONR8BaOTkdzqYagwO8WGbTGg%2B%2FphDf2p5%2Fk2WCLRJc4doC4Wc8S7RlP%2FtpGmwRPkwYMq5G2We8v%2BC28KoAyF88qn4MXf8RK0RFSQes4j2AczTXQQM8IMfSG5C8Jyi%2Bylarsilte0hE0L9ExfHsGOWCQn0CCDjv41Wa5dT9f%2B2je5e61gJ9aqbpQiJl%2F050ChFtBQqRvxNwaPyZNpIHKPMbssUXYSFAit2%2BmYfgFvLW9XO2lL10%2BsAurXMB44K74py0hEsy%2Bny8MCpTyzhj0Iv8BpWoqb836QFDTNJXbw6XfNbVT1OOSAF0FLmyjcZTPZVhv1ZK8yM5aH8ICqBA%2BR5otT0QauZA9nMETTwN4XXoUR5aAVvwA%2BCab%2FArzaFqMg4Yir%2BM6UtZm8AxhfzD6ouCUtPwSM90nxzQffTtWQSW6cLAUvVF42MXqyYZ9rReY6nemM51lq75Q2CU1hPKpmyGU6hSRSXuRWWFi3fJtd4kRJE4PNRZE4nivxMXLFhA3qsBVN%2FxXLP1hjUxj075%2Bowodeq5NDvvpMTkabLd2eZ80nLC9FAbA8bax5A0xbW8R%2Fn48DzDRt4nKBjqkAetCQNvvGwPJbHTyo%2FrdwvEfOZv45BVZAYTOubyUL9NFl5mLp%2Fnnj55jUfSSlFtPZQXUS7h6Au5Y%2FWbeyzvZbcNkdjNi9jCLfkLrVDe8YWub5PxJ00frBk1luhpbsHR%2BG39UtHOKXu5oPwNjolSoAry2wTlyDvAmpZmhHb5XTKfx3SS9swIOetf%2FnpzU0Bsw%2Fg87JfrJhGigy%2FGNYWT3QsEkun9D&X-Amz-Signature=8f35ddc3a31dd5a67a795d1bee35a4cfbba583960e3d3238a1b9f7862853544e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
