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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5LLNVV6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T024708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKM%2FPnDMavmkioQviPOcfJe4aQrCg%2FZTxvpJ3DTB3AUgIhAP5dRv%2B2rim%2Fhl%2Fml9fLOosgGqBox8g7jh1GMt8HEFqeKv8DCHMQABoMNjM3NDIzMTgzODA1IgxvVP6IUWFsvy8yn%2FAq3AMjEbwpbq%2BzCJP73jOk7Zu2%2FYFeGXZxcn%2FYyFTdmKUj%2Bp5SCg4d7yCU%2FvOpXewsszQNinrZqP2J5G2gtOIwjzbLv2b8vU%2BPzbwAvK9l8GGWFQz38WmtI8AkVDdw34pIodnhYjwtkhIK8Q8OIlNumx%2Bx0by7elMto%2FydU8SmdpsUuFtK3lB8nvGovweWuOBkVT%2BYXgWWPs6Su2zOau%2FJ5Zz61PqMJfrojFCZ6GLcu32YmTbVRbUtUcQhhpY9RKlTu61D6JgQq5tBiWstDcmrM9bqPPRJBGc6Af0A6UvgeyF2%2F7kDv730AjGr5lA2qB%2FQ7ntlRxlS2nHA13U3B%2Fu%2FLzkY0l89MBAOQOIEkScXhYSoymz7pafhiembUW7B5Tb5Vk%2BumHbwZTWL2GwiB6zBARbAsFZMqJheuZPMOJkeGzbejUeT%2F7JgQ%2B0sQyKqu%2BzVFeNszCtKz3c2l7puz66R6%2BATdktutceU3J703ba%2BSxc0WObZ%2BDHA068y9oYOdh2vvQipd5wvLLsZlUi7InIJjuGvaGA11UOyANTchDRLOEtpTIjAlZ42dWmk9RDrc7N806E0ZSgfue07SxqtlhdACVIbvsz4oLmRd5MGi8%2BtUr7WksDyPzfiHk4kZiDQuzD1l4jKBjqkARGZBGzOrdwvxzdDd1bhzztqNf4zmLXTDt0IAYrRYXk9Xk%2F0yjr5KpBAg%2BhLpw%2BOfAyal1vy6Rs9uMpNAZmNsKsRGX%2FhdQiNiMoA3ZeqSd5vKHzFFj8yzrO%2BV5aKGiEPrI1eE1hnNOxQYrOEeWAH0oZst%2FOTTk7tvIJV0Gw%2FzGwpxOiqDEI9UeRXvVkZ4XU3G5vQKyDPrAYV%2B5et2AN%2FMy%2F1mbIv&X-Amz-Signature=808ae3dc566a64f87debf0e38306c2a8931393a462bed22bca1a987897370a34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5LLNVV6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T024708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKM%2FPnDMavmkioQviPOcfJe4aQrCg%2FZTxvpJ3DTB3AUgIhAP5dRv%2B2rim%2Fhl%2Fml9fLOosgGqBox8g7jh1GMt8HEFqeKv8DCHMQABoMNjM3NDIzMTgzODA1IgxvVP6IUWFsvy8yn%2FAq3AMjEbwpbq%2BzCJP73jOk7Zu2%2FYFeGXZxcn%2FYyFTdmKUj%2Bp5SCg4d7yCU%2FvOpXewsszQNinrZqP2J5G2gtOIwjzbLv2b8vU%2BPzbwAvK9l8GGWFQz38WmtI8AkVDdw34pIodnhYjwtkhIK8Q8OIlNumx%2Bx0by7elMto%2FydU8SmdpsUuFtK3lB8nvGovweWuOBkVT%2BYXgWWPs6Su2zOau%2FJ5Zz61PqMJfrojFCZ6GLcu32YmTbVRbUtUcQhhpY9RKlTu61D6JgQq5tBiWstDcmrM9bqPPRJBGc6Af0A6UvgeyF2%2F7kDv730AjGr5lA2qB%2FQ7ntlRxlS2nHA13U3B%2Fu%2FLzkY0l89MBAOQOIEkScXhYSoymz7pafhiembUW7B5Tb5Vk%2BumHbwZTWL2GwiB6zBARbAsFZMqJheuZPMOJkeGzbejUeT%2F7JgQ%2B0sQyKqu%2BzVFeNszCtKz3c2l7puz66R6%2BATdktutceU3J703ba%2BSxc0WObZ%2BDHA068y9oYOdh2vvQipd5wvLLsZlUi7InIJjuGvaGA11UOyANTchDRLOEtpTIjAlZ42dWmk9RDrc7N806E0ZSgfue07SxqtlhdACVIbvsz4oLmRd5MGi8%2BtUr7WksDyPzfiHk4kZiDQuzD1l4jKBjqkARGZBGzOrdwvxzdDd1bhzztqNf4zmLXTDt0IAYrRYXk9Xk%2F0yjr5KpBAg%2BhLpw%2BOfAyal1vy6Rs9uMpNAZmNsKsRGX%2FhdQiNiMoA3ZeqSd5vKHzFFj8yzrO%2BV5aKGiEPrI1eE1hnNOxQYrOEeWAH0oZst%2FOTTk7tvIJV0Gw%2FzGwpxOiqDEI9UeRXvVkZ4XU3G5vQKyDPrAYV%2B5et2AN%2FMy%2F1mbIv&X-Amz-Signature=7ee05c39e4110b6a2909505845a8400d6babde03c9b492bd55347d4216461b23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
