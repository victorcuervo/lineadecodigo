---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVVTPXRW%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T150130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA15qgK4rg4fj9dd78ll%2F1QCLZ%2FOxxqOpdvU%2F%2BisNROKAiEAqDtTcEzRQbMd8bSRVu00f1IZnCcjFArqaQK2ONsBizQqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKME03nGtn82AS%2BY1ircA4Z3Aa2PxZHlqEb3ftc15BUoS8lAYqYvXTiN%2FsBirIgYZCNVQxFKTLc4vdJ3YiYVEckwjuXvFnOYDZGwHonVshHbUTRc%2FcEkaIHgFLoeTtvmE8lxAoJ9uIFHY1W199xK2ZAo8Lg0zoyxyUAlArYu%2FsqkQYH62DwMzUQXy8YI7EubVAmKhi0vZnCBw%2FeXkME1lnhbNuI41ZhXEiatu0I0WxyQO4NYO7%2FuPr3qh6s2AZbdt9eBrvgTxXYWBz71nN87AORprGAcJ0Zg%2FcIZFYn0IzAM8j105T2iXM%2Bo%2Fbf6jdPV%2BAxIpMHzeU6sWlW3UEe2yRTHvNLuTPEol7oVo%2Bx9oKgPEMI7xGNvIYZzBdt5p6UhNqjplmIW%2FCjucirBTNbJP1CJhIlZUxIlLQVWuVjr5lOIXEQW0Q%2F43VawTw9fQM8QmNsQGj6qta9RxiAX8%2FDcrdkBrVZiRkLoe0v8G0sN8rvjZ0NCuaB13ARM068Byulj1NmKhj%2Fr7b9T41T8SLx94caoA5hblvGPStV4Y7h7EforVa8N6MvL2kwGRdapvPliPn2xxJNrtUcG9%2B%2BykiI9WLlGkOWlv5OePKn%2FSe%2B9KM%2FwOTF1Y%2FQuHPEX%2FVYJ0XDHPwtoNJU7w6o2%2F5DDMJjC28kGOqUBaEkXV02HLG1vGWgSbJ1OR%2B3T2enB4PEIOE8zDTFTE1qM6hyyOHqJQgWXeIegwEA9FghFDywKz0Tle%2BNNRj8mHQSHIEhnkylTomiLXzMvOwCqSGKpg2dPLrzwefoB13HNdu8bTJb0HDfnMVESy7ZSvacwlmftySejgc8gWNnFAtD9eSic8m4H7i250uRGfQY71t%2F4MXNNSBbmWsRbCksopUalL60y&X-Amz-Signature=b01e2f961e97c8ebfe9ca5e399b07f29db521135fad9ae8623b82c5fbc14b141&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVVTPXRW%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T150130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA15qgK4rg4fj9dd78ll%2F1QCLZ%2FOxxqOpdvU%2F%2BisNROKAiEAqDtTcEzRQbMd8bSRVu00f1IZnCcjFArqaQK2ONsBizQqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKME03nGtn82AS%2BY1ircA4Z3Aa2PxZHlqEb3ftc15BUoS8lAYqYvXTiN%2FsBirIgYZCNVQxFKTLc4vdJ3YiYVEckwjuXvFnOYDZGwHonVshHbUTRc%2FcEkaIHgFLoeTtvmE8lxAoJ9uIFHY1W199xK2ZAo8Lg0zoyxyUAlArYu%2FsqkQYH62DwMzUQXy8YI7EubVAmKhi0vZnCBw%2FeXkME1lnhbNuI41ZhXEiatu0I0WxyQO4NYO7%2FuPr3qh6s2AZbdt9eBrvgTxXYWBz71nN87AORprGAcJ0Zg%2FcIZFYn0IzAM8j105T2iXM%2Bo%2Fbf6jdPV%2BAxIpMHzeU6sWlW3UEe2yRTHvNLuTPEol7oVo%2Bx9oKgPEMI7xGNvIYZzBdt5p6UhNqjplmIW%2FCjucirBTNbJP1CJhIlZUxIlLQVWuVjr5lOIXEQW0Q%2F43VawTw9fQM8QmNsQGj6qta9RxiAX8%2FDcrdkBrVZiRkLoe0v8G0sN8rvjZ0NCuaB13ARM068Byulj1NmKhj%2Fr7b9T41T8SLx94caoA5hblvGPStV4Y7h7EforVa8N6MvL2kwGRdapvPliPn2xxJNrtUcG9%2B%2BykiI9WLlGkOWlv5OePKn%2FSe%2B9KM%2FwOTF1Y%2FQuHPEX%2FVYJ0XDHPwtoNJU7w6o2%2F5DDMJjC28kGOqUBaEkXV02HLG1vGWgSbJ1OR%2B3T2enB4PEIOE8zDTFTE1qM6hyyOHqJQgWXeIegwEA9FghFDywKz0Tle%2BNNRj8mHQSHIEhnkylTomiLXzMvOwCqSGKpg2dPLrzwefoB13HNdu8bTJb0HDfnMVESy7ZSvacwlmftySejgc8gWNnFAtD9eSic8m4H7i250uRGfQY71t%2F4MXNNSBbmWsRbCksopUalL60y&X-Amz-Signature=913e63427729d3153fbe1147093b30a8cdb831734ff39feda508d7525bfed1d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

