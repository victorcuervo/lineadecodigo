---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKJP2M3L%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T051258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCHyVMy7n7hGSiJHzmnbTASrIn7SEolDyUXUnb7w3%2FOwYCIEIzJ%2B2mOf7Kg30C4MD5v4H6IoLt5jDha7FP51Sy0jGjKv8DCFUQABoMNjM3NDIzMTgzODA1IgwVN9%2F7IKGj4ocl6xMq3AO7d4fixo5MHPQeSMvUNARO91F9Le3maUSnxgwwD1bIYjQ0ni8mf%2FeMHA5tgcFhRe2se2m3rHIukhh%2FFMfItcpj4gOEyPkC%2FHdKb725dYfkp19cHZV66ujiFTQLyusxV%2FQsNxua5ZePLecb7g9BU1oACPTpQQrmnfCg9ymjOQjaEaVUtkR88QpDxhV8yBTVoDDxGPowJ%2FSZdNqQ33XMWo3%2FJVGlyKuGsxhAl12rXasXhpy2KNlsgDqVk3%2BsOqM1B7wlcjjVOLm4k%2FYNTNc1s0uLuAEfy%2BH0PYQBcn4JDYITyPBCIidV8KVR4sLPPh8jdbUuweFLDPEQxZJHn%2Fu9ayRlM8G%2FXVFXWXwTy17aiYbkK01vO0vyjn4b4ISYvlWL2203bO%2BZr54GhnLNFWqEZoFDESmuXRdg%2BnD0M3Sd30WCsxpRQsVeafD1JULG5%2BjTzOnl8zrglMJB3FKgOHxoIKHvl56EU3eyEic7Q0ypo9ABdfmuBNnvf4XBo50J79PYst%2F6AlE%2F%2BQddl%2BUjCCuUuex6mej7xcZ3Cbg0UiNi0FdWnl5HrZnsnKm7XcqIBTymgXYhx%2BWyb7Ld6FW6%2F8nomV1tptHcGAs7C23CmgUUquq6xBjVKKEl%2FsU%2Bep1ilzDErMnJBjqnAYJmxCAG8K%2BKFEvvhbOmWmD5eK50rOWT5w%2F6cfd2niuIR%2FvD1KAb%2FMFJJjWEDwPlJgqnkksQR2e9k6hyNLkSXs7mf6eqrYKM6Xtr4ewagi11%2BnDCpgyiaXouVqLGXXHu5nT93aHDAM9OMmLn3Zb2zzeoNoq%2BK81Y6SQj1IgH19%2BPnYCFZGJU93bTeUdiXu%2BV%2F1LFiTEGpPY7f5FyJmbmH00NRnpyKy0e&X-Amz-Signature=1aa2603c68dace83aef0552dd43d5b9b80e77fbe58402fd83b05fcc33ece3d36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKJP2M3L%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T051258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCHyVMy7n7hGSiJHzmnbTASrIn7SEolDyUXUnb7w3%2FOwYCIEIzJ%2B2mOf7Kg30C4MD5v4H6IoLt5jDha7FP51Sy0jGjKv8DCFUQABoMNjM3NDIzMTgzODA1IgwVN9%2F7IKGj4ocl6xMq3AO7d4fixo5MHPQeSMvUNARO91F9Le3maUSnxgwwD1bIYjQ0ni8mf%2FeMHA5tgcFhRe2se2m3rHIukhh%2FFMfItcpj4gOEyPkC%2FHdKb725dYfkp19cHZV66ujiFTQLyusxV%2FQsNxua5ZePLecb7g9BU1oACPTpQQrmnfCg9ymjOQjaEaVUtkR88QpDxhV8yBTVoDDxGPowJ%2FSZdNqQ33XMWo3%2FJVGlyKuGsxhAl12rXasXhpy2KNlsgDqVk3%2BsOqM1B7wlcjjVOLm4k%2FYNTNc1s0uLuAEfy%2BH0PYQBcn4JDYITyPBCIidV8KVR4sLPPh8jdbUuweFLDPEQxZJHn%2Fu9ayRlM8G%2FXVFXWXwTy17aiYbkK01vO0vyjn4b4ISYvlWL2203bO%2BZr54GhnLNFWqEZoFDESmuXRdg%2BnD0M3Sd30WCsxpRQsVeafD1JULG5%2BjTzOnl8zrglMJB3FKgOHxoIKHvl56EU3eyEic7Q0ypo9ABdfmuBNnvf4XBo50J79PYst%2F6AlE%2F%2BQddl%2BUjCCuUuex6mej7xcZ3Cbg0UiNi0FdWnl5HrZnsnKm7XcqIBTymgXYhx%2BWyb7Ld6FW6%2F8nomV1tptHcGAs7C23CmgUUquq6xBjVKKEl%2FsU%2Bep1ilzDErMnJBjqnAYJmxCAG8K%2BKFEvvhbOmWmD5eK50rOWT5w%2F6cfd2niuIR%2FvD1KAb%2FMFJJjWEDwPlJgqnkksQR2e9k6hyNLkSXs7mf6eqrYKM6Xtr4ewagi11%2BnDCpgyiaXouVqLGXXHu5nT93aHDAM9OMmLn3Zb2zzeoNoq%2BK81Y6SQj1IgH19%2BPnYCFZGJU93bTeUdiXu%2BV%2F1LFiTEGpPY7f5FyJmbmH00NRnpyKy0e&X-Amz-Signature=2e46d2ce0c5117695355e58e804286a8a150e3927e3ae2bde84be149abe02faf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

