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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMAFDLWU%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T092431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCIHOW4z5aL1tKzXEb8auhyxL%2BCKwDvXDFStm6Z%2B38WOVqAiAi1L%2BiXwqVqOQI5owP7vA3il1wlZrm7p1es3Z00AEpHyr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMCGx7UBrafDAY7zApKtwDSPfu24tG%2FRB8JTbiJAu%2B2fawPm0s3SLavC%2BmOciq9sTctkocZDKyUJQ63lh2OMp7MNhHOB2vn8QEPw9W80GXdQR0D4iSsPmX0PGCFAHkuEUZP%2F6PMdtIjQE1u38Jiv6W2D0Pt4JSK%2FNkvGKiZk84zzlECO1c6OJwJEgNWTFLqwuvBdKYye98r7Rk8IT1wI0%2BcBG2etJnxupjkCwSVbAaUgq778BXtM920iRElwmVp7cgzCEBIQ9wpayLpU5zeml%2F6jKpiR0hlpt8Ds11r%2BYqVzkXGiFVzt5jxGVU8GhbpUfZuEKACQxTc8f8DgYHK6SNXqNGIKdUMjjVW9WTKwNBC1PqB7caiVX8DRt3zArqTA6lXUvSVoYXoPWLB0J5r%2BigaTtZnVRJJQ5axLZhM%2B1VnIvUD%2FsD3c9J3Qxsj6gcIbjhCjPOZQ%2BQWXxqKjcX4nECC74tqJRJ8bAwClBO%2FATorH0XIG3GQjcoAdbCbyyn%2BmUJ9HKUNWwhMcycraScAj201HvaCr8dP%2BoWVSKa8pwy6Ew4RtxqBu%2BGXlun3ti9d%2FV3l%2F1onG0M1IKI7YpYdte8JJsIud%2FF1uPYUVq%2FLJ7rW0oyuA2hD8aMJTXFI8yPce%2BTr%2BEmcR8By7Z6cOcwtYbFyQY6pgGyLYjWGBOdoZOMfirMc822FxANkvW6XqJBsHxOw%2B8xCgoo0pnQpYmPIQ5wrGvLv6CRWVKy9dpd%2FK5KcHJh0A83OT02VhH7NExbOTJmA26bheLPoexrUnLHyLyr1e5FnTYnoMrrTUai03x9AocNwz3M22X4nJWGpNrufXz1Z0tupe2B7lSbwuBDTMQqsmjhHzZzwC6yN1KAc4yREm6EmRcSXw3Qi0ec&X-Amz-Signature=2abb151a5ee2b0ba80518bf22a22e4c663a751a12132105780faed4ef92efe97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMAFDLWU%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T092431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCIHOW4z5aL1tKzXEb8auhyxL%2BCKwDvXDFStm6Z%2B38WOVqAiAi1L%2BiXwqVqOQI5owP7vA3il1wlZrm7p1es3Z00AEpHyr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMCGx7UBrafDAY7zApKtwDSPfu24tG%2FRB8JTbiJAu%2B2fawPm0s3SLavC%2BmOciq9sTctkocZDKyUJQ63lh2OMp7MNhHOB2vn8QEPw9W80GXdQR0D4iSsPmX0PGCFAHkuEUZP%2F6PMdtIjQE1u38Jiv6W2D0Pt4JSK%2FNkvGKiZk84zzlECO1c6OJwJEgNWTFLqwuvBdKYye98r7Rk8IT1wI0%2BcBG2etJnxupjkCwSVbAaUgq778BXtM920iRElwmVp7cgzCEBIQ9wpayLpU5zeml%2F6jKpiR0hlpt8Ds11r%2BYqVzkXGiFVzt5jxGVU8GhbpUfZuEKACQxTc8f8DgYHK6SNXqNGIKdUMjjVW9WTKwNBC1PqB7caiVX8DRt3zArqTA6lXUvSVoYXoPWLB0J5r%2BigaTtZnVRJJQ5axLZhM%2B1VnIvUD%2FsD3c9J3Qxsj6gcIbjhCjPOZQ%2BQWXxqKjcX4nECC74tqJRJ8bAwClBO%2FATorH0XIG3GQjcoAdbCbyyn%2BmUJ9HKUNWwhMcycraScAj201HvaCr8dP%2BoWVSKa8pwy6Ew4RtxqBu%2BGXlun3ti9d%2FV3l%2F1onG0M1IKI7YpYdte8JJsIud%2FF1uPYUVq%2FLJ7rW0oyuA2hD8aMJTXFI8yPce%2BTr%2BEmcR8By7Z6cOcwtYbFyQY6pgGyLYjWGBOdoZOMfirMc822FxANkvW6XqJBsHxOw%2B8xCgoo0pnQpYmPIQ5wrGvLv6CRWVKy9dpd%2FK5KcHJh0A83OT02VhH7NExbOTJmA26bheLPoexrUnLHyLyr1e5FnTYnoMrrTUai03x9AocNwz3M22X4nJWGpNrufXz1Z0tupe2B7lSbwuBDTMQqsmjhHzZzwC6yN1KAc4yREm6EmRcSXw3Qi0ec&X-Amz-Signature=4afb8a51a4b8c3d23b55cfddd504d5c2b2147eaa72f9489786a7f31083b2c1d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
