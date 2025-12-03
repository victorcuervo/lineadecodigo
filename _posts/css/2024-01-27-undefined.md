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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TS6PZR2M%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T074208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQC7CBqvB8Rf90cqyOtkNGW4pawyoZivt%2FuPncnkr3v0QQIhAMmKI%2FzqyjmRUvOYaz%2BpPEwXx12%2BH%2BSbXN7z%2BFzj%2BDS5Kv8DCCgQABoMNjM3NDIzMTgzODA1IgzYUwR0GUGTFrhn7lUq3AMsZqkf%2B8VKjVDEviRkbjGdS46XLjL5Mpzh3%2B1MkkH8OZ7wmhoslkxkvxM%2Fe0w24ywprq47XW3hkj5K1fRyAb3nsNpb2DIsVFmDoSbN557Wrprk1U7WrZRHeT6Ssut2Lk0kCaYZ71f5WjF4DvGbDPsz25zuVfU6Zo7H3dhvgInWzczerzshGqSihsoAoY3hfYA2Nt60ZXGGgwVfMFpFzZbcIqOHnr%2BLKrvbUGad0TQNWk5qMfiAggKrYrVX9pbxPvhrC9YpcrAh1cdkYYQKrTqk9mirBqxZHMUivx9WxRTNReDUNJefzIARDFvlQWOMxSUPVtH6Fjk1%2BldryL%2BtB00tmbPWYngj5dTYKVCX4CvvxYobu1FwWqHGROeYd4ShV7eKf2Zs7h95PyEzcUSF3aahUxetAaOZVBp4SJwttaFNW6qtBXJkz66AK%2FUqNqop6wNG%2Bb0CKRgdCvFk3WU7oDusMuC%2FbhIisbBGlWUjRCrleQWShebxH%2BkBWVIfak2Qzv7IQgFBHEywz3jHhUHo38dJhmtjP0lCT2wrFMhIVkYxqnieI6paKpR5QepUbOk%2FVqTSl8vjaDCXHqyZ7kfQHyDwMCC7pE6RN%2FiOoBrlU8gkDXPZRjGUpIndAUT6LzD1ub%2FJBjqkASTTuuiZHBxQnkmaYvqXyowDrhFGyj%2BsA4SjlTzfgcOuMZQ4bJstAIPEB%2B8oaRy3qS34rSSUESMB%2BM9aRl9PBep%2Btb4PVc9vCtzrIEWWmNUAcTSq%2FlLsCZYY8m8NAzTyC8O0cahCdHuLMx%2Bv91pB%2F9C686%2FP%2BP69ldlUZhFtBeULP0SHRxrY1LhQYhGUD7D2nX5wdjUcSs2P%2By1UX0RG4LmyCegn&X-Amz-Signature=26455042a9971e6ad842fb381c2142fc59402e90433b598896f21c728c0724b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TS6PZR2M%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T074208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQC7CBqvB8Rf90cqyOtkNGW4pawyoZivt%2FuPncnkr3v0QQIhAMmKI%2FzqyjmRUvOYaz%2BpPEwXx12%2BH%2BSbXN7z%2BFzj%2BDS5Kv8DCCgQABoMNjM3NDIzMTgzODA1IgzYUwR0GUGTFrhn7lUq3AMsZqkf%2B8VKjVDEviRkbjGdS46XLjL5Mpzh3%2B1MkkH8OZ7wmhoslkxkvxM%2Fe0w24ywprq47XW3hkj5K1fRyAb3nsNpb2DIsVFmDoSbN557Wrprk1U7WrZRHeT6Ssut2Lk0kCaYZ71f5WjF4DvGbDPsz25zuVfU6Zo7H3dhvgInWzczerzshGqSihsoAoY3hfYA2Nt60ZXGGgwVfMFpFzZbcIqOHnr%2BLKrvbUGad0TQNWk5qMfiAggKrYrVX9pbxPvhrC9YpcrAh1cdkYYQKrTqk9mirBqxZHMUivx9WxRTNReDUNJefzIARDFvlQWOMxSUPVtH6Fjk1%2BldryL%2BtB00tmbPWYngj5dTYKVCX4CvvxYobu1FwWqHGROeYd4ShV7eKf2Zs7h95PyEzcUSF3aahUxetAaOZVBp4SJwttaFNW6qtBXJkz66AK%2FUqNqop6wNG%2Bb0CKRgdCvFk3WU7oDusMuC%2FbhIisbBGlWUjRCrleQWShebxH%2BkBWVIfak2Qzv7IQgFBHEywz3jHhUHo38dJhmtjP0lCT2wrFMhIVkYxqnieI6paKpR5QepUbOk%2FVqTSl8vjaDCXHqyZ7kfQHyDwMCC7pE6RN%2FiOoBrlU8gkDXPZRjGUpIndAUT6LzD1ub%2FJBjqkASTTuuiZHBxQnkmaYvqXyowDrhFGyj%2BsA4SjlTzfgcOuMZQ4bJstAIPEB%2B8oaRy3qS34rSSUESMB%2BM9aRl9PBep%2Btb4PVc9vCtzrIEWWmNUAcTSq%2FlLsCZYY8m8NAzTyC8O0cahCdHuLMx%2Bv91pB%2F9C686%2FP%2BP69ldlUZhFtBeULP0SHRxrY1LhQYhGUD7D2nX5wdjUcSs2P%2By1UX0RG4LmyCegn&X-Amz-Signature=00a7c0e4467fbc70cb3942f3b834cceadfd0dcb45f64bfa8ba1b0b9069fe39c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

