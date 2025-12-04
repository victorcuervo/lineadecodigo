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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBMWCNHX%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T071531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQCpwver1kvrtB%2FVA%2BjmcASP0ovei02Vu5UAcvzFQfDcXAIhANplD2SAow6ZoYkn2%2BTm6XVNC2WCNO3uG8nKXEUNW4o4Kv8DCEAQABoMNjM3NDIzMTgzODA1IgyYdkJMug9XrZ%2Fj3r0q3AOrdQvFBzH1KcrOx6E5BHMy7y6rVfum1LE9RSDzt4TEGDS%2BEiZqcttsgX7mmKiKWusUrSENvEOXp4lfWqU8goJyfKv4SCF%2BpeJWkKZWJiULKTksLsOGWTp3ETGnAEug5mrNvTtX4fZTOexFzguOxu6BKvW6upzgdAoFUrCqnRp%2F4%2FYZawEVf%2FX2i4be%2F7XNlOC4njWA9lQp0zs%2BeRPWBgZcdqMWXZ6CHTEMdV1vErJKiy886t8n1vjwYFG4ZFPb%2F09X%2BQq2AdVOKzJSFwVJrelPv2aXmjYrBy8rpgYoz8RnxewtrD53yU3W4sVYgFM%2Bj8dt8ZkgrdeoSdxshecIDrhWC1Apjxj%2BSc2uoHvkrx9dLqdTHLB6HAoH2cO2o9lGxebx4gTe3R7GeO8jPj6n4ZzcJw4HST%2Fe4%2BVz2VS%2FsAoSqdhGg7zRaJ2mnn9puiOXEdrD%2Fy5wu3tnjQS4qBHIAITyGomjmyDlt%2F8nkRAPDwoP1%2BXwkU9fU16B4SQH1RL%2Fnx8N299TDoXUxnGLytssSfKMJZUvSdeODnfiTwv%2BgH7k%2FtJUnPxFC85EIVFJlR%2FLXfdB8SUiD%2FHFlRdn0V4fjBSqaHZE9jIAb77ioQlWoU2AlG3ntLj8gsRjqX0nyTDJ58TJBjqkAW7Kg84qEDHlFAM1zouLtGYizFzf79QETg2CdOpwhr5544cPL3lTdctfpIIKpg7Qn5DBtE52CA87hrOFQoQE%2BvLDCOV3oZa3PkMounQBSXJCG3y%2BbYhvdKq4BU%2Fo971uZdEo7I9EPybUlp4nr%2BxKtSr5PKXBxeURsXecU7SflAfgJ3%2BlprF5Xsb8NtwZ%2FJCZaedZkLjEVf0QBkdvcGWZG%2FXHi8iZ&X-Amz-Signature=a12bb228fca36219fd54c53859918580b490118d2d2c0d0e6d37cf8197318078&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBMWCNHX%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T071531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQCpwver1kvrtB%2FVA%2BjmcASP0ovei02Vu5UAcvzFQfDcXAIhANplD2SAow6ZoYkn2%2BTm6XVNC2WCNO3uG8nKXEUNW4o4Kv8DCEAQABoMNjM3NDIzMTgzODA1IgyYdkJMug9XrZ%2Fj3r0q3AOrdQvFBzH1KcrOx6E5BHMy7y6rVfum1LE9RSDzt4TEGDS%2BEiZqcttsgX7mmKiKWusUrSENvEOXp4lfWqU8goJyfKv4SCF%2BpeJWkKZWJiULKTksLsOGWTp3ETGnAEug5mrNvTtX4fZTOexFzguOxu6BKvW6upzgdAoFUrCqnRp%2F4%2FYZawEVf%2FX2i4be%2F7XNlOC4njWA9lQp0zs%2BeRPWBgZcdqMWXZ6CHTEMdV1vErJKiy886t8n1vjwYFG4ZFPb%2F09X%2BQq2AdVOKzJSFwVJrelPv2aXmjYrBy8rpgYoz8RnxewtrD53yU3W4sVYgFM%2Bj8dt8ZkgrdeoSdxshecIDrhWC1Apjxj%2BSc2uoHvkrx9dLqdTHLB6HAoH2cO2o9lGxebx4gTe3R7GeO8jPj6n4ZzcJw4HST%2Fe4%2BVz2VS%2FsAoSqdhGg7zRaJ2mnn9puiOXEdrD%2Fy5wu3tnjQS4qBHIAITyGomjmyDlt%2F8nkRAPDwoP1%2BXwkU9fU16B4SQH1RL%2Fnx8N299TDoXUxnGLytssSfKMJZUvSdeODnfiTwv%2BgH7k%2FtJUnPxFC85EIVFJlR%2FLXfdB8SUiD%2FHFlRdn0V4fjBSqaHZE9jIAb77ioQlWoU2AlG3ntLj8gsRjqX0nyTDJ58TJBjqkAW7Kg84qEDHlFAM1zouLtGYizFzf79QETg2CdOpwhr5544cPL3lTdctfpIIKpg7Qn5DBtE52CA87hrOFQoQE%2BvLDCOV3oZa3PkMounQBSXJCG3y%2BbYhvdKq4BU%2Fo971uZdEo7I9EPybUlp4nr%2BxKtSr5PKXBxeURsXecU7SflAfgJ3%2BlprF5Xsb8NtwZ%2FJCZaedZkLjEVf0QBkdvcGWZG%2FXHi8iZ&X-Amz-Signature=25819bbbe9367ed3b1afab562efa324e5fcaf37d48038fcb18a1a1def21b6f39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
