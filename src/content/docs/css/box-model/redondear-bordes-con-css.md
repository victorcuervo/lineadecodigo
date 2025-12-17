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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6EHX4JV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T081355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGQyW56%2FDukTTgeTbs4EbArXL86xedZHoQo8rBMOc3riAiB560g1FWIZjjkzlIb%2B9f4dWLSVRw2rs14kR9%2BdrMKSPCr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMKlsI4t3qZIlK503DKtwDDZntqLDFMZLG%2Fu62cAwPLjckGcRsSnrlUjLoAFb7E63gxUSMBVo8wP6BaAF8fxetax8xDCoFYWvzIhkePkqsk%2BGaZ%2FCxF0bV3hHnjuLOoQSG8Pov5oXsLV7639navF9imO7iDttsuS3YNb83dDSJZ3tj6F4XMblONpPMdKoLAA6L4fxuLYN%2BwOAesQj9QnFkNfPIPul5%2BBb2hfw4PxC9cQ%2Bycs6i1b7A2al4v%2FCtuXKnBTZ4A%2FGWOWTC8FbYkSCkFgypOwXUV9PdiVYLaIhueZh8p%2BVIt2fUTsxSVXNTsMMceuUXpJc6JmGKvrukJIzp3%2B0rXIdFG34yg52%2FUvUfrDf1EOm6cINcuxJsE93rhZR74lkacl60iu9nU4edcrrqm1sL%2BIdVLvFfhk7%2By%2FnHO6ztA5XPOw7yNsDst1kVfOMgeiRCjEaOz8TfGMZzwUHlt0gnsRQtUyrws7D58r%2BKbWYfkfm1YzbIWGYSN3V5B8vVCIcaUinu%2BN3nXf6MJHq5sRVVJHoXqih2%2BRN%2F5ZmwZVQTXSTISOHsRCXMKQjYl6JrZmnTiM4TIl%2BhkQzXwr1rZDQrJLvZvpPBqaMg3XheIlhfIB8bMvWlDfpz%2FjlkCjskGbkkiiN4j77VdFIw77eJygY6pgHML%2FlUkvYFpZg3wcoO%2BQ3PGHvheXKpt%2Bt940lztx%2BRFbeb6tBs%2F6jJOQzzy5J9HIdjVsbTd3UjJCAzd0cHyLzAy0HgtWmEWI2kPWGPiQ2R%2FOvyPxRqjPCi1H%2Bb6rhYMDzuJbGhtPicm5vOJUX%2BLrzhMcT6gAN871FG6VNi4vtffw4Merf%2Fw0PhE7tZ6mmR79HoNreA3aawXSjr5P2aOno035fsittP&X-Amz-Signature=6b73a3c74bf497ed05ddbdd3160c1178d5f81ad463432affbf54f4f1ddf91182&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6EHX4JV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T081355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGQyW56%2FDukTTgeTbs4EbArXL86xedZHoQo8rBMOc3riAiB560g1FWIZjjkzlIb%2B9f4dWLSVRw2rs14kR9%2BdrMKSPCr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMKlsI4t3qZIlK503DKtwDDZntqLDFMZLG%2Fu62cAwPLjckGcRsSnrlUjLoAFb7E63gxUSMBVo8wP6BaAF8fxetax8xDCoFYWvzIhkePkqsk%2BGaZ%2FCxF0bV3hHnjuLOoQSG8Pov5oXsLV7639navF9imO7iDttsuS3YNb83dDSJZ3tj6F4XMblONpPMdKoLAA6L4fxuLYN%2BwOAesQj9QnFkNfPIPul5%2BBb2hfw4PxC9cQ%2Bycs6i1b7A2al4v%2FCtuXKnBTZ4A%2FGWOWTC8FbYkSCkFgypOwXUV9PdiVYLaIhueZh8p%2BVIt2fUTsxSVXNTsMMceuUXpJc6JmGKvrukJIzp3%2B0rXIdFG34yg52%2FUvUfrDf1EOm6cINcuxJsE93rhZR74lkacl60iu9nU4edcrrqm1sL%2BIdVLvFfhk7%2By%2FnHO6ztA5XPOw7yNsDst1kVfOMgeiRCjEaOz8TfGMZzwUHlt0gnsRQtUyrws7D58r%2BKbWYfkfm1YzbIWGYSN3V5B8vVCIcaUinu%2BN3nXf6MJHq5sRVVJHoXqih2%2BRN%2F5ZmwZVQTXSTISOHsRCXMKQjYl6JrZmnTiM4TIl%2BhkQzXwr1rZDQrJLvZvpPBqaMg3XheIlhfIB8bMvWlDfpz%2FjlkCjskGbkkiiN4j77VdFIw77eJygY6pgHML%2FlUkvYFpZg3wcoO%2BQ3PGHvheXKpt%2Bt940lztx%2BRFbeb6tBs%2F6jJOQzzy5J9HIdjVsbTd3UjJCAzd0cHyLzAy0HgtWmEWI2kPWGPiQ2R%2FOvyPxRqjPCi1H%2Bb6rhYMDzuJbGhtPicm5vOJUX%2BLrzhMcT6gAN871FG6VNi4vtffw4Merf%2Fw0PhE7tZ6mmR79HoNreA3aawXSjr5P2aOno035fsittP&X-Amz-Signature=9e54c182e263a0f5f0c296596c1693ebea5b8694355b91b4dd28b0066160e859&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
