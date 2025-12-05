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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3JCN4QQ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T144505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDak4LdKQHJOfJcGOOwx1EKAqNMbXi3sRvOnvYKU4e8BwIhAJOqcTJ%2F7wH9qWIosOsTfzWMzoUS7LnudnSOQ2XTjFKPKv8DCFoQABoMNjM3NDIzMTgzODA1IgxBimqpzeHq3OU%2FXVEq3ANGFwRtK1GKewLeOPU5rCDa6Gz%2Fa7rK6hzYVjl%2BId1qNV2wpw7dxKOoRF82H0cPZQX2WhduelGNWefGGGeoNFXXpjyd3gMX1QKnn2FEgaEj1aHhCBJZZE0Xl0a5sANHz%2Bjozw3bAoW3cTp%2F0TU1UogZ1o1TXlo3FspdwxxjV6xwQAxpPPsdSCYjCQ5afRnxqlY8lpPZSR%2BeSEh8c0%2F9r5grDBdSul%2BqiWuyigN4aDlxHQKAS5By2sxd6Kbw8%2BTQbBaTJuHa0bbuEIEwn86X7IGa%2FmvMooMcYFP9GhHFOgFPUvdrFwuNyKi7YoqB3k%2B9ZUaDILJ%2Bh24f9fjH6NWBrGR96inIr2XjO1hZA6TskZa0Dc6igh7w3akb93btWmbmvhQlLHUt85SAkE5BwugdPLQQN4MTCCJh%2BCA3BhIbeXNeLtCAAW8eCKaXL3VGT6U6sMXXoNtg5pMJ23ziw4GgsWUuv5U6KFRcvtBfFXJPVo81%2F2pMlISxA5Hb3Cqgbzrpnc4tZ74xR5GbbEaNUTeQE5Mg892k%2BkSklOyLQbfWqazTJI069pbpnZ1LeXWEKTyc%2BmsCQP8GlVY395qajTYlUCs%2Ftgn0dky3DqUf288O2GivPb6cSblHgVy1i6%2BGBTDpxsrJBjqkATBuLgRhyDdm7HkbpvLyVSUeZIgsVUUn%2BSXl6fiFKqGzBVDWO%2FweOaOnochb8as%2B80RXmJP3UaXEub4s1JKwpo2ZDdXalqeE94uU8%2Bg7kGAB5nxrxILmuQ4ef0nGt10RvnhaE58UrIgDJnMI4Ot25YsPgStvleZvAbO1Ei7OZFhwbaoBAu233JxSAXDjGP44IzvYjnjjLZIvFuKw60Ypr3CSJB5p&X-Amz-Signature=897d1b8a4f2ad0854453cf5b168909fca05e254c94cdb61e3ce919910f9fe659&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3JCN4QQ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T144505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDak4LdKQHJOfJcGOOwx1EKAqNMbXi3sRvOnvYKU4e8BwIhAJOqcTJ%2F7wH9qWIosOsTfzWMzoUS7LnudnSOQ2XTjFKPKv8DCFoQABoMNjM3NDIzMTgzODA1IgxBimqpzeHq3OU%2FXVEq3ANGFwRtK1GKewLeOPU5rCDa6Gz%2Fa7rK6hzYVjl%2BId1qNV2wpw7dxKOoRF82H0cPZQX2WhduelGNWefGGGeoNFXXpjyd3gMX1QKnn2FEgaEj1aHhCBJZZE0Xl0a5sANHz%2Bjozw3bAoW3cTp%2F0TU1UogZ1o1TXlo3FspdwxxjV6xwQAxpPPsdSCYjCQ5afRnxqlY8lpPZSR%2BeSEh8c0%2F9r5grDBdSul%2BqiWuyigN4aDlxHQKAS5By2sxd6Kbw8%2BTQbBaTJuHa0bbuEIEwn86X7IGa%2FmvMooMcYFP9GhHFOgFPUvdrFwuNyKi7YoqB3k%2B9ZUaDILJ%2Bh24f9fjH6NWBrGR96inIr2XjO1hZA6TskZa0Dc6igh7w3akb93btWmbmvhQlLHUt85SAkE5BwugdPLQQN4MTCCJh%2BCA3BhIbeXNeLtCAAW8eCKaXL3VGT6U6sMXXoNtg5pMJ23ziw4GgsWUuv5U6KFRcvtBfFXJPVo81%2F2pMlISxA5Hb3Cqgbzrpnc4tZ74xR5GbbEaNUTeQE5Mg892k%2BkSklOyLQbfWqazTJI069pbpnZ1LeXWEKTyc%2BmsCQP8GlVY395qajTYlUCs%2Ftgn0dky3DqUf288O2GivPb6cSblHgVy1i6%2BGBTDpxsrJBjqkATBuLgRhyDdm7HkbpvLyVSUeZIgsVUUn%2BSXl6fiFKqGzBVDWO%2FweOaOnochb8as%2B80RXmJP3UaXEub4s1JKwpo2ZDdXalqeE94uU8%2Bg7kGAB5nxrxILmuQ4ef0nGt10RvnhaE58UrIgDJnMI4Ot25YsPgStvleZvAbO1Ei7OZFhwbaoBAu233JxSAXDjGP44IzvYjnjjLZIvFuKw60Ypr3CSJB5p&X-Amz-Signature=c2929b919a42a6d78794181955445d12463a945fbc6f7099814c4f37a1f91813&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
