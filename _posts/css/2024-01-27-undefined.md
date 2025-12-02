---
layout: post
title: Tres Columnas en CSS con Flexbox
excerpt: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
categories: CSS
tags: [css flexbox]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7LF52NN%2F20251202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251202T235623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIHv8VpidegFKiu7CxLTchehGB6GNztgKA1Rt3JETye9fAiEAno6gefaeLOQAiDCC6njVtMnDR4mAscZ5M8UE%2FHy1dNUq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDFWdZdGHMkWeONHGgyrcA1M6tI3szUP5ZFeUtHnlhDcX8x7ueJGOAw0wUS070WI4yo1M5XRieAP4MxtO780OnolLFtM%2FktEoKOH1afeJiovkjs1ZzEjhqlXMLaK0bcwLHP8WgRaOKSyTztu%2ByaqOKMe70PBt9H4DbsjXPKxwKr5JX5oFhYEqbJjn2YpdCQ5zdCtg463Lf%2BUBHng5wu2ZIqTIBeGwDUQ5ecoqFCh0Mea57egpNtXw61o7koTK%2FJDT3VTAvdj3cBa7s1DMJkjNixVOmChzk5EqKdQO82dk%2B75dHvsVpoSjCS%2Fl10O14bB4lwB8mpG2ZVv7q7O7SsvHS2AEanTpqmnJ0U6szXEwKEU9yYuXZISKej4eUNNCHneVUvWUIzGL%2F3SvrIzPGoYNyiaq%2FJRyta6wzeIF34Fzcn1NB6qiM%2BfkWU3qSu%2BdwLr0TPdLkI8PmKhc%2B19OS9S1I1zXts1rU5bQVjU4fIeSkhenNEnjO7WDhoFk94TlB3ameIt7cr2Da2kAdrqNn7kAp7waHpSxKDuZ%2FFSpAb3nalvQFZKFemvK6gsxU4vWyBCl7DZMr%2BD59DyXyCGw9Y8RrmsAFyXrJo%2BaxETNoPTfiFBxxo7ugD6wLFBbTI5Q8POFbCxPDsiHNe%2B5ty9sMIvlvckGOqUBhnqCtJufAzhWPO2Qpvnw66MJtCksT7sofe703tghmsYtbyMWEE%2FFfmrdKGT59THBv5%2B7n1VzI4IpvuW9oUckICM607KpQiIIkHeer0rhMa%2FFran5xfzZz%2Fuhg099GIf%2BbqhcBHnzok%2FV1m78HDxNCvGnPGJLancsi7ClBL0ZYfr1fXkA4GthuknJFMpLiY7t9m8ivvgDopvW4iu2Uv8HozyVI%2F6r&X-Amz-Signature=0090af312101b56f7e21597d5d0d187368688d77680354e71a43607f6e24c597&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7LF52NN%2F20251202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251202T235623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIHv8VpidegFKiu7CxLTchehGB6GNztgKA1Rt3JETye9fAiEAno6gefaeLOQAiDCC6njVtMnDR4mAscZ5M8UE%2FHy1dNUq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDFWdZdGHMkWeONHGgyrcA1M6tI3szUP5ZFeUtHnlhDcX8x7ueJGOAw0wUS070WI4yo1M5XRieAP4MxtO780OnolLFtM%2FktEoKOH1afeJiovkjs1ZzEjhqlXMLaK0bcwLHP8WgRaOKSyTztu%2ByaqOKMe70PBt9H4DbsjXPKxwKr5JX5oFhYEqbJjn2YpdCQ5zdCtg463Lf%2BUBHng5wu2ZIqTIBeGwDUQ5ecoqFCh0Mea57egpNtXw61o7koTK%2FJDT3VTAvdj3cBa7s1DMJkjNixVOmChzk5EqKdQO82dk%2B75dHvsVpoSjCS%2Fl10O14bB4lwB8mpG2ZVv7q7O7SsvHS2AEanTpqmnJ0U6szXEwKEU9yYuXZISKej4eUNNCHneVUvWUIzGL%2F3SvrIzPGoYNyiaq%2FJRyta6wzeIF34Fzcn1NB6qiM%2BfkWU3qSu%2BdwLr0TPdLkI8PmKhc%2B19OS9S1I1zXts1rU5bQVjU4fIeSkhenNEnjO7WDhoFk94TlB3ameIt7cr2Da2kAdrqNn7kAp7waHpSxKDuZ%2FFSpAb3nalvQFZKFemvK6gsxU4vWyBCl7DZMr%2BD59DyXyCGw9Y8RrmsAFyXrJo%2BaxETNoPTfiFBxxo7ugD6wLFBbTI5Q8POFbCxPDsiHNe%2B5ty9sMIvlvckGOqUBhnqCtJufAzhWPO2Qpvnw66MJtCksT7sofe703tghmsYtbyMWEE%2FFfmrdKGT59THBv5%2B7n1VzI4IpvuW9oUckICM607KpQiIIkHeer0rhMa%2FFran5xfzZz%2Fuhg099GIf%2BbqhcBHnzok%2FV1m78HDxNCvGnPGJLancsi7ClBL0ZYfr1fXkA4GthuknJFMpLiY7t9m8ivvgDopvW4iu2Uv8HozyVI%2F6r&X-Amz-Signature=81d2d83ea26d74467283ca0021661a38c294ffb56bcf25587ee2605204c7d389&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

