---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastupdates: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5FYS6TN%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T203636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQDSGz8lMmawbLYTEnjQ4xkpH7MCMhVNT0Eo4IJRnVpG1QIgLoOQp%2FyocBdX6JF5PZ9AeFsS7mFMk6sXdHEjFRxDgZQq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDHOO%2BzE7sq6bW9tJJSrcA8QhYpkFvNOfeDisAOR%2BTTnaJ9rLELni%2BIQQIPBn1ev5oENFsyQxaLXbgV%2FP%2B8MwIyuKyWej2mmw3YDoR6W%2FUDcaAGcu67ZToS1TqnNHY7NbbSvJuKD9BUDSpL55YRlvUU%2Bk1g%2FE4stR%2FO2KS10efut%2B1H8OH%2BIBiBvDPwFGFyPWaEDO%2BHiNsEucFLzxaJ1H3uEMZC7mvGW%2FxEDarEmSP8ArVW%2FatucWopByCRHtpPthT9je2HaDTs9zwI2HInqVeruk3GyG8AOlcl%2BJY4F9SQrBl5DE2WOSclgvKKBKaHKxjGV5%2F72QL%2FoW23gbubAQemV8cYeEaodKHI64nqdoN%2BCRQXzfjjiQvGafwIqk%2BC6VRBWpu3BmNl4cmfyvC0BFSIBvR4gmMTy6sKByq96lp2ahPRm0Xhzn4mtNSA6%2FB%2FqNMU5RU70vEIyWLrvmb%2BcDS8M6g9KyTnmMVW3C1GOMqcxIXIDeJR9mOljOAFN1jjZeLfAhSP4U7BzIMyetZpP%2BFGj%2FEkMTCz4iEy1CrpeIvS%2FoYS8HUCgjOCDKuoAcuXk2ZWy8nVVG1PIZvYFPS%2BGjdtcl8%2FnTI7mLr1qmbDswSoNEO5W1N9h%2FVTx8YqRL%2Bxf1My%2B3T04AouXpolD%2BMLGRwskGOqUBqzPuuf080JX9iPF7cTGuYLRrlo0AJCDNqN48OdGDgPLGNxM%2Bz8ytzKxhqqijlvkaHwvTGRBmyWkd7bH%2BsqXgahdNqeTyh8Oq1BAHQWGFsDhKIk2tnwfr35qPkZHSxsnNloxgeuXyoexG0u1uVCxgCIk9nUZw5X8sUrgIFPQVCpjTGWqITxcQFaHoAi2b07%2FpBkViTchiAOi3XGqecfjjnJIWgLGR&X-Amz-Signature=7a993e4437e808c4d115724c1afa84d24cce46a7f44e8d1026bcffd5074b1c7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5FYS6TN%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T203636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQDSGz8lMmawbLYTEnjQ4xkpH7MCMhVNT0Eo4IJRnVpG1QIgLoOQp%2FyocBdX6JF5PZ9AeFsS7mFMk6sXdHEjFRxDgZQq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDHOO%2BzE7sq6bW9tJJSrcA8QhYpkFvNOfeDisAOR%2BTTnaJ9rLELni%2BIQQIPBn1ev5oENFsyQxaLXbgV%2FP%2B8MwIyuKyWej2mmw3YDoR6W%2FUDcaAGcu67ZToS1TqnNHY7NbbSvJuKD9BUDSpL55YRlvUU%2Bk1g%2FE4stR%2FO2KS10efut%2B1H8OH%2BIBiBvDPwFGFyPWaEDO%2BHiNsEucFLzxaJ1H3uEMZC7mvGW%2FxEDarEmSP8ArVW%2FatucWopByCRHtpPthT9je2HaDTs9zwI2HInqVeruk3GyG8AOlcl%2BJY4F9SQrBl5DE2WOSclgvKKBKaHKxjGV5%2F72QL%2FoW23gbubAQemV8cYeEaodKHI64nqdoN%2BCRQXzfjjiQvGafwIqk%2BC6VRBWpu3BmNl4cmfyvC0BFSIBvR4gmMTy6sKByq96lp2ahPRm0Xhzn4mtNSA6%2FB%2FqNMU5RU70vEIyWLrvmb%2BcDS8M6g9KyTnmMVW3C1GOMqcxIXIDeJR9mOljOAFN1jjZeLfAhSP4U7BzIMyetZpP%2BFGj%2FEkMTCz4iEy1CrpeIvS%2FoYS8HUCgjOCDKuoAcuXk2ZWy8nVVG1PIZvYFPS%2BGjdtcl8%2FnTI7mLr1qmbDswSoNEO5W1N9h%2FVTx8YqRL%2Bxf1My%2B3T04AouXpolD%2BMLGRwskGOqUBqzPuuf080JX9iPF7cTGuYLRrlo0AJCDNqN48OdGDgPLGNxM%2Bz8ytzKxhqqijlvkaHwvTGRBmyWkd7bH%2BsqXgahdNqeTyh8Oq1BAHQWGFsDhKIk2tnwfr35qPkZHSxsnNloxgeuXyoexG0u1uVCxgCIk9nUZw5X8sUrgIFPQVCpjTGWqITxcQFaHoAi2b07%2FpBkViTchiAOi3XGqecfjjnJIWgLGR&X-Amz-Signature=b00435aa566e449a75812daf626d666007ad04bd76f3c1b94ca68296cfd0bbab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
