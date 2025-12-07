---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUFHVFO5%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T044250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFfUwNHD2SeqhwapCL%2BOxAe%2BVcIfpIRHtLuXlDwjyhsYAiEA2xrTYQyMeMT%2Fx8aslKDibNtepMmoxv6RobSwC9lOFdgqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEfc4kwwYl%2FHjiWhlircAxEvH2PvccjSn%2FkhEe%2BrOjOAc2mnV3sPHvoF0Vai8BHygawNXFmeg7feaRSNlcKo7%2Fm2iuYaVtvU7YFlrt6N3f4eL84YGZuPsFpINGUTh75bofqLIkocJLMnniF83rJjI3tmseiKw7I2p0PeDzi%2F%2BJKuswIyAgRUALZN2HgVpCwl7Nv%2FOxY9MbxFSe8qWiaMeIT5Z0It0Jy0VrhC2W7YRi5Gk4d87JJuXU4lUhJfktk2pSFFLprvcLN3TdfCOIFOXuz4Cb3GVxT%2FSsbo1yD0%2B9qgfjEk3ziGqLLV5elYDKr05NxoPLYkWRkIZHEZh2dvVPBZ4sPDopeLVtAHvj9mu4%2FDTk%2FyJ47upSirO8D4GG1VWv%2FI1SqcQ8CCFlVnV1lwTySO5aAki2xeRgbl50Sxzx%2B519gQy6%2BGJKUJymX%2FptQHzPvsTJDY5U6%2Fwqr732UdQOyk%2B%2Ff60AiVvdw3ZTmWjeHea7eCafndOzCMcHKZTVebVu8bXKAFHglpOn6QgluieVEh%2Bv45ifLpbf%2BL0OGzhGD61Uom%2BEDIiVgUCK0H0W34Nsz5Y9iQwiFtfLIPKs5EnOC4YQlSw7RgFBIquUc%2BNJzGioztxl1DlybgCH4E5lm70Prx4YMGkUT%2BPGmtMLD%2B0skGOqUBM2dpI86FIBhzs3l8NR%2FopgHyVEoum16Bn24c9lV96fquKndB3Ry3BiRiCl8Gd3mX%2BGfMpgovp5kh%2BLGpwtpHu5LK0I1YExDqfj7n9Qwn7JDboAxkmXGvqPPlu06Cg91cSSOYoyWUgNAakpmvevClm%2BijMEta564hXy061VxwescOXerIik6h2rB3ZqtyUsC%2FCmWiJ5qFjaA53B03GB85OcHiG%2F0c&X-Amz-Signature=4d1be4f3a5c399f91b61d2a7a7d13a25dd30eb534b8adb945e0d5d48b1a0aa08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUFHVFO5%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T044250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFfUwNHD2SeqhwapCL%2BOxAe%2BVcIfpIRHtLuXlDwjyhsYAiEA2xrTYQyMeMT%2Fx8aslKDibNtepMmoxv6RobSwC9lOFdgqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEfc4kwwYl%2FHjiWhlircAxEvH2PvccjSn%2FkhEe%2BrOjOAc2mnV3sPHvoF0Vai8BHygawNXFmeg7feaRSNlcKo7%2Fm2iuYaVtvU7YFlrt6N3f4eL84YGZuPsFpINGUTh75bofqLIkocJLMnniF83rJjI3tmseiKw7I2p0PeDzi%2F%2BJKuswIyAgRUALZN2HgVpCwl7Nv%2FOxY9MbxFSe8qWiaMeIT5Z0It0Jy0VrhC2W7YRi5Gk4d87JJuXU4lUhJfktk2pSFFLprvcLN3TdfCOIFOXuz4Cb3GVxT%2FSsbo1yD0%2B9qgfjEk3ziGqLLV5elYDKr05NxoPLYkWRkIZHEZh2dvVPBZ4sPDopeLVtAHvj9mu4%2FDTk%2FyJ47upSirO8D4GG1VWv%2FI1SqcQ8CCFlVnV1lwTySO5aAki2xeRgbl50Sxzx%2B519gQy6%2BGJKUJymX%2FptQHzPvsTJDY5U6%2Fwqr732UdQOyk%2B%2Ff60AiVvdw3ZTmWjeHea7eCafndOzCMcHKZTVebVu8bXKAFHglpOn6QgluieVEh%2Bv45ifLpbf%2BL0OGzhGD61Uom%2BEDIiVgUCK0H0W34Nsz5Y9iQwiFtfLIPKs5EnOC4YQlSw7RgFBIquUc%2BNJzGioztxl1DlybgCH4E5lm70Prx4YMGkUT%2BPGmtMLD%2B0skGOqUBM2dpI86FIBhzs3l8NR%2FopgHyVEoum16Bn24c9lV96fquKndB3Ry3BiRiCl8Gd3mX%2BGfMpgovp5kh%2BLGpwtpHu5LK0I1YExDqfj7n9Qwn7JDboAxkmXGvqPPlu06Cg91cSSOYoyWUgNAakpmvevClm%2BijMEta564hXy061VxwescOXerIik6h2rB3ZqtyUsC%2FCmWiJ5qFjaA53B03GB85OcHiG%2F0c&X-Amz-Signature=de39efe95acf126b63897d65f7b6f3d32929053882d0f8c9b1626cc71b76a9c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

