---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZWSP5JG%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T171053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDhjbWgaHavDyEKl3EqbaM7UpQ%2BDTyM5f6wabEliJiKSQIge6Zy4rW9tprArFiy2wadqhwYpSRWptvqW8%2B9FC50AHcqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIzSEjXDd6xwWu%2FAFyrcA%2BDoLFjIwrxg6A2nbU6sj0kCz33WHLjf4n4TFKfAAq15Yj0e06EbUBJqIJwibu7%2F1A9zkjH2fMvyThEbNE5UpHh%2BJ0KtIeWRYwQQK7okcKX5%2F9My339spU5sRDUEq2aQN6wnSKIG664P8O%2F2LoyP6qwovGRGh4Mo56IP7S6W9%2FGdSAtRPVdr8Y5wQwMOyB7vIWVP8yzIW%2BSTs8xWgOZA2wTAGToMlx1elKlhFR6tTK1I1WlN%2BtBpIvxFDvMP710BKHFQ4KolSQqYjp03ptMBLGiosHUwER%2FySmJQu7rz165FSxsHhnXBL%2BRhIRUnDX7OOtgpt%2B0Hw93hd3JACnR5XI6rDqHyYZb40%2Fis5YiLL8ItxIPgoRB6co9FpfTvOB4jdaVSx1dLz1ZhjBjtk9KHzqcN6SdVIC3NtoDNfxzBXjAfnrwG4POuTTWaOKLsbWL%2BZyBBHawQvoG0148ggCqVmEe97y%2FfnWSjQZQOUkGlq0s2akT3o1AXbY5p5vADfDYwnC7qmIbMoEX5o5V7wYOEdMleJxFbH7LOEbQYxNLqI%2BXzMrKqBtAuvmDQ2q4juBFYhIMaAcgL0dHJt9A06tagfMHRNhSBKX%2BTLQtGQ2aV5ZmkWn1o8ghUhrVdT0cfMMGH3MkGOqUB4vs2EHlAsPepb4Oyco9wst%2BTI6XUUISPgcvO6jB7tns41TlCb4SEeNd9nlGDvU9HvBcv7RFZP0ALRdZknRqmBBoHhpWX3JL9bFDc9A5mqL2fQAi4Mxii9qFgaVTHD6rjD4pYzpoaxdgLTwNk9pV47zASkK1umXIhqQ7dXgcni3F3wpKLJzIcFovIFJGL1WhwUWIGcML8z7uJAVs46DmH9vSaIlFR&X-Amz-Signature=5dde56a0524cbef0863848099a00696167cb549fcffa889d5979cba91f0056a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZWSP5JG%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T171053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDhjbWgaHavDyEKl3EqbaM7UpQ%2BDTyM5f6wabEliJiKSQIge6Zy4rW9tprArFiy2wadqhwYpSRWptvqW8%2B9FC50AHcqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIzSEjXDd6xwWu%2FAFyrcA%2BDoLFjIwrxg6A2nbU6sj0kCz33WHLjf4n4TFKfAAq15Yj0e06EbUBJqIJwibu7%2F1A9zkjH2fMvyThEbNE5UpHh%2BJ0KtIeWRYwQQK7okcKX5%2F9My339spU5sRDUEq2aQN6wnSKIG664P8O%2F2LoyP6qwovGRGh4Mo56IP7S6W9%2FGdSAtRPVdr8Y5wQwMOyB7vIWVP8yzIW%2BSTs8xWgOZA2wTAGToMlx1elKlhFR6tTK1I1WlN%2BtBpIvxFDvMP710BKHFQ4KolSQqYjp03ptMBLGiosHUwER%2FySmJQu7rz165FSxsHhnXBL%2BRhIRUnDX7OOtgpt%2B0Hw93hd3JACnR5XI6rDqHyYZb40%2Fis5YiLL8ItxIPgoRB6co9FpfTvOB4jdaVSx1dLz1ZhjBjtk9KHzqcN6SdVIC3NtoDNfxzBXjAfnrwG4POuTTWaOKLsbWL%2BZyBBHawQvoG0148ggCqVmEe97y%2FfnWSjQZQOUkGlq0s2akT3o1AXbY5p5vADfDYwnC7qmIbMoEX5o5V7wYOEdMleJxFbH7LOEbQYxNLqI%2BXzMrKqBtAuvmDQ2q4juBFYhIMaAcgL0dHJt9A06tagfMHRNhSBKX%2BTLQtGQ2aV5ZmkWn1o8ghUhrVdT0cfMMGH3MkGOqUB4vs2EHlAsPepb4Oyco9wst%2BTI6XUUISPgcvO6jB7tns41TlCb4SEeNd9nlGDvU9HvBcv7RFZP0ALRdZknRqmBBoHhpWX3JL9bFDc9A5mqL2fQAi4Mxii9qFgaVTHD6rjD4pYzpoaxdgLTwNk9pV47zASkK1umXIhqQ7dXgcni3F3wpKLJzIcFovIFJGL1WhwUWIGcML8z7uJAVs46DmH9vSaIlFR&X-Amz-Signature=b5a0122f3612dd06d250187bd8e0bf202673ce780de20e963febea4fb2a58e9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

