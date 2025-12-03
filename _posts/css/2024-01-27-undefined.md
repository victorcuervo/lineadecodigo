---
layout: post
title: Tres Columnas en CSS con Flexbox
excerpt: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
categories: CSS
tags: [css flexbox]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663C4PMVRH%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T085708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIQChRDGySolB4MNCPMf%2BeWsc5yn0WIdixxfcvJ7KxskzFgIgIZQV%2FoH6G1ZtsAKlLHC%2BLYsabiphINsvCHTokW6jkQQq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDBZSoxqqm4b8BmnSoSrcAxkcVCQO4%2B1gm7P%2FYhXFM1rE9o72EaHw5qpp5%2BpzYC2RDSlfRgSyz945NcW54eZwQyHltxXMEGXY0vpaOBtKiKKdTn9pZdOFzuBdcK2g%2FvkrvZF0mbgqLdR0U8mqmMFHpDZaIcPqqS8cqBgTMa4FkHyqVNBzM59X5B%2Fgx%2B%2F2gOzM8HIA9qlzWQk3uCwTo75KgUvXzs9HCDqYosmEPoRY%2F4FADC4aP3PF39FMnr2NxknpK5Utam2FnMFtuDLC7KPxnUtqx5i7dxvIhgh67qln7zAY8S2tfsb6QVbA9qEAhmbRuwAcpBHnuhqOs871aVNvoqgEiQCd8TqBc8QV9CHE3f%2BRyPR3xj1qC%2FO73qkf9CgULuazE9JnYlT8sqRhEzkGjjcZo6CR4cF%2BLkyW8LrmJ0m%2Ft07Pdy8DX496ZwrYgwbuiQv%2FdlwGQicBV3lGNQTx7m19eBUr3RoKQE0Ox1Ai6mZ1N%2BgGzhLMcCqLlY5WDQi8AQwXm%2B%2Fz77nILojOxfvAfiTUhEM0EF17GjwUGYC5ueUCc1rvPrEazX%2F%2BipmhMn2eu702mVv2ptgEIsKoYEdBZrYJGmNLfma24XaOoYxEIHYkNpG1bWm74N48wXiyybvP2EDPWf6%2Bxzyf8sdjMPnVv8kGOqUB8Kb%2F5CdD90MHrFuv6db4vl%2F2w1z0F2OZGlLJgyLyfyelzR74TRQ9GXJ8NwRYmiuCTjuxUKGAl%2BXMIh%2BkpV2hoDPSZJyeah01dA3RP9%2F%2FXI5VJQTlhNuR%2BfkaCRIJqsJnh2fPAjKtcKlQiWppdSPJeFlJR%2F5paLdoWWzJ5HM2WqFCj97sDfj7D8C7dBpMfWfOCNim%2BH1MMqcJVZACaA%2F%2B4cnxoE76&X-Amz-Signature=eddc98c38e6a6d16500a0a0da8bf0379fe4853a4c7848e75d46ff9f85a56a6eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663C4PMVRH%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T085708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIQChRDGySolB4MNCPMf%2BeWsc5yn0WIdixxfcvJ7KxskzFgIgIZQV%2FoH6G1ZtsAKlLHC%2BLYsabiphINsvCHTokW6jkQQq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDBZSoxqqm4b8BmnSoSrcAxkcVCQO4%2B1gm7P%2FYhXFM1rE9o72EaHw5qpp5%2BpzYC2RDSlfRgSyz945NcW54eZwQyHltxXMEGXY0vpaOBtKiKKdTn9pZdOFzuBdcK2g%2FvkrvZF0mbgqLdR0U8mqmMFHpDZaIcPqqS8cqBgTMa4FkHyqVNBzM59X5B%2Fgx%2B%2F2gOzM8HIA9qlzWQk3uCwTo75KgUvXzs9HCDqYosmEPoRY%2F4FADC4aP3PF39FMnr2NxknpK5Utam2FnMFtuDLC7KPxnUtqx5i7dxvIhgh67qln7zAY8S2tfsb6QVbA9qEAhmbRuwAcpBHnuhqOs871aVNvoqgEiQCd8TqBc8QV9CHE3f%2BRyPR3xj1qC%2FO73qkf9CgULuazE9JnYlT8sqRhEzkGjjcZo6CR4cF%2BLkyW8LrmJ0m%2Ft07Pdy8DX496ZwrYgwbuiQv%2FdlwGQicBV3lGNQTx7m19eBUr3RoKQE0Ox1Ai6mZ1N%2BgGzhLMcCqLlY5WDQi8AQwXm%2B%2Fz77nILojOxfvAfiTUhEM0EF17GjwUGYC5ueUCc1rvPrEazX%2F%2BipmhMn2eu702mVv2ptgEIsKoYEdBZrYJGmNLfma24XaOoYxEIHYkNpG1bWm74N48wXiyybvP2EDPWf6%2Bxzyf8sdjMPnVv8kGOqUB8Kb%2F5CdD90MHrFuv6db4vl%2F2w1z0F2OZGlLJgyLyfyelzR74TRQ9GXJ8NwRYmiuCTjuxUKGAl%2BXMIh%2BkpV2hoDPSZJyeah01dA3RP9%2F%2FXI5VJQTlhNuR%2BfkaCRIJqsJnh2fPAjKtcKlQiWppdSPJeFlJR%2F5paLdoWWzJ5HM2WqFCj97sDfj7D8C7dBpMfWfOCNim%2BH1MMqcJVZACaA%2F%2B4cnxoE76&X-Amz-Signature=4896c183680e374506dadf07991175057a395bf0fd1b38b4f9e4f0feaf1b042e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

