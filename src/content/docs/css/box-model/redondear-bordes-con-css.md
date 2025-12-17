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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QODMIIOS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T191233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8MlrHCDcd6k2GnVdL9HGeghR%2BWikzSfUtFKpALvtorQIhANyj%2FFxKYD%2F9hLzhov0qQp6wXf1A2TqYrk0cYOapQ9a1KogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyqi%2BBvotzd04KBZhAq3AMyS2yVkF0d5DNqEzIlu5L9p0oFVpj3vCXhMDA0AaBXBYaWH18xCBgsYd1ZgV%2BNtI8XutMRgshgPGEoIPoxiPzSSWj87EPoUFuqUMJRhhFLsNcdQgmF%2FvU3HpBSTqSYpSdt5wckOBV2Rolp0K81ElO3mYohFVdXVHSjAUiXAwBx%2B2v4afAxhWKwV7vBnZTNU5VNZyEd6ZZAQpW4CI6oQy36NzFMmXg3seFC7yUZo3FlkvbUtoHs717DYDr64TVPJbkVAsfaZhCECZEb5qNh0MoB5VG0Dh55AqdRyk05cm2kyfyVSkOFtQtBXvOXJtWqfSRkHLdKLN9GK%2B8IC8fCWscdrl%2B6%2BZf4YoXdk6ko0ueiaTRxyLz8m%2FnBpsl643vs5ImowwRKJ6T9oyQxg2tT4PTVrGUbKSKs5%2FBlygimggBBDkCZP%2BQjd36OmNWDGXkvRf5hotnYpKIvKD4Bi%2FHGPizXy5D8s2j2Zg517te%2BSVx%2BK7PL66t4z%2B7kWkSZI53yneT1%2BwtM4HdVHRJZB25IbOTc5IcLn5sfzi8cC1e8yft5EXLKvySVbCagoSWG8EZVpZBo9VB4aBer6cgAiMn0SdKuHFqbZmb8thmd2zdsAZiuzK4RgJFMyJESHtYRCzDknovKBjqkAbmF%2FlEJoO6VLz4H6%2FUAGxd%2FJztUp9FwXeB7ZSGVCXagrd0LZx5PFa0Xfz%2FttLHA2P8v4R8aym0QrcN5n%2F72Vsax8wADgfZMtIF9GD8FQXxZg19LFAMckEcNKth%2B7bAlkoJJjXAp7UnQHMkfBZmb3RxwN4Bzz2aUbYtP7DSys66HIbIl5rZ%2FG5p0DwW%2Br9qw7BF5dOPLZt9vuk51BNWK2TTSYJZa&X-Amz-Signature=44bc1a917352e98ca4fad3b8d0e1d925438e4ae54512c251346eb1cd652800ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QODMIIOS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T191233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8MlrHCDcd6k2GnVdL9HGeghR%2BWikzSfUtFKpALvtorQIhANyj%2FFxKYD%2F9hLzhov0qQp6wXf1A2TqYrk0cYOapQ9a1KogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyqi%2BBvotzd04KBZhAq3AMyS2yVkF0d5DNqEzIlu5L9p0oFVpj3vCXhMDA0AaBXBYaWH18xCBgsYd1ZgV%2BNtI8XutMRgshgPGEoIPoxiPzSSWj87EPoUFuqUMJRhhFLsNcdQgmF%2FvU3HpBSTqSYpSdt5wckOBV2Rolp0K81ElO3mYohFVdXVHSjAUiXAwBx%2B2v4afAxhWKwV7vBnZTNU5VNZyEd6ZZAQpW4CI6oQy36NzFMmXg3seFC7yUZo3FlkvbUtoHs717DYDr64TVPJbkVAsfaZhCECZEb5qNh0MoB5VG0Dh55AqdRyk05cm2kyfyVSkOFtQtBXvOXJtWqfSRkHLdKLN9GK%2B8IC8fCWscdrl%2B6%2BZf4YoXdk6ko0ueiaTRxyLz8m%2FnBpsl643vs5ImowwRKJ6T9oyQxg2tT4PTVrGUbKSKs5%2FBlygimggBBDkCZP%2BQjd36OmNWDGXkvRf5hotnYpKIvKD4Bi%2FHGPizXy5D8s2j2Zg517te%2BSVx%2BK7PL66t4z%2B7kWkSZI53yneT1%2BwtM4HdVHRJZB25IbOTc5IcLn5sfzi8cC1e8yft5EXLKvySVbCagoSWG8EZVpZBo9VB4aBer6cgAiMn0SdKuHFqbZmb8thmd2zdsAZiuzK4RgJFMyJESHtYRCzDknovKBjqkAbmF%2FlEJoO6VLz4H6%2FUAGxd%2FJztUp9FwXeB7ZSGVCXagrd0LZx5PFa0Xfz%2FttLHA2P8v4R8aym0QrcN5n%2F72Vsax8wADgfZMtIF9GD8FQXxZg19LFAMckEcNKth%2B7bAlkoJJjXAp7UnQHMkfBZmb3RxwN4Bzz2aUbYtP7DSys66HIbIl5rZ%2FG5p0DwW%2Br9qw7BF5dOPLZt9vuk51BNWK2TTSYJZa&X-Amz-Signature=4665f43b0904ab38e4cfa256a830cbc21174a19a19ceadca2bf30a801c33fd68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
