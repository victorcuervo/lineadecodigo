---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTVYWDML%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T123007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB0UCPM%2FE%2FtnupiqPtWQMX0XsmRIgEGxHGNnPSG5Op8LAiEAtVRQMd%2B6r4BV2kRz5SSaRYenX0lwZpkVHnrJJLVoFm0qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM0SkPaBCcyYcJJvtSrcAw89wYJlaAx%2Bo2TVD93mfxpWtzJMGZ7tk220ZZjhN7gIQdD%2FqXGt%2Fufn65PnUu%2BYS%2FRxB%2BpZBsHJ9KeSiJItMYuZmbIAaVMnTDxmths0Bq3m9Z11AAEGvzIl5L9i3ekyLxGZY5oakAL3IcepMVJQEVH6LSP4FYmFllSdnS1UlQY2HQTKgIptWeJzLWfnnCd55qYnJSmHFTkGZKQLI3ilkzZnQQcdP6Yq%2B8dCD2QpP4KT1BNMBHedzxvLMctb8PfRF3qH2gsEyKHz5xp%2BdnYRKh5SqmyRFPC2d1iL%2FvhDe5%2BgVI9jSG20nRfu%2FH%2Bsa1z5r7TFUNDggi4OcWSTNOEIw2MOATPlyMzDn50RkukB1OtLBGWsubM7%2FM%2FyHNDNvhIzHzW0WPefyOCpa4EfWHgAPhsATahoOKc1Qqh896Lm7qzKqx7Bn2LJFTs3rb2SOUi0%2Bvnya1TQtRjCwdXe2gL3SQFKOLHMsc3UyqrKUG8%2Bo23YGbTbOeLGaPd%2FW%2FfrprAMAjsiOgsoFMhKSbKdrBqlmErNOsqILR02TWnEkMIghuFXGK8FJZDfb2zKdFLJWaUkmTg%2FPumTjoLozCZGckvafSjrtvutvJUqcGsbg85vH%2BJTg%2FRyj32tXKmoaNq4MKGZ1ckGOqUBEcWpscsZDhr%2FpvQ5Q4MQ9kY%2BRd1liMBYdpqKveaWuFHVz0YHuFV97E%2BW%2B%2BX8j%2Bti0XDZUZq2FXwQGm9CK%2F9RXE47zmHeR87CcohhKBVr8MLxTs0mDLMOI%2FGwdWZEgHf1fFx4eDssMhrDjqf%2F6tS1jM84e1RUW7QC7xAYpLz30wCPOhTU4wePcX%2FNBsKecnN661rG9naBpp2FvXsaRbplqb6zLoyV&X-Amz-Signature=773f9e5d42325aa5a3c1527254a51d167602609dbb1c68b8fc07a173feb0144c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTVYWDML%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T123007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB0UCPM%2FE%2FtnupiqPtWQMX0XsmRIgEGxHGNnPSG5Op8LAiEAtVRQMd%2B6r4BV2kRz5SSaRYenX0lwZpkVHnrJJLVoFm0qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM0SkPaBCcyYcJJvtSrcAw89wYJlaAx%2Bo2TVD93mfxpWtzJMGZ7tk220ZZjhN7gIQdD%2FqXGt%2Fufn65PnUu%2BYS%2FRxB%2BpZBsHJ9KeSiJItMYuZmbIAaVMnTDxmths0Bq3m9Z11AAEGvzIl5L9i3ekyLxGZY5oakAL3IcepMVJQEVH6LSP4FYmFllSdnS1UlQY2HQTKgIptWeJzLWfnnCd55qYnJSmHFTkGZKQLI3ilkzZnQQcdP6Yq%2B8dCD2QpP4KT1BNMBHedzxvLMctb8PfRF3qH2gsEyKHz5xp%2BdnYRKh5SqmyRFPC2d1iL%2FvhDe5%2BgVI9jSG20nRfu%2FH%2Bsa1z5r7TFUNDggi4OcWSTNOEIw2MOATPlyMzDn50RkukB1OtLBGWsubM7%2FM%2FyHNDNvhIzHzW0WPefyOCpa4EfWHgAPhsATahoOKc1Qqh896Lm7qzKqx7Bn2LJFTs3rb2SOUi0%2Bvnya1TQtRjCwdXe2gL3SQFKOLHMsc3UyqrKUG8%2Bo23YGbTbOeLGaPd%2FW%2FfrprAMAjsiOgsoFMhKSbKdrBqlmErNOsqILR02TWnEkMIghuFXGK8FJZDfb2zKdFLJWaUkmTg%2FPumTjoLozCZGckvafSjrtvutvJUqcGsbg85vH%2BJTg%2FRyj32tXKmoaNq4MKGZ1ckGOqUBEcWpscsZDhr%2FpvQ5Q4MQ9kY%2BRd1liMBYdpqKveaWuFHVz0YHuFV97E%2BW%2B%2BX8j%2Bti0XDZUZq2FXwQGm9CK%2F9RXE47zmHeR87CcohhKBVr8MLxTs0mDLMOI%2FGwdWZEgHf1fFx4eDssMhrDjqf%2F6tS1jM84e1RUW7QC7xAYpLz30wCPOhTU4wePcX%2FNBsKecnN661rG9naBpp2FvXsaRbplqb6zLoyV&X-Amz-Signature=8ef9120918838cea10f7693eea59e0e654067b841c190d54eecb313001fab5c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

