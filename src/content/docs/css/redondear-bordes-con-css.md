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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663E3JGPYW%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T081402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClznAUl0ExPlwTpB05TS4rgP68ibm2RI9ZFqtAK7xuzQIgVA%2F6b7gRJyJ2EpiWL87sxmiJ5288ATCZyERVf0pvmMYq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDGC0Es1G4HInT8RWTircA0WzDfd6xU9mkeAvjBs3pm2IYETPy7WhQry1Z4ZpmOxk7c%2FS1n1EAgR%2BEV3LzZrO1P8Ll4TgV%2B%2FbthMGaEs2c2y4lTSDpdz7xsCuMhP9fOmaY%2BUOVBNFT7zvBQTbhqAX9147mBobjcZ35zs0cxCM3ex0orixzYoLo6h2lrnyAa%2BqeKxMBvNkLdB0rgO2ljuO57cu8TTIQ5X25paFvPKjfEJIcdBUXA7aewTswwyscEsfDMG5uTMo%2FQhg%2FNTZO4fyXMqsEnKMP0eEtCpSN38G5JL2UtKUhq4RM7z3AnTukNibCOAmW8pXlVaZnLQPWBv7bQpyNuMP77unV106GHrsyhkbY4b6gw1qoEUk9yXU3w2aGgY8N%2FWp1BulLoQtk7zYadVNE8vtkJM%2BOixHDbZVECG2gZ9YQ1NcXvttPwQfQ2%2BD3JYfIJSilpwSVSm6D%2BRJpL%2F92YIPeuW98CuDIYuyMjCjkGg2nklw%2FQj5SElPbYclwaXvSV0OZqQCYuTF236amEcQJ%2F3RJFSR62VCd3A7krJB9Dq06rEa0tXaQwB1lOVtDCl95Jz0u4Dab8t1bbjrw4RMMiCC2KuDo5jm%2F7DnjYAAbATVOInQUwAE8YqptHaykwXSgw4LiCiDRJZEMLCmyckGOqUBtOszc4RtxvCj%2F1c3AfTD45%2BkuCxM7YgCvn%2FDM9MzUqQL6mgPRS%2BK01gceq5Gaojfu5dgkgQdyVao8IVApVSTNzG8d5dkPidm79beAuwjEHuPOsPbjkW4048P1S7lUDhL%2B5xeK5M2lNwXD7qwgw1vObq3WF1mjiZtzWxWxM0feFl2SC%2FOtdAw%2Bgkg9sGXCkw8fnuy7MAzHqNR1sOWkoZnyOOMFgR5&X-Amz-Signature=fa40043aa35467fd09092506ed1031678d6587cf568b531915e3911e3f0d9a55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663E3JGPYW%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T081402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClznAUl0ExPlwTpB05TS4rgP68ibm2RI9ZFqtAK7xuzQIgVA%2F6b7gRJyJ2EpiWL87sxmiJ5288ATCZyERVf0pvmMYq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDGC0Es1G4HInT8RWTircA0WzDfd6xU9mkeAvjBs3pm2IYETPy7WhQry1Z4ZpmOxk7c%2FS1n1EAgR%2BEV3LzZrO1P8Ll4TgV%2B%2FbthMGaEs2c2y4lTSDpdz7xsCuMhP9fOmaY%2BUOVBNFT7zvBQTbhqAX9147mBobjcZ35zs0cxCM3ex0orixzYoLo6h2lrnyAa%2BqeKxMBvNkLdB0rgO2ljuO57cu8TTIQ5X25paFvPKjfEJIcdBUXA7aewTswwyscEsfDMG5uTMo%2FQhg%2FNTZO4fyXMqsEnKMP0eEtCpSN38G5JL2UtKUhq4RM7z3AnTukNibCOAmW8pXlVaZnLQPWBv7bQpyNuMP77unV106GHrsyhkbY4b6gw1qoEUk9yXU3w2aGgY8N%2FWp1BulLoQtk7zYadVNE8vtkJM%2BOixHDbZVECG2gZ9YQ1NcXvttPwQfQ2%2BD3JYfIJSilpwSVSm6D%2BRJpL%2F92YIPeuW98CuDIYuyMjCjkGg2nklw%2FQj5SElPbYclwaXvSV0OZqQCYuTF236amEcQJ%2F3RJFSR62VCd3A7krJB9Dq06rEa0tXaQwB1lOVtDCl95Jz0u4Dab8t1bbjrw4RMMiCC2KuDo5jm%2F7DnjYAAbATVOInQUwAE8YqptHaykwXSgw4LiCiDRJZEMLCmyckGOqUBtOszc4RtxvCj%2F1c3AfTD45%2BkuCxM7YgCvn%2FDM9MzUqQL6mgPRS%2BK01gceq5Gaojfu5dgkgQdyVao8IVApVSTNzG8d5dkPidm79beAuwjEHuPOsPbjkW4048P1S7lUDhL%2B5xeK5M2lNwXD7qwgw1vObq3WF1mjiZtzWxWxM0feFl2SC%2FOtdAw%2Bgkg9sGXCkw8fnuy7MAzHqNR1sOWkoZnyOOMFgR5&X-Amz-Signature=20a2fe1f87b2edfc71af9702a13ceafc89bb2a518133d492c533ecb7a45d3d46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
