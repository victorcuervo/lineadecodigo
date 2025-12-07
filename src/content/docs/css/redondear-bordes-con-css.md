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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XJRS4WS%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T113138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZf1bOxjVfqi1HGBzHZP1rD8VMZpnGynhPz7ukjiuJLwIhAJPj3Gry69uInx8cGiduJ5GXY26i6twtAuqwuQtxwoFgKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxTCAKxgvYHBcu7NJcq3APr5t2LXD97t7igt9U1CGPs6NUm70YndRayUu9DfTSd5LLW1UY5G7PH1qZhCSbESfoqMlOSoIRFz7oasotK65YpSk8pjU465PGbzqlW5z4nANWdf0d5dJRBjuE1lnAW2Dg6fypRdBsANAewgTawwRNy5XjP722CIzsW5y8GoViLnVFrFiCsBH1OW4AhV8t5ckUbNMIzN6jYRX5hnjLz9DSvrJecA%2F812KWijNJHndFzl168Pw5Fj0zxTx%2BlwOXxo%2Bj89d9Q855AMSM1TeLtleodgzfHoLWpue9aBJcT0ghNrgavy%2B%2B6G%2Fx33b5Gn65pRh%2Be2zJJWUKa5k1%2FFHVl%2FhT4nAlE2WvFafvp6DTXzJmDiHPXuJKmw4%2F2gFnbY93AY7453WL6x2KaxAFsKgev0g0yax1DRcKn50uNRc9OdHQhesGTsyTCskYLcc0w2hO%2F0dBesXbBLzzNzPZ6fxmnXm9jG5RB4yBKv4brukq3CtYjJcJONcdoOZ3l%2FSEEbbQq8yRKhpeom0uS0pQ1uOX9xIPcjErfSqYd67y7wswr1l06T8%2B%2B9bEw1oQz0pPTx1deG8HniRWtZ%2FWQ3DPKnut5Bxfhvo5u6s3TdBSqCKgU%2FmaAfJDzZmiXmKQSRTBTZTC%2BmtXJBjqkAa71jL%2FxoE01%2BEfuse%2FbztsXSjKXrQwscuXctsXdEen3Z6a3u2gSeyuSfwwTo0vU3xDavbwnqxrfwYlo0bTJBGaGFhdMIbAhI%2BLXeR8dnuHkDxyo%2FQDC4dts7mBNSGdr8eLQX%2Fdu4Jj26izU71KM3%2B%2FjBYPg6wA0ZJ6Gu%2BCNzCw0ghfUzd4EXQ3QwYmjr0QLw%2BwgmkioWOWO96qmG9DVBlYIhNFM&X-Amz-Signature=3123e934cbe06460b95f1d8db7b1333f985021c60145bfa714d3c43f876276f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XJRS4WS%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T113138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZf1bOxjVfqi1HGBzHZP1rD8VMZpnGynhPz7ukjiuJLwIhAJPj3Gry69uInx8cGiduJ5GXY26i6twtAuqwuQtxwoFgKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxTCAKxgvYHBcu7NJcq3APr5t2LXD97t7igt9U1CGPs6NUm70YndRayUu9DfTSd5LLW1UY5G7PH1qZhCSbESfoqMlOSoIRFz7oasotK65YpSk8pjU465PGbzqlW5z4nANWdf0d5dJRBjuE1lnAW2Dg6fypRdBsANAewgTawwRNy5XjP722CIzsW5y8GoViLnVFrFiCsBH1OW4AhV8t5ckUbNMIzN6jYRX5hnjLz9DSvrJecA%2F812KWijNJHndFzl168Pw5Fj0zxTx%2BlwOXxo%2Bj89d9Q855AMSM1TeLtleodgzfHoLWpue9aBJcT0ghNrgavy%2B%2B6G%2Fx33b5Gn65pRh%2Be2zJJWUKa5k1%2FFHVl%2FhT4nAlE2WvFafvp6DTXzJmDiHPXuJKmw4%2F2gFnbY93AY7453WL6x2KaxAFsKgev0g0yax1DRcKn50uNRc9OdHQhesGTsyTCskYLcc0w2hO%2F0dBesXbBLzzNzPZ6fxmnXm9jG5RB4yBKv4brukq3CtYjJcJONcdoOZ3l%2FSEEbbQq8yRKhpeom0uS0pQ1uOX9xIPcjErfSqYd67y7wswr1l06T8%2B%2B9bEw1oQz0pPTx1deG8HniRWtZ%2FWQ3DPKnut5Bxfhvo5u6s3TdBSqCKgU%2FmaAfJDzZmiXmKQSRTBTZTC%2BmtXJBjqkAa71jL%2FxoE01%2BEfuse%2FbztsXSjKXrQwscuXctsXdEen3Z6a3u2gSeyuSfwwTo0vU3xDavbwnqxrfwYlo0bTJBGaGFhdMIbAhI%2BLXeR8dnuHkDxyo%2FQDC4dts7mBNSGdr8eLQX%2Fdu4Jj26izU71KM3%2B%2FjBYPg6wA0ZJ6Gu%2BCNzCw0ghfUzd4EXQ3QwYmjr0QLw%2BwgmkioWOWO96qmG9DVBlYIhNFM&X-Amz-Signature=e43177ef9e61a34284658c9ef959b95e3a581f8fc35f2c37bfc0ba899e7c42ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
