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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FLYF7JK%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T103623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEHCp8zPZJtG0X8FnMTvn7PN4ZY5pIr8XehK4f%2F1CK45AiEA7QWaqVEsZNBQ%2FShW4xt1oHQOKeJyLh9fWkWjNj6Qk7cqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPU6DdugsGVKutHqKyrcAwKWk4f%2FVjnUtB6a60K0z4X2aUZabOjwUVX%2FjQJ2q6VRLy1ZykTErBXJ7HmnmZis0ctAxjqVp2oK2yX%2FQug7S1KkhA0j5gAgjFi8uqq%2FFMDjHpOPrX63KqjiHEjyeyQjw3ygADmYt%2FaflREFQb7W7NOPnBhUArZfsBn6BzYvAsn7oyCjAtWLoBMqPpmO%2FhVHuCEIEfTVfJ1h8YTWOiyFc5pRXTvkVAq8VhstaVInl6tcqAv5Q9B1vOINKb24CLlt6MKaPk8P7mL%2F%2FKv3%2BTNcFScr1N22H1Dzz4i6M4WMxXovBaGkZT8xxP9cK%2FbL0pnu0XGdX52fP8TCiAHp2T2g%2FauV7m1mSmAI5WuM8HoBtwvJ2KYq4cVscAJXjQJbto0o91XzeRpz6mlynXPU812t%2BelnRj53%2F2Wdu9NayfftAkGvmPu7mYWGc4uSyKQmqyfWjTFJFdxeLdG0Cm1fODTpISshSLfnrRqNC8sO3daZdM7utH6bojQ2r7LDd4ShfHJrBg%2FM%2FY7dYFPeb9HqUXCjfkcr9ISTZKdNES02%2BoWWoBdgPuQBh7dU%2FKrVs3PXRXvYfrch5ZEgzasMS0M395r1%2F%2BxpTtC%2BsYq63LZpMpOexZ8sDCq0BaDfAE1szi3iMJvu2ckGOqUBSlZExuyARuvYZwsZdffctweV9g%2BcSxQx0W%2Bcm6gdimBXnQxLFTPkqD3i5MA4geemlgHNwxQL4HhBrvDgWQgKNkUICILWnK0UNtN4QFywcKp4p0o6vAhOceZoXBfv1IAQ7LELbUOf67arz%2BNA0%2BF268gIGsvkAiCHeQgiAtHCPW5w%2FeqrpMqVHuVXHP6tMwymQRQGpfmvwuO60zRQBsoDP%2FKzYKfm&X-Amz-Signature=a7619c63cb8df249c49e8c00cab4dd2dba87a2b4c4d635f13d2db935f89cdb53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FLYF7JK%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T103623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEHCp8zPZJtG0X8FnMTvn7PN4ZY5pIr8XehK4f%2F1CK45AiEA7QWaqVEsZNBQ%2FShW4xt1oHQOKeJyLh9fWkWjNj6Qk7cqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPU6DdugsGVKutHqKyrcAwKWk4f%2FVjnUtB6a60K0z4X2aUZabOjwUVX%2FjQJ2q6VRLy1ZykTErBXJ7HmnmZis0ctAxjqVp2oK2yX%2FQug7S1KkhA0j5gAgjFi8uqq%2FFMDjHpOPrX63KqjiHEjyeyQjw3ygADmYt%2FaflREFQb7W7NOPnBhUArZfsBn6BzYvAsn7oyCjAtWLoBMqPpmO%2FhVHuCEIEfTVfJ1h8YTWOiyFc5pRXTvkVAq8VhstaVInl6tcqAv5Q9B1vOINKb24CLlt6MKaPk8P7mL%2F%2FKv3%2BTNcFScr1N22H1Dzz4i6M4WMxXovBaGkZT8xxP9cK%2FbL0pnu0XGdX52fP8TCiAHp2T2g%2FauV7m1mSmAI5WuM8HoBtwvJ2KYq4cVscAJXjQJbto0o91XzeRpz6mlynXPU812t%2BelnRj53%2F2Wdu9NayfftAkGvmPu7mYWGc4uSyKQmqyfWjTFJFdxeLdG0Cm1fODTpISshSLfnrRqNC8sO3daZdM7utH6bojQ2r7LDd4ShfHJrBg%2FM%2FY7dYFPeb9HqUXCjfkcr9ISTZKdNES02%2BoWWoBdgPuQBh7dU%2FKrVs3PXRXvYfrch5ZEgzasMS0M395r1%2F%2BxpTtC%2BsYq63LZpMpOexZ8sDCq0BaDfAE1szi3iMJvu2ckGOqUBSlZExuyARuvYZwsZdffctweV9g%2BcSxQx0W%2Bcm6gdimBXnQxLFTPkqD3i5MA4geemlgHNwxQL4HhBrvDgWQgKNkUICILWnK0UNtN4QFywcKp4p0o6vAhOceZoXBfv1IAQ7LELbUOf67arz%2BNA0%2BF268gIGsvkAiCHeQgiAtHCPW5w%2FeqrpMqVHuVXHP6tMwymQRQGpfmvwuO60zRQBsoDP%2FKzYKfm&X-Amz-Signature=7df5a278cb2680b933e20719f0a0f792ed48986f90a7ef87ef941d2f2da55d84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
