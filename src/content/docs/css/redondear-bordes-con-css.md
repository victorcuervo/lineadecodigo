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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEAYB6AK%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T071852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYqoCnXGwT07wzUDMZypGUdqzOXa04YJzCXNdJkVXz0AIgEJvZ9QQN5Dj5z5G4bOIWy1zDK6%2Fmk1DI5i5MskrKjbwqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDER%2F%2FtclEKyeyQkPqircAxZsJIBQijWpfJ%2FmZqAHCQy11cxJhZVDELZ%2BpLK7jQmPLpers%2Fn%2BJRKUjVsJzqs0Kf0Vg2qBYmypG8%2FU1Tmf4%2BrcezziXzg5LsFYZ4KX%2Fc6VGKgJt3ZrVX28nUmR7gxdVy44yZd00fr5QJlYJxrhYcN8vS9NDCtPYQtTN2mu39%2ByKWShs8eaGPC3GNx%2BINZvasxD0jLAtsL%2FIXUWsWALORR5w2I8vVX39l8yEvkVAnX0RfmoKvEAcezMeLNy59%2B2IRkEbbT4EkQ%2Bc1Wr40gYF%2F1Fpn3cZdzb89P15vTDtDbkd74XTvstr9R6yfqOdqzevQul%2Bg4RGG42aAKkCaDQj2m52InRoMWMq96aM5AJ%2Bn5mwIxlZE13xyurHVIuFfnA2NOVwo17XZt2psJVFUFMAHyaAixwv6FN6TFFuqM80F6P%2B69XI9j8sqk2Oan7SrSQehCc70UVHwGLzkaRJ%2FW3N8yOPVC885Foq4dCThENUAIwoG4SL1INxv1uzzibCcZlmAx%2FCRUjAlY0Vs10QG5eBC1RjfmUuDLkZknsmxdT%2F5eeszFgUIk4Cw7bK%2FTsoUFxkQES7w8cz44ZSuAINBztnN2PZ%2BDu3OrNxpfUZoDS5Ru7V5R2ZlF0xmHI6tPYMK%2BH38kGOqUBSXjGvHYngA4vaJWGQWOcrdD7GryvRgUdOoA8GZWpDMEcpAEHwL0dTSTfLhGVA9Y3Gs2cLBdekLbQlsDo%2B2%2BJRi%2BWkdZnQrm0uMDVJbbZebVS%2FuK2eP2axxMiXbL0u%2F%2B34MaXjoYvB8I6sI3VWbj43%2FAuywDb3D1avxeza10KcVcgt55pKFOH50cC01mn8EQSyoGVemRkK7faZTD%2F3ubnnd%2BL%2FRFk&X-Amz-Signature=8dec30295823eebcd648bb4dd07b70e21e1ac6db744efc383428454d9c1ad275&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEAYB6AK%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T071852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYqoCnXGwT07wzUDMZypGUdqzOXa04YJzCXNdJkVXz0AIgEJvZ9QQN5Dj5z5G4bOIWy1zDK6%2Fmk1DI5i5MskrKjbwqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDER%2F%2FtclEKyeyQkPqircAxZsJIBQijWpfJ%2FmZqAHCQy11cxJhZVDELZ%2BpLK7jQmPLpers%2Fn%2BJRKUjVsJzqs0Kf0Vg2qBYmypG8%2FU1Tmf4%2BrcezziXzg5LsFYZ4KX%2Fc6VGKgJt3ZrVX28nUmR7gxdVy44yZd00fr5QJlYJxrhYcN8vS9NDCtPYQtTN2mu39%2ByKWShs8eaGPC3GNx%2BINZvasxD0jLAtsL%2FIXUWsWALORR5w2I8vVX39l8yEvkVAnX0RfmoKvEAcezMeLNy59%2B2IRkEbbT4EkQ%2Bc1Wr40gYF%2F1Fpn3cZdzb89P15vTDtDbkd74XTvstr9R6yfqOdqzevQul%2Bg4RGG42aAKkCaDQj2m52InRoMWMq96aM5AJ%2Bn5mwIxlZE13xyurHVIuFfnA2NOVwo17XZt2psJVFUFMAHyaAixwv6FN6TFFuqM80F6P%2B69XI9j8sqk2Oan7SrSQehCc70UVHwGLzkaRJ%2FW3N8yOPVC885Foq4dCThENUAIwoG4SL1INxv1uzzibCcZlmAx%2FCRUjAlY0Vs10QG5eBC1RjfmUuDLkZknsmxdT%2F5eeszFgUIk4Cw7bK%2FTsoUFxkQES7w8cz44ZSuAINBztnN2PZ%2BDu3OrNxpfUZoDS5Ru7V5R2ZlF0xmHI6tPYMK%2BH38kGOqUBSXjGvHYngA4vaJWGQWOcrdD7GryvRgUdOoA8GZWpDMEcpAEHwL0dTSTfLhGVA9Y3Gs2cLBdekLbQlsDo%2B2%2BJRi%2BWkdZnQrm0uMDVJbbZebVS%2FuK2eP2axxMiXbL0u%2F%2B34MaXjoYvB8I6sI3VWbj43%2FAuywDb3D1avxeza10KcVcgt55pKFOH50cC01mn8EQSyoGVemRkK7faZTD%2F3ubnnd%2BL%2FRFk&X-Amz-Signature=6ee5756d6ffc17afe3f7f02144924bc84806518329254a5145ec372fb96a8cf6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
