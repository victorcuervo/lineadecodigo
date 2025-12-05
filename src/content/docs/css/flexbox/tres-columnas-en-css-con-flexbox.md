---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXCPGKAO%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T065520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDr8kd8v1%2BrJYBrJPM4UXH9J72JKJzWb5c8PPM%2FhpSRjQIhAOhjFdC7yry7zCT%2FovNdEx%2Frg%2FcxU12aiAudkkdAqLaEKv8DCFUQABoMNjM3NDIzMTgzODA1IgyegBQT%2B4ogm8YVV5Aq3APBL0o4R4meOkDblg3W1UtD7%2FO6OL1lZIVpNVNy4nARj1Hf3VoidVXjkxV8bbI0zZlWrUEw%2FvZGb0QrSAbWFumXJW%2Bj9g7RWJAcWBm%2FmpK85jbVc3aTy59ENigkda2Vrw%2BdtgJGScMOyllBDgEjjm6uF63hzDCQbjP8wjPCMmB4HztAp9ZiL7ZSfBiyFNAow6m0ZHO9C5x2Owl14Z8pHv9N4l%2BfZ0elKAxYMVIB5GlsYFTEPEkswIVNhh03vU6xJ5H%2FlIBWNa%2Fdl63hwYvARhdL5QI8sb0%2BdA98DlFtac29S%2FtmlcdXeObB94nH1S4POkKX2zSqqlPW0u6WyQlITHHLjl00Vk%2Fob%2B3Aeoj3FASWYciku9inf9%2FQVEsin8hNJ%2BWHguGQXh1OPqHW6OrGccq8yU0TnGDYMjErmY2z%2Ffu3Zthvye3brNA1jz3Fg%2Bv%2Fxq3yaWqpST24VYG8BR82aqlzvAwLM9R9qU8Gvq4BOUdu2nYm05%2Fy80AJL%2Fcv1QYXk52pi7NRfxFRo9o1bXFhKhx1UVlfK6dp%2Bgzu%2BAdq2lcPgMgZ4iDbcbgwpUvtf4hfuqD4tMZMReGTSYpiHsVirNbQ13QitNY4GKeyMD7DUntjkcq0Y04iYV27mCiz3jC2rMnJBjqkAatEmeqNHMart7n8aprwwXrbTHb4Dj1wPARR8bJgtHO%2FE0NQ3Ke4ULG8DMwycsBOTKRw5grnuxvgajmukSyX0%2FGjMeRqnsFDiRRoOh%2FzytD3Wb0sQimo0Hei91Cxj00hv1QnCbBT6INSduIMBbL8ZfndLwM5teqLgE9HKfBlDO238NS3xK4LZC06XDkvpKwfpzqfs%2BRuN3GviQkxQrHj0onAGsVv&X-Amz-Signature=9ec29ef0685570069f8106d6b7b505c3c1de4a5e033d12cf4e4d6070d631cb25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXCPGKAO%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T065520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDr8kd8v1%2BrJYBrJPM4UXH9J72JKJzWb5c8PPM%2FhpSRjQIhAOhjFdC7yry7zCT%2FovNdEx%2Frg%2FcxU12aiAudkkdAqLaEKv8DCFUQABoMNjM3NDIzMTgzODA1IgyegBQT%2B4ogm8YVV5Aq3APBL0o4R4meOkDblg3W1UtD7%2FO6OL1lZIVpNVNy4nARj1Hf3VoidVXjkxV8bbI0zZlWrUEw%2FvZGb0QrSAbWFumXJW%2Bj9g7RWJAcWBm%2FmpK85jbVc3aTy59ENigkda2Vrw%2BdtgJGScMOyllBDgEjjm6uF63hzDCQbjP8wjPCMmB4HztAp9ZiL7ZSfBiyFNAow6m0ZHO9C5x2Owl14Z8pHv9N4l%2BfZ0elKAxYMVIB5GlsYFTEPEkswIVNhh03vU6xJ5H%2FlIBWNa%2Fdl63hwYvARhdL5QI8sb0%2BdA98DlFtac29S%2FtmlcdXeObB94nH1S4POkKX2zSqqlPW0u6WyQlITHHLjl00Vk%2Fob%2B3Aeoj3FASWYciku9inf9%2FQVEsin8hNJ%2BWHguGQXh1OPqHW6OrGccq8yU0TnGDYMjErmY2z%2Ffu3Zthvye3brNA1jz3Fg%2Bv%2Fxq3yaWqpST24VYG8BR82aqlzvAwLM9R9qU8Gvq4BOUdu2nYm05%2Fy80AJL%2Fcv1QYXk52pi7NRfxFRo9o1bXFhKhx1UVlfK6dp%2Bgzu%2BAdq2lcPgMgZ4iDbcbgwpUvtf4hfuqD4tMZMReGTSYpiHsVirNbQ13QitNY4GKeyMD7DUntjkcq0Y04iYV27mCiz3jC2rMnJBjqkAatEmeqNHMart7n8aprwwXrbTHb4Dj1wPARR8bJgtHO%2FE0NQ3Ke4ULG8DMwycsBOTKRw5grnuxvgajmukSyX0%2FGjMeRqnsFDiRRoOh%2FzytD3Wb0sQimo0Hei91Cxj00hv1QnCbBT6INSduIMBbL8ZfndLwM5teqLgE9HKfBlDO238NS3xK4LZC06XDkvpKwfpzqfs%2BRuN3GviQkxQrHj0onAGsVv&X-Amz-Signature=268bd2b686cd4c469876df26aa0eec2c4892976e8d005b71aecf53a8ee041043&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

