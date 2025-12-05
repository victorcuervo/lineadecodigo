---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TBOK3Q7%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T015534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7hSPQEwlayYvCTSfYC4f7HFke7lIE46D0ElDg6sZGlAIhANY22Rkqs277jqShGrqSEuzCzr%2FsbBKlu4YGoLYPHFFVKv8DCE8QABoMNjM3NDIzMTgzODA1IgzFvpo98WLe7iS5B%2BMq3AOFw%2ByjAZ8ItoZ2sGxNz%2Bz9sYIBTXrJY8ySXcx%2Bop6NYGkhVf%2BAJYDv0%2BByIp2dD8qHS%2BhVxW7Dy3A2BYMjnPLrMWG6j0ybQfOh8cJhZO%2Bn%2BzXHqLq0RlXS4yRugd1Bh1PBjcQT9UoWDuwWROFAw1ZMMrFYmz8c%2BH9tJcaXedRmYg8uToZ8kJiKShwxqITrZMfwmjdcEI3zcUK%2Ff1gr5fT4GQ1lBnnJwDnLXOLxrFHLLF3kNkZuvEtYOoU4eMxblLJD2Q%2BjxzghP4qafP2Q8ZtwTHzy6zAkQXklUz%2BTwyJVJo06Q0o9MPhhjmpqg6UjLXy8PZ4BqXF9JrFUGSNdF8nNTjvGR%2FWlHysmrxXj7Gqgka3SZ7DT%2BULk6yQ8mzQ5tuuCq90%2BDV7X%2FOIJJ6htWOzVyH2m1ubnwP9dqmnIwbB1BuDb%2F%2Bs%2B7GSoSeujbIeLO0decFtUUGvvZHiuWK6v5UaHOVPAaROKTGTxheVME1iS%2FG7olj4hUVwETM9PoxkNuI7KczBLgwpJxe%2B47FBHPad4Cw2CVnKewkfwT4Yl8iGj21p1Vw2ZFRM0NugBydthGlbLYrPYpAFPhgygMWC92wEYO3EymUfwmnVrr13FwmTME8nGr52oju0EXK8KszCDjMjJBjqkATsgW26G89yxTRAj83Oh43e8fsAFWHdeXtL5qC8FakXqVl28H6KkWPyHUf%2F8Vxh1hlTVdRVpVWtVdBEYIQerPS4ax5GprIGLqVrpRMDMA0AgyOaEFWccovktheW%2BY91v9Fctrlutjl3lid03utRWCIwdhfbAV1kboyy2hYx%2F4cGVwAhX0LUNlI2opujhPE9ZxydShkBFN4vqB9BBWC%2FCCEqIDLa%2B&X-Amz-Signature=7c88366ad13da0347bc6214e179c9817fc5d1f230a5fc927e44d1aeefeaf5292&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TBOK3Q7%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T015534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7hSPQEwlayYvCTSfYC4f7HFke7lIE46D0ElDg6sZGlAIhANY22Rkqs277jqShGrqSEuzCzr%2FsbBKlu4YGoLYPHFFVKv8DCE8QABoMNjM3NDIzMTgzODA1IgzFvpo98WLe7iS5B%2BMq3AOFw%2ByjAZ8ItoZ2sGxNz%2Bz9sYIBTXrJY8ySXcx%2Bop6NYGkhVf%2BAJYDv0%2BByIp2dD8qHS%2BhVxW7Dy3A2BYMjnPLrMWG6j0ybQfOh8cJhZO%2Bn%2BzXHqLq0RlXS4yRugd1Bh1PBjcQT9UoWDuwWROFAw1ZMMrFYmz8c%2BH9tJcaXedRmYg8uToZ8kJiKShwxqITrZMfwmjdcEI3zcUK%2Ff1gr5fT4GQ1lBnnJwDnLXOLxrFHLLF3kNkZuvEtYOoU4eMxblLJD2Q%2BjxzghP4qafP2Q8ZtwTHzy6zAkQXklUz%2BTwyJVJo06Q0o9MPhhjmpqg6UjLXy8PZ4BqXF9JrFUGSNdF8nNTjvGR%2FWlHysmrxXj7Gqgka3SZ7DT%2BULk6yQ8mzQ5tuuCq90%2BDV7X%2FOIJJ6htWOzVyH2m1ubnwP9dqmnIwbB1BuDb%2F%2Bs%2B7GSoSeujbIeLO0decFtUUGvvZHiuWK6v5UaHOVPAaROKTGTxheVME1iS%2FG7olj4hUVwETM9PoxkNuI7KczBLgwpJxe%2B47FBHPad4Cw2CVnKewkfwT4Yl8iGj21p1Vw2ZFRM0NugBydthGlbLYrPYpAFPhgygMWC92wEYO3EymUfwmnVrr13FwmTME8nGr52oju0EXK8KszCDjMjJBjqkATsgW26G89yxTRAj83Oh43e8fsAFWHdeXtL5qC8FakXqVl28H6KkWPyHUf%2F8Vxh1hlTVdRVpVWtVdBEYIQerPS4ax5GprIGLqVrpRMDMA0AgyOaEFWccovktheW%2BY91v9Fctrlutjl3lid03utRWCIwdhfbAV1kboyy2hYx%2F4cGVwAhX0LUNlI2opujhPE9ZxydShkBFN4vqB9BBWC%2FCCEqIDLa%2B&X-Amz-Signature=02b22e7f50703e77f17ecfc4655d70fee5ec917e939a4614117afec184891214&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

