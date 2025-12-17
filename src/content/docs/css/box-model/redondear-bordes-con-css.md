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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFZD7AC3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T210924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCeoYrnLfetTO%2BdoPXS4Cgcvfo3TVIeO1%2BUJFKYcNNa0gIhAPc%2BOKGEX8HieJZTy%2FoK9R9%2Bmyq8s9O4Hgj0P6cCfVucKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxNgOe0eTuFxMViUWgq3ANwuxspoKKt%2BYi4zRAwDZlJk8Jc8N8eaoyHqWW0J72yVkLl%2FCGXObXmmsCIoOWLF3R9V8BL9epuOH1VUbKyBzobcDcJsq9zcjLq05rVCVdxAi0GB465BLVMBfFx%2BugJ8OXBfBTMt2UHmmT3ywyMxIC%2BpQ0FilS1qKfAMP3FQTjAXe2gJ8OFAn4qGbI58xxic5NXm0MPWm7LK8GauKwzK%2FBt7%2BnDecaYNU4kZg5uchn3h1uxI0SvFN1BV7zOI6yqSubiIdgOh4l7ceo3nABAdBoGIXKkbF4I1I3XGMwRAWOSL5jeYwLavTAUtk4QAhErzm%2FaeUuqKSTfFAc%2BtSTPEwJ3hT2vIP4fY7lUYSnMofT4ondgSqasAO80akV6k28etvBLFAlbxBOJvuEidF9Lpn%2B0ZbMPa1%2FVm%2FurXR6rdHyZDLBexrudhae3qTdmq25tntm9io8t2yBnrQToGKT%2Bxuhsr9jP%2FHtL6I%2BRKhDVl%2BHVUyuM7jsVEyfSyKy3LYwyKpQtD8gNVe%2BWcGScxX1NqLEWhzj3YfQkiGdixN5cZBhqKhqG9E%2B4gax9W21EjxKE2GE8WU7xBH6xMISABCS%2BH5t4em%2BlAdk6gRQnx3jtE%2F5fHdFUKdQhPyFnjil6DjDnrYzKBjqkAbH8vqvNOBnd%2Fhfi6R1%2Bc3vIRatqTHOXTXLGvVrEi6a6LHQHv6XTHJ5L1cNoo2adcccC3uHKyCUAfgK45jj6lW7TktVAku9zi4E6ZH7a9eKOibGjSKw%2B5yKWHyCcb6qJFXwd1AuSh3QkhFqYXz2yoKDL24EaGZ%2BBh4a2JA%2B%2BIZND3Jvp7HdCr7OSgGjWmI%2FQlt2oDvqCnxfpvXCB8HRShVA4GGNg&X-Amz-Signature=ecbe2e9877f0feaeee6d2b64ddf89b80cd227fceba7f35eb82d92a9395f5e838&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFZD7AC3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T210924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCeoYrnLfetTO%2BdoPXS4Cgcvfo3TVIeO1%2BUJFKYcNNa0gIhAPc%2BOKGEX8HieJZTy%2FoK9R9%2Bmyq8s9O4Hgj0P6cCfVucKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxNgOe0eTuFxMViUWgq3ANwuxspoKKt%2BYi4zRAwDZlJk8Jc8N8eaoyHqWW0J72yVkLl%2FCGXObXmmsCIoOWLF3R9V8BL9epuOH1VUbKyBzobcDcJsq9zcjLq05rVCVdxAi0GB465BLVMBfFx%2BugJ8OXBfBTMt2UHmmT3ywyMxIC%2BpQ0FilS1qKfAMP3FQTjAXe2gJ8OFAn4qGbI58xxic5NXm0MPWm7LK8GauKwzK%2FBt7%2BnDecaYNU4kZg5uchn3h1uxI0SvFN1BV7zOI6yqSubiIdgOh4l7ceo3nABAdBoGIXKkbF4I1I3XGMwRAWOSL5jeYwLavTAUtk4QAhErzm%2FaeUuqKSTfFAc%2BtSTPEwJ3hT2vIP4fY7lUYSnMofT4ondgSqasAO80akV6k28etvBLFAlbxBOJvuEidF9Lpn%2B0ZbMPa1%2FVm%2FurXR6rdHyZDLBexrudhae3qTdmq25tntm9io8t2yBnrQToGKT%2Bxuhsr9jP%2FHtL6I%2BRKhDVl%2BHVUyuM7jsVEyfSyKy3LYwyKpQtD8gNVe%2BWcGScxX1NqLEWhzj3YfQkiGdixN5cZBhqKhqG9E%2B4gax9W21EjxKE2GE8WU7xBH6xMISABCS%2BH5t4em%2BlAdk6gRQnx3jtE%2F5fHdFUKdQhPyFnjil6DjDnrYzKBjqkAbH8vqvNOBnd%2Fhfi6R1%2Bc3vIRatqTHOXTXLGvVrEi6a6LHQHv6XTHJ5L1cNoo2adcccC3uHKyCUAfgK45jj6lW7TktVAku9zi4E6ZH7a9eKOibGjSKw%2B5yKWHyCcb6qJFXwd1AuSh3QkhFqYXz2yoKDL24EaGZ%2BBh4a2JA%2B%2BIZND3Jvp7HdCr7OSgGjWmI%2FQlt2oDvqCnxfpvXCB8HRShVA4GGNg&X-Amz-Signature=cee757875fe14229449f355384d3960253b630034dbe47fe08b4b9efa9c42160&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
