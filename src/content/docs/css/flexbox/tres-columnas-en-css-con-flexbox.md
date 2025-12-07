---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FUPCRQO%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T144034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG3fT9n7%2FtvYGw%2BSO%2B%2BD5QNFQqxinCYlqLhr6cE%2BXo1kAiEA9pnViWT0CTGchOsndK3oHCtAEo37w6xP3brIQg%2BHp7YqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGcX3anOw8W%2BZeWh2ircA8GC8MLCLjWrmC%2FV4M6plIsYCcGMzLjrY2tZzxgxQ%2BGG9CDkhFD%2B%2BX66gYE30bD3d%2BkNvZ874Rtc1mTHCBllug3DrytI9yr06FfYXV0cTdI%2FVxSlIcj7QfngFkJ8TxEiV%2BQRqnuZem3VVm3Cv7bkS9bvEf0TUPSeNXpESGk7Q%2FesaarCx0cU%2BBzS8HE5vBOvDYbB%2FrLwCHujqbfmgrqtKZtEcx5T9O48bL2Rqtsqn7JVL1dh%2BPm%2FW5YAjOd1kSQ8gPk2h5xC%2BkqKhgCYfCZv5vY8aqRDwQrQ2jlWcwGhEfjNVWXtKrYFe2SfzVMxzmmTBkqTqv8u6sgg2znWrEDBQGuzg53EAD6GHCH5aBNUzV73BHDszHNkoMfifM8Bn%2BYRiVxLq92sx89TJMKI%2FODCM3RLsWb%2Fd3KODQPaPMBZH92gJ1HF33B2Hg1bUAEponRhDkIZrgdg2xxvDGCGG15atmJ7edcrzAo4UcThCZhF5VWFThOxQrB9gxsoKNg%2BSNXivBFc%2FX59c8xn2d72loVKA8KIE%2FJKc0Z2TZQvoYUl6sgBFnDa5F6E84mc%2FMSIAKHo34NYa0%2BIRWHCc7a3jvuol46LZJ4FpeTmkMbRZAE427oZaDh3WKekgwDTY6KwMOuZ1ckGOqUBi%2FFYA8kp7hjQQcrd1n0BXJUbTv8ItvmQJSnRkvVPD%2BEoLkXrSGtIS%2BQGqErw9UB%2BHMDuOK%2B4p%2BE4lnCKWhV0wSHkh4rkfjiN9y7VRV5%2FpVFry%2FRpHHPfJPfEBuKjmpprWWcmXRVxbXej3aHMsymCWAeIpy7PJhW7Ybg7ZsLCbOalXJOJKvEemop8kzJ4jtaOzxl1ZThDKOz3wDWqFL4qFq%2Fd2Raj&X-Amz-Signature=57c1d1ee330b747d08a16a86d0753220750e1683187d8342f3a42d90e3b3ac39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FUPCRQO%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T144034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG3fT9n7%2FtvYGw%2BSO%2B%2BD5QNFQqxinCYlqLhr6cE%2BXo1kAiEA9pnViWT0CTGchOsndK3oHCtAEo37w6xP3brIQg%2BHp7YqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGcX3anOw8W%2BZeWh2ircA8GC8MLCLjWrmC%2FV4M6plIsYCcGMzLjrY2tZzxgxQ%2BGG9CDkhFD%2B%2BX66gYE30bD3d%2BkNvZ874Rtc1mTHCBllug3DrytI9yr06FfYXV0cTdI%2FVxSlIcj7QfngFkJ8TxEiV%2BQRqnuZem3VVm3Cv7bkS9bvEf0TUPSeNXpESGk7Q%2FesaarCx0cU%2BBzS8HE5vBOvDYbB%2FrLwCHujqbfmgrqtKZtEcx5T9O48bL2Rqtsqn7JVL1dh%2BPm%2FW5YAjOd1kSQ8gPk2h5xC%2BkqKhgCYfCZv5vY8aqRDwQrQ2jlWcwGhEfjNVWXtKrYFe2SfzVMxzmmTBkqTqv8u6sgg2znWrEDBQGuzg53EAD6GHCH5aBNUzV73BHDszHNkoMfifM8Bn%2BYRiVxLq92sx89TJMKI%2FODCM3RLsWb%2Fd3KODQPaPMBZH92gJ1HF33B2Hg1bUAEponRhDkIZrgdg2xxvDGCGG15atmJ7edcrzAo4UcThCZhF5VWFThOxQrB9gxsoKNg%2BSNXivBFc%2FX59c8xn2d72loVKA8KIE%2FJKc0Z2TZQvoYUl6sgBFnDa5F6E84mc%2FMSIAKHo34NYa0%2BIRWHCc7a3jvuol46LZJ4FpeTmkMbRZAE427oZaDh3WKekgwDTY6KwMOuZ1ckGOqUBi%2FFYA8kp7hjQQcrd1n0BXJUbTv8ItvmQJSnRkvVPD%2BEoLkXrSGtIS%2BQGqErw9UB%2BHMDuOK%2B4p%2BE4lnCKWhV0wSHkh4rkfjiN9y7VRV5%2FpVFry%2FRpHHPfJPfEBuKjmpprWWcmXRVxbXej3aHMsymCWAeIpy7PJhW7Ybg7ZsLCbOalXJOJKvEemop8kzJ4jtaOzxl1ZThDKOz3wDWqFL4qFq%2Fd2Raj&X-Amz-Signature=73a3a3ef08b8bfda3629963fee97ae78b4c766c15e24b274816c7f5d04512930&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

