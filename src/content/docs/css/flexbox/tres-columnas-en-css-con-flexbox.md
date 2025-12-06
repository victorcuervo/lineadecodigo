---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623NKPPBQ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T132216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCOecrwm7Axw1LOjdd02pQwUhWFBGhieLdzPwb0EhnslAIge57b9X2bDRSexe6O8U8jaYUd48W2J9%2BBKQ53o9FHVs0q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDKy6CgRAx%2Ff%2B0zmy4SrcA%2BhAUDQ9B7zOit5x61YHRVDK87n7jEBdf6nifqIN%2BuxQPlBgU%2F2Tz6QqO8MR2f%2BwGq5ebSdRqqJSZ6KWtDmy6jj29Fozgh0W9ZuEMgb3wAy2Ls7h%2BXm%2BGiG22Gmy4tpV8yo0GuUdB2AKNo29DyO7r1CYxzag5T1AVkk7h4uturn%2BxW%2Fxa0lyRXLT%2FZYTQ8ZS6nrpE2%2FB86XWY3bTJ%2BSzfLoS%2FnbbWIaVFnqvkwWIMXMNoWYA15EJe82srfrFnAbrPYGCgSY5aopzggALAtPbPKIxzJ2NyqpmovAoQ%2BkYOek%2FZzKp7mLGMwy%2FuJTTMQyntgmxba1bU%2FxU5FoogaccIpXEQOg%2BsIR808aBRTyd287%2BrkrFNIxQxrpAQs3hEOBsuxq%2BPGPfogohK8lHks%2FtDuqgjPhFU%2BceH90b60gRJ2gER3%2FP9dwtd39o%2BtQKuXiFQAdVunr5Cs90lknpOkhfLBtchM%2BpDz%2BooSizgi01B1cOAl0EMlLuP%2BfivByvul9hwmFNz%2BIJ90WypSzQ1%2F0%2BdrUAbDpyaK3CaHrN9%2BuNy1JrMcswkKkmBht%2FWp62Q8lm70cwuSEsvoNfDr9vyTCeeMzoORvKTps16oS7T3pgTkQ2wyRyzZcbgFqq%2FZB%2BMPem0MkGOqUBku0yF%2FQr8lhX5z0yrbTIg5JGC2eA%2FEqRcciuZAM%2FzcniOvB%2BuOQ8%2BYZXg1%2BhVk%2FOCYt%2Fl9tWj%2BeSN8VH5KdYwxUlMz2H9tKYuVzVLqs3pAVaAzIldkky9vgaC07k%2Fd0bWJjuSTlYMtiCMrWnROmvqsduRS7gLssP9003M6xXCqb5pzEhOejssUvPrLlTAW5zROLGgdzX0vnQ4%2BVIqwR2ZtDc8fAm&X-Amz-Signature=9e0080a9d7f403f23d77b9e4bde56c562d9cdf367e76b738f8b2daf4dd6181dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623NKPPBQ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T132216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCOecrwm7Axw1LOjdd02pQwUhWFBGhieLdzPwb0EhnslAIge57b9X2bDRSexe6O8U8jaYUd48W2J9%2BBKQ53o9FHVs0q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDKy6CgRAx%2Ff%2B0zmy4SrcA%2BhAUDQ9B7zOit5x61YHRVDK87n7jEBdf6nifqIN%2BuxQPlBgU%2F2Tz6QqO8MR2f%2BwGq5ebSdRqqJSZ6KWtDmy6jj29Fozgh0W9ZuEMgb3wAy2Ls7h%2BXm%2BGiG22Gmy4tpV8yo0GuUdB2AKNo29DyO7r1CYxzag5T1AVkk7h4uturn%2BxW%2Fxa0lyRXLT%2FZYTQ8ZS6nrpE2%2FB86XWY3bTJ%2BSzfLoS%2FnbbWIaVFnqvkwWIMXMNoWYA15EJe82srfrFnAbrPYGCgSY5aopzggALAtPbPKIxzJ2NyqpmovAoQ%2BkYOek%2FZzKp7mLGMwy%2FuJTTMQyntgmxba1bU%2FxU5FoogaccIpXEQOg%2BsIR808aBRTyd287%2BrkrFNIxQxrpAQs3hEOBsuxq%2BPGPfogohK8lHks%2FtDuqgjPhFU%2BceH90b60gRJ2gER3%2FP9dwtd39o%2BtQKuXiFQAdVunr5Cs90lknpOkhfLBtchM%2BpDz%2BooSizgi01B1cOAl0EMlLuP%2BfivByvul9hwmFNz%2BIJ90WypSzQ1%2F0%2BdrUAbDpyaK3CaHrN9%2BuNy1JrMcswkKkmBht%2FWp62Q8lm70cwuSEsvoNfDr9vyTCeeMzoORvKTps16oS7T3pgTkQ2wyRyzZcbgFqq%2FZB%2BMPem0MkGOqUBku0yF%2FQr8lhX5z0yrbTIg5JGC2eA%2FEqRcciuZAM%2FzcniOvB%2BuOQ8%2BYZXg1%2BhVk%2FOCYt%2Fl9tWj%2BeSN8VH5KdYwxUlMz2H9tKYuVzVLqs3pAVaAzIldkky9vgaC07k%2Fd0bWJjuSTlYMtiCMrWnROmvqsduRS7gLssP9003M6xXCqb5pzEhOejssUvPrLlTAW5zROLGgdzX0vnQ4%2BVIqwR2ZtDc8fAm&X-Amz-Signature=54efa8be7087660660e0a4a97293918c96e2ed6c107ff4471dcc9f33cef6a504&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

