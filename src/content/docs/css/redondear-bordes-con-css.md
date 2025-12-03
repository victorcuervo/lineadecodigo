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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUQ6LGVE%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T225343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQCTzmfFqTFEL75OK85bgyQsdcU%2BrA6qjs6lc9fWdJAKaQIhAPJP5pjLzO0JKztuxJJuFVtHkcE66OD%2FQ4f6LXKzH9JjKv8DCDgQABoMNjM3NDIzMTgzODA1IgzXPWyny3VnAnKUpbwq3AN5YXARoSjgIJOdvpdeI3YMW2UiR4P0WAthQn2DeG0vtLvpT2So6ZNSgaMC00akKJFgT%2BvswGJOG0l5YwXP19QvnI4Ot%2Btue%2FBUKRK%2BSLKRAIVQQcmjmSU4BcPJRRG5I40NyVVFQGvXz2951p5VK0tij4otu06kLQbTMidc6aLT1mzZlnSAEgAPWS%2BeKmyOIgMwO1GYld0NbUMy%2FkQtZHDShGvj5U1HpaCodTDHvtRNTODYd4X3cvm%2BlY9dqjaPiiwapOW5M4TcbalrQ54zi%2B8KnWqlUR1texCankUBcf0P%2BXzBOWBa5XxaL3X7AL2EtKy84%2BmzZhP4I96cC9OnYAjJ4LaOsbTKKl9lNPHaUv6QHuPdtQIQ3KupSavzsnPVMfkVbcJfGLjQ%2FFIjQgU7DM9yZQaGpuzY9ShcaBQlLMbZlJaSEd1CVPy1%2F3solEaAGiGb58quVPw0AJgf98EQi6FOS%2BKwJQk%2BB70gRKJ%2B13fm89L6C2jhV01x2%2Fu2gBFdy%2BN8%2FCMTg%2Bzv5cqTw%2B%2F%2FLGMhdRCtfaUhuPCwqsm0hGdXxpVL%2FR0I6SU4GcG1WNAxl0641Gox%2BVdJzuavtBR8DZcqIWbhUWBfG4Fs1K%2Br5%2B2O3rvmoRXnJGAn%2FAoAFjDW%2BMLJBjqkAbj%2FOBT5GyDjvEqKkirHwyWloJDv1sOR1JC1tM9sVcDurC1T9%2FWpeOhxecWQfzkMnG7bJ0KY7%2F7ajVq%2BQKeO5Tc3Rv9dAUN1gtkGsdWUudsCrZ70v0zBdUsomX0EtrJQcymCvGOsYZsiFCDdxH0Ee%2B2xxhCOE%2BloHBjYqsWa9NaD9cKiRilxAVIH8nggs%2FKJytSnrVng%2FBzBM5R5qLnXh6HjuqGm&X-Amz-Signature=1a62e7ac2443bf1b8f7d8a1ce48a047241d9c55e24b7c520c45f5a8157e896eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUQ6LGVE%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T225343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQCTzmfFqTFEL75OK85bgyQsdcU%2BrA6qjs6lc9fWdJAKaQIhAPJP5pjLzO0JKztuxJJuFVtHkcE66OD%2FQ4f6LXKzH9JjKv8DCDgQABoMNjM3NDIzMTgzODA1IgzXPWyny3VnAnKUpbwq3AN5YXARoSjgIJOdvpdeI3YMW2UiR4P0WAthQn2DeG0vtLvpT2So6ZNSgaMC00akKJFgT%2BvswGJOG0l5YwXP19QvnI4Ot%2Btue%2FBUKRK%2BSLKRAIVQQcmjmSU4BcPJRRG5I40NyVVFQGvXz2951p5VK0tij4otu06kLQbTMidc6aLT1mzZlnSAEgAPWS%2BeKmyOIgMwO1GYld0NbUMy%2FkQtZHDShGvj5U1HpaCodTDHvtRNTODYd4X3cvm%2BlY9dqjaPiiwapOW5M4TcbalrQ54zi%2B8KnWqlUR1texCankUBcf0P%2BXzBOWBa5XxaL3X7AL2EtKy84%2BmzZhP4I96cC9OnYAjJ4LaOsbTKKl9lNPHaUv6QHuPdtQIQ3KupSavzsnPVMfkVbcJfGLjQ%2FFIjQgU7DM9yZQaGpuzY9ShcaBQlLMbZlJaSEd1CVPy1%2F3solEaAGiGb58quVPw0AJgf98EQi6FOS%2BKwJQk%2BB70gRKJ%2B13fm89L6C2jhV01x2%2Fu2gBFdy%2BN8%2FCMTg%2Bzv5cqTw%2B%2F%2FLGMhdRCtfaUhuPCwqsm0hGdXxpVL%2FR0I6SU4GcG1WNAxl0641Gox%2BVdJzuavtBR8DZcqIWbhUWBfG4Fs1K%2Br5%2B2O3rvmoRXnJGAn%2FAoAFjDW%2BMLJBjqkAbj%2FOBT5GyDjvEqKkirHwyWloJDv1sOR1JC1tM9sVcDurC1T9%2FWpeOhxecWQfzkMnG7bJ0KY7%2F7ajVq%2BQKeO5Tc3Rv9dAUN1gtkGsdWUudsCrZ70v0zBdUsomX0EtrJQcymCvGOsYZsiFCDdxH0Ee%2B2xxhCOE%2BloHBjYqsWa9NaD9cKiRilxAVIH8nggs%2FKJytSnrVng%2FBzBM5R5qLnXh6HjuqGm&X-Amz-Signature=bf542b091ec02ef3debd0f635384eceffe93935035bb928bc022a323ee0ed378&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
