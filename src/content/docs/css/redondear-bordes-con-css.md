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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBAFGQGD%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T143148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIALjhMGPqlDhy1DWzC4LkYiaUj8o87KUNlEh8AYHu%2BDEAiA4dqS9nl3%2BPAKYR6GA%2BUpJgrqpOcagd3KwfLg35Y%2B%2BdyqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUb4lLBBsW3TAnq5MKtwDlc2oXl7V9ga1u86yB2qzFBYio1H4DHZPM4f%2FubN4SY%2BXS%2BqiyMfK6J1w8yxpWlPk%2Bs3QteRKIhrNkk4n5Wmyf0OgDORkr3N8TMw2P2QjLyPUNdEW%2B%2F%2Fru2VHfdMco4tTUzTx9aQyPASakYUlF9SoYg6IRDOuzxYoN%2BZRozukGj%2BSBoBPr9K8A0YvpzeBWfNl7MVEYOl8QA6W%2BOoP7TQiq3O3bvfMdfs%2B6RSPWq%2F1HQWv4X1N7VYtIUn3997pg0wXe6ttSrD7mcqgcQ0%2BnzXgfU7GxoqCzzgNnCbTEi29ZEfoE%2FniHDDx1tlyhKD7nnQ%2FDhi0MXM0IG%2F1xmOZDjAMuTO0LE3kKsPc8Z%2BikNUqUXV%2Fwaph9T0s02oLZ4kWGCwGSFH2bZJNKo6AXEVwqr5o%2Bm2kyG%2FSVbkiszmEt%2BmHXoKwhO4oJNd31JorwfGuN1IxPWrFTPFt2HxVjQwxXK2FBHUZBksrRGg3fZP0i7wLlTyjgTxaex4IHHN4zSI3dMYBdDyWdz22atIFhpCVdDnUAgrzyUaJZp6Cn6rN0OgQJdIWwQPfIxKKSZ%2FLp%2Fj5VIDyVGJdGh1%2BDfCNBsGF2ot4cZifLBX7Tvxaf82vueWM6KMAMM%2B9alaf770jOJswyI%2FbyQY6pgFkX9n8BKjh6e%2BqvTWHbVYNPLhjhFNn610Z4MIfh7V07nP3XfEG%2BmzYfIPfpbUCjv2VPdhk%2BFmJDsxktGT2tnnwWlWmIkNPpGbFrNrT%2FwCUihXaO%2F1r6nNkx%2BHF8l%2BpGkXKpKpDbuP77zFb29w%2BNaIhKgnmG%2Biwnc0BN%2B%2Bu0Wt7ZwBHPolS1SV8y0452WyQSCVC9Y4H%2BhvQL3KBMp83p33Z5OEHezV%2B&X-Amz-Signature=3e3cd7cea492ea39840df149a8ed1957c4c07e46c12a8f1d9e299f5352dabf64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBAFGQGD%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T143148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIALjhMGPqlDhy1DWzC4LkYiaUj8o87KUNlEh8AYHu%2BDEAiA4dqS9nl3%2BPAKYR6GA%2BUpJgrqpOcagd3KwfLg35Y%2B%2BdyqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUb4lLBBsW3TAnq5MKtwDlc2oXl7V9ga1u86yB2qzFBYio1H4DHZPM4f%2FubN4SY%2BXS%2BqiyMfK6J1w8yxpWlPk%2Bs3QteRKIhrNkk4n5Wmyf0OgDORkr3N8TMw2P2QjLyPUNdEW%2B%2F%2Fru2VHfdMco4tTUzTx9aQyPASakYUlF9SoYg6IRDOuzxYoN%2BZRozukGj%2BSBoBPr9K8A0YvpzeBWfNl7MVEYOl8QA6W%2BOoP7TQiq3O3bvfMdfs%2B6RSPWq%2F1HQWv4X1N7VYtIUn3997pg0wXe6ttSrD7mcqgcQ0%2BnzXgfU7GxoqCzzgNnCbTEi29ZEfoE%2FniHDDx1tlyhKD7nnQ%2FDhi0MXM0IG%2F1xmOZDjAMuTO0LE3kKsPc8Z%2BikNUqUXV%2Fwaph9T0s02oLZ4kWGCwGSFH2bZJNKo6AXEVwqr5o%2Bm2kyG%2FSVbkiszmEt%2BmHXoKwhO4oJNd31JorwfGuN1IxPWrFTPFt2HxVjQwxXK2FBHUZBksrRGg3fZP0i7wLlTyjgTxaex4IHHN4zSI3dMYBdDyWdz22atIFhpCVdDnUAgrzyUaJZp6Cn6rN0OgQJdIWwQPfIxKKSZ%2FLp%2Fj5VIDyVGJdGh1%2BDfCNBsGF2ot4cZifLBX7Tvxaf82vueWM6KMAMM%2B9alaf770jOJswyI%2FbyQY6pgFkX9n8BKjh6e%2BqvTWHbVYNPLhjhFNn610Z4MIfh7V07nP3XfEG%2BmzYfIPfpbUCjv2VPdhk%2BFmJDsxktGT2tnnwWlWmIkNPpGbFrNrT%2FwCUihXaO%2F1r6nNkx%2BHF8l%2BpGkXKpKpDbuP77zFb29w%2BNaIhKgnmG%2Biwnc0BN%2B%2Bu0Wt7ZwBHPolS1SV8y0452WyQSCVC9Y4H%2BhvQL3KBMp83p33Z5OEHezV%2B&X-Amz-Signature=ccfc9d3cfc07e9cdf147b70e89dfdf317f685bb3d32ec6344ff5536c41563c4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
