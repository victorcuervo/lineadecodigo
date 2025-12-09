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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCZE43EL%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T003731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE5R2q5WayOhoKjojeU8R9X%2BPSPOOUVGhWMSqjk6h3xjAiBxFEwgzWnSB7KEoBTxw41wOvg1usje8PrThDFpqZSxFyqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTOjZpprTb2a0Z6tyKtwDdRFU8GkgiUrGL7v7uTUUIjVis15Vur9%2FlupbsZMjXPjYLHoM4cs7iplaqFiOQjL8hdHezTh6vJ6SMZUuPSB%2BPF15ZQMStDy7AdLLgSXhKZK9L86JCRYRO7ay1tmVoE4LtP3mtKMueYSAWAIYLpqNUSi1zQg6CvqUBaHvGTs26%2Bksbf5BzoVrxZyQqjenfTZHW5F5S1t3tn4e%2BkYE3Fdd6dBFKXtVx8nH3WnIJkikAYlEf3JNK8qLsMJ8eIUiuFuRUEcl1mN7AajgK17Gx731laeVpJ6WMjyBre%2BCC%2F1HDkuEh68YB9LxIz%2Fla9xmKzaVYdu09iyL3DmAmIZb9roV7PvLR354pmeBnITKeagshZuKatYx%2FISTWWkaYB3W6I04p6thFIvRLBXuXoBt05Vp%2BlOLKo5qGhQzvpUzMBvTHs1XESAV7Iw0mZEsEk33bZWJlkfFKBLh3SrSTArk04nuhgFMALDXQ6zrwEcKueJCOn7wqZFfjxjQnJtdfBOeJEB%2Bj2xwGNnNTibvbhS3a5pz0Ye9Vl0kA%2B5T3loPzfQHgvIpIkRFCffuopaWvQRAUQcQupcbRviJHllZ44Fvp3xpbK4f0SuK4B5ffG4CSqcZTnm7RPTFUaW78ymXxEwwrMLdyQY6pgG3bWjK0B4qr1b1NEOONx5qmZMn2d2U7YdBMuz2SJHccYeDlfH3%2FScC%2FKwSzyCB7KXxdMc8BYozmDSnluY93YiTsm0mh%2FTbICXLrJ1k%2BwiKLFUn2djuI7prSPXQLY8Z5OiwhfejoFhZli%2Bdm5mB99VReGtGxSqw6%2BXbdICHqTeiK359QyYR8rixj4IDw6phvSeeFDpgXzSVR2%2B%2BikBvF0xJBw6qkC%2Fc&X-Amz-Signature=46bd7bb492a1b28af2973838e4ad5398803be975eed03bbe7d2fd2736236a676&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCZE43EL%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T003731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE5R2q5WayOhoKjojeU8R9X%2BPSPOOUVGhWMSqjk6h3xjAiBxFEwgzWnSB7KEoBTxw41wOvg1usje8PrThDFpqZSxFyqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTOjZpprTb2a0Z6tyKtwDdRFU8GkgiUrGL7v7uTUUIjVis15Vur9%2FlupbsZMjXPjYLHoM4cs7iplaqFiOQjL8hdHezTh6vJ6SMZUuPSB%2BPF15ZQMStDy7AdLLgSXhKZK9L86JCRYRO7ay1tmVoE4LtP3mtKMueYSAWAIYLpqNUSi1zQg6CvqUBaHvGTs26%2Bksbf5BzoVrxZyQqjenfTZHW5F5S1t3tn4e%2BkYE3Fdd6dBFKXtVx8nH3WnIJkikAYlEf3JNK8qLsMJ8eIUiuFuRUEcl1mN7AajgK17Gx731laeVpJ6WMjyBre%2BCC%2F1HDkuEh68YB9LxIz%2Fla9xmKzaVYdu09iyL3DmAmIZb9roV7PvLR354pmeBnITKeagshZuKatYx%2FISTWWkaYB3W6I04p6thFIvRLBXuXoBt05Vp%2BlOLKo5qGhQzvpUzMBvTHs1XESAV7Iw0mZEsEk33bZWJlkfFKBLh3SrSTArk04nuhgFMALDXQ6zrwEcKueJCOn7wqZFfjxjQnJtdfBOeJEB%2Bj2xwGNnNTibvbhS3a5pz0Ye9Vl0kA%2B5T3loPzfQHgvIpIkRFCffuopaWvQRAUQcQupcbRviJHllZ44Fvp3xpbK4f0SuK4B5ffG4CSqcZTnm7RPTFUaW78ymXxEwwrMLdyQY6pgG3bWjK0B4qr1b1NEOONx5qmZMn2d2U7YdBMuz2SJHccYeDlfH3%2FScC%2FKwSzyCB7KXxdMc8BYozmDSnluY93YiTsm0mh%2FTbICXLrJ1k%2BwiKLFUn2djuI7prSPXQLY8Z5OiwhfejoFhZli%2Bdm5mB99VReGtGxSqw6%2BXbdICHqTeiK359QyYR8rixj4IDw6phvSeeFDpgXzSVR2%2B%2BikBvF0xJBw6qkC%2Fc&X-Amz-Signature=e011c669e97fa9295688be466e0b44a380c6454f6ed29ec1bf5ff801328136ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
