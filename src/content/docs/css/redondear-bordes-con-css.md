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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TQQ6JV2%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T200930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHFDTstqTOLqr1qJukYNbKjxKbt%2FZDAutmBPOqBw3RhJAiBL6mJg1RNR3vYoFI6DwAJofh2ksJU%2BlMAMQYKshKp%2FqCqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIME0zLAAaQ8ohxnNYMKtwDPWblju1WuHjQYUtwhjNd4m3M4ECxOVMcW6oMsl%2B8z2%2FJ%2Fok%2BEgDKc2TuIsnZYuM%2Fl0RtemRlil9%2FQxTDPQ8bDbV03FtwRbP2qC8ig5m34j7ylWfqOrDaFm3EKb7Vo8fFw6x2sqVB8BgS9cLegArZv1B8dXYg49JkOyQ9uVGcd2bIaX2IZ72LQ2GxjAki6OlTV%2BTt3fmISDXtua874oy53OIcmZd4Z5Seop%2F1phCgmEoSk%2FqQi86vUFGIS7BhkTb1zYF8VTnlK8yWCv%2FUSEPd2ct7a97caMWT%2Bw1qOGbc1kGKiQikZKGLhD3Ixvrk0%2FLxP2X5EpBBQ0kQTwTegtvMT9aKzwHI6nh2KonHsXBNILFq9COCVf8dlYodd1BE1PGz0oXymsYgs7u0dcGDImcFhbM5MgOxobza8AylyceQz6Jjsnqqq%2F139OCAXD46hK6LzBOGg207mKTiq0MLXUXQwHZA75UCculs8RevBJeQaX7mpcqSB%2Bee%2BWCt74el2H1hfV1Nd%2FsZ%2BBVIYbqXuurlDASj%2FQOR3H3rW6FvdPLAo863kiomIQwJ5LCt%2FSdV%2BYNDodMHS%2Bvmbh1qIXqd2ql8v4crFLnxhBJlW2JGoVeJs6HPjCQuFSGVAWFrCpcw7qjXyQY6pgG31mfb5I6wR4huwAr6eAC4HkxqAYyREOwjtCe2QPYy8kpPDvhfMWPrOrIn5Nq1URYqNpGQb7IdSIXiAiakDh5Dzoh6FK%2FS%2BN681SL%2FB7HIKSisQtQqRBtcDVyIwmmX%2BL7PyE9C8jhKyKcjJxyCEI9%2BqQf18CkGa9FZ93ymD1AdZyyoU%2FVbWbJ%2Fi3PylPlmph%2FsqMNPgJleCTuHoyN%2BkeRSR3pdWscV&X-Amz-Signature=71a85f6798c14ac0485bd297906fab992cc0b62213fcaf7ce23a7eb1a410e5e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TQQ6JV2%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T200930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHFDTstqTOLqr1qJukYNbKjxKbt%2FZDAutmBPOqBw3RhJAiBL6mJg1RNR3vYoFI6DwAJofh2ksJU%2BlMAMQYKshKp%2FqCqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIME0zLAAaQ8ohxnNYMKtwDPWblju1WuHjQYUtwhjNd4m3M4ECxOVMcW6oMsl%2B8z2%2FJ%2Fok%2BEgDKc2TuIsnZYuM%2Fl0RtemRlil9%2FQxTDPQ8bDbV03FtwRbP2qC8ig5m34j7ylWfqOrDaFm3EKb7Vo8fFw6x2sqVB8BgS9cLegArZv1B8dXYg49JkOyQ9uVGcd2bIaX2IZ72LQ2GxjAki6OlTV%2BTt3fmISDXtua874oy53OIcmZd4Z5Seop%2F1phCgmEoSk%2FqQi86vUFGIS7BhkTb1zYF8VTnlK8yWCv%2FUSEPd2ct7a97caMWT%2Bw1qOGbc1kGKiQikZKGLhD3Ixvrk0%2FLxP2X5EpBBQ0kQTwTegtvMT9aKzwHI6nh2KonHsXBNILFq9COCVf8dlYodd1BE1PGz0oXymsYgs7u0dcGDImcFhbM5MgOxobza8AylyceQz6Jjsnqqq%2F139OCAXD46hK6LzBOGg207mKTiq0MLXUXQwHZA75UCculs8RevBJeQaX7mpcqSB%2Bee%2BWCt74el2H1hfV1Nd%2FsZ%2BBVIYbqXuurlDASj%2FQOR3H3rW6FvdPLAo863kiomIQwJ5LCt%2FSdV%2BYNDodMHS%2Bvmbh1qIXqd2ql8v4crFLnxhBJlW2JGoVeJs6HPjCQuFSGVAWFrCpcw7qjXyQY6pgG31mfb5I6wR4huwAr6eAC4HkxqAYyREOwjtCe2QPYy8kpPDvhfMWPrOrIn5Nq1URYqNpGQb7IdSIXiAiakDh5Dzoh6FK%2FS%2BN681SL%2FB7HIKSisQtQqRBtcDVyIwmmX%2BL7PyE9C8jhKyKcjJxyCEI9%2BqQf18CkGa9FZ93ymD1AdZyyoU%2FVbWbJ%2Fi3PylPlmph%2FsqMNPgJleCTuHoyN%2BkeRSR3pdWscV&X-Amz-Signature=4af8567fff4f25995132aa79230ab3d1945033358425ff5e1a9c602e09e6729f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
