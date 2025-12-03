---
layout: post
title: Tres Columnas en CSS con Flexbox
excerpt: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
categories: CSS
tags: [css flexbox]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYVR63DB%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T021549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIFN%2FR4WXlMOhpraA8hagpwovwIYubeEM4NVsrdRkFFOmAiEAle0Xq%2FBrpe3SwkIHg%2Fe5%2FzOvZVc7XTyGHO26MSGeEgMq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDHQn%2BgqAyt7MPse8iircA64L3V9OlW9S89WSNC9Jvzsj9zzHWFBf5CvxLOUtMJ4%2B3Z6IDEUz2FISrbUPDCYl%2F3vyYDXKJVDgJsvnOuJmjDICRunlQKACFMYzFTPW2W7yWh9AsZlw9GvnWOyJ2xgoq4CoFpmrd3hzj2DvyT6w1AonM1hQ9j3PDRuhMxf7iu6At2GNWBTNulteozexbpWyeh8rd9Y6ih4ckqKdXmWeOlPEx%2FutUW5myxHHWsFAs5%2BO69EsvIPV4v1Naug%2FL3DdPFmjf2dTAnmO4GS3eeok59SaaEarDjcc1P0vBD7LngqK8rQfLvOnEogn3p2YP%2FgOZp6Fo4atKNTWoE1IhPNcLDM2UxHrsom%2Bc365V4CyZm8BSlWrHGVuzSQQ3xqYrqOTf%2BnClJx42FWwuhko%2FCKfsY38y96bq2SeDXgWdDcjmMyA46kdRKdfJMgdgcjRpSH5ezxZ9JqTmuAJvE65%2BQ8iG7MLDPudV9MW6IOoXts%2BMOtXB6IjrycHngviBXiVo5YvFNwYjeMUBs2rP3CX1rgtV%2Bb37PrJrkiZ8zN1Z%2BzRc1QTPXnQ%2B31XLAJ2qdS%2FIMiPuotkcFnNFYFCNbXohjlJ%2BF5ATyp48Ou4PwxV7eRaWLmqrvvaK1Mn%2BJt1q%2BBcMMqWvskGOqUB1bDLeSlIf5wc7lrFvNCtRwnA2e5D%2BWlu0JMzqkH3RQNbjzbuVfxEKP9hn6c78aOa%2FCTnOp8UKwJ1O%2F%2BzYDlArrBtuC0bPMWsiDLCJuWEwZ7EPPmLYu1iocvyIPDLj8HPtrQarn5mSibey%2BPT45L4YPDukMYKRHyqC1kWTyG7cxfgTFkeHRfK4r49u0ALctJpcTnh0k8tkU2UX9FiT8fMj%2BrdQ1rX&X-Amz-Signature=741f4d75db23be8d7845e73b95f8474eacbe09d0d6a0f91cd2cc449958da49b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYVR63DB%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T021549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIFN%2FR4WXlMOhpraA8hagpwovwIYubeEM4NVsrdRkFFOmAiEAle0Xq%2FBrpe3SwkIHg%2Fe5%2FzOvZVc7XTyGHO26MSGeEgMq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDHQn%2BgqAyt7MPse8iircA64L3V9OlW9S89WSNC9Jvzsj9zzHWFBf5CvxLOUtMJ4%2B3Z6IDEUz2FISrbUPDCYl%2F3vyYDXKJVDgJsvnOuJmjDICRunlQKACFMYzFTPW2W7yWh9AsZlw9GvnWOyJ2xgoq4CoFpmrd3hzj2DvyT6w1AonM1hQ9j3PDRuhMxf7iu6At2GNWBTNulteozexbpWyeh8rd9Y6ih4ckqKdXmWeOlPEx%2FutUW5myxHHWsFAs5%2BO69EsvIPV4v1Naug%2FL3DdPFmjf2dTAnmO4GS3eeok59SaaEarDjcc1P0vBD7LngqK8rQfLvOnEogn3p2YP%2FgOZp6Fo4atKNTWoE1IhPNcLDM2UxHrsom%2Bc365V4CyZm8BSlWrHGVuzSQQ3xqYrqOTf%2BnClJx42FWwuhko%2FCKfsY38y96bq2SeDXgWdDcjmMyA46kdRKdfJMgdgcjRpSH5ezxZ9JqTmuAJvE65%2BQ8iG7MLDPudV9MW6IOoXts%2BMOtXB6IjrycHngviBXiVo5YvFNwYjeMUBs2rP3CX1rgtV%2Bb37PrJrkiZ8zN1Z%2BzRc1QTPXnQ%2B31XLAJ2qdS%2FIMiPuotkcFnNFYFCNbXohjlJ%2BF5ATyp48Ou4PwxV7eRaWLmqrvvaK1Mn%2BJt1q%2BBcMMqWvskGOqUB1bDLeSlIf5wc7lrFvNCtRwnA2e5D%2BWlu0JMzqkH3RQNbjzbuVfxEKP9hn6c78aOa%2FCTnOp8UKwJ1O%2F%2BzYDlArrBtuC0bPMWsiDLCJuWEwZ7EPPmLYu1iocvyIPDLj8HPtrQarn5mSibey%2BPT45L4YPDukMYKRHyqC1kWTyG7cxfgTFkeHRfK4r49u0ALctJpcTnh0k8tkU2UX9FiT8fMj%2BrdQ1rX&X-Amz-Signature=b138f9a252c3f2455e278d0487944f49cffcbb02cfc23fbfd79141c08a69a5eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

