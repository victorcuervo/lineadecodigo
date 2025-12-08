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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XYGA3L6%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T122855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHP476qmMlvp1QKzLO2EqnKMIkOleGlR32z6bjIiassgIhAJ2sRgQig3bSrsNRijTUiYbMyRJxDR73TFhb7%2B1JXBmzKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz8BIeEg8q63aN4Hb8q3AMGu8eZazoQUdEtfSWnXbCtDv3yGLwFLNDWP3vjj%2F2JbgKDH10FX17FUVHztrq4LYE3n%2Bc439cLvJLT%2FBKFEloc4mXmV%2FwAGjoJjRcvI8F6U6fEeoHGE5sVFGV6OSrIEDCTjnfsbrlGJW0TW4VhIl%2BNFV1jDh2vFZG2c8AhxEhtjKvNQcLSlIDcgGx3JCbBdPzwx1p%2BsBRmKfB7iEaQjZUZb98Ure93hLIpU6pzqL94C7u0xtJR7T9QJ1R3kuNUro5lQ9H3xVuy0rX2CzZQJd81ry1jiHEj1FLFzM1lcEBwaL2klohCThNUfOHLxxVd3bQ%2Bl0toMviFQYHIaSdhQcK58yWH%2BtpTgaRYFLjL0dluwOcNlwUq%2F7jKUkCXrGC9tX%2BQYMYO1E7PXk1rRZcLnaN2zJrcpVZWDsxyH2s8ey8jFNhhtsBRDdjHSVgOm3JyAbIXpqQP2oyHmiXmWhrsgGfYJ%2FNUWqX7iszmZgVXVf3ucxVgeSP1gee1JYpQWYGW%2FUZZtPjnNt8PRO9OgY%2FAhin8v%2FWffBurmiNjjBeV6meWSG95CfCmwoK2zPQ5beKphyrTOvGdINjtVEWo%2FxCZrkjOhEVkDGOwgPN1ExUtrXvjMEs11aplGcM2OkiTKzCA89rJBjqkAUR8anDfTbMoaBxWEym2%2FDgQADlz8kv1ymrA9bq5vn06qm%2FhYsiTQersVBd0WroO9ywOQhBIOI%2FgAz99KRtmKeUi4mT08OYPhiyWaPGDg2wS%2FnE2UhxzRCN%2BVsgf3Bi1fjGnV04WV4UvhcAVj7zK9n2vl4H4IGHWZb2Gs18gKuuShbLxeOwjxYHLaXrDKF518iIjLF7u5U66Hrs34NNPGYwLp2qA&X-Amz-Signature=6451a3bb2fe6f61e0721423ce519dc82e9d6200b4af5f3992eee24e0023f867e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XYGA3L6%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T122855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHP476qmMlvp1QKzLO2EqnKMIkOleGlR32z6bjIiassgIhAJ2sRgQig3bSrsNRijTUiYbMyRJxDR73TFhb7%2B1JXBmzKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz8BIeEg8q63aN4Hb8q3AMGu8eZazoQUdEtfSWnXbCtDv3yGLwFLNDWP3vjj%2F2JbgKDH10FX17FUVHztrq4LYE3n%2Bc439cLvJLT%2FBKFEloc4mXmV%2FwAGjoJjRcvI8F6U6fEeoHGE5sVFGV6OSrIEDCTjnfsbrlGJW0TW4VhIl%2BNFV1jDh2vFZG2c8AhxEhtjKvNQcLSlIDcgGx3JCbBdPzwx1p%2BsBRmKfB7iEaQjZUZb98Ure93hLIpU6pzqL94C7u0xtJR7T9QJ1R3kuNUro5lQ9H3xVuy0rX2CzZQJd81ry1jiHEj1FLFzM1lcEBwaL2klohCThNUfOHLxxVd3bQ%2Bl0toMviFQYHIaSdhQcK58yWH%2BtpTgaRYFLjL0dluwOcNlwUq%2F7jKUkCXrGC9tX%2BQYMYO1E7PXk1rRZcLnaN2zJrcpVZWDsxyH2s8ey8jFNhhtsBRDdjHSVgOm3JyAbIXpqQP2oyHmiXmWhrsgGfYJ%2FNUWqX7iszmZgVXVf3ucxVgeSP1gee1JYpQWYGW%2FUZZtPjnNt8PRO9OgY%2FAhin8v%2FWffBurmiNjjBeV6meWSG95CfCmwoK2zPQ5beKphyrTOvGdINjtVEWo%2FxCZrkjOhEVkDGOwgPN1ExUtrXvjMEs11aplGcM2OkiTKzCA89rJBjqkAUR8anDfTbMoaBxWEym2%2FDgQADlz8kv1ymrA9bq5vn06qm%2FhYsiTQersVBd0WroO9ywOQhBIOI%2FgAz99KRtmKeUi4mT08OYPhiyWaPGDg2wS%2FnE2UhxzRCN%2BVsgf3Bi1fjGnV04WV4UvhcAVj7zK9n2vl4H4IGHWZb2Gs18gKuuShbLxeOwjxYHLaXrDKF518iIjLF7u5U66Hrs34NNPGYwLp2qA&X-Amz-Signature=b45cc96dcfe57e9bb2d7c4c4b8992b32b93c0f11adfa52c5ed045821f940a219&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
