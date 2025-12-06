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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Y45SV3Z%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T094627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZxrOcVbcKZY%2B7iRlXY3mgctMtCjXNNzO1C423FgUJ4AIhAMzPtZiVcuPfxGGPMecOOfjCYO4OfAr3kl1H8XIftiLQKv8DCHIQABoMNjM3NDIzMTgzODA1IgyhA8mvr%2FNQMPFJnSoq3APtJeIouzTjr%2F6tEuAKYfIWgnt6qjPvp1%2BfTf9RpX%2FNHRyLHXIDq0XZiCcTk1HSr853Nj8g2MQzPHoUl1ljseOGO48rZvGVkaA3Fs5MQ%2F7yAARcJheXwvd5BPaefNKG3%2B0tSa0mTbLP2iwnFUgBp7r16YHebrvVtT8YxGzFHBha4vcbm1F%2FpbFxqkX4AkTbm3VP774cCC1CXzNQRrOW%2FbZIFFR%2FlY3kaPEFi4cby4LdQXmNneVmSmEkc%2Bhrd7PuAe4FqS28xNZ04gLGRkeL4XDRm4P0cXZjgZiOw7wJT8DPPsgxzDgNJ5LIAO%2BugidW9JdNpE60HgKD1E%2FYWqpZtleE9oufbEXYPywneBuQF0PPZTpDJHmSAaK540RG4cUKH9EfJ2XBq5gLxkiRAZusfnqIssWR4TkstUtg35XnnWSlKQNs6ljHjEdhC56emEQ1rTjFsc1tfWdJqDpTdjmsPXZqbkKZZdsW1VjOoD%2FPstbEBGE5XlOfDCdU1St%2BNGdl1iA2gWgd50pDH1S1ZlNi7ofwvhQbHj%2Fe5LcVEv6K81D9FS7AO%2BhzjikY8ERu766cxloOeJDCWpfkKmiWRlpD2AaTLvkvn%2FWfMb0iJHZ1%2FoMpEIPbrB7ZA5g9FNMDzzCj68%2FJBjqkAfmq4%2BmlbXWNMKUYbBEDd6X7mwCFDB47bRAksEr9Oec%2B%2B7Ajt0m%2BtzERf3VydfdZg7SNnHAcOQLucZfGlpUOT3ulC2WfgDqYJnlNGyi9x8Q703MA%2BD95ZU4vM4Ptvn6ikSLasRqtWHhl5Pz%2BzcuTYL2GetNaJVJ6KINa2NWIEM6P8l91QQQBHG6961efSCniczUfQ0SdvqQfEGwUbHXqeujIVUH7&X-Amz-Signature=7239efd03283f66e690145f73662632b62e7c78bf74748a1477554cb6c08046b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Y45SV3Z%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T094627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZxrOcVbcKZY%2B7iRlXY3mgctMtCjXNNzO1C423FgUJ4AIhAMzPtZiVcuPfxGGPMecOOfjCYO4OfAr3kl1H8XIftiLQKv8DCHIQABoMNjM3NDIzMTgzODA1IgyhA8mvr%2FNQMPFJnSoq3APtJeIouzTjr%2F6tEuAKYfIWgnt6qjPvp1%2BfTf9RpX%2FNHRyLHXIDq0XZiCcTk1HSr853Nj8g2MQzPHoUl1ljseOGO48rZvGVkaA3Fs5MQ%2F7yAARcJheXwvd5BPaefNKG3%2B0tSa0mTbLP2iwnFUgBp7r16YHebrvVtT8YxGzFHBha4vcbm1F%2FpbFxqkX4AkTbm3VP774cCC1CXzNQRrOW%2FbZIFFR%2FlY3kaPEFi4cby4LdQXmNneVmSmEkc%2Bhrd7PuAe4FqS28xNZ04gLGRkeL4XDRm4P0cXZjgZiOw7wJT8DPPsgxzDgNJ5LIAO%2BugidW9JdNpE60HgKD1E%2FYWqpZtleE9oufbEXYPywneBuQF0PPZTpDJHmSAaK540RG4cUKH9EfJ2XBq5gLxkiRAZusfnqIssWR4TkstUtg35XnnWSlKQNs6ljHjEdhC56emEQ1rTjFsc1tfWdJqDpTdjmsPXZqbkKZZdsW1VjOoD%2FPstbEBGE5XlOfDCdU1St%2BNGdl1iA2gWgd50pDH1S1ZlNi7ofwvhQbHj%2Fe5LcVEv6K81D9FS7AO%2BhzjikY8ERu766cxloOeJDCWpfkKmiWRlpD2AaTLvkvn%2FWfMb0iJHZ1%2FoMpEIPbrB7ZA5g9FNMDzzCj68%2FJBjqkAfmq4%2BmlbXWNMKUYbBEDd6X7mwCFDB47bRAksEr9Oec%2B%2B7Ajt0m%2BtzERf3VydfdZg7SNnHAcOQLucZfGlpUOT3ulC2WfgDqYJnlNGyi9x8Q703MA%2BD95ZU4vM4Ptvn6ikSLasRqtWHhl5Pz%2BzcuTYL2GetNaJVJ6KINa2NWIEM6P8l91QQQBHG6961efSCniczUfQ0SdvqQfEGwUbHXqeujIVUH7&X-Amz-Signature=500de89077ba50894a36d3ff76a6126a1ea9c53d95c801d97367c22f28c62214&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
