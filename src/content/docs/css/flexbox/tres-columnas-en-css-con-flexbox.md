---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DDENWWI%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T064137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQCXtAORjbdmVfJRItUxGJru0wz6JJ1FTS%2BwY2QDWcCXXgIgZ3QWLUq3jwg1Q0Fn5OuY9V9mTvTQBMRIFEEbxwKzEJwq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDAhCKh6uLWfTXWtgASrcAyGkY9HtNjc%2FafCvaCvbmrPle3T2kVx3bZLHnqNQ7IH2%2F8tJ0qlQo2OR8wmowd4nv4S7LuRjdnjGxFHQorQyitc7QIC7Xot5LPkzhjRU%2FZ2t3eUAkWA2EyawJO9b4dmsdIpZJgSqIzvWcLbCYTemVazCvuoZYFFTjivAGpbV%2FDcKo%2BlvA5MA6DvS6hGHKuvLpP%2BGWqkN3t1ewttpjD1ckNO8AMw7C6NsVrMwVuPXP6%2BZjhqSemGTjXbZZ62dthZSMeoEhJk2S1AVumGPjrbuy9rW5hWj%2F%2BCEX0VMRppVWkKO8tWXdMluKqi7N%2FumkM5PlLwNsf9nw7W%2FRPnMB9D7ABE3Z5ft8XJ8syy8Bx0bV2zeY50uiGvUN5x0oEw9TYkL3VihzfVYsciQuCniuNJrpbuQ4eWluXn09kyp6e6TFDkTqpRbtHYp7eaSPmGGfbj349NGnPPCDN5BYUb%2BrY8M4yQMdGaXAulgDmqn1DbaOxA3txzquYOqv2ho8B5KuZ8aO7%2BT75oCcYZZ%2Fi7ZJI0AxTRHa6tZ9YPxq5UPTRyshSfDRzwo2MGg%2BNb0G6lUAmFo7h%2FX7OwZx7cE31m1Fh049p5numqKjjP5OuJKAONHCM6n3GtB9WSndbEMOQ4OMMbKxMkGOqUBTikQnHriM3p4%2Futd0kx8qnfbFB0SEBmswYqiOqZngIVd3sp2NwTMUwTT8q3l77R93iKPLPm%2Fxbys9HK51znMbOCML7qvr2vuH2t%2BN8lOWqDfhtDpKbz6Am3IEiSodzfkuhcSykx7HdxqzgV1URxEl9BpHm4pzXQzIyX6KgGIz5%2BgeKJW2G%2B5fwIOUxNlxxIFyV2r7sO3f0ijSXlRFeUvPUw5Pldq&X-Amz-Signature=898903050ae7abe52a0f86f9926afafcd3d60a202deab24654a4bd25991e4b24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DDENWWI%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T064137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQCXtAORjbdmVfJRItUxGJru0wz6JJ1FTS%2BwY2QDWcCXXgIgZ3QWLUq3jwg1Q0Fn5OuY9V9mTvTQBMRIFEEbxwKzEJwq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDAhCKh6uLWfTXWtgASrcAyGkY9HtNjc%2FafCvaCvbmrPle3T2kVx3bZLHnqNQ7IH2%2F8tJ0qlQo2OR8wmowd4nv4S7LuRjdnjGxFHQorQyitc7QIC7Xot5LPkzhjRU%2FZ2t3eUAkWA2EyawJO9b4dmsdIpZJgSqIzvWcLbCYTemVazCvuoZYFFTjivAGpbV%2FDcKo%2BlvA5MA6DvS6hGHKuvLpP%2BGWqkN3t1ewttpjD1ckNO8AMw7C6NsVrMwVuPXP6%2BZjhqSemGTjXbZZ62dthZSMeoEhJk2S1AVumGPjrbuy9rW5hWj%2F%2BCEX0VMRppVWkKO8tWXdMluKqi7N%2FumkM5PlLwNsf9nw7W%2FRPnMB9D7ABE3Z5ft8XJ8syy8Bx0bV2zeY50uiGvUN5x0oEw9TYkL3VihzfVYsciQuCniuNJrpbuQ4eWluXn09kyp6e6TFDkTqpRbtHYp7eaSPmGGfbj349NGnPPCDN5BYUb%2BrY8M4yQMdGaXAulgDmqn1DbaOxA3txzquYOqv2ho8B5KuZ8aO7%2BT75oCcYZZ%2Fi7ZJI0AxTRHa6tZ9YPxq5UPTRyshSfDRzwo2MGg%2BNb0G6lUAmFo7h%2FX7OwZx7cE31m1Fh049p5numqKjjP5OuJKAONHCM6n3GtB9WSndbEMOQ4OMMbKxMkGOqUBTikQnHriM3p4%2Futd0kx8qnfbFB0SEBmswYqiOqZngIVd3sp2NwTMUwTT8q3l77R93iKPLPm%2Fxbys9HK51znMbOCML7qvr2vuH2t%2BN8lOWqDfhtDpKbz6Am3IEiSodzfkuhcSykx7HdxqzgV1URxEl9BpHm4pzXQzIyX6KgGIz5%2BgeKJW2G%2B5fwIOUxNlxxIFyV2r7sO3f0ijSXlRFeUvPUw5Pldq&X-Amz-Signature=2759c607df8a3f9a9ddfa99ec620ffe02ec55852656e34e78c7c617f19951661&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

