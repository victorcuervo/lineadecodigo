---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3QDW5JJ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T051953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFKVptHeBd3GXKpvr9uTLJ6gthsHMlRoeboZ4aidJfJvAiEAiVkc18na2SKQl28BTMIqxD8oGZzUwGHhSXqrjmSuMlQqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFjjPVMdgBlCrOefPSrcA4UmPyzwJx54RVy7YluEqBo30adyj6cFq92wujGhl8DdRsTaJxdY4rGX8lZGvTWlDqM4Bfzpo6zF0uOgQVa03JLJzLdi6A2X3waszCPMityQO%2BUI%2BSE3z5K9Vw1WNOYr74UCrMvwfplT3PCI2vKRJhThtyCM72GA9F74WXzybnqrKk%2FEg9DFC9gF%2FSorWvxNY8F2ARpNr0StJRrgSDfE32ojTtpXJllEDd%2FRy6DwxhvQdL2UaybvWl8cMqosYWx%2BWXFy9kt5nkY3rZDthoDmzPnrXH0eIQ0slmIirpAnZ%2BdPXwuwbYeJy3GTQ%2Bo4bR0bzGDflxLgjg1%2Bg1F2NMDR0Dujf%2BPJ1eOVNEMs3l9A%2BFrGAXMKw0x8V%2BYyzCAFgMWdM%2BH%2Fj3%2Bqy5Xjb6fjx%2BdNX9pyD%2Ff8iyayJoOmE5TnlePVH5Nap%2B8kwFfPAQxjhoqkpOkHT6AE9CaX%2B4f29cyI3LaL%2BnPQNqXDpRKyEoqaT1ghfDuB4UjO4%2BUAaJQghnuPXgb37sERQWyRLi7XpT7hW1U7%2FOyi5OeyblJuIVJwzjfE4ERrgG%2FwpT6jbKIYAim5G73vu7PCr4igpfqKG%2FRML8LT8MBvHfSt35W%2F%2BI5Ol%2FSj9haKIwUA%2F3gtPkDzMKjJ3skGOqUBCEAJVmWV5DpWvKp5I2okrJuuoWToBPsyWRTZlB1lYx4iW%2BaGqa%2BdkJiCy8AsafMDUWlWPnlnr3iBbYPoAfjH2acX%2F3rA%2BPpBPluAvB8NpGFMqph%2BP6zyNUXOkM8tvBgPTsrxgOuhjOQj9oJU%2B7BcH6qpp%2FQLzNWLo45cso%2B5rMft%2BYop72BO9W9K3gZMe3Lgi1Paqm4a4jUGnPe7c5BnWks5BO9I&X-Amz-Signature=bf13350cb1c7a8a3ae7b11c0e49fad2e605e69bfb075fe61e3667e6e040a3a9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3QDW5JJ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T051953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFKVptHeBd3GXKpvr9uTLJ6gthsHMlRoeboZ4aidJfJvAiEAiVkc18na2SKQl28BTMIqxD8oGZzUwGHhSXqrjmSuMlQqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFjjPVMdgBlCrOefPSrcA4UmPyzwJx54RVy7YluEqBo30adyj6cFq92wujGhl8DdRsTaJxdY4rGX8lZGvTWlDqM4Bfzpo6zF0uOgQVa03JLJzLdi6A2X3waszCPMityQO%2BUI%2BSE3z5K9Vw1WNOYr74UCrMvwfplT3PCI2vKRJhThtyCM72GA9F74WXzybnqrKk%2FEg9DFC9gF%2FSorWvxNY8F2ARpNr0StJRrgSDfE32ojTtpXJllEDd%2FRy6DwxhvQdL2UaybvWl8cMqosYWx%2BWXFy9kt5nkY3rZDthoDmzPnrXH0eIQ0slmIirpAnZ%2BdPXwuwbYeJy3GTQ%2Bo4bR0bzGDflxLgjg1%2Bg1F2NMDR0Dujf%2BPJ1eOVNEMs3l9A%2BFrGAXMKw0x8V%2BYyzCAFgMWdM%2BH%2Fj3%2Bqy5Xjb6fjx%2BdNX9pyD%2Ff8iyayJoOmE5TnlePVH5Nap%2B8kwFfPAQxjhoqkpOkHT6AE9CaX%2B4f29cyI3LaL%2BnPQNqXDpRKyEoqaT1ghfDuB4UjO4%2BUAaJQghnuPXgb37sERQWyRLi7XpT7hW1U7%2FOyi5OeyblJuIVJwzjfE4ERrgG%2FwpT6jbKIYAim5G73vu7PCr4igpfqKG%2FRML8LT8MBvHfSt35W%2F%2BI5Ol%2FSj9haKIwUA%2F3gtPkDzMKjJ3skGOqUBCEAJVmWV5DpWvKp5I2okrJuuoWToBPsyWRTZlB1lYx4iW%2BaGqa%2BdkJiCy8AsafMDUWlWPnlnr3iBbYPoAfjH2acX%2F3rA%2BPpBPluAvB8NpGFMqph%2BP6zyNUXOkM8tvBgPTsrxgOuhjOQj9oJU%2B7BcH6qpp%2FQLzNWLo45cso%2B5rMft%2BYop72BO9W9K3gZMe3Lgi1Paqm4a4jUGnPe7c5BnWks5BO9I&X-Amz-Signature=cb46c2b0bebc3ee97501118affcd1b9b01040bf3e7316070de26b38b066ac629&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

