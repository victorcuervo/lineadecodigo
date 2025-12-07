---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662G7FR5LK%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T084043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3tHa8lnXM32AKXQOsiyLt8dryEqJcGJ%2FCTXHDzY56qwIgY1gKPPFDxnT2neUisW4DMXJyMxTL0IChGY1UPFftiPIqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL4fvw25ij2qTTP4pSrcA8rD5sPR1L%2Fc0MAAiBZC1TR1XBb90k3uHSh0J0%2FYPHKjyXjMwS10l1tAiYY%2Bh%2BGaTxAjxEmRPzJZFAubffBl0%2FqFlhNf6d80kWsIwb8cCaOW4H4h1ZOOkc83YqAy4%2B4pPNV0oByib%2B0H%2FOIZbsl9rjkpanNXmTrOqNxo6%2B%2Fn0HyROsRMZyasKffV5%2FXPBfE7%2FbokYlvxJOZ4JBsmXS5Nmm7%2BFdUxzZxqrEEoNZCULR05b8BFoupJWKyHk2Ud15Nc2wm1vtIcYIcTfgEjHFDBLncBJOnNH5XTNec%2B2CcN6fKaHunFOPogtcRWM7P6G8kBqZ4r0sbxKv99gDHwt21YXSjDOIkpHza4mlWrNR0un5FQGtX2Ee%2Fs9cI3JZgVdd7qVlOLzEGI0%2F652MbsFNixVdNrESYMOUeG%2Bjk6HjIi7Pu24yRyGoqqXKHE42FFanDAbMJTbJsFKRc0gQJufjUlYqVcGwDolDRNTit4CuuC6ZGhiR6xqIxm15MTr1AM9R1l%2FicxhtZQyg5k788gM2kd3YZVvJGv9lRkHsNE5cKaARmlzk0POa9%2BLpZWrXUhgjZTp1rwv41OlPpKpdA5EaFHEu8CsWfedJwjw9RfWkcbHbYiyi2ZvGD1W%2BSrDs52MMeh1MkGOqUBPh74049iNtN7SJ8VnTdUks541bDCUlVFw%2Bn4GQvPl2B0PcWcxf%2FFf7UgAXpKNWG2Vj1NZ8LeytRBgzsvxRaEC5jGuryXzAB8NczRkk%2Bir05urs476qvSw%2FSw6eAdsGCdRZIw9W93Qtz4Y5WHBnTInGSI3ayQt6oVaMQchYXxB3rzHTRp2F0C5B6I%2B6n%2Bwh6BDmwRAG%2FH1qLBYWDm4AZwwcMIKp6M&X-Amz-Signature=663ee7f737582ed9be33b804c2cf65c1fd5543b00745d58ba2c4e33f327d8327&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662G7FR5LK%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T084043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3tHa8lnXM32AKXQOsiyLt8dryEqJcGJ%2FCTXHDzY56qwIgY1gKPPFDxnT2neUisW4DMXJyMxTL0IChGY1UPFftiPIqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL4fvw25ij2qTTP4pSrcA8rD5sPR1L%2Fc0MAAiBZC1TR1XBb90k3uHSh0J0%2FYPHKjyXjMwS10l1tAiYY%2Bh%2BGaTxAjxEmRPzJZFAubffBl0%2FqFlhNf6d80kWsIwb8cCaOW4H4h1ZOOkc83YqAy4%2B4pPNV0oByib%2B0H%2FOIZbsl9rjkpanNXmTrOqNxo6%2B%2Fn0HyROsRMZyasKffV5%2FXPBfE7%2FbokYlvxJOZ4JBsmXS5Nmm7%2BFdUxzZxqrEEoNZCULR05b8BFoupJWKyHk2Ud15Nc2wm1vtIcYIcTfgEjHFDBLncBJOnNH5XTNec%2B2CcN6fKaHunFOPogtcRWM7P6G8kBqZ4r0sbxKv99gDHwt21YXSjDOIkpHza4mlWrNR0un5FQGtX2Ee%2Fs9cI3JZgVdd7qVlOLzEGI0%2F652MbsFNixVdNrESYMOUeG%2Bjk6HjIi7Pu24yRyGoqqXKHE42FFanDAbMJTbJsFKRc0gQJufjUlYqVcGwDolDRNTit4CuuC6ZGhiR6xqIxm15MTr1AM9R1l%2FicxhtZQyg5k788gM2kd3YZVvJGv9lRkHsNE5cKaARmlzk0POa9%2BLpZWrXUhgjZTp1rwv41OlPpKpdA5EaFHEu8CsWfedJwjw9RfWkcbHbYiyi2ZvGD1W%2BSrDs52MMeh1MkGOqUBPh74049iNtN7SJ8VnTdUks541bDCUlVFw%2Bn4GQvPl2B0PcWcxf%2FFf7UgAXpKNWG2Vj1NZ8LeytRBgzsvxRaEC5jGuryXzAB8NczRkk%2Bir05urs476qvSw%2FSw6eAdsGCdRZIw9W93Qtz4Y5WHBnTInGSI3ayQt6oVaMQchYXxB3rzHTRp2F0C5B6I%2B6n%2Bwh6BDmwRAG%2FH1qLBYWDm4AZwwcMIKp6M&X-Amz-Signature=e0930e40be8c3eb2d0f7883e07557ca7ea874ecb05c8190808775d8711909971&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

