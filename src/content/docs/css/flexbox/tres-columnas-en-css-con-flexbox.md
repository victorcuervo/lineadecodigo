---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKWHHXPA%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T083556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLfPowsmLPzsCYp1ns7kzWiKNMc9aVgge1warUsc1yjgIhALIW3hBh4ElnvgcvGEalVrHtRT7iTXjwxtJNcybaDNtsKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxRmx6G%2BAvMFhVPZRAq3ANN%2F5%2F%2FIMwyTPQtpKH%2Ba4GpfWHq0e1GltfKMR%2F6iB3mPd77eeuqoDnbL5jGJNPwozK1kSPohk%2BKnfu79niXI3oqyL3%2BUwG%2Fdh5y8E9TAHM9ky24LaBWxNcsG7yfLMdUgmEKI%2F09Y97a2KFlMGhcIrccGTC9udoMK1k4tGlCTkNGMypfFnv778LBV%2F82RTjmQoz4sdsZx1CssKREJL3HfO79AUr1QfxBNLivnbifgfUXfIxT0%2B0wkTDeiSZRjm0qRJ%2FO8EZeTylBJ4NjBQsPZTI1l4Tmdtd2A41KulfrKAR8VDnmrG8DSUZ52Gp6cIrfWhjGa4tU1AopwFbzvF9s7U9TtvUgzNHI%2F5Z1stFD8Tx%2BVyNsNp7cuDuMsVn%2BOe73JmydQKmOQvwF3rd%2BfG%2B%2Fj0sjZx53Cj3%2F0UvaQ5vpMG0NJDBYStvjHSMoz3ZLHiqRHZypJiboN3Oo9vbZKFNpjWo5LJpR%2FrbLqNDBmzC4fALxPRgTl9zmhsZrUPUoKs688PMK92kDLwEqRZx92Gvma9NFteXJW7BlUnA4kvt8NQMerrbkxjrHrgrARdixOnZRiY8yBgtb%2FM4X%2FNYy6gOILuUs%2Bgwj15wpyLR9Jr5fw6FhB9lqIM3Vk2EuSSzOWjCwotTJBjqkAfn1%2BQbXb0YaEs%2BryG3Etj%2Fk%2F774KQy8nhfGG5uXGvHAe%2FG8u%2Bv05VNp6fAiWvGZ7n%2BzKfd%2F%2FcUnxdZnLRucjd5u6Ie7ZTm9Yv7nx8IsmTcGNneDsyGAWM9AsZ00X%2FVQhj7Mwl%2B8qCs3y73peWmqGFEoype%2BhcLQtFbbNiFfjv8Xq%2BbDPryYMwBsXzpb%2FgFssXSsd696Uugz%2FFxvnE9wNwiMOgOH&X-Amz-Signature=d9869f47ada4972579a87097256521577694aefc1ede888846525e23b9a713a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKWHHXPA%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T083556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLfPowsmLPzsCYp1ns7kzWiKNMc9aVgge1warUsc1yjgIhALIW3hBh4ElnvgcvGEalVrHtRT7iTXjwxtJNcybaDNtsKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxRmx6G%2BAvMFhVPZRAq3ANN%2F5%2F%2FIMwyTPQtpKH%2Ba4GpfWHq0e1GltfKMR%2F6iB3mPd77eeuqoDnbL5jGJNPwozK1kSPohk%2BKnfu79niXI3oqyL3%2BUwG%2Fdh5y8E9TAHM9ky24LaBWxNcsG7yfLMdUgmEKI%2F09Y97a2KFlMGhcIrccGTC9udoMK1k4tGlCTkNGMypfFnv778LBV%2F82RTjmQoz4sdsZx1CssKREJL3HfO79AUr1QfxBNLivnbifgfUXfIxT0%2B0wkTDeiSZRjm0qRJ%2FO8EZeTylBJ4NjBQsPZTI1l4Tmdtd2A41KulfrKAR8VDnmrG8DSUZ52Gp6cIrfWhjGa4tU1AopwFbzvF9s7U9TtvUgzNHI%2F5Z1stFD8Tx%2BVyNsNp7cuDuMsVn%2BOe73JmydQKmOQvwF3rd%2BfG%2B%2Fj0sjZx53Cj3%2F0UvaQ5vpMG0NJDBYStvjHSMoz3ZLHiqRHZypJiboN3Oo9vbZKFNpjWo5LJpR%2FrbLqNDBmzC4fALxPRgTl9zmhsZrUPUoKs688PMK92kDLwEqRZx92Gvma9NFteXJW7BlUnA4kvt8NQMerrbkxjrHrgrARdixOnZRiY8yBgtb%2FM4X%2FNYy6gOILuUs%2Bgwj15wpyLR9Jr5fw6FhB9lqIM3Vk2EuSSzOWjCwotTJBjqkAfn1%2BQbXb0YaEs%2BryG3Etj%2Fk%2F774KQy8nhfGG5uXGvHAe%2FG8u%2Bv05VNp6fAiWvGZ7n%2BzKfd%2F%2FcUnxdZnLRucjd5u6Ie7ZTm9Yv7nx8IsmTcGNneDsyGAWM9AsZ00X%2FVQhj7Mwl%2B8qCs3y73peWmqGFEoype%2BhcLQtFbbNiFfjv8Xq%2BbDPryYMwBsXzpb%2FgFssXSsd696Uugz%2FFxvnE9wNwiMOgOH&X-Amz-Signature=caaf6ee57ca043054d66aac4f5c4df80cdc55f6ed1b75f8020de8e42b0ea10a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

