---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDADC2WQ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T064035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE590zrxhN5YoFlsWrgchnODDwchRuPQ4mu1s1fK1stLAiEA6mqQ5PhDoezALcB%2FHPhWyw7J%2BMVWHjdgYFhlB8PfGAoq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDEXE6kEjHuNYsVOxgircA5LilUIwy0GnhpKtyz0ROZR%2F%2BS80oTkDc7D6gEHOMBgAR71jY7oEY7Hx0QIVjeZ51jBoeVYMdcOhuz6Ajux%2BgSqA2xEV9Ftc1ChHC4pbDMTjAW%2BAVLMmdGdrovmeH5%2BsDQAP9UBdUwRClRGoLsXdY%2BXmXo55S7gQqvcBOD9E2dfIqdLB5OZ9HOIl97ZLBjmXGM7UvFuOQWVtsmuu2jpzT4T6ZZhDIof2Feek8VSUGcSUZmISAAGeB2S4cajOx5e1Bwcwk0VKG%2BtWFkuAxKxr62%2BUqpRtM2SH7Fu2z3Ga%2Bj6hordSZPtzN6OVg1xu6eAIXvpJcTfZgr2THwA72QtfibZs1NlPPXNIXgVftZpVadQpUPg%2B2u05JufEaljZ%2BvgH7PZAOpfA1KDHq01SXZ57Au2D12%2BmVBT1fSSFJt99f7rWZnCb8ypgf%2BhyFHmrwU28eqp1PuYpjDdwU3d57exhKVfL2eXM2krpu1xc7Rpak5MPO10NxGR7Qwb4kBXSBlyLxlo9ULEByQ9hK3eWD3QaoVT4%2FDO1MmDDBvz6Uk2Vm3wxzjtnthfwBjGN6Shox84QsV16e3G89m3JnCk1w%2Fxrsp4iQ9i8%2FK4CgHed0hVZKyvC23Fs1GQ6btwIrGPBMI6yyckGOqUBWQRf%2FAZdT6AFGuGl%2Fhqf9TIWqoo5G%2BVYDgfaxwJEuK5Qpe6RyCKM92O6XWt%2BYPMzwFeQv8d4fYianzIyIqVH0fOY7fmzzIHv13%2BXOxIf%2BLleSGZHwtfGsaEjCpY9VP%2FEysBFpAGADwoa%2FzAJ4cuzaK0Y5Yacd%2B8aMvhGNR%2BIMetK%2FHoBRnN51dGlmtkkQtzq4R0UT%2FUPVzLgW47aXYLIT7PI6sbf&X-Amz-Signature=f50e87239ad325d2a8d726e57b41c51a256cefacd1c4b2b94bc2f583eee51246&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDADC2WQ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T064035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE590zrxhN5YoFlsWrgchnODDwchRuPQ4mu1s1fK1stLAiEA6mqQ5PhDoezALcB%2FHPhWyw7J%2BMVWHjdgYFhlB8PfGAoq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDEXE6kEjHuNYsVOxgircA5LilUIwy0GnhpKtyz0ROZR%2F%2BS80oTkDc7D6gEHOMBgAR71jY7oEY7Hx0QIVjeZ51jBoeVYMdcOhuz6Ajux%2BgSqA2xEV9Ftc1ChHC4pbDMTjAW%2BAVLMmdGdrovmeH5%2BsDQAP9UBdUwRClRGoLsXdY%2BXmXo55S7gQqvcBOD9E2dfIqdLB5OZ9HOIl97ZLBjmXGM7UvFuOQWVtsmuu2jpzT4T6ZZhDIof2Feek8VSUGcSUZmISAAGeB2S4cajOx5e1Bwcwk0VKG%2BtWFkuAxKxr62%2BUqpRtM2SH7Fu2z3Ga%2Bj6hordSZPtzN6OVg1xu6eAIXvpJcTfZgr2THwA72QtfibZs1NlPPXNIXgVftZpVadQpUPg%2B2u05JufEaljZ%2BvgH7PZAOpfA1KDHq01SXZ57Au2D12%2BmVBT1fSSFJt99f7rWZnCb8ypgf%2BhyFHmrwU28eqp1PuYpjDdwU3d57exhKVfL2eXM2krpu1xc7Rpak5MPO10NxGR7Qwb4kBXSBlyLxlo9ULEByQ9hK3eWD3QaoVT4%2FDO1MmDDBvz6Uk2Vm3wxzjtnthfwBjGN6Shox84QsV16e3G89m3JnCk1w%2Fxrsp4iQ9i8%2FK4CgHed0hVZKyvC23Fs1GQ6btwIrGPBMI6yyckGOqUBWQRf%2FAZdT6AFGuGl%2Fhqf9TIWqoo5G%2BVYDgfaxwJEuK5Qpe6RyCKM92O6XWt%2BYPMzwFeQv8d4fYianzIyIqVH0fOY7fmzzIHv13%2BXOxIf%2BLleSGZHwtfGsaEjCpY9VP%2FEysBFpAGADwoa%2FzAJ4cuzaK0Y5Yacd%2B8aMvhGNR%2BIMetK%2FHoBRnN51dGlmtkkQtzq4R0UT%2FUPVzLgW47aXYLIT7PI6sbf&X-Amz-Signature=89be8ec391a194e481526f5e7707fcbb4509f31872096965dd32a893f71567df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

