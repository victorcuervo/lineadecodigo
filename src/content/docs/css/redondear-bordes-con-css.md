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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPW3UIHJ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T023421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWJcZezUSTAQgs3V6bbC9tj2gj%2Fl11jjjDf4N87X%2F93gIhANevAVzqLUlxqdEOaKVvDq4BSkhoeS8Uazv7ZzENxe0AKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyuYSEQdkqX8T2xpgMq3ANw%2FUEPbe%2FkDxRGEGaDR9OS1DNneYihru399JB6ohW2uknxm0eZoTh0sSIIjOEhAd3ISVsBg9TymoZnMGTXZWjKIUYHhrtvnWaYmm%2FCOUTgSELdnm3EaUUrjEOQhvhFmtmgPNSgGz%2FDkFPHXyE7SpBmt2xu3CEOe0jJA%2FgIfR0hlIjQ48HmHLbAY4KDQPLOeVIZUMfqKA1nh7nb9B7zgcetYoHA5d9anuIQeArLMMk2lc43k975XIDX3skWQmWXko4FDAvEICbmUP9bKYeV5%2FJCct1Bx7gnMNvllFETQaMBtNaLemhLBXlFx8HuTRGRHOivBsxgT%2Bul5VgEyxQdsHwtpvicLgqiNDg7fSypo0Ckxk0Ht8qCaALqkS1M2HenNvjDxE3bWu5UCJoWw3v%2Bj4%2BObv9o%2B1VfINW6341DBZ%2F1BuWUs9bL4yYyYumR9LOhYZD8%2Fu9quvxF1m%2BcRczCba3%2BiqOsTigCwFcrv3X7MHZcclREO1Ka6tY9ju%2FjJ7lGQQFcffcFSks1wUoNlh6gZBVuMlmVHu46pJxvUKNth7W%2BqDBaioTJDm5GS9OgYduMNZNWTXjBxfmTJuTKBEeVXeooRDM8KWqTXoHBXvA1PyTNIyzzXh76sSmckd5B2TCM%2FtLJBjqkAUnG7xIMVyiqwlAJg5NyReYD7s0YTeOz6TvVLtcNJ0byCCAlDJ0AqaZYGZtYNxeNDdpyz0Ju6ZzAdUoNL2pmAB2CC4frVrEslsMA2pF02nbFCSiTG3gZzJO7oh%2B5QE7SxFlsU33YwKMEtOXXeLvGB%2BxcwxR2K%2FdbzzUxMHdeI4kLZ7tNu4FO6BMzlTvCVzM16Y7U3aqlZ8jT6ZKGNtmyikttA3zC&X-Amz-Signature=0af0af04036d8639bccaa2a711aff4db54e10722170f9f841ae3591ab77e8770&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPW3UIHJ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T023421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWJcZezUSTAQgs3V6bbC9tj2gj%2Fl11jjjDf4N87X%2F93gIhANevAVzqLUlxqdEOaKVvDq4BSkhoeS8Uazv7ZzENxe0AKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyuYSEQdkqX8T2xpgMq3ANw%2FUEPbe%2FkDxRGEGaDR9OS1DNneYihru399JB6ohW2uknxm0eZoTh0sSIIjOEhAd3ISVsBg9TymoZnMGTXZWjKIUYHhrtvnWaYmm%2FCOUTgSELdnm3EaUUrjEOQhvhFmtmgPNSgGz%2FDkFPHXyE7SpBmt2xu3CEOe0jJA%2FgIfR0hlIjQ48HmHLbAY4KDQPLOeVIZUMfqKA1nh7nb9B7zgcetYoHA5d9anuIQeArLMMk2lc43k975XIDX3skWQmWXko4FDAvEICbmUP9bKYeV5%2FJCct1Bx7gnMNvllFETQaMBtNaLemhLBXlFx8HuTRGRHOivBsxgT%2Bul5VgEyxQdsHwtpvicLgqiNDg7fSypo0Ckxk0Ht8qCaALqkS1M2HenNvjDxE3bWu5UCJoWw3v%2Bj4%2BObv9o%2B1VfINW6341DBZ%2F1BuWUs9bL4yYyYumR9LOhYZD8%2Fu9quvxF1m%2BcRczCba3%2BiqOsTigCwFcrv3X7MHZcclREO1Ka6tY9ju%2FjJ7lGQQFcffcFSks1wUoNlh6gZBVuMlmVHu46pJxvUKNth7W%2BqDBaioTJDm5GS9OgYduMNZNWTXjBxfmTJuTKBEeVXeooRDM8KWqTXoHBXvA1PyTNIyzzXh76sSmckd5B2TCM%2FtLJBjqkAUnG7xIMVyiqwlAJg5NyReYD7s0YTeOz6TvVLtcNJ0byCCAlDJ0AqaZYGZtYNxeNDdpyz0Ju6ZzAdUoNL2pmAB2CC4frVrEslsMA2pF02nbFCSiTG3gZzJO7oh%2B5QE7SxFlsU33YwKMEtOXXeLvGB%2BxcwxR2K%2FdbzzUxMHdeI4kLZ7tNu4FO6BMzlTvCVzM16Y7U3aqlZ8jT6ZKGNtmyikttA3zC&X-Amz-Signature=a0413fa441e59b52953a25d4541b623b0a0bcbe5465a7f2959695838a6150601&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
