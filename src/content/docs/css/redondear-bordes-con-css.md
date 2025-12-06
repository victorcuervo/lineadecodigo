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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6ZEG4CQ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T121436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRG0iKxeET1Pxf7fPhonbFcufuOCgJzFHR0uuzGmgTqQIgHr36WtNBBsKWYzXinRMuiLGcV5u7PE0aoD99caX0qe4q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDEHwCqpjc2qvw3fDNyrcA%2F3NAWwy9Ly7FoOpuDSQYGbfIO2tzf7rNBfF%2BgwV0oSBTZoBt%2B803wPdB3ZRC2gFNnLZQiNAlhqrl7GOUc8NLq5tpuRJPlYeIwl0VjnOkib8T3L1l2B07CaRXr4DMjDLinOLngU%2B7zQ7YhJlh4kAy2p112swS0kYpIx5Ijd57uG54c7Ibv9kvMJ5NUe6%2BICUzyqPSz1CEompmNbwdNfCcH5s8iRizivJdTEU3Kw0P4F4bDlmbgoetacDHq55gqcDtsap9A3cKltNtD0sA%2F%2B%2FJyTIGPMl3vZTOIyPJ5hogS8%2FTH7O0r1G9lC9txMFcWeARdeHxh%2Fni%2FLKEaqZquAN0LZMiBA8hWksn5osw4jlMQmABFSG04qT3%2BLPiWadglvS56PsSEXcYKnI681ivTurtynbdEi8p1GYi3F88eCbqee5dkjpl5ud9Zj1eWahd1Nm2VTfwn%2Fz4wSF31wjBS%2BnwKI96K6pW4FNcETnkvdjyfxO2XiaouSHBua%2FpuJ%2Foe5otpdQ9Mc4pt8fK0%2BH2uUwWQKdcII5jdmaQ6FQh5Q6w0vJA8xrNcno%2FEnaAsRhyGKudWN5YRs%2FuFzkFoaXTO7az87Hp5uXTSy3lKhmCi8L%2BHezsPRadQEv0SHttoGqMJym0MkGOqUBL7NSrdEqqd553JteOvUIkiCU2k9QKLk5of9F4xrq0tCYk75oGSppGiy%2BrhH6UJdhHPw8nU8QcNsacJHXJIij%2FS%2FkUcnO4vbN6w4MMf2EitVa9GX%2BxlALVGa8FqMEYXvxIM1vIT7gDC8qKBxOw2AJCMkO%2B6DHfeMffxZZW49fgoq0GEcsl9nG%2FUc2l0MU7zna%2BupI6pRQlafCopxfgNudDj4A5Kjk&X-Amz-Signature=b1c9734c7bc6c8c58ec07ea080a2d4af1801ac1c17ab81733f465162b7479c03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6ZEG4CQ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T121436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRG0iKxeET1Pxf7fPhonbFcufuOCgJzFHR0uuzGmgTqQIgHr36WtNBBsKWYzXinRMuiLGcV5u7PE0aoD99caX0qe4q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDEHwCqpjc2qvw3fDNyrcA%2F3NAWwy9Ly7FoOpuDSQYGbfIO2tzf7rNBfF%2BgwV0oSBTZoBt%2B803wPdB3ZRC2gFNnLZQiNAlhqrl7GOUc8NLq5tpuRJPlYeIwl0VjnOkib8T3L1l2B07CaRXr4DMjDLinOLngU%2B7zQ7YhJlh4kAy2p112swS0kYpIx5Ijd57uG54c7Ibv9kvMJ5NUe6%2BICUzyqPSz1CEompmNbwdNfCcH5s8iRizivJdTEU3Kw0P4F4bDlmbgoetacDHq55gqcDtsap9A3cKltNtD0sA%2F%2B%2FJyTIGPMl3vZTOIyPJ5hogS8%2FTH7O0r1G9lC9txMFcWeARdeHxh%2Fni%2FLKEaqZquAN0LZMiBA8hWksn5osw4jlMQmABFSG04qT3%2BLPiWadglvS56PsSEXcYKnI681ivTurtynbdEi8p1GYi3F88eCbqee5dkjpl5ud9Zj1eWahd1Nm2VTfwn%2Fz4wSF31wjBS%2BnwKI96K6pW4FNcETnkvdjyfxO2XiaouSHBua%2FpuJ%2Foe5otpdQ9Mc4pt8fK0%2BH2uUwWQKdcII5jdmaQ6FQh5Q6w0vJA8xrNcno%2FEnaAsRhyGKudWN5YRs%2FuFzkFoaXTO7az87Hp5uXTSy3lKhmCi8L%2BHezsPRadQEv0SHttoGqMJym0MkGOqUBL7NSrdEqqd553JteOvUIkiCU2k9QKLk5of9F4xrq0tCYk75oGSppGiy%2BrhH6UJdhHPw8nU8QcNsacJHXJIij%2FS%2FkUcnO4vbN6w4MMf2EitVa9GX%2BxlALVGa8FqMEYXvxIM1vIT7gDC8qKBxOw2AJCMkO%2B6DHfeMffxZZW49fgoq0GEcsl9nG%2FUc2l0MU7zna%2BupI6pRQlafCopxfgNudDj4A5Kjk&X-Amz-Signature=fbd17b9efc3820e26e8d9dc6b271315ec3dc51305cf83fd1e70e40fdf927cedb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
