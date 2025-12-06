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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DYDIVV2%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T114139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDROvC0puTGWtG9Xrs3L8r3tFdy%2FHhwDNPntyUjV9JRTgIhAIyl0BOFucYp5%2FymL7aUJLL3oqJJPQfrHQGyM2s9%2FgwrKv8DCHUQABoMNjM3NDIzMTgzODA1IgwcdozmNjrxMxv1CrEq3AOT92uTOiqt2hdwwZ3ZdZcgGQuNJFod6F7EH58xjGAQYuZLCq%2BEm%2FOtQaOQJHGEo6fSnd9fZ%2FiFCgHTllHI52v4qLS8fP0IYrehjIc%2FlvBEQGkqf5V%2BgJnpnHiLyx%2BvhqugHL%2Bnn%2B65qraa8%2BLnBu6tFFfFuSEiIfgsEf9KuRXkR%2FkMAYq%2BxJQdeHqdXxspbspanBkk786AAJpRFUYbEmV8jjqqlzllz7RCosA0hzTXrPuIKIfo3SG%2FN7cXNmsmkTyx95FmVU%2FuBIUyDl9S75ORbR8G87sp%2BEV2aLr6eJrey%2FbkAPuyteS4J4e0IcEs803xlwDohaz4Nn8gINM36202yco%2Fb%2FmVqznf3AYgy0eBQzee7b1EQ%2BKZoMlymRJeZ0w%2FNTu%2FMVLQy%2BuZL%2BIMpEZ5jwVMoYZNAJqUIGjEv3G6wxoSEhkGVbFqOdwIkdgK93KN9Km61H3evqkaGVaNmRw7VVOMCTuDxXrqMB5nhcKIMHISgN8IP9XAUitpv7h6bRUjAfLa0vxd7nKhkUMmCJ9ylS6sPOrhe3YWOZAW5ZEwykuiS2R0LMEvwEDd6RLe1McbUAms4j1vhzN5ZxmtUckNCELDGv5FwFW%2BOzl7KZdMK1DwMs3FmZHS2xJCQTCQp9DJBjqkARgDkxyPy8SQprIqb9IgJcg24LHgr14wE3IU8%2B3UpZ7Y34zfUY%2F66exbc%2BbwrBxeypP8nhtRV5VpP1jpfd0aRv8ajpIbJeoXwdHcOkmyl%2FUWWUpwdfk0u%2FO2vecJNLFWKONFJN40tt%2FnOJclD7%2B7bIRgPM%2Bpbc4vrVC6k0DzNxOmww4ro4V6JvHSdGj1tx%2F%2B2mokznJ%2FbX6fSgpMz7SC%2B4uaxIyB&X-Amz-Signature=8e8548ab058b76914664e0eb7381b01fdc3b1250ebe95ea931e48ebd986c326a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DYDIVV2%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T114139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDROvC0puTGWtG9Xrs3L8r3tFdy%2FHhwDNPntyUjV9JRTgIhAIyl0BOFucYp5%2FymL7aUJLL3oqJJPQfrHQGyM2s9%2FgwrKv8DCHUQABoMNjM3NDIzMTgzODA1IgwcdozmNjrxMxv1CrEq3AOT92uTOiqt2hdwwZ3ZdZcgGQuNJFod6F7EH58xjGAQYuZLCq%2BEm%2FOtQaOQJHGEo6fSnd9fZ%2FiFCgHTllHI52v4qLS8fP0IYrehjIc%2FlvBEQGkqf5V%2BgJnpnHiLyx%2BvhqugHL%2Bnn%2B65qraa8%2BLnBu6tFFfFuSEiIfgsEf9KuRXkR%2FkMAYq%2BxJQdeHqdXxspbspanBkk786AAJpRFUYbEmV8jjqqlzllz7RCosA0hzTXrPuIKIfo3SG%2FN7cXNmsmkTyx95FmVU%2FuBIUyDl9S75ORbR8G87sp%2BEV2aLr6eJrey%2FbkAPuyteS4J4e0IcEs803xlwDohaz4Nn8gINM36202yco%2Fb%2FmVqznf3AYgy0eBQzee7b1EQ%2BKZoMlymRJeZ0w%2FNTu%2FMVLQy%2BuZL%2BIMpEZ5jwVMoYZNAJqUIGjEv3G6wxoSEhkGVbFqOdwIkdgK93KN9Km61H3evqkaGVaNmRw7VVOMCTuDxXrqMB5nhcKIMHISgN8IP9XAUitpv7h6bRUjAfLa0vxd7nKhkUMmCJ9ylS6sPOrhe3YWOZAW5ZEwykuiS2R0LMEvwEDd6RLe1McbUAms4j1vhzN5ZxmtUckNCELDGv5FwFW%2BOzl7KZdMK1DwMs3FmZHS2xJCQTCQp9DJBjqkARgDkxyPy8SQprIqb9IgJcg24LHgr14wE3IU8%2B3UpZ7Y34zfUY%2F66exbc%2BbwrBxeypP8nhtRV5VpP1jpfd0aRv8ajpIbJeoXwdHcOkmyl%2FUWWUpwdfk0u%2FO2vecJNLFWKONFJN40tt%2FnOJclD7%2B7bIRgPM%2Bpbc4vrVC6k0DzNxOmww4ro4V6JvHSdGj1tx%2F%2B2mokznJ%2FbX6fSgpMz7SC%2B4uaxIyB&X-Amz-Signature=2fa02b730d4c4e9d4e3f37caf696eef104b7264a770191408cfeebd72a44e759&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
