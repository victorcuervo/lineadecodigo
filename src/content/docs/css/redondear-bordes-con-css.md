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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BGPGQZY%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T211034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGVu2ezR21MooMk3DG9GapYqLIjTEd4nDvUbKa%2FQ7AVdAiBf373CzEBDUIo7SuYpAUFAEkylPWDRuJZmdDFqSu0F8SqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwVieoht6B7Kzzu1qKtwDIfC4dhn7PBQsT8%2FmFfAvFjwAcHu7MqM2FIY3A1WoD0BHjYVjJtZT2f0Pvn0qYJY9CkqInQYBDGLNtLwEIO34Z7NkZ%2F0A9kxEGjRuxZdMY6kWt5O8dWZoeeh5%2BhOxw1KVgrY%2BR2ybZj2yrbSVzhaSESUlhPqRaL3pxnpMc8LkPXaFsiLJSmaxLWdDj2qLLgIppYS4qbB6w21g8cU2dm4rs70GysIvo0aOtAMp844vhK5G3tPnefXKRDzOkFbTsiZdMUzK5Z8gMPF8bHf3CLf%2FHZ%2BKunZ7R6P571hoLNUtusLhVkEO3%2Bq%2Flbd8gnpDSeHxbgJ1%2BCanNa%2BhU6F0GtyGjpwLJ9X0xwRvDewj%2F5a4V2hPJpCoX3adg2LdTsdmmWbUketeov7cnq3YiVOSNqjSQiQyoIZwnfj7HW4l6rDkTxIuzbFVThyAYLggxOKQUcNx23gcj6LUwgDRa1nTfqPq1HYAbReGg540NWpAngSXpqx9ziY6lEOdS15dG9kaHTlXKzjYeqwTCZV3L8GBIaEtIyhhEKH2pBp2QOwsNn%2Btr%2FEQEb%2Bw9C65jLLiegqWkAzpINNvahVLJJ3ZQQ8wpfy5lSWkQtP1gSuqQD9JvbE87mgxmWxJ4%2FRBUn7ci2cw88bXyQY6pgGfkkaQgWnOo3lWE%2F1ybv6OivT4X8WHLuVhczKCMiqSJvc9jcgiNNb%2Brlof83HX5JGIO7h7WmwK%2BneTapbgc2UYhU2xv%2BSXwX0GHuWlb1gTXtb6IW9TecaqZJb02qhdcXb%2BapIX3H61xVmV0Ox1DvOKpzYFqKt6h54a0KSzoUPFwIHRDR76Fehcl%2BqMuOxVQ%2BjfC%2Fglf71p4MlAvEpnZkVJ2ZgU3D81&X-Amz-Signature=17a0fecc2ad5e085979720078bcb4d0479ac9c787d6b9ef2d52cd48458040e81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BGPGQZY%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T211034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGVu2ezR21MooMk3DG9GapYqLIjTEd4nDvUbKa%2FQ7AVdAiBf373CzEBDUIo7SuYpAUFAEkylPWDRuJZmdDFqSu0F8SqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwVieoht6B7Kzzu1qKtwDIfC4dhn7PBQsT8%2FmFfAvFjwAcHu7MqM2FIY3A1WoD0BHjYVjJtZT2f0Pvn0qYJY9CkqInQYBDGLNtLwEIO34Z7NkZ%2F0A9kxEGjRuxZdMY6kWt5O8dWZoeeh5%2BhOxw1KVgrY%2BR2ybZj2yrbSVzhaSESUlhPqRaL3pxnpMc8LkPXaFsiLJSmaxLWdDj2qLLgIppYS4qbB6w21g8cU2dm4rs70GysIvo0aOtAMp844vhK5G3tPnefXKRDzOkFbTsiZdMUzK5Z8gMPF8bHf3CLf%2FHZ%2BKunZ7R6P571hoLNUtusLhVkEO3%2Bq%2Flbd8gnpDSeHxbgJ1%2BCanNa%2BhU6F0GtyGjpwLJ9X0xwRvDewj%2F5a4V2hPJpCoX3adg2LdTsdmmWbUketeov7cnq3YiVOSNqjSQiQyoIZwnfj7HW4l6rDkTxIuzbFVThyAYLggxOKQUcNx23gcj6LUwgDRa1nTfqPq1HYAbReGg540NWpAngSXpqx9ziY6lEOdS15dG9kaHTlXKzjYeqwTCZV3L8GBIaEtIyhhEKH2pBp2QOwsNn%2Btr%2FEQEb%2Bw9C65jLLiegqWkAzpINNvahVLJJ3ZQQ8wpfy5lSWkQtP1gSuqQD9JvbE87mgxmWxJ4%2FRBUn7ci2cw88bXyQY6pgGfkkaQgWnOo3lWE%2F1ybv6OivT4X8WHLuVhczKCMiqSJvc9jcgiNNb%2Brlof83HX5JGIO7h7WmwK%2BneTapbgc2UYhU2xv%2BSXwX0GHuWlb1gTXtb6IW9TecaqZJb02qhdcXb%2BapIX3H61xVmV0Ox1DvOKpzYFqKt6h54a0KSzoUPFwIHRDR76Fehcl%2BqMuOxVQ%2BjfC%2Fglf71p4MlAvEpnZkVJ2ZgU3D81&X-Amz-Signature=5f70b3fe77db38f3b546cb52e85ba2ef80232c003fc4fcf0bf2d662cdf67b22e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
