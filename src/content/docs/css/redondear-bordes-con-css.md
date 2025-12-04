---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NWFF46Q%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T100005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQDKNBgK4Ydfh3O7eGqCevn%2BZiAByp3f88L1uq5wl6HwJgIhAJ8xTxTxLA5Xxi2IRQm9cFL5w90SsY0aylVnhoxwU%2Bq7Kv8DCEMQABoMNjM3NDIzMTgzODA1IgxZdJ%2BsQvCMD5D3Vbgq3AP1med79qXuHipssM7YvHwgq9oGztfNXfuwcLd9zQZuTNk23jeRRihtCrTTSUWDneYSsSyE0%2Fat5v33lizucOa3As4GQ1Rf1iJJRj8kzWkc%2BFPFgyq%2F%2BBVwfKvh%2BkHtcUnBgPf1rxoLDmupZfhq%2FwvjasSxGLTHTA3EfuKuNHcwAT1rBsgxefdFkBi3RIIna5Xne6zXuwk3aX1QvNpPVkFyxKxD9MDgCAN5olCXqeZUsOU%2FfBb8izCuzzQ9jwIqGTAO7W46G%2FLGegwPWqvc%2FHmYtvaN71ydC4wZdpC9PSCt6Ip69LCYfsDl8jvuIGh4KnIYS0nDF614TDduUsZLhboVbx8cuOMBZvedPZebqklu0RavsaIwXI5hxZi1fvNKlVZy8PcwjN8OE%2FLNNXrlrNm%2B7GTGyYLqW68SqZ1lGoNf0khNSvAR4pC2duwUWbgSmyPYjz13MK17H38GshTib5Pl3PrBEyPc1nF%2FGSrpom06GkdkkmVncwh1%2FJWem1hqT%2BEtQx8fXQjpgsB%2FAEe08VEaiYTd8LbEuEw4hWNaqhGote30zXEPeX2VuuhCSQQ6vToscbqzg2u8lF8b5gH6%2BMpln12f7guyWErCTssa5iudiC3JftG80eQBo87d3DDEqsXJBjqkASPj0R7hfaZ%2F%2FLswt9Z5yxIG7MPdMf3wvLzNvMIp%2BckOfpcxjNQgHmmgE7tGMGEdCLWYAtzyNrFvlRFfQuGyI%2FRv1NrYa2uxReZhut0u1NCwSs0PlN78uQviPTa3jnybHukQ6xmyvSk60EUE4P%2FsMo2kbt5z9R0UxHz8OOMJLukrkU4RVe6sB6pfpZa9tgA2%2FKXnyzswfSUjSUw90L8abF29J%2FX6&X-Amz-Signature=290525cb4f9457d4f483d2b539705a1f632adc08520d0d04ce1952b533a66ce9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NWFF46Q%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T100005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQDKNBgK4Ydfh3O7eGqCevn%2BZiAByp3f88L1uq5wl6HwJgIhAJ8xTxTxLA5Xxi2IRQm9cFL5w90SsY0aylVnhoxwU%2Bq7Kv8DCEMQABoMNjM3NDIzMTgzODA1IgxZdJ%2BsQvCMD5D3Vbgq3AP1med79qXuHipssM7YvHwgq9oGztfNXfuwcLd9zQZuTNk23jeRRihtCrTTSUWDneYSsSyE0%2Fat5v33lizucOa3As4GQ1Rf1iJJRj8kzWkc%2BFPFgyq%2F%2BBVwfKvh%2BkHtcUnBgPf1rxoLDmupZfhq%2FwvjasSxGLTHTA3EfuKuNHcwAT1rBsgxefdFkBi3RIIna5Xne6zXuwk3aX1QvNpPVkFyxKxD9MDgCAN5olCXqeZUsOU%2FfBb8izCuzzQ9jwIqGTAO7W46G%2FLGegwPWqvc%2FHmYtvaN71ydC4wZdpC9PSCt6Ip69LCYfsDl8jvuIGh4KnIYS0nDF614TDduUsZLhboVbx8cuOMBZvedPZebqklu0RavsaIwXI5hxZi1fvNKlVZy8PcwjN8OE%2FLNNXrlrNm%2B7GTGyYLqW68SqZ1lGoNf0khNSvAR4pC2duwUWbgSmyPYjz13MK17H38GshTib5Pl3PrBEyPc1nF%2FGSrpom06GkdkkmVncwh1%2FJWem1hqT%2BEtQx8fXQjpgsB%2FAEe08VEaiYTd8LbEuEw4hWNaqhGote30zXEPeX2VuuhCSQQ6vToscbqzg2u8lF8b5gH6%2BMpln12f7guyWErCTssa5iudiC3JftG80eQBo87d3DDEqsXJBjqkASPj0R7hfaZ%2F%2FLswt9Z5yxIG7MPdMf3wvLzNvMIp%2BckOfpcxjNQgHmmgE7tGMGEdCLWYAtzyNrFvlRFfQuGyI%2FRv1NrYa2uxReZhut0u1NCwSs0PlN78uQviPTa3jnybHukQ6xmyvSk60EUE4P%2FsMo2kbt5z9R0UxHz8OOMJLukrkU4RVe6sB6pfpZa9tgA2%2FKXnyzswfSUjSUw90L8abF29J%2FX6&X-Amz-Signature=2408b90d2bcf750df67b8c7681049829f3d70708814c7cb08666a05629d3ff97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
