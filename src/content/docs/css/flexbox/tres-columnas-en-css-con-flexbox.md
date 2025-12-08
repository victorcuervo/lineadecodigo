---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XE5ESSQD%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T120010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDHexbgba1kZGJMWk9XqAFCpcfKEwq5%2B2DPuLwCSNbTrAiEApLlgTeXhPqSz5ueOkDeXueU9HrrWBYVvpSjAJbwDAd4qiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAaAlc%2BvwfBa%2BqzFSircA95fe401y%2B0tVe7aqWO%2BZN%2FcDd62zzW%2F%2FCORk5sMNteTbInIeM6mpNRidAEOMLRj5afa3BM1%2BQny%2FxLEXHfufRxEaZG%2B%2BBXRu4nk1VVGRoKS0%2B%2B1jKr1ZMcZiPAdbin%2BH5kRpCUS%2BnKLn14J7XbDidfyrbZBi8Kppkx6G%2BlgP5rmC9OpK1oUiGYXZeG4eVG5uPNx3ESe9E1FYbkGIwouy2l0UYLbnc3CIpI8wNwibNycErzCd8B0Jz30R2V2H38SmVIiO7pgxwRywFUO3rJ5C4lzRjjwg%2BVEJZLg%2B%2FYN9WO1mtI7XbBLANA13sfZE0GNVqDkUOwz4i1dzGmd8eToORutRliaJH6WF0JygNi%2B8cNJ6Mul4MZDv0c8ilreEBsit8vpbqDIFDyrr57%2FIl0uiIqR0haMX7DznJ8PbVYiKNRPWm3qs5cnk31POQ2%2FsAgB0lSDQEFtDZb%2BNJArUOHPOgjmA4MAkXVU3ZFaAzE3lHkrfylddERLlP5A7am3%2Fni9H6%2FQbm5HaPtKf22tGXBLsP34Sulzn5mxIRxX%2BCD%2FGuzG1hybvbBrE2EuDTJRsTbMVdKed92UbscgLPLJOVXQSkKQyNfSbnQldfet%2FyEvALKXRjpsv0HVedYhPfB1MKjz2skGOqUBiWpumBLUj4TXGWHP%2BWFnLXJ%2FMYMeccz6zsdMqIfdWAFLYkNRHRA1z7hPNzW6l5%2BCrTE6kGzM%2F5kBDIEPZ5YuTuu1PRG2RXlhls8l2A7espxaRQwnQUxCONsd6p8ETx%2BRjXcB0dTqllRvFlixwxu6YOhGboHUJ0mC1ACOToZ3TEgMKfBwGxInPU56%2BbqhBDCKo%2FD7v73mhKr9TZeyej%2FNZgVMZMj1&X-Amz-Signature=f93310e085ab3c4c0b910882cd6f765821d613624e65fb63de63ab8e71d8a37a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XE5ESSQD%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T120010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDHexbgba1kZGJMWk9XqAFCpcfKEwq5%2B2DPuLwCSNbTrAiEApLlgTeXhPqSz5ueOkDeXueU9HrrWBYVvpSjAJbwDAd4qiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAaAlc%2BvwfBa%2BqzFSircA95fe401y%2B0tVe7aqWO%2BZN%2FcDd62zzW%2F%2FCORk5sMNteTbInIeM6mpNRidAEOMLRj5afa3BM1%2BQny%2FxLEXHfufRxEaZG%2B%2BBXRu4nk1VVGRoKS0%2B%2B1jKr1ZMcZiPAdbin%2BH5kRpCUS%2BnKLn14J7XbDidfyrbZBi8Kppkx6G%2BlgP5rmC9OpK1oUiGYXZeG4eVG5uPNx3ESe9E1FYbkGIwouy2l0UYLbnc3CIpI8wNwibNycErzCd8B0Jz30R2V2H38SmVIiO7pgxwRywFUO3rJ5C4lzRjjwg%2BVEJZLg%2B%2FYN9WO1mtI7XbBLANA13sfZE0GNVqDkUOwz4i1dzGmd8eToORutRliaJH6WF0JygNi%2B8cNJ6Mul4MZDv0c8ilreEBsit8vpbqDIFDyrr57%2FIl0uiIqR0haMX7DznJ8PbVYiKNRPWm3qs5cnk31POQ2%2FsAgB0lSDQEFtDZb%2BNJArUOHPOgjmA4MAkXVU3ZFaAzE3lHkrfylddERLlP5A7am3%2Fni9H6%2FQbm5HaPtKf22tGXBLsP34Sulzn5mxIRxX%2BCD%2FGuzG1hybvbBrE2EuDTJRsTbMVdKed92UbscgLPLJOVXQSkKQyNfSbnQldfet%2FyEvALKXRjpsv0HVedYhPfB1MKjz2skGOqUBiWpumBLUj4TXGWHP%2BWFnLXJ%2FMYMeccz6zsdMqIfdWAFLYkNRHRA1z7hPNzW6l5%2BCrTE6kGzM%2F5kBDIEPZ5YuTuu1PRG2RXlhls8l2A7espxaRQwnQUxCONsd6p8ETx%2BRjXcB0dTqllRvFlixwxu6YOhGboHUJ0mC1ACOToZ3TEgMKfBwGxInPU56%2BbqhBDCKo%2FD7v73mhKr9TZeyej%2FNZgVMZMj1&X-Amz-Signature=fe56e3d92b207e1a25e4b1f71cc0f3de170206ae4a93cfa40c5e66be260f6787&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

