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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGESMVYQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T011702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGwMGGWKFOekYY3q%2BDc%2Bv0uq6U%2Bv3faOZ%2BUTkmj72THKAiBgyOHMQzq%2B8SGeiX%2FUThi9F8UtYjdLg6eERg3wPbToAyr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMfPWIRQsUP5JWoUgLKtwDTmvBPwbvr0tG30zq3BW1dt5b7XW5ItW9g%2BvLG1kI80BfLjDecmAKek6Bv%2FKqHnTbSzWEe5kWuJHFIWAMksxZbPbRjLsSlVV89bSy3MEWk%2Fs2bs6M6xm9UK%2BX3aXI%2B%2BwXiD4b4k75pZVaTJlhDKC7UwsFpq07t%2FweElIJzE1cVN1CtdfxCwFeG%2BCST27EeQ4jfR7RZHahXBuc%2B%2BYg0ulffQTsDSpqEkbE6y%2F%2BnXNhsQtQ%2FIdwD1%2FmKBgPVJcum9fHC3uqsrTfN3zT5f3EI0Haw2uwp%2BE2Hnv8RZChgXee0hN1VBOHiFmydX8akZ058kgZLt3zbfAc5HtKeQM8tV5JadxatCIDMy9oUjNmhUzl0V3iFbjZPquFP85bwvWDlnhv2GJb5hT%2BAIkO7l2IQ%2Fgw%2F2CfYUhntyHsiMnPmHqvsWjkJQwW4kQqsKIyeB5j%2FjLfd02x3aKUjCpoS3ro7%2BzUsARi9V3JUvcPe1JVXXQJZgjaySTEZae3bBr8QbP0LJv6EtcEs4AUJwx%2FMPFFKyVnFaOm9p%2Fc435Ae6QuIsunaTRR%2F0HF9yVRUrMUCRRRHRE6Zta3saXRIOuDMhQwOy97pw8P8HD6fWPrrLYNjS05c01cw9gRYsEfwvroK9wwz%2FuHygY6pgG1Vx6LxZOaCz3zdHxJka%2F%2FXKooiXEtqljrbTQOvLjMpE%2Br42HeJ4pHbJTR%2FtoKuyt%2Fb0JvWfPfdjzH8poAGaRqsgrkWoq9tKRCN5KJVbnUFFXWILyv8T3612W54Jm1eJtJ6NIIqu%2FI%2FYSzE6iLo1%2F5EjVHgvUEa8e5C6JLV0vLXp9j72p209Fy8We3o28hHsIBHLuEI365U6v%2BgtNtWMLLawxdr%2Bmp&X-Amz-Signature=d6071e1c27c9f5d4f3a55ea741a4f7f4a501e6f434e1ef117957b13667cad9a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGESMVYQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T011702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGwMGGWKFOekYY3q%2BDc%2Bv0uq6U%2Bv3faOZ%2BUTkmj72THKAiBgyOHMQzq%2B8SGeiX%2FUThi9F8UtYjdLg6eERg3wPbToAyr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMfPWIRQsUP5JWoUgLKtwDTmvBPwbvr0tG30zq3BW1dt5b7XW5ItW9g%2BvLG1kI80BfLjDecmAKek6Bv%2FKqHnTbSzWEe5kWuJHFIWAMksxZbPbRjLsSlVV89bSy3MEWk%2Fs2bs6M6xm9UK%2BX3aXI%2B%2BwXiD4b4k75pZVaTJlhDKC7UwsFpq07t%2FweElIJzE1cVN1CtdfxCwFeG%2BCST27EeQ4jfR7RZHahXBuc%2B%2BYg0ulffQTsDSpqEkbE6y%2F%2BnXNhsQtQ%2FIdwD1%2FmKBgPVJcum9fHC3uqsrTfN3zT5f3EI0Haw2uwp%2BE2Hnv8RZChgXee0hN1VBOHiFmydX8akZ058kgZLt3zbfAc5HtKeQM8tV5JadxatCIDMy9oUjNmhUzl0V3iFbjZPquFP85bwvWDlnhv2GJb5hT%2BAIkO7l2IQ%2Fgw%2F2CfYUhntyHsiMnPmHqvsWjkJQwW4kQqsKIyeB5j%2FjLfd02x3aKUjCpoS3ro7%2BzUsARi9V3JUvcPe1JVXXQJZgjaySTEZae3bBr8QbP0LJv6EtcEs4AUJwx%2FMPFFKyVnFaOm9p%2Fc435Ae6QuIsunaTRR%2F0HF9yVRUrMUCRRRHRE6Zta3saXRIOuDMhQwOy97pw8P8HD6fWPrrLYNjS05c01cw9gRYsEfwvroK9wwz%2FuHygY6pgG1Vx6LxZOaCz3zdHxJka%2F%2FXKooiXEtqljrbTQOvLjMpE%2Br42HeJ4pHbJTR%2FtoKuyt%2Fb0JvWfPfdjzH8poAGaRqsgrkWoq9tKRCN5KJVbnUFFXWILyv8T3612W54Jm1eJtJ6NIIqu%2FI%2FYSzE6iLo1%2F5EjVHgvUEa8e5C6JLV0vLXp9j72p209Fy8We3o28hHsIBHLuEI365U6v%2BgtNtWMLLawxdr%2Bmp&X-Amz-Signature=f871b4c7df27849574f7238f227a9d6efd951d6c8fa4baf5149fbf0bdd199db6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
