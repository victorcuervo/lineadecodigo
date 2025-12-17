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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNB5A66R%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T091255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH10pGNpKZPZWckF%2BEet5yqaM4fwTUQMU4sGABkbteQbAiEAmpe8iCulDzvDL%2FhxtD7OHdnoXZVIlwz4E2LZzpUiUgMq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDFbffmxQnLdUBdAS8SrcA3of3LPoRqO2bC9wSRZcbH%2BAE8G2HQj0KntMhPxeBYctdFqnTXcEmbYTaGuANSED9iWsBdjqcSunLNl%2FWXVBezGn7BSGgDi%2FyRo4dBbvSU3vedNZXxo2PbfjPDNU8mxAg%2F7DBSHyRxwedTxY95HaxsgOHtARhLf82i%2FJBQ2WTv8lhOgyo%2BbXgPmf%2BNIL9%2B9RnZwM%2BGYukrJHZzF74x0O24P8JwAw03Dacq849f%2BI2pcwco0kcPxq9A5xt3kLEOAOH3pdR%2FCXNl%2F6A%2BtmNFEvtq0c6zsTsH4BM1YiQA%2B6GGjj8F8%2BOgChoN94wIH3fkrwuMYtv1g9BGyWT59wlJMhT44lT0pYpOCPKCv%2BptVDyU2BSEtohs3Z2psDx5EMWaXKvUvFYg7xst7ZpHKmLhArBN2iMOv93ODtR7I6ywOleXO0HPsrlfTPGrDjW%2BZH9HwXMG%2FDZtrcpP2qMK5mzTQVFWcmMXHaTQdhb%2BQd%2BEPTW7KY7X%2BlXybJRXyGcX9U1%2Bzil1I0HcA6%2Bz2Qtts5ALKUQz6T54kgEtuIs%2FcnvNSZYim6ulDtpa%2BHY8hIqXn%2BUOPtWi5AmVQ0CxV%2FKA9oIp6H9WeCMwGoPnRyPO%2BzTt16azjjKsjvdhJQVw5ph5cTMK3SicoGOqUB1puU3I2fvOiDKuec%2BHhLvdnEfpRcNOeEmq4zgwShDwdAG6yp1sranzg58anfRZ7RY6tLA%2BJWbOUV%2Fi7%2BdjdjL7Pg6N2lWmpnaetMvGkR8oK9AQRU1kuJOEGHrWHtWtEkOX1c%2Bf5EipgjTpSfx3CoQPDU%2FjukUJd%2F3qvUh5UlS37Te2%2F8gLM02Jmf2ZiQNyt2Y6KVRNVIBnhB6YQs9c%2BO5DYTOCpa&X-Amz-Signature=14864a4d71fa8b390c02a331ceba37722140951119e9e97b713356baab54b9c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNB5A66R%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T091255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH10pGNpKZPZWckF%2BEet5yqaM4fwTUQMU4sGABkbteQbAiEAmpe8iCulDzvDL%2FhxtD7OHdnoXZVIlwz4E2LZzpUiUgMq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDFbffmxQnLdUBdAS8SrcA3of3LPoRqO2bC9wSRZcbH%2BAE8G2HQj0KntMhPxeBYctdFqnTXcEmbYTaGuANSED9iWsBdjqcSunLNl%2FWXVBezGn7BSGgDi%2FyRo4dBbvSU3vedNZXxo2PbfjPDNU8mxAg%2F7DBSHyRxwedTxY95HaxsgOHtARhLf82i%2FJBQ2WTv8lhOgyo%2BbXgPmf%2BNIL9%2B9RnZwM%2BGYukrJHZzF74x0O24P8JwAw03Dacq849f%2BI2pcwco0kcPxq9A5xt3kLEOAOH3pdR%2FCXNl%2F6A%2BtmNFEvtq0c6zsTsH4BM1YiQA%2B6GGjj8F8%2BOgChoN94wIH3fkrwuMYtv1g9BGyWT59wlJMhT44lT0pYpOCPKCv%2BptVDyU2BSEtohs3Z2psDx5EMWaXKvUvFYg7xst7ZpHKmLhArBN2iMOv93ODtR7I6ywOleXO0HPsrlfTPGrDjW%2BZH9HwXMG%2FDZtrcpP2qMK5mzTQVFWcmMXHaTQdhb%2BQd%2BEPTW7KY7X%2BlXybJRXyGcX9U1%2Bzil1I0HcA6%2Bz2Qtts5ALKUQz6T54kgEtuIs%2FcnvNSZYim6ulDtpa%2BHY8hIqXn%2BUOPtWi5AmVQ0CxV%2FKA9oIp6H9WeCMwGoPnRyPO%2BzTt16azjjKsjvdhJQVw5ph5cTMK3SicoGOqUB1puU3I2fvOiDKuec%2BHhLvdnEfpRcNOeEmq4zgwShDwdAG6yp1sranzg58anfRZ7RY6tLA%2BJWbOUV%2Fi7%2BdjdjL7Pg6N2lWmpnaetMvGkR8oK9AQRU1kuJOEGHrWHtWtEkOX1c%2Bf5EipgjTpSfx3CoQPDU%2FjukUJd%2F3qvUh5UlS37Te2%2F8gLM02Jmf2ZiQNyt2Y6KVRNVIBnhB6YQs9c%2BO5DYTOCpa&X-Amz-Signature=3ea27f7a951c6f5ba104d1760f615b9c5877daf21b66e81a6ba54e61553fe4a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
