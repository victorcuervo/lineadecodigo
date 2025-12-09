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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOHGC255%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T003558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbhw74ja0TeZgXhyGwLGIX1LWUufpkx5JvHwtfcjBSJgIgS6wR6xfk9CbnYV4pUr%2BAt48NMOmBcgm8aYbvK3vgV9kqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE%2FUlJFl%2Bsd%2FN6xQ7yrcAzLLseV15iezS9Jc80L9BwMzB3XECXtEVvs24oSqsFaVfyp%2F8xf8NfEAqUrJczhy2m2TI0k2jwV6tmJ1ZLX2ZBt00y9E1%2F2P8tlup%2F%2FJv9THmmiR40SfgS4XILssdElyX1%2BE0%2BjR%2FOwt50Geo8TTMaVRu7wz5PPz%2B4awHzI3HyknI%2BxXI%2BJOijQV7AXDI1IjJOF0p0Iy2bbK9GCERBJrjP%2BnpPS5XyVnZ1hyhp17zMHBqNgyT2v6SGT5tOuX1NLih1VTyOfGQMBupVc1hGbkfpY9rywXjzKpJld3bd54sXlBAASED92mOcggsKCb7ECe0Tjb6%2Bgb3pfi9AasUI3mtKhxQ%2F3AU8mP0oZ2SxdINIgrEDRv7g8gQlGYC480rvnYYXmC5HCmGQm3t6PSSEsKEuuVVKCy8R0kAOmtNzWoq%2FbCWaInSJ1FMyWrrHHI5mgLOULZ%2BWqAmfNFfA4rKbMekXSV5fgAv%2F1INM6Lie3b2rUpDlx0MegexGoHaNwIXk7vnuZxgw%2BXV6o9UF04ow4PSLNlSsimDQxQxZ5VrGDgsk1E4QZLKXq9vkg%2FTFZD%2BYjnjrxuahFr0tcj2BRuE3JFUUe5UoEnRaApTjUdpn4OcCMjph1AWc2IKPn3JHh%2BMJ%2FD3ckGOqUBfETqTZqeHJ5VjwfNNUT5gx7hqB82iNwtJenkXvJWZZmyt1zyuuAbWzxhrv0aJYMc43DnYea2yLGnDGfbrj7SxtWqc71JW2zeEeivLBCPzEG3PUxCRBceXAjhbpUngAxrA%2Fd%2F%2BRBxOuHdB2kp25vM767ocTj5qih%2B7uH55gRLirSZ%2Fiq%2FxCh9y2adUjxLfQWqkdNw9hbK99W2u44n0HMEPTJGvRmI&X-Amz-Signature=d377e66f00c5c45ca6aa466519c115d27dbf3a8f8e2a4a9000a944a3b547a5ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOHGC255%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T003558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbhw74ja0TeZgXhyGwLGIX1LWUufpkx5JvHwtfcjBSJgIgS6wR6xfk9CbnYV4pUr%2BAt48NMOmBcgm8aYbvK3vgV9kqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE%2FUlJFl%2Bsd%2FN6xQ7yrcAzLLseV15iezS9Jc80L9BwMzB3XECXtEVvs24oSqsFaVfyp%2F8xf8NfEAqUrJczhy2m2TI0k2jwV6tmJ1ZLX2ZBt00y9E1%2F2P8tlup%2F%2FJv9THmmiR40SfgS4XILssdElyX1%2BE0%2BjR%2FOwt50Geo8TTMaVRu7wz5PPz%2B4awHzI3HyknI%2BxXI%2BJOijQV7AXDI1IjJOF0p0Iy2bbK9GCERBJrjP%2BnpPS5XyVnZ1hyhp17zMHBqNgyT2v6SGT5tOuX1NLih1VTyOfGQMBupVc1hGbkfpY9rywXjzKpJld3bd54sXlBAASED92mOcggsKCb7ECe0Tjb6%2Bgb3pfi9AasUI3mtKhxQ%2F3AU8mP0oZ2SxdINIgrEDRv7g8gQlGYC480rvnYYXmC5HCmGQm3t6PSSEsKEuuVVKCy8R0kAOmtNzWoq%2FbCWaInSJ1FMyWrrHHI5mgLOULZ%2BWqAmfNFfA4rKbMekXSV5fgAv%2F1INM6Lie3b2rUpDlx0MegexGoHaNwIXk7vnuZxgw%2BXV6o9UF04ow4PSLNlSsimDQxQxZ5VrGDgsk1E4QZLKXq9vkg%2FTFZD%2BYjnjrxuahFr0tcj2BRuE3JFUUe5UoEnRaApTjUdpn4OcCMjph1AWc2IKPn3JHh%2BMJ%2FD3ckGOqUBfETqTZqeHJ5VjwfNNUT5gx7hqB82iNwtJenkXvJWZZmyt1zyuuAbWzxhrv0aJYMc43DnYea2yLGnDGfbrj7SxtWqc71JW2zeEeivLBCPzEG3PUxCRBceXAjhbpUngAxrA%2Fd%2F%2BRBxOuHdB2kp25vM767ocTj5qih%2B7uH55gRLirSZ%2Fiq%2FxCh9y2adUjxLfQWqkdNw9hbK99W2u44n0HMEPTJGvRmI&X-Amz-Signature=5c8148e051b398319bc455cf75afb2d1c7ca5a4788c19c7cef3ffd35051db26d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
