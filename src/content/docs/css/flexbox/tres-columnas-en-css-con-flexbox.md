---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEEYTI6X%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T204445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDqclKdmg2B9hBJbvu%2FrDFrqpfG7x9Kb62klS7%2BwEgj%2BAiEAsWffnD89JDMroP36C8FsbFsB%2F19eey2plfBBvHXlEsYqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIT4IMnUFznlGrytPCrcA4ARLCvWyKcOeNEi12b4uXLL9ZoKCmlvKMR2By9DFMTxsofiqBVEbsbZ7TQxTVUNspMz2sEcf%2FsWsZD0m2kumgiGhUnJUcDuianva20IO2eLuvwj16dMA%2F%2FV9UyFNAMup%2BJAqWPj8lKcYif%2FqEr%2FKgv4VtNm%2FhaD5ifarOYa0%2BaKgAdN3CXdvXI7TgkzedXAhZpoWGUApx1WX5DO1aH3ndTOHDdRH57bGLgCkJ965MCiVhhDuaeD4Zep%2BOIyo4kHQ3tQcY7M3VOfZ%2BcwKxlwwMhBRe7uM9Dm0HcK9J%2Fv3zYqzkUv4%2BTHOsL89S5FZTwL2MxYmJn02QQ6MyXvvzVTdPFhXTI1X6BfbrGOTyrzzKiCGeFDD%2Fewx%2FLOegavRapkKnG2swRDGp3PhjM5teUFRz3K3ts27OAjRnB%2B7HW333iWzrkTXDjqve%2B5FDwd46lAcRltOsz6yAOtADPgC%2F1sTPzdd97uZ4AxIU3ovoBGbUxPlRv16k4RRkQSVatkzGzDIopyYagR%2FnQWgQ3CltLxw6lGxCEPSyfbGzTuXV6Rfi6OdNTdmVM2So6oMMu5xqfhNwWK8AAj86guJ3DPRw6YJB9SQDRE%2F8FU9FVc7KJt%2Fon1aPwvrSBb4IZgwRWPMNrd3MkGOqUBjcwMLKEnD%2FgpM7XrINXF01T9sGkaCIxKqpFdUBpavPqUqjWRfeb4icfBh8g%2FWreDLVMQhoayN4Jzr5aBB4fOw2dGociHNgfgjoUKp5UYKg0eBl4%2FRKqWeVk3dr9OUZydoiWUcnkM522g3pimgHKSh5xvwDVr%2Bm6Bwo8fjxepjXDJ%2FiIPos93qxv0IvJl2uE8eWIDj%2FjzJWH1X0WpVrfyN0kx5SRa&X-Amz-Signature=735548ab2eed1b5b753ea541b8d362d6daf387b0120c0f83d35a6004a1bc8439&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEEYTI6X%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T204445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDqclKdmg2B9hBJbvu%2FrDFrqpfG7x9Kb62klS7%2BwEgj%2BAiEAsWffnD89JDMroP36C8FsbFsB%2F19eey2plfBBvHXlEsYqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIT4IMnUFznlGrytPCrcA4ARLCvWyKcOeNEi12b4uXLL9ZoKCmlvKMR2By9DFMTxsofiqBVEbsbZ7TQxTVUNspMz2sEcf%2FsWsZD0m2kumgiGhUnJUcDuianva20IO2eLuvwj16dMA%2F%2FV9UyFNAMup%2BJAqWPj8lKcYif%2FqEr%2FKgv4VtNm%2FhaD5ifarOYa0%2BaKgAdN3CXdvXI7TgkzedXAhZpoWGUApx1WX5DO1aH3ndTOHDdRH57bGLgCkJ965MCiVhhDuaeD4Zep%2BOIyo4kHQ3tQcY7M3VOfZ%2BcwKxlwwMhBRe7uM9Dm0HcK9J%2Fv3zYqzkUv4%2BTHOsL89S5FZTwL2MxYmJn02QQ6MyXvvzVTdPFhXTI1X6BfbrGOTyrzzKiCGeFDD%2Fewx%2FLOegavRapkKnG2swRDGp3PhjM5teUFRz3K3ts27OAjRnB%2B7HW333iWzrkTXDjqve%2B5FDwd46lAcRltOsz6yAOtADPgC%2F1sTPzdd97uZ4AxIU3ovoBGbUxPlRv16k4RRkQSVatkzGzDIopyYagR%2FnQWgQ3CltLxw6lGxCEPSyfbGzTuXV6Rfi6OdNTdmVM2So6oMMu5xqfhNwWK8AAj86guJ3DPRw6YJB9SQDRE%2F8FU9FVc7KJt%2Fon1aPwvrSBb4IZgwRWPMNrd3MkGOqUBjcwMLKEnD%2FgpM7XrINXF01T9sGkaCIxKqpFdUBpavPqUqjWRfeb4icfBh8g%2FWreDLVMQhoayN4Jzr5aBB4fOw2dGociHNgfgjoUKp5UYKg0eBl4%2FRKqWeVk3dr9OUZydoiWUcnkM522g3pimgHKSh5xvwDVr%2Bm6Bwo8fjxepjXDJ%2FiIPos93qxv0IvJl2uE8eWIDj%2FjzJWH1X0WpVrfyN0kx5SRa&X-Amz-Signature=8749368566a679b01566d4b632b311da1a27c1651b15fd576fe416c241cfcb3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

