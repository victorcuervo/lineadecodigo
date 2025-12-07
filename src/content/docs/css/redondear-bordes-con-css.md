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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QBT7KLR%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T151528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIERgFx%2Bow1DMBqCe7pH2N4Mu6kFfnK1cUEamSgYBIdXEAiEAwhwjQe6xYwJvcnk2rgu7mo2DTGpnfN9AcgYCSF%2BTZM0qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLOAV3dUtSuBoCzJMyrcAwQmihkQBJVs8RnUcz9DSJTMtED%2B4f%2BH6Ewg%2Bc8WKT1Hrd9oxQncAvUTOzzdEyfumUxTuCeYnDP%2FOMON5%2FciPWsytvAfeqaiuX8a4cuuRFQnN2xaBeG2eFNZdI8V7KIbrPCnS7U6AFXMY62%2BoYXbsusgQbKBOtem%2FefydRGqRlAcnFFiksfGo7DtmWK9wYVaRK1P0sBnFWCBmvX3p6wGccfQlVyDFCRnYZ9TKVII6pL3ABsx8F%2BtMLy2w7wU1p38ycvTIiCazMqoCU0XlsbGxd0H8tRKbNB1Mt1J9jX6g15fert%2BYhC2XU4W62nHkVzLQnSipp23e9E6lW2wfdVr1dSKykwmfZVgmugJ%2BT%2FsRDQ6IWDyYYIn28f%2B%2FAewfcp8ii7AG91T9yzCBCAqECYR83SFb9NCK3%2BvhRkiyXKiYpIGOKRS1S4EtDsRuX3CciEIPHtSXiPPHjA4j8W1jbPnbYBimOtDd24Ic%2FoDbnXTQ3nilsP9PgIgf3hCRZW5lwYyoy5K%2BwYjt%2F7y3VlYL7rTUOrwbGCR8av6neT0nA0JKsr7%2FDuGpBcVYTXs3NhzRXDqXVTHzA8qksd%2B2f3CNhbQQSEF2JGtEyUcCm6cQgT8XacjOahquN0MY9XRt7odMMGa1ckGOqUBt9BO2wAbM1VOFDBbnjotE53o9ydSkco3BDmrf%2Bqw5qzyk17FOXfkxlkw%2BkpSJOTyMvYl%2FzQJo6b%2FHbx7Z3YVb5OR72cq3emhR7TEYuw9nVzRXaxGSt%2BZIeqpKH0xr%2Btvbokt%2FTUL9NmpuPXiMLT1vZsyxnbsg9Q%2FiwWvb3L3ZmobSNGPZdJpWXCIrIKaBIveF6NSBBUzvJh5c52v3O4HKqVJCAqU&X-Amz-Signature=baac7f8a91a74377f00dfc8a4d3779ba5ab438e02269f7b9aee11143eb149d22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QBT7KLR%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T151528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIERgFx%2Bow1DMBqCe7pH2N4Mu6kFfnK1cUEamSgYBIdXEAiEAwhwjQe6xYwJvcnk2rgu7mo2DTGpnfN9AcgYCSF%2BTZM0qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLOAV3dUtSuBoCzJMyrcAwQmihkQBJVs8RnUcz9DSJTMtED%2B4f%2BH6Ewg%2Bc8WKT1Hrd9oxQncAvUTOzzdEyfumUxTuCeYnDP%2FOMON5%2FciPWsytvAfeqaiuX8a4cuuRFQnN2xaBeG2eFNZdI8V7KIbrPCnS7U6AFXMY62%2BoYXbsusgQbKBOtem%2FefydRGqRlAcnFFiksfGo7DtmWK9wYVaRK1P0sBnFWCBmvX3p6wGccfQlVyDFCRnYZ9TKVII6pL3ABsx8F%2BtMLy2w7wU1p38ycvTIiCazMqoCU0XlsbGxd0H8tRKbNB1Mt1J9jX6g15fert%2BYhC2XU4W62nHkVzLQnSipp23e9E6lW2wfdVr1dSKykwmfZVgmugJ%2BT%2FsRDQ6IWDyYYIn28f%2B%2FAewfcp8ii7AG91T9yzCBCAqECYR83SFb9NCK3%2BvhRkiyXKiYpIGOKRS1S4EtDsRuX3CciEIPHtSXiPPHjA4j8W1jbPnbYBimOtDd24Ic%2FoDbnXTQ3nilsP9PgIgf3hCRZW5lwYyoy5K%2BwYjt%2F7y3VlYL7rTUOrwbGCR8av6neT0nA0JKsr7%2FDuGpBcVYTXs3NhzRXDqXVTHzA8qksd%2B2f3CNhbQQSEF2JGtEyUcCm6cQgT8XacjOahquN0MY9XRt7odMMGa1ckGOqUBt9BO2wAbM1VOFDBbnjotE53o9ydSkco3BDmrf%2Bqw5qzyk17FOXfkxlkw%2BkpSJOTyMvYl%2FzQJo6b%2FHbx7Z3YVb5OR72cq3emhR7TEYuw9nVzRXaxGSt%2BZIeqpKH0xr%2Btvbokt%2FTUL9NmpuPXiMLT1vZsyxnbsg9Q%2FiwWvb3L3ZmobSNGPZdJpWXCIrIKaBIveF6NSBBUzvJh5c52v3O4HKqVJCAqU&X-Amz-Signature=aee983cd3296ea54c0bc151edd66010443f74c3b12e1e7fbe2547976a3edac26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
