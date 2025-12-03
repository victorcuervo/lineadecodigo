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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNFESPU3%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T152322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIHkCGeIBwo9D6o5lXn5lT1yTVSltIuBx0Ng%2BahqDF%2F8TAiEAgHsnekXwIz5MZE0xlQvtSR7gC66lZQH6IRdGILlKbJsq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDC6cMh7HTVjmlR6yuircA4Uv2Kdf9QXVOjakBwiFFRhbj2YBfq1E9n0Jdz%2FS8g%2FXbLMt3PsPNlqR%2F3sMdZWZEgbLLl7JQbI5ggJL%2F1N20WGNP%2BJW%2Fs9IwI7ZhJdlrP0EmwbCpDg%2BDwDoj2TVq5Rdo6aCxzihpKEQSEoXTo42IEdokCp7gpfDRnvYG0buQfrbRhCiBdNcXIP7u4zqNbPpzpKu91E8MeMYZy3emV0d2myChjs7LHLF5OQBLWTp7Y%2FgyYkUnJCCdnBocpUL8KurBWiQ%2FUasfo4xqrx6HxBfN4bYzsM8IKkizAcLqG%2BJm%2FdiS1QLYm9Uz5o49uj%2FsJjDGhhVEA4HhWwNiAjhtGipFuMqfzv1mEf2YtbTx%2Fu2nFFcO9cQZi1ZUP4X1ypp%2FOiJzs%2BLwv5WWAHnacgGm%2BIB88gzW%2FePXHHETJzj325N02c%2B1IgTI8A%2BN%2FjG3it8zT3yYXg%2Fxp2HhRgtse3oMLKo2oMNj6JA9y6vfn4%2FZBQEh%2BGrdjSwaz%2Fc5I%2BhSVmpVtrFSs4bcQdKLO4Rp4DzhWFJ%2Bhxauuzqjcv6B6H5tdC7MVA9qTcBERzSn8AQyonWjfrObigSjCV6fxFtLeYhQofpyHZrzXua1LEsKHyFnFMNQQM0oq%2FzVh4hM4XJ9cfmMNemwckGOqUBr%2BZDQMOyCNrdKZYMO%2B9wy5UbgSFDT60J00%2BlamIwjFKs8IL41%2B%2BQZ9x5rocYW53vEGErfj4c8%2B8FaHa%2B7QvIxLbXAZJGjh%2FoKCkmkZsOKuA3oep6ww6HgK9qjQOeGoRbg3ng7exu44viLOOF1ByHcQ786jbBatgMW%2Fnbe%2B%2FiPriXMd57ad4hoYXbr%2FMx3Y8l7gx5G8ubWgs3aC7S%2BPS08VxHbmiL&X-Amz-Signature=dee4c173f0844af2712f7c8d3d004cb3dcb417d04991c685c0f6c2c059348784&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNFESPU3%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T152322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIHkCGeIBwo9D6o5lXn5lT1yTVSltIuBx0Ng%2BahqDF%2F8TAiEAgHsnekXwIz5MZE0xlQvtSR7gC66lZQH6IRdGILlKbJsq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDC6cMh7HTVjmlR6yuircA4Uv2Kdf9QXVOjakBwiFFRhbj2YBfq1E9n0Jdz%2FS8g%2FXbLMt3PsPNlqR%2F3sMdZWZEgbLLl7JQbI5ggJL%2F1N20WGNP%2BJW%2Fs9IwI7ZhJdlrP0EmwbCpDg%2BDwDoj2TVq5Rdo6aCxzihpKEQSEoXTo42IEdokCp7gpfDRnvYG0buQfrbRhCiBdNcXIP7u4zqNbPpzpKu91E8MeMYZy3emV0d2myChjs7LHLF5OQBLWTp7Y%2FgyYkUnJCCdnBocpUL8KurBWiQ%2FUasfo4xqrx6HxBfN4bYzsM8IKkizAcLqG%2BJm%2FdiS1QLYm9Uz5o49uj%2FsJjDGhhVEA4HhWwNiAjhtGipFuMqfzv1mEf2YtbTx%2Fu2nFFcO9cQZi1ZUP4X1ypp%2FOiJzs%2BLwv5WWAHnacgGm%2BIB88gzW%2FePXHHETJzj325N02c%2B1IgTI8A%2BN%2FjG3it8zT3yYXg%2Fxp2HhRgtse3oMLKo2oMNj6JA9y6vfn4%2FZBQEh%2BGrdjSwaz%2Fc5I%2BhSVmpVtrFSs4bcQdKLO4Rp4DzhWFJ%2Bhxauuzqjcv6B6H5tdC7MVA9qTcBERzSn8AQyonWjfrObigSjCV6fxFtLeYhQofpyHZrzXua1LEsKHyFnFMNQQM0oq%2FzVh4hM4XJ9cfmMNemwckGOqUBr%2BZDQMOyCNrdKZYMO%2B9wy5UbgSFDT60J00%2BlamIwjFKs8IL41%2B%2BQZ9x5rocYW53vEGErfj4c8%2B8FaHa%2B7QvIxLbXAZJGjh%2FoKCkmkZsOKuA3oep6ww6HgK9qjQOeGoRbg3ng7exu44viLOOF1ByHcQ786jbBatgMW%2Fnbe%2B%2FiPriXMd57ad4hoYXbr%2FMx3Y8l7gx5G8ubWgs3aC7S%2BPS08VxHbmiL&X-Amz-Signature=8a3e131b1b85a41b7a872b3e2a42df000992c467ec6dac5c3c3fccb372b0c892&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

