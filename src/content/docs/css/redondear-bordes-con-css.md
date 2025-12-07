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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6NU2CT4%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T184036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAC8y7v9v4hddERBfThM1JRKuxC5lErHPnR6Vozue1%2BcAiEAgJdu2LJfBwr4sm%2FIPQYVtKqSPnxrqnMKAKyc8KkULRoqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI4PQVZ5E%2Bp4TmiveCrcA6cNCjU71ooCH%2BHvzPbyrw1ORham2E85oSZVM2hgAb4CD2STDsrrtwBG0zo4OVvZcWueh6%2Fy06QsVJude54K6NWqljqVcJBTpJjJ7TEpTC42tXn9LT1aSdfMSRpWnAZ0UQbSJgvjEK8nd9J8veK09AsHrAFPguNWzzhhNeBw2%2BojoBZM7sw95R0pzwe092shlEKYCU%2BCnQEAUR8iZTMEAEPuqUxGt5NwXJzCVm7kan9HVdALMZxZYNf%2F4AAgyb0r0RCjY03JDneVB8JXtJk19w2nB0MjWLxgDYKcYZHxOAmSSLfAY%2FMEjRHuGpUPjfq3zz%2FkJp5Dsm3mgNA6t3AcUz6dzDYaIC80nvf1bJP2qcevB2HPsKHQvfYOmBIX16mNhe65WFbP79LluwyDtJ4JQPocfSOdwLIu3J%2B2rAA0%2FYMDyqEMY1rx7TdGafgwWcms3sHLbo%2BIITCG7wvyfRvJ%2BxfwxRkhUQXagnO%2Bp787za3L03eXB2KrNWdOFfgdmrtxfC0ZozENJflkj1c3ekSbvhndFhdwL9rrrwt4uywYBuOglLSSbLE5WbBgMWPEf%2FQ4yZ7%2FHKWjm2JrHo7pDns1YQIf6n8wHOdd0EDiys0gIXixcR7g%2FUW%2BI1xls8l1MPO41skGOqUBGy%2B4BnO3savF4YfHVoQXKu6LIAiLE3bBtJO2JpJ1NKG4og8smoBQPV52EB2G%2BXPNe0PBs41%2B8B58GJlwg7KBgj525nCI8z3U1ioWtKrNQRYM9wMkoOiWlALCj2eK%2Bgq%2BoGuhp83LOY0rHPv1ZKFl9mJswHhQvN1GFve%2Ba9jQq%2FlgQqzVc8lW5VA9SLCEdcncO4AEvR6S730gKeqVC08CHbU2O8%2BB&X-Amz-Signature=7844b329e0332744bbd01facbb0c0a2eeaf2402417cb19011350f5db669013eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6NU2CT4%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T184036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAC8y7v9v4hddERBfThM1JRKuxC5lErHPnR6Vozue1%2BcAiEAgJdu2LJfBwr4sm%2FIPQYVtKqSPnxrqnMKAKyc8KkULRoqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI4PQVZ5E%2Bp4TmiveCrcA6cNCjU71ooCH%2BHvzPbyrw1ORham2E85oSZVM2hgAb4CD2STDsrrtwBG0zo4OVvZcWueh6%2Fy06QsVJude54K6NWqljqVcJBTpJjJ7TEpTC42tXn9LT1aSdfMSRpWnAZ0UQbSJgvjEK8nd9J8veK09AsHrAFPguNWzzhhNeBw2%2BojoBZM7sw95R0pzwe092shlEKYCU%2BCnQEAUR8iZTMEAEPuqUxGt5NwXJzCVm7kan9HVdALMZxZYNf%2F4AAgyb0r0RCjY03JDneVB8JXtJk19w2nB0MjWLxgDYKcYZHxOAmSSLfAY%2FMEjRHuGpUPjfq3zz%2FkJp5Dsm3mgNA6t3AcUz6dzDYaIC80nvf1bJP2qcevB2HPsKHQvfYOmBIX16mNhe65WFbP79LluwyDtJ4JQPocfSOdwLIu3J%2B2rAA0%2FYMDyqEMY1rx7TdGafgwWcms3sHLbo%2BIITCG7wvyfRvJ%2BxfwxRkhUQXagnO%2Bp787za3L03eXB2KrNWdOFfgdmrtxfC0ZozENJflkj1c3ekSbvhndFhdwL9rrrwt4uywYBuOglLSSbLE5WbBgMWPEf%2FQ4yZ7%2FHKWjm2JrHo7pDns1YQIf6n8wHOdd0EDiys0gIXixcR7g%2FUW%2BI1xls8l1MPO41skGOqUBGy%2B4BnO3savF4YfHVoQXKu6LIAiLE3bBtJO2JpJ1NKG4og8smoBQPV52EB2G%2BXPNe0PBs41%2B8B58GJlwg7KBgj525nCI8z3U1ioWtKrNQRYM9wMkoOiWlALCj2eK%2Bgq%2BoGuhp83LOY0rHPv1ZKFl9mJswHhQvN1GFve%2Ba9jQq%2FlgQqzVc8lW5VA9SLCEdcncO4AEvR6S730gKeqVC08CHbU2O8%2BB&X-Amz-Signature=1080c6cbccb3ddc8607a953c809e2eebb301506ed96540d68c7782c393b93cbb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
