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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3US6MIE%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T052435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQD7APjWCFAiw3PAmzo%2FSj07KzmUJrGRTLbYU4efRtzzBgIhAPTXKB%2BNYH%2FoXry7vrn0Jncr7rqNvimg5PIREvnj1VZzKv8DCD4QABoMNjM3NDIzMTgzODA1IgyWHGMwlK%2Bo%2BMvXH64q3AOLM56ZVG%2B%2FVW2DCg%2FUV0PVgyDHANaU%2BZZ2ilocUpNq7zb8yPznYtBC4AihUZuIIcf%2BtRqgTIvq%2Bvifx8PqZu3Rj2Oq6JXqSZ0ys4v2ULPr6M7WjMKCAF%2BtrGA4cYmO3NMaz0j8sfzAtCYyHnUm2kBb7g24He1michR5afPLPbZLgAi19LANVK38r7dkcrniyVgVK6jlI6SHvdFTKwiOhFu7zFnZlr8oSnmVCRpTwsV206cVDcQctFlM%2FdTlK2KolPa%2F15F%2ByKq2LngQf0S6zHV4IQNon8lrTMdP4fuUTphhKseYzoQATlzClLyjaUXn99eUy8bu%2FM6ZBB%2FcL%2BmhU9SC5%2B9Gr5u%2BmaSdvKKyPXdqN%2FEUkn2mk9fpYUhIw6hL7yTaNvZoArhkZp9etqEkdZ4oMLvilgnbuakDPD6TBpMaczWJ6u2anFNlVKjdMU%2FBM5vdVmCPkn5Hb0r7fm7emyRFhneOT4hS0LjOCDK3yvAtXaf8%2FaKTZ03SXcemczQeFfUL3x%2FkyeysZUxpvu%2BS5RNn2ACqySafU%2BqP%2BKCX9xjdmcbs9S%2Ffeovj4rnTS6frbFqHLrzxhv5h3tmcqTsQ5TWUZL1o%2B6azSDpC05XMg%2BnhOpBIR1FB%2BZ1CoSkHDDirsTJBjqkAXHXEsPD2Lqs1AZRYOl3aqEfOK2RdmGnC3p1vAjqws5exZmYxVzOTIsDwvtRZG1CIGnojfdOGkAZKmmotMR1wCwVBN1GGgU9BZ9Vmbj1uswMYF78ZDCkuH9uOB8CVFbMK1Rd5OeBy%2Fwdwy9FrpsGOy40P2TVS%2FISAwGnIb3zN6Ogbt5ZwKFYIyXqY16mkze%2BFPqaFRVp1tCAqtBiOp7nigevdMDr&X-Amz-Signature=02c13bf235a9351766cb569d11617d840c74178c342f1d4b7ccdae9afce45d02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3US6MIE%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T052435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQD7APjWCFAiw3PAmzo%2FSj07KzmUJrGRTLbYU4efRtzzBgIhAPTXKB%2BNYH%2FoXry7vrn0Jncr7rqNvimg5PIREvnj1VZzKv8DCD4QABoMNjM3NDIzMTgzODA1IgyWHGMwlK%2Bo%2BMvXH64q3AOLM56ZVG%2B%2FVW2DCg%2FUV0PVgyDHANaU%2BZZ2ilocUpNq7zb8yPznYtBC4AihUZuIIcf%2BtRqgTIvq%2Bvifx8PqZu3Rj2Oq6JXqSZ0ys4v2ULPr6M7WjMKCAF%2BtrGA4cYmO3NMaz0j8sfzAtCYyHnUm2kBb7g24He1michR5afPLPbZLgAi19LANVK38r7dkcrniyVgVK6jlI6SHvdFTKwiOhFu7zFnZlr8oSnmVCRpTwsV206cVDcQctFlM%2FdTlK2KolPa%2F15F%2ByKq2LngQf0S6zHV4IQNon8lrTMdP4fuUTphhKseYzoQATlzClLyjaUXn99eUy8bu%2FM6ZBB%2FcL%2BmhU9SC5%2B9Gr5u%2BmaSdvKKyPXdqN%2FEUkn2mk9fpYUhIw6hL7yTaNvZoArhkZp9etqEkdZ4oMLvilgnbuakDPD6TBpMaczWJ6u2anFNlVKjdMU%2FBM5vdVmCPkn5Hb0r7fm7emyRFhneOT4hS0LjOCDK3yvAtXaf8%2FaKTZ03SXcemczQeFfUL3x%2FkyeysZUxpvu%2BS5RNn2ACqySafU%2BqP%2BKCX9xjdmcbs9S%2Ffeovj4rnTS6frbFqHLrzxhv5h3tmcqTsQ5TWUZL1o%2B6azSDpC05XMg%2BnhOpBIR1FB%2BZ1CoSkHDDirsTJBjqkAXHXEsPD2Lqs1AZRYOl3aqEfOK2RdmGnC3p1vAjqws5exZmYxVzOTIsDwvtRZG1CIGnojfdOGkAZKmmotMR1wCwVBN1GGgU9BZ9Vmbj1uswMYF78ZDCkuH9uOB8CVFbMK1Rd5OeBy%2Fwdwy9FrpsGOy40P2TVS%2FISAwGnIb3zN6Ogbt5ZwKFYIyXqY16mkze%2BFPqaFRVp1tCAqtBiOp7nigevdMDr&X-Amz-Signature=1c9e4104d10ff2e97e82e3c6d36cc00328c8ec5eb7eb47b25c621d5b6127f9ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
