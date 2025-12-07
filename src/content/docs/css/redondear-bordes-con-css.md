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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677M3YW6T%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T140238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtXsXOowWgqfitE1Adsccc4H8OqZyMrOm4oXgF5ZdKlAIhAK33PKtsQN31UOX7vRHrZ8R5RlWC5BzmdsDwPgoHN%2BV9KogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyWrVIJhBDCU4SXiSIq3AMg9ZBBMQxYPkSX1d9RfgTTW3GrHEXtQy3%2FdXR1Rdfk%2Bp082ZcEBHCmTYxmbmgPHPzNosALSJpcstr6tR811CVSH%2BbZiFhCOS0fv2P6XbhRhNyKY0WCcfpOc9GWNgsVrKmIua%2Bmh2ghT5A7zuJQMgoat3PJQfC%2B52ObXfzO%2F5USA%2FOYRq1cZMrMV3x5%2BWeLeqrm9dwFDX8WrntSFUNQjJAUNlC9RtbEgrQP5x3hGflrFteT10O%2Bi9l3E1Tf16Zs0dceWFVErZghmXi7rf8kMeOtd0ZUCu5WtXsx8QejcZWujg049LIw2Yg6%2BrN%2BOeH9TWiiKiOzUN8GNL7FVGYmBb0Smyiz7bapWT7Ku0JedCPvteRaVeJBrNKIOuYZGkbiPJ4d8UdTFtmWJbm4uYdcqer%2BDgQ5Q7GzTYh7nthLz%2BKOOeOUeapkw69K9j7U6PwVnebGA9q7nmozvswpcxUvN7Ay%2F7bJNVmqr9jXhIno8D3Tjnn7Sd3Kr6PStAflD9LHykpTaQCassYVKIX%2FohGlBZViSU6OTUcFgjM0KQmcaHDIRKremCL3TQYG1ZSGsgwgGMDmiJzJipIhOPeQ4%2FT0YX%2BXPVtmckayBWN5PjmuRTLyASKMTNOtiDAa7ZvmhzCAm9XJBjqkAcT4dExZh1ipBF7ADHl4tBfyqwYsTtzYEqhi%2FpTav3WL2cYeFWqbumlIWNUUDsG5UrHs7kl6P%2Bzmc2HgM3JJoM6F6DiDnVWtB0VoDhi2tkkALfR4XSS6pzXMZ3h5iSY2Y29USp9ek6VibMBZKKldjQnp%2B4NhM86CENdd8isFyD%2FwGgpqSAEcInFFcDv8tJxJbusDadFQ8edQucOv1YP%2BDCBavxRM&X-Amz-Signature=754de12b8eb80d27061816127228255a5ebc1c05392b7380982d6fd9894057b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677M3YW6T%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T140238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtXsXOowWgqfitE1Adsccc4H8OqZyMrOm4oXgF5ZdKlAIhAK33PKtsQN31UOX7vRHrZ8R5RlWC5BzmdsDwPgoHN%2BV9KogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyWrVIJhBDCU4SXiSIq3AMg9ZBBMQxYPkSX1d9RfgTTW3GrHEXtQy3%2FdXR1Rdfk%2Bp082ZcEBHCmTYxmbmgPHPzNosALSJpcstr6tR811CVSH%2BbZiFhCOS0fv2P6XbhRhNyKY0WCcfpOc9GWNgsVrKmIua%2Bmh2ghT5A7zuJQMgoat3PJQfC%2B52ObXfzO%2F5USA%2FOYRq1cZMrMV3x5%2BWeLeqrm9dwFDX8WrntSFUNQjJAUNlC9RtbEgrQP5x3hGflrFteT10O%2Bi9l3E1Tf16Zs0dceWFVErZghmXi7rf8kMeOtd0ZUCu5WtXsx8QejcZWujg049LIw2Yg6%2BrN%2BOeH9TWiiKiOzUN8GNL7FVGYmBb0Smyiz7bapWT7Ku0JedCPvteRaVeJBrNKIOuYZGkbiPJ4d8UdTFtmWJbm4uYdcqer%2BDgQ5Q7GzTYh7nthLz%2BKOOeOUeapkw69K9j7U6PwVnebGA9q7nmozvswpcxUvN7Ay%2F7bJNVmqr9jXhIno8D3Tjnn7Sd3Kr6PStAflD9LHykpTaQCassYVKIX%2FohGlBZViSU6OTUcFgjM0KQmcaHDIRKremCL3TQYG1ZSGsgwgGMDmiJzJipIhOPeQ4%2FT0YX%2BXPVtmckayBWN5PjmuRTLyASKMTNOtiDAa7ZvmhzCAm9XJBjqkAcT4dExZh1ipBF7ADHl4tBfyqwYsTtzYEqhi%2FpTav3WL2cYeFWqbumlIWNUUDsG5UrHs7kl6P%2Bzmc2HgM3JJoM6F6DiDnVWtB0VoDhi2tkkALfR4XSS6pzXMZ3h5iSY2Y29USp9ek6VibMBZKKldjQnp%2B4NhM86CENdd8isFyD%2FwGgpqSAEcInFFcDv8tJxJbusDadFQ8edQucOv1YP%2BDCBavxRM&X-Amz-Signature=28d1d2d56e882570dc5591452247b59ad7868a7a1e5365d926fa965e1f39b800&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
