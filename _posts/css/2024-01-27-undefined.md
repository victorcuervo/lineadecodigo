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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WZAUO7F%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T033256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQDcL8nrBNQ2S%2BEmtm9tQfk%2FuaanouH5A%2B1WTFWkcVDn%2FQIgM9Wkx1excZ8iYSFMwT0TvX9KCKnMlquCXnWY1nC8s2oq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDJm%2BAkfyFwFJU0ReaCrcA20QQcSZI4zmyKkFXaKMacIEBLvnvEQpBrfmhjc7l0d%2FvSIW355I94GkbsC1sCx5EXOhwTK2sXCseTlOacZwSqUFzUnh7P%2BUGDMiZz5LhflgI7Vxzd21uoEh%2Fhgb5GS%2F%2BvLcfkRyHHvuIKcdOHoxXCoc5k7hHiNvi2AVaS8Gz6EDMW%2Fnmqmfptr3xiFrlT7AxU6Dw5mMAz4xmWpQwVF1ltD2ylag7qmyEQcO%2FLJkNPMJGsZccNnWS0mOawcBV%2FMrlUJSoH%2FS%2FTGGM1db4hI8MAlyJ9Dd%2Fjod8UvhZarriPzo5L8SeIqGwkhoPP6hCMU2jYaimuUS%2FLalZPcgNnVRqFohXtQxvywph8jZ8Iea0SuEN143k1%2B2NQMcnJMlRK6T7SndZCxN3GNFNrml56sRDgVbDQ2aQUEvziUNIKBZSexNKrr5VKoUukQ%2BjjrbpIwdoe0y3wio2IHUGCLzzTlyqAz0O4npMyghNRGwYNWdE6iY95aj9ywCdVXohoCOxeD5i%2FoD90yitErTzCybvuE8OVPhtqKujAEMce4T%2FcQZs5XyW8lG3iYF64WlplQ0Y2vGBdL6ij%2Brrp3RvQe26fZfmbBouUbM7ch91Ozejg60SXDqqsFe%2BJ28e7dFohUdMLqVvskGOqUB7l64kAyqPSJeOn38YEbt5raeDq1OMsvbYN06bMouIDzZ3yVOW4eWKwbVpvDvZISNgDPyKyAGE%2Fr9iK%2FaAX8ZkJRiQv%2BBKL7jULu12KismUb3XL3r8fIx0c63MVhiIT8u8z%2FhPpmkaTGnMavZS9vnqDfaiCRSd76FR9PkDcmTQvYkov%2FscThWd6tXjzUf04Uk5zF97gMuNku6%2F5mNuhkBzQnvLOmW&X-Amz-Signature=70e8e21f3b25de81b3bd66a196ee6e92fd1a92159473b4cf5b8e3de21cdbd482&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WZAUO7F%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T033256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQDcL8nrBNQ2S%2BEmtm9tQfk%2FuaanouH5A%2B1WTFWkcVDn%2FQIgM9Wkx1excZ8iYSFMwT0TvX9KCKnMlquCXnWY1nC8s2oq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDJm%2BAkfyFwFJU0ReaCrcA20QQcSZI4zmyKkFXaKMacIEBLvnvEQpBrfmhjc7l0d%2FvSIW355I94GkbsC1sCx5EXOhwTK2sXCseTlOacZwSqUFzUnh7P%2BUGDMiZz5LhflgI7Vxzd21uoEh%2Fhgb5GS%2F%2BvLcfkRyHHvuIKcdOHoxXCoc5k7hHiNvi2AVaS8Gz6EDMW%2Fnmqmfptr3xiFrlT7AxU6Dw5mMAz4xmWpQwVF1ltD2ylag7qmyEQcO%2FLJkNPMJGsZccNnWS0mOawcBV%2FMrlUJSoH%2FS%2FTGGM1db4hI8MAlyJ9Dd%2Fjod8UvhZarriPzo5L8SeIqGwkhoPP6hCMU2jYaimuUS%2FLalZPcgNnVRqFohXtQxvywph8jZ8Iea0SuEN143k1%2B2NQMcnJMlRK6T7SndZCxN3GNFNrml56sRDgVbDQ2aQUEvziUNIKBZSexNKrr5VKoUukQ%2BjjrbpIwdoe0y3wio2IHUGCLzzTlyqAz0O4npMyghNRGwYNWdE6iY95aj9ywCdVXohoCOxeD5i%2FoD90yitErTzCybvuE8OVPhtqKujAEMce4T%2FcQZs5XyW8lG3iYF64WlplQ0Y2vGBdL6ij%2Brrp3RvQe26fZfmbBouUbM7ch91Ozejg60SXDqqsFe%2BJ28e7dFohUdMLqVvskGOqUB7l64kAyqPSJeOn38YEbt5raeDq1OMsvbYN06bMouIDzZ3yVOW4eWKwbVpvDvZISNgDPyKyAGE%2Fr9iK%2FaAX8ZkJRiQv%2BBKL7jULu12KismUb3XL3r8fIx0c63MVhiIT8u8z%2FhPpmkaTGnMavZS9vnqDfaiCRSd76FR9PkDcmTQvYkov%2FscThWd6tXjzUf04Uk5zF97gMuNku6%2F5mNuhkBzQnvLOmW&X-Amz-Signature=4852b28068bd5d4520ef8954269f5213509fa2e81ae6b940b84427d510412855&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

