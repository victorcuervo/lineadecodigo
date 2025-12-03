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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664V5BQRCZ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T132442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCICz4%2FzgrU9mkD2%2BC9UMSc%2FGTKpyzv61Nfzr7B6GfU0yrAiEA8SPvLpQsienPT3g7pkW5vdNUlBOC3sRjQ6TcLmdq394q%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDAZZe6FAKFivL%2BPveSrcA62l1%2FKaUnVTwYjnsN8sMfyJ%2FPP3HqQ9w03LVKqRlWGXjA4S7K3EKBx%2FY6cusS39XUWWtRqCFM5BPdsS5cszWtMgpV69wisTKoRDvcEgv1vnL84FmaoAnM2AMB%2BGXp8Y7vZjKQGKheBfumccYP7fgU3tAjM2x0N6sz%2B6%2FBMhFs%2FNfmU%2F2%2Bz8uWE62aYFw%2F9tdCddQt86ao3pJK8ubrYxQYNski4qDQmmkj3sNazD5%2Fwtrypp%2FcfkkZ%2FJ46dSpt2dG%2BnyP4YlEQGjGeoyC%2Bj9gr%2BxrEL7USNvCfhOnGEimutyltKgHX6K7f5zYU6z65qJZwJJ8EGNXpARD6Om9o%2F7vZJu6rPypQC04cCzayDufHkcHDs6ZahTK27Ok6Pyo5HNLowq2%2F%2Fc0RrcvijUzx6TSSgJpph8oiCOvxNNOv4V4qBFtt21m5SiBksvB82TJuEibBHwIUMyyU79M%2B76ExgyYWpVZYq7qnlmUtRbDOirdZ31BWVuOgJtrKtiRiyYO6CBiZM3TVRkVUv9AX2tnZ9eAUjrAg%2F6YiTEFzI6fE4QnZC66ThmeBp%2BNswmWMV6%2FYeDyUwYkjEemoKWf5Dpc9uaj7uJ%2FYpHUUddkgWulcxuVvpvd95zSM343AKPoXLHMLfpwMkGOqUBHYxd1EHH%2F4SbnLyOX2fT4CCK%2BaZPGWL9zLSraGmiuBY1wHWYNRkkDMWC5PHhWQf7%2BfcyM%2BOgTUU37hvYhZFZvGv2tuaWWI9dStRuLdJCw0cZrsmrXknZTb2bb2OymSfgybjY2Jq%2BVI4v35oEK75O5dXIUBIE16XJwMW5TUxjDQVLFyMRunph7vWUhAytOGczPxgEba%2B%2BwteJLdFSUR5rCTJTIQPZ&X-Amz-Signature=20d4b256b2321f472aa7a1e4797a3c3bdc4e59caaa258c814ce438e6027487d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664V5BQRCZ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T132442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCICz4%2FzgrU9mkD2%2BC9UMSc%2FGTKpyzv61Nfzr7B6GfU0yrAiEA8SPvLpQsienPT3g7pkW5vdNUlBOC3sRjQ6TcLmdq394q%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDAZZe6FAKFivL%2BPveSrcA62l1%2FKaUnVTwYjnsN8sMfyJ%2FPP3HqQ9w03LVKqRlWGXjA4S7K3EKBx%2FY6cusS39XUWWtRqCFM5BPdsS5cszWtMgpV69wisTKoRDvcEgv1vnL84FmaoAnM2AMB%2BGXp8Y7vZjKQGKheBfumccYP7fgU3tAjM2x0N6sz%2B6%2FBMhFs%2FNfmU%2F2%2Bz8uWE62aYFw%2F9tdCddQt86ao3pJK8ubrYxQYNski4qDQmmkj3sNazD5%2Fwtrypp%2FcfkkZ%2FJ46dSpt2dG%2BnyP4YlEQGjGeoyC%2Bj9gr%2BxrEL7USNvCfhOnGEimutyltKgHX6K7f5zYU6z65qJZwJJ8EGNXpARD6Om9o%2F7vZJu6rPypQC04cCzayDufHkcHDs6ZahTK27Ok6Pyo5HNLowq2%2F%2Fc0RrcvijUzx6TSSgJpph8oiCOvxNNOv4V4qBFtt21m5SiBksvB82TJuEibBHwIUMyyU79M%2B76ExgyYWpVZYq7qnlmUtRbDOirdZ31BWVuOgJtrKtiRiyYO6CBiZM3TVRkVUv9AX2tnZ9eAUjrAg%2F6YiTEFzI6fE4QnZC66ThmeBp%2BNswmWMV6%2FYeDyUwYkjEemoKWf5Dpc9uaj7uJ%2FYpHUUddkgWulcxuVvpvd95zSM343AKPoXLHMLfpwMkGOqUBHYxd1EHH%2F4SbnLyOX2fT4CCK%2BaZPGWL9zLSraGmiuBY1wHWYNRkkDMWC5PHhWQf7%2BfcyM%2BOgTUU37hvYhZFZvGv2tuaWWI9dStRuLdJCw0cZrsmrXknZTb2bb2OymSfgybjY2Jq%2BVI4v35oEK75O5dXIUBIE16XJwMW5TUxjDQVLFyMRunph7vWUhAytOGczPxgEba%2B%2BwteJLdFSUR5rCTJTIQPZ&X-Amz-Signature=e0054487db515a6628248bb175db01a8f37ef7bdf4ffd328c9a444816e13228f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

