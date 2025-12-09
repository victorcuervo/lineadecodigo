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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VO2U5E27%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T030111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDD4rnfxHzkHm38Hd3cg14TY9swQ6lzh2tTS5lDpiBcpgIgVzSlEV5bpekfAX6j%2BhXyPmOJDEcYHpnE98nWqFywZfgqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBQLZ16RdXMeE9%2BxdSrcAyQ7t%2BnyYHGwTujLPszzAHdKEoFfmYQM6MA%2Fyq23c4P1w%2FZqC3%2FGeXnvn0zPHKgOu%2Fvq%2Fgnf00dUOje5aPqP1uzTSFQhV%2BH%2BZYYMTQCrXdwNSJBs633NHwSerRRYP2PXjNWMIfpLupSOj2WTylHYOQ5z79bPbce4DNPXMxjQS8jhn%2FYkd4XZlOUuhw7iGwKBXSBSvtrh3OAs0MrOm9OsD6eftpMOjPDmtY3pbq0c0zmqdL%2F%2B9fo3q8jTj%2Bm3CddpTBDKQdlA2Q0X1vsKEK7X1gIlPKCC97KExLLSqIEjAx42mEH3X4tez4lvUyE%2B%2BbxNMG92RpeifC88UaWd3wX%2FOJdZ97iDkJfImuU4nGnQR5w3sWabbVSoXunqtn9YrNbSz8Eetzf4tZ%2BVodezgkZ%2FXRFELjrVX6NwtL%2B7mpRyB7un44M4k6yNa9PdD95KnNjT61XMUiA4xYgQ309ouqrjhZgYQUVTb%2Fqw2KADl5LFxTmVA0dvhzFgOAzGtuyBYGozPU5DjNP4c5zuuI0ti2JX1VF1InvLU6t84iyX7vH8d7NHJMyVJ4eH1exZXvtDdp5A2NPhWgjDmekRf2%2FstsEUUEghhERtpj1pEnVqmgIqsVHkm3toon%2BVLN%2BMeALlMNKN3skGOqUBTVaO4TdibZY%2F6Zu7lEyo6mJwjyGFtKMQgOSUbSM0cXTcOq2UuXxdhkKHk9XQWBng7Dtv4nscq2dvrz%2FWxdczgUMGg%2Bof1tfF0neAz2Peon5vsDyx8vbYTpQCys8ceD3QXclXblbBlL3kvahILafyi%2FIaCSHJV6%2FnncHiGGGr1tEo%2Bpn0FW90W4nXpGFz%2FLuC272LuyGG0Q92OOVMdkQ%2FwC82S02G&X-Amz-Signature=837acb5635299d53e813f6192aba90d28fc3c45210305b4597f74e3462fd8c8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VO2U5E27%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T030111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDD4rnfxHzkHm38Hd3cg14TY9swQ6lzh2tTS5lDpiBcpgIgVzSlEV5bpekfAX6j%2BhXyPmOJDEcYHpnE98nWqFywZfgqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBQLZ16RdXMeE9%2BxdSrcAyQ7t%2BnyYHGwTujLPszzAHdKEoFfmYQM6MA%2Fyq23c4P1w%2FZqC3%2FGeXnvn0zPHKgOu%2Fvq%2Fgnf00dUOje5aPqP1uzTSFQhV%2BH%2BZYYMTQCrXdwNSJBs633NHwSerRRYP2PXjNWMIfpLupSOj2WTylHYOQ5z79bPbce4DNPXMxjQS8jhn%2FYkd4XZlOUuhw7iGwKBXSBSvtrh3OAs0MrOm9OsD6eftpMOjPDmtY3pbq0c0zmqdL%2F%2B9fo3q8jTj%2Bm3CddpTBDKQdlA2Q0X1vsKEK7X1gIlPKCC97KExLLSqIEjAx42mEH3X4tez4lvUyE%2B%2BbxNMG92RpeifC88UaWd3wX%2FOJdZ97iDkJfImuU4nGnQR5w3sWabbVSoXunqtn9YrNbSz8Eetzf4tZ%2BVodezgkZ%2FXRFELjrVX6NwtL%2B7mpRyB7un44M4k6yNa9PdD95KnNjT61XMUiA4xYgQ309ouqrjhZgYQUVTb%2Fqw2KADl5LFxTmVA0dvhzFgOAzGtuyBYGozPU5DjNP4c5zuuI0ti2JX1VF1InvLU6t84iyX7vH8d7NHJMyVJ4eH1exZXvtDdp5A2NPhWgjDmekRf2%2FstsEUUEghhERtpj1pEnVqmgIqsVHkm3toon%2BVLN%2BMeALlMNKN3skGOqUBTVaO4TdibZY%2F6Zu7lEyo6mJwjyGFtKMQgOSUbSM0cXTcOq2UuXxdhkKHk9XQWBng7Dtv4nscq2dvrz%2FWxdczgUMGg%2Bof1tfF0neAz2Peon5vsDyx8vbYTpQCys8ceD3QXclXblbBlL3kvahILafyi%2FIaCSHJV6%2FnncHiGGGr1tEo%2Bpn0FW90W4nXpGFz%2FLuC272LuyGG0Q92OOVMdkQ%2FwC82S02G&X-Amz-Signature=7df5f26c013fbef03729845a67b9cd3c41d420d7ed512fbced1ab5cb3e50789b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
