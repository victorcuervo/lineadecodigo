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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRC55CQB%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T125800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDH2wpQ1QMwY49EJJxUL2NXNI3UIxZ1rgC9iKKYWUPk2gIgE26ga3NhtkTktPyccFNDQxU%2FWaUz4vEFKduCKwzaE2YqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNfisS0%2FgDoqUOicgircA65wqCoIM7KvTWHRLVrXCUJsLoghRA%2Ba9Nr%2FIJ7ih0Oi7acDVXG5Er7VvDtO%2BztHXzOTyN0kkSYx9KPo7SZIXsIpCk7rKys12pCrcnxKlEzlI%2FG23ZPDKmForRL9xgzG1TNezcrsZXDOWIz%2FZ9W8Dbz4S%2FY03aEmFrawEHMShJz1Wbe0IixZ2tB1ED5VmGgNTcCFN1FX7pZ2JmIkjc%2B0L%2F%2BKwLfKgro2Wjtl5h%2FPlP5L4GmuHUpYb7Wvz7shkz9FapvjXLskegoB7Kg7Jf5jSv9TfEQLjaHJ14YDOw3%2BM%2B%2Fhdqx%2BGQMStODHKXljcN9hE5Xmx3jNZayYpGe2hvh0qP1YK38kfAb8qSMkIbQlgUhY9fp%2BYMyr%2FQitYd%2FyNUoij3jA1Rjvd08YqNoxnbPknjBJUyxIVt7KwQ7zVTJdUKB%2BvJuGUJNIYX8zjWwyN%2FvXRPJl0M9XNf53jApGdlvukfByLYNAMM9HEAQTMViaoCr21P6DPdO3mCZ9DnqCcabFwARNcjGZdo8bA2jLU0GBdsrWMsfdzaSXW7DjKjfLVtpHLaAzzRfQBSt8KTqbZ6Q0KICCkP3lzDHBURYrgRk9I%2F0XjBlVKRhIp65%2B%2FUqfa0hS6H58CGfFRIpRIHZHMM2a1ckGOqUBbFFq0NXTVGTpN1ldQMfLDq17TuDHL%2BNtQlo7PKIFprpR02pFawG%2Fm%2FgqzXi9CO5VJ%2BsZjIrP6H5yAr4PV3rDjS%2BIoi4FYar8cAv2pe6lUw6e0OebEonmCQHbmjRSj2jc4f1DI4yIE3THQoNKu4lfN%2BU8Ex5t%2FBnvShF7FVMfX3%2Fvhx4%2F9z%2B4w1C0SzE%2FGAPr1VfJXtASCYgZDRbJNABDYDv2wE9G&X-Amz-Signature=3e8da81952b76373336fdf8ba3c81bc75416cfb63e3871fddddcb6a280285349&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRC55CQB%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T125800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDH2wpQ1QMwY49EJJxUL2NXNI3UIxZ1rgC9iKKYWUPk2gIgE26ga3NhtkTktPyccFNDQxU%2FWaUz4vEFKduCKwzaE2YqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNfisS0%2FgDoqUOicgircA65wqCoIM7KvTWHRLVrXCUJsLoghRA%2Ba9Nr%2FIJ7ih0Oi7acDVXG5Er7VvDtO%2BztHXzOTyN0kkSYx9KPo7SZIXsIpCk7rKys12pCrcnxKlEzlI%2FG23ZPDKmForRL9xgzG1TNezcrsZXDOWIz%2FZ9W8Dbz4S%2FY03aEmFrawEHMShJz1Wbe0IixZ2tB1ED5VmGgNTcCFN1FX7pZ2JmIkjc%2B0L%2F%2BKwLfKgro2Wjtl5h%2FPlP5L4GmuHUpYb7Wvz7shkz9FapvjXLskegoB7Kg7Jf5jSv9TfEQLjaHJ14YDOw3%2BM%2B%2Fhdqx%2BGQMStODHKXljcN9hE5Xmx3jNZayYpGe2hvh0qP1YK38kfAb8qSMkIbQlgUhY9fp%2BYMyr%2FQitYd%2FyNUoij3jA1Rjvd08YqNoxnbPknjBJUyxIVt7KwQ7zVTJdUKB%2BvJuGUJNIYX8zjWwyN%2FvXRPJl0M9XNf53jApGdlvukfByLYNAMM9HEAQTMViaoCr21P6DPdO3mCZ9DnqCcabFwARNcjGZdo8bA2jLU0GBdsrWMsfdzaSXW7DjKjfLVtpHLaAzzRfQBSt8KTqbZ6Q0KICCkP3lzDHBURYrgRk9I%2F0XjBlVKRhIp65%2B%2FUqfa0hS6H58CGfFRIpRIHZHMM2a1ckGOqUBbFFq0NXTVGTpN1ldQMfLDq17TuDHL%2BNtQlo7PKIFprpR02pFawG%2Fm%2FgqzXi9CO5VJ%2BsZjIrP6H5yAr4PV3rDjS%2BIoi4FYar8cAv2pe6lUw6e0OebEonmCQHbmjRSj2jc4f1DI4yIE3THQoNKu4lfN%2BU8Ex5t%2FBnvShF7FVMfX3%2Fvhx4%2F9z%2B4w1C0SzE%2FGAPr1VfJXtASCYgZDRbJNABDYDv2wE9G&X-Amz-Signature=e025a6563ad44034d4d3c35ce1751e336a6abc8ffca8e59eb949a132b6a6ec74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
