---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QL4IOWU3%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T093830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB9ZAEG%2F07%2FQn27WZS%2BSPph5pbQem%2B1Uo7%2F58myb6sT4AiEAwAeJfr3bTHNnM5ts5evQgPI2auTd%2FDP%2BwAf6W9ybcYwqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCY65Mzo29vC7%2BFJBCrcA6V%2BsnCV%2BI3%2BHqcYEgC5CCeOXnfIHHAev21FI1MmOFZMaoMoIRd0u%2F28bvzsvo%2Fpe4wWj%2BYyAHfOxfKbqwT4Uw9ZMwPD8Xd5QEUT%2BftPlbfDd9FoNCaqCkXMDc5oGiUJW%2F8pzUA3i7r7gWjSOYdWlk5kL88O89kKO95Elcg%2FSqsZrzP30j6ceSRM%2BvPhmgAs9VHvexuHuwpH2zS%2FGyS%2Fky2si1Dh09HAF1kUOYvrhFs1WFwVF4S8rUkafgvWdZEXNu2JAGNqrgCcGjxbGbKVAfavvkaaR3zuNabS4yLV%2BTwDqzYOLROhy13DX4k5FZjfD4yi1LGNx%2FjoZM5wkvqnZatfTKE3xyu8a3m97CKiUymiklID6uy47M4ik9nzuF%2BcviHWL2MfOeHrycsgzGaxsh7Ow6xax1lwWbfgxP%2BJFH%2F4rNJEzdkxGJB911Ed0g5GWfX2CAQAXxOdLd995armmiXkOyN6nNmZswARZw7nFmKbko4%2BGvBzcipJzOzytuxazPCd5nRu%2Byce%2Fq2emy04sgm5nsA2MegF6MipU3a9NIexuWTSRZ5yE0HVgfEEBmRIcgfvtrRKrOphw0gN43gfSdbOuw9CcCS321Q1219qZFG1QLN1q5%2F%2BgoGjNhoOMKjt2ckGOqUBw3aR1SLMP42xYqxxPYrU3IhtuXDwl2ZUnuXfqueYX3GVMY0CjRyHs3xorbukJ6JSpIVnXQAsgrr%2FWyisUHgCD511ss264kYCRHQ52KUfpbGFie0AoXcBevS1X%2FsFFYjJ%2FYFF22Z8XEu4SAxIOsTOcBKLkm2XnN7PwO138kLDSW6Xab8t2WzUH32u7JrXykRATYB4vOrbkZKH%2BXB9CuFhltOyPjb6&X-Amz-Signature=9e60940d5b34b54011c7e5407b55addb6d73da0083fc2ea4223b26411842563b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QL4IOWU3%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T093829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB9ZAEG%2F07%2FQn27WZS%2BSPph5pbQem%2B1Uo7%2F58myb6sT4AiEAwAeJfr3bTHNnM5ts5evQgPI2auTd%2FDP%2BwAf6W9ybcYwqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCY65Mzo29vC7%2BFJBCrcA6V%2BsnCV%2BI3%2BHqcYEgC5CCeOXnfIHHAev21FI1MmOFZMaoMoIRd0u%2F28bvzsvo%2Fpe4wWj%2BYyAHfOxfKbqwT4Uw9ZMwPD8Xd5QEUT%2BftPlbfDd9FoNCaqCkXMDc5oGiUJW%2F8pzUA3i7r7gWjSOYdWlk5kL88O89kKO95Elcg%2FSqsZrzP30j6ceSRM%2BvPhmgAs9VHvexuHuwpH2zS%2FGyS%2Fky2si1Dh09HAF1kUOYvrhFs1WFwVF4S8rUkafgvWdZEXNu2JAGNqrgCcGjxbGbKVAfavvkaaR3zuNabS4yLV%2BTwDqzYOLROhy13DX4k5FZjfD4yi1LGNx%2FjoZM5wkvqnZatfTKE3xyu8a3m97CKiUymiklID6uy47M4ik9nzuF%2BcviHWL2MfOeHrycsgzGaxsh7Ow6xax1lwWbfgxP%2BJFH%2F4rNJEzdkxGJB911Ed0g5GWfX2CAQAXxOdLd995armmiXkOyN6nNmZswARZw7nFmKbko4%2BGvBzcipJzOzytuxazPCd5nRu%2Byce%2Fq2emy04sgm5nsA2MegF6MipU3a9NIexuWTSRZ5yE0HVgfEEBmRIcgfvtrRKrOphw0gN43gfSdbOuw9CcCS321Q1219qZFG1QLN1q5%2F%2BgoGjNhoOMKjt2ckGOqUBw3aR1SLMP42xYqxxPYrU3IhtuXDwl2ZUnuXfqueYX3GVMY0CjRyHs3xorbukJ6JSpIVnXQAsgrr%2FWyisUHgCD511ss264kYCRHQ52KUfpbGFie0AoXcBevS1X%2FsFFYjJ%2FYFF22Z8XEu4SAxIOsTOcBKLkm2XnN7PwO138kLDSW6Xab8t2WzUH32u7JrXykRATYB4vOrbkZKH%2BXB9CuFhltOyPjb6&X-Amz-Signature=e5ab27f04770ce9702c11ee8b30e737d9ff154dab5ecd110a37340ff83de4a58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

