---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSECXJZU%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T033117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGnWCc3fq6YaONDS9LSFXd5TKvWE0K1S%2FiEVj9NFAy%2FIAiEAuvVGsllhwebu%2BZ61couQmSG1rgoM9jOmR1Alfewy0OgqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPhb5CXkPYlzB48i%2FyrcAy42Y%2Bw9AeB2WFXnI7XzeFRDxszgq1bLLmsGaWolSyNZcLXNO7UkJN1h0yUN0MtLdDTatHy%2BviSpXuc3YEDiexw3jJfTlPWVMiwO9WbFxotI6bnEB9tioKrOA6g1BOSRFG1pVMHvhJNtlA3BadzuabD48T%2FgqHgajmX1csWE1FEx5kovGQ1NCs%2FV4jM%2Fo26npDA5uUv3LqMVqudz7GRveRjBp8zFj4mXRrbEyaXzwwCP6RLmuBzkcHw0qU8DGub8qubtZpRmTYNVBzb1vj%2BFjPUOQoVRH1tDjIIEvHff2BXSjV8nVnz7uGfDywXEEGEiFX4CdMm268HXIKn4KuZD3qUMwwc4YdTn7nhKke0%2FWSlefd5PoFGvBnX7meIqn163IC9EkAbOuyTGCpyYufatQZQHG3c%2FP1ZPPRulAPy4QhBFjkTmu%2FnTgU3n5arGrgX%2FvqW0V4E90dMC9unPtAMWQHesW2Xf6vM%2FpKd4q7akFpAnOoFjAeUtpA3FVi8LpCvizkJd%2B9tN%2BYoTP5hUFRLNB9wUxpFoffHh%2FafqEUwqQcCxl4%2BHDMwQjlBD9ITcSmhg%2FZqF2IOlOSCZiNPbfHNHIEaCIa6BhZf3cMwdAmIUIysj7OP9WnqHvB%2BOa3O7MI3%2B0skGOqUBoRXDuLLCGkB2%2B29S6dLSDOsLLLSj1gtNMj3XnMHScxBfNMj3OsdFaKcXEUBavigGk0zBQLhjY00vomrS%2BNg%2FZlmz7Qk0IOrfvQUsiMUoVnDY7HXwGYfADYieVxr6SkvuStnD6gYSrmw6ra7O87yKjuT0NpBDDGyDE%2Bj%2FZwmmFtUabgbTnDVn6kSLWQr33d7%2B%2FWmXybA7ZpwLJaCzMovw4Ih42yNs&X-Amz-Signature=e3d43e852f8c3f0e9455bcf8d6108633743690df8e97607de9977ed763a7e836&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSECXJZU%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T033117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGnWCc3fq6YaONDS9LSFXd5TKvWE0K1S%2FiEVj9NFAy%2FIAiEAuvVGsllhwebu%2BZ61couQmSG1rgoM9jOmR1Alfewy0OgqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPhb5CXkPYlzB48i%2FyrcAy42Y%2Bw9AeB2WFXnI7XzeFRDxszgq1bLLmsGaWolSyNZcLXNO7UkJN1h0yUN0MtLdDTatHy%2BviSpXuc3YEDiexw3jJfTlPWVMiwO9WbFxotI6bnEB9tioKrOA6g1BOSRFG1pVMHvhJNtlA3BadzuabD48T%2FgqHgajmX1csWE1FEx5kovGQ1NCs%2FV4jM%2Fo26npDA5uUv3LqMVqudz7GRveRjBp8zFj4mXRrbEyaXzwwCP6RLmuBzkcHw0qU8DGub8qubtZpRmTYNVBzb1vj%2BFjPUOQoVRH1tDjIIEvHff2BXSjV8nVnz7uGfDywXEEGEiFX4CdMm268HXIKn4KuZD3qUMwwc4YdTn7nhKke0%2FWSlefd5PoFGvBnX7meIqn163IC9EkAbOuyTGCpyYufatQZQHG3c%2FP1ZPPRulAPy4QhBFjkTmu%2FnTgU3n5arGrgX%2FvqW0V4E90dMC9unPtAMWQHesW2Xf6vM%2FpKd4q7akFpAnOoFjAeUtpA3FVi8LpCvizkJd%2B9tN%2BYoTP5hUFRLNB9wUxpFoffHh%2FafqEUwqQcCxl4%2BHDMwQjlBD9ITcSmhg%2FZqF2IOlOSCZiNPbfHNHIEaCIa6BhZf3cMwdAmIUIysj7OP9WnqHvB%2BOa3O7MI3%2B0skGOqUBoRXDuLLCGkB2%2B29S6dLSDOsLLLSj1gtNMj3XnMHScxBfNMj3OsdFaKcXEUBavigGk0zBQLhjY00vomrS%2BNg%2FZlmz7Qk0IOrfvQUsiMUoVnDY7HXwGYfADYieVxr6SkvuStnD6gYSrmw6ra7O87yKjuT0NpBDDGyDE%2Bj%2FZwmmFtUabgbTnDVn6kSLWQr33d7%2B%2FWmXybA7ZpwLJaCzMovw4Ih42yNs&X-Amz-Signature=ce22355eb7f14976a86925bc0ec875933dca0c5e427579cbd02be7e954aac5fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

