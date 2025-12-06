---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIZIEAXY%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T215250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA4zmOkpk6%2Fy81LEPU7bx1sziQjGVV5B7U4u65JIzg22AiEAoFs68J1EHrszKd9sPskCZSi5g9IFjDZz40W%2B3jfIxgQq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDL5CQg9kAuwSXGCT4ircA%2BoHAPJ7ItgI3ksL5wuh%2BvJdgUaY73DvUX6u48HkEJeNN7R91Bc74bSU3FE5suqphuKUKKk3Sc4mcs4%2BC1nJccrPjtLtfxmqyTP22YP2H8evWVJ%2FurY%2FyZyq5DRFmeTsp%2BU75K%2Fm5ElBcWFz7EzFXYUEFZN1AfjBBcivJJGtFEFah8TxjdnKqHbnOIymZ8EzPCQPWcjEbZMOABLgV0cfBrVnLdAph9YSFdbFwlPVlRisz85vydZmLnJsSYAacmk%2BHP0HsaXda%2FBQm0GfycAEho7FL%2F54w2S5Rw1O7PyqANzTohdgsZYTzGjWhAtaTTjkQLvK3D4rU8leW9aoa1mzo3fqpt4pPlOj6%2BwEnNseVWvHFLqF37ggIqGL2rNAGoRIN4licbDYLrTj%2B%2Fb44qfuh81ACpcurerzk68FkkpubBt9X8z4pkSNOHxY6YNfKld%2F5AKXBzLHhfcVbpKhlamFBhRe%2B1XWgtRQyIsqeQD9qPRYRVDqjdkhXulFFgIeBzfSWLF%2FBMl15BnvpHgShFuwjRw8HiDMuu%2BbDFmW84YrwxSzF%2F7TzTaNEpbHPmo2353J%2FVVbX89tOp9wyTmjga9j1dAq%2FYnDhhMPZTdm26POWGFutHjQNY3hK6dKxvD%2FMJLI0ckGOqUB8Z3gaUXA9OuX%2BGeXYuiRK%2Fw0RZlhLYLXAO2lbzporRY8RdVjmwqL%2BpHa2LMBUJ%2F4sGtsPbCTzkEa2D6ifLZRlmvPH3QiIEJQKEKpCWfaEQdteVzkmCnP5WDFUnVptEmA2SoX7o6P3%2BLy%2FXUNOURhJwRTigQzf5HxBYUGFKC%2Fd%2FBB4fz9XEBpwCEs6wiPWJHu4QUSt%2BpqRv%2FkBbS6OFGXKCE1NSb4&X-Amz-Signature=f33aca23c7eb67a78834f7dd406ebcea5be5d26bab44a5325ea914004a2d6620&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIZIEAXY%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T215250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA4zmOkpk6%2Fy81LEPU7bx1sziQjGVV5B7U4u65JIzg22AiEAoFs68J1EHrszKd9sPskCZSi5g9IFjDZz40W%2B3jfIxgQq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDL5CQg9kAuwSXGCT4ircA%2BoHAPJ7ItgI3ksL5wuh%2BvJdgUaY73DvUX6u48HkEJeNN7R91Bc74bSU3FE5suqphuKUKKk3Sc4mcs4%2BC1nJccrPjtLtfxmqyTP22YP2H8evWVJ%2FurY%2FyZyq5DRFmeTsp%2BU75K%2Fm5ElBcWFz7EzFXYUEFZN1AfjBBcivJJGtFEFah8TxjdnKqHbnOIymZ8EzPCQPWcjEbZMOABLgV0cfBrVnLdAph9YSFdbFwlPVlRisz85vydZmLnJsSYAacmk%2BHP0HsaXda%2FBQm0GfycAEho7FL%2F54w2S5Rw1O7PyqANzTohdgsZYTzGjWhAtaTTjkQLvK3D4rU8leW9aoa1mzo3fqpt4pPlOj6%2BwEnNseVWvHFLqF37ggIqGL2rNAGoRIN4licbDYLrTj%2B%2Fb44qfuh81ACpcurerzk68FkkpubBt9X8z4pkSNOHxY6YNfKld%2F5AKXBzLHhfcVbpKhlamFBhRe%2B1XWgtRQyIsqeQD9qPRYRVDqjdkhXulFFgIeBzfSWLF%2FBMl15BnvpHgShFuwjRw8HiDMuu%2BbDFmW84YrwxSzF%2F7TzTaNEpbHPmo2353J%2FVVbX89tOp9wyTmjga9j1dAq%2FYnDhhMPZTdm26POWGFutHjQNY3hK6dKxvD%2FMJLI0ckGOqUB8Z3gaUXA9OuX%2BGeXYuiRK%2Fw0RZlhLYLXAO2lbzporRY8RdVjmwqL%2BpHa2LMBUJ%2F4sGtsPbCTzkEa2D6ifLZRlmvPH3QiIEJQKEKpCWfaEQdteVzkmCnP5WDFUnVptEmA2SoX7o6P3%2BLy%2FXUNOURhJwRTigQzf5HxBYUGFKC%2Fd%2FBB4fz9XEBpwCEs6wiPWJHu4QUSt%2BpqRv%2FkBbS6OFGXKCE1NSb4&X-Amz-Signature=8a69ed41a554c129c349192c021f72d966f9e068c5a86d1a779df79512437ba3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

