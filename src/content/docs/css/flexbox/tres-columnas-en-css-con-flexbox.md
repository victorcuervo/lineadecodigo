---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDP4GDMT%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T125529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmlgA4dN%2FxMWGhxgLVMR%2Binbz55IvPDrhRTx8jI4A9MQIgeRjnNPRsEBfhleZnbNp7OJGdm0sXtZ4sjS6B9IHbnqAq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDAl23B8%2FtnKLl84V1yrcAyfSlFdo4j%2FAQ%2FBywD47rukzweafsgNBE3t2eivNbLCGEyGRmt6uA2MUV99i%2BxF2rCGK4ApFyQZuZ0J0DpaHNcWDcQvFcpRae7rPLI6HGbhLrJjjW%2BMbtitI2n3h59sDaP5qvXdxWa23EM%2BxqoKtHETm%2FO4hj0agSkcELqjox64kNXI53K8GM8sYU5XNTpl68DRk2fg1ecrIk3MDV5NkIibiRJSE1Ml067keaNLjEUaHwXzOgL2oMpmE5mh3JtTNi0zMB2p86a1RhDqeQ8uz%2BfQm0otYdpHm3bFzrrb8XvaWHB5xuJZmhddc%2FNjCIt5oWerAuoz0VSSlB%2F%2F9UB5dSlcGy4anOZfnH9kYHnJl%2FNFuKBHpu3KxzDZ4rN82n8ch4g6Fuq3xwjgcXn6j02dQfrzkIId7w9tPB8AdWuhtJk0q%2FXqv%2BL%2F%2FNo7Yzmf0cK8AAhcvXdE%2FUQGH3sbGB9MOAQC%2FKV9SzUH2xB2ytGN6TAfx7yAKtr6BOLin%2FzOcaOJvbY79qu7YFcfKeAXcrv3Q02Qpq4%2BbJ0FU4OVUL2nF2jLwkl%2BxOh7fS7UAiAAYUm6HiVH2zs5EEYdKH0jUfhH3d52WfLKyF5mNmYVRfHe7dV1P%2FaLoXnnaqq4h027qMMWm0MkGOqUBRlHBnlEokmcpA1b91ewdoKjNxJgGdCIB7xe%2Ff%2BySvS3JPiphdeW24T5vFwA%2BJJxiYLjYIDwJMUrEGgyCPWDQTPMIFB131hYl2o%2F5%2FMckFjTIte6M1YGTEAIILSPpmoIChha%2BizFC%2FgRokaTDhn7K%2BK41mKGR1jAgtW7Mzncp70GCIQ91i8jLZOKVadQrbRuIFBTiCRaakA4sD%2FD88%2FPsO6Wjb1zE&X-Amz-Signature=3da1a936ae83655b373e4fe9474fdf52a7b1fc918caca8c5e4690a15ba94531a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDP4GDMT%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T125529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmlgA4dN%2FxMWGhxgLVMR%2Binbz55IvPDrhRTx8jI4A9MQIgeRjnNPRsEBfhleZnbNp7OJGdm0sXtZ4sjS6B9IHbnqAq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDAl23B8%2FtnKLl84V1yrcAyfSlFdo4j%2FAQ%2FBywD47rukzweafsgNBE3t2eivNbLCGEyGRmt6uA2MUV99i%2BxF2rCGK4ApFyQZuZ0J0DpaHNcWDcQvFcpRae7rPLI6HGbhLrJjjW%2BMbtitI2n3h59sDaP5qvXdxWa23EM%2BxqoKtHETm%2FO4hj0agSkcELqjox64kNXI53K8GM8sYU5XNTpl68DRk2fg1ecrIk3MDV5NkIibiRJSE1Ml067keaNLjEUaHwXzOgL2oMpmE5mh3JtTNi0zMB2p86a1RhDqeQ8uz%2BfQm0otYdpHm3bFzrrb8XvaWHB5xuJZmhddc%2FNjCIt5oWerAuoz0VSSlB%2F%2F9UB5dSlcGy4anOZfnH9kYHnJl%2FNFuKBHpu3KxzDZ4rN82n8ch4g6Fuq3xwjgcXn6j02dQfrzkIId7w9tPB8AdWuhtJk0q%2FXqv%2BL%2F%2FNo7Yzmf0cK8AAhcvXdE%2FUQGH3sbGB9MOAQC%2FKV9SzUH2xB2ytGN6TAfx7yAKtr6BOLin%2FzOcaOJvbY79qu7YFcfKeAXcrv3Q02Qpq4%2BbJ0FU4OVUL2nF2jLwkl%2BxOh7fS7UAiAAYUm6HiVH2zs5EEYdKH0jUfhH3d52WfLKyF5mNmYVRfHe7dV1P%2FaLoXnnaqq4h027qMMWm0MkGOqUBRlHBnlEokmcpA1b91ewdoKjNxJgGdCIB7xe%2Ff%2BySvS3JPiphdeW24T5vFwA%2BJJxiYLjYIDwJMUrEGgyCPWDQTPMIFB131hYl2o%2F5%2FMckFjTIte6M1YGTEAIILSPpmoIChha%2BizFC%2FgRokaTDhn7K%2BK41mKGR1jAgtW7Mzncp70GCIQ91i8jLZOKVadQrbRuIFBTiCRaakA4sD%2FD88%2FPsO6Wjb1zE&X-Amz-Signature=d29786c5b611d68e73c05700c23c23e98ae2f0748773c82fad887733edd3f916&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

