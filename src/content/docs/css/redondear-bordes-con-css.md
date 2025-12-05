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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UQRG7OD%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T120801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIVJ0ZVuP4Sd8TWBVfheaNtjPwfFHMFE4Z8c4XC%2Bq0gAIhAPo%2BW1YRIP831MhhdrrpNR7cAw5nQ79MXoDJiIANeV0NKv8DCFoQABoMNjM3NDIzMTgzODA1IgyWegT9tlH0R2OGnzIq3AM%2FHlWKk%2BQ5%2BfsfgyD6maSTkuob6mQ%2BEtBI0Kt4rvOABrAJWYcCTZMh9vejJVAiQ4VXQYm7XotpzXsT%2BzSTuSNZWMKj%2BFTIdrsAPWxPc9c8IrHPsPGcgrCcJ%2F7V7hRdxsVA8%2F9XRZ1kmYe1Xboj5C%2FBx2KGWbXDar44OwkaAaQeroia9NA3nn6r%2B1xR3VKM60cnIJ2O5OpvSZuUySXOJr5vTfxFbjLBIgQAVE%2Br0BeGqQvYm2FqwrHTOWd1c0hXBsESAX%2FK9pWD8NuQahIqsIE%2FMnCKoHtO7eKWXOm%2BEc34S9BmY%2BglLgDrUB43z9%2Ffx0aZzsTQhjJu005wDE5g5vmvPWnMA2X%2F1RdWHpxmjWuxmqLfkHQmmAGD%2FE2oimSMQf41qXLeclSN8S9HHithbkWZbTc7ubob3FPURakWAbD9i0OOAxUH9TAOOLbIDTASjwRBwXeO8YizrNE2NrV%2FRLfu50123RIgEURhGtBStKwF%2FfYjRjhQrY%2F5qzWWymNvZoB2x9GxwMy0m%2FzqvnMTqvfGGggF8a0hdzh6JU8IklQxs%2B%2BIrYEO8d2gQ0E8A0ePJQcnSn30Gud69lcC5NPy5UgZsWXRm1abGa5uQmXLQOuIXiWRiup%2BY86OGcPumDC9xsrJBjqkAZDrWCH3k5k2uZlWF6r5Qj1ODpjQAZUEfu3HR35uvwQ%2BQfpv3PoO4OweAUAurX2QcMrb4LoXWu%2BBGo6i%2FFMJdRpxHFfdF3K1V93Av750GqPCclo49hhnnJuT1h9VNIjzJ153g2xkT15RFCsIYYsbM5e61eLtrX8Z5ac7Loc61tv4wJTtvNABNLcUZ1Gp2i1SUmHqoQxhbuhoZSLkOfbOmSGOPxTT&X-Amz-Signature=96474690195edb5bdd73829d5b3f2bae4f79c60cc746c6ce35ba681f7e91307f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UQRG7OD%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T120801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIVJ0ZVuP4Sd8TWBVfheaNtjPwfFHMFE4Z8c4XC%2Bq0gAIhAPo%2BW1YRIP831MhhdrrpNR7cAw5nQ79MXoDJiIANeV0NKv8DCFoQABoMNjM3NDIzMTgzODA1IgyWegT9tlH0R2OGnzIq3AM%2FHlWKk%2BQ5%2BfsfgyD6maSTkuob6mQ%2BEtBI0Kt4rvOABrAJWYcCTZMh9vejJVAiQ4VXQYm7XotpzXsT%2BzSTuSNZWMKj%2BFTIdrsAPWxPc9c8IrHPsPGcgrCcJ%2F7V7hRdxsVA8%2F9XRZ1kmYe1Xboj5C%2FBx2KGWbXDar44OwkaAaQeroia9NA3nn6r%2B1xR3VKM60cnIJ2O5OpvSZuUySXOJr5vTfxFbjLBIgQAVE%2Br0BeGqQvYm2FqwrHTOWd1c0hXBsESAX%2FK9pWD8NuQahIqsIE%2FMnCKoHtO7eKWXOm%2BEc34S9BmY%2BglLgDrUB43z9%2Ffx0aZzsTQhjJu005wDE5g5vmvPWnMA2X%2F1RdWHpxmjWuxmqLfkHQmmAGD%2FE2oimSMQf41qXLeclSN8S9HHithbkWZbTc7ubob3FPURakWAbD9i0OOAxUH9TAOOLbIDTASjwRBwXeO8YizrNE2NrV%2FRLfu50123RIgEURhGtBStKwF%2FfYjRjhQrY%2F5qzWWymNvZoB2x9GxwMy0m%2FzqvnMTqvfGGggF8a0hdzh6JU8IklQxs%2B%2BIrYEO8d2gQ0E8A0ePJQcnSn30Gud69lcC5NPy5UgZsWXRm1abGa5uQmXLQOuIXiWRiup%2BY86OGcPumDC9xsrJBjqkAZDrWCH3k5k2uZlWF6r5Qj1ODpjQAZUEfu3HR35uvwQ%2BQfpv3PoO4OweAUAurX2QcMrb4LoXWu%2BBGo6i%2FFMJdRpxHFfdF3K1V93Av750GqPCclo49hhnnJuT1h9VNIjzJ153g2xkT15RFCsIYYsbM5e61eLtrX8Z5ac7Loc61tv4wJTtvNABNLcUZ1Gp2i1SUmHqoQxhbuhoZSLkOfbOmSGOPxTT&X-Amz-Signature=a64bac8bc2a74c886aeae9edc7c7d00f125bfaf57c519ecdd173b434e22af26c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
