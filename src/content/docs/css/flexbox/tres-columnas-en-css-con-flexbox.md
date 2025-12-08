---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6KZATV5%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T234551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLNF9h05Ga%2BFG52ivHFuZVpcPmYuvht1GT1jOsQxqKqwIhANh3pvQ1HftLTvFQYUgVIze1K7igWtqXTM4Z5sbV0NbkKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwxNSG5VkpsLJpTwRUq3AMPOrb65TPZL1vcKAg3yh7o%2FIdnlATro%2F126FtTuxmOQBq1cw%2FIiesAb4sAxWnTJRDx2T9hzmXiLLep%2B15gV47pPhrYVfwpA%2FBxmuUiyQWv3WbTSMgKFYopzqKGDMBymDjFoNDbbZQp4D6zGJ%2B0WrebVZBt1uSV1jol88z%2BpRvzLYuOZb1DXK%2FEhVbSaKzMpUBz47NOjGwE0B%2B9IXrbYo%2Bb33hpuKzYeUnT9h4X8jiP0EwP3Jkaao%2BQ2ueCg4yj3BY1Aro4l6zb5ObnJKzEiTneZioYw%2Fe5JyTrCM9j4Z%2BRUMZtPlB4%2FzuHZC39A68ARwTj7JWQ6u8KGnEmnjNxmzH8oGneJi0v4iPXisJHW2g18p0TWvE0ftvvu12BuvwlYEmSJmpSls%2BdAHQ6KY8XvLd4vhWKTFhn57uECRfgNYgsJ9GAUDp4%2FnQR1bwJSwAxPNxUyiBV3pSUUWxx2j4eIeYwRYc7SZkYNrlM8OO8YSJYkzf80VY3hHXOC0tRua9PiE%2BKEwX27CZqyU4DVjlOJ%2BfystnblfXKzxzSYhbZgQyqqVvORLFd%2F6rQABgo9rau9Jfpx%2F%2BhYgktfz24J2KjFZ7XEGY6XT6bYpTkjq64mTJm9oh1Ldiw2yl51Q20ZTCpwt3JBjqkAe4OQ6yYwlrJERF1OhxsiGSDl6TqXCq16Dec059HcwXvPNoR9HkzpP2sF60koKIPRIbDZRit27zXlaV%2FIPo3mgefp84MwVQW1lVDZCYZ4VNhaynOjYMGgYCOT2bc2%2Bl6eIuie1uVzxVSN1sf3rOur00vS8k2rf0QlxEg%2BNtXuXYmC5QrhIREM8Sp7VOY480g74xLBBt%2FpBTjZPeR55p7%2BI5%2B9%2BsE&X-Amz-Signature=501add871fefe0b8c43bd2d1618168aefc2a5cbfdc99ab348154466a4231b2e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6KZATV5%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T234551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLNF9h05Ga%2BFG52ivHFuZVpcPmYuvht1GT1jOsQxqKqwIhANh3pvQ1HftLTvFQYUgVIze1K7igWtqXTM4Z5sbV0NbkKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwxNSG5VkpsLJpTwRUq3AMPOrb65TPZL1vcKAg3yh7o%2FIdnlATro%2F126FtTuxmOQBq1cw%2FIiesAb4sAxWnTJRDx2T9hzmXiLLep%2B15gV47pPhrYVfwpA%2FBxmuUiyQWv3WbTSMgKFYopzqKGDMBymDjFoNDbbZQp4D6zGJ%2B0WrebVZBt1uSV1jol88z%2BpRvzLYuOZb1DXK%2FEhVbSaKzMpUBz47NOjGwE0B%2B9IXrbYo%2Bb33hpuKzYeUnT9h4X8jiP0EwP3Jkaao%2BQ2ueCg4yj3BY1Aro4l6zb5ObnJKzEiTneZioYw%2Fe5JyTrCM9j4Z%2BRUMZtPlB4%2FzuHZC39A68ARwTj7JWQ6u8KGnEmnjNxmzH8oGneJi0v4iPXisJHW2g18p0TWvE0ftvvu12BuvwlYEmSJmpSls%2BdAHQ6KY8XvLd4vhWKTFhn57uECRfgNYgsJ9GAUDp4%2FnQR1bwJSwAxPNxUyiBV3pSUUWxx2j4eIeYwRYc7SZkYNrlM8OO8YSJYkzf80VY3hHXOC0tRua9PiE%2BKEwX27CZqyU4DVjlOJ%2BfystnblfXKzxzSYhbZgQyqqVvORLFd%2F6rQABgo9rau9Jfpx%2F%2BhYgktfz24J2KjFZ7XEGY6XT6bYpTkjq64mTJm9oh1Ldiw2yl51Q20ZTCpwt3JBjqkAe4OQ6yYwlrJERF1OhxsiGSDl6TqXCq16Dec059HcwXvPNoR9HkzpP2sF60koKIPRIbDZRit27zXlaV%2FIPo3mgefp84MwVQW1lVDZCYZ4VNhaynOjYMGgYCOT2bc2%2Bl6eIuie1uVzxVSN1sf3rOur00vS8k2rf0QlxEg%2BNtXuXYmC5QrhIREM8Sp7VOY480g74xLBBt%2FpBTjZPeR55p7%2BI5%2B9%2BsE&X-Amz-Signature=aed4eb6ad58ed32d1da3bfd5b8b80ddde4f2f3225222c8d23303d05fccbea6b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

