---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SE4PY3J6%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T085622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsZM9aH%2BkeSDjAuoBPzYd1rJvjFwPF0ZCM6ZldWsRZmQIhAMGrxKa2tg6xn0ceGA2B2sYRYmdNaB%2FrpZQPoa5oY4wNKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyUp7CZXSd8PfR8kaYq3APvLYAOdywxPtC4%2BPASbyUWUiQ0JHK1MeXW8FLtZILLGOpZFsWLHBvAvHBWXgXI0jEZwUnj4hd7LFwDww4iCNU6H3zy9PHaNJ8DGw52cRmES9M3noKV1iHhuHB397KLn9sHjNeh84T5U8xcnUhnTzSXxaWHqKu1AQ9uy%2BscOkALi62pyMI0cspw9Bjzv9LYMixxtt3z6SNlYyEfjXnu9S3UQx1yH%2Bgck79oHf5k7Q530mRDFVnge27OwuOqCnzm%2BWyNv7frXziIbHILrXObPNtAxrlMEiC7b2KHjAQ6rkIS3VO8metom%2FQviYpJG3mXQKWO7U66s44VGUEv8esVmvR6CndQSjDyQzOe5tdvt74OGhib0JK9%2FZd1zFyB8oZBnLeOuAdrjZ0vkc3McrCjaHEmx4bDiewLJYJfaHVe1LF5Psjt%2B5Q7PICPBN7srqUaSh4RkXWzmek0l0lxs5X6BOcGbTCE3OsHw2jHoA0XHGCGd82uV1i49LOfgw%2FFhwrJa6Ut7s1wRDT%2FDEz8xumsUnDHxLfF%2F1%2BgJ55fu2mDT4F%2F157gnjh1NR4XsWQNQH6deChqLIfXh6G%2B4F2RWF1elLSaNbD0kb3%2FBmufOrNy66HK%2F3lebAg6BQpL0eZLajCKnNTJBjqkAWUa4SZ64onEJxnQbhRsDTi96zrdg6g4zD0dePcL04WYctkvXt2G1%2Bkh7pxm%2Feqb%2FWn1H25o5J%2F41oxb%2BnzsC9utkMwr68LLTJKdj6qhgSVcr6oona1bRjvBMTChyFcmXtb%2Bn5LVbVqRPMVf4X8wHFeqDojAahw2hA2Wlt%2FBlloSOBkFP78eyHmHlhG8o6oBvBLrrWujl5dUo7Cb60r9MXvLvfgn&X-Amz-Signature=6187fba5da0dacf677d4b66e25838e1d972d7ef2231cae8f990dea6b585c1484&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Por lo tanto lo que haremos para crear una página con tres columnas, lo que tendremos que hacer es crear el contenedor y tres elementos, cada uno de los elementos será una columna.


