---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667A3SLGJ6%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T024338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIGdXWw94kt53MFOZDVzbWPZB4SB%2B%2FdgpCh2UoW3ZRGs6AiA7zzmuVz6OX9wS9A8tNQ7TAbxjmYLrEsDSaMIYmqbsGSr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMj1Wq%2FfSIAcvx4Y50KtwD1TcTPpi5fVZtrCX3GARQ64UJtr3PJQd8nCyVcQj7Fdkc18iQbxGgMFVdSnulXMbKHw9Z9rn6GoWx6EZeazAaVbAaeDXRk2A8QEOcRM%2BpL7ZLq3uyHSMerHS4oAR7Kwr0mVB9wxxmOuyJCx4QvCgLfUZz1rarE61WcY5oxTxEMgY7cqm2%2FbNG6ruaxxX3s3fz%2Fpcc3Q2HUW7RHQtW%2FXTO5bL6ajbEjWNJ67OuRFjtGw01v4C4IFdAk%2FcTwTWfFe7DX0l0BTXQsnQjZ3EZnJan5zyLdXOCdC7WHywSKAi7MHhpqwW9pS50PdtDJygpFQOqDCX37UshF5bGbGofHMcoeYiyWx6mYGej1lurokjeC5Wsu0oY%2B8xptAD7WjrgJkJYKHePL4Kd6Q3ENl6mJBbVNy7cjWk8HLKlDvdC9MoX2qn9lQesRlylpVjS85AvnzQMVcD1U9MGBcVMSuik7U0DiwJrrj0egLAr0cWZIePcUJ89%2BcAWtx8oW3evoY72rTPZ0QtztlWpSY2k5BEhho%2B35%2BhRBGo37pF0X2g%2F0yS5HnqiRdo0lPp62ZtNRT0j64PBknThoTDt3SKH6Pfn%2BGOaLiKtovd%2FfPjayQ5CCjBlh6xshzZmjfozYhj2T9kw%2BtTDyQY6pgHiWHoUgkO2DIRhjsmkyAP9KBpCzlCb0u77KxjN95aNvXmyR25WR3L%2F%2B4deh8K8hDdyxxXc3l8Wn0Bx5CcEdOOZV498Q%2BB2IMCG8rRmzxCly5fs5Ju0Xjxqa6%2FU1PlmO%2FE7ruvFDWLmJu%2F5mAtZF%2BnBotJlyeI7kgmSXIdy3CpW2oIlWBz2zFEiwe3%2F4sK1XJ4PZQvOW6qL6rmx%2BJooPT7q0Svq2R7O&X-Amz-Signature=0cc37266b3eab0f7466ed4cabe6ce86635edee03cd349f317c932511d15c518d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667A3SLGJ6%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T024338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIGdXWw94kt53MFOZDVzbWPZB4SB%2B%2FdgpCh2UoW3ZRGs6AiA7zzmuVz6OX9wS9A8tNQ7TAbxjmYLrEsDSaMIYmqbsGSr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMj1Wq%2FfSIAcvx4Y50KtwD1TcTPpi5fVZtrCX3GARQ64UJtr3PJQd8nCyVcQj7Fdkc18iQbxGgMFVdSnulXMbKHw9Z9rn6GoWx6EZeazAaVbAaeDXRk2A8QEOcRM%2BpL7ZLq3uyHSMerHS4oAR7Kwr0mVB9wxxmOuyJCx4QvCgLfUZz1rarE61WcY5oxTxEMgY7cqm2%2FbNG6ruaxxX3s3fz%2Fpcc3Q2HUW7RHQtW%2FXTO5bL6ajbEjWNJ67OuRFjtGw01v4C4IFdAk%2FcTwTWfFe7DX0l0BTXQsnQjZ3EZnJan5zyLdXOCdC7WHywSKAi7MHhpqwW9pS50PdtDJygpFQOqDCX37UshF5bGbGofHMcoeYiyWx6mYGej1lurokjeC5Wsu0oY%2B8xptAD7WjrgJkJYKHePL4Kd6Q3ENl6mJBbVNy7cjWk8HLKlDvdC9MoX2qn9lQesRlylpVjS85AvnzQMVcD1U9MGBcVMSuik7U0DiwJrrj0egLAr0cWZIePcUJ89%2BcAWtx8oW3evoY72rTPZ0QtztlWpSY2k5BEhho%2B35%2BhRBGo37pF0X2g%2F0yS5HnqiRdo0lPp62ZtNRT0j64PBknThoTDt3SKH6Pfn%2BGOaLiKtovd%2FfPjayQ5CCjBlh6xshzZmjfozYhj2T9kw%2BtTDyQY6pgHiWHoUgkO2DIRhjsmkyAP9KBpCzlCb0u77KxjN95aNvXmyR25WR3L%2F%2B4deh8K8hDdyxxXc3l8Wn0Bx5CcEdOOZV498Q%2BB2IMCG8rRmzxCly5fs5Ju0Xjxqa6%2FU1PlmO%2FE7ruvFDWLmJu%2F5mAtZF%2BnBotJlyeI7kgmSXIdy3CpW2oIlWBz2zFEiwe3%2F4sK1XJ4PZQvOW6qL6rmx%2BJooPT7q0Svq2R7O&X-Amz-Signature=364962f7a183a42fe2089592fe68dbfb1bbf132d3095d25f893f59d9b17177af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

