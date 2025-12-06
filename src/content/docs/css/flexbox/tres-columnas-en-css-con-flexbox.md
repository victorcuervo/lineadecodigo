---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBZIGFOU%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T232128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAu%2BGUYHqZAD0MDkBbtuf0jeR%2BfvUN7IHqkeUQTka2BgIgdr2qpEn0MCY%2BD8uqvhVSp6euu5gSW%2Fsen%2FFrfFxHFDgq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDNIWE8lQaFWQylC%2FlSrcA0YPe7ej68ZoyUv%2BeUygS2NdHSvFNWas%2FMWvMEZxbw3P6p5DhcMmT6TfLotP6q3ScOjXPaZcwb2OIrwTziU4msar0sgba76RUL2PDfZc9pq6W0mn%2Bm%2BgIB8bmx4pAT%2Fup5SsAerwL9ZGDSyanQR4aSt3aeDVhVvHuk%2FWrYIWZL7D3%2FdhN%2FwWvMWPHoAB%2FnXj5kcGohO8eG5yTTjAgZk47P1ShU6%2BIGEEdfkPyahup%2FjONBbyg19uHKNH%2B3SyhKS7Mh1TXOcNQeyp6NrPHOMYrEISGQEsRUFRZu8k988VhlSR%2B0TNhYNT7mpdx2enK%2BFYE9cKS14XvN0C2AQrrRO2XI9RnCsdPLgwgmbv5MhVBPE4fBx8StPjZOutnGVo2iK9TaisvwLjVWDAczz8v2izUcGvqOunJVJFzQfb31I0cLBVUGbYNvWdt6RkUMekbgKIASADfOHHhPXhpPOdz4NrYGYTaumpt82CbdAfuZoGeYsBec%2Bb%2FmbpaH2i%2Bu355YSR85QqmDt3ymrPLcif%2FQdwo%2FHIgXp8PseKRqqRIlkz9sItmaeFFjvCOv8sJAKWbw%2Bac9CJOCwA5%2FHaDFGFXGWPeI5uAwSwQ4yLzkUdjiWlqy0eGGw0Q8p5vYagSZArMM7U0skGOqUBT%2FNoe4Yvu9N0AZfCl2M315E%2FLyIFjg2laM4QafeSS1ozk6LZH2oEFMD5oHrrK8yDBMjCLEG8DhUQPqgBhlHj9%2BLb2NQ9etIt2ShF7qbp3spR4oXpC7qpozWmRq0ED9gsx%2F1s0MjUxPKXHrhvyrDSRMgg%2F2tiXrJxkEa2kC7SqJIzaH7Lw8uKMOd4MtizxTi5oqkmfDuQVVey%2BRlwfQShG00sd%2FIp&X-Amz-Signature=b319bde844124ed7499f94399dd2963a123b076677301848161eef2555b431e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBZIGFOU%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T232128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAu%2BGUYHqZAD0MDkBbtuf0jeR%2BfvUN7IHqkeUQTka2BgIgdr2qpEn0MCY%2BD8uqvhVSp6euu5gSW%2Fsen%2FFrfFxHFDgq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDNIWE8lQaFWQylC%2FlSrcA0YPe7ej68ZoyUv%2BeUygS2NdHSvFNWas%2FMWvMEZxbw3P6p5DhcMmT6TfLotP6q3ScOjXPaZcwb2OIrwTziU4msar0sgba76RUL2PDfZc9pq6W0mn%2Bm%2BgIB8bmx4pAT%2Fup5SsAerwL9ZGDSyanQR4aSt3aeDVhVvHuk%2FWrYIWZL7D3%2FdhN%2FwWvMWPHoAB%2FnXj5kcGohO8eG5yTTjAgZk47P1ShU6%2BIGEEdfkPyahup%2FjONBbyg19uHKNH%2B3SyhKS7Mh1TXOcNQeyp6NrPHOMYrEISGQEsRUFRZu8k988VhlSR%2B0TNhYNT7mpdx2enK%2BFYE9cKS14XvN0C2AQrrRO2XI9RnCsdPLgwgmbv5MhVBPE4fBx8StPjZOutnGVo2iK9TaisvwLjVWDAczz8v2izUcGvqOunJVJFzQfb31I0cLBVUGbYNvWdt6RkUMekbgKIASADfOHHhPXhpPOdz4NrYGYTaumpt82CbdAfuZoGeYsBec%2Bb%2FmbpaH2i%2Bu355YSR85QqmDt3ymrPLcif%2FQdwo%2FHIgXp8PseKRqqRIlkz9sItmaeFFjvCOv8sJAKWbw%2Bac9CJOCwA5%2FHaDFGFXGWPeI5uAwSwQ4yLzkUdjiWlqy0eGGw0Q8p5vYagSZArMM7U0skGOqUBT%2FNoe4Yvu9N0AZfCl2M315E%2FLyIFjg2laM4QafeSS1ozk6LZH2oEFMD5oHrrK8yDBMjCLEG8DhUQPqgBhlHj9%2BLb2NQ9etIt2ShF7qbp3spR4oXpC7qpozWmRq0ED9gsx%2F1s0MjUxPKXHrhvyrDSRMgg%2F2tiXrJxkEa2kC7SqJIzaH7Lw8uKMOd4MtizxTi5oqkmfDuQVVey%2BRlwfQShG00sd%2FIp&X-Amz-Signature=aa472eedb3e964b4bffbd10d90ade14d8da20a1e464961af6ca933ae813a7533&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

