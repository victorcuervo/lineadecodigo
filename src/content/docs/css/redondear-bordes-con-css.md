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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZI26OA4M%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T022027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9MrNBt5%2BnThigvmkk6hUBkvyFiWpnIbtbY2i3wgW%2BZgIhAK3itIJMF9%2FY207HD%2FOnzt3WgI9K3opEOfqgufiXpgB%2BKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwzazfrjFq4YaBj1Ssq3AOxxCA7zb073wIPABl8Ce9lSdKbyGv8GaaLS4%2BoiQ2dvrkXTim6P6e87z%2FAOi41CAy%2B%2BdKGIh5kweqL8HjF0AkgPz%2FSKY8O10olfHlY2sgIFD333THKqPrimOQLd6QiLbogoqFU1hH2CBF8ZHJ8DAjSM5I1pIi2rOWCTU%2BSHa7FHtrUG4IP%2FWYb5j8Dj7V%2FBy5HMy2ooJqdLmQihK4KFJHCyHOjF5HvPLXJpV9TLoNk6hhcg8pCjEPYU54kSlEVEDugUK1LL0LLSMJcdW3%2BaHWjYPRl3eEiXBXW6dcERmO5SqQJnDOJGSm8g%2BBK%2F%2FUHxvpOJ%2BjK%2FSiNLsAj4eNRD9yauoUesV1HJGmtQ8WNLjUxrhV1Ngo1folH5dc5lqsrbxvCLQC1KWfB7XpjmB3gcYaPDmpuxc0fzwVFWg2umoYB8ouqZNIR%2BcoFU6z21pFCIDVsdClLmrZwoQka%2BxQf6IdefTxEFism9P6EEsrW9Sj3a6SJY7ncPP5phoBBLH%2Fv2uhFQF%2FeKkqzntWtIs8y%2BceHIzbuk4iEPR5waJn1xartUKiKlkI6ac%2BNbDNkVn6476m4788pA2uUnOmQ1WNtTjnakZUVoOUDhwb8NfTEo0V99n%2BBoo%2BebXPHz7pSdTCT6d3JBjqkAUPTN130VZMKflXJt0OUCdnW0mjFYi0rnMDpq1a%2Bcz0pNOQ9yST18vt%2FfbbgCJiCAiq7zTA5C8zsYxbgLxOPW6XBrHeeGQXBJlfsM5e4qpDt6dvuGCaLky7lKYo0ARDxaSupYFFI42f6KmNoWdDEa4nF2F%2BolN4sVCRAOF4cXUTZVrkW%2BYyNrWuhd4gKD6c5UC1kDfpmI2K%2F1wkk7SgqOxdWaXRL&X-Amz-Signature=6050f75b449a91a152e42f3ea9f70c5df5605bda34553bb831543ef57a41cc6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZI26OA4M%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T022027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9MrNBt5%2BnThigvmkk6hUBkvyFiWpnIbtbY2i3wgW%2BZgIhAK3itIJMF9%2FY207HD%2FOnzt3WgI9K3opEOfqgufiXpgB%2BKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwzazfrjFq4YaBj1Ssq3AOxxCA7zb073wIPABl8Ce9lSdKbyGv8GaaLS4%2BoiQ2dvrkXTim6P6e87z%2FAOi41CAy%2B%2BdKGIh5kweqL8HjF0AkgPz%2FSKY8O10olfHlY2sgIFD333THKqPrimOQLd6QiLbogoqFU1hH2CBF8ZHJ8DAjSM5I1pIi2rOWCTU%2BSHa7FHtrUG4IP%2FWYb5j8Dj7V%2FBy5HMy2ooJqdLmQihK4KFJHCyHOjF5HvPLXJpV9TLoNk6hhcg8pCjEPYU54kSlEVEDugUK1LL0LLSMJcdW3%2BaHWjYPRl3eEiXBXW6dcERmO5SqQJnDOJGSm8g%2BBK%2F%2FUHxvpOJ%2BjK%2FSiNLsAj4eNRD9yauoUesV1HJGmtQ8WNLjUxrhV1Ngo1folH5dc5lqsrbxvCLQC1KWfB7XpjmB3gcYaPDmpuxc0fzwVFWg2umoYB8ouqZNIR%2BcoFU6z21pFCIDVsdClLmrZwoQka%2BxQf6IdefTxEFism9P6EEsrW9Sj3a6SJY7ncPP5phoBBLH%2Fv2uhFQF%2FeKkqzntWtIs8y%2BceHIzbuk4iEPR5waJn1xartUKiKlkI6ac%2BNbDNkVn6476m4788pA2uUnOmQ1WNtTjnakZUVoOUDhwb8NfTEo0V99n%2BBoo%2BebXPHz7pSdTCT6d3JBjqkAUPTN130VZMKflXJt0OUCdnW0mjFYi0rnMDpq1a%2Bcz0pNOQ9yST18vt%2FfbbgCJiCAiq7zTA5C8zsYxbgLxOPW6XBrHeeGQXBJlfsM5e4qpDt6dvuGCaLky7lKYo0ARDxaSupYFFI42f6KmNoWdDEa4nF2F%2BolN4sVCRAOF4cXUTZVrkW%2BYyNrWuhd4gKD6c5UC1kDfpmI2K%2F1wkk7SgqOxdWaXRL&X-Amz-Signature=e18b42cdbf9df4145c14bd26feb8ee9bd5a788561de5a7046131a254aff4e7f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
