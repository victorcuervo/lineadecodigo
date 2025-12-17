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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QE7ERIVK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T061105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOTm6KAMC4x2qYepN59aRgijBAHRzTgLDlL8f4RWN2NAIgZknLMDs3J3VNWwnIA%2FFXZ4hCcbZGZFMgn8EtrQSqTiQq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDCfB3NpNqgGupCSlhCrcA1gDnwWkFCCXw6%2FQRvowM8lRHsqsuwYSSO%2FL6pc7QG2%2F7KSQWPMoMuNqX2Q5LwdehLMV7DZnZrD66rUX7g2BXBI4QyTq7GyItuIFCMtc%2BZLHPEP23uxpmcdApqUg%2BJvNEc1VTkadGvclPdbn7WUhlpnvH8TB%2BZ%2Fa7CB74aW6TJ30SDFkCLCRvcEVFfgecs9tMOrSYY3zMe9f0NdKLgT54mjyC3NjtEDUaFtyvr9coOPlZWHfCXGkvLK7uObeWZeKDjC%2BpNAIXaar0XKagjF5GSzypM370ORZzZOYY6i2tMr9US6kZFKOldDOVNEXr8ikETYAPWiTLl1829ucrHwnzmy86QVfceXMWdix7iRPxt26DgvcA7vAAyipDW%2FxsUcxlut5b5wzWv7SYcOj6vG5z2%2BoBVo15vouXZNGKv9IcZfizf8gPzWxo0yZIyi8UHYsGUJjWCXtXzhLcFmg1izctP%2F1C6oGYEwVFkuJYcLskw6Sa9g7jvrRxeE2Xv2ckLKT4u%2BqIqqPIEtylbUyq6e4dZEO5P1U0eL%2F52dVKOT%2FSlwfe4oVtpYRUv0cpqozqa7xiG8DLNtSHtB4s5w2I2EKJEPEn3tqRX9%2FHUPf%2Boa6ArS5uLxa3UpXK%2FF%2B%2B%2BDIMM6DicoGOqUBh6wjRe1NdXLCVh3OlW2BeTsD7peWQUR%2B%2ByJmCc%2BEiGLeT7%2BUfBTIcHpJnXuCu%2BlyzxTuxdbvQz1xz3KVgd0TfJ%2FFc10DDrVQd%2FnH8JoVJ6gkfiBm2GXPEeGj87bWZo3VZzS2o%2B2JUnKSWg1t6j%2FCT9%2FrgwLArH44IXjwGFWtukVwrFTAw1YQpPPBsgbktgYY1dcr1JAUSoQv2J8wEYSqHRugkqpU&X-Amz-Signature=14807ea10b105024b8362d08a6ce3beaa6b93767d800755340681b1c1f83072c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QE7ERIVK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T061105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOTm6KAMC4x2qYepN59aRgijBAHRzTgLDlL8f4RWN2NAIgZknLMDs3J3VNWwnIA%2FFXZ4hCcbZGZFMgn8EtrQSqTiQq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDCfB3NpNqgGupCSlhCrcA1gDnwWkFCCXw6%2FQRvowM8lRHsqsuwYSSO%2FL6pc7QG2%2F7KSQWPMoMuNqX2Q5LwdehLMV7DZnZrD66rUX7g2BXBI4QyTq7GyItuIFCMtc%2BZLHPEP23uxpmcdApqUg%2BJvNEc1VTkadGvclPdbn7WUhlpnvH8TB%2BZ%2Fa7CB74aW6TJ30SDFkCLCRvcEVFfgecs9tMOrSYY3zMe9f0NdKLgT54mjyC3NjtEDUaFtyvr9coOPlZWHfCXGkvLK7uObeWZeKDjC%2BpNAIXaar0XKagjF5GSzypM370ORZzZOYY6i2tMr9US6kZFKOldDOVNEXr8ikETYAPWiTLl1829ucrHwnzmy86QVfceXMWdix7iRPxt26DgvcA7vAAyipDW%2FxsUcxlut5b5wzWv7SYcOj6vG5z2%2BoBVo15vouXZNGKv9IcZfizf8gPzWxo0yZIyi8UHYsGUJjWCXtXzhLcFmg1izctP%2F1C6oGYEwVFkuJYcLskw6Sa9g7jvrRxeE2Xv2ckLKT4u%2BqIqqPIEtylbUyq6e4dZEO5P1U0eL%2F52dVKOT%2FSlwfe4oVtpYRUv0cpqozqa7xiG8DLNtSHtB4s5w2I2EKJEPEn3tqRX9%2FHUPf%2Boa6ArS5uLxa3UpXK%2FF%2B%2B%2BDIMM6DicoGOqUBh6wjRe1NdXLCVh3OlW2BeTsD7peWQUR%2B%2ByJmCc%2BEiGLeT7%2BUfBTIcHpJnXuCu%2BlyzxTuxdbvQz1xz3KVgd0TfJ%2FFc10DDrVQd%2FnH8JoVJ6gkfiBm2GXPEeGj87bWZo3VZzS2o%2B2JUnKSWg1t6j%2FCT9%2FrgwLArH44IXjwGFWtukVwrFTAw1YQpPPBsgbktgYY1dcr1JAUSoQv2J8wEYSqHRugkqpU&X-Amz-Signature=29cd490eb99cc0ca266ed2e146c74ce0ab20e8b8c6d72126a84273696009897e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
