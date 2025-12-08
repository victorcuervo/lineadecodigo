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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GF3PJ7C%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T075428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA%2FB1QytTsAbUCSKpNW7Ac4cviOOk03T1vCeBaiMMaIJAiEAiPjsB5H0OmeVhGySJm%2FIGAERAkMXW6GFTf6H1kt0%2FasqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGz1qa5hDRJNjGGBtCrcA4mEqNaEweOjrPK00M3LD20yb1jY1s8DWJovgrVODt0hX%2FaWsTjwGei%2BYQOK00L%2FsjmxvfSaCm4ciPzSagqcmiMz5lH49GxyXh%2Bvnajwk2up16CtEOmZGbfMf%2FJbqz%2BVEaIUBzyYC1x7ch2UGBiyVs1VbbraU35b9M7LZ%2BISG2QbRKMJz7ki3eIlcW7X5gdlXHdnpdHWnj9laVN8xEOVD7dcAEuFISBmyvmK8fBsU67I1hxg7kWkRtXqQCH7RLGGP0y2AXN%2BUV2DFD2Xir1Pd2hpg%2FCn7tkNaEaIHf45acSXzaLVOZiMOvodaEwqrpFkKgGTUrAlkvo9mpCnGG9%2BoBxVy1nNZu6bCy7jFSZLs80jhArxOHaDbi3cqDEZsbvEDmsyjEnfWkR1GJBgVPu3pTJf60%2FPFZh3yrnD3%2BxDjzu%2FgKzXAczM1DNe2TeeZSilo8JrELKMD7ru3cHjRQRdN7GqAwEms9J6YB%2FIwcGKQCqESRB7AYN3OguyJ97UrJqFWtrDg1RtHoCNh8tTaJ6exkUmffg85vvaA6ZeEarHJ%2BauIvgqu%2BKr8nMAaPd8w%2FseXJccAlCncGAiwiRkWkBFUvtT0WrNtzxynpl1Hvac0aXqdoroyKf7y6VMvwWNMKjt2ckGOqUBR6BdyyLL4td%2BbyjUJ%2FLHZYd%2B8KU9ZhXUBfdwAqRlfK0iPTsGjnmai%2FiomHTwCw5TP3HGkWJ7VGfgT2q9E0SYQeq5NsEK7afOBZJsaV4%2FLgcRDHLjmsEM5RAt1P0NETQVOeyP6LrNdv3BaXWQ919RLks1i0Ao2aPl74%2BNOZabfkUt5u1INF3WldHycRC9r6PU1XvSrQ1ZcRVXyQWR8MQy82eZlWEO&X-Amz-Signature=ddd872711b0956313d4a3ebf8f96029e6b7a920ca2d165f9d6a9cfb11f43db6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GF3PJ7C%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T075428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA%2FB1QytTsAbUCSKpNW7Ac4cviOOk03T1vCeBaiMMaIJAiEAiPjsB5H0OmeVhGySJm%2FIGAERAkMXW6GFTf6H1kt0%2FasqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGz1qa5hDRJNjGGBtCrcA4mEqNaEweOjrPK00M3LD20yb1jY1s8DWJovgrVODt0hX%2FaWsTjwGei%2BYQOK00L%2FsjmxvfSaCm4ciPzSagqcmiMz5lH49GxyXh%2Bvnajwk2up16CtEOmZGbfMf%2FJbqz%2BVEaIUBzyYC1x7ch2UGBiyVs1VbbraU35b9M7LZ%2BISG2QbRKMJz7ki3eIlcW7X5gdlXHdnpdHWnj9laVN8xEOVD7dcAEuFISBmyvmK8fBsU67I1hxg7kWkRtXqQCH7RLGGP0y2AXN%2BUV2DFD2Xir1Pd2hpg%2FCn7tkNaEaIHf45acSXzaLVOZiMOvodaEwqrpFkKgGTUrAlkvo9mpCnGG9%2BoBxVy1nNZu6bCy7jFSZLs80jhArxOHaDbi3cqDEZsbvEDmsyjEnfWkR1GJBgVPu3pTJf60%2FPFZh3yrnD3%2BxDjzu%2FgKzXAczM1DNe2TeeZSilo8JrELKMD7ru3cHjRQRdN7GqAwEms9J6YB%2FIwcGKQCqESRB7AYN3OguyJ97UrJqFWtrDg1RtHoCNh8tTaJ6exkUmffg85vvaA6ZeEarHJ%2BauIvgqu%2BKr8nMAaPd8w%2FseXJccAlCncGAiwiRkWkBFUvtT0WrNtzxynpl1Hvac0aXqdoroyKf7y6VMvwWNMKjt2ckGOqUBR6BdyyLL4td%2BbyjUJ%2FLHZYd%2B8KU9ZhXUBfdwAqRlfK0iPTsGjnmai%2FiomHTwCw5TP3HGkWJ7VGfgT2q9E0SYQeq5NsEK7afOBZJsaV4%2FLgcRDHLjmsEM5RAt1P0NETQVOeyP6LrNdv3BaXWQ919RLks1i0Ao2aPl74%2BNOZabfkUt5u1INF3WldHycRC9r6PU1XvSrQ1ZcRVXyQWR8MQy82eZlWEO&X-Amz-Signature=10bb5d35d358f15d05f503bfdb23f0cfc03a2b76aa109f323e887b49ab61e6f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
