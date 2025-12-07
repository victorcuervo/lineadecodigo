---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WOOOQIK%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T034841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHXVMiEZqot9eDRtJcdZK23UjiJWBZXFS7grdc3ROacwIhAIgQ6e0PaJF5g7iV5JniErptck8Xw7AQytjxcN8mYTQeKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzIeJX0azJwq9hCAjwq3AOK643HsG7VoYx5oqj6yLCi%2FHoxvMHY5pkb1YyKNl%2Fc%2FhVO2KjoQFvwG3rWxoAz5mvjacNq9yt3XltjelImHM7CgyCKZCzgKleHhLmrJSOrLvuyLB6qSOvfrSPkja4sqIwym3Wpa83TJ59UV9PZBc7NEXjZEWYStgTWad5sMdUNKolvPU1ksvonUCQGxq19bMiMaLd6oQ9E39LiWiQyU4elHlhNgEZlK9rZfnN3Y8scOt1N1mpzUtQjN9jvcFzWEU2goIf81p4wzwFe6BE2iX6dfHElig0hplGzHm7QtiThhpe%2F8gmgyAhC8COP%2BCnKq96YVIj7ZsnNKpqQhJ%2BBATdLDYwv8WdhFz5Vfan5N%2F31YkKSffuKPntWLjkSzqIFnQiiV2pj13LvGXmD%2FP3QpAfy6MHPFUrHx0%2Fdp93xuGwc16CRuKLK9Qgk48qa7frGs1HIlq9ieoiFFFryLxmi6K%2B3F7X%2BRuUDPpl3COaz1Mjv9vDTZ2ONKLzhM%2Fe%2BlI%2FDeh04sUJUkRGNnMqRwthk3Ly9rZwEjVwGMUCk8%2FxFbbBgjQdMB9HJS4Bo%2FVB%2BvPQj7AZguSSIMPG98j18CEVvUx7v49%2FOMp0Y16b4g2N3gFZBuW1qTmOLZaVEINpuCzCu%2FdLJBjqkAbow9sLv6n1usqhnzUpAA3Mnb2RbSxr31J1VbHthX%2BL%2FtMfCBcCCSfNjsOvglAnJMegOHTQu6W97K2Q3Eq7Wmdt3V0%2FfQvxDcd1%2B0PIxMlVXKyM3R6ovJhBzKWKw2XbS2OjQfoTYFJgHth7o02uBH%2BKeSLXaOcV2qfJXUkBwlsuxIAAH%2FzneRnISDmS19c54u1OCf8w0mffEdSbq14bJt%2BIDBBxC&X-Amz-Signature=eff473944606677d41b82150bf26e48923a6db045aeb6c508d41ac819afbf4a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WOOOQIK%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T034841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHXVMiEZqot9eDRtJcdZK23UjiJWBZXFS7grdc3ROacwIhAIgQ6e0PaJF5g7iV5JniErptck8Xw7AQytjxcN8mYTQeKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzIeJX0azJwq9hCAjwq3AOK643HsG7VoYx5oqj6yLCi%2FHoxvMHY5pkb1YyKNl%2Fc%2FhVO2KjoQFvwG3rWxoAz5mvjacNq9yt3XltjelImHM7CgyCKZCzgKleHhLmrJSOrLvuyLB6qSOvfrSPkja4sqIwym3Wpa83TJ59UV9PZBc7NEXjZEWYStgTWad5sMdUNKolvPU1ksvonUCQGxq19bMiMaLd6oQ9E39LiWiQyU4elHlhNgEZlK9rZfnN3Y8scOt1N1mpzUtQjN9jvcFzWEU2goIf81p4wzwFe6BE2iX6dfHElig0hplGzHm7QtiThhpe%2F8gmgyAhC8COP%2BCnKq96YVIj7ZsnNKpqQhJ%2BBATdLDYwv8WdhFz5Vfan5N%2F31YkKSffuKPntWLjkSzqIFnQiiV2pj13LvGXmD%2FP3QpAfy6MHPFUrHx0%2Fdp93xuGwc16CRuKLK9Qgk48qa7frGs1HIlq9ieoiFFFryLxmi6K%2B3F7X%2BRuUDPpl3COaz1Mjv9vDTZ2ONKLzhM%2Fe%2BlI%2FDeh04sUJUkRGNnMqRwthk3Ly9rZwEjVwGMUCk8%2FxFbbBgjQdMB9HJS4Bo%2FVB%2BvPQj7AZguSSIMPG98j18CEVvUx7v49%2FOMp0Y16b4g2N3gFZBuW1qTmOLZaVEINpuCzCu%2FdLJBjqkAbow9sLv6n1usqhnzUpAA3Mnb2RbSxr31J1VbHthX%2BL%2FtMfCBcCCSfNjsOvglAnJMegOHTQu6W97K2Q3Eq7Wmdt3V0%2FfQvxDcd1%2B0PIxMlVXKyM3R6ovJhBzKWKw2XbS2OjQfoTYFJgHth7o02uBH%2BKeSLXaOcV2qfJXUkBwlsuxIAAH%2FzneRnISDmS19c54u1OCf8w0mffEdSbq14bJt%2BIDBBxC&X-Amz-Signature=bb3a8599207913addb9b112092e842588f94f9d8168b78c79078babd87b5a191&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

