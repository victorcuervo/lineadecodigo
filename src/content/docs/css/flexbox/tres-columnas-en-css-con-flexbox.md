---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QP4I2KT6%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T035330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDXzMFXEwbfWDavS4BAzG3aVX5FMzXvAwo%2FNbriv5BokQIgUTrjfbXViZVDGlWdABQ4OIltY%2B2IKQ7vBQ11iW6d8ZcqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF6zeYHnEqV%2BdjsXeCrcAwlHPB9qFkxCvD%2FSMCxI0LGWcX%2F903vn6dH2fGNKuGlSJW%2FetwYxYeGEXgf0II2%2BlG06oDiilEYh2D3chzq7FQLp8YUgHskIWHrKtThNNp0kHPA7nW60fsTF40ctASB2A%2FFciSg76Viq2aUVosGHaXhV1%2BvNbFqHckrRHMO8EcgE73Z04wRBPfUekvf6b%2BpJ6msA1lvY4cB3KJzGPiTXf91YPVKX%2BWeWI4bW1q810f1%2FqoJSQ%2BUnKOicWoTuNnxNOPg09Laktg5rNQW6lCjLsj9AemFVLg2fW%2BXQjfSCEmhvyYn4Xcglr8EmHjdSTxmHI0eENWba3O1tWBnFjMAlXzAtjJ4ju6Qi21bzqO2ts5a8JFeuoFsLyIvGnwq8wv6OWV0vyVJSKCSq220dSoDbE4b%2BcOQwlOAtMK3xs39ocp%2FGdMl63VpKLrX%2BrtpkW98liNksIeoDLj4ECakpIIz7gzGvazCKOV0lzgDjY5t5OvSPJ5h1lD9%2FZvPbbSI1ottHd89cJAPYQivxLqktFVDsoh6fBhHPfbujwo0Pv3P30qzubmJb%2BoUG8N23p71Rr8SalMHJdPvV34VJ9PlAvark4jHKMO55u9Kj%2FZi8wNM6sx9b700%2BFDpT9db3BKmiMMWU2ckGOqUBgCC%2BMPI8qINnX3G4ZK%2B9OEAkBfdVa9VcyOdqv21xAMjtb3O1UvMeqM0lffzMmhjiKSk7nS8N%2FU3b0zmOtC%2BorE5ZKyw5a2ppoO0gOWxlwbx73VX8abW39%2BDIaAMfxJsNHR3OpJJWmfm9xCikZ9d%2FE2BfnROC%2BEiyEMZCdeJZv49L2aqdS0x2eOgtRsQZbcBRAfxWH3VkylQzYb1lP0kkaeH0Qz1l&X-Amz-Signature=c396b0da93d44b9489c71f31d828114caae6e2cb5be9ad6ee81ac85684166770&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QP4I2KT6%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T035330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDXzMFXEwbfWDavS4BAzG3aVX5FMzXvAwo%2FNbriv5BokQIgUTrjfbXViZVDGlWdABQ4OIltY%2B2IKQ7vBQ11iW6d8ZcqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF6zeYHnEqV%2BdjsXeCrcAwlHPB9qFkxCvD%2FSMCxI0LGWcX%2F903vn6dH2fGNKuGlSJW%2FetwYxYeGEXgf0II2%2BlG06oDiilEYh2D3chzq7FQLp8YUgHskIWHrKtThNNp0kHPA7nW60fsTF40ctASB2A%2FFciSg76Viq2aUVosGHaXhV1%2BvNbFqHckrRHMO8EcgE73Z04wRBPfUekvf6b%2BpJ6msA1lvY4cB3KJzGPiTXf91YPVKX%2BWeWI4bW1q810f1%2FqoJSQ%2BUnKOicWoTuNnxNOPg09Laktg5rNQW6lCjLsj9AemFVLg2fW%2BXQjfSCEmhvyYn4Xcglr8EmHjdSTxmHI0eENWba3O1tWBnFjMAlXzAtjJ4ju6Qi21bzqO2ts5a8JFeuoFsLyIvGnwq8wv6OWV0vyVJSKCSq220dSoDbE4b%2BcOQwlOAtMK3xs39ocp%2FGdMl63VpKLrX%2BrtpkW98liNksIeoDLj4ECakpIIz7gzGvazCKOV0lzgDjY5t5OvSPJ5h1lD9%2FZvPbbSI1ottHd89cJAPYQivxLqktFVDsoh6fBhHPfbujwo0Pv3P30qzubmJb%2BoUG8N23p71Rr8SalMHJdPvV34VJ9PlAvark4jHKMO55u9Kj%2FZi8wNM6sx9b700%2BFDpT9db3BKmiMMWU2ckGOqUBgCC%2BMPI8qINnX3G4ZK%2B9OEAkBfdVa9VcyOdqv21xAMjtb3O1UvMeqM0lffzMmhjiKSk7nS8N%2FU3b0zmOtC%2BorE5ZKyw5a2ppoO0gOWxlwbx73VX8abW39%2BDIaAMfxJsNHR3OpJJWmfm9xCikZ9d%2FE2BfnROC%2BEiyEMZCdeJZv49L2aqdS0x2eOgtRsQZbcBRAfxWH3VkylQzYb1lP0kkaeH0Qz1l&X-Amz-Signature=3c6683bcaf28f8f68c6c32577a51109670fe84c9273f1f8afe27678442a39f4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

