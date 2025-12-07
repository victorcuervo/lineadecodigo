---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MWINAVG%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T042753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqGnGW5zJkL0y7EHpH0evvnt2pIBMqToOHhHg%2FuXFzcAIgDJlqmEjxCQiOaEZUGXeksddumaOU4eEQ3nR5C3dYrTgqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPpMWJOj24FuyJptWircA7V6%2BrGa1kzLKF22gCOC9A8mThApxAbB0nRvrD3E0mAKwTABmlif1wyc1JGgLJhSsXU7jW1K107PBIPlEiOambMmkhwDvIHjbWK%2BrXopV57EyWs2%2FypRCXttGLxtFYf0EjP81Tj9A5S4X7pgbCh%2B1EgvKirGo8%2FY%2BJJ9aQDYR3Yv%2FBsF3YNBs7eKChkwdjfRWiXw6DDfI%2BUTkSvFVEDsG%2FErD0f5vNptaj2jft3RQqDK4jRgjunpNsABEs8VUDldDNJ%2B2lVA2GgWzUJahniVCnTnwXTzeYuc5a1Ab0S%2BxtRG4ZE1d61aynY9phNeTy2LSsZYk4Mj6Iyl3qQCuyFAwR6JfDdsRhbjQ8pN7ljB%2F%2FaiRxk0b%2BfVc3mrswoapVClnBDNx8cp81d%2BqoGv8K1QyZbcWBXcDnees7vUJaLhJ6yPh1xUBi0rCRzBBccfh3ULYNoZ%2BXm1Iosfq9Ru2cqe0O8KpSNd3qHd5ZQ3C5h1aTu5QItlObzyXYqvjTOjMPu6lW6H6UZv9zCyZJaxc%2BvHKBdrLyxZvx2yvR2%2B8vWw4vOiOBtMSs2%2BxeNf3xB9kR9D4%2BuJ5Q5MexzzG5yFzUovu38%2FzOtCDwkg42z3%2BYqbU3uIsZAIzmd3cJT1uX2FMIv%2B0skGOqUByTm4pPQ4S7Ia8cSavoggntJ8BvP%2B4QF%2FP%2FbPE0wHzz8WroCjOkyUtOAC8s%2FyvRWRZKkZz1dmf301h84t0%2FTD2ddUqz07MSSpBD1ft5Rk0mJ3WC0IximFMKhkOMxGtr%2Bx2l%2FkzQIR4oml5eSvFeupeyubcAqfwX%2BdDIRBBR%2FyJftzkTb7ahcISexdnOT8z7oICObq6Ml8%2FXA7x6QQQ4wlNR7qGxOX&X-Amz-Signature=42c9dfb26916876e176b3a4f2259061c3b5fd1f94c0cc36354134457b7041437&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MWINAVG%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T042753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqGnGW5zJkL0y7EHpH0evvnt2pIBMqToOHhHg%2FuXFzcAIgDJlqmEjxCQiOaEZUGXeksddumaOU4eEQ3nR5C3dYrTgqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPpMWJOj24FuyJptWircA7V6%2BrGa1kzLKF22gCOC9A8mThApxAbB0nRvrD3E0mAKwTABmlif1wyc1JGgLJhSsXU7jW1K107PBIPlEiOambMmkhwDvIHjbWK%2BrXopV57EyWs2%2FypRCXttGLxtFYf0EjP81Tj9A5S4X7pgbCh%2B1EgvKirGo8%2FY%2BJJ9aQDYR3Yv%2FBsF3YNBs7eKChkwdjfRWiXw6DDfI%2BUTkSvFVEDsG%2FErD0f5vNptaj2jft3RQqDK4jRgjunpNsABEs8VUDldDNJ%2B2lVA2GgWzUJahniVCnTnwXTzeYuc5a1Ab0S%2BxtRG4ZE1d61aynY9phNeTy2LSsZYk4Mj6Iyl3qQCuyFAwR6JfDdsRhbjQ8pN7ljB%2F%2FaiRxk0b%2BfVc3mrswoapVClnBDNx8cp81d%2BqoGv8K1QyZbcWBXcDnees7vUJaLhJ6yPh1xUBi0rCRzBBccfh3ULYNoZ%2BXm1Iosfq9Ru2cqe0O8KpSNd3qHd5ZQ3C5h1aTu5QItlObzyXYqvjTOjMPu6lW6H6UZv9zCyZJaxc%2BvHKBdrLyxZvx2yvR2%2B8vWw4vOiOBtMSs2%2BxeNf3xB9kR9D4%2BuJ5Q5MexzzG5yFzUovu38%2FzOtCDwkg42z3%2BYqbU3uIsZAIzmd3cJT1uX2FMIv%2B0skGOqUByTm4pPQ4S7Ia8cSavoggntJ8BvP%2B4QF%2FP%2FbPE0wHzz8WroCjOkyUtOAC8s%2FyvRWRZKkZz1dmf301h84t0%2FTD2ddUqz07MSSpBD1ft5Rk0mJ3WC0IximFMKhkOMxGtr%2Bx2l%2FkzQIR4oml5eSvFeupeyubcAqfwX%2BdDIRBBR%2FyJftzkTb7ahcISexdnOT8z7oICObq6Ml8%2FXA7x6QQQ4wlNR7qGxOX&X-Amz-Signature=17b78211f6a0f53aaa8750abfb4375209d4beb283c71ab72278950ddee873ba8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

