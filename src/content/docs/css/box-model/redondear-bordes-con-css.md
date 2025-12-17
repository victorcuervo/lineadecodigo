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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KQUC2YI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T041647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCzFsYcQ6kvduAYhwrCn77UlHEfikPJg9nAUIShbJ9awIhAOwglkDctgQvJtecauNJG%2B4BL5M5JTwahhy4Pgu2gto8Kv8DCHUQABoMNjM3NDIzMTgzODA1IgxP%2BSZVtugU5YoUHtwq3APobUXrSLFY2zetF3riqjYMmYdCvHBGhvASL6uXBxUjj0HzG%2F5KgmV5UJxFfGW%2FhGHFgW%2FHXINYOg5uIVhPCfSh6WfRoyL4fXdZKaY0F7Pc0fx%2BL4qbtofycgwtx23y451XRKc4S13gOeAy7lbJZCJiNGumKeEfwZKYXEk8UKHP8kE2BQCmbymxg1DgXe4k6EiS69tSapwxOlJHG92t%2BcVEBDEdUSMII6TFtnAxC3O9ejl9SX%2F27ouV9%2BG0BE7XmaRIp0z1VdqiS8TPVl4cve216YE4xcBdpPTPf7DrVpdqjAF9MokiYpYNbMAxitLLULhheRS3ggL5C1icmkCs%2FeMYmgFzXsWznzcVATSftSYWXfT0XKov%2FK3J%2FdWdrQWaaMTf8YGWYVaMG7A0Zlj3YXgdi9seCJuafm9gCjsEGipcva%2FiKDBX%2Fi%2BfudXAoGkzgXQ%2Bd%2BHzs5RgGJ53QA0xwzZBbUNXCEjaIvBRfYYVvLwQHATIfxD2ZhZaTkhKOEvYcFVUgzibdtm%2BLodVy7jWI2DWEqIXc4JetAFIHY8gvJ9jyzow9TDj8DvDJFqyzsIKpX6AS1xS8OQGK6NphBNDy4%2F3Mkntip1CA3wKdLyJU%2B0Akvcwt9Fr%2FBACgDUbgDCHz4jKBjqkAYzJbNkYlpEQOT%2FMi2KpWZLEpR%2FNRyQXMuV2TT%2BdrNRMyzlrbOjhvGDGZDhZG%2FpFg53IgHZedP8OG00Jqdxd0kBvGrHDqYw2ILlHxbZIQ04xART9ZHnZ%2FwWq%2FEGXTtr6%2FRJunAVibXlg7sQO2dN70Q1ukQEOxPjgVWOM%2FS73u2Wzsd8kzo4BeB9zUnjNMKtXvdbCBIXRLzk9Ie%2B7M0RmE4Fo7Hw6&X-Amz-Signature=834a86f370cea558ffc738dc01f531e5e1fd4013b6755e8678b12c89a379ed84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KQUC2YI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T041647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCzFsYcQ6kvduAYhwrCn77UlHEfikPJg9nAUIShbJ9awIhAOwglkDctgQvJtecauNJG%2B4BL5M5JTwahhy4Pgu2gto8Kv8DCHUQABoMNjM3NDIzMTgzODA1IgxP%2BSZVtugU5YoUHtwq3APobUXrSLFY2zetF3riqjYMmYdCvHBGhvASL6uXBxUjj0HzG%2F5KgmV5UJxFfGW%2FhGHFgW%2FHXINYOg5uIVhPCfSh6WfRoyL4fXdZKaY0F7Pc0fx%2BL4qbtofycgwtx23y451XRKc4S13gOeAy7lbJZCJiNGumKeEfwZKYXEk8UKHP8kE2BQCmbymxg1DgXe4k6EiS69tSapwxOlJHG92t%2BcVEBDEdUSMII6TFtnAxC3O9ejl9SX%2F27ouV9%2BG0BE7XmaRIp0z1VdqiS8TPVl4cve216YE4xcBdpPTPf7DrVpdqjAF9MokiYpYNbMAxitLLULhheRS3ggL5C1icmkCs%2FeMYmgFzXsWznzcVATSftSYWXfT0XKov%2FK3J%2FdWdrQWaaMTf8YGWYVaMG7A0Zlj3YXgdi9seCJuafm9gCjsEGipcva%2FiKDBX%2Fi%2BfudXAoGkzgXQ%2Bd%2BHzs5RgGJ53QA0xwzZBbUNXCEjaIvBRfYYVvLwQHATIfxD2ZhZaTkhKOEvYcFVUgzibdtm%2BLodVy7jWI2DWEqIXc4JetAFIHY8gvJ9jyzow9TDj8DvDJFqyzsIKpX6AS1xS8OQGK6NphBNDy4%2F3Mkntip1CA3wKdLyJU%2B0Akvcwt9Fr%2FBACgDUbgDCHz4jKBjqkAYzJbNkYlpEQOT%2FMi2KpWZLEpR%2FNRyQXMuV2TT%2BdrNRMyzlrbOjhvGDGZDhZG%2FpFg53IgHZedP8OG00Jqdxd0kBvGrHDqYw2ILlHxbZIQ04xART9ZHnZ%2FwWq%2FEGXTtr6%2FRJunAVibXlg7sQO2dN70Q1ukQEOxPjgVWOM%2FS73u2Wzsd8kzo4BeB9zUnjNMKtXvdbCBIXRLzk9Ie%2B7M0RmE4Fo7Hw6&X-Amz-Signature=9e38113a5e9f1ccc99bbfe14d5bdac25f9c0febcf5646bbd2f09074776c58f3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
