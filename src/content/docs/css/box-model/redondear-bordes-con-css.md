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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWQWH6OU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T050340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDn%2FBFWgg%2BEatdKFchA3UjhcBSv6Tp6o4%2Bm%2BrE0B2eP%2BgIgGK%2FOzo5qpKzt8rFORpbQZ36Uo20cnQNnjzCiECKjtMQq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDJTGIpqy%2Bo1cKgKbEyrcAzz8fKWCz49QYq%2FHFHSXolVcOkJEWCpitzsGW%2FZyC0V8c8Akyi9Y024kxhw7QUvrfFxmG8JYpbel0RcbxZU5NLVgVZpUagH1D1E9dkrGPX9hauPFf3PwPfnBqS5xvrUvp%2BNcvu%2FW0pe7E4PKSe7jqz2DoInl87vAgbo%2BuescaA7bGC5Stka%2BwXlDS45I2lNwIn1HHlV55neqIe0sXInT2Vfo6GoPsQ3YCsCK8V3PigA%2BW9EuTjc0xWt5faS2adjzqQebgwkgwC0CDtGHZLp5kqv0I%2FRLuvOXsgAUkvIIhfdQNf%2FcW84uunXaWkGmMPMEFXHqYjNd3V%2FjwU3twxx9Y7UoCOi5YQXK8o7yykAbyPRC7%2FQo4%2B13Z95l2qSxVQAvtIyzjncDK5mSGzq%2F5%2FtG3hFRy2fEauqztYqiNDQYvRv4sGySBE2DK5EUYhpHLfvBzrfATghDW6xfJe7Yrv6fyfksXqoZlX%2F4fgH%2Fac8nJeTqEaLYdBPEDLB3o%2F33SaXdlpEAo4dkacGlYMJxDX15oyyQ60MG0LicAijClDztHCIn087q8UTg3e6morHR52LiBu44lK9WxYt%2Fn5D9vHGzPmAnMSiDAa4ga%2FBPLlyKHbZWgfUvaHxIZR2qSWIlMMHpiMoGOqUB9orQmXSLmgKv4idW%2FbYoPH7hhAU5l6VGORoUG0y2%2FT1yDd5E9YwUEkHjtZPBlp6xzGcR%2BGY%2BporciqpzPFvxKSCVnxZQpBjj%2BseS%2FEKL26QBbysgvEw6QxMO%2FBgX%2Br1%2BQgkeQCM5z65tuvpuYdZcg43u1fxJJtkc1Ez2uiL2fe3hEEIurE2cdWuWTQ1a%2FpiJfAJXdRw7fWzIS5YfoSH56B6aHuIP&X-Amz-Signature=231688f209adc5c4a3946e71978c01ca2d8611dedde40dd3680bafad06b1947c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWQWH6OU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T050340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDn%2FBFWgg%2BEatdKFchA3UjhcBSv6Tp6o4%2Bm%2BrE0B2eP%2BgIgGK%2FOzo5qpKzt8rFORpbQZ36Uo20cnQNnjzCiECKjtMQq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDJTGIpqy%2Bo1cKgKbEyrcAzz8fKWCz49QYq%2FHFHSXolVcOkJEWCpitzsGW%2FZyC0V8c8Akyi9Y024kxhw7QUvrfFxmG8JYpbel0RcbxZU5NLVgVZpUagH1D1E9dkrGPX9hauPFf3PwPfnBqS5xvrUvp%2BNcvu%2FW0pe7E4PKSe7jqz2DoInl87vAgbo%2BuescaA7bGC5Stka%2BwXlDS45I2lNwIn1HHlV55neqIe0sXInT2Vfo6GoPsQ3YCsCK8V3PigA%2BW9EuTjc0xWt5faS2adjzqQebgwkgwC0CDtGHZLp5kqv0I%2FRLuvOXsgAUkvIIhfdQNf%2FcW84uunXaWkGmMPMEFXHqYjNd3V%2FjwU3twxx9Y7UoCOi5YQXK8o7yykAbyPRC7%2FQo4%2B13Z95l2qSxVQAvtIyzjncDK5mSGzq%2F5%2FtG3hFRy2fEauqztYqiNDQYvRv4sGySBE2DK5EUYhpHLfvBzrfATghDW6xfJe7Yrv6fyfksXqoZlX%2F4fgH%2Fac8nJeTqEaLYdBPEDLB3o%2F33SaXdlpEAo4dkacGlYMJxDX15oyyQ60MG0LicAijClDztHCIn087q8UTg3e6morHR52LiBu44lK9WxYt%2Fn5D9vHGzPmAnMSiDAa4ga%2FBPLlyKHbZWgfUvaHxIZR2qSWIlMMHpiMoGOqUB9orQmXSLmgKv4idW%2FbYoPH7hhAU5l6VGORoUG0y2%2FT1yDd5E9YwUEkHjtZPBlp6xzGcR%2BGY%2BporciqpzPFvxKSCVnxZQpBjj%2BseS%2FEKL26QBbysgvEw6QxMO%2FBgX%2Br1%2BQgkeQCM5z65tuvpuYdZcg43u1fxJJtkc1Ez2uiL2fe3hEEIurE2cdWuWTQ1a%2FpiJfAJXdRw7fWzIS5YfoSH56B6aHuIP&X-Amz-Signature=6f2198330aeced9d1af540d8c3f97edd9ea0e92ad6a51a25416315ebda3dc25e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
