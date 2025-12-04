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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PXZNAW3%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T020548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIDlpXdlsu9A85lWpEr4bzQqS5QQXLzjK1So2eLVPTqOdAiBs%2BbndIp4QQ9n8Wj8aGHiNjIjY77fXGJ0qh9R6Bo1aFSr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMvZ1PIlMG0mPsVcDVKtwDLjZwQggmc6Hr0R53hOqWn3wsXdNav4pnD7NPjplFxeuC3WY8se8ufbzGF2KHjdvZjbHHlrZWZsKKs%2B5tZyXdktQT6BFIMeUELs7KX6KtnW4TSzQzgsIlZk7%2FKTcXQju0iAg8nZGShHshjuR2t1HfMYPcI88AYDJuz9W86m88AjellmZ3%2B5soPTA6d6R8Tn8%2BtqZ3jxV8Ri5TcMnGTSab1HpKwZhAB9NkiiET13vvEH%2FsampXacUYGQNnm6kZLqxEk%2FvKwOksvIbjc3WAHfkMSoGpa8rEkV0jDJ52cs4nAKkutKcEMPyus10x7%2F4Kkvr8W1L7wfM06WjJKKDgd5Yr3W0ClLRZj5BKx7wTKrdMPtWvz4Zg2pHTEJFJaYYVdFhghfaaQu3hwLjDR7oQp2WBPKQX7cXRYlCBT44cjF8qRY6Ri5e63LzB040%2BCXENkWgvCpW%2Ft3OX7OmUGaDPJ%2FWJ9lurNWwCZlLoG%2BylVJaaAvcDGvBSd53c4AcLG7kBs5FJv25A6eRf%2Bd9QCx6BSKXtCKp%2FI2VDE4goEPVd%2BdENFOd7EguHssmyho2f7HmSL6uzZFeaxZlHKMxV42D%2Bji4diJ5X5GSFbu4R4fyG6qmLOhCP9wBExUuU0hKtAXgw7tTDyQY6pgGKs1eRkmmWjTSAnfIURXHRlb3lN3y2IQ6KC%2FH05xYVec8fJrwSCddX3jYIbdT2io%2BBIfwYYp%2Bw3%2FXMBHYRDRnAYqdfyfRNFzRcEQSh5E%2F3xnBaxhf0A0nH%2Fc5RYjO6uDg%2BMpxeK%2BXtO45ZRYHFcyRAhojK4brZqwiDruItWssYdrzq32slSixXllSN1ZMdIfSP8dm8T8LkRdWt1fKVCPhl9MmtbyXT&X-Amz-Signature=bb841937e0af3b9c1cc6e690639537b1f94b6fb5efd3175cfcd76cffedfa5f5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PXZNAW3%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T020548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIDlpXdlsu9A85lWpEr4bzQqS5QQXLzjK1So2eLVPTqOdAiBs%2BbndIp4QQ9n8Wj8aGHiNjIjY77fXGJ0qh9R6Bo1aFSr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMvZ1PIlMG0mPsVcDVKtwDLjZwQggmc6Hr0R53hOqWn3wsXdNav4pnD7NPjplFxeuC3WY8se8ufbzGF2KHjdvZjbHHlrZWZsKKs%2B5tZyXdktQT6BFIMeUELs7KX6KtnW4TSzQzgsIlZk7%2FKTcXQju0iAg8nZGShHshjuR2t1HfMYPcI88AYDJuz9W86m88AjellmZ3%2B5soPTA6d6R8Tn8%2BtqZ3jxV8Ri5TcMnGTSab1HpKwZhAB9NkiiET13vvEH%2FsampXacUYGQNnm6kZLqxEk%2FvKwOksvIbjc3WAHfkMSoGpa8rEkV0jDJ52cs4nAKkutKcEMPyus10x7%2F4Kkvr8W1L7wfM06WjJKKDgd5Yr3W0ClLRZj5BKx7wTKrdMPtWvz4Zg2pHTEJFJaYYVdFhghfaaQu3hwLjDR7oQp2WBPKQX7cXRYlCBT44cjF8qRY6Ri5e63LzB040%2BCXENkWgvCpW%2Ft3OX7OmUGaDPJ%2FWJ9lurNWwCZlLoG%2BylVJaaAvcDGvBSd53c4AcLG7kBs5FJv25A6eRf%2Bd9QCx6BSKXtCKp%2FI2VDE4goEPVd%2BdENFOd7EguHssmyho2f7HmSL6uzZFeaxZlHKMxV42D%2Bji4diJ5X5GSFbu4R4fyG6qmLOhCP9wBExUuU0hKtAXgw7tTDyQY6pgGKs1eRkmmWjTSAnfIURXHRlb3lN3y2IQ6KC%2FH05xYVec8fJrwSCddX3jYIbdT2io%2BBIfwYYp%2Bw3%2FXMBHYRDRnAYqdfyfRNFzRcEQSh5E%2F3xnBaxhf0A0nH%2Fc5RYjO6uDg%2BMpxeK%2BXtO45ZRYHFcyRAhojK4brZqwiDruItWssYdrzq32slSixXllSN1ZMdIfSP8dm8T8LkRdWt1fKVCPhl9MmtbyXT&X-Amz-Signature=c44a8a8ee17ce257fcf18cbf1ee5519bd1d233a60993d545d1dd4930a71c6095&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
