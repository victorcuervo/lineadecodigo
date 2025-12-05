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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FV3FTSZ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T223904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxl%2B6gTwjsgmYEzVok3RRUBvxyDifH2NA1kH65SXIIqQIgVp0CNsIi38toCJEgr3zMJDU1LVDhK04Ghg50V8glWw4q%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDFgHqfvmGLSVk549hircA0DQOBit%2FecD8eBqaKILwtM%2FKBk1ckEqavx5ySvJi%2FqpCr7eHem6rEpC8rIXygiZ2noHpcDngghHN1fe6K0IkuNlcy4i28qzVgjaObsi1%2FSUP5jq8TynITc%2BdMJmlzMGQYt6%2Fd6IKr2WGGtjRyojEXPhbuKxO7MACmxn9LDD9NbyOdX9e2P2sjOfGbAS7r8jN5q9%2F11A2VKkxxFYuqvH6uA5AhHe52BNWPuJ%2B3fJ9EmtLc43YJuJVvweltBbSMk%2FoaMmzHXjsUSeliYo4cXTxtZP6EPCdiwLq97Hp8sqm1rEy9d1Fry2PUnzV0KnWtsGYIb5HnGEwXW09DQ%2BS6sZbD%2BfrGby%2BhHHi9IeH1z1gg8ubMUKjUamUTyn57CAyEGzaAk7nnNNJl7CPuQimPz3h2CooVSO119miEs14mQ44y%2BnQKQp3xG1zqv8v3R1KN6%2BYgV4Hc24fpUTcnhOCCz%2BuLzWsIwLMUEU43uhRcmK3SZo6Dq1cJ1SNe%2BROuaGc1I7ZYyjZ%2FGqb%2B3itZM4DVSkDPJwAlzBMEoS3vnkEBe0TXr4NOATWRCFQfOUKf8jnyulkwB3mcxnKJ%2BYuf2yZgYBngNx%2FYDbr7tJmW2uFgxel33yIWVb4rGtp67c%2B3%2BOMP6OzckGOqUBtu%2Brzj80%2B3Aq26EXdTCZvSABkn2DNZ6COX9TOYVsKf07BHcfCgOz%2Bre%2F8IeqqpxMajGd0SG468CztTLZzLBRv62K0SlptQNm4tB4SldWIZ1KbPLTzFkNmTjPJVWqo2cSe5bjEO5xL6VydokehZ%2F2s49nwFuBfrVO2TWhL%2FlqC%2F4byDmpql8ZxRQOWFExIUMF4Vzqfx1V8yQ7NDnMEB66w37TnM4h&X-Amz-Signature=5a5e6eb8036930cef30b24c0a3e010e0cf32b50376ec487ba8d8417de2503c0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FV3FTSZ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T223904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxl%2B6gTwjsgmYEzVok3RRUBvxyDifH2NA1kH65SXIIqQIgVp0CNsIi38toCJEgr3zMJDU1LVDhK04Ghg50V8glWw4q%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDFgHqfvmGLSVk549hircA0DQOBit%2FecD8eBqaKILwtM%2FKBk1ckEqavx5ySvJi%2FqpCr7eHem6rEpC8rIXygiZ2noHpcDngghHN1fe6K0IkuNlcy4i28qzVgjaObsi1%2FSUP5jq8TynITc%2BdMJmlzMGQYt6%2Fd6IKr2WGGtjRyojEXPhbuKxO7MACmxn9LDD9NbyOdX9e2P2sjOfGbAS7r8jN5q9%2F11A2VKkxxFYuqvH6uA5AhHe52BNWPuJ%2B3fJ9EmtLc43YJuJVvweltBbSMk%2FoaMmzHXjsUSeliYo4cXTxtZP6EPCdiwLq97Hp8sqm1rEy9d1Fry2PUnzV0KnWtsGYIb5HnGEwXW09DQ%2BS6sZbD%2BfrGby%2BhHHi9IeH1z1gg8ubMUKjUamUTyn57CAyEGzaAk7nnNNJl7CPuQimPz3h2CooVSO119miEs14mQ44y%2BnQKQp3xG1zqv8v3R1KN6%2BYgV4Hc24fpUTcnhOCCz%2BuLzWsIwLMUEU43uhRcmK3SZo6Dq1cJ1SNe%2BROuaGc1I7ZYyjZ%2FGqb%2B3itZM4DVSkDPJwAlzBMEoS3vnkEBe0TXr4NOATWRCFQfOUKf8jnyulkwB3mcxnKJ%2BYuf2yZgYBngNx%2FYDbr7tJmW2uFgxel33yIWVb4rGtp67c%2B3%2BOMP6OzckGOqUBtu%2Brzj80%2B3Aq26EXdTCZvSABkn2DNZ6COX9TOYVsKf07BHcfCgOz%2Bre%2F8IeqqpxMajGd0SG468CztTLZzLBRv62K0SlptQNm4tB4SldWIZ1KbPLTzFkNmTjPJVWqo2cSe5bjEO5xL6VydokehZ%2F2s49nwFuBfrVO2TWhL%2FlqC%2F4byDmpql8ZxRQOWFExIUMF4Vzqfx1V8yQ7NDnMEB66w37TnM4h&X-Amz-Signature=cb9439055569b24210b71ef041fecf22f021f824bc78b758a640412f0007a99b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
