---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUIXYOLQ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T080351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDzbcBXdLxLZ5GO0wynmmiZPGmBJ263dkPJnTEojkGKsAiEAw80CP8Lbt49IgGqOKhZTo7Os58RrVrQlCNBEYymClGwq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDJQKJMe7ax3FlWBn%2FSrcA6%2F182SjccGlvC4h%2F7WGUfMmEJb9Z475PL8DMc4rb%2B6Pu87F2lleYUTXsGOzeyh1zFCsA2a5dcjHQvzEJXC0qJmLcHbzXIhOIB%2FVvpRCXuBdNmCLdkWwnmFD7JiIb5Kyd7kSIXnQvzSFfyPRmPo4INWXxz428Yse03YY4hWovNx3xv61dcwrwEjhbb79MVd8QgxoFnbXjCncIIDsHkVIItdba3vIqCFnS9LPjkiNeFcdNLYL1E1XicgQ%2F95nag%2BhlAL69ftLwfPEOrZwu1naTrIDQNP07MD90E%2BqTSO7nBlyhuiusN7S3RVMtwx29pFdcUE%2FFtVhn4%2FSsT7i2yLcLyXCwnEl9vkLI4TDMnyAizBpx5%2B7hVCVkqVqfbVDDuZbpv7qQw8GKEFwlZ%2BmI7NUZpNdODAaj8ieCXqwySwdys32SP%2FBrQ8WKtRcdGe8Ro08R%2FJ3i%2BZ0VXm0tMbzuLZ7s0sGxU1UxVg00sC2F9Q9101%2BPkqhI4N0fYfve92UPAojZpRYGNcVqBbM42onAAZJhwSxGlc1c%2B3R%2BzfvBs734JvM%2FMqSLkVlMDlsFUBFT9JlEEBrNSefk4nwEnEm01Qr%2BUgXBfHD22KbNkeUAsWgjC%2BOvr6EA8UbvofdzqkeMNqryckGOqUBwAtjmZjmNod0Rqvbc2VPFy0Ca3evqjPbkvPSBi%2Bg7RIhIfRNKKVBctQil4p2Oc8qk8yYi6TxGJLxIdBAHMEuyNO5cWWta7Xa4eFv48SLyPrcFP34%2F0ndJg7w6DFmcLDMP1AlSl0ySKBa%2B9JM5TCGfip4271zCxXskykI30U6hRIa9%2BRrgwGHyDuyGQo9vMUc8qx3tpVUUHjFLh2dyPcImfuU1j8f&X-Amz-Signature=7fa8bfe2a0042c2a382363418a37aa2d04d9379740dd60cd853379b0d52490ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUIXYOLQ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T080351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDzbcBXdLxLZ5GO0wynmmiZPGmBJ263dkPJnTEojkGKsAiEAw80CP8Lbt49IgGqOKhZTo7Os58RrVrQlCNBEYymClGwq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDJQKJMe7ax3FlWBn%2FSrcA6%2F182SjccGlvC4h%2F7WGUfMmEJb9Z475PL8DMc4rb%2B6Pu87F2lleYUTXsGOzeyh1zFCsA2a5dcjHQvzEJXC0qJmLcHbzXIhOIB%2FVvpRCXuBdNmCLdkWwnmFD7JiIb5Kyd7kSIXnQvzSFfyPRmPo4INWXxz428Yse03YY4hWovNx3xv61dcwrwEjhbb79MVd8QgxoFnbXjCncIIDsHkVIItdba3vIqCFnS9LPjkiNeFcdNLYL1E1XicgQ%2F95nag%2BhlAL69ftLwfPEOrZwu1naTrIDQNP07MD90E%2BqTSO7nBlyhuiusN7S3RVMtwx29pFdcUE%2FFtVhn4%2FSsT7i2yLcLyXCwnEl9vkLI4TDMnyAizBpx5%2B7hVCVkqVqfbVDDuZbpv7qQw8GKEFwlZ%2BmI7NUZpNdODAaj8ieCXqwySwdys32SP%2FBrQ8WKtRcdGe8Ro08R%2FJ3i%2BZ0VXm0tMbzuLZ7s0sGxU1UxVg00sC2F9Q9101%2BPkqhI4N0fYfve92UPAojZpRYGNcVqBbM42onAAZJhwSxGlc1c%2B3R%2BzfvBs734JvM%2FMqSLkVlMDlsFUBFT9JlEEBrNSefk4nwEnEm01Qr%2BUgXBfHD22KbNkeUAsWgjC%2BOvr6EA8UbvofdzqkeMNqryckGOqUBwAtjmZjmNod0Rqvbc2VPFy0Ca3evqjPbkvPSBi%2Bg7RIhIfRNKKVBctQil4p2Oc8qk8yYi6TxGJLxIdBAHMEuyNO5cWWta7Xa4eFv48SLyPrcFP34%2F0ndJg7w6DFmcLDMP1AlSl0ySKBa%2B9JM5TCGfip4271zCxXskykI30U6hRIa9%2BRrgwGHyDuyGQo9vMUc8qx3tpVUUHjFLh2dyPcImfuU1j8f&X-Amz-Signature=4aadb144b842f0c8fde5f826d83f638bef2d95b0d1b37147fd9b8fdef9d68029&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

