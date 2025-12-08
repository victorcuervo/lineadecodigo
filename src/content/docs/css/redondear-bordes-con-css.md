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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664X3AHGKE%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T090611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmFpARvubHVwcD9uEeSEphuCri1LaLtVkEqBOmv6GMvAIhAMffnlttzciXPvTO29Fl999KSvFGD71qE%2FpSNA%2FW8unaKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxg55t2gsJkfxt%2BBq8q3APlX%2FPusX6fvGUiSwE%2F0bP7i6z1YWBuoRzD91d2uReVKhoxK4%2Bt2ibnxA6QBnjEEe197sINlZfEKmm%2BTLGO8KEguyKAO%2F6JmHlFA0FiG25Ya2FLj3kCF9JxvDye7P4%2BrRFm3uCf4ZEJ8kFNS%2B0W0qk9%2FT%2FO0DEjkykRkviwZladWSZayfragCHNu9F3ykWOGs06iRcmTqrs36LW9Bn0TlPG7D3AEX7Ry7HLVb%2F17FcRCDCX4wSKZnV0hMuQM3KgCgKQZpVc8ZsF2VBWqCxyA%2FT8uAlXhzIqy8NnQP%2BDivzvPlFG0uHA4%2FllTlqshs5schgSgaskz5HTpyf38LTnzA94dd99aJULtyp5dQuVrGcIkbm9fYoN%2F2U1%2FKcEKbz4cVAGHxhmy4hk0CaTWzTBfJUw0TA6OQVaHAUti2EF86VGZSvjcR6%2Fe1DNpNRiS9kIkWMvWG1PO7CMkmDXb2TJpXG0RRajbHsC14wHHoz0ueg330aw%2BtM%2FicIJBlVajULKFuGnFBpI%2F3FwcFW1VBhnf7xsPioKPPUeA%2BtUq%2Fcn91BEe4QjT28%2B8ZYNPEcRfbuuJgI0GIw9BUPY1AGToRlahWTgPctp%2BefU9RcE0oGReuVaoEE3WqGLt6n6zNz2fDCB7tnJBjqkAaeeXw0pxFAGzjvcKDvbKnXP1cHTkSh4NNvPiNvmwlDIyH3ZcnbivTU3gyuKJCwrWOATKvt%2FIbvAXoShr%2Fuv17Z2WXN6Ia1ALx15kyLXbwNQ%2FyepM0blMi%2BAxtbftEOB7QIDWhwb%2BhZ7MqTr1aRqG9uRjcVoaVpkiAfq4gas53egR9nb6DGVfgdKvY6K32JD0DRyE%2FjBvq6iOZ1u6IpEr6zABngQ&X-Amz-Signature=3506802297fadda5be2b8b557ee78cd33852bb7692dd9341213586e0dc4bb571&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664X3AHGKE%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T090611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmFpARvubHVwcD9uEeSEphuCri1LaLtVkEqBOmv6GMvAIhAMffnlttzciXPvTO29Fl999KSvFGD71qE%2FpSNA%2FW8unaKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxg55t2gsJkfxt%2BBq8q3APlX%2FPusX6fvGUiSwE%2F0bP7i6z1YWBuoRzD91d2uReVKhoxK4%2Bt2ibnxA6QBnjEEe197sINlZfEKmm%2BTLGO8KEguyKAO%2F6JmHlFA0FiG25Ya2FLj3kCF9JxvDye7P4%2BrRFm3uCf4ZEJ8kFNS%2B0W0qk9%2FT%2FO0DEjkykRkviwZladWSZayfragCHNu9F3ykWOGs06iRcmTqrs36LW9Bn0TlPG7D3AEX7Ry7HLVb%2F17FcRCDCX4wSKZnV0hMuQM3KgCgKQZpVc8ZsF2VBWqCxyA%2FT8uAlXhzIqy8NnQP%2BDivzvPlFG0uHA4%2FllTlqshs5schgSgaskz5HTpyf38LTnzA94dd99aJULtyp5dQuVrGcIkbm9fYoN%2F2U1%2FKcEKbz4cVAGHxhmy4hk0CaTWzTBfJUw0TA6OQVaHAUti2EF86VGZSvjcR6%2Fe1DNpNRiS9kIkWMvWG1PO7CMkmDXb2TJpXG0RRajbHsC14wHHoz0ueg330aw%2BtM%2FicIJBlVajULKFuGnFBpI%2F3FwcFW1VBhnf7xsPioKPPUeA%2BtUq%2Fcn91BEe4QjT28%2B8ZYNPEcRfbuuJgI0GIw9BUPY1AGToRlahWTgPctp%2BefU9RcE0oGReuVaoEE3WqGLt6n6zNz2fDCB7tnJBjqkAaeeXw0pxFAGzjvcKDvbKnXP1cHTkSh4NNvPiNvmwlDIyH3ZcnbivTU3gyuKJCwrWOATKvt%2FIbvAXoShr%2Fuv17Z2WXN6Ia1ALx15kyLXbwNQ%2FyepM0blMi%2BAxtbftEOB7QIDWhwb%2BhZ7MqTr1aRqG9uRjcVoaVpkiAfq4gas53egR9nb6DGVfgdKvY6K32JD0DRyE%2FjBvq6iOZ1u6IpEr6zABngQ&X-Amz-Signature=d5a13d75f7afff4d083ad46a4d0eeba171d0e9ec3514b1571538d0fd6761071b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
