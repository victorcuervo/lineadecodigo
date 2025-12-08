---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMZBKZ7R%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T140613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD69RshKkgnISAByPtwAKUhxzCTUySpWSborkfSh5SeNwIgFpI79MpyS3a4eizjwVYxCGxVF0lqaoN55llmdxXhlM8qiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHGJoLD2y95fd1J67yrcA9dsY%2FLL2QrIAryLpNRZq%2Fz9W4h%2ByUgRqoK5PTXWzTQa%2FZgPeigHM%2FrwIpg2yHBme%2B%2F4s%2Bi6yrZGs7vtWvw208iiCsV99v7prqRdOfgJqCLDW%2BJ4vKsj3U8PaqpIF487tYauFObn5SQbEvq1VesGJl5fVuxoP21sh6rXaqsV0KHZ6KhZLkb2929FSYyoPAZmTDpesT6wd7a8s2wqMXVIv%2Fn48LiXX9uqNTiqi98%2Bu%2FbfBJM5Nx9VXNJQHXaJDD68uUKnXog9YdPSR2Yfhelv9Ud1Or0z67SH5BLec0n%2FsI8phTUwDFapmWN%2B2y4gyQDG2weKxA1EhYuVKVIBZE4OwFhyk%2Boh%2F0svMzxL8FmmnzGvEX97faab4%2BfdtrV16vwddOy9lW0guPU4Avw6QNK%2FFIHp1l8L5GutxgKTgZ8zRVuwOkusv8puRPFSbpqk5hfAbetefW1wgMFtIjyC6AgiitogT9vepX%2FrpDVY0kUzd4RvBZqBey4FG2VwVc4YSiC7G%2Behj8t8ZJEjpvcechvkPk4G%2FswctUgxCondmSaLsUwNPF3P8fqJx0yKNoBuw%2BxaszCoYIoYki2AXk%2FcwjSv6GoulXsZFTkGAkdKtj7gg0xwtPqMTnhv%2BsQhbJgkMK2Q28kGOqUBPUGON6SDmO5BYEWohiagDfWI0w6Hvm39v82FY%2Fg3NpYVn3ZzqAD0H3InnXlgNnGnJ%2BlpnQE%2FzvBeO9qJ1x6z5hRDotQVvAnqYucSpTVIhLTI2bvaooILwa0rR2ZB7C9hxza1S7l6PRJjwaV6yEZdF4uBT0nG0Md%2FAwXbXbLsa%2By8kmGnnaAMlpevdvvXaGcj0K0j%2B%2B8N1cr%2BUxbW7eXSgsw62wOG&X-Amz-Signature=59ce86299c78d7b7e2dc621fab2a8c387aa0132c84e19829a1827b8c3b374e05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMZBKZ7R%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T140613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD69RshKkgnISAByPtwAKUhxzCTUySpWSborkfSh5SeNwIgFpI79MpyS3a4eizjwVYxCGxVF0lqaoN55llmdxXhlM8qiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHGJoLD2y95fd1J67yrcA9dsY%2FLL2QrIAryLpNRZq%2Fz9W4h%2ByUgRqoK5PTXWzTQa%2FZgPeigHM%2FrwIpg2yHBme%2B%2F4s%2Bi6yrZGs7vtWvw208iiCsV99v7prqRdOfgJqCLDW%2BJ4vKsj3U8PaqpIF487tYauFObn5SQbEvq1VesGJl5fVuxoP21sh6rXaqsV0KHZ6KhZLkb2929FSYyoPAZmTDpesT6wd7a8s2wqMXVIv%2Fn48LiXX9uqNTiqi98%2Bu%2FbfBJM5Nx9VXNJQHXaJDD68uUKnXog9YdPSR2Yfhelv9Ud1Or0z67SH5BLec0n%2FsI8phTUwDFapmWN%2B2y4gyQDG2weKxA1EhYuVKVIBZE4OwFhyk%2Boh%2F0svMzxL8FmmnzGvEX97faab4%2BfdtrV16vwddOy9lW0guPU4Avw6QNK%2FFIHp1l8L5GutxgKTgZ8zRVuwOkusv8puRPFSbpqk5hfAbetefW1wgMFtIjyC6AgiitogT9vepX%2FrpDVY0kUzd4RvBZqBey4FG2VwVc4YSiC7G%2Behj8t8ZJEjpvcechvkPk4G%2FswctUgxCondmSaLsUwNPF3P8fqJx0yKNoBuw%2BxaszCoYIoYki2AXk%2FcwjSv6GoulXsZFTkGAkdKtj7gg0xwtPqMTnhv%2BsQhbJgkMK2Q28kGOqUBPUGON6SDmO5BYEWohiagDfWI0w6Hvm39v82FY%2Fg3NpYVn3ZzqAD0H3InnXlgNnGnJ%2BlpnQE%2FzvBeO9qJ1x6z5hRDotQVvAnqYucSpTVIhLTI2bvaooILwa0rR2ZB7C9hxza1S7l6PRJjwaV6yEZdF4uBT0nG0Md%2FAwXbXbLsa%2By8kmGnnaAMlpevdvvXaGcj0K0j%2B%2B8N1cr%2BUxbW7eXSgsw62wOG&X-Amz-Signature=653004ac0df3e3e69f588548abe8dc37d21563a8b20ff7f3228f9f7c978866b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

