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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XYZO55U%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T070357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD75elLsSbmilifUjoDjpLy6wu2YKBZDw0D1XsKe4dYrwIhAJKBKqKaDCHgfRTGwrPpgbP5wmCaPwSWfsVBnl%2B18rJQKv8DCHgQABoMNjM3NDIzMTgzODA1Igyv1Sspa4JVghe9ZMYq3APDBsE1CoRK4RpBsla8mE%2FARr3C%2Fdqe4pm8EtLe8uIIZPxKvdp%2FSQK%2FQHSnTGqTH0dXWIEoaT7PFDITLfPyFyAjBsIWwNhy1Jt4RaNZKcUFGZQn8SVPih7CauZsQG2cyeOUhqMhgCU%2FxaghGEarA0RIpvqmHSKrhyrd8KQxE6jjfEresX1nhuBKiQOtQ%2FoJMMR1Kd9w%2FlAenh27jwA2s7DfoI12s3PLj8AzMoIBpYxg5azuO5v1X%2B808XebWipFBiZ3xrkVGAlHiDHvAQ8mqsl%2B%2FGJO72a7gqFOZkWx8vif52d0M3SWlhXlQ8Vg8PoPyrqJSANFby5NA7c3BViu1YL6pn7lCTzSccEd34ZyKQZe3CsdNJdKjhFLuFCgJt1S0sQA76gmvQaoZSrJ2PkpibtpnVk%2BMXKMgL2Rbycxq0pOE39QViXlGJz9kL0zYK65AsoTskLtLLPho10DhIOzJMpOPwj3w%2B7%2FuyMkSL0oqCHf%2BAntO2r1nSXfmFIrl8tZen8NgOIaS5htAq34L%2FYVSVYm3%2FR%2B1YY9pXGnZgT3XhxXR%2BIn52Yy7hiqWqcw2E8PIcTtmTtdTmR5ogj5XiAF70mVM6gfUdTuibORkxKsYe%2BNtNYDAT2GbrYA5O1K4TDJnYnKBjqkAaAC0UmQ3GjlUoY4ZCLp7zJaD%2FCa6BASvCQbXhsHwI4r%2BPT1r3fUIVEE2FmVac9xBNKENcbRbxi8Tf8UpUBZzeaYrX9jowYbXvVHxQneq%2Flqn5fne939tS6D7%2FhMi2O6wd0trI3tkjZfjeCLiHV6gWQg%2FDOd%2Bp7%2FXZAzBjXtzQbd36dR6GpkrFnZsc5p1uPavPfqX5IOQeD%2BKZJrJsYN8ChDiewm&X-Amz-Signature=27a08e80b9ba2f5bed56d0cb09cbbd8dcf33eeb7219efed81f90fc0ce39a5ad7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XYZO55U%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T070357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD75elLsSbmilifUjoDjpLy6wu2YKBZDw0D1XsKe4dYrwIhAJKBKqKaDCHgfRTGwrPpgbP5wmCaPwSWfsVBnl%2B18rJQKv8DCHgQABoMNjM3NDIzMTgzODA1Igyv1Sspa4JVghe9ZMYq3APDBsE1CoRK4RpBsla8mE%2FARr3C%2Fdqe4pm8EtLe8uIIZPxKvdp%2FSQK%2FQHSnTGqTH0dXWIEoaT7PFDITLfPyFyAjBsIWwNhy1Jt4RaNZKcUFGZQn8SVPih7CauZsQG2cyeOUhqMhgCU%2FxaghGEarA0RIpvqmHSKrhyrd8KQxE6jjfEresX1nhuBKiQOtQ%2FoJMMR1Kd9w%2FlAenh27jwA2s7DfoI12s3PLj8AzMoIBpYxg5azuO5v1X%2B808XebWipFBiZ3xrkVGAlHiDHvAQ8mqsl%2B%2FGJO72a7gqFOZkWx8vif52d0M3SWlhXlQ8Vg8PoPyrqJSANFby5NA7c3BViu1YL6pn7lCTzSccEd34ZyKQZe3CsdNJdKjhFLuFCgJt1S0sQA76gmvQaoZSrJ2PkpibtpnVk%2BMXKMgL2Rbycxq0pOE39QViXlGJz9kL0zYK65AsoTskLtLLPho10DhIOzJMpOPwj3w%2B7%2FuyMkSL0oqCHf%2BAntO2r1nSXfmFIrl8tZen8NgOIaS5htAq34L%2FYVSVYm3%2FR%2B1YY9pXGnZgT3XhxXR%2BIn52Yy7hiqWqcw2E8PIcTtmTtdTmR5ogj5XiAF70mVM6gfUdTuibORkxKsYe%2BNtNYDAT2GbrYA5O1K4TDJnYnKBjqkAaAC0UmQ3GjlUoY4ZCLp7zJaD%2FCa6BASvCQbXhsHwI4r%2BPT1r3fUIVEE2FmVac9xBNKENcbRbxi8Tf8UpUBZzeaYrX9jowYbXvVHxQneq%2Flqn5fne939tS6D7%2FhMi2O6wd0trI3tkjZfjeCLiHV6gWQg%2FDOd%2Bp7%2FXZAzBjXtzQbd36dR6GpkrFnZsc5p1uPavPfqX5IOQeD%2BKZJrJsYN8ChDiewm&X-Amz-Signature=de2abbdb44b6c325fdca0322818c2c75b94eb6fcf2545e1427cf518b6fae97b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
