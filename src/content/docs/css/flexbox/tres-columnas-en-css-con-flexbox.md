---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5XMQVX5%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T011422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7vh3V7a35YvOVvlPrnl%2BA7OCXFE3HlEVP0T07H%2BO88AIhAJOCsK9488hcPEFNVGEGzrZBXmqZGAyjzbRiK2HXOlOAKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxix6xSdeF0DeMHNoMq3AMP922EPimJI4wi2tn4tU47zr654pgkfl%2BU3QL4R12ofRKhO6wEwe7RE3q%2BtsJ%2BLmiMTSL4rQySTper14uAMe%2Fb5fEO4YsKum8BY0bQggn80dxkJUZfrfn9GPQJOpbagcrdY9Qxs0zNzy05f6gsuZ3dt1vMEr1E4eXe8Zl1LZqdDhx8YBiLBKv%2BhLJCrjrKdArhqtxn8M7S4k11gPjuVB3FVOz0SEMJEGCREN9hQb9cReyIPFwm4JjsUbJqYds1bFV%2FxhnGs%2F0bfkQVof85f5U9ckMibVeZhJNlMCKEZxAiqi9B%2BkgxXQ4MS9fLrglocy5ZH0lcwsZ%2BZjoPmnfECqCklueQLniNbThwgrBOSfQdUOOCC2LjlAj6gYlcErMJYq%2FUAIhb%2FIkKe66uvUX7HSA%2B4NLSJP34O7ayA7pDreXABjRMxRoPUBShOgb43N5zFu8MOiGjepPPDX4053XHmVh2UOlWc%2FCuYQ7UPoBogCEROO6v0fxyy7Z3IsVl%2Fq8tA%2BWKLv1e4M%2FXXWVdP46fBK1RWZjHTJCvm9a01O8Jkfl54Fseg3AsSzS6qAFQwUO0V3yMaBfgu9DgeUBLKkded3ztywySG%2B6dM%2BPxZfSYtNQtsS5az%2Bmg0t4bWsPzkzC76d3JBjqkASxOeRwACsDjR6IqEHQjum67eE6hVD7Yu60O9WXvCBVicfVi2BYDvpqnFhT%2FeXiYGwbk4JRLwp3UuTEOOKC5izZsLu31VKCO7kyiIxkJuqs2GdLwyIcybfb%2BCCSpOUHtvVbeVc0L7rs9HG5BSnc4qdjEjQ%2FPNb6wnw1KInepxvq6PATKhKoWo3Sq2IauoQWftCk74cuDIVlEYTv4BsQZS0E%2BXcOf&X-Amz-Signature=6e727445a198afa00605f0cced0f52acf1c120e0b668612509f77d01db4f806e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5XMQVX5%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T011422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7vh3V7a35YvOVvlPrnl%2BA7OCXFE3HlEVP0T07H%2BO88AIhAJOCsK9488hcPEFNVGEGzrZBXmqZGAyjzbRiK2HXOlOAKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxix6xSdeF0DeMHNoMq3AMP922EPimJI4wi2tn4tU47zr654pgkfl%2BU3QL4R12ofRKhO6wEwe7RE3q%2BtsJ%2BLmiMTSL4rQySTper14uAMe%2Fb5fEO4YsKum8BY0bQggn80dxkJUZfrfn9GPQJOpbagcrdY9Qxs0zNzy05f6gsuZ3dt1vMEr1E4eXe8Zl1LZqdDhx8YBiLBKv%2BhLJCrjrKdArhqtxn8M7S4k11gPjuVB3FVOz0SEMJEGCREN9hQb9cReyIPFwm4JjsUbJqYds1bFV%2FxhnGs%2F0bfkQVof85f5U9ckMibVeZhJNlMCKEZxAiqi9B%2BkgxXQ4MS9fLrglocy5ZH0lcwsZ%2BZjoPmnfECqCklueQLniNbThwgrBOSfQdUOOCC2LjlAj6gYlcErMJYq%2FUAIhb%2FIkKe66uvUX7HSA%2B4NLSJP34O7ayA7pDreXABjRMxRoPUBShOgb43N5zFu8MOiGjepPPDX4053XHmVh2UOlWc%2FCuYQ7UPoBogCEROO6v0fxyy7Z3IsVl%2Fq8tA%2BWKLv1e4M%2FXXWVdP46fBK1RWZjHTJCvm9a01O8Jkfl54Fseg3AsSzS6qAFQwUO0V3yMaBfgu9DgeUBLKkded3ztywySG%2B6dM%2BPxZfSYtNQtsS5az%2Bmg0t4bWsPzkzC76d3JBjqkASxOeRwACsDjR6IqEHQjum67eE6hVD7Yu60O9WXvCBVicfVi2BYDvpqnFhT%2FeXiYGwbk4JRLwp3UuTEOOKC5izZsLu31VKCO7kyiIxkJuqs2GdLwyIcybfb%2BCCSpOUHtvVbeVc0L7rs9HG5BSnc4qdjEjQ%2FPNb6wnw1KInepxvq6PATKhKoWo3Sq2IauoQWftCk74cuDIVlEYTv4BsQZS0E%2BXcOf&X-Amz-Signature=34da837be16dfbd192c786e9cb6909bb4c861cf8831179eb9f8656d843ac9e63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

