---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIKGIRHS%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T054928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGabL1bxLoOU8UYToZv1IBhAUwF35QP%2BgJpSjlGyA5UoAiEAkaXZK6iqYh62tCMnSYI6QjeKAd5Fsc7Yp8tbRjmjtdMqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFxMVNr0N%2FEDXFSmVSrcA4pcJ35uiF1lj2b0HnfyROFW%2FdmQ%2BZg%2BJEm4cDr9a7dh8rGuzgeS85SH1%2F4HfRIvH428l3fHGk79%2BGmwUIQJf9KsIsKFarU7hnTSB9KrR5Yv85x%2B%2BpoORpCKyvESmvhpJqaApYI2SmjHPxCC%2BjQzs%2FFyjUuZI%2FCMbquFSDbn8%2BfI80COT2emkXflc8%2B0AWQOAcrmOk5%2BxxTJT2IKgq%2Fw%2FyZGeturLAfgPBfFajGhINzDl510VQnzmMKtWDC7m28agfOvRL4pwOcJWk31jbTKMDUs%2FYNMxNB9hdmcNjNozVv9sFZVZW6YrifVLF%2FuyJLoLL%2FuaLolqJ1cWeop5cYIMbKFEpte8fmPNBUuWtE6I5WqCFx73EZ0f%2BzBax6EIHn8EybDQF9SyTPXaLoE5YDZdqH%2BZk5q3ahuWv9nWTZ7Ak%2BMAZCE4YRcnYVHvv85Iv02Wr%2FWnnN%2BYZwScoD1cSTGYVrfCBLPD1YRuWcJrS2OsNVZeXMUE2iPyp3mViLRf7lwyG9P5k4CY8EnsbgABpBE0Zf6fuVX561T9yyMR47mPfECVRYPnRpMkZYrWpp0OXfYowU5MKjpk4cFIlFGNFbIabijgmul7BcK3QsLRIP%2FhKpKesfCKD1gzmwA%2Bnn9MPaj1MkGOqUB0WZoV%2BraWLG1QLlMFU4wphmWJhVKherPuZH%2B%2Br6sHqUYJQgVZo7mBavNgEC3vFtwPzd%2BbiZBLDSTvDzC%2F%2FkVP4DQv3FJn%2FrR0m44LEIJ2oVT4ClMnALdwAGRwYdQYK96n1IN1ovz78MmiseZrc6vIvWrsFSAC%2FqkTNnY38oNblr2r%2FUlejmK2P4SjWgrkoMJOZaFICFjr2mXgm74%2FA3xu2i%2BBmEW&X-Amz-Signature=ebae63c50456b72d914d7075bd26ffbc9b82cc3e3620bc433bedda73bd6a0259&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIKGIRHS%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T054928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGabL1bxLoOU8UYToZv1IBhAUwF35QP%2BgJpSjlGyA5UoAiEAkaXZK6iqYh62tCMnSYI6QjeKAd5Fsc7Yp8tbRjmjtdMqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFxMVNr0N%2FEDXFSmVSrcA4pcJ35uiF1lj2b0HnfyROFW%2FdmQ%2BZg%2BJEm4cDr9a7dh8rGuzgeS85SH1%2F4HfRIvH428l3fHGk79%2BGmwUIQJf9KsIsKFarU7hnTSB9KrR5Yv85x%2B%2BpoORpCKyvESmvhpJqaApYI2SmjHPxCC%2BjQzs%2FFyjUuZI%2FCMbquFSDbn8%2BfI80COT2emkXflc8%2B0AWQOAcrmOk5%2BxxTJT2IKgq%2Fw%2FyZGeturLAfgPBfFajGhINzDl510VQnzmMKtWDC7m28agfOvRL4pwOcJWk31jbTKMDUs%2FYNMxNB9hdmcNjNozVv9sFZVZW6YrifVLF%2FuyJLoLL%2FuaLolqJ1cWeop5cYIMbKFEpte8fmPNBUuWtE6I5WqCFx73EZ0f%2BzBax6EIHn8EybDQF9SyTPXaLoE5YDZdqH%2BZk5q3ahuWv9nWTZ7Ak%2BMAZCE4YRcnYVHvv85Iv02Wr%2FWnnN%2BYZwScoD1cSTGYVrfCBLPD1YRuWcJrS2OsNVZeXMUE2iPyp3mViLRf7lwyG9P5k4CY8EnsbgABpBE0Zf6fuVX561T9yyMR47mPfECVRYPnRpMkZYrWpp0OXfYowU5MKjpk4cFIlFGNFbIabijgmul7BcK3QsLRIP%2FhKpKesfCKD1gzmwA%2Bnn9MPaj1MkGOqUB0WZoV%2BraWLG1QLlMFU4wphmWJhVKherPuZH%2B%2Br6sHqUYJQgVZo7mBavNgEC3vFtwPzd%2BbiZBLDSTvDzC%2F%2FkVP4DQv3FJn%2FrR0m44LEIJ2oVT4ClMnALdwAGRwYdQYK96n1IN1ovz78MmiseZrc6vIvWrsFSAC%2FqkTNnY38oNblr2r%2FUlejmK2P4SjWgrkoMJOZaFICFjr2mXgm74%2FA3xu2i%2BBmEW&X-Amz-Signature=f68222bd15359756b62640bf824b5a5ff1e755d480cca576ba760f38321db980&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

