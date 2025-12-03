---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625W4OX54%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T225047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCIFpQjvATugJsVHZF%2BaZB8ay4pW0FCHSxEXcnpN3%2FTD%2FJAiAbyuLWfJ3TD0WZoZ1iwFjvVPW7qMoos9gHam9S07et3Sr%2FAwg4EAAaDDYzNzQyMzE4MzgwNSIM6dl9nFOH%2BV1sItoPKtwDLCubuW6Nv2QevCcnnhUjV1hKtdfJ6FRFyfsRqFT6Dof%2B0S4Oeh5nGB1DwEal4Hw2zI2LlXH37vnDpHdIH7OFJQM20SNntsHgo7lm4kR4gNY7dzf5p%2Bs%2FBqHapT%2BG2gAGk79NfX6Sd76G545zLCZ2%2B9Hzj2q1qOEkCoC8gXj%2FTvCuXWWYkDDZeIDHQkvyi28a7U%2B02N3WjkVj3Eni5jy7PUcQBXY6SYwRPZyDBWUSwuDHoctnKaihTUcT7cqhrYvmuBLWLYJxx1Js4EGM2mY%2F2rVGszLxnoBZFPLiTg5ZLjB1HiIrW1rGTUUOTRf5uPuM5FvH6u%2F3VtvkXx8fA0BKTMTuGgJdsmMjS%2B68WYFOElPKY6%2FKExiWmbVfC2fowET%2Fox0iGJFHZOMuQM3PjlExjBk7lApHutQYEhIDK5OphvUMFnvRs3TtQfc7isf1IygLMTqoMjSRDTPSphEf0W7xGStwvYyKGiR6mJNurPDIMt6PcmUBxEtkW2BtIWmRQKMbyH5gL6PwDEPejBTF7GLmzepBkh7OKGPZ6d%2BzMJSpAFrz3LoYuoUaPSRdmOroCyYQc74%2BVoByPMPD584jgaM7AZ0EAUOg%2B%2FCWuGxd89kJ%2Bx2%2Bg4OtWTkJXn2fzoYwkfjCyQY6pgH5H4NdQ9u%2F9h5iGzUIBufhK2eAojApS6oMvMeGCk5BgYap072W02TdLefBTHrN7HEoDWZLzJp3EbyGnvuI%2FcB%2FZ3SrWqUFmOta9fQmPp37RlD%2Bd6v1PjuYHogvmQCKkfFWW35JMH%2Fu5tft%2BMzNVDk%2B%2FQJvXMtub%2FsOy07kO0bGjL9ifl3rCyktSewoeKinzrLfxaxC11UQ4WgW7x2Vmiy82F0xIfPb&X-Amz-Signature=e92659e48b0eb21e3c56e019a2d0f3cc7477978d52e5f59c5696aa0e5e2026aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625W4OX54%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T225047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCIFpQjvATugJsVHZF%2BaZB8ay4pW0FCHSxEXcnpN3%2FTD%2FJAiAbyuLWfJ3TD0WZoZ1iwFjvVPW7qMoos9gHam9S07et3Sr%2FAwg4EAAaDDYzNzQyMzE4MzgwNSIM6dl9nFOH%2BV1sItoPKtwDLCubuW6Nv2QevCcnnhUjV1hKtdfJ6FRFyfsRqFT6Dof%2B0S4Oeh5nGB1DwEal4Hw2zI2LlXH37vnDpHdIH7OFJQM20SNntsHgo7lm4kR4gNY7dzf5p%2Bs%2FBqHapT%2BG2gAGk79NfX6Sd76G545zLCZ2%2B9Hzj2q1qOEkCoC8gXj%2FTvCuXWWYkDDZeIDHQkvyi28a7U%2B02N3WjkVj3Eni5jy7PUcQBXY6SYwRPZyDBWUSwuDHoctnKaihTUcT7cqhrYvmuBLWLYJxx1Js4EGM2mY%2F2rVGszLxnoBZFPLiTg5ZLjB1HiIrW1rGTUUOTRf5uPuM5FvH6u%2F3VtvkXx8fA0BKTMTuGgJdsmMjS%2B68WYFOElPKY6%2FKExiWmbVfC2fowET%2Fox0iGJFHZOMuQM3PjlExjBk7lApHutQYEhIDK5OphvUMFnvRs3TtQfc7isf1IygLMTqoMjSRDTPSphEf0W7xGStwvYyKGiR6mJNurPDIMt6PcmUBxEtkW2BtIWmRQKMbyH5gL6PwDEPejBTF7GLmzepBkh7OKGPZ6d%2BzMJSpAFrz3LoYuoUaPSRdmOroCyYQc74%2BVoByPMPD584jgaM7AZ0EAUOg%2B%2FCWuGxd89kJ%2Bx2%2Bg4OtWTkJXn2fzoYwkfjCyQY6pgH5H4NdQ9u%2F9h5iGzUIBufhK2eAojApS6oMvMeGCk5BgYap072W02TdLefBTHrN7HEoDWZLzJp3EbyGnvuI%2FcB%2FZ3SrWqUFmOta9fQmPp37RlD%2Bd6v1PjuYHogvmQCKkfFWW35JMH%2Fu5tft%2BMzNVDk%2B%2FQJvXMtub%2FsOy07kO0bGjL9ifl3rCyktSewoeKinzrLfxaxC11UQ4WgW7x2Vmiy82F0xIfPb&X-Amz-Signature=2aa085c2ea6290d9acf1f253aec9d08a62c5d2a8883a71c57fea30be402692f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

