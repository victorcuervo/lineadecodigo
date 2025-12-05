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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HQM2UPJ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T234531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDO9I9oKZSh6EMfBPOhTJhRck7HQdEdiW%2BUPWPFafuTVQIgO45fo5mu3eX%2FsGWhv61vj16vdz64jBwpjCk9KZYIUCQq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDK1W1%2BjP8OCbHF8oYyrcA5OuLzq%2BSUAkdVzbUbua1o3c6zmYKmbfOD58QrbW3yd%2FWtoodZ8PYwJBg4tcYLSd%2F%2BZTw2mFor7v65ar%2Fihjc4Ep8NmO9p5sEOJXn3VSSy1VTjys%2F7iYFse7PnSeNYpC1%2F6GfmRK0%2FPj0g7j1sJp1%2BUBQRAb0OZ%2FKpvayInWnD9e89qlKgj084vwSmACrrnc2K8iBQb1VfIDTfnha12I7OxeeDYdMWSbLAlQbG92LI6E%2FrYAZokHsj8ZZgiGxnlJwcdAA%2BTyTjp4MqUwQ0qko0%2F0I0oaMVxhT0bTqoZLq86xFUvxzKjNw8zxpo6%2BFnLG4DioxR4UHOZc8znPEGQRNeMprJEs8Ymj0qmn%2BTEZLhuPu6iSjGS%2BvrUVxHE8lzqcJn%2FXpO61tJ2mJfOqzdWHtyiqfXR3Ktqxao3Ym4ektPR3fyUQT%2B%2FAllZU0ey1xzu0Wcm8e4dOwKC1S%2B%2Bnyjt2LF4h%2F0Fu1dgsh3UGwe4usY2HA6OjhYPzn3RhMmH9JZMHE%2BF0eL3nfJVErmNjYZg%2BK%2BsG%2BKEOx4Icu4rif%2BJXOtzvVf7Cmm3HiD0njjmxT3U5q7GvPC0HlIfZu9Mn%2FMkXYMs9l7E6rolTbrQ3yXCL1PKR339kzeikB%2BDJci2iMIrGzckGOqUBdbweuDXlBTiT8J6O4xZCMqyDFTM0E6%2FisRKdVQdkMLuFICDtU%2F7kOJiZTq%2FgseCjqGF8SbBZ6GxJPGiM1tsIRMPocjbwvllVmM4bpCA2qjP5CrUHEmU%2BePNLruuKYKUROL53OGeQjcWCbmjE3R7VecYLNwnCsLM5%2FSERXGg0ksPBl4iBTNanqtNMsvrnZ%2BwypB1Tjbez%2BX62vUfwsHxXzeMETAFd&X-Amz-Signature=ab68b1c199cc5b037e365e6f038099b145e32f7a6cee6ce1b65b4a9d0598a0ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HQM2UPJ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T234531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDO9I9oKZSh6EMfBPOhTJhRck7HQdEdiW%2BUPWPFafuTVQIgO45fo5mu3eX%2FsGWhv61vj16vdz64jBwpjCk9KZYIUCQq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDK1W1%2BjP8OCbHF8oYyrcA5OuLzq%2BSUAkdVzbUbua1o3c6zmYKmbfOD58QrbW3yd%2FWtoodZ8PYwJBg4tcYLSd%2F%2BZTw2mFor7v65ar%2Fihjc4Ep8NmO9p5sEOJXn3VSSy1VTjys%2F7iYFse7PnSeNYpC1%2F6GfmRK0%2FPj0g7j1sJp1%2BUBQRAb0OZ%2FKpvayInWnD9e89qlKgj084vwSmACrrnc2K8iBQb1VfIDTfnha12I7OxeeDYdMWSbLAlQbG92LI6E%2FrYAZokHsj8ZZgiGxnlJwcdAA%2BTyTjp4MqUwQ0qko0%2F0I0oaMVxhT0bTqoZLq86xFUvxzKjNw8zxpo6%2BFnLG4DioxR4UHOZc8znPEGQRNeMprJEs8Ymj0qmn%2BTEZLhuPu6iSjGS%2BvrUVxHE8lzqcJn%2FXpO61tJ2mJfOqzdWHtyiqfXR3Ktqxao3Ym4ektPR3fyUQT%2B%2FAllZU0ey1xzu0Wcm8e4dOwKC1S%2B%2Bnyjt2LF4h%2F0Fu1dgsh3UGwe4usY2HA6OjhYPzn3RhMmH9JZMHE%2BF0eL3nfJVErmNjYZg%2BK%2BsG%2BKEOx4Icu4rif%2BJXOtzvVf7Cmm3HiD0njjmxT3U5q7GvPC0HlIfZu9Mn%2FMkXYMs9l7E6rolTbrQ3yXCL1PKR339kzeikB%2BDJci2iMIrGzckGOqUBdbweuDXlBTiT8J6O4xZCMqyDFTM0E6%2FisRKdVQdkMLuFICDtU%2F7kOJiZTq%2FgseCjqGF8SbBZ6GxJPGiM1tsIRMPocjbwvllVmM4bpCA2qjP5CrUHEmU%2BePNLruuKYKUROL53OGeQjcWCbmjE3R7VecYLNwnCsLM5%2FSERXGg0ksPBl4iBTNanqtNMsvrnZ%2BwypB1Tjbez%2BX62vUfwsHxXzeMETAFd&X-Amz-Signature=f1819b8c33288cd92f055f77e07fb6203fcfc61fec2700f4fd7a808004c0e2a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
