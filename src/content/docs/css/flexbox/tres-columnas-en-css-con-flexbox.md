---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHFVFYDF%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T234347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICN1jpvHPjNvTpl9qD9zLErYK1A3y9iLFgW6NXbbCHJeAiAYDPk21%2BBG5re3rJwbjIonjMhAJFp4RxR6nmnhuIfvaSr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIM2te54lsUFX3a%2FVzLKtwD96a8L5VEi6jeYtz6kDUNihEJg6EkTBluGZiczJ%2BggIi8SkcZimYeD7xcEIBINEFeG8vUuG%2BqygoY1cGioE%2BcJxeHeNF7ZoePgg67%2BXKU4PVPpQHfdJTh2bICwfTatbEMVQfKvfXkuT1WbTv%2FQb%2Fh89zWadeC7HF6buskY0eneZhv5tjle0I6sxwek8jWWre8uUkW4X%2Bm5kw68eWf2YHhC8wjXOWymvvyTMy%2FoFcYHnSAGSnW2VyiVb7sVErLNKm%2BB%2Fv0exjsU43GO82HMZzQsj0kMeFFCoyOe1w9VOyw3ZT3w46LuLTJAE66fWFe%2Fg7XjoTtfGItmIFr5BFafkuhQc3sk6AA20sfty4XMUp%2FXfNDowO7W3h1uaZOKP0vvO1gA6YFNMYrfrep9JB4BAfKvV7CaFfCeP09pQe47ycF%2FW17K%2BsgFs5FQPCrGXLEirKsBW9EQH77Y%2FYVrw9Q59F9rHXiRCJktbT7OlRXChYF13Ry5lTWujwBlTXvbeephEM3W64ayrkk2ua81GIvMaGhdtsgOkgwBtzPZqQLUsAUHRgslKppcK7TVa%2FRFDEP94lys7ZU6Ziozk%2BOxKgK1m%2BaeVr8IQUjqtf4GifuUrdLd2T0xRo5hIjGhFvGg2owq4zIyQY6pgG6P8%2Bl8AWYt69s6cht35qyaNASZVXjkeWr9b3kyof2gcth958Vti%2BVraDImSkCMxqXl7yfijYAnv5As3DZT2%2FEd2VHVigioZappWs%2FfSd2l700wj%2Bs3mF4DLp7n%2FzmVk1hIx0f248UbeLfB07pJidjioa%2Bp%2FhEz2N7I%2BZBp%2FsRQ1BkYmD4LA2Cs88hsil3JnaMWe5KlTd9tEnBbkX8a5zUnCZd0zOl&X-Amz-Signature=d34b21470d3efc48fdc85bdac8cf87bd6e000a25db772d489f867b41e68860cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHFVFYDF%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T234347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICN1jpvHPjNvTpl9qD9zLErYK1A3y9iLFgW6NXbbCHJeAiAYDPk21%2BBG5re3rJwbjIonjMhAJFp4RxR6nmnhuIfvaSr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIM2te54lsUFX3a%2FVzLKtwD96a8L5VEi6jeYtz6kDUNihEJg6EkTBluGZiczJ%2BggIi8SkcZimYeD7xcEIBINEFeG8vUuG%2BqygoY1cGioE%2BcJxeHeNF7ZoePgg67%2BXKU4PVPpQHfdJTh2bICwfTatbEMVQfKvfXkuT1WbTv%2FQb%2Fh89zWadeC7HF6buskY0eneZhv5tjle0I6sxwek8jWWre8uUkW4X%2Bm5kw68eWf2YHhC8wjXOWymvvyTMy%2FoFcYHnSAGSnW2VyiVb7sVErLNKm%2BB%2Fv0exjsU43GO82HMZzQsj0kMeFFCoyOe1w9VOyw3ZT3w46LuLTJAE66fWFe%2Fg7XjoTtfGItmIFr5BFafkuhQc3sk6AA20sfty4XMUp%2FXfNDowO7W3h1uaZOKP0vvO1gA6YFNMYrfrep9JB4BAfKvV7CaFfCeP09pQe47ycF%2FW17K%2BsgFs5FQPCrGXLEirKsBW9EQH77Y%2FYVrw9Q59F9rHXiRCJktbT7OlRXChYF13Ry5lTWujwBlTXvbeephEM3W64ayrkk2ua81GIvMaGhdtsgOkgwBtzPZqQLUsAUHRgslKppcK7TVa%2FRFDEP94lys7ZU6Ziozk%2BOxKgK1m%2BaeVr8IQUjqtf4GifuUrdLd2T0xRo5hIjGhFvGg2owq4zIyQY6pgG6P8%2Bl8AWYt69s6cht35qyaNASZVXjkeWr9b3kyof2gcth958Vti%2BVraDImSkCMxqXl7yfijYAnv5As3DZT2%2FEd2VHVigioZappWs%2FfSd2l700wj%2Bs3mF4DLp7n%2FzmVk1hIx0f248UbeLfB07pJidjioa%2Bp%2FhEz2N7I%2BZBp%2FsRQ1BkYmD4LA2Cs88hsil3JnaMWe5KlTd9tEnBbkX8a5zUnCZd0zOl&X-Amz-Signature=3478e1fae6ee341fa182f4dd6c108ea821667408ff20baf29f1690370ea877ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

