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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676NL2WYV%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T214103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFliv4eki9rF0c6h03Pg3PsLibgStAgoOmN0aDtDEbvtAiEA9FDoNfCsKyvNLNF4ncmYoKipSUueTE%2Bldwxh24PdKd4qiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDjhJYXBpcwDMfNTUircA9cnUFn0e3thKUP%2Bdlk7x1DlcBakIf6B%2FUA8Tz8Zi7bImRchWaeHg2RnRCng9FKs9x%2Fmp0%2B0j5nQHJpEYn0BUEMUeco0O26SWM7Tlxn8sfe8GUIaMLX%2Bvh0bQgJ2WKJKyz1gJQvnSiWbLYgNkaynnX48XK7qIxmjNd%2FKguaJxghddzzE9iSTJrEKJx2pvyL3phCVgyhpelU5YNulP%2FTItJGLoLuygUNzVjwi9C8shF3gNkOIeLSnHZZ2aMXMybWKfLnlZLf%2FD%2BuDqYOgBNKVG6emgV24I6SJDp%2FqQ62eepY7bwqyBB%2F5pz4mEVQf7VMD7f2h%2FRKmBM1NLvbVvlrBOf8OLphgLcraKUbF7aa95eVhEZKZ8RVjc48l02oDKksubg01bvgjZ2X%2FR6iD6Ms5smlh7EvmXPAwktJL3SizJ4j4eJQ11sJzEFBF6caHeh0UnEfjUSOMyVF8AM%2FhgDqSCmii0lBkM1oM2J%2FFUVb%2F8H37K%2FXpBPYfjVYep8D4q%2FiTi7%2FAg3hpQG%2BUi2Zyv9KbVaAyJYEwDY3ssNPYHoOcD8OxtCGD%2FJbftzJLEaOt169WYRNbmpjC07gYfT6sO%2B%2BiMA%2F62KfevW6dt4J7ZXAX13SDMZN%2FhQrKhJypmuTXMLmA3ckGOqUBmKXbKh4f7L2%2BPGmdMJYPD20isz4hB4mr2wMQB5LZ835ECyb206DH%2BrBVF3%2FSRmFl3L104pFLoXYngprywe92VRB6xfThyyuDEls88diYojL5y3Elu3%2Ft%2BNz8F6uHcNDWhQPQETS2ixdsudBWa3OOSmizGwYek0dT3KBxTIN7H3ZY%2BrL%2FB1rhnnj6fHFgSXY2KFo3wPKqVqW1Vk7bosu8a8YAbjuW&X-Amz-Signature=72e6570bfd91725540eb9ffcedd9513690e518f3db97376cd7a483d2c617f853&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676NL2WYV%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T214103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFliv4eki9rF0c6h03Pg3PsLibgStAgoOmN0aDtDEbvtAiEA9FDoNfCsKyvNLNF4ncmYoKipSUueTE%2Bldwxh24PdKd4qiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDjhJYXBpcwDMfNTUircA9cnUFn0e3thKUP%2Bdlk7x1DlcBakIf6B%2FUA8Tz8Zi7bImRchWaeHg2RnRCng9FKs9x%2Fmp0%2B0j5nQHJpEYn0BUEMUeco0O26SWM7Tlxn8sfe8GUIaMLX%2Bvh0bQgJ2WKJKyz1gJQvnSiWbLYgNkaynnX48XK7qIxmjNd%2FKguaJxghddzzE9iSTJrEKJx2pvyL3phCVgyhpelU5YNulP%2FTItJGLoLuygUNzVjwi9C8shF3gNkOIeLSnHZZ2aMXMybWKfLnlZLf%2FD%2BuDqYOgBNKVG6emgV24I6SJDp%2FqQ62eepY7bwqyBB%2F5pz4mEVQf7VMD7f2h%2FRKmBM1NLvbVvlrBOf8OLphgLcraKUbF7aa95eVhEZKZ8RVjc48l02oDKksubg01bvgjZ2X%2FR6iD6Ms5smlh7EvmXPAwktJL3SizJ4j4eJQ11sJzEFBF6caHeh0UnEfjUSOMyVF8AM%2FhgDqSCmii0lBkM1oM2J%2FFUVb%2F8H37K%2FXpBPYfjVYep8D4q%2FiTi7%2FAg3hpQG%2BUi2Zyv9KbVaAyJYEwDY3ssNPYHoOcD8OxtCGD%2FJbftzJLEaOt169WYRNbmpjC07gYfT6sO%2B%2BiMA%2F62KfevW6dt4J7ZXAX13SDMZN%2FhQrKhJypmuTXMLmA3ckGOqUBmKXbKh4f7L2%2BPGmdMJYPD20isz4hB4mr2wMQB5LZ835ECyb206DH%2BrBVF3%2FSRmFl3L104pFLoXYngprywe92VRB6xfThyyuDEls88diYojL5y3Elu3%2Ft%2BNz8F6uHcNDWhQPQETS2ixdsudBWa3OOSmizGwYek0dT3KBxTIN7H3ZY%2BrL%2FB1rhnnj6fHFgSXY2KFo3wPKqVqW1Vk7bosu8a8YAbjuW&X-Amz-Signature=529c8ac9c91c30ed3d23bf7a87f291a1e24b5c220751065e2023b8e9d680c856&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
