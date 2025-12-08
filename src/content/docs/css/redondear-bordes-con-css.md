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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGYSRNPX%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T001030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCURnaN%2B5wAwetmXgBHOae9IfPDY87EJ7xwJB0hXp3mMQIhALWUmZSO1HwQXKgv1tzgRcRxII8uCYmhgmBbyUVKtWhnKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzkg%2FtobSRZIJIR3oYq3APpjngJHAppMuJYjpPY69QxUrVXGw0ipNQqt9ETLdFacWa5GtkSIsyOWxCOGvtJHpyM4ALUp2O733NF51osXZdeOXY9srs%2BJ%2Fzs0mfL7Aq2DK0ZxzjBws0TYf%2FfSKFLcy7kB2sJPSZ1lukoEFTggLn0oKtkRCiLdzFj%2ByrDjmq9YmqSevgAH48j4psfvKgWmgjcfvZ0qE7IJ%2FDG%2B5xFq9aIYdMTu%2F%2Bjl8Ej0KLMeS7k0l5uqaugSlKoa0IWfz0Cr3aq3q%2FDyGydgMDSQBU6Kl3rKDmJNZMUg%2BZWeuO9Uqa2mqsbX%2FxfZPz%2BQs0cGIhmZpX%2FHRXuj%2FLmqPtVr0v%2F9Us7n0%2BEaTM9teZDyakX7qwz%2BFYqzGZtwka%2BKfNaMGRfyRbWU4ilvEbioErTsL7mtrpZ%2BRFSIi1m6CwLN5Y3hHWVBIdrT46VLYh12HN8CdJPxJeIWzjygP%2F%2F0qnBqQxh%2FgjZ0%2FilCMpxfnkdhyR8Jex5VRTYH9FqkTHl4KITOG1fQQiQLfDfcjvzlgGplGvpO0WeWukW8FTctby%2B%2BWDZG8yPCLfrf0FeiofA3T7L01Sr%2B7PbfFQV5Uvm56SvCX3fZ3o5ey8DH%2FSp8gN%2F75glzF%2BsuISJ1jgefai1iwrpCjDOodjJBjqkAdV0pQ9YXFA329IT4IdlkmtxpnbPqoDPUHgDQpKUljbce1FIbbgurvqu05%2FPP4yVwOwo7eVPkB3jb4%2Fo6GldzL7rqBw48wekB3XKTnIsverXminN0y9FYGj6A2m%2FDVjHpYaJLQBisVjHGHaeuEdty4M7IQnUw5tiFBZYD6wHpleDdI400w0DxkA%2B65zSIB9fi6vuXjprHhTartrsnfofxFt%2BAS07&X-Amz-Signature=4419a814e2cde1c34a8e8dbe41d7206675d4065352209958c1e930b23e2cdbfb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGYSRNPX%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T001030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCURnaN%2B5wAwetmXgBHOae9IfPDY87EJ7xwJB0hXp3mMQIhALWUmZSO1HwQXKgv1tzgRcRxII8uCYmhgmBbyUVKtWhnKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzkg%2FtobSRZIJIR3oYq3APpjngJHAppMuJYjpPY69QxUrVXGw0ipNQqt9ETLdFacWa5GtkSIsyOWxCOGvtJHpyM4ALUp2O733NF51osXZdeOXY9srs%2BJ%2Fzs0mfL7Aq2DK0ZxzjBws0TYf%2FfSKFLcy7kB2sJPSZ1lukoEFTggLn0oKtkRCiLdzFj%2ByrDjmq9YmqSevgAH48j4psfvKgWmgjcfvZ0qE7IJ%2FDG%2B5xFq9aIYdMTu%2F%2Bjl8Ej0KLMeS7k0l5uqaugSlKoa0IWfz0Cr3aq3q%2FDyGydgMDSQBU6Kl3rKDmJNZMUg%2BZWeuO9Uqa2mqsbX%2FxfZPz%2BQs0cGIhmZpX%2FHRXuj%2FLmqPtVr0v%2F9Us7n0%2BEaTM9teZDyakX7qwz%2BFYqzGZtwka%2BKfNaMGRfyRbWU4ilvEbioErTsL7mtrpZ%2BRFSIi1m6CwLN5Y3hHWVBIdrT46VLYh12HN8CdJPxJeIWzjygP%2F%2F0qnBqQxh%2FgjZ0%2FilCMpxfnkdhyR8Jex5VRTYH9FqkTHl4KITOG1fQQiQLfDfcjvzlgGplGvpO0WeWukW8FTctby%2B%2BWDZG8yPCLfrf0FeiofA3T7L01Sr%2B7PbfFQV5Uvm56SvCX3fZ3o5ey8DH%2FSp8gN%2F75glzF%2BsuISJ1jgefai1iwrpCjDOodjJBjqkAdV0pQ9YXFA329IT4IdlkmtxpnbPqoDPUHgDQpKUljbce1FIbbgurvqu05%2FPP4yVwOwo7eVPkB3jb4%2Fo6GldzL7rqBw48wekB3XKTnIsverXminN0y9FYGj6A2m%2FDVjHpYaJLQBisVjHGHaeuEdty4M7IQnUw5tiFBZYD6wHpleDdI400w0DxkA%2B65zSIB9fi6vuXjprHhTartrsnfofxFt%2BAS07&X-Amz-Signature=e516337de99a7d55fe64c3981e19093b64ca86fb6798f0f17f8a668aab76e960&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
