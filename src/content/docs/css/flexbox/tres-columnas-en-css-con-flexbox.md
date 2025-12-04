---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YYBFGQZ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T034029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIBKMnZ33gkHaX4OZag09iqO9x2hPz5c9LxtLSeQ5%2FIJQAiEA5iR3uyatl8M5Yut5DqSccZHndl8xB9e6lPa2gSy9qQsq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDO1h5qt7U4PnwfsSMircA5%2B%2BlQJUneqGVL%2F%2F0HdUNvXW5B72%2ByL%2Fb8jrUiDenMy5ga1xt3Ez4OK7ka5NwzdHHIzG0%2FSc3aHydvKjI4J7xY4HPAWARdrFtx7w0vDPgstxyPCMQOU08SezH67PJXeyVDxzTes8CFVP1%2FDYeiVmqbY%2Bfg2W1CkAg5xn58jkYCRiLAiwxkt%2FTWiaMElz4Me5tMiz693nTiaqEpK9qZ09syFySJ63DBAkRJicmdNatWEDqq2Xo%2F%2BoNcp9b3ZWakTkBYXIUHHFkI9gzdE60YFIMQANHVGnrDOV4Shla8ls0YzyqNvi9nPIylu5CUTDHpdjikF0dnxtAz5X2QMfegcjG6MhaZUQvO%2FwpXa55QeeQ2c84R804LM%2Fmb%2ByYvoo3wvkVgkRhb%2FMr44SSXa3V9Q5X6%2Fa82vjrbA9s19HEDiYFUEDFfORsj9PDkXWxrh79jEH3n3bYNF4Ct6bxLPlxJkV2C0GxyR03NvOh1yqjp79fYnc%2B3NM6FWL4GHwKBOhB%2BFY39pDoEvbU%2FkqnD8lIuTOLxCnmvkyWjKHMrtPWRELgbfnfAT646cWBNc3WOT%2FapKH8Knj5IF7YjZMR9qrT4cULSTZzkXTIeKTCwVATNK33bgD54uspw7%2FXThE%2BMy4MMzzw8kGOqUBl8v6JFxrHHCV8SPAo5YE%2F4Gaq%2BpABHsqjzhSCo8szgIhLyBVVLfRkQG0X8N7sd2BZGfXwnEtAJavs0T7qpoWwbVCSdBEV48zQj%2BNKLq2xeBoVr8k8NFgUyxXXa%2FUrrWheg8PVnyINGy6VoWrBJqXqXX85UUwVwCg426O2Oo60rnCr5ShYBAFIxaDynbCMw9oE%2Fs5cu7X7%2BB9iMBRqMSAuQ9hf8GJ&X-Amz-Signature=b21286cb0689e6f1a2f05d698a33dea5b4f5a10d12b1102d4160638d91530f57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YYBFGQZ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T034029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIBKMnZ33gkHaX4OZag09iqO9x2hPz5c9LxtLSeQ5%2FIJQAiEA5iR3uyatl8M5Yut5DqSccZHndl8xB9e6lPa2gSy9qQsq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDO1h5qt7U4PnwfsSMircA5%2B%2BlQJUneqGVL%2F%2F0HdUNvXW5B72%2ByL%2Fb8jrUiDenMy5ga1xt3Ez4OK7ka5NwzdHHIzG0%2FSc3aHydvKjI4J7xY4HPAWARdrFtx7w0vDPgstxyPCMQOU08SezH67PJXeyVDxzTes8CFVP1%2FDYeiVmqbY%2Bfg2W1CkAg5xn58jkYCRiLAiwxkt%2FTWiaMElz4Me5tMiz693nTiaqEpK9qZ09syFySJ63DBAkRJicmdNatWEDqq2Xo%2F%2BoNcp9b3ZWakTkBYXIUHHFkI9gzdE60YFIMQANHVGnrDOV4Shla8ls0YzyqNvi9nPIylu5CUTDHpdjikF0dnxtAz5X2QMfegcjG6MhaZUQvO%2FwpXa55QeeQ2c84R804LM%2Fmb%2ByYvoo3wvkVgkRhb%2FMr44SSXa3V9Q5X6%2Fa82vjrbA9s19HEDiYFUEDFfORsj9PDkXWxrh79jEH3n3bYNF4Ct6bxLPlxJkV2C0GxyR03NvOh1yqjp79fYnc%2B3NM6FWL4GHwKBOhB%2BFY39pDoEvbU%2FkqnD8lIuTOLxCnmvkyWjKHMrtPWRELgbfnfAT646cWBNc3WOT%2FapKH8Knj5IF7YjZMR9qrT4cULSTZzkXTIeKTCwVATNK33bgD54uspw7%2FXThE%2BMy4MMzzw8kGOqUBl8v6JFxrHHCV8SPAo5YE%2F4Gaq%2BpABHsqjzhSCo8szgIhLyBVVLfRkQG0X8N7sd2BZGfXwnEtAJavs0T7qpoWwbVCSdBEV48zQj%2BNKLq2xeBoVr8k8NFgUyxXXa%2FUrrWheg8PVnyINGy6VoWrBJqXqXX85UUwVwCg426O2Oo60rnCr5ShYBAFIxaDynbCMw9oE%2Fs5cu7X7%2BB9iMBRqMSAuQ9hf8GJ&X-Amz-Signature=5b2bbd8953ed88e8dd7357492d8f9cbab5c5c482399e05cafce99e60da40ad15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

