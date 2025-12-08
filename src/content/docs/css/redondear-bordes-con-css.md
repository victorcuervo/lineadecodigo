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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YSTKZ5H%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T015046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFFxZHjxPZcKJLvXxlbkSxDv5Z4M4OKjrfcJHfIX2YzCAiEA9cv8te6j2EhPn9TdOj8hG%2FxyJQpKj%2B%2BeGyCgEWservcqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKe2U93BBxf3CxZv5yrcA3T%2BH2lk9s18AAXNAWxdZrSLan2wWVrWuDq7ZRGAsH0ge3%2F0xqt%2BVsR7TjV1j6aZ%2BQcLvS5hw%2B8luk7e9qc0ravUDm%2Fp92bVYUC1JUiJTvmHNWhTZhJeefrkwcv96PaoWhUWNvZNqFzaEe6NMKxgs%2BUJuNYKqHiFLiHOkh9b0tFZD12SHIgq9wMw32FIAI0XuG10gPrJXyB1FJDKNfiFBZBlcYinT595S7TUL9%2F219nSxKUflzQ9XToaHOnoblbmkNpff3ociXY9qW9EhUYxEDjX7cRpXNSr9aiCPQ7iFIbBcJHkJQ42dZUxrtRuS3HTo7mhSLYuCRBgA5V%2Fil%2Fj2PO6ztbHN6DZbikFJMW70OlnHsOg0Otper0gne83OwyJ%2BTvlT7js73Wk5kpc6gpv%2B1%2BVLo%2F2dpN6mIgS9Yo6szJVF5vxZ0wnVtqYdgnaS1276BqBAl8yXbdfWMfJYporR8UZVm7rHNuAXi9DPDtNPn7EqqN%2Fsh59NvgC2UbTSw7tzvBmN23mQ%2FbIAflQ8Y1FlONortrjLosM9LoRg%2FpfzUfGlje5RBjofkLQ6eGms6iiWbfaweJKyYner3ed8P374rwaiXnQC05%2Fv9UkaBfJDWEG2etQq6HhLcRIUIFVMJLQ2MkGOqUBV5XTaYoaCJxaGYD8flfksMPh2g35poaU9%2FFCBGtIGl8kVAR%2BwfLDyW5yisCZcdwDRdfXXCKhCzTgYXZbUqX4tlO7H%2BEbkGPA5CJOnPPkKrMPHePu96Yf0I6idGA5nUoTrldSo4di1Z0M2ffNt8Cs23UOMd2cyTsXQBPWxc8LQ88rMKjl%2BMiwWvcMaaZGIDSgazb63MrlOF%2BP8JvE3b%2FvFc2TBde4&X-Amz-Signature=12b1abc029212d19946af0bd3483eec9a5ede463e986ae4f8d91643f86983edf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YSTKZ5H%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T015046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFFxZHjxPZcKJLvXxlbkSxDv5Z4M4OKjrfcJHfIX2YzCAiEA9cv8te6j2EhPn9TdOj8hG%2FxyJQpKj%2B%2BeGyCgEWservcqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKe2U93BBxf3CxZv5yrcA3T%2BH2lk9s18AAXNAWxdZrSLan2wWVrWuDq7ZRGAsH0ge3%2F0xqt%2BVsR7TjV1j6aZ%2BQcLvS5hw%2B8luk7e9qc0ravUDm%2Fp92bVYUC1JUiJTvmHNWhTZhJeefrkwcv96PaoWhUWNvZNqFzaEe6NMKxgs%2BUJuNYKqHiFLiHOkh9b0tFZD12SHIgq9wMw32FIAI0XuG10gPrJXyB1FJDKNfiFBZBlcYinT595S7TUL9%2F219nSxKUflzQ9XToaHOnoblbmkNpff3ociXY9qW9EhUYxEDjX7cRpXNSr9aiCPQ7iFIbBcJHkJQ42dZUxrtRuS3HTo7mhSLYuCRBgA5V%2Fil%2Fj2PO6ztbHN6DZbikFJMW70OlnHsOg0Otper0gne83OwyJ%2BTvlT7js73Wk5kpc6gpv%2B1%2BVLo%2F2dpN6mIgS9Yo6szJVF5vxZ0wnVtqYdgnaS1276BqBAl8yXbdfWMfJYporR8UZVm7rHNuAXi9DPDtNPn7EqqN%2Fsh59NvgC2UbTSw7tzvBmN23mQ%2FbIAflQ8Y1FlONortrjLosM9LoRg%2FpfzUfGlje5RBjofkLQ6eGms6iiWbfaweJKyYner3ed8P374rwaiXnQC05%2Fv9UkaBfJDWEG2etQq6HhLcRIUIFVMJLQ2MkGOqUBV5XTaYoaCJxaGYD8flfksMPh2g35poaU9%2FFCBGtIGl8kVAR%2BwfLDyW5yisCZcdwDRdfXXCKhCzTgYXZbUqX4tlO7H%2BEbkGPA5CJOnPPkKrMPHePu96Yf0I6idGA5nUoTrldSo4di1Z0M2ffNt8Cs23UOMd2cyTsXQBPWxc8LQ88rMKjl%2BMiwWvcMaaZGIDSgazb63MrlOF%2BP8JvE3b%2FvFc2TBde4&X-Amz-Signature=5f436bebf3d30ae0dbc0f67c408da28b9429a3f7eb7705c996559364ecf30d43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
