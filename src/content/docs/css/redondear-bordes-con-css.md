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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3M453NW%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T163101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG4XFHyf0gKYh%2B6G9UcGcLV6pelMkeokTH1H7r3mktViAiB3dLLwkz%2BOiS1447Rp0PLUIwxNloCCuCxdLKhbjKCVgyqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMRBwQQfYLAF1pks0KtwDhh3OLcllbqsrrcZ6XYA4ytJEmap94SHtO4tuGqJw0pN%2F%2BgmTRY%2B%2BVx%2FEZJuMG924lMm%2FxT7FoT8LVDyDw6Rdarceq173WYFrUxaZ00TGTyHmnStu7Q%2FgiC%2FF3FdTL3X02ri%2FvM0MQLinXAhmyib3UC0Aq2Qc9KNK7QbKyCPB8T%2FBDFBA%2B8%2F5Ntsl%2BiYOxu0nw5%2FCHvFIUzmSY09M9KaBHykcohtuGo25gtEt923aLga43sIVvhr%2BJrioY5NfJoq5DQnATAkdBmDpG5tIbXaIvr7UwiQG6X14bDVCNsFqUP0MnL33d0nNJksRSDLOcXPIHz2PhayhfmbIbvlsbW4shMaHAhlpLXE3hwUT5B1jRmTQPGaOYxUR3qLNgk%2BcVT%2FRssyQP0V6qdMf8zRgwpFnowTeAW1mboO%2FwlA%2B%2Fvc9w5QLy9SoiqJRDpK%2FQ9tCcnvARS7w4IFcFbEgiRsevWgR%2Bk8mvSi0szbVutikp8cXKxFgtitjDMxSeHZZA%2Bhx1N49QF4bApu7Xoiq6yqDP%2FeA6vH7A60HHn%2BpZyYzv8quwOVXUZmJaHVFOFGv3IW8bDubdDxRU2OdMvbiUaiu%2Fe1tHJAdQ%2BNFESigahLjmRNRM8M5mT%2FntYxMJcwfNbIwz7rWyQY6pgHFFULclmSDhFWcqRdqLBTUtU8OcqTZ6QXDypSw1oONy%2BgkaKhkzQfRXKKpXyFPsDmwpWYjc4rK%2BceWhKsoEgxJ29gRvSPGL9knecQYRA7cu36EK%2F%2BEbKav%2FWdDMKqKYeX2L75xyyCmyM%2Fi56SnANDuV8GfA%2B90gfdiJnh5EtZcRPggmvtwzsCGW%2F9tcK4CDCGt%2BE6aJreL%2Bl2%2BGuF3NUOwQk0c9Su3&X-Amz-Signature=214ac50082b18f54481a6e256314321814563879860e49e706ec393cbc8f761c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3M453NW%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T163101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG4XFHyf0gKYh%2B6G9UcGcLV6pelMkeokTH1H7r3mktViAiB3dLLwkz%2BOiS1447Rp0PLUIwxNloCCuCxdLKhbjKCVgyqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMRBwQQfYLAF1pks0KtwDhh3OLcllbqsrrcZ6XYA4ytJEmap94SHtO4tuGqJw0pN%2F%2BgmTRY%2B%2BVx%2FEZJuMG924lMm%2FxT7FoT8LVDyDw6Rdarceq173WYFrUxaZ00TGTyHmnStu7Q%2FgiC%2FF3FdTL3X02ri%2FvM0MQLinXAhmyib3UC0Aq2Qc9KNK7QbKyCPB8T%2FBDFBA%2B8%2F5Ntsl%2BiYOxu0nw5%2FCHvFIUzmSY09M9KaBHykcohtuGo25gtEt923aLga43sIVvhr%2BJrioY5NfJoq5DQnATAkdBmDpG5tIbXaIvr7UwiQG6X14bDVCNsFqUP0MnL33d0nNJksRSDLOcXPIHz2PhayhfmbIbvlsbW4shMaHAhlpLXE3hwUT5B1jRmTQPGaOYxUR3qLNgk%2BcVT%2FRssyQP0V6qdMf8zRgwpFnowTeAW1mboO%2FwlA%2B%2Fvc9w5QLy9SoiqJRDpK%2FQ9tCcnvARS7w4IFcFbEgiRsevWgR%2Bk8mvSi0szbVutikp8cXKxFgtitjDMxSeHZZA%2Bhx1N49QF4bApu7Xoiq6yqDP%2FeA6vH7A60HHn%2BpZyYzv8quwOVXUZmJaHVFOFGv3IW8bDubdDxRU2OdMvbiUaiu%2Fe1tHJAdQ%2BNFESigahLjmRNRM8M5mT%2FntYxMJcwfNbIwz7rWyQY6pgHFFULclmSDhFWcqRdqLBTUtU8OcqTZ6QXDypSw1oONy%2BgkaKhkzQfRXKKpXyFPsDmwpWYjc4rK%2BceWhKsoEgxJ29gRvSPGL9knecQYRA7cu36EK%2F%2BEbKav%2FWdDMKqKYeX2L75xyyCmyM%2Fi56SnANDuV8GfA%2B90gfdiJnh5EtZcRPggmvtwzsCGW%2F9tcK4CDCGt%2BE6aJreL%2Bl2%2BGuF3NUOwQk0c9Su3&X-Amz-Signature=6eee987b7ee236bb2d29eeb846d724e848d1ede4ded4be95bfa27203d41b9711&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
