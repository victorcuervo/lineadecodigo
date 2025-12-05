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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAJ52OJP%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T142732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCw8OBjdp0L756UjrYY7kwLKCoqcRWDZ2Czylb3zJsOlwIhALAhtkZmXRaGvtFzVx5z%2BFN6usLkht3wujDhWiiPAmEgKv8DCFoQABoMNjM3NDIzMTgzODA1IgwAS4X7eWbV7El7lzIq3AMtUm61foA38ll3tnUW7mGSiq817DV09%2BKIw4kG7QXiz8s4AK7HaeOa9nVO0EUW9XAvczFGYjeCRQP9waiK4PdAdZoFSbjJeGCIbSupm%2BeJLbLO51fam9zaTru21fiTuxE9xwB61363Yw%2FaEZQfdEtXsETpZo%2FK34B6Ss%2F6z66KsdOm0M36E%2BVvd7wT59PiSWpqa2L1x8qnf8vQ%2Fo7a7tjlLWQ02Z4b%2B2atbrO4a8WNjUm1N2E48D7bCpzGf%2FwRaLEBQtuNPgZeuVs1eLwnlZ%2F2EHBdY3xrBTyjrRxXEfwO7oBvreU0Lopx0G5t%2FJsIJQRwLSjbNlyVPZH45R%2F6HM9BZnBfsa7%2Ftm2Sqf0j6Bt8sNdcQKon2rxD4uSWChXT0mFkMxucpnO9kaYMj8IutHeWXCHMGlwoF4vUCebwRmfJZLcu26qlkj01wWJLD5oy1rAe2OjSgNp%2FL9TKXyM26EPF7v0k7HEv2ePZPrKcck6%2BBX8K90uOnWxPE%2BgsMi4%2Bvo6q13kCdf0kQk2m7rF%2FTQD%2FF490cEB1UWAxQXC%2BtXpUWNHDMBtO9F6JYeT9piALw1xaSQM%2FJj1P0J4HbfkGmBKqdXccOs%2FAEpKAYDnlHhFdTnzqTkK0hvvBG0c78TDqxsrJBjqkARPiBXOuAvEoj%2BOjE8HQ9kx3AvF%2BBsI1ortXKyuFaCNPANLm7Aw65m%2B9amXa6c4Xhw4JAZzwvOIsUMoK8rpPoqDT%2BzYUfKwpHyfEYimU0LP2gsQZiq1qnfzYoUqS0YCai0VGEw49GCpxWXmB8ML7FS0qzlndSScSbZ9G2Xikdv6QRNA2k%2FA18smxdazLkJpbjdSbxcg6WzOi3jaChmd1S53Vm%2FWd&X-Amz-Signature=7688b02c927f75d29fb3c29c81f1f30752c0df796b6a0ae9e4cbc2e84ffe18a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAJ52OJP%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T142732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCw8OBjdp0L756UjrYY7kwLKCoqcRWDZ2Czylb3zJsOlwIhALAhtkZmXRaGvtFzVx5z%2BFN6usLkht3wujDhWiiPAmEgKv8DCFoQABoMNjM3NDIzMTgzODA1IgwAS4X7eWbV7El7lzIq3AMtUm61foA38ll3tnUW7mGSiq817DV09%2BKIw4kG7QXiz8s4AK7HaeOa9nVO0EUW9XAvczFGYjeCRQP9waiK4PdAdZoFSbjJeGCIbSupm%2BeJLbLO51fam9zaTru21fiTuxE9xwB61363Yw%2FaEZQfdEtXsETpZo%2FK34B6Ss%2F6z66KsdOm0M36E%2BVvd7wT59PiSWpqa2L1x8qnf8vQ%2Fo7a7tjlLWQ02Z4b%2B2atbrO4a8WNjUm1N2E48D7bCpzGf%2FwRaLEBQtuNPgZeuVs1eLwnlZ%2F2EHBdY3xrBTyjrRxXEfwO7oBvreU0Lopx0G5t%2FJsIJQRwLSjbNlyVPZH45R%2F6HM9BZnBfsa7%2Ftm2Sqf0j6Bt8sNdcQKon2rxD4uSWChXT0mFkMxucpnO9kaYMj8IutHeWXCHMGlwoF4vUCebwRmfJZLcu26qlkj01wWJLD5oy1rAe2OjSgNp%2FL9TKXyM26EPF7v0k7HEv2ePZPrKcck6%2BBX8K90uOnWxPE%2BgsMi4%2Bvo6q13kCdf0kQk2m7rF%2FTQD%2FF490cEB1UWAxQXC%2BtXpUWNHDMBtO9F6JYeT9piALw1xaSQM%2FJj1P0J4HbfkGmBKqdXccOs%2FAEpKAYDnlHhFdTnzqTkK0hvvBG0c78TDqxsrJBjqkARPiBXOuAvEoj%2BOjE8HQ9kx3AvF%2BBsI1ortXKyuFaCNPANLm7Aw65m%2B9amXa6c4Xhw4JAZzwvOIsUMoK8rpPoqDT%2BzYUfKwpHyfEYimU0LP2gsQZiq1qnfzYoUqS0YCai0VGEw49GCpxWXmB8ML7FS0qzlndSScSbZ9G2Xikdv6QRNA2k%2FA18smxdazLkJpbjdSbxcg6WzOi3jaChmd1S53Vm%2FWd&X-Amz-Signature=65c24d0b9a6c7f7dcc0d897448bcb66980933306d6366b4b3e3d99eb9909e148&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
