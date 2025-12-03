---
layout: post
title: Tres Columnas en CSS con Flexbox
excerpt: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
categories: CSS
tags: [css flexbox]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVD22X4D%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T051754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIAKXZwvxu88%2FmT2Pz3NK71mVwJQV8BLEskAVV78pW5qWAiEAt37suYXoN85k5EotTD2Q8%2FIO3BHvw4Q%2BmJs3rlUlFWsq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDAJKEaoa4bNcobjf8ircA%2BWZCg69DiAhxR0RmiOH8ma5OMmqnTKmu4GY9NmEdeC7K4urjtbAQS3A%2BUUIDGiQzS2wkY9PPD3tfiKtOBufF1%2Fl5m5i5B%2Beworh7Ym0giMsj9BLxRoS0FZvdHLZ%2BPjyF9wTLT4Q%2FMCuELlKdt%2BsmMLYPLytSVrmHqQIyQeq2OMUsgD3KJqnPNqB7vdjuBXcO34w9o%2BA%2FGC9dOV3phNc0l6JENxoKN%2FmJK7%2F1wVXWNirfJsAH7vtG0ensEqrmkuWpM1jhD95EETkOx4fEbrPIir5dECw24lnmmnqJ1xu%2FMRVATQAK5%2Fqul%2FON2NjF2IDPC91Jl3bZsfvH8j0yf%2B3go5qLosQrxlVdSF%2FWvnDVyVGlDNGBloZuM6wF5CQrYlHYf6WPliH7fOjNzu6anyps15jYHpK1C9oRnH7VKFw%2BWB%2B8iyngIpXJ%2FI9yc1RT3iIl44n3Kofg1F14OYeApmIK4XxdGzQeTPiB6dB%2B024UQYFuDg1G0fA8%2BEEmSB7Rf9IrdLrBT5rgx1c2ipJTgCAXdnuHtG0Jk7AREQ4cXbz7dlI9J%2FXKeWhHXYskKBEAlX22vREFuvjd1dKKuryzTOhZrLGbN3NYBFWDvtqeZY6%2B9kQp3mxwu1KTIyO3dipMOiWvskGOqUBuihdDFkm6folDahEfTAAUCVJUeQwMjADDjofmWV7ZfJyDhZk1eyeZjWP1opEQCNPgJ1rzj6U3QJcHEL9Cnf10Srokc9y8nO3Ii6XLq7XhOKhasayat7FsKrBQePHTa9IZW15GVk%2FEzmSd5pEBNfPCwdW8NbOm2pBMwTyV0VvmivLL059Ss%2BySCKHLK508TE0IBE%2FnPfaYk91cLJxQPnorBcE6m%2Bs&X-Amz-Signature=b33fe7d31ceab254cc4a5737a001473597554b67029cf462d04f92ed414677ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVD22X4D%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T051755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIAKXZwvxu88%2FmT2Pz3NK71mVwJQV8BLEskAVV78pW5qWAiEAt37suYXoN85k5EotTD2Q8%2FIO3BHvw4Q%2BmJs3rlUlFWsq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDAJKEaoa4bNcobjf8ircA%2BWZCg69DiAhxR0RmiOH8ma5OMmqnTKmu4GY9NmEdeC7K4urjtbAQS3A%2BUUIDGiQzS2wkY9PPD3tfiKtOBufF1%2Fl5m5i5B%2Beworh7Ym0giMsj9BLxRoS0FZvdHLZ%2BPjyF9wTLT4Q%2FMCuELlKdt%2BsmMLYPLytSVrmHqQIyQeq2OMUsgD3KJqnPNqB7vdjuBXcO34w9o%2BA%2FGC9dOV3phNc0l6JENxoKN%2FmJK7%2F1wVXWNirfJsAH7vtG0ensEqrmkuWpM1jhD95EETkOx4fEbrPIir5dECw24lnmmnqJ1xu%2FMRVATQAK5%2Fqul%2FON2NjF2IDPC91Jl3bZsfvH8j0yf%2B3go5qLosQrxlVdSF%2FWvnDVyVGlDNGBloZuM6wF5CQrYlHYf6WPliH7fOjNzu6anyps15jYHpK1C9oRnH7VKFw%2BWB%2B8iyngIpXJ%2FI9yc1RT3iIl44n3Kofg1F14OYeApmIK4XxdGzQeTPiB6dB%2B024UQYFuDg1G0fA8%2BEEmSB7Rf9IrdLrBT5rgx1c2ipJTgCAXdnuHtG0Jk7AREQ4cXbz7dlI9J%2FXKeWhHXYskKBEAlX22vREFuvjd1dKKuryzTOhZrLGbN3NYBFWDvtqeZY6%2B9kQp3mxwu1KTIyO3dipMOiWvskGOqUBuihdDFkm6folDahEfTAAUCVJUeQwMjADDjofmWV7ZfJyDhZk1eyeZjWP1opEQCNPgJ1rzj6U3QJcHEL9Cnf10Srokc9y8nO3Ii6XLq7XhOKhasayat7FsKrBQePHTa9IZW15GVk%2FEzmSd5pEBNfPCwdW8NbOm2pBMwTyV0VvmivLL059Ss%2BySCKHLK508TE0IBE%2FnPfaYk91cLJxQPnorBcE6m%2Bs&X-Amz-Signature=c5170b90879b7d1c2e7a07ea031bde498623ede90d8a23cbfb3778239eca4ae9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

