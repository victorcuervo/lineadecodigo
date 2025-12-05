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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667724PONV%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T222659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxsb4hoV%2FvmLav2AAWUp92%2BWwCsCasP2gkgukKCZV8lgIhAN6XizZBo4VZW%2BMQHKbP995lm0RHW6hlgXjB4EGC66ncKv8DCGYQABoMNjM3NDIzMTgzODA1IgyorvUyXLrQDxXFBJ8q3AMDkKvaby%2BmmXkBx6k9vnd0K6zx4cAojn6xgzEeukerTjCpJHLcfJbrox36aTeX1BIUeG9Z%2BlZEHceUZrChQW2kWeaFQeNw5if%2ByVYWJq4jHZyDcpPKUUu59FW%2BFb%2FH5ZMI9NN0RfHuqIOcpE1TK4naRYtA%2FK0tSNBXUxdRmJ%2BnxiBjRtsbdjvcI18ihbj1WO2IAmpO7glcU0H95XUQV9%2BkZveEwCfyEHlI%2FlBfgjceZCFFVsWNopDcCVV9qu3FAUZF8nZVhFu%2F3sQZcD3JKsV8Pf34ZllosYHFd4AZM4fSaTxPKli3D%2Fc%2B%2Ft01N4X5WoX3EQ9Qmm%2Bx0MjuT7bn%2F33TOqZ12Bt2NyqU165jz0qXArjb69VH9rwg7aK726E0aSDAZ2IMUm4SjONXNDuPAqPR24oSNwv8uNm4scJ5gQgs%2BY88jVeFOPO%2BFgAICouo5OTidOFBYziy8nT4Gw3mxVLKWsO6TzeUNyxo4DBoNbc0UjU0TDhIFOwREMACFRtvVrId5O5%2FGQcVk4vHgXm8WGsDZxPPARZ15pvqp4BYQVlIjsGrpnFz29u42Ycl5AbolBgu8gP3DQ5QCtjN3mYuWId6EgtLWAko5kuI5aYhSgcbtqR15tKH3gFzhsV9YzDvhs3JBjqkAW2Sg67Tx5goT2im5J4BT%2B9g0RQ2nPBPXXvHnTvA19HPhynv%2F%2BHeQqY3l8vzgx5JtVs9XO%2FaXyySyeMgSZF45iuSc%2Bm6R%2FtMJKGDMC%2Bvg8Rxj%2FASgnp5%2FlDZeOiYmCR0Y7%2FTrv1tfxBth5lRzDs6rQ79%2FbQ9ffSFcW7dMFVxdm6tuzmfGJSqCvvXwXvlX96E54a05R5dyK5%2F5OwqqRGQDnHgulq7&X-Amz-Signature=55414f346856ad70439e6b65adddc5baf007283ead70fbaa87859b3bb6de573f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667724PONV%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T222659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxsb4hoV%2FvmLav2AAWUp92%2BWwCsCasP2gkgukKCZV8lgIhAN6XizZBo4VZW%2BMQHKbP995lm0RHW6hlgXjB4EGC66ncKv8DCGYQABoMNjM3NDIzMTgzODA1IgyorvUyXLrQDxXFBJ8q3AMDkKvaby%2BmmXkBx6k9vnd0K6zx4cAojn6xgzEeukerTjCpJHLcfJbrox36aTeX1BIUeG9Z%2BlZEHceUZrChQW2kWeaFQeNw5if%2ByVYWJq4jHZyDcpPKUUu59FW%2BFb%2FH5ZMI9NN0RfHuqIOcpE1TK4naRYtA%2FK0tSNBXUxdRmJ%2BnxiBjRtsbdjvcI18ihbj1WO2IAmpO7glcU0H95XUQV9%2BkZveEwCfyEHlI%2FlBfgjceZCFFVsWNopDcCVV9qu3FAUZF8nZVhFu%2F3sQZcD3JKsV8Pf34ZllosYHFd4AZM4fSaTxPKli3D%2Fc%2B%2Ft01N4X5WoX3EQ9Qmm%2Bx0MjuT7bn%2F33TOqZ12Bt2NyqU165jz0qXArjb69VH9rwg7aK726E0aSDAZ2IMUm4SjONXNDuPAqPR24oSNwv8uNm4scJ5gQgs%2BY88jVeFOPO%2BFgAICouo5OTidOFBYziy8nT4Gw3mxVLKWsO6TzeUNyxo4DBoNbc0UjU0TDhIFOwREMACFRtvVrId5O5%2FGQcVk4vHgXm8WGsDZxPPARZ15pvqp4BYQVlIjsGrpnFz29u42Ycl5AbolBgu8gP3DQ5QCtjN3mYuWId6EgtLWAko5kuI5aYhSgcbtqR15tKH3gFzhsV9YzDvhs3JBjqkAW2Sg67Tx5goT2im5J4BT%2B9g0RQ2nPBPXXvHnTvA19HPhynv%2F%2BHeQqY3l8vzgx5JtVs9XO%2FaXyySyeMgSZF45iuSc%2Bm6R%2FtMJKGDMC%2Bvg8Rxj%2FASgnp5%2FlDZeOiYmCR0Y7%2FTrv1tfxBth5lRzDs6rQ79%2FbQ9ffSFcW7dMFVxdm6tuzmfGJSqCvvXwXvlX96E54a05R5dyK5%2F5OwqqRGQDnHgulq7&X-Amz-Signature=bfcdc75ad6e0f2718833fcc9c79d847c4df761cea6c00cbc8e83f53f079a7f00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
