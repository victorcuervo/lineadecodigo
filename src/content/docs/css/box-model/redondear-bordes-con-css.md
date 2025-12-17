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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U36KWFCY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T133925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAXaVegMjT9d6fR5RMWk4PUUI3aVompwdbkzD%2BVL6ogSAiAxPRcrKpzkpWcIoEGYNU4EUS19QrAEzMQ3lW4ZkfaCaSr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMAEzG61ALRrfdLco3KtwDbOy%2F%2FKv0h3YRubJlHr4C3TIu%2FLGhkIUM6Lg9kztuwMEYctDfPdN0xqfywo0I6OQpIKK6uwpWzkeWg93PxJKEXntFp7QPztKefQurwn18ter5xJW3H0QPWJITpqjzj%2B62G1RODGWELeJYjmT1IxAh%2FZZrvzpcEkqrQEJbVgigvYXqJAQ1qcBOu%2BH%2B9U%2FZMDapLHYKbTk5LrOCgnpS0gOJt3ZtOhd%2FsoyUFV8ZF4WxY1L2WCJEcLq%2FVE%2Bpphgug426LmgY%2BOVjxu1vDvlzd6ldPDErL4k0r%2FFpGsHRpicwTuEPX%2BB6lfmC43y%2FDDUQ3y1asgN1RFU02t98iGOUIIqgUnrUk3xehl4Eho%2BUW9ew3OqFxUzTDDmDxzn2gC3CaWeNdiHyHjDVYeiaS93L4xeIFtQ3wuDEJTWO8rCabu21UkzBxfnpmicOHlDHWJL4tD4ROjr%2BNRpsemyR4mBtOvd1wDAP%2F2Q8EG7fWPT9wy3WFe8EToLjfTzk3lOz8cQwg3pg2I91o1qSWhWgWxzzyeF9o4RwAXAUaVsWfehiyDY5hcj7ItzUlp4ge8HrI3rkczUMTKcVpfO80f8SU4JdHPkmmyehJVv66E8stZFBR%2Fn%2B%2BF0KX7meb0E7RLkbl6Ew9eCKygY6pgFlBuRxyf%2Fmszq2C9xJzbc6aHJNAayMyXHwd7XHULpTfBLzHgzPlz1Qxn8%2B1RiD2xjwkvF3NjBKY7UhF1xHFWKnUkpzC0xGWa8aq1CFyvIuv8aeUpMEpXJSf8Tj3zze6fXBHd%2BC1aVoYgW3pSmkCMjoRJ5ySjLy%2FMgu7e5j%2BlgDL%2BifDMZiUXFRcUtyEVlM8iXtnNSWb3v5e%2FFP3EwSTs13u9Ldr07r&X-Amz-Signature=a87d466fd533bcc36c36b8162f4b5cfe2c43c057012455c821d15647349a3237&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U36KWFCY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T133925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAXaVegMjT9d6fR5RMWk4PUUI3aVompwdbkzD%2BVL6ogSAiAxPRcrKpzkpWcIoEGYNU4EUS19QrAEzMQ3lW4ZkfaCaSr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMAEzG61ALRrfdLco3KtwDbOy%2F%2FKv0h3YRubJlHr4C3TIu%2FLGhkIUM6Lg9kztuwMEYctDfPdN0xqfywo0I6OQpIKK6uwpWzkeWg93PxJKEXntFp7QPztKefQurwn18ter5xJW3H0QPWJITpqjzj%2B62G1RODGWELeJYjmT1IxAh%2FZZrvzpcEkqrQEJbVgigvYXqJAQ1qcBOu%2BH%2B9U%2FZMDapLHYKbTk5LrOCgnpS0gOJt3ZtOhd%2FsoyUFV8ZF4WxY1L2WCJEcLq%2FVE%2Bpphgug426LmgY%2BOVjxu1vDvlzd6ldPDErL4k0r%2FFpGsHRpicwTuEPX%2BB6lfmC43y%2FDDUQ3y1asgN1RFU02t98iGOUIIqgUnrUk3xehl4Eho%2BUW9ew3OqFxUzTDDmDxzn2gC3CaWeNdiHyHjDVYeiaS93L4xeIFtQ3wuDEJTWO8rCabu21UkzBxfnpmicOHlDHWJL4tD4ROjr%2BNRpsemyR4mBtOvd1wDAP%2F2Q8EG7fWPT9wy3WFe8EToLjfTzk3lOz8cQwg3pg2I91o1qSWhWgWxzzyeF9o4RwAXAUaVsWfehiyDY5hcj7ItzUlp4ge8HrI3rkczUMTKcVpfO80f8SU4JdHPkmmyehJVv66E8stZFBR%2Fn%2B%2BF0KX7meb0E7RLkbl6Ew9eCKygY6pgFlBuRxyf%2Fmszq2C9xJzbc6aHJNAayMyXHwd7XHULpTfBLzHgzPlz1Qxn8%2B1RiD2xjwkvF3NjBKY7UhF1xHFWKnUkpzC0xGWa8aq1CFyvIuv8aeUpMEpXJSf8Tj3zze6fXBHd%2BC1aVoYgW3pSmkCMjoRJ5ySjLy%2FMgu7e5j%2BlgDL%2BifDMZiUXFRcUtyEVlM8iXtnNSWb3v5e%2FFP3EwSTs13u9Ldr07r&X-Amz-Signature=11ae416548e3f04e240f877e5a8a4b1d0d0aa65dd2b66c70ba45c037038deaf5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
