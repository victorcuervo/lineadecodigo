---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643CNCBAL%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T225213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQDHnT0kKIXoJjJQBUOQB4YWfX9Aw4RX05ch8vukqdzohAIgAtnvVoLaHA7Gjm9FzDsfd%2F7EwFWtyJWS%2FpZqmztQLh8q%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDP1CF69M3ZINdUCvTSrcAwwUd158IZDrEltBlFppcvWc8AxR%2BwhZjPsdlwoIIgQrrhDGtbh%2BBJU6nmuIeYDNBnTHKR8TQLFWAGqayF%2FxHylt2yULJ5ZiamJ%2B9DyxJJ7qgM%2BuNkn0nGVLjLQFcuGkQ1hLD6DJWXMpu6TSawZkCvRckDZy2%2FVIh37BPzqVWrOLhWQA3lILImKOtM9z8jcdWUzW3t86WFWstWzNQPhMU%2BdmuXBtArVPoIQTfTBvznvUZyHiuhBFxcWCgJRUYsACXPZEyHttJpp3ZR04mCdogrxq3X6l0RNk%2FT4ODlmi%2BpCYcpisKsm0f9S%2Bcr%2FyK1wXE12uwlHR%2Buv%2B0JahJ8f%2Fyn59g3jISFkJ%2FO%2Fy0fGBCV9CxIcNzrL4d3PxsGqL6xRnSdQTEaavTEPZFpbe4f7kLXFYU5sfr6VH6z5MGrTPxkiRYBflD3meX3H7fzgf%2BAspVL%2Fp2vMe8Z4qs0JNmaFc1uRIPW1nkadYMJAmnKD37U6a7AHNpcE2UHjx1fDUcsK5lJFrcublz4V2kvfltHzYlPRErg5BOIyNC%2BCCdgL585Q1DlSASGvNXfH4WwELbkQFRf7HatNCmw9WRKbMObQYSINTgrcKzqGL91VmruCCNJ21%2FrA3r%2FhNQmITLg2vMNX4wskGOqUB216e%2Fy%2FUboYdB12X7UxC9YJLtGPI8pUxzIFO3RBzxjYDNbmEfWwLPfp1rhy5%2Bq5yNhZHXtLvXz363tbe16X6j1510xYNv2DRq7NMPtqE63roXXvbkh5dExHEUhedyQ5sTWLzFMN1SpVW7zt6PEsuxwxseRhaIPSGuM9TtDWQANVatZ%2Fz8M8ZlVZDqMq%2FM2GwoI4uaNJ7f56hNuJrVaMwRyt9muzg&X-Amz-Signature=327369352559ebd71e00a5a0bf2dcd4eb312ee31ebb1ee0aca71a4b267cedf98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643CNCBAL%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T225213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQDHnT0kKIXoJjJQBUOQB4YWfX9Aw4RX05ch8vukqdzohAIgAtnvVoLaHA7Gjm9FzDsfd%2F7EwFWtyJWS%2FpZqmztQLh8q%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDP1CF69M3ZINdUCvTSrcAwwUd158IZDrEltBlFppcvWc8AxR%2BwhZjPsdlwoIIgQrrhDGtbh%2BBJU6nmuIeYDNBnTHKR8TQLFWAGqayF%2FxHylt2yULJ5ZiamJ%2B9DyxJJ7qgM%2BuNkn0nGVLjLQFcuGkQ1hLD6DJWXMpu6TSawZkCvRckDZy2%2FVIh37BPzqVWrOLhWQA3lILImKOtM9z8jcdWUzW3t86WFWstWzNQPhMU%2BdmuXBtArVPoIQTfTBvznvUZyHiuhBFxcWCgJRUYsACXPZEyHttJpp3ZR04mCdogrxq3X6l0RNk%2FT4ODlmi%2BpCYcpisKsm0f9S%2Bcr%2FyK1wXE12uwlHR%2Buv%2B0JahJ8f%2Fyn59g3jISFkJ%2FO%2Fy0fGBCV9CxIcNzrL4d3PxsGqL6xRnSdQTEaavTEPZFpbe4f7kLXFYU5sfr6VH6z5MGrTPxkiRYBflD3meX3H7fzgf%2BAspVL%2Fp2vMe8Z4qs0JNmaFc1uRIPW1nkadYMJAmnKD37U6a7AHNpcE2UHjx1fDUcsK5lJFrcublz4V2kvfltHzYlPRErg5BOIyNC%2BCCdgL585Q1DlSASGvNXfH4WwELbkQFRf7HatNCmw9WRKbMObQYSINTgrcKzqGL91VmruCCNJ21%2FrA3r%2FhNQmITLg2vMNX4wskGOqUB216e%2Fy%2FUboYdB12X7UxC9YJLtGPI8pUxzIFO3RBzxjYDNbmEfWwLPfp1rhy5%2Bq5yNhZHXtLvXz363tbe16X6j1510xYNv2DRq7NMPtqE63roXXvbkh5dExHEUhedyQ5sTWLzFMN1SpVW7zt6PEsuxwxseRhaIPSGuM9TtDWQANVatZ%2Fz8M8ZlVZDqMq%2FM2GwoI4uaNJ7f56hNuJrVaMwRyt9muzg&X-Amz-Signature=b4b4ef26d4589525a611dfe7aeccc4919dd75d4fe4952d5abaa11615ecf6e9ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

