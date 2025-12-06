---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UZB556G%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T050454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHkpn1h%2BVHF43xeecEJT0g%2FB8x4g5fWp%2BPUWkeORtfeOAiBFWF%2BDgHfyfMxFzcyiQ%2BHsnaoMrjV35YCvdyc3r%2B3%2FmCr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMNK0tQqcCQ2RYHms2KtwDdWUEuuabzSAjt7Da8y8YJ0je%2F9kKjUSzZG7Jqfsuy2%2BjaC%2BbRW%2BTPKn0b4bGoe4QcoAZo8AUVH7OsoNCesdX3Naf%2BelJbQWsHtQPwZX2eW9K70omDxsBspWRZX1pQi59xukPu8NhcqgKfq7fH4IuKVPagzXECtM79ICXHKwi5iLq3QkeWB3SY1mUBXzqJg1UsiuwCDYRQha5ihk3Vnm9cmBhLMVhAQJKXdx5PxJA3t8bkOSu646%2FHMZXUe%2BopkKx8PekGbMJQ2LMcEO5Doy%2BEptv8wbaA9ct8%2Br3KkUGKjUTJ18iCYe0KjtJGK2Q20kgvHFzaMFBkT508HQt54RUytIfrGqbARwVhotX%2B6vvKI0iu9hMa%2FFvfbVKSQQKIS%2FQQFAw1svYHzg0dFhewU32NCmWX6aer%2BrF0UhBvjFbE8iz2rl0VySZSB%2Fo1CcZuLTbfb2aGOSHRXw2CluvNDU2zf3xLcvUylTc6cviP3KvM2BrZBBecNKQxPoV%2B5VLC6PDRnu1cMDg5HeVRrJ62oaEtbTJ66qBMOjZ8OxnW%2FeAIXRwtF14YXqZY8HWLygJbpuTzE0GIQaGoeOuMLnbpntEya6Xx%2Bxk28OZchpGbCagna%2B0WiRa%2B%2BzWgLfjCr4wm97OyQY6pgF5tshn26cwaYsxGX5%2FirK303CkLOAp2jaW7fL%2BkvQnit6ZGSfoE351m6QdRdtXWjZ3YiKciegojYKC%2F%2Buhyih6%2BBW8MS1ZHUiyBF0UyrAAOrmTo7icGed%2FDfzq6ITCDB7CQDfi2R3ZriW5S4uqUj3MZ4dWC5BsLrsk1TPy2XiGm1V5FtGoH7SabsvGUzwPXp75CSgdbr%2BOaShToQ4uReroT6Gu5xFM&X-Amz-Signature=ecfa3f78c97a3f898e171a374cd3909d83d8d7fc055c59ec25eb24458bb66db9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UZB556G%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T050454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHkpn1h%2BVHF43xeecEJT0g%2FB8x4g5fWp%2BPUWkeORtfeOAiBFWF%2BDgHfyfMxFzcyiQ%2BHsnaoMrjV35YCvdyc3r%2B3%2FmCr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMNK0tQqcCQ2RYHms2KtwDdWUEuuabzSAjt7Da8y8YJ0je%2F9kKjUSzZG7Jqfsuy2%2BjaC%2BbRW%2BTPKn0b4bGoe4QcoAZo8AUVH7OsoNCesdX3Naf%2BelJbQWsHtQPwZX2eW9K70omDxsBspWRZX1pQi59xukPu8NhcqgKfq7fH4IuKVPagzXECtM79ICXHKwi5iLq3QkeWB3SY1mUBXzqJg1UsiuwCDYRQha5ihk3Vnm9cmBhLMVhAQJKXdx5PxJA3t8bkOSu646%2FHMZXUe%2BopkKx8PekGbMJQ2LMcEO5Doy%2BEptv8wbaA9ct8%2Br3KkUGKjUTJ18iCYe0KjtJGK2Q20kgvHFzaMFBkT508HQt54RUytIfrGqbARwVhotX%2B6vvKI0iu9hMa%2FFvfbVKSQQKIS%2FQQFAw1svYHzg0dFhewU32NCmWX6aer%2BrF0UhBvjFbE8iz2rl0VySZSB%2Fo1CcZuLTbfb2aGOSHRXw2CluvNDU2zf3xLcvUylTc6cviP3KvM2BrZBBecNKQxPoV%2B5VLC6PDRnu1cMDg5HeVRrJ62oaEtbTJ66qBMOjZ8OxnW%2FeAIXRwtF14YXqZY8HWLygJbpuTzE0GIQaGoeOuMLnbpntEya6Xx%2Bxk28OZchpGbCagna%2B0WiRa%2B%2BzWgLfjCr4wm97OyQY6pgF5tshn26cwaYsxGX5%2FirK303CkLOAp2jaW7fL%2BkvQnit6ZGSfoE351m6QdRdtXWjZ3YiKciegojYKC%2F%2Buhyih6%2BBW8MS1ZHUiyBF0UyrAAOrmTo7icGed%2FDfzq6ITCDB7CQDfi2R3ZriW5S4uqUj3MZ4dWC5BsLrsk1TPy2XiGm1V5FtGoH7SabsvGUzwPXp75CSgdbr%2BOaShToQ4uReroT6Gu5xFM&X-Amz-Signature=d82fca69206b0fddc3af2e68c2dcbb8e1a198a39e36406b7e663cc27a36ba3d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

