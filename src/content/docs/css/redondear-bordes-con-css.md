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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJEKU3KU%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T000337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvABaFQN78q8xlZ8O8BSBC0WEO5lgzHkEp11%2Btehl9ogIhAKyuZfYrymNFDFn5GTeq5AJ5EWL98VgVG7TG05jTQtOMKv8DCGgQABoMNjM3NDIzMTgzODA1IgyKAQkd%2FrFgI3cIb8gq3AMdpt5JKNLb8ckR%2FcfR%2BZXrVDNMgSCmxBWlzqK5edBPj6he5JWdUtZFspghiyHpmB%2Fp8r1Sz%2BlmRRgoVn6Eu2U7Fuidrn9uFqJFCPJCAb4juvIU9jRz0vQGiB50WmaW%2BJdA1JLmEIpKFeh6Vn1BFY9%2BjBV9eY2pJJqDx813V3KsHm9GfykI2%2BbngFXfIwyz10Dy0wSzMyD%2F3yMSeR5UTyZW5V2WBae65lknG%2FdwpN%2BMqsiOZk0%2FyHOXgBe51Wmo%2BgBtbPAdREcqh0sDb6oQbBLN8G9aWYJviipaa63FO%2BrOYYPS%2BhA2N97iHYHwIW3O91Fn7HrxuabsWIXejoGPCsTnGV3cNnKXGE7QKqZfTA60gsA6PIKk5iVK25e2rAeMmqcrXyknp%2B3sOIG%2F%2Fjp60dxsZicoZyVv5yuRGQVQSdB9pr08CPfzbbcLcam8QANBRIZIBqK7jDoBqGRgZSXFZBtOdBX2Uit77jVqvDrsh5H%2ByO5oUAj%2B8hG2hjJi4WW1nqk9qADNYDM3TLiLZIgZb3uHVkW28xOpUqnkWq95ZF1tJS3CM1PiSwpUgyZZFFP9BQQNsMA5j%2BtLMuFs531bz%2FoLRAQAI0nBvw034XUMpVca%2B9rElfCUW%2FhNR%2F2x3TCTxs3JBjqkAcmKjLjaIVHjjA7j0gnzPiAauYEYqf87LwbhJMI9N9xxqTFI6fuO2HcQ0A%2FTwVqsHMejALo0i9zUrw7D5SDp2TqFdlQMsAWG0PIwR6w53OIOjcSHp95dEaji91cgLBZzuYzYzbRuJvWcmk3jjCZQoybR19TRfptPPqFLUiAC93x%2FexLBwKWW2iX9qr%2FcdYkxyqnTWigyrJEbEuIbzDs4mqZJVc5V&X-Amz-Signature=c7dea4db25e9c06a318472a5b94b2cf2cc3825fbeba5d851d1fccbeee27e2f4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJEKU3KU%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T000337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvABaFQN78q8xlZ8O8BSBC0WEO5lgzHkEp11%2Btehl9ogIhAKyuZfYrymNFDFn5GTeq5AJ5EWL98VgVG7TG05jTQtOMKv8DCGgQABoMNjM3NDIzMTgzODA1IgyKAQkd%2FrFgI3cIb8gq3AMdpt5JKNLb8ckR%2FcfR%2BZXrVDNMgSCmxBWlzqK5edBPj6he5JWdUtZFspghiyHpmB%2Fp8r1Sz%2BlmRRgoVn6Eu2U7Fuidrn9uFqJFCPJCAb4juvIU9jRz0vQGiB50WmaW%2BJdA1JLmEIpKFeh6Vn1BFY9%2BjBV9eY2pJJqDx813V3KsHm9GfykI2%2BbngFXfIwyz10Dy0wSzMyD%2F3yMSeR5UTyZW5V2WBae65lknG%2FdwpN%2BMqsiOZk0%2FyHOXgBe51Wmo%2BgBtbPAdREcqh0sDb6oQbBLN8G9aWYJviipaa63FO%2BrOYYPS%2BhA2N97iHYHwIW3O91Fn7HrxuabsWIXejoGPCsTnGV3cNnKXGE7QKqZfTA60gsA6PIKk5iVK25e2rAeMmqcrXyknp%2B3sOIG%2F%2Fjp60dxsZicoZyVv5yuRGQVQSdB9pr08CPfzbbcLcam8QANBRIZIBqK7jDoBqGRgZSXFZBtOdBX2Uit77jVqvDrsh5H%2ByO5oUAj%2B8hG2hjJi4WW1nqk9qADNYDM3TLiLZIgZb3uHVkW28xOpUqnkWq95ZF1tJS3CM1PiSwpUgyZZFFP9BQQNsMA5j%2BtLMuFs531bz%2FoLRAQAI0nBvw034XUMpVca%2B9rElfCUW%2FhNR%2F2x3TCTxs3JBjqkAcmKjLjaIVHjjA7j0gnzPiAauYEYqf87LwbhJMI9N9xxqTFI6fuO2HcQ0A%2FTwVqsHMejALo0i9zUrw7D5SDp2TqFdlQMsAWG0PIwR6w53OIOjcSHp95dEaji91cgLBZzuYzYzbRuJvWcmk3jjCZQoybR19TRfptPPqFLUiAC93x%2FexLBwKWW2iX9qr%2FcdYkxyqnTWigyrJEbEuIbzDs4mqZJVc5V&X-Amz-Signature=03a3679b626efb70b5397b62903dc2ad5e8485bd06f253b6a154c7d65cc02db3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
