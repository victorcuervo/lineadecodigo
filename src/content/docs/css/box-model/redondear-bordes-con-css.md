---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2025-12-17
slug: css/redondear-bordes-con-css
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWIDI44Z%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T153520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCo9mcTn9gt3cwEsiYyuJoGJOGUn1celUKiImAiipJZ4gIhAPQJfCXpTbT9Ly8ZVA0ifTGwrleOVBbRkzV1rRury8glKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwyZqkiRh8dLWrsPOYq3AM1DEqF%2FDY2Acyh7U2tAHRY73Ilz37OK8K6VG6c6WvhH07OuHw4WgbKeFbVkUE6ZRuBOTeVcrwCfplEt6HwWBTDDjG0Z38xz4fJlufbyxZgcNbjgHxfmHz54eqnY0XT7TicATAkwnj8CShdAEKY9tvy6K%2FhU6XkI1SkOlhQZ931gjYLAuIz8Qs3tzxD5lDcKduKtQYAxwQrW7oYYO6YycH8yzlcrB2ig1p1BHoJmGvlWgrTfziuY6oeEZYmxLBV%2F%2F5Ee7LVlZWXNJT71jrow38TbxFDff9TCoXhc1tUL3utjIXMoZk8DkqFl4i4hXhexB%2BCEf3ekjWRtq9YjT%2Fm9IPDvJiRQ6ZBA5TQ8u7kZ2YoZx5iDR49fGrP4URPAszs7JrNHdU%2BLPVdoF%2Bco%2FIDBtw4LqsuxwXiufRpDPbggEKwWHVyNFmCNFPpw4c0OV2M%2B2NhvgAXbXzuhwsBNGVP4Qeosk7bYVdesXAC8SEE0Y5XjKeE%2FoZ6puohLDuBTFmzNVMY8BnAY4%2FrxAIBHZh2zKXiTDyEyf3OoLNDloPVnhS%2BdE7HDTFy4ovfIpsuP5ammvy6OY4INnME39zW5u%2F7%2FOBBTYPzAhvXZZFpwtPgS%2FYW2Dl3p3dBIX70crCaZzDa%2F4rKBjqkAUeKwvAW0NCwQOeCJtYqt9kBe0xbDWSQQ9wP%2FsLbpOTX0%2FMO6bJneprGN84KVsPuJvtai0ZASTRPRqm8lEn10K5aoJAePZNcxyIuvn1R7acklsoFIK%2B5Mf5bMvHMhzu0sibA2m83nFzoRGSkhAv5SHQgvEpUEpCZgDSN4N%2FxWCJ5D1%2FD7EPXiaHvYCOQ03rCgU0ahrI5tSzQsppFv%2BXmf5H7GJ6b&X-Amz-Signature=545a18b61e85a0078220b81f9b7476c963994a33eb644bc159b2df6a19aa791f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWIDI44Z%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T153520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCo9mcTn9gt3cwEsiYyuJoGJOGUn1celUKiImAiipJZ4gIhAPQJfCXpTbT9Ly8ZVA0ifTGwrleOVBbRkzV1rRury8glKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwyZqkiRh8dLWrsPOYq3AM1DEqF%2FDY2Acyh7U2tAHRY73Ilz37OK8K6VG6c6WvhH07OuHw4WgbKeFbVkUE6ZRuBOTeVcrwCfplEt6HwWBTDDjG0Z38xz4fJlufbyxZgcNbjgHxfmHz54eqnY0XT7TicATAkwnj8CShdAEKY9tvy6K%2FhU6XkI1SkOlhQZ931gjYLAuIz8Qs3tzxD5lDcKduKtQYAxwQrW7oYYO6YycH8yzlcrB2ig1p1BHoJmGvlWgrTfziuY6oeEZYmxLBV%2F%2F5Ee7LVlZWXNJT71jrow38TbxFDff9TCoXhc1tUL3utjIXMoZk8DkqFl4i4hXhexB%2BCEf3ekjWRtq9YjT%2Fm9IPDvJiRQ6ZBA5TQ8u7kZ2YoZx5iDR49fGrP4URPAszs7JrNHdU%2BLPVdoF%2Bco%2FIDBtw4LqsuxwXiufRpDPbggEKwWHVyNFmCNFPpw4c0OV2M%2B2NhvgAXbXzuhwsBNGVP4Qeosk7bYVdesXAC8SEE0Y5XjKeE%2FoZ6puohLDuBTFmzNVMY8BnAY4%2FrxAIBHZh2zKXiTDyEyf3OoLNDloPVnhS%2BdE7HDTFy4ovfIpsuP5ammvy6OY4INnME39zW5u%2F7%2FOBBTYPzAhvXZZFpwtPgS%2FYW2Dl3p3dBIX70crCaZzDa%2F4rKBjqkAUeKwvAW0NCwQOeCJtYqt9kBe0xbDWSQQ9wP%2FsLbpOTX0%2FMO6bJneprGN84KVsPuJvtai0ZASTRPRqm8lEn10K5aoJAePZNcxyIuvn1R7acklsoFIK%2B5Mf5bMvHMhzu0sibA2m83nFzoRGSkhAv5SHQgvEpUEpCZgDSN4N%2FxWCJ5D1%2FD7EPXiaHvYCOQ03rCgU0ahrI5tSzQsppFv%2BXmf5H7GJ6b&X-Amz-Signature=e7ddf17254edd21b3e19b561ea7a6bd577b5d33d4f3ba131bc8a9b39225a7292&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Si queremos modificar los dos radios de todas las esquinas podemos utilizar la versión reducida de [`border-radius`](https://w3api.com/CSS/border-radius/):


```css
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


```css
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
