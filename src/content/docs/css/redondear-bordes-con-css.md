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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TG7UT4EZ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T083858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCIEV8mnB1egSa0Co%2FvHW9A2sxvhnpaw3O%2Fg%2BcKaExMjpSAiARu6SNuPBY4JfePpZBWIzQApnHvkD2UJ05VujM2ph%2FNir%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMrqmcWAbpB4Z45HBBKtwDQwGmZHPDFW%2B%2F1ZeR8UFfEUV8tbOKhqYchEpgsk36M6Q9ZK13QcsqQcZkff%2Fw1lfmd%2B4V6lswM5xmNt%2BcjQL%2FPBCMKQdCCfGnaJG904o1BhyMIVh6xQfNdCAniDXpr0aEtTI%2Bfn3bupYzeO5zb%2BzFo17gPuAyNljjwlTLZaXBKp1SxyyvSlnwW3IXwBIqf38nxuVQRAY5CVkyBBiFtd3sfzYVUSwSJPsvuDR%2Bwre5jNzimOH6OmnH9zncBqYzQzGSs9gkNJ3bMEBaCZEOmhZ0likTUB74UWKTcVUNNiLVbZF%2BoxmG3M10oG1dMQLRpFEt0eY0Qy5rdCdm82dE%2FWLYh25Otk4Qw6RWtQGQtGyLp0giE2ArrR5pE%2FWTf8xB7%2BeQSKKIHk4Y4hOUtQyjkqZ249NLc2OkqhHXurFMQGq83FbU5fufbE5oRb0tmwKnqGJHMryDPXt11QfOZMVnGrCtHyJALQcgGVnITsC15Ti6kjzX0MmLO38Eb3GqAancAUPW7Qz7jBDhuY9iKgm7tLK06kol6kHjSYZEFstP9qgtZOhI8BpwO1ax3olPyrwGQwShDNwpD6Awi3ChB14VzqCHj%2BVJpoj8M%2BJmkwDx30J2KDy211j0h6pbKtR3bXkwzoXFyQY6pgHVqE6klTFyMcUkS6Hs0MtqwYzjVcndRvkOWb59N1ngD0iI024eIndCBnLne2JE6QTIw2GMV74edo8nMW0LfGwGiCB0g2CeICyEsLXGUbegen4XCpUEEWKwtLxVGNiuY9PTmjltbddl%2BkT265BLa5bO7O6xgcj3yrwB1YuHqe3vawz%2Brla47ooC75EEsZjdchu647%2B5STwhKdMKbmTcVP2QmXn%2FvgIR&X-Amz-Signature=65453d7a769493bee6d9a12bd3fcb0716caa2462ecf185f12da0047d55abcf41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TG7UT4EZ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T083858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCIEV8mnB1egSa0Co%2FvHW9A2sxvhnpaw3O%2Fg%2BcKaExMjpSAiARu6SNuPBY4JfePpZBWIzQApnHvkD2UJ05VujM2ph%2FNir%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMrqmcWAbpB4Z45HBBKtwDQwGmZHPDFW%2B%2F1ZeR8UFfEUV8tbOKhqYchEpgsk36M6Q9ZK13QcsqQcZkff%2Fw1lfmd%2B4V6lswM5xmNt%2BcjQL%2FPBCMKQdCCfGnaJG904o1BhyMIVh6xQfNdCAniDXpr0aEtTI%2Bfn3bupYzeO5zb%2BzFo17gPuAyNljjwlTLZaXBKp1SxyyvSlnwW3IXwBIqf38nxuVQRAY5CVkyBBiFtd3sfzYVUSwSJPsvuDR%2Bwre5jNzimOH6OmnH9zncBqYzQzGSs9gkNJ3bMEBaCZEOmhZ0likTUB74UWKTcVUNNiLVbZF%2BoxmG3M10oG1dMQLRpFEt0eY0Qy5rdCdm82dE%2FWLYh25Otk4Qw6RWtQGQtGyLp0giE2ArrR5pE%2FWTf8xB7%2BeQSKKIHk4Y4hOUtQyjkqZ249NLc2OkqhHXurFMQGq83FbU5fufbE5oRb0tmwKnqGJHMryDPXt11QfOZMVnGrCtHyJALQcgGVnITsC15Ti6kjzX0MmLO38Eb3GqAancAUPW7Qz7jBDhuY9iKgm7tLK06kol6kHjSYZEFstP9qgtZOhI8BpwO1ax3olPyrwGQwShDNwpD6Awi3ChB14VzqCHj%2BVJpoj8M%2BJmkwDx30J2KDy211j0h6pbKtR3bXkwzoXFyQY6pgHVqE6klTFyMcUkS6Hs0MtqwYzjVcndRvkOWb59N1ngD0iI024eIndCBnLne2JE6QTIw2GMV74edo8nMW0LfGwGiCB0g2CeICyEsLXGUbegen4XCpUEEWKwtLxVGNiuY9PTmjltbddl%2BkT265BLa5bO7O6xgcj3yrwB1YuHqe3vawz%2Brla47ooC75EEsZjdchu647%2B5STwhKdMKbmTcVP2QmXn%2FvgIR&X-Amz-Signature=b5b27a22941ce26950a7d5f517024a4f072764bf2895843e4ef88082ef5d55e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
