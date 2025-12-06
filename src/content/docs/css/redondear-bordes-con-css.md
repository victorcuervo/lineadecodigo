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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RN2GYXMR%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T144853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRYDpDiTmYGmuNBLmYd%2B1P6L129K6bNZtLJMjiJAhi1QIhAIBrFhhHHahJm8T7e%2FcVCdPFiZ2I46xrnzp6eih6CDoyKv8DCHUQABoMNjM3NDIzMTgzODA1IgzX6hvIVb8cnW4OhSMq3AObBIl%2BzHsF5%2BoGRdgCDHMIoe0Y08QVdy6czHt%2BGHCbwoGg21csTW%2FUxRqGG42cqkUX7MLp%2BbOE3mjrO%2FjzzNkIbGD%2FtVn6KXpyxXK%2BNMnXLaHSnYZPGr9LN%2Fm1frD2HuvEnEWJ%2BR7zpEPc8lEL3su17b9F7ctsImRpt5D6gBFM8EdILoY93EG%2BcYJO0rtF4wuKLZG1OzeQTMU5kcnWcWHD%2FaiQQYJQu7q2f7T2OZQxoq3sifjf%2Fb1BXslucSiQf2DcxTWqpGPNryhP5JOwmZRSxpC3Kfbt1ItpNWYSC75IFeVaqooTQ4rl1jBi%2Fu3a3ozKB5HpCr5hB3Mti9ur6q28NC8eLCHe9l2zEKzkBXtWCcjaVp0Owy6dgjn%2FUQSO3XFc0POPq%2BSNFHnevgymjd%2BPTjvFW3VdI1dAbmC25vrLTlF0IQoat%2F6FiHkHaVLj9kCBrk55VN8FgIhmo%2FaHqLJd8kjAU7xF39tLq74cZ4HxNmRVw19Omt6YJb3LjKjNH5%2BTsFIBA1dqn4j0gurh%2BKATcuAnL4dX3fnQOLva%2BO3jKwFYU7PGbF9wP0G3c9TMcfyfpV36PBy2O4szrOeFrnbJi%2FgELu%2FUVdYiJDvz4vXNLXOodm%2BuaRGwE6g2BjDFptDJBjqkAZxcyEev106vQDal7NSnQL%2BAfbi%2F6aHRRUTJpG7ReaNDT8K0sdmbYmhCjQaeXCEQfJbl6ttc5q0%2FxNtO3Cu2DfcTqAxhEz5JwNo%2FnnsP7L8%2FJPRSJRP%2BZzDR8vd5067ZO%2BToP6mLIR9SWeJ6GmHq9HSZDOwTDgvuQfDmqQOri94VsWIr3Ny3va9OQUD2kHXqRQi4LsRhqYto0ffCp5cKjBnaZTGH&X-Amz-Signature=74de6296d34d9e071cb3e303ef979ae18ac374569157b2be21f17bdb80889778&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RN2GYXMR%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T144853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRYDpDiTmYGmuNBLmYd%2B1P6L129K6bNZtLJMjiJAhi1QIhAIBrFhhHHahJm8T7e%2FcVCdPFiZ2I46xrnzp6eih6CDoyKv8DCHUQABoMNjM3NDIzMTgzODA1IgzX6hvIVb8cnW4OhSMq3AObBIl%2BzHsF5%2BoGRdgCDHMIoe0Y08QVdy6czHt%2BGHCbwoGg21csTW%2FUxRqGG42cqkUX7MLp%2BbOE3mjrO%2FjzzNkIbGD%2FtVn6KXpyxXK%2BNMnXLaHSnYZPGr9LN%2Fm1frD2HuvEnEWJ%2BR7zpEPc8lEL3su17b9F7ctsImRpt5D6gBFM8EdILoY93EG%2BcYJO0rtF4wuKLZG1OzeQTMU5kcnWcWHD%2FaiQQYJQu7q2f7T2OZQxoq3sifjf%2Fb1BXslucSiQf2DcxTWqpGPNryhP5JOwmZRSxpC3Kfbt1ItpNWYSC75IFeVaqooTQ4rl1jBi%2Fu3a3ozKB5HpCr5hB3Mti9ur6q28NC8eLCHe9l2zEKzkBXtWCcjaVp0Owy6dgjn%2FUQSO3XFc0POPq%2BSNFHnevgymjd%2BPTjvFW3VdI1dAbmC25vrLTlF0IQoat%2F6FiHkHaVLj9kCBrk55VN8FgIhmo%2FaHqLJd8kjAU7xF39tLq74cZ4HxNmRVw19Omt6YJb3LjKjNH5%2BTsFIBA1dqn4j0gurh%2BKATcuAnL4dX3fnQOLva%2BO3jKwFYU7PGbF9wP0G3c9TMcfyfpV36PBy2O4szrOeFrnbJi%2FgELu%2FUVdYiJDvz4vXNLXOodm%2BuaRGwE6g2BjDFptDJBjqkAZxcyEev106vQDal7NSnQL%2BAfbi%2F6aHRRUTJpG7ReaNDT8K0sdmbYmhCjQaeXCEQfJbl6ttc5q0%2FxNtO3Cu2DfcTqAxhEz5JwNo%2FnnsP7L8%2FJPRSJRP%2BZzDR8vd5067ZO%2BToP6mLIR9SWeJ6GmHq9HSZDOwTDgvuQfDmqQOri94VsWIr3Ny3va9OQUD2kHXqRQi4LsRhqYto0ffCp5cKjBnaZTGH&X-Amz-Signature=282ca9f7de9d0920dd78cdeadf59af53946576d91c167c90d269d15d9b4a0615&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
