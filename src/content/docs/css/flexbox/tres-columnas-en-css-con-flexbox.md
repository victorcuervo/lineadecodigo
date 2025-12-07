---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FXJ6Z3Q%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T234909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDvVDeWtCYKfXb38wlFOyCjKnu5BElHEomF7dB8NdzHqAiEA2u36UHb5j88nS9x04JXxpUpQ3ZIK9SZKnszUrgQBzyMqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKuD0FoPX5nK1ANZSircAx%2FG3sBRWfVYx7JgnUVPUqWkfNWREcCjauTzgU5XFv8D0Lj9sqk7ZmUOKqOleKwuw2%2BkaSEbgsg81smMH6BpaR2p%2Bek5Wl%2FYZ27RLBvlOMTIhWfK3HTn0XJ%2FulElMcSMiTe12SMs8B%2Fp8DIF00cFA%2BcC5tT4iAO7qwaxbQhnWVFM2zywSXz%2BXhErxTYW2UPIE%2FvTCDJbS1R69Ody6jJQvdRNeQ6GO%2FbPCfVg6hfi5KjFKg%2FWbg9s2BB%2FHZ6Vl66R0daKUyf%2BafAmMAUXeK9OZXvek%2FAzHNxtYHIKGsAIwW4R5ah%2Bc1A7qU70EBhbSYdt7m83IHQ7CoLbHOowSbWH2z5VKDmPKNM92z0QWTLFVkJSC3w00Hl1Dsu6u4U0HTh%2F0MNsT18BI1tiaIeURA56N9c1e5Z6GzEM1gZUKd2apgg2Q77oN3zDQbdM7UPBsmN66VlrcdTkszS6NeITGBfdrhl1AbcOfEZzZg%2F6SYLmkyMvmXUgJ8eEO4LYym5awhrNRpxmugQyBfiRyqxhKS38lGJc%2B2xWF5D2P%2FStCMiXur4wjV6MdsiyOoIe1Wx%2BWHwpXN%2FfnrhB7gqkFcwTyIEPgRiIvzW1K7Jjz%2FPlZ2Bije4Ahn6j4OESoVainyZaMK6h2MkGOqUBRpuLTquEJAVjE4ArOQBARSNFrUeusc9qj73qCz77yTAhKQJtq9owKRi91NCGejGD7FMc0C4%2FY9%2Fwm6cdxeaiuyGoPZbBFwjDNU1kPq8UoT4ogWTAueGjw1QoXvNILnjSIukARKFhbngN88d6Rq6Z9Y2FgPSKuZNPSpOZ8slSPOXOGULoDrOaWsPxrJLJ659m9Kzoj3F%2BJR0XNddIJTy%2BWv24K8DK&X-Amz-Signature=7ddc7788db952d4af7201a16250ca0ac01daaf90a566afe7c4790d79135b853f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FXJ6Z3Q%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T234909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDvVDeWtCYKfXb38wlFOyCjKnu5BElHEomF7dB8NdzHqAiEA2u36UHb5j88nS9x04JXxpUpQ3ZIK9SZKnszUrgQBzyMqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKuD0FoPX5nK1ANZSircAx%2FG3sBRWfVYx7JgnUVPUqWkfNWREcCjauTzgU5XFv8D0Lj9sqk7ZmUOKqOleKwuw2%2BkaSEbgsg81smMH6BpaR2p%2Bek5Wl%2FYZ27RLBvlOMTIhWfK3HTn0XJ%2FulElMcSMiTe12SMs8B%2Fp8DIF00cFA%2BcC5tT4iAO7qwaxbQhnWVFM2zywSXz%2BXhErxTYW2UPIE%2FvTCDJbS1R69Ody6jJQvdRNeQ6GO%2FbPCfVg6hfi5KjFKg%2FWbg9s2BB%2FHZ6Vl66R0daKUyf%2BafAmMAUXeK9OZXvek%2FAzHNxtYHIKGsAIwW4R5ah%2Bc1A7qU70EBhbSYdt7m83IHQ7CoLbHOowSbWH2z5VKDmPKNM92z0QWTLFVkJSC3w00Hl1Dsu6u4U0HTh%2F0MNsT18BI1tiaIeURA56N9c1e5Z6GzEM1gZUKd2apgg2Q77oN3zDQbdM7UPBsmN66VlrcdTkszS6NeITGBfdrhl1AbcOfEZzZg%2F6SYLmkyMvmXUgJ8eEO4LYym5awhrNRpxmugQyBfiRyqxhKS38lGJc%2B2xWF5D2P%2FStCMiXur4wjV6MdsiyOoIe1Wx%2BWHwpXN%2FfnrhB7gqkFcwTyIEPgRiIvzW1K7Jjz%2FPlZ2Bije4Ahn6j4OESoVainyZaMK6h2MkGOqUBRpuLTquEJAVjE4ArOQBARSNFrUeusc9qj73qCz77yTAhKQJtq9owKRi91NCGejGD7FMc0C4%2FY9%2Fwm6cdxeaiuyGoPZbBFwjDNU1kPq8UoT4ogWTAueGjw1QoXvNILnjSIukARKFhbngN88d6Rq6Z9Y2FgPSKuZNPSpOZ8slSPOXOGULoDrOaWsPxrJLJ659m9Kzoj3F%2BJR0XNddIJTy%2BWv24K8DK&X-Amz-Signature=1506eea52ab40bc2f1ad0b537e482e401bbc8aedc7134835477cac7267288c7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

