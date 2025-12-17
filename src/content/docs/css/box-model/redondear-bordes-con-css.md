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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5436OPU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBgk8vVq9gwauf%2BRAt2OWnBOmnEB%2BT6hua9qsd7pAb14AiEAvjhnsTL7qlLaBEFAmFzU92fo0LPWEsQGoW8X%2BWyVESYq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDN5phUwhzWWQxz5iHyrcA4ZiKFMupVE88X4BZ3zK2PiNyglf4dK5sih44Jea2DUQB8%2BL7UylFtjyu%2B9nZpH71PYm8DQA%2BygTY6Fsk04tOblJ9sC2t%2FyHl5nfIrhBqKPBOMbrWIp7yNjm7f75V3Eah27fl5tVvLF2TLUmrODrPxbrKjenrR2xRZKNJsV74%2BgXgcrhl1WTwNP%2FiiH6CH7qIxyL3%2FKaoWKuZwtfgD16WwgSyAQKURp4OXmUOx%2B7jul7y6Pq%2Fzd3FLOg4oGPSdaPLni09ZVfigXtK99wmDh8bN9qtzuqhGDuenFYaf3mOqw7yVIZbNegjvVueylC6o8rYuvZojIRbVSfqfKykdp9VS5O1fxEudq7fEq%2FDqybc5%2FxyNGq436vRczAgKle7kD1KzGdry1QH8NlSUDPPPQAdzRtWYfc5%2Flmh4C5X%2BBizqgPa0vIjx62ZUbeQaSpFx46k4YZFUcM9yt0JjtaH7zk7QfQFASXWhjzELyjam4B5NWGHfjgJsq1KJALlb%2Fgi8ftJlojKv7ZHkyX0nfGB7AphTZ1wgTG7bvD8b8Up6o8RYt0banB9tRk1T8lKbwkab4neF4Y021KY4J22NomKBbKTcbYSRd03VVRBfATBBfbK77zEEQYTZeISG%2BulBEvMIr9h8oGOqUB7UvW8VlEn6NSa29FtBPuWOR58wasymMWMbeaeVRj1vB7V3R7VjLTqNLjHAE1nZKe041TUEcIjljRD9YAfk2E1YNDsJimZEKXqA6mxStrq6ghw6xQabYhelXivjJMReiG5A101JRO8HwwOziSPPww2CgRUpaLEa3zBpM8zXDQgbdk2dNMmlM9jxSgtqJgHkGx0dGeJKRMPIHapq6h4PQKvm1k70en&X-Amz-Signature=a32be1adac0eb10965d1ed7f46ff0e11caae5ae5ea934b74ad08f1139f305047&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5436OPU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBgk8vVq9gwauf%2BRAt2OWnBOmnEB%2BT6hua9qsd7pAb14AiEAvjhnsTL7qlLaBEFAmFzU92fo0LPWEsQGoW8X%2BWyVESYq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDN5phUwhzWWQxz5iHyrcA4ZiKFMupVE88X4BZ3zK2PiNyglf4dK5sih44Jea2DUQB8%2BL7UylFtjyu%2B9nZpH71PYm8DQA%2BygTY6Fsk04tOblJ9sC2t%2FyHl5nfIrhBqKPBOMbrWIp7yNjm7f75V3Eah27fl5tVvLF2TLUmrODrPxbrKjenrR2xRZKNJsV74%2BgXgcrhl1WTwNP%2FiiH6CH7qIxyL3%2FKaoWKuZwtfgD16WwgSyAQKURp4OXmUOx%2B7jul7y6Pq%2Fzd3FLOg4oGPSdaPLni09ZVfigXtK99wmDh8bN9qtzuqhGDuenFYaf3mOqw7yVIZbNegjvVueylC6o8rYuvZojIRbVSfqfKykdp9VS5O1fxEudq7fEq%2FDqybc5%2FxyNGq436vRczAgKle7kD1KzGdry1QH8NlSUDPPPQAdzRtWYfc5%2Flmh4C5X%2BBizqgPa0vIjx62ZUbeQaSpFx46k4YZFUcM9yt0JjtaH7zk7QfQFASXWhjzELyjam4B5NWGHfjgJsq1KJALlb%2Fgi8ftJlojKv7ZHkyX0nfGB7AphTZ1wgTG7bvD8b8Up6o8RYt0banB9tRk1T8lKbwkab4neF4Y021KY4J22NomKBbKTcbYSRd03VVRBfATBBfbK77zEEQYTZeISG%2BulBEvMIr9h8oGOqUB7UvW8VlEn6NSa29FtBPuWOR58wasymMWMbeaeVRj1vB7V3R7VjLTqNLjHAE1nZKe041TUEcIjljRD9YAfk2E1YNDsJimZEKXqA6mxStrq6ghw6xQabYhelXivjJMReiG5A101JRO8HwwOziSPPww2CgRUpaLEa3zBpM8zXDQgbdk2dNMmlM9jxSgtqJgHkGx0dGeJKRMPIHapq6h4PQKvm1k70en&X-Amz-Signature=b889840f19ce36951632048f6ff49fddc8a881fa2acd68f357f23ea168b7eeef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
