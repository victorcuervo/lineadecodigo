---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRLGBGQY%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T082116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICEPhAVJb%2FCqA7qKnG7OzPz3kajGKgwylZEq6pdzyDj6AiEA5fLj3geT3ajrL43rmSywux3X%2Ffuc0vfjAgX8bhAuFgIqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO%2FMQ8%2FJXkNubyKWfyrcA7cIhSFB4n2392Tn74G9UG4VnVrjM26r481Xa5gATVEc6egC%2F8z0Vxk65U4FVKcvse0fL9sJEC036zximZlT8PHBm7xAbZG3%2BPmDg6k7zTMpiNsHj1TsRjCplxitsVo5HV%2FLIDrRnMHFfVDH0B9drb7oRHmouXakttQWU7ht0NK90R%2FAGfIsaB3Ery2i1L4lpxXcdcZUlXjaNRrW1LXukn7Gpb8D5Eiczof4g%2F0q0RKtLH5yw7b3aI23AJBoC%2F4IP%2BKas8P5g14uT%2B5jXx%2FIRt%2BXAC91yopcNTqE%2F%2FBF5MPTQYbqJr8%2FplCzCuG3HqVs5mL08QW71jl7THOuOS1zxKZ04AnJYrnUSKwFZigrOUfOXY1Bso2AsCKB2QhOssq%2Fsj2Nd%2B2JarsNQnJXqsLuQrQ1iGYbRvN5rNsR38%2BWdrGpPsS5sEY0NvDF%2B8omiHSHvOFafk0t2zTmK%2BOWaQGMNly7T%2BDCeWpFA8IFxDrrJKgqAewv2mcB95jWOoAKo14rutt3QfVNZqmP0N8iLU4yGP2MVXjoDMH6XhfIHpgaXbJ38klGvDvyz9CwWElE3dYaHnLus8JlQjebyttch6vgDWJ6hMJ34rcvWQIy2utfj29I0DtVXpih81KCLnc3MPKd1MkGOqUBJJZyalqoHUP3zCJL8V8q4JmBYj0inLERIjzHD%2BR5HC6kBL5M9O2GfqkK8zDiCjLmxsYF8dsiPlzh47NXRDpaxtufHqBdfMoSsReuGuuIKr1UINA4BvPuah133g9%2BtW9ExB5%2BvoAiIS05aZBEqNdoIgIUZ7G5cWbjR4KWEyRnMKiaXRT%2F8AzZwyNiVLrgLfhj7phOu83EnEOqeLIhu7D4i%2FEvsaII&X-Amz-Signature=12cd455e68c4a097b3054b7b7e1fb9ab0264575e682222da42854b224871abb2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRLGBGQY%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T082116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICEPhAVJb%2FCqA7qKnG7OzPz3kajGKgwylZEq6pdzyDj6AiEA5fLj3geT3ajrL43rmSywux3X%2Ffuc0vfjAgX8bhAuFgIqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO%2FMQ8%2FJXkNubyKWfyrcA7cIhSFB4n2392Tn74G9UG4VnVrjM26r481Xa5gATVEc6egC%2F8z0Vxk65U4FVKcvse0fL9sJEC036zximZlT8PHBm7xAbZG3%2BPmDg6k7zTMpiNsHj1TsRjCplxitsVo5HV%2FLIDrRnMHFfVDH0B9drb7oRHmouXakttQWU7ht0NK90R%2FAGfIsaB3Ery2i1L4lpxXcdcZUlXjaNRrW1LXukn7Gpb8D5Eiczof4g%2F0q0RKtLH5yw7b3aI23AJBoC%2F4IP%2BKas8P5g14uT%2B5jXx%2FIRt%2BXAC91yopcNTqE%2F%2FBF5MPTQYbqJr8%2FplCzCuG3HqVs5mL08QW71jl7THOuOS1zxKZ04AnJYrnUSKwFZigrOUfOXY1Bso2AsCKB2QhOssq%2Fsj2Nd%2B2JarsNQnJXqsLuQrQ1iGYbRvN5rNsR38%2BWdrGpPsS5sEY0NvDF%2B8omiHSHvOFafk0t2zTmK%2BOWaQGMNly7T%2BDCeWpFA8IFxDrrJKgqAewv2mcB95jWOoAKo14rutt3QfVNZqmP0N8iLU4yGP2MVXjoDMH6XhfIHpgaXbJ38klGvDvyz9CwWElE3dYaHnLus8JlQjebyttch6vgDWJ6hMJ34rcvWQIy2utfj29I0DtVXpih81KCLnc3MPKd1MkGOqUBJJZyalqoHUP3zCJL8V8q4JmBYj0inLERIjzHD%2BR5HC6kBL5M9O2GfqkK8zDiCjLmxsYF8dsiPlzh47NXRDpaxtufHqBdfMoSsReuGuuIKr1UINA4BvPuah133g9%2BtW9ExB5%2BvoAiIS05aZBEqNdoIgIUZ7G5cWbjR4KWEyRnMKiaXRT%2F8AzZwyNiVLrgLfhj7phOu83EnEOqeLIhu7D4i%2FEvsaII&X-Amz-Signature=c59ca4e58a79f5b5e4e0d5b881ab59dac630994a4c02f163f6c95334da6fdaa4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

