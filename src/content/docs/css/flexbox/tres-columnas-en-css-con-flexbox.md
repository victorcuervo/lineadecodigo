---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHLG2OO7%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T205329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA7crEER4HYZ2ByPk077IZ6K%2Fs%2BDFDnWWA38v4ACZgapAiEAnzLHFnl30r9wWDsMNTmnZ7vKXnXFTtsp9P3AvmdVrUoq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDMXnuKhEEryXhdWFxircA%2BdurZio1iMAHm%2BaaKbZkb4ZfFxYnpV1bmMvd6Cbs3Jmh8tWxmMs72YukAhODBLap5J7Z2F%2BsHRZ42tGyH77mGB7ulTtudJAJz19H3xqT61YYm5FJSSV0GL4UNLY13SjuPTiKiahLXAWeOwu%2FrnBRikPRIJ3aG1XTUN2NNc0gRsZMxg6%2F66osdCAuXYs1M1%2FQXM%2BJls6bWzNpjy%2FwqMa0c8lZWahXhlDnKFVquRYidglOCcUPynk%2FFH62N9smAIrXWX9x1%2B33WCcVrYG%2FOLh8c4BnOQ%2B4P%2FofHJ8yxOfP6VbFfLKLlbC5BwejaERZjddsuOgbRGm6LCj7bfACm3wmnM640U%2FsmH3njRYBtIeZaYjpICnkoKIn%2FmAdMgzlZ17lEIsvk7o6z6imiaKiPG83LAFvh4YDB3NC1lWIQCm6%2BuVsdETgl0orW1XVOIUBHWnAhw%2F%2FEuDiSowfgXfZeWml6JiJHEoE9i4DMMNz4ag8vXtutK%2FVd8lLS%2Fz1pwUHveCxzJShFX8e%2FqSlh6iUce1r4UCMqsFoLeiv7XN45dqVW25hFwJAp61b3OJJVTr8i77Ax9RrJiXysUMM0BM3dqwNmq5FwFlgn5co17SdjYNBSltpRKDto%2BQW91JqpZgMOiGzckGOqUBI1gg%2BtjqCllwVBQ1SsatxSD9ik5mfmEVzXVWvHTnfEC2Un%2BZQKVCfgEw0lVq8yblzVLl7rxUmeZbRw8Y16%2BABf3aVUg912XyNqoyv8gU8XSZEcdqFCebOJnYGCBE4FMPGN37lBg%2FEaKgFagrZ%2FfrDHfPnsQqL2ULcQXMA8%2ByzT5ro%2FMp%2B3skbTob8bwpDo%2FLUu9L%2Fs2vmi4%2FtcQBEnlWe%2B8o1j0A&X-Amz-Signature=9f71bc934ed1db7462913003a939fe6dbd407de409688886c3c0b0411f74f0f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHLG2OO7%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T205329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA7crEER4HYZ2ByPk077IZ6K%2Fs%2BDFDnWWA38v4ACZgapAiEAnzLHFnl30r9wWDsMNTmnZ7vKXnXFTtsp9P3AvmdVrUoq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDMXnuKhEEryXhdWFxircA%2BdurZio1iMAHm%2BaaKbZkb4ZfFxYnpV1bmMvd6Cbs3Jmh8tWxmMs72YukAhODBLap5J7Z2F%2BsHRZ42tGyH77mGB7ulTtudJAJz19H3xqT61YYm5FJSSV0GL4UNLY13SjuPTiKiahLXAWeOwu%2FrnBRikPRIJ3aG1XTUN2NNc0gRsZMxg6%2F66osdCAuXYs1M1%2FQXM%2BJls6bWzNpjy%2FwqMa0c8lZWahXhlDnKFVquRYidglOCcUPynk%2FFH62N9smAIrXWX9x1%2B33WCcVrYG%2FOLh8c4BnOQ%2B4P%2FofHJ8yxOfP6VbFfLKLlbC5BwejaERZjddsuOgbRGm6LCj7bfACm3wmnM640U%2FsmH3njRYBtIeZaYjpICnkoKIn%2FmAdMgzlZ17lEIsvk7o6z6imiaKiPG83LAFvh4YDB3NC1lWIQCm6%2BuVsdETgl0orW1XVOIUBHWnAhw%2F%2FEuDiSowfgXfZeWml6JiJHEoE9i4DMMNz4ag8vXtutK%2FVd8lLS%2Fz1pwUHveCxzJShFX8e%2FqSlh6iUce1r4UCMqsFoLeiv7XN45dqVW25hFwJAp61b3OJJVTr8i77Ax9RrJiXysUMM0BM3dqwNmq5FwFlgn5co17SdjYNBSltpRKDto%2BQW91JqpZgMOiGzckGOqUBI1gg%2BtjqCllwVBQ1SsatxSD9ik5mfmEVzXVWvHTnfEC2Un%2BZQKVCfgEw0lVq8yblzVLl7rxUmeZbRw8Y16%2BABf3aVUg912XyNqoyv8gU8XSZEcdqFCebOJnYGCBE4FMPGN37lBg%2FEaKgFagrZ%2FfrDHfPnsQqL2ULcQXMA8%2ByzT5ro%2FMp%2B3skbTob8bwpDo%2FLUu9L%2Fs2vmi4%2FtcQBEnlWe%2B8o1j0A&X-Amz-Signature=a8d33f81d9cc9a0f000e2eceb407b00173cff53c9a17b30eff437dd7ba00b9cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

