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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEKVWKN5%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T191135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAErDM%2BrmR3bsAwa6z%2FFrCCgzRhpZJUOvf%2BD2q%2FxlgT8AiEAyvJlIS5%2FXcb6dKgUgjgnh98dpa8jKfqcPzIjIcBPXbwq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDL62t8jTlFNz%2Blgt4CrcAwwt8PC2neK9iMDZ4jCjhUwHCnTxJitJoBMGIoJ0BuceViY5oxMzIiTAVyHiZXjAzkcqvLNC%2FMLuxvs13WzPHiENNt%2B7Gf%2Bg%2B8qGxnKbNZpNO2bRQ6KTmKqbPmc%2FbtVWTwXM0Ahz6WDixds0zhWO5uI%2Fi%2FK0sAOPs4ErWvKiEbA0Jcv4W%2BOrPhzUxnHEZdE0AyZrWf8vzE9FnxtG%2FoqqTcLwcgGG%2Bdzc%2Fblg%2FcLD8womLs%2FHHE0H2aT36wgha4j6T%2FbnLkCzGThYBZvLlkSsnqKdkhkqRHfkEoBvphTSWnH2RUy5XBJfQsEqmXcI1cihUv83rtYHj4JZ2g1MtTOEsLWM1fBpcM5p%2BK5JNK7uV97kvuJjF8ucxk7r3R%2FnW9Lf%2FEhxnaLt6cFCs%2FjUl5MLqCcJhOvBDNYbXN3iBz0cCx2aSVzbfxLaogIl3hJuB8goBiAoJd%2BW0XOJ5mfyKmUxubIO%2FS2xIjiObk2yFIKzXczJcuQlhWK4WkaXs5dif3D9sv79N%2F2Quo8cF2yj9fboZvP%2BUYPdPBfaM3kR%2FFnpj7cFrcDAQRbrb3iqif3UOtjJfpPnSIE9FwtWT5ROredBH0jZQJMPjj9ZYEugPfsOuOtAUwXg6zDU6Otu6g8zMJ%2Fjy8kGOqUB0PZy6kzc%2FX0quz%2FUennCJVGsGLzcIpJ4DES%2Fyf%2BwRnkx5xBUv%2FZZFNXMI8b8FbxAgXe%2FTXid%2B70O6xOaeZHuxOGlzkLXq2AKBJDXZwdz3qTkw79qACN3KUuFTi13x4h4W1tep1LZ0W2apWeNvO2zMbEd1HzA00feZs4W8%2BuUrusmnHMut6fEFnbqc3S5B5qGACP591UbduSCk4u7ZDeOXPq0Y%2FV2&X-Amz-Signature=75b9e71c107e1a1d7e9f34cc5ce11fe3bd9993f455e9b0fa5fa87e8b7e76edb2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEKVWKN5%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T191135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAErDM%2BrmR3bsAwa6z%2FFrCCgzRhpZJUOvf%2BD2q%2FxlgT8AiEAyvJlIS5%2FXcb6dKgUgjgnh98dpa8jKfqcPzIjIcBPXbwq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDL62t8jTlFNz%2Blgt4CrcAwwt8PC2neK9iMDZ4jCjhUwHCnTxJitJoBMGIoJ0BuceViY5oxMzIiTAVyHiZXjAzkcqvLNC%2FMLuxvs13WzPHiENNt%2B7Gf%2Bg%2B8qGxnKbNZpNO2bRQ6KTmKqbPmc%2FbtVWTwXM0Ahz6WDixds0zhWO5uI%2Fi%2FK0sAOPs4ErWvKiEbA0Jcv4W%2BOrPhzUxnHEZdE0AyZrWf8vzE9FnxtG%2FoqqTcLwcgGG%2Bdzc%2Fblg%2FcLD8womLs%2FHHE0H2aT36wgha4j6T%2FbnLkCzGThYBZvLlkSsnqKdkhkqRHfkEoBvphTSWnH2RUy5XBJfQsEqmXcI1cihUv83rtYHj4JZ2g1MtTOEsLWM1fBpcM5p%2BK5JNK7uV97kvuJjF8ucxk7r3R%2FnW9Lf%2FEhxnaLt6cFCs%2FjUl5MLqCcJhOvBDNYbXN3iBz0cCx2aSVzbfxLaogIl3hJuB8goBiAoJd%2BW0XOJ5mfyKmUxubIO%2FS2xIjiObk2yFIKzXczJcuQlhWK4WkaXs5dif3D9sv79N%2F2Quo8cF2yj9fboZvP%2BUYPdPBfaM3kR%2FFnpj7cFrcDAQRbrb3iqif3UOtjJfpPnSIE9FwtWT5ROredBH0jZQJMPjj9ZYEugPfsOuOtAUwXg6zDU6Otu6g8zMJ%2Fjy8kGOqUB0PZy6kzc%2FX0quz%2FUennCJVGsGLzcIpJ4DES%2Fyf%2BwRnkx5xBUv%2FZZFNXMI8b8FbxAgXe%2FTXid%2B70O6xOaeZHuxOGlzkLXq2AKBJDXZwdz3qTkw79qACN3KUuFTi13x4h4W1tep1LZ0W2apWeNvO2zMbEd1HzA00feZs4W8%2BuUrusmnHMut6fEFnbqc3S5B5qGACP591UbduSCk4u7ZDeOXPq0Y%2FV2&X-Amz-Signature=ab720f78e2806f39077c4e886793f1d7d43dd09e0983ad58fccf3a987a8e67b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
