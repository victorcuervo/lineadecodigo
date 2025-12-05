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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V325UXDK%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T180328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC454dtLluxu600PVHAgRQ%2Fqu0RxL9sMNBDQGA%2BtBdfzAIgECBTlikYtWjCe7y5AphP42njKhJAdhgqB3ikLqW0BC0q%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDF5x8g1mnVPhKLwljircA95n81NoE%2FLTOlQsqArHRJkLfXDCuYwhSetdqa1y4bhNBB9s2VZh1FddVQEH5SYBVny5i7OYpQQMaSZ4orTR8JGamp0B%2FGRFIDHvAAdZpDArRnAVHl73WRVSpFUAA85aAGMyYKqEwxeP1%2BVxaMlepPHoTJVgFeUNFPhOSEKmS0GIMQGnt49biBxFsThLcWijEMCsY%2BVqAp62F4lYvjK%2FUS54jbGNOFg0sM2mksFD2p19kc131abYwYje6yQ46Cu2Fdrp7saiMEYtB2%2FdFO8D1SHQb39Ps54s0C%2Fuq%2FZhRtZXRUqqUujnDZCAIPjIEflb5Q187w21s806NdCVO0AAa7q4BOUAHVhyjnnL7jjMjSe3TTnQsy0%2B2%2BthJvXM87FbaOIDlN%2F0b4J%2B9MRFPkcw%2FGZ5dim4HQzyoVGIXZEoYgrjBtu7RMKK4eSLd%2BTSf3oN1H71cQfKZXKofxyvlO%2ByqOISqLmeZnkkwXeWW2yhWmeKUSgQMwgl1wDI1XAiqHI7iIKQHwXBl5TFjbC%2FA6o3SXZU38xag3K55TLEcX3YAe7t8J7uD8qGIn2bdDZ5G0L3USYlJJ8tbh83scG86ojJUOWi5TV3DUeegPQduLhqY506SW%2BNBOlPZHS%2FEegJMP%2Fty8kGOqUB60lppTG8ZyVjM%2BMPzBz9YIur%2Fo5TohuSmll8I8E%2Bef520P5kMRQoPB%2FrxO8mNCQKExi8ditRXFTqg%2Bv7lqVEOxOEum6MXGNIy7Iimxwi1s%2BScHilyJHDEatUe72PGjo7f6pG3c9qEv7BxPWmy%2F%2BuarLK1m9NpSjCDwnIlspkS0qWPE2Smx%2B1SxJlVBEgKH8i8kLm7qDphUejzMuJM18nB%2F4pwVVg&X-Amz-Signature=b471f4c91ae74e823e4419c6087f27b6934d2ce5327a87b0d2f0d1b024602447&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V325UXDK%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T180328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC454dtLluxu600PVHAgRQ%2Fqu0RxL9sMNBDQGA%2BtBdfzAIgECBTlikYtWjCe7y5AphP42njKhJAdhgqB3ikLqW0BC0q%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDF5x8g1mnVPhKLwljircA95n81NoE%2FLTOlQsqArHRJkLfXDCuYwhSetdqa1y4bhNBB9s2VZh1FddVQEH5SYBVny5i7OYpQQMaSZ4orTR8JGamp0B%2FGRFIDHvAAdZpDArRnAVHl73WRVSpFUAA85aAGMyYKqEwxeP1%2BVxaMlepPHoTJVgFeUNFPhOSEKmS0GIMQGnt49biBxFsThLcWijEMCsY%2BVqAp62F4lYvjK%2FUS54jbGNOFg0sM2mksFD2p19kc131abYwYje6yQ46Cu2Fdrp7saiMEYtB2%2FdFO8D1SHQb39Ps54s0C%2Fuq%2FZhRtZXRUqqUujnDZCAIPjIEflb5Q187w21s806NdCVO0AAa7q4BOUAHVhyjnnL7jjMjSe3TTnQsy0%2B2%2BthJvXM87FbaOIDlN%2F0b4J%2B9MRFPkcw%2FGZ5dim4HQzyoVGIXZEoYgrjBtu7RMKK4eSLd%2BTSf3oN1H71cQfKZXKofxyvlO%2ByqOISqLmeZnkkwXeWW2yhWmeKUSgQMwgl1wDI1XAiqHI7iIKQHwXBl5TFjbC%2FA6o3SXZU38xag3K55TLEcX3YAe7t8J7uD8qGIn2bdDZ5G0L3USYlJJ8tbh83scG86ojJUOWi5TV3DUeegPQduLhqY506SW%2BNBOlPZHS%2FEegJMP%2Fty8kGOqUB60lppTG8ZyVjM%2BMPzBz9YIur%2Fo5TohuSmll8I8E%2Bef520P5kMRQoPB%2FrxO8mNCQKExi8ditRXFTqg%2Bv7lqVEOxOEum6MXGNIy7Iimxwi1s%2BScHilyJHDEatUe72PGjo7f6pG3c9qEv7BxPWmy%2F%2BuarLK1m9NpSjCDwnIlspkS0qWPE2Smx%2B1SxJlVBEgKH8i8kLm7qDphUejzMuJM18nB%2F4pwVVg&X-Amz-Signature=21f3409c0c3c1f080f3d15102e4704408d8147cb9ecab2450ada938459537307&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
