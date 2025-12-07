---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UURQN7JM%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T043915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCn%2B%2F%2BE7J0Apr4FQtC54HdHc70JE6o4ettDe2Z4qRV%2FbgIgSMwPeStLXQeaHSKrrQJxjSXEJ6v3cqwmIlsLvQviPiAqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJxBOn9pLWIbRayC7yrcA0lSTXVcVLRXy68hZhqWiE%2FJ9%2BcF530KpY%2FYbdH1XneR8tod%2FMjwDJnSJSHEAxR1OXOkfP%2FEgGDjfhqwydbs3jHDyUDv15guLYW87p8HqTjKEkUdy2KSmflfIAPbhLdSsf1RYyWCf8h36zmsRQ91tsB8X2R%2BJQ%2FhBbYNxFCYzMqOQsSdWJ6AILyr5DpL2KN4%2F1xFha4Ozih%2FSBLTMwjjH3LDyoh4Cro%2BbqtkxfS7atXwQt694E3MryLmHS%2FIOiAiQghQZr5eyh7smXD8uXawouG5dWrb62YkAbL9X9pYDPnWxuf0rYnk7yeAQum8So2tt7cE00rcvIhO5%2FR10TEUNIyZ9b6YbtSet5iiixxqXVa3ELuZqEtdHtrKRW6xjzVxDaomgvOkCyho04j5JSB6DWlZcOIj%2BQDI%2B5trJnWVmLNT2KdFiu8NQAAWuFsKpFm8VA2iIl57T4i2qbCzLlYost6m5kjOsGsI8vN0WA3w6%2FiufqSp02XzuLV7v6%2FhOO095hGQZsX2rBOF1ivD%2BuFM9M9Pqzjqd4ywqMbstjL6U8ydMYpIymHop76RvDDxy1VbvwgldaGAs47oS1NIxLRl5dwvAGb7pGWGT%2BozYEj1N79dy5hhcu%2F%2BaLqOeuusMPL90skGOqUBa6Weq%2FKOIgitAVF4uUXqyZZTSRFTE7ABPqEnJeDFPNnvLxmGrYjGHdofBerF5uKSVj5CmuqxIekdn9Lg20kWifOxGLA1Wv5rfA3C45psjEMVBH1QF9UCVOz1q7ehYKuNzNkdut5X7XrGqh3erz33YvmvdGRu%2FIdGi2HyeUH2u0E0Zs40bmC3wVji3l9OzWsmYyrgcht%2B6pJHTjHyxLa7r8J35J5W&X-Amz-Signature=f81fa2e0c64e7df727fa83700d8f952b52f4434086d9fefa18b3d9605345cd1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UURQN7JM%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T043915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCn%2B%2F%2BE7J0Apr4FQtC54HdHc70JE6o4ettDe2Z4qRV%2FbgIgSMwPeStLXQeaHSKrrQJxjSXEJ6v3cqwmIlsLvQviPiAqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJxBOn9pLWIbRayC7yrcA0lSTXVcVLRXy68hZhqWiE%2FJ9%2BcF530KpY%2FYbdH1XneR8tod%2FMjwDJnSJSHEAxR1OXOkfP%2FEgGDjfhqwydbs3jHDyUDv15guLYW87p8HqTjKEkUdy2KSmflfIAPbhLdSsf1RYyWCf8h36zmsRQ91tsB8X2R%2BJQ%2FhBbYNxFCYzMqOQsSdWJ6AILyr5DpL2KN4%2F1xFha4Ozih%2FSBLTMwjjH3LDyoh4Cro%2BbqtkxfS7atXwQt694E3MryLmHS%2FIOiAiQghQZr5eyh7smXD8uXawouG5dWrb62YkAbL9X9pYDPnWxuf0rYnk7yeAQum8So2tt7cE00rcvIhO5%2FR10TEUNIyZ9b6YbtSet5iiixxqXVa3ELuZqEtdHtrKRW6xjzVxDaomgvOkCyho04j5JSB6DWlZcOIj%2BQDI%2B5trJnWVmLNT2KdFiu8NQAAWuFsKpFm8VA2iIl57T4i2qbCzLlYost6m5kjOsGsI8vN0WA3w6%2FiufqSp02XzuLV7v6%2FhOO095hGQZsX2rBOF1ivD%2BuFM9M9Pqzjqd4ywqMbstjL6U8ydMYpIymHop76RvDDxy1VbvwgldaGAs47oS1NIxLRl5dwvAGb7pGWGT%2BozYEj1N79dy5hhcu%2F%2BaLqOeuusMPL90skGOqUBa6Weq%2FKOIgitAVF4uUXqyZZTSRFTE7ABPqEnJeDFPNnvLxmGrYjGHdofBerF5uKSVj5CmuqxIekdn9Lg20kWifOxGLA1Wv5rfA3C45psjEMVBH1QF9UCVOz1q7ehYKuNzNkdut5X7XrGqh3erz33YvmvdGRu%2FIdGi2HyeUH2u0E0Zs40bmC3wVji3l9OzWsmYyrgcht%2B6pJHTjHyxLa7r8J35J5W&X-Amz-Signature=bc128c4ae3790d623946cd663bb04be30193ad862338136f92424b75e14c0240&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

