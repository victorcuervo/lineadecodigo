---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6T4OV77%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T060116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIALuy2MxjFHrnaHImpn8icHiZUphAaQA79h5QvOaWlp0AiEA%2FD2XaBXNXM%2FjaPxc7IuyDgXG0rwfyqFdxXPk9hLJy44q%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDGiLm%2FvtVmaQMe8A5CrcA2pP4TjOc2ccFoVuVKBsDetgD2uG%2Fu7T8Zt2CVNjxftRtE9TcVWVAmo1xsuir45qfpOdU3czFJETWWdworG3SPvvdFiT3xduSkGPuPGHJ62QMyUn8ycDsTScvM%2FrtuqYYC%2FmTTa4ES%2FvdLWSdlGQO5V9jFRrLcy%2FTtX1KicMbqgcCRP9jvd64HXFWC%2B%2Fcn2BA64e96Gsj6eNDWtlWwY5JJvcUZR1yrzPId4gE918uon3XrnWBboniqQ47C4L6SdIbyi4SQ%2FxvfklLhgi8vYxk74WVKaJOOSLUKWhSJm21Brrl17OnPP6uhwA%2FfOSQgZTZeuLJT7%2FDJ95lNCgmT%2Bp%2FjhZZrm5ympkcZxMJfQrmU6bmlF0gYaz1Zv%2Fl8Iy1ZUbh1gbNJBIYY0uoPjwax2N3JN68oYuN37X8UNoPawRAoj6%2BOtxT2Fb0LapB%2BfAycve10K7nY2gvs9P%2Bv8rb%2Fxq4jPR6ugVMEQ81ZOl7j8MQSttMhTowFjoTShbvxmAxp9VeAxLU92HytQfeUvG6tF9XMQC9GGLZmxBf0h07YlwoYzrum1Vas%2FdHGzCnPrUzF507%2F1Xnv%2BprLD7wsUZwGZaOhADuljOtVTiUSuavW16DLatWBf2DrdMFf2bonCnMIKuxMkGOqUB7ZE5Pi8GF3KaoV8bOn8pOsE5k9EeVnGilJubn2qTY%2F9%2Fantnv9oSWIE%2Frik9VHQ6D3kLlLPs4jUR%2Fsu7KtfWPGPouuEMt%2FXuQ1aZGLiCnsZ3knsGZTDF%2B3Sd9SA2HVH3JLPVua%2BDsPp3O%2BfUwihmwE%2BBvT3JRQkQhLdUolxG7%2BFco43E7ggD2MQ8pnVCw7OjYOW07kGeenQFhcNtcuMfq2Yg6JJL&X-Amz-Signature=cb8dab76fdc3d8ea633802a07e12b397d6566065fa11dec560e15ebad4ebafe8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6T4OV77%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T060116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIALuy2MxjFHrnaHImpn8icHiZUphAaQA79h5QvOaWlp0AiEA%2FD2XaBXNXM%2FjaPxc7IuyDgXG0rwfyqFdxXPk9hLJy44q%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDGiLm%2FvtVmaQMe8A5CrcA2pP4TjOc2ccFoVuVKBsDetgD2uG%2Fu7T8Zt2CVNjxftRtE9TcVWVAmo1xsuir45qfpOdU3czFJETWWdworG3SPvvdFiT3xduSkGPuPGHJ62QMyUn8ycDsTScvM%2FrtuqYYC%2FmTTa4ES%2FvdLWSdlGQO5V9jFRrLcy%2FTtX1KicMbqgcCRP9jvd64HXFWC%2B%2Fcn2BA64e96Gsj6eNDWtlWwY5JJvcUZR1yrzPId4gE918uon3XrnWBboniqQ47C4L6SdIbyi4SQ%2FxvfklLhgi8vYxk74WVKaJOOSLUKWhSJm21Brrl17OnPP6uhwA%2FfOSQgZTZeuLJT7%2FDJ95lNCgmT%2Bp%2FjhZZrm5ympkcZxMJfQrmU6bmlF0gYaz1Zv%2Fl8Iy1ZUbh1gbNJBIYY0uoPjwax2N3JN68oYuN37X8UNoPawRAoj6%2BOtxT2Fb0LapB%2BfAycve10K7nY2gvs9P%2Bv8rb%2Fxq4jPR6ugVMEQ81ZOl7j8MQSttMhTowFjoTShbvxmAxp9VeAxLU92HytQfeUvG6tF9XMQC9GGLZmxBf0h07YlwoYzrum1Vas%2FdHGzCnPrUzF507%2F1Xnv%2BprLD7wsUZwGZaOhADuljOtVTiUSuavW16DLatWBf2DrdMFf2bonCnMIKuxMkGOqUB7ZE5Pi8GF3KaoV8bOn8pOsE5k9EeVnGilJubn2qTY%2F9%2Fantnv9oSWIE%2Frik9VHQ6D3kLlLPs4jUR%2Fsu7KtfWPGPouuEMt%2FXuQ1aZGLiCnsZ3knsGZTDF%2B3Sd9SA2HVH3JLPVua%2BDsPp3O%2BfUwihmwE%2BBvT3JRQkQhLdUolxG7%2BFco43E7ggD2MQ8pnVCw7OjYOW07kGeenQFhcNtcuMfq2Yg6JJL&X-Amz-Signature=704d5bfc7ce24e720dd1cf5749866ee2cc7feaca63bd9fb4aa7661f82b3a297a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

