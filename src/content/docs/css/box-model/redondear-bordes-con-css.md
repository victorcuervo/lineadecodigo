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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOCPD5LK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T185514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmLy9wmpwqxE6L5a73ZWoG481fbg9lUTcEIy%2FQIxNUVgIhAILG3lVkde3K5k5OPVv603oXGVr8IjgqpBoh9EurQLC1KogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwUlYQLD4WUt5BrAMUq3AMlGMsiqF793e6KXOVFrgrwZmpzeXYhqM2QFUfvFQPLh0HUXg9BSxpFqMoXVZJpugd9ariCqhopS6%2BtreL68QVjcBPTzMi218ROcLK5Bmz4rBZGLyKJHlT%2BWa81l%2F1JPILGuztDf4oqtQxue9P8ivwpk6%2Fj2B3DasJSbes%2F%2Bcp1%2BQEPXsGhvFKtYGu1tAT4gDmxjSqA0VTLWBD3ULZ5qf%2BPXdbyFxN17TSw8aWUwMrQwsx6T1hVbWIJG1M5pb0iekHKpKCzNZjs8dOa0dojxc%2B66wHnkdGTcxWlv62IlgX5Z94vLLJOPMfgTm3E4UnzWcM17%2FTRHy0duXHnegz%2Bw8oKU%2FSLIVua1cUcVoJwI%2BZOWRB8yvjgqjSkofZc6Ju0ih33hYe7sZMhUSVQ7fqUXeYStwbuFCN6mHC99Ll%2BhY2QDrRhNwqoDO6DkKsD%2B2lZtEIgfNFROMZ18iuUdzhaiNjkfMT5m26Mygo6HV35DFmBDVut4TK70g9pbKR58OMV5GXcrmjQYmCHyAuK0B4M3VbUvpRduBTLyFIFlg98rAbqCsx7BtSRz0BcR56NpvPVMVUMef%2FQIPql38JdayX0mhuc4X7YNSOX%2B1UKSKPzzLAGFNKu3dVyK8ZBD5SdvTChn4vKBjqkARnzrFpGJydUBjuwBV58HjBHBDirugMZuhk9xJun0RAUtucFzBc2lFha8hEtbuDvG3WteYe9s2OIsTp1iQNQP5Q13jV4TqeDYJVXJY5dGdJJbmO82xom6dcFY7wj7wJmL9jZL%2B70iMJBc8Hurk8H%2FZEjoAobyXqYZ3F3cuTjj5ow7QoF2dfYTj35yOCYXPKrIC86ane0kytN0pcQgBAKvrizt3zg&X-Amz-Signature=5bcc5a3daa86acf828b10c027dd2cac8ea9a9708a2f5371ed7ac80495f25338d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOCPD5LK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T185514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmLy9wmpwqxE6L5a73ZWoG481fbg9lUTcEIy%2FQIxNUVgIhAILG3lVkde3K5k5OPVv603oXGVr8IjgqpBoh9EurQLC1KogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwUlYQLD4WUt5BrAMUq3AMlGMsiqF793e6KXOVFrgrwZmpzeXYhqM2QFUfvFQPLh0HUXg9BSxpFqMoXVZJpugd9ariCqhopS6%2BtreL68QVjcBPTzMi218ROcLK5Bmz4rBZGLyKJHlT%2BWa81l%2F1JPILGuztDf4oqtQxue9P8ivwpk6%2Fj2B3DasJSbes%2F%2Bcp1%2BQEPXsGhvFKtYGu1tAT4gDmxjSqA0VTLWBD3ULZ5qf%2BPXdbyFxN17TSw8aWUwMrQwsx6T1hVbWIJG1M5pb0iekHKpKCzNZjs8dOa0dojxc%2B66wHnkdGTcxWlv62IlgX5Z94vLLJOPMfgTm3E4UnzWcM17%2FTRHy0duXHnegz%2Bw8oKU%2FSLIVua1cUcVoJwI%2BZOWRB8yvjgqjSkofZc6Ju0ih33hYe7sZMhUSVQ7fqUXeYStwbuFCN6mHC99Ll%2BhY2QDrRhNwqoDO6DkKsD%2B2lZtEIgfNFROMZ18iuUdzhaiNjkfMT5m26Mygo6HV35DFmBDVut4TK70g9pbKR58OMV5GXcrmjQYmCHyAuK0B4M3VbUvpRduBTLyFIFlg98rAbqCsx7BtSRz0BcR56NpvPVMVUMef%2FQIPql38JdayX0mhuc4X7YNSOX%2B1UKSKPzzLAGFNKu3dVyK8ZBD5SdvTChn4vKBjqkARnzrFpGJydUBjuwBV58HjBHBDirugMZuhk9xJun0RAUtucFzBc2lFha8hEtbuDvG3WteYe9s2OIsTp1iQNQP5Q13jV4TqeDYJVXJY5dGdJJbmO82xom6dcFY7wj7wJmL9jZL%2B70iMJBc8Hurk8H%2FZEjoAobyXqYZ3F3cuTjj5ow7QoF2dfYTj35yOCYXPKrIC86ane0kytN0pcQgBAKvrizt3zg&X-Amz-Signature=0cb3815ca79718651c6bfab6e674902bc74877e81d3374efaddf2ff7c93a2b02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
