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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654ONH2I7%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T030157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHhJ4xDsZsVC9imftb2%2Bt041fiqkNlL0hT2ixZMmQANAAiEAt3zwe0MEnvL2KRW%2F%2FFN6RYHH2zWz4q%2BXe699uRk8mv8qiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMVihLKO6BrSZds9SSrcA6nHXjC5GRFdToZQ7GfjUaNr1oxPyEfLVMSSrM%2F1FnKy%2FgFbMFtRXoCQ%2BiuzxjbKBQlS%2BvdEVRDyqpYpXXjNR2yMUviCILEc4DRWJgZi3UWcC0jZL5e8W3ATDW6IRI0dBggWo8VTJmNbwotfydUPhN1%2F042nXiK%2Bz7s2w5fJfiz8yb%2Fh91ILhGTf1jRIj4Ehf8XaEdvcqQRlwCvGNOfq8ay1FPS1qqAkj%2Be0trVg5p0%2FQEY56ByUkmvx2Tjr6hRF%2BmNiyl42z%2FmseX49vPhFJf%2Bczx6Z483VIjk7yq1bzlOoQKBsek9DJcV5bVJs4GAPXDLnrvSxb5WKMLucMGmOaV0h2WQ7SDDn3zcskS2kckG1FpgfGadnazrFAN67dP%2Fl%2FIh8PiXxwjCJXVSv1yQr47DVPJXaJHc6%2FeQOyOpi2XFR%2BK9iN6cy0alJaCKwodouF%2FUA7yNwKFb%2BWgdg7bwBindEEs8hxr%2FzrsSmTd%2FLehgFIy5GvOYS4cD4DzE8g9FUjvPq5tyHZmT9ptka7VdCDbYPsNzoPVvkOhigDMt1wZaIhyBYORqWvHcc7OrHoYTjmcTgIGFFIYAVBGq48TJizoH1sRplIS7M2KYjq5%2FP08Y%2BCJw2beqgBbKz3U3sMKju2MkGOqUBqOLxnBTf7%2F%2BXsleSZZ%2Fw4YX5%2BZlTMtMJ4paWLdiDswXjL%2FDkfzauTVKeZcYif6g0Nzqj0wFg5KIdJzUOcJVx8TbioYDK2UOA%2BZqtcHCD9Zk2wKvchm4h6TWa2g7h9BkkdK%2BLCgmGe5ivX4GSQhgHE2haHllv4uaRmx7znmTkCUmuHj%2Bgq5JnH%2BdInJ43lUgPS2TR6U1vJy1F2cbKLxW21Up43fer&X-Amz-Signature=328a0ff406248c1133853f843d9635d96f4102cd5d700b1049fc53ef6b092a83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654ONH2I7%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T030157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHhJ4xDsZsVC9imftb2%2Bt041fiqkNlL0hT2ixZMmQANAAiEAt3zwe0MEnvL2KRW%2F%2FFN6RYHH2zWz4q%2BXe699uRk8mv8qiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMVihLKO6BrSZds9SSrcA6nHXjC5GRFdToZQ7GfjUaNr1oxPyEfLVMSSrM%2F1FnKy%2FgFbMFtRXoCQ%2BiuzxjbKBQlS%2BvdEVRDyqpYpXXjNR2yMUviCILEc4DRWJgZi3UWcC0jZL5e8W3ATDW6IRI0dBggWo8VTJmNbwotfydUPhN1%2F042nXiK%2Bz7s2w5fJfiz8yb%2Fh91ILhGTf1jRIj4Ehf8XaEdvcqQRlwCvGNOfq8ay1FPS1qqAkj%2Be0trVg5p0%2FQEY56ByUkmvx2Tjr6hRF%2BmNiyl42z%2FmseX49vPhFJf%2Bczx6Z483VIjk7yq1bzlOoQKBsek9DJcV5bVJs4GAPXDLnrvSxb5WKMLucMGmOaV0h2WQ7SDDn3zcskS2kckG1FpgfGadnazrFAN67dP%2Fl%2FIh8PiXxwjCJXVSv1yQr47DVPJXaJHc6%2FeQOyOpi2XFR%2BK9iN6cy0alJaCKwodouF%2FUA7yNwKFb%2BWgdg7bwBindEEs8hxr%2FzrsSmTd%2FLehgFIy5GvOYS4cD4DzE8g9FUjvPq5tyHZmT9ptka7VdCDbYPsNzoPVvkOhigDMt1wZaIhyBYORqWvHcc7OrHoYTjmcTgIGFFIYAVBGq48TJizoH1sRplIS7M2KYjq5%2FP08Y%2BCJw2beqgBbKz3U3sMKju2MkGOqUBqOLxnBTf7%2F%2BXsleSZZ%2Fw4YX5%2BZlTMtMJ4paWLdiDswXjL%2FDkfzauTVKeZcYif6g0Nzqj0wFg5KIdJzUOcJVx8TbioYDK2UOA%2BZqtcHCD9Zk2wKvchm4h6TWa2g7h9BkkdK%2BLCgmGe5ivX4GSQhgHE2haHllv4uaRmx7znmTkCUmuHj%2Bgq5JnH%2BdInJ43lUgPS2TR6U1vJy1F2cbKLxW21Up43fer&X-Amz-Signature=4da14438e761e46e5a7e786cb6fedaee17aaa2daec0a5e56ea3d944df3887b92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
