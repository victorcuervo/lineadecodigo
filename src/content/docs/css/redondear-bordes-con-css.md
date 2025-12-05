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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LMNNEFZ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T081519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH17PBXBiMU6EQWwn%2F7sW0lCejHI5j3yCOZBijHrSHhZAiAaUFIHFlXfjA5MWmNnU5KxsEJrr811eN2Xjc2v9MEdrir%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMWqFFbT%2BCMdFkL0ZKKtwDF5QgUoC1VGtkkUir7FY7%2Fv0YWEefLIqVuOr6ODGAf8w5gEp6de0IXqoU0yRFM9OJI2CTOI8Ao8S5ZIDYORIocvYDWB%2B3UAYInUQXEmwNV67VNIkl%2BnMBtWDhL8YtwTVkcfAEQOrF3iLrWTDMV7k4WnYPF2WCMOm25AiebTrO0%2FuyAXkkMmO6%2B6aoAKbes5Oz9dI2fDczCsdps9V%2FOvP9tH3QWn6HJpLMAn%2Fkjefo9Ks%2BXb3Lb%2F3NK9SudYlwLb11vqG2XKHfG0VURadFXEeG4Rd0YwSBuAe0ymhVVro9OGnp%2B9apWE6T%2Bf4bfkrOvvCpW%2BHqr8svBpkIDt%2FWIioehaf7d7XUlWrea24u0lgI7kp5JODGXet9Zpe%2BdOMkGgfldYgU4c95ZhMZGkS18ulUm6IlGjUggHioUylQ4ZFMofIEFBN8jg3%2FN9%2BP53PMwllS0ffI%2FDFXll8AjItnawdH%2BaV%2Bu1TJ%2FLvllpzXLOuHiDxtuT6bzmXZ5xKZOcgraBtgdjVkU9TuoscfFgQEeEyjdWANl5IivCJpboYHdPGyw0x6vsLvQEh3kt00cU%2B4GizrR3h50jPsI6%2F0cqfa6BbMQ8%2BGJV%2FGFOXWfTL7dnkrxVh1UdHoyigDUs05I2ow2KzJyQY6pgGTaJa7UOi47Ngsg9FZ3V9qfkIjB0C1bD2LivoW%2BnLXkiLrjIPKsRDXgyaB2mSUAULuxrjVea9V03bRHq2l7UVAKAxBb2nGzSAgBEKHhYTv8mFUU%2BWpx12zk7BeTNOr0EZ0%2FkLMVyhmY4Li9hGNsxc%2BUczp0IlxVJWi2clrSP9w1DNWZbnTaDFfUbTAM72OUlSvG2qI2PdJGG3q6BkfziMriZiKiwWA&X-Amz-Signature=755e7f2807474a9c0c0acd1a53d8cd0e8b1d63c27496c11bbfe7f6674aa0ebac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LMNNEFZ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T081519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH17PBXBiMU6EQWwn%2F7sW0lCejHI5j3yCOZBijHrSHhZAiAaUFIHFlXfjA5MWmNnU5KxsEJrr811eN2Xjc2v9MEdrir%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMWqFFbT%2BCMdFkL0ZKKtwDF5QgUoC1VGtkkUir7FY7%2Fv0YWEefLIqVuOr6ODGAf8w5gEp6de0IXqoU0yRFM9OJI2CTOI8Ao8S5ZIDYORIocvYDWB%2B3UAYInUQXEmwNV67VNIkl%2BnMBtWDhL8YtwTVkcfAEQOrF3iLrWTDMV7k4WnYPF2WCMOm25AiebTrO0%2FuyAXkkMmO6%2B6aoAKbes5Oz9dI2fDczCsdps9V%2FOvP9tH3QWn6HJpLMAn%2Fkjefo9Ks%2BXb3Lb%2F3NK9SudYlwLb11vqG2XKHfG0VURadFXEeG4Rd0YwSBuAe0ymhVVro9OGnp%2B9apWE6T%2Bf4bfkrOvvCpW%2BHqr8svBpkIDt%2FWIioehaf7d7XUlWrea24u0lgI7kp5JODGXet9Zpe%2BdOMkGgfldYgU4c95ZhMZGkS18ulUm6IlGjUggHioUylQ4ZFMofIEFBN8jg3%2FN9%2BP53PMwllS0ffI%2FDFXll8AjItnawdH%2BaV%2Bu1TJ%2FLvllpzXLOuHiDxtuT6bzmXZ5xKZOcgraBtgdjVkU9TuoscfFgQEeEyjdWANl5IivCJpboYHdPGyw0x6vsLvQEh3kt00cU%2B4GizrR3h50jPsI6%2F0cqfa6BbMQ8%2BGJV%2FGFOXWfTL7dnkrxVh1UdHoyigDUs05I2ow2KzJyQY6pgGTaJa7UOi47Ngsg9FZ3V9qfkIjB0C1bD2LivoW%2BnLXkiLrjIPKsRDXgyaB2mSUAULuxrjVea9V03bRHq2l7UVAKAxBb2nGzSAgBEKHhYTv8mFUU%2BWpx12zk7BeTNOr0EZ0%2FkLMVyhmY4Li9hGNsxc%2BUczp0IlxVJWi2clrSP9w1DNWZbnTaDFfUbTAM72OUlSvG2qI2PdJGG3q6BkfziMriZiKiwWA&X-Amz-Signature=f2553796b762815e25bfa6808c6d1496cca9298bc6ae41d718e8c30f6cb22bc7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
