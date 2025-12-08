---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7PJFAGK%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T212601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAUCEj1rvDZMdxlAI1HqZbrkxqHv51X4c7zB3BYq7mxcAiEAjbY%2FWIHUbnB%2F8omFjx9gowgzmeewuf1sSNBzq7ZkGncqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHe6rbZfkOpkwKM0rSrcA5CrpvQzePBMDwQZn6J440lAwBPI%2FPqvsSBtY%2BDdeK3SJfqaib6r7SNSMACSW171dtegqPFPpVbmAUnwokY6PyczkwPk75o7FSmQ9gX1drvTAgOC5H5P%2BCQ5NArfV4NcKf%2B6jDLLzz3Bufhba9MuE2zTim1MsVsj8sn%2FQnWSTdt4LiYu48Py31LXQRcXAyCCie%2B3VUNXV1Bv5V0ilxswqEJT0kXca4I3Sp23ZUQckGMataPOrEqzDxxhQyqmnQXaqTxoxXdao1U1lE8s2ezxGa3Non17ORI3RJQv3uKKj5a5yeae0TIFB1igvk39IgGO5%2BKZTHmkhwqU93uAdp83FB077eZ3KyOH3n5wFaYwkfZknieeSVCIsjogCrSP3zGXq9Ix%2Fhm%2B19340vNnsEjNkqLVzQOvzg8H63%2Fr7IVGOiqq1LVFGwdSx9Tz2fSakmZ1EFtJabX7NLC3DFv1VDgGDlEptVI7A6KuVQjLN7IovSpxQTsHCWHTQx5MayGriA%2Fa77Jf8w5taka6KCzc7HF6x6IwFI7iGZXLii44kBkgt7ShxeVntZcJtOW%2FkSMaUu5ZkqpF6cIP3oEjU7yOBHT%2BmNwsN39GI0SN%2Bvatn7iqEiXqg4w%2BJE4aMJMPSs1mMKqA3ckGOqUB9QNXGGt24IrUcPNO6mERJLC%2FlTLKG8KqWJeUmsuhiSIU21mV6FhrQ8Z3IIF45t%2FzmbZisySjmoL%2BC2qFZXBPNN6K4OuNT2rcjCgaSQcbO5bhxQQ1cBYop29SaVxnVcXWsD3CpYgSdw%2B5tqmr3NoSSJ0ZxqAM2cqQ%2Ffq5nXaiMxFu8Y%2BN4sSWUpm9ynQLb%2BOTwye3qdXzC8J%2B9XUDpFyKCs%2BQ8SPh&X-Amz-Signature=165e8366f0a72f460fb7fe9d29fbb669cd787ee9d6665fbd96bef9b7f760dc74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7PJFAGK%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T212601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAUCEj1rvDZMdxlAI1HqZbrkxqHv51X4c7zB3BYq7mxcAiEAjbY%2FWIHUbnB%2F8omFjx9gowgzmeewuf1sSNBzq7ZkGncqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHe6rbZfkOpkwKM0rSrcA5CrpvQzePBMDwQZn6J440lAwBPI%2FPqvsSBtY%2BDdeK3SJfqaib6r7SNSMACSW171dtegqPFPpVbmAUnwokY6PyczkwPk75o7FSmQ9gX1drvTAgOC5H5P%2BCQ5NArfV4NcKf%2B6jDLLzz3Bufhba9MuE2zTim1MsVsj8sn%2FQnWSTdt4LiYu48Py31LXQRcXAyCCie%2B3VUNXV1Bv5V0ilxswqEJT0kXca4I3Sp23ZUQckGMataPOrEqzDxxhQyqmnQXaqTxoxXdao1U1lE8s2ezxGa3Non17ORI3RJQv3uKKj5a5yeae0TIFB1igvk39IgGO5%2BKZTHmkhwqU93uAdp83FB077eZ3KyOH3n5wFaYwkfZknieeSVCIsjogCrSP3zGXq9Ix%2Fhm%2B19340vNnsEjNkqLVzQOvzg8H63%2Fr7IVGOiqq1LVFGwdSx9Tz2fSakmZ1EFtJabX7NLC3DFv1VDgGDlEptVI7A6KuVQjLN7IovSpxQTsHCWHTQx5MayGriA%2Fa77Jf8w5taka6KCzc7HF6x6IwFI7iGZXLii44kBkgt7ShxeVntZcJtOW%2FkSMaUu5ZkqpF6cIP3oEjU7yOBHT%2BmNwsN39GI0SN%2Bvatn7iqEiXqg4w%2BJE4aMJMPSs1mMKqA3ckGOqUB9QNXGGt24IrUcPNO6mERJLC%2FlTLKG8KqWJeUmsuhiSIU21mV6FhrQ8Z3IIF45t%2FzmbZisySjmoL%2BC2qFZXBPNN6K4OuNT2rcjCgaSQcbO5bhxQQ1cBYop29SaVxnVcXWsD3CpYgSdw%2B5tqmr3NoSSJ0ZxqAM2cqQ%2Ffq5nXaiMxFu8Y%2BN4sSWUpm9ynQLb%2BOTwye3qdXzC8J%2B9XUDpFyKCs%2BQ8SPh&X-Amz-Signature=496d5c7c8e744ef10ca51f4665b1f5ff44fd376f03809ba9912c296e802e74e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

