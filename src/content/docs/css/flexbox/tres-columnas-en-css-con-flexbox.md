---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VVCUM2B%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T151826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFusUF0yLChrxThfQwEJLxEr5KsQxf7sEngJgYmqVji7AiEAwPQhyP%2FzHKptrNn92ag2YkjuO%2FYcDmTwWRsE4Zkd3b0qiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHMzrRBko4kmPYyfCircA7A3RV7y1KBovBB27JRoCGxg9dTzvHLETj9fCgjA9jOEFRkZrgIX85uN9TgoE5N4MttgBsBH1xPZNBoDC9K3cG0NZAqQGC%2FPu8POW9fcYozRTkzcYqS2IJNEjsatHEamMtLICSawmtTT4iRfqdR5VQ4EmJhhWBjnqrLilRsyO6I7%2F3jIKrTqd9YBdpllzFqDjOgux5lC2210jV3mtHsuWqjwe%2F2RjO4UW%2FEVo6yasTqDOhs3tMHlKVPMKQIwraTz6G9yObv5fr084NJ3o4p%2F%2BGmCbjSBTOfarVf%2FINoWifloiwec8aU69y59nI7ij%2Frn%2FHEohI6DKZUBl16hDkCnzfXtSmTRscmFp1QnWEfm43tGAnprSg3g0mSGnnOPzGpQYKKYNi5RKpfliR%2FLM%2BuHj7oZQyeBXDoIM9QA4V4J0measnALtVMvXzztPn54M7TQvdG%2By%2BmYaZCBiw8T9TJIySRtatt55GITuwRRfqa3vGlKAXEIUYh0PqQSy2VLgZx9RfOeJRLaauLL6Xm9zSfhF83KpDoID%2Filrcq7BdwJ9T5zL6fXRO583Q9V7waZiNB5GhImIdNBf3Bf1o1R368kMDd2v3aocpNDBMjCz4vd%2BveLbWSXEOszs0wILB6bMMLB28kGOqUBQT8m2O7dQolubPxyIAy2cQXsrnHbUUUYNe0YE6g4oNFjqKgbCzYxCOstg%2FnqpT1n8Fsp86xAukqeyscMawNNsqIE%2BoFbFhcWEbhZ%2BDO9%2BPpRzUnEwndQ5uqH2JCGdAXRjEdP20xaiIF2jO9MjfIZwIWMG1jSMB0QKUrnvER9U3VNFS9gVXnfrGvcIMXBff0WVYYcxDNOgZYJCQw9zmUsWFS%2BEkYJ&X-Amz-Signature=a533627c0053df732b3abdb76ac941833a1820e435bc696ad6effac4c1427b2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VVCUM2B%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T151826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFusUF0yLChrxThfQwEJLxEr5KsQxf7sEngJgYmqVji7AiEAwPQhyP%2FzHKptrNn92ag2YkjuO%2FYcDmTwWRsE4Zkd3b0qiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHMzrRBko4kmPYyfCircA7A3RV7y1KBovBB27JRoCGxg9dTzvHLETj9fCgjA9jOEFRkZrgIX85uN9TgoE5N4MttgBsBH1xPZNBoDC9K3cG0NZAqQGC%2FPu8POW9fcYozRTkzcYqS2IJNEjsatHEamMtLICSawmtTT4iRfqdR5VQ4EmJhhWBjnqrLilRsyO6I7%2F3jIKrTqd9YBdpllzFqDjOgux5lC2210jV3mtHsuWqjwe%2F2RjO4UW%2FEVo6yasTqDOhs3tMHlKVPMKQIwraTz6G9yObv5fr084NJ3o4p%2F%2BGmCbjSBTOfarVf%2FINoWifloiwec8aU69y59nI7ij%2Frn%2FHEohI6DKZUBl16hDkCnzfXtSmTRscmFp1QnWEfm43tGAnprSg3g0mSGnnOPzGpQYKKYNi5RKpfliR%2FLM%2BuHj7oZQyeBXDoIM9QA4V4J0measnALtVMvXzztPn54M7TQvdG%2By%2BmYaZCBiw8T9TJIySRtatt55GITuwRRfqa3vGlKAXEIUYh0PqQSy2VLgZx9RfOeJRLaauLL6Xm9zSfhF83KpDoID%2Filrcq7BdwJ9T5zL6fXRO583Q9V7waZiNB5GhImIdNBf3Bf1o1R368kMDd2v3aocpNDBMjCz4vd%2BveLbWSXEOszs0wILB6bMMLB28kGOqUBQT8m2O7dQolubPxyIAy2cQXsrnHbUUUYNe0YE6g4oNFjqKgbCzYxCOstg%2FnqpT1n8Fsp86xAukqeyscMawNNsqIE%2BoFbFhcWEbhZ%2BDO9%2BPpRzUnEwndQ5uqH2JCGdAXRjEdP20xaiIF2jO9MjfIZwIWMG1jSMB0QKUrnvER9U3VNFS9gVXnfrGvcIMXBff0WVYYcxDNOgZYJCQw9zmUsWFS%2BEkYJ&X-Amz-Signature=e5c36d1b7c239c984ea08ed88bf870f74d8df6860cca15927c54d657387560bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

