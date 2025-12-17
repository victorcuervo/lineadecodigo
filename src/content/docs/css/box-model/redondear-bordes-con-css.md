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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAVF3LYX%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T050242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDU6O9kCFeYQ9bCHasfNDcifFKxhHbiSYWy3HXiO8RXPAiEAyUORe29e9ITw3QXsMqtV%2FgME9loUx0xUkslGenw5e%2BYq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDFdRFlVK1gu0KLDFCircA4q1NwpDH5C6RUUD0lC0kSuF8ShoVd7yVFKWEWXVF8t1vS%2FU3ASUZCCTRFBquNJqCNjrrqZKfvFarc7a4yPl0CmsaLS%2F97I9aZEDEiBpvTcAd6emfSyPqGzF%2FZsA6%2Fx3MJeZSZ6D5WJYxlPl0fb%2BBOKQrU0DYz7hwcuq0C34yo%2FgFDgxOZz1lez0VwgC5M6Z%2FudbxiWihzGUjc%2FjJ4cT544SVwGZObEGPkJj6x5T%2BAft2iQ9cWn%2FB00nKEP%2FNmPqaHuyI95Ou0U7VmGTbNqNRoHJ%2BjbsIwkZ7mvS%2FN7mzHffN36Z9V3em%2FohbyzmYxcR6164%2FOm%2FEDsSsZhWJ4qU3mXRlDK1hbkf0ZknfbBxNnp2iyXE%2BtyX7nvrwnE71uGuZJI7AFLOOkAikP1i5bE9S9P4MVVMmKmBdhXflMDtF3%2FMT%2By0X%2FpzgG%2FEG748YP33wkFUfbWqwTsIIla6mIDCZVkFPLm2vyVHijMZAsYmCqlgnTbLGBJtATDvHcrI8g%2B2n8J%2BiLr6RKp8lN8pYREMMjPhd0uHiC2G%2BaUOu5UH9d%2BgrykK%2BoKr3ltDH7N8uxcqJTX8mJfs13MVpnIAxWu8kv3ANBdTw0Ln%2BP4MJGJAjZ2E41KX7kbVxjfIIrqDMIvpiMoGOqUBjHvbZukstaK%2FatWfMXYDAK7dWNW2MYAfRjcPHt408lh5Pqmj6XrbG0qZ%2B6xPQ2gEmCEP0s079KAZkQNSw57kU%2FGebmN6w36%2FBYhqXIhkZ4p%2BC5E6GL69SzK2TrfRXH%2BUbC6lx2pNkKPnz58ovCPj1dr%2FRAwc57ujHohLqNG%2BcI5if9vbmUXUMNvIOSq%2BWl%2F0krCp8Fa0FmPB2wn0%2BoDuxI1N9qCI&X-Amz-Signature=73acc671e08b7ccd1a327af6aae60d4c6d340338581bc967ba0d0127ab242b9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAVF3LYX%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T050242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDU6O9kCFeYQ9bCHasfNDcifFKxhHbiSYWy3HXiO8RXPAiEAyUORe29e9ITw3QXsMqtV%2FgME9loUx0xUkslGenw5e%2BYq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDFdRFlVK1gu0KLDFCircA4q1NwpDH5C6RUUD0lC0kSuF8ShoVd7yVFKWEWXVF8t1vS%2FU3ASUZCCTRFBquNJqCNjrrqZKfvFarc7a4yPl0CmsaLS%2F97I9aZEDEiBpvTcAd6emfSyPqGzF%2FZsA6%2Fx3MJeZSZ6D5WJYxlPl0fb%2BBOKQrU0DYz7hwcuq0C34yo%2FgFDgxOZz1lez0VwgC5M6Z%2FudbxiWihzGUjc%2FjJ4cT544SVwGZObEGPkJj6x5T%2BAft2iQ9cWn%2FB00nKEP%2FNmPqaHuyI95Ou0U7VmGTbNqNRoHJ%2BjbsIwkZ7mvS%2FN7mzHffN36Z9V3em%2FohbyzmYxcR6164%2FOm%2FEDsSsZhWJ4qU3mXRlDK1hbkf0ZknfbBxNnp2iyXE%2BtyX7nvrwnE71uGuZJI7AFLOOkAikP1i5bE9S9P4MVVMmKmBdhXflMDtF3%2FMT%2By0X%2FpzgG%2FEG748YP33wkFUfbWqwTsIIla6mIDCZVkFPLm2vyVHijMZAsYmCqlgnTbLGBJtATDvHcrI8g%2B2n8J%2BiLr6RKp8lN8pYREMMjPhd0uHiC2G%2BaUOu5UH9d%2BgrykK%2BoKr3ltDH7N8uxcqJTX8mJfs13MVpnIAxWu8kv3ANBdTw0Ln%2BP4MJGJAjZ2E41KX7kbVxjfIIrqDMIvpiMoGOqUBjHvbZukstaK%2FatWfMXYDAK7dWNW2MYAfRjcPHt408lh5Pqmj6XrbG0qZ%2B6xPQ2gEmCEP0s079KAZkQNSw57kU%2FGebmN6w36%2FBYhqXIhkZ4p%2BC5E6GL69SzK2TrfRXH%2BUbC6lx2pNkKPnz58ovCPj1dr%2FRAwc57ujHohLqNG%2BcI5if9vbmUXUMNvIOSq%2BWl%2F0krCp8Fa0FmPB2wn0%2BoDuxI1N9qCI&X-Amz-Signature=43e57ee18da56d9be4076550ed1ca379c137aa52f6bdd5a1abf5f438f7caabbe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
