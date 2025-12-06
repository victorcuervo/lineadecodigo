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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TY5F7CI4%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T100607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAi%2FaXV8oJ6bDnO8Ql0L6l%2BEEUKBAo9iGiG2CPnUfATsAiAo%2Fh2rJc3DhuSuHA5OgeEvRhuhht%2B048Q1N8ikI6GQ0ir%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIM4dH8PR6DY9AOyePuKtwDwbCWzYZk3gPYL%2F%2FnEmOyQyUeH3fzYD0c5g4yVmFleG3CP41XJHBwPbc%2Fghm%2FvYc7j9D28fJLI0cEQu9J23E6YewITUJ8KEyIsUhf3m4EytJZgerxqTJM8dfsWqES%2Fr5N9KYWYviV9QWZBwwUShe%2FEyryPjgHEVIfPu3jq%2Bbt4Nx%2F6n4%2FC4TID7nNyjWixJ6UkU1bQpHGup1qsum3ai%2B6lG8oa9XUBoH23CWzzPXrPkxSyEonYYiw03UlM6DHU%2Bc3Cul2YXwSqP61DBzJQhkTSQUu9xkMiSh0ih%2BCU2DOHHIH9OwZGSRYY2wjaZRtjk1FqYOnHLhW8qlWh11baYKt6s6Fz4nRErA3FouQ1bnVVL50rKEQrIMQ7hbiEfVSYdH1DtFq1WS3o%2F1NcKeqDhTZAWDcuxwqocgG3AcHTwFGFXytwWNY%2Bxy2USrzTC0eMazLRk9RVxbCv4zUc8K8L8Ck2sCmMP5JO7Y%2BYYOiQj2%2BdB5uhdRrLRpIaOzLlsSMFOyY3hWFjImzgwAqJ0%2FUNh8O4VBuDadh6E3ChqWTZpiE1cw8fd2wVw8n2dUuO3U%2FxXOxUEvTIW337b3dk%2Bvz2bkUcaAbHEv0e78jqrDhNQ2LtnLMzdV4OnOk0epHNqIwxuvPyQY6pgEdPKNbVFt4zY6J5nnmn04%2B4QGvDlocz8BqbZFx2uZyFWBnpoJLSB6g7XtcarfmIYWUw8l16SXyiTbxqGyRLEbi2%2BW97CFsuxhx5CyXB2UbpnAwGUagFDtnn%2BMJ00wjhHR0m%2BDNS7ac7eP8bopCrfBRi4i%2FOrrm0ICWSH%2BnUEwu%2FaaCFSI75MWoaBzg0Od92lZgOxx7iK5Z5hcp%2F1jp9o9GV%2FYnMNKS&X-Amz-Signature=8c527267097bbaedc6049fb8256f607b6d5f08126283118ac260f820b387a99d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TY5F7CI4%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T100607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAi%2FaXV8oJ6bDnO8Ql0L6l%2BEEUKBAo9iGiG2CPnUfATsAiAo%2Fh2rJc3DhuSuHA5OgeEvRhuhht%2B048Q1N8ikI6GQ0ir%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIM4dH8PR6DY9AOyePuKtwDwbCWzYZk3gPYL%2F%2FnEmOyQyUeH3fzYD0c5g4yVmFleG3CP41XJHBwPbc%2Fghm%2FvYc7j9D28fJLI0cEQu9J23E6YewITUJ8KEyIsUhf3m4EytJZgerxqTJM8dfsWqES%2Fr5N9KYWYviV9QWZBwwUShe%2FEyryPjgHEVIfPu3jq%2Bbt4Nx%2F6n4%2FC4TID7nNyjWixJ6UkU1bQpHGup1qsum3ai%2B6lG8oa9XUBoH23CWzzPXrPkxSyEonYYiw03UlM6DHU%2Bc3Cul2YXwSqP61DBzJQhkTSQUu9xkMiSh0ih%2BCU2DOHHIH9OwZGSRYY2wjaZRtjk1FqYOnHLhW8qlWh11baYKt6s6Fz4nRErA3FouQ1bnVVL50rKEQrIMQ7hbiEfVSYdH1DtFq1WS3o%2F1NcKeqDhTZAWDcuxwqocgG3AcHTwFGFXytwWNY%2Bxy2USrzTC0eMazLRk9RVxbCv4zUc8K8L8Ck2sCmMP5JO7Y%2BYYOiQj2%2BdB5uhdRrLRpIaOzLlsSMFOyY3hWFjImzgwAqJ0%2FUNh8O4VBuDadh6E3ChqWTZpiE1cw8fd2wVw8n2dUuO3U%2FxXOxUEvTIW337b3dk%2Bvz2bkUcaAbHEv0e78jqrDhNQ2LtnLMzdV4OnOk0epHNqIwxuvPyQY6pgEdPKNbVFt4zY6J5nnmn04%2B4QGvDlocz8BqbZFx2uZyFWBnpoJLSB6g7XtcarfmIYWUw8l16SXyiTbxqGyRLEbi2%2BW97CFsuxhx5CyXB2UbpnAwGUagFDtnn%2BMJ00wjhHR0m%2BDNS7ac7eP8bopCrfBRi4i%2FOrrm0ICWSH%2BnUEwu%2FaaCFSI75MWoaBzg0Od92lZgOxx7iK5Z5hcp%2F1jp9o9GV%2FYnMNKS&X-Amz-Signature=c145ab2cd639a082ca3acb1efd77bc751b58c748031f0b7dd4d4e720a191f280&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
