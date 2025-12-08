---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667SIRBCN%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T181838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfDf9NMnC%2FxJwiUm7DyM7Xaky5C5F%2FzqleQfFwKSA6mwIgCzA5V0Pn6%2F6BBSuc5J%2F6nXekS7Yvlq5EABexz6vvOmsqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJGuXCMaUEWvM%2BjmwSrcAy16%2FaN%2FVJzgv1%2B6oN5adK947mj9thnf13jVEQZeEsWev4%2Fp2Flqj51K1AvrCRRo%2B1WAD1Q0tFCRYg7jSh4YUvvlGzBIxeV%2Bg4GYn9shEg0un2XESfJ6j%2Fzuz1L4Z0L%2BbiEuKCj5Eh5B%2BcSYeSTmSJIWgScsMTgL2XfHbS397kB1PwQVAnhPw84bdmLF6%2B7f1b5LB7VEwRQfD1UGAHjGBg4py7%2B3vOC2JHYD0%2F9WrQMfDVfcNEgtGGCl1a5hVVTJehx7SyMxkob22Z3dZcUIXcvnH5NmhvsO4Bxi1srj1HbY8I%2Fxaa3uWx3tRu%2Fe5DN%2FCDEDGCIVo9pLxHJA2aviKsftbrkvWbDI35qJGMksUCWg7KpggJIZBN6AFuVpf36ihIURfARJF9TICHEBqOdxs16%2BCiRSXk%2B%2FsnettVtc35xXzUU8uqx4lBRG%2Fgcr5HpN6KLqkt6MHGItjzICAqX20kZy3EmvcG4oXBaYJb2dO%2Bcld13%2BgWKU5%2Bq0U9bMtyX8cqwJL4cJ5J8dAho3pJFSDdW5PaQdYpY6%2Bwax8jD97TCeHKAv4rI2bCk0WsBpyhT7lKRCSShDK8LBLSqSvmTlV%2BkUjAmzXiDUrK1Sm8wHnUGSrZRku4ih7WgstCYmMJeH3MkGOqUBATIdq9OAruazLjv%2FW4V6upEkKVDafkuGlkeKgInpOm%2FRAy2DrxhUOY2agxX9rhGM%2FRLERH%2FEnqPKgTNQ45hJT0weIrJGL6TJS20Qu8awkLQCGn387R2oTym%2FRYKwMGxnRqW4iM1hcl5qGvWFPOoVoUYWoJmSM4aOcsvNEwT9g%2BnXkt3nrga7B%2FEXLy1RqvDNs4HJRULFoZfjUJTOJgcG2ymU3lTT&X-Amz-Signature=83138a2ff303d9e6ef54ea837d1b7042827a2e83e99b7b8b21fb9ec902ca1e97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667SIRBCN%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T181838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfDf9NMnC%2FxJwiUm7DyM7Xaky5C5F%2FzqleQfFwKSA6mwIgCzA5V0Pn6%2F6BBSuc5J%2F6nXekS7Yvlq5EABexz6vvOmsqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJGuXCMaUEWvM%2BjmwSrcAy16%2FaN%2FVJzgv1%2B6oN5adK947mj9thnf13jVEQZeEsWev4%2Fp2Flqj51K1AvrCRRo%2B1WAD1Q0tFCRYg7jSh4YUvvlGzBIxeV%2Bg4GYn9shEg0un2XESfJ6j%2Fzuz1L4Z0L%2BbiEuKCj5Eh5B%2BcSYeSTmSJIWgScsMTgL2XfHbS397kB1PwQVAnhPw84bdmLF6%2B7f1b5LB7VEwRQfD1UGAHjGBg4py7%2B3vOC2JHYD0%2F9WrQMfDVfcNEgtGGCl1a5hVVTJehx7SyMxkob22Z3dZcUIXcvnH5NmhvsO4Bxi1srj1HbY8I%2Fxaa3uWx3tRu%2Fe5DN%2FCDEDGCIVo9pLxHJA2aviKsftbrkvWbDI35qJGMksUCWg7KpggJIZBN6AFuVpf36ihIURfARJF9TICHEBqOdxs16%2BCiRSXk%2B%2FsnettVtc35xXzUU8uqx4lBRG%2Fgcr5HpN6KLqkt6MHGItjzICAqX20kZy3EmvcG4oXBaYJb2dO%2Bcld13%2BgWKU5%2Bq0U9bMtyX8cqwJL4cJ5J8dAho3pJFSDdW5PaQdYpY6%2Bwax8jD97TCeHKAv4rI2bCk0WsBpyhT7lKRCSShDK8LBLSqSvmTlV%2BkUjAmzXiDUrK1Sm8wHnUGSrZRku4ih7WgstCYmMJeH3MkGOqUBATIdq9OAruazLjv%2FW4V6upEkKVDafkuGlkeKgInpOm%2FRAy2DrxhUOY2agxX9rhGM%2FRLERH%2FEnqPKgTNQ45hJT0weIrJGL6TJS20Qu8awkLQCGn387R2oTym%2FRYKwMGxnRqW4iM1hcl5qGvWFPOoVoUYWoJmSM4aOcsvNEwT9g%2BnXkt3nrga7B%2FEXLy1RqvDNs4HJRULFoZfjUJTOJgcG2ymU3lTT&X-Amz-Signature=ad48987634ad5dde7049f6ef64a623a6f570551c7d7ac342f285951b4f44f16a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

