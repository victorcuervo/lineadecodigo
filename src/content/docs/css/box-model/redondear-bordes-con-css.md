---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2025-12-17
slug: css/redondear-bordes-con-css
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLQ5MH4B%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T043608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCSatxqS6xAwyzv66RUbjxgzhNiSXUxEdT34PrmLlaW8AIhANSpS2%2Fpz%2B1gncu0J0Ei89GnNTbj%2FAdZH7CYjQfG8X3hKv8DCHUQABoMNjM3NDIzMTgzODA1IgxDn%2FcF%2BjuQNdR1Tj0q3AMgBN5W9ra42YdtMyHXiQHgWm3wKi23rp5zyBKeQ44eJmo81EQD%2BFMfZsqDFl23GzlKErF15oDBkkm12BxBkbXHOhr7qrCbFbJ2d3PPlJ5Q5hhgNpvSfwpIgua%2FkgoYpk8PsXMsVVNr8KJnEkUCLdP2MW9wkOzR98QVs4LSDy2NwHkHzh8o%2FW9VtBg6%2BuM3WZFPwnRtvXy4%2BJk%2FwtayXU6pH7llo43%2BI22frzjhD1QUEBVi7u2vWqHdIWiUEpm3TPsMpQM2fwSiTUVouecRpCwCi65sR9Br83m%2FfytZZqV%2BaRgdxesw6Hgb%2BAMYez9xxGZ9Aac9MqCseZNQNncLFHRkcI%2BlxPlpjinE0mKVEWMUg9xXSSBAW%2B4Z%2F0mX4s2YNAwTgaf8vPl%2F9H2DRs9ydktkCFasxoW%2BKEPT7Sp0Nr41yw8Lvq%2F29s%2FgNLDkJoTLiRz4SUKH3XCuS3dWeTOxr6rlpTEqMVVNsEkq9p5Ba9kSDAlX%2BklcOMV72MWdbv3HkViaHW7uSoLvYf%2FFgVqirm0FC19cDKQfjRvH7ISkd6dv%2Fq7qQcP%2FipM88RPI8u8NUbEZK9xctzN5yPoA4SbH7tOdEpU%2BGlIfXoDojVGfb4eaD29q%2Fvw5yWpVyUoayjDRzojKBjqkAch2eR8PiYQTyGq8viNCi1I9%2Bdc80wSW6R3POlMsAET2ZacBlcjwxpqlEGmST6VwK6NWiStbf0bmrQuIBxSw8w9rJ%2FvrJwB%2BwPXhgzVzpicTkfBcfnUIlWSMRrm9DwYiRTdj9VGnTn94Xd%2Fl9GgCGiOfKGUAaSmN0bKbYkJqADAzXkhJz26u%2B6LXXtv7MH4VWUiXMsrLFsOm0RJIO7QuRxezznr4&X-Amz-Signature=15ef284bc5c66af49326bb0e6e3dd681d97d3f998c1600031d9745784c06f7fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLQ5MH4B%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T043608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCSatxqS6xAwyzv66RUbjxgzhNiSXUxEdT34PrmLlaW8AIhANSpS2%2Fpz%2B1gncu0J0Ei89GnNTbj%2FAdZH7CYjQfG8X3hKv8DCHUQABoMNjM3NDIzMTgzODA1IgxDn%2FcF%2BjuQNdR1Tj0q3AMgBN5W9ra42YdtMyHXiQHgWm3wKi23rp5zyBKeQ44eJmo81EQD%2BFMfZsqDFl23GzlKErF15oDBkkm12BxBkbXHOhr7qrCbFbJ2d3PPlJ5Q5hhgNpvSfwpIgua%2FkgoYpk8PsXMsVVNr8KJnEkUCLdP2MW9wkOzR98QVs4LSDy2NwHkHzh8o%2FW9VtBg6%2BuM3WZFPwnRtvXy4%2BJk%2FwtayXU6pH7llo43%2BI22frzjhD1QUEBVi7u2vWqHdIWiUEpm3TPsMpQM2fwSiTUVouecRpCwCi65sR9Br83m%2FfytZZqV%2BaRgdxesw6Hgb%2BAMYez9xxGZ9Aac9MqCseZNQNncLFHRkcI%2BlxPlpjinE0mKVEWMUg9xXSSBAW%2B4Z%2F0mX4s2YNAwTgaf8vPl%2F9H2DRs9ydktkCFasxoW%2BKEPT7Sp0Nr41yw8Lvq%2F29s%2FgNLDkJoTLiRz4SUKH3XCuS3dWeTOxr6rlpTEqMVVNsEkq9p5Ba9kSDAlX%2BklcOMV72MWdbv3HkViaHW7uSoLvYf%2FFgVqirm0FC19cDKQfjRvH7ISkd6dv%2Fq7qQcP%2FipM88RPI8u8NUbEZK9xctzN5yPoA4SbH7tOdEpU%2BGlIfXoDojVGfb4eaD29q%2Fvw5yWpVyUoayjDRzojKBjqkAch2eR8PiYQTyGq8viNCi1I9%2Bdc80wSW6R3POlMsAET2ZacBlcjwxpqlEGmST6VwK6NWiStbf0bmrQuIBxSw8w9rJ%2FvrJwB%2BwPXhgzVzpicTkfBcfnUIlWSMRrm9DwYiRTdj9VGnTn94Xd%2Fl9GgCGiOfKGUAaSmN0bKbYkJqADAzXkhJz26u%2B6LXXtv7MH4VWUiXMsrLFsOm0RJIO7QuRxezznr4&X-Amz-Signature=b0ee8f3d6e3ac86b974b1df4a7fd90775af341574e81dd41c5c93492c72f7a39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Si queremos modificar los dos radios de todas las esquinas podemos utilizar la versión reducida de [`border-radius`](https://w3api.com/CSS/border-radius/):


```css
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


```css
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
