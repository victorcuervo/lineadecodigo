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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RM2MI6H6%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T005558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFAq4lPtgDQrWZ%2Bb9k%2Bd5lLMHbYQHjzJi5lVOM8Ej8lwIgOa0JEd6j1N5nF0RvhhHr4v2pWvJjnwelVymKqS5eFYUqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF1FfiUtg9KHkf%2BsrircAzHLy0JGJ0QkdMYvT6%2FcLDGubWz09baLH02FBcutxkR4WrqdmshglS5jfg5r3GiVu8A0gptFNha0f2DIC%2FDwEFeCJpBWgrKXLCu8JtsGgxJcuyGN8vrO5DWXEcG2Xd3bLgWMFOMwK5dfTGX2%2B3x8hIb%2Bsp6E%2FuTp7H%2Fg2VHSdw9Nz6s56JZhKGLEq4H51lHZsOGlp4EZJ8L5swlirIszfkpKxWdZAIJ4RkWFQDYlqvTnC41bDaC3RygRg3ifWnoKLhmBTgP81ZRGB6Jd5g%2FXxsNpqtjD6kDdUGRNbbV5t0RunADhbCF0UsYkWTcVRwocdV16NK1eRGS9%2B92zoAZfNIDLfaG6MOHzifUNH97y2%2BbPBhsBJ4kIFyspTqg3KlA863x4jw8N8R%2BnZX9A5wqDj0xJ48oc9P%2B7lIuZDc9%2BMV5oRmk3%2FpqZa1jjBD5t7%2BS5iWZudXGXEszcrlvdku%2FlL%2BEijUIogvmwM6P4zV5UWU2Q%2FrwnT4KqYSiWVT0F11uhXxIE4LbEj3qKZ9TXW5to%2B7n6qP7IZE%2BcPyq3G7nyowaigVzfqA7ZYyzIYCctBc%2F7sdNnoN9paDMJW6VimCrsDPCWTIUOlqVG6MedK3Sk9fZksS9paDftEY%2F4f8J8MPzC3ckGOqUB4lEOtf8wV3lLBtr0aGhAvTTokHNFOw5W8n2oNOMV%2FIB47a4SU%2BwkWr8dPgJ2yfKuzkN0m8SOo412jSoWKB%2BUAiJNabWKOE5iu%2Bgwx8w1O4Q4eg6qGauH2OzViKdV2bxnWBBm%2FSKScTmEpGpZYHi6v0J8wGq78ekTj4LvgyqhKFlVEbIWOxWyO0FpYdvmfTfnnndydHCTc4ELC9KDQSTWRLX%2BUgFZ&X-Amz-Signature=dd95f9282c15bd11ea60631218d6b9207f092efc6fa861843b10f32fca8900ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RM2MI6H6%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T005558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFAq4lPtgDQrWZ%2Bb9k%2Bd5lLMHbYQHjzJi5lVOM8Ej8lwIgOa0JEd6j1N5nF0RvhhHr4v2pWvJjnwelVymKqS5eFYUqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF1FfiUtg9KHkf%2BsrircAzHLy0JGJ0QkdMYvT6%2FcLDGubWz09baLH02FBcutxkR4WrqdmshglS5jfg5r3GiVu8A0gptFNha0f2DIC%2FDwEFeCJpBWgrKXLCu8JtsGgxJcuyGN8vrO5DWXEcG2Xd3bLgWMFOMwK5dfTGX2%2B3x8hIb%2Bsp6E%2FuTp7H%2Fg2VHSdw9Nz6s56JZhKGLEq4H51lHZsOGlp4EZJ8L5swlirIszfkpKxWdZAIJ4RkWFQDYlqvTnC41bDaC3RygRg3ifWnoKLhmBTgP81ZRGB6Jd5g%2FXxsNpqtjD6kDdUGRNbbV5t0RunADhbCF0UsYkWTcVRwocdV16NK1eRGS9%2B92zoAZfNIDLfaG6MOHzifUNH97y2%2BbPBhsBJ4kIFyspTqg3KlA863x4jw8N8R%2BnZX9A5wqDj0xJ48oc9P%2B7lIuZDc9%2BMV5oRmk3%2FpqZa1jjBD5t7%2BS5iWZudXGXEszcrlvdku%2FlL%2BEijUIogvmwM6P4zV5UWU2Q%2FrwnT4KqYSiWVT0F11uhXxIE4LbEj3qKZ9TXW5to%2B7n6qP7IZE%2BcPyq3G7nyowaigVzfqA7ZYyzIYCctBc%2F7sdNnoN9paDMJW6VimCrsDPCWTIUOlqVG6MedK3Sk9fZksS9paDftEY%2F4f8J8MPzC3ckGOqUB4lEOtf8wV3lLBtr0aGhAvTTokHNFOw5W8n2oNOMV%2FIB47a4SU%2BwkWr8dPgJ2yfKuzkN0m8SOo412jSoWKB%2BUAiJNabWKOE5iu%2Bgwx8w1O4Q4eg6qGauH2OzViKdV2bxnWBBm%2FSKScTmEpGpZYHi6v0J8wGq78ekTj4LvgyqhKFlVEbIWOxWyO0FpYdvmfTfnnndydHCTc4ELC9KDQSTWRLX%2BUgFZ&X-Amz-Signature=cda92268fb1c45e2c93bde3302ab6287e45392af0c04eeca95c261f1332e38f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
