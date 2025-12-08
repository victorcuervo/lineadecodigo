---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GUTFMJK%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T062305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDR%2BNndR0y8JRSvCrtXOAc7NcyJDGAIu83xz%2FPVyod5bwIgCMF1o08llcbQegFBkK0OuAVFoV1eqs8OIqmYIMT1Qq4qiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEYBvFOsjH%2FT1LcidyrcAzpkVH33vQl0DioIrOgW4GNHuVY%2BXU00gyuHycCRnzPk6py73CJ%2BIBSrtyMIzNXwcC1SN18TRQ%2BL6ehWl0QyWhaVWkd5eB3AOi84BQdvfZX7mvp6kSWBU95JMJayONM%2BoeFQIeA5sPiASDNDVWmtK7IUOTk5FJve11ATkDmVK%2BDfY5%2F99GRHrMy5rToPUQJGbB4OzcesBW8d74KWIRN4%2FhlKVSCre5zSPImLSUe0MEl4J8XJyukk9SZg%2BpedUZdaQNmKI9pZobDOl8VK%2F%2BPt61Gdzg6rL5DQyHddKlP2TNd03uNNczLquBXeKWmIHK0ppxcBidu4XDgkpkB9FyRcIAlYXtr2IkDh5%2FmPk3RTqIIuMDdyDCc5OjZkJNVQlLXHGxY7%2BGulxpcHUWHJYS4pwt7Ln0kGLuCr09Z3tz64zHBXPpv%2FKnnqRHq88CPuvsuhCw3YhVcANSZ9wKE%2BQU%2FjXKIuq2%2BcnVTnN4GzQehohXsIwwIQgsfNDDuWpbMF9Bh7i4Ahmq76%2Bu9WVn5hFlrQFQ6%2BHt1n2QL6AjcDr%2B0wdNOUqKlxILCN85OJ0aBgTUeqf%2Fr41DQZKc7WrokHYHsCZS6pkY1mfHyAVE7w7L50N%2FAJSCGvq0asUcJOW5UIMJPQ2ckGOqUBwBYlxciFpuypvlCpHijXWwr1jriek2BH%2FvD5ynJPf%2BwCIVwxQGttNJr53mE6cQp8ieBuNtylqhxIzE69To7g79QCVZFOSAKY0XeBuI%2FmA1X6YcnXiK2K89sOy5NTRS11bfWo9EzsgxvxQW15aXBp9UFmt8r0beB593RWSBp6OJmBydQz88fYeSwnAtIQ0gvmLuA2DHXJ1LdR6OB7cEkU4Mk6DFsf&X-Amz-Signature=75ef198e488a3f7caefcc0c05fa0612f5483b47e5f8f3a9b676c7fb273d072ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GUTFMJK%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T062305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDR%2BNndR0y8JRSvCrtXOAc7NcyJDGAIu83xz%2FPVyod5bwIgCMF1o08llcbQegFBkK0OuAVFoV1eqs8OIqmYIMT1Qq4qiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEYBvFOsjH%2FT1LcidyrcAzpkVH33vQl0DioIrOgW4GNHuVY%2BXU00gyuHycCRnzPk6py73CJ%2BIBSrtyMIzNXwcC1SN18TRQ%2BL6ehWl0QyWhaVWkd5eB3AOi84BQdvfZX7mvp6kSWBU95JMJayONM%2BoeFQIeA5sPiASDNDVWmtK7IUOTk5FJve11ATkDmVK%2BDfY5%2F99GRHrMy5rToPUQJGbB4OzcesBW8d74KWIRN4%2FhlKVSCre5zSPImLSUe0MEl4J8XJyukk9SZg%2BpedUZdaQNmKI9pZobDOl8VK%2F%2BPt61Gdzg6rL5DQyHddKlP2TNd03uNNczLquBXeKWmIHK0ppxcBidu4XDgkpkB9FyRcIAlYXtr2IkDh5%2FmPk3RTqIIuMDdyDCc5OjZkJNVQlLXHGxY7%2BGulxpcHUWHJYS4pwt7Ln0kGLuCr09Z3tz64zHBXPpv%2FKnnqRHq88CPuvsuhCw3YhVcANSZ9wKE%2BQU%2FjXKIuq2%2BcnVTnN4GzQehohXsIwwIQgsfNDDuWpbMF9Bh7i4Ahmq76%2Bu9WVn5hFlrQFQ6%2BHt1n2QL6AjcDr%2B0wdNOUqKlxILCN85OJ0aBgTUeqf%2Fr41DQZKc7WrokHYHsCZS6pkY1mfHyAVE7w7L50N%2FAJSCGvq0asUcJOW5UIMJPQ2ckGOqUBwBYlxciFpuypvlCpHijXWwr1jriek2BH%2FvD5ynJPf%2BwCIVwxQGttNJr53mE6cQp8ieBuNtylqhxIzE69To7g79QCVZFOSAKY0XeBuI%2FmA1X6YcnXiK2K89sOy5NTRS11bfWo9EzsgxvxQW15aXBp9UFmt8r0beB593RWSBp6OJmBydQz88fYeSwnAtIQ0gvmLuA2DHXJ1LdR6OB7cEkU4Mk6DFsf&X-Amz-Signature=05d710ad333ec913dd52d3816593256a6e35b37733ae1257c2255d360dbe59fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

