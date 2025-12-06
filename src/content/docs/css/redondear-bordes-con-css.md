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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MZHBLNE%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T113711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA68uINvmF7E10bRqj19fyEZHo3%2BfVbluyzIF0XHUWVNAiEA%2F8gJxVY62HY3PGAymKE62kaf0fu%2BkHcsGgtK69LVM3Uq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDNU8NUNzwVBeTeBSlyrcA3C5pEHtJQYIKQDqUtIBmutbdJ780A%2BHifuXZAgcT1652Q9dLl4yNGzMCWAlGj9LaA%2BQVWP3YbIlR3FOP%2BpKZ33RzJ7vP%2BCnS5sdvSaqr%2B%2FqVIVSWZ5IaGumSsWizCF0yrzcDNsdlXcrrNGqKN6BkcZwdWU9rY9MgA5RlzMmRF6h9LE%2B4CyAoQIWS9%2FVAKSioLgIfDFQK0gJLQ4idUi0HShqc4hBo6jBSV0edxEeaEMh2m9nsbTJ5AWkspBmrCqhlxl7XVBp9HeKIiQ%2FfRWvYY2FoQsN0UyqHyIWMoMME4E9qQ0Zi4eQo0ZDAmRJlPFZN%2BPfdKU2M62FVlFFrxgL8%2F5uFSa9a2PB2i8LsvWix1uPZNBFmltKqLY8pzS9NJjl3UE7MgOZk7CvTW7hhnFEqmSANl%2FGUoAyAe%2FdlI73QYb%2FsuTxx17V7%2F8pUwP4VrII8gOJzRC%2F%2B6X3O2%2BymmAe8n1n62zc8R8eaeIhEeBqwNjhdAt3DVL5TXH3a3Lywc4MVnGQIEt3W0GGXhhK7ae%2BCGq74q6CxNr8sVvGpC2nm3no7s3MBHaxHZau%2FHvDEDU4HGcyoaQE642KMtnAH8vXunyHkNPmksMgP95SAYtsQZJJeaq25Uidfli%2Fx5HGML2m0MkGOqUB2NfmQbfeIkSPMByK2mVoYAAvIynCUShKWwzy9Aqlr1QPgHqK%2Bw8Qh%2Fg9TR6IiZdFzmvblR0IfJf44E1452L0WPHuofovMO%2FkaXeHF1EkCvVtbCffiGcx6ha0UtGLYy%2Bo2lCBpVcHBCQsiCIworIYdiNhxNwA83o1sUBa6hqusPtO%2FPqq6QnAIWVXcA0AkiPs4PD%2FQ1ajKQoY6r9F2Fvl%2FGaPhiNt&X-Amz-Signature=6045ccc6fbff2ad3b7b4089c73e410a84f0877dbfa67fe3196aa9208f9a96562&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MZHBLNE%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T113711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA68uINvmF7E10bRqj19fyEZHo3%2BfVbluyzIF0XHUWVNAiEA%2F8gJxVY62HY3PGAymKE62kaf0fu%2BkHcsGgtK69LVM3Uq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDNU8NUNzwVBeTeBSlyrcA3C5pEHtJQYIKQDqUtIBmutbdJ780A%2BHifuXZAgcT1652Q9dLl4yNGzMCWAlGj9LaA%2BQVWP3YbIlR3FOP%2BpKZ33RzJ7vP%2BCnS5sdvSaqr%2B%2FqVIVSWZ5IaGumSsWizCF0yrzcDNsdlXcrrNGqKN6BkcZwdWU9rY9MgA5RlzMmRF6h9LE%2B4CyAoQIWS9%2FVAKSioLgIfDFQK0gJLQ4idUi0HShqc4hBo6jBSV0edxEeaEMh2m9nsbTJ5AWkspBmrCqhlxl7XVBp9HeKIiQ%2FfRWvYY2FoQsN0UyqHyIWMoMME4E9qQ0Zi4eQo0ZDAmRJlPFZN%2BPfdKU2M62FVlFFrxgL8%2F5uFSa9a2PB2i8LsvWix1uPZNBFmltKqLY8pzS9NJjl3UE7MgOZk7CvTW7hhnFEqmSANl%2FGUoAyAe%2FdlI73QYb%2FsuTxx17V7%2F8pUwP4VrII8gOJzRC%2F%2B6X3O2%2BymmAe8n1n62zc8R8eaeIhEeBqwNjhdAt3DVL5TXH3a3Lywc4MVnGQIEt3W0GGXhhK7ae%2BCGq74q6CxNr8sVvGpC2nm3no7s3MBHaxHZau%2FHvDEDU4HGcyoaQE642KMtnAH8vXunyHkNPmksMgP95SAYtsQZJJeaq25Uidfli%2Fx5HGML2m0MkGOqUB2NfmQbfeIkSPMByK2mVoYAAvIynCUShKWwzy9Aqlr1QPgHqK%2Bw8Qh%2Fg9TR6IiZdFzmvblR0IfJf44E1452L0WPHuofovMO%2FkaXeHF1EkCvVtbCffiGcx6ha0UtGLYy%2Bo2lCBpVcHBCQsiCIworIYdiNhxNwA83o1sUBa6hqusPtO%2FPqq6QnAIWVXcA0AkiPs4PD%2FQ1ajKQoY6r9F2Fvl%2FGaPhiNt&X-Amz-Signature=cc72f08e21510a4dac2b904aff1649b93d3263ac7580d72bdc792589419bd687&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
