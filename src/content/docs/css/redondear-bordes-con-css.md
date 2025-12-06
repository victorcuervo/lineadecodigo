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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVC34OPL%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T225400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAFxEadYoPGoI5MVJNMH3mBJiSVZ%2FJ7TBNNqeNVk8o0kAiB2CskGndJMqaqQo60FlQVLhBRx9AHbIVzWHJeb17y2Dir%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIM3U7aA7TXWP5GNzKmKtwDwwcSzIwe0ijqdtAeAMwEwPiUCLAbfO4jLXv7Yp%2F3zTST0ES%2BMznDuCro8JN77VSz0P%2BmS1UrF2GYm9HP%2BlkeuwxKcAT7qmr5l5H2B5hMu9yy5%2FleIk098yoy19TOVetJGN346AjV%2B4ATBXdaQEIx9FvRSmOvNkAeAlRpFY6eMn7Dr2GXAk%2BIXGb0%2FFB4EO%2FbQXMdXnQagpx%2BorgGeRkdKnp2u7ERG7bhV7S%2BNr1JdqOh%2B9rzWcHpUKwhD6GyiBjPJnfuWknUh%2FU%2F%2FYv0wvMR2UdcdjMWCSmUn1K6RFCKEAMY5rxVraYISasdqBUsg9d9keYJGiFU6OurBTHgen9gm8uPFUZisr1LAkyECnr%2Ftsh0fyTOub3%2BK2ZQkyJSMxp%2BfblXM3Ycu%2FXZlj3U2m9YojwHlc2Z8sKvCT%2FZdzn1WcR1d5vn6yLt%2FhfADu%2FajQF24NGklhQqEM2rQeEEFdK5yO1c5Jm%2BFIjZe32Np0vuCZaybrGAE6oUpRFmI3GTuP21MJ%2BwaA1M6zF7S5yT0quJp0le2d4gchJNOyZldY9QgsLlBjbMHcM9yTwpGq8%2FV4GBUM8esd61gaVUz9HMrpcXFD4DNuae1jiXrliTXbGM2fapAVBX%2FTeIi5jf97wwtNPSyQY6pgFNqSdBGSRtM04zh4mfGxJytMYwShla62ewfurXkkCmnI8ziW%2ByGB80cjVzKUJORK9kzBKj1fIJxWKHnJGI7%2FFvNAfnD0Y1zwlJOS6XJ3x97Qj7PQHbqgulPK4Z2BQr24jbqLU7FLgg28IYSKWrViLY%2FJhnVO8nN9w7xdhbcYk%2FV0OCI9yTb8Va9XWtwOIPQwdKed0tfMCxcpRFQoeQmC02HTP9dl%2F8&X-Amz-Signature=ab8726a03c42ff2bcf4065f4efaecc0945ded54a570e2b97b46e439a6b8757d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVC34OPL%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T225400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAFxEadYoPGoI5MVJNMH3mBJiSVZ%2FJ7TBNNqeNVk8o0kAiB2CskGndJMqaqQo60FlQVLhBRx9AHbIVzWHJeb17y2Dir%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIM3U7aA7TXWP5GNzKmKtwDwwcSzIwe0ijqdtAeAMwEwPiUCLAbfO4jLXv7Yp%2F3zTST0ES%2BMznDuCro8JN77VSz0P%2BmS1UrF2GYm9HP%2BlkeuwxKcAT7qmr5l5H2B5hMu9yy5%2FleIk098yoy19TOVetJGN346AjV%2B4ATBXdaQEIx9FvRSmOvNkAeAlRpFY6eMn7Dr2GXAk%2BIXGb0%2FFB4EO%2FbQXMdXnQagpx%2BorgGeRkdKnp2u7ERG7bhV7S%2BNr1JdqOh%2B9rzWcHpUKwhD6GyiBjPJnfuWknUh%2FU%2F%2FYv0wvMR2UdcdjMWCSmUn1K6RFCKEAMY5rxVraYISasdqBUsg9d9keYJGiFU6OurBTHgen9gm8uPFUZisr1LAkyECnr%2Ftsh0fyTOub3%2BK2ZQkyJSMxp%2BfblXM3Ycu%2FXZlj3U2m9YojwHlc2Z8sKvCT%2FZdzn1WcR1d5vn6yLt%2FhfADu%2FajQF24NGklhQqEM2rQeEEFdK5yO1c5Jm%2BFIjZe32Np0vuCZaybrGAE6oUpRFmI3GTuP21MJ%2BwaA1M6zF7S5yT0quJp0le2d4gchJNOyZldY9QgsLlBjbMHcM9yTwpGq8%2FV4GBUM8esd61gaVUz9HMrpcXFD4DNuae1jiXrliTXbGM2fapAVBX%2FTeIi5jf97wwtNPSyQY6pgFNqSdBGSRtM04zh4mfGxJytMYwShla62ewfurXkkCmnI8ziW%2ByGB80cjVzKUJORK9kzBKj1fIJxWKHnJGI7%2FFvNAfnD0Y1zwlJOS6XJ3x97Qj7PQHbqgulPK4Z2BQr24jbqLU7FLgg28IYSKWrViLY%2FJhnVO8nN9w7xdhbcYk%2FV0OCI9yTb8Va9XWtwOIPQwdKed0tfMCxcpRFQoeQmC02HTP9dl%2F8&X-Amz-Signature=2258dc9d3d3381e2feb7339e80200e3418e9d1ccfafc549bb95e3be3af150579&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
