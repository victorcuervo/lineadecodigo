---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZCLCJTD%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T212923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcBUnJ%2FyWhkFIDwmXPs4X4st%2BhdTLfV7DuV7ToMTbAIAIhAKUAokJV2D9XKJpJLy0bgowZlw9auzZD9Y50%2B9rvscvgKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwzqkzS2sVebCGt3Ssq3AP5cA%2BjvMVA4lMZyKTAmR7znT%2F5RlyeaJyBFBZ7NXzb6cSE3a7hIEEmvJx4mXaXMLMJXRJimhS%2B%2F5wqFDtLTDSdTsufPUJoaYDB0r6KsdzZAsZ8lv1x3MrLjcLLLYFzqgZ69V9wuCKKMIHELO5JH%2B2iPdwGdxi34oOOLvwFwnfBHTV2W%2BVJ1%2FTSYOAuEfQpj963vYmNSWZNtnJQVk26GhWdg%2BtMSd5CZgiyEOLT9nsIkPFjizI0jc80Bd%2BrqpflFneF6yZiTen6Rl%2FBuUWki4u2iNwk6QDb%2Bsw4HfR0wyvxnUjXKi%2F94ijOewJYH7%2FX3ZIMa5tjZEviM13XeZ%2FE3uToIjP%2B%2F2fUZhkh4W12nx6odS7I%2FkyIZoL1UvHOy6%2BVLjL0ZU6GncUP0X8WuDVrSc9PXyqfFdBU0hd7wN3dkOLiDecuayhhU0PKazaX%2BZHBDs3qN2FBo7zPx8HSQyEcMnEFvxLogoet9yNu%2BZRN9pfPa%2FPUbLuwuRyQ2ZFmFFOz9aJqGE43Uqp34Y9g0%2F2kagBgYpGkoBVnWh74QtbxGSx2XDo9qulpIqRZN%2B0cREkYF%2BPL864I0VO1mjbShmrLjfCjBmO71pQerJ9dCSIvcSgCu2RBD%2Bau66dHt%2FJYaTCggN3JBjqkAWTPr9xhfV8oAqmWyGRjm%2Fahq0n2YOkHC327OuLAZ2s2jDYBaTTKVtGBBCekhfMG5cXImtqoqfbAC3AIX%2FSuFdOCziWKZQVuRnqh71iVM%2B7Hriv9AaU8WL1ICBVHXVO%2FPpCgo0pdQOhf2gEoRYXgtp05V3%2FO2%2FLSloLeI74CmAFYNkJfs2gcL%2FZ%2FtgmM9B13uwz0ILoDbxagsU1wRcY4fPeA27hA&X-Amz-Signature=1f0bfd9422b3fca56b82f961d282d441aaf19fa940bbf8f4694f01fff28f91b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZCLCJTD%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T212923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcBUnJ%2FyWhkFIDwmXPs4X4st%2BhdTLfV7DuV7ToMTbAIAIhAKUAokJV2D9XKJpJLy0bgowZlw9auzZD9Y50%2B9rvscvgKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwzqkzS2sVebCGt3Ssq3AP5cA%2BjvMVA4lMZyKTAmR7znT%2F5RlyeaJyBFBZ7NXzb6cSE3a7hIEEmvJx4mXaXMLMJXRJimhS%2B%2F5wqFDtLTDSdTsufPUJoaYDB0r6KsdzZAsZ8lv1x3MrLjcLLLYFzqgZ69V9wuCKKMIHELO5JH%2B2iPdwGdxi34oOOLvwFwnfBHTV2W%2BVJ1%2FTSYOAuEfQpj963vYmNSWZNtnJQVk26GhWdg%2BtMSd5CZgiyEOLT9nsIkPFjizI0jc80Bd%2BrqpflFneF6yZiTen6Rl%2FBuUWki4u2iNwk6QDb%2Bsw4HfR0wyvxnUjXKi%2F94ijOewJYH7%2FX3ZIMa5tjZEviM13XeZ%2FE3uToIjP%2B%2F2fUZhkh4W12nx6odS7I%2FkyIZoL1UvHOy6%2BVLjL0ZU6GncUP0X8WuDVrSc9PXyqfFdBU0hd7wN3dkOLiDecuayhhU0PKazaX%2BZHBDs3qN2FBo7zPx8HSQyEcMnEFvxLogoet9yNu%2BZRN9pfPa%2FPUbLuwuRyQ2ZFmFFOz9aJqGE43Uqp34Y9g0%2F2kagBgYpGkoBVnWh74QtbxGSx2XDo9qulpIqRZN%2B0cREkYF%2BPL864I0VO1mjbShmrLjfCjBmO71pQerJ9dCSIvcSgCu2RBD%2Bau66dHt%2FJYaTCggN3JBjqkAWTPr9xhfV8oAqmWyGRjm%2Fahq0n2YOkHC327OuLAZ2s2jDYBaTTKVtGBBCekhfMG5cXImtqoqfbAC3AIX%2FSuFdOCziWKZQVuRnqh71iVM%2B7Hriv9AaU8WL1ICBVHXVO%2FPpCgo0pdQOhf2gEoRYXgtp05V3%2FO2%2FLSloLeI74CmAFYNkJfs2gcL%2FZ%2FtgmM9B13uwz0ILoDbxagsU1wRcY4fPeA27hA&X-Amz-Signature=196ed9ed8a7e4b159dcd2187380f65a4f37ceca2ffaac93bc39811a7362ad27f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

