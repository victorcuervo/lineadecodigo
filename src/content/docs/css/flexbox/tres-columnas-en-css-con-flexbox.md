---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNG2PXUK%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T212015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxCGDULKEtYR3VBTH0f7PVqexQNQr8SVGjpQ3L8h5rKQIgKakLQPI0USLqAmkSucsvi6U8mjNZHOGyjhPqHEyhfUoqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHlkDCGhF2fhpQRMByrcAzY5R57C5mmoLtgxc2Dc7W3KqVRFZPDCJW2ItqI8iz4Cq6uPtWHPJFFMET6JPMAyoG%2Fsi0MXaJxv%2FgTSs0do3obLE1dJrHdNhY0OkMJuA2b7q79HtEelwjpHe3K3XMKx69zSn0T8NmfXI75mQqP5SBynL1U8JHCVLeLqEAABe9gh7BLVJklYkCPY4TTgvLHVmtqYVLLxpCRk4xrleRsqMxTUdkz4WQBM9kZeehYwzYRCur5pUgvorhbgicE%2F8s3%2F6obpWinvCMtxZt%2BeL9lOPWeE%2FC%2B4yY8VJoxft9WGv6T7kmospXjd9l9WcgLHJQHAuNWAcdU2F%2FMBVB2CVfdIyI3oytjESGN4pDYb4gBmNDBXXApw%2BEZp%2FXzZFj4RowVoxrPzZ9syvgupLtLwc%2F19Dgb2sHnZgdrXMKh4Ee4ZbCOGA266Hs9hCB6At4jnBixBJo1BFviiifb8VFMOa657vH8Or5DfOYYQn1Ftmu3Ydwvs8lwGTDoW9gydbPiF89x1zwBtzJYR9L9J7yJrcHf%2FfX7V6IsWbXyLD6E8%2F3Vzs9LnqXGmr%2FAFydkTjG6OZ7wZmu88UN0Zy%2BDiphVJqdP%2BS4uuIJPFI4lvSJeCFq%2BwsOD2k5yf7xjz9NZ59EpEMPHG18kGOqUBhXXIAvALVXrSBeAGyr8QaX2ybbaS%2FTs0HcWaBvN39YK%2BbgzT7KuWLGAh9FmjOxk9z6rokZFlBaDVtb%2FFTiMs9bm7urxNsW%2FfJNbklld%2B%2FgVangtBOmLiBg1Zf5TcmsyZNMWF6bybixg%2FJTcAgURuZ3gsiVJVM6YAIZ8Fj3p0K%2B63MdQKNOvFqX9yv4uNwOuGpb%2F%2BOE7t58A9iYDUllysxHsSetoo&X-Amz-Signature=0cb732431cfbf08986c2e7792a8bb64f0caf2170522e36e786cc3d0ebf32778e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNG2PXUK%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T212015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxCGDULKEtYR3VBTH0f7PVqexQNQr8SVGjpQ3L8h5rKQIgKakLQPI0USLqAmkSucsvi6U8mjNZHOGyjhPqHEyhfUoqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHlkDCGhF2fhpQRMByrcAzY5R57C5mmoLtgxc2Dc7W3KqVRFZPDCJW2ItqI8iz4Cq6uPtWHPJFFMET6JPMAyoG%2Fsi0MXaJxv%2FgTSs0do3obLE1dJrHdNhY0OkMJuA2b7q79HtEelwjpHe3K3XMKx69zSn0T8NmfXI75mQqP5SBynL1U8JHCVLeLqEAABe9gh7BLVJklYkCPY4TTgvLHVmtqYVLLxpCRk4xrleRsqMxTUdkz4WQBM9kZeehYwzYRCur5pUgvorhbgicE%2F8s3%2F6obpWinvCMtxZt%2BeL9lOPWeE%2FC%2B4yY8VJoxft9WGv6T7kmospXjd9l9WcgLHJQHAuNWAcdU2F%2FMBVB2CVfdIyI3oytjESGN4pDYb4gBmNDBXXApw%2BEZp%2FXzZFj4RowVoxrPzZ9syvgupLtLwc%2F19Dgb2sHnZgdrXMKh4Ee4ZbCOGA266Hs9hCB6At4jnBixBJo1BFviiifb8VFMOa657vH8Or5DfOYYQn1Ftmu3Ydwvs8lwGTDoW9gydbPiF89x1zwBtzJYR9L9J7yJrcHf%2FfX7V6IsWbXyLD6E8%2F3Vzs9LnqXGmr%2FAFydkTjG6OZ7wZmu88UN0Zy%2BDiphVJqdP%2BS4uuIJPFI4lvSJeCFq%2BwsOD2k5yf7xjz9NZ59EpEMPHG18kGOqUBhXXIAvALVXrSBeAGyr8QaX2ybbaS%2FTs0HcWaBvN39YK%2BbgzT7KuWLGAh9FmjOxk9z6rokZFlBaDVtb%2FFTiMs9bm7urxNsW%2FfJNbklld%2B%2FgVangtBOmLiBg1Zf5TcmsyZNMWF6bybixg%2FJTcAgURuZ3gsiVJVM6YAIZ8Fj3p0K%2B63MdQKNOvFqX9yv4uNwOuGpb%2F%2BOE7t58A9iYDUllysxHsSetoo&X-Amz-Signature=2f80050831c6d50770eeed46b8dc00486f8597fbbae8e0a8ddaf76178381b224&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

