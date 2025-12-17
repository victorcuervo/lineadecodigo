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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UDMXQAN%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T052946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID6yI6ZjOJ02lE3iSnsp6%2BPt4KepPPfleusU3aETHa4oAiBTW26x2ICp04hEJ5RUU%2BTCDmdKLRuirSQwbbJ0K2ykNSr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMUJNwRf2lRQPmyKG2KtwDVMoF6KjFTdCaxvtC%2BqhoEPnILMQo%2BefB5BeLFSnQ2kVD83nYJZ8oj8U8XjZIER%2BHeODTOOZ3P39XWNl2vzp7Ajs3JiY%2FLqDzC%2FkGEt5x%2FtqRbuj8T6NvCM6C7zE%2B9RXxwB7ZJqdzpDaspt0hUcczL7kVka9J1ePfflltISy2vVcISb6hcGKSRGSGGde1Xuj4u69gw%2Bj2qLLzoLPQ34ssOsipoepDIjlucq3EhWcM2UC0%2Be3qn0SPrwheF94uNKbl8lZ1w0I%2FEhoOBMchLlDpvznuNXyjQphwP6puS0PrKdTBbiZZUBXJGuu58GmfglUpKuvxyZngcP6Zsy2%2FqfE%2FEN%2BOTs11mGOYoxJWyzK5%2F5h59Beo1V1sAg6pkFyCVFdwa1nUXwFXUyrBIzY6gx4nHajT3a18WAnrP%2BdVXKFKe23KiRoRWPXA45dEPIMmSXdadU2%2F7PQktVTYLy%2BEJB29Hje%2Fmws9CIXyHABFpJWeLg7xNTNEL0sFclz%2Fr%2FprMU6lRVGBDuImVQ7GIAO7qZpz3KMWmVgjuZIDlJZJYl6APAmkSdC9pvJ0z%2FxWNIL9yYqd6A8cAUi3tDDTJyTG1YEeK29lCFA4YdzjExjpMHzcjLQZ7hnUPjtzIxDOpCwwlOmIygY6pgEJDM5gaYOQObjvNFEKMFnEEJk%2BGALZo4YdrQtZkUj5jNLnQuHjDyfy6sJJSnE8DeH7QEa1Z5svu%2B8Ajq4iY7T6MKfoxSn4N2acFWw85uj1xknxTMi5IW2Lo%2B8jovtEf5zPq4ObIUkFbJNSKD%2FefSRQBsXekWrDYlBh4a4BLpEbSeALz4RSVZV1n8JAoKBWGcqXHvj9SgAfD%2Fq7f8bXMA6P1LJJtZ3z&X-Amz-Signature=d45440f13815ad08dc6c555671583a18097794b16d28891767053159f2594b1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UDMXQAN%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T052946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID6yI6ZjOJ02lE3iSnsp6%2BPt4KepPPfleusU3aETHa4oAiBTW26x2ICp04hEJ5RUU%2BTCDmdKLRuirSQwbbJ0K2ykNSr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMUJNwRf2lRQPmyKG2KtwDVMoF6KjFTdCaxvtC%2BqhoEPnILMQo%2BefB5BeLFSnQ2kVD83nYJZ8oj8U8XjZIER%2BHeODTOOZ3P39XWNl2vzp7Ajs3JiY%2FLqDzC%2FkGEt5x%2FtqRbuj8T6NvCM6C7zE%2B9RXxwB7ZJqdzpDaspt0hUcczL7kVka9J1ePfflltISy2vVcISb6hcGKSRGSGGde1Xuj4u69gw%2Bj2qLLzoLPQ34ssOsipoepDIjlucq3EhWcM2UC0%2Be3qn0SPrwheF94uNKbl8lZ1w0I%2FEhoOBMchLlDpvznuNXyjQphwP6puS0PrKdTBbiZZUBXJGuu58GmfglUpKuvxyZngcP6Zsy2%2FqfE%2FEN%2BOTs11mGOYoxJWyzK5%2F5h59Beo1V1sAg6pkFyCVFdwa1nUXwFXUyrBIzY6gx4nHajT3a18WAnrP%2BdVXKFKe23KiRoRWPXA45dEPIMmSXdadU2%2F7PQktVTYLy%2BEJB29Hje%2Fmws9CIXyHABFpJWeLg7xNTNEL0sFclz%2Fr%2FprMU6lRVGBDuImVQ7GIAO7qZpz3KMWmVgjuZIDlJZJYl6APAmkSdC9pvJ0z%2FxWNIL9yYqd6A8cAUi3tDDTJyTG1YEeK29lCFA4YdzjExjpMHzcjLQZ7hnUPjtzIxDOpCwwlOmIygY6pgEJDM5gaYOQObjvNFEKMFnEEJk%2BGALZo4YdrQtZkUj5jNLnQuHjDyfy6sJJSnE8DeH7QEa1Z5svu%2B8Ajq4iY7T6MKfoxSn4N2acFWw85uj1xknxTMi5IW2Lo%2B8jovtEf5zPq4ObIUkFbJNSKD%2FefSRQBsXekWrDYlBh4a4BLpEbSeALz4RSVZV1n8JAoKBWGcqXHvj9SgAfD%2Fq7f8bXMA6P1LJJtZ3z&X-Amz-Signature=c178f18a77cc2c165dbad31ca2336b755ba6684c9a4107d0677917e5a6f51865&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
