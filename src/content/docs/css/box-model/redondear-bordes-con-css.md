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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HJNG5PD%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T063809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICOcxu9vSk2ytK11CLoG5Z3rCPvMIWAW0k8UyCDFDXGOAiEAgFWCpgeanTtf%2BiYspGcWDZlVxXW8n3Hx7f%2FlrI4KjxYq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDJ%2FxoauuAyBGQ3ZaayrcA363w8rt9ZZOekTekEQ2uP1YW3xrbm8%2FKgO%2FRemSGaKpmIxKehhnczMJE8UkQG7lI%2FbXKLfejjk1gi1WyqkhXeoMBjJAnjv%2BkomnWNHAJSpJFrd%2F0tYn7y6QBjTttgqa5OJZ9FQxFwKjl7LPAXKj3pm1xAwzuG4TMx87ujsFswpkcF3cR2IyDp9Bhd4kuafrmUY%2F0kkowypYDjtofT0PiHph69CEus85tsoV3tQ7%2BXCkiPTAsQbaZbkAhUdFV1sEbFK4X2RNO0FX%2FMGphHOaO9GoA362atQB7a3yQRqyxMUWhekhXzm8YjFkbTXV2E%2F29nqXGsCulTpdCsKk57ucFFsPLfH3OwwfyA4X3TbEY95syI8lInJ%2BaiLXyUYET5noEAvwKM8qlRQPQkbNbLJhb3Z3RVlfOzWZZQhMEJg97e11AEm%2FMbdHnWi3wkvumjdjFJOD5Jqpt9deDPXFlLxSuRB6hB8OpzoqvU%2B9%2BVSoICo0D%2FRaUhm99ZQbz2avXj4ZwV3md4MbKGIYWqQLJ3pCjhN81rehmPg8M4jnZy7DqFm32B4co%2Bw4AxEqImu6zVV2NHjP5sG0AxG3ydaDIu1TxJT%2FY%2FxUbjqYG5lDQo0sBVDWUllKlxOGMPyuUQskMK6dicoGOqUB75U2XdqARwW1gDe9gp6Pouic7k8%2FahiCaWeL04IaPuQ2DwHIRlvSJje3V1oE4IwD1VkpqMu0lpCsowvIN29uIN2LTwcSMvSiy6i%2FVsQP4vBmMn%2B0xMmkyTSUP4X6rQga7JzKt7zjBONkOPJ8DEWY9N3L8pyHUUNL2gS7o4b5XzMriKOuJq7SabOD%2B0647iT%2FtkQAotBPuh5n7qdEnHIXKcuhZzRc&X-Amz-Signature=acc38dcc54d952737f6641b97f7c25135778d4e1b53ee83d9d29f77e34e4ba04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HJNG5PD%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T063809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICOcxu9vSk2ytK11CLoG5Z3rCPvMIWAW0k8UyCDFDXGOAiEAgFWCpgeanTtf%2BiYspGcWDZlVxXW8n3Hx7f%2FlrI4KjxYq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDJ%2FxoauuAyBGQ3ZaayrcA363w8rt9ZZOekTekEQ2uP1YW3xrbm8%2FKgO%2FRemSGaKpmIxKehhnczMJE8UkQG7lI%2FbXKLfejjk1gi1WyqkhXeoMBjJAnjv%2BkomnWNHAJSpJFrd%2F0tYn7y6QBjTttgqa5OJZ9FQxFwKjl7LPAXKj3pm1xAwzuG4TMx87ujsFswpkcF3cR2IyDp9Bhd4kuafrmUY%2F0kkowypYDjtofT0PiHph69CEus85tsoV3tQ7%2BXCkiPTAsQbaZbkAhUdFV1sEbFK4X2RNO0FX%2FMGphHOaO9GoA362atQB7a3yQRqyxMUWhekhXzm8YjFkbTXV2E%2F29nqXGsCulTpdCsKk57ucFFsPLfH3OwwfyA4X3TbEY95syI8lInJ%2BaiLXyUYET5noEAvwKM8qlRQPQkbNbLJhb3Z3RVlfOzWZZQhMEJg97e11AEm%2FMbdHnWi3wkvumjdjFJOD5Jqpt9deDPXFlLxSuRB6hB8OpzoqvU%2B9%2BVSoICo0D%2FRaUhm99ZQbz2avXj4ZwV3md4MbKGIYWqQLJ3pCjhN81rehmPg8M4jnZy7DqFm32B4co%2Bw4AxEqImu6zVV2NHjP5sG0AxG3ydaDIu1TxJT%2FY%2FxUbjqYG5lDQo0sBVDWUllKlxOGMPyuUQskMK6dicoGOqUB75U2XdqARwW1gDe9gp6Pouic7k8%2FahiCaWeL04IaPuQ2DwHIRlvSJje3V1oE4IwD1VkpqMu0lpCsowvIN29uIN2LTwcSMvSiy6i%2FVsQP4vBmMn%2B0xMmkyTSUP4X6rQga7JzKt7zjBONkOPJ8DEWY9N3L8pyHUUNL2gS7o4b5XzMriKOuJq7SabOD%2B0647iT%2FtkQAotBPuh5n7qdEnHIXKcuhZzRc&X-Amz-Signature=60a13160de48da242a215dae1e773eeb4b3bfaaa6ef80ef03422e0799f482a71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
