---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYDJHSOH%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T153010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEjwcYiW8saOH02wnptm3qEOGv8dylmIwwB6FTVN3%2BxqAiBCo5O%2Bvft6wPPHGGgCUMiPU68nao9cH0rMDYH0grCuIiqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpQN0y8fFQKqY4qHDKtwDCoqWbB8gK2xLRt8ZkgkqVwTXH4J9LdzKvH4EBZ1nJ6JdK%2Bf0CaNibeENHk%2BryB0h8UFlTUQHqBeyn9NlHzrZTjmzaH8FoL8ykMdGFzv5ugjfqahVoASBEqqPZgyMBKWMCdOfh3qhSgSkkvtrvFdlXe5l0YtsoP%2BipOoiRuOdGba%2BejIxHBW9ZJmMjxAR4xij6%2BjNoRUez3CGyj1cRM7%2FFMYGj1XBgbRdilnealSL8WVnEbMn4VrOJrmKgRrA5e%2FZHnaBA9x5NFEkY1uUOdwLbQVeTgGGuPxEdyxhwhQleAAv0PUngqPjMY7ih9NAtSHeoQ8O14KoU4rCnpZPxHAvaNqos9KE7yOG7tqiH7ajPzxAM3k%2Fc%2BtMU%2F1Y1n3rNcbu54wze5aMg23ctA888a9DgEcP%2B7xXhYgBF018smy9%2FJDC0aNbCCGsI2X901awW5%2FEYsJB9D%2BDy6oEGbcfCtjc%2BtcO29HZRcS%2FrTv3kq2dQ40B0Yc81lTexUUE1jQRKe3twKgPoKzE0jtMLtmvW4SPJRadv74ucSk7UacuJEUcjxcrzE6P90fypkbqNCBlwNpJaBKUTsiWZd%2FECHydbkxHFh9kvl%2FnOWXW8%2FWfJNIvGL1bxMc2uromHY%2FYs8owx5nVyQY6pgHwjO5Pgn9H7hFbNczb%2FI0vJbd6urXGctggvvoIm3ZkroE8NUNs98kgp%2F5s2JQsUEvzUvKpsI7qvJ6D4U6geYfGrI1R3tgov27sqMpwT9xpx5FIeNlNLFO%2BendD91jwHNEk2KUDTbPulglvbJJGdBWNXXZzdNaef2Ayq8jw0riuv1pPTCcaByp1L2%2BQ7XhGEmymKiF3BOinm7p4LJeHdtcQ6iu%2BpiUl&X-Amz-Signature=fc80e20763ea683bcf5143074c1d51d70a5b59eb86a665333608b16865ed6c41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYDJHSOH%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T153010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEjwcYiW8saOH02wnptm3qEOGv8dylmIwwB6FTVN3%2BxqAiBCo5O%2Bvft6wPPHGGgCUMiPU68nao9cH0rMDYH0grCuIiqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpQN0y8fFQKqY4qHDKtwDCoqWbB8gK2xLRt8ZkgkqVwTXH4J9LdzKvH4EBZ1nJ6JdK%2Bf0CaNibeENHk%2BryB0h8UFlTUQHqBeyn9NlHzrZTjmzaH8FoL8ykMdGFzv5ugjfqahVoASBEqqPZgyMBKWMCdOfh3qhSgSkkvtrvFdlXe5l0YtsoP%2BipOoiRuOdGba%2BejIxHBW9ZJmMjxAR4xij6%2BjNoRUez3CGyj1cRM7%2FFMYGj1XBgbRdilnealSL8WVnEbMn4VrOJrmKgRrA5e%2FZHnaBA9x5NFEkY1uUOdwLbQVeTgGGuPxEdyxhwhQleAAv0PUngqPjMY7ih9NAtSHeoQ8O14KoU4rCnpZPxHAvaNqos9KE7yOG7tqiH7ajPzxAM3k%2Fc%2BtMU%2F1Y1n3rNcbu54wze5aMg23ctA888a9DgEcP%2B7xXhYgBF018smy9%2FJDC0aNbCCGsI2X901awW5%2FEYsJB9D%2BDy6oEGbcfCtjc%2BtcO29HZRcS%2FrTv3kq2dQ40B0Yc81lTexUUE1jQRKe3twKgPoKzE0jtMLtmvW4SPJRadv74ucSk7UacuJEUcjxcrzE6P90fypkbqNCBlwNpJaBKUTsiWZd%2FECHydbkxHFh9kvl%2FnOWXW8%2FWfJNIvGL1bxMc2uromHY%2FYs8owx5nVyQY6pgHwjO5Pgn9H7hFbNczb%2FI0vJbd6urXGctggvvoIm3ZkroE8NUNs98kgp%2F5s2JQsUEvzUvKpsI7qvJ6D4U6geYfGrI1R3tgov27sqMpwT9xpx5FIeNlNLFO%2BendD91jwHNEk2KUDTbPulglvbJJGdBWNXXZzdNaef2Ayq8jw0riuv1pPTCcaByp1L2%2BQ7XhGEmymKiF3BOinm7p4LJeHdtcQ6iu%2BpiUl&X-Amz-Signature=895ba534f6de1675411e396a564200a0ffa8505d51bd57f663da5f413746bc68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

