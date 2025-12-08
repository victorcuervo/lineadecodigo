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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVOLINTD%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T231832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwYfWpIm9MHyN%2FP76pNQc6e4itckjoc1LoKJ%2BlHv8gFQIhAP8YnAGYC9usyVWIyik4vvF3kBaNqMrOoNihfqKV%2FUUgKogECLD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyz4dEjR%2Bnp1RR17zsq3AOfpAhFogm3ncf09dPhYKCIveyCPie5DLber6u2b6QdZWCFuqW5O3S9RIuaWwt1FR9sWXJTa1TPCfyfHh3oju8108AkSqwSfGH%2FUOkhigu4AfEAITb0PAbbPybITW6sFZ7rrHiTFE9W6sttLG9mHAR36FWME2vgKHyl9wr2DQoMJQkkyhOpNlmzaPBnZuz4g4oBs4sPRICOiooM3Od3087HlYKz25vrzn3gLS38v9F6D37qViIb7tSDx0gHwFUlyS9GZD%2B8idk%2Ff%2FwupOIMwlwDvjBeC68S%2FiEzmlmxPzngUSPuXvVRST6n%2FHC%2F%2BTUPss8VZI3Pnz83YkekmxwJ2QbOYdpiPYO8DzD56sHMdlulp2Vb12cnb%2Fg4dpsVHB7YgFTNbRP5CH2wpDGxjDBTpDFR17nES4WcLAB5JwWBNX7K7IrGWs%2BAL5QSj1tUUs%2BNl14W1IpX%2FNm4OE8kLW85TYmJbe15lRrHrxVfp6e6JccoZVzqpyUJMWpCjd12fw60emRRINxTKewgaUkQKb6f2%2BD2DfNPEFRhJPGBpowxylrhSgEiEBo5awQKOjT%2BZDa%2FLMCNxIs3ntXTyks7vGd7inYUOX1W%2FDqtTec0DCrDCeCXDjZd4bgp9u6ELC76SjCGot3JBjqkAY22jNN9%2BsSwVYcdCFxgbyreCX9vVpfY4cSprguZtQWinml9Xg1eR%2BzNwNAJVyrX%2BEEYm1qB8iGFUfHENCDY0gxIyJ1S2H%2B0UWawTVoR%2FSJEcG7hw7EH0Ptt4oGVEt7F2wu%2BWti0bp0ybbS7eKr7rFJX0kdTq6VkQZgo63sjP6%2BajqW8ioSj9mZomwCle1BkZBAPsj4BSz6pSdzBsFRz1u8r4bQ4&X-Amz-Signature=57e927d8cb3ed435137e4b9a2fc99b926ee16a447af11787bd115919006246ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVOLINTD%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T231832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwYfWpIm9MHyN%2FP76pNQc6e4itckjoc1LoKJ%2BlHv8gFQIhAP8YnAGYC9usyVWIyik4vvF3kBaNqMrOoNihfqKV%2FUUgKogECLD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyz4dEjR%2Bnp1RR17zsq3AOfpAhFogm3ncf09dPhYKCIveyCPie5DLber6u2b6QdZWCFuqW5O3S9RIuaWwt1FR9sWXJTa1TPCfyfHh3oju8108AkSqwSfGH%2FUOkhigu4AfEAITb0PAbbPybITW6sFZ7rrHiTFE9W6sttLG9mHAR36FWME2vgKHyl9wr2DQoMJQkkyhOpNlmzaPBnZuz4g4oBs4sPRICOiooM3Od3087HlYKz25vrzn3gLS38v9F6D37qViIb7tSDx0gHwFUlyS9GZD%2B8idk%2Ff%2FwupOIMwlwDvjBeC68S%2FiEzmlmxPzngUSPuXvVRST6n%2FHC%2F%2BTUPss8VZI3Pnz83YkekmxwJ2QbOYdpiPYO8DzD56sHMdlulp2Vb12cnb%2Fg4dpsVHB7YgFTNbRP5CH2wpDGxjDBTpDFR17nES4WcLAB5JwWBNX7K7IrGWs%2BAL5QSj1tUUs%2BNl14W1IpX%2FNm4OE8kLW85TYmJbe15lRrHrxVfp6e6JccoZVzqpyUJMWpCjd12fw60emRRINxTKewgaUkQKb6f2%2BD2DfNPEFRhJPGBpowxylrhSgEiEBo5awQKOjT%2BZDa%2FLMCNxIs3ntXTyks7vGd7inYUOX1W%2FDqtTec0DCrDCeCXDjZd4bgp9u6ELC76SjCGot3JBjqkAY22jNN9%2BsSwVYcdCFxgbyreCX9vVpfY4cSprguZtQWinml9Xg1eR%2BzNwNAJVyrX%2BEEYm1qB8iGFUfHENCDY0gxIyJ1S2H%2B0UWawTVoR%2FSJEcG7hw7EH0Ptt4oGVEt7F2wu%2BWti0bp0ybbS7eKr7rFJX0kdTq6VkQZgo63sjP6%2BajqW8ioSj9mZomwCle1BkZBAPsj4BSz6pSdzBsFRz1u8r4bQ4&X-Amz-Signature=627c49c4a260e4d7461a01ce0ae014633eed679a9d0b58023484514bc2cf260e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
