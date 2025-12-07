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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVPNBGAL%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T074420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB1EowK2o3nRfVBEUVQ8YsWLK8HMPgts3sBL7nOefBAoAiEAxYB4OX75LeNplRU1bbQefmNJomfKtZfE3Z2biWhI9KMqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLu4ZjBnVyOLBvp4gyrcA755M6NARulGtYQLc7BVr44sscQ3uSnWlEzVyBLOriEmzyTMLMULJVue08Huyy4i2fJchCCxQufnWH8i%2Fpu1IHw2gRaKKV8pJVFEPW8nZqfwWSvF%2B7yIaAqQ%2FXc60Plaw1dGNPeGZhdNxeBDg%2FSj22H7EBJEa%2FcICB%2FnraxFEhgo5TJfpb9n6QRpY7yMXTlG%2FD0Xcv8Fh70YdU1d%2B3ZWfFPwO1qnvVfSxIESPyokO0q0vrLk22nEAcfy6GZbGIseNZayE6lOtZ6TIXkQNrCMPtP4yNRrHN%2FXvmlryb9Tgb8sH5QWnZproUNH4lb6GLJW4Wo8FAmLhrEeAWSxBjzCbu%2BnsOAAbfeLkW6QzFg0CrTxFvvEUUwx0aGLdr7p5YEho7g98SbCEi%2FgJvm9%2BuexBAVfUefURRUh5v9MIGkhXnf3jy4EM2V%2BoTZ8dj64Ge9X%2B4048OZUN9SV2c%2FnTayIOkm0FGsIXkIx0IwtetXoc%2BDUIcerLRgPuFWMEIIH84Yg1AHIymoxP%2B9iV84RX%2FGCdrq5kYjeiGVQzQF42N09N7yZDkAcmfHkOrvDF905YsGngM0USEIb5wpfgpAvlMmvUTWuk0ThcGRpN6fhWRlmXvzCsalFpM0maxeuNBasMJmf1MkGOqUBGH33glKwzj8NpYfM08axJpiuypxfGv%2BvXUKWnIU9zYao%2FedkrheAHG0X109z20bAfORTTJjDfa9%2FJLZ458YiKpYjaIkm8OeTD7A05Rms5ZDalcu8Qhv4732YPkHUH6gi7DNKx%2FNpKFMFqAqkq%2B7rMNbltBRdd1L2DxMhe6zEN8nEHeTD90R2aHGmV4LRcl6%2F1asZo3m9GwvIMAmqc6Suqun55LoK&X-Amz-Signature=5aae438c5c5d83285ad3eeb13bc030e6b25f804fdf8c5a4bf7f8d3dc649d2926&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVPNBGAL%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T074420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB1EowK2o3nRfVBEUVQ8YsWLK8HMPgts3sBL7nOefBAoAiEAxYB4OX75LeNplRU1bbQefmNJomfKtZfE3Z2biWhI9KMqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLu4ZjBnVyOLBvp4gyrcA755M6NARulGtYQLc7BVr44sscQ3uSnWlEzVyBLOriEmzyTMLMULJVue08Huyy4i2fJchCCxQufnWH8i%2Fpu1IHw2gRaKKV8pJVFEPW8nZqfwWSvF%2B7yIaAqQ%2FXc60Plaw1dGNPeGZhdNxeBDg%2FSj22H7EBJEa%2FcICB%2FnraxFEhgo5TJfpb9n6QRpY7yMXTlG%2FD0Xcv8Fh70YdU1d%2B3ZWfFPwO1qnvVfSxIESPyokO0q0vrLk22nEAcfy6GZbGIseNZayE6lOtZ6TIXkQNrCMPtP4yNRrHN%2FXvmlryb9Tgb8sH5QWnZproUNH4lb6GLJW4Wo8FAmLhrEeAWSxBjzCbu%2BnsOAAbfeLkW6QzFg0CrTxFvvEUUwx0aGLdr7p5YEho7g98SbCEi%2FgJvm9%2BuexBAVfUefURRUh5v9MIGkhXnf3jy4EM2V%2BoTZ8dj64Ge9X%2B4048OZUN9SV2c%2FnTayIOkm0FGsIXkIx0IwtetXoc%2BDUIcerLRgPuFWMEIIH84Yg1AHIymoxP%2B9iV84RX%2FGCdrq5kYjeiGVQzQF42N09N7yZDkAcmfHkOrvDF905YsGngM0USEIb5wpfgpAvlMmvUTWuk0ThcGRpN6fhWRlmXvzCsalFpM0maxeuNBasMJmf1MkGOqUBGH33glKwzj8NpYfM08axJpiuypxfGv%2BvXUKWnIU9zYao%2FedkrheAHG0X109z20bAfORTTJjDfa9%2FJLZ458YiKpYjaIkm8OeTD7A05Rms5ZDalcu8Qhv4732YPkHUH6gi7DNKx%2FNpKFMFqAqkq%2B7rMNbltBRdd1L2DxMhe6zEN8nEHeTD90R2aHGmV4LRcl6%2F1asZo3m9GwvIMAmqc6Suqun55LoK&X-Amz-Signature=bcdb11cdfc05553916f776dd41fc03f1fa7473f71b8c3a4418c7d6c9ccf38583&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
