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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQC7S4NZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T032055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDiH8L97nflFN%2BOFWUtK4gDH4I82b%2FYsoFgVzbsNTM1WQIhANeAht%2BO%2BNMsFmLdlB2VQwvVeMtBQrGKlMToEVQTDSPVKv8DCHQQABoMNjM3NDIzMTgzODA1IgxybncJQLs89I6%2Fl3Uq3AMJWfJsSCRSMaxasPDSINALYuG4nhBBKWWjgiD24%2F7S1Z3QDFL1as%2FOsNoNBiQw%2FS9qfUCieQxYuT8agc3e5norNHoG3EEJvghAeOZkL1BZMxy4pd2L7qsEUqXn16%2F13olqk1cafejW88NzlXvrvq4R4FljbIGkSyFg2Pxv8STQ%2FhRoPiw51KK3I7fTkYqI5dva6hgIwQkJA00p%2FdCwkVggaEnO%2Bzg1sJUvDJWSfsw%2FrpGI%2F9tFQy3%2B%2FuBPr9cghXmY%2BhcaqXU1eV%2B9HWXZ4l69hlelFWSqf%2BmCG2q0o8genCpkDTKNB0b6T1TFLFQU%2FvA2qOUy7faKhU8%2BI6gb%2Fb1WRO0beqdMm9Um9mx13EL7zx0KSSk4DhkCu6gChyHJnGw2cYm5RK%2BocxxBMdYXExHlxX43WBC9U%2FgDInGHQm63t8tQujLOS77KtK11nMErLjW3EwxvTvryxzaVa8r2mWltd1gzmbVaVsK93ImlZ48INPPBJZkCq3%2FmM48moIklOX4NZ%2Bkqw1WG73BYU09Wm74qhqYpPpl3bBYTnKaxXQ7IttPoLjsoLjME%2FwskhTdn2JgNcK2YUqyyEnly4QBvU5j%2F4AoFgmqwvwCNPliu3bvR7rqmzkmClm6SVhWihjD8sojKBjqkAXfz7iYspc32Iuj8%2FxEExzYEsw24mT3NEZUFgQ%2B0kZmwOS6LhrD2wNj%2BPqHPa2AD5jdH4ySZreJNnG7W2qrUBV33C6eqkFFN3j6ElbjpKqvP0dVqLqU6VGUHUi%2BGMWXz4BmcG4ZSLZPxR9PGyUYNHuuNN72vZEn3ifMwZGnLEr5F9qGF9gQlnSdqvk5j7EUoOOMTwTbLHdITHNMpTIDd21ZjJuaL&X-Amz-Signature=a89b51d1eddf02f6bbd0d347e11be5bba24e937897784623f31be36d1e3090af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQC7S4NZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T032055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDiH8L97nflFN%2BOFWUtK4gDH4I82b%2FYsoFgVzbsNTM1WQIhANeAht%2BO%2BNMsFmLdlB2VQwvVeMtBQrGKlMToEVQTDSPVKv8DCHQQABoMNjM3NDIzMTgzODA1IgxybncJQLs89I6%2Fl3Uq3AMJWfJsSCRSMaxasPDSINALYuG4nhBBKWWjgiD24%2F7S1Z3QDFL1as%2FOsNoNBiQw%2FS9qfUCieQxYuT8agc3e5norNHoG3EEJvghAeOZkL1BZMxy4pd2L7qsEUqXn16%2F13olqk1cafejW88NzlXvrvq4R4FljbIGkSyFg2Pxv8STQ%2FhRoPiw51KK3I7fTkYqI5dva6hgIwQkJA00p%2FdCwkVggaEnO%2Bzg1sJUvDJWSfsw%2FrpGI%2F9tFQy3%2B%2FuBPr9cghXmY%2BhcaqXU1eV%2B9HWXZ4l69hlelFWSqf%2BmCG2q0o8genCpkDTKNB0b6T1TFLFQU%2FvA2qOUy7faKhU8%2BI6gb%2Fb1WRO0beqdMm9Um9mx13EL7zx0KSSk4DhkCu6gChyHJnGw2cYm5RK%2BocxxBMdYXExHlxX43WBC9U%2FgDInGHQm63t8tQujLOS77KtK11nMErLjW3EwxvTvryxzaVa8r2mWltd1gzmbVaVsK93ImlZ48INPPBJZkCq3%2FmM48moIklOX4NZ%2Bkqw1WG73BYU09Wm74qhqYpPpl3bBYTnKaxXQ7IttPoLjsoLjME%2FwskhTdn2JgNcK2YUqyyEnly4QBvU5j%2F4AoFgmqwvwCNPliu3bvR7rqmzkmClm6SVhWihjD8sojKBjqkAXfz7iYspc32Iuj8%2FxEExzYEsw24mT3NEZUFgQ%2B0kZmwOS6LhrD2wNj%2BPqHPa2AD5jdH4ySZreJNnG7W2qrUBV33C6eqkFFN3j6ElbjpKqvP0dVqLqU6VGUHUi%2BGMWXz4BmcG4ZSLZPxR9PGyUYNHuuNN72vZEn3ifMwZGnLEr5F9qGF9gQlnSdqvk5j7EUoOOMTwTbLHdITHNMpTIDd21ZjJuaL&X-Amz-Signature=465c0beaf8bc080eb8e33c0689880bcec14b9ef1fba32efc0acf962070ce15be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
