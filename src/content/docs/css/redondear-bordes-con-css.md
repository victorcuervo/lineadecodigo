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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QP4KPFV%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T082925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCh%2FAzaVkRDuZk2QpQcUzdvOPjorthY8juGjWx9djEy5AIgdjsvGFk3EipJsnIV0ablLO5xQ0b8QSKHraU5ytHZkPIqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNuK9ZAOqj5fzZhF7ircAxC9KhZkcvr0bHWHn4nPe%2BshvyLYQ%2B7wJ9Zqfe22MPn9ma02FBDqAU9JOLfjG5fGDoVNHRs5wfE6yrvmr8uHQ4G43wHQAwNmTZ2oF7h6PGl%2FPdNAmKE%2FYrWCHK2dqh9hOp%2Fl%2FYwdVhFJvyf72Z%2FfYMJUlre2kxKR7wLnS%2BRn5duhZqo2qWJPc43HG1tTKO4h7aa%2BVZozZaUYs804Xu%2BgbA1Rr4ONQ0BBtxJMvgZ2wRoR80EDjpd%2FnGISj2rRIVjJ8AuxAQLvP1YfdgLUygQ%2F23buc8y5YsZlJFZy0Pz6GfMuxmXhrTYxzDvHLDlYGCEXwelUjTJyfppN0XVe5mO8RvEIjc%2F%2FXSVl3ncsdE11DVaXMxZdOgSc3c08ZWl%2FMSPLPoD14uVIk2wtPHIe%2FK1c1jSxtMTT2RcjpF5NyecBpb0PdxjdkblmkPx76gElj17Vp1Jtoou7v6QDcd7OhRfWZj4y2Piy1SZpmBfvAnyzlr2Eywy%2FB59n3eYA%2BAviwUMgLt5W9szYvbGove1CNr%2FkzQkaYYc1AiQjC4CVXpqMEvNA0YPUcjuAj4NQDB%2FvttYYYBXPfrW83WbQjEPw4PLLOLT59fOsspMIRv%2F8PXl8gsSxXX7i8iLBeDIuXakaMNGk38kGOqUBkR%2Bbt5jA7919R0kWjju4UJlMMSJOW7Bjj%2FFS%2Br%2FVXdkVSNRiQ6P7sKE12zuye75%2BGOEEZBcAvjacAIbGzavCiG%2B2OzMSAUpDxh0gNk5UCLE%2Bey3dUnEJBLXjANLJG4MBtKhmIzY%2Bfqr%2BK7U33ClZOBLAK9YiQr7%2B06GXkyXbXxjfRPJWmgoomSNYpADLA9Ghey6%2FiMaNoqy8FFQNDeoAQapEId8X&X-Amz-Signature=1419d3b4f5692994d30033fa0aebfd89cae796a4f7a7508c53bc5c7e74144b95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QP4KPFV%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T082925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCh%2FAzaVkRDuZk2QpQcUzdvOPjorthY8juGjWx9djEy5AIgdjsvGFk3EipJsnIV0ablLO5xQ0b8QSKHraU5ytHZkPIqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNuK9ZAOqj5fzZhF7ircAxC9KhZkcvr0bHWHn4nPe%2BshvyLYQ%2B7wJ9Zqfe22MPn9ma02FBDqAU9JOLfjG5fGDoVNHRs5wfE6yrvmr8uHQ4G43wHQAwNmTZ2oF7h6PGl%2FPdNAmKE%2FYrWCHK2dqh9hOp%2Fl%2FYwdVhFJvyf72Z%2FfYMJUlre2kxKR7wLnS%2BRn5duhZqo2qWJPc43HG1tTKO4h7aa%2BVZozZaUYs804Xu%2BgbA1Rr4ONQ0BBtxJMvgZ2wRoR80EDjpd%2FnGISj2rRIVjJ8AuxAQLvP1YfdgLUygQ%2F23buc8y5YsZlJFZy0Pz6GfMuxmXhrTYxzDvHLDlYGCEXwelUjTJyfppN0XVe5mO8RvEIjc%2F%2FXSVl3ncsdE11DVaXMxZdOgSc3c08ZWl%2FMSPLPoD14uVIk2wtPHIe%2FK1c1jSxtMTT2RcjpF5NyecBpb0PdxjdkblmkPx76gElj17Vp1Jtoou7v6QDcd7OhRfWZj4y2Piy1SZpmBfvAnyzlr2Eywy%2FB59n3eYA%2BAviwUMgLt5W9szYvbGove1CNr%2FkzQkaYYc1AiQjC4CVXpqMEvNA0YPUcjuAj4NQDB%2FvttYYYBXPfrW83WbQjEPw4PLLOLT59fOsspMIRv%2F8PXl8gsSxXX7i8iLBeDIuXakaMNGk38kGOqUBkR%2Bbt5jA7919R0kWjju4UJlMMSJOW7Bjj%2FFS%2Br%2FVXdkVSNRiQ6P7sKE12zuye75%2BGOEEZBcAvjacAIbGzavCiG%2B2OzMSAUpDxh0gNk5UCLE%2Bey3dUnEJBLXjANLJG4MBtKhmIzY%2Bfqr%2BK7U33ClZOBLAK9YiQr7%2B06GXkyXbXxjfRPJWmgoomSNYpADLA9Ghey6%2FiMaNoqy8FFQNDeoAQapEId8X&X-Amz-Signature=d015b1234a3bcf53090a31a091d65d6b891a8c3bdc5be27de60faed14e4f80a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
