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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSV5TNNL%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T101041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJXlBC6%2Bq8K0qWdSM%2FYLWNSe47qYy6RmQmi1koAMeuegIhAIFV66DxvF4iYmsLLkInEoFzZ8QElL4OGeUbVrDnlWhzKv8DCHIQABoMNjM3NDIzMTgzODA1Igw%2BGEvFjW1gJZzccIYq3AOrwFruiYBQzDBi5rqE2yTYaBW%2FOzzX8dLxdYE6Rh68HZF1U210lab1or03OllUGoENhPu7mqp3aFK7q2rqes5%2BppPW0FxllP47m6%2FkvbbF%2BumD%2B9AGsxG9JMSnKCmgFolGrmSN8eyE9AhTj%2FQghvVe5VPfzZXidKiZ8uZvc6tjyYDkS3RmD86deXJIFfRZm4hr8rlg%2F0JXxXC1TAHHNDjIy4sM%2FQ%2F2oU4dvjZG8ft88223irEWHvAld4Rii7LHfIi5KGE85ZiDYpltgVwpSDKn3yaNnT4pN%2F40LRtWFMLhD7MctUI1OCaeZtjwd5RYnnhFFrRtulFRiXpbTNGFIyhCJpE%2F7%2BVaj810IzPQuEeHDY6HGlsVCmHEsWqq5%2FK%2BW4NAjf0zTTcbOFOWKAb%2Bf4RQpBj3cZR0XBzGnsqH%2FDbkuktg7lvLT%2F%2BZjSItSf3wOg0rL08wJjp9ksc3PmYcYi1PHZCsINv3QB7og6KkV6B0Iwfe59IEBQo%2F%2FD4cbJY5YANp8jz1nP%2FbhQ9X4LGStVskqEMouavebCpr5wGSeZ%2BkjRCQ5TGisiKO8ZVypJfzQbMPhfJdYCpzx8f2HHW9ZPCn1tJBNFVpXCMQtMjKTs%2FnJLPnPgveYhtwe6JHEjCK68%2FJBjqkAe3BPkCEZ5glOxSBEzsVO3rogLaoAtQ0mWH1KbAVCL2m5yO2UMGQn6PU18zs3y6SV03HKB6VT6hl9gDMh%2FVoN9DOV0xNI0KUXFHYDAXXYNmjCwW%2FTbt2i0xnYTWsJ%2Fcz7DqpuyXK1uJLXSZ1s2FreA4a8sefjRGScJLcxi%2FvqSHgaxSF8AjaMHpUZIp2oUzf4TPblVTQp60JJDY%2BwZotvOa68ukW&X-Amz-Signature=e73a757a205f24a047e6b19f50cb83380ec6f80a70bfe269eaab62a6f56b8760&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSV5TNNL%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T101041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJXlBC6%2Bq8K0qWdSM%2FYLWNSe47qYy6RmQmi1koAMeuegIhAIFV66DxvF4iYmsLLkInEoFzZ8QElL4OGeUbVrDnlWhzKv8DCHIQABoMNjM3NDIzMTgzODA1Igw%2BGEvFjW1gJZzccIYq3AOrwFruiYBQzDBi5rqE2yTYaBW%2FOzzX8dLxdYE6Rh68HZF1U210lab1or03OllUGoENhPu7mqp3aFK7q2rqes5%2BppPW0FxllP47m6%2FkvbbF%2BumD%2B9AGsxG9JMSnKCmgFolGrmSN8eyE9AhTj%2FQghvVe5VPfzZXidKiZ8uZvc6tjyYDkS3RmD86deXJIFfRZm4hr8rlg%2F0JXxXC1TAHHNDjIy4sM%2FQ%2F2oU4dvjZG8ft88223irEWHvAld4Rii7LHfIi5KGE85ZiDYpltgVwpSDKn3yaNnT4pN%2F40LRtWFMLhD7MctUI1OCaeZtjwd5RYnnhFFrRtulFRiXpbTNGFIyhCJpE%2F7%2BVaj810IzPQuEeHDY6HGlsVCmHEsWqq5%2FK%2BW4NAjf0zTTcbOFOWKAb%2Bf4RQpBj3cZR0XBzGnsqH%2FDbkuktg7lvLT%2F%2BZjSItSf3wOg0rL08wJjp9ksc3PmYcYi1PHZCsINv3QB7og6KkV6B0Iwfe59IEBQo%2F%2FD4cbJY5YANp8jz1nP%2FbhQ9X4LGStVskqEMouavebCpr5wGSeZ%2BkjRCQ5TGisiKO8ZVypJfzQbMPhfJdYCpzx8f2HHW9ZPCn1tJBNFVpXCMQtMjKTs%2FnJLPnPgveYhtwe6JHEjCK68%2FJBjqkAe3BPkCEZ5glOxSBEzsVO3rogLaoAtQ0mWH1KbAVCL2m5yO2UMGQn6PU18zs3y6SV03HKB6VT6hl9gDMh%2FVoN9DOV0xNI0KUXFHYDAXXYNmjCwW%2FTbt2i0xnYTWsJ%2Fcz7DqpuyXK1uJLXSZ1s2FreA4a8sefjRGScJLcxi%2FvqSHgaxSF8AjaMHpUZIp2oUzf4TPblVTQp60JJDY%2BwZotvOa68ukW&X-Amz-Signature=12a20273d219072f0c581c9e9fcf6ef51adab308ff250c288d477c216d917da7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
