---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNQ4UGKM%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T020736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCy5s%2FHOWbc5bsBnBsuMCuzMEyV%2FKVjdXtK7X6WG9t6uQIgVVzTsZRchBpDNESuKIowJUQUf0WYe4ZlNHmGsx5ty8EqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF8jGMmjABoBOzwD6yrcA0GuQC2Iby91QTaPYsupV2O1B4w2RYhQbccXdunPrB1H8O6EJQfY%2BoVP%2BOljHYgqi9LA6AHShkh1IYtRg1ROYiEUTRPzjMQPVu44fHtgED5rRkpjOqrahU3oZwhJA2kenfg0zMKe3n2hHgxPqE6SNPvJQiDKdkfTfqZcu8HmPbh3Qmk%2B8NtBfcEgfWRpVb3Nq68%2FmHg9TVYX%2F7DCIU72Cjn3I8x%2BY6vcFsIPK2a%2FYbCUF39hprqt0puxg%2FPo93Yt9x35ks%2FB5VaWxW5uSPKzvFuxjaShTDnkD%2B5qgJSOlNq0H%2BUkrgzug6TYO7rloitpesa4VHEIon7khs%2FX3d%2BHf9B6Y57d7Iwh2IBOJoI%2FH%2BRpLLKNzkVDpp6q5L%2Fdxg2Ye7mDFKj4d%2F5nVyzzLhxYVu6zaX3t8pM%2FhuDSvRUrLSXYkuwvTvepjoj3UrWRKm%2BzflWH71p7Wjq3EmfrpIhALMZHA78LC6jZrm2uPTd3a48r6cW1MvrDUFNDh2Rm%2FbAU0rr6WOAmjcAiJrtI4BaXdseHhkovfgY7secBkbqkHo9Q3aiDxXO8A83w3EM3CLdHvvWeK5NaG7122Ukl%2FEqX5cQrR0xRK2Jpf47kO%2Bpe4e8IE5evKCG%2FjA9L0ThkMI%2F90skGOqUBbC%2FJSepJm5TTIcZisUzEj17Jl1hBHU2E%2BKVPpOAGuZaLWrp0qUNYTQxY3voY0VzjYgESielk1KITpxHZTbUvBa3Q3H3%2FQ%2B58ADO%2BlV5nT1lZOGQkBolphTGBvNP6e%2FAaGkNTJjRRYiKDlvmfGMDJ1g8mmCDH48yS4T%2BWYx7i9SCqx%2BX%2BJPApTR2ncPRHz97CWeeqldAq%2F6udv7aRgs%2FlnRXQFR%2Bj&X-Amz-Signature=3dd3e1d99916bffeec43e74c8b4fd937e3522da9d1b2cec9bc4ba6009c33616a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNQ4UGKM%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T020736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCy5s%2FHOWbc5bsBnBsuMCuzMEyV%2FKVjdXtK7X6WG9t6uQIgVVzTsZRchBpDNESuKIowJUQUf0WYe4ZlNHmGsx5ty8EqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF8jGMmjABoBOzwD6yrcA0GuQC2Iby91QTaPYsupV2O1B4w2RYhQbccXdunPrB1H8O6EJQfY%2BoVP%2BOljHYgqi9LA6AHShkh1IYtRg1ROYiEUTRPzjMQPVu44fHtgED5rRkpjOqrahU3oZwhJA2kenfg0zMKe3n2hHgxPqE6SNPvJQiDKdkfTfqZcu8HmPbh3Qmk%2B8NtBfcEgfWRpVb3Nq68%2FmHg9TVYX%2F7DCIU72Cjn3I8x%2BY6vcFsIPK2a%2FYbCUF39hprqt0puxg%2FPo93Yt9x35ks%2FB5VaWxW5uSPKzvFuxjaShTDnkD%2B5qgJSOlNq0H%2BUkrgzug6TYO7rloitpesa4VHEIon7khs%2FX3d%2BHf9B6Y57d7Iwh2IBOJoI%2FH%2BRpLLKNzkVDpp6q5L%2Fdxg2Ye7mDFKj4d%2F5nVyzzLhxYVu6zaX3t8pM%2FhuDSvRUrLSXYkuwvTvepjoj3UrWRKm%2BzflWH71p7Wjq3EmfrpIhALMZHA78LC6jZrm2uPTd3a48r6cW1MvrDUFNDh2Rm%2FbAU0rr6WOAmjcAiJrtI4BaXdseHhkovfgY7secBkbqkHo9Q3aiDxXO8A83w3EM3CLdHvvWeK5NaG7122Ukl%2FEqX5cQrR0xRK2Jpf47kO%2Bpe4e8IE5evKCG%2FjA9L0ThkMI%2F90skGOqUBbC%2FJSepJm5TTIcZisUzEj17Jl1hBHU2E%2BKVPpOAGuZaLWrp0qUNYTQxY3voY0VzjYgESielk1KITpxHZTbUvBa3Q3H3%2FQ%2B58ADO%2BlV5nT1lZOGQkBolphTGBvNP6e%2FAaGkNTJjRRYiKDlvmfGMDJ1g8mmCDH48yS4T%2BWYx7i9SCqx%2BX%2BJPApTR2ncPRHz97CWeeqldAq%2F6udv7aRgs%2FlnRXQFR%2Bj&X-Amz-Signature=e2b5d594a35c7d0476f2a4e21ab11c2866d6b76fa634c5089a38f80c3ac2a3af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

