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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644ETZMYW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T043040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDoWzMmXi%2FmlZTpYjInhvGIzX0MaUT5fOzyZ4tG5DQmwIgKcMos1ScTt9Gw4AX5fiSauiIRUYgJBs7p8Nx9U5O8dEq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDFn46ObBXh6eC6YrJSrcA7%2BT0EqxzNwsSxaW3hc5%2BtXuc3hgJrFZ89LC127wRzRi0T3JRyQyVa19ASZUgD7kT0bZhiCAAtJZsLBjHGegayvwcAvskwsqr3IVAyD%2FnqUAjStvJFbLgPxJEMWBbMJ%2BaoebBl3o6xtzh6IDn1%2FZl0mIys%2BuD%2B3gFqsH3hrykqLC8vmCUh1CX1rfFXxcTYI11VZfFUgVDAR%2B%2FFb6eEOT7YsLoV%2BX58ULOIgponANtRNLymnltrmECUh%2B56sPfTvZTtzVLWkP3n4hUyaBJ%2BmHbp06bQqRtIB0IL5qK1AI6I73ipidQgvy%2F0%2B1nobEAIgoAKGFwW9iXLW1SQv0npChaRcOcAhhm0xO1iZVfY8KW4x4Wry%2BRmmYZ4nepm3HH%2FRjcHjAlmBhd0sfOfkl08i3BtS9E4h6VfSzmDttDNrrgHv6oGq%2F8kNYMlr%2FwuCxXV1TD7HGzKYhZp4Lqw5dHcwGz4r7k2iEZmqT2gHYel%2FCjELaW6ztap6G6VOpKqlWcnUuRV2aMisJmh3or1xM6uL0M4PhmE%2B2grThJklXc0sVmJUT9htrgMKnZ0rrHsIAWA9u5a4A%2FsUiZJFE8FidqknIZ8JYigE%2FJ9zqPg8evwcnIIvUvuiF5qZqm776SVKKMJPNiMoGOqUBSVq07WiU9u7UAcYZqH%2F%2FHv85Ye05zh201XSfxDmg%2F3IcUiPHpJ%2BxHYtKtsUB0LjHEcbh0iYcgIghxvTFQ26%2FHmGWoanwBlTIFAcuUpdd4thxtGbA19PisT5NUd42sF1s%2Fy0YpCgFNXbTzwWBPTPA6J7jpeRlk2LTFnpbJnPdCS8Brp7Gc%2FG6V9YWjgLY%2FS0QHVEUstu6uIi5s3qeUnJZ4UyIoMnC&X-Amz-Signature=35a0b9a4f450a7c474f06026ed55caebdb5fb4b82676b40b51ac7f3461d396da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644ETZMYW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T043040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDoWzMmXi%2FmlZTpYjInhvGIzX0MaUT5fOzyZ4tG5DQmwIgKcMos1ScTt9Gw4AX5fiSauiIRUYgJBs7p8Nx9U5O8dEq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDFn46ObBXh6eC6YrJSrcA7%2BT0EqxzNwsSxaW3hc5%2BtXuc3hgJrFZ89LC127wRzRi0T3JRyQyVa19ASZUgD7kT0bZhiCAAtJZsLBjHGegayvwcAvskwsqr3IVAyD%2FnqUAjStvJFbLgPxJEMWBbMJ%2BaoebBl3o6xtzh6IDn1%2FZl0mIys%2BuD%2B3gFqsH3hrykqLC8vmCUh1CX1rfFXxcTYI11VZfFUgVDAR%2B%2FFb6eEOT7YsLoV%2BX58ULOIgponANtRNLymnltrmECUh%2B56sPfTvZTtzVLWkP3n4hUyaBJ%2BmHbp06bQqRtIB0IL5qK1AI6I73ipidQgvy%2F0%2B1nobEAIgoAKGFwW9iXLW1SQv0npChaRcOcAhhm0xO1iZVfY8KW4x4Wry%2BRmmYZ4nepm3HH%2FRjcHjAlmBhd0sfOfkl08i3BtS9E4h6VfSzmDttDNrrgHv6oGq%2F8kNYMlr%2FwuCxXV1TD7HGzKYhZp4Lqw5dHcwGz4r7k2iEZmqT2gHYel%2FCjELaW6ztap6G6VOpKqlWcnUuRV2aMisJmh3or1xM6uL0M4PhmE%2B2grThJklXc0sVmJUT9htrgMKnZ0rrHsIAWA9u5a4A%2FsUiZJFE8FidqknIZ8JYigE%2FJ9zqPg8evwcnIIvUvuiF5qZqm776SVKKMJPNiMoGOqUBSVq07WiU9u7UAcYZqH%2F%2FHv85Ye05zh201XSfxDmg%2F3IcUiPHpJ%2BxHYtKtsUB0LjHEcbh0iYcgIghxvTFQ26%2FHmGWoanwBlTIFAcuUpdd4thxtGbA19PisT5NUd42sF1s%2Fy0YpCgFNXbTzwWBPTPA6J7jpeRlk2LTFnpbJnPdCS8Brp7Gc%2FG6V9YWjgLY%2FS0QHVEUstu6uIi5s3qeUnJZ4UyIoMnC&X-Amz-Signature=952ca3800b5eba0210cd6ebe3522910a1905dac04b20f040af1c36a29b5b1cbd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
