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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNVQC4YS%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T033500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQD61IXq1cyOFAVqAnnGlANuyC48Fwdb%2BQztsdfXHVZUlwIhAK9Y58m3lc44dLQN4QRwvEquFz2GAtMLTpA8ex51lT8mKv8DCDwQABoMNjM3NDIzMTgzODA1Igz0IzvPI3K43ViUDyMq3APmZBPx6jr5VNt14oUTZqWElDFMfKvpWNHMv81pdtKoDKvrH0O%2FwEGeWVnl%2FuMi0JpXaLI8K29J%2FZj3Mec06KRP8Lk5nAlnW%2FKFqHPKM36h5yoSYnb5kjlU%2BsDSB9fkLJrQWHREgu994aEmB0fjzjVKo4FXrWOQ8Yjl74DVC%2B3F7BR7rW%2BpdA5vh3ZaWDQo7qz7dQmFDOrPfnxxE0LtTgobYsqF44V9D%2B6lCFY5haxnXDSoBf3j4%2F73dhlQDS4dCqS8YejBCt5ur3VL9zPLHtCvouKZdkeYFtKyJtsRdtOPEG2O33125iKbd0O14dodT2FUUTNq2owFv1w6DjljjVqXZOQx%2BJn1N10YWvZZEi5Rmy2Pj%2Bblx%2B1ntCCTDCT5qGtiZiUZaQxxy46GJwJqMglhQOkDn52FaQSCI0YiyXG9HJmX2vzg6Fev1T2UYcta7Wtrn5y8j46SMYbyqQ4dPHOlnxblorMhwO5LtBMTe6IIPrS6QawSv6N6j0tyWo92%2FimIWQYenBKMRleZ185oS437fzOu2gOClovcFlof15QCpuRI4L%2FjabXZFEGAwsmaCRTw8twlEDDqFrGS9SkiJSP34FeZNO9PTEynJtlr5JYU4elL3jtmdvx78janDTCq88PJBjqkAUQifLdHTJhWiJbFpAIMGjGMNZPKT%2F%2B4NMgcfQbrqxVIs5CQzdCtqjz05zlmxWrnEMIcWOymGExX4g9nXnE3SUubzUremxoAXcuADl04nR2GeupRKoej7Inke9ke8QE9d4WAdnxawx0%2BQwHvd0mNPBtw3iMbeejaT1KYONCE60hyff%2FKLotKGyzlYp7YjBmaZbY%2Fncts2YG%2Bhoq6fmvh3UNW9jmU&X-Amz-Signature=dcce3b6d68e3e1b0377ab47a1348ecd233402764097b122aac932819b50b52a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNVQC4YS%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T033500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQD61IXq1cyOFAVqAnnGlANuyC48Fwdb%2BQztsdfXHVZUlwIhAK9Y58m3lc44dLQN4QRwvEquFz2GAtMLTpA8ex51lT8mKv8DCDwQABoMNjM3NDIzMTgzODA1Igz0IzvPI3K43ViUDyMq3APmZBPx6jr5VNt14oUTZqWElDFMfKvpWNHMv81pdtKoDKvrH0O%2FwEGeWVnl%2FuMi0JpXaLI8K29J%2FZj3Mec06KRP8Lk5nAlnW%2FKFqHPKM36h5yoSYnb5kjlU%2BsDSB9fkLJrQWHREgu994aEmB0fjzjVKo4FXrWOQ8Yjl74DVC%2B3F7BR7rW%2BpdA5vh3ZaWDQo7qz7dQmFDOrPfnxxE0LtTgobYsqF44V9D%2B6lCFY5haxnXDSoBf3j4%2F73dhlQDS4dCqS8YejBCt5ur3VL9zPLHtCvouKZdkeYFtKyJtsRdtOPEG2O33125iKbd0O14dodT2FUUTNq2owFv1w6DjljjVqXZOQx%2BJn1N10YWvZZEi5Rmy2Pj%2Bblx%2B1ntCCTDCT5qGtiZiUZaQxxy46GJwJqMglhQOkDn52FaQSCI0YiyXG9HJmX2vzg6Fev1T2UYcta7Wtrn5y8j46SMYbyqQ4dPHOlnxblorMhwO5LtBMTe6IIPrS6QawSv6N6j0tyWo92%2FimIWQYenBKMRleZ185oS437fzOu2gOClovcFlof15QCpuRI4L%2FjabXZFEGAwsmaCRTw8twlEDDqFrGS9SkiJSP34FeZNO9PTEynJtlr5JYU4elL3jtmdvx78janDTCq88PJBjqkAUQifLdHTJhWiJbFpAIMGjGMNZPKT%2F%2B4NMgcfQbrqxVIs5CQzdCtqjz05zlmxWrnEMIcWOymGExX4g9nXnE3SUubzUremxoAXcuADl04nR2GeupRKoej7Inke9ke8QE9d4WAdnxawx0%2BQwHvd0mNPBtw3iMbeejaT1KYONCE60hyff%2FKLotKGyzlYp7YjBmaZbY%2Fncts2YG%2Bhoq6fmvh3UNW9jmU&X-Amz-Signature=fb0c6e049ce660b1526c1f9f369e483e42a83a7f9aaca44c469296b4769bc47c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
