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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGDV55R7%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T031711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF0UcowW%2F71HSCWKFwQQyFvoZaOrKbXlvqLkLzSlNz1nAiALeiBUsjPJDOXMS4pjJKLYDbSgFFCyRTahwTWDb9COiyqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLhCz1jvErjhJNBRRKtwDaEnljk5WqCEKK5juu2qxtpFSpWFiEDZN4qvKeG08x6Lj%2FKE2OZ5ifU5XyA%2Ff0TePEWdbc9A70sOPBZGm%2FdDHbatHZhD%2B2OJAZsuEPCao0ZqEIlv1IwErXhik7hMcMJmoXYuomgp2yeYHaEeTJdbbjejPp9sP%2FDx%2FTTPnqY%2FKNQ5Gi5WPYAEUOekeA3krix9ABjsZH8NbO1PDGCYpqj6%2F%2B49BfxAXjuRd5%2F1G4efaBBzVQcKHpz5y9x0kYvvU%2B6Bsf5FrMr%2FA%2FZAjSzCceoIyl6xvOjOE6QfhtVRGzskgNpa7p6o%2FglNDkhiz91WppdySC%2B93qE0cERVXzBz0nmiAvbM6qaErHnDqH2LwcmkK%2FJU1aLrD1aJdaVGvQXS76dHXAIrrL5cPWiw6FuLgnrTWwSr8Ps1VE5h4JQTXY0L0XMmAEZ1B9mEVlKVamu3qFYgSUR1tdJ3duLIP4rQXM4OvjTs0%2FCQUsZt5xCTxrGZw860GXtgYIPOti5TBwhQzOo58Gr2poENeiuH6afTiBrKp4eF7KU15QdZjVvWoAhHdp1SAVPdFukRhedhTrd2GkDzla6bW1SPcHVvmOhVkil3mUapXOCN0hWCrIYp5c42kwSNwyll165pbKk9KrQgwy%2F3SyQY6pgE5j5oKk2ORbyTozZzjkzKVrQw1azoIB3owYkesFUYdnqZUgblXhgUzqWkF48CpddJEZ09KGPl3LgpaN8g5z%2BrtWL1jGMrieokHLC%2FdIZLkVKpchwA2%2Fcf09pIu70A5WjHqmvx0r5Ey8C0%2B2ZYxFsWtCYvUM%2BLLMOtGdfk45lXIyDriAYEybzsyBgm9XHGuSgGeT81Z%2BVzOBwWMceFVlr%2B3MiSvIDiq&X-Amz-Signature=93e9d3797c32c2ca88a2e482e4033e4bfb48060173abe92a9b6c16d6fe9ca74c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGDV55R7%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T031711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF0UcowW%2F71HSCWKFwQQyFvoZaOrKbXlvqLkLzSlNz1nAiALeiBUsjPJDOXMS4pjJKLYDbSgFFCyRTahwTWDb9COiyqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLhCz1jvErjhJNBRRKtwDaEnljk5WqCEKK5juu2qxtpFSpWFiEDZN4qvKeG08x6Lj%2FKE2OZ5ifU5XyA%2Ff0TePEWdbc9A70sOPBZGm%2FdDHbatHZhD%2B2OJAZsuEPCao0ZqEIlv1IwErXhik7hMcMJmoXYuomgp2yeYHaEeTJdbbjejPp9sP%2FDx%2FTTPnqY%2FKNQ5Gi5WPYAEUOekeA3krix9ABjsZH8NbO1PDGCYpqj6%2F%2B49BfxAXjuRd5%2F1G4efaBBzVQcKHpz5y9x0kYvvU%2B6Bsf5FrMr%2FA%2FZAjSzCceoIyl6xvOjOE6QfhtVRGzskgNpa7p6o%2FglNDkhiz91WppdySC%2B93qE0cERVXzBz0nmiAvbM6qaErHnDqH2LwcmkK%2FJU1aLrD1aJdaVGvQXS76dHXAIrrL5cPWiw6FuLgnrTWwSr8Ps1VE5h4JQTXY0L0XMmAEZ1B9mEVlKVamu3qFYgSUR1tdJ3duLIP4rQXM4OvjTs0%2FCQUsZt5xCTxrGZw860GXtgYIPOti5TBwhQzOo58Gr2poENeiuH6afTiBrKp4eF7KU15QdZjVvWoAhHdp1SAVPdFukRhedhTrd2GkDzla6bW1SPcHVvmOhVkil3mUapXOCN0hWCrIYp5c42kwSNwyll165pbKk9KrQgwy%2F3SyQY6pgE5j5oKk2ORbyTozZzjkzKVrQw1azoIB3owYkesFUYdnqZUgblXhgUzqWkF48CpddJEZ09KGPl3LgpaN8g5z%2BrtWL1jGMrieokHLC%2FdIZLkVKpchwA2%2Fcf09pIu70A5WjHqmvx0r5Ey8C0%2B2ZYxFsWtCYvUM%2BLLMOtGdfk45lXIyDriAYEybzsyBgm9XHGuSgGeT81Z%2BVzOBwWMceFVlr%2B3MiSvIDiq&X-Amz-Signature=a9b2f658ef9d7bea764896eb4b86c4f9be7b75aa87c252a27e085b99a08b6e61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
