---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYF5GJI6%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T005458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF5w7qqNk4U65AxbK%2BVRUYsafE4Lj87R%2Fj3soU3g1pIKAiATKv%2Bf66vB9whCJEHsdPGnM8N1kdb%2Fdv60d6kNCtCBNCqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMC2L%2FaWDHlTRLNKKcKtwDk8kz2fDd2ui1lUJrBUYlqo1nGKtdb9alksGsLLBJTcVL6WPASZDMroYD6FNWY%2FHfUlXCASO4NJo%2BzPhYFgYa%2B93QxmVoiUyy4keteFtqGcuMVOajzEAjhSHW96cFwlq9OsrUcyiRSCNo2zMdT0T74fG0BZOXtBrh%2BUiIV3udLlGKQHrQJH7cgvxJpOePbYBOVYSavsyLg3Zu2PZnks9aYRaqP%2FVQ0l1qXdjFNWxGZRkpsO0%2Fi6Ts3%2BR47qQSdSGFfRenjw8ALLSzYLPNGDE64kU6fulrgCRefZTzminGShSIfYHjC%2B81hiqI9MAhrUrd%2BNtNH6e4CqZ8GgaHOhVodYMUE7pde38UuAsBsFhQY2T4GLXBfEkjSmUFfEAsVosE77TJQQU%2F0n5iJUQNPr7%2FENj%2BpreacRaSKNt5w6f1SuvMUgarwPlXfgI7cSepjE9aI6tSuzsOVjqBd91NRyWXmtgCqoeua%2B7Ly8PPFQ1l564jDOXAlpGjKA%2Bhrpt61uubCjy2TupxrT0JjetQBl%2B2vjLiAs%2FN9EYC3i0OAkfj5ZPjJya6BQEHJGj9JUwPhJs7Y3lttu1DQG1k2jAzo7EmqEGdsDRSVK73A7A9duXpaGt%2BgKkSk9PlC7rNiX4wsP7SyQY6pgGLUnntk34AbTPVGFXOobJBaNEDD2%2FeV8LI1MG2xYk5fBRcE%2BiKQYltndtwS6jUP3d04XPdsTi7D95mAm5%2B9sel%2BxpgclHpu5wFE9Qi4bYf8MjHY4FDVwHc4qQTZ7NSzuVn4uYQV6MwFQaL1QTvnw2c6mfO32%2BMKXgRy7vPkS8YbLlsJHDoOKkr497O4%2BDECE9UgltovItTh9QeIG3UBlIIKrGzvGHX&X-Amz-Signature=c1e39d6c45d1e3db5708fa12a61ed634e233afb621a86dc9114fda012e2328ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYF5GJI6%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T005458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF5w7qqNk4U65AxbK%2BVRUYsafE4Lj87R%2Fj3soU3g1pIKAiATKv%2Bf66vB9whCJEHsdPGnM8N1kdb%2Fdv60d6kNCtCBNCqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMC2L%2FaWDHlTRLNKKcKtwDk8kz2fDd2ui1lUJrBUYlqo1nGKtdb9alksGsLLBJTcVL6WPASZDMroYD6FNWY%2FHfUlXCASO4NJo%2BzPhYFgYa%2B93QxmVoiUyy4keteFtqGcuMVOajzEAjhSHW96cFwlq9OsrUcyiRSCNo2zMdT0T74fG0BZOXtBrh%2BUiIV3udLlGKQHrQJH7cgvxJpOePbYBOVYSavsyLg3Zu2PZnks9aYRaqP%2FVQ0l1qXdjFNWxGZRkpsO0%2Fi6Ts3%2BR47qQSdSGFfRenjw8ALLSzYLPNGDE64kU6fulrgCRefZTzminGShSIfYHjC%2B81hiqI9MAhrUrd%2BNtNH6e4CqZ8GgaHOhVodYMUE7pde38UuAsBsFhQY2T4GLXBfEkjSmUFfEAsVosE77TJQQU%2F0n5iJUQNPr7%2FENj%2BpreacRaSKNt5w6f1SuvMUgarwPlXfgI7cSepjE9aI6tSuzsOVjqBd91NRyWXmtgCqoeua%2B7Ly8PPFQ1l564jDOXAlpGjKA%2Bhrpt61uubCjy2TupxrT0JjetQBl%2B2vjLiAs%2FN9EYC3i0OAkfj5ZPjJya6BQEHJGj9JUwPhJs7Y3lttu1DQG1k2jAzo7EmqEGdsDRSVK73A7A9duXpaGt%2BgKkSk9PlC7rNiX4wsP7SyQY6pgGLUnntk34AbTPVGFXOobJBaNEDD2%2FeV8LI1MG2xYk5fBRcE%2BiKQYltndtwS6jUP3d04XPdsTi7D95mAm5%2B9sel%2BxpgclHpu5wFE9Qi4bYf8MjHY4FDVwHc4qQTZ7NSzuVn4uYQV6MwFQaL1QTvnw2c6mfO32%2BMKXgRy7vPkS8YbLlsJHDoOKkr497O4%2BDECE9UgltovItTh9QeIG3UBlIIKrGzvGHX&X-Amz-Signature=c882d8e6f0d808f56bd8b0692bd91e076bad507a64ef0fe4fd88e852303a2ae2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

