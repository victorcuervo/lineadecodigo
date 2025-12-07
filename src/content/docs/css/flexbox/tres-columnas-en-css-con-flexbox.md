---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNPLWJX3%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T114846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCk3NeCW2SKyYpL%2BUdguG7bccjkGAbULUO8oKU6lDayugIhAIQA4Up9b2QLUWqz7F9B2700uxxqUAMA04qpvldz3K7KKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyadfmPShny7VDrybwq3AOOrIf4MCQscFTe2OCC7de2Uv3K0VeZE8J66sbd4IpuqBYok2AItQ23WCJexKl8XhZNhc9Q7RWmMIxqWwNQ4Vrb6Cyo41v2nF1L2NyFdL0ta8e75bO0ij3F2z0YpzMHVG7dTQpe4VwOuojX5rt24hgoxUa%2F%2B%2FPHe9fwm4ohLH8cREaK1nLtvT%2BzT0nkMklxZyMrYVvLrGxS2tIoScP7iZQsK4PuEnmG6Tz7IJtYhChKUrbvwf94LRrUlI4TjluvZPSadl8fE9KfcOYEPWzb4%2FhoGC56OtUdE6Gf9zwZ67tYGcs5jFo2ZtkcdMtX0CknTyhLvOcqJqCb6Z6DhmSlW7whF8H9e4O1TCoAHhny5%2FczdSbrASWXChtMT%2FVYf4xKQuR%2B%2FXg3AtCz3pvPmWIrqOCZH0ofaEOmpxYOOJWPcwgZD6URU8KcnuJbuknyyDOl%2F%2FcOs8Zxqml6elFvkBJy6LAnjlOUq8hUq136k%2FSZayA18nKjiftZxwza29YEEeAoeBufnnXbEQfuMz1v3f9yxsmmafqnssaDZ0nSkLVr9ACeudWBqYe1PWPv6avYsdPD03eZ1MCIzmzIk82hIQhgA%2B6H%2FAeOOaipMFuHohVzsQg5YQVuxDW%2BwwL7k%2F3rTTDGmdXJBjqkAfVyUMeau08Epcd4boYANkOVjYg4i%2BJ07TT5hOKdeqcRZkZlJ0Z1I1pKA9AXwvHisYIWopk8Me%2BCBKv%2FNWqvjO74Pj1zcc53juil3ITSGEv9y3RS8NbRUP69ewMW5yR1QmxZbiS8ySnAIWikspzcxegW%2Br42yC%2FRFFM8xJSr09BezbuSKBinGUyMJOC%2F6Aw%2FfNKGIjTAX6yt%2Fg4e783JSlVJL5Xq&X-Amz-Signature=9f893b7016f11b3b1d65c2974fde55c12ca90577be55c8e23d5c2ca0dc6d0cac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNPLWJX3%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T114846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCk3NeCW2SKyYpL%2BUdguG7bccjkGAbULUO8oKU6lDayugIhAIQA4Up9b2QLUWqz7F9B2700uxxqUAMA04qpvldz3K7KKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyadfmPShny7VDrybwq3AOOrIf4MCQscFTe2OCC7de2Uv3K0VeZE8J66sbd4IpuqBYok2AItQ23WCJexKl8XhZNhc9Q7RWmMIxqWwNQ4Vrb6Cyo41v2nF1L2NyFdL0ta8e75bO0ij3F2z0YpzMHVG7dTQpe4VwOuojX5rt24hgoxUa%2F%2B%2FPHe9fwm4ohLH8cREaK1nLtvT%2BzT0nkMklxZyMrYVvLrGxS2tIoScP7iZQsK4PuEnmG6Tz7IJtYhChKUrbvwf94LRrUlI4TjluvZPSadl8fE9KfcOYEPWzb4%2FhoGC56OtUdE6Gf9zwZ67tYGcs5jFo2ZtkcdMtX0CknTyhLvOcqJqCb6Z6DhmSlW7whF8H9e4O1TCoAHhny5%2FczdSbrASWXChtMT%2FVYf4xKQuR%2B%2FXg3AtCz3pvPmWIrqOCZH0ofaEOmpxYOOJWPcwgZD6URU8KcnuJbuknyyDOl%2F%2FcOs8Zxqml6elFvkBJy6LAnjlOUq8hUq136k%2FSZayA18nKjiftZxwza29YEEeAoeBufnnXbEQfuMz1v3f9yxsmmafqnssaDZ0nSkLVr9ACeudWBqYe1PWPv6avYsdPD03eZ1MCIzmzIk82hIQhgA%2B6H%2FAeOOaipMFuHohVzsQg5YQVuxDW%2BwwL7k%2F3rTTDGmdXJBjqkAfVyUMeau08Epcd4boYANkOVjYg4i%2BJ07TT5hOKdeqcRZkZlJ0Z1I1pKA9AXwvHisYIWopk8Me%2BCBKv%2FNWqvjO74Pj1zcc53juil3ITSGEv9y3RS8NbRUP69ewMW5yR1QmxZbiS8ySnAIWikspzcxegW%2Br42yC%2FRFFM8xJSr09BezbuSKBinGUyMJOC%2F6Aw%2FfNKGIjTAX6yt%2Fg4e783JSlVJL5Xq&X-Amz-Signature=8e7652ef7990ed007a5067a89f75b092d524e9fc84e824e540150f6735d8a844&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

