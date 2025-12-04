---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z72DIDZ3%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T025725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCGPWv3lRzJRWcEGD6roZjhZyDCWBuq3qmnTUmZccF4tAIhAPWbSiWaHfGMV5ke0eMLzGfZvD1Jac%2FEQ1BnmRKtXZDHKv8DCDsQABoMNjM3NDIzMTgzODA1Igx4WItcmUwD%2F5BWgloq3APWTqS6kozW%2BCMZvIfoOPMhSgneVWjcWW6GxCUl6x6wjSRRLspTkX9sDTMvu9LR8xvwlOOQXjTzpyu%2BjkQL%2B7aB%2B0SbdpDWdzDQ%2B4juhvhxNva5NGXcnHjkvIKDX7mGXD4PFZzrjkGKyDGFhc%2FhY6lT6H3htlndVf7gu%2FSvjZHl8ECym3UG%2FKxu8SOPwHnB5GSEYmvmxk3WUQQV%2BTYXC5LCXAF6PZVD0QguQ09FYMWbY9necHrf3pI7O96AgMc3PLiAOrA6INsDE59jcy6ccYo5qu0m9QYSMCrqFK7aZHDPva0fgpvMiq7eGAIsP2hFWHtb1Nl%2FGLwqUP9Ii6U14B3qS44iLOQCG87%2Fw5ZlUD64O6yZWnkEX4pATjlA1egtw7pyGCfu12Wqsp%2FnNRrGUhWEV45xO6S4z%2BgmQLMuRhGgxdlh362fukbcUdDAR6f7NpEY1ImdXPVMAMkmKzklmuW7IPFWkLCCn0WUPYX0fJNVE9vhGFvE%2FiPEZWIVUeLENyehKUfzuc3Z5zgBbGhgBk8cLOJW8y%2FOcqxi%2FTVXKC%2Bp4BxDkurYhKaVjjRTFL7K%2FMWY4Y8ToBbPqCwtRFpoCUvA9hoJ%2FZ3yjc2PW%2FPii5m9kh8CU9bUduOD1C95xzCz1MPJBjqkAb3A9o9V1Sz2Sv%2FKzhuKD%2FRpxcaxsjA%2BqtsrRqnMOlF5VJ3m6ZWEfmCo2Gql1x6NiZGcesdE8uRqrLBmpJVB2WtZyi63JaevNO7klZvIVdEEh4FU4kJUQHKXjsdJsPVoqlu77oBRyr6UW8FXqPYQGUc%2BtWO9OtgcGOBFqN4DqGbKAUG5Ks6G4B2fvhNBr8V4Jpj%2FVxTCRE%2Fgts%2BSTrjmnKyOXsfL&X-Amz-Signature=96062efb38b388883d1b47724d5f1179a2207e003e21501ea91d87a25b845a1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z72DIDZ3%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T025725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCGPWv3lRzJRWcEGD6roZjhZyDCWBuq3qmnTUmZccF4tAIhAPWbSiWaHfGMV5ke0eMLzGfZvD1Jac%2FEQ1BnmRKtXZDHKv8DCDsQABoMNjM3NDIzMTgzODA1Igx4WItcmUwD%2F5BWgloq3APWTqS6kozW%2BCMZvIfoOPMhSgneVWjcWW6GxCUl6x6wjSRRLspTkX9sDTMvu9LR8xvwlOOQXjTzpyu%2BjkQL%2B7aB%2B0SbdpDWdzDQ%2B4juhvhxNva5NGXcnHjkvIKDX7mGXD4PFZzrjkGKyDGFhc%2FhY6lT6H3htlndVf7gu%2FSvjZHl8ECym3UG%2FKxu8SOPwHnB5GSEYmvmxk3WUQQV%2BTYXC5LCXAF6PZVD0QguQ09FYMWbY9necHrf3pI7O96AgMc3PLiAOrA6INsDE59jcy6ccYo5qu0m9QYSMCrqFK7aZHDPva0fgpvMiq7eGAIsP2hFWHtb1Nl%2FGLwqUP9Ii6U14B3qS44iLOQCG87%2Fw5ZlUD64O6yZWnkEX4pATjlA1egtw7pyGCfu12Wqsp%2FnNRrGUhWEV45xO6S4z%2BgmQLMuRhGgxdlh362fukbcUdDAR6f7NpEY1ImdXPVMAMkmKzklmuW7IPFWkLCCn0WUPYX0fJNVE9vhGFvE%2FiPEZWIVUeLENyehKUfzuc3Z5zgBbGhgBk8cLOJW8y%2FOcqxi%2FTVXKC%2Bp4BxDkurYhKaVjjRTFL7K%2FMWY4Y8ToBbPqCwtRFpoCUvA9hoJ%2FZ3yjc2PW%2FPii5m9kh8CU9bUduOD1C95xzCz1MPJBjqkAb3A9o9V1Sz2Sv%2FKzhuKD%2FRpxcaxsjA%2BqtsrRqnMOlF5VJ3m6ZWEfmCo2Gql1x6NiZGcesdE8uRqrLBmpJVB2WtZyi63JaevNO7klZvIVdEEh4FU4kJUQHKXjsdJsPVoqlu77oBRyr6UW8FXqPYQGUc%2BtWO9OtgcGOBFqN4DqGbKAUG5Ks6G4B2fvhNBr8V4Jpj%2FVxTCRE%2Fgts%2BSTrjmnKyOXsfL&X-Amz-Signature=8d569c03f214e8e615af98fe34f1b97e271a5d42a048254daf41df417652334e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
