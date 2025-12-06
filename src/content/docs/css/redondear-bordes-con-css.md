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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3YLQVTZ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T084840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDJxr7f4D4bI7RdvfAvxukwXrjFa9ddUj9SjOujod4PXAiAsvjYS8mKwIJ6bsShpqZ1OaJEMbTBfrrAI0V15Sw0Mnir%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMyg8rL6mbzDR%2FqjxiKtwDItHhl%2F85tQf%2Fzu%2ByHevPKy9ZPDXy6g425dIcwmwru1Wc2ne5Gz1u8kZ6yC9ZPI5ZgvRDoX69GmLULwhybkk2GwwWCNQF75YJsj9hf8JZEh7E7h%2Fv%2B4cuvGoGl%2F2Ps%2BdEAYQPja3mI2pkqsTUR0zjcVDMYN2mFtEfNVQJaD8m1FXIDyp1mBUVUcjLqUn6dlAfmwGLIJjYrpuTy433nfBWQUaGYtP11JUZmEI%2F55IaOYNe6GVtB%2BRjL7T0pz4dWvoVnUPwqisr3kb5fvZtntSiSId4UN55OggCTQ%2F80Oj3H19NirvfjSTo92hF1IO4Syo6nVfdBde03aoYXpBsIBMVZWE1xbeQe3nnGE%2Bm8hIBfWQEdVyL41YbJ9%2BnPSDsKFA4X%2FK%2Byy4ULqLmB5TZt1UABWNRXWUotm5jf4eYZ1dImXJkKhqp2ayeqfZ9GU33dOr%2Fmskbr9HAj3RZMI62zdLVivpLd3IY8Hl%2FP5Jx7nDw0GSo2X5coGWNTyg%2BlUzil5HkVODhY1IjHsFq%2Fo46Juax%2BEclImf2ywNFkseCprNSRni0skDKtEhzX2dsteybrdBa344buWPVX43vpsyLFQympRFWZ44AcKQYMGi14R2%2FGjtr%2BbPVGiy2ypMBPzwwjLzPyQY6pgF31QpYNPhRNkskRGdTHixvvs5qRcYyBtl4wulX1A%2Fqj4LWlEpp%2Bk4kjDm5Xj2%2F2pMCo072qy9q7swy5LZ%2Flv2F1KCjNSycdxiW7XBJxvlac2C3VZcXywZXLjP%2FAvjzNp69Vz9cVBOyT44%2BmOC2LwwY32uK2u7%2BIQ9U%2FjEZ8YxiZFz69N6sSKbYpD8ae24T4YYDgmekksu9M6TFMBCPLCygCjd6cBSV&X-Amz-Signature=5afd66262894f5720ad8c094ee34028b77cd46fe65aa5414bde9de5591d35d22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3YLQVTZ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T084840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDJxr7f4D4bI7RdvfAvxukwXrjFa9ddUj9SjOujod4PXAiAsvjYS8mKwIJ6bsShpqZ1OaJEMbTBfrrAI0V15Sw0Mnir%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMyg8rL6mbzDR%2FqjxiKtwDItHhl%2F85tQf%2Fzu%2ByHevPKy9ZPDXy6g425dIcwmwru1Wc2ne5Gz1u8kZ6yC9ZPI5ZgvRDoX69GmLULwhybkk2GwwWCNQF75YJsj9hf8JZEh7E7h%2Fv%2B4cuvGoGl%2F2Ps%2BdEAYQPja3mI2pkqsTUR0zjcVDMYN2mFtEfNVQJaD8m1FXIDyp1mBUVUcjLqUn6dlAfmwGLIJjYrpuTy433nfBWQUaGYtP11JUZmEI%2F55IaOYNe6GVtB%2BRjL7T0pz4dWvoVnUPwqisr3kb5fvZtntSiSId4UN55OggCTQ%2F80Oj3H19NirvfjSTo92hF1IO4Syo6nVfdBde03aoYXpBsIBMVZWE1xbeQe3nnGE%2Bm8hIBfWQEdVyL41YbJ9%2BnPSDsKFA4X%2FK%2Byy4ULqLmB5TZt1UABWNRXWUotm5jf4eYZ1dImXJkKhqp2ayeqfZ9GU33dOr%2Fmskbr9HAj3RZMI62zdLVivpLd3IY8Hl%2FP5Jx7nDw0GSo2X5coGWNTyg%2BlUzil5HkVODhY1IjHsFq%2Fo46Juax%2BEclImf2ywNFkseCprNSRni0skDKtEhzX2dsteybrdBa344buWPVX43vpsyLFQympRFWZ44AcKQYMGi14R2%2FGjtr%2BbPVGiy2ypMBPzwwjLzPyQY6pgF31QpYNPhRNkskRGdTHixvvs5qRcYyBtl4wulX1A%2Fqj4LWlEpp%2Bk4kjDm5Xj2%2F2pMCo072qy9q7swy5LZ%2Flv2F1KCjNSycdxiW7XBJxvlac2C3VZcXywZXLjP%2FAvjzNp69Vz9cVBOyT44%2BmOC2LwwY32uK2u7%2BIQ9U%2FjEZ8YxiZFz69N6sSKbYpD8ae24T4YYDgmekksu9M6TFMBCPLCygCjd6cBSV&X-Amz-Signature=e909c8b811d09eb2d83910131f479966147d486b767b58d17a26cf3dbae02472&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
