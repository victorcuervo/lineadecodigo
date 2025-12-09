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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Z7YI5MZ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T033358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBAdFIj4AeP0ZDRkRddk2u%2BJ4Mh933bzvbd39IyRmHZyAiA7wIAKhXF3lfWmyMEmBXJpn2Ub4krvi4xi7A33rhhpCSqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMS6sl9YjBOD2dOBJXKtwDKvjWlwuvhZliPQfeQZ2caV39vFOiKd4rV%2F8COuFSEToYmUsKFBAi3jOJm2H629ijKJjlV2K8PrHOJ%2FsRfoTMr%2FkfY4CwxpWWgsQZjTyDYl%2ByI%2FCB9YyRi9vmIO8jJItKsFkn%2B5jUkJYhIeQt%2BF7kRvdmCR947l1bKzh%2FbDwNas%2BEf4WC8Xz3%2FOWYKvRw8TG5QmyUImKRgdSe2rmN3QfUzUD2FgNi8n%2B%2BTG2u5Cy6buArobfsdhYIz9Aurhz1n0tWqLqH13TrrdRLZMlVGfy6MAAxiZeSIJaT3cxdiIWwkVVNtOiA95MDLqtoJ8pBlfykvceDI7KX7TlS1OwiMZqVANJO8M2t7nUl7z7jrHoqTc9Cbqni0Gi1f7776fi21buNnFa8rEK9glBOKiTBzNPYfDABjmkE%2FO%2BbwC8EH6WREa7EPvNmHe6PwivPpMwCrnxN6VMxo3Nkcr5K%2FafvWXf%2BVPTjFJQDy9whPaR%2B8txAjGE3lIH7h9fAlrbr9%2BwL9p9Zh%2B6E2HqEGiU%2BdLIqNplXiNpbe4gvegidWJNDYyivWBGA5ouk%2FvP%2Bj%2BHxkSGCQDUvtPr5n3q4aXPi7zZ85G1mguTQah%2FxBsHNbWEPGRp05O4d0%2BEfU77PS0m0nr4wra7eyQY6pgFEX05uQIkvHEGoEWyTq5yHrg5clfezDal89mJs6NX07%2B2UqWxMJ0TFirWWKugSSzRI%2F7Vnf2%2FlNPme8XHhtudP0wguN6riSDOgehyd%2FzrnKOAr80DuDolWyMP8BA3504dJM2rlq6KdemL9NnchdyWBcyVscpFr%2FtQ%2B%2FHV6P3o391%2FZYs2KiePgOS4qeqXGm1ujS3TW%2FlsWCRYiZFubx8RjXQ7qp21l&X-Amz-Signature=6d1878c987481add275250bd272ebcb0a57edb3522b8426b38fdfb3d9d3b58ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Z7YI5MZ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T033358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBAdFIj4AeP0ZDRkRddk2u%2BJ4Mh933bzvbd39IyRmHZyAiA7wIAKhXF3lfWmyMEmBXJpn2Ub4krvi4xi7A33rhhpCSqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMS6sl9YjBOD2dOBJXKtwDKvjWlwuvhZliPQfeQZ2caV39vFOiKd4rV%2F8COuFSEToYmUsKFBAi3jOJm2H629ijKJjlV2K8PrHOJ%2FsRfoTMr%2FkfY4CwxpWWgsQZjTyDYl%2ByI%2FCB9YyRi9vmIO8jJItKsFkn%2B5jUkJYhIeQt%2BF7kRvdmCR947l1bKzh%2FbDwNas%2BEf4WC8Xz3%2FOWYKvRw8TG5QmyUImKRgdSe2rmN3QfUzUD2FgNi8n%2B%2BTG2u5Cy6buArobfsdhYIz9Aurhz1n0tWqLqH13TrrdRLZMlVGfy6MAAxiZeSIJaT3cxdiIWwkVVNtOiA95MDLqtoJ8pBlfykvceDI7KX7TlS1OwiMZqVANJO8M2t7nUl7z7jrHoqTc9Cbqni0Gi1f7776fi21buNnFa8rEK9glBOKiTBzNPYfDABjmkE%2FO%2BbwC8EH6WREa7EPvNmHe6PwivPpMwCrnxN6VMxo3Nkcr5K%2FafvWXf%2BVPTjFJQDy9whPaR%2B8txAjGE3lIH7h9fAlrbr9%2BwL9p9Zh%2B6E2HqEGiU%2BdLIqNplXiNpbe4gvegidWJNDYyivWBGA5ouk%2FvP%2Bj%2BHxkSGCQDUvtPr5n3q4aXPi7zZ85G1mguTQah%2FxBsHNbWEPGRp05O4d0%2BEfU77PS0m0nr4wra7eyQY6pgFEX05uQIkvHEGoEWyTq5yHrg5clfezDal89mJs6NX07%2B2UqWxMJ0TFirWWKugSSzRI%2F7Vnf2%2FlNPme8XHhtudP0wguN6riSDOgehyd%2FzrnKOAr80DuDolWyMP8BA3504dJM2rlq6KdemL9NnchdyWBcyVscpFr%2FtQ%2B%2FHV6P3o391%2FZYs2KiePgOS4qeqXGm1ujS3TW%2FlsWCRYiZFubx8RjXQ7qp21l&X-Amz-Signature=f68fa1dd440f9cad2ff300038941e041c65c231cfbf5409d08138bdeaeaf8d54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
