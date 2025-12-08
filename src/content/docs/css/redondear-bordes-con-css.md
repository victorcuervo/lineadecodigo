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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RY3XLF3S%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgLqeqFIIRPlKueOqKwMDYVAEYBgyyDdbQrVwfkjX4fgIhANG8ieTA6LzPB6Lp%2Fr%2FhbMvRW1QevT%2BW5EyZiTBmNAJjKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgweN2z%2BJf1TEACS%2BVAq3APRgfbCNuSEY8bYF8hebvMpJC6SjbVJf4ZqUWsjavURIQGRUqmX7eHfx2OpLncHfLb1349slvZdcf3JpEYA6rgDG%2FZ2zNMGItM5HFVMt3YpxzRw6lPjW%2BGzSicmXRS5dzZox39426EhqN%2BIfQTDg4uaSmMh34U3xNMBulTfYfF2b14HQK2Oy7lCqrxdqunwPGWTQbL8kQ1sWaC5PLHiwQxbk4cy23t0dlmJ3RzG6ZC%2F5XpCnIQbT%2BP2%2F5ZdOKtlMQDFVlSKyKuVmniwbrsYOB4e2v0ezKmc%2FP2r4JuafVXj76XeB2o44gTWjtU4Om756Mj6Ke4J8a2xaDpd0D8PrknQS9EYJi8iKeICoE8ogVFl7Z4JajxQMhsp38u%2BguOjJvpNMrRpXiTbAeWmCSkHDAESjNvm0V89%2F9iKIWmn7FrBJAnyPjxiGivz7HM4uohgdMP2JcUvtK4Ga720HlcZCQLimkWShzEkEvLmCoQM%2FmehRKn%2B8uNIIsq2V43JfEcUF%2FtqmEOSJQOyi%2F81YvWMf1j1G7GN3a3NzH6T20fOSewVsQNjN5E1BWgmuNYxEMKGnqdJKxhTRaBH6YchN8CglYicoi%2B3V2sG%2Fuif%2B5Io3%2BBFkOY5HvzD6qyZ4tix2jCq0djJBjqkAag%2F7BgrSuiX9VXY7N04sXUyciuvdEVAcA%2FWnrTZQMW333F74eRzzw5Yo1%2BPJuqE2xzbJpULfzlP5Bv94%2BhLx%2B5j3RfxXRav8HgPV1IUYiggVshxTWojv8eeTgEBJiwb8STBqoZtoKve4RsAy14Qe514DL6L9fTo05jYe5ujnunxwsAOgqDcJX1x4NrdUST%2BFiyeid8kW6s%2BU00cGAtffgVRI%2BKa&X-Amz-Signature=af5e5444b57ce1f0da61e6c4814b0fdb8f021878e8f1ad25fc611ddf507695cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RY3XLF3S%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgLqeqFIIRPlKueOqKwMDYVAEYBgyyDdbQrVwfkjX4fgIhANG8ieTA6LzPB6Lp%2Fr%2FhbMvRW1QevT%2BW5EyZiTBmNAJjKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgweN2z%2BJf1TEACS%2BVAq3APRgfbCNuSEY8bYF8hebvMpJC6SjbVJf4ZqUWsjavURIQGRUqmX7eHfx2OpLncHfLb1349slvZdcf3JpEYA6rgDG%2FZ2zNMGItM5HFVMt3YpxzRw6lPjW%2BGzSicmXRS5dzZox39426EhqN%2BIfQTDg4uaSmMh34U3xNMBulTfYfF2b14HQK2Oy7lCqrxdqunwPGWTQbL8kQ1sWaC5PLHiwQxbk4cy23t0dlmJ3RzG6ZC%2F5XpCnIQbT%2BP2%2F5ZdOKtlMQDFVlSKyKuVmniwbrsYOB4e2v0ezKmc%2FP2r4JuafVXj76XeB2o44gTWjtU4Om756Mj6Ke4J8a2xaDpd0D8PrknQS9EYJi8iKeICoE8ogVFl7Z4JajxQMhsp38u%2BguOjJvpNMrRpXiTbAeWmCSkHDAESjNvm0V89%2F9iKIWmn7FrBJAnyPjxiGivz7HM4uohgdMP2JcUvtK4Ga720HlcZCQLimkWShzEkEvLmCoQM%2FmehRKn%2B8uNIIsq2V43JfEcUF%2FtqmEOSJQOyi%2F81YvWMf1j1G7GN3a3NzH6T20fOSewVsQNjN5E1BWgmuNYxEMKGnqdJKxhTRaBH6YchN8CglYicoi%2B3V2sG%2Fuif%2B5Io3%2BBFkOY5HvzD6qyZ4tix2jCq0djJBjqkAag%2F7BgrSuiX9VXY7N04sXUyciuvdEVAcA%2FWnrTZQMW333F74eRzzw5Yo1%2BPJuqE2xzbJpULfzlP5Bv94%2BhLx%2B5j3RfxXRav8HgPV1IUYiggVshxTWojv8eeTgEBJiwb8STBqoZtoKve4RsAy14Qe514DL6L9fTo05jYe5ujnunxwsAOgqDcJX1x4NrdUST%2BFiyeid8kW6s%2BU00cGAtffgVRI%2BKa&X-Amz-Signature=4a27342bd6664315bd0ec4e45910544a4928c64b5ff89c8982b71598afe2daf3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
