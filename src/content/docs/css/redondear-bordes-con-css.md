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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7MVGWPU%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T122642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICOg0rqcI6aqpJE%2BAnfh92K81Nv%2BWzO9sDHHSVe%2BUar%2FAiAYEO%2F1waB8aifyXblEomLLaBp6XxoCMbCbovRk0fGKJir%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMEZr61%2BSEIiYVLX4EKtwDMN4OXqqDNsM5Y%2B003MSKdIoauZzWd499uqSsTNHbkrd5Rb7upTLXob64u%2FhjeQeJ3CrmpzTGFX896ZSH3SSCx9Fu9ACeoAWQjUngpUpjsZv2bqWj35G4L2qA6QgbKl62dWJy1ieZ7EMKBlyKFt5XwOEU%2BWFlc%2BelySskkWjTZj7anPky4kSOWLiSuHSEHvJUmicppbQOU2E5uOoeKFNlU6cbcEfAJp9mji8OWpV5lDtROJ5doMN51eJytIW4AVu%2BLlxgCHHbDDNqqh2gqz%2BOvdJjQAv3oSX0Xirt1rnYF9qdH3WxpCtV0GY8optwIzdPU6e4Zt%2B5G0ZU89mgd8FvgwhbOX7wdayi0JBvuL%2BSM6ZnOjyJp82YnWNuGG12A2ywMGdxZ2rcjzZh%2BORSz%2FI72kvm0Hw77LznnJPGo52qYJMHjCYWPCDAm2y1LfAa4VxOYEFHzDJWIGa3i%2FKv2q%2Fl3QpBddJjp1SNigGYRYhf2EW2bHQKVp4UtX55PQ%2BPZznG0pcPWATnYIhCqxY5Ars0i2ed7ZbQKoemRT%2FqV70T6pH6zU8H2kSMzhsjrrD%2BR665vUvb8V3ERnUCyBtQJP9j87JTWOZayuu2WF6jVnm%2FHhjydUYDhX4Cfso6BTQw66bQyQY6pgF1ccF35pxVcyJK4UfI4WSGbmGdVQvAgTCFNaAYFehw0vT8xu0biP%2FxUPbjuEr2fGZiySJQyUR%2FHQkWWqXBvyHOXSnek9%2FB9wWRrNYRodnm92RXQNdjgj1ap8Iq0AyJW0VlXdA56RbJpB2TCo5DGo%2FldoFfeWnL3POkucntoAw%2Fnj1qwl8s3Uj5I4FJjQxip1nJgcKCnt4TZnVLmgu4zzKzTJtTPydG&X-Amz-Signature=f01572fb21d759c54e0b790eaca63edb455ef8fbaf3d6854fd14a1b1c746ea16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7MVGWPU%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T122642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICOg0rqcI6aqpJE%2BAnfh92K81Nv%2BWzO9sDHHSVe%2BUar%2FAiAYEO%2F1waB8aifyXblEomLLaBp6XxoCMbCbovRk0fGKJir%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMEZr61%2BSEIiYVLX4EKtwDMN4OXqqDNsM5Y%2B003MSKdIoauZzWd499uqSsTNHbkrd5Rb7upTLXob64u%2FhjeQeJ3CrmpzTGFX896ZSH3SSCx9Fu9ACeoAWQjUngpUpjsZv2bqWj35G4L2qA6QgbKl62dWJy1ieZ7EMKBlyKFt5XwOEU%2BWFlc%2BelySskkWjTZj7anPky4kSOWLiSuHSEHvJUmicppbQOU2E5uOoeKFNlU6cbcEfAJp9mji8OWpV5lDtROJ5doMN51eJytIW4AVu%2BLlxgCHHbDDNqqh2gqz%2BOvdJjQAv3oSX0Xirt1rnYF9qdH3WxpCtV0GY8optwIzdPU6e4Zt%2B5G0ZU89mgd8FvgwhbOX7wdayi0JBvuL%2BSM6ZnOjyJp82YnWNuGG12A2ywMGdxZ2rcjzZh%2BORSz%2FI72kvm0Hw77LznnJPGo52qYJMHjCYWPCDAm2y1LfAa4VxOYEFHzDJWIGa3i%2FKv2q%2Fl3QpBddJjp1SNigGYRYhf2EW2bHQKVp4UtX55PQ%2BPZznG0pcPWATnYIhCqxY5Ars0i2ed7ZbQKoemRT%2FqV70T6pH6zU8H2kSMzhsjrrD%2BR665vUvb8V3ERnUCyBtQJP9j87JTWOZayuu2WF6jVnm%2FHhjydUYDhX4Cfso6BTQw66bQyQY6pgF1ccF35pxVcyJK4UfI4WSGbmGdVQvAgTCFNaAYFehw0vT8xu0biP%2FxUPbjuEr2fGZiySJQyUR%2FHQkWWqXBvyHOXSnek9%2FB9wWRrNYRodnm92RXQNdjgj1ap8Iq0AyJW0VlXdA56RbJpB2TCo5DGo%2FldoFfeWnL3POkucntoAw%2Fnj1qwl8s3Uj5I4FJjQxip1nJgcKCnt4TZnVLmgu4zzKzTJtTPydG&X-Amz-Signature=d04d0e31d6d5632ef93d37047c33e6772b5f05369c956876dde964e765f639be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
