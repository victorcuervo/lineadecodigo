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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWPWU32I%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T171441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCod%2F5ywbSAN2E64mWP40qefPXLr3OPsW2PCwAVsxuvfAIhAL44k9wyLSqiJnPZQ0w5AW8nyn%2Fv8QzNOFPvvk88jTP4Kv8DCGEQABoMNjM3NDIzMTgzODA1IgxkU5tGhxnRCNsloR8q3APF27aft3dJUX0SETHiBJzG4Zl1qWicDoZ%2FiFyQup3TGYwv6AtQCbDyeDjUsvL4yhwjHq1vNX9QhaT9%2BFN1ct6OxsprcVaDXhWwLs98Zna8oFXorb%2Fg1Y%2BgvaTGY%2F2zsHWBm8Ldcjzifxmz2OnNdY0HH01h7F7YN%2BFwd52WLwhiUnHlW258%2B5BgIKCzp2VZJKKYDriJtB6oDwQtpvxRzr%2BStUkGSUt4sbaFYWv7Yi2azpWXgK1rIZvcB1cmk%2FSeDpLTcoFOQ1OQh8fAo7oDJPFDGSKQvyi3My%2BVeRf3qAxBvvv5wsGdz%2BDfQ8AOGNWg7G%2FFqJGNI3kdjBV1jFusX%2FcRS73WueTnm2jpIYvbPjsAEs%2BU%2BeRcIgRu98hwd4OdRtv3sNLOUNaz0NsuxwWypNdNExzMHhQLhwsDvUYw7XJWOe%2B2WhCXMoC0NIJXt3P1dcFxRXDn11urS5zlt7aQ%2B9zChESe4qOQw78SYNHTIwSfDqqrTdyRzYgBVI6y0CtyaZ3%2BBaGem%2BZPVpmuzeL4%2FUkgM1%2FGFAvQJMHkCbNMVTfbU2sjHfupSD7wrq8h9W04D3nwIL3WpVMzfNWas5pw%2BtXF%2BXNiMNUKPsmbwl6LLLrIBBIJmetPRAl2Q1AilTDx%2FMvJBjqkAWDFeQ2y0HRxwabmCpIyu1hxCHemWnerzEdda6YD6vKjSkyR3sT8VaCLs08xEIMUWvK1zk90rsB6EchThEivaWd%2B85IJImadv1HmABW5dRfynVqOMGSJXGIfGCHU4Wn5PwMHyThEycRHjQ4I0waVZh7B%2Fs7slc57jno2ES8ESoFBWG0xiTUmt%2B%2FMZQetX6MaTg8D%2BlN7PyURRXMR8Y4WR4LFOGFb&X-Amz-Signature=39b2a1d9ee649e136e6d15b35ffd759c015230ad2c1a9f243adf19095d94f5ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWPWU32I%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T171441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCod%2F5ywbSAN2E64mWP40qefPXLr3OPsW2PCwAVsxuvfAIhAL44k9wyLSqiJnPZQ0w5AW8nyn%2Fv8QzNOFPvvk88jTP4Kv8DCGEQABoMNjM3NDIzMTgzODA1IgxkU5tGhxnRCNsloR8q3APF27aft3dJUX0SETHiBJzG4Zl1qWicDoZ%2FiFyQup3TGYwv6AtQCbDyeDjUsvL4yhwjHq1vNX9QhaT9%2BFN1ct6OxsprcVaDXhWwLs98Zna8oFXorb%2Fg1Y%2BgvaTGY%2F2zsHWBm8Ldcjzifxmz2OnNdY0HH01h7F7YN%2BFwd52WLwhiUnHlW258%2B5BgIKCzp2VZJKKYDriJtB6oDwQtpvxRzr%2BStUkGSUt4sbaFYWv7Yi2azpWXgK1rIZvcB1cmk%2FSeDpLTcoFOQ1OQh8fAo7oDJPFDGSKQvyi3My%2BVeRf3qAxBvvv5wsGdz%2BDfQ8AOGNWg7G%2FFqJGNI3kdjBV1jFusX%2FcRS73WueTnm2jpIYvbPjsAEs%2BU%2BeRcIgRu98hwd4OdRtv3sNLOUNaz0NsuxwWypNdNExzMHhQLhwsDvUYw7XJWOe%2B2WhCXMoC0NIJXt3P1dcFxRXDn11urS5zlt7aQ%2B9zChESe4qOQw78SYNHTIwSfDqqrTdyRzYgBVI6y0CtyaZ3%2BBaGem%2BZPVpmuzeL4%2FUkgM1%2FGFAvQJMHkCbNMVTfbU2sjHfupSD7wrq8h9W04D3nwIL3WpVMzfNWas5pw%2BtXF%2BXNiMNUKPsmbwl6LLLrIBBIJmetPRAl2Q1AilTDx%2FMvJBjqkAWDFeQ2y0HRxwabmCpIyu1hxCHemWnerzEdda6YD6vKjSkyR3sT8VaCLs08xEIMUWvK1zk90rsB6EchThEivaWd%2B85IJImadv1HmABW5dRfynVqOMGSJXGIfGCHU4Wn5PwMHyThEycRHjQ4I0waVZh7B%2Fs7slc57jno2ES8ESoFBWG0xiTUmt%2B%2FMZQetX6MaTg8D%2BlN7PyURRXMR8Y4WR4LFOGFb&X-Amz-Signature=4d2a0d95da8947cf509f7613ae7d6602361d962f0c803c8e95bac1961d8dfb4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
