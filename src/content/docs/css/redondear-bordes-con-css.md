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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WACEBNY%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T004636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID1sgCB%2Fpm5ChP%2FUocwPwVRXUXBIpcuHe94Uq5Ic4hFMAiBm7qymNEguM2%2FJMD7QuKwSv2x1RJV6mDSPlFzB23kizyqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKtVetRWBx4OKxd0eKtwD%2BlFVAZv4%2B5d%2B6dyU7WnF2iQvTuvAVSuxA2rHFZKa8Tr%2FKAX3co0v%2F1p3R%2BF9MT9F62UqQaO3ovhmIn2%2FjkY%2BEA8tvTNMx7WKR6QaAqGqIVYcLSbMvSEH1Skjv3TaNZbWsfBM9dvIzPgyTvqT0V1hLeQIYz1Pat%2Bgl3oAP0Bg240TNUy5m1EDcyMbpQlqd7VREZlhMhHKniGDiQHTBcuL%2FxWmQyxGwQ%2F0cLDwDhKCSpnny9bp3QQ493JRhaPLWxe%2BoasCZ%2B5tf9AtMtzJDXSB72FtyEmbwaVfRoQvdNeMcnF8IFiXhf70bSMJvA%2Fh8tkJRK4qfPEad0xaOcuf%2FGO%2FoNJ1tjChMI77dAY6%2BEY7rQY05w4uvGLys6do1U2xfVeFFNpSSGwnecIIAKw0%2Bit10jBp0GSs7vO%2B8KMwGKw3gepV1nKa%2BHXMWYiapQP%2FJ7fsWDSMLoca8sHKiDF4acjne3MjASbB%2BDswSZfGVcwwJGc%2BXOqHBc4oVxV4Bt%2BOrJl9W0K91DCSGKO7gUkhv53NwtXLdJFH7bFQY2Vt9Xp%2FwTSu7iwV2YREaZF%2F0aG0%2B8smEgbil98TIN8yehY4Tuu%2FH9DLPVkZ92KxIt1AKDAzs%2FoswuZv4X01oHj4VaYwj%2F7SyQY6pgGSx%2FE12fVUlgFbRLPZN8vyobp%2BBzpf8n6%2BHJN1weCdZ9brcM%2BQuIvKuIvptSjxiWqX2q8DXoqaMnekzNdetws1yY8xd0vDS74dSRz3pNmRjSYgBdjnNyUTq1mnN0VEsF%2B2b%2BMEZy36h7bcb48uBRWiW3MueA9RSAgnRt0kdsPWjYL3mDuESVIvO6HR67n9anu%2BX8R6CqlM%2Bhor35u7jPlJ8hLB2Euj&X-Amz-Signature=2c36565452a579ae3cc04b99fac6761084c86d524e71b11de70e65da1e5f8075&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WACEBNY%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T004636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID1sgCB%2Fpm5ChP%2FUocwPwVRXUXBIpcuHe94Uq5Ic4hFMAiBm7qymNEguM2%2FJMD7QuKwSv2x1RJV6mDSPlFzB23kizyqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKtVetRWBx4OKxd0eKtwD%2BlFVAZv4%2B5d%2B6dyU7WnF2iQvTuvAVSuxA2rHFZKa8Tr%2FKAX3co0v%2F1p3R%2BF9MT9F62UqQaO3ovhmIn2%2FjkY%2BEA8tvTNMx7WKR6QaAqGqIVYcLSbMvSEH1Skjv3TaNZbWsfBM9dvIzPgyTvqT0V1hLeQIYz1Pat%2Bgl3oAP0Bg240TNUy5m1EDcyMbpQlqd7VREZlhMhHKniGDiQHTBcuL%2FxWmQyxGwQ%2F0cLDwDhKCSpnny9bp3QQ493JRhaPLWxe%2BoasCZ%2B5tf9AtMtzJDXSB72FtyEmbwaVfRoQvdNeMcnF8IFiXhf70bSMJvA%2Fh8tkJRK4qfPEad0xaOcuf%2FGO%2FoNJ1tjChMI77dAY6%2BEY7rQY05w4uvGLys6do1U2xfVeFFNpSSGwnecIIAKw0%2Bit10jBp0GSs7vO%2B8KMwGKw3gepV1nKa%2BHXMWYiapQP%2FJ7fsWDSMLoca8sHKiDF4acjne3MjASbB%2BDswSZfGVcwwJGc%2BXOqHBc4oVxV4Bt%2BOrJl9W0K91DCSGKO7gUkhv53NwtXLdJFH7bFQY2Vt9Xp%2FwTSu7iwV2YREaZF%2F0aG0%2B8smEgbil98TIN8yehY4Tuu%2FH9DLPVkZ92KxIt1AKDAzs%2FoswuZv4X01oHj4VaYwj%2F7SyQY6pgGSx%2FE12fVUlgFbRLPZN8vyobp%2BBzpf8n6%2BHJN1weCdZ9brcM%2BQuIvKuIvptSjxiWqX2q8DXoqaMnekzNdetws1yY8xd0vDS74dSRz3pNmRjSYgBdjnNyUTq1mnN0VEsF%2B2b%2BMEZy36h7bcb48uBRWiW3MueA9RSAgnRt0kdsPWjYL3mDuESVIvO6HR67n9anu%2BX8R6CqlM%2Bhor35u7jPlJ8hLB2Euj&X-Amz-Signature=c6a61ce4b92c9562a6d9ffbf8821e993be50c84f7d660eee9b7dc97fab6e348b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
