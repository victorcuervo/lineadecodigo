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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666677GB7Y%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T051948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEtTjV1Am1abBWszPdZ2hzeNmuxAjonMMfCNeMCSXLr1AiAVF3V7dCShg6rNxnbCLPnDG7JvVp%2BjcpTlFzaVcA2e3Sr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMKW%2BAejFeDoxftfunKtwDTUkD1IaE0ovgxDXuGoRdPDCF0nsxYepPRKplwQVJgyVMWITcDofyIsIdwurMorB3xU4VGdVDVr22CypYBCBGmr8Rpu4wgkdV9TTfr3Qz2%2F%2BwtUXoMb5ic1ge7lOjRHFSmAeOCNKru9rwkIhew95kg%2Fe6gr%2BjgGIodoRXG0ZaLAfp0EX0Z6K8u2jCiuFLY0hCCwR99XATFwanIGeg9THzTKsYEKG%2FIE%2FCVDGjYtz%2FDo%2FXCJzyAoHN9wwzdOo3dCvPIa1Qoi74zlP996VAhXQLA3qGa%2F1oijKJ1Vb5Db4KKoXwHxHVvr1r1CnoTz2XJeOIX9f5vC7VET6xzq%2BmNvDzlJCRvn8ewC6NrNPmDjky23i6mTPYY%2FUuleU7QX3MXwvWO8Mz0IdBhO7LnzheNyCiX%2FGHV9mEKmpprhJe3zupuC0w8upEv4EMVwSdsmM%2BoZyM4QhKHV%2FqzXHpjprKs%2FxGzPGduKb%2Fm3TbiXjmQrxVao5cVJDn7%2BDngobnynvSQSUAtTyvIXeQXxjN8DUkF4UMNMrudMwx9AvdbhtnmmVl5A3IYYG%2BkIaslswvjYkNFbIYq1jhEJo19RtYAcL9HYr65w%2FvlfYuw2HKJUDr06PxtcRvKOacKmRSBue9kVMw393OyQY6pgEDdHlvyjAYlJ04YBo22AxN%2FBW7EVSsGnrT2BmU2YE1k4yp6MFLHrBErQgXtZiBO99lTOEC8QpQE5d7%2FKHaLURWd%2BF5rncIBurVoDSpw%2BnmAyY8PYOLske13qkrRt%2FXtZgZ0qXshDeYYrY3gqPYIZQQm0Frx%2B9GbDRpFzLrZdAw%2FdeeBW4M5V1IQHXJo%2Be%2FFf58YmrNP0jPNkFtwTnXWmyeyatEWUFM&X-Amz-Signature=6321338a2b1b8f36a131fab6afadf86d3a629c3ea34f4d106d5cfbd5e59c836c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666677GB7Y%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T051948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEtTjV1Am1abBWszPdZ2hzeNmuxAjonMMfCNeMCSXLr1AiAVF3V7dCShg6rNxnbCLPnDG7JvVp%2BjcpTlFzaVcA2e3Sr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMKW%2BAejFeDoxftfunKtwDTUkD1IaE0ovgxDXuGoRdPDCF0nsxYepPRKplwQVJgyVMWITcDofyIsIdwurMorB3xU4VGdVDVr22CypYBCBGmr8Rpu4wgkdV9TTfr3Qz2%2F%2BwtUXoMb5ic1ge7lOjRHFSmAeOCNKru9rwkIhew95kg%2Fe6gr%2BjgGIodoRXG0ZaLAfp0EX0Z6K8u2jCiuFLY0hCCwR99XATFwanIGeg9THzTKsYEKG%2FIE%2FCVDGjYtz%2FDo%2FXCJzyAoHN9wwzdOo3dCvPIa1Qoi74zlP996VAhXQLA3qGa%2F1oijKJ1Vb5Db4KKoXwHxHVvr1r1CnoTz2XJeOIX9f5vC7VET6xzq%2BmNvDzlJCRvn8ewC6NrNPmDjky23i6mTPYY%2FUuleU7QX3MXwvWO8Mz0IdBhO7LnzheNyCiX%2FGHV9mEKmpprhJe3zupuC0w8upEv4EMVwSdsmM%2BoZyM4QhKHV%2FqzXHpjprKs%2FxGzPGduKb%2Fm3TbiXjmQrxVao5cVJDn7%2BDngobnynvSQSUAtTyvIXeQXxjN8DUkF4UMNMrudMwx9AvdbhtnmmVl5A3IYYG%2BkIaslswvjYkNFbIYq1jhEJo19RtYAcL9HYr65w%2FvlfYuw2HKJUDr06PxtcRvKOacKmRSBue9kVMw393OyQY6pgEDdHlvyjAYlJ04YBo22AxN%2FBW7EVSsGnrT2BmU2YE1k4yp6MFLHrBErQgXtZiBO99lTOEC8QpQE5d7%2FKHaLURWd%2BF5rncIBurVoDSpw%2BnmAyY8PYOLske13qkrRt%2FXtZgZ0qXshDeYYrY3gqPYIZQQm0Frx%2B9GbDRpFzLrZdAw%2FdeeBW4M5V1IQHXJo%2Be%2FFf58YmrNP0jPNkFtwTnXWmyeyatEWUFM&X-Amz-Signature=257e28b58ec3b318042032b667f03bbca44f470debe575e7230eb423c6981a01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
