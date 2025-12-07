---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VO33ITS6%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T051601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFdWavJ0zNt%2FNMObYZESazfHisRO2OHHaYxKWmhCMibSAiEA%2FZFJDPNkS9%2BxKuBrYb5MB90WanCcfsLs5PP4TsKdn4sqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNzZDG%2FqAUNiLbBOQyrcAyEZ4Q3QsYwqNMyEDwUWqepQ8kRb99%2FKDYuRQRYnmGbg7eM%2FZ5wyEkLQOYKtCy1SMCWdLOxxswgji6Vb4WhO0%2F0nDh8%2FfRmz42RTeqxkHYZ%2BhSzmp6PKqKZAO1bXxS9JSkHT4724OAzK6tRl6J5kdhR9cI%2B1M%2Btd9nOs1ZI3wRCfPMuEaHW3PccrxLiHPQVDCQnVZvM%2BhJtOMtfdlqFN2Q%2BWwKY2SyvKzJCkBDoGGr%2Fe35pBCumSHIj9b5yioHcEuecubRT2COxwphGiY%2B4Ukx1EuwNE3Jr7E0ys32utHnWglUuk0yY%2F5TDZIrURzE1t%2BcX8Htd6pstXaBMWEe0Bj7yJVZyyIqiEN9ta83lhUwdXNcXLXL8NsOogA%2FUr1LHdHGvZPBAm4NcEhH4BcC8j9zZ9L0ok3%2B9BsC7qw0Watg7QewjwHd1Vv5%2FQvfyH4w4BB97QWNW3j34m9ylqqSQ3Ag%2B5To6RRRy%2Bj9MfW2h6EPNKuMc4EdH1Wi1QX%2BY1MeRIU2SzGGleSiMWYQePiHYRnvWqrWxkRv1ukTQCTE4%2FOwHSyMlkyy5PWE38vQrbrubv6PboZezyVT6hretzr9B7K7zplU9enODMAnK8sKMisbdRQ3XKu0PkInnCrhYcMK%2F%2B0skGOqUBnn%2Bksdwl604KShEXXZdW4WLv7P6rMGmcV7TbgXGTFSBRKlizYURrWQj75eo32wQF%2BXtISYkVjeNmo5iOsjoiyCeH8dKhfF0zbWrOGZRzgSt9pkiJUnAGPmQQWW0jDlHwjS17US3vETfPqQJMxoJn71C%2F1er1NHYtgqtG3gCWPJJTurX5Hes9RW1iVvnyQ9czgTFRsKUOR8cwAHJThTne0GK1FHzn&X-Amz-Signature=cfc6cd3da281e8070f2c088ab7d78aeefe1f531a5155d483f7d6492c3ab44874&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VO33ITS6%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T051601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFdWavJ0zNt%2FNMObYZESazfHisRO2OHHaYxKWmhCMibSAiEA%2FZFJDPNkS9%2BxKuBrYb5MB90WanCcfsLs5PP4TsKdn4sqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNzZDG%2FqAUNiLbBOQyrcAyEZ4Q3QsYwqNMyEDwUWqepQ8kRb99%2FKDYuRQRYnmGbg7eM%2FZ5wyEkLQOYKtCy1SMCWdLOxxswgji6Vb4WhO0%2F0nDh8%2FfRmz42RTeqxkHYZ%2BhSzmp6PKqKZAO1bXxS9JSkHT4724OAzK6tRl6J5kdhR9cI%2B1M%2Btd9nOs1ZI3wRCfPMuEaHW3PccrxLiHPQVDCQnVZvM%2BhJtOMtfdlqFN2Q%2BWwKY2SyvKzJCkBDoGGr%2Fe35pBCumSHIj9b5yioHcEuecubRT2COxwphGiY%2B4Ukx1EuwNE3Jr7E0ys32utHnWglUuk0yY%2F5TDZIrURzE1t%2BcX8Htd6pstXaBMWEe0Bj7yJVZyyIqiEN9ta83lhUwdXNcXLXL8NsOogA%2FUr1LHdHGvZPBAm4NcEhH4BcC8j9zZ9L0ok3%2B9BsC7qw0Watg7QewjwHd1Vv5%2FQvfyH4w4BB97QWNW3j34m9ylqqSQ3Ag%2B5To6RRRy%2Bj9MfW2h6EPNKuMc4EdH1Wi1QX%2BY1MeRIU2SzGGleSiMWYQePiHYRnvWqrWxkRv1ukTQCTE4%2FOwHSyMlkyy5PWE38vQrbrubv6PboZezyVT6hretzr9B7K7zplU9enODMAnK8sKMisbdRQ3XKu0PkInnCrhYcMK%2F%2B0skGOqUBnn%2Bksdwl604KShEXXZdW4WLv7P6rMGmcV7TbgXGTFSBRKlizYURrWQj75eo32wQF%2BXtISYkVjeNmo5iOsjoiyCeH8dKhfF0zbWrOGZRzgSt9pkiJUnAGPmQQWW0jDlHwjS17US3vETfPqQJMxoJn71C%2F1er1NHYtgqtG3gCWPJJTurX5Hes9RW1iVvnyQ9czgTFRsKUOR8cwAHJThTne0GK1FHzn&X-Amz-Signature=2047a8bee226919190ea969a8b6264e11af88264328d46859fd454c4910db381&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

