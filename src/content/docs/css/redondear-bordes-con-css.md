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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Q4QLMWR%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T142831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKf0%2FqTU0a0s5Dp%2BP4SXD7nXOmOemJNyGmm01NfatzywIhANcz1H5GcUMjzEWlef7DQNfs942hLaMukQ17zOLuIybjKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwfXhlo4bf8OAVft%2Bgq3APlZIskC0QIf%2FpkbxEcb3O%2B7r%2B%2B66h3NnmYDakX7PH0%2B02%2Fj5yG%2Fa5TVAgnSSBJ87eXhxJtFaY8GvqtoI8XYHHWfAwZLvZyGN2p1417XUGSO9VFBDJwLoMm6deLgY987EgxdDwJ8YHki7u0sz%2BGi4Dz3wHSgvLc7YcGDES0ZoTqz7WxnG2iPfti0y0Gg5ZpWBi8X5JYVxDHruWgc1GdX2e5liUW%2BwrRdqNqANxnQ%2BglsFnD9huVqlhQHF%2FA26oLJKCVpt9xWJEpWrMFNKRK1tidoU44aqrEirqsPbg3qq5%2Fa2ysd3gTM6bFsLmvfqsuxys2zI3xIERWWiyS42nVMUYJ9kUrKWOEfWxpTkY1VGjHsBWJtUfs991VYOnRjks3rO4T13VbSh0GO2NS9uXT2E8wJHoUV4szoxnGm%2B3rvdurAIARulDeePcWDHy%2Bp98FukTAOUpJW5tIVT6Az48F0fmCOTZlUmCFub7Yf%2FuubhwjE%2BBefuf7nUxj0ljnzWbVfDhYepLqDfc%2BER0%2BVr%2BYI5mRR5pJF3%2BQhM43dRX4TLQrH5YvL4hQCFTOC77U%2BEirK%2F49WeZbKcY2nVKQAJVLxhlV3tT5Mkvbq2r%2BdxFKp9CS3iBYteZYO1pVAWL6yzDSmdXJBjqkAU5H7HwDH4eD9pI6RTqMbNBCSCSF29RKNBB1FlpNlciY%2FoyzvJRwjrKkKt4BvzghBIqSzJ8wqLzSic64RD5toxaR%2FWkq5vhNFa7X9lNsKJ%2Buq%2FXBaOoxHmIXRKl8wh4SFMeNWBIWT1i%2F%2BnCMCYbjYZI%2FxonviRZ0nY6s663BVusmeVAcgwBEs%2BUnI4QFWg3fCPPQ6XuAy9lYBdfIjNQkG2mRRsz4&X-Amz-Signature=2e26a365df6c1db6f23191ef72e12710f95736e1187f33471c6c1768df349ecc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Q4QLMWR%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T142831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKf0%2FqTU0a0s5Dp%2BP4SXD7nXOmOemJNyGmm01NfatzywIhANcz1H5GcUMjzEWlef7DQNfs942hLaMukQ17zOLuIybjKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwfXhlo4bf8OAVft%2Bgq3APlZIskC0QIf%2FpkbxEcb3O%2B7r%2B%2B66h3NnmYDakX7PH0%2B02%2Fj5yG%2Fa5TVAgnSSBJ87eXhxJtFaY8GvqtoI8XYHHWfAwZLvZyGN2p1417XUGSO9VFBDJwLoMm6deLgY987EgxdDwJ8YHki7u0sz%2BGi4Dz3wHSgvLc7YcGDES0ZoTqz7WxnG2iPfti0y0Gg5ZpWBi8X5JYVxDHruWgc1GdX2e5liUW%2BwrRdqNqANxnQ%2BglsFnD9huVqlhQHF%2FA26oLJKCVpt9xWJEpWrMFNKRK1tidoU44aqrEirqsPbg3qq5%2Fa2ysd3gTM6bFsLmvfqsuxys2zI3xIERWWiyS42nVMUYJ9kUrKWOEfWxpTkY1VGjHsBWJtUfs991VYOnRjks3rO4T13VbSh0GO2NS9uXT2E8wJHoUV4szoxnGm%2B3rvdurAIARulDeePcWDHy%2Bp98FukTAOUpJW5tIVT6Az48F0fmCOTZlUmCFub7Yf%2FuubhwjE%2BBefuf7nUxj0ljnzWbVfDhYepLqDfc%2BER0%2BVr%2BYI5mRR5pJF3%2BQhM43dRX4TLQrH5YvL4hQCFTOC77U%2BEirK%2F49WeZbKcY2nVKQAJVLxhlV3tT5Mkvbq2r%2BdxFKp9CS3iBYteZYO1pVAWL6yzDSmdXJBjqkAU5H7HwDH4eD9pI6RTqMbNBCSCSF29RKNBB1FlpNlciY%2FoyzvJRwjrKkKt4BvzghBIqSzJ8wqLzSic64RD5toxaR%2FWkq5vhNFa7X9lNsKJ%2Buq%2FXBaOoxHmIXRKl8wh4SFMeNWBIWT1i%2F%2BnCMCYbjYZI%2FxonviRZ0nY6s663BVusmeVAcgwBEs%2BUnI4QFWg3fCPPQ6XuAy9lYBdfIjNQkG2mRRsz4&X-Amz-Signature=6c215591fdee59cecf7871fa696e198b52c99066cbc6bb4b8a274de70dd2efae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
