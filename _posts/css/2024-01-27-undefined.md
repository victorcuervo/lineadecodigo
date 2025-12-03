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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CNZZXT2%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T053632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQC5Q65IQsl3IHchjLYweGzwPYUY0DpTAESWx22bIdvE0gIgbuacJFJWCmxWoklMcYFNTOhSLIxw%2Bc2C4Krwh%2B2ltokq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDD8NsYqXyh74JBONyCrcAyfVK1WhfPUXeOtjHHkIU7KgpmhKKa5iYq2XNstaPlHRGFPb%2FFGbNjZRJvqeRr1hAeuPBv%2BhpjnFA5ndeXb7XILNHIQbZpF50%2B3XauzVjolwyoGvrJdx0wih%2B0inRAtGFHN3NAq8SRrORP6aYpkNocQ6ThsSy73DqGE0hxF%2BaJd86n6rSkGSDU5KCjqa3lqM46GjtgGCVEpxtonlyYTIj0yr2zWvZE7Dq84KDV%2FhpnJkN0kZBfBdHJiVp4XX8frSkvwhYzkcj7Ubu1eo4XmcdIhXnwSKn%2BvXw%2B12dzrie0sJQ%2FXVSREHta0%2BPso8qZs2E3l%2FCDR7Vk44afupXVTjLQE%2FzFLdtWevjURGt5TVsVKcjPCX3P023IUAt6CSli4fkgKoZur0EmkxBazQSc77wOtUxo9cG9El4Vj6d0zuiPuJdHUCR%2FmUnicYjLY0PA5zMJdvO3zNo%2FZWLjIY7ZYyX10YOuYYzLSTtV%2BSBLVTr6RXy%2BeAUoDMefdQNR8OP%2FdMjRZ%2F%2BT8k3KCbJ3gpcV1anTwIPqKKcH2YSqHozXGJtLXAs4ZUWFrvRIesDGRRgUtRvokAnYcMmb5zDDiNTfuKMPZruF20MDEYZcyn%2FESOMte49CGSoP6VYAuU%2Bj95MMSUvskGOqUB6IFNnPSATm6zHdhtZMtKiPaIgqck2O94QijeUQmcvXrARc1rRPa%2FBK0%2FEXBUzOUFN9cNcJbkQtE2GRkyE9M7V%2Fz8BKghRi%2Bgh0yfAbqlU%2FXzD2PN1gE6Y%2Bl4yT0ErFGqiE%2Fulq%2FIk5%2Fw2QMNImZnbpjxrEADlfKzC2kAg9InVe4QmIUpcgA6vZy2nY32OhhpOy1tK%2Fr7Am5hmnsXpoEOzu6V9xkv&X-Amz-Signature=fb2e1ddb5fa45275e805f7daf4eb22606638c46c59b2b215acc9bb52de5abb04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CNZZXT2%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T053632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQC5Q65IQsl3IHchjLYweGzwPYUY0DpTAESWx22bIdvE0gIgbuacJFJWCmxWoklMcYFNTOhSLIxw%2Bc2C4Krwh%2B2ltokq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDD8NsYqXyh74JBONyCrcAyfVK1WhfPUXeOtjHHkIU7KgpmhKKa5iYq2XNstaPlHRGFPb%2FFGbNjZRJvqeRr1hAeuPBv%2BhpjnFA5ndeXb7XILNHIQbZpF50%2B3XauzVjolwyoGvrJdx0wih%2B0inRAtGFHN3NAq8SRrORP6aYpkNocQ6ThsSy73DqGE0hxF%2BaJd86n6rSkGSDU5KCjqa3lqM46GjtgGCVEpxtonlyYTIj0yr2zWvZE7Dq84KDV%2FhpnJkN0kZBfBdHJiVp4XX8frSkvwhYzkcj7Ubu1eo4XmcdIhXnwSKn%2BvXw%2B12dzrie0sJQ%2FXVSREHta0%2BPso8qZs2E3l%2FCDR7Vk44afupXVTjLQE%2FzFLdtWevjURGt5TVsVKcjPCX3P023IUAt6CSli4fkgKoZur0EmkxBazQSc77wOtUxo9cG9El4Vj6d0zuiPuJdHUCR%2FmUnicYjLY0PA5zMJdvO3zNo%2FZWLjIY7ZYyX10YOuYYzLSTtV%2BSBLVTr6RXy%2BeAUoDMefdQNR8OP%2FdMjRZ%2F%2BT8k3KCbJ3gpcV1anTwIPqKKcH2YSqHozXGJtLXAs4ZUWFrvRIesDGRRgUtRvokAnYcMmb5zDDiNTfuKMPZruF20MDEYZcyn%2FESOMte49CGSoP6VYAuU%2Bj95MMSUvskGOqUB6IFNnPSATm6zHdhtZMtKiPaIgqck2O94QijeUQmcvXrARc1rRPa%2FBK0%2FEXBUzOUFN9cNcJbkQtE2GRkyE9M7V%2Fz8BKghRi%2Bgh0yfAbqlU%2FXzD2PN1gE6Y%2Bl4yT0ErFGqiE%2Fulq%2FIk5%2Fw2QMNImZnbpjxrEADlfKzC2kAg9InVe4QmIUpcgA6vZy2nY32OhhpOy1tK%2Fr7Am5hmnsXpoEOzu6V9xkv&X-Amz-Signature=4be86cf5e878b3e9fdb9dce7ebd773200971f1b5c5f207aef4248bdba5efde4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

