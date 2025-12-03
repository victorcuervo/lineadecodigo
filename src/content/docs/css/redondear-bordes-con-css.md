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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654KG6GOY%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T223641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQDdpM3TWIWeO%2BEAhfVaRsYWgJGDl3zfI5waNyLjOHHy5wIhAP2jUnn6wZ2pfUlYkreb60EQFoyVLi2yb%2FS6o%2B1WpvLiKv8DCDcQABoMNjM3NDIzMTgzODA1IgwdI9cMApI8yKHNyiEq3ANIo8hWiMnl9j77jjREl9ib6iUMr54KtWocUYOabCjx4DXlf37v%2Bo9cbk%2B2dkD9a7tH%2BlpY25nvzyf6R6%2FgfkL3q1KHxcmUGLZAoW64a0W3Emw8XDRsIUqMHBhJIkXrgeEDWRr0WkKSx%2BbHop2XKpsJ2MvnTTj6TxXxJs8WnKq%2FcfSf9XQM0q%2FKuoP%2BvhVKjV6IlHzVYTAwbOhrGEVSZ4RM%2BWC15wCVQN5CDx2Hqt5ocj%2B1Naj25f59T8U9RT0qNRAAkFkHOxwE7d%2BXJs%2Bb6wRsSVQRxeinmDO6CAEhQePbhvPT7fNeA8ZFiH3aNeWsHVjvoJmREntwdznF2Mc1fIIzBmN0XVADAmqLjQENaDIqIk%2FBwninrH0AnohdsoqnUjy3XsOCT5QhZOgFr5dI70ZEX%2FOTZ9TSJ791uVVVRh53SZ1qkAIoMslDmxBdN%2F7uTBbPOSOg9wIlO3QhT1R7Jv56FyQ65NggxpW9y8U5lZwA4STqIWzxHDfMJsM2REsPhQeIuQz3XxetLFNDHasYLjgSR8%2B6lGhRq9znZs%2BupHKX3IuzM26tWvAy2%2BFPkcEunNGV1WUS45DT5hwyX3DVXCB5LwTF7lKFon%2FPUnZ9GOOp6lZRVv2RJRhPTlU4gjCQ3MLJBjqkAbFl4nLXfd9JqjYjZ%2B55ENc2eHD62DQDE4nLK12E%2B%2FkNzWwhsjOhjhrTSwpGSUdVJDDfVCB%2B2XgRWz19UE8QJa%2Fiegaq1LdFBv0QrGg4NtGNvhy46eBtNC7pGaqBMODdIj3qA18KYgTA53VuDILiipV%2BFXxmsl01I2IWgd%2F9WLCKFWR6AHUzi9l5boSrq9rccxClqc3Hf6cL717BX8T%2BvHA2HJKj&X-Amz-Signature=4ad0990c7ad01bcc55aae09d46cbdb7a8052392abb8b02a51514f4c8f31439e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654KG6GOY%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T223641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQDdpM3TWIWeO%2BEAhfVaRsYWgJGDl3zfI5waNyLjOHHy5wIhAP2jUnn6wZ2pfUlYkreb60EQFoyVLi2yb%2FS6o%2B1WpvLiKv8DCDcQABoMNjM3NDIzMTgzODA1IgwdI9cMApI8yKHNyiEq3ANIo8hWiMnl9j77jjREl9ib6iUMr54KtWocUYOabCjx4DXlf37v%2Bo9cbk%2B2dkD9a7tH%2BlpY25nvzyf6R6%2FgfkL3q1KHxcmUGLZAoW64a0W3Emw8XDRsIUqMHBhJIkXrgeEDWRr0WkKSx%2BbHop2XKpsJ2MvnTTj6TxXxJs8WnKq%2FcfSf9XQM0q%2FKuoP%2BvhVKjV6IlHzVYTAwbOhrGEVSZ4RM%2BWC15wCVQN5CDx2Hqt5ocj%2B1Naj25f59T8U9RT0qNRAAkFkHOxwE7d%2BXJs%2Bb6wRsSVQRxeinmDO6CAEhQePbhvPT7fNeA8ZFiH3aNeWsHVjvoJmREntwdznF2Mc1fIIzBmN0XVADAmqLjQENaDIqIk%2FBwninrH0AnohdsoqnUjy3XsOCT5QhZOgFr5dI70ZEX%2FOTZ9TSJ791uVVVRh53SZ1qkAIoMslDmxBdN%2F7uTBbPOSOg9wIlO3QhT1R7Jv56FyQ65NggxpW9y8U5lZwA4STqIWzxHDfMJsM2REsPhQeIuQz3XxetLFNDHasYLjgSR8%2B6lGhRq9znZs%2BupHKX3IuzM26tWvAy2%2BFPkcEunNGV1WUS45DT5hwyX3DVXCB5LwTF7lKFon%2FPUnZ9GOOp6lZRVv2RJRhPTlU4gjCQ3MLJBjqkAbFl4nLXfd9JqjYjZ%2B55ENc2eHD62DQDE4nLK12E%2B%2FkNzWwhsjOhjhrTSwpGSUdVJDDfVCB%2B2XgRWz19UE8QJa%2Fiegaq1LdFBv0QrGg4NtGNvhy46eBtNC7pGaqBMODdIj3qA18KYgTA53VuDILiipV%2BFXxmsl01I2IWgd%2F9WLCKFWR6AHUzi9l5boSrq9rccxClqc3Hf6cL717BX8T%2BvHA2HJKj&X-Amz-Signature=8e94554dbe2d72b7b4d386db59b5984e9aba47c8045b877e4f660ce5e0e9c2f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
