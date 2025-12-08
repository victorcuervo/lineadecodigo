---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCCHSDS4%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T202612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwv%2B%2B9omwXBWlT%2BjUG2YT4nzZ8U1PGVjHmDAzn6%2Bpf4gIgRHN42BfEKL41XRv4iOICKHw5T0hEVe3I9D%2FoUBNcT3sqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBLLcATdII%2F%2BsyFaOSrcA4wZ4Qg%2Bo88FPmLf75ELvjQzfowvn6YzJVl8T1M5jW5jp6HieHJlYHuOFyJjPRbvluxCbasRVt9SMmdOsJcdRfzJEkrskxs4kCUEciKyPSumynH4KWZPo042j1wFtkafjHeoMuvTJI42kJHH1ZiJ5EhoQD4VAp6RW1tqmyduMlKWOHlP4Q%2By8kQh%2FNDIIrNmYXG7myBgGxvwtVfzB%2FVb4gAji1iz%2BUdnQVEYyPXNzMbxa5z1PyXcC98%2BK0iyndq1xUjs%2FbnkgcuJw5tsTHboelvFeJaUEeU9HKmK29m390okgGsFJV3WmU1WrDx6%2BeDLZHuqnJFOLtAQR1lLp%2BP8phsRTboZt0crAQPLVVSG2nklKzuwqNwxTxrAtdrmmQsXoiStydnZo5MrymbXFP%2BBu%2BTcv9%2BoSAu6vaPIcSoWgUSH5gpfwygVgHfnAbi%2FPjj5MVgf38OswBugxuTsRKZrCoDVp%2F3f%2FEwlGTutTLFolmDVB940XrVxxNr2C2VOaISm2sZdC479kXzM3ezkZ%2B%2FRKbs5QmT3tRA%2FfPdH4UjMKZyMo8YGnmo4dcFmZY4gBmz%2FAToGRqtgo3Y%2FzB2BvexcdMQ%2Bo2tM8KRHFjcqtH51A4BYpnpgJwpfeuF2ppIJML%2Fd3MkGOqUBYQmTJNSXpSOG61khg%2BjHD6lN5sBGOr3N3MWRurin1aD1mQyCwdDc9YvgHEhKkffxTksoZb%2BGEDI93ybjqh6j7goyliaOtPlhafqg7udjKLpecUDlkns3jCH6tIdeHw75%2FnKurbYyriiabxRS082HHCEtNT9wBe8P%2F%2B0e4%2FbSs0Zn6oEGW%2FIDSKrFVSC4%2FiyC%2Bakvab400CciF9xnpJfpxSeOVXuK&X-Amz-Signature=6ad00ba16d2141a55c9d662bf3c30dbe0030f1386918fde6a711789c0eceae13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCCHSDS4%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T202612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwv%2B%2B9omwXBWlT%2BjUG2YT4nzZ8U1PGVjHmDAzn6%2Bpf4gIgRHN42BfEKL41XRv4iOICKHw5T0hEVe3I9D%2FoUBNcT3sqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBLLcATdII%2F%2BsyFaOSrcA4wZ4Qg%2Bo88FPmLf75ELvjQzfowvn6YzJVl8T1M5jW5jp6HieHJlYHuOFyJjPRbvluxCbasRVt9SMmdOsJcdRfzJEkrskxs4kCUEciKyPSumynH4KWZPo042j1wFtkafjHeoMuvTJI42kJHH1ZiJ5EhoQD4VAp6RW1tqmyduMlKWOHlP4Q%2By8kQh%2FNDIIrNmYXG7myBgGxvwtVfzB%2FVb4gAji1iz%2BUdnQVEYyPXNzMbxa5z1PyXcC98%2BK0iyndq1xUjs%2FbnkgcuJw5tsTHboelvFeJaUEeU9HKmK29m390okgGsFJV3WmU1WrDx6%2BeDLZHuqnJFOLtAQR1lLp%2BP8phsRTboZt0crAQPLVVSG2nklKzuwqNwxTxrAtdrmmQsXoiStydnZo5MrymbXFP%2BBu%2BTcv9%2BoSAu6vaPIcSoWgUSH5gpfwygVgHfnAbi%2FPjj5MVgf38OswBugxuTsRKZrCoDVp%2F3f%2FEwlGTutTLFolmDVB940XrVxxNr2C2VOaISm2sZdC479kXzM3ezkZ%2B%2FRKbs5QmT3tRA%2FfPdH4UjMKZyMo8YGnmo4dcFmZY4gBmz%2FAToGRqtgo3Y%2FzB2BvexcdMQ%2Bo2tM8KRHFjcqtH51A4BYpnpgJwpfeuF2ppIJML%2Fd3MkGOqUBYQmTJNSXpSOG61khg%2BjHD6lN5sBGOr3N3MWRurin1aD1mQyCwdDc9YvgHEhKkffxTksoZb%2BGEDI93ybjqh6j7goyliaOtPlhafqg7udjKLpecUDlkns3jCH6tIdeHw75%2FnKurbYyriiabxRS082HHCEtNT9wBe8P%2F%2B0e4%2FbSs0Zn6oEGW%2FIDSKrFVSC4%2FiyC%2Bakvab400CciF9xnpJfpxSeOVXuK&X-Amz-Signature=314146cec827abac990898034e7401e39e9ccac316f074a0fce53d6b341fb8fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

