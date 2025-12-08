---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XYX6NZ3%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T195507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtZUiRD8wLXLiv2%2Fme0Ya23yR%2FMdPMGropyUymffu7SgIhAIqTG2%2F%2FEBukw2m2wo0xHd9%2BNGTOQu8SGoD%2BbB5FqGZiKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyI9fV7x9WDVdc0Hckq3APqqe7gdleGpYVDtQAzAKb2Kt%2F5%2Fb4zHnZ0cbPbkH0ITKx%2BhmbX8eWMRiayQZTJE9LnBcBfb6RWNta2811jYbo2iLgn6hiqKmSmu%2B6UOyX8zWEpidoIAgNEzCvNiUmTly3Px5peH%2BELRnJMXex1g9we4JGkJdE%2B9eGtLjN1Fz%2B2pDYERGrRYWtNeOz5uYje%2BQTbl%2FQy6kBPwUosbWF8H64yUr7rjO7YoDUEbd%2BKF2DzqZPAeZLs%2Fw5L3pIfgx06dThcpwwPwcRO8OK9fsFe89KNnCYegQAR7tNqnhoY04qHyf92RHmOv9rtQF9p5YDCpLoPdRetP6EsZzkR1x%2Fc7IoYXgOG25HyE0orxmlvS5kfyj3%2BCLoPWTEproAuo91XUiGiUNpPnP7H9a%2By0b7TNpX6eDuW3H8klJdqQ0btEjml3PjXN1klrmfgaBG98saS88RVnnc3Ynuv6Pt6AA7nuwKN5BP4b71oN467T9qzJwvLNBg3dl%2BdbnUcIekurJqs64ntNgUR40V0v2e5N0OPraVPplIzqOnHOC4doxfExqn1yUsL%2FEOLCE2sI5t0DqolN%2B6Z43fzK97y4V5vVyefVMt%2Bufz7jmPORAv1AOHTe%2By0WFAsH7Zo8SuSKD0%2F9zDms9zJBjqkAQ%2FH007qdf8c%2B5yMpvjgZG9s8O2ILrWdFWi4G3Z5rhhmk2j9%2FhLO4nw3GKn82X58ggRGQuRJRRUAD1V0uxiV5yDJk6FGS%2B3FRcEl%2Bp%2FRWeisH5rnqjPTVEIMviNWvvQUQ6bYSUEZj4oDWaQB2hkssf06GKHb0q1bwXTV5oVyAaKcWArZd83t9WLMytl3bCD7iSUt%2BVdfefr2p%2BjiLQiU4W9VsEXv&X-Amz-Signature=27ae4b271f23ed2e1fcc648e078f964598137101af28f063840269c71c7166dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XYX6NZ3%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T195507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtZUiRD8wLXLiv2%2Fme0Ya23yR%2FMdPMGropyUymffu7SgIhAIqTG2%2F%2FEBukw2m2wo0xHd9%2BNGTOQu8SGoD%2BbB5FqGZiKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyI9fV7x9WDVdc0Hckq3APqqe7gdleGpYVDtQAzAKb2Kt%2F5%2Fb4zHnZ0cbPbkH0ITKx%2BhmbX8eWMRiayQZTJE9LnBcBfb6RWNta2811jYbo2iLgn6hiqKmSmu%2B6UOyX8zWEpidoIAgNEzCvNiUmTly3Px5peH%2BELRnJMXex1g9we4JGkJdE%2B9eGtLjN1Fz%2B2pDYERGrRYWtNeOz5uYje%2BQTbl%2FQy6kBPwUosbWF8H64yUr7rjO7YoDUEbd%2BKF2DzqZPAeZLs%2Fw5L3pIfgx06dThcpwwPwcRO8OK9fsFe89KNnCYegQAR7tNqnhoY04qHyf92RHmOv9rtQF9p5YDCpLoPdRetP6EsZzkR1x%2Fc7IoYXgOG25HyE0orxmlvS5kfyj3%2BCLoPWTEproAuo91XUiGiUNpPnP7H9a%2By0b7TNpX6eDuW3H8klJdqQ0btEjml3PjXN1klrmfgaBG98saS88RVnnc3Ynuv6Pt6AA7nuwKN5BP4b71oN467T9qzJwvLNBg3dl%2BdbnUcIekurJqs64ntNgUR40V0v2e5N0OPraVPplIzqOnHOC4doxfExqn1yUsL%2FEOLCE2sI5t0DqolN%2B6Z43fzK97y4V5vVyefVMt%2Bufz7jmPORAv1AOHTe%2By0WFAsH7Zo8SuSKD0%2F9zDms9zJBjqkAQ%2FH007qdf8c%2B5yMpvjgZG9s8O2ILrWdFWi4G3Z5rhhmk2j9%2FhLO4nw3GKn82X58ggRGQuRJRRUAD1V0uxiV5yDJk6FGS%2B3FRcEl%2Bp%2FRWeisH5rnqjPTVEIMviNWvvQUQ6bYSUEZj4oDWaQB2hkssf06GKHb0q1bwXTV5oVyAaKcWArZd83t9WLMytl3bCD7iSUt%2BVdfefr2p%2BjiLQiU4W9VsEXv&X-Amz-Signature=ecf3de69521703f82cc3c1a7fae248d43931a197f8d5a0aacf9e9be76aa4c113&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

