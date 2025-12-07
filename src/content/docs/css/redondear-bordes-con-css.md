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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2VDFPAD%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T191725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHmBvQacdn2JF8LPSBwZ3QlxIdTZxcXBSdNGRIR4EDaQIhALpfnpuoZm7EFFRJRBCYVoVmm%2F6c83ngOEf%2FOQo1HaoVKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzcRdDCMPFCTfErRI4q3ANe%2B11aSNujdRaHrPZ3EGUt5wealSseA2hmXtfHTOsAx%2BAVtjIDb2Kd4fGMjb0WyvDIPSuPvIh%2BNL76P%2BiNKY90qgAtL7OEQyjBHPkexJR4jnofUVTXBvVBrzVCfSs3kWGl2kz5bnfijxrb87gANIQ0iEcHoRPrpMSA6X7m10Bt5n9h2GmWJei1mynYOwyR%2FM99dTNDkaSUwuLRk2knnwe0edKgM%2BWDA%2B4euFgmo5YLnFy900Gopuy1HfGUPeRPsbmkrqLaVkOdhd5n6Jh52yz5MLRYyEM6mLvC1eS3eClqFjGy07oPSx1LRlyyEfbJwQNkn9yePgD%2BXL1xhDHtK4%2Flf5jAUJ23QTqT5BQrxto%2BnHjKP06%2BeTN7COMbEyBVBtylkrfyqHu%2Bgb31bmJVnPh8BqNwqoOe9ZP8C3wCHQOuK95ztxZto0dAzF5bQvCiGcdsTEZjn8w6gVfSJFUkd%2Bs7Pa%2B0ebbsbR14U4SCgzen0uTF5RWYUeYlPBUxWFp0xqpVcwETGpDTzyvygYM7nIn2s97qSdAs%2F3a7pYcuUMl%2Bsy4KNqG1CDMApF2wV6Wam%2BCTb83yY6AqPtaoWAjdYzhAVCzx3ZZ8%2Fiv5g4EW2LFxysgxsuUYftyLicoqiDDvuNbJBjqkAX4YtEHtJEh9%2BVAjHF9PMGnfwhL2wWI6EuROUDv16N9fe%2BK74kydmPlfup8xQrGQlfc4vHZ2iQP7txE8vJ5gXDKwdfNeQcy3cmDRQ9BYi4OCMWWKDTuITTdPi232s6YnFI3eACAJ3SxDXMp88s%2FOCgGtlLn1wklBSQKz%2BgFvvtFdeALfgGa4kZWOnjIlCwYXvRzfLVlhu9hseSGn9cHesfnZ0Y%2F%2B&X-Amz-Signature=395e271afe4ae6730b8ef2e3ae96c65bf4c875acc0537533b89b95847abb7b12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2VDFPAD%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T191725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHmBvQacdn2JF8LPSBwZ3QlxIdTZxcXBSdNGRIR4EDaQIhALpfnpuoZm7EFFRJRBCYVoVmm%2F6c83ngOEf%2FOQo1HaoVKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzcRdDCMPFCTfErRI4q3ANe%2B11aSNujdRaHrPZ3EGUt5wealSseA2hmXtfHTOsAx%2BAVtjIDb2Kd4fGMjb0WyvDIPSuPvIh%2BNL76P%2BiNKY90qgAtL7OEQyjBHPkexJR4jnofUVTXBvVBrzVCfSs3kWGl2kz5bnfijxrb87gANIQ0iEcHoRPrpMSA6X7m10Bt5n9h2GmWJei1mynYOwyR%2FM99dTNDkaSUwuLRk2knnwe0edKgM%2BWDA%2B4euFgmo5YLnFy900Gopuy1HfGUPeRPsbmkrqLaVkOdhd5n6Jh52yz5MLRYyEM6mLvC1eS3eClqFjGy07oPSx1LRlyyEfbJwQNkn9yePgD%2BXL1xhDHtK4%2Flf5jAUJ23QTqT5BQrxto%2BnHjKP06%2BeTN7COMbEyBVBtylkrfyqHu%2Bgb31bmJVnPh8BqNwqoOe9ZP8C3wCHQOuK95ztxZto0dAzF5bQvCiGcdsTEZjn8w6gVfSJFUkd%2Bs7Pa%2B0ebbsbR14U4SCgzen0uTF5RWYUeYlPBUxWFp0xqpVcwETGpDTzyvygYM7nIn2s97qSdAs%2F3a7pYcuUMl%2Bsy4KNqG1CDMApF2wV6Wam%2BCTb83yY6AqPtaoWAjdYzhAVCzx3ZZ8%2Fiv5g4EW2LFxysgxsuUYftyLicoqiDDvuNbJBjqkAX4YtEHtJEh9%2BVAjHF9PMGnfwhL2wWI6EuROUDv16N9fe%2BK74kydmPlfup8xQrGQlfc4vHZ2iQP7txE8vJ5gXDKwdfNeQcy3cmDRQ9BYi4OCMWWKDTuITTdPi232s6YnFI3eACAJ3SxDXMp88s%2FOCgGtlLn1wklBSQKz%2BgFvvtFdeALfgGa4kZWOnjIlCwYXvRzfLVlhu9hseSGn9cHesfnZ0Y%2F%2B&X-Amz-Signature=6099a5ff5898485268c44b5a23f9f639270c22c3454e22ceede77fa8a902b178&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