Si revisamos el código [HTML](https://www.manualweb.net/html/) será algo de la siguiente forma:


```html
<div class="contenedor">
  <div class="columna">
    <!-- Contenido -->
  </div>

  <div class="columna">
    <!-- Contenido -->
  </div>

  <div class="columna">
    <!-- Contenido -->
  </div>
</div>
```


Ahora pasaremos a darle el estilo mediante [CSS](https://www.manualweb.net/css/) para que las tres columnas queden de la forma correcta.


Lo primero será centrarnos en el contenedor. El contenedor será sobre el que indiquemos que vamos a aplicar el modelo de cajas flexibles, esto lo hacemos utilizando la propiedad [`display`](https://www.w3api.com/CSS/display/), a la cual asignamos el valor de `flex`. 


Además trabajaremos tres propiedades más, para darle forma al contenedor. La primera será [`flex-direction`](https://www.w3api.com/CSS/flex-direction/), la cual nos permitirá indicar cómo se organizan los elementos dentro del contenedor. El valor que asignamos el `row`, que nos indica que los elemento se distribuyen como una columna de izquierda a derecha.


La segunda será la propiedad [`flex-wrap`](https://www.w3api.com/CSS/flex-wrap/). En este caso la propiedad [`flex-wrap`](https://www.w3api.com/CSS/flex-wrap/) nos permite indicar si queremos que los elementos salten o no de línea. En nuestro caso no nos interesa que salte de línea ante una redimensión de la pantalla. Por lo que le asignamos el valor de `nowrap`.


Y la tercera será [`justify-content`](https://www.w3api.com/CSS/justify-content/) que va a permitir realizar la colocación de los elementos dentro del contenedor. En este caso le asignamos un valor de space-between que hará que los elementos se distribuyan equitativamente a lo largo del contenedor, de un lado a otro.


```css
.contenedor {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
```


Lo siguiente será centrarnos en los elementos, que serán las columnas de nuestra página. En este caso lo único que haremos será asignarles un 30% del espacio de la página, para que entre los tres elementos se repartan el 90% del contenido. Esto lo conseguimos mediante la propiedad [`width`](https://www.w3api.com/CSS/width/).


```css
.columna {
    width: 30%;
    background-color: #a5d8ff;  
	  padding: 20px;                        
}
```


Por elementos meramente estéticos lo que haremos será añadir un fondo de color azulado mediante la propiedad [`background-color`](https://www.w3api.com/CSS/background-color/) y un poco de espacio dentro del elemento mediante la propiedad [`padding`](https://www.w3api.com/CSS/padding/).


Si cargamos la página en nuestro [navegador web](https://www.ayudaenlaweb.com/navegadores/) veremos el siguiente efecto con las tres columnas:


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SE4PY3J6%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T085622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsZM9aH%2BkeSDjAuoBPzYd1rJvjFwPF0ZCM6ZldWsRZmQIhAMGrxKa2tg6xn0ceGA2B2sYRYmdNaB%2FrpZQPoa5oY4wNKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyUp7CZXSd8PfR8kaYq3APvLYAOdywxPtC4%2BPASbyUWUiQ0JHK1MeXW8FLtZILLGOpZFsWLHBvAvHBWXgXI0jEZwUnj4hd7LFwDww4iCNU6H3zy9PHaNJ8DGw52cRmES9M3noKV1iHhuHB397KLn9sHjNeh84T5U8xcnUhnTzSXxaWHqKu1AQ9uy%2BscOkALi62pyMI0cspw9Bjzv9LYMixxtt3z6SNlYyEfjXnu9S3UQx1yH%2Bgck79oHf5k7Q530mRDFVnge27OwuOqCnzm%2BWyNv7frXziIbHILrXObPNtAxrlMEiC7b2KHjAQ6rkIS3VO8metom%2FQviYpJG3mXQKWO7U66s44VGUEv8esVmvR6CndQSjDyQzOe5tdvt74OGhib0JK9%2FZd1zFyB8oZBnLeOuAdrjZ0vkc3McrCjaHEmx4bDiewLJYJfaHVe1LF5Psjt%2B5Q7PICPBN7srqUaSh4RkXWzmek0l0lxs5X6BOcGbTCE3OsHw2jHoA0XHGCGd82uV1i49LOfgw%2FFhwrJa6Ut7s1wRDT%2FDEz8xumsUnDHxLfF%2F1%2BgJ55fu2mDT4F%2F157gnjh1NR4XsWQNQH6deChqLIfXh6G%2B4F2RWF1elLSaNbD0kb3%2FBmufOrNy66HK%2F3lebAg6BQpL0eZLajCKnNTJBjqkAWUa4SZ64onEJxnQbhRsDTi96zrdg6g4zD0dePcL04WYctkvXt2G1%2Bkh7pxm%2Feqb%2FWn1H25o5J%2F41oxb%2BnzsC9utkMwr68LLTJKdj6qhgSVcr6oona1bRjvBMTChyFcmXtb%2Bn5LVbVqRPMVf4X8wHFeqDojAahw2hA2Wlt%2FBlloSOBkFP78eyHmHlhG8o6oBvBLrrWujl5dUo7Cb60r9MXvLvfgn&X-Amz-Signature=6621c1266aabab3e37ae933947341bcc7a45720e8dec7107286fae19bb4140e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

