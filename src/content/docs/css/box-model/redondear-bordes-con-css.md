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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJHFHXOB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T162051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEMXRLOJXGQtWXJz4FoumWKaQWo7HGivOReldr6DhI1GAiBcQ2X17YW3e7aVRsjJxFWyvA9%2BzTcvQYrM8Uc1iHrZoCqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BcPxd104htIn4KS3KtwD0FUgmhKOHPvL0N67vRqHCXO3XpZbGlGBPozYcJ7VgghGWthUOEVC2CfoCLegb3iYF7keX0d6qcsis%2F6Jp5GehMgmymCQlqxNfQGse7xXPtz9lbAmM3gvHMI2DEmFEd5KMKPcTRKObiFWbtfpEIbGAziEIpn%2FHFmF%2FWBJfS62XT51Ulw3k9K47wNp9mbkNmZVM3oFuXjM6WXcFpzOzxu%2BT3LNk%2BqQREINcmsBuaoO6U%2FPesdI89CstOcCtkRWKkf54vCvxj9R%2B48UcWTOOHJ5oe817GbBnsxQSqO7m6m9p127s4jbHhfC6q6aN7UQgmXNA5AQWZP9vzYoQArjh1Zgj5wAZVuAFQRI6m7pPud3pWM%2B0UgnrvOVsn%2BiWTOjXkvPbWWEHC2Xg03kNVV1iJRCsw%2FlJCX3xiXcawurptZtx2%2Bv3cdmhEOeHqvh98q1wFkbHR6%2B1DQtDY6QAb6XJe1L0SKnBbktnSOeyjT%2B0RMsM2IJ6DuaAVAIEEvoaCxw6fMkf1F5pLt8XOk7oK%2B748stHHE0sBRxKmIsCBlVIDTSTntJKfxINRNx9bog0oMcp19C7BgjP3y9RkmkF2Mxt%2BQ%2BLt0u8mGRc0DWvQwaRpq4D4exGhMpK4im35iMjLkwoJ%2BLygY6pgEtV%2Blc21e%2FHn15GRLebmL%2BiQDOEVjK3V6f%2Fx7b2laNY%2BZftQlTkEPlTCktkM3qcUiludhtgAPoQ%2BziqPMvF6VmVu1FBrXjcy8qVtedH%2BfcyufqyzwiREls8wcURjvEWGKd8j6%2BzbCwKERCwH5aC5UQLFvYq8Gakhu0rtU79RXdH3IXmJDmxUczVJf0lUBVpcRz1kDrJyYpXqDrxQ4II0hhsuGsgZEC&X-Amz-Signature=d3b236b1ddd7ab4b6f1f24896ff93ac9d42faa8c9bd9b34cde8e7573acefc324&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJHFHXOB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T162051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEMXRLOJXGQtWXJz4FoumWKaQWo7HGivOReldr6DhI1GAiBcQ2X17YW3e7aVRsjJxFWyvA9%2BzTcvQYrM8Uc1iHrZoCqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BcPxd104htIn4KS3KtwD0FUgmhKOHPvL0N67vRqHCXO3XpZbGlGBPozYcJ7VgghGWthUOEVC2CfoCLegb3iYF7keX0d6qcsis%2F6Jp5GehMgmymCQlqxNfQGse7xXPtz9lbAmM3gvHMI2DEmFEd5KMKPcTRKObiFWbtfpEIbGAziEIpn%2FHFmF%2FWBJfS62XT51Ulw3k9K47wNp9mbkNmZVM3oFuXjM6WXcFpzOzxu%2BT3LNk%2BqQREINcmsBuaoO6U%2FPesdI89CstOcCtkRWKkf54vCvxj9R%2B48UcWTOOHJ5oe817GbBnsxQSqO7m6m9p127s4jbHhfC6q6aN7UQgmXNA5AQWZP9vzYoQArjh1Zgj5wAZVuAFQRI6m7pPud3pWM%2B0UgnrvOVsn%2BiWTOjXkvPbWWEHC2Xg03kNVV1iJRCsw%2FlJCX3xiXcawurptZtx2%2Bv3cdmhEOeHqvh98q1wFkbHR6%2B1DQtDY6QAb6XJe1L0SKnBbktnSOeyjT%2B0RMsM2IJ6DuaAVAIEEvoaCxw6fMkf1F5pLt8XOk7oK%2B748stHHE0sBRxKmIsCBlVIDTSTntJKfxINRNx9bog0oMcp19C7BgjP3y9RkmkF2Mxt%2BQ%2BLt0u8mGRc0DWvQwaRpq4D4exGhMpK4im35iMjLkwoJ%2BLygY6pgEtV%2Blc21e%2FHn15GRLebmL%2BiQDOEVjK3V6f%2Fx7b2laNY%2BZftQlTkEPlTCktkM3qcUiludhtgAPoQ%2BziqPMvF6VmVu1FBrXjcy8qVtedH%2BfcyufqyzwiREls8wcURjvEWGKd8j6%2BzbCwKERCwH5aC5UQLFvYq8Gakhu0rtU79RXdH3IXmJDmxUczVJf0lUBVpcRz1kDrJyYpXqDrxQ4II0hhsuGsgZEC&X-Amz-Signature=9022fa5a4f54a1ea645022eb868e2016194fb569af47e2e7f8d69655780cc591&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
