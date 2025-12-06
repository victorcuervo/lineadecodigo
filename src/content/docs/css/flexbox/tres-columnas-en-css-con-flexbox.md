---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WXUKQZV%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T194457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRy76%2FplfPZLv94eSVig%2BhjrfM42EazElKBY9wRQh43wIgQIo5NDFEENvpL%2FIsbVfROUKzRf6dOtVrfEdAx4dT89Eq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDHmpB4nT8fBxgmMeBircA5LvWO%2F2AGahIwnAB5z1i8Jw6oT8wyyhYjJuiAZ%2F3xDDuDLXRMb4kCEFMNg%2Fhlr4K9Tc4woMQKEZFy7M8bPacz8Sl568YXFLaS53OqWYmSgv6vhqXOQ74pLVy5lDTh6kCa%2FKggGRhXzxcKYFXv0HEdPGcb1rlgjT3RdwDeHCor81m%2F8rUEMb5Stgain7dU0FXGCaAioWxApVnirz%2BOKzqLegX4LJuQ%2F9mt1am9LhylYEfYZthZ2MfkGf6iltVp0c6QNHwKDoiMDU%2BYcnKLKea81el31ysj8S1ezaxj%2F6rPR61fgMSzaMJ1t0teev0CbotpbnCtnA2AyTdgSOhrvKMUc9ylrj9hktyvrwTtZ%2B6N%2BXQcg6bvXw7btD0elgenp2UG730IfXZRHB3epUqq8K7xeOm00AChqipjJTt%2B1XEs5DO%2FhVc3RPMryCDTZXM8Q6rmkj365g3%2BYRu75etDbhmbZlpvCuDl%2BH6FfaV93DiAK2Ex552weFPeBCnjK5eXkiqZkRHoXLjxP9KLYkIoc0oeNlhWECbZfOELcWOO6hhk%2F6vkNcBR%2FcGl%2FNepkI7pVz0AouF%2BrU%2Bu0BpbQ4QATIPN6AJBfaVeKd24MotapxOtKwyuGC2rJVKZzTe8tmMLbF0ckGOqUBTyQ5ZfyWx8l%2FmGTYV%2F0T5mIO0BaBaCEGvKGUk%2BT1L2zBAEH%2FZJGEShMNxZj%2BHFKVAKzFY5PSCEwX8ElFbwO7ciaAymki9adNeonivnKU4gMeZVsu6iwIvr%2BzP1NCaJSeOXfad5mhKtCqN7OQjap3EYhiKt5kktWHV%2BZYPBNI%2BFzIQyYO9DWw64xg06q7jyv0nbf544b27VuwT47dek8Bkwd%2BFI3z&X-Amz-Signature=7584b6a7f8149f7976d3ab9b68721e591d6e788ae8491c4b776febb7dd6ea6eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WXUKQZV%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T194457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRy76%2FplfPZLv94eSVig%2BhjrfM42EazElKBY9wRQh43wIgQIo5NDFEENvpL%2FIsbVfROUKzRf6dOtVrfEdAx4dT89Eq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDHmpB4nT8fBxgmMeBircA5LvWO%2F2AGahIwnAB5z1i8Jw6oT8wyyhYjJuiAZ%2F3xDDuDLXRMb4kCEFMNg%2Fhlr4K9Tc4woMQKEZFy7M8bPacz8Sl568YXFLaS53OqWYmSgv6vhqXOQ74pLVy5lDTh6kCa%2FKggGRhXzxcKYFXv0HEdPGcb1rlgjT3RdwDeHCor81m%2F8rUEMb5Stgain7dU0FXGCaAioWxApVnirz%2BOKzqLegX4LJuQ%2F9mt1am9LhylYEfYZthZ2MfkGf6iltVp0c6QNHwKDoiMDU%2BYcnKLKea81el31ysj8S1ezaxj%2F6rPR61fgMSzaMJ1t0teev0CbotpbnCtnA2AyTdgSOhrvKMUc9ylrj9hktyvrwTtZ%2B6N%2BXQcg6bvXw7btD0elgenp2UG730IfXZRHB3epUqq8K7xeOm00AChqipjJTt%2B1XEs5DO%2FhVc3RPMryCDTZXM8Q6rmkj365g3%2BYRu75etDbhmbZlpvCuDl%2BH6FfaV93DiAK2Ex552weFPeBCnjK5eXkiqZkRHoXLjxP9KLYkIoc0oeNlhWECbZfOELcWOO6hhk%2F6vkNcBR%2FcGl%2FNepkI7pVz0AouF%2BrU%2Bu0BpbQ4QATIPN6AJBfaVeKd24MotapxOtKwyuGC2rJVKZzTe8tmMLbF0ckGOqUBTyQ5ZfyWx8l%2FmGTYV%2F0T5mIO0BaBaCEGvKGUk%2BT1L2zBAEH%2FZJGEShMNxZj%2BHFKVAKzFY5PSCEwX8ElFbwO7ciaAymki9adNeonivnKU4gMeZVsu6iwIvr%2BzP1NCaJSeOXfad5mhKtCqN7OQjap3EYhiKt5kktWHV%2BZYPBNI%2BFzIQyYO9DWw64xg06q7jyv0nbf544b27VuwT47dek8Bkwd%2BFI3z&X-Amz-Signature=81d244da59d4a8927d0b197ffd8fc43ca44bcb5768e66e4770ab623b5b15598a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

