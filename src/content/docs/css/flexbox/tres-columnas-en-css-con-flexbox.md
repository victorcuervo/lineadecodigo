---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2E2ADL4%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T001122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIACghU0LOEOU2yuYXIo72VwKgd4yC0FWbdYa0870f3oaAiB4bsH%2BXEVHZJjlzxy2XWTL0ImiTtgrakDkscBB4ccwRSr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMau7gg8%2FPq5NhTfQtKtwDfA%2BOalMdsI9YrI0VFIgYLpb9SaavHNWbcZC9WJpHa738SI1B6dh5wfKvTBfkxsDtcJlc%2BjjQtAzasc7a0kYFkANNNQy6TZoAxy0La2dm%2BFA17hMztBiVPyS57ctM4QtGweKIchFAx9mYq6d6AGMhqHpAi9qkJxztGCJMwX8RAQZoOFXEZ%2B0ZqhByYx%2FCBKVwIIaRiDlSnS2Ovsxe1GvxFs25Z1qA5SGveUDxWq6cB8GXyeAxt%2Bx7M33FiNytbeAgDhdmV%2FxVWiFpBs0nHHa1w6ndxwZS7Yq3lTX1SwXQOrX%2FWts1EmR4XwAVoOQ9qAJ6AZ0SM4x8CAajc355HtztEBcUumwiY9BR4dsqubibS8LkSSoUMRr4r5y2dqBctvIKmiXI3YWB3JLyWBxkPQiNgpGsznCLrPIz1r4VW1wAeeVc1QQ9p7BYUiBt4k5fLrGKCHxkORVSklkIAcDR%2Fdtn8jTpNWnUNX3Ml7zIrWlv%2BPW0vH7yDxxz0dkAoNBN9sOu8DQaTfWd%2Bu2kuVn9bQfTZsWqrMxUQa%2FCR53Ds%2BsXWuGg9E6HT9u3QM71dWLIrQOklHEvzx7IPGKz44TfdMJ233ITpyIJKL4KZGVPJsD%2BwrYa2cWiXHbrcwv8%2Fi0whJXDyQY6pgFg%2B6i3ueX%2BC8tVAGU%2FSj3WS%2FfKsnjRifsioQ37WtRZO6pgROr76NTNeGB4dN%2BwM7fEGseU%2BFjKoiG4DfMXtwiGXuVCUMkXy28qhdWECmQvgB9f4ji8DgXD4dlNtWcRk8ibPKZJAPORS3LpeCXqURoRFeayevon8ZZuNPCqaKGSkGyWwaO18oRUjQDW8y9c5EAjDD5IvO2ysHEfsWO3kJeGlqTy59xm&X-Amz-Signature=1b84034d16c4bed1475181b6dde497e53050e7796f47f1b7b14994e4df9c67ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2E2ADL4%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T001122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIACghU0LOEOU2yuYXIo72VwKgd4yC0FWbdYa0870f3oaAiB4bsH%2BXEVHZJjlzxy2XWTL0ImiTtgrakDkscBB4ccwRSr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMau7gg8%2FPq5NhTfQtKtwDfA%2BOalMdsI9YrI0VFIgYLpb9SaavHNWbcZC9WJpHa738SI1B6dh5wfKvTBfkxsDtcJlc%2BjjQtAzasc7a0kYFkANNNQy6TZoAxy0La2dm%2BFA17hMztBiVPyS57ctM4QtGweKIchFAx9mYq6d6AGMhqHpAi9qkJxztGCJMwX8RAQZoOFXEZ%2B0ZqhByYx%2FCBKVwIIaRiDlSnS2Ovsxe1GvxFs25Z1qA5SGveUDxWq6cB8GXyeAxt%2Bx7M33FiNytbeAgDhdmV%2FxVWiFpBs0nHHa1w6ndxwZS7Yq3lTX1SwXQOrX%2FWts1EmR4XwAVoOQ9qAJ6AZ0SM4x8CAajc355HtztEBcUumwiY9BR4dsqubibS8LkSSoUMRr4r5y2dqBctvIKmiXI3YWB3JLyWBxkPQiNgpGsznCLrPIz1r4VW1wAeeVc1QQ9p7BYUiBt4k5fLrGKCHxkORVSklkIAcDR%2Fdtn8jTpNWnUNX3Ml7zIrWlv%2BPW0vH7yDxxz0dkAoNBN9sOu8DQaTfWd%2Bu2kuVn9bQfTZsWqrMxUQa%2FCR53Ds%2BsXWuGg9E6HT9u3QM71dWLIrQOklHEvzx7IPGKz44TfdMJ233ITpyIJKL4KZGVPJsD%2BwrYa2cWiXHbrcwv8%2Fi0whJXDyQY6pgFg%2B6i3ueX%2BC8tVAGU%2FSj3WS%2FfKsnjRifsioQ37WtRZO6pgROr76NTNeGB4dN%2BwM7fEGseU%2BFjKoiG4DfMXtwiGXuVCUMkXy28qhdWECmQvgB9f4ji8DgXD4dlNtWcRk8ibPKZJAPORS3LpeCXqURoRFeayevon8ZZuNPCqaKGSkGyWwaO18oRUjQDW8y9c5EAjDD5IvO2ysHEfsWO3kJeGlqTy59xm&X-Amz-Signature=91a1ae2fa10be081162db88d4ec8818c24a4076477f448139b6f496f0697d508&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

