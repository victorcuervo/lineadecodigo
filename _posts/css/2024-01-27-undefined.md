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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WN7QTCP5%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T095030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQDborMZfyEtRj6g%2FuVDF3kd96K0wDOF4Pa6KE1Vs2x3CwIhAPjTVjmICViQdlDAuLgyOgOGzqm639LPFtR7QrdF%2FR3jKv8DCCoQABoMNjM3NDIzMTgzODA1IgxVzIHYmxFsvofsHsAq3AMXMnhLvVeag0ETThqO29HzLyv4TeQIFEBzUXhIe4yjlQKUvIi8ztc6xAbLhCzRlNeZHHDk6%2FidwDj2XF6wPU9%2F21IbDr5ehV%2FhmChDc3ulzW6BJfdBOW6SfHkWlpul0fxxppEKj23sMwcRsqHngthgQEGkgMHF97UJPkcjeAvR01%2ByGF0MhejMefshWZqy790w71eF%2Fxkx%2F0189LMCKA6V8v9Hk%2BHgIBglrIcN%2B4Pfg5zUt6SgwGiqBOb0oTxAccMzSByGQRcGXDecq3YuE%2FkEpw3tC5ykTiiqm%2BDAXFoGwIkGhtRQRgwLc9v6tL2BcQqEcQuBJJ2SEsmMmdxmGD9vwCu9GuwR4Ea9PmY%2Bwn7WYIFfgtXhLiiAmTxuGs8RW%2Fsi06SegxlG99L%2BuQKg8HOCMYC57PexVaysR%2FN2JRFF4jW1eZyYET0oKBfFgdsSiEPNGYFnd12RrHlBucObn6eC5chYYp8X3f7nN%2BQOWA59VL22UyMmon1Hak9dVScPDq1w92RCrD3yuugAsiH%2BVDYqC%2BDNBfbEu%2BH7zcHjhUUo2u3ae8%2FrGVa6WV0qOjYfTHNZKpCHSJii1h0P4FZ%2FpvXHynqUgTw9FCatSQBzf7%2Fmzq%2BmrgcLY9xLAZwTyjC69r%2FJBjqkAdL%2Ba6LW9lps8OGZgYYR4%2BPI0sItI81mkR1vYw1uetVO%2FoszV923pz8vyy07yodGB8gEZb8SxJfmmulHwaiR1JH8x%2F53D8NDoB8yGdRGiPJclVt9vGmn%2Fis03tkyJ5aQNNTeZKzPbNImGc8XIhj9Zh%2FCDjki0FN57DWMJfON4mM6YDViBrhUNOr2rl39BC%2B5WxdDANK%2FjPj%2FLm5AMlMAfmeyAqeH&X-Amz-Signature=f687ea267520ec82b0dbb9c4179fc1ae4e195059f43bd6c813862018df76ebe6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WN7QTCP5%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T095030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQDborMZfyEtRj6g%2FuVDF3kd96K0wDOF4Pa6KE1Vs2x3CwIhAPjTVjmICViQdlDAuLgyOgOGzqm639LPFtR7QrdF%2FR3jKv8DCCoQABoMNjM3NDIzMTgzODA1IgxVzIHYmxFsvofsHsAq3AMXMnhLvVeag0ETThqO29HzLyv4TeQIFEBzUXhIe4yjlQKUvIi8ztc6xAbLhCzRlNeZHHDk6%2FidwDj2XF6wPU9%2F21IbDr5ehV%2FhmChDc3ulzW6BJfdBOW6SfHkWlpul0fxxppEKj23sMwcRsqHngthgQEGkgMHF97UJPkcjeAvR01%2ByGF0MhejMefshWZqy790w71eF%2Fxkx%2F0189LMCKA6V8v9Hk%2BHgIBglrIcN%2B4Pfg5zUt6SgwGiqBOb0oTxAccMzSByGQRcGXDecq3YuE%2FkEpw3tC5ykTiiqm%2BDAXFoGwIkGhtRQRgwLc9v6tL2BcQqEcQuBJJ2SEsmMmdxmGD9vwCu9GuwR4Ea9PmY%2Bwn7WYIFfgtXhLiiAmTxuGs8RW%2Fsi06SegxlG99L%2BuQKg8HOCMYC57PexVaysR%2FN2JRFF4jW1eZyYET0oKBfFgdsSiEPNGYFnd12RrHlBucObn6eC5chYYp8X3f7nN%2BQOWA59VL22UyMmon1Hak9dVScPDq1w92RCrD3yuugAsiH%2BVDYqC%2BDNBfbEu%2BH7zcHjhUUo2u3ae8%2FrGVa6WV0qOjYfTHNZKpCHSJii1h0P4FZ%2FpvXHynqUgTw9FCatSQBzf7%2Fmzq%2BmrgcLY9xLAZwTyjC69r%2FJBjqkAdL%2Ba6LW9lps8OGZgYYR4%2BPI0sItI81mkR1vYw1uetVO%2FoszV923pz8vyy07yodGB8gEZb8SxJfmmulHwaiR1JH8x%2F53D8NDoB8yGdRGiPJclVt9vGmn%2Fis03tkyJ5aQNNTeZKzPbNImGc8XIhj9Zh%2FCDjki0FN57DWMJfON4mM6YDViBrhUNOr2rl39BC%2B5WxdDANK%2FjPj%2FLm5AMlMAfmeyAqeH&X-Amz-Signature=a4d055638c3111c4a05812181335547f15b603e44671fc02c3e0836575142abd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

