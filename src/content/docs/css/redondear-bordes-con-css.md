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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5NKNMDZ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T235036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC25m%2BkyouRMVvyq57hJg4pc83oMCZGJPMN0x2jk%2BfRhgIhANOIIcQqll9PHvuGMxAqRETDeUDcBckDqPmX3MaKv%2BesKv8DCGgQABoMNjM3NDIzMTgzODA1Igw3ccXjtjxDqi94OqYq3APlM1nIfBxUqvY5gigvy168Gh8IhZOlAXPenUeslpBhJ9xH1YefHBJ8rSfVAweaVTI1LhJGI%2Ffa4kpn4wSjZsFVgrBxC0M%2FRhQqZkowiTncfgd8kaPtXIquHlSjjwnNLHx8SXNnTo%2FjBH6SyYNP6jWM0QqAvpE3Txy5BXDG2eoJCzwScRl1dwkeZRoq1PeOnnTTizKSqOQxL25OavwO8nqIJGLaBaXR0un6%2BVikgDXDVLYFCzWVaFraXsgnaAJKTNuVT6l4Xcpj85EB3WSNE00VyA2VaZWDRBAecNSm3F4JC%2F5tVdjuxWkw%2B%2Bw8%2BoKDPQD9fwtmtkGB8O10GXX3n0AfLrNWGPfxD%2FWQYOLBZQxXF8Hg1YfX3%2B6pbCUTdzRoI181oTYmHEwgK150DGeru9V2yP60M4npJJqKs6jKvoUGZAxuBj6wKpWpiVy7TBB5VHFkTU7H1sDejjTA2aIAM6LFKXQyKKnALErH4MTEN%2FM5R0iUbyeniROqmil2rAFuKt9%2FBy9%2Bu0OYrwAWKLi3jbFy3I2kxLY7j8j68Ox5vNcrE3IXXEdWQaYjXKBBmbhXbMQuokTIMjtgO4aj9uaf2AkKfRBnYOuct6CmLYjzuRuua5Alo2TLKj4YrDt7qjC%2Bxs3JBjqkAZeYnz%2BCcQYjoSQUrUnJfrW1SabYtUT9nDf1uZfPRa0J0qRL%2FJG%2F9Xg1w3LluetzOIIbHYqDDfkXAbcpV4aJzoMkUScolhMGCZCZM0gpLiAGQ5EkxXsMyCf682srNjbFA7TKgmHu%2FuW0k8IeEKG8PcHkkR3ftd6B0MT%2B6YV4TVTu8uK8MQixZjOyqhc7ien1AnglA9IYTDa81s9Z7kXP38C3QmAi&X-Amz-Signature=f75a0b3e252db2afc9c4fdb5d4d2229f6cdeda9bf936d467527b9fad04602a23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5NKNMDZ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T235036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC25m%2BkyouRMVvyq57hJg4pc83oMCZGJPMN0x2jk%2BfRhgIhANOIIcQqll9PHvuGMxAqRETDeUDcBckDqPmX3MaKv%2BesKv8DCGgQABoMNjM3NDIzMTgzODA1Igw3ccXjtjxDqi94OqYq3APlM1nIfBxUqvY5gigvy168Gh8IhZOlAXPenUeslpBhJ9xH1YefHBJ8rSfVAweaVTI1LhJGI%2Ffa4kpn4wSjZsFVgrBxC0M%2FRhQqZkowiTncfgd8kaPtXIquHlSjjwnNLHx8SXNnTo%2FjBH6SyYNP6jWM0QqAvpE3Txy5BXDG2eoJCzwScRl1dwkeZRoq1PeOnnTTizKSqOQxL25OavwO8nqIJGLaBaXR0un6%2BVikgDXDVLYFCzWVaFraXsgnaAJKTNuVT6l4Xcpj85EB3WSNE00VyA2VaZWDRBAecNSm3F4JC%2F5tVdjuxWkw%2B%2Bw8%2BoKDPQD9fwtmtkGB8O10GXX3n0AfLrNWGPfxD%2FWQYOLBZQxXF8Hg1YfX3%2B6pbCUTdzRoI181oTYmHEwgK150DGeru9V2yP60M4npJJqKs6jKvoUGZAxuBj6wKpWpiVy7TBB5VHFkTU7H1sDejjTA2aIAM6LFKXQyKKnALErH4MTEN%2FM5R0iUbyeniROqmil2rAFuKt9%2FBy9%2Bu0OYrwAWKLi3jbFy3I2kxLY7j8j68Ox5vNcrE3IXXEdWQaYjXKBBmbhXbMQuokTIMjtgO4aj9uaf2AkKfRBnYOuct6CmLYjzuRuua5Alo2TLKj4YrDt7qjC%2Bxs3JBjqkAZeYnz%2BCcQYjoSQUrUnJfrW1SabYtUT9nDf1uZfPRa0J0qRL%2FJG%2F9Xg1w3LluetzOIIbHYqDDfkXAbcpV4aJzoMkUScolhMGCZCZM0gpLiAGQ5EkxXsMyCf682srNjbFA7TKgmHu%2FuW0k8IeEKG8PcHkkR3ftd6B0MT%2B6YV4TVTu8uK8MQixZjOyqhc7ien1AnglA9IYTDa81s9Z7kXP38C3QmAi&X-Amz-Signature=a0b0ef6142a00e3aae3068965b390a8ab113288e6a99661716c068e17dfb6b89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
