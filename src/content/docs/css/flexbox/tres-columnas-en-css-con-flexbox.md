---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GKI7YN3%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T073812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0RyU3YmEEViZKETRZCPYFe0Qx9y%2F1nROK7gNHDQ4lSwIhANj7fR0P3J36hqLZs6iQRskizhK4E%2FKNwWiaglHlTsYOKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwGi8EPDPeuouf8hOcq3AM4Q75cFnJACrOm8hRo74PEZMieDTqGLQK8zoU8yAdsYYtdzpwJR2JhHfmlSfEpVL%2BA9%2BO49xJezADZx5tTTQl1h9jhlk%2Ba0sQoqZTTeHjkCZdrkACHb2VO5nu2aM%2BbqtAAOXHL6thEi4KzSaR1BJpnGqOKJX7ThO8pohZKnrKCBPCAEXOVC%2FDdfkaqIEu8ArwDk%2BiE%2FuyITFaX6W41iQUm%2FIVUTbLkPzVUfqw0y88Kgfv1zlpEu4rg0swSxRoxfyxomRtpT8DneRjm5BuB7p9EfiuVN%2FB6bQQ5%2FEVppTf%2B20Vqq1oOYfyFs9qBdbz7T5dPvUoL1toI5lyE7JfUcvmZRiSFRj5ayHLYuc3kQE7zGEo6ttS8QO8%2BbupXiKRjkvwjrGzowa%2BeklhQ%2FKtNJbI1M8CvFA3E81ArcpqHWooRDmDQwVLw430%2FC4DMhAUyGEm62ls6NHVV2jI2ejYCbvaN3b%2FiJEu4RinXuht6oXYJsqS8Y6SFX%2FV1Zdg5%2Fk0eSd0FHaooLZHQQ4oYEzkOqnOL31IK%2B6pRMeQv0qNTFDemzibZvF6%2BysQK8wu%2FUKOuet2ux732arHREA7hMUxDrqjeayE7i9RHOrIxFPKFWbjA4o0bpwRUqsMsmF2SpTDf7dnJBjqkARHdi1z8xPV%2FidjFW96D%2BzgxG1fP7A4BvBRjC2dKY6WdxtK7vxzfico0sT258yBEL%2Fy27IW7hSa4gLrlFn%2BuUaIc1J1zSMivdRbozxI17WjTGPfZiid593jc1XTg5bmxRs3YKzRPUdI6TQCZZu1HruuW4KddUg9b6Rd3Cwlkx6KRoQuNUagPGNYjQvWVWXQPwyizYtGHkrU71Tsa1mu5Qk4gjMM0&X-Amz-Signature=3d263ee45118b76a288c486539d2ec07a50357b6fb4601f2202c7eebb274fd41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GKI7YN3%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T073812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0RyU3YmEEViZKETRZCPYFe0Qx9y%2F1nROK7gNHDQ4lSwIhANj7fR0P3J36hqLZs6iQRskizhK4E%2FKNwWiaglHlTsYOKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwGi8EPDPeuouf8hOcq3AM4Q75cFnJACrOm8hRo74PEZMieDTqGLQK8zoU8yAdsYYtdzpwJR2JhHfmlSfEpVL%2BA9%2BO49xJezADZx5tTTQl1h9jhlk%2Ba0sQoqZTTeHjkCZdrkACHb2VO5nu2aM%2BbqtAAOXHL6thEi4KzSaR1BJpnGqOKJX7ThO8pohZKnrKCBPCAEXOVC%2FDdfkaqIEu8ArwDk%2BiE%2FuyITFaX6W41iQUm%2FIVUTbLkPzVUfqw0y88Kgfv1zlpEu4rg0swSxRoxfyxomRtpT8DneRjm5BuB7p9EfiuVN%2FB6bQQ5%2FEVppTf%2B20Vqq1oOYfyFs9qBdbz7T5dPvUoL1toI5lyE7JfUcvmZRiSFRj5ayHLYuc3kQE7zGEo6ttS8QO8%2BbupXiKRjkvwjrGzowa%2BeklhQ%2FKtNJbI1M8CvFA3E81ArcpqHWooRDmDQwVLw430%2FC4DMhAUyGEm62ls6NHVV2jI2ejYCbvaN3b%2FiJEu4RinXuht6oXYJsqS8Y6SFX%2FV1Zdg5%2Fk0eSd0FHaooLZHQQ4oYEzkOqnOL31IK%2B6pRMeQv0qNTFDemzibZvF6%2BysQK8wu%2FUKOuet2ux732arHREA7hMUxDrqjeayE7i9RHOrIxFPKFWbjA4o0bpwRUqsMsmF2SpTDf7dnJBjqkARHdi1z8xPV%2FidjFW96D%2BzgxG1fP7A4BvBRjC2dKY6WdxtK7vxzfico0sT258yBEL%2Fy27IW7hSa4gLrlFn%2BuUaIc1J1zSMivdRbozxI17WjTGPfZiid593jc1XTg5bmxRs3YKzRPUdI6TQCZZu1HruuW4KddUg9b6Rd3Cwlkx6KRoQuNUagPGNYjQvWVWXQPwyizYtGHkrU71Tsa1mu5Qk4gjMM0&X-Amz-Signature=8760bea51a159693aee6c18a20a7a2f2db6d4443c00f79f08cc07b4e3a1eb658&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

