---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZESSY2NU%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T152943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQDW1%2BNJvCUay6suVxXJfbxK3LS015eO%2Bh0gLDjox6MyfgIhAPdAANVaDOW9KJenO4Q2xEWIvOZgPsALzaxKaCdIocgdKv8DCEgQABoMNjM3NDIzMTgzODA1IgwrRYpLBNd3pXVWz40q3AN70fVw1toSMmseXi6X45SI4fWTgf3JrUs4zutkvDjg6%2BUec%2FU9G4vxBB2P%2BSPcQ2oPyiCcW5PbXqRWNbRor%2BkskO%2FQcM4BASJzZYpGGOrYfKds36sDVc9aJcCfsm6PTcayjx9owG0AhwgY%2Fe6gYTjp%2FAj6fVo8w0FBVk%2FBI4RH3qimnEGfBZL0NQxQyiC%2FUMPdry48dw75qTBJyg3ds5y4sSiTbps%2BwtZIM%2Fr0ZABk%2FkMcHZEv6Z4%2BUB0r734Zibm8nzpPdpA6dUhEwH%2BAyhmpialxQuAWYNnqIRNOt1dK3dBoe%2FAYgFHfKjGJIq7TpRSPXGwwHzaSgjk6E9rmBk0c1lK2i%2BVKzo0la1MS%2FtjqStYixoCF8pQQ%2BTinNA1XO5WR%2BfCNjd%2BTmI7FjcWqmSsvCrRotI7Bgg%2BGRkv2R8tuJbTYb9ssUs1qrVj7riCpOulioUsp6PzZZkoH5pOtfED50p5PyIz4qDsQF8M4C%2Fryb86U1PuZZ0xQaHIuT9ANYSyPhe2QaplcDzL3u0QclS5bfv7KhRgxMnldl8tRJFDl9x8Oa%2BFOaXdgjgZOnvzutmMbjcW33Qw2uYCewjYAzdXj0M1ysG07w5La7pgHmEXQ1LC4ZtcT6Zu4Smuh9jDQvsbJBjqkAZjGfGV72xbvaV1vl49KzZrimx5zgSidnNt7Ufca4h8HZFN%2B%2FaM5Mddc2sRMsl9UhYp5gFuLOEiZey5DNCNf3S1tJOrv7wgzD3jBdQXGpVC1fxYPBPn1TPPw5AwQr%2B9soBYwlrt9rPfgCSA%2FnGGEezX7%2BYh%2BjTiI0yHqEcu0FOkDGi%2FEsMTpgA7S1lvFtkghc%2BM%2BcfwvvtsG8YFUC%2FZE%2BxDYfli2&X-Amz-Signature=f04d9daf9a0973adc74076c0d8480662994e18bc1847e1d9ab1f3564342cef94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZESSY2NU%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T152943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQDW1%2BNJvCUay6suVxXJfbxK3LS015eO%2Bh0gLDjox6MyfgIhAPdAANVaDOW9KJenO4Q2xEWIvOZgPsALzaxKaCdIocgdKv8DCEgQABoMNjM3NDIzMTgzODA1IgwrRYpLBNd3pXVWz40q3AN70fVw1toSMmseXi6X45SI4fWTgf3JrUs4zutkvDjg6%2BUec%2FU9G4vxBB2P%2BSPcQ2oPyiCcW5PbXqRWNbRor%2BkskO%2FQcM4BASJzZYpGGOrYfKds36sDVc9aJcCfsm6PTcayjx9owG0AhwgY%2Fe6gYTjp%2FAj6fVo8w0FBVk%2FBI4RH3qimnEGfBZL0NQxQyiC%2FUMPdry48dw75qTBJyg3ds5y4sSiTbps%2BwtZIM%2Fr0ZABk%2FkMcHZEv6Z4%2BUB0r734Zibm8nzpPdpA6dUhEwH%2BAyhmpialxQuAWYNnqIRNOt1dK3dBoe%2FAYgFHfKjGJIq7TpRSPXGwwHzaSgjk6E9rmBk0c1lK2i%2BVKzo0la1MS%2FtjqStYixoCF8pQQ%2BTinNA1XO5WR%2BfCNjd%2BTmI7FjcWqmSsvCrRotI7Bgg%2BGRkv2R8tuJbTYb9ssUs1qrVj7riCpOulioUsp6PzZZkoH5pOtfED50p5PyIz4qDsQF8M4C%2Fryb86U1PuZZ0xQaHIuT9ANYSyPhe2QaplcDzL3u0QclS5bfv7KhRgxMnldl8tRJFDl9x8Oa%2BFOaXdgjgZOnvzutmMbjcW33Qw2uYCewjYAzdXj0M1ysG07w5La7pgHmEXQ1LC4ZtcT6Zu4Smuh9jDQvsbJBjqkAZjGfGV72xbvaV1vl49KzZrimx5zgSidnNt7Ufca4h8HZFN%2B%2FaM5Mddc2sRMsl9UhYp5gFuLOEiZey5DNCNf3S1tJOrv7wgzD3jBdQXGpVC1fxYPBPn1TPPw5AwQr%2B9soBYwlrt9rPfgCSA%2FnGGEezX7%2BYh%2BjTiI0yHqEcu0FOkDGi%2FEsMTpgA7S1lvFtkghc%2BM%2BcfwvvtsG8YFUC%2FZE%2BxDYfli2&X-Amz-Signature=9746fc8aa043db7cffbf63aa89ffee0163cafa3447fb4f0e2dcfd14828dec444&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

