---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHLJO6MX%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T171928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIELgCgc%2FqRMBh55pExXFUWrJgksBLnXczvq6xWaGZsHRAiBpREj9%2F%2B7jBeG%2B5NY7%2FI6JHelWo1QRxo6SOLakJzpc6yqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbvAEBn7cB5cMh958KtwDqiL3rQJmAnF1WbH3bGv8yIxIetoatjq5A5VExF8LSus9seKLwlSmAX42u6%2F4oXkBrPD6C0BI5VdNjOWuHYxGrkmUXL%2FBfGhUzzqrRjRqlkxuZ9W6aDCKsch7igMlOQES9yX%2BO3r7z313tTV%2Bk4hYeFCC%2BC1trooTedgOXGIRdFF3BRf5GPYFDMM2pFRYC3n47YHfjffKV5%2FWJOja3N16YGEi%2B953L%2BQZMK311V3B43Lk1fNsbV93Ss6Riz8R7RbgERz6CNX63XsiVFl05%2BvR7XuoNdl%2Bn1Q3JgBAu%2FA%2Feh4g8JLNdcP2QtsJHeDxd5uqRDfwQljWIziymiCLfXyol9kdGjmTZRzoiAd%2F5c%2BDY6bwXnJnsVtefLOENT0auMEOazyzEuHkWJ9iThnvsxGP8uVWgyAaDo8x4HKN%2BccRkFH9WF9BG%2FE2xRgFjGTA%2BLkfkdjjZB0GimI2OkyxFEeRfexM5yNBmPtzkQcHHzfPntALOG7iS9vMD8%2BaD3Dp3MiyFl2FAGJlYcxw79My%2BTRrx%2FoT7rmf%2FhYCap6MKAXXgkG8uc6IguU9WYH%2BeZKhQqV9KJsaAiSKlFR55euN8csk5vOgtneRlwkVBEVqx1OOFPtOg0mAOyNXBBAPNZowjrXWyQY6pgHEf5lXCoU9hQkVkiON5I73k79BoqNm6wr%2FeiNm61a66Qx2ry5SHG02SkoG1tqV7F8UAyNxHVaEajgPEjdR2HZxOuxLSpqlYDSCbWMEQQ0%2Fte9qbG%2FVh6xaGsvXtIaJm9Dq7rUsRlLoWUWbF5cX2dQdEykITvGV8TV7KoylMxDawc%2BSjj3%2BHNmWFYulqkwush6BiM4zBehMas1lH1rqP8HCD4SOrsGE&X-Amz-Signature=fdad71a75d997ead2cac058577f46396404c5b8369367a80d9cac61bf8b8943b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHLJO6MX%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T171928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIELgCgc%2FqRMBh55pExXFUWrJgksBLnXczvq6xWaGZsHRAiBpREj9%2F%2B7jBeG%2B5NY7%2FI6JHelWo1QRxo6SOLakJzpc6yqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbvAEBn7cB5cMh958KtwDqiL3rQJmAnF1WbH3bGv8yIxIetoatjq5A5VExF8LSus9seKLwlSmAX42u6%2F4oXkBrPD6C0BI5VdNjOWuHYxGrkmUXL%2FBfGhUzzqrRjRqlkxuZ9W6aDCKsch7igMlOQES9yX%2BO3r7z313tTV%2Bk4hYeFCC%2BC1trooTedgOXGIRdFF3BRf5GPYFDMM2pFRYC3n47YHfjffKV5%2FWJOja3N16YGEi%2B953L%2BQZMK311V3B43Lk1fNsbV93Ss6Riz8R7RbgERz6CNX63XsiVFl05%2BvR7XuoNdl%2Bn1Q3JgBAu%2FA%2Feh4g8JLNdcP2QtsJHeDxd5uqRDfwQljWIziymiCLfXyol9kdGjmTZRzoiAd%2F5c%2BDY6bwXnJnsVtefLOENT0auMEOazyzEuHkWJ9iThnvsxGP8uVWgyAaDo8x4HKN%2BccRkFH9WF9BG%2FE2xRgFjGTA%2BLkfkdjjZB0GimI2OkyxFEeRfexM5yNBmPtzkQcHHzfPntALOG7iS9vMD8%2BaD3Dp3MiyFl2FAGJlYcxw79My%2BTRrx%2FoT7rmf%2FhYCap6MKAXXgkG8uc6IguU9WYH%2BeZKhQqV9KJsaAiSKlFR55euN8csk5vOgtneRlwkVBEVqx1OOFPtOg0mAOyNXBBAPNZowjrXWyQY6pgHEf5lXCoU9hQkVkiON5I73k79BoqNm6wr%2FeiNm61a66Qx2ry5SHG02SkoG1tqV7F8UAyNxHVaEajgPEjdR2HZxOuxLSpqlYDSCbWMEQQ0%2Fte9qbG%2FVh6xaGsvXtIaJm9Dq7rUsRlLoWUWbF5cX2dQdEykITvGV8TV7KoylMxDawc%2BSjj3%2BHNmWFYulqkwush6BiM4zBehMas1lH1rqP8HCD4SOrsGE&X-Amz-Signature=b82cd5e8487c567cf147cf9687e029d7b89230c50c39240a3f5e79bac7dde1ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

