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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMJEKGBE%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T205437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA4pxxQhBvm%2FWSzE84hIMSF6lG06Itv39R5noEPOcZ31AiEAtU1ARoUM%2Baef1VBMkqUZCrgPxlGqgNup1lrMeQF160gqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDsYncPykI2ti5NzlyrcA7qy8xsF6c7WY5FwckYlqi%2F0JIMJSCsIsoGh2MtwYf4W6L8VOB%2BarHLD9EK8XRsIo90AoPOA62%2F3rjPUMyD9LF8IiOK6Svpx4%2F7XSFTYvK9G0QJel9mwoc25dKEaW%2Frao1IZsEPcVMY%2Bl1QZewLNFIzq6WGJiKZ8dAenv471LyTAmUaIu4xSIME1uyoDGY8EEimCHKz8w7JBH2aWb03QCWwbS%2F9bSWCEUJ462EWhfiggHUIgzPSFPJZGC5T%2FpC3Nr7V8763IjjLSA%2FRjKnFBuU9vtBxo8zsUlAjjM%2Fs10p%2FJlmT7YKVwoHjg%2BbASRmxkQwGTa9JGhs4snVU4j5VCRKiJRgiR5kHGw1uOuWYJm9aqNbbRPorgP3jE80AJAcpYrnlLJN3Bx2Vx46mFGHJhrVDYczSUwSk1bOBLViCn85dSv0T6KxEny2Z66wtpvFgD36oNhtXAmnRE5317LrA8gSC6I36KBR8x8VbENh419Wm6prRzZZ2G84qQW5EjdRsj6dcgHVRXo37UPu2ynBj4xl0gL0EidhmHgx5LrrrCHDuUEnoeEfbqKROPH9F7kUHtZA6PorVg5573MSvpdGVYAWjeWgdVfJHvs7ZHrh%2BG7z6OiHAV3Mftm2FP9HaWMOjc3MkGOqUBIqLLxFx6O1QTVMPW5YcS2FFcfx8DdjxH0RBSKrPMiDxctzEa2hqQ%2BfhKtM4mORLsDDg1%2Feh9UHJk2ZS3DSVC4%2BRBwhou4cnqeUomXluKYlBjJqlSHsDjFLCxZu9vW9vYqxRZKxIgi75R7eSAY%2FpVyMOo2MO81A2rUhRv0PmHHOuWf3TOVN2sL3Rc0seSlLytNkUOyOFu6RlHpP3ZP7%2F7RtUIwA6G&X-Amz-Signature=620721f72910ba09d67a3cca02aca73dbb2d82878dfa42019ff704a2939e49b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMJEKGBE%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T205437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA4pxxQhBvm%2FWSzE84hIMSF6lG06Itv39R5noEPOcZ31AiEAtU1ARoUM%2Baef1VBMkqUZCrgPxlGqgNup1lrMeQF160gqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDsYncPykI2ti5NzlyrcA7qy8xsF6c7WY5FwckYlqi%2F0JIMJSCsIsoGh2MtwYf4W6L8VOB%2BarHLD9EK8XRsIo90AoPOA62%2F3rjPUMyD9LF8IiOK6Svpx4%2F7XSFTYvK9G0QJel9mwoc25dKEaW%2Frao1IZsEPcVMY%2Bl1QZewLNFIzq6WGJiKZ8dAenv471LyTAmUaIu4xSIME1uyoDGY8EEimCHKz8w7JBH2aWb03QCWwbS%2F9bSWCEUJ462EWhfiggHUIgzPSFPJZGC5T%2FpC3Nr7V8763IjjLSA%2FRjKnFBuU9vtBxo8zsUlAjjM%2Fs10p%2FJlmT7YKVwoHjg%2BbASRmxkQwGTa9JGhs4snVU4j5VCRKiJRgiR5kHGw1uOuWYJm9aqNbbRPorgP3jE80AJAcpYrnlLJN3Bx2Vx46mFGHJhrVDYczSUwSk1bOBLViCn85dSv0T6KxEny2Z66wtpvFgD36oNhtXAmnRE5317LrA8gSC6I36KBR8x8VbENh419Wm6prRzZZ2G84qQW5EjdRsj6dcgHVRXo37UPu2ynBj4xl0gL0EidhmHgx5LrrrCHDuUEnoeEfbqKROPH9F7kUHtZA6PorVg5573MSvpdGVYAWjeWgdVfJHvs7ZHrh%2BG7z6OiHAV3Mftm2FP9HaWMOjc3MkGOqUBIqLLxFx6O1QTVMPW5YcS2FFcfx8DdjxH0RBSKrPMiDxctzEa2hqQ%2BfhKtM4mORLsDDg1%2Feh9UHJk2ZS3DSVC4%2BRBwhou4cnqeUomXluKYlBjJqlSHsDjFLCxZu9vW9vYqxRZKxIgi75R7eSAY%2FpVyMOo2MO81A2rUhRv0PmHHOuWf3TOVN2sL3Rc0seSlLytNkUOyOFu6RlHpP3ZP7%2F7RtUIwA6G&X-Amz-Signature=9892c2a65a5e5b595a927828e50e6a90a292bdc43097cb384c8411701971e2a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
