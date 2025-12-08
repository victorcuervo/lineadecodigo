---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3NKEY3H%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T061557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEyB3L1%2FJtwyNNWyFwAlS%2FgcwFxHN6vYXZEvsZyvHQVoAiEA8hngZ53mDJS7SBr%2F8znQdY%2FHG59Ce95qj5sZs7ziz%2FUqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOvrGfxSU7sp56sZByrcA8fDhm8GhxHVwOIRQo5El4QeebRVyLR8s92MdEL%2BExoepJottmlnXaP8yS2puOciKSygPvyGtwTEI%2Bp9sUCDqPL8UzjMhU%2FwZenb3morNM5FgX8ePD7woFiJ7FCp2y35165kDxFIgI3G9OBmIry%2FJbGwae%2F12ZDY1mFjw6mzrupDqvv4nMRFFJ%2FipSqD9BYpi%2Fu02AZstZDv0V91ZmOvbY10svhUV%2Bze2EAz65zkHwjUIGy%2Br3%2BpfS44t5A68Vb8V1n%2FZ09avnCoNgzQyhiNbawfFIfTuynZQaTSrTKNYpFdLxar6Oou3EwUOOcfHQYrCKVc3rdHWx2O0bwIIf9L%2F43oyNC90c7wx%2B60OghiE6jby2TxUjGZfD4dP9GSzD1SGgTnb7StIYWUFf3jJs%2F%2Fyj3CbxN3SLeSPHwyFDL5L09tLkhNFzK%2Bt38tDInI2LfMtkNuPF8pdgS3ZCGSBZUE42HTMtVhQ%2BPTA%2FiJNGUjpc7IiPllm%2B5H9gITwwcuBBZFAT2acypM0E%2FK4JNe8CjaMKkTx9BYw4pZT98MW7FMFB8w9i%2BArAxMz%2FNAgDZm0sMvltdPtSsVnSQMt%2FLvszF3wTM2kvVOr%2BbY57HqDBe3yQM71QV%2Bjs3A43b21JTgMKfR2ckGOqUBo%2BhPyz%2BRr%2BdXBsfG8tmh03bmBZ34W5KXXbv0ehH%2Bf%2FnnDYPHhrckW%2BKfA4y%2F3ItLV2dt5KLfq6hmWBLEH90RVYWwUx4H%2Fha3ajT1SAn%2B68C5pdLABYuVKPu2zCAdNMZ8ci1FbeRUmHmV4OPZk%2FJYMJDaQun1JeSNx%2FKp1aad2Dler%2Fp1z1MeELobIhSe1mliuG32NJVPkbUEyCPtVPsS0uEcJlMq&X-Amz-Signature=70b24e3a3eab874eaed1a777e6a1eb6044c9c3a1215f4c8d09aa7db31687103a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3NKEY3H%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T061557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEyB3L1%2FJtwyNNWyFwAlS%2FgcwFxHN6vYXZEvsZyvHQVoAiEA8hngZ53mDJS7SBr%2F8znQdY%2FHG59Ce95qj5sZs7ziz%2FUqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOvrGfxSU7sp56sZByrcA8fDhm8GhxHVwOIRQo5El4QeebRVyLR8s92MdEL%2BExoepJottmlnXaP8yS2puOciKSygPvyGtwTEI%2Bp9sUCDqPL8UzjMhU%2FwZenb3morNM5FgX8ePD7woFiJ7FCp2y35165kDxFIgI3G9OBmIry%2FJbGwae%2F12ZDY1mFjw6mzrupDqvv4nMRFFJ%2FipSqD9BYpi%2Fu02AZstZDv0V91ZmOvbY10svhUV%2Bze2EAz65zkHwjUIGy%2Br3%2BpfS44t5A68Vb8V1n%2FZ09avnCoNgzQyhiNbawfFIfTuynZQaTSrTKNYpFdLxar6Oou3EwUOOcfHQYrCKVc3rdHWx2O0bwIIf9L%2F43oyNC90c7wx%2B60OghiE6jby2TxUjGZfD4dP9GSzD1SGgTnb7StIYWUFf3jJs%2F%2Fyj3CbxN3SLeSPHwyFDL5L09tLkhNFzK%2Bt38tDInI2LfMtkNuPF8pdgS3ZCGSBZUE42HTMtVhQ%2BPTA%2FiJNGUjpc7IiPllm%2B5H9gITwwcuBBZFAT2acypM0E%2FK4JNe8CjaMKkTx9BYw4pZT98MW7FMFB8w9i%2BArAxMz%2FNAgDZm0sMvltdPtSsVnSQMt%2FLvszF3wTM2kvVOr%2BbY57HqDBe3yQM71QV%2Bjs3A43b21JTgMKfR2ckGOqUBo%2BhPyz%2BRr%2BdXBsfG8tmh03bmBZ34W5KXXbv0ehH%2Bf%2FnnDYPHhrckW%2BKfA4y%2F3ItLV2dt5KLfq6hmWBLEH90RVYWwUx4H%2Fha3ajT1SAn%2B68C5pdLABYuVKPu2zCAdNMZ8ci1FbeRUmHmV4OPZk%2FJYMJDaQun1JeSNx%2FKp1aad2Dler%2Fp1z1MeELobIhSe1mliuG32NJVPkbUEyCPtVPsS0uEcJlMq&X-Amz-Signature=c265dc74fc5de65027dfb431c9d392e9e77895e419fb055cca9748e8fbdbbad4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

