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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4DUKTJW%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T232133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTJBfQyCO2ksV%2FOH15TIPJDmiE40JnmirZiNqXqiZguAIhAN70D7U%2F8O1fK5bUQCPTimc5LwzIN9h8lDtBeacak5T%2FKogECLD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyUZfWBcrNNq31H45Aq3ANyLP5Y2RTerX6v79E7dmM3v8%2BNOLP6Ezvu%2B7CffJtRjdnk1nlwhkWi7%2BIvYCkoWFVeSGYi3Kg0n02H9IKj4sZGNLTlkm8YVlTpKVaLO78pJMfqj4ytO50xi49BvxKokUF9FvJ5QxHTAm3XUxvAKMzBnABEPOq4MxMT5lGjygQIe01tpngLoFC4Gc9NaSnxT%2Fqjx3kNA6Pox7PWX38l0ml%2BevEcHoMwC8WaJz1ciMNs77v%2BQRtUXEWYzIhtvxVdJHt6EKAqxGt%2FkCmcTEd8LNV%2Bmf7hITcWSzW%2BER2L2NEUuUIK%2BMlVJZdRyR2umY9xhOY5ilQ5gI82jyG4njdQfmEJySyYaACSPIyJFcyOiGSRDwCeurCidMwZj5G55KTh%2BVKt8m1yiOroDfuhzuKI7dOTKMvhvYZqUNNVzai8uU1CYbg65DCCFW7ALqr0EVWHoosMUuKuev8Zine57orGMARUx8wd8Q5UcNI8IdKwfvUVxoZ8PMvmKdNCazDBgnPrRDuw9tQXQDAjYpp0NiIBauD2ExMYiIFPLaRYA5yqSPmn%2B4ezE9VBCxlNqnJMMU%2FtSdBevFMvGuqJHIMSV1Q5%2B7cJLuUXtSSn8YctWS9Th2GxQQf3yoMNBcgahavdjjC4ot3JBjqkAQBP%2BaFkW2gM5h5BahhdUOCD2ThCnWLgrX4m%2FZmNPf82yEJHVTFj6QP6oUjCMCHvyfXb7DINla7GFyaaGzKr8ttPncuy96IWiIQgSlZuU%2FcDI7ic6kgDvUfmMGxfUKp%2B0TquZuxO%2Fyi1hh1zJH3xZA4XCw3D5GTNsIyjC6esaEJMmXZ8XW6%2Bj%2F0uzhBP3Dc0lKqP7Lf8Uweaph5LTLOMAN5eOsJ1&X-Amz-Signature=244b26f51471314a12ce1215127582c22f51ed4f1d818e4626720b94a1866a3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4DUKTJW%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T232133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTJBfQyCO2ksV%2FOH15TIPJDmiE40JnmirZiNqXqiZguAIhAN70D7U%2F8O1fK5bUQCPTimc5LwzIN9h8lDtBeacak5T%2FKogECLD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyUZfWBcrNNq31H45Aq3ANyLP5Y2RTerX6v79E7dmM3v8%2BNOLP6Ezvu%2B7CffJtRjdnk1nlwhkWi7%2BIvYCkoWFVeSGYi3Kg0n02H9IKj4sZGNLTlkm8YVlTpKVaLO78pJMfqj4ytO50xi49BvxKokUF9FvJ5QxHTAm3XUxvAKMzBnABEPOq4MxMT5lGjygQIe01tpngLoFC4Gc9NaSnxT%2Fqjx3kNA6Pox7PWX38l0ml%2BevEcHoMwC8WaJz1ciMNs77v%2BQRtUXEWYzIhtvxVdJHt6EKAqxGt%2FkCmcTEd8LNV%2Bmf7hITcWSzW%2BER2L2NEUuUIK%2BMlVJZdRyR2umY9xhOY5ilQ5gI82jyG4njdQfmEJySyYaACSPIyJFcyOiGSRDwCeurCidMwZj5G55KTh%2BVKt8m1yiOroDfuhzuKI7dOTKMvhvYZqUNNVzai8uU1CYbg65DCCFW7ALqr0EVWHoosMUuKuev8Zine57orGMARUx8wd8Q5UcNI8IdKwfvUVxoZ8PMvmKdNCazDBgnPrRDuw9tQXQDAjYpp0NiIBauD2ExMYiIFPLaRYA5yqSPmn%2B4ezE9VBCxlNqnJMMU%2FtSdBevFMvGuqJHIMSV1Q5%2B7cJLuUXtSSn8YctWS9Th2GxQQf3yoMNBcgahavdjjC4ot3JBjqkAQBP%2BaFkW2gM5h5BahhdUOCD2ThCnWLgrX4m%2FZmNPf82yEJHVTFj6QP6oUjCMCHvyfXb7DINla7GFyaaGzKr8ttPncuy96IWiIQgSlZuU%2FcDI7ic6kgDvUfmMGxfUKp%2B0TquZuxO%2Fyi1hh1zJH3xZA4XCw3D5GTNsIyjC6esaEJMmXZ8XW6%2Bj%2F0uzhBP3Dc0lKqP7Lf8Uweaph5LTLOMAN5eOsJ1&X-Amz-Signature=c9cc731c3309b68974b6ff2ac80764e8a47db148d182a449566f11fd2c142956&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
