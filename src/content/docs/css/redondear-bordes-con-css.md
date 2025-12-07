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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3THS64V%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T105601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9VZrNXCI3WekBP1pXgPCruYb3NJIz14cCDaEsqTZM%2FgIhAMcZNttz1bHfljtMcwRATZh%2FxFmBKNAqDEhnhC74fRzrKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxDBwmUZnO8BjNPOe8q3AOkDPPUVjPqCfNOHu6%2Fcx1ygiJG8uWGb5SMVdn6b8XULjCZB8tDVaEcSMZqkXvtsa4EL5kVHcU8D9k5AcHo5ZQ9Jk9DdvwO4ticc1Y3BI%2BlVvRCLQdQqJFrxVO96twcOS%2F2176uKfVSSKMDBH5SlxIzLJHgJgPi7vj%2FI%2FHxaPJSiIrkBkZ2pp5OAWKNuwZjmeNrnm2Vdi%2FADY7j0RxbRlqJ%2BxeFZP5THGrIT4FEUkYLJOmpalocQdsL%2B8kVN01KRPqkM1R3DaCsjv%2BM7eohVosizOL5CbL8ye%2F1gfYfgJ1qUnboC58RaeOR9uN8gIerRbwDlahvvSTVn7eAqvXwv4D6KYCy%2BGhxrzADajcB%2Ft1k70O7lM2PWnuLR9PTwFyJajy2MN74ow2qFESrGXPQRRVCYVySjuaN3dMOXz9xf90fnWjlDM6QlcjxvOD6ZvYKAx%2BWk9ZxGRxKc7%2FtpANArXALIEGTFUWSNwTIeM5Aa2nYM1irWEft5PViuK%2FDtRW8q4fvEyUVF6VcRe8%2BcL5JYTUs49NNzJ3%2FVxwaZdOv7ooR7c9xI5l%2F4txy8v9uP5kx%2Bsj1ifRHjzcz4gVJTnWzi7%2FHJGmtCVBjQEJJYjqut2%2FjJ8UU4YSrS96MbCiSzjC9mdXJBjqkATEgHE9g%2FlJocV36%2FFq4LDt1uNZ1VYV6U7lwsWIFFeqe3R3h%2FLE1oC0yZQ90S2IrfUm5lgVeVkASnZgbaAQMUgRUULAS3oUFLWLAmFPTn3eCYGbJIc32KYJfNDeuuYJu7vQxNLVJaqGQWsKqD0dpiwg97ypk2MzTcaolP65qUp1yLnqZRp45SQ3N7XX3okgqWeaurULkHjA2CC%2FbAnuiJn4Uma01&X-Amz-Signature=d2061d326c453b3f59eb0728b794bf4ad5dd9d96f769e4564abb8fcd6698db3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3THS64V%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T105601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9VZrNXCI3WekBP1pXgPCruYb3NJIz14cCDaEsqTZM%2FgIhAMcZNttz1bHfljtMcwRATZh%2FxFmBKNAqDEhnhC74fRzrKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxDBwmUZnO8BjNPOe8q3AOkDPPUVjPqCfNOHu6%2Fcx1ygiJG8uWGb5SMVdn6b8XULjCZB8tDVaEcSMZqkXvtsa4EL5kVHcU8D9k5AcHo5ZQ9Jk9DdvwO4ticc1Y3BI%2BlVvRCLQdQqJFrxVO96twcOS%2F2176uKfVSSKMDBH5SlxIzLJHgJgPi7vj%2FI%2FHxaPJSiIrkBkZ2pp5OAWKNuwZjmeNrnm2Vdi%2FADY7j0RxbRlqJ%2BxeFZP5THGrIT4FEUkYLJOmpalocQdsL%2B8kVN01KRPqkM1R3DaCsjv%2BM7eohVosizOL5CbL8ye%2F1gfYfgJ1qUnboC58RaeOR9uN8gIerRbwDlahvvSTVn7eAqvXwv4D6KYCy%2BGhxrzADajcB%2Ft1k70O7lM2PWnuLR9PTwFyJajy2MN74ow2qFESrGXPQRRVCYVySjuaN3dMOXz9xf90fnWjlDM6QlcjxvOD6ZvYKAx%2BWk9ZxGRxKc7%2FtpANArXALIEGTFUWSNwTIeM5Aa2nYM1irWEft5PViuK%2FDtRW8q4fvEyUVF6VcRe8%2BcL5JYTUs49NNzJ3%2FVxwaZdOv7ooR7c9xI5l%2F4txy8v9uP5kx%2Bsj1ifRHjzcz4gVJTnWzi7%2FHJGmtCVBjQEJJYjqut2%2FjJ8UU4YSrS96MbCiSzjC9mdXJBjqkATEgHE9g%2FlJocV36%2FFq4LDt1uNZ1VYV6U7lwsWIFFeqe3R3h%2FLE1oC0yZQ90S2IrfUm5lgVeVkASnZgbaAQMUgRUULAS3oUFLWLAmFPTn3eCYGbJIc32KYJfNDeuuYJu7vQxNLVJaqGQWsKqD0dpiwg97ypk2MzTcaolP65qUp1yLnqZRp45SQ3N7XX3okgqWeaurULkHjA2CC%2FbAnuiJn4Uma01&X-Amz-Signature=287a1f41874e6d0268f34b782cc8ca6c52148e04025a086bcbd1e34524b4b77c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
