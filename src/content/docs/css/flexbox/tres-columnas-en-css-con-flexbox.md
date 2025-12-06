---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOVFZ54T%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T115718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIERiZNpsdB6Gc0f%2F4HRmnmywKS5YW2eATIAy1aFsfhuJAiEApoUEcnhyhnJ05WL%2Ft6FNhqfTiO3JieaIPiQ9YQ27S60q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDC79gwX08r%2BhAX3fgyrcA4JJTf1V%2BrH74leWf64oL4bFhFGV2r2z0F2OlgnhZJNH6o8iHynapB3Ui8Mtf6%2BK%2B1XKgD7ZfWXivsUNo7vWkQGjzQ0mk9w0EJg9qHBJf7IxTV%2F9PO3hJr89ij%2BV84gjFLazur3yJPLoin6DmnU3c6qzYDw%2B8eeWC9fjuucKzwp2OSEjUnXeyGRgrg7RCPxwR13C40UuZOFidNe41OEGZ1dnd9WU%2Bo4qokI6r06SBajvMOK2Oo4GZSWwXHqzd3HSmfBLPBxRayre5dHQTos5n2sbSfhjWhsXUoI8DpZDvLQane2M5MkJIC1PgoHPeTW5dermX%2BipooZd3strG2f3wzu5AJkuZmCdwYjZXBLx9nR773JU2jXm7bAy7N%2FC76bput14GwHOxiETog3lgAniDMnDT6wvf8NG0C2rMLHEnDpLiQ1pEa9fCsC7yt%2BHs583VnGNoDi4KgVqfC%2F79yif%2Bbo3SOv6C1knqjty8uzp%2ByrWnafSoZCtmFWYA1Jcn%2FlHYS3QKb%2FN6bTpeQoHySZhNWsl1pI%2B5O975qdJxalhubkb6rum3n8eelRFSL%2BwMQ53YUU9FVebLzhtqZAfpql8o%2F3fp%2FG%2BXfduY%2Bql6BHZpEXc1kWXgJiDnRF%2FQKL5MOKm0MkGOqUB6gIP%2Bno12WGP%2BwvDrDyOevRSy%2BXdingriqG5KD8EojUCv0PB%2BO597BQdJyGDFkg7nO0CIc7L4bbNQBHuz6vfWbujBxdHkzj5nrzOUbPPu%2F5p0F2f6yk%2FMpfxlwuQpxAC1izGot6Hg%2BAO6HArkj%2FfUF%2Bpa6ud1zmmPb8%2BS%2FRowyFO1lEPyYAZxCMYa8B2u1SRBICZuLSORX1dxqZxJ0x9ermWfGt4&X-Amz-Signature=a69cdfac70774c13894f6c432f10a3d2bb0cdcaf1e479a7aa75950cbeec13b31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOVFZ54T%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T115718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIERiZNpsdB6Gc0f%2F4HRmnmywKS5YW2eATIAy1aFsfhuJAiEApoUEcnhyhnJ05WL%2Ft6FNhqfTiO3JieaIPiQ9YQ27S60q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDC79gwX08r%2BhAX3fgyrcA4JJTf1V%2BrH74leWf64oL4bFhFGV2r2z0F2OlgnhZJNH6o8iHynapB3Ui8Mtf6%2BK%2B1XKgD7ZfWXivsUNo7vWkQGjzQ0mk9w0EJg9qHBJf7IxTV%2F9PO3hJr89ij%2BV84gjFLazur3yJPLoin6DmnU3c6qzYDw%2B8eeWC9fjuucKzwp2OSEjUnXeyGRgrg7RCPxwR13C40UuZOFidNe41OEGZ1dnd9WU%2Bo4qokI6r06SBajvMOK2Oo4GZSWwXHqzd3HSmfBLPBxRayre5dHQTos5n2sbSfhjWhsXUoI8DpZDvLQane2M5MkJIC1PgoHPeTW5dermX%2BipooZd3strG2f3wzu5AJkuZmCdwYjZXBLx9nR773JU2jXm7bAy7N%2FC76bput14GwHOxiETog3lgAniDMnDT6wvf8NG0C2rMLHEnDpLiQ1pEa9fCsC7yt%2BHs583VnGNoDi4KgVqfC%2F79yif%2Bbo3SOv6C1knqjty8uzp%2ByrWnafSoZCtmFWYA1Jcn%2FlHYS3QKb%2FN6bTpeQoHySZhNWsl1pI%2B5O975qdJxalhubkb6rum3n8eelRFSL%2BwMQ53YUU9FVebLzhtqZAfpql8o%2F3fp%2FG%2BXfduY%2Bql6BHZpEXc1kWXgJiDnRF%2FQKL5MOKm0MkGOqUB6gIP%2Bno12WGP%2BwvDrDyOevRSy%2BXdingriqG5KD8EojUCv0PB%2BO597BQdJyGDFkg7nO0CIc7L4bbNQBHuz6vfWbujBxdHkzj5nrzOUbPPu%2F5p0F2f6yk%2FMpfxlwuQpxAC1izGot6Hg%2BAO6HArkj%2FfUF%2Bpa6ud1zmmPb8%2BS%2FRowyFO1lEPyYAZxCMYa8B2u1SRBICZuLSORX1dxqZxJ0x9ermWfGt4&X-Amz-Signature=4f4785a5aabdc49443ea27103239c458f21a1caa683b24beac07c3f49255544b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

