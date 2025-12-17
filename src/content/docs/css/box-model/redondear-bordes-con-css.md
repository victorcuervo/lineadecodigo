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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XTCPJ23%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T082239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGSIgD1Xj0oPoAfbM2cBCz%2FzU6wrog%2FVLZl5oauzEiI4AiBoFURvz7iJ1zEuj247J%2BxnExzz2wWuEi9WcfSInUw0Eir%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMUPQETga%2BTAC45figKtwDInPK%2BQFjQVukXLR5gKL6sE0ksmMc4T1bD1%2F85UX6Yktp6Bvuzb%2B3kxlX6kzaP1jm5KBOdXUfoVdqOPjaNt9jEwZzsd8W5VZf8eQ9nLzjV3Umj2cgzxTvL0gzE0Tbp%2B9gDSWAwltZd7CJrIXWCOPY2ctHAKFy9B2EeS1b2nFC3mdSfyZAfLblMd8NC%2BShalCFokyR%2FWL6Ajyoh8RuFZSPkM1Z%2BvW6v8JUeo09IN3KaApUZiGJqQ8UUj6%2F0B3g6JpcmyVfcD1oxQNirFndwp8%2FAk3HRRVugxZPfDmW%2BkEs5uGsIr5KoVv3%2Fi8BNLz8ZNi2DoLkTUz7vMqCYmfb%2BMG6OugpZEBXID8mQfhFLYwQV8gEJ91a%2FjLK0zTnB8YjmGO9saK9M20EOEPHd%2FVaUeokn1UhsuCIxKjUWRrL44CumLw%2FvViAUPpzHHP%2Bxt6CGt8SFbKL97BX9zN41Wx9Em5fFfH4JUq5mCekcwN4aP4YKltA%2B1GHstDiVCWLH%2FzRdp1%2FFVqLncJkS3t3nbquFjQ%2BaPn%2FC%2FHLD1H5mnDz%2BNINT9cVK0UkWHq6yPPZXA4BoNK5hqniXRQl0VhpTZ9escM10Hou2LdA3AE8SGisyxVvlp8f2VTrTqHeWXyYmWQw%2B7eJygY6pgEG0ly9f29iES0y1Jx%2FafowBpCmueccUSADBehphQ7kX2uGxofyHrkHbFtWI5%2B511eroiZGSdGS5xVMjvTj0mFHcFGQiIvtsqGYKDOGFiWXfNy%2FgNKeQcfjjzMYydUNz0Njkt0ehzNXQucwerj8KsPfUxD0hWtiOcGZNVkPb7yd6KIF%2B59DeEOIsnTAdFIrLAGzOCHcVb1%2BEGFJuv9KpROg7GLzn7nl&X-Amz-Signature=9a3e9120665a51fcce25fbd42bc716f72f38d263da6ae6ea563148239c44b7f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XTCPJ23%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T082239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGSIgD1Xj0oPoAfbM2cBCz%2FzU6wrog%2FVLZl5oauzEiI4AiBoFURvz7iJ1zEuj247J%2BxnExzz2wWuEi9WcfSInUw0Eir%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMUPQETga%2BTAC45figKtwDInPK%2BQFjQVukXLR5gKL6sE0ksmMc4T1bD1%2F85UX6Yktp6Bvuzb%2B3kxlX6kzaP1jm5KBOdXUfoVdqOPjaNt9jEwZzsd8W5VZf8eQ9nLzjV3Umj2cgzxTvL0gzE0Tbp%2B9gDSWAwltZd7CJrIXWCOPY2ctHAKFy9B2EeS1b2nFC3mdSfyZAfLblMd8NC%2BShalCFokyR%2FWL6Ajyoh8RuFZSPkM1Z%2BvW6v8JUeo09IN3KaApUZiGJqQ8UUj6%2F0B3g6JpcmyVfcD1oxQNirFndwp8%2FAk3HRRVugxZPfDmW%2BkEs5uGsIr5KoVv3%2Fi8BNLz8ZNi2DoLkTUz7vMqCYmfb%2BMG6OugpZEBXID8mQfhFLYwQV8gEJ91a%2FjLK0zTnB8YjmGO9saK9M20EOEPHd%2FVaUeokn1UhsuCIxKjUWRrL44CumLw%2FvViAUPpzHHP%2Bxt6CGt8SFbKL97BX9zN41Wx9Em5fFfH4JUq5mCekcwN4aP4YKltA%2B1GHstDiVCWLH%2FzRdp1%2FFVqLncJkS3t3nbquFjQ%2BaPn%2FC%2FHLD1H5mnDz%2BNINT9cVK0UkWHq6yPPZXA4BoNK5hqniXRQl0VhpTZ9escM10Hou2LdA3AE8SGisyxVvlp8f2VTrTqHeWXyYmWQw%2B7eJygY6pgEG0ly9f29iES0y1Jx%2FafowBpCmueccUSADBehphQ7kX2uGxofyHrkHbFtWI5%2B511eroiZGSdGS5xVMjvTj0mFHcFGQiIvtsqGYKDOGFiWXfNy%2FgNKeQcfjjzMYydUNz0Njkt0ehzNXQucwerj8KsPfUxD0hWtiOcGZNVkPb7yd6KIF%2B59DeEOIsnTAdFIrLAGzOCHcVb1%2BEGFJuv9KpROg7GLzn7nl&X-Amz-Signature=693fbbaa36e36936b346c121db357445dea41da873b1fb1d409742cb9dc40741&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
