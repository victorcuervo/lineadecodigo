---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NVAXXWB%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T142930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIDWs%2BLcv5J7wtTBgRqJ%2FeoJtHniUnbC%2BlvGSow93AMW0AiEA2qHQZuZR%2Fg%2F9J8g5RMmPcJkvLlBtWK%2BH%2FIzC%2FGYAWq4q%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDOjRVd5oH5MItQaXeyrcA4GOGWDcSeHgncuy95ULqfi3BAf6piYwn01uu0nUedRzCp1rJ1G6TIZuu64nG2Utc9e2%2FJdCPcAGVI60Pby8cbOEMhnVokvnZJhN5oaKZ3DMf1THMTV3x8x5PEwVPSKIkN7v6wX%2FFWHVACNopIcV62jDYPdq3IMU2Zb0tQi3sqtIKHbz%2BJHo9kvoNB5eKHD%2BUehfoL2r4qjGr2oR7xGjdtnb09X%2BPUCH4iBI7BjedKrkcYkOvz6szo%2BuP1Utz2%2BqrzPXHgGRlHcAL0%2FMRVeL00O7g%2FGvSdbzBJYkuQioIC1FrB42rHMApxWruft4sD6XRe2aoTb2Ta8jQE7u8GA7JnAgvU3%2BkOQnBdrXHy5xlihxbZ1bmlKyPBnzEVKwoJ1%2Fh8fvRRUeF7HUy%2BzwD8FivmGMNDURq104%2BdMWtvuWqTgNjK%2BHcW7Fh5gX3fq6TjjTZZ42W541kI1GcAgVUgjG6RIDve5v2BnL0iVUvNYTkvkoSMnLN7v9i9%2B0gyWBAp8nKVXKxEtd3nVSBQuS7lXzgGjXqIuQNQ83wDOOx9yHtTnFZw%2FBqM4D8qa9bZqG1r0ZJFNMKGCHh9b%2FmK2p%2BK5r0KU7JxA4qV9AroQ%2BbHWqTczDpNy8oydAgYRJ0LwHMOuhxskGOqUBkiYGH6Hhxh2MkD%2BJv9KKtoIj8pXfWL5Io2BnNTfZD7PBG%2FCRjvGhx9a5DfhNXGnQoxee2DXvxBf%2B5ZEbU19p697KTb53DDJwRo9ZjYrW6dkuCpIQN4YOkO0SaT862y8WqAROb4MUI0iPklB72AsSoD7SNte47MLVL7e5UF5bnOmpybn5v9qtUu8sa0KVvtfQd%2F7Cf%2BqczWXS5dF12KnxJlbUbV3%2F&X-Amz-Signature=b0c3d05fb5d16c4013e35402dc39addfed0d814964db4ff31ccf48e91da104b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NVAXXWB%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T142930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIDWs%2BLcv5J7wtTBgRqJ%2FeoJtHniUnbC%2BlvGSow93AMW0AiEA2qHQZuZR%2Fg%2F9J8g5RMmPcJkvLlBtWK%2BH%2FIzC%2FGYAWq4q%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDOjRVd5oH5MItQaXeyrcA4GOGWDcSeHgncuy95ULqfi3BAf6piYwn01uu0nUedRzCp1rJ1G6TIZuu64nG2Utc9e2%2FJdCPcAGVI60Pby8cbOEMhnVokvnZJhN5oaKZ3DMf1THMTV3x8x5PEwVPSKIkN7v6wX%2FFWHVACNopIcV62jDYPdq3IMU2Zb0tQi3sqtIKHbz%2BJHo9kvoNB5eKHD%2BUehfoL2r4qjGr2oR7xGjdtnb09X%2BPUCH4iBI7BjedKrkcYkOvz6szo%2BuP1Utz2%2BqrzPXHgGRlHcAL0%2FMRVeL00O7g%2FGvSdbzBJYkuQioIC1FrB42rHMApxWruft4sD6XRe2aoTb2Ta8jQE7u8GA7JnAgvU3%2BkOQnBdrXHy5xlihxbZ1bmlKyPBnzEVKwoJ1%2Fh8fvRRUeF7HUy%2BzwD8FivmGMNDURq104%2BdMWtvuWqTgNjK%2BHcW7Fh5gX3fq6TjjTZZ42W541kI1GcAgVUgjG6RIDve5v2BnL0iVUvNYTkvkoSMnLN7v9i9%2B0gyWBAp8nKVXKxEtd3nVSBQuS7lXzgGjXqIuQNQ83wDOOx9yHtTnFZw%2FBqM4D8qa9bZqG1r0ZJFNMKGCHh9b%2FmK2p%2BK5r0KU7JxA4qV9AroQ%2BbHWqTczDpNy8oydAgYRJ0LwHMOuhxskGOqUBkiYGH6Hhxh2MkD%2BJv9KKtoIj8pXfWL5Io2BnNTfZD7PBG%2FCRjvGhx9a5DfhNXGnQoxee2DXvxBf%2B5ZEbU19p697KTb53DDJwRo9ZjYrW6dkuCpIQN4YOkO0SaT862y8WqAROb4MUI0iPklB72AsSoD7SNte47MLVL7e5UF5bnOmpybn5v9qtUu8sa0KVvtfQd%2F7Cf%2BqczWXS5dF12KnxJlbUbV3%2F&X-Amz-Signature=5022d9f03ecc0474f8c71fcc0504ebc9b96de1d4e48a6a29fdc3dd5514dc97fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

