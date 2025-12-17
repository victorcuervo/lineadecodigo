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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVQTWR7X%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T151004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGDAc8vvDzM9RWagOXC%2BtJW9rYAgVnZ4EVNUU4JsvCG7AiEAvjQXATzi3oAk%2FEWfiFsNrzvOf0hS5JPPGSve%2BXzg%2FYYqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJtBiHA%2FsV3sLbpI1ircAzfddzty1aXbLOljQdvlGZR2jqq7dwdEihzotzL7bC1OgpFJ7Cy716XI%2FDzGWya4FZCrCf3qdFyA1%2BW%2B792kyQeIkG1TtGy%2F0DvPq0T2etKInuZqXmDRaAQ9fxM%2BB6fQsQ3%2FFKXct25oXeqrQlLoVI1a%2FDrtYNr5Ezk6ODuqd9dLOsk09PUUwVuradKPJhPefmP1xX%2FxcRMg315TkJUd1B2y89pZqLgRLdSrnvqHOBpN1dhFEtJV1OpZolVPzvY%2FfMMmVd3nljk5WZrseAIwBk%2FRT5N%2FzGi9bNzJj1MRUglLSymqfLUBqhNoT3P3qKIywByaDG5fi2ftYNUppmZ%2FsTPCYa3VG2RJ5ccm8cr%2F%2Bo%2FtXle0cAH3syBeWWlHOZ803BNg2lKddbBUN49Nr7DxkMcOWkAkUKpNPSddxbQmG6BArhIWWZLajpVkjuT9CfxgrkKUWIiiWhpU75SP5lz8RZJqRcoIA7ueFEy80XVWzdTt6aeBiWTaYvcdEa0nNW%2B6dqQsahjrVLSNxwEUjCxWpnQzIMW10AL%2FZOnSFRe5UaWGIMrydz4iy%2BXYQbqPNGiGL6MiW8y9dOfLntQcCYJZ4MGkbMKMbaLETG%2FYQ52MJ1hMPC2KByFYJlLWwLl0MPz%2FisoGOqUB12KpkO5p4xX8Q%2B4kVtHUkwVMCrFAc8GkR8J0Xc8S03H2yzRERV%2FQEvg294GcCF9ULDzmM10nBJigaV0qy%2Bwl4EFdp5ZTqOuGXRQVDDCiND%2F6AAtymJyRLtj0nKX6QOUzMTe%2F41DC%2FfLQswM22ZHdicjQeOQ2uX%2Fb6G%2FxYrG83Ult5H3JXAVO%2B2XnGOyPSCuofcGtUh8ChItYox2xJO0iFLVq1xIA&X-Amz-Signature=584b5c0f1c30ccfc1ef4e9b7310c45d5615dda5c91a26de139f4c0028466574c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVQTWR7X%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T151004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGDAc8vvDzM9RWagOXC%2BtJW9rYAgVnZ4EVNUU4JsvCG7AiEAvjQXATzi3oAk%2FEWfiFsNrzvOf0hS5JPPGSve%2BXzg%2FYYqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJtBiHA%2FsV3sLbpI1ircAzfddzty1aXbLOljQdvlGZR2jqq7dwdEihzotzL7bC1OgpFJ7Cy716XI%2FDzGWya4FZCrCf3qdFyA1%2BW%2B792kyQeIkG1TtGy%2F0DvPq0T2etKInuZqXmDRaAQ9fxM%2BB6fQsQ3%2FFKXct25oXeqrQlLoVI1a%2FDrtYNr5Ezk6ODuqd9dLOsk09PUUwVuradKPJhPefmP1xX%2FxcRMg315TkJUd1B2y89pZqLgRLdSrnvqHOBpN1dhFEtJV1OpZolVPzvY%2FfMMmVd3nljk5WZrseAIwBk%2FRT5N%2FzGi9bNzJj1MRUglLSymqfLUBqhNoT3P3qKIywByaDG5fi2ftYNUppmZ%2FsTPCYa3VG2RJ5ccm8cr%2F%2Bo%2FtXle0cAH3syBeWWlHOZ803BNg2lKddbBUN49Nr7DxkMcOWkAkUKpNPSddxbQmG6BArhIWWZLajpVkjuT9CfxgrkKUWIiiWhpU75SP5lz8RZJqRcoIA7ueFEy80XVWzdTt6aeBiWTaYvcdEa0nNW%2B6dqQsahjrVLSNxwEUjCxWpnQzIMW10AL%2FZOnSFRe5UaWGIMrydz4iy%2BXYQbqPNGiGL6MiW8y9dOfLntQcCYJZ4MGkbMKMbaLETG%2FYQ52MJ1hMPC2KByFYJlLWwLl0MPz%2FisoGOqUB12KpkO5p4xX8Q%2B4kVtHUkwVMCrFAc8GkR8J0Xc8S03H2yzRERV%2FQEvg294GcCF9ULDzmM10nBJigaV0qy%2Bwl4EFdp5ZTqOuGXRQVDDCiND%2F6AAtymJyRLtj0nKX6QOUzMTe%2F41DC%2FfLQswM22ZHdicjQeOQ2uX%2Fb6G%2FxYrG83Ult5H3JXAVO%2B2XnGOyPSCuofcGtUh8ChItYox2xJO0iFLVq1xIA&X-Amz-Signature=e91c77d99e14507516772167f5b07380896d4ec4713e6e7e210591250f21aad4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
