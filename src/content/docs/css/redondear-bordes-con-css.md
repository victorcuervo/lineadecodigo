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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULAWDFKH%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T193331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFE92KCoQkVux4R6iMn92Iyq4Nzf4%2BB6UMQP3Id%2BOk9wIhAIb%2BntyVO9bCMdDD3RQjIztGlgyVExeUVyl%2BGkQjpgBkKv8DCGEQABoMNjM3NDIzMTgzODA1IgwvyTfcXn%2BhxiixSRYq3AN1Mb6pJyvuF%2BpBoGIPsH6%2FiBaJIkBVSbNLOclVog054enJlfluY%2BK9YVA4XxYaCjkco8zrFQZoxEEGsmMHG%2BGD73Ie1HJgMHBbVa57qw6mOcE0Hizf8TekK454kB1PGadPEuuD2C%2B7Pku9TCvvZ6bbsSOZB%2BfF9kpNf%2FdXPV56e%2FLreQKBjkiRPfRbofltCKHpDxKQyxFeFfqk5NO871e2B9dtsgSpjDLZkSqo%2FHBGBzeefCLGdgUBJtEGItJqfE2%2F5FrFYSug%2F1Kdu3ZsrMV4HZn%2BptOGd0EhDpgOtH05BG3w4vPCHPbLTgXHXfDy44BpRGbPZCwRN10A0yFQ%2FKD9WelSyer5s14tZSmu%2FiQ70nGEwRxBBPpzLove5ObR53llr1ze5we4AunSpp5TL196lKvS52Sv0Mb1gp5Hf%2BBo6nXY58N0ve12it7sXzWf%2FjPFdhDh%2Ft0glPlJv%2BBAFxi29ALlEp4FPaSkq3tZ58G5SUBhwRcMsy2KQ9X3yuAFDmkivEKwyJmX2LCiRks6Lkk8hLxyCiNCeOGK5TmsKSnIB%2BanXGCxTEcY9xQZySKz3IAzuqAFKt9vzNBaRz6klwy4asGDQumOvNBT1KlZH0wyzkpqFjpQA8FnU7CbSjDv%2FMvJBjqkAUwpPu8MikqsYQcdKiyde%2BKanbFTvWm82TipqzRRwFoYHkRG5IegGro3qV46hJIhQ4lhC22qpDsaPh%2F7g8KgnkrKnzu3%2FnPDEX4S7dIqEMdR54wZLAcdiRO%2FVlk3qOV9jm1%2FwjnnBu65mEqBor7jP46H2niDMuDRU%2FFVS8L274j%2BIQFQ2A%2FjWBXTUCUDqje%2B9rXHd5IIQPqV4%2BOQtp5TAX7gHQEs&X-Amz-Signature=1c30cd7a09849d9e23e280e8135a94d4f7ccb9c37a91b9f40714e9cad9851d0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULAWDFKH%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T193331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFE92KCoQkVux4R6iMn92Iyq4Nzf4%2BB6UMQP3Id%2BOk9wIhAIb%2BntyVO9bCMdDD3RQjIztGlgyVExeUVyl%2BGkQjpgBkKv8DCGEQABoMNjM3NDIzMTgzODA1IgwvyTfcXn%2BhxiixSRYq3AN1Mb6pJyvuF%2BpBoGIPsH6%2FiBaJIkBVSbNLOclVog054enJlfluY%2BK9YVA4XxYaCjkco8zrFQZoxEEGsmMHG%2BGD73Ie1HJgMHBbVa57qw6mOcE0Hizf8TekK454kB1PGadPEuuD2C%2B7Pku9TCvvZ6bbsSOZB%2BfF9kpNf%2FdXPV56e%2FLreQKBjkiRPfRbofltCKHpDxKQyxFeFfqk5NO871e2B9dtsgSpjDLZkSqo%2FHBGBzeefCLGdgUBJtEGItJqfE2%2F5FrFYSug%2F1Kdu3ZsrMV4HZn%2BptOGd0EhDpgOtH05BG3w4vPCHPbLTgXHXfDy44BpRGbPZCwRN10A0yFQ%2FKD9WelSyer5s14tZSmu%2FiQ70nGEwRxBBPpzLove5ObR53llr1ze5we4AunSpp5TL196lKvS52Sv0Mb1gp5Hf%2BBo6nXY58N0ve12it7sXzWf%2FjPFdhDh%2Ft0glPlJv%2BBAFxi29ALlEp4FPaSkq3tZ58G5SUBhwRcMsy2KQ9X3yuAFDmkivEKwyJmX2LCiRks6Lkk8hLxyCiNCeOGK5TmsKSnIB%2BanXGCxTEcY9xQZySKz3IAzuqAFKt9vzNBaRz6klwy4asGDQumOvNBT1KlZH0wyzkpqFjpQA8FnU7CbSjDv%2FMvJBjqkAUwpPu8MikqsYQcdKiyde%2BKanbFTvWm82TipqzRRwFoYHkRG5IegGro3qV46hJIhQ4lhC22qpDsaPh%2F7g8KgnkrKnzu3%2FnPDEX4S7dIqEMdR54wZLAcdiRO%2FVlk3qOV9jm1%2FwjnnBu65mEqBor7jP46H2niDMuDRU%2FFVS8L274j%2BIQFQ2A%2FjWBXTUCUDqje%2B9rXHd5IIQPqV4%2BOQtp5TAX7gHQEs&X-Amz-Signature=13a340a3d9490b112ba9ac932542b78c3690827d57ff21336ebd5bbaf590c13c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
