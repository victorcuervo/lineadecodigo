---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCHRFY7H%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T132052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIGdNNkERtrTq5z31yS%2FojhjG8HcFcNhx5o2XDRQ7d3ZJAiEAqPiDUJBVk6rDvdOkiLmOTTm4l6AMSq3CilUM4%2B4LrX0q%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDL%2FoBzj3PPHrii9QjCrcAyyHb0Onva3wzhm%2F3Q1RHABC1NN0lEZoqBJXMJFLhaRdLUiAlzxXb%2B%2FRUBjiIcf1sjIec6tUNXT2tbJ4OXFVsZtonmasCypExeLGdXrNttSuHEWa9iwzLWnPG%2Bylb9VEsJqxxZ3QNslI1o8xn8QUWdZHyaBiO71A6IFE8FV%2BtjIdxMRNK1gA88Mnhuav5VzOavJPjFl5%2FEUfp8IPRi5G5pfwUqvY9FnJsqd43KbQzjCU4nls4pxrgfAJaKRcL0TSEpalYyj7%2Fhz6ax%2B4zIcUqCXyMEruyLklUUvIPTGX3WA5EOiqwpDtZ2QXHME3FiJhmKM5HzD1YvnBERSXU2NsgsNijAdWR9rJi8l0b3jIJIkRd5sWSm%2FWGrp8nbXXpRadqUnb8DXFkMCUbG8dLi%2FLs6hmkp9hI16PEfA0IcyJP6Nc5P3Mrzdyo3DsfQqHArf8tdU%2BLZ6OU6Jv3k9oBTtbtrMiHrStvhBP37uEnYxcXXiqDXnjVoyTzaoqd9M%2FVhwWibliG6WGQY0XmJgHZpcWWbCefIuD046FUEsL3K3aTAl71bDD5AiPz2akkTlhE3jzpm%2BIpTriuVucx2OCJvgIT67ZDMYvHnEoK3TtoC24VWiZOQzIxuyN3BJDKJK8MKWExskGOqUBbpgs6YD0Y6zJkV7jIYooeFYzekbtHo%2Bb%2FwSWd0l%2F6Yj2efFbzmzzvSZvbUCIixHfkhpsiSR%2BbPdCwSrit9s%2FmkGqhR6GG9CyrxiISsVPtj54i6iX8juumU%2BqvH2kIYIgs2xnKvwhsjSVQ4evP86HTgFtITyxjsh%2B%2BUjpeKyPXUbAhEmxrCRDiRROHX0EgkRbbv4Lvb%2FQBmuRvD00io8xOzre9ueJ&X-Amz-Signature=aec6d1c02f929f7f02a77992b2757ea21fbadbff7222c329b183303a9641a364&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCHRFY7H%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T132052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIGdNNkERtrTq5z31yS%2FojhjG8HcFcNhx5o2XDRQ7d3ZJAiEAqPiDUJBVk6rDvdOkiLmOTTm4l6AMSq3CilUM4%2B4LrX0q%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDL%2FoBzj3PPHrii9QjCrcAyyHb0Onva3wzhm%2F3Q1RHABC1NN0lEZoqBJXMJFLhaRdLUiAlzxXb%2B%2FRUBjiIcf1sjIec6tUNXT2tbJ4OXFVsZtonmasCypExeLGdXrNttSuHEWa9iwzLWnPG%2Bylb9VEsJqxxZ3QNslI1o8xn8QUWdZHyaBiO71A6IFE8FV%2BtjIdxMRNK1gA88Mnhuav5VzOavJPjFl5%2FEUfp8IPRi5G5pfwUqvY9FnJsqd43KbQzjCU4nls4pxrgfAJaKRcL0TSEpalYyj7%2Fhz6ax%2B4zIcUqCXyMEruyLklUUvIPTGX3WA5EOiqwpDtZ2QXHME3FiJhmKM5HzD1YvnBERSXU2NsgsNijAdWR9rJi8l0b3jIJIkRd5sWSm%2FWGrp8nbXXpRadqUnb8DXFkMCUbG8dLi%2FLs6hmkp9hI16PEfA0IcyJP6Nc5P3Mrzdyo3DsfQqHArf8tdU%2BLZ6OU6Jv3k9oBTtbtrMiHrStvhBP37uEnYxcXXiqDXnjVoyTzaoqd9M%2FVhwWibliG6WGQY0XmJgHZpcWWbCefIuD046FUEsL3K3aTAl71bDD5AiPz2akkTlhE3jzpm%2BIpTriuVucx2OCJvgIT67ZDMYvHnEoK3TtoC24VWiZOQzIxuyN3BJDKJK8MKWExskGOqUBbpgs6YD0Y6zJkV7jIYooeFYzekbtHo%2Bb%2FwSWd0l%2F6Yj2efFbzmzzvSZvbUCIixHfkhpsiSR%2BbPdCwSrit9s%2FmkGqhR6GG9CyrxiISsVPtj54i6iX8juumU%2BqvH2kIYIgs2xnKvwhsjSVQ4evP86HTgFtITyxjsh%2B%2BUjpeKyPXUbAhEmxrCRDiRROHX0EgkRbbv4Lvb%2FQBmuRvD00io8xOzre9ueJ&X-Amz-Signature=ea6cf72e461e3a47452c349a1d1c2138872fa1d6a88c643aa1b9520e61974c9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

