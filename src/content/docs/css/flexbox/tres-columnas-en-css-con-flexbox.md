---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2TGWBQ3%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T183518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpBFOQt6vSpUUx8mb2GqfwDjmV0PD7eNuv%2FRJzhXpJ5gIhANrzjaINRP2pCFQ7rr8PKewJPUp%2BUSaGeJSce49jwVkMKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwjnkGogSMnrUrnPbUq3AN9VOpRCjz9ZySAAgZhGvWsRKMv5TEadY9eMJIJlOrI68MhIyIxEzhJvym97COpGB7pY41dV%2BLCan30mkt13BD7EGPm1p2yILVB9mOmv9cWptV4fgU4vb3pCyuoKPIu%2FJaqkXDo5dqAij%2Fk37VLUWDSMluSTUOMoQmjugy849ESs1gGyc3T6l4VyFQXVUGrNEwrIqcFpskrPXz%2BF2lj5Z2qI537kGc9x6e0ZU4spR%2FIIjdV7bfXji4li3zdOE2aAC3FWkKcYd0m44WEDaBh6rSMW9VJLfr9F3%2BPnfpNGcewIZb%2Ba9YkPaUGAhrg1VvYCPfEth6DW6JKGCdMBqfHY0ckpK%2F8qoM8F1g%2FZfHNReFGObRsjueT9jGQFV7rwEb%2FUNMF9qCrRjfMligBPhf4h18OW%2BTeQaexseOIcdkGdbOLyIxs3wton9T0oLigFQNghZQwWFju81fq9krjm0ApfitLNYV6mMM169U2iMCKFWmbszUak1U1UbWlDGML0t%2FwC%2B%2F1diFAvttGX3cX8YQdF5gl7FXx6vIdEx1%2BpCpc1O%2FnNvOeGSAvXXG2QT%2FqCw94DE6cewJiO2dSOYGkrlIt6Fwl7l3nEzAZrOWqasMIgm0%2FvvFv0IaAQO5p%2FaZF7jDvuNbJBjqkAfPS1XwDruoXM%2BGmmYb9Qhcst%2Fo2YgPn%2BJEmheQEStnkp%2F8tC7%2FZduakGPIr2W%2BTzmH2%2FTSndtKHdAVRRK4FKovuex2sc3dPL3xn%2Fd5xOsiGh8%2FP5XyMu3CL2v3V7wydE6Pe3LVUHgJsc0v730pGIfUK%2BsG42L8GXazGsC0dur0LiALvTkco%2BjkjZfxa7uwLVszX6URIs85%2FjGPsBancQJYWQQda&X-Amz-Signature=0f5fc3249ada73b41356b3dc0a50b23ae26da3b92c9f0de8c9188b20c5b92ed2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2TGWBQ3%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T183518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpBFOQt6vSpUUx8mb2GqfwDjmV0PD7eNuv%2FRJzhXpJ5gIhANrzjaINRP2pCFQ7rr8PKewJPUp%2BUSaGeJSce49jwVkMKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwjnkGogSMnrUrnPbUq3AN9VOpRCjz9ZySAAgZhGvWsRKMv5TEadY9eMJIJlOrI68MhIyIxEzhJvym97COpGB7pY41dV%2BLCan30mkt13BD7EGPm1p2yILVB9mOmv9cWptV4fgU4vb3pCyuoKPIu%2FJaqkXDo5dqAij%2Fk37VLUWDSMluSTUOMoQmjugy849ESs1gGyc3T6l4VyFQXVUGrNEwrIqcFpskrPXz%2BF2lj5Z2qI537kGc9x6e0ZU4spR%2FIIjdV7bfXji4li3zdOE2aAC3FWkKcYd0m44WEDaBh6rSMW9VJLfr9F3%2BPnfpNGcewIZb%2Ba9YkPaUGAhrg1VvYCPfEth6DW6JKGCdMBqfHY0ckpK%2F8qoM8F1g%2FZfHNReFGObRsjueT9jGQFV7rwEb%2FUNMF9qCrRjfMligBPhf4h18OW%2BTeQaexseOIcdkGdbOLyIxs3wton9T0oLigFQNghZQwWFju81fq9krjm0ApfitLNYV6mMM169U2iMCKFWmbszUak1U1UbWlDGML0t%2FwC%2B%2F1diFAvttGX3cX8YQdF5gl7FXx6vIdEx1%2BpCpc1O%2FnNvOeGSAvXXG2QT%2FqCw94DE6cewJiO2dSOYGkrlIt6Fwl7l3nEzAZrOWqasMIgm0%2FvvFv0IaAQO5p%2FaZF7jDvuNbJBjqkAfPS1XwDruoXM%2BGmmYb9Qhcst%2Fo2YgPn%2BJEmheQEStnkp%2F8tC7%2FZduakGPIr2W%2BTzmH2%2FTSndtKHdAVRRK4FKovuex2sc3dPL3xn%2Fd5xOsiGh8%2FP5XyMu3CL2v3V7wydE6Pe3LVUHgJsc0v730pGIfUK%2BsG42L8GXazGsC0dur0LiALvTkco%2BjkjZfxa7uwLVszX6URIs85%2FjGPsBancQJYWQQda&X-Amz-Signature=cef2d6b6f925c65e83532356cff77f08b09d8a42197721a1f8012fbdd0db17ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

