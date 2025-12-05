---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4EAGNJN%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T230217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICwQUmVhetjAtWaumoBXsrh2Pon0wwNlOufwNpI0MPsFAiB9OmgQ%2FadLm1AG3RmAvZhhlYuxooQRBttRlyFpRyb60yr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMvTr2Dk3IJfFnzrtWKtwDPwkBi7tOwGf8V8e3YfdDDGIj9ae96vPQrbGhA66c%2FggCdiB%2B0ZdHg%2Bbn1hAbCWoFH%2BLOF46LlpsGA8HHPfL7k6G0NDy9fEc91dp12Org25MIgFpEeFEX01mcgpsVY0iD73KqQ6kV6LyYVNZRDifsTVA%2Bk6L1Op9NJZIusJwkO4s%2Fw7HXkPDzuw0OHqMRvY%2BUJHspZs4pF79BTDnQj60HdEjtX6hl0BK0fubFVZugDbCt8dBfuDM5FxZQaDfaeQgzf8b1AYs7w4gWTOaDoLZjATUsA6GkQA4VMig%2FjHK%2FSzsmnPSBXpEo73Z0ueCY5p8Ulhdbp8BiuHJwcjVjmDntpz%2BwIrXDMTLwyXJXQmdj7%2FV72fSQIMvUmxMFjPADgciAFH4jVqM9F8t2L%2FJLx6IFr2rvJ5%2Fyfe1et7VhWxCrBn5c%2B9cywtWrWrM5AISDuHDPat3suKjV8OEHFcyAXmlFjh1dWO35S5ipe%2FYSuJT4uT6EDEoioGCNzAsKYA6ZPabFuKKMK0M74QVEkhPTlDMl5ClShwOonKRnMcLix9R0%2FdU%2BsYQX6rPf0zn2xeWFErCS3sPZTO8C%2FJceDff4q%2FGKt%2Bm%2Fm9rtZDHwjuM%2FuUOB%2BJDgn8ZGSEFLulmLHdUwqMbNyQY6pgHVeojGPJQXoOubHcN0OcWenayvDK1RkhV%2BvN25Pdt9HPKtVzso3%2Bklnj2o%2Fin%2BdsDkdJkChct76jgkpQVKVhlBoPH55ukWeAYsuNgqtqWNOve9XEEnu5oS7yj2JS2kq5co%2FVSxbZUU6E8C01Bczam%2BGbPRE80QqgD6gM9JzXZeTR9RgsRBXeG1PgeR1U1O57N6upAyzh89I7kNmDHrM%2BJPYh6C9a9G&X-Amz-Signature=da453c86db83c38db211ded16df74eed0f408090afabbc775636c57d8714540e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4EAGNJN%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T230217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICwQUmVhetjAtWaumoBXsrh2Pon0wwNlOufwNpI0MPsFAiB9OmgQ%2FadLm1AG3RmAvZhhlYuxooQRBttRlyFpRyb60yr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMvTr2Dk3IJfFnzrtWKtwDPwkBi7tOwGf8V8e3YfdDDGIj9ae96vPQrbGhA66c%2FggCdiB%2B0ZdHg%2Bbn1hAbCWoFH%2BLOF46LlpsGA8HHPfL7k6G0NDy9fEc91dp12Org25MIgFpEeFEX01mcgpsVY0iD73KqQ6kV6LyYVNZRDifsTVA%2Bk6L1Op9NJZIusJwkO4s%2Fw7HXkPDzuw0OHqMRvY%2BUJHspZs4pF79BTDnQj60HdEjtX6hl0BK0fubFVZugDbCt8dBfuDM5FxZQaDfaeQgzf8b1AYs7w4gWTOaDoLZjATUsA6GkQA4VMig%2FjHK%2FSzsmnPSBXpEo73Z0ueCY5p8Ulhdbp8BiuHJwcjVjmDntpz%2BwIrXDMTLwyXJXQmdj7%2FV72fSQIMvUmxMFjPADgciAFH4jVqM9F8t2L%2FJLx6IFr2rvJ5%2Fyfe1et7VhWxCrBn5c%2B9cywtWrWrM5AISDuHDPat3suKjV8OEHFcyAXmlFjh1dWO35S5ipe%2FYSuJT4uT6EDEoioGCNzAsKYA6ZPabFuKKMK0M74QVEkhPTlDMl5ClShwOonKRnMcLix9R0%2FdU%2BsYQX6rPf0zn2xeWFErCS3sPZTO8C%2FJceDff4q%2FGKt%2Bm%2Fm9rtZDHwjuM%2FuUOB%2BJDgn8ZGSEFLulmLHdUwqMbNyQY6pgHVeojGPJQXoOubHcN0OcWenayvDK1RkhV%2BvN25Pdt9HPKtVzso3%2Bklnj2o%2Fin%2BdsDkdJkChct76jgkpQVKVhlBoPH55ukWeAYsuNgqtqWNOve9XEEnu5oS7yj2JS2kq5co%2FVSxbZUU6E8C01Bczam%2BGbPRE80QqgD6gM9JzXZeTR9RgsRBXeG1PgeR1U1O57N6upAyzh89I7kNmDHrM%2BJPYh6C9a9G&X-Amz-Signature=d0fcb7d8fec11a0cb7d78e4b53e3999f5d8bc13d8cfe155d94ed76a8aa38522d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

