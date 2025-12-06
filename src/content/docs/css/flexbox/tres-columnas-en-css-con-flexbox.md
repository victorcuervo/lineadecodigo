---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCI27CAX%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T131921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzj65fWY4Mm59stQD38MEdCVj0I%2B3Ks5gNCAeZ2PhBEwIgLogXxJIEUUuvCfS5RsjpmiB%2B%2FkL87f7g6aM7%2FKaRTLYq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDIWQk4Zx4cCuUYyWsCrcAxV9%2FuDtAFHuI1soQ%2FC%2BB5yTr0ncyeesOut2J7Ewmvxc1NCRqmve6tIT3HyyJ8cbuDV4Ck8CTmAP6ehampjmOJIwhVYwuEEYnBAijemX9kE8hp%2B11g68qIerVwnPSHM6nvVK1nh6YGVwdCGmM6ey19W43659FNy1yP12M0mXpgm9gQn4A4Y5OUaTAf1NeWqqWOQBOVRX8LJN0%2FFENZmALbFNftkCRlYJpZPYPAs%2BMGulpyLu5BBvcBhuly%2F9R2lwS7B7Dv3xafZhJqwz8G5c2zTrOghusS7BjK5izN4oRA8vYkOXNZPxsLKpCDE4wyegs2AQoxQT%2BQ%2Bb0HnIVewFbsR%2FGnUhVDdKnWvhpKOXGadngksf9wD9VuaYWr92OzZH5ColxMOeTJ6WK42zhU0sqS5qEN3dC2qBH%2BZEDsnhOXH0SD1fUbAlWS8eD4mEY00%2Fg3ZBYy4WEDflQLUeAm8%2BL1NwO%2Fv07h2%2F4oD22%2BI%2BiVKdMYPjAWYZMXsrDPGekCrlSx2B9Fj7QTSafSJpub5YBNheerySS8owifrDPUN1cEls%2BhW%2F1Ug08dvK4PcLVR9s1DlQogsKKHLhxFp%2BFaM%2FlrHpAssDTjo3CdDV5gQqGG4erUz9BKK2y1E4YeUKMKWm0MkGOqUBXZHj6jfo7aB7GFbdFKvjwdB%2FC6pVCAu4mvluim91%2BAlCea81lqrffRBYFeAsKQQI5kh3rfI1xs5tfIgS2xYiLq6GkJsLEPz%2FRRxYsPRoz%2BfjL1l%2BO3nd1gJ5%2FWRaIikXHPNQ3HsdocDqL8p%2FzAWOjhSnLHsM33CwKr4mCyttmDUdJpEJ8qvGN6OHtpirIYnNHNozsgiKzjoTMksaZmjsVadcR8XE&X-Amz-Signature=32caf8a7241d1ba02dd40f637c176b14ecc63818e9999fbe67f43751c9c98d83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCI27CAX%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T131921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzj65fWY4Mm59stQD38MEdCVj0I%2B3Ks5gNCAeZ2PhBEwIgLogXxJIEUUuvCfS5RsjpmiB%2B%2FkL87f7g6aM7%2FKaRTLYq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDIWQk4Zx4cCuUYyWsCrcAxV9%2FuDtAFHuI1soQ%2FC%2BB5yTr0ncyeesOut2J7Ewmvxc1NCRqmve6tIT3HyyJ8cbuDV4Ck8CTmAP6ehampjmOJIwhVYwuEEYnBAijemX9kE8hp%2B11g68qIerVwnPSHM6nvVK1nh6YGVwdCGmM6ey19W43659FNy1yP12M0mXpgm9gQn4A4Y5OUaTAf1NeWqqWOQBOVRX8LJN0%2FFENZmALbFNftkCRlYJpZPYPAs%2BMGulpyLu5BBvcBhuly%2F9R2lwS7B7Dv3xafZhJqwz8G5c2zTrOghusS7BjK5izN4oRA8vYkOXNZPxsLKpCDE4wyegs2AQoxQT%2BQ%2Bb0HnIVewFbsR%2FGnUhVDdKnWvhpKOXGadngksf9wD9VuaYWr92OzZH5ColxMOeTJ6WK42zhU0sqS5qEN3dC2qBH%2BZEDsnhOXH0SD1fUbAlWS8eD4mEY00%2Fg3ZBYy4WEDflQLUeAm8%2BL1NwO%2Fv07h2%2F4oD22%2BI%2BiVKdMYPjAWYZMXsrDPGekCrlSx2B9Fj7QTSafSJpub5YBNheerySS8owifrDPUN1cEls%2BhW%2F1Ug08dvK4PcLVR9s1DlQogsKKHLhxFp%2BFaM%2FlrHpAssDTjo3CdDV5gQqGG4erUz9BKK2y1E4YeUKMKWm0MkGOqUBXZHj6jfo7aB7GFbdFKvjwdB%2FC6pVCAu4mvluim91%2BAlCea81lqrffRBYFeAsKQQI5kh3rfI1xs5tfIgS2xYiLq6GkJsLEPz%2FRRxYsPRoz%2BfjL1l%2BO3nd1gJ5%2FWRaIikXHPNQ3HsdocDqL8p%2FzAWOjhSnLHsM33CwKr4mCyttmDUdJpEJ8qvGN6OHtpirIYnNHNozsgiKzjoTMksaZmjsVadcR8XE&X-Amz-Signature=3895a10fd50cc76e2416e6c9f9a5b362daa73e3d481a22240d6214c5b56e8cda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

