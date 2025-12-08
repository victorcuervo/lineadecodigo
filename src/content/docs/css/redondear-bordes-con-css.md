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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XD7KPD4C%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdovwpQNpRhsdJBVIqyUN06z%2Fu%2FPpUbSQu1coMhEasywIgNC1q795lMCJLxMEaXR75h%2B3k5eTertPQUyvU8Qv60nsqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFokw8yuooc19f2X%2FSrcA74bvwQzwel5Te7D7QcBpB7Y7%2FZYssewWIorL4ZEApcISZ91U6SMksBnVJjXJ5zBVF8oKaKUMXJCCoCFRtE10A4W4Eb8VaJQJeMMY2CRj6UWA5vj4sGRLYze%2BBORrDMrrcA88ME2ZGGxtlTzlFaQKq2UchssuozUziyMfzglmYS2hMkS3VMTKfYmr7FiBCn200df0r6ttq1khmQmoQ07HP2N8TIZEfYIYsJiAF2ioeOPtsQ%2BtFdbwN7XJ0G6ll6VU%2FK%2FZtOBbvjSbesnX9h9fcrjXO2%2FJmvYjfq1Bd5FG99ymrTqPkU%2FR02N%2FHMBOFmVcOtJY8SDyWIsvlg6F9VrVU8CXDv1xII1n3rXaLsRUDLxr1jPuTd5CpECgHPvI2nu4qVRTsXoEFuhVRojhEQClHQ2HqvNcP7vvcC23XXfPc%2FH34yb0xvKCvs6i9wgIT6yIpGImlLvInsDmSM9WrOx4eKrzCY%2B%2BCsUqQ69Q1%2BDLZSVkwVceqle0In%2F%2FtYX4Ekal8Vay3%2FU66pZuR60R2thHMpvqXaSlANle98YadshKRSb2%2FL3gUIGEUsiaIoPJKk8Sqm7hhV%2F5QJlpK4W2Sj0GlxfLH9qmB6d0WE1rtIJpdy6J0hwyr3KlwyILKFwMNzR2MkGOqUBx%2Bo5z1Q6q0pmxwYlfpnJuzj%2BM6samT4gmN5iCSU2t%2BBh2gvXXIq3JjF7YF7JtiTkx4Tsg%2FrsOwcqCJjvW0zNEE46x72093mNd%2FoyxbYmCJYwMzTMCRG%2F4NFIC0fPzk3DJAb4U1SM%2BKQ7tfBUvG5jrVY8s8%2B1%2B%2F6AW2wq42tQePfavzzjJCPYyuLKTSPVhNxKgDCcfeldPPbAF5f0aOYu2rz5WecL&X-Amz-Signature=37385bb021ee779958b31a4d0fb81bf40ca6b6a72a67199c97caa0dd03c5a527&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XD7KPD4C%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdovwpQNpRhsdJBVIqyUN06z%2Fu%2FPpUbSQu1coMhEasywIgNC1q795lMCJLxMEaXR75h%2B3k5eTertPQUyvU8Qv60nsqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFokw8yuooc19f2X%2FSrcA74bvwQzwel5Te7D7QcBpB7Y7%2FZYssewWIorL4ZEApcISZ91U6SMksBnVJjXJ5zBVF8oKaKUMXJCCoCFRtE10A4W4Eb8VaJQJeMMY2CRj6UWA5vj4sGRLYze%2BBORrDMrrcA88ME2ZGGxtlTzlFaQKq2UchssuozUziyMfzglmYS2hMkS3VMTKfYmr7FiBCn200df0r6ttq1khmQmoQ07HP2N8TIZEfYIYsJiAF2ioeOPtsQ%2BtFdbwN7XJ0G6ll6VU%2FK%2FZtOBbvjSbesnX9h9fcrjXO2%2FJmvYjfq1Bd5FG99ymrTqPkU%2FR02N%2FHMBOFmVcOtJY8SDyWIsvlg6F9VrVU8CXDv1xII1n3rXaLsRUDLxr1jPuTd5CpECgHPvI2nu4qVRTsXoEFuhVRojhEQClHQ2HqvNcP7vvcC23XXfPc%2FH34yb0xvKCvs6i9wgIT6yIpGImlLvInsDmSM9WrOx4eKrzCY%2B%2BCsUqQ69Q1%2BDLZSVkwVceqle0In%2F%2FtYX4Ekal8Vay3%2FU66pZuR60R2thHMpvqXaSlANle98YadshKRSb2%2FL3gUIGEUsiaIoPJKk8Sqm7hhV%2F5QJlpK4W2Sj0GlxfLH9qmB6d0WE1rtIJpdy6J0hwyr3KlwyILKFwMNzR2MkGOqUBx%2Bo5z1Q6q0pmxwYlfpnJuzj%2BM6samT4gmN5iCSU2t%2BBh2gvXXIq3JjF7YF7JtiTkx4Tsg%2FrsOwcqCJjvW0zNEE46x72093mNd%2FoyxbYmCJYwMzTMCRG%2F4NFIC0fPzk3DJAb4U1SM%2BKQ7tfBUvG5jrVY8s8%2B1%2B%2F6AW2wq42tQePfavzzjJCPYyuLKTSPVhNxKgDCcfeldPPbAF5f0aOYu2rz5WecL&X-Amz-Signature=2ba769b17a9984e38e9d084c247cbe7fe16af273101805f29781d3cf39bdcd40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
