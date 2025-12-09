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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGCOTIHF%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T054754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6tZGqTSto%2FUijMucvltHkGrwnKtFCYzZ4RDPLQh2vwQIgWdtwOtRGfHJgbfFl%2F8ibmRvhwIWLQX8xLBpwIdeA2yAqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLZSFOYfeWgRJpqhnyrcA%2BMacm8hwyAHNAQIpZfB8kYL%2BtifTkI7TxDWV7HpsJDcSutjxnmEjFMcMZXgbmsq0HZVQADAbXO41zFXojyS1WM8sc5UFVKg2yNaFKzKWmtv7tLjM7x%2Be%2B5tsXFTwuJbQPEWy22q6aSOVYSy4aHf0XX6nJ74GQ1nd7D3nfBPWTAGNk%2FnelTeX8OGKVciTeuEZ32%2B64nqFcRVGHWGQRMhMyzQB5ae2IbIqYFm8SSUGqFA3DqpBcWB2ZzhuGWAAxAIl406qPijjF3nt6yH%2FroeRqDpTs3f1d5wq%2Ft%2FQE6rQJfVzqY%2FYzXn7rtGXVsNDYvRH2WaG5erf6QGaUcwqSAPZzQN18Qo8bMz9gV1%2FHlTXnDbKnNExytq8SpucGjwJYo%2FWhEfA4cEBHGLfqmkgtLkpcFsuQjbaXTfe%2BfjcEDHOkAXrvozuxYI%2FiV91sQT38ho%2FbFi5rKhlOwE%2FCGl%2FZ4%2BI2yFmSkFjenmJX2ZgoDc%2F33kh6gW1iaaB3ItQu91QTn18cUopPN3QlM8W6oGyYHKRT7n2zZ72d4h843vdm8mQOwyrj71m54o5xvvpynTnaFutTQfxqNGEfUbMgWyx%2BokIK69F0capQ1SSllCtTazF5evOzTVxzPfOafk7yM1MM%2Fl3skGOqUBscilayxpEaEgKA2rR7oylZDO18er7%2FKQDh0%2BtXaD6KR%2FbKCMMyHO6kZPOZ0q%2Fnu2DVLPMfs0mcUSBJB0Nd8a%2BSTK3TR1ETYcqh8Yz8TK5hJ1HkcBuge4GiF%2Bm4glz7%2BMr4S9CVT7SLtSBlGljjj7Me5kVW%2Buz2KYDeaH6GnpGVe9Y64%2BuWoef3pSApgGDI4ZIOzx9U6HI%2FXt%2FJzZs%2FnBaEwkgWl6&X-Amz-Signature=27267195aadf8fadee50d73a7adfdfe9bc5286a6803056ae8433bd78012db07d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGCOTIHF%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T054754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6tZGqTSto%2FUijMucvltHkGrwnKtFCYzZ4RDPLQh2vwQIgWdtwOtRGfHJgbfFl%2F8ibmRvhwIWLQX8xLBpwIdeA2yAqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLZSFOYfeWgRJpqhnyrcA%2BMacm8hwyAHNAQIpZfB8kYL%2BtifTkI7TxDWV7HpsJDcSutjxnmEjFMcMZXgbmsq0HZVQADAbXO41zFXojyS1WM8sc5UFVKg2yNaFKzKWmtv7tLjM7x%2Be%2B5tsXFTwuJbQPEWy22q6aSOVYSy4aHf0XX6nJ74GQ1nd7D3nfBPWTAGNk%2FnelTeX8OGKVciTeuEZ32%2B64nqFcRVGHWGQRMhMyzQB5ae2IbIqYFm8SSUGqFA3DqpBcWB2ZzhuGWAAxAIl406qPijjF3nt6yH%2FroeRqDpTs3f1d5wq%2Ft%2FQE6rQJfVzqY%2FYzXn7rtGXVsNDYvRH2WaG5erf6QGaUcwqSAPZzQN18Qo8bMz9gV1%2FHlTXnDbKnNExytq8SpucGjwJYo%2FWhEfA4cEBHGLfqmkgtLkpcFsuQjbaXTfe%2BfjcEDHOkAXrvozuxYI%2FiV91sQT38ho%2FbFi5rKhlOwE%2FCGl%2FZ4%2BI2yFmSkFjenmJX2ZgoDc%2F33kh6gW1iaaB3ItQu91QTn18cUopPN3QlM8W6oGyYHKRT7n2zZ72d4h843vdm8mQOwyrj71m54o5xvvpynTnaFutTQfxqNGEfUbMgWyx%2BokIK69F0capQ1SSllCtTazF5evOzTVxzPfOafk7yM1MM%2Fl3skGOqUBscilayxpEaEgKA2rR7oylZDO18er7%2FKQDh0%2BtXaD6KR%2FbKCMMyHO6kZPOZ0q%2Fnu2DVLPMfs0mcUSBJB0Nd8a%2BSTK3TR1ETYcqh8Yz8TK5hJ1HkcBuge4GiF%2Bm4glz7%2BMr4S9CVT7SLtSBlGljjj7Me5kVW%2Buz2KYDeaH6GnpGVe9Y64%2BuWoef3pSApgGDI4ZIOzx9U6HI%2FXt%2FJzZs%2FnBaEwkgWl6&X-Amz-Signature=d839701548d77ecf77c8c1cd8f1e09e051d8372d04ed4e85f1a769609d685a04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
