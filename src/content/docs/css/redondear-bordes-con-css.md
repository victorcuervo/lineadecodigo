---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5V57YSF%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T011348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCICt1zJSabSguIXMAAiCvgkPY0%2Be97THiCJ479AfGfZXrAiAaFlZZG9sTQ5RJRH1HvgZizRcymv1mRScvfmNXXZSmmyr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIM0Tf9EKdcHnsXq09XKtwDaFjMyIFGruxEHZs091sdd%2FCB%2BeRlsAUtIZucIgvCkGmjB1sFJmVLJqgEiirx4nmz8caeHK5GdvwBmWxsVHOohvsgwGrDX1a0R27WwBS7WCavwtYim6W9POmi11kv%2B7WTazId7lbs9wV8e8pDj%2B1kAjtD1Z0isOqiiZxLiv11x6xK2%2BHmiEb8mB%2BOZ9x%2BXiltCCRALvRXUk7fAY7403iZE%2FoPy10Wocw8ws4pE5xKSGdIZ4Kqorbgu0nvZeV1X99RfUisXcWtyu5jp89Y53IPTIwKZX%2FW4Nd6%2B7FJ54xeCB3wRbyRZrpcZktE5M63QDY0ixtbOlgLRgcdS8d%2BrkQafkKCnuR7%2FWsxMcla1pZeK1r1Vq1L6zWh272vLAcV1de6T4ZAeUNJZIJDtrtm6RjBGdL9xWntSdTCTVIbuxCwd7N1BVVv7lAjV9W62neqhSi5U1yQNQAqFsc%2FgyghpjGLTdBawNGxJmxyEDRuysOi%2FadEZwq3IyPVQNR78P2AmxAJcDNQB%2FPzK8RO4SeacQl3QImtMmwwjR54kd8HREk1ibi7o8hsTl3QQI%2FrS4GoJuhy6Zwh5vrCoCJ4%2FnXfkF6bz%2B%2BejigOOtMMuPOusYPY2v2lSkXw3pXjBB0Jh0owoLXDyQY6pgGZowpKurDTDbYR54KGaNYhnnSiRCWih5%2FkZwyxHvulZ0ALK25kx9IeJLMUTSrZHiD8HbjJH9CGj8CmBz98rmmhbPk8fe%2FNGGD0eEB14StTGWnL1J00jPFH1u56Iu5Oq0Zm1J2bjYpaxXV9Gcw1q0ZISqk5ZUD2qBmoM00Mz%2B8rxYjcEhlFVR1vRY2meVBClWxroq%2B4T%2BuaxMuBfmnZY1ic3ewpZEvV&X-Amz-Signature=310e1446458c69fcd1806e2d6fabc201cf6b54742b4a3ed663659b64aef5637e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5V57YSF%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T011348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCICt1zJSabSguIXMAAiCvgkPY0%2Be97THiCJ479AfGfZXrAiAaFlZZG9sTQ5RJRH1HvgZizRcymv1mRScvfmNXXZSmmyr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIM0Tf9EKdcHnsXq09XKtwDaFjMyIFGruxEHZs091sdd%2FCB%2BeRlsAUtIZucIgvCkGmjB1sFJmVLJqgEiirx4nmz8caeHK5GdvwBmWxsVHOohvsgwGrDX1a0R27WwBS7WCavwtYim6W9POmi11kv%2B7WTazId7lbs9wV8e8pDj%2B1kAjtD1Z0isOqiiZxLiv11x6xK2%2BHmiEb8mB%2BOZ9x%2BXiltCCRALvRXUk7fAY7403iZE%2FoPy10Wocw8ws4pE5xKSGdIZ4Kqorbgu0nvZeV1X99RfUisXcWtyu5jp89Y53IPTIwKZX%2FW4Nd6%2B7FJ54xeCB3wRbyRZrpcZktE5M63QDY0ixtbOlgLRgcdS8d%2BrkQafkKCnuR7%2FWsxMcla1pZeK1r1Vq1L6zWh272vLAcV1de6T4ZAeUNJZIJDtrtm6RjBGdL9xWntSdTCTVIbuxCwd7N1BVVv7lAjV9W62neqhSi5U1yQNQAqFsc%2FgyghpjGLTdBawNGxJmxyEDRuysOi%2FadEZwq3IyPVQNR78P2AmxAJcDNQB%2FPzK8RO4SeacQl3QImtMmwwjR54kd8HREk1ibi7o8hsTl3QQI%2FrS4GoJuhy6Zwh5vrCoCJ4%2FnXfkF6bz%2B%2BejigOOtMMuPOusYPY2v2lSkXw3pXjBB0Jh0owoLXDyQY6pgGZowpKurDTDbYR54KGaNYhnnSiRCWih5%2FkZwyxHvulZ0ALK25kx9IeJLMUTSrZHiD8HbjJH9CGj8CmBz98rmmhbPk8fe%2FNGGD0eEB14StTGWnL1J00jPFH1u56Iu5Oq0Zm1J2bjYpaxXV9Gcw1q0ZISqk5ZUD2qBmoM00Mz%2B8rxYjcEhlFVR1vRY2meVBClWxroq%2B4T%2BuaxMuBfmnZY1ic3ewpZEvV&X-Amz-Signature=10f9c8f6dd5fb06b97dc84ce53ad7e1e40f99309cc1d32ab58cf105c858e6041&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
