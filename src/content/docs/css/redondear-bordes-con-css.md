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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYT7QLJT%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T120224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIDwj0kjfiVPzLkKf49Gri48eSb4h%2BrGHvO%2BH%2Fs3CIrhzAiEAoPfbrWVfxf1dCJ%2FKUG%2BgIuIoJQFVTHtJ0UOAdYhSMGwq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDEA9wR%2FH1XRyVhQuQyrcA%2BUoVFCpG2qw9L%2Fp1q%2FnlvEG94Hq7sD7D7E9pe7I5VMD%2ByzJ%2BpODgw442ELWkHKOrA7riUOSHQ%2FfWGWwPcApOxO%2BG7NbY2XuaXxnePj95gs2tEgx7HhIwVOJHXJvNTL9akkwvu1rHjtFjuZYvQyvO6yb4NeLpnfZ5DaiXDnhBV4Ueclx%2F4Bg71H8dw3Prrc8jY9nGXtLiCurXPEVwG3X6mP%2Bg57Vm8Erz9TiVG3DipCzyiDYR%2B5JYigB4n51SbmaYM6UQHSEskB9tmwb6D0B7M%2B9RgeVu7pVbbM%2FtfHeUpTl9aB4w3GJHixL2PLoU1n9SO3uMJi9UgQtvbuZIuBwbxdVr24ddwEH0LmXrAf%2BLRckJEsHw%2FlMYqKmRGPNLPYKUi6OK4zGORmU76XdrGC%2F5qb3LxNOBygg5H4CZSQUhK5WXDDBELAJm%2BUkOvmF9MW5ON1IPUqcrhIlNMLqm05xQ6a2majg1u2I5hCV3nqFGfyhfExJxfC5skCKierJV%2FEUdelDHwd%2FU4Kw18xDzot1qysqdoEe4qfsP89IkuABbXff3guVmjIIS3pQU6uvLVVAoNF7Nr6R8PrZFgFreZw6q0yoD4ZFbtLYVmPS%2FHvwboP8cWKYRN%2B66dn%2F5%2F%2BYMMLnxckGOqUB%2FT4%2BXluQS3GT%2BQTCxQIP0oLYG%2BBITj8Q%2B6doxpasGojC4Eo6ivGLeNABcB0ziOhqh7lXGOzGB%2BteZqKRQ4cfUh1Lt065oD%2FoAi2ncDfppgvXnb%2FV2Qp1DgvFbmjGTjcHj57DUUabObSSBj2R1kaEVVn5QzyPlHt0A91uPM%2F0Z8sqN0phxSKdfKGdw8LeVo3v7np4OyGBTRCo7AlhmODb%2BmCR0GXM&X-Amz-Signature=625115d63d1f2be00d769986e5ddff7fa5d3253b594f48a19accdcb0155af386&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYT7QLJT%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T120224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIDwj0kjfiVPzLkKf49Gri48eSb4h%2BrGHvO%2BH%2Fs3CIrhzAiEAoPfbrWVfxf1dCJ%2FKUG%2BgIuIoJQFVTHtJ0UOAdYhSMGwq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDEA9wR%2FH1XRyVhQuQyrcA%2BUoVFCpG2qw9L%2Fp1q%2FnlvEG94Hq7sD7D7E9pe7I5VMD%2ByzJ%2BpODgw442ELWkHKOrA7riUOSHQ%2FfWGWwPcApOxO%2BG7NbY2XuaXxnePj95gs2tEgx7HhIwVOJHXJvNTL9akkwvu1rHjtFjuZYvQyvO6yb4NeLpnfZ5DaiXDnhBV4Ueclx%2F4Bg71H8dw3Prrc8jY9nGXtLiCurXPEVwG3X6mP%2Bg57Vm8Erz9TiVG3DipCzyiDYR%2B5JYigB4n51SbmaYM6UQHSEskB9tmwb6D0B7M%2B9RgeVu7pVbbM%2FtfHeUpTl9aB4w3GJHixL2PLoU1n9SO3uMJi9UgQtvbuZIuBwbxdVr24ddwEH0LmXrAf%2BLRckJEsHw%2FlMYqKmRGPNLPYKUi6OK4zGORmU76XdrGC%2F5qb3LxNOBygg5H4CZSQUhK5WXDDBELAJm%2BUkOvmF9MW5ON1IPUqcrhIlNMLqm05xQ6a2majg1u2I5hCV3nqFGfyhfExJxfC5skCKierJV%2FEUdelDHwd%2FU4Kw18xDzot1qysqdoEe4qfsP89IkuABbXff3guVmjIIS3pQU6uvLVVAoNF7Nr6R8PrZFgFreZw6q0yoD4ZFbtLYVmPS%2FHvwboP8cWKYRN%2B66dn%2F5%2F%2BYMMLnxckGOqUB%2FT4%2BXluQS3GT%2BQTCxQIP0oLYG%2BBITj8Q%2B6doxpasGojC4Eo6ivGLeNABcB0ziOhqh7lXGOzGB%2BteZqKRQ4cfUh1Lt065oD%2FoAi2ncDfppgvXnb%2FV2Qp1DgvFbmjGTjcHj57DUUabObSSBj2R1kaEVVn5QzyPlHt0A91uPM%2F0Z8sqN0phxSKdfKGdw8LeVo3v7np4OyGBTRCo7AlhmODb%2BmCR0GXM&X-Amz-Signature=0037239c83cb6e1be276f149406b68f39f948338aac5b5f3d151f745270090f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
