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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667N72NRPA%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T023720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiidA7NJUDn6ylsvhOF5LbNK5ksFA3GaeYYrYBnJ8yFAIgKwpOggtlzhbVnV5OeMqvbhFZ7zppPKyivPu4LH0kPAEqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIUrwmHc%2FAoG7lG8xircA14lYL3%2BfpZpHYjYGoosSPb6CnCSyh2ptHtswH0h95As9jPXl4qdo8UX2Z81%2FkJ%2F3M9Xag%2FNMI2imBU3YnDLqeUWZ3eeXEOIVIxLh5Mbvze2jryDinSxNPwxZNHshpiPvqJDOkkkIBdVCywasoxmnrQYLbxqRvY2lgVba6%2F1WurbGJKlb77NJDLngQnHDm9psabUfGAmDhq9oaBMyE1CUQD8l%2F3jlKpt2SSeM0Y7cvdPYiVptMjDOj%2FrdKGBRJol2xACnJNa9akTRYn%2F3Q0%2Fd1ZwKS%2FUlo50xs82KUd1XKqLrAJr54Qfr48k5vejrem0hnm6WAVTVnIBbzYi5Yal2%2BgOOCcNixpwh3FucElvp97nKEqKCGmTUrdA0lLpeEP95yEArN22gvoYoQn1EOKu6YcRMOwfcPaMqhveoZ95r9ALOfJeHOWTW2cNXjVAq%2Be4vR%2Bl5PSy1xlFbOQURx%2FRp%2BJ2u8JGJwekSgbaoEenZf4MwHWweyA3f%2FrYJRplmlbUzhwIVC4W3yeB1I5Uo8SH7acoVcW11rNqcV3GehYkd6Cd0lwn2m0NgFc7esWgGb0%2Bvd%2BMldWkBge7vJFcj5%2FIQTxcEDAWeeiijW%2FMoFN6JjLHZ4l0EzIPHTGr2hDWMPqO3skGOqUBFzGutDkVHHeEepyhjAW4G4%2B5M07hw%2FjrtEUJhRGKdAgaUna1cbqhVugGplapZRv0iZncittyn2yMOSvlNMSDSF%2BgC04BVMo%2BYynTh3nJArxLn1ckBh87feNsKpdiPcCp%2BYaPEfQ9euEreb6a6Ox8SvGJu80iAYknXy06gB20w2poXxdpiEUV9Gv5FOqAEzHy9XxD0xdd3cNtEPSlWQ43kT5Ynuup&X-Amz-Signature=fd47f85389eef47c27ec6c4b02e4a0889a0985a92dcc5a6ca2363eb1a7fe215f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667N72NRPA%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T023720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiidA7NJUDn6ylsvhOF5LbNK5ksFA3GaeYYrYBnJ8yFAIgKwpOggtlzhbVnV5OeMqvbhFZ7zppPKyivPu4LH0kPAEqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIUrwmHc%2FAoG7lG8xircA14lYL3%2BfpZpHYjYGoosSPb6CnCSyh2ptHtswH0h95As9jPXl4qdo8UX2Z81%2FkJ%2F3M9Xag%2FNMI2imBU3YnDLqeUWZ3eeXEOIVIxLh5Mbvze2jryDinSxNPwxZNHshpiPvqJDOkkkIBdVCywasoxmnrQYLbxqRvY2lgVba6%2F1WurbGJKlb77NJDLngQnHDm9psabUfGAmDhq9oaBMyE1CUQD8l%2F3jlKpt2SSeM0Y7cvdPYiVptMjDOj%2FrdKGBRJol2xACnJNa9akTRYn%2F3Q0%2Fd1ZwKS%2FUlo50xs82KUd1XKqLrAJr54Qfr48k5vejrem0hnm6WAVTVnIBbzYi5Yal2%2BgOOCcNixpwh3FucElvp97nKEqKCGmTUrdA0lLpeEP95yEArN22gvoYoQn1EOKu6YcRMOwfcPaMqhveoZ95r9ALOfJeHOWTW2cNXjVAq%2Be4vR%2Bl5PSy1xlFbOQURx%2FRp%2BJ2u8JGJwekSgbaoEenZf4MwHWweyA3f%2FrYJRplmlbUzhwIVC4W3yeB1I5Uo8SH7acoVcW11rNqcV3GehYkd6Cd0lwn2m0NgFc7esWgGb0%2Bvd%2BMldWkBge7vJFcj5%2FIQTxcEDAWeeiijW%2FMoFN6JjLHZ4l0EzIPHTGr2hDWMPqO3skGOqUBFzGutDkVHHeEepyhjAW4G4%2B5M07hw%2FjrtEUJhRGKdAgaUna1cbqhVugGplapZRv0iZncittyn2yMOSvlNMSDSF%2BgC04BVMo%2BYynTh3nJArxLn1ckBh87feNsKpdiPcCp%2BYaPEfQ9euEreb6a6Ox8SvGJu80iAYknXy06gB20w2poXxdpiEUV9Gv5FOqAEzHy9XxD0xdd3cNtEPSlWQ43kT5Ynuup&X-Amz-Signature=a33a88cc5c334758e2ed97369b9cc8ad4adc669226d9bbec35640adde6218b46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
