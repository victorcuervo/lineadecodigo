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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNPAAQD6%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T090642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGHdSV%2BnjAo4aZfz5piMeBPU4g1%2FoWFAZqe9QQ%2BmlqnWAiB9wSbpbS4SrNE%2Fm%2BviHFDEKeTrcMZJWFXnHUqT8IBetSqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7CRKMtp5SyAe5RVHKtwDWNtVWKml7xN7YcxZHKGsmDzX2%2BfIqs1%2FLQpMAjnNa1o6MGsT7zswo5FZAqEsbsTZoGc5KzCAZBsK0xItTDzSONn8qZQfsUoW4ReDyuMIPhLl%2F2pVWgkWKv3%2BGPOxlwJos0TDHc1eZurP4Hcwuh1mT%2FtwlxZ6IDq1djxXB7TFZagNxs4NDQMPZXhUDMuCx%2FU0MCTGIHDuLXkGMR0k%2BrIyt4TcZPVx1%2BhUKzJbEsiW5HEZF8yauV4%2FRPB1NKyRyxbKKexlDH2mN%2F1WtkrtldgcrG4g8CMwoixR7XrvTYrle5D9zRWUmmxWgD7dhhgud9Jwb6N8S5y6BdNjHGScSbbqdL%2BO58VD%2BPM8UHARlzCb63dXThluiLIxi1WpFN00EoiorEASeJsv3%2Bl15LS33YX%2FjsTYK1gUFnY%2F57v9zhimCCfTqnZIzZet44BadIwzgxmBcI1%2B4c1eh28OntuOaMJbjDXjK6xk3Cu9VxC6WBziqnro5PP4%2BF9kvzsBdiHRG1bJ2pngvjY0JzAk8RyCUh581%2FsGRBRLcbNLaqWIPWrcW3lvbPxJYoNYERtWXcYtDZVq94YUIJ8NXKn4dexzttBeFgue7EzElA%2BRds%2FMjeEj798BC4CnzEP7wu4rt8MwpsPfyQY6pgGRL7eTI6ZETkWn1qGcIKuXA3%2FBV9ScU%2BZMg%2BCdzYZEGNrlviLlwFNeLPUIZXPenNX22CwqJHKnCMi28jq8jWfAPZGNWJkaqxk%2FeUTXnCBdBGZWGcAOWc9sToWZ2eL2oJG9vJ2V0enAPK%2BkJwqoWjC61kFiaxozciUbTJBo4bEzRsZM%2FZ%2BEbB3uqaD43q5KG9uwBPOslvf574lrTAyzubUSEmRaMdV7&X-Amz-Signature=0a6c5fa117c1200b483ab41f33ad7bab01454cbe205cea70377b369e14e73af5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNPAAQD6%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T090642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGHdSV%2BnjAo4aZfz5piMeBPU4g1%2FoWFAZqe9QQ%2BmlqnWAiB9wSbpbS4SrNE%2Fm%2BviHFDEKeTrcMZJWFXnHUqT8IBetSqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7CRKMtp5SyAe5RVHKtwDWNtVWKml7xN7YcxZHKGsmDzX2%2BfIqs1%2FLQpMAjnNa1o6MGsT7zswo5FZAqEsbsTZoGc5KzCAZBsK0xItTDzSONn8qZQfsUoW4ReDyuMIPhLl%2F2pVWgkWKv3%2BGPOxlwJos0TDHc1eZurP4Hcwuh1mT%2FtwlxZ6IDq1djxXB7TFZagNxs4NDQMPZXhUDMuCx%2FU0MCTGIHDuLXkGMR0k%2BrIyt4TcZPVx1%2BhUKzJbEsiW5HEZF8yauV4%2FRPB1NKyRyxbKKexlDH2mN%2F1WtkrtldgcrG4g8CMwoixR7XrvTYrle5D9zRWUmmxWgD7dhhgud9Jwb6N8S5y6BdNjHGScSbbqdL%2BO58VD%2BPM8UHARlzCb63dXThluiLIxi1WpFN00EoiorEASeJsv3%2Bl15LS33YX%2FjsTYK1gUFnY%2F57v9zhimCCfTqnZIzZet44BadIwzgxmBcI1%2B4c1eh28OntuOaMJbjDXjK6xk3Cu9VxC6WBziqnro5PP4%2BF9kvzsBdiHRG1bJ2pngvjY0JzAk8RyCUh581%2FsGRBRLcbNLaqWIPWrcW3lvbPxJYoNYERtWXcYtDZVq94YUIJ8NXKn4dexzttBeFgue7EzElA%2BRds%2FMjeEj798BC4CnzEP7wu4rt8MwpsPfyQY6pgGRL7eTI6ZETkWn1qGcIKuXA3%2FBV9ScU%2BZMg%2BCdzYZEGNrlviLlwFNeLPUIZXPenNX22CwqJHKnCMi28jq8jWfAPZGNWJkaqxk%2FeUTXnCBdBGZWGcAOWc9sToWZ2eL2oJG9vJ2V0enAPK%2BkJwqoWjC61kFiaxozciUbTJBo4bEzRsZM%2FZ%2BEbB3uqaD43q5KG9uwBPOslvf574lrTAyzubUSEmRaMdV7&X-Amz-Signature=d4a2d7229fcdd54b4be9ca7d93b4295672ff23ad0aa72dde57bc9b1e729d06a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
