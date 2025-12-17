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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDYP7W5F%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T133857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCc%2FCXlpt91KRz92yWkbUAk%2FQc4cPVUed3jT0qkETqZGAIhAOlWb8%2FjF%2BPOzdSbVTrmbiaGiDZqWrVWM70u05clDmS%2BKv8DCH8QABoMNjM3NDIzMTgzODA1IgyIbPLTeD83SrGv3iwq3APpDEzwf23UsUiJ8jwjqsMuRmsDsykle5v4qbqxJAq1XCp08g85XO0hYh0DfCLubmW%2FAy3PiDJ9dIM1AkK3dxF6FV%2FGaWwslZGKygefxy6J12YdrHTMFQUamZY%2B5YIQGdVJadTOYkZSSSGvz2Hdte2AW%2B4uzOO3p5Q%2Fsk6iH1p0SgkAODJGprPQyAmRT2%2FVpoLBj6Ewpssh10pn6ONH3jVfSae33nC1TJXJlE%2FoibbanSKcQHC3QvIXa%2BgE4hVzrg44oK2GVczY9o%2FSeeaQ0Q8pNN47hq4RbpnKWna9sh9QWVmKBXtx2GrBqKk9PxQ7iuTc8AOPBBU%2FOibNpTCHeP%2BJfzCPYizGY6SOhPC8Wd%2FGtopmZEMT6vIHNpBY%2FtDhzFx7hYPzxIavZpSJSNOU3WdMbRrOkYMCBu2vLdUXHSy5XE6lom7RjM3rnWZGRYe7KeE5OZA1c24eBnE5MKjWlq6voItxTYtdK%2FwR%2BzxQXh5qvBTme8KcGx7SuZlGLtfJzjdpee97kMXWv8ZlPkEK7mjnwKNMOryA%2BMgNlsRVlPGE2K%2Fh%2BrFyFOcf5FZcJ1Sy5t0rOIMRdIpf5t1NhLyNQA6C9h%2BMWEyRqJIaUcJ8Alj6FiPnOuSH9d1JB3dCHzDy4YrKBjqkAaAU2HuL5%2F%2BJ7Dsi7orj0pukHwxZnPaagi%2Brph5mByvGxjtiXL0QQwZSfTbGxBxEgN9NjrUailv2JUtXNKfaLHSIymDDJ5lvEwTZVpXy8NnEqZW%2FsLpGPoM8Il51XUlXFdl72ohGRmfmYu8P93y5nFeN1DTeogpqeIy1%2BjowCq9i7QcgYoLdGAXxbScDdhsskPIDDKqFiCqW5JY%2B880hpkkDvSIt&X-Amz-Signature=9ac355ad1f0f9e6b1d8b06fe0a82fac4df91ee0a81b6a8478b385f4a67376f43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDYP7W5F%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T133857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCc%2FCXlpt91KRz92yWkbUAk%2FQc4cPVUed3jT0qkETqZGAIhAOlWb8%2FjF%2BPOzdSbVTrmbiaGiDZqWrVWM70u05clDmS%2BKv8DCH8QABoMNjM3NDIzMTgzODA1IgyIbPLTeD83SrGv3iwq3APpDEzwf23UsUiJ8jwjqsMuRmsDsykle5v4qbqxJAq1XCp08g85XO0hYh0DfCLubmW%2FAy3PiDJ9dIM1AkK3dxF6FV%2FGaWwslZGKygefxy6J12YdrHTMFQUamZY%2B5YIQGdVJadTOYkZSSSGvz2Hdte2AW%2B4uzOO3p5Q%2Fsk6iH1p0SgkAODJGprPQyAmRT2%2FVpoLBj6Ewpssh10pn6ONH3jVfSae33nC1TJXJlE%2FoibbanSKcQHC3QvIXa%2BgE4hVzrg44oK2GVczY9o%2FSeeaQ0Q8pNN47hq4RbpnKWna9sh9QWVmKBXtx2GrBqKk9PxQ7iuTc8AOPBBU%2FOibNpTCHeP%2BJfzCPYizGY6SOhPC8Wd%2FGtopmZEMT6vIHNpBY%2FtDhzFx7hYPzxIavZpSJSNOU3WdMbRrOkYMCBu2vLdUXHSy5XE6lom7RjM3rnWZGRYe7KeE5OZA1c24eBnE5MKjWlq6voItxTYtdK%2FwR%2BzxQXh5qvBTme8KcGx7SuZlGLtfJzjdpee97kMXWv8ZlPkEK7mjnwKNMOryA%2BMgNlsRVlPGE2K%2Fh%2BrFyFOcf5FZcJ1Sy5t0rOIMRdIpf5t1NhLyNQA6C9h%2BMWEyRqJIaUcJ8Alj6FiPnOuSH9d1JB3dCHzDy4YrKBjqkAaAU2HuL5%2F%2BJ7Dsi7orj0pukHwxZnPaagi%2Brph5mByvGxjtiXL0QQwZSfTbGxBxEgN9NjrUailv2JUtXNKfaLHSIymDDJ5lvEwTZVpXy8NnEqZW%2FsLpGPoM8Il51XUlXFdl72ohGRmfmYu8P93y5nFeN1DTeogpqeIy1%2BjowCq9i7QcgYoLdGAXxbScDdhsskPIDDKqFiCqW5JY%2B880hpkkDvSIt&X-Amz-Signature=85bec25389dcc614032262f050246d37a96340073dca4c5788a6230b045a796c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
