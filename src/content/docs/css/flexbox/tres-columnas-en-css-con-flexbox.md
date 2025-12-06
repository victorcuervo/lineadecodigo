---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6N7FFDK%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T141053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDDWBGruWclKwV4QzynvyA4Ow%2BLujgdCKLPUn13xZXnwIhAOrzzlQ0vcdB2zoWuLOKrTOqQ1LT7oNN9WneIVBulYZuKv8DCHUQABoMNjM3NDIzMTgzODA1IgzA0%2FbkLklXKsIcDjEq3AM90jg3XtH8L%2BRirVc1Yxlwt3hUdtQevlXjornw7DKwpGNZpMhfyf0DL1Nx4QzDgy4VbbsiG4CS2DuRPttZ8S1IWFBWZuY6ExwKML5fpoOHxX2Ph64iDuY6XanDMzAtgbzOfiE0d15cqUkHz20bf%2BS1MBK%2FaXBvTfiDB%2FolJZjI%2FudO1RVCv37InRoPIqzN7GMX9pkbTCQgmAFORMNq98C6cAHAHkknEnSftj136Umo%2B%2B7LPl4ahNdBhuTTmMA0s3b4q8sUp7bjKKIfBmGpD7LSdtgvMo70Xgz1FmaPjfKBKK1ZQlL0Dtp3X7LAYiMOL8FC6HcYP8Vzv12wIlMG8GQQw48WDipwULEhfFZdKs%2Fx0RhGIZtNe1vdTI0KZMBlRyncg7Up1kzN02PZCNG7OpIgYmZkezVzixhSWjGXQCHYSKD1VeHmGZEifdryqclADpDwvtARohmMeMM7P9a5rzDiHd1vISVw3RgimsAKxr8lMoTIaA2IkkPw9RhzZTmX5hAz34tUzoDpGSQ9Dy%2FghkY%2Fyc7N1pkb9tmplh%2BiNp%2FPikI2M2GEfLXh6Q%2FTOOfEYN5kY5vUmIZgGHw8Ah9KusGxVpmxldAK%2B2axYNsv9A6Os%2BpZOcO7tK9nj1SvlTCkptDJBjqkAcvU38KZFMA5e2P4JwRe%2F0eRC%2Ba%2FbbVoEC6PWELbrGIhj4GZle9FKF9p72w4YXWQ9mWr37sXzAIg66P%2B4hp99MxxVekIavoGS4dYiFqlgDaopOYavQviuA%2FS9aR0BjSrMl5cEImvtxdxr5gfziPnHJr3Ij90UnIkVbh%2BHHoA3iuM%2Bna8VSqjx04xlSWpdMcAcTqKpW53I%2F7P9BmUvODJq3aJP1HO&X-Amz-Signature=6dfe38eb12bb627ad18d633fab40f14407a3c802257e8e5a134d72b48b513c0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6N7FFDK%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T141053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDDWBGruWclKwV4QzynvyA4Ow%2BLujgdCKLPUn13xZXnwIhAOrzzlQ0vcdB2zoWuLOKrTOqQ1LT7oNN9WneIVBulYZuKv8DCHUQABoMNjM3NDIzMTgzODA1IgzA0%2FbkLklXKsIcDjEq3AM90jg3XtH8L%2BRirVc1Yxlwt3hUdtQevlXjornw7DKwpGNZpMhfyf0DL1Nx4QzDgy4VbbsiG4CS2DuRPttZ8S1IWFBWZuY6ExwKML5fpoOHxX2Ph64iDuY6XanDMzAtgbzOfiE0d15cqUkHz20bf%2BS1MBK%2FaXBvTfiDB%2FolJZjI%2FudO1RVCv37InRoPIqzN7GMX9pkbTCQgmAFORMNq98C6cAHAHkknEnSftj136Umo%2B%2B7LPl4ahNdBhuTTmMA0s3b4q8sUp7bjKKIfBmGpD7LSdtgvMo70Xgz1FmaPjfKBKK1ZQlL0Dtp3X7LAYiMOL8FC6HcYP8Vzv12wIlMG8GQQw48WDipwULEhfFZdKs%2Fx0RhGIZtNe1vdTI0KZMBlRyncg7Up1kzN02PZCNG7OpIgYmZkezVzixhSWjGXQCHYSKD1VeHmGZEifdryqclADpDwvtARohmMeMM7P9a5rzDiHd1vISVw3RgimsAKxr8lMoTIaA2IkkPw9RhzZTmX5hAz34tUzoDpGSQ9Dy%2FghkY%2Fyc7N1pkb9tmplh%2BiNp%2FPikI2M2GEfLXh6Q%2FTOOfEYN5kY5vUmIZgGHw8Ah9KusGxVpmxldAK%2B2axYNsv9A6Os%2BpZOcO7tK9nj1SvlTCkptDJBjqkAcvU38KZFMA5e2P4JwRe%2F0eRC%2Ba%2FbbVoEC6PWELbrGIhj4GZle9FKF9p72w4YXWQ9mWr37sXzAIg66P%2B4hp99MxxVekIavoGS4dYiFqlgDaopOYavQviuA%2FS9aR0BjSrMl5cEImvtxdxr5gfziPnHJr3Ij90UnIkVbh%2BHHoA3iuM%2Bna8VSqjx04xlSWpdMcAcTqKpW53I%2F7P9BmUvODJq3aJP1HO&X-Amz-Signature=5434680acb69e475ff6d5ebfe3946e7f9e6b90085e73944d5520e4149410daab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

