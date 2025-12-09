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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633OCGJG3%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T063627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDRTft6YGj0g0bsMTD9HlTA4QQJL%2BUbmEgs6wbqqihtxAiEAn5cx%2FDzqLqYqltGYSVzLOhpz2jCDyiu0PJTkWqEFqukqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHbC4BTDFEAZm7H4WyrcA3JyTrWVlJ1qfYasRumaivGsqN0DJlVIQnIKuXLUTa%2FF%2Fhw7iuHupPBqmsBlXOAdcL9pf2X%2BKySip4gHkNCWgTbLjSwpDZzcbZCnxAE1v9VDpr97zHPncgoCZ8a5rI2An8Ifi7kOpnpKUTlsxDgt1AWWjs8n3npf2OxBcFac91vzWpcMN8gHCJEus9V2vuiBt926ep3WyYo244g90Y0ixELhDIsqTHgsZDIJMhLvidfH1%2FrPXw0jLTbzFjVF3hD5sfm%2BPsbtlLI7UCcIRPj%2Bp5Mzkoze80gJS1jcph4scTQBZcuorxuSdCAe6ELAQ628EcKIjA6PzsxaX10rviQJhj1LzQJNp7%2BrnZSzDl5aAbg915Yblda7TYw%2BY1t4T9pn1J1Vv5Y0UP%2FACRrFpT%2FzBgxjEjX21cdEZPw7d6PkOh%2BlLLsurbAkZxuz3C5VSJhbyW05m7rN45Rj2nkrp5JTcenQxuipebS0hN9Uk3er1WADlDaBHeJU3eaKmBUSWh8vUGB4uRbtkjIsmmcGD6Ks1te1JSZLPrvvPUfqekU98IkMpX1cZ7FYT1i6fU7jKlLRaM1fqweAY9ziJTnsUa748Y%2FMGTIUZh%2BvLtHqBaGYvmTsu9UqvYLWAmUNWwcPMIPl3skGOqUBXfFop2s8YzUIro%2Fd%2BWv2r3xd7uajxuFREtVVda0XW0nkpSkFIFQtyEK1sXXMJSCF%2Bs%2FKGqdh0CVITLOF76ynOgM2c9oeZ3MmrDktwZqX%2B%2FBLcMLE3MwVENC8efAG9ob2rIG7jQ9PzwP7yjN9ifRSZEhV%2FepNEr98IPeCRiCGi%2FgxmMxNZgFasWOcJhJ3I8pNiHEstCORCMd7omWJnakMBwODSXUe&X-Amz-Signature=f163edf38d5db1e608c284909f3c8920a011d95bb21bf6bc37d5cf95947ca4bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633OCGJG3%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T063627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDRTft6YGj0g0bsMTD9HlTA4QQJL%2BUbmEgs6wbqqihtxAiEAn5cx%2FDzqLqYqltGYSVzLOhpz2jCDyiu0PJTkWqEFqukqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHbC4BTDFEAZm7H4WyrcA3JyTrWVlJ1qfYasRumaivGsqN0DJlVIQnIKuXLUTa%2FF%2Fhw7iuHupPBqmsBlXOAdcL9pf2X%2BKySip4gHkNCWgTbLjSwpDZzcbZCnxAE1v9VDpr97zHPncgoCZ8a5rI2An8Ifi7kOpnpKUTlsxDgt1AWWjs8n3npf2OxBcFac91vzWpcMN8gHCJEus9V2vuiBt926ep3WyYo244g90Y0ixELhDIsqTHgsZDIJMhLvidfH1%2FrPXw0jLTbzFjVF3hD5sfm%2BPsbtlLI7UCcIRPj%2Bp5Mzkoze80gJS1jcph4scTQBZcuorxuSdCAe6ELAQ628EcKIjA6PzsxaX10rviQJhj1LzQJNp7%2BrnZSzDl5aAbg915Yblda7TYw%2BY1t4T9pn1J1Vv5Y0UP%2FACRrFpT%2FzBgxjEjX21cdEZPw7d6PkOh%2BlLLsurbAkZxuz3C5VSJhbyW05m7rN45Rj2nkrp5JTcenQxuipebS0hN9Uk3er1WADlDaBHeJU3eaKmBUSWh8vUGB4uRbtkjIsmmcGD6Ks1te1JSZLPrvvPUfqekU98IkMpX1cZ7FYT1i6fU7jKlLRaM1fqweAY9ziJTnsUa748Y%2FMGTIUZh%2BvLtHqBaGYvmTsu9UqvYLWAmUNWwcPMIPl3skGOqUBXfFop2s8YzUIro%2Fd%2BWv2r3xd7uajxuFREtVVda0XW0nkpSkFIFQtyEK1sXXMJSCF%2Bs%2FKGqdh0CVITLOF76ynOgM2c9oeZ3MmrDktwZqX%2B%2FBLcMLE3MwVENC8efAG9ob2rIG7jQ9PzwP7yjN9ifRSZEhV%2FepNEr98IPeCRiCGi%2FgxmMxNZgFasWOcJhJ3I8pNiHEstCORCMd7omWJnakMBwODSXUe&X-Amz-Signature=8e5c2efbcd0a1dfdc1975c479643b571bffa660b806a08ca06e2ac5de4247f67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
