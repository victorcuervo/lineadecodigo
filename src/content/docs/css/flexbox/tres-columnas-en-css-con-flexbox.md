---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDHXO5XX%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T142758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCICem%2FZLe4RWO%2FA%2B9MFGzqBj2KZxNBiD3IwjmibAv9eENAiEAwHLZFrU%2ByW0DJVYyT%2Bf71UIe2Z5J7Jm%2Fp6OgQmxpDeEq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDLmHgEqqiZ3gM%2FYkHyrcA5CAGsVKw6bnuSbladFV0Lj%2BCl32xcHyeDLuYIElQm1IvFyQL8lADAtLAfa%2FQEnFxFzkDknj%2BpbGpXrIwrb7B%2BpCmeMpDnze5EUv9Ok%2FD3ADHJ1ygScIMIcTMZSgGpgdXbeyaIdIswib83ZklUH5ju%2BYg1azFYh%2FP4h44IsrVElFVPLY9XRsrhmCi%2BSZHz4otXDwQavlVYptAjeMMkHqKSnPxE4mojy7daJkQWyUmD2TiZXXoGwXkXA305Sb0CGkT6JRvXDC9n3Fu9ramA4ux9mT8VtaD%2FFHnia%2FGlgU%2BV6Db7UwYKOlcsSX7xs0QFH6c%2B%2BWqtGq6H6moZ9vYj7boFkCwRPtbiEOA6wgGfFXLv8%2BikQ0QkiH7yUz0wUTJ%2Fbj2oY76k6gFy35lMUbKGRFdBUvvAtiIv0h5K3p%2BCgnK5umfdhfDKrH3NBMo9kEAqbIlaO%2BicByeyr3Nn8mYnhrDhhDqKEXzG8szG0SA9RYSxYU6d1BdKCv5oGDjVhUJK4hJQ%2BPi6rgSbw%2FLnhX4NLscep2VzW0rYjbjjUhLUjKpsSKHa7XE%2F3YPitPNNqcrweev1llnNtc%2B1yE%2BOdc9MP1ENkj17qExfpSHHzPtU%2FEHR1FER6stI2RXweuhE5cMK%2BixskGOqUB9%2F6WdkUZ4kOXyFm2R6CT9xhCLSSnO8m0c3sGYKPP1xMbBiVnxOr%2BBG49dMqReVA48YzEr%2Bzy40AARI3%2F1EWMUfjs%2FqOiOy8KDmE5qCq%2FPLzdX8Xbck%2F%2BXYfRiPQMypmNvg5QZ6WHybwLg5eVveJEW1yOcXNeeL3Vxiv3Lgn12nsS0g9Z9n8t7dJylSYGojIN%2FyShAmHQMIHl3L5HIqk4WV4TGcsI&X-Amz-Signature=bc4dde0181efe3d1920a08a319e204c91ed1d7ae714523085082320d0f98b8d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDHXO5XX%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T142758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCICem%2FZLe4RWO%2FA%2B9MFGzqBj2KZxNBiD3IwjmibAv9eENAiEAwHLZFrU%2ByW0DJVYyT%2Bf71UIe2Z5J7Jm%2Fp6OgQmxpDeEq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDLmHgEqqiZ3gM%2FYkHyrcA5CAGsVKw6bnuSbladFV0Lj%2BCl32xcHyeDLuYIElQm1IvFyQL8lADAtLAfa%2FQEnFxFzkDknj%2BpbGpXrIwrb7B%2BpCmeMpDnze5EUv9Ok%2FD3ADHJ1ygScIMIcTMZSgGpgdXbeyaIdIswib83ZklUH5ju%2BYg1azFYh%2FP4h44IsrVElFVPLY9XRsrhmCi%2BSZHz4otXDwQavlVYptAjeMMkHqKSnPxE4mojy7daJkQWyUmD2TiZXXoGwXkXA305Sb0CGkT6JRvXDC9n3Fu9ramA4ux9mT8VtaD%2FFHnia%2FGlgU%2BV6Db7UwYKOlcsSX7xs0QFH6c%2B%2BWqtGq6H6moZ9vYj7boFkCwRPtbiEOA6wgGfFXLv8%2BikQ0QkiH7yUz0wUTJ%2Fbj2oY76k6gFy35lMUbKGRFdBUvvAtiIv0h5K3p%2BCgnK5umfdhfDKrH3NBMo9kEAqbIlaO%2BicByeyr3Nn8mYnhrDhhDqKEXzG8szG0SA9RYSxYU6d1BdKCv5oGDjVhUJK4hJQ%2BPi6rgSbw%2FLnhX4NLscep2VzW0rYjbjjUhLUjKpsSKHa7XE%2F3YPitPNNqcrweev1llnNtc%2B1yE%2BOdc9MP1ENkj17qExfpSHHzPtU%2FEHR1FER6stI2RXweuhE5cMK%2BixskGOqUB9%2F6WdkUZ4kOXyFm2R6CT9xhCLSSnO8m0c3sGYKPP1xMbBiVnxOr%2BBG49dMqReVA48YzEr%2Bzy40AARI3%2F1EWMUfjs%2FqOiOy8KDmE5qCq%2FPLzdX8Xbck%2F%2BXYfRiPQMypmNvg5QZ6WHybwLg5eVveJEW1yOcXNeeL3Vxiv3Lgn12nsS0g9Z9n8t7dJylSYGojIN%2FyShAmHQMIHl3L5HIqk4WV4TGcsI&X-Amz-Signature=38384aae69169833be60a568f87996763243097b4b7fe681df9fe300dd357bd0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

