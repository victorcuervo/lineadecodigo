---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T76ND6AY%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T075109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzkZFqGtbTv7bvIalw5Imw77fHAx4tUgsXJrHRgPOg8wIgLvikzXG%2BhVFFCyTC61Wj1rc4QJr3dqw21yuFIgbovMsqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHVg2ygVKeAfQIUlYircAw7zpMlVwP2OquM9gXgDaKGdpLlfUTqox2%2Bg9p4yAb88jfCm3Dw0LtNbQk5crvyFnOwWWorLY%2FJospSWEy1lbUeto%2FstMIMcI6is91idTCG4IGtd5W32PQpYNq8OJrMxp6pqEvWFl0NTWx7ZOvvlqatpf8PVXyP%2BSMfaxdBqhWlbFQ5S31g%2BJ9UoYT1I6DZG0VVV3Vw2b6bT4erz06bHuxux%2FzoClF3QXK5rJ0B7tdqrQzD2FMtlCCbsBDIGtL2Di9UApz3Y%2BxR%2BzctU76BBwOtboMwVk9Q9iBLjYkkxVHnfBVA9J3YSUw47HCtsmxHvn42JQcu5cFEI3wBg6vrzIcWe8OXn8o7SqVzDnbl81K0%2FCH1LMAhnxcMIaDwb%2FYoR07cxmtdOGjiTuwwQfj0D2zITwMvQV4y0vqMsdHFD92nnfOi3ikcVaDcDbwgalXbNHP%2B0Jo6DcABvmmXl5Ro%2FxYBH%2FKpRJKiDQmvPgNEA7vPayUmj1ollxO8dvER2HcyW5mMRnaku0Tbh9yYNXtnBMXk6siusfubTNkfmbAAdGFw6brWo76k1l3xQoWLrcOkh7pQBnS%2F%2Fgr67ACOFv76oYf6Y846MXZYFJV7Yy0V2gRVhMVukjZ%2BoOFy8ZrRPMM%2Ft2ckGOqUBlgjg8BtJtCJx9WfPFThE3Y8FFgfWM5rW5a4ykQ45gjhR5llowO0D5zqemfHicEemEFBkbxC5JW3d8Xd429mS3I7BCE6CB4LDER%2B3GzTX2GxGtY5vXQ8P%2F5i8pLOM8RQV9LY8Nj9Ci%2Been47j4Z2zP4ULlhU%2FFd25awNtKJ2ZW6E7CguJ8CK7kJrp8aMHdEiFmbrFOzAsx3ledc5uJwS5IPVZ0eGM&X-Amz-Signature=78587cc8662e72c10aff954fa05576ffc38d82c5f7d2b55c06f59d23f2a0316f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T76ND6AY%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T075109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzkZFqGtbTv7bvIalw5Imw77fHAx4tUgsXJrHRgPOg8wIgLvikzXG%2BhVFFCyTC61Wj1rc4QJr3dqw21yuFIgbovMsqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHVg2ygVKeAfQIUlYircAw7zpMlVwP2OquM9gXgDaKGdpLlfUTqox2%2Bg9p4yAb88jfCm3Dw0LtNbQk5crvyFnOwWWorLY%2FJospSWEy1lbUeto%2FstMIMcI6is91idTCG4IGtd5W32PQpYNq8OJrMxp6pqEvWFl0NTWx7ZOvvlqatpf8PVXyP%2BSMfaxdBqhWlbFQ5S31g%2BJ9UoYT1I6DZG0VVV3Vw2b6bT4erz06bHuxux%2FzoClF3QXK5rJ0B7tdqrQzD2FMtlCCbsBDIGtL2Di9UApz3Y%2BxR%2BzctU76BBwOtboMwVk9Q9iBLjYkkxVHnfBVA9J3YSUw47HCtsmxHvn42JQcu5cFEI3wBg6vrzIcWe8OXn8o7SqVzDnbl81K0%2FCH1LMAhnxcMIaDwb%2FYoR07cxmtdOGjiTuwwQfj0D2zITwMvQV4y0vqMsdHFD92nnfOi3ikcVaDcDbwgalXbNHP%2B0Jo6DcABvmmXl5Ro%2FxYBH%2FKpRJKiDQmvPgNEA7vPayUmj1ollxO8dvER2HcyW5mMRnaku0Tbh9yYNXtnBMXk6siusfubTNkfmbAAdGFw6brWo76k1l3xQoWLrcOkh7pQBnS%2F%2Fgr67ACOFv76oYf6Y846MXZYFJV7Yy0V2gRVhMVukjZ%2BoOFy8ZrRPMM%2Ft2ckGOqUBlgjg8BtJtCJx9WfPFThE3Y8FFgfWM5rW5a4ykQ45gjhR5llowO0D5zqemfHicEemEFBkbxC5JW3d8Xd429mS3I7BCE6CB4LDER%2B3GzTX2GxGtY5vXQ8P%2F5i8pLOM8RQV9LY8Nj9Ci%2Been47j4Z2zP4ULlhU%2FFd25awNtKJ2ZW6E7CguJ8CK7kJrp8aMHdEiFmbrFOzAsx3ledc5uJwS5IPVZ0eGM&X-Amz-Signature=a4bd477e1f66ce353a1c8bf1ffaa3aefe9f595af15201a602a1e28ddbdaee516&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

