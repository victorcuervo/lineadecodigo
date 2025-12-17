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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VINKO4QW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T174218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSH67ACM5lxPdSueKIJRl5wKAqLVOoH6ECd7jpEVhLmwIgZosAfxPUpq1MqNuAa1h3MGFcHFwk6jjH3cP6Ks3gKQUqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLls%2BxX%2FUy21N8IX%2BCrcAyakkzEUCcrGVTWTpmBN24cUBJy%2FV8UGNc5JUEhu5JnJwotMXZdHDKiVktN7LEef3OnSKGp05XMu9jEYkkADx5ZywQgHOteY3JvUNNJxZfSsOYOonQAC14Jta%2F88gKXuECISYf8kFOxFUVtyfrhMzdb0WiXSQ2YHld3dHkPLN7RUhdcLGnSnx3RyySGSnt46MNr%2BDySR%2B%2BcblATb3RchMOECKBnwAI7oueRNrNffxUks9Ml%2FCePyj1ePZoqUBlUt08xebo3qQuqtS4otki4R6UH3P7Gto08SOvEmXo9eqYaYktMcDRZ4qZ0AqXe2Amhc4hUnRQUR5melXtZP20oc9EQ2v9OxRa0gWF6PZsr5NhwTbNCrt%2FFEm8czSs31hI2DZYS%2B0V2fab9IOQ260AgGzABxuyjm4E2CK77pkoFR0dPLqHfJ3TS3xBqG1zkEiqVxCX3ENVl8rGhwpfgmNjtxHBV4RNz%2Blgx13YU4IwEdbpqhrBW3uOe1gwwI0%2FDF4KjksWTmyziusXNb1%2BZPVvA2RxxswJbhRNFhRiehYX2%2BQfFrfagI1YE2%2FLmQYZylgZtRZCz%2B5aVW%2FbBHwUMaekgNu7m6cUWijvZEJwY33zhK7HMpl00fX3yTfl9aDNy3MKegi8oGOqUB27Ojt3docPmriRr3o46QEPf%2FkuRAkQaqQTuzkKahxbDlDjnJ6m0L9NMJVBOFg%2Fjrrk0BEm%2FCQX0lWx1iSMJ%2BbcMdqc7EsEu1bEozu35Un5761VvMBXoRSSeSL9SNjz1O3%2FWYyzRIWoC5RKFKysQdDrfqTLEoaXQyb985vl4sqN9rO6LmaQEmBhPT13NbUsQZ%2F%2FRWSO1mYqheSyME8Bd4IbgWkLaQ&X-Amz-Signature=1be65b7aeaf2f4321e36da8666645f0dd054eee4ef934c8b70f3d0970e493af5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VINKO4QW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T174218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSH67ACM5lxPdSueKIJRl5wKAqLVOoH6ECd7jpEVhLmwIgZosAfxPUpq1MqNuAa1h3MGFcHFwk6jjH3cP6Ks3gKQUqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLls%2BxX%2FUy21N8IX%2BCrcAyakkzEUCcrGVTWTpmBN24cUBJy%2FV8UGNc5JUEhu5JnJwotMXZdHDKiVktN7LEef3OnSKGp05XMu9jEYkkADx5ZywQgHOteY3JvUNNJxZfSsOYOonQAC14Jta%2F88gKXuECISYf8kFOxFUVtyfrhMzdb0WiXSQ2YHld3dHkPLN7RUhdcLGnSnx3RyySGSnt46MNr%2BDySR%2B%2BcblATb3RchMOECKBnwAI7oueRNrNffxUks9Ml%2FCePyj1ePZoqUBlUt08xebo3qQuqtS4otki4R6UH3P7Gto08SOvEmXo9eqYaYktMcDRZ4qZ0AqXe2Amhc4hUnRQUR5melXtZP20oc9EQ2v9OxRa0gWF6PZsr5NhwTbNCrt%2FFEm8czSs31hI2DZYS%2B0V2fab9IOQ260AgGzABxuyjm4E2CK77pkoFR0dPLqHfJ3TS3xBqG1zkEiqVxCX3ENVl8rGhwpfgmNjtxHBV4RNz%2Blgx13YU4IwEdbpqhrBW3uOe1gwwI0%2FDF4KjksWTmyziusXNb1%2BZPVvA2RxxswJbhRNFhRiehYX2%2BQfFrfagI1YE2%2FLmQYZylgZtRZCz%2B5aVW%2FbBHwUMaekgNu7m6cUWijvZEJwY33zhK7HMpl00fX3yTfl9aDNy3MKegi8oGOqUB27Ojt3docPmriRr3o46QEPf%2FkuRAkQaqQTuzkKahxbDlDjnJ6m0L9NMJVBOFg%2Fjrrk0BEm%2FCQX0lWx1iSMJ%2BbcMdqc7EsEu1bEozu35Un5761VvMBXoRSSeSL9SNjz1O3%2FWYyzRIWoC5RKFKysQdDrfqTLEoaXQyb985vl4sqN9rO6LmaQEmBhPT13NbUsQZ%2F%2FRWSO1mYqheSyME8Bd4IbgWkLaQ&X-Amz-Signature=d062f6ad94333b6c13918e1e6e6f19b84195fe36856ce8b5142dc4fce9b276db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
