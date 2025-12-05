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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7ICBYQP%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T062327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoLoNkOtpIMXeFnOpajFja2cXOzEar9epLsvk34EtnlgIhAOtKV%2FudiW4oburvjYbi%2FFnBi4lyqSRC9yH7AXfGKdpBKv8DCFUQABoMNjM3NDIzMTgzODA1Igx%2FsxCDgYT0hsDEW%2FIq3APOawmEtaViojJ2jaq8Qt3SXhGLfqNjWIqf%2F8Vo3odPa%2FKmTxg1QCABPj2UTpQgCwszwtOn9VbDXsxLTeWvGiwAGqTkjJ1uEvCCPzM08lfn5D%2FjCpxd9nUW%2FVcNZeyb7AZf4fNADP279GoThUZFttVe7%2Bw%2B%2B8FkuaNwLg3encJ4k1463zw9Ix6mOfhE7oh%2B5elCx3fmiYQNMW9TEY0chFwWdCKuCVsMu%2FJ52B4a7J6akNeYEQAX3qQ%2FwDJauxw0uZDZWqq%2BMa2XMH11R30PV2zVg%2FVI6lUhEqwYIHmCX0jkZ6gYbQW4OuMxFSPL74bUsVD6slFI35EvnLLv2G9KfMRxMqZiZMpXV9EuNaQJG2ScdLjRUqIeh8RPPf7EaWeLaDT90EvWR%2BRVq42frvKWe9lYsJrOfT3Fc7hIElcp48LfwmGsKkID2pLUtPbeU26p3CS1KvHM81mvErsPPBlkvlYweX1n5ji08Z%2F%2FACniyeut%2FvG7LsUEdzaWa%2FtcYx66uwMzQQYku1MKFyESslThon8zKYKZRORg3qw8hee3tUE6XhFpTqcv2U4FtBOc47hKG1b9l%2BdWlIWhcBxAzNcvONTVOeSKRtUm4ODFKYBr0YYGnk2ebW7y4H2gTXhVqDC5r8nJBjqkAU92coCQehBRu3MBen6caLGq5rLxqhUsC5J35LUtF4Y9ZPKbxBZ%2BQ%2FdYEoYFu1mR%2B9dW32wj7mrMn8B9ChDYwnySFexXXv5zpNzp7zXU%2B1gXaJTYtHBz33Rd6aItFiTvRi52a543tJVmlgf5X3aEayBHxaI2AdNXG3F2QK7D%2FnVZkpanCu6DW0%2Bp9Feqs3lJC%2By92gtFmj3sNcM7DYtkd6cHF7qL&X-Amz-Signature=2f43b009d34c10bae6f573ce9ab0f057eaa5be6c418e568342da612c6a994de1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7ICBYQP%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T062328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoLoNkOtpIMXeFnOpajFja2cXOzEar9epLsvk34EtnlgIhAOtKV%2FudiW4oburvjYbi%2FFnBi4lyqSRC9yH7AXfGKdpBKv8DCFUQABoMNjM3NDIzMTgzODA1Igx%2FsxCDgYT0hsDEW%2FIq3APOawmEtaViojJ2jaq8Qt3SXhGLfqNjWIqf%2F8Vo3odPa%2FKmTxg1QCABPj2UTpQgCwszwtOn9VbDXsxLTeWvGiwAGqTkjJ1uEvCCPzM08lfn5D%2FjCpxd9nUW%2FVcNZeyb7AZf4fNADP279GoThUZFttVe7%2Bw%2B%2B8FkuaNwLg3encJ4k1463zw9Ix6mOfhE7oh%2B5elCx3fmiYQNMW9TEY0chFwWdCKuCVsMu%2FJ52B4a7J6akNeYEQAX3qQ%2FwDJauxw0uZDZWqq%2BMa2XMH11R30PV2zVg%2FVI6lUhEqwYIHmCX0jkZ6gYbQW4OuMxFSPL74bUsVD6slFI35EvnLLv2G9KfMRxMqZiZMpXV9EuNaQJG2ScdLjRUqIeh8RPPf7EaWeLaDT90EvWR%2BRVq42frvKWe9lYsJrOfT3Fc7hIElcp48LfwmGsKkID2pLUtPbeU26p3CS1KvHM81mvErsPPBlkvlYweX1n5ji08Z%2F%2FACniyeut%2FvG7LsUEdzaWa%2FtcYx66uwMzQQYku1MKFyESslThon8zKYKZRORg3qw8hee3tUE6XhFpTqcv2U4FtBOc47hKG1b9l%2BdWlIWhcBxAzNcvONTVOeSKRtUm4ODFKYBr0YYGnk2ebW7y4H2gTXhVqDC5r8nJBjqkAU92coCQehBRu3MBen6caLGq5rLxqhUsC5J35LUtF4Y9ZPKbxBZ%2BQ%2FdYEoYFu1mR%2B9dW32wj7mrMn8B9ChDYwnySFexXXv5zpNzp7zXU%2B1gXaJTYtHBz33Rd6aItFiTvRi52a543tJVmlgf5X3aEayBHxaI2AdNXG3F2QK7D%2FnVZkpanCu6DW0%2Bp9Feqs3lJC%2By92gtFmj3sNcM7DYtkd6cHF7qL&X-Amz-Signature=0b6d7891cd1330835d79486bf4c4174ea09c467eb913877ec410ffa1a956432e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
