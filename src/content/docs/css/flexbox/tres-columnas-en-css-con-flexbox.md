---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4NAEEIS%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T104716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDqaSxus%2Fog7oJmKMt29yokGySSfKjNbiRq7b45irNNHAiBECVv3zEh9V4XTvR8vSVQwvxbINDE%2FDr9ypGfR7IAhoyqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2UqE4junqjEhdecCKtwDRRvaDCF%2FAkROrJXlxjPMAeUmAAzmvtXCpmB0MXRIbDuJv2%2FpFYWxz5r1F5cznyfOWlGTWe9mf2LaH0q1sJRp9d1Jc%2Fkm2zFnNroYJEizIotU%2FX0AFvIN0B%2B%2BeBO8IIAAMIQZFbO8eLS66OxUujPUEGSrNPuB%2BpneVTe65e0uT5XpDWtlaQ2uYz0L0lnvbzm9OWvAihcw4XdVFU0R4lALTFRWu9HmJ9vjRwF8dvlCAdVbL9X%2FG2iE5nbCSyEBpT6Dgr879HFCfVBUNZmA02U5zfJpRVAfo6Z%2FrkIThSXTLNgFae3PbtR%2FZKdtf2qPMprX8BC7N7XRJpziKdghjtWuLXf6FAEiqUg7hYOiGGKEFJctFMD7Umfd1vonDFACJH9QJoz1Mcji3GXJkZDxXlW49%2FcAPVTIkVnL2gldDFDRHFirc6fjupEnfAyo8Xb53l8bjuU%2F6KE2zilYdCAlaKRTv3x191GjjnaE6aIwt%2BQ4NEGrqYpiAeFG7mzR3etfunf3%2F0FvH9qcLlCShn3A9dic1mo68%2Fugl82raHJC2HwsFGlfg1QhBvyqmfSxvfLUyzqrAoy9V%2Fj3osuidbwwyzILXCVYatIWohAyOU%2BGUzdLme%2Bs6EnDTr1k5D6dNSUw8prVyQY6pgFOIu1FPLP1gTg0gzVH3wtqmT7awFVzCdiOlRKoHWBVe0Nrxfj33uaRdUlZYM6kB0JbxhL4LOOM7%2FaNtPGytqKNQg%2FprmBHRXtf2Lf%2FKdHXt%2BN7Y%2FI2DzWSKhhJDk2HWG0tutjJRfeluC7jzZQ1fpPtMrP%2BKf%2BED8pO8z%2Fk0TNBqwE9vjiarYtTIx2uM9tL3TkIfF%2B5np72FRK1Wk6JHutAFsgpD1aM&X-Amz-Signature=ef539a63656e5f03120d73a9a505c964e53423a79ec779273e77bcab6b0c67a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4NAEEIS%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T104716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDqaSxus%2Fog7oJmKMt29yokGySSfKjNbiRq7b45irNNHAiBECVv3zEh9V4XTvR8vSVQwvxbINDE%2FDr9ypGfR7IAhoyqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2UqE4junqjEhdecCKtwDRRvaDCF%2FAkROrJXlxjPMAeUmAAzmvtXCpmB0MXRIbDuJv2%2FpFYWxz5r1F5cznyfOWlGTWe9mf2LaH0q1sJRp9d1Jc%2Fkm2zFnNroYJEizIotU%2FX0AFvIN0B%2B%2BeBO8IIAAMIQZFbO8eLS66OxUujPUEGSrNPuB%2BpneVTe65e0uT5XpDWtlaQ2uYz0L0lnvbzm9OWvAihcw4XdVFU0R4lALTFRWu9HmJ9vjRwF8dvlCAdVbL9X%2FG2iE5nbCSyEBpT6Dgr879HFCfVBUNZmA02U5zfJpRVAfo6Z%2FrkIThSXTLNgFae3PbtR%2FZKdtf2qPMprX8BC7N7XRJpziKdghjtWuLXf6FAEiqUg7hYOiGGKEFJctFMD7Umfd1vonDFACJH9QJoz1Mcji3GXJkZDxXlW49%2FcAPVTIkVnL2gldDFDRHFirc6fjupEnfAyo8Xb53l8bjuU%2F6KE2zilYdCAlaKRTv3x191GjjnaE6aIwt%2BQ4NEGrqYpiAeFG7mzR3etfunf3%2F0FvH9qcLlCShn3A9dic1mo68%2Fugl82raHJC2HwsFGlfg1QhBvyqmfSxvfLUyzqrAoy9V%2Fj3osuidbwwyzILXCVYatIWohAyOU%2BGUzdLme%2Bs6EnDTr1k5D6dNSUw8prVyQY6pgFOIu1FPLP1gTg0gzVH3wtqmT7awFVzCdiOlRKoHWBVe0Nrxfj33uaRdUlZYM6kB0JbxhL4LOOM7%2FaNtPGytqKNQg%2FprmBHRXtf2Lf%2FKdHXt%2BN7Y%2FI2DzWSKhhJDk2HWG0tutjJRfeluC7jzZQ1fpPtMrP%2BKf%2BED8pO8z%2Fk0TNBqwE9vjiarYtTIx2uM9tL3TkIfF%2B5np72FRK1Wk6JHutAFsgpD1aM&X-Amz-Signature=31884c3733842e6d7198a3b8a5a7e938af0b9f215fbfbfde971d834ce6591b58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

