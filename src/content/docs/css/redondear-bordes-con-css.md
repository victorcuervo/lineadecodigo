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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Q2VNINJ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T005643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7r6TnQVcXp0ZBLwCyCbcDKAP%2BbJZYI4gVGDuA9AxeZwIhAIR97NL4aFq7bTX%2FNahfxSd%2Bwoj0B4vIKXl0PXL4BM3VKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyDCiW5vooFYT%2BOreUq3ANWeHpXvuzT7lMhNkeHC5MBWURkm2cuJQffq4TwDBtukfZIyGQNlt5uLCB49AOF8MVsLJdbzafabFNJ2U0syi838Ks6MnmEqwn2EgoKVqrr72fkWNBXsBJ3%2B1uqKlbdDRV7HbtXCn6LjZP9xdo9L%2FjG3ybc33T7IFrH5f6IX%2BnraPpmnDHaHwqGUykKbJIPfXgYnXJK28XxGYtaHjfVvY5QPF8JKfwt45iodIB%2FQpamvd5hvLQEHiWTrtm3dB51uoQUW6BCJtT5se%2FX8aq%2F71bvJIRfInCoEFv0Dj%2B%2FjlBGUe%2Fg367bSOIBLNKlkHw1GVyqtzYwraGzEPlDDPUCDopfjYGAKVoie%2F0wVIAPW3AAv9COaqQJD04%2FTd09ym5ykyUZJiX1RyOqZXMHd9XQ2wXTyhCZ0ya0oArjjabIx9K7sAuw0V89TZWUAcogiNuak35odVA43sHZP4H4fZipWdM0TiVsInXhCF72JXcoSMFZslDpDhkXcJ2Em4srGaDaBExR3bguQEx8UoaSebRCA9Zjxw2Q86rG%2FQWHSQOAFDXYBzfZJBKr65FYgluQDaWZqGr%2Bnkk4g2rgrrYlNYf3Xx8dHfbcjaYAvTany%2BJdXfwTylGaSdNg131u%2BneXcjCDotjJBjqkAePQ4483NbF%2FaKTYDJLLU%2BsIa1jq4ev%2Fmy4fOEtAxu7SsPNxCQZy2iDxxCWmWTDpklPVZIYadMnY6AEbUxi%2BQ1LV0ja6bvRpWmju%2FSfXMXETUN7LhGuJyRyJP%2B5ygeh10az2C8RdDgPJQWDDVv2vyueWOQoDqaUV3Rf3xWzu%2B0eWlfYJdnErGrS5jL6B91tO5nyXwGs%2BeWwgcq5suIJKIqllT01S&X-Amz-Signature=10a3f850e80f423442a99c189408de40dcd219462e15d6817591f364a6fdbfbf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Q2VNINJ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T005643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7r6TnQVcXp0ZBLwCyCbcDKAP%2BbJZYI4gVGDuA9AxeZwIhAIR97NL4aFq7bTX%2FNahfxSd%2Bwoj0B4vIKXl0PXL4BM3VKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyDCiW5vooFYT%2BOreUq3ANWeHpXvuzT7lMhNkeHC5MBWURkm2cuJQffq4TwDBtukfZIyGQNlt5uLCB49AOF8MVsLJdbzafabFNJ2U0syi838Ks6MnmEqwn2EgoKVqrr72fkWNBXsBJ3%2B1uqKlbdDRV7HbtXCn6LjZP9xdo9L%2FjG3ybc33T7IFrH5f6IX%2BnraPpmnDHaHwqGUykKbJIPfXgYnXJK28XxGYtaHjfVvY5QPF8JKfwt45iodIB%2FQpamvd5hvLQEHiWTrtm3dB51uoQUW6BCJtT5se%2FX8aq%2F71bvJIRfInCoEFv0Dj%2B%2FjlBGUe%2Fg367bSOIBLNKlkHw1GVyqtzYwraGzEPlDDPUCDopfjYGAKVoie%2F0wVIAPW3AAv9COaqQJD04%2FTd09ym5ykyUZJiX1RyOqZXMHd9XQ2wXTyhCZ0ya0oArjjabIx9K7sAuw0V89TZWUAcogiNuak35odVA43sHZP4H4fZipWdM0TiVsInXhCF72JXcoSMFZslDpDhkXcJ2Em4srGaDaBExR3bguQEx8UoaSebRCA9Zjxw2Q86rG%2FQWHSQOAFDXYBzfZJBKr65FYgluQDaWZqGr%2Bnkk4g2rgrrYlNYf3Xx8dHfbcjaYAvTany%2BJdXfwTylGaSdNg131u%2BneXcjCDotjJBjqkAePQ4483NbF%2FaKTYDJLLU%2BsIa1jq4ev%2Fmy4fOEtAxu7SsPNxCQZy2iDxxCWmWTDpklPVZIYadMnY6AEbUxi%2BQ1LV0ja6bvRpWmju%2FSfXMXETUN7LhGuJyRyJP%2B5ygeh10az2C8RdDgPJQWDDVv2vyueWOQoDqaUV3Rf3xWzu%2B0eWlfYJdnErGrS5jL6B91tO5nyXwGs%2BeWwgcq5suIJKIqllT01S&X-Amz-Signature=71dd64a0de8b7634577535dddc019cd5de6bd7c2c3afe612e42123231ea31d0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
