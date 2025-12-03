---
layout: post
title: Tres Columnas en CSS con Flexbox
excerpt: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
categories: CSS
tags: [css flexbox]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6UOYA2Z%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T014047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQCTVLGnkrvNOo40VXgZ%2FN8hpa4FU8XbjcIG9LGq2FU8ngIgZZ3Zm0%2BzrNQqZTQ87yNUDAA5hDOCaGEaUiLI6aNy%2Busq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDAJ5a7J%2BortuDcinLSrcA%2FyXQBzaYj4G6ibitekJJ1RHgfqCFjslMx2RalneSzUNhGdnUPl%2FyK0NRBrLnCMJ9xqjzadNoskSjXbYgRsy7lC2MFFacqMFIFHHLfFEdmcl0x%2Bwuaw%2BVwY4DtIsntoUhv1srbsnQEMOdtdRB3yDE8s%2B2%2FbNMKrHGsxWfwP3ARFCvfjhH4y%2FAU1uWWzmN2cTSdtMfSwMgSIQd5gt2kSBaGJAlblj80deOklEni3XMY4C%2BRCFLUUsChqhRB7RjRaN9uMYYWD2CTvCHMlxGUh7SxD2MbqdK8BrldXfkY9XTPLW%2FKb6bz6iIqcSgovto4WaYDz7M6wndFvsK4rSsU3DolQke6TsGEwbHbmbSpagOxA3EEtrFXYTs62jFQdpzhA9v3cTcAKFvqlG2wDXplouf7tRzhpqw8HSTzt4vlCuzCZLsQi98j0M7O7FPlch0aEE%2BneLVb40t9b%2FYYLD5VrDm7wjeoS%2F%2F2nnO%2FTVzYN69zeaYrXIVN9Y7aZBZsM34%2BxECdRdsiI3%2BY4aQbggTOuBsLlnbTI6ayq0x%2BjYG%2BLNnvksXR2FdBZuIUOrz2svfRXvcX06h%2BAiyuStCouw%2BTXenzyr0E98VxAs4t9qjuOCihDX332pxBZ1R2aUTwvdMJGcvskGOqUBc%2BtWH0ueHyYIsX8NZHC8sNRdAHtv4T%2Fwo%2FAsN54vIzw32UuLf36pd%2BJ3NCEattGmVCjj8jFN60h5oultiReDFnhr5Kz7H7dm7FEii2ohrw7c%2F8quWTznpMRjFAfVKKopY7MwyBOXH8CcJlKynlTJL3NBgKynsT2FL%2BLp%2B4gXpksVTGqaKEdlB8I4vPZuwxFbPJUIciM2kxhJAutelOPHb2wiR%2F%2Bn&X-Amz-Signature=4fe740fe3d4599d21effcab3d49ba267cc161e4ca0997f17b08a5ce3d845c3ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6UOYA2Z%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T014047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQCTVLGnkrvNOo40VXgZ%2FN8hpa4FU8XbjcIG9LGq2FU8ngIgZZ3Zm0%2BzrNQqZTQ87yNUDAA5hDOCaGEaUiLI6aNy%2Busq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDAJ5a7J%2BortuDcinLSrcA%2FyXQBzaYj4G6ibitekJJ1RHgfqCFjslMx2RalneSzUNhGdnUPl%2FyK0NRBrLnCMJ9xqjzadNoskSjXbYgRsy7lC2MFFacqMFIFHHLfFEdmcl0x%2Bwuaw%2BVwY4DtIsntoUhv1srbsnQEMOdtdRB3yDE8s%2B2%2FbNMKrHGsxWfwP3ARFCvfjhH4y%2FAU1uWWzmN2cTSdtMfSwMgSIQd5gt2kSBaGJAlblj80deOklEni3XMY4C%2BRCFLUUsChqhRB7RjRaN9uMYYWD2CTvCHMlxGUh7SxD2MbqdK8BrldXfkY9XTPLW%2FKb6bz6iIqcSgovto4WaYDz7M6wndFvsK4rSsU3DolQke6TsGEwbHbmbSpagOxA3EEtrFXYTs62jFQdpzhA9v3cTcAKFvqlG2wDXplouf7tRzhpqw8HSTzt4vlCuzCZLsQi98j0M7O7FPlch0aEE%2BneLVb40t9b%2FYYLD5VrDm7wjeoS%2F%2F2nnO%2FTVzYN69zeaYrXIVN9Y7aZBZsM34%2BxECdRdsiI3%2BY4aQbggTOuBsLlnbTI6ayq0x%2BjYG%2BLNnvksXR2FdBZuIUOrz2svfRXvcX06h%2BAiyuStCouw%2BTXenzyr0E98VxAs4t9qjuOCihDX332pxBZ1R2aUTwvdMJGcvskGOqUBc%2BtWH0ueHyYIsX8NZHC8sNRdAHtv4T%2Fwo%2FAsN54vIzw32UuLf36pd%2BJ3NCEattGmVCjj8jFN60h5oultiReDFnhr5Kz7H7dm7FEii2ohrw7c%2F8quWTznpMRjFAfVKKopY7MwyBOXH8CcJlKynlTJL3NBgKynsT2FL%2BLp%2B4gXpksVTGqaKEdlB8I4vPZuwxFbPJUIciM2kxhJAutelOPHb2wiR%2F%2Bn&X-Amz-Signature=afdb5007feb41545e64090ec851da8272478e8b51bf5e3d4d1ec35269bce2b4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

