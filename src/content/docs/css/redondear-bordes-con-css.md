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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIYVZLUH%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T010903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1XPBZXItO0XH7amO7pMcR%2F0cKGw0iPFDsiDI8P20ZiQIhAK0r%2FMCOjgycqC6zTCPRRz7Jns1sct%2FDQUCfFCk8pdgqKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy3fYY6p1gwzDkKW8kq3AOnG%2B3LcV0YUDKmnTdH%2Bxs%2FiF4gl1Lqlr%2BI2lOtkmedo9NexH%2BUKc%2BqNuciM2HoRhL3XRFe9G75t%2Bq%2Bqc9vFtVhMpcmYk6W20ONLMja2EXioSkV3oVR0eAQIAztjKm2Ja8RdAgilUhtaDMtEhSEtnWDhuRceeS5h%2Bm2mcDyOfZB7T3HQQ12lPiKil%2F1m3untiLOFP6ku2ljlfGVNeTN1gnPSy6vxqZs8czj9l6Zmi0Yc9549hbtTSZ2c6VpklA2c1tlD1KkOKvD0vLwC6UK4ajkGkE2QbVOp4nq%2FtFiOEWOeBUNV%2B9KmQYKKYYalHYe7dU2KwsVuT4ZbMVeuLHYLkUMpymqVE4t%2BRgcrdLlXcWB5HCZpJu6AFb5%2BCOeCSq%2Boh4%2B7%2Fbe9aB8kcy8T2i6crB2%2FgP%2F%2BxNR6jZYw2KpR8VU6q2SH1SMtEIH3dR%2F1V8uHhIPbR3b%2FpwHwh3cXOk8AekCaD%2BiCCIGSVr1GhLz3979AuOP%2BDmf73tb%2BG88f3u41an%2BhpOKHkiCXoPy6C3Eg%2FVHy6LTzyurNgHnytjnF8pQJfDWYE%2Fj8ta6lAyLOPaYnpikR1%2FZ3L4suX%2FxikDF%2BzgY7FYtIebZ%2ByMF%2BNWcySDxrtdzdeMT9vuLq5EG1jDS%2FdLJBjqkAVAGyP%2BvGxpvmeUu4JcMQeUxtTsKgRWc6s%2BwF90VzxdvoopLmfYq3eQzu%2BXEKqxvn8AUUij5QRTRTX5nCWt2y11SrciROUhbtWVvvj699SPPl32a2LVsQNdMlUtdS8aUj2Vrcjj%2BQWQZGL7HfWqB00pBWNEUoKTu3hHHtpzy2EH8tYeYEJTPBSu02s%2BNR8J0yNRKZSMZitFHiSSiKEGAsBQO8N34&X-Amz-Signature=6b6bd1d931055d80fb1210e9ee55146b94bcd65b4fe50eaea27d507a806d8741&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIYVZLUH%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T010903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1XPBZXItO0XH7amO7pMcR%2F0cKGw0iPFDsiDI8P20ZiQIhAK0r%2FMCOjgycqC6zTCPRRz7Jns1sct%2FDQUCfFCk8pdgqKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy3fYY6p1gwzDkKW8kq3AOnG%2B3LcV0YUDKmnTdH%2Bxs%2FiF4gl1Lqlr%2BI2lOtkmedo9NexH%2BUKc%2BqNuciM2HoRhL3XRFe9G75t%2Bq%2Bqc9vFtVhMpcmYk6W20ONLMja2EXioSkV3oVR0eAQIAztjKm2Ja8RdAgilUhtaDMtEhSEtnWDhuRceeS5h%2Bm2mcDyOfZB7T3HQQ12lPiKil%2F1m3untiLOFP6ku2ljlfGVNeTN1gnPSy6vxqZs8czj9l6Zmi0Yc9549hbtTSZ2c6VpklA2c1tlD1KkOKvD0vLwC6UK4ajkGkE2QbVOp4nq%2FtFiOEWOeBUNV%2B9KmQYKKYYalHYe7dU2KwsVuT4ZbMVeuLHYLkUMpymqVE4t%2BRgcrdLlXcWB5HCZpJu6AFb5%2BCOeCSq%2Boh4%2B7%2Fbe9aB8kcy8T2i6crB2%2FgP%2F%2BxNR6jZYw2KpR8VU6q2SH1SMtEIH3dR%2F1V8uHhIPbR3b%2FpwHwh3cXOk8AekCaD%2BiCCIGSVr1GhLz3979AuOP%2BDmf73tb%2BG88f3u41an%2BhpOKHkiCXoPy6C3Eg%2FVHy6LTzyurNgHnytjnF8pQJfDWYE%2Fj8ta6lAyLOPaYnpikR1%2FZ3L4suX%2FxikDF%2BzgY7FYtIebZ%2ByMF%2BNWcySDxrtdzdeMT9vuLq5EG1jDS%2FdLJBjqkAVAGyP%2BvGxpvmeUu4JcMQeUxtTsKgRWc6s%2BwF90VzxdvoopLmfYq3eQzu%2BXEKqxvn8AUUij5QRTRTX5nCWt2y11SrciROUhbtWVvvj699SPPl32a2LVsQNdMlUtdS8aUj2Vrcjj%2BQWQZGL7HfWqB00pBWNEUoKTu3hHHtpzy2EH8tYeYEJTPBSu02s%2BNR8J0yNRKZSMZitFHiSSiKEGAsBQO8N34&X-Amz-Signature=a9e806651759aa35867eed3fc954e7618dcae4e1287bb17348d20547b2031586&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
