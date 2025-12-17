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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCFOCNKH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T002813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFbfe8oUmrduCfMIBpdrdm8jpGsuWAyCT0YuFmx3Q11nAiEA2%2FNF00jrm14g98foauRDwlA0WFDPpSKD7mFgqno0lE8q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDK7FpRLXrwsfAvrdEyrcA5nTMqCwP4X1ore1Yo%2Fygp5Pw9IDCfUQD9qKF6RfFTnO2joOSJI843L4BGUbRQAURxM2gh4p3%2Fgp4A1beMB4Wt%2FqsDkJrqHzAdRbooaHbf05Ve4RuZbaWnNo9HYzRsqpLo65cH73yodm01Y6azuUMJr9tgj1znKBp860CbHExi%2BBDFF3je9E%2FLzrvMMIMpeipCz6qMRugfikzfA%2FLekf4r8AydqkMcijRSRwrafeSwjsL8R41tdbDtD%2Bt6uG8Rn7KT1qBEI8%2FSoQ4coVrrtFlTd4zNXiLBod2mA7Po9MZHNd8mM4zJMnlKywkT4EqfI90n6fPrwWGjXR98NuKUGESKe8gu2j0mODzLdQUtrGzFjA5wqLfbGiPUs%2FtOrthy%2FgIT8RyjBtP64Jzr31O%2BihIa%2B6rHYlWCgeGuduOytGNfHL6mtKPWO3TUWrvcCQvuWeY9kA7ResPcPYh5p%2FPm0incTox12FvOZugziXiiixwc0qI9HSkfeqyT6YuvpGQp4vvv3%2BF%2Bim1sBV%2B52VMY2YUnbo5crvqooUxzmdzQhhBnGcDjeiMAPVkyLKg4HvpB8DQsYvTieO0Hset3FgVdSTGNIB2cnC%2BVHLd5Aiic6oTPTxVrykXILsEBo%2BYkVxMMzeh8oGOqUBpaLx2nBHtHX4Pr88XCD0xGy5F34NbKMQ3ktrRwkXHfL5z%2Ffm5DHrf8qGXHB4x4C6Mdw6vQlJqqtEwMQt6OB6D8jfWqP0e9tUmJ7IJOmKkWDUNTqpWAaFISGknhi1EzCHqA%2FHPZrkg%2BWexoDTUQunAfQYWuTgzoXcllzOehvjzt%2BgXzwyOUFxkOtGUphzfQLG96yWdSzBU2w9GmmTfB9Xz4scE4vL&X-Amz-Signature=f0a83d2a21223087beb69cb8541db302582acd704f49bb7953258771546d856c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCFOCNKH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T002813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFbfe8oUmrduCfMIBpdrdm8jpGsuWAyCT0YuFmx3Q11nAiEA2%2FNF00jrm14g98foauRDwlA0WFDPpSKD7mFgqno0lE8q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDK7FpRLXrwsfAvrdEyrcA5nTMqCwP4X1ore1Yo%2Fygp5Pw9IDCfUQD9qKF6RfFTnO2joOSJI843L4BGUbRQAURxM2gh4p3%2Fgp4A1beMB4Wt%2FqsDkJrqHzAdRbooaHbf05Ve4RuZbaWnNo9HYzRsqpLo65cH73yodm01Y6azuUMJr9tgj1znKBp860CbHExi%2BBDFF3je9E%2FLzrvMMIMpeipCz6qMRugfikzfA%2FLekf4r8AydqkMcijRSRwrafeSwjsL8R41tdbDtD%2Bt6uG8Rn7KT1qBEI8%2FSoQ4coVrrtFlTd4zNXiLBod2mA7Po9MZHNd8mM4zJMnlKywkT4EqfI90n6fPrwWGjXR98NuKUGESKe8gu2j0mODzLdQUtrGzFjA5wqLfbGiPUs%2FtOrthy%2FgIT8RyjBtP64Jzr31O%2BihIa%2B6rHYlWCgeGuduOytGNfHL6mtKPWO3TUWrvcCQvuWeY9kA7ResPcPYh5p%2FPm0incTox12FvOZugziXiiixwc0qI9HSkfeqyT6YuvpGQp4vvv3%2BF%2Bim1sBV%2B52VMY2YUnbo5crvqooUxzmdzQhhBnGcDjeiMAPVkyLKg4HvpB8DQsYvTieO0Hset3FgVdSTGNIB2cnC%2BVHLd5Aiic6oTPTxVrykXILsEBo%2BYkVxMMzeh8oGOqUBpaLx2nBHtHX4Pr88XCD0xGy5F34NbKMQ3ktrRwkXHfL5z%2Ffm5DHrf8qGXHB4x4C6Mdw6vQlJqqtEwMQt6OB6D8jfWqP0e9tUmJ7IJOmKkWDUNTqpWAaFISGknhi1EzCHqA%2FHPZrkg%2BWexoDTUQunAfQYWuTgzoXcllzOehvjzt%2BgXzwyOUFxkOtGUphzfQLG96yWdSzBU2w9GmmTfB9Xz4scE4vL&X-Amz-Signature=899a5f7dd5838b3d070b7636d67539dfb89be9fa8e5e85fce2be43c2e75e0ae4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
