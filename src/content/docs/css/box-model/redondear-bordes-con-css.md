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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLD5LF44%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T042104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEt4siK1r8%2BVcgqs5rOdHnQ1YWqpkbf8Lb3sIg4tNuQSAiAHM08gqn4%2FYebstFpTtJnwW9s%2FBv2AOWY%2FPv8kWhpvkir%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMBN4K7G6CD%2FDo%2B4GJKtwDJPa7kFbpHHBAhKcf2k4VKc9JoheKhqI9H6CB62D3a4rTnnbB9hbCon3M2Kg1S6mrOeQPFUAjuKg5CZCqk9x7erVL2eEgutaB%2Fx69TxklCL63I6q6TIWO3ZBNivZ%2BYwHhO1fkDCJWJTX%2BHeysteCSWakFmT8c%2Fr0kkHSAuRJnFDeDfaaPyg9YH3AwX86VIBQddKUymq8r%2F%2BGaUzFf9tyohyRL9DiB3KzQs9x1%2FVuIXsSLeauZ5vPzlKQ1Jd9j3POMZC6AfPQqVMWOD5L3YTVdr0uPzU1U5nzjT5lcyvgIUtPUcdrh4yx%2FPuDmF%2FbUX%2FNkSR7Zv4rqazFCb2Zaz1rqjX2UKO7i%2BkiMqaH%2BdZfxjg%2Bc1lJevEOh6%2BermE80hcdjhW4eHSoXDVQHE89IZ%2FIXrNbQZnXDa44nK%2FoMbqq8%2B4uns0nLO6yMlxChjwofuhw%2BxI8BGBuINOfYDrU3IsUcoLeTvM77t%2Fho49mXS0gsohPA8I%2B%2Fe8bDUjxQBtReAW7kKM1OlRRTaEFE7L1ZzhDaGlTacv5SNu7A9%2BSwGCseL75xInXHgBW%2FiX5KLLmMqMCEYNM%2BEZTeGmt9M8MUmp94Pmcmu2yvGXQFmQEALYuaE%2BXkngFEI1bGCMmA%2Fkkwms6IygY6pgGs3%2BAZyCM1psXgdVYtp4oOtDEh64gBxIrA94rwo4kipDdkrhGNi5ERGGkPOnUyb4vaYIWu2i5RD27CjT5JPoUW9Jfy88tvqGrsjv5zbgSK1y%2FMIz2owmplJy3DRyMBB7Im1KIKkstxcgn%2F1FZkYdydiKSLWekhDBopGPW8E9ieV2QzXuyjJHqi5%2ByJKZiMczMciH9i926jxfgnhqHD47Pr3r3rfEUb&X-Amz-Signature=6e1e9e159d7ab19bff9556604b8831337ee67e3c0650569d6536175a2820a4e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLD5LF44%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T042104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEt4siK1r8%2BVcgqs5rOdHnQ1YWqpkbf8Lb3sIg4tNuQSAiAHM08gqn4%2FYebstFpTtJnwW9s%2FBv2AOWY%2FPv8kWhpvkir%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMBN4K7G6CD%2FDo%2B4GJKtwDJPa7kFbpHHBAhKcf2k4VKc9JoheKhqI9H6CB62D3a4rTnnbB9hbCon3M2Kg1S6mrOeQPFUAjuKg5CZCqk9x7erVL2eEgutaB%2Fx69TxklCL63I6q6TIWO3ZBNivZ%2BYwHhO1fkDCJWJTX%2BHeysteCSWakFmT8c%2Fr0kkHSAuRJnFDeDfaaPyg9YH3AwX86VIBQddKUymq8r%2F%2BGaUzFf9tyohyRL9DiB3KzQs9x1%2FVuIXsSLeauZ5vPzlKQ1Jd9j3POMZC6AfPQqVMWOD5L3YTVdr0uPzU1U5nzjT5lcyvgIUtPUcdrh4yx%2FPuDmF%2FbUX%2FNkSR7Zv4rqazFCb2Zaz1rqjX2UKO7i%2BkiMqaH%2BdZfxjg%2Bc1lJevEOh6%2BermE80hcdjhW4eHSoXDVQHE89IZ%2FIXrNbQZnXDa44nK%2FoMbqq8%2B4uns0nLO6yMlxChjwofuhw%2BxI8BGBuINOfYDrU3IsUcoLeTvM77t%2Fho49mXS0gsohPA8I%2B%2Fe8bDUjxQBtReAW7kKM1OlRRTaEFE7L1ZzhDaGlTacv5SNu7A9%2BSwGCseL75xInXHgBW%2FiX5KLLmMqMCEYNM%2BEZTeGmt9M8MUmp94Pmcmu2yvGXQFmQEALYuaE%2BXkngFEI1bGCMmA%2Fkkwms6IygY6pgGs3%2BAZyCM1psXgdVYtp4oOtDEh64gBxIrA94rwo4kipDdkrhGNi5ERGGkPOnUyb4vaYIWu2i5RD27CjT5JPoUW9Jfy88tvqGrsjv5zbgSK1y%2FMIz2owmplJy3DRyMBB7Im1KIKkstxcgn%2F1FZkYdydiKSLWekhDBopGPW8E9ieV2QzXuyjJHqi5%2ByJKZiMczMciH9i926jxfgnhqHD47Pr3r3rfEUb&X-Amz-Signature=5458611932ae6d8bcbdd22d23d1ad1852affe26fde847fb798d75e737bab5b25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
