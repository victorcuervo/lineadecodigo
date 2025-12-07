---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VALCGTL4%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T073106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGm6rhAOdWStYTFjd6t5t0T6TzXpBgyh9raMA%2Bw%2Fij9BAiEAlWNvtRVxxsMkGsYeUrlzy4ndHH%2B7Y4KAy2gferp0ylEqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFMCcyC0ciKSM5CBhircA9Re9F9%2FG%2BOmTl%2B4rzfRlCK%2BttfkwxE9A6DNO7KVN3r3dBFhPBA6dqqRd5s%2FIF55i%2FWYxlHTxXRVvCCgJQPAhh6X3dqDBMUqZsVLWDwVboFXfMkLlurhXDw%2FqGv1z2KnCK8wNxqiz4RgxdqY4ci1TMssPe1DQ5A8EDCrTbPLa6ZEnIWSKGqVHNNJd%2FNe%2FbrHww3ZDcMMY%2FjYgLbSI4eE%2F6ZOY323Ig%2BtNM09cukBF2YFEpwnG2ryT5isVR6CTc%2BFwam92b138dk9ka4Sg5YVfc4zUUjblEKHZKzFShijK9XAulcBE%2Ba5eS1pblo0HjrkBgGhrvi7uIhvXZLwdyBDKLoLnYECEWaFlXS09ZhpuuwjdPC2lexbNKBBU9SwQFk0P14F1O5LbGG7z64VDvFkXZvG9SxjtGhd37Lqs%2FyeAw2uFp%2BR6mpU9GKmdE8Ce6o3SW4CGS9TvuCqlt8%2FRQih6L%2BzlqFrfXBb8S5YsBk6JXMbjIhRjMNgYZmIGv87B7orP3Al7DUeDR9n8pDL9lxTVCAM8svwsxTl1ZBGEP55yWNvq%2Fo%2FnX0ux7gbtKWzdLAHXUGoVz3%2FEbA4O1xyLfJKE1lpTN17FCL3v%2F%2FRIlRxOlDXqRuQRGk21WwJ%2B6oiMKuf1MkGOqUBZYBw9YAFdj03AEhKm%2BcaiMH0zKFE%2BfYg0f4yAhQ%2FiZXlX29m635ZTENBhmviGqKqeXnYEKX8NEeKA72v54CXIOPMIsTxLzTccXLhTPq2vBKme0Bc%2FraaBxNa67cJWoBRkeD%2BwPi9O7NiW%2F88kxgLjmv%2Fhh19UXlhDJQfHW%2Fcdcj8MJMSZ9hBLgoku%2FLEARD3VKK67SAeIeEKvHd7WHimposhvFtM&X-Amz-Signature=135f5f39c41b8e0bca6f89813c0ecabc36892d40d24d51e8d12eb2c813cc87e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VALCGTL4%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T073106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGm6rhAOdWStYTFjd6t5t0T6TzXpBgyh9raMA%2Bw%2Fij9BAiEAlWNvtRVxxsMkGsYeUrlzy4ndHH%2B7Y4KAy2gferp0ylEqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFMCcyC0ciKSM5CBhircA9Re9F9%2FG%2BOmTl%2B4rzfRlCK%2BttfkwxE9A6DNO7KVN3r3dBFhPBA6dqqRd5s%2FIF55i%2FWYxlHTxXRVvCCgJQPAhh6X3dqDBMUqZsVLWDwVboFXfMkLlurhXDw%2FqGv1z2KnCK8wNxqiz4RgxdqY4ci1TMssPe1DQ5A8EDCrTbPLa6ZEnIWSKGqVHNNJd%2FNe%2FbrHww3ZDcMMY%2FjYgLbSI4eE%2F6ZOY323Ig%2BtNM09cukBF2YFEpwnG2ryT5isVR6CTc%2BFwam92b138dk9ka4Sg5YVfc4zUUjblEKHZKzFShijK9XAulcBE%2Ba5eS1pblo0HjrkBgGhrvi7uIhvXZLwdyBDKLoLnYECEWaFlXS09ZhpuuwjdPC2lexbNKBBU9SwQFk0P14F1O5LbGG7z64VDvFkXZvG9SxjtGhd37Lqs%2FyeAw2uFp%2BR6mpU9GKmdE8Ce6o3SW4CGS9TvuCqlt8%2FRQih6L%2BzlqFrfXBb8S5YsBk6JXMbjIhRjMNgYZmIGv87B7orP3Al7DUeDR9n8pDL9lxTVCAM8svwsxTl1ZBGEP55yWNvq%2Fo%2FnX0ux7gbtKWzdLAHXUGoVz3%2FEbA4O1xyLfJKE1lpTN17FCL3v%2F%2FRIlRxOlDXqRuQRGk21WwJ%2B6oiMKuf1MkGOqUBZYBw9YAFdj03AEhKm%2BcaiMH0zKFE%2BfYg0f4yAhQ%2FiZXlX29m635ZTENBhmviGqKqeXnYEKX8NEeKA72v54CXIOPMIsTxLzTccXLhTPq2vBKme0Bc%2FraaBxNa67cJWoBRkeD%2BwPi9O7NiW%2F88kxgLjmv%2Fhh19UXlhDJQfHW%2Fcdcj8MJMSZ9hBLgoku%2FLEARD3VKK67SAeIeEKvHd7WHimposhvFtM&X-Amz-Signature=444e9f9e9522102c44f8e525f5cabcf25c7a3e23838882ce1d7bbbd13a18be25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

