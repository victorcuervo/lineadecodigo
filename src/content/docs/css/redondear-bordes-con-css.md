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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQGDFGUF%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T213203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTB66pMTvE1DYcxY7JmZMnd3QEJlT5gvK9Qhstq%2FbEKwIhAJgQ5Bua%2B%2BWwQg5ySJHp%2B3vzN4yXMuGO14pxqqDFR5d0Kv8DCHoQABoMNjM3NDIzMTgzODA1IgzzjNjxe6j17D%2BI3i0q3AOs6KIwZ8epUsuzV0am9oOqiDKotifUnPXUkrcQgKRErYGRchWlhWLWrvKnNH9SSANSvxFcKVQobMtkD77ow9v96sV3SXq4kQBVWnJNEH75NSf3RxoGeC%2B9%2BIWFVUSUWMgYuIp7dsGc6Wv2Y%2BKMyKFLUbQXDoF37EAU39P6rEG11P4AmT4ww58ClQqemcgJc5tP%2BGSUaro%2FzmXSEfpJ5tB5HYu1Cg3EkPjsCdf3mhdtyMThlFSCcj%2FcpvG0WbgUQXEF1bQLl8tGDbbqqvALUgDxiQ1N3%2FzpD2wurnzn5KUAoVDBum9L%2BYx5TOuLMik6IppOJRkGkyymFpUK%2BnTZmpQa%2BgMubb6UsJiuvuYAxS8MzEy%2FRZuRjKyppieNWA2YhN7x9fOp%2F92%2FBL0Y5kJ0piD9iBTpfeCkRSvxQZsgjuUwWZtDzwdQ0EXelszgU%2F%2BPSV6JRBYPoIYgrYJysgK3zY9NqFm9nD19ePz947SLg1bOrkUAoRS%2B%2BKIEOJx2tvD%2BeMnR4%2FeEuSckJBPvcAWKxlr1tXEvpyvfGjxDa%2FsxSOb5ROiXHUA2pRFKvem66p98B7vFej0NyOQIaN1LvXiyW2%2FZ48danKP51dv6PV0%2BjFu1SHhzUF8Tsp6F4WJUSzDXxNHJBjqkATDsrTy0pvCqTBL2EP9VGYvOyhyQXC7R2kosd%2By9HHjCPIFSyWGgEgcq%2BT932PqtLDLEu8pkjoA8fF2zTrf0AqA96MAxxiKm%2F99rnWS38v%2BcT%2FhCqJHZLg4uGWGqe65ucE5y7ETh1mCRQ%2FBmnZINhC5glqhoO01GqCM81UOxQDPyFZKBmU1Z8E%2F54szeac9pShvneKPzBk6qkNGO%2Bb1xXBjXsMKD&X-Amz-Signature=161bbcc27e7376e6c31d743cd8986d19978247b0563267c66178199d24cb99a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQGDFGUF%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T213203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTB66pMTvE1DYcxY7JmZMnd3QEJlT5gvK9Qhstq%2FbEKwIhAJgQ5Bua%2B%2BWwQg5ySJHp%2B3vzN4yXMuGO14pxqqDFR5d0Kv8DCHoQABoMNjM3NDIzMTgzODA1IgzzjNjxe6j17D%2BI3i0q3AOs6KIwZ8epUsuzV0am9oOqiDKotifUnPXUkrcQgKRErYGRchWlhWLWrvKnNH9SSANSvxFcKVQobMtkD77ow9v96sV3SXq4kQBVWnJNEH75NSf3RxoGeC%2B9%2BIWFVUSUWMgYuIp7dsGc6Wv2Y%2BKMyKFLUbQXDoF37EAU39P6rEG11P4AmT4ww58ClQqemcgJc5tP%2BGSUaro%2FzmXSEfpJ5tB5HYu1Cg3EkPjsCdf3mhdtyMThlFSCcj%2FcpvG0WbgUQXEF1bQLl8tGDbbqqvALUgDxiQ1N3%2FzpD2wurnzn5KUAoVDBum9L%2BYx5TOuLMik6IppOJRkGkyymFpUK%2BnTZmpQa%2BgMubb6UsJiuvuYAxS8MzEy%2FRZuRjKyppieNWA2YhN7x9fOp%2F92%2FBL0Y5kJ0piD9iBTpfeCkRSvxQZsgjuUwWZtDzwdQ0EXelszgU%2F%2BPSV6JRBYPoIYgrYJysgK3zY9NqFm9nD19ePz947SLg1bOrkUAoRS%2B%2BKIEOJx2tvD%2BeMnR4%2FeEuSckJBPvcAWKxlr1tXEvpyvfGjxDa%2FsxSOb5ROiXHUA2pRFKvem66p98B7vFej0NyOQIaN1LvXiyW2%2FZ48danKP51dv6PV0%2BjFu1SHhzUF8Tsp6F4WJUSzDXxNHJBjqkATDsrTy0pvCqTBL2EP9VGYvOyhyQXC7R2kosd%2By9HHjCPIFSyWGgEgcq%2BT932PqtLDLEu8pkjoA8fF2zTrf0AqA96MAxxiKm%2F99rnWS38v%2BcT%2FhCqJHZLg4uGWGqe65ucE5y7ETh1mCRQ%2FBmnZINhC5glqhoO01GqCM81UOxQDPyFZKBmU1Z8E%2F54szeac9pShvneKPzBk6qkNGO%2Bb1xXBjXsMKD&X-Amz-Signature=e6455428f46bb8cca971c98c011ecb65df812b85d34aa58a8e6e626005a1d7a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
