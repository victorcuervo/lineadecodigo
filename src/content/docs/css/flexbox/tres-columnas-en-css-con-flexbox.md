---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MLUOV23%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T185405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGvdtbU03OyHUK2yMGGepN22H9Jb97KShU6yKXv6N%2BpGAiEAzn%2F6KBgVE14KFLZY%2FHrJRPcMFkSehIh0JM864z4hDvcqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPsjy35PlhTZOSWYGircA517A9IC9U4yjnNAHLsQhWoaebU0FmKdPBBVh0LSiH%2BxEnErUVE101RjwjIIQ9cPNG6aCkG%2Bpl0%2BRWBJU%2BcHl8m8e5AUBmWyL132wikBtlVeAadtHBkYcQgFq5PRjoKyqCv%2FdChuugJBRILRLBPTmyJXiVL7n22xAIwh2HwX4ffT7nqjsdBVPKyuqCMLAvdUINz1remr8UVNBfpmekp7xriOrkw2v5zQr7cCmvw5Ypt%2FO4uLYgqKdK0CmyG96H8ZrpcaYhTAtRq%2BKjDGq80BxEgcoSZnRzorKuCi3ksnEBXU6r%2F5xP7NVG6TU46tN414ewUustUxrLBTwBrBBB8RbgjisftfJJJhkNIE7gF%2BhgxlX8TDJ15Rj2LUSeNkZQNYi%2FMoavw3tV2S8TmyBJ%2FkCPIkOXQhWYzlVyQd7FWzVwuei6a%2Fu5kYX1QbO3e7VyzXKrZbhOKl%2FpLuWDN7CFACKfxysf3hvwkRhQjzI6qMbfj7NJI9R8xNa8CEJkKII3K2nrdcu9QMMvjZb4GeMFAeWZ%2F0ayJs1Q%2BzextZsMErGPsMxqG%2BO7A5E%2FJd05KI3tR%2BNhJjQ9INcw5n%2BlgI8FRuVaTPzL%2Bk3DmDqOs%2F2qbO%2Ffzxs%2FBsnQSChUTDnm63MLu51skGOqUBJArRGYBuhEXgF0oiGVxPcTEed2gwKcQs7tDKeOaU3CHIG907H9uKYXGcjYoFyYJdJEr8LYaPz9kMla8dDev0Vnz7CtgWI1jbdiERZoRfoF59ZBedRj0FtSOlNaNKGLG43QEqmSjvTjt%2Beg%2FJdAmmM6fRsf9Efoh5qxwrYwzV8vHXB7mX0trU8FaYEvwKrvZ5gZ0sT28bTXLnFryXhptQn25fFHpT&X-Amz-Signature=e2fd277d1e714bdc2322c8b9da5a621ac0b12cd701903553b6b5d0a0ef460afe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MLUOV23%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T185405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGvdtbU03OyHUK2yMGGepN22H9Jb97KShU6yKXv6N%2BpGAiEAzn%2F6KBgVE14KFLZY%2FHrJRPcMFkSehIh0JM864z4hDvcqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPsjy35PlhTZOSWYGircA517A9IC9U4yjnNAHLsQhWoaebU0FmKdPBBVh0LSiH%2BxEnErUVE101RjwjIIQ9cPNG6aCkG%2Bpl0%2BRWBJU%2BcHl8m8e5AUBmWyL132wikBtlVeAadtHBkYcQgFq5PRjoKyqCv%2FdChuugJBRILRLBPTmyJXiVL7n22xAIwh2HwX4ffT7nqjsdBVPKyuqCMLAvdUINz1remr8UVNBfpmekp7xriOrkw2v5zQr7cCmvw5Ypt%2FO4uLYgqKdK0CmyG96H8ZrpcaYhTAtRq%2BKjDGq80BxEgcoSZnRzorKuCi3ksnEBXU6r%2F5xP7NVG6TU46tN414ewUustUxrLBTwBrBBB8RbgjisftfJJJhkNIE7gF%2BhgxlX8TDJ15Rj2LUSeNkZQNYi%2FMoavw3tV2S8TmyBJ%2FkCPIkOXQhWYzlVyQd7FWzVwuei6a%2Fu5kYX1QbO3e7VyzXKrZbhOKl%2FpLuWDN7CFACKfxysf3hvwkRhQjzI6qMbfj7NJI9R8xNa8CEJkKII3K2nrdcu9QMMvjZb4GeMFAeWZ%2F0ayJs1Q%2BzextZsMErGPsMxqG%2BO7A5E%2FJd05KI3tR%2BNhJjQ9INcw5n%2BlgI8FRuVaTPzL%2Bk3DmDqOs%2F2qbO%2Ffzxs%2FBsnQSChUTDnm63MLu51skGOqUBJArRGYBuhEXgF0oiGVxPcTEed2gwKcQs7tDKeOaU3CHIG907H9uKYXGcjYoFyYJdJEr8LYaPz9kMla8dDev0Vnz7CtgWI1jbdiERZoRfoF59ZBedRj0FtSOlNaNKGLG43QEqmSjvTjt%2Beg%2FJdAmmM6fRsf9Efoh5qxwrYwzV8vHXB7mX0trU8FaYEvwKrvZ5gZ0sT28bTXLnFryXhptQn25fFHpT&X-Amz-Signature=20ccdd3a356a280607dcb63ca4ec797cc852ae939acbd15ab4faf1958562b898&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

