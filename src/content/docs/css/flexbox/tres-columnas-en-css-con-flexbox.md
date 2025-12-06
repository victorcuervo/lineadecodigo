---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIS7GRTQ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T110938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCaFgSEu4gjlgP2EPAEVLWvpUG9IQx0wR3A88XaFFFNNgIgFruXUaUoJ0oozIwfcPeItZLybZQ8J4N1H00gXi4NbCsq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDMPUHPESnnZtUFMqAyrcA6lBI88oRaYvqrqYq6e%2FW7OeFQLDyS%2F2SRsaHTtTS8vhBF7iz%2FEY6TbtwX8zlYcBln3gkP%2FRS30WGOM1%2Fh%2FX2hYkWRhyxcyRuAUI6xtkVIEoUHVNikwnhkp6G%2F1DdMjC4y39dcNOgs4I67Dk%2B0%2BIbyOHzQMOoaKGlg%2FyabAnO4rEUCRKE1qxF49blE3rfKmoVRITBYRdfQCDGhXFmQRbdSW84fSwNcVf5HnrJwzINollMb%2BVzWh9slM2kuFu5a9Ane8zwOZKCPdXLYgel7%2FA91SEocR%2B6mACZunWkDrp35wlZJNvz16Tv0rMH1uLcgd07zU7D3hZuKZcEw89y18en5dPYvwFoqwFDQ%2Fug5o%2FMz9Xb3RaJyZBbx3cSpPysUsbtImPM1TW6yIBTGjxYR%2BvKRGYSB0Hg3s7qsyreEgCQ97PNq2%2FzYw9mg8iF7x3AKgE30W4lPYy6uaqxqCNoMfLujuKdUZ3ngmry%2BolYRWy%2FE2tRJj3pvW1CV3RSOFy%2Ft%2FfZnXCWpEnRorczRP6c2eTMHcei5LmnnDqQ5GY7MASk67du8gldutEaSXiBFrzurC1QnQ2eVnQyR7qDgTJ0Mv%2F%2Fx7Mcxfmih0G51vwQgTCwsbMnTQDnfY%2BLPY0cJd6MISJ0MkGOqUBUCHFuz4umFY8Kg1DmP8PxDuDtD5BAYXkvaL00xv%2Fvs6zi6EPzd4500QHq5p7YNDz8J3kviUHF9x3j%2FsGOf3ms%2FQiuoyc%2FMENTgYQnlEyQnnM7OUIkDFZ%2BzC6msSu1lXGTipJBZVUBlW7lYpN4eRHJOJIec69V4rR95t085SDuA5j3E9gE2OFuWa%2BRWkcogeJF%2BdgZMySnI9Dw9iiQA140njo38QK&X-Amz-Signature=8b5ecb596e3a21080c13b67c4956de5418888d6e067ac5626fafecf5cdb40ec4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIS7GRTQ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T110938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCaFgSEu4gjlgP2EPAEVLWvpUG9IQx0wR3A88XaFFFNNgIgFruXUaUoJ0oozIwfcPeItZLybZQ8J4N1H00gXi4NbCsq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDMPUHPESnnZtUFMqAyrcA6lBI88oRaYvqrqYq6e%2FW7OeFQLDyS%2F2SRsaHTtTS8vhBF7iz%2FEY6TbtwX8zlYcBln3gkP%2FRS30WGOM1%2Fh%2FX2hYkWRhyxcyRuAUI6xtkVIEoUHVNikwnhkp6G%2F1DdMjC4y39dcNOgs4I67Dk%2B0%2BIbyOHzQMOoaKGlg%2FyabAnO4rEUCRKE1qxF49blE3rfKmoVRITBYRdfQCDGhXFmQRbdSW84fSwNcVf5HnrJwzINollMb%2BVzWh9slM2kuFu5a9Ane8zwOZKCPdXLYgel7%2FA91SEocR%2B6mACZunWkDrp35wlZJNvz16Tv0rMH1uLcgd07zU7D3hZuKZcEw89y18en5dPYvwFoqwFDQ%2Fug5o%2FMz9Xb3RaJyZBbx3cSpPysUsbtImPM1TW6yIBTGjxYR%2BvKRGYSB0Hg3s7qsyreEgCQ97PNq2%2FzYw9mg8iF7x3AKgE30W4lPYy6uaqxqCNoMfLujuKdUZ3ngmry%2BolYRWy%2FE2tRJj3pvW1CV3RSOFy%2Ft%2FfZnXCWpEnRorczRP6c2eTMHcei5LmnnDqQ5GY7MASk67du8gldutEaSXiBFrzurC1QnQ2eVnQyR7qDgTJ0Mv%2F%2Fx7Mcxfmih0G51vwQgTCwsbMnTQDnfY%2BLPY0cJd6MISJ0MkGOqUBUCHFuz4umFY8Kg1DmP8PxDuDtD5BAYXkvaL00xv%2Fvs6zi6EPzd4500QHq5p7YNDz8J3kviUHF9x3j%2FsGOf3ms%2FQiuoyc%2FMENTgYQnlEyQnnM7OUIkDFZ%2BzC6msSu1lXGTipJBZVUBlW7lYpN4eRHJOJIec69V4rR95t085SDuA5j3E9gE2OFuWa%2BRWkcogeJF%2BdgZMySnI9Dw9iiQA140njo38QK&X-Amz-Signature=ceb080e641704c299e0359298bb7b9382e3f38922facd1fe480cda04530daae5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

