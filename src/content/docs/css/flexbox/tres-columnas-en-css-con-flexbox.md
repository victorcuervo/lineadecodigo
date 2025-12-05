---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4MUYDLF%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T181241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDSeX2xS0rP87qntBSu6KwxJvAQPdxkZU%2BF0x60aLX2JAiEAzDSqwaHIy2z%2BTEr%2BwisZvFmHuBMYD9QKZ5PCkdJwN9Uq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDMuIdlZwKEuQGa0uhyrcAyLyEnsWdAN0kdmf0kkxBOIA362ZXSTV15s24D6YrOqik6Oy5Ls5VmwVfzTFFEWN%2Bd9SgI5ihiIBlFEI1qsH5g0wbVYXuSTP0u0G5MjigUIx5sA%2BWwPtOXlwgBtvX3%2FO4fV7YMCHaqB5atVr%2BNpIySSfhOpWaVeYjQnf0diKDghvdwAQe%2BWrwXRDbEiWvKpnqtfhtA3mcpduENq1vdm8CIihjpEsWNUaioIe69fd3VaSTGATCkkhlxWY%2BJmHXF11rbZWjzTyVgrWo3hT3TfBAdRAW8g17JrhCKC%2B4LeSxlswHrPPeIvkg%2BWBe8VMw6Oh5WEq3i4Vv9AlG1hc8NiG5%2BquiE1n72vrb9vD9Dad5aJT8jfYYK1OmtD53WE653D1axoaiJR9E1lfduSI8vyTF8BEGpcunphc6%2Fowkw1edLOTnSqRLfXKt70ZwsHVbeHSgsse75klsJnSabZxGRdw%2FUCoPd60bDbo4KlB8EH6YWzeeX7ejqMiOCNgqzcRbYyDG%2FpTcxHFqsy%2FEEZtY9uNwDeYLVcRvzE2UVpLD%2FWblSCOWioNnxJ92KeeEbLE8bL4hgq2RsKSYpejOMOQKmrHB4aqlLmT1fgW4r8NJ8V9mITPwzpKnVzLs%2F2m%2FVo6MKLvy8kGOqUBkn1uufg%2FCWzhnL7093ydcrS8GshlzFJ7mOXG0UECVQElm0sfXqmRivO4NAoZayY6zzjNPtOxwxl7%2F9YOj8auag4v2%2BF3nY83PyVYNbZsIPA5oxQPsH0aijIOx71i2MjOsjwospo47oBiIgjZeFNVDgiKq8CEfUhSrz%2FptxwGHjCOxS7CMKnD25KjJwtco%2BWyLwdv1v54D27%2BwWM26LJAvQY7W6HF&X-Amz-Signature=67e31d0ae6c69270f544046000bc2bdb61f06917eca6e7403b10eb92bbcae347&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4MUYDLF%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T181241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDSeX2xS0rP87qntBSu6KwxJvAQPdxkZU%2BF0x60aLX2JAiEAzDSqwaHIy2z%2BTEr%2BwisZvFmHuBMYD9QKZ5PCkdJwN9Uq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDMuIdlZwKEuQGa0uhyrcAyLyEnsWdAN0kdmf0kkxBOIA362ZXSTV15s24D6YrOqik6Oy5Ls5VmwVfzTFFEWN%2Bd9SgI5ihiIBlFEI1qsH5g0wbVYXuSTP0u0G5MjigUIx5sA%2BWwPtOXlwgBtvX3%2FO4fV7YMCHaqB5atVr%2BNpIySSfhOpWaVeYjQnf0diKDghvdwAQe%2BWrwXRDbEiWvKpnqtfhtA3mcpduENq1vdm8CIihjpEsWNUaioIe69fd3VaSTGATCkkhlxWY%2BJmHXF11rbZWjzTyVgrWo3hT3TfBAdRAW8g17JrhCKC%2B4LeSxlswHrPPeIvkg%2BWBe8VMw6Oh5WEq3i4Vv9AlG1hc8NiG5%2BquiE1n72vrb9vD9Dad5aJT8jfYYK1OmtD53WE653D1axoaiJR9E1lfduSI8vyTF8BEGpcunphc6%2Fowkw1edLOTnSqRLfXKt70ZwsHVbeHSgsse75klsJnSabZxGRdw%2FUCoPd60bDbo4KlB8EH6YWzeeX7ejqMiOCNgqzcRbYyDG%2FpTcxHFqsy%2FEEZtY9uNwDeYLVcRvzE2UVpLD%2FWblSCOWioNnxJ92KeeEbLE8bL4hgq2RsKSYpejOMOQKmrHB4aqlLmT1fgW4r8NJ8V9mITPwzpKnVzLs%2F2m%2FVo6MKLvy8kGOqUBkn1uufg%2FCWzhnL7093ydcrS8GshlzFJ7mOXG0UECVQElm0sfXqmRivO4NAoZayY6zzjNPtOxwxl7%2F9YOj8auag4v2%2BF3nY83PyVYNbZsIPA5oxQPsH0aijIOx71i2MjOsjwospo47oBiIgjZeFNVDgiKq8CEfUhSrz%2FptxwGHjCOxS7CMKnD25KjJwtco%2BWyLwdv1v54D27%2BwWM26LJAvQY7W6HF&X-Amz-Signature=04e96fa6e31930ed3c06ee0e4a857eec2fc986b262c27fe787db7cf2430ae1d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

