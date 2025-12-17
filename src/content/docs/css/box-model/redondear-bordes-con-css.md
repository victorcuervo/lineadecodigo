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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIUKG7UU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T181329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBMVD3JioHtbCbrDeUYYoiTERvsHh9tckYIElkm8NoTYAiBjPnuywZb0HtnZMSEcgfiDt%2Fnn1fMf7ZMjQ%2BqG0YRH7yqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMu9YwwLM7hmHXYtFvKtwDwGJb8K99TcT45VwBnFgfrDWf72uVDPL5geBKx63pc4NvHkPHLIl1efz2NpBRi5QFFfdai%2BbiWOXtKs0eDV2vfAnJZUYOp7cLGE7vFLCcr6gGWpup0dT%2FkyYtqb8G9WVY0iaWeqKMwOXEAWm%2BJM1DB%2BtwTyB8mGSxhHpmJX0995tI4K74vjiozuOO1bBHNXTm7pFejIQ0nl6%2Fm7DHkGiCpWi5YBNppiCQx94jpX%2FAVirsl1ugXbjACH9UDOOd8vb7dKA8q8KsGerZdk6fgjH6%2BGMj%2FuShjy3iphdUezm98FVdiZGJmw%2BlS2QSYNTNeFefbTXpLW91mvgkgSCWOxy6CK43AVR8IJWYQH1VwXY6836TpXsbINu6hHtm2gY03VYy9o%2BuJTTbFdfToP%2FmmWaQJYA0Y6%2FEZ6D%2BEPQMjFWYRiQItRQiDyIHkZCNMFpyItECoDYxnMTgSB4RhQyo50qd52oHEmelSAhJIUGpHkT66aWnGZsN%2FjuEAttOxRnKbqVVJOLC7renKqjTnqCrv58XNYE6sOGwV2k%2FN%2FN2I1sv8Umb0dA4VBrdtkirsR5OXmWgVGdhunD0WgfyU3e2eqnVAHjWRqmtej9io6nTX9iCaSV5eDpz26SZ%2Fu9pKeow5J6LygY6pgHvqXtkW5Qtluvyk1R7Oaa9bHdQYLXUdKeHfRCDouNLqXJb0Okx9ym5GkNPIFMr5xJTkPNX61MHq1wxM0%2FdRM0DMm8En0JE72vwxXaJPlwtTm3mexiRGbgxEm3pLEWNJa%2Fk2MaJZfs4OudRcchNnbBQELTO42%2Bd1pEX5oEuVNsXl17Is6%2BD6Shzi%2BMAbnl3S7%2FpdS4U%2BAKcMuBh2pcGM5oXl6c3Meo6&X-Amz-Signature=ffaf5bb0ba4eff674265309ad5caa367c7f674881930dad010b288c5c16198ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIUKG7UU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T181329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBMVD3JioHtbCbrDeUYYoiTERvsHh9tckYIElkm8NoTYAiBjPnuywZb0HtnZMSEcgfiDt%2Fnn1fMf7ZMjQ%2BqG0YRH7yqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMu9YwwLM7hmHXYtFvKtwDwGJb8K99TcT45VwBnFgfrDWf72uVDPL5geBKx63pc4NvHkPHLIl1efz2NpBRi5QFFfdai%2BbiWOXtKs0eDV2vfAnJZUYOp7cLGE7vFLCcr6gGWpup0dT%2FkyYtqb8G9WVY0iaWeqKMwOXEAWm%2BJM1DB%2BtwTyB8mGSxhHpmJX0995tI4K74vjiozuOO1bBHNXTm7pFejIQ0nl6%2Fm7DHkGiCpWi5YBNppiCQx94jpX%2FAVirsl1ugXbjACH9UDOOd8vb7dKA8q8KsGerZdk6fgjH6%2BGMj%2FuShjy3iphdUezm98FVdiZGJmw%2BlS2QSYNTNeFefbTXpLW91mvgkgSCWOxy6CK43AVR8IJWYQH1VwXY6836TpXsbINu6hHtm2gY03VYy9o%2BuJTTbFdfToP%2FmmWaQJYA0Y6%2FEZ6D%2BEPQMjFWYRiQItRQiDyIHkZCNMFpyItECoDYxnMTgSB4RhQyo50qd52oHEmelSAhJIUGpHkT66aWnGZsN%2FjuEAttOxRnKbqVVJOLC7renKqjTnqCrv58XNYE6sOGwV2k%2FN%2FN2I1sv8Umb0dA4VBrdtkirsR5OXmWgVGdhunD0WgfyU3e2eqnVAHjWRqmtej9io6nTX9iCaSV5eDpz26SZ%2Fu9pKeow5J6LygY6pgHvqXtkW5Qtluvyk1R7Oaa9bHdQYLXUdKeHfRCDouNLqXJb0Okx9ym5GkNPIFMr5xJTkPNX61MHq1wxM0%2FdRM0DMm8En0JE72vwxXaJPlwtTm3mexiRGbgxEm3pLEWNJa%2Fk2MaJZfs4OudRcchNnbBQELTO42%2Bd1pEX5oEuVNsXl17Is6%2BD6Shzi%2BMAbnl3S7%2FpdS4U%2BAKcMuBh2pcGM5oXl6c3Meo6&X-Amz-Signature=512ec43c2787e8eb70a1dd81746adc4dc8cfdcd8eada6be59dade9c4a0329936&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
