---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YE2ZNTER%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T154120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEQcDPMjyOl9N8ipyGCIHSQ0Em13SJWMhHskxnSN61aAAiEA4JpCMSQqJQeKYpG5RpTbbr1FuMIlkjHQjCYro%2FCtXhsq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDHFwkev4ANVOpLVfvircAzY21JeVaK03vaUc7gwwFqFyPixJCDJ60Q2GCxywXMqIUUJkx2XQQltZmFrAiAf1nV%2BBHMaP6B4hBLL0ESKiQyt%2Bnrla6rCFmf00NiHTQT3fSjPBJ2FfbTYCSoo1J5AXLV19EvI%2FT8510TRuyCwE%2BN7NadFkr2PVIhsDajFe28lHRjFZ0%2FTQ7nVWifVfaPe6sBkvbc9pzDL6YBsJiAMQutC1EMyjDtrfhX8YcCIo9LMmaH33n32ieUklp4%2B7X3rtSsRo556yynh3cKi98tb%2F3a2WGY6LWjNHeergpuSqCuOL5prEbkAWH0rpmd89k2Ddd0Tj7gG3RsR6Wp9pIlQTnwJLA2tEdbLxYEpQnKUisiBtgXesJWwMqgMaqhltdSAV1RbJENRkC7JlK6yebg7sc0gCbZDL7ba%2FygRQyaKKU7R9MEG95kq39VTZTJX4Hsy2BaRM5cxeYEzVEqkTpyu2Z7DpN03Wo4Ywp9cwYnDinSr84e0TNg%2BRBfbUH5n9WOXQkopVL20JnTSIFaoIghKuR78i4Ls2it3B%2B9jqld0aPO0iRhIHDgxerj%2FpQNY8EJCwfw5b0eM%2Fb6VkH46Dn%2FdWjSI88aMn2JNDrR%2F7IbQNie4j4GlZMcINdig5dpSMMPem0MkGOqUBk0RLqeXqImCpyWIqC5FGr1c5fkgnHbAS1agO%2F8WKehD7nAMfIeGTKjgcYgY%2FJcYkI0fyBx9T1%2FYUIWc2KW%2FHvwVFK5v7t6sONS4t%2BbvSI8DsDxit0FEfmv3EJxdPeKqYXZ4eFD9v5n2R3ZQm%2BHmvXNxI0tHtzqhOAq6u%2B6Nc3S8O8qDCjFj%2FRAsKfcVN8B1HLxFSHFYDVXcM88l4qvL9H41caFQo&X-Amz-Signature=067bb9087e1b2883e59706e984f0795267d3b05b48e511aefcc338fbbe38bcf0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YE2ZNTER%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T154120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEQcDPMjyOl9N8ipyGCIHSQ0Em13SJWMhHskxnSN61aAAiEA4JpCMSQqJQeKYpG5RpTbbr1FuMIlkjHQjCYro%2FCtXhsq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDHFwkev4ANVOpLVfvircAzY21JeVaK03vaUc7gwwFqFyPixJCDJ60Q2GCxywXMqIUUJkx2XQQltZmFrAiAf1nV%2BBHMaP6B4hBLL0ESKiQyt%2Bnrla6rCFmf00NiHTQT3fSjPBJ2FfbTYCSoo1J5AXLV19EvI%2FT8510TRuyCwE%2BN7NadFkr2PVIhsDajFe28lHRjFZ0%2FTQ7nVWifVfaPe6sBkvbc9pzDL6YBsJiAMQutC1EMyjDtrfhX8YcCIo9LMmaH33n32ieUklp4%2B7X3rtSsRo556yynh3cKi98tb%2F3a2WGY6LWjNHeergpuSqCuOL5prEbkAWH0rpmd89k2Ddd0Tj7gG3RsR6Wp9pIlQTnwJLA2tEdbLxYEpQnKUisiBtgXesJWwMqgMaqhltdSAV1RbJENRkC7JlK6yebg7sc0gCbZDL7ba%2FygRQyaKKU7R9MEG95kq39VTZTJX4Hsy2BaRM5cxeYEzVEqkTpyu2Z7DpN03Wo4Ywp9cwYnDinSr84e0TNg%2BRBfbUH5n9WOXQkopVL20JnTSIFaoIghKuR78i4Ls2it3B%2B9jqld0aPO0iRhIHDgxerj%2FpQNY8EJCwfw5b0eM%2Fb6VkH46Dn%2FdWjSI88aMn2JNDrR%2F7IbQNie4j4GlZMcINdig5dpSMMPem0MkGOqUBk0RLqeXqImCpyWIqC5FGr1c5fkgnHbAS1agO%2F8WKehD7nAMfIeGTKjgcYgY%2FJcYkI0fyBx9T1%2FYUIWc2KW%2FHvwVFK5v7t6sONS4t%2BbvSI8DsDxit0FEfmv3EJxdPeKqYXZ4eFD9v5n2R3ZQm%2BHmvXNxI0tHtzqhOAq6u%2B6Nc3S8O8qDCjFj%2FRAsKfcVN8B1HLxFSHFYDVXcM88l4qvL9H41caFQo&X-Amz-Signature=62dd31e9cdc509daf063e9e560e6d1928b91989e8834b8cdf21d8bbf59b24552&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

