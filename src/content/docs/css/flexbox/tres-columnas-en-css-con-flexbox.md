---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LOR6YOA%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T184419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5P6lVxIm1RcRX578r6xdGFIugBlzMr48C1iAiT%2B00sgIhANFtbtDnE98as5qpxy06QXhA%2BBe5WF9yUTnV9hLVWJQ7KogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgznXSnmCKPu3A%2FBunsq3AM4hbC2j5bfocv4bx%2FuOlt6YSMt3TR1ljyrIzZebT09xMSld6GKYypgfVNx3%2FRqTtnS9YKre4eFkg0mRIWcjFVPPnu3dYIO%2BfsrklXcMKRhpKKh9YAITnHCkNGScmKJxg6%2FYsLfgqQ8l1tsFwILANhoeoJfNcWUdCRUtds%2B7QL8Nxbij9hkyNopVvpJfM96hcy3lTAS2zJ1VbW2Ldrv%2BpZ3d9kjwmA21h%2B%2FA57InKYxu7DC92Dbr9nmTBEPDmRt%2Fm5%2FXngalQq3U9srWBrByXlHku6%2BGKd8x1HaWXDKyz7ok%2BsCl1QdfE18%2Br2iUYhtoG9tJosmD9YrkIYYollvOygn%2FhEDJYbY0aqf7sAv9F3Jx8dAapivif4%2FTwyiYc0pcoP5WG%2FVPqPVEwpanLd8166CjH%2F6MkHzqS9yDOHSvl6LtajJBS1%2FCVzJk3bFyn%2FkMB5fe7WqvkqTUDpnINckrqfQ5tSazHd9T%2FXxqfrkH2DJtiBRrgPzKPFCNMZliIIFWs3ZLoc8BUUCYiwXEOBQTMHuu0GzxhfI%2BI79%2BqnDtE34J6nnBCjzP6J6%2F4%2B84xD8FvPL%2FWCsmiD4KCCMEiobzW7z5%2FeSpMO9KJVQnr8cVaSF3VXz8bo1fxBrT1eu1DCPudbJBjqkAVccuUVGW41DqOFASNaonOwRnhrYicm9XfdUhJAkdxAUvwkCr7m9LMPq9%2BUpDSya%2FzM7gPwVLY3OPrzJmlab2%2BT5ZvRlV9q6KNjHgpRWwtuLNZWQB7kQT7APQvawZpu5IWd3kO%2FVP49rAgpB63XN9IWL%2Br3jmSQC9LPmWrmHkMgkphSwj5mPhNUuegHFlEoovkmxkTW0q9yxoenqMCUbdNDSvR3v&X-Amz-Signature=fbe9b5eb5342615e25e6071afb0078fa7a6bf69e11b639d71fd39e61eead97d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LOR6YOA%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T184419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5P6lVxIm1RcRX578r6xdGFIugBlzMr48C1iAiT%2B00sgIhANFtbtDnE98as5qpxy06QXhA%2BBe5WF9yUTnV9hLVWJQ7KogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgznXSnmCKPu3A%2FBunsq3AM4hbC2j5bfocv4bx%2FuOlt6YSMt3TR1ljyrIzZebT09xMSld6GKYypgfVNx3%2FRqTtnS9YKre4eFkg0mRIWcjFVPPnu3dYIO%2BfsrklXcMKRhpKKh9YAITnHCkNGScmKJxg6%2FYsLfgqQ8l1tsFwILANhoeoJfNcWUdCRUtds%2B7QL8Nxbij9hkyNopVvpJfM96hcy3lTAS2zJ1VbW2Ldrv%2BpZ3d9kjwmA21h%2B%2FA57InKYxu7DC92Dbr9nmTBEPDmRt%2Fm5%2FXngalQq3U9srWBrByXlHku6%2BGKd8x1HaWXDKyz7ok%2BsCl1QdfE18%2Br2iUYhtoG9tJosmD9YrkIYYollvOygn%2FhEDJYbY0aqf7sAv9F3Jx8dAapivif4%2FTwyiYc0pcoP5WG%2FVPqPVEwpanLd8166CjH%2F6MkHzqS9yDOHSvl6LtajJBS1%2FCVzJk3bFyn%2FkMB5fe7WqvkqTUDpnINckrqfQ5tSazHd9T%2FXxqfrkH2DJtiBRrgPzKPFCNMZliIIFWs3ZLoc8BUUCYiwXEOBQTMHuu0GzxhfI%2BI79%2BqnDtE34J6nnBCjzP6J6%2F4%2B84xD8FvPL%2FWCsmiD4KCCMEiobzW7z5%2FeSpMO9KJVQnr8cVaSF3VXz8bo1fxBrT1eu1DCPudbJBjqkAVccuUVGW41DqOFASNaonOwRnhrYicm9XfdUhJAkdxAUvwkCr7m9LMPq9%2BUpDSya%2FzM7gPwVLY3OPrzJmlab2%2BT5ZvRlV9q6KNjHgpRWwtuLNZWQB7kQT7APQvawZpu5IWd3kO%2FVP49rAgpB63XN9IWL%2Br3jmSQC9LPmWrmHkMgkphSwj5mPhNUuegHFlEoovkmxkTW0q9yxoenqMCUbdNDSvR3v&X-Amz-Signature=ae5fe21a7009051971e9d9dd4b1a40e33ff85b0a81d909efc5e87100974cff6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

