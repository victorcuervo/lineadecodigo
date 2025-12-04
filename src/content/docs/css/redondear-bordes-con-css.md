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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CBOZC3J%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T061250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIBQtVfi%2Bf4bxIft6R1QuEY3XbbnCDFa%2BpKmgjXjzEjUWAiEAl62Fb00v19ovcouFU5mUDkTcpRU%2BieniHfb7AoQKRDMq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDEeZCgvJuKZ8Hr0OGSrcAxqsS%2BRbd6DeXJQZBg6WM7YmpOxVJvnptRtS9Dl%2BX6yGokIiO03DsB8msMcsMs84%2FULzDbECsbMOt2ZIRIBbudCNWobc2znGt51KIBK0hkBXpKBlVuOpq0c3qn50eZSVbkY3hoFzUh%2FjR0gf%2Br%2BUTMYaRMlB0mu0ka2P%2FS%2BGHXGorKMDUNognvhjeCMH1dpLZjyR7BrguwNMrUjk3RNt7nw%2FWzKB6M2osZ%2FJzFAZrOTMmqB1zJmU055PLzNiuP8pb0Dnqcfi6Q181fKwXazWeZr4Iv%2Fs3r8uw5sDVds09q5O8LG3K0PDfBakjsjO5yDMXWZ8sqkRHrEry8Wo34zFBIKmt3qE0TBMAedlJO3jkv0ZbbQr5hrLaxGEKLgJhpJYlWbe8Tdl6JdkQSgojpozRUer3tQ3PqilCFuLGXyZZ61XBN0GYm373gS%2Bk6EO0csAMylmgzEqU5VLPTrdmaVHfQKHn9lx8Hu%2FTljiii8%2FCZC3yy3LqEWfFdHnhI5qJXRlSwOnp7SkaNiviFNBvtxck4YWfiGQoXeY673amVIpJc6YsCOgJEbo6r5F7kEgx1XD0X5VFmuu9arLRLK%2BnwMnllgr2n9CfENZDA%2Bru1T7OECsnRq2wvcNm8ogeX1SMIPLxMkGOqUBWYkjgeAOtcZHlY1FpK1gUzxfw%2BZBTyZoP9INVrFuLu8Hk3h0VQZXucdIwA97S4gsb4OBHGg9FR8zfmzXxgSnIizqk9XNV2KfvD8Dkr8oyRiXtzke1qCU%2F1rp1gLbKl%2FoYyiyLg8JIEbjjWT6I9Yg3%2F%2F3xbIx0bVm7XyX9BhPSXWXk%2FKtSw0pdDr3R%2BZFE%2Bhfw%2BidqvonCk1qnt5Bo5q7Zi3UWKe1&X-Amz-Signature=4d519140796cb65bbd519fe718053b2c0c082bd4693e741ba8dedf4f477b1e0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CBOZC3J%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T061250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIBQtVfi%2Bf4bxIft6R1QuEY3XbbnCDFa%2BpKmgjXjzEjUWAiEAl62Fb00v19ovcouFU5mUDkTcpRU%2BieniHfb7AoQKRDMq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDEeZCgvJuKZ8Hr0OGSrcAxqsS%2BRbd6DeXJQZBg6WM7YmpOxVJvnptRtS9Dl%2BX6yGokIiO03DsB8msMcsMs84%2FULzDbECsbMOt2ZIRIBbudCNWobc2znGt51KIBK0hkBXpKBlVuOpq0c3qn50eZSVbkY3hoFzUh%2FjR0gf%2Br%2BUTMYaRMlB0mu0ka2P%2FS%2BGHXGorKMDUNognvhjeCMH1dpLZjyR7BrguwNMrUjk3RNt7nw%2FWzKB6M2osZ%2FJzFAZrOTMmqB1zJmU055PLzNiuP8pb0Dnqcfi6Q181fKwXazWeZr4Iv%2Fs3r8uw5sDVds09q5O8LG3K0PDfBakjsjO5yDMXWZ8sqkRHrEry8Wo34zFBIKmt3qE0TBMAedlJO3jkv0ZbbQr5hrLaxGEKLgJhpJYlWbe8Tdl6JdkQSgojpozRUer3tQ3PqilCFuLGXyZZ61XBN0GYm373gS%2Bk6EO0csAMylmgzEqU5VLPTrdmaVHfQKHn9lx8Hu%2FTljiii8%2FCZC3yy3LqEWfFdHnhI5qJXRlSwOnp7SkaNiviFNBvtxck4YWfiGQoXeY673amVIpJc6YsCOgJEbo6r5F7kEgx1XD0X5VFmuu9arLRLK%2BnwMnllgr2n9CfENZDA%2Bru1T7OECsnRq2wvcNm8ogeX1SMIPLxMkGOqUBWYkjgeAOtcZHlY1FpK1gUzxfw%2BZBTyZoP9INVrFuLu8Hk3h0VQZXucdIwA97S4gsb4OBHGg9FR8zfmzXxgSnIizqk9XNV2KfvD8Dkr8oyRiXtzke1qCU%2F1rp1gLbKl%2FoYyiyLg8JIEbjjWT6I9Yg3%2F%2F3xbIx0bVm7XyX9BhPSXWXk%2FKtSw0pdDr3R%2BZFE%2Bhfw%2BidqvonCk1qnt5Bo5q7Zi3UWKe1&X-Amz-Signature=156cc567799335ab4781dce191b69b0790151b5a1b6b4644151f4da16ab32118&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
