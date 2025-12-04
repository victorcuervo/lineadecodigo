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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2O3UQUQ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T061117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQD%2BffJ9VGW5XatFzQkMyCixfdd4Rx73O%2BqCEc4rwE3O0gIgbR0eYdfF5%2F0aNszIVxQsedAms4zb2T1FxDtCcjylH%2FAq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDFfYZYowD51FeuoGwircA8GwDVwaSjXwF1T5YhRWbrEdTek6tMTJ330LttYxqKdLFBhm7zovIcI57iK%2FTyLaNJHKVg91voXkaL%2Bbxus%2B66wtUYnvrVxXUFkmAD0J7hP1hNzrG4%2F5JFW%2BVQP7L7cp6uPTjwXKOF1poz7A6hxu72m5C5nXaR1zXOJNfr%2B85NbC3vmv%2B0mw4W8vNhJZzMRFHd7mv4CfcDG3B8rT%2FFRUf69kY1Bg1%2BlMinqT0zJEG5MGt3wgpFeWwUxjubZFyLWY%2Bv9yRyySZcgJOQoeiOfUZ%2BdPTbZjflttokvIHOfHBcogSIzjvks6ZGe4fpVPVrvttoqm5XCCKm%2BQ7oFRCnekjSjNZ6%2Fp%2FVhMqLU1cxLdt0XwI7w2IELcgGojfDG8IxG7lL%2BhgtOKHErgrsMRq7UBHlciKiynQx%2Fv%2Bhm94GfRKXODtXDG1nxBF0POXRD2cfV1Moq3MC0RW0LgiuylYdf4iC3Df6ifTBKoYR6dJ2kUyFBYfMUntIQ7n9q%2FlrBMBoi8vLfPVRZ6RFN8p0nM3SxhOUI9MgHBd3HIqq2cBe09yQ%2BliAh1na1u8Kq%2F6VBXCGymcQrsWsj6xaUANX0ZDnITNfe6qnv9wzp%2BRjws%2BwXZVNrjVCErDqHiHii%2FhK8%2FMJ7KxMkGOqUB2ckSzbBRAA6ipMybgrPmAwRttQahyPL%2BJAYa7JRFqkOmvzpKIrqtQuXpoFLp5sRGO4HTjJ1VOmbgreY41EXEt1pp7Sh%2BWjGDIF5KHgjRwnVd8L5tm4J7XUtqgB3z1UR%2F4ytI03a9JaJHO3nAxQmspVlp5H4g4pGKgEkNiCLjAv7lFsKliIjcXl4V1vmircFg%2BZzsrNh8UGkL4T%2FhVNQGF%2FXmkTtZ&X-Amz-Signature=78684ca6b2df54ed5a36db48e73ff9232704ec740191ea3e3647cd2be6a9e9e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2O3UQUQ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T061117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQD%2BffJ9VGW5XatFzQkMyCixfdd4Rx73O%2BqCEc4rwE3O0gIgbR0eYdfF5%2F0aNszIVxQsedAms4zb2T1FxDtCcjylH%2FAq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDFfYZYowD51FeuoGwircA8GwDVwaSjXwF1T5YhRWbrEdTek6tMTJ330LttYxqKdLFBhm7zovIcI57iK%2FTyLaNJHKVg91voXkaL%2Bbxus%2B66wtUYnvrVxXUFkmAD0J7hP1hNzrG4%2F5JFW%2BVQP7L7cp6uPTjwXKOF1poz7A6hxu72m5C5nXaR1zXOJNfr%2B85NbC3vmv%2B0mw4W8vNhJZzMRFHd7mv4CfcDG3B8rT%2FFRUf69kY1Bg1%2BlMinqT0zJEG5MGt3wgpFeWwUxjubZFyLWY%2Bv9yRyySZcgJOQoeiOfUZ%2BdPTbZjflttokvIHOfHBcogSIzjvks6ZGe4fpVPVrvttoqm5XCCKm%2BQ7oFRCnekjSjNZ6%2Fp%2FVhMqLU1cxLdt0XwI7w2IELcgGojfDG8IxG7lL%2BhgtOKHErgrsMRq7UBHlciKiynQx%2Fv%2Bhm94GfRKXODtXDG1nxBF0POXRD2cfV1Moq3MC0RW0LgiuylYdf4iC3Df6ifTBKoYR6dJ2kUyFBYfMUntIQ7n9q%2FlrBMBoi8vLfPVRZ6RFN8p0nM3SxhOUI9MgHBd3HIqq2cBe09yQ%2BliAh1na1u8Kq%2F6VBXCGymcQrsWsj6xaUANX0ZDnITNfe6qnv9wzp%2BRjws%2BwXZVNrjVCErDqHiHii%2FhK8%2FMJ7KxMkGOqUB2ckSzbBRAA6ipMybgrPmAwRttQahyPL%2BJAYa7JRFqkOmvzpKIrqtQuXpoFLp5sRGO4HTjJ1VOmbgreY41EXEt1pp7Sh%2BWjGDIF5KHgjRwnVd8L5tm4J7XUtqgB3z1UR%2F4ytI03a9JaJHO3nAxQmspVlp5H4g4pGKgEkNiCLjAv7lFsKliIjcXl4V1vmircFg%2BZzsrNh8UGkL4T%2FhVNQGF%2FXmkTtZ&X-Amz-Signature=a3c8541e3a49f2df30dfc15fc09e1b1b1ecc1fefc897bf99d8101d9973f9198d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
