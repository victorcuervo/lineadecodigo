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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NCKGBQE%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T213446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIANvm%2FwBNPMoa7cRgJeAI1CFUWx0T7SjKMiXphRThzalAiEA1JRJBJAQxI1NNupl%2FwA0fkut4Gbgj7auuroOOs1VuP4qiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGVxs7p3IghxQcHhryrcA9i1lYdmZPFuDZG%2BF7x1s0NEEc9bfIIxNVwvaSQlZOeauJGvurxUviSkQ37hp9hSBDG9wm3OzAz0Atbt4BbJc98QYKkfrfDBusMgMJJj0N6tKprjIQSma7koS0z9JLriDLdpKCoed2ZHOmA%2Fwe2rhV81bXKig9JT2LpD%2B8zv0JzamW4nu7YuyJAYInGAQ2KaMBp91Ch9K45f%2FaPLvKyACuV%2FRTpYuroVcW%2B3N05s0yC7bf70G5dANi38izsgD%2B7EELt4VLzM6CbFXZPV%2Fzbqbv6DeUQeyRnAGPZQ0fuXOQbAJ8kHWXLsPgzLvZM0jr6286YySHmnWoqyMm6pEVzxcLO32vMB8znsBpwtFiRRDI%2FWbqWIkoKrMMPNk8dGeOWA6822BR1iVdBGwIF1D6XJbhvtfua4jjpk7ur%2B%2FZS6dqIrD2H4VF4E%2Fne3C8%2FRKj3INMmsXlR7TWIEz20i3JaJ9SUmLCfXTc5s8xuVMETN5Iem%2FVHHFtsN5hjoa8pIDssD0Eud0rEbCDcFKFw0QU2iTwCk2JKc0re5D35HNhOTAHAk%2By7p1AzMVVyEQ1LI3aOPFYGILi6u8mETD8ey13k77WaMgEJT6YC0ecadulsWd7502%2BRdFozlQvIKDkcDMPXH18kGOqUBiWznPiDw7shpjGM8ordVcmJL3iZQ7XDTnz%2BOEEA1O%2FAWcrZNnQXNiAnphSwoLsFkS6mzEkpu4FZPLZq4QXWTyeuFMZmj8uuMF69E4FpVKzv4Pwy2%2FEkz16Zzdxp7GwmyPVJPiexd%2FHwxkwqqZs6LfXYSo%2FCYBCf8mpqDHTT35HTHAEorXsxCotpCIz48ZNfXT20VmKYZYD7%2FAT2j2Ko2qPv%2BaBb1&X-Amz-Signature=625e7db298820aeb5d160796c5b9847e911c435b922ca23c4f2bba19e234d198&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NCKGBQE%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T213446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIANvm%2FwBNPMoa7cRgJeAI1CFUWx0T7SjKMiXphRThzalAiEA1JRJBJAQxI1NNupl%2FwA0fkut4Gbgj7auuroOOs1VuP4qiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGVxs7p3IghxQcHhryrcA9i1lYdmZPFuDZG%2BF7x1s0NEEc9bfIIxNVwvaSQlZOeauJGvurxUviSkQ37hp9hSBDG9wm3OzAz0Atbt4BbJc98QYKkfrfDBusMgMJJj0N6tKprjIQSma7koS0z9JLriDLdpKCoed2ZHOmA%2Fwe2rhV81bXKig9JT2LpD%2B8zv0JzamW4nu7YuyJAYInGAQ2KaMBp91Ch9K45f%2FaPLvKyACuV%2FRTpYuroVcW%2B3N05s0yC7bf70G5dANi38izsgD%2B7EELt4VLzM6CbFXZPV%2Fzbqbv6DeUQeyRnAGPZQ0fuXOQbAJ8kHWXLsPgzLvZM0jr6286YySHmnWoqyMm6pEVzxcLO32vMB8znsBpwtFiRRDI%2FWbqWIkoKrMMPNk8dGeOWA6822BR1iVdBGwIF1D6XJbhvtfua4jjpk7ur%2B%2FZS6dqIrD2H4VF4E%2Fne3C8%2FRKj3INMmsXlR7TWIEz20i3JaJ9SUmLCfXTc5s8xuVMETN5Iem%2FVHHFtsN5hjoa8pIDssD0Eud0rEbCDcFKFw0QU2iTwCk2JKc0re5D35HNhOTAHAk%2By7p1AzMVVyEQ1LI3aOPFYGILi6u8mETD8ey13k77WaMgEJT6YC0ecadulsWd7502%2BRdFozlQvIKDkcDMPXH18kGOqUBiWznPiDw7shpjGM8ordVcmJL3iZQ7XDTnz%2BOEEA1O%2FAWcrZNnQXNiAnphSwoLsFkS6mzEkpu4FZPLZq4QXWTyeuFMZmj8uuMF69E4FpVKzv4Pwy2%2FEkz16Zzdxp7GwmyPVJPiexd%2FHwxkwqqZs6LfXYSo%2FCYBCf8mpqDHTT35HTHAEorXsxCotpCIz48ZNfXT20VmKYZYD7%2FAT2j2Ko2qPv%2BaBb1&X-Amz-Signature=51fe8f9e0bbe9ee09aa5d8ae3e33a42a31478f986ac8dbee035ed8d604850a34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
