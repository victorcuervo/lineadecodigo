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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663C2MQN3R%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T162556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDIbfS231tXUOe9dePDcW1t2gzQ9aGspViF8y4z8iMH6AiEAxpHmSJTzOj9lobczM0QxWEUrMG1LRyh%2FXpZcmLxnFLQq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDMiUU9Hu5yKL4C3uCircAylhzeE6Qj1nbGHyCViOKWnOoIDKdzWeQRzMpILZ1oCIv0t51IFL4Wb7dDSZdhFy41wdXcPJw0cxbLZLiuq3MzpePOjYCVQfZxfbX7UChvrInz%2FM42QT4yo7x7EBwOyRS6LS9rGwS4h3iiHpkmgPiBl918w14Rh9JYDdHGv7ZjvoqtbrhtRQXF6Rp0tzzULS%2F5qVgU%2FnOo7iOgwBPX5f2XMRE1NQtL%2F0PQbA0zwMi%2F1Q7mD04U9ulzffqbA5LgX6PNvx0alOY69pT5PEkvi%2FTIPjPsNyxYXjs7DPpg1Hqn%2BDebkTt59X2VOKau8GcebaSlNsTrMUL8LvwKoXmjv6siB9rR0ll7xC8jTBqMWq0MNLMrjS6x5Xj8VBLEYh3je%2BmG7LhpSCeg9klNGs8GIOLTUSia1NRvZQ%2F44JOFk0be3nJutjXAW2qZzMjx1e4QsSeZ2J8khxRsrQu2UDp01TVMplrquuknjl6TRv87MQ1qI6ENMlFcYCnO%2BNsc7QTzxZE2djbW21M4nKe5WaC6YG%2FOabqMOibDfbM1GMNMiQRYj3eWcRwz0fUmza4iswVCe%2FM3q8LDzmFqBrf64riiDgjW4KRH78AO7Ky8S5CXepR8lOo%2FH5QLyaBDzOHeEHMJHry8kGOqUBCaDVmkgvJcbC3klVQoqqr2w4j6eqEFbPnsqRlGMudQRR9jJRc279HHh7xvMHX05F3yR105AdxaGIEoOqkGzSp1vCBIOxa5%2BUdfXq1yId%2BT39GUOxHJPC%2FbG8%2FMt29QmomlpDv7BymbOM7P7LMGPJT2sKD48V8NfA8uy%2F2HM8urN31r%2FbqbBTFQqNs1fq%2FW6On6xTGYyyd8jvqdlchkx5lyQzZ7pi&X-Amz-Signature=2011eef0c7b75944d2ccff7c7a016e12a697c41c65deff5d5c24a1ed9d0d6e90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663C2MQN3R%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T162556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDIbfS231tXUOe9dePDcW1t2gzQ9aGspViF8y4z8iMH6AiEAxpHmSJTzOj9lobczM0QxWEUrMG1LRyh%2FXpZcmLxnFLQq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDMiUU9Hu5yKL4C3uCircAylhzeE6Qj1nbGHyCViOKWnOoIDKdzWeQRzMpILZ1oCIv0t51IFL4Wb7dDSZdhFy41wdXcPJw0cxbLZLiuq3MzpePOjYCVQfZxfbX7UChvrInz%2FM42QT4yo7x7EBwOyRS6LS9rGwS4h3iiHpkmgPiBl918w14Rh9JYDdHGv7ZjvoqtbrhtRQXF6Rp0tzzULS%2F5qVgU%2FnOo7iOgwBPX5f2XMRE1NQtL%2F0PQbA0zwMi%2F1Q7mD04U9ulzffqbA5LgX6PNvx0alOY69pT5PEkvi%2FTIPjPsNyxYXjs7DPpg1Hqn%2BDebkTt59X2VOKau8GcebaSlNsTrMUL8LvwKoXmjv6siB9rR0ll7xC8jTBqMWq0MNLMrjS6x5Xj8VBLEYh3je%2BmG7LhpSCeg9klNGs8GIOLTUSia1NRvZQ%2F44JOFk0be3nJutjXAW2qZzMjx1e4QsSeZ2J8khxRsrQu2UDp01TVMplrquuknjl6TRv87MQ1qI6ENMlFcYCnO%2BNsc7QTzxZE2djbW21M4nKe5WaC6YG%2FOabqMOibDfbM1GMNMiQRYj3eWcRwz0fUmza4iswVCe%2FM3q8LDzmFqBrf64riiDgjW4KRH78AO7Ky8S5CXepR8lOo%2FH5QLyaBDzOHeEHMJHry8kGOqUBCaDVmkgvJcbC3klVQoqqr2w4j6eqEFbPnsqRlGMudQRR9jJRc279HHh7xvMHX05F3yR105AdxaGIEoOqkGzSp1vCBIOxa5%2BUdfXq1yId%2BT39GUOxHJPC%2FbG8%2FMt29QmomlpDv7BymbOM7P7LMGPJT2sKD48V8NfA8uy%2F2HM8urN31r%2FbqbBTFQqNs1fq%2FW6On6xTGYyyd8jvqdlchkx5lyQzZ7pi&X-Amz-Signature=649117c00240dc7699a540c9c144aa882b414a02c7e65adf4f02ee8144ae90e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
