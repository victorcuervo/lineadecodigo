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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LFXQUOG%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T053111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAKp9SEM0bkRmdQz%2BQF8nfBw2uqd5FLmbilNIKyXfU0BAiEAsfhDtxy%2BMr8bfOqbbM73x%2BS0TXvQH%2BhkugE6j7I2mvsq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDH2VuKgouCLNZSsInCrcA0hXbQf0EyJz7ta8aRoyx6qkwL5aNrCPfyA%2F4mKVRKtFuchTmzx%2FSOmmbCflsy2E7vZxBwedVePVP3wGpczeFXnzmAL06UUAiNhTrp4actXjds9fDl07aowD4opFunA%2BKwYAu0xioTTleFiqT7I169c3VlMh75qWaRMt3gj2nXrvJAU838AufLc6k%2FuaSaPhkl5PaySKYW8dFUSlaK%2BIWV0oKsW97pL6L8FDEpmOzwfUUXzr2o4dAiczJLhIbF4hVuTTbjyyTbvDiEeZGUYBHh2qTa3h1eMnQ2XlzQh9IqrluJ4MKHga3Rg0oSCKMtC9hkiFT8uMUwRw4neW4JgA7MYXddSzTT0Rip5S1wI9PNSAhLgn%2FbbVnQJ2flgUMXDaizN7Ji41WVILf7UsJy%2FC5o81ZUPjxR3kVHF%2B6ER73zpGwaXkPeTTyJ8cA6ans8hP904vG9r59TukQWRUg7pZGJHUBCwaj1e3cMAYhNx0GlUeG2CuJWx3Qc6Cx0s%2F7s%2BJE08zBFMHXq8xb22Ux00TwBrlj0gMxmcAKcdhURM8tms58yDB5Q88oa2jhwUtma%2BqsQBdGAqj1NAWwQk7hBns0aFEwgE7S1VXmoHLgNRjZ1ehkqpKpg4DCDF0nzKEMIPqiMoGOqUBM51pxEdA7sg0RoIzCWrKLhvSCIMHt%2FdscsDOeScR5X7DJzzsAbgFQCN%2Bs5gOq%2F%2F4vkD8eRE0vysZq6CpPlitlpEDJnyfeREXqOWw4RV4VR5uf3gvBCERtdOxt8%2BLXzTBSzrU%2B28JYscTJqReRu9nU0vXluJPOWZBWPCHZdUyXtqWyYiUgd3ySjQrrM1J9WE3bCraqNi6K7J9gNVeNT38m53mC1mU&X-Amz-Signature=1cbee06ce48761875a66b7e47d65ad2a8348774391305c8e9e103f9a9606d784&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LFXQUOG%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T053111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAKp9SEM0bkRmdQz%2BQF8nfBw2uqd5FLmbilNIKyXfU0BAiEAsfhDtxy%2BMr8bfOqbbM73x%2BS0TXvQH%2BhkugE6j7I2mvsq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDH2VuKgouCLNZSsInCrcA0hXbQf0EyJz7ta8aRoyx6qkwL5aNrCPfyA%2F4mKVRKtFuchTmzx%2FSOmmbCflsy2E7vZxBwedVePVP3wGpczeFXnzmAL06UUAiNhTrp4actXjds9fDl07aowD4opFunA%2BKwYAu0xioTTleFiqT7I169c3VlMh75qWaRMt3gj2nXrvJAU838AufLc6k%2FuaSaPhkl5PaySKYW8dFUSlaK%2BIWV0oKsW97pL6L8FDEpmOzwfUUXzr2o4dAiczJLhIbF4hVuTTbjyyTbvDiEeZGUYBHh2qTa3h1eMnQ2XlzQh9IqrluJ4MKHga3Rg0oSCKMtC9hkiFT8uMUwRw4neW4JgA7MYXddSzTT0Rip5S1wI9PNSAhLgn%2FbbVnQJ2flgUMXDaizN7Ji41WVILf7UsJy%2FC5o81ZUPjxR3kVHF%2B6ER73zpGwaXkPeTTyJ8cA6ans8hP904vG9r59TukQWRUg7pZGJHUBCwaj1e3cMAYhNx0GlUeG2CuJWx3Qc6Cx0s%2F7s%2BJE08zBFMHXq8xb22Ux00TwBrlj0gMxmcAKcdhURM8tms58yDB5Q88oa2jhwUtma%2BqsQBdGAqj1NAWwQk7hBns0aFEwgE7S1VXmoHLgNRjZ1ehkqpKpg4DCDF0nzKEMIPqiMoGOqUBM51pxEdA7sg0RoIzCWrKLhvSCIMHt%2FdscsDOeScR5X7DJzzsAbgFQCN%2Bs5gOq%2F%2F4vkD8eRE0vysZq6CpPlitlpEDJnyfeREXqOWw4RV4VR5uf3gvBCERtdOxt8%2BLXzTBSzrU%2B28JYscTJqReRu9nU0vXluJPOWZBWPCHZdUyXtqWyYiUgd3ySjQrrM1J9WE3bCraqNi6K7J9gNVeNT38m53mC1mU&X-Amz-Signature=2e8845f2345df2d3ea9cff2df2fde6ef6e13ada91c206e301ff0b1ff128d404e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
