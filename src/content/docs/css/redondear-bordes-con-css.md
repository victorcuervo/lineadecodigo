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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GCELWZO%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T034356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB1AEuqFgc5CtYlzNgZbALRQbmUg3FTdk%2B07hXR1%2F89gAiBWLVI884RXWWplVRamtIcp4g6U4UuI%2FmmxKBNnZXVNGSr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMECfxHUTZ20tALp4YKtwD3bKLQWTT1H0vjOsgQ35LHPiXFwLXIex6hEFsX5TkNgkOVAsSnZdpO1E8TAbA%2FB6%2F%2Fs%2FZlUgBBl0VktLNnDar3aMC%2BWSUiqtaG%2FuTv2aFJ4A2J2j53YvccAR7zdYknO9QMqx%2FlCOM664u6C02%2BBgAjgOuLYL9f%2BIKaysa%2BU9jLVvUHa74GTYeZ3vK9gn1O4%2Fu3oyfr%2FC6X39IUVPAPj2%2Feh46GKkKUc81wMwJrVdNFGbQHmlxKxfsgYvMECVmZTlMLduyDucFYv352qPiiuuRajVqj7S68IquMSjnFtV1EvQG0m4xsi7JYYZEvcXQwPGfL4w35g8UE7EzWzyl4k4Wvb5MOhKIIFceyTNdFeE9nQPsA8L7Vlfakn9pyZ42Tiznp0gQxh808FKhVplkguSIlNxgh0XJGVAy8eIlocayXT%2FugPtWmnS0g0OlLSFVQTqd6jAL8wg7Z7fUjqBo4y6BitqpXvXHflqUzZrdPQnJ%2B8XeZTW8NFd9CgiMRNNpaMM0fYScyzMVVZbm4mrzyV1%2Fw%2FGeyFYacDNHTBoJL%2B5fIliyyci32wsBeg7c7n9xQTBVmbepRhwIIcllf%2F3dmd%2BGb8J1jDOs5ihdCT4JfphnIRPts38bWmkRuiS9GxowncPOyQY6pgGo7GGDSN1qHTHkmy%2BbyukyXo9QIoNeW%2Fy08bVGP0BKrGCjEI%2FweqnHkBTVGuPRhdixdGanPUvxSG%2FqiJmwRgomFlKwCsMkrwiP0Yln%2BU4wlR7dUWw3CjwwBU8uK42TQLQSqqVKb%2BC1znnkMJeoa21XdyCUP65qIAw5OeprbPMAL08ReDcK4G7IwlBOfr%2BFBNbqNFS7FeUGYBEsrWE1b%2B93YpriKa4S&X-Amz-Signature=c8b5fd38f78d66bdf18713857ebb8260217be41ad914ab9f5c2092a26212f23a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GCELWZO%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T034356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB1AEuqFgc5CtYlzNgZbALRQbmUg3FTdk%2B07hXR1%2F89gAiBWLVI884RXWWplVRamtIcp4g6U4UuI%2FmmxKBNnZXVNGSr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMECfxHUTZ20tALp4YKtwD3bKLQWTT1H0vjOsgQ35LHPiXFwLXIex6hEFsX5TkNgkOVAsSnZdpO1E8TAbA%2FB6%2F%2Fs%2FZlUgBBl0VktLNnDar3aMC%2BWSUiqtaG%2FuTv2aFJ4A2J2j53YvccAR7zdYknO9QMqx%2FlCOM664u6C02%2BBgAjgOuLYL9f%2BIKaysa%2BU9jLVvUHa74GTYeZ3vK9gn1O4%2Fu3oyfr%2FC6X39IUVPAPj2%2Feh46GKkKUc81wMwJrVdNFGbQHmlxKxfsgYvMECVmZTlMLduyDucFYv352qPiiuuRajVqj7S68IquMSjnFtV1EvQG0m4xsi7JYYZEvcXQwPGfL4w35g8UE7EzWzyl4k4Wvb5MOhKIIFceyTNdFeE9nQPsA8L7Vlfakn9pyZ42Tiznp0gQxh808FKhVplkguSIlNxgh0XJGVAy8eIlocayXT%2FugPtWmnS0g0OlLSFVQTqd6jAL8wg7Z7fUjqBo4y6BitqpXvXHflqUzZrdPQnJ%2B8XeZTW8NFd9CgiMRNNpaMM0fYScyzMVVZbm4mrzyV1%2Fw%2FGeyFYacDNHTBoJL%2B5fIliyyci32wsBeg7c7n9xQTBVmbepRhwIIcllf%2F3dmd%2BGb8J1jDOs5ihdCT4JfphnIRPts38bWmkRuiS9GxowncPOyQY6pgGo7GGDSN1qHTHkmy%2BbyukyXo9QIoNeW%2Fy08bVGP0BKrGCjEI%2FweqnHkBTVGuPRhdixdGanPUvxSG%2FqiJmwRgomFlKwCsMkrwiP0Yln%2BU4wlR7dUWw3CjwwBU8uK42TQLQSqqVKb%2BC1znnkMJeoa21XdyCUP65qIAw5OeprbPMAL08ReDcK4G7IwlBOfr%2BFBNbqNFS7FeUGYBEsrWE1b%2B93YpriKa4S&X-Amz-Signature=5055f5ab5eea97255b9dcc5bd2d96e8ad9bae427801c1cc233630e4b94394da5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
