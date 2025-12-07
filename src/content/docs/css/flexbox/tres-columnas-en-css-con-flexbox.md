---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBZKCRO2%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T103432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAwi8GsTRGpU9QoFUJyLKnMmGvR1rv19M3pRsuWz9JW4AiA5tnPM1l3p29f6DiWMpQfz%2B0NjEbjd4Qxu7blIj%2BQaQiqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBCiDgzJ0hIxhLZDdKtwDZNwwCY7cvJPyVlg5ak6%2BHclFyrH2%2BWfykg3dkPoIajzcwbN9c8VZKHVL3Z966Xejt0%2Bxlfb%2FxMmEU7iksPCIhRQDH7OPE6ubzuvJEZsmZokOTNhnjG3Ba%2B4NucBVm0dn215nVU%2FuyX%2BXayKTHi9j4W4o%2Bi4OUx9Hc7vg5tnPk%2BF0%2Bzgc4SRr5qfn9T5We56kxQqxQhsFB97SmCAY5w3RD404lGeVR9nIXsEkrErSSF1NSWVBcbl5dseAQERlkWJVQXsUHzvMlIUEsVJLBXE7YcCaviHDYhbiYKD2dIZujmGSZuKD6MHz403fR3rOQvM3eQPIg%2FtNfvM%2FAdpKo2DAoJnYHDOsbjRT%2BtZ0QpiM6gHKxdNfaVptSXtx5%2F9%2B8qX7XUwQvD4GadibyuMqj7t0Bji%2BRwxe3MzfiIJSlcUJk13l1BNB%2BSEFIImGPTCq07ng0%2FQE3PkOFXkCLYCfnHYacgGQiKATecK6b6fMhRN8jTvkUekXcr%2BYhmUh42yhzlwtV44rJzkf5Kp1XNQER2CL%2FazEzoXkXFGV%2Fpi%2FCp8yvQPgae3%2FpdFFnlo9pggf3xCI3pE1xeqtOvA3Ci1tlOhx1rmLb4MJU%2FtQUSYmrBroIWbp8sAGOMT3cwJybHEwtZrVyQY6pgFjM34dpPBLtjOi%2FfEKs8I1N5sycHMmjbcTW7oXN8o49seskwjFYFT2Kc7e4KW8fAILrj0L8akpt5iZ1TrF3lurMMIyAhysNVWNTI2q%2FRkqvvazJgtVu6fgDUgKYpDuCGhdXklBKSPqynD9JFX45NEOOpEj1SE28z%2FoVxO%2BAfHPjf4gavpHjJU53O3oIrDC3MrT5pFh4fB6C1J5DujU7nAVncrB2LIw&X-Amz-Signature=dad9c25911edd102bcb3d429eee9a9ff6638b0bd634b9bf41c336b52d882431e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBZKCRO2%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T103432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAwi8GsTRGpU9QoFUJyLKnMmGvR1rv19M3pRsuWz9JW4AiA5tnPM1l3p29f6DiWMpQfz%2B0NjEbjd4Qxu7blIj%2BQaQiqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBCiDgzJ0hIxhLZDdKtwDZNwwCY7cvJPyVlg5ak6%2BHclFyrH2%2BWfykg3dkPoIajzcwbN9c8VZKHVL3Z966Xejt0%2Bxlfb%2FxMmEU7iksPCIhRQDH7OPE6ubzuvJEZsmZokOTNhnjG3Ba%2B4NucBVm0dn215nVU%2FuyX%2BXayKTHi9j4W4o%2Bi4OUx9Hc7vg5tnPk%2BF0%2Bzgc4SRr5qfn9T5We56kxQqxQhsFB97SmCAY5w3RD404lGeVR9nIXsEkrErSSF1NSWVBcbl5dseAQERlkWJVQXsUHzvMlIUEsVJLBXE7YcCaviHDYhbiYKD2dIZujmGSZuKD6MHz403fR3rOQvM3eQPIg%2FtNfvM%2FAdpKo2DAoJnYHDOsbjRT%2BtZ0QpiM6gHKxdNfaVptSXtx5%2F9%2B8qX7XUwQvD4GadibyuMqj7t0Bji%2BRwxe3MzfiIJSlcUJk13l1BNB%2BSEFIImGPTCq07ng0%2FQE3PkOFXkCLYCfnHYacgGQiKATecK6b6fMhRN8jTvkUekXcr%2BYhmUh42yhzlwtV44rJzkf5Kp1XNQER2CL%2FazEzoXkXFGV%2Fpi%2FCp8yvQPgae3%2FpdFFnlo9pggf3xCI3pE1xeqtOvA3Ci1tlOhx1rmLb4MJU%2FtQUSYmrBroIWbp8sAGOMT3cwJybHEwtZrVyQY6pgFjM34dpPBLtjOi%2FfEKs8I1N5sycHMmjbcTW7oXN8o49seskwjFYFT2Kc7e4KW8fAILrj0L8akpt5iZ1TrF3lurMMIyAhysNVWNTI2q%2FRkqvvazJgtVu6fgDUgKYpDuCGhdXklBKSPqynD9JFX45NEOOpEj1SE28z%2FoVxO%2BAfHPjf4gavpHjJU53O3oIrDC3MrT5pFh4fB6C1J5DujU7nAVncrB2LIw&X-Amz-Signature=7b2b6d04bea7ea5c82186b83b43c352dc2cedde3eecf95737a7442223dd672e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

