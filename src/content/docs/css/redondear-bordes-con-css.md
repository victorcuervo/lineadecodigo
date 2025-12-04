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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZVTMKWZ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T164301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFLPw5DU%2BNMgA9Q8qI0cwS%2FlzGJx2%2BHWsrvjb%2FLDQlyQIhAKnBW0HXwkbfybHiMCVZrlIczH9i9CS3rrNjTLtVaSg%2FKv8DCEkQABoMNjM3NDIzMTgzODA1IgxPNdKjxClZLsULUV4q3AMtu%2B3VLh614tyEhK0S2oI4C62PhKZGx%2BJwm7C%2B6%2ByxPaHkjJ6D8AHWrVZib0%2FmJ79mc4sRQigzsdHhtpxkLoSpuzHuXGsoTjaerlr%2F7P7XA%2B205WBBmEHPrb5RmZbYl14a3cHKA%2B7lssXSMYY%2BlSOJzS8j8VwbR2EzRG%2F8YY2exFQcsUQ3aM9uLmnIGrYcGiMm6n6AnKmGllMJCFVAqZz6vHqn28SeYbowuAbkX9hAodavU%2BuLcEbyr8KDGS9v7pJfGs1c2AMhtfQbQl0c398nwwR9OgeZkwF%2Bnxqj%2BbVMf5tVkRo7Ka6sV%2Bzc6YAz4SoQtgmqAZ2Y5u83SuN6YDCNBG9PQHG7M8yQP0DwydNa13Nfo%2FmZDjsLkJ%2BL5U5f17TjrW4es6WzwsKYxN2tX4H9c%2BnsCb58InIlPxR0hz5%2FmIWQJ3DgAy09KRWrfAzW%2BfFm3T6jbFwjDGBKLgg42vaFJbwiQV4SD3HNV06p8SAugjWO6nOHIVaqkAt2LiZESYfhHmDLz84ZYswfi4oNCWa0J3z1WS3hOIXd5lT1GPDy98GVmSjNw97S70aAQ%2BV3b%2Bn7WuE%2BYBPDOpaogLkC%2FO3PB0Ab3TgLPw9NonYOKokwnOUF2ZQVbpgLxZhYizDQ28bJBjqkAVd6aK9zchUzBXchmIxTUN5UlfYtx6xN8%2FiwySM%2Bc3yrfMD%2FSjA7Guv4BbnNQa1KL51pXtiPvtxfPpMs6yxfy7mOn7yXCty6D8kl7s1q1BJmZDm0H%2BFrIOsxHCqwaPe4q20QNieD%2BDHHqqC5jjf92nyPem4nTum%2FVd%2FAQkjuSc1oPZZ04ZQ8B508Bs1%2F%2BbbVv4xcr6FraJCTkexUxHsTPeqlyQPz&X-Amz-Signature=6892dd025bda6300170daf103aa473b2fc4695d2affadadedb18d71887a80b5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZVTMKWZ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T164301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFLPw5DU%2BNMgA9Q8qI0cwS%2FlzGJx2%2BHWsrvjb%2FLDQlyQIhAKnBW0HXwkbfybHiMCVZrlIczH9i9CS3rrNjTLtVaSg%2FKv8DCEkQABoMNjM3NDIzMTgzODA1IgxPNdKjxClZLsULUV4q3AMtu%2B3VLh614tyEhK0S2oI4C62PhKZGx%2BJwm7C%2B6%2ByxPaHkjJ6D8AHWrVZib0%2FmJ79mc4sRQigzsdHhtpxkLoSpuzHuXGsoTjaerlr%2F7P7XA%2B205WBBmEHPrb5RmZbYl14a3cHKA%2B7lssXSMYY%2BlSOJzS8j8VwbR2EzRG%2F8YY2exFQcsUQ3aM9uLmnIGrYcGiMm6n6AnKmGllMJCFVAqZz6vHqn28SeYbowuAbkX9hAodavU%2BuLcEbyr8KDGS9v7pJfGs1c2AMhtfQbQl0c398nwwR9OgeZkwF%2Bnxqj%2BbVMf5tVkRo7Ka6sV%2Bzc6YAz4SoQtgmqAZ2Y5u83SuN6YDCNBG9PQHG7M8yQP0DwydNa13Nfo%2FmZDjsLkJ%2BL5U5f17TjrW4es6WzwsKYxN2tX4H9c%2BnsCb58InIlPxR0hz5%2FmIWQJ3DgAy09KRWrfAzW%2BfFm3T6jbFwjDGBKLgg42vaFJbwiQV4SD3HNV06p8SAugjWO6nOHIVaqkAt2LiZESYfhHmDLz84ZYswfi4oNCWa0J3z1WS3hOIXd5lT1GPDy98GVmSjNw97S70aAQ%2BV3b%2Bn7WuE%2BYBPDOpaogLkC%2FO3PB0Ab3TgLPw9NonYOKokwnOUF2ZQVbpgLxZhYizDQ28bJBjqkAVd6aK9zchUzBXchmIxTUN5UlfYtx6xN8%2FiwySM%2Bc3yrfMD%2FSjA7Guv4BbnNQa1KL51pXtiPvtxfPpMs6yxfy7mOn7yXCty6D8kl7s1q1BJmZDm0H%2BFrIOsxHCqwaPe4q20QNieD%2BDHHqqC5jjf92nyPem4nTum%2FVd%2FAQkjuSc1oPZZ04ZQ8B508Bs1%2F%2BbbVv4xcr6FraJCTkexUxHsTPeqlyQPz&X-Amz-Signature=dcc4239db55b59c5836c6814994d0e7852b061369ab339d570d4057549de4e19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
