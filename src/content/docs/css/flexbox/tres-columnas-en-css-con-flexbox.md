---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBWL5UVL%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T221510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCP5jSFgMhSLzh0qHOnJe3jb6Kq%2Be0x4UO8k69CJpJ52AIhAJJN3LussU81vYVIh4Lx48eh9u48LOO9pVDMi7lEdXjIKv8DCH8QABoMNjM3NDIzMTgzODA1Igyi4dB%2FhVanudqqpLQq3AN1bwUEs9Mwebo2Ly99VgLmz9HIQsES%2BZEp4K%2BiZOO3jn4qpR8WPTnbtYtZlBANzxLJy%2BeoBFIVf5EZuHMqIIGlJbn8%2Bd%2F9iOH1KYIjdTR2TFg0nN7eRftHMOR8n%2F1TxzZjsqp7uIgLLqX6p1vcF5%2FAphyuuEc0tZsGc0uK4Y7MIawQZBlaxIewtINItBkx7ZDUrblf%2BK3XwerBdXTs3FMl5pJcpeD%2FL0zACnTfSycJctO4Ey4HRY3GaUhexPE1VSPHp3u9LIQ%2FONeE6mD7OwfafdOy%2B8rKg2%2FHB8nvBgXVG8dEgilwi4AM4Am%2Fyh4tGI0m4ca8JNGR5j9s0dQAwBzGcVK3QWyKMvbDSCtFvr2udxFvXj00wVPNgM4VDlmQVRg6RAQYQaP2YrlFzZeiT8hfhen8%2BjssWmukqocnGhLLgxyI3uLTmpevxTNsYhJpzJUnZvNPWL41DmFF2EWICao%2Biqgdti9x1HFPIfBEY1MLN9WMLmPnpayQ0ZPtknZyeSnz1GVtjHzCskYda5%2BklRPCkaq%2F7o6ltX2TKclAnco0bE3h%2FYVtU9KILKzKEhJDrpBskL34d0KRwECNoPgH0fqP4zLeinvhXdOxKXH4L8%2B%2B5dmjkGhOJkObLNm5EjDz09LJBjqkAf%2Fl801zTFhfgPqoh%2FgEAXbJYFKrkC10Ix%2BCMW%2Bse7LzYxNEcx%2Fu5haRkXowjJMsYP5olLxEJ%2FPsun0ZcpUaHwiWKICTWJt031hxZeU67hGVUAThZNtzFYNnSKEy%2FNrkP53ANSx%2Fxb%2B5QVZF9S6pAajRhxcFw6ocTbummh0Pz6bmWy2ISC7HFJnYEcYRoc9ilsvUHqx4c715rA%2F6N2ujMRFAavCP&X-Amz-Signature=a59a5ca1daf0d97b5d740b9e37ae079210e416df82a0f3a0fa3c5f970a70f776&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBWL5UVL%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T221510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCP5jSFgMhSLzh0qHOnJe3jb6Kq%2Be0x4UO8k69CJpJ52AIhAJJN3LussU81vYVIh4Lx48eh9u48LOO9pVDMi7lEdXjIKv8DCH8QABoMNjM3NDIzMTgzODA1Igyi4dB%2FhVanudqqpLQq3AN1bwUEs9Mwebo2Ly99VgLmz9HIQsES%2BZEp4K%2BiZOO3jn4qpR8WPTnbtYtZlBANzxLJy%2BeoBFIVf5EZuHMqIIGlJbn8%2Bd%2F9iOH1KYIjdTR2TFg0nN7eRftHMOR8n%2F1TxzZjsqp7uIgLLqX6p1vcF5%2FAphyuuEc0tZsGc0uK4Y7MIawQZBlaxIewtINItBkx7ZDUrblf%2BK3XwerBdXTs3FMl5pJcpeD%2FL0zACnTfSycJctO4Ey4HRY3GaUhexPE1VSPHp3u9LIQ%2FONeE6mD7OwfafdOy%2B8rKg2%2FHB8nvBgXVG8dEgilwi4AM4Am%2Fyh4tGI0m4ca8JNGR5j9s0dQAwBzGcVK3QWyKMvbDSCtFvr2udxFvXj00wVPNgM4VDlmQVRg6RAQYQaP2YrlFzZeiT8hfhen8%2BjssWmukqocnGhLLgxyI3uLTmpevxTNsYhJpzJUnZvNPWL41DmFF2EWICao%2Biqgdti9x1HFPIfBEY1MLN9WMLmPnpayQ0ZPtknZyeSnz1GVtjHzCskYda5%2BklRPCkaq%2F7o6ltX2TKclAnco0bE3h%2FYVtU9KILKzKEhJDrpBskL34d0KRwECNoPgH0fqP4zLeinvhXdOxKXH4L8%2B%2B5dmjkGhOJkObLNm5EjDz09LJBjqkAf%2Fl801zTFhfgPqoh%2FgEAXbJYFKrkC10Ix%2BCMW%2Bse7LzYxNEcx%2Fu5haRkXowjJMsYP5olLxEJ%2FPsun0ZcpUaHwiWKICTWJt031hxZeU67hGVUAThZNtzFYNnSKEy%2FNrkP53ANSx%2Fxb%2B5QVZF9S6pAajRhxcFw6ocTbummh0Pz6bmWy2ISC7HFJnYEcYRoc9ilsvUHqx4c715rA%2F6N2ujMRFAavCP&X-Amz-Signature=024954c18dbc2b30a2f2bc305276bb565e103716967939d1c8513ba2f209b0e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

