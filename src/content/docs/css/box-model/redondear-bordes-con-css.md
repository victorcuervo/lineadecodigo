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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2YK4IPT%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T005042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG4016dkuWme%2F9KpTTK6TNVdyaBWOlU1PthnyxYWyQ77AiAsq2kn7aQYUeTQ7Oi1JG4fcpGQcBSO2jX6p%2FuSDTGpOir%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIM04%2FmwixxQINyezS5KtwDXuprdBMJPzkkMHVQkp7yPK5VXRwiCVZWF93ACP0FOGURwtiD4VBU1rehEz%2FWTSDJ9cgDBfEKwUhNaZu580brjPyoOHIbHM4CXP%2F%2Fl60NoiIouCsDsXKM8Pa%2Bb0QGKFkn%2Bdj%2FLBnL%2FFm112%2Fz8tvaqGNQYuiDad5xJ8U4yEGslTUUmTKZ0V9a9pCIoeTFr3bfZIk9L%2BYc55aS12WxyJBsUO2BKjnSo5S%2BeULsvtKxDMrpWHOn1Ky6gOosOeDti6IDPco8VmS%2F9lJpOkAUa5VF2P9rwlLujJQAec%2Br59JeDWBwlbZjGEaN0iHJptGH7gdbcNAzztqsiwyIaFeW0jJAPw0NRCJ0hA9V43IxVZD7VVc4hNYmOt8uQnMuQop%2F2awFD55iOCWOyT8vU8mWFwCWhOj2HriDN43xY6gXDmD8IBrJpzfb6Gc4h6t40LelUXhwF%2BRY3e5aK8EkCg%2FBqWOBjKn5ygbYtAZVd3r7x3N7ZQJqHdZcc53uu%2BwIfHg0p7I8pmqH0A8pf0fURKUCHLKEvumkxlRsCnOdY3Wz8GicC5CmQylYcJWvI%2BzxLnR3FaNdPEjg66mvkqLfy7dlZJyUDIaxPjJUUpZUvTkoamOQeU8vUGGNvG8ICBWE970wx%2FqHygY6pgFvc7TonVXMhzrm06gBnar5R8VVLFVULD0TMh7cq8Vl7i6Y2wcXzp%2BiNOWWcbzxeIireUnx7cHC1rBqXUOVPVst5q8lqwlJAqwZEjKFnV%2FQ3zfRYO2g8o8wZ3voNzFWxYJCyDMdDIdY%2Ft7EBtYMfLympdCgIy1SLJRhBJFT8i5bxzt1BBQJSRh1QvuNkoOB6Hi9Ky7drYhQ8UiAETUjimt8wxhya5CJ&X-Amz-Signature=5ee3bcd66e3f1745218434b0724d90ef3aaa5d77701cf6c51b2db9768d777cfe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2YK4IPT%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T005043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG4016dkuWme%2F9KpTTK6TNVdyaBWOlU1PthnyxYWyQ77AiAsq2kn7aQYUeTQ7Oi1JG4fcpGQcBSO2jX6p%2FuSDTGpOir%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIM04%2FmwixxQINyezS5KtwDXuprdBMJPzkkMHVQkp7yPK5VXRwiCVZWF93ACP0FOGURwtiD4VBU1rehEz%2FWTSDJ9cgDBfEKwUhNaZu580brjPyoOHIbHM4CXP%2F%2Fl60NoiIouCsDsXKM8Pa%2Bb0QGKFkn%2Bdj%2FLBnL%2FFm112%2Fz8tvaqGNQYuiDad5xJ8U4yEGslTUUmTKZ0V9a9pCIoeTFr3bfZIk9L%2BYc55aS12WxyJBsUO2BKjnSo5S%2BeULsvtKxDMrpWHOn1Ky6gOosOeDti6IDPco8VmS%2F9lJpOkAUa5VF2P9rwlLujJQAec%2Br59JeDWBwlbZjGEaN0iHJptGH7gdbcNAzztqsiwyIaFeW0jJAPw0NRCJ0hA9V43IxVZD7VVc4hNYmOt8uQnMuQop%2F2awFD55iOCWOyT8vU8mWFwCWhOj2HriDN43xY6gXDmD8IBrJpzfb6Gc4h6t40LelUXhwF%2BRY3e5aK8EkCg%2FBqWOBjKn5ygbYtAZVd3r7x3N7ZQJqHdZcc53uu%2BwIfHg0p7I8pmqH0A8pf0fURKUCHLKEvumkxlRsCnOdY3Wz8GicC5CmQylYcJWvI%2BzxLnR3FaNdPEjg66mvkqLfy7dlZJyUDIaxPjJUUpZUvTkoamOQeU8vUGGNvG8ICBWE970wx%2FqHygY6pgFvc7TonVXMhzrm06gBnar5R8VVLFVULD0TMh7cq8Vl7i6Y2wcXzp%2BiNOWWcbzxeIireUnx7cHC1rBqXUOVPVst5q8lqwlJAqwZEjKFnV%2FQ3zfRYO2g8o8wZ3voNzFWxYJCyDMdDIdY%2Ft7EBtYMfLympdCgIy1SLJRhBJFT8i5bxzt1BBQJSRh1QvuNkoOB6Hi9Ky7drYhQ8UiAETUjimt8wxhya5CJ&X-Amz-Signature=381b73f1e6b8b44b1c9e9069a4ac4cb0fad8c799e339d06883377de72ce38d58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
