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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDSMNSOX%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T081532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZfv0%2FzXyucefrDAj7iFgv95y6fEybVdepR7XEMZLqdQIhALQF1F2iRv2FbHW5Rl%2BcNMLgxVNKYDgWOmnn5VX90ugaKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgywG5Abq5hOUwZdUX0q3APlud1qrnd9Um5Xnb3p1jsQWurA%2BOPTH8%2F7vap%2FazYaV%2FjpYaxxJIQcArjUwPGXjcBqp9xcPqUNgFLO0VSHAaaG%2FpMR4wbeZ%2B5DDZsmKFSGujGm7zFEswxkAjL22QFP0E4fT%2F9%2Bg6XdHzrqmZqt%2F0FWYSQ5c2oKlqGNmzEF3hI6wErvO58hj%2Bi0NULotSWOlHrTxVzNODgHTCvnuR8ntWq%2Fm6h3cOrC6NK3Q0f%2BG9JfH7a1lNixa6elJcyqvxk6HBtVyNmAZ8ztzAhg33cpak7UWS4oDXK948NJkkxt2F2cO%2FcKB11Hjjh%2BayhfahfFxJEzrXm7TfbTZDNYr9QK%2FBbyiQEJVCdEddA2whzpeszooaYyqHeTGMCGvRU7KO3mRyTPCR5MTD5jIwkoKgM8TGbOj9vplGPKElR%2BmhL1yBMa7tM%2B0C1fNf%2F8zKbXhobwdsabF4xOXK1Yi3Y%2Fqg1BIzC2nNIR9wctNpg9d%2Fbs%2FrtVEuCQRVvr%2B%2BBS3BIYE%2Bcj4WoTpNr3%2BvSqER7OHWckOGfEiAlz6d7UXTyRbyzaBEAbO4DAqiGZr045T59smzprnLCnB47JVrs%2FN0aqelqUokzpAAIYjOyBJbhMZiJElDleY1cLOvHy%2BHlOBj3fXjCEpN%2FJBjqkAfo8awqKVbtQebSxF3E0c67xL7GOIHHEk08CXKDJ6fSFGFUbCkq7AsuWhHa0Pj3jvajU04Vkl94o%2Bcptkk0ZdRkT4mwWHpYFRhn0AYgGf9ldRGFO75o1cz%2BRrszFzNZECAoLiHz9hiBm17G40qfNaKVhM6CHYgioxV0aZVtRv6t8tajWoy%2FNW12FuTMAu70N1xQXYRbTfiQ4lDKbLcCgBbJT6A%2F6&X-Amz-Signature=284c46f207458fc768be41ca57445bcd9f7778d661e4e42af0dd82a4d469ba42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDSMNSOX%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T081532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZfv0%2FzXyucefrDAj7iFgv95y6fEybVdepR7XEMZLqdQIhALQF1F2iRv2FbHW5Rl%2BcNMLgxVNKYDgWOmnn5VX90ugaKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgywG5Abq5hOUwZdUX0q3APlud1qrnd9Um5Xnb3p1jsQWurA%2BOPTH8%2F7vap%2FazYaV%2FjpYaxxJIQcArjUwPGXjcBqp9xcPqUNgFLO0VSHAaaG%2FpMR4wbeZ%2B5DDZsmKFSGujGm7zFEswxkAjL22QFP0E4fT%2F9%2Bg6XdHzrqmZqt%2F0FWYSQ5c2oKlqGNmzEF3hI6wErvO58hj%2Bi0NULotSWOlHrTxVzNODgHTCvnuR8ntWq%2Fm6h3cOrC6NK3Q0f%2BG9JfH7a1lNixa6elJcyqvxk6HBtVyNmAZ8ztzAhg33cpak7UWS4oDXK948NJkkxt2F2cO%2FcKB11Hjjh%2BayhfahfFxJEzrXm7TfbTZDNYr9QK%2FBbyiQEJVCdEddA2whzpeszooaYyqHeTGMCGvRU7KO3mRyTPCR5MTD5jIwkoKgM8TGbOj9vplGPKElR%2BmhL1yBMa7tM%2B0C1fNf%2F8zKbXhobwdsabF4xOXK1Yi3Y%2Fqg1BIzC2nNIR9wctNpg9d%2Fbs%2FrtVEuCQRVvr%2B%2BBS3BIYE%2Bcj4WoTpNr3%2BvSqER7OHWckOGfEiAlz6d7UXTyRbyzaBEAbO4DAqiGZr045T59smzprnLCnB47JVrs%2FN0aqelqUokzpAAIYjOyBJbhMZiJElDleY1cLOvHy%2BHlOBj3fXjCEpN%2FJBjqkAfo8awqKVbtQebSxF3E0c67xL7GOIHHEk08CXKDJ6fSFGFUbCkq7AsuWhHa0Pj3jvajU04Vkl94o%2Bcptkk0ZdRkT4mwWHpYFRhn0AYgGf9ldRGFO75o1cz%2BRrszFzNZECAoLiHz9hiBm17G40qfNaKVhM6CHYgioxV0aZVtRv6t8tajWoy%2FNW12FuTMAu70N1xQXYRbTfiQ4lDKbLcCgBbJT6A%2F6&X-Amz-Signature=6cee6649f213295d6531d36737a1599989a5873b85c9dbcbced1e8a16fcec0b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
