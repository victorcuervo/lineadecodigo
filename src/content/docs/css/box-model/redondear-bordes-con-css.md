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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTFOT5TB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T012033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG6B6XugakqiVMSem1B5tzguhOF5sPZyE48ylbZ91XFwAiA8pcY1p7Kc9CQCXH2LWXCogCeJ7TaWtqcQ3GeFji126ir%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIM8aju%2F7uDTLGp2eP8KtwD95tUmgz68Khfb1scm%2FN1jx53NkBPgI%2BpczqBiEr6pK3u2fUJ9F4VlQSmlhBV7EGsGqX0PTKmgyIIR2keKUBi%2B3PG6U8ta9f5fqZuh9c%2BzJ5yLsOE3fu3xOIZxv2vTbZ0c%2B8cKjUxR9vn32y8WwRRiLsauXX28MXOYLu5ONfF069cGhVLBdwPUUz%2BiV%2FeU8Lk0bJvz%2BmiZ8E%2FE9dz8Xtz%2B8ktdJb8ylyfyWR7nzgqXgajgh1a8qf2mDk0ISuLWSjIW7lB1d%2BSwo44OB9CYiLisEhSP4qHlxGpnAZkbQANGPjgmLx1YcFiz3ajhzpyZiuWXVr7QPGpDuApsJxABqGQtC0K3dp2hTc%2BjLF0sLNlaqoyGxaswdK0Kc8zPoMElpvuz9XdL7OBMv%2BApV1c0mkgDyvuIFRUp73VWFln1tG%2BVk2mba5FgPO61Vhchjycm65%2BXeDOtPM7YVqJhBFPrZxhyxftCgO4jJyY67mWh842ZUYMOuHlTbsUSZwfaLMCNlwW0CJUS7s8bJASKwzEslt6GDnYyqK2qEj%2BA7jHGcC5cN4MZjZdUIi8MvLfXWLeX1a4fdKCDmOxyPVaWUYE%2BFCzgpMJuWU8qD9mC%2Fm6fCR1ZsYz0S69AUE4tMaUTMUwwvuHygY6pgEUvgVEDfNtXBYF%2BJjxLX1R8EjmQ1w7CSLAxVExcwb%2B9bjB8JaXt3cRcXXkPtrjEW7MwZ5UQjF1Yi1q9wlEV797QsYTYmX0PAIs6Hkwq%2BRbbHOQARrEVLOpUZ6k%2BiX2WnqXGQoOcy67JHed3XDQ12HvfOfi6jbU%2FAOQNtPpdPXyQ%2BC76wzE0eC6sV7Lqw6XCGi%2FT59PKudrSOATG%2B%2Bv3tgmy9iI0K2y&X-Amz-Signature=705d77494e4b2bc39d55a444fe1eeb3e7264acab4299b2fc706b82f988c84fb7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTFOT5TB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T012033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG6B6XugakqiVMSem1B5tzguhOF5sPZyE48ylbZ91XFwAiA8pcY1p7Kc9CQCXH2LWXCogCeJ7TaWtqcQ3GeFji126ir%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIM8aju%2F7uDTLGp2eP8KtwD95tUmgz68Khfb1scm%2FN1jx53NkBPgI%2BpczqBiEr6pK3u2fUJ9F4VlQSmlhBV7EGsGqX0PTKmgyIIR2keKUBi%2B3PG6U8ta9f5fqZuh9c%2BzJ5yLsOE3fu3xOIZxv2vTbZ0c%2B8cKjUxR9vn32y8WwRRiLsauXX28MXOYLu5ONfF069cGhVLBdwPUUz%2BiV%2FeU8Lk0bJvz%2BmiZ8E%2FE9dz8Xtz%2B8ktdJb8ylyfyWR7nzgqXgajgh1a8qf2mDk0ISuLWSjIW7lB1d%2BSwo44OB9CYiLisEhSP4qHlxGpnAZkbQANGPjgmLx1YcFiz3ajhzpyZiuWXVr7QPGpDuApsJxABqGQtC0K3dp2hTc%2BjLF0sLNlaqoyGxaswdK0Kc8zPoMElpvuz9XdL7OBMv%2BApV1c0mkgDyvuIFRUp73VWFln1tG%2BVk2mba5FgPO61Vhchjycm65%2BXeDOtPM7YVqJhBFPrZxhyxftCgO4jJyY67mWh842ZUYMOuHlTbsUSZwfaLMCNlwW0CJUS7s8bJASKwzEslt6GDnYyqK2qEj%2BA7jHGcC5cN4MZjZdUIi8MvLfXWLeX1a4fdKCDmOxyPVaWUYE%2BFCzgpMJuWU8qD9mC%2Fm6fCR1ZsYz0S69AUE4tMaUTMUwwvuHygY6pgEUvgVEDfNtXBYF%2BJjxLX1R8EjmQ1w7CSLAxVExcwb%2B9bjB8JaXt3cRcXXkPtrjEW7MwZ5UQjF1Yi1q9wlEV797QsYTYmX0PAIs6Hkwq%2BRbbHOQARrEVLOpUZ6k%2BiX2WnqXGQoOcy67JHed3XDQ12HvfOfi6jbU%2FAOQNtPpdPXyQ%2BC76wzE0eC6sV7Lqw6XCGi%2FT59PKudrSOATG%2B%2Bv3tgmy9iI0K2y&X-Amz-Signature=f2fcc4b0378748018a4a447ade367947c0a22eaee64f562d1ca2869476b66804&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
