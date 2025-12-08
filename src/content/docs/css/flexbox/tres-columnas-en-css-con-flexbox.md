---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHWPV2CM%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T225039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBLUj70J3kE%2BJOZQN9QxO60JzpaH4vO7Ce4rSb6SFsdgAiEA1MlJTUKgaCX8s9Z%2B9rXOjtFBdW5MZEBT4vT6r2bOIxMqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBYvsZxxyWdfyA9R%2BCrcA0Lvy606JENH8Isdh2X8924oeDfpvzwhVk5Fc%2FkmQ7N4uEHuJJ3YZ4%2F4IusKuhkTDoEvNg76EmPnRlgvUJi5xhqaptxWzi1340dT2GtPKypCEoNO0cJiGGj2K1ftCNMJZeB0Cx3N5H7NCFkCVuS8dsOeqIeZRPErxW1hVExR%2FW2gJtO0DwfR7iwEBS2UN%2BATgrpLWZN6Ll7BTnwtMgtz1Z7YX9AdSrTXHeXMQZqolxQ5V9U25JFlU7W7X57j8pCJmhczkKRdHtBDebB78gd2nYHnJMy8NWz11ydSw9ounq%2FuqUAdFIeLDbBClaaGXYvKPbydghwpzSGyd%2FJjQEeqN9dV%2FSXb2YpOBWMWJQKNA6AC84Emojp8ZofnEIajiTg9ECQ%2Fr4kujGstGsv93kgHIn2kWh6e8%2FscOzee%2B%2BEFbWcOZ2mfnKYIq4PeTaWXB4e6Ooyi1WcjyQ9pIjTjeBn5r0wifAzo4SPh87OQSsUk5VD7V0EKRJoK07IHEgzvOY4da9twRBSrDvAWhKuDiaHIZIOitQTRmGf9oxc1%2FFX2HoG3%2Fr9xyPmXIv%2BlN3n12lxzSoOyvBp5xM0%2FSeRaEW%2Boz8grTgD%2F%2FGjH%2FE2u%2BTLhG7FFMbPmf9N8jet7pAheMPeh3ckGOqUBipQghtdW0cF6cfgz2Dil5RQa1fDc1AFrYRYunL2VpdttIVg%2FjYqMH6QU4tUMBfNLberAiMDiwr%2Fv58IcVUY3mHRz1qJD48Heg2jW5jf4abA9CXq8YatfFiKE0YECHuJuQxTvNJF%2BgoigWI2GMLbrFzwkDNZxYtFFG8xoWpXgqlS7iSYHPCJC0%2Fht1xGbw1sHxByVqlUYIpoq1vLiVQs3f03%2F79cf&X-Amz-Signature=313b6b864bf0c0a97fe013637e67eb4ef91fc2a741539fa255d7890bf68900e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHWPV2CM%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T225039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBLUj70J3kE%2BJOZQN9QxO60JzpaH4vO7Ce4rSb6SFsdgAiEA1MlJTUKgaCX8s9Z%2B9rXOjtFBdW5MZEBT4vT6r2bOIxMqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBYvsZxxyWdfyA9R%2BCrcA0Lvy606JENH8Isdh2X8924oeDfpvzwhVk5Fc%2FkmQ7N4uEHuJJ3YZ4%2F4IusKuhkTDoEvNg76EmPnRlgvUJi5xhqaptxWzi1340dT2GtPKypCEoNO0cJiGGj2K1ftCNMJZeB0Cx3N5H7NCFkCVuS8dsOeqIeZRPErxW1hVExR%2FW2gJtO0DwfR7iwEBS2UN%2BATgrpLWZN6Ll7BTnwtMgtz1Z7YX9AdSrTXHeXMQZqolxQ5V9U25JFlU7W7X57j8pCJmhczkKRdHtBDebB78gd2nYHnJMy8NWz11ydSw9ounq%2FuqUAdFIeLDbBClaaGXYvKPbydghwpzSGyd%2FJjQEeqN9dV%2FSXb2YpOBWMWJQKNA6AC84Emojp8ZofnEIajiTg9ECQ%2Fr4kujGstGsv93kgHIn2kWh6e8%2FscOzee%2B%2BEFbWcOZ2mfnKYIq4PeTaWXB4e6Ooyi1WcjyQ9pIjTjeBn5r0wifAzo4SPh87OQSsUk5VD7V0EKRJoK07IHEgzvOY4da9twRBSrDvAWhKuDiaHIZIOitQTRmGf9oxc1%2FFX2HoG3%2Fr9xyPmXIv%2BlN3n12lxzSoOyvBp5xM0%2FSeRaEW%2Boz8grTgD%2F%2FGjH%2FE2u%2BTLhG7FFMbPmf9N8jet7pAheMPeh3ckGOqUBipQghtdW0cF6cfgz2Dil5RQa1fDc1AFrYRYunL2VpdttIVg%2FjYqMH6QU4tUMBfNLberAiMDiwr%2Fv58IcVUY3mHRz1qJD48Heg2jW5jf4abA9CXq8YatfFiKE0YECHuJuQxTvNJF%2BgoigWI2GMLbrFzwkDNZxYtFFG8xoWpXgqlS7iSYHPCJC0%2Fht1xGbw1sHxByVqlUYIpoq1vLiVQs3f03%2F79cf&X-Amz-Signature=ed10edb8487afa8dc8e896000ad4a79688983647bc6a9de8cb86a0848d7b42b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

