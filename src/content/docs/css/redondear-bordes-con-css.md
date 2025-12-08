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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6BNRYKZ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T060338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxLextFOL3pnDNxq%2F1GK8ni8vPN4D8sMSu3PhC0xJ8jAIhAOCz6RiJe3nitVgJNxirP0V9Fm2YUBsTSBGXSc1RoXXKKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz5C%2Fp7DiS128n7tZ0q3AN%2F9wA8lvzo0Y6zB8woWHOM%2BnP2o0Z6NAo8KwD3hlS%2FTmnZZsjhsosBJKESASLePNbo2T%2FHnJqvqqcNe2ft7c1kcHwt0Bx%2BgYyUel2WZoFwZeTjGfrY4Nx4W%2Bu%2FZwghwo%2FnX%2B4e7vkORQ7TRHEJEFZDrFkKy%2F7zLPok%2B6zsEucaHUAjgX6J%2F2Kvn0lLn1gH13q9UFz5QYfKh6E%2BjMEa32y4s4ieTRIex5qu3Bm3NkoB0cmGBo0k0uNsVi8sh5aftDLVZoW50cXSy%2BX2rvBXn7ptlBaexlm68WaG%2FD2Z8GZYpDr6QxH3BZB2SQw7DnAqUugoulpT3IdIcZKwnsA8RD%2BnFLUat1MKkROJsxmjXpl3K2yUZCoHcUHG%2FtWp9RXeZNbvSol%2F4RipZH7uGH%2FZJSHTShF%2Bg7L5ZS6GHFCV8QYcRAEKkTgEwRNsRqFYggWNWTPOjzZk1gotjVY2JIaKSkxK7W%2BnSyJLMn%2FdabSZIFToyJUWHfHmha0Zsyvo0Wzc1IrVkLhjIAmaCLrCL3394Wx4G2m7aL58pwuYZiA49D0z2BWoa0%2FOpt60KOf7KFCsW3%2BRiYPlXMIQqJzzTwwHZ8p89OYGyx9pMt5MciMgzxfuU8wqgE4ngkkX9wnk%2BzDCz9nJBjqkAUFyDvVEaM4f0PT8rRc2Xd4%2BYJjJ7XwS4z8LbNMDG9T%2FC2uiA4NwfCK0zOFHXRHbR2J8hcVLnDXZ55c59AzlJTTul3gzGiOlKLDfWwqrYjYEz%2F81xlqa9eddMJTCZCDQ0WRXSgkO8H152ukOoGv9J0VLQJpvZTbzoPgoIVIJKonehGcmeqaLXz7WB4cYTtfWbwqY%2BmUFuANrxRRH9AEPA524tm1A&X-Amz-Signature=6871da0c9535ae17d17b591a731311408b51aad2e0e4ced076936670005fff94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6BNRYKZ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T060338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxLextFOL3pnDNxq%2F1GK8ni8vPN4D8sMSu3PhC0xJ8jAIhAOCz6RiJe3nitVgJNxirP0V9Fm2YUBsTSBGXSc1RoXXKKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz5C%2Fp7DiS128n7tZ0q3AN%2F9wA8lvzo0Y6zB8woWHOM%2BnP2o0Z6NAo8KwD3hlS%2FTmnZZsjhsosBJKESASLePNbo2T%2FHnJqvqqcNe2ft7c1kcHwt0Bx%2BgYyUel2WZoFwZeTjGfrY4Nx4W%2Bu%2FZwghwo%2FnX%2B4e7vkORQ7TRHEJEFZDrFkKy%2F7zLPok%2B6zsEucaHUAjgX6J%2F2Kvn0lLn1gH13q9UFz5QYfKh6E%2BjMEa32y4s4ieTRIex5qu3Bm3NkoB0cmGBo0k0uNsVi8sh5aftDLVZoW50cXSy%2BX2rvBXn7ptlBaexlm68WaG%2FD2Z8GZYpDr6QxH3BZB2SQw7DnAqUugoulpT3IdIcZKwnsA8RD%2BnFLUat1MKkROJsxmjXpl3K2yUZCoHcUHG%2FtWp9RXeZNbvSol%2F4RipZH7uGH%2FZJSHTShF%2Bg7L5ZS6GHFCV8QYcRAEKkTgEwRNsRqFYggWNWTPOjzZk1gotjVY2JIaKSkxK7W%2BnSyJLMn%2FdabSZIFToyJUWHfHmha0Zsyvo0Wzc1IrVkLhjIAmaCLrCL3394Wx4G2m7aL58pwuYZiA49D0z2BWoa0%2FOpt60KOf7KFCsW3%2BRiYPlXMIQqJzzTwwHZ8p89OYGyx9pMt5MciMgzxfuU8wqgE4ngkkX9wnk%2BzDCz9nJBjqkAUFyDvVEaM4f0PT8rRc2Xd4%2BYJjJ7XwS4z8LbNMDG9T%2FC2uiA4NwfCK0zOFHXRHbR2J8hcVLnDXZ55c59AzlJTTul3gzGiOlKLDfWwqrYjYEz%2F81xlqa9eddMJTCZCDQ0WRXSgkO8H152ukOoGv9J0VLQJpvZTbzoPgoIVIJKonehGcmeqaLXz7WB4cYTtfWbwqY%2BmUFuANrxRRH9AEPA524tm1A&X-Amz-Signature=665a0b7e1df3bcf04b93a55ce6768373965293f8ac55f5c1dbd17dae76b2d598&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
