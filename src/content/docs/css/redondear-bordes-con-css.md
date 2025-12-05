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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QBOFMU4%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T013239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCf6yDgO%2FnGV%2FQ28fyyq3GMhipKlN27pH4gAm813CrqcgIhAN0un9quNmnBt7sEMY9J%2FHzeZdljyjT1noV%2FpR5uCbLJKv8DCE8QABoMNjM3NDIzMTgzODA1Igz%2F7dMLC2CUp4ovxhwq3ANNxdQTpXd5y%2BEcjFDbqdp4O%2FHujjlbfSmJ4eDLy6dF67HVPQ3QYEkRbk2AGee%2BbsX2wb9WdpOn6gvOe0B0S9S%2BupfMKFtgQrc9HyWPOPDlC6RVgUFIdLM%2FLC9GhEEJbQsIVPjFsp%2BsWooOjj%2FR5%2FDJaCnkeONMcDXF6YOBM5PGTfNXwWBP6AGVdeWaQ9gryYFIDHFGJ9AXWp8mtW5Rd4mS%2B6kgpvoGaKjaLxSDsWJ0Qca7BhIZaUGDW0td6Xmx82rAIef1TqZYmX6cRC2ykmFhgOCsQPS5BVhNQVyMSPvqzFgnK8X1VqucDP%2FmGG0ClhgTSg2nYRPjdoRjhz1xqn3rXrQMsyEZM82hkhFoK%2BicbDVwbzxo60mpFQCL%2BVMMoKhrLFZyGM8GchxPCZn5%2Fl6lPmg4GRqdV%2BlNUwtG%2B2laHEGUhXO3MYWmj8XNXWNXiVRg8NgkGJKan70MMGJRppH57xEIO0hxzW5sAfWCEjskbKN90rY%2BeDbRqOLSuLN%2Fx3SqsjsuvAjXjy0%2F1eLiiYbHV%2B1pLbBhFfUvpfgbdZ4XSU52Yf%2B0GeoEKixKJ%2FxNj8dSsMRCqrM0g3pw2N5iMVr33sJBYLVj6EBElNXAkmaMpqJLc6feewEpnH1IRTC3jMjJBjqkAZQF%2FYYqvKAkTVEtuHFidpJXm8tLXdM1zhaAMCDr7fENs2m4E%2FhywHoh8Q0lymDmO4K0Ew6Waz%2B09Rq%2BHVB%2F6K67XLZ6CXOvruaIphARD3oT7az60bzu%2BP6DqJ7K2HBwBwDwtEVt2PeJgh81sZSa4IShP0ZnWmklK7xL7RoD1LUCjXZzpQ4gOYXPl7XGAmE%2F5Jh14oJiBZT5JKz0B8KVKY%2BsDgjF&X-Amz-Signature=82a9d44862d01767343ebbbfe35d11540412977bdaef34b39d2f9551f3a1a0d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QBOFMU4%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T013239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCf6yDgO%2FnGV%2FQ28fyyq3GMhipKlN27pH4gAm813CrqcgIhAN0un9quNmnBt7sEMY9J%2FHzeZdljyjT1noV%2FpR5uCbLJKv8DCE8QABoMNjM3NDIzMTgzODA1Igz%2F7dMLC2CUp4ovxhwq3ANNxdQTpXd5y%2BEcjFDbqdp4O%2FHujjlbfSmJ4eDLy6dF67HVPQ3QYEkRbk2AGee%2BbsX2wb9WdpOn6gvOe0B0S9S%2BupfMKFtgQrc9HyWPOPDlC6RVgUFIdLM%2FLC9GhEEJbQsIVPjFsp%2BsWooOjj%2FR5%2FDJaCnkeONMcDXF6YOBM5PGTfNXwWBP6AGVdeWaQ9gryYFIDHFGJ9AXWp8mtW5Rd4mS%2B6kgpvoGaKjaLxSDsWJ0Qca7BhIZaUGDW0td6Xmx82rAIef1TqZYmX6cRC2ykmFhgOCsQPS5BVhNQVyMSPvqzFgnK8X1VqucDP%2FmGG0ClhgTSg2nYRPjdoRjhz1xqn3rXrQMsyEZM82hkhFoK%2BicbDVwbzxo60mpFQCL%2BVMMoKhrLFZyGM8GchxPCZn5%2Fl6lPmg4GRqdV%2BlNUwtG%2B2laHEGUhXO3MYWmj8XNXWNXiVRg8NgkGJKan70MMGJRppH57xEIO0hxzW5sAfWCEjskbKN90rY%2BeDbRqOLSuLN%2Fx3SqsjsuvAjXjy0%2F1eLiiYbHV%2B1pLbBhFfUvpfgbdZ4XSU52Yf%2B0GeoEKixKJ%2FxNj8dSsMRCqrM0g3pw2N5iMVr33sJBYLVj6EBElNXAkmaMpqJLc6feewEpnH1IRTC3jMjJBjqkAZQF%2FYYqvKAkTVEtuHFidpJXm8tLXdM1zhaAMCDr7fENs2m4E%2FhywHoh8Q0lymDmO4K0Ew6Waz%2B09Rq%2BHVB%2F6K67XLZ6CXOvruaIphARD3oT7az60bzu%2BP6DqJ7K2HBwBwDwtEVt2PeJgh81sZSa4IShP0ZnWmklK7xL7RoD1LUCjXZzpQ4gOYXPl7XGAmE%2F5Jh14oJiBZT5JKz0B8KVKY%2BsDgjF&X-Amz-Signature=90f36aa829b8ca2c54412ce5bb7f5d30988a77af3621305a56cbc10cd01e0fec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
