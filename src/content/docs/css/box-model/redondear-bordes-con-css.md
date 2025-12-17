---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2025-12-17
slug: css/redondear-bordes-con-css
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4XPT4DU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T093932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIQCy2zjoYnp3kkVwyb%2BYzAo7MPQIPw04F8tYEzAlXpg0ggIfeZ1ClY0Vc82z7ZSW%2F5PC%2Fq1mOS92eaBg1nErflT%2Bhyr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMPs%2BWoOaYuKGLCECcKtwDJwrCeewYaXSEb%2FmGi3C4WF2g%2BoHdq6tpzHVZJ1u53g7fhhpM%2FYFOAQBs1%2F4FfC6RjySRP9gL6cfsp8RFJXUiP2Rqm7XjdAJUr4aytO08tpZK8zcXj2KH6F4OgJAjGIHLKO2eNf%2FhFCbRqI5H1Yn1%2FJjq40jSGwiq6Q0vcBFFwzb4CsJpLUhP9hPm25sp0gCfmsr1QWmprGklWb8uDasYHiy9oL893Bl5UQJaSPy7hfSPzh%2Bv8ABIIQsR7DkpfzPqbNXkKWNS4ZqSNzacz9iXC36sLFgNjKjyasrfRR4BeyWEpZDx%2FWt4P26kb9AzF5OR13mCrR%2BF%2BrF8SwXf9Fg%2BTTcaNLJP52L6bjzWp1l629aOpZg%2B9Saapi7okBTxETNDwZMa70mjjgBjwbuDm%2FvEeQBB1GRAIrAuHEGpcfPrspUQpWUYpQOa7xkZiBJ5VDvOHbE%2ByrL5TCdwPlSrOKQQEkzrxsnaiHUe97ZZDbSQKcfUhuYQ1nwXQIKB6MXSh%2B9c0fAZgqFCPqRO89n6D7DT%2F%2FIfgC9b3Fd7kwcT8I7DVILKS4XgV0yQXAlArxzS%2FcRJSR3vpXLFz%2FedvHF6YgeUg3BRYKQE3cPAbynfdIyu2LLW9DEB0ZPmiQmnTeYw%2BO%2BJygY6pgGtJdCBt%2Bb7mDQdDpNBqCrwuUyyeFfsa%2FQ1C9iZvPJbD5f7s37ZENJ59jqgYHWCGMBkH4VZJiAuFmqVe3%2FycYhS8rzteINHrj8ipIeDnpz8SwsFDerwoUDCM3bDBGCNtp8uSZ05UUuvIgkFoBabDEO9Tw4wHhFwifEqC0Y8g5vzYPCYAXsra43Rv71pc2CmJXhX0SiuJAFJiJx3wqUur5nPxOGu8%2BvY&X-Amz-Signature=2aad77003a1100b0ba427adda84dafe562b35c5d44d64a8d1f37f3afee6686eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4XPT4DU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T093932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIQCy2zjoYnp3kkVwyb%2BYzAo7MPQIPw04F8tYEzAlXpg0ggIfeZ1ClY0Vc82z7ZSW%2F5PC%2Fq1mOS92eaBg1nErflT%2Bhyr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMPs%2BWoOaYuKGLCECcKtwDJwrCeewYaXSEb%2FmGi3C4WF2g%2BoHdq6tpzHVZJ1u53g7fhhpM%2FYFOAQBs1%2F4FfC6RjySRP9gL6cfsp8RFJXUiP2Rqm7XjdAJUr4aytO08tpZK8zcXj2KH6F4OgJAjGIHLKO2eNf%2FhFCbRqI5H1Yn1%2FJjq40jSGwiq6Q0vcBFFwzb4CsJpLUhP9hPm25sp0gCfmsr1QWmprGklWb8uDasYHiy9oL893Bl5UQJaSPy7hfSPzh%2Bv8ABIIQsR7DkpfzPqbNXkKWNS4ZqSNzacz9iXC36sLFgNjKjyasrfRR4BeyWEpZDx%2FWt4P26kb9AzF5OR13mCrR%2BF%2BrF8SwXf9Fg%2BTTcaNLJP52L6bjzWp1l629aOpZg%2B9Saapi7okBTxETNDwZMa70mjjgBjwbuDm%2FvEeQBB1GRAIrAuHEGpcfPrspUQpWUYpQOa7xkZiBJ5VDvOHbE%2ByrL5TCdwPlSrOKQQEkzrxsnaiHUe97ZZDbSQKcfUhuYQ1nwXQIKB6MXSh%2B9c0fAZgqFCPqRO89n6D7DT%2F%2FIfgC9b3Fd7kwcT8I7DVILKS4XgV0yQXAlArxzS%2FcRJSR3vpXLFz%2FedvHF6YgeUg3BRYKQE3cPAbynfdIyu2LLW9DEB0ZPmiQmnTeYw%2BO%2BJygY6pgGtJdCBt%2Bb7mDQdDpNBqCrwuUyyeFfsa%2FQ1C9iZvPJbD5f7s37ZENJ59jqgYHWCGMBkH4VZJiAuFmqVe3%2FycYhS8rzteINHrj8ipIeDnpz8SwsFDerwoUDCM3bDBGCNtp8uSZ05UUuvIgkFoBabDEO9Tw4wHhFwifEqC0Y8g5vzYPCYAXsra43Rv71pc2CmJXhX0SiuJAFJiJx3wqUur5nPxOGu8%2BvY&X-Amz-Signature=73d12c3390c77ef3ae84a426bc7dd5fe2bc1e5d38df1ba1d800439aa98273ddf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Si queremos modificar los dos radios de todas las esquinas podemos utilizar la versión reducida de [`border-radius`](https://w3api.com/CSS/border-radius/):


```css
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


```css
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
