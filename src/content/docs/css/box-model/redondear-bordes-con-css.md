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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJWRMZJP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T085608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFr%2BkHtK3hJR0izkowgZ9mTqzxNaoYi4R7%2Bycw6%2Fr18EAiEAhHQri7cdImH6cT%2FAS0xEPoasfCRZzIo5DlAjlpA7jMAq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDK%2BdelWfJF4NJdsQbircA12SaePCoRXx%2BJnM%2F130Id9cnsLGsyQ264McF4Oj%2Fp4DEQPz4CtcX2FOsvcQzSibSed%2FpCcjDoBjLMCZ2Mp03sEozbZi4tcBmrHcsxBwsXxeIWvwFQ5ntW3%2BdEwbVL4J4c%2FKd9UahkRkBDg4Q0WUKrVY9hqqiYKHx74Izyx7ZCoKLmbot6y4Fsrfx44Zo%2BgRIdJMxjJ1AqkMhxxf941n%2BYtvSF5InPuSLEsUfK%2BHUcIw7jNBGBi7kA3N1t8YFeYna%2F3LoNXvujvta2cUN7L8qdxSGUSY3hnJci0QxWSz9AlHXWmSLg5kQQo3NdFpZIej1t6dQUr%2FEtXjtc9lzYr3FRM2fSbdriojaCfMg4FKNto8rIJPQ1Iqpz6svZqXmaKkEo6%2FICe1JVXbJR2172At%2FREi6STW1NVOU3dOkvQKjWL00dQR5f3b8az5xlWOjkFLg9IQX86GAcm8faQVjL43y1uOYs6f1EMUcC1mSew09qnoq03SSdOVcV2RL3C2SOIltrae5OPhnCfHxP%2FYLvo4dpY4AOfJiOrjQsCuq7Gczst9%2FzIq7MBuPcosNwn6S3fExOib238ZEmDj%2BIHE6fvgcJUQf6OO%2FPtR8TJMmCWVSsdEvUblyaziM1kRuqsDMKnSicoGOqUBHZ0YfW%2BEHceeJMvjgeOINn0MAW8QEqeTsQmK%2FobW3Z3c0Lf9XVVlSkJEQyY7Jlwk6mOHe%2Be%2BCR84jQbu8ZXXVQ%2FwPKtlybgYtITwPaCQmbNOQfugYchDhGQP322wBBTiZAMNfc1zFZsWEoKck0tnNRH%2Bgdq3v3e6geGP3vc2WyPDBy8P%2FsVLgZKoSvbr64Ws3E2xXSdKVRdX1INQoN1I85zcF66B&X-Amz-Signature=66c94b7d4830b5f76a3114eb10604f965bfd721e3107ff199bed4a48febc65ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJWRMZJP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T085608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFr%2BkHtK3hJR0izkowgZ9mTqzxNaoYi4R7%2Bycw6%2Fr18EAiEAhHQri7cdImH6cT%2FAS0xEPoasfCRZzIo5DlAjlpA7jMAq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDK%2BdelWfJF4NJdsQbircA12SaePCoRXx%2BJnM%2F130Id9cnsLGsyQ264McF4Oj%2Fp4DEQPz4CtcX2FOsvcQzSibSed%2FpCcjDoBjLMCZ2Mp03sEozbZi4tcBmrHcsxBwsXxeIWvwFQ5ntW3%2BdEwbVL4J4c%2FKd9UahkRkBDg4Q0WUKrVY9hqqiYKHx74Izyx7ZCoKLmbot6y4Fsrfx44Zo%2BgRIdJMxjJ1AqkMhxxf941n%2BYtvSF5InPuSLEsUfK%2BHUcIw7jNBGBi7kA3N1t8YFeYna%2F3LoNXvujvta2cUN7L8qdxSGUSY3hnJci0QxWSz9AlHXWmSLg5kQQo3NdFpZIej1t6dQUr%2FEtXjtc9lzYr3FRM2fSbdriojaCfMg4FKNto8rIJPQ1Iqpz6svZqXmaKkEo6%2FICe1JVXbJR2172At%2FREi6STW1NVOU3dOkvQKjWL00dQR5f3b8az5xlWOjkFLg9IQX86GAcm8faQVjL43y1uOYs6f1EMUcC1mSew09qnoq03SSdOVcV2RL3C2SOIltrae5OPhnCfHxP%2FYLvo4dpY4AOfJiOrjQsCuq7Gczst9%2FzIq7MBuPcosNwn6S3fExOib238ZEmDj%2BIHE6fvgcJUQf6OO%2FPtR8TJMmCWVSsdEvUblyaziM1kRuqsDMKnSicoGOqUBHZ0YfW%2BEHceeJMvjgeOINn0MAW8QEqeTsQmK%2FobW3Z3c0Lf9XVVlSkJEQyY7Jlwk6mOHe%2Be%2BCR84jQbu8ZXXVQ%2FwPKtlybgYtITwPaCQmbNOQfugYchDhGQP322wBBTiZAMNfc1zFZsWEoKck0tnNRH%2Bgdq3v3e6geGP3vc2WyPDBy8P%2FsVLgZKoSvbr64Ws3E2xXSdKVRdX1INQoN1I85zcF66B&X-Amz-Signature=014987377a9402c55fc045f3b4a3afd94afa0626a6d9bfbe0b3c4f18ba154900&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
