---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTRWFY7K%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T113911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRpDkXzqEAXCeNXjG73owKFJAZSjDH1Lg15TJLOF6onwIgBkAqZuIGc6Nd%2FBYyEcApTpYpc50mZZ77ewOrzZ1o5i0qiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMI4uzTzeqzP%2FHnkfyrcAydY0JqXnPmoLxJUG3WEI82ZNvV0ECjNm8%2FMTjlNycMadUy1874Wz4lbC4i8oqFNFCmmpQHMCaRTWv%2FbokE7O1dcryzcxEUK41HEx72DGPM4C8NMuH%2BQnjzF%2F8vTmBsOuHOqbh6SVRFv1bUHbGAMnhlMomqyw4%2FpFkWrh3waYL%2BqYEEEk0s7lXjkHl1byY478qTFTH5INx4owU6B6Jmf7DSxlmLoUtVvzNNG3mGyo%2FnunuL%2FKSbI43MrsIJFjEph%2FCAgfgiQiwM2NVDESJR7LZ%2Fmaar5ESGeg3GEgUfyKOJRrgZIYG5Wy3kX0xIkZbh506v%2Brao3k3Nz4raEvc%2FP6CNoyZrGSry87Ae%2Bu9cnqcBeOyWwV7HR3vVKX%2BQv884p145pWFqED%2BgNdqMTtLqcdKg6%2Byyk1X57e8hGxml95yEEv6Fi4FH%2BGhFvLqLMbsRwX9Nh50AScbEFTGRlDkaaMWCSoUIPG8e11TqsYMYG%2FSEZhFTdfYjX6SlxlxSeR1Y3XKvNjTRbANWiQHjcYrER3P%2Br6uCfPdfpA6bYzkF5ee0PUcvAgtGeTiYJpYwyoL9zPyW7rE4yu3IKv%2FN3nNjkQy50b3lf8KRluTQ4mTJf3gci0TExyWpAKNCB1YATMJju2ckGOqUBAnSuhJaTXASIazAH9OqQtUX9iweWYlb0gXtjZpymDuoKm3r859N3KpBJisfycGAyP%2B8%2FLfcwjjQNJ9dKI4tjwDybmmdlV7d8cwPnKgvQpZuFmKh8JVoBxmXCiXXkZ%2FbciXhAFi%2FhsQ5hXfxBgL%2FniTKkEE5zjPN1p1Ubb7TxvDYyaeuKXzl%2BRaNjARGdsKhBx4hcJ38f9i9ZvX7y8Pu1z3sVDQa9&X-Amz-Signature=7c917ae7d1959242bbc7c00a119323cb56d21f57dcebfa16c506a0677c7fa3a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTRWFY7K%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T113911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRpDkXzqEAXCeNXjG73owKFJAZSjDH1Lg15TJLOF6onwIgBkAqZuIGc6Nd%2FBYyEcApTpYpc50mZZ77ewOrzZ1o5i0qiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMI4uzTzeqzP%2FHnkfyrcAydY0JqXnPmoLxJUG3WEI82ZNvV0ECjNm8%2FMTjlNycMadUy1874Wz4lbC4i8oqFNFCmmpQHMCaRTWv%2FbokE7O1dcryzcxEUK41HEx72DGPM4C8NMuH%2BQnjzF%2F8vTmBsOuHOqbh6SVRFv1bUHbGAMnhlMomqyw4%2FpFkWrh3waYL%2BqYEEEk0s7lXjkHl1byY478qTFTH5INx4owU6B6Jmf7DSxlmLoUtVvzNNG3mGyo%2FnunuL%2FKSbI43MrsIJFjEph%2FCAgfgiQiwM2NVDESJR7LZ%2Fmaar5ESGeg3GEgUfyKOJRrgZIYG5Wy3kX0xIkZbh506v%2Brao3k3Nz4raEvc%2FP6CNoyZrGSry87Ae%2Bu9cnqcBeOyWwV7HR3vVKX%2BQv884p145pWFqED%2BgNdqMTtLqcdKg6%2Byyk1X57e8hGxml95yEEv6Fi4FH%2BGhFvLqLMbsRwX9Nh50AScbEFTGRlDkaaMWCSoUIPG8e11TqsYMYG%2FSEZhFTdfYjX6SlxlxSeR1Y3XKvNjTRbANWiQHjcYrER3P%2Br6uCfPdfpA6bYzkF5ee0PUcvAgtGeTiYJpYwyoL9zPyW7rE4yu3IKv%2FN3nNjkQy50b3lf8KRluTQ4mTJf3gci0TExyWpAKNCB1YATMJju2ckGOqUBAnSuhJaTXASIazAH9OqQtUX9iweWYlb0gXtjZpymDuoKm3r859N3KpBJisfycGAyP%2B8%2FLfcwjjQNJ9dKI4tjwDybmmdlV7d8cwPnKgvQpZuFmKh8JVoBxmXCiXXkZ%2FbciXhAFi%2FhsQ5hXfxBgL%2FniTKkEE5zjPN1p1Ubb7TxvDYyaeuKXzl%2BRaNjARGdsKhBx4hcJ38f9i9ZvX7y8Pu1z3sVDQa9&X-Amz-Signature=85830ba5eb0a9ea726b2990e4d46f8cbe79d3ed224e9c48eb45d3748d928cd2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

