---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VA7AJSJJ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T132557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAy%2BuAy0BREBiSqXcTezwSM5v%2BQCFtimMZWuWLDY2ibyAiEAljBBDZoMh%2FBTVz3HpOcqbEZivebDd2gwsiOJk9zDGBMqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL00fQrTlS%2FGFu0LtSrcA5y5dKtpZwvwKCQWj0Jl1zAawfVv%2B4FxGCc%2BgwARi3H%2BtecF%2BUyE03gXn9GlyoYoZUj2l0EzhmOq1zjO%2FnhFeEv9vxVR%2FYPucvA7P7KeosCEx7EjpPZdLJ0k1DhWZeuopDedjuZHDVXaV1tfllq3zXcGci%2BCbLhRtpswDgHFKKCJG7FbDj2jEGrSDyWa%2FQ8%2Bb93eeF6bZzqnWWU67jk2zT8S%2Faf0T67WCi4CvchBoPM%2FgpQPssgJ8rjDKaUGxKDX%2BHHM5uQ21LTlBEXQnxgWGdi6z%2FUC754HWlxU0ZFhAlgTJH8Kz8ul1AuSEoMRNZHD16we1e1Na92oZCB4dzwxg1OUGnrY%2BkV8c9q26jvmzLS4rM5RG3BPMe20O6jPRuDbA2TCDlXMQ8FLHjgtq2F6Z14oNmmlLokrWUQu%2F2JX0rPkCXj2OdDQo2c1XzdAPnnzWYT2iGWnGhAM4RUFDgf2IPU6F9v%2B5yb8cmcB4fuYBnz5eqJERRNtRavzSipg9ti1YgcJ185baAjLbGt5xlnNYO4egBsjURsPQfQDUcx67ec3OZkgIRqWOD2iRm3v2xa57HAYguPnYZNqszcfcQhmzoDakuK35x0u8GG7h6WZ7HoAn%2BAfUX3m9adW%2B3xZMISQ28kGOqUBgq73FkmQVSsHCHAeThHlIF36vBVsm%2FVBd4T31iZe6uEKwHDewfOlz5uupB3tIudL564R30z%2BsyCmk%2FRVxNou6T6Ff2XbZQC3EmtQVk9LywRuzPbvNpTF7SZXoq5tAxkeyDRsSmHfGyLAW%2F%2FuuSpfIGNF1HG7GuHnu%2B%2FAhqch2voZJmR60fFWVUj%2BRY%2BekxPSXWIc%2BcANnyuozTeYog73CEVYlYjf&X-Amz-Signature=b80b5ccc44d381980495d3d8ad9a8db9909041e0a17b2fb9bd50f7c307eff2c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VA7AJSJJ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T132557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAy%2BuAy0BREBiSqXcTezwSM5v%2BQCFtimMZWuWLDY2ibyAiEAljBBDZoMh%2FBTVz3HpOcqbEZivebDd2gwsiOJk9zDGBMqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL00fQrTlS%2FGFu0LtSrcA5y5dKtpZwvwKCQWj0Jl1zAawfVv%2B4FxGCc%2BgwARi3H%2BtecF%2BUyE03gXn9GlyoYoZUj2l0EzhmOq1zjO%2FnhFeEv9vxVR%2FYPucvA7P7KeosCEx7EjpPZdLJ0k1DhWZeuopDedjuZHDVXaV1tfllq3zXcGci%2BCbLhRtpswDgHFKKCJG7FbDj2jEGrSDyWa%2FQ8%2Bb93eeF6bZzqnWWU67jk2zT8S%2Faf0T67WCi4CvchBoPM%2FgpQPssgJ8rjDKaUGxKDX%2BHHM5uQ21LTlBEXQnxgWGdi6z%2FUC754HWlxU0ZFhAlgTJH8Kz8ul1AuSEoMRNZHD16we1e1Na92oZCB4dzwxg1OUGnrY%2BkV8c9q26jvmzLS4rM5RG3BPMe20O6jPRuDbA2TCDlXMQ8FLHjgtq2F6Z14oNmmlLokrWUQu%2F2JX0rPkCXj2OdDQo2c1XzdAPnnzWYT2iGWnGhAM4RUFDgf2IPU6F9v%2B5yb8cmcB4fuYBnz5eqJERRNtRavzSipg9ti1YgcJ185baAjLbGt5xlnNYO4egBsjURsPQfQDUcx67ec3OZkgIRqWOD2iRm3v2xa57HAYguPnYZNqszcfcQhmzoDakuK35x0u8GG7h6WZ7HoAn%2BAfUX3m9adW%2B3xZMISQ28kGOqUBgq73FkmQVSsHCHAeThHlIF36vBVsm%2FVBd4T31iZe6uEKwHDewfOlz5uupB3tIudL564R30z%2BsyCmk%2FRVxNou6T6Ff2XbZQC3EmtQVk9LywRuzPbvNpTF7SZXoq5tAxkeyDRsSmHfGyLAW%2F%2FuuSpfIGNF1HG7GuHnu%2B%2FAhqch2voZJmR60fFWVUj%2BRY%2BekxPSXWIc%2BcANnyuozTeYog73CEVYlYjf&X-Amz-Signature=b52186053893ab7ef723a1ef47b8be0f827572cfc648bd4cd66eef5f84a9707a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

