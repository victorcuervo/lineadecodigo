---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622SQ436L%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T023341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDv0lJR5TBLxaAcoWMCe11I7hAjtZdXdJ%2F5YkRr%2B94ACQIhAJcVHZ%2FQwQVgk0vgUuQngcB%2B%2FPRUt6vCCv52OAoMFKL2Kv8DCE8QABoMNjM3NDIzMTgzODA1IgyGh9gcm7WI%2BWcxQUMq3AMZB1JjLtIwN5P8zcQKAo6nINdV66XTXu%2F3TN3w7Zo%2F5VLhB2Ft21Fi6mLOu6HnS2tdNLIL2V6wyZXLdCpEJgefu%2BazoAnYQi3tnnuWH6D9c4PsH79RM3vlAUM5CWQWVnWub1V%2FpWfV4ciHwmBJ9%2FxGATwUFqgC1yXuzwFfKmdNVD0LijzBv4cgi4kNQe757wkLrinH3GezwRC0srkcLbmorFqFuR6yPVJ6nai%2BTGUjqXHijlSMDDymSv0eVoTveNS1%2BPkphBLwxjC7SAhBccpXMtxZ5fTb6zffcHJoZrBl5YlJv8Ep6fVnH%2B4RKQQDPf78lImTbiPmOloi4MggHLcLDPKF0JNHaeMeQ%2BC4yri0Nij%2FIj3NfnvIVRPv2S%2BHY%2FTRC37SNqvGEsICFwT59XeWpBb1kzyp%2BLFDTxEkdgcqLBLw%2FppNfO3vaMaArv%2FgLzIgoG4yUPGSNEOXGB0phM%2Bh1YEVZXJxp3CE9hlNSQzdWAln6sIxeUXtM7RKGn3vCCbdeAMk54FAV%2BvyEmLIuktThwA%2F7J1G0LxPva21CWFNMagta7sx7aDGLTnnbe9Yn1vyrMIjUiTDVzMjfiVKfj8bQNprS3bvFxT13PTIdw9AkGIqaSjSXwY3VlElKTC0jMjJBjqkAfYwFZc1yLUQdV0di95jhXG7XxKcD0aXHDvsOcXn0GI49rUeK8H3IDLpNBnx4iPPKJaWF2a8Shr0jzsIVXRixD1XZyAfhTYr%2BOf5hx4I%2FRfAYLjI9W0ddnr1PNfwHg3fxWJdJ55doAPCy%2B4PkDJNXpBSSIOpCw19QrIPuXU63to%2Fgg0AhWHnWUYAP%2F9LYnQRP1lmykHc2%2BeOmhBeXEblmvZPSoLQ&X-Amz-Signature=3e84ed2947e1f8b056f8b234c50a67315f862f02cac84ae74eedd8fb641facaa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622SQ436L%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T023341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDv0lJR5TBLxaAcoWMCe11I7hAjtZdXdJ%2F5YkRr%2B94ACQIhAJcVHZ%2FQwQVgk0vgUuQngcB%2B%2FPRUt6vCCv52OAoMFKL2Kv8DCE8QABoMNjM3NDIzMTgzODA1IgyGh9gcm7WI%2BWcxQUMq3AMZB1JjLtIwN5P8zcQKAo6nINdV66XTXu%2F3TN3w7Zo%2F5VLhB2Ft21Fi6mLOu6HnS2tdNLIL2V6wyZXLdCpEJgefu%2BazoAnYQi3tnnuWH6D9c4PsH79RM3vlAUM5CWQWVnWub1V%2FpWfV4ciHwmBJ9%2FxGATwUFqgC1yXuzwFfKmdNVD0LijzBv4cgi4kNQe757wkLrinH3GezwRC0srkcLbmorFqFuR6yPVJ6nai%2BTGUjqXHijlSMDDymSv0eVoTveNS1%2BPkphBLwxjC7SAhBccpXMtxZ5fTb6zffcHJoZrBl5YlJv8Ep6fVnH%2B4RKQQDPf78lImTbiPmOloi4MggHLcLDPKF0JNHaeMeQ%2BC4yri0Nij%2FIj3NfnvIVRPv2S%2BHY%2FTRC37SNqvGEsICFwT59XeWpBb1kzyp%2BLFDTxEkdgcqLBLw%2FppNfO3vaMaArv%2FgLzIgoG4yUPGSNEOXGB0phM%2Bh1YEVZXJxp3CE9hlNSQzdWAln6sIxeUXtM7RKGn3vCCbdeAMk54FAV%2BvyEmLIuktThwA%2F7J1G0LxPva21CWFNMagta7sx7aDGLTnnbe9Yn1vyrMIjUiTDVzMjfiVKfj8bQNprS3bvFxT13PTIdw9AkGIqaSjSXwY3VlElKTC0jMjJBjqkAfYwFZc1yLUQdV0di95jhXG7XxKcD0aXHDvsOcXn0GI49rUeK8H3IDLpNBnx4iPPKJaWF2a8Shr0jzsIVXRixD1XZyAfhTYr%2BOf5hx4I%2FRfAYLjI9W0ddnr1PNfwHg3fxWJdJ55doAPCy%2B4PkDJNXpBSSIOpCw19QrIPuXU63to%2Fgg0AhWHnWUYAP%2F9LYnQRP1lmykHc2%2BeOmhBeXEblmvZPSoLQ&X-Amz-Signature=89fa0372f2631677173166e9c05a99314113d5f1002ad02236ef3fe54b19159a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

