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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663L73GBYR%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T025848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHQOt0ng0wBBOTtfoniRjpwhPzoajm60qb04iMb8WVCLAiBQhHiszfb9j3n5pWc%2FsPpEuGG5joVtsHu2ufAfh1zJ6Cr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMZf6X1feZwp1uKMJ9KtwDL7LB1kxj5lirg42OaBfH6%2FIFuI%2FM5qk0HQYYOHyKyROCAPGrwpt54Sk1wdsQIRIAhkgkFGcqKj%2FK8eiWs0noGP66Rv%2BvnHxMAmqxyjRDTFHN833tfAcY4GjVDjFbQsn0a%2FVR62dTn6NTuGutPMhZ8ybjCOkUNWROK1%2Flx16EMDo%2FIzxfzwdbwzPxL1iJxhBMPYJ6IVPjZAnF9JLiA3s7DjjG3lozks9NuvCHzGvyxLJtDS4lHIymolD9kVrcppNF1R1WoIl2RNfNHdDxmXJmKPndddKx9Gv6BEc5ON8zSI89k04M2jTTdPj55fLOuS%2B8IgtbjzmX37zk7b4NVtxLt7US%2FK4day9TGT3%2FSP0oXnFigFVtykJezp2GqfMSqyqJnKmYZQrhPB0TlzXy4AxTmVKDRJ4sK9Fj8Duib%2FFhFvo%2BygVGm9w5XRAfNHtMCdSqfUCNSnqp3QbWZjLu%2FeDG1v%2B4SMmEcNbTVPv98Ux4shJg47Bm4yBEeFhN7B1g1%2FC01NOiGOEeWdy42NBXhhbvrWYIPNiIebg9jm9YKK1BwAuRJSADbtWqndmX3h2QXJ5xV7rMLvbREGflEfSCmp8KuRXEaXtdBwRkfoN5WmDEnt5%2FpEUteA4auWCceRgwtIzIyQY6pgHwZSNYwaM8dYoU0cc58Nxnph6RbmM71%2F6CVYZFFnGuWI0GlR%2B6XqiLvgmgcfwMIyQda0UXUkuVjZBz%2FhE91JwB%2FUuGEYb9CSRkxYwQeytcR37OgsXuEHzCzPQrF%2BUv4Sejf%2BoBBodFVAb9f370RjHdHo3kMNfz8fNQgMGmYlA7q0zVoeyomYcMReWOc3FkF39Iuqp2nM2rAJcLtJZuWfpWi1l8f4s0&X-Amz-Signature=b7d54d233980ff324d1510faaa616bce8a1b0ed659f9eb55842ee997deb9185e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663L73GBYR%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T025848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHQOt0ng0wBBOTtfoniRjpwhPzoajm60qb04iMb8WVCLAiBQhHiszfb9j3n5pWc%2FsPpEuGG5joVtsHu2ufAfh1zJ6Cr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMZf6X1feZwp1uKMJ9KtwDL7LB1kxj5lirg42OaBfH6%2FIFuI%2FM5qk0HQYYOHyKyROCAPGrwpt54Sk1wdsQIRIAhkgkFGcqKj%2FK8eiWs0noGP66Rv%2BvnHxMAmqxyjRDTFHN833tfAcY4GjVDjFbQsn0a%2FVR62dTn6NTuGutPMhZ8ybjCOkUNWROK1%2Flx16EMDo%2FIzxfzwdbwzPxL1iJxhBMPYJ6IVPjZAnF9JLiA3s7DjjG3lozks9NuvCHzGvyxLJtDS4lHIymolD9kVrcppNF1R1WoIl2RNfNHdDxmXJmKPndddKx9Gv6BEc5ON8zSI89k04M2jTTdPj55fLOuS%2B8IgtbjzmX37zk7b4NVtxLt7US%2FK4day9TGT3%2FSP0oXnFigFVtykJezp2GqfMSqyqJnKmYZQrhPB0TlzXy4AxTmVKDRJ4sK9Fj8Duib%2FFhFvo%2BygVGm9w5XRAfNHtMCdSqfUCNSnqp3QbWZjLu%2FeDG1v%2B4SMmEcNbTVPv98Ux4shJg47Bm4yBEeFhN7B1g1%2FC01NOiGOEeWdy42NBXhhbvrWYIPNiIebg9jm9YKK1BwAuRJSADbtWqndmX3h2QXJ5xV7rMLvbREGflEfSCmp8KuRXEaXtdBwRkfoN5WmDEnt5%2FpEUteA4auWCceRgwtIzIyQY6pgHwZSNYwaM8dYoU0cc58Nxnph6RbmM71%2F6CVYZFFnGuWI0GlR%2B6XqiLvgmgcfwMIyQda0UXUkuVjZBz%2FhE91JwB%2FUuGEYb9CSRkxYwQeytcR37OgsXuEHzCzPQrF%2BUv4Sejf%2BoBBodFVAb9f370RjHdHo3kMNfz8fNQgMGmYlA7q0zVoeyomYcMReWOc3FkF39Iuqp2nM2rAJcLtJZuWfpWi1l8f4s0&X-Amz-Signature=b262e67d4364620ba5ba3901dbb051fea52ec9559d00ae56a12e82eb76abbd63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
