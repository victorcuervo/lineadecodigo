---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTXG467B%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T123431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIGsRYRpUwc09iO31edrKoRg2Og07oLVI8dcKd77DWTl6AiEA5YTnrn7QAGmef9%2BNkobkU1U3RSQS7%2BMgf1i6Dnp39gIq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDHVPt98xcoW0aKTVzyrcA4LYHuuf5yu5RslFAQjoYktLD9B34e9fUWn595cwO2ReB4ET4gGnEJZQRKbXOwg1sZUUH%2FEw2IxC8MX%2BQiCLbkgnKcueyH9RQqZCi8X5UMBIoGYlfPvjpuhfuKNGLIPEyghUa9virCPE8RtAA6lW%2FbeMm4eJrVu6f9AJ4QrPqfGz%2FZa7AF8GqHeoQK%2Fyitt0vgSKM5bh8R1Nrkosz6I9jn2ZdbCj79CtXk%2FFH3T9bQiggM8giBdIyH2tqZw6pR3iy%2FncI8ZCT6ELFtdM1i%2FDa7Il2EdqXfqmRWOljvFnKdO%2BRpGzrclVg9f5zQby15QvedKPNSrEFUKE4pKJhCRRA6Uti0oNiXN2t%2FASOyMn%2FCxWl8WGwFtna4TUBuMxpkZZaWxnMssUBcD77y7Rw%2B%2FJedEtnOmLZM8yf%2BeNBnOHohYWHb7kCAshZvJ2DEjxKw2%2Fnwrt273k5gA%2B2%2F3JRy0JjICb8MLJnu45pYdUepeXtyP1mT96Y06E45hCXlffflVfxyfFvsF94eq%2F8MNq2pA4ofO6xa3jSg0dob8qmT6gFS5l1RJxvgWN%2BBho3MgeXr9lFZturfWbFOj4XVLxfhWI6oDze7BK1r84BjDBEf1spTVM7OvgS4W28183HGTYMMnmxckGOqUBoXU9lX19Mjy0ijlzLItY0a2Cp2%2F5KkDezx6KPa5U92gd21BRtWrLdWi4i9yV76uux2jUCrwYq6CChMpb%2FeQSRbhV7nw%2B2U475nCYbYC%2FRFcEZZi3e1B3gAQ1QODUtklqauzVUc0mPCSTadAUNNJVjisk0fY5aZm13ScX1xfWhiZsYRwdg38PGFCAuMTVEC%2Fskm%2FAOUEpzlNy6mSB9mcA4rVDobbs&X-Amz-Signature=ee397134bac94c584d3b7f9320dc4b6f0faf1003921e24b04e00b1488f54124d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTXG467B%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T123431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIGsRYRpUwc09iO31edrKoRg2Og07oLVI8dcKd77DWTl6AiEA5YTnrn7QAGmef9%2BNkobkU1U3RSQS7%2BMgf1i6Dnp39gIq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDHVPt98xcoW0aKTVzyrcA4LYHuuf5yu5RslFAQjoYktLD9B34e9fUWn595cwO2ReB4ET4gGnEJZQRKbXOwg1sZUUH%2FEw2IxC8MX%2BQiCLbkgnKcueyH9RQqZCi8X5UMBIoGYlfPvjpuhfuKNGLIPEyghUa9virCPE8RtAA6lW%2FbeMm4eJrVu6f9AJ4QrPqfGz%2FZa7AF8GqHeoQK%2Fyitt0vgSKM5bh8R1Nrkosz6I9jn2ZdbCj79CtXk%2FFH3T9bQiggM8giBdIyH2tqZw6pR3iy%2FncI8ZCT6ELFtdM1i%2FDa7Il2EdqXfqmRWOljvFnKdO%2BRpGzrclVg9f5zQby15QvedKPNSrEFUKE4pKJhCRRA6Uti0oNiXN2t%2FASOyMn%2FCxWl8WGwFtna4TUBuMxpkZZaWxnMssUBcD77y7Rw%2B%2FJedEtnOmLZM8yf%2BeNBnOHohYWHb7kCAshZvJ2DEjxKw2%2Fnwrt273k5gA%2B2%2F3JRy0JjICb8MLJnu45pYdUepeXtyP1mT96Y06E45hCXlffflVfxyfFvsF94eq%2F8MNq2pA4ofO6xa3jSg0dob8qmT6gFS5l1RJxvgWN%2BBho3MgeXr9lFZturfWbFOj4XVLxfhWI6oDze7BK1r84BjDBEf1spTVM7OvgS4W28183HGTYMMnmxckGOqUBoXU9lX19Mjy0ijlzLItY0a2Cp2%2F5KkDezx6KPa5U92gd21BRtWrLdWi4i9yV76uux2jUCrwYq6CChMpb%2FeQSRbhV7nw%2B2U475nCYbYC%2FRFcEZZi3e1B3gAQ1QODUtklqauzVUc0mPCSTadAUNNJVjisk0fY5aZm13ScX1xfWhiZsYRwdg38PGFCAuMTVEC%2Fskm%2FAOUEpzlNy6mSB9mcA4rVDobbs&X-Amz-Signature=eb8c0f9a3aa3aab371dbe4017477aecdde6101233b061d79c40da63d2043387b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
