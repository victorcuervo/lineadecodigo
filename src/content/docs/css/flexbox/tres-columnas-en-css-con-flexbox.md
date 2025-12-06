---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636HOXW3W%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T034501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB%2BdNSSQhpT2YnrXNNnVO2x37g4I8zBPjz%2FcFIzEa4NhAiAQgHj%2Fl62KCvsBgH0HfpRtrbVfcgrsrQBye93aWzx4pir%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMlCoTeY%2FOnDUP3dKkKtwDWSUf9hmCehAehdrNq%2BNYmpZ%2FtUrBE1X2SSjDB%2BnQ%2FHh9g%2FMS498ut5QJIPHH14akY4FSBfbN3l3Zq6K93AS9cvTmpuYZl4Nh%2FEudRnqf7IZ%2FNkp%2BabIpj4FUJrnyWVT%2BPMkkJ0HiYYKB2Sp6yHSDhc7sI6y7uL0TKjVzDZ3xebNUzZwbXwQue02tt%2BrZo3IC7obK%2BLv52HyEvy1ffj839r%2FEZKG4fEL94YD0lRVKS1Km3q0cxzF3NfmqQdeupPciI3zN%2B4nnisNv71eYFwTRtb5iq0yMno5%2BVcGxiUVxwDd5TPJ7HA3%2FQ1ksyOt7gtFvmV4Eo3V2FcMwYLRrjqrCwQvB9IMg6mWayrPX6EZEhrOL7aUsnqK%2FBLYtmfl8y2UIYKXU4Rd4%2F4RfhaHIN2q8PnslGWrxk%2FK6k1bwTNVrhoV%2B0GB%2BZqO6CeUJreGv8lzpnEG9mOyYJ%2BjAVbyQKR0o9X8pSvYRHodVbvD3%2FHdRbyz7RkOGDC2dxJH5HsXL68ekI8PfS5dqD5D%2FpiM1zQ0qSiODgwxmUtUpfRB5toD2lok6SdzdyhbdCEeddzxN3N%2FVZCNT6Vdl2ku2ZVFWFQflss9bVG4G33QWfnO1vTJJ0uBlk3T6076bziofMyswvsPOyQY6pgFdzP3lj%2Bh%2BFqDLuhNd98AHQ7CpQG6LaBZB0jSgrsWjIBsrTT%2Fja5DkLIBThiX8ohe9PB7JW8ILBRo1u%2BruJIGGoYtdRcZNnxCfxnUgSd9Nh3IZtR8%2BWfTLIQrgFrayXhwxtZ4GCjN4YewLy8fNL88WmxvfZB8mjaXkR%2F7FAa2zq7nsmj39CjILAkB3SvRojL8XVW6jVtFffro2X9dUvBoISAtrig82&X-Amz-Signature=6b6c40ff009c8821eeb3266e444307be69f1d0d979b2c63ebcf0ae6a36228d6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636HOXW3W%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T034501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB%2BdNSSQhpT2YnrXNNnVO2x37g4I8zBPjz%2FcFIzEa4NhAiAQgHj%2Fl62KCvsBgH0HfpRtrbVfcgrsrQBye93aWzx4pir%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMlCoTeY%2FOnDUP3dKkKtwDWSUf9hmCehAehdrNq%2BNYmpZ%2FtUrBE1X2SSjDB%2BnQ%2FHh9g%2FMS498ut5QJIPHH14akY4FSBfbN3l3Zq6K93AS9cvTmpuYZl4Nh%2FEudRnqf7IZ%2FNkp%2BabIpj4FUJrnyWVT%2BPMkkJ0HiYYKB2Sp6yHSDhc7sI6y7uL0TKjVzDZ3xebNUzZwbXwQue02tt%2BrZo3IC7obK%2BLv52HyEvy1ffj839r%2FEZKG4fEL94YD0lRVKS1Km3q0cxzF3NfmqQdeupPciI3zN%2B4nnisNv71eYFwTRtb5iq0yMno5%2BVcGxiUVxwDd5TPJ7HA3%2FQ1ksyOt7gtFvmV4Eo3V2FcMwYLRrjqrCwQvB9IMg6mWayrPX6EZEhrOL7aUsnqK%2FBLYtmfl8y2UIYKXU4Rd4%2F4RfhaHIN2q8PnslGWrxk%2FK6k1bwTNVrhoV%2B0GB%2BZqO6CeUJreGv8lzpnEG9mOyYJ%2BjAVbyQKR0o9X8pSvYRHodVbvD3%2FHdRbyz7RkOGDC2dxJH5HsXL68ekI8PfS5dqD5D%2FpiM1zQ0qSiODgwxmUtUpfRB5toD2lok6SdzdyhbdCEeddzxN3N%2FVZCNT6Vdl2ku2ZVFWFQflss9bVG4G33QWfnO1vTJJ0uBlk3T6076bziofMyswvsPOyQY6pgFdzP3lj%2Bh%2BFqDLuhNd98AHQ7CpQG6LaBZB0jSgrsWjIBsrTT%2Fja5DkLIBThiX8ohe9PB7JW8ILBRo1u%2BruJIGGoYtdRcZNnxCfxnUgSd9Nh3IZtR8%2BWfTLIQrgFrayXhwxtZ4GCjN4YewLy8fNL88WmxvfZB8mjaXkR%2F7FAa2zq7nsmj39CjILAkB3SvRojL8XVW6jVtFffro2X9dUvBoISAtrig82&X-Amz-Signature=f5ff1a1d51e7d819b630465ba84ccc135d05f56f12e80aa86f04628c313f3a28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

