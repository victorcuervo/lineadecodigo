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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2V633PT%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T133213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwzfIsDe6qPsCXUkx0cziJg%2BIrHiISC0SfLYgbt7jCjwIgKe2%2BH6OK%2BzIkvdtODj8wyXyQVLdOKf2%2BJZ3tqrMbWT0qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLlP7k%2FCNzqdfW%2B0OyrcA0Djt9jgeO4Ox8g%2BVIo%2BsNHCijKuyDid%2F1u162Jxml3hEwwlpoaAhX6M1IgdMoLQlDD%2BhtZ8tAy2YZd5GUzP3oqLjN5dCpDUDklkxp45%2Fuupw1w1jVEuzgd%2FyrqxLkmeBheAZtBvOPzxeHMpwm0LjKyWxlmvZ%2FdLErmKfpgpfJ6FbF0CYi76qlEQoty8BdCf5dZz8MSdg%2FiYLidn1c5DWXSXT%2FOhEI5Ozmt5eHoDOXAlh652ZQk9McXqqS0r7fMsdfBAUhp%2BdJOV45x7nnWtlWjnRkNqMeOiWEFFbYMYwHCtRRYm33KFhlreOqwyEDrA5kEnAQInN8oa4Bjoj%2F4Kz4xoouCvW7Ttww2OIoTNNqj0Xhz0sYbD0EPJOAW2M8L3c0ds7SrBMGX84%2BCj11pw0b2wjhSRP2YGUJJSFdiAMfZNBW217FUHWcuH8r39GiTsg6imOGoQ9NtsjsQZrydKP9%2B03486SphksK5OqziJ9Xih5dlCsU64RSQuAekvrQs3d4myEhY6g0qnOL%2FJzMxMoiaInRmbNPjSKA%2BYYOwC2Tq%2BtsfbzhRI9TWv7ZsyJwJMBKhLCTMXe3w%2BXOREggyH%2BiSfIg014fGLUOGVag9tnec3v07gAVD3gXj3lbEmMKmZ1ckGOqUBd5IzoMqyN1utsCzslQyyPiG2787Lp%2BveexqwL%2FIxu4pqvXrfteNJwJ%2BTp5kWcgQDvmH8pCymWZq8aLnabpnD8xZ3XRWfopz1MptIZGShuoQL0sVNXlHfOtBMMzyPN0WzUU6i2dzC%2F%2FvnQVcwfxS%2FTbNCNHZsgKjsEyIgHQeu9sbXV3MujimtdeQA4yVZH1eEZ%2FMxiBDjIIKg%2FFZC0dAM%2F99bEyq7&X-Amz-Signature=7c88a7d75c01e505356f6f9a862f688123fa5df64e67d495ca12621a62f2753c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2V633PT%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T133213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwzfIsDe6qPsCXUkx0cziJg%2BIrHiISC0SfLYgbt7jCjwIgKe2%2BH6OK%2BzIkvdtODj8wyXyQVLdOKf2%2BJZ3tqrMbWT0qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLlP7k%2FCNzqdfW%2B0OyrcA0Djt9jgeO4Ox8g%2BVIo%2BsNHCijKuyDid%2F1u162Jxml3hEwwlpoaAhX6M1IgdMoLQlDD%2BhtZ8tAy2YZd5GUzP3oqLjN5dCpDUDklkxp45%2Fuupw1w1jVEuzgd%2FyrqxLkmeBheAZtBvOPzxeHMpwm0LjKyWxlmvZ%2FdLErmKfpgpfJ6FbF0CYi76qlEQoty8BdCf5dZz8MSdg%2FiYLidn1c5DWXSXT%2FOhEI5Ozmt5eHoDOXAlh652ZQk9McXqqS0r7fMsdfBAUhp%2BdJOV45x7nnWtlWjnRkNqMeOiWEFFbYMYwHCtRRYm33KFhlreOqwyEDrA5kEnAQInN8oa4Bjoj%2F4Kz4xoouCvW7Ttww2OIoTNNqj0Xhz0sYbD0EPJOAW2M8L3c0ds7SrBMGX84%2BCj11pw0b2wjhSRP2YGUJJSFdiAMfZNBW217FUHWcuH8r39GiTsg6imOGoQ9NtsjsQZrydKP9%2B03486SphksK5OqziJ9Xih5dlCsU64RSQuAekvrQs3d4myEhY6g0qnOL%2FJzMxMoiaInRmbNPjSKA%2BYYOwC2Tq%2BtsfbzhRI9TWv7ZsyJwJMBKhLCTMXe3w%2BXOREggyH%2BiSfIg014fGLUOGVag9tnec3v07gAVD3gXj3lbEmMKmZ1ckGOqUBd5IzoMqyN1utsCzslQyyPiG2787Lp%2BveexqwL%2FIxu4pqvXrfteNJwJ%2BTp5kWcgQDvmH8pCymWZq8aLnabpnD8xZ3XRWfopz1MptIZGShuoQL0sVNXlHfOtBMMzyPN0WzUU6i2dzC%2F%2FvnQVcwfxS%2FTbNCNHZsgKjsEyIgHQeu9sbXV3MujimtdeQA4yVZH1eEZ%2FMxiBDjIIKg%2FFZC0dAM%2F99bEyq7&X-Amz-Signature=3f6c1ba079b4b115034b68e5a0d6340e350ef9c304c2132a4469ae3cc2aabed6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
