---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLRAKNXP%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T101823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrTzcWA7T8HQErlpzG9ae%2Br766SkjIbgEhiI9HRzmcNAIgHbyEyhgn9tuveKrcNTSDIH%2B2IR0YiRtYbsQzDFLyXDQqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE%2B%2F6qM%2BOkcnmLCi9SrcA%2FrOSRheCoBPAcJFAg7WOxQfSwlbmjkye5y1SjKD4TpiYUDz%2FOWcOzfTTbW%2BMhDnWPKdH21ZzcbsLcEktfCvpeZoiEfCuJuA3QITEtdDX74OKWghiv4s3zL1bE%2B4IuqdDTIFGk5kNQkGJaaK7oI2oHXUy4jHN%2FDyymnscfRtqygojJTbIw2mC1w6QmrgsSfSuG%2F92GCVMBE0kve4iyXn0%2FQxSTGQzLKBL2NUTbIw8Mpl5RhxpVr6JGtdCOoNeJxjAyw7NQ0jhJYS7LNobdFt%2B1axWQZdmJnn7lKnohLcUr4fSpPRiNe%2Fs6tULuKo%2FT%2BuIL5O98DIC%2BaB54weSdQknufc6%2BmbEyRI2xiBd0hBYJwcNAfliQ0uanLcvuzb2hxSR7%2BPY8B6sqBKd0JDGx1lV2p8j1IK3Xx4MVvrEBr3frxK%2Bq%2F6Yt%2BjpNKgFfrbjSpHPv1KzaWA4aOsh5Vgr8xIjeXKYapDIi5ndWq%2FN1bXvn%2B4WjIODRDwBqxsJTY2nfH0TI%2Fw43yP8pMTNq0OmaHyza46ZYzoGkLhGi8If7gvhHFkIgEdOGU89XV%2FkkwaYcN3pwNbExVG5lsKHjJ8SowSVmXAi1w16CHsbmG2aPLNSt57mlPsITNaoukRxr6EMPTs2ckGOqUBFhjFQFn%2FPL3zV6V7GM1%2FNtHC2UORzKP7kLSzmsumxprHERayQ6fIpyeWZwlUazUWLr4hlsuV4HmF4lA8qN8Z2i9mkv2AFAZaIVFuxU8zf3nz60NC4dh%2FO25Aegi%2BoiqGYtZjUQOCcm5XJwuyXadw2udRh7rw97iTsiSUc%2Bj89khFuZHpBFi4WEb5PNpi5SdkDhukF2SLXQGYWDu1cD2XX9NGnh9a&X-Amz-Signature=a938e85f097552e260759c76530d6552e0172003ef5edb3bf6d3c7e2cb497929&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLRAKNXP%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T101823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrTzcWA7T8HQErlpzG9ae%2Br766SkjIbgEhiI9HRzmcNAIgHbyEyhgn9tuveKrcNTSDIH%2B2IR0YiRtYbsQzDFLyXDQqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE%2B%2F6qM%2BOkcnmLCi9SrcA%2FrOSRheCoBPAcJFAg7WOxQfSwlbmjkye5y1SjKD4TpiYUDz%2FOWcOzfTTbW%2BMhDnWPKdH21ZzcbsLcEktfCvpeZoiEfCuJuA3QITEtdDX74OKWghiv4s3zL1bE%2B4IuqdDTIFGk5kNQkGJaaK7oI2oHXUy4jHN%2FDyymnscfRtqygojJTbIw2mC1w6QmrgsSfSuG%2F92GCVMBE0kve4iyXn0%2FQxSTGQzLKBL2NUTbIw8Mpl5RhxpVr6JGtdCOoNeJxjAyw7NQ0jhJYS7LNobdFt%2B1axWQZdmJnn7lKnohLcUr4fSpPRiNe%2Fs6tULuKo%2FT%2BuIL5O98DIC%2BaB54weSdQknufc6%2BmbEyRI2xiBd0hBYJwcNAfliQ0uanLcvuzb2hxSR7%2BPY8B6sqBKd0JDGx1lV2p8j1IK3Xx4MVvrEBr3frxK%2Bq%2F6Yt%2BjpNKgFfrbjSpHPv1KzaWA4aOsh5Vgr8xIjeXKYapDIi5ndWq%2FN1bXvn%2B4WjIODRDwBqxsJTY2nfH0TI%2Fw43yP8pMTNq0OmaHyza46ZYzoGkLhGi8If7gvhHFkIgEdOGU89XV%2FkkwaYcN3pwNbExVG5lsKHjJ8SowSVmXAi1w16CHsbmG2aPLNSt57mlPsITNaoukRxr6EMPTs2ckGOqUBFhjFQFn%2FPL3zV6V7GM1%2FNtHC2UORzKP7kLSzmsumxprHERayQ6fIpyeWZwlUazUWLr4hlsuV4HmF4lA8qN8Z2i9mkv2AFAZaIVFuxU8zf3nz60NC4dh%2FO25Aegi%2BoiqGYtZjUQOCcm5XJwuyXadw2udRh7rw97iTsiSUc%2Bj89khFuZHpBFi4WEb5PNpi5SdkDhukF2SLXQGYWDu1cD2XX9NGnh9a&X-Amz-Signature=a7d9d09817aa11d75c85871feb96743f149b764470680b87bbef1f432c914550&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

