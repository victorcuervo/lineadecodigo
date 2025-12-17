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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6FD7B2T%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T173136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF%2Bx7ct63UWtKrZpVKSQ9lWyterWOfZs2%2Bmp2rK6ZYSMAiArGqCUY1Ul8iF1jULBImld0yFw1lNTOaHuGFqwru5cQCqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQO694NWNPxgWO05fKtwDHyoT98Cv%2F4py4InV4ZXgJFVmMfQ8RBs3BEezF1GbbFMLYyeJb8T2J2s7svneSysbD1Y8KeZ2KGLdW4d8puiqpyXevzOyCcdf%2BoGAcinLm7lbkn6JGrCdo0FN2DcIXHmjhyzDgngtDkT5aEqpaaAum%2F6ipV3ktOz39zCWjZohqgJKTZVwdkB6haFL4XqBI7c5UrvJfH%2BOP2f8sVrCCzDfXhznxINB3YWO3d6Cb4sKB5ZOSqwwdE8xjsVpWZIrrS%2Bm6p0Fr1Z0%2F5gtMrSgZV6IzkTk8QV07v4FVZ55TyuZ7X1ZRSYLIOlzkM%2BTC3Zh32Y0a2JVVQgFPZOE8VtVfShboCjunNUDetZfeD79Kb%2F4B9Th%2FqeyNwS2lrIGQTxrtjaQsloIR4TlQa%2BLVTKIVACVKLN3iuDg4t0Np%2BGyg%2B%2BoX0dDIx%2BWjw%2FVOtLYMLYBwq%2BeUnELhRlKnzTUqT8MdI%2BCu%2Bxiov%2BJd3Hwr0n2vS%2B9ZawnzTwY%2BeqR7Ti2%2FznFTqZLHemWorJbMQpFXP%2F5ymbw6Q1BPi6iqJ6GYHIurCA8Yfh%2BYF52GhpPVtWYFmU8jWnWKc45Q3UL6PTeDdg%2FUJ%2B4yqNysnz%2FJxPhROfOegTGS9Fjm8VUz7uJi6MPHqswuZ%2BLygY6pgHBJxo5GJZkaHWJ9J6eVhapqbzndoVDel0Vvyu1khkEoih8WOQvBAhWNXYoBD9hvjCVgj%2FUk5LdOa4ShAzBGZREE32EZl9mk%2Bt9k6c%2BYOOkA2mIV0uu4aXP5A2j25cSRnN6Ic1oEesaQ1HRDnjoiVO7GL%2Fr3umkCrCRhdIXF%2FFnQtn8hpCcmeDtREN6VVfjYQLSRh%2F8aMOJ9ZX8dSzBbgaqzX7y0QuE&X-Amz-Signature=df06756d95bb1087629df676dd39f84a0d472e689aee4061718ed07149b325bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6FD7B2T%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T173136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF%2Bx7ct63UWtKrZpVKSQ9lWyterWOfZs2%2Bmp2rK6ZYSMAiArGqCUY1Ul8iF1jULBImld0yFw1lNTOaHuGFqwru5cQCqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQO694NWNPxgWO05fKtwDHyoT98Cv%2F4py4InV4ZXgJFVmMfQ8RBs3BEezF1GbbFMLYyeJb8T2J2s7svneSysbD1Y8KeZ2KGLdW4d8puiqpyXevzOyCcdf%2BoGAcinLm7lbkn6JGrCdo0FN2DcIXHmjhyzDgngtDkT5aEqpaaAum%2F6ipV3ktOz39zCWjZohqgJKTZVwdkB6haFL4XqBI7c5UrvJfH%2BOP2f8sVrCCzDfXhznxINB3YWO3d6Cb4sKB5ZOSqwwdE8xjsVpWZIrrS%2Bm6p0Fr1Z0%2F5gtMrSgZV6IzkTk8QV07v4FVZ55TyuZ7X1ZRSYLIOlzkM%2BTC3Zh32Y0a2JVVQgFPZOE8VtVfShboCjunNUDetZfeD79Kb%2F4B9Th%2FqeyNwS2lrIGQTxrtjaQsloIR4TlQa%2BLVTKIVACVKLN3iuDg4t0Np%2BGyg%2B%2BoX0dDIx%2BWjw%2FVOtLYMLYBwq%2BeUnELhRlKnzTUqT8MdI%2BCu%2Bxiov%2BJd3Hwr0n2vS%2B9ZawnzTwY%2BeqR7Ti2%2FznFTqZLHemWorJbMQpFXP%2F5ymbw6Q1BPi6iqJ6GYHIurCA8Yfh%2BYF52GhpPVtWYFmU8jWnWKc45Q3UL6PTeDdg%2FUJ%2B4yqNysnz%2FJxPhROfOegTGS9Fjm8VUz7uJi6MPHqswuZ%2BLygY6pgHBJxo5GJZkaHWJ9J6eVhapqbzndoVDel0Vvyu1khkEoih8WOQvBAhWNXYoBD9hvjCVgj%2FUk5LdOa4ShAzBGZREE32EZl9mk%2Bt9k6c%2BYOOkA2mIV0uu4aXP5A2j25cSRnN6Ic1oEesaQ1HRDnjoiVO7GL%2Fr3umkCrCRhdIXF%2FFnQtn8hpCcmeDtREN6VVfjYQLSRh%2F8aMOJ9ZX8dSzBbgaqzX7y0QuE&X-Amz-Signature=fc41859902ea341d8ae0c3d21636f8a420004c6574b97828181ed0b529feadd3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
