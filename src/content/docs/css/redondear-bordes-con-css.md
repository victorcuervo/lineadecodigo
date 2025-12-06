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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJLO4ARY%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T145341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCaf44Q45LO%2FSfrkm%2FSN%2BqJrOmezbWFHU93xY4D2gL89gIgDKH90R5Le7qPLeJ7azwFt339trCNXfQwvFPF573rIzcq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDJDcSiqdtIJSF2goyyrcA06wEnXM%2FHnXZfH2S5TMQaQdbHRLc7nV%2B04BgtPdpzQ9F%2BGy7EvTcs936rGa%2Bpzlm02qZxBptMiaue8diI99fuTGzPP6bxwffeprJZIrDKdWeomYmSTeoLaPH74Gvzyr0VjSG6TleHjuCzCnbQL8%2Bt6SVjXjiEo1KCCE89sBotz0we9LPmm0vCZoNX8MMJ%2Fcm1ZKU%2FNlWrh%2BeFvuTnaAyQ%2BM2vX4dSd9fJ%2BIIbgetnwfywoRfORLmLaxYEBArKa1hoYtbrUKdeFSzHlZ8JwVX6LFVG47HmQgzIwwcZ3IWgSz2u2OCtm1HuK645mvQSUXaALfx6MdysMDYGsUgWku8tniZ3Vo0Ab2RtXfW7ENPWP%2F3WmCxqNowYQv0KeyV6oIV2WZTIrtPLtAGHe3ov%2BsezbLIosBS%2FFpLC8V4FUk9IIcflYKUxG2VE7WLhaqlsYMY96OQDQKgaR8CeoXuXPBiEkw3hDVkk5aNAmGl3tw555eW9S0EYAPDBSToA85D63dOuu%2FbshIkOys9PFc1doEjSngBvobH5KCNF9O42RRQOBh12b%2FJyGnCWt3AO9f4Q%2Flv1se9Itq53S%2FOKnnmeKL4gdK7YvhmMFHdUhgQQi8C79r38R1dk54ZsJT%2FXyuMLqm0MkGOqUBsqjo7EsJuf4ZfAnHF2HGoADaPWUbym7Sc1GNcQyuuk%2FWA%2Ff2lO6awoeeo4yZwySDDtntKrrgqaGY6bD%2FXNYPVn56Hy2EcG0PncrD5GnUCcJoS5GjriAL7p%2B5P9OHZvnc%2BFFOoyxeuUq%2F1xUOR%2BzL0dbP5ZsHa83MnKxBwftDzoyY6naqg7sqKH6g80NMavInltc9y%2Bx45pciiqQK4fc472pZPII%2F&X-Amz-Signature=b9e58a009ca3b4a134f8aa1cf88a2ceb6ba8a712b65e96ac647b064e484c1814&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJLO4ARY%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T145341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCaf44Q45LO%2FSfrkm%2FSN%2BqJrOmezbWFHU93xY4D2gL89gIgDKH90R5Le7qPLeJ7azwFt339trCNXfQwvFPF573rIzcq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDJDcSiqdtIJSF2goyyrcA06wEnXM%2FHnXZfH2S5TMQaQdbHRLc7nV%2B04BgtPdpzQ9F%2BGy7EvTcs936rGa%2Bpzlm02qZxBptMiaue8diI99fuTGzPP6bxwffeprJZIrDKdWeomYmSTeoLaPH74Gvzyr0VjSG6TleHjuCzCnbQL8%2Bt6SVjXjiEo1KCCE89sBotz0we9LPmm0vCZoNX8MMJ%2Fcm1ZKU%2FNlWrh%2BeFvuTnaAyQ%2BM2vX4dSd9fJ%2BIIbgetnwfywoRfORLmLaxYEBArKa1hoYtbrUKdeFSzHlZ8JwVX6LFVG47HmQgzIwwcZ3IWgSz2u2OCtm1HuK645mvQSUXaALfx6MdysMDYGsUgWku8tniZ3Vo0Ab2RtXfW7ENPWP%2F3WmCxqNowYQv0KeyV6oIV2WZTIrtPLtAGHe3ov%2BsezbLIosBS%2FFpLC8V4FUk9IIcflYKUxG2VE7WLhaqlsYMY96OQDQKgaR8CeoXuXPBiEkw3hDVkk5aNAmGl3tw555eW9S0EYAPDBSToA85D63dOuu%2FbshIkOys9PFc1doEjSngBvobH5KCNF9O42RRQOBh12b%2FJyGnCWt3AO9f4Q%2Flv1se9Itq53S%2FOKnnmeKL4gdK7YvhmMFHdUhgQQi8C79r38R1dk54ZsJT%2FXyuMLqm0MkGOqUBsqjo7EsJuf4ZfAnHF2HGoADaPWUbym7Sc1GNcQyuuk%2FWA%2Ff2lO6awoeeo4yZwySDDtntKrrgqaGY6bD%2FXNYPVn56Hy2EcG0PncrD5GnUCcJoS5GjriAL7p%2B5P9OHZvnc%2BFFOoyxeuUq%2F1xUOR%2BzL0dbP5ZsHa83MnKxBwftDzoyY6naqg7sqKH6g80NMavInltc9y%2Bx45pciiqQK4fc472pZPII%2F&X-Amz-Signature=45d91c57c243aa32ad49408787f4c727cd088f02edf81fb46f8d026e0ed29634&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
