---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCFDCANO%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T115553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEz5cmfPomQ4%2FJFObv%2BZ%2FMWGC%2Boj%2BGUY028cP73NyGAwAiBwrcrh5hQgk3lyAu2sL6%2FPWdB9oWIoOx7kcw6Uy4Sfcyr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMoj3zyMB%2B7bLIOZZlKtwD1KtlilZWPcHXaCWKnnjifaxTAGP0AsBmVnbLjkOYNwGm8GM61EENVLOtJ1fMj7Z1z6oacVO%2FOL8jTpE8xBaFJwpyhjWiSthMVJeH13FXXMZIsp2qgN3aNMbfdVwWbq20So56o0lLkLwsdqRCIRdrvuwwlcBY4SgS6ZXHmDkASmZXH%2B0Iotjb8GKx57XEyTQmfnXKPoCZ4Xy0zEyTFyZV2mSpLC0NDNNOdmAgZAiOPS39C48%2Bodt%2Fam%2Bln1N3HvUhX5XzbF8nynBp57sqBzamtYPDdF%2B4tHgAZI4915pCdFNokDbDPfVsyT8MJzvYMibp2rchYV7Ni6qZ4b6hPJof%2B3vOhypLMZWvkkCeWnGDIIEx06uHvw30c69wlrjFAIBg408pRDnJBR1jHQ7fs5jLXHNzX9qANiI%2FjAHvsFbW%2Fylo1myBFo4nfOQzCZMN4fj3zV3j5mUtOYBZkRd2ZewlAPnZeBo%2FbCuXOVP8bGcnY1hBYVOa7bU6%2FffjHAI1lUWOKlSIl2xEh%2B%2FXMOTVvNQubGnlQTZkHBgeObiyhQ0ES39e66WvIEaN2glENwBozEZYodL0dO%2F51KBuXtknIzhmERkvdKD7HEIKJHkmW%2FbOjHNUpL0tKlSJMko2eHEw0sDKyQY6pgFVitcWZwy1Gen09YX7oThONpSvGWr06S44oaA2uQpxXfNzDxCZM1LfEd4%2BDNOYcUbuVmeEoiSdnlOpUoareDTvZXjfplIiruxGZPXdgvpPp4xManfIzO6bt9PBWjBl91okw2sPeO7wtn6mVD%2FMkBO2U1kc3wqv2QqXIjwx0gIXArP5h1OYxanDrwqr0raP7%2BBp4IoYQ%2FPZlkdRuf8KX%2F0OzxkqQasJ&X-Amz-Signature=33403f93db812b8c806449da9533d9f18767c07a30e79212364ae85bb22683c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCFDCANO%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T115553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEz5cmfPomQ4%2FJFObv%2BZ%2FMWGC%2Boj%2BGUY028cP73NyGAwAiBwrcrh5hQgk3lyAu2sL6%2FPWdB9oWIoOx7kcw6Uy4Sfcyr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMoj3zyMB%2B7bLIOZZlKtwD1KtlilZWPcHXaCWKnnjifaxTAGP0AsBmVnbLjkOYNwGm8GM61EENVLOtJ1fMj7Z1z6oacVO%2FOL8jTpE8xBaFJwpyhjWiSthMVJeH13FXXMZIsp2qgN3aNMbfdVwWbq20So56o0lLkLwsdqRCIRdrvuwwlcBY4SgS6ZXHmDkASmZXH%2B0Iotjb8GKx57XEyTQmfnXKPoCZ4Xy0zEyTFyZV2mSpLC0NDNNOdmAgZAiOPS39C48%2Bodt%2Fam%2Bln1N3HvUhX5XzbF8nynBp57sqBzamtYPDdF%2B4tHgAZI4915pCdFNokDbDPfVsyT8MJzvYMibp2rchYV7Ni6qZ4b6hPJof%2B3vOhypLMZWvkkCeWnGDIIEx06uHvw30c69wlrjFAIBg408pRDnJBR1jHQ7fs5jLXHNzX9qANiI%2FjAHvsFbW%2Fylo1myBFo4nfOQzCZMN4fj3zV3j5mUtOYBZkRd2ZewlAPnZeBo%2FbCuXOVP8bGcnY1hBYVOa7bU6%2FffjHAI1lUWOKlSIl2xEh%2B%2FXMOTVvNQubGnlQTZkHBgeObiyhQ0ES39e66WvIEaN2glENwBozEZYodL0dO%2F51KBuXtknIzhmERkvdKD7HEIKJHkmW%2FbOjHNUpL0tKlSJMko2eHEw0sDKyQY6pgFVitcWZwy1Gen09YX7oThONpSvGWr06S44oaA2uQpxXfNzDxCZM1LfEd4%2BDNOYcUbuVmeEoiSdnlOpUoareDTvZXjfplIiruxGZPXdgvpPp4xManfIzO6bt9PBWjBl91okw2sPeO7wtn6mVD%2FMkBO2U1kc3wqv2QqXIjwx0gIXArP5h1OYxanDrwqr0raP7%2BBp4IoYQ%2FPZlkdRuf8KX%2F0OzxkqQasJ&X-Amz-Signature=b77df2d464061221022900b0e9d087db0606e5612dc0c3ac9413191867b539d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

