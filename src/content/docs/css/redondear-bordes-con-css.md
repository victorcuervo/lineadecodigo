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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652BIP5DG%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T114311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDhKbR7WPh9L2DEtsQ52YCtEga39HTEjYbiK%2FC7FcHv0wIgGRpJfaCGWB%2Fh0TB00afFmWX72AMOj0lA7F3M3jo7BbAqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMbhWYJHq8HpzSaYdSrcA9kQJaLU6wgnkI773Weo74r2f%2BZx6BZj%2F5GMhUlEsGSXYpNZcjpvi5N0hrTmWSddJqKUGTwENUh%2FD7LYMKHV4fPKmeOfZCcySoa2jCmdEDnmQyaqu31jXCeivifv66tZOSRWRBptdKJ6fzKdNgm%2Bf8WrCtMQ1HBShu3jDuYNIVa55b2vYX4d0WykcwYXrNIYH51TrlRNctSrVCtxNGKSqLwurYsrfdrJA6T8Uc4qJnMBKqvFrCGdgi0Gbhv4Uyk11Efi%2FocUo9ML09OdU%2B8YrxnKSwcP9qYfTjQposADJYeEKNAaTO8afNQu%2B4hWVe9H%2FEZfXUjtMVmavyjPGsaTdMUT7EK8B8iygOFqk23ZtNByFX0rwcfyGrWGr0wIypUeNtVqRwmGa85l5UNCg4fFUZuUCM7IDjnHK0JBSsr1SDEd9zJW48EyDUD4BNc7U88QE0wOcE6UUrSGkY3%2Fw346x0Wpx9v7bydvc8gjMAnbLI1WkvujxA2PtjK8nM%2B9jOdmKMjOMjNAgNqe67hQ3KZb4WuttZzNuLfGGaseuG9nQm84%2BjNgC3tisaqtJGLyVWLU9xjULevzZ0aeNVDqIUpOAPgmWXpHipF1u2zFC03n5dHWsWBhDcWgqB8wPTXaMJuZ1ckGOqUBNCWUbKnNA7SL49TJio5KXN58fCnM9Xj7lKlWMMCu27sIXs%2FR8%2Fky6DMeiCWZ5qTvUa5a%2FrGf9nnjRtjNsxvPXl0uxRLcpCpvGUkoLI9UFdotkN%2FXXACmTsJjwBoygnd4PPHEXm0C4TlkV6qb0MsgkwTGh72Xb54%2Fy0TmJrUmOozE50O54XLjjnfZ6N8tSat0gMVrARpeuk344qqHy2NzKVRuwEkP&X-Amz-Signature=3cb9fec62e706c6d9e922fe57fe5ea4c886fab29c01ab2b09c240dd8eb59122a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652BIP5DG%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T114311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDhKbR7WPh9L2DEtsQ52YCtEga39HTEjYbiK%2FC7FcHv0wIgGRpJfaCGWB%2Fh0TB00afFmWX72AMOj0lA7F3M3jo7BbAqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMbhWYJHq8HpzSaYdSrcA9kQJaLU6wgnkI773Weo74r2f%2BZx6BZj%2F5GMhUlEsGSXYpNZcjpvi5N0hrTmWSddJqKUGTwENUh%2FD7LYMKHV4fPKmeOfZCcySoa2jCmdEDnmQyaqu31jXCeivifv66tZOSRWRBptdKJ6fzKdNgm%2Bf8WrCtMQ1HBShu3jDuYNIVa55b2vYX4d0WykcwYXrNIYH51TrlRNctSrVCtxNGKSqLwurYsrfdrJA6T8Uc4qJnMBKqvFrCGdgi0Gbhv4Uyk11Efi%2FocUo9ML09OdU%2B8YrxnKSwcP9qYfTjQposADJYeEKNAaTO8afNQu%2B4hWVe9H%2FEZfXUjtMVmavyjPGsaTdMUT7EK8B8iygOFqk23ZtNByFX0rwcfyGrWGr0wIypUeNtVqRwmGa85l5UNCg4fFUZuUCM7IDjnHK0JBSsr1SDEd9zJW48EyDUD4BNc7U88QE0wOcE6UUrSGkY3%2Fw346x0Wpx9v7bydvc8gjMAnbLI1WkvujxA2PtjK8nM%2B9jOdmKMjOMjNAgNqe67hQ3KZb4WuttZzNuLfGGaseuG9nQm84%2BjNgC3tisaqtJGLyVWLU9xjULevzZ0aeNVDqIUpOAPgmWXpHipF1u2zFC03n5dHWsWBhDcWgqB8wPTXaMJuZ1ckGOqUBNCWUbKnNA7SL49TJio5KXN58fCnM9Xj7lKlWMMCu27sIXs%2FR8%2Fky6DMeiCWZ5qTvUa5a%2FrGf9nnjRtjNsxvPXl0uxRLcpCpvGUkoLI9UFdotkN%2FXXACmTsJjwBoygnd4PPHEXm0C4TlkV6qb0MsgkwTGh72Xb54%2Fy0TmJrUmOozE50O54XLjjnfZ6N8tSat0gMVrARpeuk344qqHy2NzKVRuwEkP&X-Amz-Signature=3fabc4ba13ce342523b4e88de663fe76d4e0d9902edf1f8616182e3b56711f6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
