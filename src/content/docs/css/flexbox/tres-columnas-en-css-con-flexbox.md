---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EXFIDJQ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T190016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCUAESUoTAanZBy4bN7cvTFt3eAp5KbMYlBeSYqrQfdgIgY89an47kd9NU%2BoxmS%2FfwN4V0V4rO4%2FsvTzIL7nIWvrwqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKszs4JNI%2FnJlPGNYyrcA6W57bzzb3ft6IdQ10JF1s5gbEB4tYz0J6bGZClIAX%2BCo143TSDULMd19CoADSEtdICQywCBpIu6zG%2F0nDiwAnGny5bEz3KljvEtRgdA9O5%2FYsGE%2BOEOCS2D8jkWrDM4HqmDPNTFhZLS7KfD4FA11CKl5ZZGS%2BdL0M0VYWUmdSKySey8mzoi2X7s7%2FYzwnzAH5jwlYHIWKYEwceM3A7Z%2BT%2FS4aNwAM%2Bv4hi6RaXc3Z1gDWP4HdCKWZ4RDV9uMmyWABYmrT9nLz1GnayQKFzCecy1utWjgIjiNBmLSr5R3Ax7XYcxDLBFlaH9b2ZYIfBPd%2BvojJWEywT4GvcCMGacJoeTqzL5IGaSrSiwXNVX6%2FYwBzaSN1N5vSrIeToAsyKHqiHFkBblD8LCoGfulmyAgwLC2YNwGlxFOfdRY6iagburuKvFdJNomsGrSzpwEebNNZAHvNhxMGY7nM701JqgjZtuyVYnKB36BR4oyiMg0sBMGpjN5%2Bhwuq%2FwVn0nckeRRX7OBj4Mb1Bz52DxnU32wB85Suy3lRSbJ508FK9aS4tz0goLko0UD%2BYu0xI9az%2FDpYGtZom7ZZpbyZJk5iV%2FSQtxqn2Ce9rjtmQezpKHtZjRyqoWnxqVsCnPsiDgMK%2B31skGOqUB%2Fd4xRYmKUxQ89DI1X%2BkuAgbblVWO9NmZROOIA5J2wXSEAJHK2Js4KCizy%2B1mmdQBlsuSk8xfACcE5Mu5mvB6zQbNrOnYpAwWWT4zBHs7MNpmmlJ5GHQk4h83wHsRTpfTFgbSpJwB%2FJ0vQ8IoqUKM58FeQoTb5fQEU8Y9Nqj0WuFMgcutBqeqj6oRULOnlz5Le%2FkzNDa0N8vxI5ITONC%2BhybjlbUu&X-Amz-Signature=12e490d2c9ded65aef1acc20499dc4f98f9e1263979761d6905ca1979eb6efd8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EXFIDJQ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T190016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCUAESUoTAanZBy4bN7cvTFt3eAp5KbMYlBeSYqrQfdgIgY89an47kd9NU%2BoxmS%2FfwN4V0V4rO4%2FsvTzIL7nIWvrwqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKszs4JNI%2FnJlPGNYyrcA6W57bzzb3ft6IdQ10JF1s5gbEB4tYz0J6bGZClIAX%2BCo143TSDULMd19CoADSEtdICQywCBpIu6zG%2F0nDiwAnGny5bEz3KljvEtRgdA9O5%2FYsGE%2BOEOCS2D8jkWrDM4HqmDPNTFhZLS7KfD4FA11CKl5ZZGS%2BdL0M0VYWUmdSKySey8mzoi2X7s7%2FYzwnzAH5jwlYHIWKYEwceM3A7Z%2BT%2FS4aNwAM%2Bv4hi6RaXc3Z1gDWP4HdCKWZ4RDV9uMmyWABYmrT9nLz1GnayQKFzCecy1utWjgIjiNBmLSr5R3Ax7XYcxDLBFlaH9b2ZYIfBPd%2BvojJWEywT4GvcCMGacJoeTqzL5IGaSrSiwXNVX6%2FYwBzaSN1N5vSrIeToAsyKHqiHFkBblD8LCoGfulmyAgwLC2YNwGlxFOfdRY6iagburuKvFdJNomsGrSzpwEebNNZAHvNhxMGY7nM701JqgjZtuyVYnKB36BR4oyiMg0sBMGpjN5%2Bhwuq%2FwVn0nckeRRX7OBj4Mb1Bz52DxnU32wB85Suy3lRSbJ508FK9aS4tz0goLko0UD%2BYu0xI9az%2FDpYGtZom7ZZpbyZJk5iV%2FSQtxqn2Ce9rjtmQezpKHtZjRyqoWnxqVsCnPsiDgMK%2B31skGOqUB%2Fd4xRYmKUxQ89DI1X%2BkuAgbblVWO9NmZROOIA5J2wXSEAJHK2Js4KCizy%2B1mmdQBlsuSk8xfACcE5Mu5mvB6zQbNrOnYpAwWWT4zBHs7MNpmmlJ5GHQk4h83wHsRTpfTFgbSpJwB%2FJ0vQ8IoqUKM58FeQoTb5fQEU8Y9Nqj0WuFMgcutBqeqj6oRULOnlz5Le%2FkzNDa0N8vxI5ITONC%2BhybjlbUu&X-Amz-Signature=b7904efee6b46eada1b41b1889e587b08b811a9d14e05765afee7f3769ad2cd8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

