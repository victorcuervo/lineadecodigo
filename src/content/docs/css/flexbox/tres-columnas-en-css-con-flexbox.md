---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NAZL7EJ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T065603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxnYvCvETXwfRdopXEd2XO6z3qACrX1oFyULYUsXOX7QIgPt2lVhugsydEJRVswn3CBPen5XavmAb4bEpKJ1QiOc0qiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE1r2NuD%2Feo700%2BnDyrcA0p8HKEfoMPSrjGobGwRg9xiPGOxBuh6yI7RuXCDO4iTfMlbUf14wKpHLYcmTT1cmWV5bJdJHtdaVgJIVO9ABhapymOGfo%2BQ3nXKdxXGbkdAo8Vmwb607KzXftQZvC76OGH2WF5v7b8C1vn28rdAsxDIBQNQzMQ6mBMZxmAbyU7BgfjvSkVzt2hVueLpVw6UnJGezN8TZslYmtpN0TJeFGCOMSz9HfxpO1pbdoN6UmwnQ%2FiJrOiIlufvyXkXKIvb2brm3lKuvxHfLziKzMrT%2BGf4tqrDQB5nK1YSdpaXeuTf8G9TmF6P6gCBuOP%2F9v0PKctjHuEb5vCGfSuF%2BeaI59xiG0Y9dDQzMJ%2BR0vs7yUX9FTP5Nrydf0r4XQl3PDzbGEJy%2BrAgp3zOGZ2gWUTIXJYzCjLNNJo3ReDG1zgp5tqax8%2BG0IW7%2F1FUI%2FUntOCocBEnlw5mXWpVPK7EGFWsvIxt%2BG4iVbqufgqm9vihiAkTPnSBi3Mi3XDRivK4UoJTSHjWNnln47CKNMS%2BX0Z99fnrhUvsgxSRVLedQ7VEuLLEBy1yzNUxlCoBejOdMFjpYvwYPtK84AfiinbB3%2F87FHG06S9glcajEw0enVGWcyEU%2BGMAdh8ulfp8XlpYMPiH38kGOqUBkI3fp%2BHTbw6AbU3cntr%2BJQplppbh94jxT2mi6j6mC3zbTNUYz7PkUv1MLDDWMGIGJNsfnpMvlFunZoKw4JYKH1Al8m%2BTo2W%2BZmZcT%2FqhvZfhKppck0QLYFhxclf5%2B0zUf7TbDAQeAQGX0hFDxHbqnFqeTwiPwVu7XmvVNE5LQqoFX5t2M1MumVj3YJxWYrbLB9ZZxQPlmVMi8K7neLER7sCuHDL0&X-Amz-Signature=8181127a14a21a5c2e4f20f8120a75e1a6e5cee174ddb679e60dfe7ee1212074&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NAZL7EJ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T065603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxnYvCvETXwfRdopXEd2XO6z3qACrX1oFyULYUsXOX7QIgPt2lVhugsydEJRVswn3CBPen5XavmAb4bEpKJ1QiOc0qiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE1r2NuD%2Feo700%2BnDyrcA0p8HKEfoMPSrjGobGwRg9xiPGOxBuh6yI7RuXCDO4iTfMlbUf14wKpHLYcmTT1cmWV5bJdJHtdaVgJIVO9ABhapymOGfo%2BQ3nXKdxXGbkdAo8Vmwb607KzXftQZvC76OGH2WF5v7b8C1vn28rdAsxDIBQNQzMQ6mBMZxmAbyU7BgfjvSkVzt2hVueLpVw6UnJGezN8TZslYmtpN0TJeFGCOMSz9HfxpO1pbdoN6UmwnQ%2FiJrOiIlufvyXkXKIvb2brm3lKuvxHfLziKzMrT%2BGf4tqrDQB5nK1YSdpaXeuTf8G9TmF6P6gCBuOP%2F9v0PKctjHuEb5vCGfSuF%2BeaI59xiG0Y9dDQzMJ%2BR0vs7yUX9FTP5Nrydf0r4XQl3PDzbGEJy%2BrAgp3zOGZ2gWUTIXJYzCjLNNJo3ReDG1zgp5tqax8%2BG0IW7%2F1FUI%2FUntOCocBEnlw5mXWpVPK7EGFWsvIxt%2BG4iVbqufgqm9vihiAkTPnSBi3Mi3XDRivK4UoJTSHjWNnln47CKNMS%2BX0Z99fnrhUvsgxSRVLedQ7VEuLLEBy1yzNUxlCoBejOdMFjpYvwYPtK84AfiinbB3%2F87FHG06S9glcajEw0enVGWcyEU%2BGMAdh8ulfp8XlpYMPiH38kGOqUBkI3fp%2BHTbw6AbU3cntr%2BJQplppbh94jxT2mi6j6mC3zbTNUYz7PkUv1MLDDWMGIGJNsfnpMvlFunZoKw4JYKH1Al8m%2BTo2W%2BZmZcT%2FqhvZfhKppck0QLYFhxclf5%2B0zUf7TbDAQeAQGX0hFDxHbqnFqeTwiPwVu7XmvVNE5LQqoFX5t2M1MumVj3YJxWYrbLB9ZZxQPlmVMi8K7neLER7sCuHDL0&X-Amz-Signature=05062d3424106cf692df448a6bc538cf652b442f425c6ba34250d6b59103089c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

