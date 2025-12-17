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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466US6XXSD3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T155038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdsjK%2FuIoXdFl%2B1fD01oUdjLqvdCa22ihnMrQGUHyCZwIhAJ936pgsYfDLO3z08IY7YWbk3808E%2F3J33zSRl4ZnSBwKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzMY8glE%2Bw7N2Dtp1Uq3AMZnkJDQzuAIFe2V9N0SyFf5yTmtqQsgt%2FLrXHV1RTwijXUWg%2FFWYmMTWU68UCKxG%2BvJ4E50u1AofhiUA56uiY%2Bq11sH5aqpWaiPkkk44y8QOrA4rHZ1O0kYD%2F13db%2FfDQBDi0uxIVTAf58lglZN9%2B6hdKsYmWgh0jayD41PRT5g0iuHXwz%2BDrS9oHyzfPIOT1ZhH6KoubU4qv9vaTMkCHuPuyKBmZ6lajZdXUoqJonyxYHysp%2FCC8%2Bsq0eilB4D%2F7%2FjloKPvJLYzoeAbZadwi9UUfBxltRUEkaDqXBkGLIq9%2ByZsOFoiyHoiY1K6rNdbKnIgqW3Z7Uz1U3l8s3XsnFY5aig9xK5RRKPwcTEjTBR1MtXZmZc1uylRng2%2FMga9ObMCQfR%2BW0%2BEMUUDor1fm%2FMY7qzsGhryvx34sr7w4XDhwedbyhSRu0OjufnQnS8kFj3CouxJdKG%2Bk8mtyrEfuA17gO8KOHnv9Lc1OgRTz%2F5oY524Kj1fGN6cc%2B1WYOkIoD6EImcMEQi27dTknXK%2FybxRW5BbaYZ79%2Fs64MzvqoxXy4N%2F3G7WEC8I5YDYgFuZNrFw8PAEzZdv%2Bd99109qtaI87jC7Kpo2SB0IcMUS10m8GMqoZ1D%2Br8N%2Bs3%2FjDIn4vKBjqkAcipZWJHNsPYsgTSA6K09lLTULeBQlWJTFbTgbY6mZJxGPJquAmwYwDNlWezUuzsxo8%2BDca6veiisq9gFiKG%2BtndyBLKVF7Ce5EPt9xmfd2WrGrjJvsaOK1Of%2BGqxz%2FzNKcUy3IdZcnEGRtRRifFUcSg71rhGV30WKFJHEcPL91RcRip8zxSGMDX9GI9fVZjtdkr%2Bf5WQLp3O58lnKiLb0fbLjJ%2F&X-Amz-Signature=da506b8c375841405f227c1c60757c02cc59a6b9f11f2daa9514d36e78201504&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466US6XXSD3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T155038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdsjK%2FuIoXdFl%2B1fD01oUdjLqvdCa22ihnMrQGUHyCZwIhAJ936pgsYfDLO3z08IY7YWbk3808E%2F3J33zSRl4ZnSBwKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzMY8glE%2Bw7N2Dtp1Uq3AMZnkJDQzuAIFe2V9N0SyFf5yTmtqQsgt%2FLrXHV1RTwijXUWg%2FFWYmMTWU68UCKxG%2BvJ4E50u1AofhiUA56uiY%2Bq11sH5aqpWaiPkkk44y8QOrA4rHZ1O0kYD%2F13db%2FfDQBDi0uxIVTAf58lglZN9%2B6hdKsYmWgh0jayD41PRT5g0iuHXwz%2BDrS9oHyzfPIOT1ZhH6KoubU4qv9vaTMkCHuPuyKBmZ6lajZdXUoqJonyxYHysp%2FCC8%2Bsq0eilB4D%2F7%2FjloKPvJLYzoeAbZadwi9UUfBxltRUEkaDqXBkGLIq9%2ByZsOFoiyHoiY1K6rNdbKnIgqW3Z7Uz1U3l8s3XsnFY5aig9xK5RRKPwcTEjTBR1MtXZmZc1uylRng2%2FMga9ObMCQfR%2BW0%2BEMUUDor1fm%2FMY7qzsGhryvx34sr7w4XDhwedbyhSRu0OjufnQnS8kFj3CouxJdKG%2Bk8mtyrEfuA17gO8KOHnv9Lc1OgRTz%2F5oY524Kj1fGN6cc%2B1WYOkIoD6EImcMEQi27dTknXK%2FybxRW5BbaYZ79%2Fs64MzvqoxXy4N%2F3G7WEC8I5YDYgFuZNrFw8PAEzZdv%2Bd99109qtaI87jC7Kpo2SB0IcMUS10m8GMqoZ1D%2Br8N%2Bs3%2FjDIn4vKBjqkAcipZWJHNsPYsgTSA6K09lLTULeBQlWJTFbTgbY6mZJxGPJquAmwYwDNlWezUuzsxo8%2BDca6veiisq9gFiKG%2BtndyBLKVF7Ce5EPt9xmfd2WrGrjJvsaOK1Of%2BGqxz%2FzNKcUy3IdZcnEGRtRRifFUcSg71rhGV30WKFJHEcPL91RcRip8zxSGMDX9GI9fVZjtdkr%2Bf5WQLp3O58lnKiLb0fbLjJ%2F&X-Amz-Signature=f4804eedb78a8f3b74599353718cbc41628d46b820efa4ce988214ad8b9c1767&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
