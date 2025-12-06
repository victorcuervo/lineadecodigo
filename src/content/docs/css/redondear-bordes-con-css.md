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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FANQ76T%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T223442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzj72hPoZYwfp6aQi%2B8bHklWq5OMivYJ74IJ6MDtjRTAIgK3TReQ46aDtHIGRe7tLjQ9X9N1xsfHaB1HvwrleRs7wq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDASR3v4PB7qAZDW85SrcA%2BYwCscpmDISq%2F7Fd0nAeIfg8%2B0A0JexOulx6aS1ocoXEbzdHGOuKSnsZmXK0Mby6dDi94LR7n%2F9aRU998aCjs7%2Fusyn%2FLRlm6v68v%2FnH7q6SF%2B6vUG3RUm2PGuLFJclm2mcE3rYYbNVSwzhpirXnYo%2FJ2dnT%2Fu3eKQW9PSeVqMp2LJDdgrJSIB%2BYjGyY%2Bz8CyTCb4AU3UhtPNNSNKpBYi8GxYhLcSK814XQ4naEaSk92Dy5FFofvUMx7prHuBcDekLyxmCUShAaph9I4QiW6DG7Eg5GFXAsV%2BoBg%2BFRtC6SN8myXfzD82w%2FgrwWao7BZJ%2FnXIxE9IraQ3X3eIhvXmi8ESDx9EcyIjI6yirENXc4e4G7kCyHVLM%2FnZtnnT28vbXvil%2FSklk5OH9a973Hh1yDDmsldmMAQS45UbWS1evDaLdoDfaRGmup7BOZZzR0U9DGWulUtzh%2FUKGxi%2F8KRxgso1p0gZxkmYEfVhJb%2BgkRAZSoJ%2B3WpLqEud4yZX46LT3rKcBmJnYpXMFL0aKTDkgND%2B2X4hFG3rtg5eGtnIRrgkeEVXoDSv4BzB9yJ5wPykEXbqR2fXp0fgpNOcqAL4q7HQoAt4uiD6pHpTFtBeN4RTJsox3v9gLbjPc3MNPU0skGOqUBHInApwfKpcOeg0Nrt0JrjZGXE9H1slKdWGkfqHkicwXL%2FhRn4JRwcRZU7fSwhzH0bM38gZENYcqOXw%2BSpvsLRQ64ogIC0TJKmPraF%2Fn38aNFSFo1wSug%2BRVmRdp6VRvflaPZfSryv9oBtg2lrNs1Chx5wowaokyTlwn7nKRgYos4jMOSZBk2b34Ms04%2Br8RivEybBoExyXL31SZiVnaO%2FHCQrKvf&X-Amz-Signature=99d5567fbff71689256ea7575784705d83021813b9ee445a66d85593bbe7789b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FANQ76T%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T223442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzj72hPoZYwfp6aQi%2B8bHklWq5OMivYJ74IJ6MDtjRTAIgK3TReQ46aDtHIGRe7tLjQ9X9N1xsfHaB1HvwrleRs7wq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDASR3v4PB7qAZDW85SrcA%2BYwCscpmDISq%2F7Fd0nAeIfg8%2B0A0JexOulx6aS1ocoXEbzdHGOuKSnsZmXK0Mby6dDi94LR7n%2F9aRU998aCjs7%2Fusyn%2FLRlm6v68v%2FnH7q6SF%2B6vUG3RUm2PGuLFJclm2mcE3rYYbNVSwzhpirXnYo%2FJ2dnT%2Fu3eKQW9PSeVqMp2LJDdgrJSIB%2BYjGyY%2Bz8CyTCb4AU3UhtPNNSNKpBYi8GxYhLcSK814XQ4naEaSk92Dy5FFofvUMx7prHuBcDekLyxmCUShAaph9I4QiW6DG7Eg5GFXAsV%2BoBg%2BFRtC6SN8myXfzD82w%2FgrwWao7BZJ%2FnXIxE9IraQ3X3eIhvXmi8ESDx9EcyIjI6yirENXc4e4G7kCyHVLM%2FnZtnnT28vbXvil%2FSklk5OH9a973Hh1yDDmsldmMAQS45UbWS1evDaLdoDfaRGmup7BOZZzR0U9DGWulUtzh%2FUKGxi%2F8KRxgso1p0gZxkmYEfVhJb%2BgkRAZSoJ%2B3WpLqEud4yZX46LT3rKcBmJnYpXMFL0aKTDkgND%2B2X4hFG3rtg5eGtnIRrgkeEVXoDSv4BzB9yJ5wPykEXbqR2fXp0fgpNOcqAL4q7HQoAt4uiD6pHpTFtBeN4RTJsox3v9gLbjPc3MNPU0skGOqUBHInApwfKpcOeg0Nrt0JrjZGXE9H1slKdWGkfqHkicwXL%2FhRn4JRwcRZU7fSwhzH0bM38gZENYcqOXw%2BSpvsLRQ64ogIC0TJKmPraF%2Fn38aNFSFo1wSug%2BRVmRdp6VRvflaPZfSryv9oBtg2lrNs1Chx5wowaokyTlwn7nKRgYos4jMOSZBk2b34Ms04%2Br8RivEybBoExyXL31SZiVnaO%2FHCQrKvf&X-Amz-Signature=9c04667e22a363e2b6840a58fe1eb0bbde518cb4e7b302f1a8ad4ca6103ff895&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
