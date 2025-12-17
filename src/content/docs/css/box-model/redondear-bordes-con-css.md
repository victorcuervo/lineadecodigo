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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFFE2MS2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T013755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCF6cRI1RdGmF4J6gnkIlJYZF1M7t3fvftlXo6DnrSwvQIhAKQNCGK7AaA1x4PxsSCQ1pSKo7MWva8mARI1yhQRhzqzKv8DCHIQABoMNjM3NDIzMTgzODA1IgxHV4AzktgAXmS9PQMq3ANtxPkZcdXGMmSXaWJW6vpONKbZGVwsdZOXRCSSI3Qur9mck4rsnG9qqpRbxosI%2FHqvGjuV%2FJODsJR4Spo8MevIB7aG0Xuwj4sxYfOyOLAIHBI3S1y6xl%2Bt3m3pv0THeCxdd8Q9hYif1yoHsw1ngIO%2Bug7EtQlgwJ%2BbbT9nCKQr7%2BnJe14KEJ44SGXV8D2D9ucAvI1RoSHheBBsA0o%2FGrBCAU%2FFmkF%2Fv%2BsSSCtqRnOoCiTXU8S4HtN9Npvj2IyYWMpIxCg8H1lpSnn2B3YSJnZzLS3t3YL7QE0%2FTu1b%2BHQcDR7KVWfCLoQ9um2h9C86UxcHCqkFLB3vsNQhyogWsBuj%2BueSZ2ZYwAqxnQRXB7wcx82P74xxAtuevoE7h6kgkzPgAxe91NNep8cTlTWh%2FdD7KhEcn8JefscBgOPOdo3KayvLbigymYty78m6WgtOZPmkypITi92eZ3IiBKrIR1ElItx9a7HeANxeVSJLCR6MC0tLYOuiAj2wnU0s2fYpYXoKuPA%2BviDsd4fgWs9qQaxfiRsB6jM2aNC1%2Bt4JFXnPXEFsVoIy8Xl4mkiRw7DKsvDlmrNZ97ASa%2FJNB9RpoLUB35ungVOp66dUXO0237tW90IXXNZUUbqXE2DVHDDX%2B4fKBjqkAei9N%2FjjejCC8FmPIp%2F7JUXLiBr7EayX%2BC0ugbObEhrVFWir9v5sEea2WBeRd%2FBze%2FdKI%2FE0YqyeRWmxEV03Zv0iqApPjgbllrc1%2FBZ4gtmtD%2F5XffT5Y9GOyPCyO3vrzXJ2xzqskIT3DtvEuJ74T3MVFnqeX06DwFLyaCM2cWd1Hz8Zl3sdzjyMnMJUwDk1hGkBBA34QAp%2BPQn4XqpA96W6%2FvfC&X-Amz-Signature=e498aafbb6f75a4521daf46d775b1bcec74229f3fc6061403064661f505b69dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFFE2MS2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T013755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCF6cRI1RdGmF4J6gnkIlJYZF1M7t3fvftlXo6DnrSwvQIhAKQNCGK7AaA1x4PxsSCQ1pSKo7MWva8mARI1yhQRhzqzKv8DCHIQABoMNjM3NDIzMTgzODA1IgxHV4AzktgAXmS9PQMq3ANtxPkZcdXGMmSXaWJW6vpONKbZGVwsdZOXRCSSI3Qur9mck4rsnG9qqpRbxosI%2FHqvGjuV%2FJODsJR4Spo8MevIB7aG0Xuwj4sxYfOyOLAIHBI3S1y6xl%2Bt3m3pv0THeCxdd8Q9hYif1yoHsw1ngIO%2Bug7EtQlgwJ%2BbbT9nCKQr7%2BnJe14KEJ44SGXV8D2D9ucAvI1RoSHheBBsA0o%2FGrBCAU%2FFmkF%2Fv%2BsSSCtqRnOoCiTXU8S4HtN9Npvj2IyYWMpIxCg8H1lpSnn2B3YSJnZzLS3t3YL7QE0%2FTu1b%2BHQcDR7KVWfCLoQ9um2h9C86UxcHCqkFLB3vsNQhyogWsBuj%2BueSZ2ZYwAqxnQRXB7wcx82P74xxAtuevoE7h6kgkzPgAxe91NNep8cTlTWh%2FdD7KhEcn8JefscBgOPOdo3KayvLbigymYty78m6WgtOZPmkypITi92eZ3IiBKrIR1ElItx9a7HeANxeVSJLCR6MC0tLYOuiAj2wnU0s2fYpYXoKuPA%2BviDsd4fgWs9qQaxfiRsB6jM2aNC1%2Bt4JFXnPXEFsVoIy8Xl4mkiRw7DKsvDlmrNZ97ASa%2FJNB9RpoLUB35ungVOp66dUXO0237tW90IXXNZUUbqXE2DVHDDX%2B4fKBjqkAei9N%2FjjejCC8FmPIp%2F7JUXLiBr7EayX%2BC0ugbObEhrVFWir9v5sEea2WBeRd%2FBze%2FdKI%2FE0YqyeRWmxEV03Zv0iqApPjgbllrc1%2FBZ4gtmtD%2F5XffT5Y9GOyPCyO3vrzXJ2xzqskIT3DtvEuJ74T3MVFnqeX06DwFLyaCM2cWd1Hz8Zl3sdzjyMnMJUwDk1hGkBBA34QAp%2BPQn4XqpA96W6%2FvfC&X-Amz-Signature=eb127de53e613fbf2536fe416e63911292bd2220f65b24492b24acb9c86f6c82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
