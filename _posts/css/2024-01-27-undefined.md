---
layout: post
title: Tres Columnas en CSS con Flexbox
excerpt: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
categories: CSS
tags: [css flexbox]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCJ27UMH%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T071509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJGMEQCIC22Q3j1l4uWV5YHmvo3YVrccw8gCHDtL8e4%2B9jIW%2BsBAiAR9fLEI5OzKAH8bU0LkoS6YMoTOSvdJLVzncRdk24IhCr%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIMNCvvU2FuS%2FbVlijaKtwDkqIbElU2X%2BEmsDPdhOfB27fYbh55l5WcFeIifUi%2BTx9i6BNlCJ5lZWM68dFZVeHeUkSBpqWg2WJyp1FteiFvUFQeqR%2ByHYZHAS4zjxy%2BkjUbnkCpAgK8ZzxgBt4DhLAtw7XQki%2FlmpziVGt%2Bhw7qCM00UVb%2FeFVJHEwFuIjXIQbBhyONELaTBtkk79ooLOlc4qc2UszUvi9pephTUVmH%2BpMjPNQoPZIHyvb8Z73e3Q3TCJ9hdq3DoyGhRo5ZxyP4LxIPbTJ45NSwumGU47n4RuI4%2FqcoKi0Ijq%2FGQxl7mpENSyRCuiuvCeOCqSXg0XD7WCJOlMO9Dk8UtFv%2BmFh0MKcTQReI66hIBtbCWWjeQ%2BPZ%2Foo0a0D1Sk1MpiyuINXYNeIPCihgDRvSYAUjLdJCfI8RJXOUBmOF3PhhkhdBxs1O5ejuDutzkKBeL3HvR08Dv4T3JGn7KJvWm0ghir8jGGeYCcIgh4hK6ttjdgy%2BLoOtaApnsTAnv8xPedBUAZRRvQMMjGchWgA2D6MMToTnTYVWtVefQnMb8cAJP%2FfF%2BzLTHPt9GLYZZjJ9ZlKod%2Bxd9P512F1BxkXHmi0DTEqv71l6%2FHQfimTnu%2Bu06XoQjFz2M7%2Bob%2FsjGzsy2RAwq7i%2FyQY6pgHIbnIyrGYEZI%2Flg%2F022O4Iej%2BlTAlw%2FBEgg4oouc%2BVvZw1t41au5WGvrR62ew9xETZVy3j8qT4FxS8y5drLl6MipEUaw1QfG9mnzUuW7naN3eeqTj%2FhQeR27u06tyhzUUGXlEiKsgjgM097jYlcB6Leid6173BY9wB4oQFpZgfzuPIv4xdZxFnUNtbX89tyt%2BMl2p%2BNq%2B1GcWPz9NbWK8LqTIW1pFQ&X-Amz-Signature=be920c5ea108909d42c09fb5b399bac65e95045cc70eb02eda2999ae4b882ddc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCJ27UMH%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T071509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJGMEQCIC22Q3j1l4uWV5YHmvo3YVrccw8gCHDtL8e4%2B9jIW%2BsBAiAR9fLEI5OzKAH8bU0LkoS6YMoTOSvdJLVzncRdk24IhCr%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIMNCvvU2FuS%2FbVlijaKtwDkqIbElU2X%2BEmsDPdhOfB27fYbh55l5WcFeIifUi%2BTx9i6BNlCJ5lZWM68dFZVeHeUkSBpqWg2WJyp1FteiFvUFQeqR%2ByHYZHAS4zjxy%2BkjUbnkCpAgK8ZzxgBt4DhLAtw7XQki%2FlmpziVGt%2Bhw7qCM00UVb%2FeFVJHEwFuIjXIQbBhyONELaTBtkk79ooLOlc4qc2UszUvi9pephTUVmH%2BpMjPNQoPZIHyvb8Z73e3Q3TCJ9hdq3DoyGhRo5ZxyP4LxIPbTJ45NSwumGU47n4RuI4%2FqcoKi0Ijq%2FGQxl7mpENSyRCuiuvCeOCqSXg0XD7WCJOlMO9Dk8UtFv%2BmFh0MKcTQReI66hIBtbCWWjeQ%2BPZ%2Foo0a0D1Sk1MpiyuINXYNeIPCihgDRvSYAUjLdJCfI8RJXOUBmOF3PhhkhdBxs1O5ejuDutzkKBeL3HvR08Dv4T3JGn7KJvWm0ghir8jGGeYCcIgh4hK6ttjdgy%2BLoOtaApnsTAnv8xPedBUAZRRvQMMjGchWgA2D6MMToTnTYVWtVefQnMb8cAJP%2FfF%2BzLTHPt9GLYZZjJ9ZlKod%2Bxd9P512F1BxkXHmi0DTEqv71l6%2FHQfimTnu%2Bu06XoQjFz2M7%2Bob%2FsjGzsy2RAwq7i%2FyQY6pgHIbnIyrGYEZI%2Flg%2F022O4Iej%2BlTAlw%2FBEgg4oouc%2BVvZw1t41au5WGvrR62ew9xETZVy3j8qT4FxS8y5drLl6MipEUaw1QfG9mnzUuW7naN3eeqTj%2FhQeR27u06tyhzUUGXlEiKsgjgM097jYlcB6Leid6173BY9wB4oQFpZgfzuPIv4xdZxFnUNtbX89tyt%2BMl2p%2BNq%2B1GcWPz9NbWK8LqTIW1pFQ&X-Amz-Signature=5db1f428753f20599b2ca88437e939125bd7cd563da6085bd9894ed4a9d06937&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

