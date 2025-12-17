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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RFYGNQQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T133233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDhqkJDEbIq1WixtYCfsE51uSmxhRLsMcqL98wGeEsh1gIgF4splYorVzHmX8fRW8eroBOPpBwAN3DI2G3p2W4NESoq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDIuol5ZPBmArGTXqUyrcA7jESbVZ6giDh5CJA34tKyEC34JtWg1GTrQikaf32dydFFsEeqs8x6U1r%2BpmYjpcHckX5SP%2Bxt9%2FFA9ETpwMu1vyAIGHgI9M88Fp9c66CKAIu5WGCJaBPSo0GOftss9fKtn4x0ix5%2BOm2V3Eoz0%2B5EHE0Ip9i82anoRpjk63FE3EEheeQJSLbNeCa3emRvLPuNk60%2F%2BUcAY0JnwRYYptk1PG9yAs4R7Ks4ZgfX3RKiv62Y%2Br0SQm94QPuowpmXJHe%2F8sekBziMT1zdairXbdGv41V617dXF22T1S9fO%2BSH74viG%2BErwCEnOtfIGZbd44MXu4cJEa5nRTiw9MOWospSoLf92JnTf9JaUx8sDIdqiR5xynydLZpaTJwT2k3Xf5r036NTJm7mrbFEhFtBVGUwFLY3d%2F7Euvc1Tst0wymIJ07kZTN1%2BbEf5QUPqaZaAj%2BqiFhUjm28qnTwbkfiKfhFjBhwsKNr%2BY5ek3EhfWDu4S5kB6bCYs5S4cG4wE1BTynenIAoCudQZm%2BKgiKNHvuGxnabiKFPaRoSCvirrOqDg%2FOhq4i9fSq6%2BaNYqZSzRU0rgB%2FSf%2BjOrXr1YxXE2r6UW7Ba%2F4dQqP5pUyu14uSRXiHJQO%2BSCrVjyfaz8tMI7hisoGOqUB1ZUAyTsaTg8CU5h43Oj5isCRySOn5R4AH1KCe0t4QkfvIAyUMXbylh6KmnSgyQue%2FJAoEdKpmrLHmomuqkbjYJ2qoPHzB26qd%2FmhuYN9Y%2Bh4PUi%2FRcKuW%2FoWxvJtYZmbCeo7cY5nbGx%2BGsztJl9YEHrtam%2BbA2bEnMi9djD%2BVYsrieSxS4nnu3EWtlcsOlJl0xF98A5EticB8tvChoXFRJK9%2BsvM&X-Amz-Signature=b44fc073766a4a837676049d2aab5fa5c4c41b9611e221329502c9e1fb0be719&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RFYGNQQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T133233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDhqkJDEbIq1WixtYCfsE51uSmxhRLsMcqL98wGeEsh1gIgF4splYorVzHmX8fRW8eroBOPpBwAN3DI2G3p2W4NESoq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDIuol5ZPBmArGTXqUyrcA7jESbVZ6giDh5CJA34tKyEC34JtWg1GTrQikaf32dydFFsEeqs8x6U1r%2BpmYjpcHckX5SP%2Bxt9%2FFA9ETpwMu1vyAIGHgI9M88Fp9c66CKAIu5WGCJaBPSo0GOftss9fKtn4x0ix5%2BOm2V3Eoz0%2B5EHE0Ip9i82anoRpjk63FE3EEheeQJSLbNeCa3emRvLPuNk60%2F%2BUcAY0JnwRYYptk1PG9yAs4R7Ks4ZgfX3RKiv62Y%2Br0SQm94QPuowpmXJHe%2F8sekBziMT1zdairXbdGv41V617dXF22T1S9fO%2BSH74viG%2BErwCEnOtfIGZbd44MXu4cJEa5nRTiw9MOWospSoLf92JnTf9JaUx8sDIdqiR5xynydLZpaTJwT2k3Xf5r036NTJm7mrbFEhFtBVGUwFLY3d%2F7Euvc1Tst0wymIJ07kZTN1%2BbEf5QUPqaZaAj%2BqiFhUjm28qnTwbkfiKfhFjBhwsKNr%2BY5ek3EhfWDu4S5kB6bCYs5S4cG4wE1BTynenIAoCudQZm%2BKgiKNHvuGxnabiKFPaRoSCvirrOqDg%2FOhq4i9fSq6%2BaNYqZSzRU0rgB%2FSf%2BjOrXr1YxXE2r6UW7Ba%2F4dQqP5pUyu14uSRXiHJQO%2BSCrVjyfaz8tMI7hisoGOqUB1ZUAyTsaTg8CU5h43Oj5isCRySOn5R4AH1KCe0t4QkfvIAyUMXbylh6KmnSgyQue%2FJAoEdKpmrLHmomuqkbjYJ2qoPHzB26qd%2FmhuYN9Y%2Bh4PUi%2FRcKuW%2FoWxvJtYZmbCeo7cY5nbGx%2BGsztJl9YEHrtam%2BbA2bEnMi9djD%2BVYsrieSxS4nnu3EWtlcsOlJl0xF98A5EticB8tvChoXFRJK9%2BsvM&X-Amz-Signature=eddc55db4701689b28bd43d96fda6a13ef969f37d7f8c84d7a2d551f4b508a39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
