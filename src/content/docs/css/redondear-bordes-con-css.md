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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKF72G3J%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T034511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEtZkHEr7hQbCoFK5M9RbPl9njf3d1L%2FLN4VafHLSKi5AiEA9GUPEwsodNun4uPaBlX1epnbLtwYSGIUBml3VcpKrBQq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDJ6IkPkRy%2BhNe4wSgyrcA7hIu07b%2BdT5GDohIVM3BcMStME%2BbWta3hZA8LzgUJmfNkVRTfUSiCcLhOGOxbyHI47cdwTW%2FcrRcy63nozpF8j9otXwNeCxFlzjwKbv6PW15PmLfsY403dt43mucAtxe6puce080ZN4QiW82CLDIhbmZsepf70yGHUWIflYERvFM5gtw8ZcnJUebzWNH8zCTZS8Rv5FAN%2BJzZLmpLcPG179Hc7ggOFXPhzlHrDKo5e7X0UZyRO%2BM%2FUziouDDdFUu27UGW3tnx7JYiJKdwxnVku4tXA%2B1FRdjzTah4J6wTrbtUAzs9S0iqb9ojdqXDBmhnL4oUdMxYIP%2FM0AeMVm8aHPaMcj%2B%2FJF7a8hJhxKvPAyZ%2BQdZgeXnfj4h3aD7Bqn4SGZFSMKMSM8i2z4tVDjLduV8r%2BdmeAY3tmIo3xIyiW3ktMcnTW3%2FpjtTKRbA7oqFe3qVj8qhSd5mLi79plD8rWFZOjwfVY8oN72OaL518SB8lXmcQ0sEeOI4dfEypPDtQ21fSc8A5c2UYnEffeUMk0Nu7GORZTXXW%2BjBLnaPs1OIVnYGjAj6knwONhu5BxlmkSj9kxuuCQPcw%2FZYvk8UePvsUrrSNyagi02Ab40FfBJHer1%2F%2F6m38Mf%2BtxtMLvDzskGOqUBm47YivuS7xVIGUPNB1L34ao6BAk9xc%2BPKihNwA8y7UI9SKV1%2BhMP3FLaV0xrAlauN25YlrEWcvcs91kpmROHdpzZPmb71PCWLcK6gzOi6ngiNdN3XwTvO6pJq4ZDAsAgnT76gTXUeA%2BrklmU6HSXMN%2BtxTa%2FFYOFK2UoarIJ25uxYBz%2FC8EH2xS8PZIAuEYBPRu2bLCnDEX3vBjgspyCa9022NN0&X-Amz-Signature=b0146e146c88992b4486e84da4037067dd400ba8e2ee18e9f9d26896c930ea13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKF72G3J%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T034511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEtZkHEr7hQbCoFK5M9RbPl9njf3d1L%2FLN4VafHLSKi5AiEA9GUPEwsodNun4uPaBlX1epnbLtwYSGIUBml3VcpKrBQq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDJ6IkPkRy%2BhNe4wSgyrcA7hIu07b%2BdT5GDohIVM3BcMStME%2BbWta3hZA8LzgUJmfNkVRTfUSiCcLhOGOxbyHI47cdwTW%2FcrRcy63nozpF8j9otXwNeCxFlzjwKbv6PW15PmLfsY403dt43mucAtxe6puce080ZN4QiW82CLDIhbmZsepf70yGHUWIflYERvFM5gtw8ZcnJUebzWNH8zCTZS8Rv5FAN%2BJzZLmpLcPG179Hc7ggOFXPhzlHrDKo5e7X0UZyRO%2BM%2FUziouDDdFUu27UGW3tnx7JYiJKdwxnVku4tXA%2B1FRdjzTah4J6wTrbtUAzs9S0iqb9ojdqXDBmhnL4oUdMxYIP%2FM0AeMVm8aHPaMcj%2B%2FJF7a8hJhxKvPAyZ%2BQdZgeXnfj4h3aD7Bqn4SGZFSMKMSM8i2z4tVDjLduV8r%2BdmeAY3tmIo3xIyiW3ktMcnTW3%2FpjtTKRbA7oqFe3qVj8qhSd5mLi79plD8rWFZOjwfVY8oN72OaL518SB8lXmcQ0sEeOI4dfEypPDtQ21fSc8A5c2UYnEffeUMk0Nu7GORZTXXW%2BjBLnaPs1OIVnYGjAj6knwONhu5BxlmkSj9kxuuCQPcw%2FZYvk8UePvsUrrSNyagi02Ab40FfBJHer1%2F%2F6m38Mf%2BtxtMLvDzskGOqUBm47YivuS7xVIGUPNB1L34ao6BAk9xc%2BPKihNwA8y7UI9SKV1%2BhMP3FLaV0xrAlauN25YlrEWcvcs91kpmROHdpzZPmb71PCWLcK6gzOi6ngiNdN3XwTvO6pJq4ZDAsAgnT76gTXUeA%2BrklmU6HSXMN%2BtxTa%2FFYOFK2UoarIJ25uxYBz%2FC8EH2xS8PZIAuEYBPRu2bLCnDEX3vBjgspyCa9022NN0&X-Amz-Signature=e479c8e4255c448050204e3e1fdf0b67fe193da4ba69e31e35c18a9892d89081&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
