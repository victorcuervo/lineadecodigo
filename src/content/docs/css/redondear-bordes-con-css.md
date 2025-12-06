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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WI33K6GE%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T105759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDyQ57e9xdm3UQqXVyi1tdk9j72%2Fp1jIP0rBe%2Bs1Zst8AiAYDaZSYMeOGnWu6JVXEAfqA%2FLZA01Krmtlxd5ZAc2aESr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIM%2FvqK7ZAlJSJzbMd8KtwD%2FClfm8%2B4UXip6OM3kl5KST9dCZlhXmTb%2BvvHjkMiBd7VMrUIKPXLsEK6lobSJFKjtqIEAfLQZPpY75eny3G9481paZjVJ3y9CInkRBqzE06u%2B82dPum0%2FG6fLCrQGZAi0lX9%2FlTY6q6or17l1vFINHt8V3pdXN5Yti6EvxHnTEvQMDyoyaoUMNfDpJd5NAj4twFPK9p4U97tZHIIWJxCWgabeFEm6Ife%2FDjxfVuzAGOnagg57WkmarjEaYYveoSksCQEm5dXLzBsPLj%2BF1v%2BkvNSj49SW5V57imu5cc7jXRfw5XJXmBfnIisLVUV9EId7jjdbhUU4D6oYhA1AqZGrub8beJ7R9%2BUB6sB2UTIgGJcM5N0X3cKSkyBkYmExdq109kcD4BlLmIkJDmEKaXFBphlTi0I36fsZLYkfbnzt83p26sXPgsNrv76Xd1ZNMLWmBT%2BuxsvMI1DGMJv7oHtVOGZf4UUAoVM7D%2BtY1iLp6LgXya9Dm4E4bLR6qLBAxjWyh3x0lxf8YiZ7UpOrPdiKgScyqK0u%2BFibAmfmn6%2F97mEo%2F4GJSWZwZBz7dwix%2BThsC2zEtavouNF74Vkl5vhPWy1HeJGA711PJCrbokj2ztyGEN4%2F2ejgNZ2ApwwiYnQyQY6pgFFQ70ASXMDUwQn%2Fq8UqpioFz3JSlbw%2BejDtIskwD7k%2Fiq%2BDQ3gAkw5jxGi0KFK0K3bbEmTjY9IQIAyJHPULJdFoOSR5jIC065Z5H1bRhq3FWBmR1FIPUhYAsjL9PUkRStXxoGPegh7H6OXUEXiL8YlfhtYLk%2B6rS27uPeX7S%2FB2wdbuki%2BOZVhJmSiyhyYn1uXQn%2FL8IyLqI9LWvJfjh2HmxE2tvIe&X-Amz-Signature=65a06e83d9f10319926de0abaf9c5bcc267600f0eba87420a9f190cfee07be44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WI33K6GE%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T105759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDyQ57e9xdm3UQqXVyi1tdk9j72%2Fp1jIP0rBe%2Bs1Zst8AiAYDaZSYMeOGnWu6JVXEAfqA%2FLZA01Krmtlxd5ZAc2aESr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIM%2FvqK7ZAlJSJzbMd8KtwD%2FClfm8%2B4UXip6OM3kl5KST9dCZlhXmTb%2BvvHjkMiBd7VMrUIKPXLsEK6lobSJFKjtqIEAfLQZPpY75eny3G9481paZjVJ3y9CInkRBqzE06u%2B82dPum0%2FG6fLCrQGZAi0lX9%2FlTY6q6or17l1vFINHt8V3pdXN5Yti6EvxHnTEvQMDyoyaoUMNfDpJd5NAj4twFPK9p4U97tZHIIWJxCWgabeFEm6Ife%2FDjxfVuzAGOnagg57WkmarjEaYYveoSksCQEm5dXLzBsPLj%2BF1v%2BkvNSj49SW5V57imu5cc7jXRfw5XJXmBfnIisLVUV9EId7jjdbhUU4D6oYhA1AqZGrub8beJ7R9%2BUB6sB2UTIgGJcM5N0X3cKSkyBkYmExdq109kcD4BlLmIkJDmEKaXFBphlTi0I36fsZLYkfbnzt83p26sXPgsNrv76Xd1ZNMLWmBT%2BuxsvMI1DGMJv7oHtVOGZf4UUAoVM7D%2BtY1iLp6LgXya9Dm4E4bLR6qLBAxjWyh3x0lxf8YiZ7UpOrPdiKgScyqK0u%2BFibAmfmn6%2F97mEo%2F4GJSWZwZBz7dwix%2BThsC2zEtavouNF74Vkl5vhPWy1HeJGA711PJCrbokj2ztyGEN4%2F2ejgNZ2ApwwiYnQyQY6pgFFQ70ASXMDUwQn%2Fq8UqpioFz3JSlbw%2BejDtIskwD7k%2Fiq%2BDQ3gAkw5jxGi0KFK0K3bbEmTjY9IQIAyJHPULJdFoOSR5jIC065Z5H1bRhq3FWBmR1FIPUhYAsjL9PUkRStXxoGPegh7H6OXUEXiL8YlfhtYLk%2B6rS27uPeX7S%2FB2wdbuki%2BOZVhJmSiyhyYn1uXQn%2FL8IyLqI9LWvJfjh2HmxE2tvIe&X-Amz-Signature=ae509ec4fa35563af0e65f53b9226bddb01f4e44ce17cd5ae0fb2c82f5116ab7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
