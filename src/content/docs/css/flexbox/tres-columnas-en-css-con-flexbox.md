---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KPRLTSU%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T052711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIFcJCuqYJurmyo27DwvEoCw0lPwLdxvsLWEx9bkEyWgMAiA%2BJ1n2O9%2FBuXKge%2FAzbvtYkdIlLCpOngpd45IM6mWe2yr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMNRvKLPinEIpeAT8RKtwDM0NuKO2HPuvC3PouiGegQ1dhwkspDvTbDvRrePvcGjmnDfBVz3JxiAtX8RXLZIxbi1bFUPCYmdnL455gnvyhUPiYfkzOG19eOy40O7LBpBF8KjKyPe%2FHhaMyy8GWJS2KTtpMhbB8xFJTG4%2FVZr3A%2BuhWyFHtwmvZHGkDNL0HPJ64MSpbQUzf4UJ3qhGPRsVkvbrOe4Civg5Jzw8qGKq6lDjrMznAIUMTXTIIfQbZAAz7%2BhWwugVgeD3eDebL8t3q%2FuBXt1B2dl6o9OzbZpZLkHmE7dQSw0Zsr37XZtqeD83XO94zHLmWssJ%2Bqz6DEHUJg6%2FlYlG2bKfZkYKBns6aMxa3Mrw7hM5SvIoxFhBi%2FZrJoGYm7Y9gYboEwfPLTiepNEBiWD%2F%2Bp%2BNpSM6Zf57w%2BNBRuu5co1Vi%2BrcE5tuip8MnNsGqDv9zUoogTKJt6AOClOT6z6%2BgNSjbMULmzBcy8eAQpHsYpsv%2FGNQycDTHlLvPHqmk9rgzd%2F5L1w%2FVo%2BUTM1EUs7NV3nyKOVdvT7JdbWMzaxw6YPFFjkcOGUbLg%2Bk6039shi8TsvHtgpXASHgBadmm0KN858ME61LH9Vh8FS%2FD%2Fbd%2BW5j4Okkph2P97eL9XkGR%2FUzZw%2BpwTcMwuK7EyQY6pgErxS6DJGv%2FhaM0PQG9192vNOklBO3DPWqq%2FAHUNIYtLpTUAYl6SYyDkXUYsojN8BOI2OIQJ3vRqUtaHCzst2QKOKke8yiav4f1ZQsml68qPyX2S3EUjLP%2BVdHO8z3u1%2F1J17VBGxzhAdGNV1xlWcO7f4urzVaPkAgNg9RxJhMQo6nXC8OUOcIUegeLQC2m9t%2FOHOEW6Qy%2F6zRC6w2Uv7qnxNVb4w50&X-Amz-Signature=f293592c785591bcb4c68c4c43568b11b64c7865c8b877c8180edc68ede7fe69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KPRLTSU%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T052711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIFcJCuqYJurmyo27DwvEoCw0lPwLdxvsLWEx9bkEyWgMAiA%2BJ1n2O9%2FBuXKge%2FAzbvtYkdIlLCpOngpd45IM6mWe2yr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMNRvKLPinEIpeAT8RKtwDM0NuKO2HPuvC3PouiGegQ1dhwkspDvTbDvRrePvcGjmnDfBVz3JxiAtX8RXLZIxbi1bFUPCYmdnL455gnvyhUPiYfkzOG19eOy40O7LBpBF8KjKyPe%2FHhaMyy8GWJS2KTtpMhbB8xFJTG4%2FVZr3A%2BuhWyFHtwmvZHGkDNL0HPJ64MSpbQUzf4UJ3qhGPRsVkvbrOe4Civg5Jzw8qGKq6lDjrMznAIUMTXTIIfQbZAAz7%2BhWwugVgeD3eDebL8t3q%2FuBXt1B2dl6o9OzbZpZLkHmE7dQSw0Zsr37XZtqeD83XO94zHLmWssJ%2Bqz6DEHUJg6%2FlYlG2bKfZkYKBns6aMxa3Mrw7hM5SvIoxFhBi%2FZrJoGYm7Y9gYboEwfPLTiepNEBiWD%2F%2Bp%2BNpSM6Zf57w%2BNBRuu5co1Vi%2BrcE5tuip8MnNsGqDv9zUoogTKJt6AOClOT6z6%2BgNSjbMULmzBcy8eAQpHsYpsv%2FGNQycDTHlLvPHqmk9rgzd%2F5L1w%2FVo%2BUTM1EUs7NV3nyKOVdvT7JdbWMzaxw6YPFFjkcOGUbLg%2Bk6039shi8TsvHtgpXASHgBadmm0KN858ME61LH9Vh8FS%2FD%2Fbd%2BW5j4Okkph2P97eL9XkGR%2FUzZw%2BpwTcMwuK7EyQY6pgErxS6DJGv%2FhaM0PQG9192vNOklBO3DPWqq%2FAHUNIYtLpTUAYl6SYyDkXUYsojN8BOI2OIQJ3vRqUtaHCzst2QKOKke8yiav4f1ZQsml68qPyX2S3EUjLP%2BVdHO8z3u1%2F1J17VBGxzhAdGNV1xlWcO7f4urzVaPkAgNg9RxJhMQo6nXC8OUOcIUegeLQC2m9t%2FOHOEW6Qy%2F6zRC6w2Uv7qnxNVb4w50&X-Amz-Signature=2dba0c98e11ce6a31a5ff2fb7d45fed447927c32b397e7b6d5d5dc7a435a9326&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

