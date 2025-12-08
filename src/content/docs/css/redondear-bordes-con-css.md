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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RY72MWNG%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T062151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSyXe6cnbW7M5kJrSHjo%2BUSDE6bXi40kws8ybFr33p%2BwIgUhT3UM62Efgw%2FWUS%2Fnwrix1AQuQMCIWlikGcJiwHlEsqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKJB0hfpsHnCikPaQCrcA0FoYob8BfFqcSoXQgBWNI4Ygcl8oxVMNhMd8zC%2Fqb5d6E98W8dvbvNJ4yMSnerl5E50jF0%2FpyEJe2bfOHZ%2Ff4Y0XXYz4RQOvAw7FbUnvBYKSZVgjppSZvKQFT5xra4p9E%2Bec6LmZByyqc0LuqO8xAAepvfznJ1GeyJIqxwycjBm9QNfi1yENlsaD7CBldH3RkgU4uTFVIvrlVhpiktflx%2FzvqmZrqBknhsNzgtupz8iLkjDiWut%2BiJzCZSJqj%2FSPf7xP1UdYgGGG%2B%2FR80xW5%2BEM7YI20fsK4IokIuWGa3RX9hUDLrtnF6LpUjYpc%2BZkEIsGaiRwEwV1B3ocBwKIViDyZhNfOVoFJjM66Dh6F7E2Pmhij6rzxHlhr7QMdvT6JbdA8x2byfkTfBmkBxSqnYDeqcNsoo2gKZyilm5J73OcZVvjcy85KyWloCRqJYW4IVd1afbNL2gFjqgaAkH%2FM9hDfycmzQ5hk8r6%2FIOUZR9s5wS5gD7mj8B%2Bl4xKtlS6puM6k%2FAIR3h9mFe9MPLzSZkhrGDvpGFKCleJXU1kPIYMtLgsr9RpmmlCbnvkWn%2FXXhG60UKyIA1zyTPeUdeeOG%2By1gcEY8aI%2BD2y0TOOTMXyTN87pxCmwQIoOZ9oMMLQ2ckGOqUBqn%2FnjyL%2BCLZzDdnNKiGiKEZiaU0AD2nW8X6ji4ys%2BmBVC074QaNlkRVBWTPyeyPCxjlMU%2BVFZcMw%2F4lShWUqQhnWu8iVt2IMXWFLNeo%2FkEm9waSb%2FHG9mzAKM20BsAUTKfCiqQABem7DWJhZRzaBj%2BaTWTze71%2FfGRh5lli1dvLTcJtN26Nmea6u1KiuoNp%2Fv90F%2FASyXGulRXiK6NZ3AiNe2fDX&X-Amz-Signature=818b864fc1c9ea585a3b2bac4e45140a29f7dbd40ec5aa3af74f4181118035f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RY72MWNG%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T062151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSyXe6cnbW7M5kJrSHjo%2BUSDE6bXi40kws8ybFr33p%2BwIgUhT3UM62Efgw%2FWUS%2Fnwrix1AQuQMCIWlikGcJiwHlEsqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKJB0hfpsHnCikPaQCrcA0FoYob8BfFqcSoXQgBWNI4Ygcl8oxVMNhMd8zC%2Fqb5d6E98W8dvbvNJ4yMSnerl5E50jF0%2FpyEJe2bfOHZ%2Ff4Y0XXYz4RQOvAw7FbUnvBYKSZVgjppSZvKQFT5xra4p9E%2Bec6LmZByyqc0LuqO8xAAepvfznJ1GeyJIqxwycjBm9QNfi1yENlsaD7CBldH3RkgU4uTFVIvrlVhpiktflx%2FzvqmZrqBknhsNzgtupz8iLkjDiWut%2BiJzCZSJqj%2FSPf7xP1UdYgGGG%2B%2FR80xW5%2BEM7YI20fsK4IokIuWGa3RX9hUDLrtnF6LpUjYpc%2BZkEIsGaiRwEwV1B3ocBwKIViDyZhNfOVoFJjM66Dh6F7E2Pmhij6rzxHlhr7QMdvT6JbdA8x2byfkTfBmkBxSqnYDeqcNsoo2gKZyilm5J73OcZVvjcy85KyWloCRqJYW4IVd1afbNL2gFjqgaAkH%2FM9hDfycmzQ5hk8r6%2FIOUZR9s5wS5gD7mj8B%2Bl4xKtlS6puM6k%2FAIR3h9mFe9MPLzSZkhrGDvpGFKCleJXU1kPIYMtLgsr9RpmmlCbnvkWn%2FXXhG60UKyIA1zyTPeUdeeOG%2By1gcEY8aI%2BD2y0TOOTMXyTN87pxCmwQIoOZ9oMMLQ2ckGOqUBqn%2FnjyL%2BCLZzDdnNKiGiKEZiaU0AD2nW8X6ji4ys%2BmBVC074QaNlkRVBWTPyeyPCxjlMU%2BVFZcMw%2F4lShWUqQhnWu8iVt2IMXWFLNeo%2FkEm9waSb%2FHG9mzAKM20BsAUTKfCiqQABem7DWJhZRzaBj%2BaTWTze71%2FfGRh5lli1dvLTcJtN26Nmea6u1KiuoNp%2Fv90F%2FASyXGulRXiK6NZ3AiNe2fDX&X-Amz-Signature=0f547afcef7473f8702ff999184bf4774d61dd334f96be1d1d5cacf10d8ca86c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
