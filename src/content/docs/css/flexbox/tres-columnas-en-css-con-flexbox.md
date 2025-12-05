---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OURMQ4V%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T212344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrBX6xg8iRPZJN23w6lSBJsvAU8wWwmRf2ffhrqixkbAIgarBeOuSEAOX8pkz1ozipR%2FSsK8xCpAsDmeDkrahYn7Yq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDOcasKO3OP8R2UUtRSrcA7p9KG2tkBnJZl0M%2FDNwP8%2BPO5w8e2WOTxhPf9r1yQ6J8KVaVoAqMdefU7RNkhr3%2FLgKx0EoAMy2YMMwTfJs68aQN%2F8%2BqAGd4be7blKaNfGwv2wVMSo7X8lQy%2BDJubT1XDgnc%2BKEOOT5YIQzgEzP31mAfqsC81LZ2r1%2FJqqnX1QmcsJhQ%2BCrT48xSyzLWFzrBFTq1sOGpidBbH5UrnNu%2BRUIF%2BbZ44ZrfYpy01PO15HPXGTK5JC9D61Ft61jdWtfHHLVyzLz4AqjtOHk13vqKm3RZAALi7vRL4iUh8iCeTcrAH5xsfVqbXih2hwu2qgfOH9lWTHoPQkrYyVCS04j%2BRAQ7H2pqW%2FTqggPlosE8Co2Lxl%2Bu%2BrLh4hF5x9mmTnCCsNLFKGPDqKr3WydcS5jkJtEUgkj%2B0UQiRTOlqvAcQhfVNHWOISIaA3dhkzapMAWqW5nORXPJOxRt3JO79LY5rfDuo7ImuW5Z1dFDGHQ1Mexd2swdpw%2B6JNGRucK1%2B7Hner0rIVxRtL31mGFnffkrc59WjZ8%2FEGZtFQ%2FfKgjHvfwpGBb6KOvo7ZFk2v0JuPfFStUoK8ROQqPYhain%2F0vf0QTA2NdVzKjZkhV7J%2BeigI0Rf%2BxnkBrhzzA1%2B7PMNyNzckGOqUBc%2FnCQmuc7ElC82xvYWfAnKLABuynUHJFZyqKy%2BmDCPLb06Wc5KcZ87F19R04mKYrOwXBKpUjdn4d83OEN9ybGx5DpU2EDZ3UWcM%2BUxPXXvnyEG%2B7yI4qgE5WV9N4%2B%2FNIlVp8TFaXjT1h7Az8ieUam%2Fncni0MFaqMC9V%2B1DXHb4Z15qL%2BnFJIDfqaKUp9eo9%2FkUv8QG%2BnS3Vkdtl%2Fa3Auoo1JFaMG&X-Amz-Signature=cbdae15a045f8590dc1885b37fe9725d59f9e398da449d68165ad2cecb4b59b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OURMQ4V%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T212344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrBX6xg8iRPZJN23w6lSBJsvAU8wWwmRf2ffhrqixkbAIgarBeOuSEAOX8pkz1ozipR%2FSsK8xCpAsDmeDkrahYn7Yq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDOcasKO3OP8R2UUtRSrcA7p9KG2tkBnJZl0M%2FDNwP8%2BPO5w8e2WOTxhPf9r1yQ6J8KVaVoAqMdefU7RNkhr3%2FLgKx0EoAMy2YMMwTfJs68aQN%2F8%2BqAGd4be7blKaNfGwv2wVMSo7X8lQy%2BDJubT1XDgnc%2BKEOOT5YIQzgEzP31mAfqsC81LZ2r1%2FJqqnX1QmcsJhQ%2BCrT48xSyzLWFzrBFTq1sOGpidBbH5UrnNu%2BRUIF%2BbZ44ZrfYpy01PO15HPXGTK5JC9D61Ft61jdWtfHHLVyzLz4AqjtOHk13vqKm3RZAALi7vRL4iUh8iCeTcrAH5xsfVqbXih2hwu2qgfOH9lWTHoPQkrYyVCS04j%2BRAQ7H2pqW%2FTqggPlosE8Co2Lxl%2Bu%2BrLh4hF5x9mmTnCCsNLFKGPDqKr3WydcS5jkJtEUgkj%2B0UQiRTOlqvAcQhfVNHWOISIaA3dhkzapMAWqW5nORXPJOxRt3JO79LY5rfDuo7ImuW5Z1dFDGHQ1Mexd2swdpw%2B6JNGRucK1%2B7Hner0rIVxRtL31mGFnffkrc59WjZ8%2FEGZtFQ%2FfKgjHvfwpGBb6KOvo7ZFk2v0JuPfFStUoK8ROQqPYhain%2F0vf0QTA2NdVzKjZkhV7J%2BeigI0Rf%2BxnkBrhzzA1%2B7PMNyNzckGOqUBc%2FnCQmuc7ElC82xvYWfAnKLABuynUHJFZyqKy%2BmDCPLb06Wc5KcZ87F19R04mKYrOwXBKpUjdn4d83OEN9ybGx5DpU2EDZ3UWcM%2BUxPXXvnyEG%2B7yI4qgE5WV9N4%2B%2FNIlVp8TFaXjT1h7Az8ieUam%2Fncni0MFaqMC9V%2B1DXHb4Z15qL%2BnFJIDfqaKUp9eo9%2FkUv8QG%2BnS3Vkdtl%2Fa3Auoo1JFaMG&X-Amz-Signature=485f282ba0f0e0c6079ebfefe3fa6a4625667af89ce7e46a65827fe1e6c82d17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

