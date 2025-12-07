---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGB3IKVF%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T003653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICI0b%2B0Z9TLFF9Ncj%2Bxk0LRaYobwwonClsBNT0JWY3f2AiB0Bpokv6xv1IDQvY%2BkGGbqhZeJs1thP3mA6dOmSuSTKiqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BDypf3CFV9h5mfdnKtwD2jGA1XQxSpssUViHmOaLgHG23SGXEYttBcXRfaOzMOENp814wRVIPD3rvyyMwsTNQ4mlYp6D5vGFgEYw2GlHFMD6d7ABWhuQXcpp0p4y0XNIkI%2FtnWym%2F2V%2FWqQTMp8QDMmD61CMcAmXpP31uGusY237lYY5K%2BwjT6nQgE8h5nFGUJ%2BftvBiQVvtNVdvKxe3lJ4l%2BuB1YXPeZ8ZmIGjO%2By6GLLWkBpDd%2BfiFOZnIiyadi3GQhWJe9vyzw1EvnsX482fQXosW62iK1ZMxwCRrA%2BoVzGfGZlda0fnDLFcFZWKSM5Og15kzF5K5knrTYIpxNZ%2BvEIY5Yvoxd%2FwGbb5H9dB43D73VO4b9DQ6qb7hJAoejkeDfY%2FZC9nlUpliSOEIdcxR%2Bj8fWXj4Iif2sIQ%2BzWoBDEu8es93wXnizwGP%2BsAVmtWVAvTgwYJCEvXToAjmdgi9F6O4V6LBMVcS%2BeD2%2BM%2BfoJT%2Bm68bX7gIU9Vdo9QT6QAcBRXn1eRaQr%2FthCSBQdq5GsEjCMv3nzXiIo88V627dWvk9N7nA1ll6mhfclKqOm%2BvxReC0Txqr8Y2zrtJnZkvIJvtnvvUDV13t73wrfoPb6wRWxZHJXTy%2B26qmeeXKwj3V7SIxJj1mSYwrf7SyQY6pgGfZNwhH%2B46VyCm5TJA0mTf%2FsiUry8HQMSQ%2BohrbjInMK8B2PPJrcmo%2FyPJbPR%2FWtbhA8uVZVxvr0qu596EUWQ67DYorqT%2B76%2BlJfxzihR6a7fosyChGG9Fp5JvXsDIettJdMguvv63eXYT1w8XBhNFyN2Tkrajo90jSY4Xefp3ST6pi79GTiz7U3cCYcNZMDG9CiXRmMmWmDbKL5DeKMzcKhUg7Rod&X-Amz-Signature=233426ccc7f98726a6756a95a1b0577285cdbf3e0d82dd370b6834f502967561&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGB3IKVF%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T003653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICI0b%2B0Z9TLFF9Ncj%2Bxk0LRaYobwwonClsBNT0JWY3f2AiB0Bpokv6xv1IDQvY%2BkGGbqhZeJs1thP3mA6dOmSuSTKiqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BDypf3CFV9h5mfdnKtwD2jGA1XQxSpssUViHmOaLgHG23SGXEYttBcXRfaOzMOENp814wRVIPD3rvyyMwsTNQ4mlYp6D5vGFgEYw2GlHFMD6d7ABWhuQXcpp0p4y0XNIkI%2FtnWym%2F2V%2FWqQTMp8QDMmD61CMcAmXpP31uGusY237lYY5K%2BwjT6nQgE8h5nFGUJ%2BftvBiQVvtNVdvKxe3lJ4l%2BuB1YXPeZ8ZmIGjO%2By6GLLWkBpDd%2BfiFOZnIiyadi3GQhWJe9vyzw1EvnsX482fQXosW62iK1ZMxwCRrA%2BoVzGfGZlda0fnDLFcFZWKSM5Og15kzF5K5knrTYIpxNZ%2BvEIY5Yvoxd%2FwGbb5H9dB43D73VO4b9DQ6qb7hJAoejkeDfY%2FZC9nlUpliSOEIdcxR%2Bj8fWXj4Iif2sIQ%2BzWoBDEu8es93wXnizwGP%2BsAVmtWVAvTgwYJCEvXToAjmdgi9F6O4V6LBMVcS%2BeD2%2BM%2BfoJT%2Bm68bX7gIU9Vdo9QT6QAcBRXn1eRaQr%2FthCSBQdq5GsEjCMv3nzXiIo88V627dWvk9N7nA1ll6mhfclKqOm%2BvxReC0Txqr8Y2zrtJnZkvIJvtnvvUDV13t73wrfoPb6wRWxZHJXTy%2B26qmeeXKwj3V7SIxJj1mSYwrf7SyQY6pgGfZNwhH%2B46VyCm5TJA0mTf%2FsiUry8HQMSQ%2BohrbjInMK8B2PPJrcmo%2FyPJbPR%2FWtbhA8uVZVxvr0qu596EUWQ67DYorqT%2B76%2BlJfxzihR6a7fosyChGG9Fp5JvXsDIettJdMguvv63eXYT1w8XBhNFyN2Tkrajo90jSY4Xefp3ST6pi79GTiz7U3cCYcNZMDG9CiXRmMmWmDbKL5DeKMzcKhUg7Rod&X-Amz-Signature=63b06197e07eaab322066b449667c35f028408a4e233c0e00a017842d05ec27f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

