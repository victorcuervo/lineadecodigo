---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665REACBHS%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T092652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE9MQTJv0zh%2FOP7ugeWQZP3V07NaQjJniMJQkxdMi6YjAiEA90fbbVEqztWxTM3kEt%2BU4MRGiJYTIwv4MZvL2DgYv9gqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEFImFr7%2FHch7HR4NircA95BqwzT9LY8meyxJRWczBWFYLVEVyprfexvRMAVis0eJVULltiXaS0oLp120ip9ck8A%2FbSEMBq6Qa%2Fb%2BkoD689%2F0AdnAM0PRVP1ZZwDALEN3WfOvgVt7uR%2FMcbxQDexZAwhhb59FIlfVfI2hUt4V84ci7ZhvLnzYBABr9oOqjhoqi3AW7vGhF3r9YA80LETq6ujaN1AdZLrhVoVlWbjmgBylZ64gLC5QlgQwiBUgIcZEoiqlezmfNexFJqmU%2FPlKxSBo3udMKJ5NXlMiuI1az%2FaYj43AliaHGEi32BqDGCpcLxiURZeu167SLJeg3wrvqQwaDnWVenKaNfvLfNrmk5hAnrh6pGRYEt52lzrmxT%2Bbg7J2aBKlZeJ8eGhw2OfJPORfu7ZjkE3IY8xfwgttu0QEUJ6f7fltCby6gvCq2FRgU3Cb7w4ZOmhmxiQpAQEa0esmq23mq9pk4Vg80WTwwSo3bLTSl0MuLgm75kZqd3RnHLJ8xE67yeCmdXo6D6uqVSryRFxSyhToiMbLS9UaKQLrMaGUE6ve7dUNXAicPXAfL4xCgfsMc4jJVgD0%2B2Sbytp84ml53kHna6eRA7z60YmyRPTz2s7skrFfBikX48DqniJHai6O3ixa%2BOtMKTD38kGOqUBS7X3E3XCFq1G2DGakp%2B%2F8JNEHpS7TzM%2Bcj%2BFx%2BRgsqlpntUlwlziX5Oq40in79bw0s0ZxkcsQpsbMT2wrRbXj2gADFL6YFoQyMc%2Fv71NUIkCeaCHDnHc5fF69mMaRxnoaQbJjcshMfngTk3nEKfyn3%2F8PyqYhs8UsAaqP%2BIvtfCQ59fh5oaIvIJNWI%2FRahmO2T22WN6v5F1NeaPUzz43fErrAwll&X-Amz-Signature=206aa1be66de4004ef1f7a10a85687c0a9f76d3eb23038e04f58efe397629255&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665REACBHS%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T092652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE9MQTJv0zh%2FOP7ugeWQZP3V07NaQjJniMJQkxdMi6YjAiEA90fbbVEqztWxTM3kEt%2BU4MRGiJYTIwv4MZvL2DgYv9gqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEFImFr7%2FHch7HR4NircA95BqwzT9LY8meyxJRWczBWFYLVEVyprfexvRMAVis0eJVULltiXaS0oLp120ip9ck8A%2FbSEMBq6Qa%2Fb%2BkoD689%2F0AdnAM0PRVP1ZZwDALEN3WfOvgVt7uR%2FMcbxQDexZAwhhb59FIlfVfI2hUt4V84ci7ZhvLnzYBABr9oOqjhoqi3AW7vGhF3r9YA80LETq6ujaN1AdZLrhVoVlWbjmgBylZ64gLC5QlgQwiBUgIcZEoiqlezmfNexFJqmU%2FPlKxSBo3udMKJ5NXlMiuI1az%2FaYj43AliaHGEi32BqDGCpcLxiURZeu167SLJeg3wrvqQwaDnWVenKaNfvLfNrmk5hAnrh6pGRYEt52lzrmxT%2Bbg7J2aBKlZeJ8eGhw2OfJPORfu7ZjkE3IY8xfwgttu0QEUJ6f7fltCby6gvCq2FRgU3Cb7w4ZOmhmxiQpAQEa0esmq23mq9pk4Vg80WTwwSo3bLTSl0MuLgm75kZqd3RnHLJ8xE67yeCmdXo6D6uqVSryRFxSyhToiMbLS9UaKQLrMaGUE6ve7dUNXAicPXAfL4xCgfsMc4jJVgD0%2B2Sbytp84ml53kHna6eRA7z60YmyRPTz2s7skrFfBikX48DqniJHai6O3ixa%2BOtMKTD38kGOqUBS7X3E3XCFq1G2DGakp%2B%2F8JNEHpS7TzM%2Bcj%2BFx%2BRgsqlpntUlwlziX5Oq40in79bw0s0ZxkcsQpsbMT2wrRbXj2gADFL6YFoQyMc%2Fv71NUIkCeaCHDnHc5fF69mMaRxnoaQbJjcshMfngTk3nEKfyn3%2F8PyqYhs8UsAaqP%2BIvtfCQ59fh5oaIvIJNWI%2FRahmO2T22WN6v5F1NeaPUzz43fErrAwll&X-Amz-Signature=6ddae07279878cb3a00fa52b8a7c2e440c6646cae77949f8cf994a1f12903403&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

