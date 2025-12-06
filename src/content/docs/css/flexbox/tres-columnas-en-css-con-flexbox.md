---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6N27H4G%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T064219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGQzIvwbXVh58Hh%2BypSkEk0u5HJE%2Fqlj3SlTvymopOowIhAPOfAO72QZecyNEprghWpbYDSRI5j97gAcMV3QvzH6ScKv8DCHAQABoMNjM3NDIzMTgzODA1IgwjgatFOARBjNkUU5gq3AOm4jDHoRgjGWNL6z0EbrmvuQCYbGxt9OSFUOj2yg3CEsE2AaNReNSfRK6kVD0XrOeHMlqlqKfjplO5Zof1BPbuINGwhRwTqCQ4cfnwH%2BUcy9exGLUsZhPfE4TCG%2FoY95Zo8mAVXdyHkKHA%2BmdsOCZ6DF%2Bbicr9p0CALTr3e3V3YXoFilYkbCaVLnuz1Kg8FRb1J29U2ZgdDqQg4OSdwxwejLvVEFQqnn0EefGqxsK3Ve0%2BpN9QtWVrH71dER8MZUFxumCYuyetNL3B5P3b%2BWCevmBiu29jALjDm2ShHUBj0zwAbmX0zRcGnwNZgQLHwHWQG1jaVgcYOMOO6NwYK3iU6yT1O%2Fb9tsW3KJaKJSX%2BnTyqXn4Atpk8FG%2FzNsFfGxWpkeZhNSc1ERxi67CeyI1%2BkEwzL%2Fp%2BfJwUwbz1tvlYmBFskqdE1%2FAr5vU1qVCBrjw2q%2B2BJ0qVtl692YkbNlBuAP8KTMg%2BzDlUHhxMFFkYWZgcoRQsqTl6CqOhnBxpp3BJLVwNyjrTLQCSX5ZdJ1d8Yvewy5UiT0J23ulNg%2FE17h74HFKiDMb2bP8zL0ow%2BD25ZcwogfmRBlHm2%2F2yhBjUsA0Y%2BvdCw6FY1qmaUv0xSAEERMf%2BSpD3aBvBPDCNn8%2FJBjqkAQA42DhurUv%2Bi%2FfV6CzEYpKw14OgLZM1elIho95WyUrBeTM94WmI7w5z9onp5bHmQOz2I%2BkStZkAearLu8P6Eqd1qKsswbapA1wo0F2wmKAFBRk2LKhuz55ElsOUXJe1UfpslEshNoSv1Mf3s4yxWo6ul3N7Ajy799DK7ZHi2vJzlvOW8DJsJiOnmcTPkyRRUJLFUZDAkqz4Q7uqZ8vxoe3byQLP&X-Amz-Signature=c046da05d26fd745b07660df33bc7e708eda871a163698374ba85c09d8588ca5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6N27H4G%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T064219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGQzIvwbXVh58Hh%2BypSkEk0u5HJE%2Fqlj3SlTvymopOowIhAPOfAO72QZecyNEprghWpbYDSRI5j97gAcMV3QvzH6ScKv8DCHAQABoMNjM3NDIzMTgzODA1IgwjgatFOARBjNkUU5gq3AOm4jDHoRgjGWNL6z0EbrmvuQCYbGxt9OSFUOj2yg3CEsE2AaNReNSfRK6kVD0XrOeHMlqlqKfjplO5Zof1BPbuINGwhRwTqCQ4cfnwH%2BUcy9exGLUsZhPfE4TCG%2FoY95Zo8mAVXdyHkKHA%2BmdsOCZ6DF%2Bbicr9p0CALTr3e3V3YXoFilYkbCaVLnuz1Kg8FRb1J29U2ZgdDqQg4OSdwxwejLvVEFQqnn0EefGqxsK3Ve0%2BpN9QtWVrH71dER8MZUFxumCYuyetNL3B5P3b%2BWCevmBiu29jALjDm2ShHUBj0zwAbmX0zRcGnwNZgQLHwHWQG1jaVgcYOMOO6NwYK3iU6yT1O%2Fb9tsW3KJaKJSX%2BnTyqXn4Atpk8FG%2FzNsFfGxWpkeZhNSc1ERxi67CeyI1%2BkEwzL%2Fp%2BfJwUwbz1tvlYmBFskqdE1%2FAr5vU1qVCBrjw2q%2B2BJ0qVtl692YkbNlBuAP8KTMg%2BzDlUHhxMFFkYWZgcoRQsqTl6CqOhnBxpp3BJLVwNyjrTLQCSX5ZdJ1d8Yvewy5UiT0J23ulNg%2FE17h74HFKiDMb2bP8zL0ow%2BD25ZcwogfmRBlHm2%2F2yhBjUsA0Y%2BvdCw6FY1qmaUv0xSAEERMf%2BSpD3aBvBPDCNn8%2FJBjqkAQA42DhurUv%2Bi%2FfV6CzEYpKw14OgLZM1elIho95WyUrBeTM94WmI7w5z9onp5bHmQOz2I%2BkStZkAearLu8P6Eqd1qKsswbapA1wo0F2wmKAFBRk2LKhuz55ElsOUXJe1UfpslEshNoSv1Mf3s4yxWo6ul3N7Ajy799DK7ZHi2vJzlvOW8DJsJiOnmcTPkyRRUJLFUZDAkqz4Q7uqZ8vxoe3byQLP&X-Amz-Signature=32ea9b112891709a5d4dfe4bdd84392b6728e03a00a4e1defc1263bdcee0b159&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

