---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXUBRDOV%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T073756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAU4W%2F0jmV%2FuiMc6JE%2FsHSk2N5OKQLeoQHbIzinYqvR3AiBWCYFEZPqDocfer0HWPllvxunG6jv4tOqIcjw3%2FDs8ASqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMBh%2BxtEB2R7YI%2FUEKtwDpceceqIVUTojOtd8mYLjU1%2Bc7MKKnRno5QxEO2w0MnUhCbXoLvzspdb%2FQ%2BYttnuZzdl47oHTpIBu4fMsSf0QRJmhAnMb0CnKG4pr9Egeue%2BELZV%2FA84Z1o78hl%2Fg%2Fan3DJHB3y1rXjsry9077eLDRrgUV9zdyW%2FFUegzYa4Ij6guSHDIP%2F1SctwlE92CLhzNlgtyuKTxt6fbi%2Bg%2FoiwyUdHJt6T9q6sCTM2Dy%2BTKBBJPml8KVT3rBj6XUAm71BfMPG4VcKaYeMg%2FGNuckyJb5K4JxkvNksLWTfMdlI5usOqgQtQ50qYxTX2Tcj7bEBFce%2FB4luOKQt7bKlOrkOWJEZffsKUci93r4V6QvaLIA%2BtBY2Wr3b83PRmXH6thHvLM10QZxmo%2Bws33ID5o%2Fl8ewQ2TAID7G%2FFZCefqd9gHuEZTDpzd4EuUUVWoUQjd4%2B%2BVQbzaAHKPruOz0KcZqWwujJL4QkkYSIq8i7fFTlBP0%2BgK9losfZzedeALZj2YqENMD72OGfC2CuuXN1FbyB%2FKUFnoma4jxpfbOxXRZttk%2BC4JwtKHQzQlOxL4wUuGgfyvRmyHPvUEc7jY0a1%2Bldb2vkfXhX4A%2B48kRYR6FkPpZ7tKiRb%2FDyueVNJaHFQwmIffyQY6pgF3UpUW3YZm6M9uKfn4Os6uF%2F%2Bw5MOk3pXXnOrzrILNy3RgKSOtc8xlUaTBqh3bKbKrUZa93va3xa4AjIHVz9FJYAbYYs8vWt3MWj76xgKh%2FTkRsJ9mmIDxCfgHtYjxstSnRbVJi0Bs%2Bl9yI0NohnVu980lZ45DnnYbfsrjrWVw4eRtBx482Fj%2FtjPjCKaHQc6Hc3FMWGNiDhVbdyPEulebj%2FSVb0%2B%2F&X-Amz-Signature=845b8d2fa83924ed2f0ab614d12c697ef406cf6a8b8e00298379070a961aa2d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXUBRDOV%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T073756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAU4W%2F0jmV%2FuiMc6JE%2FsHSk2N5OKQLeoQHbIzinYqvR3AiBWCYFEZPqDocfer0HWPllvxunG6jv4tOqIcjw3%2FDs8ASqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMBh%2BxtEB2R7YI%2FUEKtwDpceceqIVUTojOtd8mYLjU1%2Bc7MKKnRno5QxEO2w0MnUhCbXoLvzspdb%2FQ%2BYttnuZzdl47oHTpIBu4fMsSf0QRJmhAnMb0CnKG4pr9Egeue%2BELZV%2FA84Z1o78hl%2Fg%2Fan3DJHB3y1rXjsry9077eLDRrgUV9zdyW%2FFUegzYa4Ij6guSHDIP%2F1SctwlE92CLhzNlgtyuKTxt6fbi%2Bg%2FoiwyUdHJt6T9q6sCTM2Dy%2BTKBBJPml8KVT3rBj6XUAm71BfMPG4VcKaYeMg%2FGNuckyJb5K4JxkvNksLWTfMdlI5usOqgQtQ50qYxTX2Tcj7bEBFce%2FB4luOKQt7bKlOrkOWJEZffsKUci93r4V6QvaLIA%2BtBY2Wr3b83PRmXH6thHvLM10QZxmo%2Bws33ID5o%2Fl8ewQ2TAID7G%2FFZCefqd9gHuEZTDpzd4EuUUVWoUQjd4%2B%2BVQbzaAHKPruOz0KcZqWwujJL4QkkYSIq8i7fFTlBP0%2BgK9losfZzedeALZj2YqENMD72OGfC2CuuXN1FbyB%2FKUFnoma4jxpfbOxXRZttk%2BC4JwtKHQzQlOxL4wUuGgfyvRmyHPvUEc7jY0a1%2Bldb2vkfXhX4A%2B48kRYR6FkPpZ7tKiRb%2FDyueVNJaHFQwmIffyQY6pgF3UpUW3YZm6M9uKfn4Os6uF%2F%2Bw5MOk3pXXnOrzrILNy3RgKSOtc8xlUaTBqh3bKbKrUZa93va3xa4AjIHVz9FJYAbYYs8vWt3MWj76xgKh%2FTkRsJ9mmIDxCfgHtYjxstSnRbVJi0Bs%2Bl9yI0NohnVu980lZ45DnnYbfsrjrWVw4eRtBx482Fj%2FtjPjCKaHQc6Hc3FMWGNiDhVbdyPEulebj%2FSVb0%2B%2F&X-Amz-Signature=95e7783352fd0866df4d8adea08357d9823fee3ab39b7614a339ac460dbf9f55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

