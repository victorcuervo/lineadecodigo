---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TJ4ABR2%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T144415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFRK%2Bnq%2FXTt0XHHpW1hHQlu%2FMQ2bzoyzD84ywDxIjcIvAiEA0KcFbeecXhaLmhNdm0sGhj719X7kCAlTRFDOnYELQuwq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDL8FUIbxVsS9cpJyZyrcAy9qSooryqaEJfe7ahZMKRgSgfWjTPc7y8j814RYDydPat0TN8ZYbc0EOzTaXPJa%2F6t6LUDhji7N5qAf5LuwGsii%2Bwd8Nzl5Q1EeFdPYuz%2BXzMieqXWO569MRFYoedquRL8GUn3L71FfxL%2Fl8%2BIUf29tuF%2FIZbaqngNWwsfjMzeUeVwTyAsMA46xVewunYuvG8zPU08y8Y7GhRE%2BbW%2BkS699XfWvHlzFa1V7GvPysmN7WzQw9MmjxidTiq7JiN6k3pxwMt6uSdIEG5RpMpx5tQrlRc0PYFdmiO3fyr6oa8kR3KN3Cg0ar0HxTkck86QXmrDk3xHFE21%2F9yVI9yU9%2F%2BqO6KsNm1qzz0cIwBn5gXTEC8KCgAJv6UigOKgsdCX7rQeK4hVMNdxZjjuLpeeHpoXef01RYp4m%2FKkVlReBmAHi04KxXeCflT0xeiLf19SmbQ4bZ%2BwJdfWnIoxwZDFQ47EEREBh6Zar327RqbyX3feNJ0bMbnAo%2Fw%2B2Ou%2BqCNttoJ6NUoSJrHFa9WxoGhD5JTOb3sDfTgAo9y1V1CiH%2FxXUpvJRIfph4r4vZMS3ZdvM3jdYqSa5wXd4XVHArblhK0zXO7ruKQu7Fylv%2F537nc4%2FWNaedGVtLqWeMjIrMNim0MkGOqUBlLVjB5lMpptQXJCDS%2BwSLmP0A6PgFkjZE8swKIz1bVyfWw5%2BT9xLEDC9ttk7A3wIwcb7MmT%2BU1lZN3fvrgjWuYao97uFjMoOuAqi%2F3T%2BjWgDwHVRq8N463ck0HxuDUyG%2FIMWO3%2FGZERPLEdfpm1%2F2AljIIjvM730I7J6ojZer%2BEirBzSXSGZ9V8GiCbE5nCtUkc8RuMzamYpleclhzNR5T1NzGK2&X-Amz-Signature=8294252287812ebad079777a372d07625b7b05dbeb47f67e9a3447aabd9fdf3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TJ4ABR2%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T144415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFRK%2Bnq%2FXTt0XHHpW1hHQlu%2FMQ2bzoyzD84ywDxIjcIvAiEA0KcFbeecXhaLmhNdm0sGhj719X7kCAlTRFDOnYELQuwq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDL8FUIbxVsS9cpJyZyrcAy9qSooryqaEJfe7ahZMKRgSgfWjTPc7y8j814RYDydPat0TN8ZYbc0EOzTaXPJa%2F6t6LUDhji7N5qAf5LuwGsii%2Bwd8Nzl5Q1EeFdPYuz%2BXzMieqXWO569MRFYoedquRL8GUn3L71FfxL%2Fl8%2BIUf29tuF%2FIZbaqngNWwsfjMzeUeVwTyAsMA46xVewunYuvG8zPU08y8Y7GhRE%2BbW%2BkS699XfWvHlzFa1V7GvPysmN7WzQw9MmjxidTiq7JiN6k3pxwMt6uSdIEG5RpMpx5tQrlRc0PYFdmiO3fyr6oa8kR3KN3Cg0ar0HxTkck86QXmrDk3xHFE21%2F9yVI9yU9%2F%2BqO6KsNm1qzz0cIwBn5gXTEC8KCgAJv6UigOKgsdCX7rQeK4hVMNdxZjjuLpeeHpoXef01RYp4m%2FKkVlReBmAHi04KxXeCflT0xeiLf19SmbQ4bZ%2BwJdfWnIoxwZDFQ47EEREBh6Zar327RqbyX3feNJ0bMbnAo%2Fw%2B2Ou%2BqCNttoJ6NUoSJrHFa9WxoGhD5JTOb3sDfTgAo9y1V1CiH%2FxXUpvJRIfph4r4vZMS3ZdvM3jdYqSa5wXd4XVHArblhK0zXO7ruKQu7Fylv%2F537nc4%2FWNaedGVtLqWeMjIrMNim0MkGOqUBlLVjB5lMpptQXJCDS%2BwSLmP0A6PgFkjZE8swKIz1bVyfWw5%2BT9xLEDC9ttk7A3wIwcb7MmT%2BU1lZN3fvrgjWuYao97uFjMoOuAqi%2F3T%2BjWgDwHVRq8N463ck0HxuDUyG%2FIMWO3%2FGZERPLEdfpm1%2F2AljIIjvM730I7J6ojZer%2BEirBzSXSGZ9V8GiCbE5nCtUkc8RuMzamYpleclhzNR5T1NzGK2&X-Amz-Signature=372b1ebeac93405f6082aa2d82dca393f549520a56e3bd7c7220bcf8ce27af07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

