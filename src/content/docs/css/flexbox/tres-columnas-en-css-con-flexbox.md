---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QBNUKNT%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T231537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDa7qWYqzCMOd0Z24ay7qNI2KFeWIs%2BC5%2FcIs%2ByYKCosQIgRdIiN8IPjFF1G3Jp3tKssgGTcs2wGGGO6uDuO8aKhVwq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDFX2Tf8Rr2CeUqMRhyrcA7MgcK0NAe9b%2Bf0canRRZcaSwtAvl7NxJxxCrkKlo3frgZVNJxf8LnjOn7e8d2VaDGCt1wXpKRvxfTeaFU84XJ7yGdd130rL%2BM168PXmw9y6hsZTfSFJSbW5GKYEfxTgPb4Crpa%2FAH8DFBTzd%2FUmUpP604a7D8tPTJaJRClYdivP88gry%2B18F%2BGTCZBNtWxFj7GmMI3Mp5rvz6mnTAuqTbJ2SpJfAI1q9%2F1fFzPWlnjOTD3%2FCUiL3WAC1w926M9LNquzUnzWURvrjjF1upG3QZW4FPYobozExhw855DfPsezlL%2FTdLvt09bRnIohwJMsxUzUXZY7sRz8sc1eAOAX1vZEVKCFhfrN8HV%2F4M3SS%2BfWHmRZ27x4rwxoPdEGolTHMjGWFQXC7GGHqW%2F74QlmJSWBCeAyCMFREK7lbVKv1smrtGf84qIrVB%2BwFeTTfi58lO4In%2FSl5Ote%2F8kiP6KAzPuDk03WzIRS38R7QxO4D5iB3ZF%2FDtUDm7Mo2buPZ%2Bkvu3VR9rr4qK95wixbouRwDka2hAAfIdG0urki6%2F0kNTi0pzSTywgfvfl6sVFdMl6FKmce9nsHuEMRHQ2gjKnLn2EOmeV%2B52AktddZOnwh50O6l4efMwqhJPbtqxbAMPTFzckGOqUBjx%2BIf4QzK3VaxT9OlMIzDg1hDBsB5KUn8qUF7e02p04GdKuCmPhQCIxalH%2BxZIPURF0HYd8bjrZwsAIUw6e0hD8AzeHeuk0GZicxDLOC5HPdiAEPB4P%2B%2Bk35P91moGtQ5XnL7DHN67FRvu6NeS2ueZ4nuzogDMBNt9SFHWwPyCg238gE6sR7dT64vQTU7slQ4xfp8n6JkjVYeSfwGJ%2BMXG1EJf%2F7&X-Amz-Signature=9ae79ce643c52cafdab8485ad44d8cd207a2fec152dd1608034b36d42b838b4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QBNUKNT%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T231537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDa7qWYqzCMOd0Z24ay7qNI2KFeWIs%2BC5%2FcIs%2ByYKCosQIgRdIiN8IPjFF1G3Jp3tKssgGTcs2wGGGO6uDuO8aKhVwq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDFX2Tf8Rr2CeUqMRhyrcA7MgcK0NAe9b%2Bf0canRRZcaSwtAvl7NxJxxCrkKlo3frgZVNJxf8LnjOn7e8d2VaDGCt1wXpKRvxfTeaFU84XJ7yGdd130rL%2BM168PXmw9y6hsZTfSFJSbW5GKYEfxTgPb4Crpa%2FAH8DFBTzd%2FUmUpP604a7D8tPTJaJRClYdivP88gry%2B18F%2BGTCZBNtWxFj7GmMI3Mp5rvz6mnTAuqTbJ2SpJfAI1q9%2F1fFzPWlnjOTD3%2FCUiL3WAC1w926M9LNquzUnzWURvrjjF1upG3QZW4FPYobozExhw855DfPsezlL%2FTdLvt09bRnIohwJMsxUzUXZY7sRz8sc1eAOAX1vZEVKCFhfrN8HV%2F4M3SS%2BfWHmRZ27x4rwxoPdEGolTHMjGWFQXC7GGHqW%2F74QlmJSWBCeAyCMFREK7lbVKv1smrtGf84qIrVB%2BwFeTTfi58lO4In%2FSl5Ote%2F8kiP6KAzPuDk03WzIRS38R7QxO4D5iB3ZF%2FDtUDm7Mo2buPZ%2Bkvu3VR9rr4qK95wixbouRwDka2hAAfIdG0urki6%2F0kNTi0pzSTywgfvfl6sVFdMl6FKmce9nsHuEMRHQ2gjKnLn2EOmeV%2B52AktddZOnwh50O6l4efMwqhJPbtqxbAMPTFzckGOqUBjx%2BIf4QzK3VaxT9OlMIzDg1hDBsB5KUn8qUF7e02p04GdKuCmPhQCIxalH%2BxZIPURF0HYd8bjrZwsAIUw6e0hD8AzeHeuk0GZicxDLOC5HPdiAEPB4P%2B%2Bk35P91moGtQ5XnL7DHN67FRvu6NeS2ueZ4nuzogDMBNt9SFHWwPyCg238gE6sR7dT64vQTU7slQ4xfp8n6JkjVYeSfwGJ%2BMXG1EJf%2F7&X-Amz-Signature=1c84e711c1c3b0481e40233d37c1e85840a786b7bdcc7b6fda132c9fa0a0f1e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

