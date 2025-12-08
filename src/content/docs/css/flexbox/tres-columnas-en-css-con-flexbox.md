---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGSS4UNR%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T202444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHaxKuGC9Zg1E9fgvFFTYViASFd7ctWYgDurNTZZdR%2BcAiAeDKvmTKn6WMjPpqxbodAkrNloJlqtkD%2FabZ2gTmt6GSqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLdAy26GgqYOIg0%2BMKtwDj4afib%2BNjEm7DkJBotczZoqA80rmnuSYpbslDTiaH%2BPkt8uQylM66v2%2FPL0wJoVE%2F67Pmqa%2FTcvvdvR%2F4oKa9SRqQGoJId%2BhorEP8MV%2BtyfX6Wsk%2Fpo7iUBrh%2BUnmLfwIdRa18PlzxIMc6TAY9FIYKLXK7PSrTGOxhncqwabC8Hne2CnxKno6k0HwEY%2BWdNfbHYCBD7XJaOwLu09GG8OpV6GQzeRes8ZCDyyafzH%2BYtPFS4MHobwXTSIWCB86A1U9NQfnB%2BRMSji3jFrnDmqFB2mREeGzotqxevWvTOe%2Fp%2BLSej9%2Fh8FZk95vkUFu5EpomqVcMVC%2Bsx7uFRtgoRAMFEZPqImsP%2BOI1HYSo%2BdeV7HgOMCIdtaPy1SAdJeQ57P3vceLzj9e43BdDPsSsJGPhyMtszeeyAff2%2BV%2B%2FO03C0uhw5dqWQ7d9O%2BmMKW1Lq9sW7CWx5QSqYOSFKOy%2BJ3iE36Rij6Xf3OyGlZail4tc3CJf3YcAJ9j%2B%2FQ%2FK0Vr0xT6yNjJXVUx00PUagA%2Bw5qig7MHh1a2FIA8sHYtL28%2FuHqK3o0f1njGBCQm8JAYNu%2BzTYII6FdZAU0%2Fv9MGMFmZzlZrtaKPD4MyPAzUcZxdFkZBBzVgV0UeHUcytgw6tzcyQY6pgG6iTrkERH8ZJBiASHrix1Jzwjqz47vQmoywYTl5%2BwUR%2FPOsub8Pn4EDiL7yr%2FLZrWWYEpx7g8Is2%2Fefz315Sam8eLatGiNiUs4L%2BWYeFfnNN%2BFIO81d08eX2b57%2F37wfy1JsksH4rj0Wo4ASiNVp%2Fe4A2S5pol9cJysNfeeIv1QsWGPsPfOdiT7kNjaFtBKCJBTNWcIpIDb8k7Td433QwCfOakJGYs&X-Amz-Signature=95a01e12d20b500f80e0b4bb145889cf3b74b626f53d9aa5033c012818b03f10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGSS4UNR%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T202444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHaxKuGC9Zg1E9fgvFFTYViASFd7ctWYgDurNTZZdR%2BcAiAeDKvmTKn6WMjPpqxbodAkrNloJlqtkD%2FabZ2gTmt6GSqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLdAy26GgqYOIg0%2BMKtwDj4afib%2BNjEm7DkJBotczZoqA80rmnuSYpbslDTiaH%2BPkt8uQylM66v2%2FPL0wJoVE%2F67Pmqa%2FTcvvdvR%2F4oKa9SRqQGoJId%2BhorEP8MV%2BtyfX6Wsk%2Fpo7iUBrh%2BUnmLfwIdRa18PlzxIMc6TAY9FIYKLXK7PSrTGOxhncqwabC8Hne2CnxKno6k0HwEY%2BWdNfbHYCBD7XJaOwLu09GG8OpV6GQzeRes8ZCDyyafzH%2BYtPFS4MHobwXTSIWCB86A1U9NQfnB%2BRMSji3jFrnDmqFB2mREeGzotqxevWvTOe%2Fp%2BLSej9%2Fh8FZk95vkUFu5EpomqVcMVC%2Bsx7uFRtgoRAMFEZPqImsP%2BOI1HYSo%2BdeV7HgOMCIdtaPy1SAdJeQ57P3vceLzj9e43BdDPsSsJGPhyMtszeeyAff2%2BV%2B%2FO03C0uhw5dqWQ7d9O%2BmMKW1Lq9sW7CWx5QSqYOSFKOy%2BJ3iE36Rij6Xf3OyGlZail4tc3CJf3YcAJ9j%2B%2FQ%2FK0Vr0xT6yNjJXVUx00PUagA%2Bw5qig7MHh1a2FIA8sHYtL28%2FuHqK3o0f1njGBCQm8JAYNu%2BzTYII6FdZAU0%2Fv9MGMFmZzlZrtaKPD4MyPAzUcZxdFkZBBzVgV0UeHUcytgw6tzcyQY6pgG6iTrkERH8ZJBiASHrix1Jzwjqz47vQmoywYTl5%2BwUR%2FPOsub8Pn4EDiL7yr%2FLZrWWYEpx7g8Is2%2Fefz315Sam8eLatGiNiUs4L%2BWYeFfnNN%2BFIO81d08eX2b57%2F37wfy1JsksH4rj0Wo4ASiNVp%2Fe4A2S5pol9cJysNfeeIv1QsWGPsPfOdiT7kNjaFtBKCJBTNWcIpIDb8k7Td433QwCfOakJGYs&X-Amz-Signature=e078004059ad82c83823dfa0fc955052243413a92b92b65e22bab480598b154c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

