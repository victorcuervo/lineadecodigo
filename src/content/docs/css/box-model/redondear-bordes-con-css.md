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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633OXSI3G%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T074316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPCP1OBzkzSvyI5207hw8TWxwiawNZZFJVj8Ik%2FUvCuwIhAP%2FVBu2Ii6ioUqlm4%2FbE0OxpV%2B7gd49r54SuUSVY4pm%2BKv8DCHgQABoMNjM3NDIzMTgzODA1IgwTlQvdsVxeLbU2edsq3AOfbB7jpbQhWR4Qzz%2BiWMIYVElhwZg1NTIXwuecldnTDqt1LskqNlpEbh8jKCJrBKKZpK3DjDlfxgbzDNt0DuymdkJHHqWvABcnzABKfCcjATvuODj8klycAXyhw8%2F2h9zgkX5qgVe2byOYF04fYVo3cg9yb1qSJ3ofHpYpTw4Jn2kYcgVgWh6eRNmwYmhPnJrXWVRDFIZgr4DlHS%2BAeoqqI5eiZengIt67mEmNe4tU87RSg3S0%2FQLYhfnBGXPiyuslsoxpSMwPBZy3eIjjahTAr9w14fDPxe35X8lVfhm7xpAxfT00r4RwixUaI50rTyuyAXR7hukOqZrHkbdVktyEe9jTb2knYT8mJ4KYumWqwQjbZvhD9wOSvgPv901OvtYHq3RXEwFL47cA6Lh6%2BwOsniw3hiq0%2Bmt7yRL56Mrr2Z3Ms4w50EfGMyN6cuDV0Elcq4Kdt4F%2F0ZZ8Czpc3cDYgEACyFPdyXH3ngY7v93txsOXyYFakaZyVgSWJvJYppsA%2B0Trlthx50OSw9jRdUSPVuWEczL%2F11e5aQ8FV6hNUReL91ZLDNaSPdP7dCKYPlCWhKttN4HSUcSKcvMJDW7EUWo5AFPSIajxgsVqVJRTwLXLjRLm6REyoquXkzCVuInKBjqkAfBtCHw9y9bdLUhYyqNfRJH0IjjpC0rHd%2B%2FAoENAEM4xYCT8dVde6ejyi0AfQ2UyW83TtJx%2FQAOjW75QkI0opUxDZgQCsvW27AvMgJTMorChxxVvNOxt%2FfmZyTbQi%2FC4ASHduoUjC71itvTvxDVlT33foFS6PZ9QsZEk9aG3E6U4bIdkW1EtDfKFJF12g%2BGB8JX71efnuBWb3MHkmWHuglQ%2Fj1lA&X-Amz-Signature=a3376b31e91c2ad031cd222d6f820545f06de8e4958499495786a96a2079112f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633OXSI3G%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T074316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPCP1OBzkzSvyI5207hw8TWxwiawNZZFJVj8Ik%2FUvCuwIhAP%2FVBu2Ii6ioUqlm4%2FbE0OxpV%2B7gd49r54SuUSVY4pm%2BKv8DCHgQABoMNjM3NDIzMTgzODA1IgwTlQvdsVxeLbU2edsq3AOfbB7jpbQhWR4Qzz%2BiWMIYVElhwZg1NTIXwuecldnTDqt1LskqNlpEbh8jKCJrBKKZpK3DjDlfxgbzDNt0DuymdkJHHqWvABcnzABKfCcjATvuODj8klycAXyhw8%2F2h9zgkX5qgVe2byOYF04fYVo3cg9yb1qSJ3ofHpYpTw4Jn2kYcgVgWh6eRNmwYmhPnJrXWVRDFIZgr4DlHS%2BAeoqqI5eiZengIt67mEmNe4tU87RSg3S0%2FQLYhfnBGXPiyuslsoxpSMwPBZy3eIjjahTAr9w14fDPxe35X8lVfhm7xpAxfT00r4RwixUaI50rTyuyAXR7hukOqZrHkbdVktyEe9jTb2knYT8mJ4KYumWqwQjbZvhD9wOSvgPv901OvtYHq3RXEwFL47cA6Lh6%2BwOsniw3hiq0%2Bmt7yRL56Mrr2Z3Ms4w50EfGMyN6cuDV0Elcq4Kdt4F%2F0ZZ8Czpc3cDYgEACyFPdyXH3ngY7v93txsOXyYFakaZyVgSWJvJYppsA%2B0Trlthx50OSw9jRdUSPVuWEczL%2F11e5aQ8FV6hNUReL91ZLDNaSPdP7dCKYPlCWhKttN4HSUcSKcvMJDW7EUWo5AFPSIajxgsVqVJRTwLXLjRLm6REyoquXkzCVuInKBjqkAfBtCHw9y9bdLUhYyqNfRJH0IjjpC0rHd%2B%2FAoENAEM4xYCT8dVde6ejyi0AfQ2UyW83TtJx%2FQAOjW75QkI0opUxDZgQCsvW27AvMgJTMorChxxVvNOxt%2FfmZyTbQi%2FC4ASHduoUjC71itvTvxDVlT33foFS6PZ9QsZEk9aG3E6U4bIdkW1EtDfKFJF12g%2BGB8JX71efnuBWb3MHkmWHuglQ%2Fj1lA&X-Amz-Signature=8906c07311a8009b60e4f3b29589c43220915b56816a45381bcb14e06574858e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
