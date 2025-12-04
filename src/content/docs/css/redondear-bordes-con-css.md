---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LUOVV22%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T152711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIGDNMhoS1zksQWsOZpH8FkD9snumFSQd6Z7ZcHqzsGx%2BAiEAjXDzSbgvs1zJIpe6p34bFYDYkXPEZhkTKLqRozQu7mIq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDKtiL2MJXqV90d56JCrcA5UtGWy7G%2F1roakapRm6XAngmfVWqr5stgUxdQMgu7c7pRcx8%2FWHQDnbnkUsEulyb5E3GuuZJjhzw3RX0qont7Ivh%2FjgNtyU4Mk9vao2hgujFc5h%2FwipPKQXDLVnGGeyRfOM%2F1UOwNmIF%2BGhvbBRSuJoIHew%2FbfD6NXo9Ei3jP7sy5sRaU0QMz4t9cYL9uY4jPIXPpmC3asjkto33RguEKHReIe8x%2B%2Fs5szicIlX6S%2Fc5UouaVlxk5%2FZXi4jYZVxKDTt%2B2OJqFILWvx9%2FNFtzNfRt4FuC2W%2F09GWqXGsZB1zde6XuXanPChcdEtSz9z1ioX3LTSe6G9auyGbKprezJ%2BB5RWUrjZNbS5oc32Ohq5HdbrS0PrTpB54uMi%2FbGPJq4xp9VcfyFG%2BmxbY6A4jo9GGIgCmbZRBNeoaf7Sq4ZH5jz34N%2B%2B5dxCRQLAxSdmOckjPozBdBE4BZ5%2BFHx4NrTXeOissxDt2Anq1fELOwldyQBMIXO%2FLMpzmiNT3KQGiy84L723lF5WktKboonoDSD78ZDcRzrVgnWiLwDX4BU4TEaWCqJWmalVDIwH6Dhp%2FQWde2dLa0Tx9QiVIzRTtF7fmx5GLGyaD0UO2qi4YHcjxui9jET%2BbOqlAEaRuMLG%2BxskGOqUBSP31EYlCJLuayRabmfZ72bqEaO0S8HJGHuXg5by6IUkfGUFv7nIjFxhV%2F1GmvUZAq6ehCV0SvK0pHIgmUpSIuU%2B9H5LBQQlE8FpmSEnXqJE4yTFzN7gqApLj870CRDnD9iD3iVEiombbcQALzAj7%2Fvhol76vhKSEDZaCLRLlKja3At3DfsTJZh7QZ99DS7BSoFg5%2BwLmX2OvNF3o7rPyJKVr2Jjw&X-Amz-Signature=fb5cb9aee8f5bb690fb577c17088b205f897b8b0601f2f0b0b70c9a45e80a2da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LUOVV22%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T152711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIGDNMhoS1zksQWsOZpH8FkD9snumFSQd6Z7ZcHqzsGx%2BAiEAjXDzSbgvs1zJIpe6p34bFYDYkXPEZhkTKLqRozQu7mIq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDKtiL2MJXqV90d56JCrcA5UtGWy7G%2F1roakapRm6XAngmfVWqr5stgUxdQMgu7c7pRcx8%2FWHQDnbnkUsEulyb5E3GuuZJjhzw3RX0qont7Ivh%2FjgNtyU4Mk9vao2hgujFc5h%2FwipPKQXDLVnGGeyRfOM%2F1UOwNmIF%2BGhvbBRSuJoIHew%2FbfD6NXo9Ei3jP7sy5sRaU0QMz4t9cYL9uY4jPIXPpmC3asjkto33RguEKHReIe8x%2B%2Fs5szicIlX6S%2Fc5UouaVlxk5%2FZXi4jYZVxKDTt%2B2OJqFILWvx9%2FNFtzNfRt4FuC2W%2F09GWqXGsZB1zde6XuXanPChcdEtSz9z1ioX3LTSe6G9auyGbKprezJ%2BB5RWUrjZNbS5oc32Ohq5HdbrS0PrTpB54uMi%2FbGPJq4xp9VcfyFG%2BmxbY6A4jo9GGIgCmbZRBNeoaf7Sq4ZH5jz34N%2B%2B5dxCRQLAxSdmOckjPozBdBE4BZ5%2BFHx4NrTXeOissxDt2Anq1fELOwldyQBMIXO%2FLMpzmiNT3KQGiy84L723lF5WktKboonoDSD78ZDcRzrVgnWiLwDX4BU4TEaWCqJWmalVDIwH6Dhp%2FQWde2dLa0Tx9QiVIzRTtF7fmx5GLGyaD0UO2qi4YHcjxui9jET%2BbOqlAEaRuMLG%2BxskGOqUBSP31EYlCJLuayRabmfZ72bqEaO0S8HJGHuXg5by6IUkfGUFv7nIjFxhV%2F1GmvUZAq6ehCV0SvK0pHIgmUpSIuU%2B9H5LBQQlE8FpmSEnXqJE4yTFzN7gqApLj870CRDnD9iD3iVEiombbcQALzAj7%2Fvhol76vhKSEDZaCLRLlKja3At3DfsTJZh7QZ99DS7BSoFg5%2BwLmX2OvNF3o7rPyJKVr2Jjw&X-Amz-Signature=9281a41cb8093c7312c8c93f1fdc79b985c235de701587f1a6a0432dfc8a0642&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
