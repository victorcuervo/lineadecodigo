---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCIVHAW3%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T015014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQCfIFM3Kg%2FmveiAUNHqtFBRy6KL8LIHQPWmsIaJ3OuD9gIhAJSH2epMUwxbiKxgxgmyAVQWy3NoRCNq0bwFVjHNlm9IKv8DCDoQABoMNjM3NDIzMTgzODA1Igz1Nb2ftp9G1mxjyZEq3AMvVOo4KJ22w6YldQ0MADYgBDRRCcA3R8qjfJoRVY0tFaJI9MsGoQ8roMmYjL6faptSPkbpM4fqX6Ssg8BQGkvXTjxHhl4fXNQ%2F7yLHIvButMh%2FsKqc0tXZJv9QgxiwfvRjUzReeKdYMXmEjvjwqwnyBhpSbNyst0hqptD4LNJ7kZMiBiDIXlAmxw2s%2B9AZMW1OjHeAqePRcz%2FYXFMm6dbm1le4xBoIJ%2FX8YD2sOO%2Bezpqzl5nejGYclR4RmCEP1fuMNFeiLF8TVAA2muBh%2BlN1clWnOPd6tXnwz%2BebU2X71kvqiGCiGRdgxeeYrqgn%2B5Am9nKgqF8m6sIpCov6pbQxsXSLtcDcsZqwBqQO2JMU%2BXhZlUW7C5QXRtMzxpYTSXQ%2F3LFuM1L2x8R6r2a2TPfWFuP%2BwqloAZP6BsyXuf%2B66H0EWv1pAA4vF7iKbHD7K0aDQXyFZkHlR2zLO6FFkyiGUGRWMSd%2BSXSt2iK9k4GULAGsOBU%2BR8BSQtzCjucsBQGYaW8JU9fPQp23xmMS9YFvw8gN2b3yXQnKIezd%2F5aiTp%2BWFq9xVeHlerCBM1kkRxUV0XDal27f2HdjUcomgCHur4VYvtiNfrv2uNCy6rtBHBI28fgotBV9XeOaDTC5tcPJBjqkAZFIOWphihkjAxpASnDxOXUOJLGmjPAAWjEGfsIEaaubHCo%2FmmWoLAc74esdjOT8erZBYo%2B9fz975SehiPYxhf9fG3Ikb4feqHvc2JTfrutLuSGGQlvtEB%2FBWomG6poT8LtcLlVI5l%2FcYv1CcYhA8C%2BLRDMjppoRNaD%2BmSijjDFgTsix%2Fz%2FjFhNfqvLVBr%2BYRrcRUr41DkxC5Hpmtp8sSFgPxC88&X-Amz-Signature=b0f043afdae046ba82606ec86db20c3fb9e3bed0e62fe6202a2d548adc89a68b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCIVHAW3%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T015014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQCfIFM3Kg%2FmveiAUNHqtFBRy6KL8LIHQPWmsIaJ3OuD9gIhAJSH2epMUwxbiKxgxgmyAVQWy3NoRCNq0bwFVjHNlm9IKv8DCDoQABoMNjM3NDIzMTgzODA1Igz1Nb2ftp9G1mxjyZEq3AMvVOo4KJ22w6YldQ0MADYgBDRRCcA3R8qjfJoRVY0tFaJI9MsGoQ8roMmYjL6faptSPkbpM4fqX6Ssg8BQGkvXTjxHhl4fXNQ%2F7yLHIvButMh%2FsKqc0tXZJv9QgxiwfvRjUzReeKdYMXmEjvjwqwnyBhpSbNyst0hqptD4LNJ7kZMiBiDIXlAmxw2s%2B9AZMW1OjHeAqePRcz%2FYXFMm6dbm1le4xBoIJ%2FX8YD2sOO%2Bezpqzl5nejGYclR4RmCEP1fuMNFeiLF8TVAA2muBh%2BlN1clWnOPd6tXnwz%2BebU2X71kvqiGCiGRdgxeeYrqgn%2B5Am9nKgqF8m6sIpCov6pbQxsXSLtcDcsZqwBqQO2JMU%2BXhZlUW7C5QXRtMzxpYTSXQ%2F3LFuM1L2x8R6r2a2TPfWFuP%2BwqloAZP6BsyXuf%2B66H0EWv1pAA4vF7iKbHD7K0aDQXyFZkHlR2zLO6FFkyiGUGRWMSd%2BSXSt2iK9k4GULAGsOBU%2BR8BSQtzCjucsBQGYaW8JU9fPQp23xmMS9YFvw8gN2b3yXQnKIezd%2F5aiTp%2BWFq9xVeHlerCBM1kkRxUV0XDal27f2HdjUcomgCHur4VYvtiNfrv2uNCy6rtBHBI28fgotBV9XeOaDTC5tcPJBjqkAZFIOWphihkjAxpASnDxOXUOJLGmjPAAWjEGfsIEaaubHCo%2FmmWoLAc74esdjOT8erZBYo%2B9fz975SehiPYxhf9fG3Ikb4feqHvc2JTfrutLuSGGQlvtEB%2FBWomG6poT8LtcLlVI5l%2FcYv1CcYhA8C%2BLRDMjppoRNaD%2BmSijjDFgTsix%2Fz%2FjFhNfqvLVBr%2BYRrcRUr41DkxC5Hpmtp8sSFgPxC88&X-Amz-Signature=9d641497eca55fd168cb0fd7d45e53cb127d26ed4649108f02ce9f6b6292b682&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
