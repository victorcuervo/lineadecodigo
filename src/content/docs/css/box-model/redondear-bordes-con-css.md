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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOKVGYOC%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T170009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMJIv63xelO9etlWGindnEyUfv1aoNUbN8dXi%2FKn%2BjCQIhAKINTvvtIT%2BdnFVkM2aCPMMmnsZd5sSnoejxQ3sD8hMuKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwBcBtJfharb%2F5DfR8q3APKEwCz5bvqinTn82pfupFXH%2FyG90Ya%2FnmzagRq3U5DeQEPU%2BGB3JgUwKGlkVjwfOWme90u1bMAv2h7uYPQl4ctgawjTSsIEd3f4CPKUpb1FAth17Ett961O11Kb%2BwT%2FEk0ecDMBXUTVC%2BhAw85GNG%2FqOGhHmSwEUwAj36yVN64h11ETTSNnEbGtY0NZfiRKfoPV1RPNTbhQ9FTy5NesvWnZJZ2WVBEM6AkDLIhR4Tl0unEoG204m5vjDLPNzU2AS1uMYxkT3yzhxMHB3AFuhAHKiA88knsmdQuuyJSTifs5RI%2FmbmRhI4GRDh8afjMQpsB5VDK2QZi0IWfZQVOB%2BnE8qA2SfbtRe%2B6Qq45cFzYC86JT%2F3dZ0Rl7bjgqwxA18%2BznTe2VK2uqXA6EWRV72vjAQfWVTbNJETU3JRyRhGCsDHca3VGJv0AZRrV5DmjaxDPPLuQqdX3VBfamRzCMi2TfUwV%2BDZWLU6Ou5UVxd2oeLjYQzgSMFCyZkACAxnmBx1duic5WEH%2FGgclC%2Fw2PxT5LKavOGYUkp08aJgTr%2BysVmQ0wtVvdRA%2FH%2BSHe%2B%2BfvhhTv961%2F0mM2anJHANrsl8XKCGBmTsdt1HExg3a8I%2FrTaC0QfD5POWgwCAKGzC8oIvKBjqkAeTw0Y5Jpvbf3EyaDC%2FdFLcYVJ8psf5tsW%2FZ%2FTNxs5gLIfDnG79mFKuckDXvM7nAgG7mYITtYspdTXxfMiJDDCgr60JQBsmpbg5s%2FJyA0%2B7W7lnJTe3lbkHn%2Bmd98Otb%2B7ojFzehUmOIRqynHpG%2BKJBBCpA3pyQ78I78YPMlqQtuE3Kvu9%2BhAWTIbynBFb%2FDQLNfrA6E6WU0dd%2FUDnAPGQXrTzsK&X-Amz-Signature=30981ab30d6cd342791338100cfab8cc04f7c2cda8e8832007a8b1392c70fe37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOKVGYOC%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T170009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMJIv63xelO9etlWGindnEyUfv1aoNUbN8dXi%2FKn%2BjCQIhAKINTvvtIT%2BdnFVkM2aCPMMmnsZd5sSnoejxQ3sD8hMuKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwBcBtJfharb%2F5DfR8q3APKEwCz5bvqinTn82pfupFXH%2FyG90Ya%2FnmzagRq3U5DeQEPU%2BGB3JgUwKGlkVjwfOWme90u1bMAv2h7uYPQl4ctgawjTSsIEd3f4CPKUpb1FAth17Ett961O11Kb%2BwT%2FEk0ecDMBXUTVC%2BhAw85GNG%2FqOGhHmSwEUwAj36yVN64h11ETTSNnEbGtY0NZfiRKfoPV1RPNTbhQ9FTy5NesvWnZJZ2WVBEM6AkDLIhR4Tl0unEoG204m5vjDLPNzU2AS1uMYxkT3yzhxMHB3AFuhAHKiA88knsmdQuuyJSTifs5RI%2FmbmRhI4GRDh8afjMQpsB5VDK2QZi0IWfZQVOB%2BnE8qA2SfbtRe%2B6Qq45cFzYC86JT%2F3dZ0Rl7bjgqwxA18%2BznTe2VK2uqXA6EWRV72vjAQfWVTbNJETU3JRyRhGCsDHca3VGJv0AZRrV5DmjaxDPPLuQqdX3VBfamRzCMi2TfUwV%2BDZWLU6Ou5UVxd2oeLjYQzgSMFCyZkACAxnmBx1duic5WEH%2FGgclC%2Fw2PxT5LKavOGYUkp08aJgTr%2BysVmQ0wtVvdRA%2FH%2BSHe%2B%2BfvhhTv961%2F0mM2anJHANrsl8XKCGBmTsdt1HExg3a8I%2FrTaC0QfD5POWgwCAKGzC8oIvKBjqkAeTw0Y5Jpvbf3EyaDC%2FdFLcYVJ8psf5tsW%2FZ%2FTNxs5gLIfDnG79mFKuckDXvM7nAgG7mYITtYspdTXxfMiJDDCgr60JQBsmpbg5s%2FJyA0%2B7W7lnJTe3lbkHn%2Bmd98Otb%2B7ojFzehUmOIRqynHpG%2BKJBBCpA3pyQ78I78YPMlqQtuE3Kvu9%2BhAWTIbynBFb%2FDQLNfrA6E6WU0dd%2FUDnAPGQXrTzsK&X-Amz-Signature=05eb2259754896dc833e872aa66fb0495fbdf084194a593ca404501cc470c935&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
