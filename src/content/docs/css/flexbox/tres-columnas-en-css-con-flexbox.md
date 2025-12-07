---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHWSQESY%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T193022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDXfPdjDOXSJiYTwyTLhwtUU6K4I%2Ft6i9%2B85cgfG%2FmvuwIgKm5SAHinnPMkiVyzSz8Oue4dd9g%2BaYs2MZCUQ9yT%2BSYqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMF2BsfM96ZDdR9bCyrcA8ToO4h9MhbJdnH%2BQq%2FVSwkY5jUIMo783nA%2Bxlejkbiph2zWhAeI1TXWF5WNxn7nnI%2Fz9l%2BV9kqqRPBVrTPXzNBonCn8jduKGkkkniCyObUDnzDLKztZhXUviKDhV60ttO8p47Ket0khR2a8cvaVX2%2BAAzQWy8VTXdViiTY0uWGQn5Marl0yS3j9vWY%2FTK185h3sT0MiC2qiBeU1XHrpH02UwS7hD0akKth1GhF7VPy0Et73sw0qImfgo5p6cLkbljB9Q%2FOcReP4XH7SED2d1wQWih5Bbjy1oAHC%2BS0xa1sCrVK9vqpqnIRcbWvAalOcdI1yIeZLmQMatkGqH0vwF%2Br8V7uiTT9EQJHljlB25suchy3VWPbLsfV1CE0cAoW5x7BRpzGjVkydZ3SpjPxhKpLGXYX3PKRfyoNoY6cy26GiAgJ52aXZ7zyWDvH1elq6SUbMqDDajckieQ2o%2Finfe9vgWG8EIoNE7KQFC%2FYQTT0nQDaDKfVphEDQcQQQpV3Na9eBcYjgoCKwvW95IPFXUa5STq1psqgEuRqHMjJjdDuwb%2BnmiaVZnyMW0r1mSCaSa45AJ0qLMww029f7POUwfI9XkrA%2BoSD1JtU62OVvn7ZbTclRAJpzU%2FxPOrPUMJOo18kGOqUBHF2URTG%2BqGtlhswSxkRzTBVqbLmjlVND6XGgPSbXfrZZQopfoV4i3wBm74LE150KhrIrja2ITKuH%2Fqqm2rjNKnH8o226VELxZDvE31ZXIgoVRAMepOFRnDTKl9sRiQdZF%2F4eXBpj5D0KyQwEFQz7vOn7uhP1yvTR303UkNUDpTjWS5DJIonV6L40lU%2BlTaVs6%2FCUOLlazKoW0LMA6i2UFjHF0xRz&X-Amz-Signature=5121c466286efdb5da54bb2f5f091f62234702c7cdf52310c192f687f1eee065&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHWSQESY%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T193022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDXfPdjDOXSJiYTwyTLhwtUU6K4I%2Ft6i9%2B85cgfG%2FmvuwIgKm5SAHinnPMkiVyzSz8Oue4dd9g%2BaYs2MZCUQ9yT%2BSYqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMF2BsfM96ZDdR9bCyrcA8ToO4h9MhbJdnH%2BQq%2FVSwkY5jUIMo783nA%2Bxlejkbiph2zWhAeI1TXWF5WNxn7nnI%2Fz9l%2BV9kqqRPBVrTPXzNBonCn8jduKGkkkniCyObUDnzDLKztZhXUviKDhV60ttO8p47Ket0khR2a8cvaVX2%2BAAzQWy8VTXdViiTY0uWGQn5Marl0yS3j9vWY%2FTK185h3sT0MiC2qiBeU1XHrpH02UwS7hD0akKth1GhF7VPy0Et73sw0qImfgo5p6cLkbljB9Q%2FOcReP4XH7SED2d1wQWih5Bbjy1oAHC%2BS0xa1sCrVK9vqpqnIRcbWvAalOcdI1yIeZLmQMatkGqH0vwF%2Br8V7uiTT9EQJHljlB25suchy3VWPbLsfV1CE0cAoW5x7BRpzGjVkydZ3SpjPxhKpLGXYX3PKRfyoNoY6cy26GiAgJ52aXZ7zyWDvH1elq6SUbMqDDajckieQ2o%2Finfe9vgWG8EIoNE7KQFC%2FYQTT0nQDaDKfVphEDQcQQQpV3Na9eBcYjgoCKwvW95IPFXUa5STq1psqgEuRqHMjJjdDuwb%2BnmiaVZnyMW0r1mSCaSa45AJ0qLMww029f7POUwfI9XkrA%2BoSD1JtU62OVvn7ZbTclRAJpzU%2FxPOrPUMJOo18kGOqUBHF2URTG%2BqGtlhswSxkRzTBVqbLmjlVND6XGgPSbXfrZZQopfoV4i3wBm74LE150KhrIrja2ITKuH%2Fqqm2rjNKnH8o226VELxZDvE31ZXIgoVRAMepOFRnDTKl9sRiQdZF%2F4eXBpj5D0KyQwEFQz7vOn7uhP1yvTR303UkNUDpTjWS5DJIonV6L40lU%2BlTaVs6%2FCUOLlazKoW0LMA6i2UFjHF0xRz&X-Amz-Signature=8de4d2b11d78f87d5b3ed3125a0fc4818a57abca4f386f5201d0bc492848453d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

