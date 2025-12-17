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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2JAGCPZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T083920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHNMPDudXWDLeqP8bzoyyA7u1WsrvXwGDCFllHubvcvxAiBbCJczqUfgmBXCnsN04Q0TWYWXRUP5PU9%2F%2BW%2F9LcA3eCr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIM4wwfebhy0HnJZKxpKtwDXYGzSL%2FAB6yy5i2idFOrZihYeIPRCMxkehG2Ucdes6MdjxliCnLV2Ckhu82ZffAhVXjl2SCmsho%2FT6tmdzmbABUZeQu9JIg%2BV5B7AxXyNP2dhu6NiI2yKLoZ4Xnf8luYnyp5OXFJkxWl3ep%2Fsizm0j29dXvcNJ3YQVJfi52zXWHPokpNRYVC%2FyhED3RVoGeZpxJwMe65J4irTWAaAEqSCrNQN8hX75gW5Id65o%2FrHxNl4IHTwJct9F5J8a7QVBE%2Bwc8SXEOcZVPA%2BHNymohoAhZfF2omzP%2FDhPkLxoAKuCVIhhvj9Rug%2Bh3g5rfx59cOiel0%2FYGKWuRwpQaFTGKQ0EBhKNHPGHbNNF5R5FaokxU%2Fe9n9HouLDBQFOH8%2Fs1zEn39mZEgtoZF20eI1peaVtngs9hhw0Pb3QsNv7HvwkOf%2BpL0p1RZsMfLk2vS%2F9NEoraytc3nQG8qDGprzBoR6ysHUF5hZWAVprSEpn9Jrsk50%2F63wt09lJ17EdAHvmCP94cEkhdJMagIscGyDWhYlON7fsLk0gtoSZc9W2T%2BOnR4qyPJFF%2BMVItYUZp4RcDMeQPPQBLLZpKKXx%2F0ZSXsD90mNZ0Pb%2FJWl4jkTgrwY7h5naKhpAOl4wTvn5FAwuNKJygY6pgHTIsb3FR0UDYLh3%2FPXKbQCi%2FrjHQ6OLN8HiQd2jVfzf0rGL7NQ4FvMv%2Bx5HPqiJPhKEu4WVq2gTJVsuYCLA5wX0u03yYjIVNnUSe35n3SBOEGobEQNSDHPgA8gAUF8bpTcS4g%2B%2BjFxV4uxaSvdxegr60W1YcJMHtFuSRITWzFNr0oZ2sVpxZeqV7pjH39%2FEOW5rYt%2BnWhVU%2Bah7TKMb7zqrXrgMy1Z&X-Amz-Signature=2ecedea5912e75cf2fdfd61ff15c4b5e27757d87c7f480820a4dad4363c9dceb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2JAGCPZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T083920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHNMPDudXWDLeqP8bzoyyA7u1WsrvXwGDCFllHubvcvxAiBbCJczqUfgmBXCnsN04Q0TWYWXRUP5PU9%2F%2BW%2F9LcA3eCr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIM4wwfebhy0HnJZKxpKtwDXYGzSL%2FAB6yy5i2idFOrZihYeIPRCMxkehG2Ucdes6MdjxliCnLV2Ckhu82ZffAhVXjl2SCmsho%2FT6tmdzmbABUZeQu9JIg%2BV5B7AxXyNP2dhu6NiI2yKLoZ4Xnf8luYnyp5OXFJkxWl3ep%2Fsizm0j29dXvcNJ3YQVJfi52zXWHPokpNRYVC%2FyhED3RVoGeZpxJwMe65J4irTWAaAEqSCrNQN8hX75gW5Id65o%2FrHxNl4IHTwJct9F5J8a7QVBE%2Bwc8SXEOcZVPA%2BHNymohoAhZfF2omzP%2FDhPkLxoAKuCVIhhvj9Rug%2Bh3g5rfx59cOiel0%2FYGKWuRwpQaFTGKQ0EBhKNHPGHbNNF5R5FaokxU%2Fe9n9HouLDBQFOH8%2Fs1zEn39mZEgtoZF20eI1peaVtngs9hhw0Pb3QsNv7HvwkOf%2BpL0p1RZsMfLk2vS%2F9NEoraytc3nQG8qDGprzBoR6ysHUF5hZWAVprSEpn9Jrsk50%2F63wt09lJ17EdAHvmCP94cEkhdJMagIscGyDWhYlON7fsLk0gtoSZc9W2T%2BOnR4qyPJFF%2BMVItYUZp4RcDMeQPPQBLLZpKKXx%2F0ZSXsD90mNZ0Pb%2FJWl4jkTgrwY7h5naKhpAOl4wTvn5FAwuNKJygY6pgHTIsb3FR0UDYLh3%2FPXKbQCi%2FrjHQ6OLN8HiQd2jVfzf0rGL7NQ4FvMv%2Bx5HPqiJPhKEu4WVq2gTJVsuYCLA5wX0u03yYjIVNnUSe35n3SBOEGobEQNSDHPgA8gAUF8bpTcS4g%2B%2BjFxV4uxaSvdxegr60W1YcJMHtFuSRITWzFNr0oZ2sVpxZeqV7pjH39%2FEOW5rYt%2BnWhVU%2Bah7TKMb7zqrXrgMy1Z&X-Amz-Signature=5e40c67d3b9380f45942c493465ecb6a8f8755585434067b9909ad211949a1df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
