---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZDZMFM6%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T203141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvH0OhUHLIb%2FskNpKR7Q7NezeQonKiyvNNMDCyEhti0AIgVCf%2FJJ%2F4X3fJ987Wdk54Ku1cFkws7DeOUqvGpLV3abwq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDLneR6g8wge5Z3RSAircA1EqVrqJabpczr9mcyRxTNZj58iRadb9Xa%2FclcDrhPcli6a%2BDuGs6Sec6nF5RoJluPOzmDVEfyzuT3HjxSqdYCR8l4FTE7xYn%2BQKN%2BpqvEYLS4ww3Vyy3Pzw95gYAR8j%2FVp0%2BjnQevzAE8ioJBOd1r4vQTQY7ilMOS7a9kIFnnoVgwcagnY3hivSuhS3LBXj6vNqhmm22DTLDfx2%2BnVUq0QyAyFxOvTAf9oFKrMQzspWD1xkX%2Bq4Nenzuu%2FyLc7Rll7bdIgMrUcSnU4Y466dgvUKYAJ8tng2DxIA5P%2B5UYs1yWs63sc9qzvhu%2FzkBKYCbRG69uYH3T5aYcs2bsd2S6aHqKcmwK2oGBG094fRgZ0UrzgAz7c9uMXz4EVepv1m404r1%2FQNeRgiP6KL63lYktA%2F7oDuO%2FV6FLBuuVYzeHLXKgUaG8Rv9qsR4582my6W9BRaWzZVwHuglWYeRYLYc%2Fshdri5%2FYomIImqLd4QU35DZZyXX1kmQGV4oYeSKG3aqp03CWu6lT8zyTK0fmytL14SyegoySk4%2BSNM70tfJeEBm%2FeKLUyLjVvigF8y931dZr0dSx%2BzsnTSZ6K0tEJpZ0Q4mrYkO0HB3M4HRaIuw250ZZ%2Ff63KtGihegPVZMNfly8kGOqUBsQoNzOryOl%2FsYhzLl7dv3d96U%2FHFKrvUHAarJCBCbq0t18Hy5KjhnaX%2BT%2FLfiVi1r54ZD%2Bgd2aUMkzIHkSRWbokZ%2FmbF%2BJPNeeF9gFHBA9WyJUwFMMJ94dXxTqlN8ww84RnCrModhenp9xa%2B1uADTzWaaskiLbpsNq8clfrDiVlfy6W8hAHIN%2FsTjO5%2BHl%2FjoKfqPzjRgDcvLBemLZe0qGOi95Le&X-Amz-Signature=553413bde5358ac7e6c797b8189bc5880ed4fdb894a1d271804625f0e45f3efc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZDZMFM6%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T203141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvH0OhUHLIb%2FskNpKR7Q7NezeQonKiyvNNMDCyEhti0AIgVCf%2FJJ%2F4X3fJ987Wdk54Ku1cFkws7DeOUqvGpLV3abwq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDLneR6g8wge5Z3RSAircA1EqVrqJabpczr9mcyRxTNZj58iRadb9Xa%2FclcDrhPcli6a%2BDuGs6Sec6nF5RoJluPOzmDVEfyzuT3HjxSqdYCR8l4FTE7xYn%2BQKN%2BpqvEYLS4ww3Vyy3Pzw95gYAR8j%2FVp0%2BjnQevzAE8ioJBOd1r4vQTQY7ilMOS7a9kIFnnoVgwcagnY3hivSuhS3LBXj6vNqhmm22DTLDfx2%2BnVUq0QyAyFxOvTAf9oFKrMQzspWD1xkX%2Bq4Nenzuu%2FyLc7Rll7bdIgMrUcSnU4Y466dgvUKYAJ8tng2DxIA5P%2B5UYs1yWs63sc9qzvhu%2FzkBKYCbRG69uYH3T5aYcs2bsd2S6aHqKcmwK2oGBG094fRgZ0UrzgAz7c9uMXz4EVepv1m404r1%2FQNeRgiP6KL63lYktA%2F7oDuO%2FV6FLBuuVYzeHLXKgUaG8Rv9qsR4582my6W9BRaWzZVwHuglWYeRYLYc%2Fshdri5%2FYomIImqLd4QU35DZZyXX1kmQGV4oYeSKG3aqp03CWu6lT8zyTK0fmytL14SyegoySk4%2BSNM70tfJeEBm%2FeKLUyLjVvigF8y931dZr0dSx%2BzsnTSZ6K0tEJpZ0Q4mrYkO0HB3M4HRaIuw250ZZ%2Ff63KtGihegPVZMNfly8kGOqUBsQoNzOryOl%2FsYhzLl7dv3d96U%2FHFKrvUHAarJCBCbq0t18Hy5KjhnaX%2BT%2FLfiVi1r54ZD%2Bgd2aUMkzIHkSRWbokZ%2FmbF%2BJPNeeF9gFHBA9WyJUwFMMJ94dXxTqlN8ww84RnCrModhenp9xa%2B1uADTzWaaskiLbpsNq8clfrDiVlfy6W8hAHIN%2FsTjO5%2BHl%2FjoKfqPzjRgDcvLBemLZe0qGOi95Le&X-Amz-Signature=492c3f0cc35f1061171c9cba54679d7afdfa4a3a7d1db4d2c325cbcc6adf0016&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

