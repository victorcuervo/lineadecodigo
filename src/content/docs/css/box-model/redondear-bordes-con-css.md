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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVDV2LZD%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T045158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCAnlhH16nz9Eeax1RH8z4sSIYJdjN6%2BOrqdP2jikQOjwIgJTI1TY6PEci6bbrAj00DRZtA%2FCEnY%2Bw64C7S8aF%2ByLAq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDCfI6c1aq3PCgwkq0CrcA5XG313GI38Z2ME7gBXGuIpyNwE%2Br%2FJxF%2FzmaYAtJm%2B0M1%2FyItj3EQPOCQsvPIdDs3ItYsuH9BD0xpRGfcvHtlhbxwj%2FfvhPTFx0%2FtJ8tnyOlOjnZeaTQ6R%2F3DOT1cdqr1SKWphLuRXFZqysIJS4yyAPn%2FStG%2FLNg9NKciXr81fW2DnLocMH8B1FRcjR%2BWugpd6RYjA1in%2BBm0ZTGc2X8QN3x%2BRT31pDdlDJz%2Bol3F7RpfdqNVYTIQI86arE4cqQXhJrnody5nVBq5d7vZR%2FaM59cAmh1J5dZQtsqnjUAkUKN2roCU%2FJ9zqKKAR9po08kCF%2BcGb4tEt7k8tDFAMnvTeH12%2Fd%2FwHtk5VozMGA86sc4qsWu%2B2WFybsSPzygXr0X%2FZLCdsr04wScIK1uwsVl7lt1g9otcJHesIU4bYivV7WR3UntzEp%2BLuyJREkhHjk5%2FGn2adKRE6jJNQhVZm0wJgfDnICjgtzol7iHaSCPKCdzmBaa8xJXwZ8BfYLTkUrihj21wlchxhqLQTic1Zmh8iWqMFN1I7ktIvC6Ymkr7Bean9YvwmjrJ%2Be0IUl1Rqk224XatguU0viG7FNuaRFD55K4Jm8LcbyrdYYjJ5lDt0Z%2FAYirQ9T0PZ5cunyMILqiMoGOqUBDm4fMW4cap5g%2F8PQhENdR8dFE1txfW%2BwCyXSwVYtqd3eQD7xpfr2jBfL%2Bbg1UjPzFSFbo3LDeH5TQCSaBC6sKoCBxvlyshCJe0rnZ3JNM0FAuf6Or%2FKF2wGRFI3RKSKpZ0SW0HF4zaLXvnipBsXj5oHMlpmodRE0LjGexoPzB9YMmxMRmOtNTigDUrFy6wegrQ0wBFy6N8VQGOLf7EG05oaGyYLz&X-Amz-Signature=5ab8cf4bc9a260ec667277e97b28cb9891bbc0a3c6b78d109d5ad2d604d569e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVDV2LZD%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T045158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCAnlhH16nz9Eeax1RH8z4sSIYJdjN6%2BOrqdP2jikQOjwIgJTI1TY6PEci6bbrAj00DRZtA%2FCEnY%2Bw64C7S8aF%2ByLAq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDCfI6c1aq3PCgwkq0CrcA5XG313GI38Z2ME7gBXGuIpyNwE%2Br%2FJxF%2FzmaYAtJm%2B0M1%2FyItj3EQPOCQsvPIdDs3ItYsuH9BD0xpRGfcvHtlhbxwj%2FfvhPTFx0%2FtJ8tnyOlOjnZeaTQ6R%2F3DOT1cdqr1SKWphLuRXFZqysIJS4yyAPn%2FStG%2FLNg9NKciXr81fW2DnLocMH8B1FRcjR%2BWugpd6RYjA1in%2BBm0ZTGc2X8QN3x%2BRT31pDdlDJz%2Bol3F7RpfdqNVYTIQI86arE4cqQXhJrnody5nVBq5d7vZR%2FaM59cAmh1J5dZQtsqnjUAkUKN2roCU%2FJ9zqKKAR9po08kCF%2BcGb4tEt7k8tDFAMnvTeH12%2Fd%2FwHtk5VozMGA86sc4qsWu%2B2WFybsSPzygXr0X%2FZLCdsr04wScIK1uwsVl7lt1g9otcJHesIU4bYivV7WR3UntzEp%2BLuyJREkhHjk5%2FGn2adKRE6jJNQhVZm0wJgfDnICjgtzol7iHaSCPKCdzmBaa8xJXwZ8BfYLTkUrihj21wlchxhqLQTic1Zmh8iWqMFN1I7ktIvC6Ymkr7Bean9YvwmjrJ%2Be0IUl1Rqk224XatguU0viG7FNuaRFD55K4Jm8LcbyrdYYjJ5lDt0Z%2FAYirQ9T0PZ5cunyMILqiMoGOqUBDm4fMW4cap5g%2F8PQhENdR8dFE1txfW%2BwCyXSwVYtqd3eQD7xpfr2jBfL%2Bbg1UjPzFSFbo3LDeH5TQCSaBC6sKoCBxvlyshCJe0rnZ3JNM0FAuf6Or%2FKF2wGRFI3RKSKpZ0SW0HF4zaLXvnipBsXj5oHMlpmodRE0LjGexoPzB9YMmxMRmOtNTigDUrFy6wegrQ0wBFy6N8VQGOLf7EG05oaGyYLz&X-Amz-Signature=84c1def54f5a616a43c3feb249a4fc7c49d08b37fc261fec70f3614b91805a69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
