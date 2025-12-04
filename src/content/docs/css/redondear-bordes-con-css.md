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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RSKFO67%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T100827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIDyshViIOrXM4wi%2BN3qbRoBK7UZFnUNlqFRearK4pR9HAiAwwnGH1jT4nGOa0Gzdpe%2BwVaJdOL6sfEqynSUTGRhVnCr%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMSPja%2F2tmENfbiyxfKtwDBiizMvOEqVvkm5rNW4wW%2B0B%2BHmXMk81A1VHrntLDZXYDLEBp4c3ETwk9q%2BBCyo6CjmFyyIfiXF4ozrAHYaW2pufoGFxXLSRRSQI%2BTukU%2F%2B%2FbP2N5FRYsRmBH5OvR0SanQBxMMrRpmkkOExs2lKGi0tBbiEnnhYhDet1QNj%2ByNCxWicDcJidQPBbIR6k3B79msq6BTniqfNvY%2BPBZuLTaapC%2B%2FcVJHl8ZGgCkZ%2BeLjgRV3C7YBxegx9I9L8valGiompDutFxZh%2F5A8WiuVyjZx9IiDvFxcOumpq8pBv97%2FlJien0wDaHI2eLbAlJkUx95v2itEj1NK31UwpKT0EjFTYRq5bwP%2FREj6EQJbADJL9f16dtV1wygKK1gGQng%2FyrTj7LITmbSGfPhoj8xwRCgw9JCr8nA0XjUzBiaCYIxkW6EqY5IQEroVtFnD9Le3CSle14gC1ug31ODOZsO2D2dm33m3LI1fzNMZ%2BbzqWXEo%2BNKb20A2LaTpxxbGqWK8nafa%2FiOBieOXdT8R5%2B%2BQO9szpwZIr1EEosZF5a21Asta8WkHnKGwXaGWIUZfe50EqfxvqzMrz60chAjtP6Ky1PiQIyr91XVvrxZAvL0oc0wFiIv%2FuKxQpna18iG4KIwgarFyQY6pgFDRdLNCYx88O%2FdMT3rUD%2Fp28qmPDGbnA29Q35Z0jCSGnwI4KBz5HP29v1m9C%2BOXOSRU%2FRN7fArhQVSOcIHeGWTMuGBpc%2F53aG%2Bb6pBAF0NCbVL9Czn2UGNC2vzdF3kF6fy3IbLd2g4JX46e0scb%2F0mEUe9zTE9f2PuYrnM0nZq3%2F5fPAlGLrm3kLqNwtVWkoY%2Foaw8385YNeY3cc%2BNT5AukzQDFnTJ&X-Amz-Signature=2adf352ac86f2ddb7c776fce6417a4a465de09d7b2a0396c81c6c21a3e518d27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RSKFO67%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T100827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIDyshViIOrXM4wi%2BN3qbRoBK7UZFnUNlqFRearK4pR9HAiAwwnGH1jT4nGOa0Gzdpe%2BwVaJdOL6sfEqynSUTGRhVnCr%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMSPja%2F2tmENfbiyxfKtwDBiizMvOEqVvkm5rNW4wW%2B0B%2BHmXMk81A1VHrntLDZXYDLEBp4c3ETwk9q%2BBCyo6CjmFyyIfiXF4ozrAHYaW2pufoGFxXLSRRSQI%2BTukU%2F%2B%2FbP2N5FRYsRmBH5OvR0SanQBxMMrRpmkkOExs2lKGi0tBbiEnnhYhDet1QNj%2ByNCxWicDcJidQPBbIR6k3B79msq6BTniqfNvY%2BPBZuLTaapC%2B%2FcVJHl8ZGgCkZ%2BeLjgRV3C7YBxegx9I9L8valGiompDutFxZh%2F5A8WiuVyjZx9IiDvFxcOumpq8pBv97%2FlJien0wDaHI2eLbAlJkUx95v2itEj1NK31UwpKT0EjFTYRq5bwP%2FREj6EQJbADJL9f16dtV1wygKK1gGQng%2FyrTj7LITmbSGfPhoj8xwRCgw9JCr8nA0XjUzBiaCYIxkW6EqY5IQEroVtFnD9Le3CSle14gC1ug31ODOZsO2D2dm33m3LI1fzNMZ%2BbzqWXEo%2BNKb20A2LaTpxxbGqWK8nafa%2FiOBieOXdT8R5%2B%2BQO9szpwZIr1EEosZF5a21Asta8WkHnKGwXaGWIUZfe50EqfxvqzMrz60chAjtP6Ky1PiQIyr91XVvrxZAvL0oc0wFiIv%2FuKxQpna18iG4KIwgarFyQY6pgFDRdLNCYx88O%2FdMT3rUD%2Fp28qmPDGbnA29Q35Z0jCSGnwI4KBz5HP29v1m9C%2BOXOSRU%2FRN7fArhQVSOcIHeGWTMuGBpc%2F53aG%2Bb6pBAF0NCbVL9Czn2UGNC2vzdF3kF6fy3IbLd2g4JX46e0scb%2F0mEUe9zTE9f2PuYrnM0nZq3%2F5fPAlGLrm3kLqNwtVWkoY%2Foaw8385YNeY3cc%2BNT5AukzQDFnTJ&X-Amz-Signature=7bf34d78cc8b20b2900b1575a9a5f51735e36d2361443f0783b758ed87df8cc6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
