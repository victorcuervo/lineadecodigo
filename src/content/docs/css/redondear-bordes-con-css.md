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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657N5NGIZ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T143801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8rOZ0Ea%2Bvwy%2FGBcsukQKsyeHHHdbY6v5z6nO9Y8MlmgIhALl3CG8dCcomRxKurhJOpW3Lhzr%2FOeWhbnqdpmPW43ecKv8DCHUQABoMNjM3NDIzMTgzODA1IgwqXDuUxEW0w%2BJZSqkq3ANigAG5RxyJqTs1xZqQrEYsIyprBINRgmYlmf%2BBtLfRTMxaeFlo7EHRJoGSzenCvtbecM345DnOQTwp9mvylH0TxbFAyOu6GzUI75LYOEcHhBKh8GeaZ%2FY459Ol5zcTUMUSP64GZtYPVluJTNAnP3E6i7nmGgSqdcTJSFC7LxiQRc8dIzSVFXU4uO%2FLuY%2B9uOwsJlS3ndMupGBSzbEcBylsNiE6UUZPnQIge295ha1rIhohYYRF%2FLSFfbcyJwPxJF65CpiXqeUTxUYIAEK3O7W3a%2FEUvJRtgjZBUmu4uJaoVoT7INWnDDkr3OVm6E0SCMtC2WW7sr4peJ84gYzJfv5BGbA7dR17QnntOZIClyzB5Tc1MvXBeicEYX9z%2Bgm1wIZeJHIZKxfZbPwEpgNP55B9x7s90B2Nhc0IVEN%2Bbn%2FTVd9CL6xj6wewV42LEcxkvrEciVFG8bqqKWupJma3oFv8IU6cL%2BE2OH1PB9HTEUFEhomDuhOMtJnYbBg3JQNgex7uHnfy28zKiD%2FKvefLfe67PXb%2BbIrKQCcHxPMLTBoBSekApksXHqPE00ZxL7SAS%2BfqXVqjLsonbiDjFRcRDt4kS8YVgiB5nymgxg9J7%2Bx8vJGJ3m2xFIjkJGLmMDCEp9DJBjqkAXwXbtxfUw47K1E42teCxSdoU0JmKLQLsm1XNaIabj86OIAXTVM54SBMsJTthg%2FOGJvlblWT7VCjdhEM%2B2erXGKEr%2Bks3OMUjD1HRIgk09Q6a7E3QOBUV11NsPBBxQuKs2uNaxe5m2i33ssuLZRE9Q12N5xk%2F4BZiawL%2FjK2FTg51U66SlDckDfoomCtDufrjtfS%2BlpeieupxSX4L9ChWo7mbpuJ&X-Amz-Signature=d38e8975c5c7bf764e192bbff145a189d6f60f41f9a91c4790ad8954915b2e0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657N5NGIZ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T143801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8rOZ0Ea%2Bvwy%2FGBcsukQKsyeHHHdbY6v5z6nO9Y8MlmgIhALl3CG8dCcomRxKurhJOpW3Lhzr%2FOeWhbnqdpmPW43ecKv8DCHUQABoMNjM3NDIzMTgzODA1IgwqXDuUxEW0w%2BJZSqkq3ANigAG5RxyJqTs1xZqQrEYsIyprBINRgmYlmf%2BBtLfRTMxaeFlo7EHRJoGSzenCvtbecM345DnOQTwp9mvylH0TxbFAyOu6GzUI75LYOEcHhBKh8GeaZ%2FY459Ol5zcTUMUSP64GZtYPVluJTNAnP3E6i7nmGgSqdcTJSFC7LxiQRc8dIzSVFXU4uO%2FLuY%2B9uOwsJlS3ndMupGBSzbEcBylsNiE6UUZPnQIge295ha1rIhohYYRF%2FLSFfbcyJwPxJF65CpiXqeUTxUYIAEK3O7W3a%2FEUvJRtgjZBUmu4uJaoVoT7INWnDDkr3OVm6E0SCMtC2WW7sr4peJ84gYzJfv5BGbA7dR17QnntOZIClyzB5Tc1MvXBeicEYX9z%2Bgm1wIZeJHIZKxfZbPwEpgNP55B9x7s90B2Nhc0IVEN%2Bbn%2FTVd9CL6xj6wewV42LEcxkvrEciVFG8bqqKWupJma3oFv8IU6cL%2BE2OH1PB9HTEUFEhomDuhOMtJnYbBg3JQNgex7uHnfy28zKiD%2FKvefLfe67PXb%2BbIrKQCcHxPMLTBoBSekApksXHqPE00ZxL7SAS%2BfqXVqjLsonbiDjFRcRDt4kS8YVgiB5nymgxg9J7%2Bx8vJGJ3m2xFIjkJGLmMDCEp9DJBjqkAXwXbtxfUw47K1E42teCxSdoU0JmKLQLsm1XNaIabj86OIAXTVM54SBMsJTthg%2FOGJvlblWT7VCjdhEM%2B2erXGKEr%2Bks3OMUjD1HRIgk09Q6a7E3QOBUV11NsPBBxQuKs2uNaxe5m2i33ssuLZRE9Q12N5xk%2F4BZiawL%2FjK2FTg51U66SlDckDfoomCtDufrjtfS%2BlpeieupxSX4L9ChWo7mbpuJ&X-Amz-Signature=c63790ab5d7e0d04eb3c9b4e87c110993a72fcc29f5575b538aa36dc06e7fe24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
