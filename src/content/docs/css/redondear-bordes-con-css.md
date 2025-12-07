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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRSPMK2Z%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T121932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGHp9At%2BxD9S9y56urhZEMxfQrnVTPriQ4ah%2ByRYEKEPAiB9PurroVkyewbQPQbuyHqdPvrpHTQEXV5oAnuT%2BkYB1SqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMH8qHEhnZEwYVuivNKtwDfA11aeZO4pKilpcumdKAMWg4P%2FNOv%2FBvyoer8nDMXvPAiWpXVJu4iA0xZKdyT0RmFIA58hGviAeWgvpHWSD7cJiDsSjFtsT6wF1zCJDm29DYbfBCYAsp2Co0U3kfJB2c43K6EhQhcfWQrAHm95efmLAlv4ypkBefRjtdTJkxp8YJ0qu9%2BtKe4YArsIjFsKoKjE1YkEYmr2i%2BZRHf%2Fnm0G%2BY4UrhAD5OO3ePbURA2Qfz1A7fU63F315Xc%2F6JacSa8CJgFk%2BrpPxoJrbKsFG3YnZ2fBSowsQfOrEWbVfmOK0ePotH2GmdlkpMDrggRnNNwp3PsGfbs4LOE%2B6NvlziAfCnRhBmJ7qWAryfbia9a8dT8psLno7jEFmy0ADJwYWskfn0Ht%2F5Op7iKPK%2F%2F0IS0Lb5ZMw7n03uEXVwPeRwjU9c2h1QM4BMb%2BcPOVYSJm9TAbbWk0kUJa3gI8CtBYr7uOe%2FNbL2crt9dd1HjDA5S0FaMAPbP%2BAKPuO%2FvTu6Ieaul2AZyLBvwQ%2FpL0LI0rWCZFxCNlfNkAyFHhn%2BLHINrRktDvARI0WaQ7OHBas%2FN9q%2FcVKVaAO4Fme%2BIIMr3i6nY9Ac9elhs%2BYMtaAoo7JjhqBlsnRQGXvULqoGdtWEwuprVyQY6pgFD3jv%2BVB0Zf2tLCVyjMdXJN%2F%2BDHVcYlrxRGB6a%2BqcOL2F9zw1070P6095PxoaZAeli42mwEf2v341DfJcV9eJp%2FdKyHyCv6N9imexKAMnzZpDWFYhDztRcD29V12sitGWm1qTBwRJjrCdFiO8qXpN5XSJmYoooT92NRLLeIuNFNc2RGtnp1sMZykhQtQUqYZ05Q2OC1spa3JH%2BHlg%2FRG%2BCXS8tf6qQ&X-Amz-Signature=48a36fe10f8ea3b8c1fbd38cd2e8a779657f8a774950d114faec1016c7fc5570&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRSPMK2Z%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T121932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGHp9At%2BxD9S9y56urhZEMxfQrnVTPriQ4ah%2ByRYEKEPAiB9PurroVkyewbQPQbuyHqdPvrpHTQEXV5oAnuT%2BkYB1SqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMH8qHEhnZEwYVuivNKtwDfA11aeZO4pKilpcumdKAMWg4P%2FNOv%2FBvyoer8nDMXvPAiWpXVJu4iA0xZKdyT0RmFIA58hGviAeWgvpHWSD7cJiDsSjFtsT6wF1zCJDm29DYbfBCYAsp2Co0U3kfJB2c43K6EhQhcfWQrAHm95efmLAlv4ypkBefRjtdTJkxp8YJ0qu9%2BtKe4YArsIjFsKoKjE1YkEYmr2i%2BZRHf%2Fnm0G%2BY4UrhAD5OO3ePbURA2Qfz1A7fU63F315Xc%2F6JacSa8CJgFk%2BrpPxoJrbKsFG3YnZ2fBSowsQfOrEWbVfmOK0ePotH2GmdlkpMDrggRnNNwp3PsGfbs4LOE%2B6NvlziAfCnRhBmJ7qWAryfbia9a8dT8psLno7jEFmy0ADJwYWskfn0Ht%2F5Op7iKPK%2F%2F0IS0Lb5ZMw7n03uEXVwPeRwjU9c2h1QM4BMb%2BcPOVYSJm9TAbbWk0kUJa3gI8CtBYr7uOe%2FNbL2crt9dd1HjDA5S0FaMAPbP%2BAKPuO%2FvTu6Ieaul2AZyLBvwQ%2FpL0LI0rWCZFxCNlfNkAyFHhn%2BLHINrRktDvARI0WaQ7OHBas%2FN9q%2FcVKVaAO4Fme%2BIIMr3i6nY9Ac9elhs%2BYMtaAoo7JjhqBlsnRQGXvULqoGdtWEwuprVyQY6pgFD3jv%2BVB0Zf2tLCVyjMdXJN%2F%2BDHVcYlrxRGB6a%2BqcOL2F9zw1070P6095PxoaZAeli42mwEf2v341DfJcV9eJp%2FdKyHyCv6N9imexKAMnzZpDWFYhDztRcD29V12sitGWm1qTBwRJjrCdFiO8qXpN5XSJmYoooT92NRLLeIuNFNc2RGtnp1sMZykhQtQUqYZ05Q2OC1spa3JH%2BHlg%2FRG%2BCXS8tf6qQ&X-Amz-Signature=e6d5172f97069d04c252b95ba7be5b2d374c71f6921364fc6f790386388da0cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
