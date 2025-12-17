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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCNOIUZV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T122710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAYGKfs2QB6ETxBunDrP28ChyLzXzWHzwGQLt58f5%2FC9AiA9UX%2FV0z9M%2F6sdaqCPTFxy2wmHTDiMGUoJw8eo%2B5k9eCr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMkvr6WzSrdu25c8e%2BKtwDta3Ne8%2F8EqUDMI0rBxIAfFrpwB%2BKQQvb0yPz%2Fc9z3%2FgXrcR4LlXGArPj9xqTsBwrecbzjQ1gYGPM%2BsCI%2B67P8%2FN8sUBd32gCNQ%2FF1DqQXBm1tlWb0Wl84C2Zc7p0muiJfachIbNy%2BsbXWpj2UYaEI6I%2FyC%2BTuLzwVC6D32DKdXkWgvg7esfKZI%2FNsPnAgoeWl6gWvaCgeD7cyHkQm8zHVxWOfE3voKOCspwuGr3KUjmivxnnYSkuuTKQZ7fxHqULPtI2TSAuXg3Wn3fHcoRTXjcJ6Di%2Bl1HHfVqEgYin75TVv8C1KoBV78RJt9AxW5FNzctRizJpoMfVZbQyaD1J4wdDcpEDTmG9xguwKD10pcu5nZHyjopPyYTTvhDb2RZD5epmUW17WKisWJhpeYHRx2wvRSmDHW9pKoNBxUQQbFTUZeKex5NXezUYspgMSkz4TzJV76irgPgSkMb%2F9I%2B7wWirqdPk3HieWQFtXCswaasmzjC58TgdQWdzWqvOooXnBiQPf7%2BzgVlrOnyJAHwW10BkIzBZeqq6C%2BqaPS%2B7a0zr1NjxPlXXVG4UXWiNxZ1L2vNQpT62kFd8pymL41ODDMdFeFZeltYNqzgqR50MQEgrLL8isQegUn%2BJPYwwr6qKygY6pgHviPHo2RVpoPr3UtnEmvXwnlujodhHGHtBmkgxesU3%2FWAQFAMoZBfX7VmaEnxvinls3erth2TrZG%2Fu9NZNzMwSrIXCjIlfC2i6ecuTyE3u%2F96BlVH0E9v77VCZN8rlGSWxgJfbHqyxumjoWef4bNYBj40vHuohQIV4ipVVXv9m8LtD1OLF7y7bn9kZ48l1uzFPvq0uE4n%2BG5Zk9kSW5NMoU8vhTRSs&X-Amz-Signature=1cd3094c6ebab4bfecf5d36184b6d2a857fe442fb62f4bad112a7e8a36abf63c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCNOIUZV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T122710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAYGKfs2QB6ETxBunDrP28ChyLzXzWHzwGQLt58f5%2FC9AiA9UX%2FV0z9M%2F6sdaqCPTFxy2wmHTDiMGUoJw8eo%2B5k9eCr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMkvr6WzSrdu25c8e%2BKtwDta3Ne8%2F8EqUDMI0rBxIAfFrpwB%2BKQQvb0yPz%2Fc9z3%2FgXrcR4LlXGArPj9xqTsBwrecbzjQ1gYGPM%2BsCI%2B67P8%2FN8sUBd32gCNQ%2FF1DqQXBm1tlWb0Wl84C2Zc7p0muiJfachIbNy%2BsbXWpj2UYaEI6I%2FyC%2BTuLzwVC6D32DKdXkWgvg7esfKZI%2FNsPnAgoeWl6gWvaCgeD7cyHkQm8zHVxWOfE3voKOCspwuGr3KUjmivxnnYSkuuTKQZ7fxHqULPtI2TSAuXg3Wn3fHcoRTXjcJ6Di%2Bl1HHfVqEgYin75TVv8C1KoBV78RJt9AxW5FNzctRizJpoMfVZbQyaD1J4wdDcpEDTmG9xguwKD10pcu5nZHyjopPyYTTvhDb2RZD5epmUW17WKisWJhpeYHRx2wvRSmDHW9pKoNBxUQQbFTUZeKex5NXezUYspgMSkz4TzJV76irgPgSkMb%2F9I%2B7wWirqdPk3HieWQFtXCswaasmzjC58TgdQWdzWqvOooXnBiQPf7%2BzgVlrOnyJAHwW10BkIzBZeqq6C%2BqaPS%2B7a0zr1NjxPlXXVG4UXWiNxZ1L2vNQpT62kFd8pymL41ODDMdFeFZeltYNqzgqR50MQEgrLL8isQegUn%2BJPYwwr6qKygY6pgHviPHo2RVpoPr3UtnEmvXwnlujodhHGHtBmkgxesU3%2FWAQFAMoZBfX7VmaEnxvinls3erth2TrZG%2Fu9NZNzMwSrIXCjIlfC2i6ecuTyE3u%2F96BlVH0E9v77VCZN8rlGSWxgJfbHqyxumjoWef4bNYBj40vHuohQIV4ipVVXv9m8LtD1OLF7y7bn9kZ48l1uzFPvq0uE4n%2BG5Zk9kSW5NMoU8vhTRSs&X-Amz-Signature=541f777ea9ac6740eea982c56c81e7f1feaeb9bde63bbe432d10c6ee4e4972b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
