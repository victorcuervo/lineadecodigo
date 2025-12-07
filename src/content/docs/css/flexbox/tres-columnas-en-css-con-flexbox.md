---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EDBJDHR%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T192113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDo6jZRtTS6%2F90Xe9%2Betsp9pEH9ZMnlzo7yRz0IAffYyAIhAPd3MYdnDT1HPxWcgwZ26MmCf8t6bNmGT8L70SgLPnRcKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxFRuNbtgEI1U32piwq3ANmFdJdAN3EhMHmluE5O%2Bv%2Fi0nacRrziimnyS68fmLH4M4DFm%2FhN5qHYebS8MvkFMxAWfyXc4LDa8cZdKUeM7xVQCbVgha5kOiC%2BVCuxWrAc3Eq5F4nnm50U0umPmktlE7GAeBoGGzCRS6yQjVPG6%2Ba85JmnpZnEozfje4vGZZ8BURxM9tJIlPB445D7YY3SGuKcCNFrya9WXaipRomF2GUoG9bj8xa8vfp2iwS5%2FvVKk47fDrBbcp16glzlQJFKVJ3LbS3BP%2FJT1ImIvjbDI27djV25lNFGhTjgkQMR8sFZsnbdmnLiXewcbniaqwPup82MOBrTjDVU6ipdoDpP8OCz2l2Ue7bwteUrATesNEBEr%2BLisPquzFfXWUj4EOYZWj3Vu1jyRs6IQGppxHa2uogecNm5FvWEi3bohGugTjv9FoIPO5HayCJKSmHqmK8buwpjQL0kMxmoNA1XPa8czFBJ7HzM1l3qIKEgOlrrNz5obOFXTM5tBz6cFiDnFSx0v%2Brg9dny6YIi87hviUhvDbpm9sKWEz1X%2F775x2efhFza%2BXDO3sfXQG0tdLPGbW3u%2F3HzlIVAkzJ3jjgQpg6Sq3b1SbO07rwJOEifGX0GSpn2v0zJo6CMT9f17J78DDMtdbJBjqkARuvlmkeReXzOhklYj9YXwnZ4nejGNm8vqrYs2eQVSV0H5HE2YZkAtGomuddjErBUGSgN8mBusCnJO12G3DPTFxSHapzlIS28BbpXQLfW5%2BUmxqRofxiqeGp%2FoE2jsX%2FeHp1vpnxlNnEn4HF6Nz3XDzEkUcM7MtsAUw%2F2%2FogvgGPn0wG%2FRY%2B2qsq4cRmeSa0KhIFQ2Ck4vb%2BZLMpo%2BLt2ZB%2F%2B8Iw&X-Amz-Signature=040f0f55fc7ca61c8b8ccc362851ff7ff372723d25029bbdbb30eeebefc32ae7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EDBJDHR%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T192113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDo6jZRtTS6%2F90Xe9%2Betsp9pEH9ZMnlzo7yRz0IAffYyAIhAPd3MYdnDT1HPxWcgwZ26MmCf8t6bNmGT8L70SgLPnRcKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxFRuNbtgEI1U32piwq3ANmFdJdAN3EhMHmluE5O%2Bv%2Fi0nacRrziimnyS68fmLH4M4DFm%2FhN5qHYebS8MvkFMxAWfyXc4LDa8cZdKUeM7xVQCbVgha5kOiC%2BVCuxWrAc3Eq5F4nnm50U0umPmktlE7GAeBoGGzCRS6yQjVPG6%2Ba85JmnpZnEozfje4vGZZ8BURxM9tJIlPB445D7YY3SGuKcCNFrya9WXaipRomF2GUoG9bj8xa8vfp2iwS5%2FvVKk47fDrBbcp16glzlQJFKVJ3LbS3BP%2FJT1ImIvjbDI27djV25lNFGhTjgkQMR8sFZsnbdmnLiXewcbniaqwPup82MOBrTjDVU6ipdoDpP8OCz2l2Ue7bwteUrATesNEBEr%2BLisPquzFfXWUj4EOYZWj3Vu1jyRs6IQGppxHa2uogecNm5FvWEi3bohGugTjv9FoIPO5HayCJKSmHqmK8buwpjQL0kMxmoNA1XPa8czFBJ7HzM1l3qIKEgOlrrNz5obOFXTM5tBz6cFiDnFSx0v%2Brg9dny6YIi87hviUhvDbpm9sKWEz1X%2F775x2efhFza%2BXDO3sfXQG0tdLPGbW3u%2F3HzlIVAkzJ3jjgQpg6Sq3b1SbO07rwJOEifGX0GSpn2v0zJo6CMT9f17J78DDMtdbJBjqkARuvlmkeReXzOhklYj9YXwnZ4nejGNm8vqrYs2eQVSV0H5HE2YZkAtGomuddjErBUGSgN8mBusCnJO12G3DPTFxSHapzlIS28BbpXQLfW5%2BUmxqRofxiqeGp%2FoE2jsX%2FeHp1vpnxlNnEn4HF6Nz3XDzEkUcM7MtsAUw%2F2%2FogvgGPn0wG%2FRY%2B2qsq4cRmeSa0KhIFQ2Ck4vb%2BZLMpo%2BLt2ZB%2F%2B8Iw&X-Amz-Signature=f7a3049b3a7f6be8da9663b7564c10629d672367858159d438ddf35d96f56354&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

