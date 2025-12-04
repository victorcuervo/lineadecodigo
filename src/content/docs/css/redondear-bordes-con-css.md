---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDWFMMXJ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T090831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQCtDR9ro0D4zASD%2BmKeIwgkHj6iLXXIICTi0YyD3U2Q6QIhAM3HaN0CYpq5TtAP0TA3LkJrwZG9k1jlr%2B%2BDNOsxeFe7Kv8DCEEQABoMNjM3NDIzMTgzODA1IgwoXhq%2Fje8xIZ7XlPgq3APhTTw%2BB1JRFr2ldNCzWEwEdlX2Y629bnam8ZvyfZDSVwQkdSuUmnqaccIiZotw3%2BWZZrflHXwLFxDVGYjYgWH0QdfD4ppGQrQ73zSqTImwkNI4GABsAw%2FNlWNki5qYRGnd%2BLgUuH%2BU4%2BGitJjh6wsFwZgFPyhnFcH%2BDbhePAIaLUGBeHhxjIpMOyPKetLQfspmN1fPwbDTVOXoYCVfnP7PmyuOVBTxwt%2Be%2BgysUtUJ5SIxnKsT5u0h7V2EMEvnsXWtLDV9OqkTfIkRa%2FTvBOZdYBvNtg4HeY%2F9c42YprpNKXARQRow51cNuVod7f9PfEtXM0%2BfcfHIYLcFSkAhEJP17tcwDaHYgQJdXCPyh%2BIzt3sxAE%2FG36aN%2FI76hhNGlYb0Oamq6M5Cu8n04LGce1tUZ378P%2BsYm5pvExE%2BDlXTSeSaCRRfy1K2UWr%2BQQM6n9YiR7d2qmvgpo6Pkgk8XFk4abn2ScLo%2F%2Bw9hlZ0ER94jzyMv6P4kHeJSIZru7lOO0M5czLsDiMShJE8sWB3dQ7ZNkao%2FeDV%2F72GL6qW1KBkRCNedQRGf86ftnY%2FU0lmttuxYIPT5zETXOl2zRUM5jHA%2FT38nJFVooXxbKmbfUcxCOfriIeA%2FQE3xke3yDD8hcXJBjqkASuj8JMOiB3nGE6oIhGiq%2FCGYmBbrawGmKNQO0QK8e%2BzJHVnk0Oh4S1y2B11YQRr5%2FaQaHgXp1KRKx2JX6hpjVa5vXzTTMD12j8gI7NH4Ku6VcJqa25wjm5vNWtIGi7WMMfr55gBZYbBJ%2FGn68dbHX%2B1cOMngJIDnZ5kxIaCVWfmZv0GS3bsvH%2BA%2BF0Gep63XFCvvZfQKYY%2B%2FyrW2e4KaVknnp7Q&X-Amz-Signature=e2613531e595c22811ed98a3f0bab0bf299502a8582bb674eedb227948931fe1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDWFMMXJ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T090831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQCtDR9ro0D4zASD%2BmKeIwgkHj6iLXXIICTi0YyD3U2Q6QIhAM3HaN0CYpq5TtAP0TA3LkJrwZG9k1jlr%2B%2BDNOsxeFe7Kv8DCEEQABoMNjM3NDIzMTgzODA1IgwoXhq%2Fje8xIZ7XlPgq3APhTTw%2BB1JRFr2ldNCzWEwEdlX2Y629bnam8ZvyfZDSVwQkdSuUmnqaccIiZotw3%2BWZZrflHXwLFxDVGYjYgWH0QdfD4ppGQrQ73zSqTImwkNI4GABsAw%2FNlWNki5qYRGnd%2BLgUuH%2BU4%2BGitJjh6wsFwZgFPyhnFcH%2BDbhePAIaLUGBeHhxjIpMOyPKetLQfspmN1fPwbDTVOXoYCVfnP7PmyuOVBTxwt%2Be%2BgysUtUJ5SIxnKsT5u0h7V2EMEvnsXWtLDV9OqkTfIkRa%2FTvBOZdYBvNtg4HeY%2F9c42YprpNKXARQRow51cNuVod7f9PfEtXM0%2BfcfHIYLcFSkAhEJP17tcwDaHYgQJdXCPyh%2BIzt3sxAE%2FG36aN%2FI76hhNGlYb0Oamq6M5Cu8n04LGce1tUZ378P%2BsYm5pvExE%2BDlXTSeSaCRRfy1K2UWr%2BQQM6n9YiR7d2qmvgpo6Pkgk8XFk4abn2ScLo%2F%2Bw9hlZ0ER94jzyMv6P4kHeJSIZru7lOO0M5czLsDiMShJE8sWB3dQ7ZNkao%2FeDV%2F72GL6qW1KBkRCNedQRGf86ftnY%2FU0lmttuxYIPT5zETXOl2zRUM5jHA%2FT38nJFVooXxbKmbfUcxCOfriIeA%2FQE3xke3yDD8hcXJBjqkASuj8JMOiB3nGE6oIhGiq%2FCGYmBbrawGmKNQO0QK8e%2BzJHVnk0Oh4S1y2B11YQRr5%2FaQaHgXp1KRKx2JX6hpjVa5vXzTTMD12j8gI7NH4Ku6VcJqa25wjm5vNWtIGi7WMMfr55gBZYbBJ%2FGn68dbHX%2B1cOMngJIDnZ5kxIaCVWfmZv0GS3bsvH%2BA%2BF0Gep63XFCvvZfQKYY%2B%2FyrW2e4KaVknnp7Q&X-Amz-Signature=b45b63eb0a001c61c61dccecd4251fa3e478e76530cc60eeb772ec717e79d8ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
