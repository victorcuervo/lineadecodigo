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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667H5G2N34%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T185752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCSZ%2Faw7m9vR5zTqmgtwVnrZzJTY%2BiTrYuIr55%2Byj95EQIhAMtOE9dvvUf7J%2BvG91Bvt0tt36GcdWaHneN9biq1OE0oKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyTpgLDAgjYxl%2FV%2Bu4q3AP3kR%2BwQ7AuBKd4uUM9SUImX1dciTomg1Sr%2Fsm31BykJW%2FZpb8uoJCME%2FFYHP6mTTRMWVjXCAgufUjyXXbtpdh5HJ%2F6VZa3rmjvM4zJrnYzjvI1on%2BgBdK9qMY6x0C3Soo7dCk%2BfNkyJN4AeHAjHHQlAVQnD2%2BaO4DtHyBOfY%2FmQirhEPJOVcLmypxUAJiEVakn30p7AeLsPLGM0OViG%2FuMpabS6e9%2BnOE3BuCFU08quRSsWgO5FXrgg9Z8jyzVcasz6GxHXZSMukWAVVKjsuoUJgpsCrURDYQVdThmTQJ8Igt7XDiPGcnTdskT5w%2BPvVVrFP7tnG67pYKeeOsekHSHxBtSBnwPW2HojwgUY3rW5X5SNDmt%2B9LmoguidQifKbCFZ9pM%2FU90oMaJCP1CyZitbN%2F8Qtev9u%2B32djVUbeNcnSlNF5d75FaxVd2emo5kUXaRFfZ9A9XD39L570PJ4bJIYQ8giZVkE5AZDw7QCpvXonb8OeHUMASAihPiRNM5vdRzUE8wRQjbNAV8rxFNNhKivpDH6eHscxPrlgYHC9bM1H5P%2B1El5HnftHvG74eUCQTO5pRWjF8tk9AOqpSwA%2BN%2BbRjdDaxOz2qvfQGczSFrXlI4RXXiR%2BYu2HeLDCwtNzJBjqkAfPfCVDIYT8dsF27I3ulVVsJ%2FT2jFVwAGvtVkaTkCJmpgv%2B0%2Bfvz%2BFXRL%2BY%2Bjm7qBmlwjQ6yYHWwtfBDhvg6UzcnFggxk164noB9EgGuhTBXV0rzPMe1E648%2BDo%2B%2BYGm8LiPaUxc627DOa2X9MeClLuf9pk985HWp7bmWmKon2DBe5GqVGmdcPTHjmEclYKNLOCTe2rDJhVIVaNaHUFJF5%2BpaI4%2F&X-Amz-Signature=bfd2fd8616e7d7a7cc9f202c646e9743001eb31edffc3077b81fd987820ebb37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667H5G2N34%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T185752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCSZ%2Faw7m9vR5zTqmgtwVnrZzJTY%2BiTrYuIr55%2Byj95EQIhAMtOE9dvvUf7J%2BvG91Bvt0tt36GcdWaHneN9biq1OE0oKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyTpgLDAgjYxl%2FV%2Bu4q3AP3kR%2BwQ7AuBKd4uUM9SUImX1dciTomg1Sr%2Fsm31BykJW%2FZpb8uoJCME%2FFYHP6mTTRMWVjXCAgufUjyXXbtpdh5HJ%2F6VZa3rmjvM4zJrnYzjvI1on%2BgBdK9qMY6x0C3Soo7dCk%2BfNkyJN4AeHAjHHQlAVQnD2%2BaO4DtHyBOfY%2FmQirhEPJOVcLmypxUAJiEVakn30p7AeLsPLGM0OViG%2FuMpabS6e9%2BnOE3BuCFU08quRSsWgO5FXrgg9Z8jyzVcasz6GxHXZSMukWAVVKjsuoUJgpsCrURDYQVdThmTQJ8Igt7XDiPGcnTdskT5w%2BPvVVrFP7tnG67pYKeeOsekHSHxBtSBnwPW2HojwgUY3rW5X5SNDmt%2B9LmoguidQifKbCFZ9pM%2FU90oMaJCP1CyZitbN%2F8Qtev9u%2B32djVUbeNcnSlNF5d75FaxVd2emo5kUXaRFfZ9A9XD39L570PJ4bJIYQ8giZVkE5AZDw7QCpvXonb8OeHUMASAihPiRNM5vdRzUE8wRQjbNAV8rxFNNhKivpDH6eHscxPrlgYHC9bM1H5P%2B1El5HnftHvG74eUCQTO5pRWjF8tk9AOqpSwA%2BN%2BbRjdDaxOz2qvfQGczSFrXlI4RXXiR%2BYu2HeLDCwtNzJBjqkAfPfCVDIYT8dsF27I3ulVVsJ%2FT2jFVwAGvtVkaTkCJmpgv%2B0%2Bfvz%2BFXRL%2BY%2Bjm7qBmlwjQ6yYHWwtfBDhvg6UzcnFggxk164noB9EgGuhTBXV0rzPMe1E648%2BDo%2B%2BYGm8LiPaUxc627DOa2X9MeClLuf9pk985HWp7bmWmKon2DBe5GqVGmdcPTHjmEclYKNLOCTe2rDJhVIVaNaHUFJF5%2BpaI4%2F&X-Amz-Signature=9117a4452d9751b0c231cfe5b9ece2a0f041324dd5aaf1903181ca4b2ef373a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
