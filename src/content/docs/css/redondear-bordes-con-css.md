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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYNGNTK2%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T220649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDhO0QCPgB%2B69UuSo%2BpWVYEtlAMQ3NIHj9uOuXAWN0A%2BgIgfFzEnr5oPjA9M6E9wvOToJ1l1ecHmA9YTucp7BG5oYwqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBqm5koZAinpHTYOcyrcAyBNcxuNpXQOrHp9gThbstJFxRgHIvuZN%2BAAH7YTf22e1l2LsFp3z8mTMQUnzdpzsdePO1EArQyPKxtXiTwRFLie32X2rI0nMMHOARTtWv9ycFI%2BPnh2t2hkQx%2B7Te1OknC1Yv4V5givrMZaOnwqW62Dn3zFhVGElfqtDDfyeUY1sVw1tISqEsW6fTp3u2MgK4Hwsqv%2FRkieF7UG9nm8r4bMwUA3jbzXm7Xc2KmGb73E2uy1%2BpSCGdLyGlIZkCoF32y9hwVohHc%2BO6c7NtcOaf7U1oQCi96p27hAgAKnnY21%2BwJSpNY85FS8BaTwAuL9ZlLgBZgihSY4BPDJTRso916CP2n8OafH8IWtHs4edwSD%2BGrO%2BPl%2FpeWIfiMlysJEABFAj7KCPE7E5Iv0WZbbudfsQNRDKt01BYULxpyxm2oPjraaVQsvIP2c63grASgKb96yyWrEAwkPl97wmhOBVnQkM2XyIBYT6G%2FOGLc8Q5weVzzYdda%2BUkwDCZUbHg8sOswBkd4uzwSrn8RQMY9auLWfrCv8lKvQb4SB0wzpy2cC8b%2B1TGYU8bAsvmFqsCmypoGDRtzJuUzOdtkljfJ6Wl1WNJdyT5VTmFSEk7CUqnTPneiNZ98vxZJByTCbMMiA3ckGOqUBRKUY0Ax1gmSztW8yqS3cZJ8cpriE%2Fak7EjGQua0rOLc96YHAhiw6yyuG3gqPuBXgjHhyF8B8usO2Ge5%2BFp%2Fwe5fDie9tpaP9QaPfdB836YdUE%2FPZH8JST0HsivCI2UnSE%2Blw25MhY4Gpss2pyhEd2Na3I1ut%2FfO%2BbXO9QOfJNr9S18fqc2mMliej5OTyBf2eCgYxHK5MNlzT07doThopukJHv%2BQK&X-Amz-Signature=96d72c0ea3bd84adfd7eaac2c86de3ab44d8a29d60bbc97e2ad23fbebb318f4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYNGNTK2%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T220649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDhO0QCPgB%2B69UuSo%2BpWVYEtlAMQ3NIHj9uOuXAWN0A%2BgIgfFzEnr5oPjA9M6E9wvOToJ1l1ecHmA9YTucp7BG5oYwqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBqm5koZAinpHTYOcyrcAyBNcxuNpXQOrHp9gThbstJFxRgHIvuZN%2BAAH7YTf22e1l2LsFp3z8mTMQUnzdpzsdePO1EArQyPKxtXiTwRFLie32X2rI0nMMHOARTtWv9ycFI%2BPnh2t2hkQx%2B7Te1OknC1Yv4V5givrMZaOnwqW62Dn3zFhVGElfqtDDfyeUY1sVw1tISqEsW6fTp3u2MgK4Hwsqv%2FRkieF7UG9nm8r4bMwUA3jbzXm7Xc2KmGb73E2uy1%2BpSCGdLyGlIZkCoF32y9hwVohHc%2BO6c7NtcOaf7U1oQCi96p27hAgAKnnY21%2BwJSpNY85FS8BaTwAuL9ZlLgBZgihSY4BPDJTRso916CP2n8OafH8IWtHs4edwSD%2BGrO%2BPl%2FpeWIfiMlysJEABFAj7KCPE7E5Iv0WZbbudfsQNRDKt01BYULxpyxm2oPjraaVQsvIP2c63grASgKb96yyWrEAwkPl97wmhOBVnQkM2XyIBYT6G%2FOGLc8Q5weVzzYdda%2BUkwDCZUbHg8sOswBkd4uzwSrn8RQMY9auLWfrCv8lKvQb4SB0wzpy2cC8b%2B1TGYU8bAsvmFqsCmypoGDRtzJuUzOdtkljfJ6Wl1WNJdyT5VTmFSEk7CUqnTPneiNZ98vxZJByTCbMMiA3ckGOqUBRKUY0Ax1gmSztW8yqS3cZJ8cpriE%2Fak7EjGQua0rOLc96YHAhiw6yyuG3gqPuBXgjHhyF8B8usO2Ge5%2BFp%2Fwe5fDie9tpaP9QaPfdB836YdUE%2FPZH8JST0HsivCI2UnSE%2Blw25MhY4Gpss2pyhEd2Na3I1ut%2FfO%2BbXO9QOfJNr9S18fqc2mMliej5OTyBf2eCgYxHK5MNlzT07doThopukJHv%2BQK&X-Amz-Signature=f8d5525cbfa63e8dae505c5505ea4d811167183f412d23a73eecebcc7d673c34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
