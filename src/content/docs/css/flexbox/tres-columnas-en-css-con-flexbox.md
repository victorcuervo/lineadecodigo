---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667R63TYG7%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T082959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDywRyXBXGLJEb8BV2oxMtfaZFqzm5K9PFwYLTSCLlb7AiBK9nfI0UR1CddFoJglnKlKdzF%2FVyIiKVXVD4i%2FBQEmiSqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbgAcgo4l0qjfeX0gKtwDOMAw6h%2Ff6wHAEYigLTYzVV4jARZw%2Fi7Eu9rNV9nUF1VxclptuMqOEZH6LZsxMtb0E4hpCivw1Feapk2xSnC14n0SjsgOtFEiHQR7NH6U%2FFjW2nTeY%2FOiFZXB2kSSZmHfzErftNFYJ97Y%2BlPnXGZxuwrSS1MLiG2VIybRSsRxFL6ta69ybPQ6pZjVzwVaCHbz1y0HEls8q%2Bo1aKX8pXKbiXKY6jXeFl%2FdLP1wuztgkgigA6147FKrTbZMh66aeOj4l%2BEo2YlzeQhz59KLprH%2BFggX3EpGdqaa217RCX5YzXSCUv57Lb3UytFy0XY04BL3c94UOMRNvgZTOp%2FGFVAZne9qpCdFIkKrIlSJw0VcmWdT50zuJtdkUdOVQjwFI5aCBsC3pngFDzHP0idCZV0oMGwuiyE6R2QAkjrOBAANvvVl9qc3ZMbcQOZoj92tONu4J1xYdhEi5FijC4yu%2B7oPcixIGK95IVXRo0k4n0TvIpyyqevsoXcVpBsAgWeKFXbAj9iTGwjwwP7Dw50XcqK4HxPeouucrfWFmqY%2BotLuxkr%2FjNHUOexLlZhTnNpGUsLlh%2FQFK2PX5XJv5NrHGVw2sVdo77skb%2Fd74AXMUdcM%2FyWv3k%2BDj4%2BUwLquMWgw%2F6PUyQY6pgEYTjE5CBk8HbpaOqPWzYtSqvFtlC0396IARIq3f4ys2zcXeqDZBx0GXG8Nfb1FF0Odbe3GJ2skUaDrD%2F2kKYV61kiMZGpjS1h01VZjzDJP%2BanjEErHw6xV%2BZQms%2BRACTCnCNghTVjZq2jdfUePg%2F6iTpIAVn7UaSsnYYqL00a9IVETLBUkVT0JSBP3veh02yduK8Vf12EWZrPQtg5in0KWryG7n5O0&X-Amz-Signature=65d8e264e23603508c8ab94d740ebfcbe1350c8183764250427e15b9c103a76c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667R63TYG7%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T082959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDywRyXBXGLJEb8BV2oxMtfaZFqzm5K9PFwYLTSCLlb7AiBK9nfI0UR1CddFoJglnKlKdzF%2FVyIiKVXVD4i%2FBQEmiSqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbgAcgo4l0qjfeX0gKtwDOMAw6h%2Ff6wHAEYigLTYzVV4jARZw%2Fi7Eu9rNV9nUF1VxclptuMqOEZH6LZsxMtb0E4hpCivw1Feapk2xSnC14n0SjsgOtFEiHQR7NH6U%2FFjW2nTeY%2FOiFZXB2kSSZmHfzErftNFYJ97Y%2BlPnXGZxuwrSS1MLiG2VIybRSsRxFL6ta69ybPQ6pZjVzwVaCHbz1y0HEls8q%2Bo1aKX8pXKbiXKY6jXeFl%2FdLP1wuztgkgigA6147FKrTbZMh66aeOj4l%2BEo2YlzeQhz59KLprH%2BFggX3EpGdqaa217RCX5YzXSCUv57Lb3UytFy0XY04BL3c94UOMRNvgZTOp%2FGFVAZne9qpCdFIkKrIlSJw0VcmWdT50zuJtdkUdOVQjwFI5aCBsC3pngFDzHP0idCZV0oMGwuiyE6R2QAkjrOBAANvvVl9qc3ZMbcQOZoj92tONu4J1xYdhEi5FijC4yu%2B7oPcixIGK95IVXRo0k4n0TvIpyyqevsoXcVpBsAgWeKFXbAj9iTGwjwwP7Dw50XcqK4HxPeouucrfWFmqY%2BotLuxkr%2FjNHUOexLlZhTnNpGUsLlh%2FQFK2PX5XJv5NrHGVw2sVdo77skb%2Fd74AXMUdcM%2FyWv3k%2BDj4%2BUwLquMWgw%2F6PUyQY6pgEYTjE5CBk8HbpaOqPWzYtSqvFtlC0396IARIq3f4ys2zcXeqDZBx0GXG8Nfb1FF0Odbe3GJ2skUaDrD%2F2kKYV61kiMZGpjS1h01VZjzDJP%2BanjEErHw6xV%2BZQms%2BRACTCnCNghTVjZq2jdfUePg%2F6iTpIAVn7UaSsnYYqL00a9IVETLBUkVT0JSBP3veh02yduK8Vf12EWZrPQtg5in0KWryG7n5O0&X-Amz-Signature=b29c4aaa074610a6ecd43e57528b86765e15b7ca7da0d505c7dcce9c9247d813&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

