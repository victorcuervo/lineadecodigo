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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXJQHPA3%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T044849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCc%2BIuo6%2FF1B1tUGqGu9GWdkyKqfWyqjVNDPeW7fFO15gIhAK3frhTeEMjCGCtqvqgmcqOtdXzmevJz6WTzp%2Bb8BZeXKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxhvTJw6dXfDvlJoXMq3AO1pFs2nJy86ro1sLmrWeZgv0FZC42s32JqFlH6lKj2S3Uw2uaX80spxMZe6MNPw0HbPfuFqEexsqh133KlIdCK%2BFxP8RDXR7HrWC%2BSDgQ3lM9dmzpFDY35647PRvEpvfkNkEi%2FADIbH01b%2FDiYws%2BF4CL9V%2Blnh9bvgHR4OFFIfqPRUj4FxM9duzT4326TF6UsFeaPgj28gRA8QBdrCOyeiW%2BoBzvAmQ9EuzcPGf5wxYRwNvZqBby6cxtB0xrsojPvrFoyztxHBJnDU5rNkwT6nx1AOsKvQO%2BSuBK7bsDQ2ykMHWEUS4suXsgym4qjROj08QUA5Iq9A43S41GJwEYRsnG87EAeaFIBEAeQftjgP96SF2AXvSw5JwbvKFjwAoP6XiKpSNSAaRtlqJFdJ5FcnNvUTxw6rpmeLlSBebY7%2BbSiRMFN5bsH4HrTSZI%2Fi2x7h8WSe0Fe25iyiazJlQNXSIDJyTAtWoLKMqJQmBOCD5VgSWsCHStJmSWRKQXEJDAWvMJy9kzvBea8Sp9ZMZGn9pxLGn5B3MsD1xcw8H5DZfQTcdVxMgl8H41vEmFNbO6cjwjlGa%2Fz2biu%2BnmJ03T0z5AWW3gAiijcLJuYl0WLuWIGz6vFHmyGlnezXTCZ%2FdLJBjqkAYbTOiYKpWbfkpsk4tKAOWex2%2BAS7aBe41Vh%2Bb7HEOiq7ZMObAt1Sib7aX%2BgEMSfYoRc44wiMTH2spvSyUUzZfdRljgJY81KRDZRYqbbL8fBtYo1HY4%2FFjhqnqfc5yaFfbEIHGa%2Fpu4DZBGubUH0kdQrls5%2FYrlNb5ezCUzwWs0o7u8YiuQvDUN2B3s5CStorhYilq25milqHFM0MnrgAg5JdU%2FN&X-Amz-Signature=2c5b04c811b70c83b050087ac43a25ac0b531a43255bb5de403b1cc7578ac286&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXJQHPA3%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T044849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCc%2BIuo6%2FF1B1tUGqGu9GWdkyKqfWyqjVNDPeW7fFO15gIhAK3frhTeEMjCGCtqvqgmcqOtdXzmevJz6WTzp%2Bb8BZeXKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxhvTJw6dXfDvlJoXMq3AO1pFs2nJy86ro1sLmrWeZgv0FZC42s32JqFlH6lKj2S3Uw2uaX80spxMZe6MNPw0HbPfuFqEexsqh133KlIdCK%2BFxP8RDXR7HrWC%2BSDgQ3lM9dmzpFDY35647PRvEpvfkNkEi%2FADIbH01b%2FDiYws%2BF4CL9V%2Blnh9bvgHR4OFFIfqPRUj4FxM9duzT4326TF6UsFeaPgj28gRA8QBdrCOyeiW%2BoBzvAmQ9EuzcPGf5wxYRwNvZqBby6cxtB0xrsojPvrFoyztxHBJnDU5rNkwT6nx1AOsKvQO%2BSuBK7bsDQ2ykMHWEUS4suXsgym4qjROj08QUA5Iq9A43S41GJwEYRsnG87EAeaFIBEAeQftjgP96SF2AXvSw5JwbvKFjwAoP6XiKpSNSAaRtlqJFdJ5FcnNvUTxw6rpmeLlSBebY7%2BbSiRMFN5bsH4HrTSZI%2Fi2x7h8WSe0Fe25iyiazJlQNXSIDJyTAtWoLKMqJQmBOCD5VgSWsCHStJmSWRKQXEJDAWvMJy9kzvBea8Sp9ZMZGn9pxLGn5B3MsD1xcw8H5DZfQTcdVxMgl8H41vEmFNbO6cjwjlGa%2Fz2biu%2BnmJ03T0z5AWW3gAiijcLJuYl0WLuWIGz6vFHmyGlnezXTCZ%2FdLJBjqkAYbTOiYKpWbfkpsk4tKAOWex2%2BAS7aBe41Vh%2Bb7HEOiq7ZMObAt1Sib7aX%2BgEMSfYoRc44wiMTH2spvSyUUzZfdRljgJY81KRDZRYqbbL8fBtYo1HY4%2FFjhqnqfc5yaFfbEIHGa%2Fpu4DZBGubUH0kdQrls5%2FYrlNb5ezCUzwWs0o7u8YiuQvDUN2B3s5CStorhYilq25milqHFM0MnrgAg5JdU%2FN&X-Amz-Signature=fcb078d1748323b330b7f745fa326269b900391a6430bf3f5b91b54301e9e5e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
