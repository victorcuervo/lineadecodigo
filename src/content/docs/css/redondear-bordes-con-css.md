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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HGTR6AQ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T091724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGwM1uHf7QmNIvs2mQVqi58WKBTRHKHOxeBby573vPwDAiBLMCkfD3xvhVCsE5PlJi1JhNtuqTy6c7dcjqz%2BypMvcyqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDJQYgU%2Fs9tGMbpSWKtwD30f8liEHVqdenWOMG4hKyGfinGcXPTgRptg4iDFbdkt1eZnASBI8%2BI1c0RzxTnK1En4SZoKWsiZd5pgwTCuZ7x49tyBr1Xrmiro9SvUmGCHnJiZl14Fhof7g57XF%2BuJA3BQK2cvsfOU5aOJk2QCFhrnV5NFaLViNfYLFfJ3g5DvPWkb2RLY%2BBc0uxniOT9Bsuu0TcAKAj9qw4GY0q4O%2FpwR3B%2BDxOB7chJe1O0aqQRWZoYbQ9qFl96UyQ3OVY9I0qAn6LHqTaR5AyIvwuWlP%2FBf5AammMeBtMsUXmstw4GXIJmXFy5wuYUNFN3GzC54JCRKoOX2nx699PZbfJRIXzfdIsDWV6veVYIT%2FbFHHB%2FEkzGNyMvOhB2rIZ%2FASNDlC%2FMsY1w%2FVbxtGoNysPJM36iCiu398qTkqVYBVR8hME3JA82XIZZ%2FUb6XdD9p7CYfMca60uHPQRL4c7zFCXU1v2JFcxpPQgizaOaDWdyRDHigV3KXODROT%2BesYbHG8rR2debrclLINZlEtkckEfzZ3IhtGK0jyktdhyLzjMyCnnAo5Sw9K%2FZ4FeiTNMM4jgAETY2KrI129tR%2BB%2FfCDm3a0IXPNEx4bJDblzoMzpA%2BUlMPepb1U6FsWP9T9VSAwzp7UyQY6pgGzwV9iZFVT1dHn5fVWfHu%2B2kBwQIHONPYZ6U7%2B9bCuuhkWl00LXRrBt03CTNCkbypIKOozcTbxDgWaEcGugsxsickHQRWCBJgvgqP6HlvJAA1j7F7sQ5T9n%2BotgKxizD4FtFRUrV1Lb7V6ZaSFyNC7jAW71UnUPzkXOQPkkJB6vFAX7YFjPDZuTJV7oDzBKpsR6SiSjvpRcgeT21uzJkZ3WqonHocV&X-Amz-Signature=b6b35c9a86a75f0245f5a7434cea410a29f704969d4e0c85ee217e0ebd28d2a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HGTR6AQ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T091724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGwM1uHf7QmNIvs2mQVqi58WKBTRHKHOxeBby573vPwDAiBLMCkfD3xvhVCsE5PlJi1JhNtuqTy6c7dcjqz%2BypMvcyqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDJQYgU%2Fs9tGMbpSWKtwD30f8liEHVqdenWOMG4hKyGfinGcXPTgRptg4iDFbdkt1eZnASBI8%2BI1c0RzxTnK1En4SZoKWsiZd5pgwTCuZ7x49tyBr1Xrmiro9SvUmGCHnJiZl14Fhof7g57XF%2BuJA3BQK2cvsfOU5aOJk2QCFhrnV5NFaLViNfYLFfJ3g5DvPWkb2RLY%2BBc0uxniOT9Bsuu0TcAKAj9qw4GY0q4O%2FpwR3B%2BDxOB7chJe1O0aqQRWZoYbQ9qFl96UyQ3OVY9I0qAn6LHqTaR5AyIvwuWlP%2FBf5AammMeBtMsUXmstw4GXIJmXFy5wuYUNFN3GzC54JCRKoOX2nx699PZbfJRIXzfdIsDWV6veVYIT%2FbFHHB%2FEkzGNyMvOhB2rIZ%2FASNDlC%2FMsY1w%2FVbxtGoNysPJM36iCiu398qTkqVYBVR8hME3JA82XIZZ%2FUb6XdD9p7CYfMca60uHPQRL4c7zFCXU1v2JFcxpPQgizaOaDWdyRDHigV3KXODROT%2BesYbHG8rR2debrclLINZlEtkckEfzZ3IhtGK0jyktdhyLzjMyCnnAo5Sw9K%2FZ4FeiTNMM4jgAETY2KrI129tR%2BB%2FfCDm3a0IXPNEx4bJDblzoMzpA%2BUlMPepb1U6FsWP9T9VSAwzp7UyQY6pgGzwV9iZFVT1dHn5fVWfHu%2B2kBwQIHONPYZ6U7%2B9bCuuhkWl00LXRrBt03CTNCkbypIKOozcTbxDgWaEcGugsxsickHQRWCBJgvgqP6HlvJAA1j7F7sQ5T9n%2BotgKxizD4FtFRUrV1Lb7V6ZaSFyNC7jAW71UnUPzkXOQPkkJB6vFAX7YFjPDZuTJV7oDzBKpsR6SiSjvpRcgeT21uzJkZ3WqonHocV&X-Amz-Signature=fe21558a995902eb34d01b337014e3eb811ac0e2b10a48f17ca5636cd9f483ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
