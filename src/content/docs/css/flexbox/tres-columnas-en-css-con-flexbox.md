---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QEOR4IN%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T065117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCubPXWvTcknLOqMDgGozBh0vo5K%2FuC6pGQCr3C%2BVs6ewIgapEv9ziehXiH7UyYFvk8watQ5a2OzD%2FkwvdPrW%2BefTsq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDOd2EXnKYnUfvzlebyrcA45DzThqKm4hV6ePcInNXp09E18YL8uk8HNmjHYPiQmU0Kb1JCs5LXgyBzrgnf9g5LB0oxA7AqiJMEshqPB2lWvdvEAzuJUmMv3UuVXh5qXnozHAqPnMUEH%2BgZ%2FxWX7TWl0xDSVx5WtgSynG4cUbaT3poY3V0INMNmfCmtD2RbwuUkloazlo1oMEXkvbs5jX1BVgqdhnJOhRgDQZAAWpCJCqToh2hZOPx5T7LdkAx7Gekds1abdOu39Il8SHk2VY7mzAkDzy49%2F8%2Byo5Ycj47mhrHWP64sNHHkNLbW%2FLxFVEmWeghkR0kMD3%2F8aJ6WXJN59Q5u67dqnpyOuod%2F%2BzpploniwkZSM%2FSyLPlXU3cv2feWEu%2BHSbFST1TC5gp1%2F1atxB9a59cdVQ5oAKgiHnXQL%2BeoqIdMukVJePwXVu%2BW0M3fxWYPDesx37kbZqjYlzJWaSTwS5qevhyi02BFmPH0diaSdTmVYflP%2BZPGWzgHId4EpC3LbXlTCp0QFF97X%2FuHDgrzmSHh%2B75O8OlxGHWtAai%2BqaYOr8qlunDBnfmrmYyjYToR2OE1wX30dUVW0d4E%2F5Bto7qgQBS1ccIyoNDAI04mmGU1bD1PbkuqBNTUO0plcDYD6FwA0bXMl%2FML6xyckGOqUBCd47VupuKCSAOPQKNMt%2FyvBSjnc6RiDohUCqKPF8HGMmrnMtIBcmYYDtruw3WN6tauNjs%2FDbEUW3qvBj0kwvxQ7%2Fj5IMrJKVHplRYT9u3ArJIDb%2FKD2cii0HrH11tRyQQfL6qdqoBgSz31ARp%2BhKw7STOd2atocU1QG1swoj%2FpovLNJb5K0TGoJdqrcOVeRUfrpk6KiSTPZYPcXKk%2F%2FiJeBb8BmC&X-Amz-Signature=cac7a9fe6eda8fa6c1614225f0808ab4be406b78058c9404c9116ad8468a7ac4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QEOR4IN%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T065117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCubPXWvTcknLOqMDgGozBh0vo5K%2FuC6pGQCr3C%2BVs6ewIgapEv9ziehXiH7UyYFvk8watQ5a2OzD%2FkwvdPrW%2BefTsq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDOd2EXnKYnUfvzlebyrcA45DzThqKm4hV6ePcInNXp09E18YL8uk8HNmjHYPiQmU0Kb1JCs5LXgyBzrgnf9g5LB0oxA7AqiJMEshqPB2lWvdvEAzuJUmMv3UuVXh5qXnozHAqPnMUEH%2BgZ%2FxWX7TWl0xDSVx5WtgSynG4cUbaT3poY3V0INMNmfCmtD2RbwuUkloazlo1oMEXkvbs5jX1BVgqdhnJOhRgDQZAAWpCJCqToh2hZOPx5T7LdkAx7Gekds1abdOu39Il8SHk2VY7mzAkDzy49%2F8%2Byo5Ycj47mhrHWP64sNHHkNLbW%2FLxFVEmWeghkR0kMD3%2F8aJ6WXJN59Q5u67dqnpyOuod%2F%2BzpploniwkZSM%2FSyLPlXU3cv2feWEu%2BHSbFST1TC5gp1%2F1atxB9a59cdVQ5oAKgiHnXQL%2BeoqIdMukVJePwXVu%2BW0M3fxWYPDesx37kbZqjYlzJWaSTwS5qevhyi02BFmPH0diaSdTmVYflP%2BZPGWzgHId4EpC3LbXlTCp0QFF97X%2FuHDgrzmSHh%2B75O8OlxGHWtAai%2BqaYOr8qlunDBnfmrmYyjYToR2OE1wX30dUVW0d4E%2F5Bto7qgQBS1ccIyoNDAI04mmGU1bD1PbkuqBNTUO0plcDYD6FwA0bXMl%2FML6xyckGOqUBCd47VupuKCSAOPQKNMt%2FyvBSjnc6RiDohUCqKPF8HGMmrnMtIBcmYYDtruw3WN6tauNjs%2FDbEUW3qvBj0kwvxQ7%2Fj5IMrJKVHplRYT9u3ArJIDb%2FKD2cii0HrH11tRyQQfL6qdqoBgSz31ARp%2BhKw7STOd2atocU1QG1swoj%2FpovLNJb5K0TGoJdqrcOVeRUfrpk6KiSTPZYPcXKk%2F%2FiJeBb8BmC&X-Amz-Signature=8eebc0882c8a0cbf20d7c635637081ec26d8d1a3d01685a0b8d846937b1e8fbe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

