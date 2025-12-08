---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DARBCYF%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T191057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgusrkToztvBdzQMVwKxhBqjr%2Fcy0InTqxK%2BKt38ZDHQIgRWen%2FJa7U8LlMjStJNNZ7WYvz0PTuUZPfXCw6vg0MmkqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFweW3ez5BFy2Y%2BxcircA3bk2NCVE%2FgXg9mTEjD%2B%2BvW5qQChyFXX0rnq39EEj28GhcCBXuJUpDNdnr3yGolWf%2F9SMbaU46%2BSkjoyFACMLXRBRvjy6QCXeI2RU4fJaBUcbDHJa7KODNwJW0AvDsY4vKcDA9wOu2g890XuDl3l%2FcgrOOWPwDzFseceZnP2WS1xDnhZpUo%2F6y9Q2hE1yU6YZUOdtFuTJUviC0K3fwYyYbKh1KSrnPE0x4tx7y65p90RHT1e2gvz9IpNYLp9UeR3klqMcVIa%2BIHkyNDRKyinemQ4i3KfKzafxY2Eh7vfNdhmZ7BB38kCzzj3be7rEuBB4OiCtXMMmSBJF8P7%2Fb2Rzk3DamVndbwr4VUIXSFxID%2BG7K9ijd5ynhV%2Bk7xXgDcGMUOnSbI74MqMngfGrabOAS3TL4HvtRNK1TvK1BQWIs571yafp9zQ9zTL0bzTUZ4oLV4dmc%2BiqnTjZa3kXY8YP1KGT1M3n063fNe2lg34ZoWoT%2BLq2gqbuiGpPkENXGnpl60MqddWfOxBrjw0cjXDtEP1REW8PUvIKRzQEDjnJiStjn5nu1biOqpUUZOiFW0QGPavoNs4UC0HUgB7E23JO5Doemakmq72QrOXOxfO35iWbfNtnvHDPRNOZB3cMIe03MkGOqUB8JpLWVPJWa5tTYSm1KniWbMfiyVDovpz5TS9XxoNrMY2luchf03cYBhnNxcJESyyKPuxM3fn796GBR906DkTT6606dR64WGYWQ7M0bea5z4qnXDboSYSA9lnW3s5k%2Ff8UlvQMCguE0RvK1UmAsnsXf2Hpk%2FqMzKqWF5pTjoDe5x1wU7uwPh2%2FlgJR4ZYvwvZ3ZBBOTt8SKEyAdoDZFaLfaHgMwWs&X-Amz-Signature=acaf86956acfc4c5115e7387c3eda5e12dc78018ca69847eecf62b82bfa8a935&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DARBCYF%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T191057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgusrkToztvBdzQMVwKxhBqjr%2Fcy0InTqxK%2BKt38ZDHQIgRWen%2FJa7U8LlMjStJNNZ7WYvz0PTuUZPfXCw6vg0MmkqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFweW3ez5BFy2Y%2BxcircA3bk2NCVE%2FgXg9mTEjD%2B%2BvW5qQChyFXX0rnq39EEj28GhcCBXuJUpDNdnr3yGolWf%2F9SMbaU46%2BSkjoyFACMLXRBRvjy6QCXeI2RU4fJaBUcbDHJa7KODNwJW0AvDsY4vKcDA9wOu2g890XuDl3l%2FcgrOOWPwDzFseceZnP2WS1xDnhZpUo%2F6y9Q2hE1yU6YZUOdtFuTJUviC0K3fwYyYbKh1KSrnPE0x4tx7y65p90RHT1e2gvz9IpNYLp9UeR3klqMcVIa%2BIHkyNDRKyinemQ4i3KfKzafxY2Eh7vfNdhmZ7BB38kCzzj3be7rEuBB4OiCtXMMmSBJF8P7%2Fb2Rzk3DamVndbwr4VUIXSFxID%2BG7K9ijd5ynhV%2Bk7xXgDcGMUOnSbI74MqMngfGrabOAS3TL4HvtRNK1TvK1BQWIs571yafp9zQ9zTL0bzTUZ4oLV4dmc%2BiqnTjZa3kXY8YP1KGT1M3n063fNe2lg34ZoWoT%2BLq2gqbuiGpPkENXGnpl60MqddWfOxBrjw0cjXDtEP1REW8PUvIKRzQEDjnJiStjn5nu1biOqpUUZOiFW0QGPavoNs4UC0HUgB7E23JO5Doemakmq72QrOXOxfO35iWbfNtnvHDPRNOZB3cMIe03MkGOqUB8JpLWVPJWa5tTYSm1KniWbMfiyVDovpz5TS9XxoNrMY2luchf03cYBhnNxcJESyyKPuxM3fn796GBR906DkTT6606dR64WGYWQ7M0bea5z4qnXDboSYSA9lnW3s5k%2Ff8UlvQMCguE0RvK1UmAsnsXf2Hpk%2FqMzKqWF5pTjoDe5x1wU7uwPh2%2FlgJR4ZYvwvZ3ZBBOTt8SKEyAdoDZFaLfaHgMwWs&X-Amz-Signature=e26592b43b32046178ee8de4fa44d741e51e86b1ef59e3a245fadfcab38d5c62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

