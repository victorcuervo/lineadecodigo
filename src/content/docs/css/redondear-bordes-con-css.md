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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7EZ7O6H%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T083300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG9hzbi2NerDlM3tD1LZk2utn130ZQQN%2BK1BGuW5yizuAiEAxDJsP3Q9oEdri%2FiBqfcWhaKk%2BBzy31gcGh19ngudjy0q%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDBjPLiYb3VaHrfOhAyrcA11UfSiUxCBimBa2iCdokMTQEwbESA3i9KwjT1crLRlbcNL35S9kgz%2FgGQGLM5EG0nUTxFTm9gLHH07pQ%2FwcFw4%2F6s08jCKIcftGn2mCJdqEb1ThvCHcAqy4UiX%2FU4CJaKNaznXNsVFB6P5Fp3LKROmdiwNiX4owWQXAV7buvuxjKU%2Bv57xOZExJlfqdfCw1PkhZEWWaCJWlxsmPyrP%2F6bHCM10f4ozlU8dWDFHvJyHJDFJZMO9BuTlvF%2BmC5K6BB007Hbn3lqmYTvFUtAgFnyAoR93b3C3QDyRnyRDch0iGT5ICO1tenxQz95hKx4tBKA%2BRZYOQYsysS9gAba18%2BFXQ9vv%2FuBLBMB%2BdNfY2psbuSzSB3gYq7CZI6IJn5ADfYsjfhJAfiqzlr6YQbudi1FwBJZxBJWFrCApraFKyQxUtg1DJzlWU%2BdLMoiyBHy0333jtNUtQ%2Bb4%2FnDKGE9TQUQVJfxGbwcX6GKHaf8RJZC3A3jiClsBIzcOEWMQajUkZSjf3uKr2y4G72V%2FfHe%2FVGUd91TT%2FqdmlePM%2B3u%2BIPCbLyjhuRzwiDy4VSBlHmAre0bMXhzNxjs08MhhB0kh8aWj1UF28sAjUiXQcj0d424TbMDQmXMJaUp0kWjW5MOSyyckGOqUBsPci23IssCmeB7D4h8XTa3dSTjhmhW05Iot5TjKSttMpFNyu0W%2FPsOKP6vJUjOb7Szvdvy3q%2B50eQgH9baUWj5sknaVAiCv7137bQqFJJl1UjuD33EoGD8%2Bpf1OruP9wPW0w6NUajMLhb6ijYZ36D0ELpBpy%2BowCpC4unGiRX91KfhJJ9sRdcr6IflwQLNUMhrXa%2BeazoKQgu5xK4ef2zLsdePV4&X-Amz-Signature=de41995ac6bf0d3f72dbfe2a88daa06bc1c83594d550ffa9c7aea7956f170f3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7EZ7O6H%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T083300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG9hzbi2NerDlM3tD1LZk2utn130ZQQN%2BK1BGuW5yizuAiEAxDJsP3Q9oEdri%2FiBqfcWhaKk%2BBzy31gcGh19ngudjy0q%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDBjPLiYb3VaHrfOhAyrcA11UfSiUxCBimBa2iCdokMTQEwbESA3i9KwjT1crLRlbcNL35S9kgz%2FgGQGLM5EG0nUTxFTm9gLHH07pQ%2FwcFw4%2F6s08jCKIcftGn2mCJdqEb1ThvCHcAqy4UiX%2FU4CJaKNaznXNsVFB6P5Fp3LKROmdiwNiX4owWQXAV7buvuxjKU%2Bv57xOZExJlfqdfCw1PkhZEWWaCJWlxsmPyrP%2F6bHCM10f4ozlU8dWDFHvJyHJDFJZMO9BuTlvF%2BmC5K6BB007Hbn3lqmYTvFUtAgFnyAoR93b3C3QDyRnyRDch0iGT5ICO1tenxQz95hKx4tBKA%2BRZYOQYsysS9gAba18%2BFXQ9vv%2FuBLBMB%2BdNfY2psbuSzSB3gYq7CZI6IJn5ADfYsjfhJAfiqzlr6YQbudi1FwBJZxBJWFrCApraFKyQxUtg1DJzlWU%2BdLMoiyBHy0333jtNUtQ%2Bb4%2FnDKGE9TQUQVJfxGbwcX6GKHaf8RJZC3A3jiClsBIzcOEWMQajUkZSjf3uKr2y4G72V%2FfHe%2FVGUd91TT%2FqdmlePM%2B3u%2BIPCbLyjhuRzwiDy4VSBlHmAre0bMXhzNxjs08MhhB0kh8aWj1UF28sAjUiXQcj0d424TbMDQmXMJaUp0kWjW5MOSyyckGOqUBsPci23IssCmeB7D4h8XTa3dSTjhmhW05Iot5TjKSttMpFNyu0W%2FPsOKP6vJUjOb7Szvdvy3q%2B50eQgH9baUWj5sknaVAiCv7137bQqFJJl1UjuD33EoGD8%2Bpf1OruP9wPW0w6NUajMLhb6ijYZ36D0ELpBpy%2BowCpC4unGiRX91KfhJJ9sRdcr6IflwQLNUMhrXa%2BeazoKQgu5xK4ef2zLsdePV4&X-Amz-Signature=a3337666f76e0d64d8840d2105db538f9dc63c8adce16e8f5babac1759ff062c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
