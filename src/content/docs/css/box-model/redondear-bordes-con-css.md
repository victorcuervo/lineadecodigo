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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YM4TYTNM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T123331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfVAzjpPqDK1tMaTn6S%2BDv5K6YsWES87KMz9g%2F2QQ%2FHAIhALGrNHprQXS2UL1yqSYLUV6lmW3AYH7LWpTO6q%2B3MnwQKv8DCH0QABoMNjM3NDIzMTgzODA1IgziZglG%2FBa9DezZHdgq3ANxNNFJHnCyqVVY5UpVGdl8TNarzDOgGs8sxEAkbaWYQVkrHlI%2Bq3pI54VGFFR3TlCQgX79fH7W1ipKsqf8dLtRM0PvwtFXlRKSsVwA43C8foefbkidLyfFoidd3iiFLETA1OQo5SZMWZmNfK0x3FYHSNu5DvaTGOv4%2B74kQ4XrFFIAZojn2xYJHBjLJZ1%2FUuJ2hVw9JAG3oDerIBxe3VzIF7M84GuCyVofmidExk9NaNqJv49fCzooBIBSVfGYQQ17eh2ZI3f%2FAVd1boQM%2FWjLkcEh7B5Beba%2FxUj2WgklkNKVwEfbhveQJVgvEKEsAfzcxKaBZ%2BLEOowcooCcf2UezRzbvvSa6xAPRTEnUfkDS9trLTbZbgrtpSKccUFj9u0OjsCzHme6Y1iJNMSH93n6T05VG09%2FJm4%2FmOaPsXyXgFiuRepk4RbKvMW24u8asmM596U7DTGEK0De5Beznu9gOeZs4bDSgazLpO%2FrcXp3KzrxaECVHe3kQPvSgF6JLWOyWJsUtnyqQHDHq%2F%2BVFj4yCWzkYJZCJqHX76Q7eylF6XcciuSiOAePqRPnr36tFIZQAGrToltqjOxNQRKZWdtr8GboGZSa7LfVbjjZ5UNbpDb6790%2BADcDAu1k2zCAq4rKBjqkAVypO4j8eahmHEzswWzkWSSq8zuDACP7Zk1HuKQABThg5qlpazE6EmRfDl31%2BHbZ%2FXHHcW8HXnXN7Ix23fwFG3oa%2BBY1wBK56Xvu6kOSaTQjtSklsgRrhypa9Hohh7WKp%2FHXtZFkWues0wOoYGlA9RyqImGAZ%2FWO7tWv5EygavAcWHN6Z5JYfWMsQeY70JmszLXms1KXczsyW%2FyqNkNFU0R3R7Kv&X-Amz-Signature=796ec6383d60e69a79b9c9b50e0fd01476038e1daf04e36993029de70b0a7ae9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YM4TYTNM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T123331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfVAzjpPqDK1tMaTn6S%2BDv5K6YsWES87KMz9g%2F2QQ%2FHAIhALGrNHprQXS2UL1yqSYLUV6lmW3AYH7LWpTO6q%2B3MnwQKv8DCH0QABoMNjM3NDIzMTgzODA1IgziZglG%2FBa9DezZHdgq3ANxNNFJHnCyqVVY5UpVGdl8TNarzDOgGs8sxEAkbaWYQVkrHlI%2Bq3pI54VGFFR3TlCQgX79fH7W1ipKsqf8dLtRM0PvwtFXlRKSsVwA43C8foefbkidLyfFoidd3iiFLETA1OQo5SZMWZmNfK0x3FYHSNu5DvaTGOv4%2B74kQ4XrFFIAZojn2xYJHBjLJZ1%2FUuJ2hVw9JAG3oDerIBxe3VzIF7M84GuCyVofmidExk9NaNqJv49fCzooBIBSVfGYQQ17eh2ZI3f%2FAVd1boQM%2FWjLkcEh7B5Beba%2FxUj2WgklkNKVwEfbhveQJVgvEKEsAfzcxKaBZ%2BLEOowcooCcf2UezRzbvvSa6xAPRTEnUfkDS9trLTbZbgrtpSKccUFj9u0OjsCzHme6Y1iJNMSH93n6T05VG09%2FJm4%2FmOaPsXyXgFiuRepk4RbKvMW24u8asmM596U7DTGEK0De5Beznu9gOeZs4bDSgazLpO%2FrcXp3KzrxaECVHe3kQPvSgF6JLWOyWJsUtnyqQHDHq%2F%2BVFj4yCWzkYJZCJqHX76Q7eylF6XcciuSiOAePqRPnr36tFIZQAGrToltqjOxNQRKZWdtr8GboGZSa7LfVbjjZ5UNbpDb6790%2BADcDAu1k2zCAq4rKBjqkAVypO4j8eahmHEzswWzkWSSq8zuDACP7Zk1HuKQABThg5qlpazE6EmRfDl31%2BHbZ%2FXHHcW8HXnXN7Ix23fwFG3oa%2BBY1wBK56Xvu6kOSaTQjtSklsgRrhypa9Hohh7WKp%2FHXtZFkWues0wOoYGlA9RyqImGAZ%2FWO7tWv5EygavAcWHN6Z5JYfWMsQeY70JmszLXms1KXczsyW%2FyqNkNFU0R3R7Kv&X-Amz-Signature=bfa2324daeab0e12e97a28ec5a8fe81e7be62ae571127b91703c22fab1eec6ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
