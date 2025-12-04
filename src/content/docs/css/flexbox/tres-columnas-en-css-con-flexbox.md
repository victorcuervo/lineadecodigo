---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4UOF3RF%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T151628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQDWHs%2FpQ%2FBcbp%2FNtMlpmNha2MB4eVKtmcUWj9MYsKg4sgIgCBZY0gQiUNDBBAVAx5ZZvLLm9sGc9bsbdKQrFFFeL%2FUq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDBqDwzMMV1VX5GF5hircAyCtJg78sObCsBAviuXkL5DLgd%2FZ7HaiA2mQj3Yj%2BXPf56GSXPYsvpDsZn%2Fhh5jIMXPut2SxQgtNdUkJzpuKgFXmbEWzT7tYhSO9j2HwiRI5P42Lov%2FhWKK4T3t0Iyx7yRlJnuTSlsZauWMclTLlQpJcEAzLhHvCmrAo%2FuH1hBhrFPShrTOl2PkC%2FnK4VHMQn5mY0HNOruLkOQxfj8oC4IUdB4P4me%2B%2FSKy57%2F0Ciaa2xQMFyUKi%2BhfvmTZZzvN0cmX84zY6nL4fz2pyeoCXV76F1NrwkjJT8vcZsLsQviFur%2BTC5f9sSi0%2FZxFhttHLG5iNQr2qG3Php5FJ%2FSaxi8BCQ1GUsgIRkoq23OaEaIlV%2FdHGdaNobbWY8N269xRrNSGOzE8jZ9DLzsYobcLjlAEWDg1Zp2j7n%2FXMb14wPxkssncSVDcggmURIlq60CCE2kGjkxyqw3ABl3ZHwyCcdHiDANKqUQVMlJ8elgf6iGGouTyPx%2FuNIGXkLqetZH5yPMFs4o9ROIX8bbwqm3n5bP8Y8dzxogCLfqhCq%2F3L38zmJRoSfy0g0zo5O8Wf0RgcM7yptEg6WaqCGYOfW3LVF4Bm8U8ewqQTw1ucFHRKMULXUS28Mqo42eN3KmKFMIu%2FxskGOqUBOmgFKSdgnRRyaNVqx8yAhQq9qz73Ze9Kg12rD8%2FRVjY4ekXICohXMmNcVCwvaHC4b5JVvTJt9AcoqR323uUYMkF99LLTe%2Fng%2BSRRxhFye6PbUiii%2BqYHw%2F1gGZ%2BWl0wGHe7a0Pl0Vmzb46wy4lawvdmQ06ALeZGQk5%2FneNK10zN0%2BbAEoaN411Ki6aS7H6KWDhePSwoiMqBqJD538lGD5gvKhSoG&X-Amz-Signature=b91a1a3cd3af0aa61666ea43ae1cbf76cde8667b02e68a76898553101b74f516&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4UOF3RF%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T151628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQDWHs%2FpQ%2FBcbp%2FNtMlpmNha2MB4eVKtmcUWj9MYsKg4sgIgCBZY0gQiUNDBBAVAx5ZZvLLm9sGc9bsbdKQrFFFeL%2FUq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDBqDwzMMV1VX5GF5hircAyCtJg78sObCsBAviuXkL5DLgd%2FZ7HaiA2mQj3Yj%2BXPf56GSXPYsvpDsZn%2Fhh5jIMXPut2SxQgtNdUkJzpuKgFXmbEWzT7tYhSO9j2HwiRI5P42Lov%2FhWKK4T3t0Iyx7yRlJnuTSlsZauWMclTLlQpJcEAzLhHvCmrAo%2FuH1hBhrFPShrTOl2PkC%2FnK4VHMQn5mY0HNOruLkOQxfj8oC4IUdB4P4me%2B%2FSKy57%2F0Ciaa2xQMFyUKi%2BhfvmTZZzvN0cmX84zY6nL4fz2pyeoCXV76F1NrwkjJT8vcZsLsQviFur%2BTC5f9sSi0%2FZxFhttHLG5iNQr2qG3Php5FJ%2FSaxi8BCQ1GUsgIRkoq23OaEaIlV%2FdHGdaNobbWY8N269xRrNSGOzE8jZ9DLzsYobcLjlAEWDg1Zp2j7n%2FXMb14wPxkssncSVDcggmURIlq60CCE2kGjkxyqw3ABl3ZHwyCcdHiDANKqUQVMlJ8elgf6iGGouTyPx%2FuNIGXkLqetZH5yPMFs4o9ROIX8bbwqm3n5bP8Y8dzxogCLfqhCq%2F3L38zmJRoSfy0g0zo5O8Wf0RgcM7yptEg6WaqCGYOfW3LVF4Bm8U8ewqQTw1ucFHRKMULXUS28Mqo42eN3KmKFMIu%2FxskGOqUBOmgFKSdgnRRyaNVqx8yAhQq9qz73Ze9Kg12rD8%2FRVjY4ekXICohXMmNcVCwvaHC4b5JVvTJt9AcoqR323uUYMkF99LLTe%2Fng%2BSRRxhFye6PbUiii%2BqYHw%2F1gGZ%2BWl0wGHe7a0Pl0Vmzb46wy4lawvdmQ06ALeZGQk5%2FneNK10zN0%2BbAEoaN411Ki6aS7H6KWDhePSwoiMqBqJD538lGD5gvKhSoG&X-Amz-Signature=e4818c7e702893c404f89738ed4a34c62468ad1453a763b621e9618dfdccbd74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

