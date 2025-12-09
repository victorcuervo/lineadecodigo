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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6HBLHYY%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T032258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBjeur2%2F2iG%2BIqEjlLaqdxiHNzhQDczhUt%2FM2viewaUnAiEA7ArMUPg9r3k3E95txGGsqD44v4Z%2BgJw4gMN1qn1lkpgqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLoYnvPspV7KQkY7rSrcA4JQMy1TPGnCfF5fDVshv67AGLvY34ePi5uoQArUfBRLxrW0QEQ9XcGyx8TYs%2B99Cw%2BLT5yPCBvZ9BTLzH3qnZdIWIhTBOQS9q1rrbNnk%2F15wXT7Qz6Mi5jVAZtc0yRdNpOL7IByBfv6XGQUTfZkjBYm4zewfP4sGB2d4z%2F3WJ2DiuZJt58ybFyd%2Fnwg%2BmRuDkCDK2T3WV4PttM94%2BRRY4C3D8Gfh6HKN3hYSJDDBWFTgZcSFz%2FMmUzQ4R15rIXDWDXjDCtr0OspwPLZUrcjcS7uVk%2BMW2PnMcAa2nOl6NtAd7yrCPsdkoi%2BPDHWrVX1XYrymu4kA%2Fob97O1oA8Yo7nwqrbAfO8Mulrt530MfGWn4AN4epQQMrnqvMAgzuCXS6BMXdWffc32doKE8%2BojET6NtJDt4kO0D1finq9%2BBa5j9KWkl%2Bh81RGH11eOEBDcThPVeSp3LUC3hNV%2Fxj1lGFax%2FN6PvR42RtkrPHY8rUyKh5AOHQBvOJ3ZY6AXg05ar2oMi2VPX7YhVaktXxuyWpZTpksJ0BlB4THFbmiiCw10K8KuEBxd9PfG4zUzZJ9btki8a8%2BO8lfqoZIU%2BMCOGHI169SKXvIt5KQKWRyHvjHhoTc8vaXtG47zUvj5MMGO3skGOqUBA6GdSGcNl9%2FE8CQeRHldbrCoOGKl5AoopbtVLj%2B7b5a3iyo0pXW4iGPDbegBR8HVqYBCsInQpbgE021V3fvTejrRW%2Fopqtt0XDjzvEJgbCmPZ2fPg3CnyYj2XmKZG%2FoSnfK%2F%2FC7WBsHuNZ3eoMiJt5P9CU%2Fa5Gwc0pmDB0GneppLPb54cip4vQ1lz89lXsz%2B4WztkQZo%2Fx8kQiUTwGuld%2BwK4Dkz&X-Amz-Signature=b615101dffe04bbea3360e6adf784e906865d87cc9228322f02968ee39591015&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6HBLHYY%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T032258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBjeur2%2F2iG%2BIqEjlLaqdxiHNzhQDczhUt%2FM2viewaUnAiEA7ArMUPg9r3k3E95txGGsqD44v4Z%2BgJw4gMN1qn1lkpgqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLoYnvPspV7KQkY7rSrcA4JQMy1TPGnCfF5fDVshv67AGLvY34ePi5uoQArUfBRLxrW0QEQ9XcGyx8TYs%2B99Cw%2BLT5yPCBvZ9BTLzH3qnZdIWIhTBOQS9q1rrbNnk%2F15wXT7Qz6Mi5jVAZtc0yRdNpOL7IByBfv6XGQUTfZkjBYm4zewfP4sGB2d4z%2F3WJ2DiuZJt58ybFyd%2Fnwg%2BmRuDkCDK2T3WV4PttM94%2BRRY4C3D8Gfh6HKN3hYSJDDBWFTgZcSFz%2FMmUzQ4R15rIXDWDXjDCtr0OspwPLZUrcjcS7uVk%2BMW2PnMcAa2nOl6NtAd7yrCPsdkoi%2BPDHWrVX1XYrymu4kA%2Fob97O1oA8Yo7nwqrbAfO8Mulrt530MfGWn4AN4epQQMrnqvMAgzuCXS6BMXdWffc32doKE8%2BojET6NtJDt4kO0D1finq9%2BBa5j9KWkl%2Bh81RGH11eOEBDcThPVeSp3LUC3hNV%2Fxj1lGFax%2FN6PvR42RtkrPHY8rUyKh5AOHQBvOJ3ZY6AXg05ar2oMi2VPX7YhVaktXxuyWpZTpksJ0BlB4THFbmiiCw10K8KuEBxd9PfG4zUzZJ9btki8a8%2BO8lfqoZIU%2BMCOGHI169SKXvIt5KQKWRyHvjHhoTc8vaXtG47zUvj5MMGO3skGOqUBA6GdSGcNl9%2FE8CQeRHldbrCoOGKl5AoopbtVLj%2B7b5a3iyo0pXW4iGPDbegBR8HVqYBCsInQpbgE021V3fvTejrRW%2Fopqtt0XDjzvEJgbCmPZ2fPg3CnyYj2XmKZG%2FoSnfK%2F%2FC7WBsHuNZ3eoMiJt5P9CU%2Fa5Gwc0pmDB0GneppLPb54cip4vQ1lz89lXsz%2B4WztkQZo%2Fx8kQiUTwGuld%2BwK4Dkz&X-Amz-Signature=568d15080cc5d222a607c63175076319a78789e81dcd46ddb956c6537dbbc601&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
