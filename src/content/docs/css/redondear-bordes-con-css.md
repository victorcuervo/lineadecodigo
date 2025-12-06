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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKEMU4A6%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T024733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfdJwtck4hIhHqz6yY1fHOVmDkvF%2BfuWOxR1uogkDLEAIhAJIyjAyR6tXAEJtkuGa%2BfRYDimhgVAhfv2oadU5p496YKv8DCGwQABoMNjM3NDIzMTgzODA1IgwndMJr9xQFf6DlSwoq3ANr%2FWvv%2BbeP8T3Ul3jNw3TVtUhO51YZ1QUo1gMLl%2FyJGtThXwp8IBdQM7qd7L2UTiQg7oeMG1lXEJ4o25x5HjIN4NRWD9HyLRTElPRtBrvO7AMGvXDfYAxBUScHP6d5ZxdB4MuL46rb3LTUDMFGloABUgTmNKkiErrty1HfnAds9ZS7dbSkm%2BHa8IZsnirmq6cJGoBKLPEH98lByX5Qau0ACUVBzZaE2EmRiws2VXpNQOsmGfXYRVBvrjAC31p5P%2FaRGAlDueq0XkMe%2BtTJ1JNDwYNA4UIKffKHQPIAp3%2Bj1%2BfvQmMpLNKw7CQCrMYu4OVbbU4KneDtGNrWfW5G%2B2BptYwqOMLeyGZaX9ZRO5r4xfHID7LFRtfp4FbpC8SNozMROMxRHF6D0cqCsufb5TSYY2RLKTIQpxPB%2BxQUAgIdEenR0DKMDJIDoxkSQGvX1XwDYLM7CsJn%2FynaeM%2FMt5hsOg0I4aYVyncXfYNra3zAf6GErrKmVkBc3GZcZcINnhrdVjkCMEqPjpatnZG7wUDwwq%2BwtLVVQvUlgVxB1FvPBElKxCwSrpkgANapNzwdNNx8IdSWrh0W%2BTR3p%2FLLwqKpLiXrKBXwSXwy6CKZPAov76socEGPtF%2B2zvQDVzC3p87JBjqkAdyRRAynw9oDhdQWczC6RYVxZW6t0SfTTi2ynBkrC46PULyKpL7pA0%2BsBnfOzLmf3zvxtAmQOyDFhFkUKc7FCU66DGk46bxNQ2l1dhkhdpON3Yll0pY3kJwJstZZaU3bpEmcbEdEr3lc2ZcgdAE3SllxOgCzbWfCSfv2mGAvmZExw9OazkxjtIO1yAt32hmM5IrKNXoVHIdIDGaIhKp9szFhcJ0h&X-Amz-Signature=62a114e7385319258cf0d3e6bee83188025c3db699adf8e541f6e224c151166d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKEMU4A6%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T024733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfdJwtck4hIhHqz6yY1fHOVmDkvF%2BfuWOxR1uogkDLEAIhAJIyjAyR6tXAEJtkuGa%2BfRYDimhgVAhfv2oadU5p496YKv8DCGwQABoMNjM3NDIzMTgzODA1IgwndMJr9xQFf6DlSwoq3ANr%2FWvv%2BbeP8T3Ul3jNw3TVtUhO51YZ1QUo1gMLl%2FyJGtThXwp8IBdQM7qd7L2UTiQg7oeMG1lXEJ4o25x5HjIN4NRWD9HyLRTElPRtBrvO7AMGvXDfYAxBUScHP6d5ZxdB4MuL46rb3LTUDMFGloABUgTmNKkiErrty1HfnAds9ZS7dbSkm%2BHa8IZsnirmq6cJGoBKLPEH98lByX5Qau0ACUVBzZaE2EmRiws2VXpNQOsmGfXYRVBvrjAC31p5P%2FaRGAlDueq0XkMe%2BtTJ1JNDwYNA4UIKffKHQPIAp3%2Bj1%2BfvQmMpLNKw7CQCrMYu4OVbbU4KneDtGNrWfW5G%2B2BptYwqOMLeyGZaX9ZRO5r4xfHID7LFRtfp4FbpC8SNozMROMxRHF6D0cqCsufb5TSYY2RLKTIQpxPB%2BxQUAgIdEenR0DKMDJIDoxkSQGvX1XwDYLM7CsJn%2FynaeM%2FMt5hsOg0I4aYVyncXfYNra3zAf6GErrKmVkBc3GZcZcINnhrdVjkCMEqPjpatnZG7wUDwwq%2BwtLVVQvUlgVxB1FvPBElKxCwSrpkgANapNzwdNNx8IdSWrh0W%2BTR3p%2FLLwqKpLiXrKBXwSXwy6CKZPAov76socEGPtF%2B2zvQDVzC3p87JBjqkAdyRRAynw9oDhdQWczC6RYVxZW6t0SfTTi2ynBkrC46PULyKpL7pA0%2BsBnfOzLmf3zvxtAmQOyDFhFkUKc7FCU66DGk46bxNQ2l1dhkhdpON3Yll0pY3kJwJstZZaU3bpEmcbEdEr3lc2ZcgdAE3SllxOgCzbWfCSfv2mGAvmZExw9OazkxjtIO1yAt32hmM5IrKNXoVHIdIDGaIhKp9szFhcJ0h&X-Amz-Signature=4abdcd7793b51faa786278c51b99ab0fb81974cf1dc2f0a09beff40f4b501620&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
