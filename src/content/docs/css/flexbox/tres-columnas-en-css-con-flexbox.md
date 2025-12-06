---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626SPER5P%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T061233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAsynEarzTNr1f0Nr4LyaIeACmPiMyy2HHiWgobc%2FXwbAiEAtW%2FLcwzEZjVVMaffd7XoPPX000RyYDAauGvEhFN%2BmqQq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDKnmphC%2ByDf%2BDiV%2BkCrcA3pk9Zy3fwFP95Q1HNsrWxQIGpa0xPP2%2B9%2BR6j1yNEGOdAgFj7OGOAeDoITx3oYMdRxJUW9uA0C3kHA3aombCmLI8YWFGkDJTdEeICwHBOpvZ85HOxcJjsiu7aJnidKxEhff7GCwB8Mv5rOcesUwS5N2luC3%2B22XuDtLOHbWYpgJw%2Fv0oR8zo1OnEDluAiJN5kecDANaLLUwxQVSyoH%2BTR8xRhOJCyeMrUlnlKzWBL0ZtKcMvgS%2BoN6ZlhB7qMYmUuWgPinpPlUn1ol1ZObQdm7pMMHlVeyV92ezJNT5eCF4mv%2FJHgCU2V9y1hg90xiQ1VO%2BB35i6pOsW6tG2Vp53QxN1DE%2BPHQ%2FzHoV7nIv6FitpLIaXJeFOYTaL41BKOc7IhFXGrVOqBqWKiAouAzTt1vHZKKngvBScmahmpMg8%2Bc4oWbDm91qv8IOOKKS2e7vPIsNe9iHycRa18Uug0UgNat8r4dXTmTJgquSL6XHfzYUoefe7mAM2fxKC47W4%2FgkOtPS4azkpYnMjgHIDvxCZ2vGWMbZy9VPbZGiOn7R%2BpDTdQkjJQo2YVPxuEBh%2F4aKvy6jWFLOCg0h%2FfqpsCZzz2u0loKpaosW1jSekv3ECX2NUBwrop0HILPEPws2MLH9zskGOqUBXwwOJqHUkxMqvSJ9%2F8GErxFAP7MPN0UBU0NV%2BNaFIJHk0cmZnOc7J2cJEPwaDlJFDPnU7zfbTNt7uMUYdBqo05Np%2BWsdeThEu2L%2F21GODs6wsdwffdSyp0yXNQPAi3RY5j4jp7tbRpR883I7Au4p%2FTge1okTpp4UNR1VcGDMlkk0%2BnBWeV9PEi0PWYOp3siYP6YJnt7JOEENsWkAvEA%2BvBZjCc6H&X-Amz-Signature=7107dbe5dc705e120dff5d5ee7da9eb0433d32a03c5fd946f5600018d51e0c5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626SPER5P%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T061233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAsynEarzTNr1f0Nr4LyaIeACmPiMyy2HHiWgobc%2FXwbAiEAtW%2FLcwzEZjVVMaffd7XoPPX000RyYDAauGvEhFN%2BmqQq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDKnmphC%2ByDf%2BDiV%2BkCrcA3pk9Zy3fwFP95Q1HNsrWxQIGpa0xPP2%2B9%2BR6j1yNEGOdAgFj7OGOAeDoITx3oYMdRxJUW9uA0C3kHA3aombCmLI8YWFGkDJTdEeICwHBOpvZ85HOxcJjsiu7aJnidKxEhff7GCwB8Mv5rOcesUwS5N2luC3%2B22XuDtLOHbWYpgJw%2Fv0oR8zo1OnEDluAiJN5kecDANaLLUwxQVSyoH%2BTR8xRhOJCyeMrUlnlKzWBL0ZtKcMvgS%2BoN6ZlhB7qMYmUuWgPinpPlUn1ol1ZObQdm7pMMHlVeyV92ezJNT5eCF4mv%2FJHgCU2V9y1hg90xiQ1VO%2BB35i6pOsW6tG2Vp53QxN1DE%2BPHQ%2FzHoV7nIv6FitpLIaXJeFOYTaL41BKOc7IhFXGrVOqBqWKiAouAzTt1vHZKKngvBScmahmpMg8%2Bc4oWbDm91qv8IOOKKS2e7vPIsNe9iHycRa18Uug0UgNat8r4dXTmTJgquSL6XHfzYUoefe7mAM2fxKC47W4%2FgkOtPS4azkpYnMjgHIDvxCZ2vGWMbZy9VPbZGiOn7R%2BpDTdQkjJQo2YVPxuEBh%2F4aKvy6jWFLOCg0h%2FfqpsCZzz2u0loKpaosW1jSekv3ECX2NUBwrop0HILPEPws2MLH9zskGOqUBXwwOJqHUkxMqvSJ9%2F8GErxFAP7MPN0UBU0NV%2BNaFIJHk0cmZnOc7J2cJEPwaDlJFDPnU7zfbTNt7uMUYdBqo05Np%2BWsdeThEu2L%2F21GODs6wsdwffdSyp0yXNQPAi3RY5j4jp7tbRpR883I7Au4p%2FTge1okTpp4UNR1VcGDMlkk0%2BnBWeV9PEi0PWYOp3siYP6YJnt7JOEENsWkAvEA%2BvBZjCc6H&X-Amz-Signature=5179a24e7d6e761035497609bf92bf1bc575ad694c50e6ef3e811437869418c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

