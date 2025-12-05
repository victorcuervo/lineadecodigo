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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YC63Y6YT%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T074131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCa8B0cxkPm3ZjLGALpgo776xuSyylmgFOLobnMGEtyOgIhAP%2FyRvp7O2l9kt5Tor2pUos8qTFKaDeMrTJ%2BN9q6HuiFKv8DCFUQABoMNjM3NDIzMTgzODA1Igwv45GK97JSx6511Joq3AP9KVkFE%2FnDvPDEyS9tOfpDjt9yekWIhjqTN4Mwbtv0VLoqH5oSn9aoe6QVQ1%2BVi%2BGG4OVMatQo9Ph32F8r9Ll%2FfykubojNEUhwCexoe486M%2F5Gq%2FoByoZ9vuFN6UF3wCIMmwnbPXtws6XyH04UodLfNmu1nsG%2FkS3ma9OfaRcB3h2%2BbVdYxREHb6WfSl%2Bqs6UFXW78Z7%2BHcrK3Zz2%2Bbdpj9KbQheSyGhQ0E0%2BtCiFz%2FrMS7nkRCKv%2FF2MEvCiLhejSJXoaxRaoULrMg0dPEqlTiHVAxmI33v6aDxM87p3SLKTWk1vcFA%2FBoF9hq4ZKqFgyt6gTZwpd%2F8J5jLbjUGpASXdeUo3h%2FU5CU2ar8CDuEcaD%2FARQSji3QcUtRCLvn6PrWEn1ZOsIcUXpOpn5w%2BwRC%2BYUFadUUguXrGLPruBctyJ0LRtmho97xUqhz0usY3dvVohvezZHY%2F%2BnHmVN5gvB2Ars4rA0alQKK%2BzpUpbw79b%2FXGYG%2BBWPv%2F2ZmUiA38bTF29yP9Znggk7FRt8c3Ub%2BWvYHt48eiP9dU5QIxZVAzpW175tEMAXu7wZlsAOcVUdLOBo%2FQY4KPo6Zsc82759MlsfRvIZC0Sth4oLAZfIWZJLbsIYVMfFbNHRDTDIqsnJBjqkAQb19nVel8hl98pJEaAFNSUez1KEOxCgq11YO0Jdla2oXpzPxqj9chBKW3%2Ffy5we7%2B2ygN4O9Fm%2BqfjEuXc5b34RmV8p%2FcfZ4gaDly4BuanXlLUike48vPt6FyKArRSDFELoXnnPU8DPPKBzzshnPIXNFcBAUQmetkgWn%2FDBhLeUMp%2BM%2FuXhYB%2F5eutUJN%2Bg9e7Xyn3mkLE%2Be9Ej%2FNy%2FsjWg1AWr&X-Amz-Signature=70f9a657c319f3cdb65d9b57946bf729c692e1f8be0f34b856c211f5ca3a476f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YC63Y6YT%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T074131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCa8B0cxkPm3ZjLGALpgo776xuSyylmgFOLobnMGEtyOgIhAP%2FyRvp7O2l9kt5Tor2pUos8qTFKaDeMrTJ%2BN9q6HuiFKv8DCFUQABoMNjM3NDIzMTgzODA1Igwv45GK97JSx6511Joq3AP9KVkFE%2FnDvPDEyS9tOfpDjt9yekWIhjqTN4Mwbtv0VLoqH5oSn9aoe6QVQ1%2BVi%2BGG4OVMatQo9Ph32F8r9Ll%2FfykubojNEUhwCexoe486M%2F5Gq%2FoByoZ9vuFN6UF3wCIMmwnbPXtws6XyH04UodLfNmu1nsG%2FkS3ma9OfaRcB3h2%2BbVdYxREHb6WfSl%2Bqs6UFXW78Z7%2BHcrK3Zz2%2Bbdpj9KbQheSyGhQ0E0%2BtCiFz%2FrMS7nkRCKv%2FF2MEvCiLhejSJXoaxRaoULrMg0dPEqlTiHVAxmI33v6aDxM87p3SLKTWk1vcFA%2FBoF9hq4ZKqFgyt6gTZwpd%2F8J5jLbjUGpASXdeUo3h%2FU5CU2ar8CDuEcaD%2FARQSji3QcUtRCLvn6PrWEn1ZOsIcUXpOpn5w%2BwRC%2BYUFadUUguXrGLPruBctyJ0LRtmho97xUqhz0usY3dvVohvezZHY%2F%2BnHmVN5gvB2Ars4rA0alQKK%2BzpUpbw79b%2FXGYG%2BBWPv%2F2ZmUiA38bTF29yP9Znggk7FRt8c3Ub%2BWvYHt48eiP9dU5QIxZVAzpW175tEMAXu7wZlsAOcVUdLOBo%2FQY4KPo6Zsc82759MlsfRvIZC0Sth4oLAZfIWZJLbsIYVMfFbNHRDTDIqsnJBjqkAQb19nVel8hl98pJEaAFNSUez1KEOxCgq11YO0Jdla2oXpzPxqj9chBKW3%2Ffy5we7%2B2ygN4O9Fm%2BqfjEuXc5b34RmV8p%2FcfZ4gaDly4BuanXlLUike48vPt6FyKArRSDFELoXnnPU8DPPKBzzshnPIXNFcBAUQmetkgWn%2FDBhLeUMp%2BM%2FuXhYB%2F5eutUJN%2Bg9e7Xyn3mkLE%2Be9Ej%2FNy%2FsjWg1AWr&X-Amz-Signature=5a646396da1c944c8c4d1e639df8a71f15aaf924207b599ceaefbf5a655a8145&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
