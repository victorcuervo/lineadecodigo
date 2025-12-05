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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TE7DIXAP%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T011521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGEznMKkmrEd4KRaC2OKtQxhc13gLC3a7K1dkGUrCoYUAiAa%2B%2FKpXBJnewTRMfGOqfxhug0y97l%2B8uLXauhpZNmTSCr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMFeA5pMnK3YsIDk%2FUKtwDj%2FYpM7J9MzJgThIAlG3kBhXDPTG5aaDtofwmTGwfZkNmomrYp4ogyXQw%2Fk6ciP3JnIjHRI2HlqIe7lYM9psqfZVzMlLd8aqGMMyiu%2FAmW%2B3xxXC%2B4HgLdRlrf5OU8jC6cR5yGxVsj8WwxKYq3fRxzbKNP36Yq92X24K8P2luAy4tT7j4ltsr4ZSMeeD6PGJYsqBUEz6%2FjVzbn0EkNbpcJDOl37B5KbuF7C1wJ79Hrm6mseinZ7my%2FnBfi2Y6hyCkKsA3X70SQ2enreLeE6ZooRrqeJWJllqIp41wNIVdMhYIWqvoaMvjJu%2BjY5miKgXmcaH%2F9Cu0rAi2N0bRiIBz2hLpO00sguWE9KnoRrKaahwbPvsYJipzQ1smIfDscNx6rWdIbVQQJqdTd8jU9hp7EmE9K%2FX7TQMlwxvVXOYy%2FoJVNqR81kQepG7Md9ruXB6yBd%2Bf0mkhN4zogFfcLpGvbCxcJcDuqHNVbrmmqUMXljKv0N8XZxOrMQ3v%2F1%2BwgRL3vhmtZDD7P1mAA7mBo%2B%2Btni5IE1i5tIAuxnjNc5LJsVOfjvYQogsd8%2FKUhL7GOvoA3GUlwLzKHsqmzCd23e7l2LR2EcOV%2B6tKkp7fc20%2Bu79aLhmAayVhJ900zYUwkozIyQY6pgHPFXGDQTrnGsqel6UrKY%2Fmez8Rrwd2gbnXY%2BH0iaHiRoQE0CW8FHYEeojzhX0rg6%2FV8vFxvUy1jelxSiIk074m%2FW%2B6RtYHOeFJRrrQYUIRBjzMNA4aL4kENyzTAlEBfRYEBTzXZgrpernSVxlDAAkftGuPqTwDJdcihCYjPdnIbw5jJziVNc%2BGOVWoOQGTWPkVXexgLhgGSfVNr%2BdsLW9NMKstTAaH&X-Amz-Signature=0d3976b8f0f6f67ea4f2ffaac75bd76495eb0dc8a78aacfd5012728ca43e36c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TE7DIXAP%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T011521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGEznMKkmrEd4KRaC2OKtQxhc13gLC3a7K1dkGUrCoYUAiAa%2B%2FKpXBJnewTRMfGOqfxhug0y97l%2B8uLXauhpZNmTSCr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMFeA5pMnK3YsIDk%2FUKtwDj%2FYpM7J9MzJgThIAlG3kBhXDPTG5aaDtofwmTGwfZkNmomrYp4ogyXQw%2Fk6ciP3JnIjHRI2HlqIe7lYM9psqfZVzMlLd8aqGMMyiu%2FAmW%2B3xxXC%2B4HgLdRlrf5OU8jC6cR5yGxVsj8WwxKYq3fRxzbKNP36Yq92X24K8P2luAy4tT7j4ltsr4ZSMeeD6PGJYsqBUEz6%2FjVzbn0EkNbpcJDOl37B5KbuF7C1wJ79Hrm6mseinZ7my%2FnBfi2Y6hyCkKsA3X70SQ2enreLeE6ZooRrqeJWJllqIp41wNIVdMhYIWqvoaMvjJu%2BjY5miKgXmcaH%2F9Cu0rAi2N0bRiIBz2hLpO00sguWE9KnoRrKaahwbPvsYJipzQ1smIfDscNx6rWdIbVQQJqdTd8jU9hp7EmE9K%2FX7TQMlwxvVXOYy%2FoJVNqR81kQepG7Md9ruXB6yBd%2Bf0mkhN4zogFfcLpGvbCxcJcDuqHNVbrmmqUMXljKv0N8XZxOrMQ3v%2F1%2BwgRL3vhmtZDD7P1mAA7mBo%2B%2Btni5IE1i5tIAuxnjNc5LJsVOfjvYQogsd8%2FKUhL7GOvoA3GUlwLzKHsqmzCd23e7l2LR2EcOV%2B6tKkp7fc20%2Bu79aLhmAayVhJ900zYUwkozIyQY6pgHPFXGDQTrnGsqel6UrKY%2Fmez8Rrwd2gbnXY%2BH0iaHiRoQE0CW8FHYEeojzhX0rg6%2FV8vFxvUy1jelxSiIk074m%2FW%2B6RtYHOeFJRrrQYUIRBjzMNA4aL4kENyzTAlEBfRYEBTzXZgrpernSVxlDAAkftGuPqTwDJdcihCYjPdnIbw5jJziVNc%2BGOVWoOQGTWPkVXexgLhgGSfVNr%2BdsLW9NMKstTAaH&X-Amz-Signature=35fbaf60d008a3785cac89fd2296f1d4e85d7482129c1133aae3153b61104357&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
