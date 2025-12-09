---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R535TTQ3%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T055752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFrDRgm3ULFy5shMRxoEf5wO%2BLFA1GkDeZhAJFTKeOwoAiBtGy5MPQFfCoxWN%2B82WYlZWqPcMiUSlt%2BfTT%2FpiuVOPSqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiUykTg3UGYkvV6FnKtwDVnwcHBa%2BxDviSNwBDai5bTadHI3oUGbzg2RtLqXsouI1Givry639B3BG1dFVuSvyFbWaapxNU7HASXqVNhIIIjQwjOzC2OxKKbhc99LR4cHxfU9mFOsWJeCz1RgeFqyew0954%2FYnX%2FjppGBenThPrFbap9lJu99wtdM81FuYLrTpQuPSbc8esjE1p%2FpQ7hWxmjXMFZZ856kW06FXWMbrIls3eIiuwNKw6GZjTjUVKpykK%2Flp7vHSLd7V7miyvoUEcY222JukJV95ev0RJpnPiOYo7YuuH%2B0SbRYTnAjGs%2FHpcvqXPK%2F786WSIYA4cwDhR2lbmuc4P0oIA%2FYPC66iK12stZxTYnkCye7f6bU0UMspTZTRsdFmOih6ak%2FDWCwgyUPZInXW1YRt7HzPvepkXdDw5QMmG9P4kjP1j1ejaoqpFiGrq80qVWrxlh0bRza9x19NE5pLklbQp89cS%2Bg%2B6ibhb%2BVbAdSzXdh%2Bgh7b7pwaty%2FRBlOufv3Ud7MxDRIcjUaVmHdTp%2F4t1gGNKaJ1b6uFkhPy5KOdTcyc4hCVQ9uPF7WruCJsIkp4oV%2Fo3%2B58Xac1Rh3Gb%2BwoXqRloe8zGElvIY2sy7O0HYRj8%2BF5Ln0Fo%2F8ZDMNuf8G4un0wy%2BTeyQY6pgFfhfe1PvPuO5W8wxFHrJmaf%2BzGGZGVnzMlo7Ma5Y%2BBizaM9dvv%2BdVxoVIGAFwcUyJIfg2lypXYX7AKHOLWj0WVp65lCdpmaAm0O4zjq%2F%2BxJ9cuq%2F%2F9GRYRUDpyetlzHHmW8e0vCY8FHsnQ9bGj9GQ55%2FlNeZdJh6VbvuU1FMQFrGWZ84IGYjnM2kcq87p26stjue94hL8%2F3DPyw8wwslOm5TTBaOa6&X-Amz-Signature=0981170838fad8a93671362532c349d2a18b3ab6b9a3815494e99d5e88b5d7de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R535TTQ3%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T055752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFrDRgm3ULFy5shMRxoEf5wO%2BLFA1GkDeZhAJFTKeOwoAiBtGy5MPQFfCoxWN%2B82WYlZWqPcMiUSlt%2BfTT%2FpiuVOPSqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiUykTg3UGYkvV6FnKtwDVnwcHBa%2BxDviSNwBDai5bTadHI3oUGbzg2RtLqXsouI1Givry639B3BG1dFVuSvyFbWaapxNU7HASXqVNhIIIjQwjOzC2OxKKbhc99LR4cHxfU9mFOsWJeCz1RgeFqyew0954%2FYnX%2FjppGBenThPrFbap9lJu99wtdM81FuYLrTpQuPSbc8esjE1p%2FpQ7hWxmjXMFZZ856kW06FXWMbrIls3eIiuwNKw6GZjTjUVKpykK%2Flp7vHSLd7V7miyvoUEcY222JukJV95ev0RJpnPiOYo7YuuH%2B0SbRYTnAjGs%2FHpcvqXPK%2F786WSIYA4cwDhR2lbmuc4P0oIA%2FYPC66iK12stZxTYnkCye7f6bU0UMspTZTRsdFmOih6ak%2FDWCwgyUPZInXW1YRt7HzPvepkXdDw5QMmG9P4kjP1j1ejaoqpFiGrq80qVWrxlh0bRza9x19NE5pLklbQp89cS%2Bg%2B6ibhb%2BVbAdSzXdh%2Bgh7b7pwaty%2FRBlOufv3Ud7MxDRIcjUaVmHdTp%2F4t1gGNKaJ1b6uFkhPy5KOdTcyc4hCVQ9uPF7WruCJsIkp4oV%2Fo3%2B58Xac1Rh3Gb%2BwoXqRloe8zGElvIY2sy7O0HYRj8%2BF5Ln0Fo%2F8ZDMNuf8G4un0wy%2BTeyQY6pgFfhfe1PvPuO5W8wxFHrJmaf%2BzGGZGVnzMlo7Ma5Y%2BBizaM9dvv%2BdVxoVIGAFwcUyJIfg2lypXYX7AKHOLWj0WVp65lCdpmaAm0O4zjq%2F%2BxJ9cuq%2F%2F9GRYRUDpyetlzHHmW8e0vCY8FHsnQ9bGj9GQ55%2FlNeZdJh6VbvuU1FMQFrGWZ84IGYjnM2kcq87p26stjue94hL8%2F3DPyw8wwslOm5TTBaOa6&X-Amz-Signature=5f5e0a265492c4672df917add18c037c91fa16d7e6ef5722c2b331ea2cb41eb1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

