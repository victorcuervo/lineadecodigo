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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UH7MKWHY%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T160512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDw3WWVBYBu8BDY8cDwYDSNr2woQuTBp4OxZ%2BJYBfhxbwIhALbqd09rhvbg%2FJSSi%2B5bs2qDM7UlJd2ogC%2B0ZjDi69SMKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzHWT%2FYz33Wt4KuKNEq3APE4HbbDGoPm%2Bhna734AH53jQVQYTf08E0s4SdnPLAL1WjQGwityPkS8hylPhE1CD3MoybqH2c1402qsaGv4QDjMCaR8Ch%2F8HLMbr5JASa%2FOkQV6pmRChatj1bESfPyQTpwclkwtaRX0cZmwYm9SdlGEguLy%2FAJ9qDrAIXpxjaw5oUk1YV%2BoLII52DlW4Y1lU07eR2BXjwq%2FChqAcrhX1RWKIsgCkfqYfpn1tAQp7bUpjlGVoB9tVYRUR9xkHhcTDI5vTCjjOPKwjD9xqo14VJqVrZAmHy1LQYn%2BIwDJld0Wf2FYzZVfctUG52hfB2l2olyaTQk9AwwixJx1gHHEcjV4gfCKLKp0A%2BjDZx3caA6ZYmMDe2fcfAStNbESDi%2BUAkqvtyi9XZ81nbVhGYZllSKcYgxsOeZpVr%2FtLf2nu3%2BdJE1wuZOsFthURZTv1%2BX%2F0oTSwovJdFF%2FS2pz9%2BGjupPMyI2hY0nbfyHF7jjTh2pZtg27Bk%2FNVHHQPEJJNHquWCOP%2FCYEaFkahsQBO2PHbgROdi%2BK9je87SXV5FqbhujmtsIqsC5GK46K4yJeYSbX1WwOg8rDgouL8Yq59jakMXePg2OFPWamZng132B5GaM8ubrI2ambFGPEOEBJjDvt9bJBjqkAbu%2FtuRdMHfvGfLI5r63%2BaAIYQ8jXI38lz1lNR0GnrCDxPayqkPMqH1vJStxRop5olHkLOe8g0ysLJT1m7eGTRZ7NZR5f9v9UzubGSpSfSqU5VwxxVQ%2FffBTHucXE3p5cSQq98eX21JQWfXuUoFIAnJ%2B1zXAmWKtN1iP8zW5My1a5Z2RV3UUtvoTGuR%2FFo6YyBJ0J3KsSCzF3FI6kcMNDxWM9vTY&X-Amz-Signature=791c82343ac1afe78577c6e137bcb748b8777908072f250c4a2d1cabd67bee6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UH7MKWHY%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T160512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDw3WWVBYBu8BDY8cDwYDSNr2woQuTBp4OxZ%2BJYBfhxbwIhALbqd09rhvbg%2FJSSi%2B5bs2qDM7UlJd2ogC%2B0ZjDi69SMKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzHWT%2FYz33Wt4KuKNEq3APE4HbbDGoPm%2Bhna734AH53jQVQYTf08E0s4SdnPLAL1WjQGwityPkS8hylPhE1CD3MoybqH2c1402qsaGv4QDjMCaR8Ch%2F8HLMbr5JASa%2FOkQV6pmRChatj1bESfPyQTpwclkwtaRX0cZmwYm9SdlGEguLy%2FAJ9qDrAIXpxjaw5oUk1YV%2BoLII52DlW4Y1lU07eR2BXjwq%2FChqAcrhX1RWKIsgCkfqYfpn1tAQp7bUpjlGVoB9tVYRUR9xkHhcTDI5vTCjjOPKwjD9xqo14VJqVrZAmHy1LQYn%2BIwDJld0Wf2FYzZVfctUG52hfB2l2olyaTQk9AwwixJx1gHHEcjV4gfCKLKp0A%2BjDZx3caA6ZYmMDe2fcfAStNbESDi%2BUAkqvtyi9XZ81nbVhGYZllSKcYgxsOeZpVr%2FtLf2nu3%2BdJE1wuZOsFthURZTv1%2BX%2F0oTSwovJdFF%2FS2pz9%2BGjupPMyI2hY0nbfyHF7jjTh2pZtg27Bk%2FNVHHQPEJJNHquWCOP%2FCYEaFkahsQBO2PHbgROdi%2BK9je87SXV5FqbhujmtsIqsC5GK46K4yJeYSbX1WwOg8rDgouL8Yq59jakMXePg2OFPWamZng132B5GaM8ubrI2ambFGPEOEBJjDvt9bJBjqkAbu%2FtuRdMHfvGfLI5r63%2BaAIYQ8jXI38lz1lNR0GnrCDxPayqkPMqH1vJStxRop5olHkLOe8g0ysLJT1m7eGTRZ7NZR5f9v9UzubGSpSfSqU5VwxxVQ%2FffBTHucXE3p5cSQq98eX21JQWfXuUoFIAnJ%2B1zXAmWKtN1iP8zW5My1a5Z2RV3UUtvoTGuR%2FFo6YyBJ0J3KsSCzF3FI6kcMNDxWM9vTY&X-Amz-Signature=f9cd093545be22c939c6b84c3adc1e47ba69e314ab93769667fc35907ae99944&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
