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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPCAY3GN%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T123438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSdvV%2F0393PUEss57s5sfVlCvGXZvXuapCFyWjlsNYhQIgTEezUF7YG7GvR7yXo7gxkk3XznW%2FcIszl404Afx6ez4q%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDCHN8UYeLvWE7Wn%2FHSrcAxxk9ESeSM7b0teQdlm8zEkrJk1wV9ae5%2FiZ4YEdOhjZ5NCCQ9qP2uvvcJeMnsWGmOv8NtyKK9iaqo7RIbP9IwCeQFe3ADhycq%2F1DjNETwbUq%2FMtM71MFh2GuP21ySxQbl4NqUlE91bpMJJ%2F8owxn1Q9sVz9UHSKct90aR3Og8ROwC2dGPyjNWebg%2Bi8fp9AS%2F8m3GZyhNns6pNJxdWa9uoI1qlb82LbuyMvoBduxDuPfpIFNU9GuaxBfUoaZ5ul2UerhDHVF1vYR7zGHUb9tla8fP6F%2Bswj9VN%2Bz7DS%2FsNsEPIrk3QcOmeWGqhktR9%2FSlTLPmFDZ8%2BZJsJee1%2BjEIWwKuP4WCxbeH7iZZLgbwuIiWiWydH0Pi25dmnmCiH49wbBpBpp%2FtNL8hKg3hfzldfqUnlfBO5X89tV97trf7qyul78agN7H07t4741BrP9b6GH135pKJX1OeswRIYwU7%2FZKrx1HGTwXat9cSwvBrcoYP9PWoKN1YulK7icG8V9cpX9L3d%2B120Ng08xWjRvsGvrotUz7ymyT0fYN8gLL%2F920ikMmMdJ%2BoOvWh2KmLH52gvjDx42SAshjMWPNAbf2UEuFWq15VdbWR5ZW0fgqnQpiVvSYaxusoQw4jnRMJPKyskGOqUBwA4w%2F7m1TTH6DDOgaS%2Fz9CjYUyVrPaDPfB6%2FV4CjL2eUuC7Ss2xFFS23nPNnfcfdb20ogPXplMCUfG5NIX3UbEbKF471hKszC2C2kv%2BM1OEP4hhqNQXiQrD2%2BGcPhRl9IDEgOFZtzntHmofM2NYSsaf6T4HeIg4CBNKIE9IYrPKoZQEPtZVbRzp2jvGC4WHfDqCHkyms4OGv1Nf0WRJd%2F66y2Y2P&X-Amz-Signature=72ad238867860241749f2ceee8939d31b80d7a34069c786c40aaf1d85d52a720&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPCAY3GN%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T123438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSdvV%2F0393PUEss57s5sfVlCvGXZvXuapCFyWjlsNYhQIgTEezUF7YG7GvR7yXo7gxkk3XznW%2FcIszl404Afx6ez4q%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDCHN8UYeLvWE7Wn%2FHSrcAxxk9ESeSM7b0teQdlm8zEkrJk1wV9ae5%2FiZ4YEdOhjZ5NCCQ9qP2uvvcJeMnsWGmOv8NtyKK9iaqo7RIbP9IwCeQFe3ADhycq%2F1DjNETwbUq%2FMtM71MFh2GuP21ySxQbl4NqUlE91bpMJJ%2F8owxn1Q9sVz9UHSKct90aR3Og8ROwC2dGPyjNWebg%2Bi8fp9AS%2F8m3GZyhNns6pNJxdWa9uoI1qlb82LbuyMvoBduxDuPfpIFNU9GuaxBfUoaZ5ul2UerhDHVF1vYR7zGHUb9tla8fP6F%2Bswj9VN%2Bz7DS%2FsNsEPIrk3QcOmeWGqhktR9%2FSlTLPmFDZ8%2BZJsJee1%2BjEIWwKuP4WCxbeH7iZZLgbwuIiWiWydH0Pi25dmnmCiH49wbBpBpp%2FtNL8hKg3hfzldfqUnlfBO5X89tV97trf7qyul78agN7H07t4741BrP9b6GH135pKJX1OeswRIYwU7%2FZKrx1HGTwXat9cSwvBrcoYP9PWoKN1YulK7icG8V9cpX9L3d%2B120Ng08xWjRvsGvrotUz7ymyT0fYN8gLL%2F920ikMmMdJ%2BoOvWh2KmLH52gvjDx42SAshjMWPNAbf2UEuFWq15VdbWR5ZW0fgqnQpiVvSYaxusoQw4jnRMJPKyskGOqUBwA4w%2F7m1TTH6DDOgaS%2Fz9CjYUyVrPaDPfB6%2FV4CjL2eUuC7Ss2xFFS23nPNnfcfdb20ogPXplMCUfG5NIX3UbEbKF471hKszC2C2kv%2BM1OEP4hhqNQXiQrD2%2BGcPhRl9IDEgOFZtzntHmofM2NYSsaf6T4HeIg4CBNKIE9IYrPKoZQEPtZVbRzp2jvGC4WHfDqCHkyms4OGv1Nf0WRJd%2F66y2Y2P&X-Amz-Signature=cb84c228be13a56c38e0d3900b63ba91e84834685bfcc5176cf13ec5284febd2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
