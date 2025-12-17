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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5C7FHQL%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T183505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPf8tAFoLbuwqKLG4edHCUSr8ItmKOyRY9wYIfbaxaOwIgG3LhWqyH7zE0BYZVsTj5wUfXCN4NXCaPRe1fJSxyFPkqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLI5otfVzfZ%2FPZyr6ircA1VvfRHebgTEdo6HdVOCRU5omdU8nlWHyJZDBkkFUCMMg27dwaIw2nuFlgKplG%2BT7o3Q9OhRDk0kYxBt7j%2FxEChZNLdkk3MzEwKhj4IEksiGmsNb4d00nt3GXLgcpb1k%2FTCi9NEQfAJtv%2FJEPzsMWxtPlke1Dr%2BFiSFIvAg6iJXK6JsIKE9Ecxru%2FbdtZqyxvk8MUhSR3Hijq3x09GtFlro2%2BABsR9lsEWkqSfRAwg2xgKZFzKr%2FZLKiyzt%2F8xkP83ov6z%2BFBO4Klsg%2FSJbz3%2Fz6VHQRn0s9eRIBmk08NZo5njxhumPJ%2BcaSify6dZnrdhfE6lL3OXlvmUIveShXz%2F0fZN%2F9BluaikkBPneizCGBXC0cU9hxXG52RLFjMt9fJPxrArSz%2FPweXchfhk8GS1B2PeXTYh1LQxBddsiGietLQ9BiEQFQ9vNIH4qlhf50RRuekImPFDHL9W4Sa4QEX9xN0ssGDRXiPTLZ3YXX%2FoxnxqwigEZ9LdrwTCOsz%2F3Is5kfHSCrjDBleDHosTokErWZatsAAXc82G3vhS8e%2Beuf%2BaOc4YfPQaU0J9BUnyTEHBi3E0X55XtzyBVHi76BSFe6lIPllk%2F3r%2FU6bXRzXjqr0udMtzG6%2Bdwc6ISBMNWfi8oGOqUBmIZvYmWYCGOfwKG8PyFquUX0szkdp7l12MPmLB%2FXs3ESLTIRa3FKOZnIBVZEH33Fgq7VhB8nzlLaWc3NgsksZjuT7RHhdXOW3zfn5UK3nPb6awtH9FKEPKH33WkQ7q0k7Bi08Iq%2BaaxecrFPyVdwkBPlPU876Wxj19Tic0FIpaFNp8Ab%2FBW5hY9Mo5uFjIdO%2BJYg7AWnAiVaOg8hUcjVDQxRCEUH&X-Amz-Signature=87062f604ca9f06449814a3ab059446f229284f4845b8a0c7aa579148f8d3508&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5C7FHQL%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T183505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPf8tAFoLbuwqKLG4edHCUSr8ItmKOyRY9wYIfbaxaOwIgG3LhWqyH7zE0BYZVsTj5wUfXCN4NXCaPRe1fJSxyFPkqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLI5otfVzfZ%2FPZyr6ircA1VvfRHebgTEdo6HdVOCRU5omdU8nlWHyJZDBkkFUCMMg27dwaIw2nuFlgKplG%2BT7o3Q9OhRDk0kYxBt7j%2FxEChZNLdkk3MzEwKhj4IEksiGmsNb4d00nt3GXLgcpb1k%2FTCi9NEQfAJtv%2FJEPzsMWxtPlke1Dr%2BFiSFIvAg6iJXK6JsIKE9Ecxru%2FbdtZqyxvk8MUhSR3Hijq3x09GtFlro2%2BABsR9lsEWkqSfRAwg2xgKZFzKr%2FZLKiyzt%2F8xkP83ov6z%2BFBO4Klsg%2FSJbz3%2Fz6VHQRn0s9eRIBmk08NZo5njxhumPJ%2BcaSify6dZnrdhfE6lL3OXlvmUIveShXz%2F0fZN%2F9BluaikkBPneizCGBXC0cU9hxXG52RLFjMt9fJPxrArSz%2FPweXchfhk8GS1B2PeXTYh1LQxBddsiGietLQ9BiEQFQ9vNIH4qlhf50RRuekImPFDHL9W4Sa4QEX9xN0ssGDRXiPTLZ3YXX%2FoxnxqwigEZ9LdrwTCOsz%2F3Is5kfHSCrjDBleDHosTokErWZatsAAXc82G3vhS8e%2Beuf%2BaOc4YfPQaU0J9BUnyTEHBi3E0X55XtzyBVHi76BSFe6lIPllk%2F3r%2FU6bXRzXjqr0udMtzG6%2Bdwc6ISBMNWfi8oGOqUBmIZvYmWYCGOfwKG8PyFquUX0szkdp7l12MPmLB%2FXs3ESLTIRa3FKOZnIBVZEH33Fgq7VhB8nzlLaWc3NgsksZjuT7RHhdXOW3zfn5UK3nPb6awtH9FKEPKH33WkQ7q0k7Bi08Iq%2BaaxecrFPyVdwkBPlPU876Wxj19Tic0FIpaFNp8Ab%2FBW5hY9Mo5uFjIdO%2BJYg7AWnAiVaOg8hUcjVDQxRCEUH&X-Amz-Signature=92914076e9db22a6490e3a9260c9dbbb7198dc920213e3ece3b79ec02034cfdb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
