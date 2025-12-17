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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAP7YUFI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T151156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAJhlkMFfOFEj620AT6AwBW98vfXCpARaZdX4NAslRi%2FAiEAqhI14mbRclM0u0qkMjxd1QIKRxQf2CV4Lam7U07mjsUqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK0dxGnSq6G%2BGar7jircA%2FdTFwQKB8U5%2F4Gz1M4MDnVQH9DvoLEVPdNd0PfDbhdCX9mSdIl8x6PS0O5yb81CUk4B7bn5tffX4vAq6EQKsVe5iYXDN0CnL0fnMkA1VVkPWyHqUooDxTdbOi8H%2FSZktrKb%2FctDuWu1ttF6A7rAXy78XaYp44h7qT79ZdDha%2BzSp6DptUMLdUZeEFIiKj%2BcTU6DknbJ4ezsa4Wy1uxgsM33nP4qQDgNFLEkrHW5GuLaH75q2jjT4mYxsJV2zNpP3X%2BwIicCgeKY8zLtmo0cFB2m47Sq%2BWN5xNLH9jxNpma%2FNasRRaKKttAJv3DAV0FEmog0ANVYaGkJ%2FoOnTLKiajGFfw1n8Q%2BISdepTTzEsg238x2JOmOGwv3%2BYKuwKBKaURthkhnNs5sYfOGAKaP9KWbBuqihVb0%2Fxrh%2F8LXuvMqBYRkUrCbzN2rQLZhV4mNaCMlYadP2VRksc0VlES7hvCFVYGzUlOPS0EBC5sMwaRg8umhouFNjLeIcEeFZ295rlzqljp1oYkTZzad2MQaxsiuTapVxL6YyxVCN0FHf%2FU6ZhSEqxLKQXWc5JTE1zWmI8mlV2T7rk7HANj0hWxhJE7UjnnX%2B8YH38lVrjV43qj2UeFfjK7VxbMYeUhTGML2Ai8oGOqUBz66Wb0W9iTNZd7tjP05S%2BkzbWw%2BtIdLCzOvUpF3XqCYCafl4GrteLQja1yxzzZm%2BOJ8fG9ZesGNlg3PkqGvEO%2BRixMVApU%2BxecezuiZVhBpmUgz8C5b7RDKyZ6vvgaoHBGUAff5kDm5V5RSj9L4yowJshKnH1QXkFHtPQ3XCOCbilTN25hko7XfDzN%2BlObjKomiqi4bx3bJc%2BhXEIGFzagHHNW49&X-Amz-Signature=679fa769ed85747222d8e8b18d6399b3a8354037694017ba3b5019589bad885b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAP7YUFI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T151156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAJhlkMFfOFEj620AT6AwBW98vfXCpARaZdX4NAslRi%2FAiEAqhI14mbRclM0u0qkMjxd1QIKRxQf2CV4Lam7U07mjsUqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK0dxGnSq6G%2BGar7jircA%2FdTFwQKB8U5%2F4Gz1M4MDnVQH9DvoLEVPdNd0PfDbhdCX9mSdIl8x6PS0O5yb81CUk4B7bn5tffX4vAq6EQKsVe5iYXDN0CnL0fnMkA1VVkPWyHqUooDxTdbOi8H%2FSZktrKb%2FctDuWu1ttF6A7rAXy78XaYp44h7qT79ZdDha%2BzSp6DptUMLdUZeEFIiKj%2BcTU6DknbJ4ezsa4Wy1uxgsM33nP4qQDgNFLEkrHW5GuLaH75q2jjT4mYxsJV2zNpP3X%2BwIicCgeKY8zLtmo0cFB2m47Sq%2BWN5xNLH9jxNpma%2FNasRRaKKttAJv3DAV0FEmog0ANVYaGkJ%2FoOnTLKiajGFfw1n8Q%2BISdepTTzEsg238x2JOmOGwv3%2BYKuwKBKaURthkhnNs5sYfOGAKaP9KWbBuqihVb0%2Fxrh%2F8LXuvMqBYRkUrCbzN2rQLZhV4mNaCMlYadP2VRksc0VlES7hvCFVYGzUlOPS0EBC5sMwaRg8umhouFNjLeIcEeFZ295rlzqljp1oYkTZzad2MQaxsiuTapVxL6YyxVCN0FHf%2FU6ZhSEqxLKQXWc5JTE1zWmI8mlV2T7rk7HANj0hWxhJE7UjnnX%2B8YH38lVrjV43qj2UeFfjK7VxbMYeUhTGML2Ai8oGOqUBz66Wb0W9iTNZd7tjP05S%2BkzbWw%2BtIdLCzOvUpF3XqCYCafl4GrteLQja1yxzzZm%2BOJ8fG9ZesGNlg3PkqGvEO%2BRixMVApU%2BxecezuiZVhBpmUgz8C5b7RDKyZ6vvgaoHBGUAff5kDm5V5RSj9L4yowJshKnH1QXkFHtPQ3XCOCbilTN25hko7XfDzN%2BlObjKomiqi4bx3bJc%2BhXEIGFzagHHNW49&X-Amz-Signature=7a334a1574fc8be8c958d808fb1a0dbe6545c2206abe1be10cc34b9618b5a225&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
