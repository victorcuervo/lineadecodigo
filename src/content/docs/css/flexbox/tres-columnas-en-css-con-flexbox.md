---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2JSG4HP%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T175648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMt%2FjNw07brBBVT106%2FjVsdiXEKdtWj1Lua%2Fq5rNylogIhAOVVLt2%2BVhhrLlg6vHIFH8yd2NBl%2Fr5pPycx8gLPya1rKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwqnBFP1BNH%2Bpjcmngq3AMxUEKfQtBmfCaNszG0InrIpZiHMPDJkbIhf0Yk%2F2DN%2BLoDEfxkCQAHGj%2BA48O8Wsq%2Fle8uAWxfRuRgWNO%2FW9%2FlcOaktn4NnmkeTQkOBv2lRZ6CKnI%2FA%2BsLEy48hTCcvBmm2His3euf1qbf6%2BLGjsgpKj0pmo5XT0%2F0zt40BSsxgyRJ%2FtkOjmJp872ypGH5UI1BbbQPtX9ek5SBjmumtB6aOh6ZdxsMpnFlhu6HX7aI04YRVTCwRfGPkr4I6KfQu2vocxTJtsW2VWuwznaGVU7A%2Fx0k%2FdPAL3oT5cVk7vzKhtMF77HWZMjLxGcROg%2FZ2uIn%2BBjuKMuCawjvAe4E2om%2Fhssn14SY7v21F%2BMspYOHpxhzH7rfmZ9wMQVCOCh9Zt5Uo18b6pLcm9%2F43kdIFVUonj5OMdQ3X05yXVhDZTdJqun6iV1V7O7LaL3CExuTWeGNfU0Z%2FNsiJtexFbI43D7Sk75PREfCKK6rs4CsAz%2FJjA0wduhkQmDnJhqUoNPAOayXS8Coo0olXu6UiFk1v2fuc85Jfd%2FETTmehkmRkGDhEMGht4aYPE%2FU2ul84j24%2BJsd911mUb3IxKLIyi7iClRhVLtsK3HGBj4uRvoQE0tXstpQkNN380HvfoBQYjCeh9zJBjqkAUk3nDpxPOwjjrGEMocQz0f51dgQTvCSYC9oIT7TkD8njZnGjAH0mg17O0%2BVTWO3XeCV5Qh9%2BNhjSu2OU7kYB7QFA9IdvoMJXgEEaZ6NHsZhOZFgvdWQ%2BkEEtn6vMU9jN6AqnWPLD0%2BkNfoHDvJ%2BcsTCxBBmcD2PVMOVmkbea68zBOhaG0Y5pboQIOW%2BHn8n2iA6CGaA8OSY1Ij7tn6FbMnNDJZZ&X-Amz-Signature=e4d35949a1a77593486efd36cba6abbc5c2e5fd1e6eed143b56f9897c4f772d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2JSG4HP%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T175648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMt%2FjNw07brBBVT106%2FjVsdiXEKdtWj1Lua%2Fq5rNylogIhAOVVLt2%2BVhhrLlg6vHIFH8yd2NBl%2Fr5pPycx8gLPya1rKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwqnBFP1BNH%2Bpjcmngq3AMxUEKfQtBmfCaNszG0InrIpZiHMPDJkbIhf0Yk%2F2DN%2BLoDEfxkCQAHGj%2BA48O8Wsq%2Fle8uAWxfRuRgWNO%2FW9%2FlcOaktn4NnmkeTQkOBv2lRZ6CKnI%2FA%2BsLEy48hTCcvBmm2His3euf1qbf6%2BLGjsgpKj0pmo5XT0%2F0zt40BSsxgyRJ%2FtkOjmJp872ypGH5UI1BbbQPtX9ek5SBjmumtB6aOh6ZdxsMpnFlhu6HX7aI04YRVTCwRfGPkr4I6KfQu2vocxTJtsW2VWuwznaGVU7A%2Fx0k%2FdPAL3oT5cVk7vzKhtMF77HWZMjLxGcROg%2FZ2uIn%2BBjuKMuCawjvAe4E2om%2Fhssn14SY7v21F%2BMspYOHpxhzH7rfmZ9wMQVCOCh9Zt5Uo18b6pLcm9%2F43kdIFVUonj5OMdQ3X05yXVhDZTdJqun6iV1V7O7LaL3CExuTWeGNfU0Z%2FNsiJtexFbI43D7Sk75PREfCKK6rs4CsAz%2FJjA0wduhkQmDnJhqUoNPAOayXS8Coo0olXu6UiFk1v2fuc85Jfd%2FETTmehkmRkGDhEMGht4aYPE%2FU2ul84j24%2BJsd911mUb3IxKLIyi7iClRhVLtsK3HGBj4uRvoQE0tXstpQkNN380HvfoBQYjCeh9zJBjqkAUk3nDpxPOwjjrGEMocQz0f51dgQTvCSYC9oIT7TkD8njZnGjAH0mg17O0%2BVTWO3XeCV5Qh9%2BNhjSu2OU7kYB7QFA9IdvoMJXgEEaZ6NHsZhOZFgvdWQ%2BkEEtn6vMU9jN6AqnWPLD0%2BkNfoHDvJ%2BcsTCxBBmcD2PVMOVmkbea68zBOhaG0Y5pboQIOW%2BHn8n2iA6CGaA8OSY1Ij7tn6FbMnNDJZZ&X-Amz-Signature=6113f60beeb741e6a3a6b8336082bac8fa0b2b69b0e23bc18078a75c95e3e0d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

