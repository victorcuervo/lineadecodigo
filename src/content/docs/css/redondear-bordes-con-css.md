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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKZS5XKU%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T013818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIBFJaNJ3UZps1IVmoi8e1e%2FTK0oQ9U2BuNt5hdDKkQl4AiB0jk%2FBEndapavUNkynK%2BJ8Bsjdp0WtOG0YN%2FOwOiPmZCr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMFUL2r31wqq7P%2BPWhKtwDLsITHsMQGeR0SVFnREcHUJIMP65pu0fKFlCk9FjnSdIjkj4EFmXIno0qErXP%2FRC%2FbljpBiunnNWGED8KanhPlcxEoS4koTtIwWWUBJfn9yBh%2BtYx%2Byx9D14RN9wNaEUYhh2oGtwgDmQw7ydMca2%2F0rDlZw5hWiRI%2BTrv8hUqFEPCp8WPESwYGCoUU1rI2SK0J4y621joBlysCcJhjy7XGZoPzzNdN9TwJqWTRfO6VPCj7h4jSn2kncWWB%2FI%2BedcMnF%2BvuMpkUzQux9E6ovGbada2O0WZSGUBLfhxS7t6UPVGrySL9a2wkgtIBC721OY66LryGhk1octk7tKZjQhi8Y1%2FgKHKdQVFzDhNitKFFauvD8ypF%2BwS21okc79pwKyUKq1PQL4fF58s47%2BNIu6EFEfMUG5oh6w8cRy%2B3cqPMAuJ95UqMzZH8HfRQtLdHt1SC0FeD9Ba39gwt794GeyFqRNyLL7JSSNU26FaAjaJkONr%2BjZTTKTEtHQoPCbtkTTfSv6mrTSllQXmapdkUteINvYKHMnbMhkggsU3LyCdVL1IBmECs9ovufywhcYtt3i37oIPQko36dWordfgwOE7ltv4roCxr98b1BWZ0ZHmaYDYjDYkwvrQCW%2FJtAswlbTDyQY6pgEbaYY%2FyvokBZB%2B%2FwgNLtdU%2BYt9J4BKkVdpT5W4UhVu5591C7i8Q1qpg1FeGORHiJ1jIDrfD1%2FansVUjZ7oxoY3DBTEmvpp7YLn%2B9yToi9%2FdpoNawrD2NUAfdzlk3s8d5KLD2cLrFxKsuSBVVAVipUMMGB4ruxeEx4IWI42AKQemI%2FvYcKs7enZjfH5HeqPpOJEScoEG68L8D1Hs96EF9TThQtoQdfW&X-Amz-Signature=7d78edc5b4297a2ed66fadccf8eb57057273d92048857331c306ba1273673f22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKZS5XKU%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T013818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIBFJaNJ3UZps1IVmoi8e1e%2FTK0oQ9U2BuNt5hdDKkQl4AiB0jk%2FBEndapavUNkynK%2BJ8Bsjdp0WtOG0YN%2FOwOiPmZCr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMFUL2r31wqq7P%2BPWhKtwDLsITHsMQGeR0SVFnREcHUJIMP65pu0fKFlCk9FjnSdIjkj4EFmXIno0qErXP%2FRC%2FbljpBiunnNWGED8KanhPlcxEoS4koTtIwWWUBJfn9yBh%2BtYx%2Byx9D14RN9wNaEUYhh2oGtwgDmQw7ydMca2%2F0rDlZw5hWiRI%2BTrv8hUqFEPCp8WPESwYGCoUU1rI2SK0J4y621joBlysCcJhjy7XGZoPzzNdN9TwJqWTRfO6VPCj7h4jSn2kncWWB%2FI%2BedcMnF%2BvuMpkUzQux9E6ovGbada2O0WZSGUBLfhxS7t6UPVGrySL9a2wkgtIBC721OY66LryGhk1octk7tKZjQhi8Y1%2FgKHKdQVFzDhNitKFFauvD8ypF%2BwS21okc79pwKyUKq1PQL4fF58s47%2BNIu6EFEfMUG5oh6w8cRy%2B3cqPMAuJ95UqMzZH8HfRQtLdHt1SC0FeD9Ba39gwt794GeyFqRNyLL7JSSNU26FaAjaJkONr%2BjZTTKTEtHQoPCbtkTTfSv6mrTSllQXmapdkUteINvYKHMnbMhkggsU3LyCdVL1IBmECs9ovufywhcYtt3i37oIPQko36dWordfgwOE7ltv4roCxr98b1BWZ0ZHmaYDYjDYkwvrQCW%2FJtAswlbTDyQY6pgEbaYY%2FyvokBZB%2B%2FwgNLtdU%2BYt9J4BKkVdpT5W4UhVu5591C7i8Q1qpg1FeGORHiJ1jIDrfD1%2FansVUjZ7oxoY3DBTEmvpp7YLn%2B9yToi9%2FdpoNawrD2NUAfdzlk3s8d5KLD2cLrFxKsuSBVVAVipUMMGB4ruxeEx4IWI42AKQemI%2FvYcKs7enZjfH5HeqPpOJEScoEG68L8D1Hs96EF9TThQtoQdfW&X-Amz-Signature=c1f07e0de76eb6968fa7d4a8c6a4d7d11b6c0a716cbce4f35e837cf7e0fc4bd4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
