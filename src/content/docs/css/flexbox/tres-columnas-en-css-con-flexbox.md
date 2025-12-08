---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XV3OBSI%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T192350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpedxEUEksAUxJXbDtsXIwDyEhKkIArb%2BU%2FGu%2B3tcg%2FgIhAIhItI5hyrWzlNaQJM3024BgGny1c7c%2BrA074EetqsEaKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyLjtBQkiVZ4AcUDpQq3AM0h4feULIUWiSbe9Ut%2FXpKlRXR89Fi4OV9YkOadK9MVLlw3f1%2FVG7b8yFJsJsYvPA3gfFMRduHhmlmaFW%2Fsba7w3ZI%2FeJ5RsTk%2BEORaiRNRGMH7dXZJYfgW62bES6%2BhqCzi3dN9V%2FecTRsBRieYudPW36t8EmVug18PD3x6eCZBQDrPP8EaZIOOJGJbVoRwE0N0ufYrFjjAGBfszxVnJtNF7IXbSTe9rlS0tqLlxcp5Mje4R8BfTDhYM8pEB%2BT%2B90algBT0L2UUV3K0kad2epfV7cCUua9olmZbVMbASenQYW4SvVr2p2R2tD%2BIqeT6TqA5pslo6qyifTPvpOqW0H%2FW9EQxzeuFvcIb%2B7x%2FYcUjnZvgdbox7p4vIr75yLEfRne96e3C4YYK7GZl7FRmfdyvFwIxykvit220VMkaYU%2FHvAXIb9Ahovn46guzoH08ODgLrV7q3Uneo3eL92MtdE0Y4jy0v1WcvfRX5KyLq76IjRzQuyGZxjNTi%2B9%2BdSORVFvop4jml1MuS6Qlr7JzMw2LtNWQVc%2BCT0M2lZxzoPS8QcjVk8xmPxNiFTk3aEh2jTs0fTN3HR2bMEwd%2BlSTO0I1S6RrBs4xtNFIaygGcco%2B1DGr75y%2BHijQ8AsEDDMs9zJBjqkAYoC5Q9PfuHwkA2%2BSndJe8DmcV33rzKSCRBR9dF9KNZRxH1rDsBv0dOR6pECMkHS6o%2FZuBgv86PwY5JbrfReUol3z0PcVQ2miH3b%2FwnsY93Em8XymvP5cxlXwVhXIytXQIlD51h8gvQ2aQS%2BIMoYnkHfWv7i9vBj7kusoJFncByyH6gRcvZdVdZir1ncdMRMbrUunBVmFGhhHUE8h3OH5ZwWxJkN&X-Amz-Signature=2653c920789c25bfb5e9782e6200ec7d57bff797dcb5d92c859759df9324bf72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XV3OBSI%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T192350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpedxEUEksAUxJXbDtsXIwDyEhKkIArb%2BU%2FGu%2B3tcg%2FgIhAIhItI5hyrWzlNaQJM3024BgGny1c7c%2BrA074EetqsEaKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyLjtBQkiVZ4AcUDpQq3AM0h4feULIUWiSbe9Ut%2FXpKlRXR89Fi4OV9YkOadK9MVLlw3f1%2FVG7b8yFJsJsYvPA3gfFMRduHhmlmaFW%2Fsba7w3ZI%2FeJ5RsTk%2BEORaiRNRGMH7dXZJYfgW62bES6%2BhqCzi3dN9V%2FecTRsBRieYudPW36t8EmVug18PD3x6eCZBQDrPP8EaZIOOJGJbVoRwE0N0ufYrFjjAGBfszxVnJtNF7IXbSTe9rlS0tqLlxcp5Mje4R8BfTDhYM8pEB%2BT%2B90algBT0L2UUV3K0kad2epfV7cCUua9olmZbVMbASenQYW4SvVr2p2R2tD%2BIqeT6TqA5pslo6qyifTPvpOqW0H%2FW9EQxzeuFvcIb%2B7x%2FYcUjnZvgdbox7p4vIr75yLEfRne96e3C4YYK7GZl7FRmfdyvFwIxykvit220VMkaYU%2FHvAXIb9Ahovn46guzoH08ODgLrV7q3Uneo3eL92MtdE0Y4jy0v1WcvfRX5KyLq76IjRzQuyGZxjNTi%2B9%2BdSORVFvop4jml1MuS6Qlr7JzMw2LtNWQVc%2BCT0M2lZxzoPS8QcjVk8xmPxNiFTk3aEh2jTs0fTN3HR2bMEwd%2BlSTO0I1S6RrBs4xtNFIaygGcco%2B1DGr75y%2BHijQ8AsEDDMs9zJBjqkAYoC5Q9PfuHwkA2%2BSndJe8DmcV33rzKSCRBR9dF9KNZRxH1rDsBv0dOR6pECMkHS6o%2FZuBgv86PwY5JbrfReUol3z0PcVQ2miH3b%2FwnsY93Em8XymvP5cxlXwVhXIytXQIlD51h8gvQ2aQS%2BIMoYnkHfWv7i9vBj7kusoJFncByyH6gRcvZdVdZir1ncdMRMbrUunBVmFGhhHUE8h3OH5ZwWxJkN&X-Amz-Signature=d3e6ec1c5fba94b9113a41de4993fadb64e118ae7b0bf4f82fa31dd1365ffaf3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

