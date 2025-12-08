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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTLXXRPO%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T194352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBNfHQS5o%2Bs4PdK56dly%2BfzpXWpEO23zc2Oe2vk4nOWQAiEAiibEffq%2BNIQrupDzJu8rUJsVPuC7Z1RxX89aGCAjp4AqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD%2Bkazhj4ZmbC0pqkSrcA%2FVFiZo9aYFKyvwlg%2FQ7PdiBKgFkZczfWO0yQ1aq%2ByucQpLzpBzlSQLlHC84VPGE%2FxWtrkScL3HSdtJ%2F%2Bbr9%2F78Pj0%2FwSIieUfELbv4%2FuM6cEH26sgKhGa9pqdahEwiMr%2BGYtoX2ybYppPd%2F75C22StkmkFqd7doKznU26X0G%2FK23j9ZDOYQSktsOlBKbJANvkdwZvk0i4j%2BxX6s%2FyizptOZgwS8OiWRGV%2BIeKRx%2FG%2Bxu5tSoqmYNa1DobOxDcXQLJzZ%2FY4rcOD9kW0UWzWp0FzcMtMWj5bE7msIjpNrw4RFwIniwx%2B0wHNYv2SWVnUQRoeSWdqjdJwCXrldMgzgDvUDQ3vg9ltbW1aSfty8KAjPlKOoaaDDKoCF0wYzbkZsYjS1iI9wyJ9YwBSjE%2FOFret9DdwKrq3Z9DZsJergiUzzqmAQI0ykrQVXr14%2BjniP8JzSHaUejCH0A%2FikI3C5ZVcsoggsIpacjMFMzdxtMGLxehfMxnF%2FQs2vSkcmhf5gERUexgRirvieYG%2BnwupQL0MhxDv6kkVvicTbPDJQQFNpQYlGWW4j1PAtdfW4XIzUSsocpZl8VT%2BwyWrcSDIx0KGu4by02iD5UmXJMlVwEEw0RJEwY8Uw7k4HCsuOML%2B03MkGOqUBvoSvckcRdxon1R3glwF7Is12at%2B1A%2Bt5PJyjaxWHiu5SlBtPYFpAAVxCjA4HsGWzL5jHpjpy%2FAUAvpiPX77kHd40OO5ynEsbpjdT%2BfQLINtasJp3toJTykiUtwrIqZJws4HpLzeJgjSARJbFclUK6k%2F3MCEUytX8j8JseIth2US%2BrVHB5SS4s8JqJqLTTwzS%2FnXpKzpVO7cQRMi6LFNZZtL8Swsr&X-Amz-Signature=7bae07fbe2d451a9e034b317c9a81b08b3aee0b8a8d16fe2268d46020f3bdc9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTLXXRPO%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T194352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBNfHQS5o%2Bs4PdK56dly%2BfzpXWpEO23zc2Oe2vk4nOWQAiEAiibEffq%2BNIQrupDzJu8rUJsVPuC7Z1RxX89aGCAjp4AqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD%2Bkazhj4ZmbC0pqkSrcA%2FVFiZo9aYFKyvwlg%2FQ7PdiBKgFkZczfWO0yQ1aq%2ByucQpLzpBzlSQLlHC84VPGE%2FxWtrkScL3HSdtJ%2F%2Bbr9%2F78Pj0%2FwSIieUfELbv4%2FuM6cEH26sgKhGa9pqdahEwiMr%2BGYtoX2ybYppPd%2F75C22StkmkFqd7doKznU26X0G%2FK23j9ZDOYQSktsOlBKbJANvkdwZvk0i4j%2BxX6s%2FyizptOZgwS8OiWRGV%2BIeKRx%2FG%2Bxu5tSoqmYNa1DobOxDcXQLJzZ%2FY4rcOD9kW0UWzWp0FzcMtMWj5bE7msIjpNrw4RFwIniwx%2B0wHNYv2SWVnUQRoeSWdqjdJwCXrldMgzgDvUDQ3vg9ltbW1aSfty8KAjPlKOoaaDDKoCF0wYzbkZsYjS1iI9wyJ9YwBSjE%2FOFret9DdwKrq3Z9DZsJergiUzzqmAQI0ykrQVXr14%2BjniP8JzSHaUejCH0A%2FikI3C5ZVcsoggsIpacjMFMzdxtMGLxehfMxnF%2FQs2vSkcmhf5gERUexgRirvieYG%2BnwupQL0MhxDv6kkVvicTbPDJQQFNpQYlGWW4j1PAtdfW4XIzUSsocpZl8VT%2BwyWrcSDIx0KGu4by02iD5UmXJMlVwEEw0RJEwY8Uw7k4HCsuOML%2B03MkGOqUBvoSvckcRdxon1R3glwF7Is12at%2B1A%2Bt5PJyjaxWHiu5SlBtPYFpAAVxCjA4HsGWzL5jHpjpy%2FAUAvpiPX77kHd40OO5ynEsbpjdT%2BfQLINtasJp3toJTykiUtwrIqZJws4HpLzeJgjSARJbFclUK6k%2F3MCEUytX8j8JseIth2US%2BrVHB5SS4s8JqJqLTTwzS%2FnXpKzpVO7cQRMi6LFNZZtL8Swsr&X-Amz-Signature=55247bd827553f0ab40dbf684a0369807012571b5ec1428c8745c89193a5b8eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
