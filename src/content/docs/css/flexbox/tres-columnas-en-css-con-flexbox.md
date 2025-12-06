---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VROXSBFX%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T223432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjz%2BLM7g0pzwiZkEyiF2qQtxPSRsDOqu5QYDOXKfrcswIgLbSFNbs1%2BsGkRgRG9yggsze0TPDeDa1YJJFDIrYFxXkq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDO6X8DOpwJZzTkcHuSrcA1KANk7C8WGA3rD%2BwrLt13ARC%2FF8aVvgHuAqmpFgWfPGfyOPNnbBdFrmduTD3y2t4dAGyW8PGLXERgKb6itRnmSnz3Gxtl2Bbi7VpFLlFH2VACzdlUtTJuuwRybXXUFi6%2F%2BM0MDrA%2F5DbTWZpxCoC6i8Cl1l72hlxujv9L%2BQxXye3gK8qWx%2FWQeyPcYAzuzq01wezCnMK5R6eyha8ftc%2FUtR9514m5zpOJKlPNpVA6laqk3ow27WCRT7%2FZpN4OdE27dwaBaklRROa4d6SLR6GfkdSTTp4xIO0qe4cJV4iJzqmMNt74HNLwsOnaPIaKlxZe7pd%2FS%2FopStOmCACSpmqAgOz5eUxmLbIl2T1ViJ1E84kfjewB%2F%2B957bC%2BGDdluMs9eM6J%2BjLyEq0t6iUGdKGsZadmYN%2BRSXdwlQU79ZhdV%2B2AlB4kW%2BDqIL1VL1Dw%2BCCNWNY0fcC49qNhc%2F1M2T%2Fe7EyTPQr7lNIIZdKy5OLDDPdExABxyQbG%2FQuP%2FKxqMft2nbDBgugfuqkCfUyirIpxlEqxFIoOxkRtBqg8IKr9mCgpEjBU9K%2Bs3h2FgjRX50vSq%2BUyUqsZXNJ8wqBV6gonXKK0kQqgoGAUWPFhA6MMUlSD1NDY4YK0fahtSrMLbT0skGOqUB1t0JgBbm3RGmKL3UNvcFVXGlPLYEkaI%2F7VprLNlELsusCsYKdbzI2Zu7KgpJJwEx3QmR9%2Fui3JC%2FwBsqfIa1C%2FKNTUEhmFOOUPzhpKh1coIixU53Sv%2BSLqG4u8W6DHBMUqd90fsWwh0EsUJWE3wd0RaJrfsxuZd1FgoKoEDp%2BaQ3d2AylNMMECgV0E0vYtZqBLiEVsTTCR5%2BiH4StYD%2FNQfH%2FBrF&X-Amz-Signature=d5aa76c4acd62a4a1e6123955b0a62e9ca50547a7afb9b42d27e84eacc897eca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VROXSBFX%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T223432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjz%2BLM7g0pzwiZkEyiF2qQtxPSRsDOqu5QYDOXKfrcswIgLbSFNbs1%2BsGkRgRG9yggsze0TPDeDa1YJJFDIrYFxXkq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDO6X8DOpwJZzTkcHuSrcA1KANk7C8WGA3rD%2BwrLt13ARC%2FF8aVvgHuAqmpFgWfPGfyOPNnbBdFrmduTD3y2t4dAGyW8PGLXERgKb6itRnmSnz3Gxtl2Bbi7VpFLlFH2VACzdlUtTJuuwRybXXUFi6%2F%2BM0MDrA%2F5DbTWZpxCoC6i8Cl1l72hlxujv9L%2BQxXye3gK8qWx%2FWQeyPcYAzuzq01wezCnMK5R6eyha8ftc%2FUtR9514m5zpOJKlPNpVA6laqk3ow27WCRT7%2FZpN4OdE27dwaBaklRROa4d6SLR6GfkdSTTp4xIO0qe4cJV4iJzqmMNt74HNLwsOnaPIaKlxZe7pd%2FS%2FopStOmCACSpmqAgOz5eUxmLbIl2T1ViJ1E84kfjewB%2F%2B957bC%2BGDdluMs9eM6J%2BjLyEq0t6iUGdKGsZadmYN%2BRSXdwlQU79ZhdV%2B2AlB4kW%2BDqIL1VL1Dw%2BCCNWNY0fcC49qNhc%2F1M2T%2Fe7EyTPQr7lNIIZdKy5OLDDPdExABxyQbG%2FQuP%2FKxqMft2nbDBgugfuqkCfUyirIpxlEqxFIoOxkRtBqg8IKr9mCgpEjBU9K%2Bs3h2FgjRX50vSq%2BUyUqsZXNJ8wqBV6gonXKK0kQqgoGAUWPFhA6MMUlSD1NDY4YK0fahtSrMLbT0skGOqUB1t0JgBbm3RGmKL3UNvcFVXGlPLYEkaI%2F7VprLNlELsusCsYKdbzI2Zu7KgpJJwEx3QmR9%2Fui3JC%2FwBsqfIa1C%2FKNTUEhmFOOUPzhpKh1coIixU53Sv%2BSLqG4u8W6DHBMUqd90fsWwh0EsUJWE3wd0RaJrfsxuZd1FgoKoEDp%2BaQ3d2AylNMMECgV0E0vYtZqBLiEVsTTCR5%2BiH4StYD%2FNQfH%2FBrF&X-Amz-Signature=75d6eb841ee4f12bd4b32dbfbc1aeae8fd66a110c0dce5453c68f63cc1325058&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

