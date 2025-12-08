---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UFS33UN%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T232425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDpVOnI2tHJsLRVOGTZWuAUVzt400DWa34HOQX3Lcyy6AiBReZPc1EYI82r6R0PhdHjN4ghqrhgM17B50Omvg7jkfiqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZOlk7qlP32x1%2BBukKtwDMbwzrx2530LxTXpbjHnsQRi2d8sTIhD9GDxLcbFqMuQztdPzMwIkcXHkMHkLI2so7rfOwRDtr0bk7LLfG73wYbLjOw2e72WF2k7TpP%2FwdPcuuNRHbGHxQFdyOZMf53Kr7Wm%2FCUyYrAVcg10UvshA4hXol7KUok%2FUzcobcbdLisjcEkKt6gekhhsCwNIiPZhr0pe7Nz85QnC7NGixX7lhmL1lrm1bBlQEaJwDIIPxvMWvhvLPWN94n5rsLuEDzlh9bsBzXhRUrVhSsch5mrnZeANZ%2ByQmZyEGpPrfGqBqGRxJpZOXEuPNKv7VqjmZBACiYeVtrfhS3uoLDR%2BbMyDU0HJBrepPRc%2FB22HzrEdzjSgVZhxh5H6dB%2BFpqOjHvgHrI8%2BlQvRGD%2FqlUIyRgfJA6h6WcPx70SChxX2Q%2FFC1whJ3f3Y1g3cPY9kEuu%2FucEaaYWxIf91hp%2B46HCruQKHnGRCfBrGfIISvSsv3%2FCtY%2F5ovJLKBxAckiQaljrcrrgUzvUXGYDA8pbLulBJtxXuE1G6ZUovKWGrprbiZjjobNJAfqezAOtB8Vo2hmBjZU6JdeI%2Bi80tYmKUlXZZzwANxTWiB0GXBSg7OoQjIJzZ%2FgQ%2F6i%2BuvQQo4bkEXAjQwhqLdyQY6pgF%2B9LDXg2C8KhUBCxFpto%2FimIvDM%2FtH7zF5WzOSttUcnCw3%2FB6VSJohik64zUQZYlZAI3mcT14gyeQd%2FUD6o3AiVOfSw5tc4oq7CpwGpYXkAycKsArwfOVP4Re4db9HrZPyVsPlfWpNrKepkErowu6PgEYQFFQ0CZMvg6BYh5USWfJQKmZAYlgl%2F5baoYg2p%2BHEwv3sxzrNkEk6SqLuyP%2FwHRj2EKT%2F&X-Amz-Signature=eeb6d393044884615f8876c947afaf9bb48fd217c8a96f04887c29a7e279f1a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UFS33UN%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T232425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDpVOnI2tHJsLRVOGTZWuAUVzt400DWa34HOQX3Lcyy6AiBReZPc1EYI82r6R0PhdHjN4ghqrhgM17B50Omvg7jkfiqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZOlk7qlP32x1%2BBukKtwDMbwzrx2530LxTXpbjHnsQRi2d8sTIhD9GDxLcbFqMuQztdPzMwIkcXHkMHkLI2so7rfOwRDtr0bk7LLfG73wYbLjOw2e72WF2k7TpP%2FwdPcuuNRHbGHxQFdyOZMf53Kr7Wm%2FCUyYrAVcg10UvshA4hXol7KUok%2FUzcobcbdLisjcEkKt6gekhhsCwNIiPZhr0pe7Nz85QnC7NGixX7lhmL1lrm1bBlQEaJwDIIPxvMWvhvLPWN94n5rsLuEDzlh9bsBzXhRUrVhSsch5mrnZeANZ%2ByQmZyEGpPrfGqBqGRxJpZOXEuPNKv7VqjmZBACiYeVtrfhS3uoLDR%2BbMyDU0HJBrepPRc%2FB22HzrEdzjSgVZhxh5H6dB%2BFpqOjHvgHrI8%2BlQvRGD%2FqlUIyRgfJA6h6WcPx70SChxX2Q%2FFC1whJ3f3Y1g3cPY9kEuu%2FucEaaYWxIf91hp%2B46HCruQKHnGRCfBrGfIISvSsv3%2FCtY%2F5ovJLKBxAckiQaljrcrrgUzvUXGYDA8pbLulBJtxXuE1G6ZUovKWGrprbiZjjobNJAfqezAOtB8Vo2hmBjZU6JdeI%2Bi80tYmKUlXZZzwANxTWiB0GXBSg7OoQjIJzZ%2FgQ%2F6i%2BuvQQo4bkEXAjQwhqLdyQY6pgF%2B9LDXg2C8KhUBCxFpto%2FimIvDM%2FtH7zF5WzOSttUcnCw3%2FB6VSJohik64zUQZYlZAI3mcT14gyeQd%2FUD6o3AiVOfSw5tc4oq7CpwGpYXkAycKsArwfOVP4Re4db9HrZPyVsPlfWpNrKepkErowu6PgEYQFFQ0CZMvg6BYh5USWfJQKmZAYlgl%2F5baoYg2p%2BHEwv3sxzrNkEk6SqLuyP%2FwHRj2EKT%2F&X-Amz-Signature=df9c1161e0d32e126ff9734bd60d2a6a86cd248d34efe28b3c27ff009f945a5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

