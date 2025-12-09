---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DID5KWU%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T092422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDoE8swMXhOql8V%2B6QpTCnlNhIFmoOPEeFGqypDXXJCmAiBsLnf2sPhYROxV1xQ6sWmExcSBeEu3V8FvR7huudTjlCqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbqSfh3Z%2Fe02eMLZpKtwDI8O46juk1x5hEx7SWSERMqQp68HfQIgYFkkS59FYYH3OC3%2FjtEt10mLF0O91sAw5rF%2F7XZ0ikW5itFiqd0IdtOJH6aAXtmeBSg16XjIG0zZ3mLrqENoKvHA0eXznV4fXepQOoJdBjI5%2FHU69%2BW3EBpWLxrRoWyuhyFYqCPrvdZCfBD8Xly9mnXMfybTMn%2BNSqoxFGn62d0g9ne9Qveub5iAY8Eh%2FjzDtRexiCeRKGTTTO2jdusMqO%2BUcL65P%2Bnd4xyZOk4Sw7ZAfxYXJv4%2BJfbOskPBC6qaVLY%2Fx%2BerDxETFn8tg51iaAqcSKfUTiefpZbacyoLW5i8GEbou%2Bdrxq6pt5rkzLfbwundveXiKITiPijrAZb0q4UnEHhjTYkXfUYgvDGFal8%2FKLOiA5ztvv1WIVURkKVbBYZlAZdaIwRCdcv4OoQ9DweZQkGnBJBOymp4Iu%2FKf8bu4%2F%2Br%2BIpad0N5X5ygZzez3EHAl%2FAYBSXmPUPh7JC2MTedldAEFlVWRElWJMF7KugQtEJyyHIpUFk5wpbeWCABjKRnfFIthbGTNXURln0s6oxFpFFM9EP2NrM2XEoNHCjBaKwtvvtLNq6k5gVn5noA6d5D7QYJy5cYXfLsC7kOcBh8gxI8wlsXfyQY6pgG4ic%2B1c8OY4KC%2FDRbrzitwn8BKxaJYKj8p3q7E0kEK%2Fwju1o3lR9nc9IEdjnb5hreShz8LaVBYS5cCuGN3YGnsPUD0L%2BVDWHlCnxx3MGltjC8SjmC6NoYWBiHKgJ4v8EH4PGcEFNWAQGXY84Ww%2FAPnVs6E5J8TGXggAhRv3I%2FgW4kmgrqHuSqBIl4omEheJZfEvMtTXeSS0jW5fTzc0hqmyAviCz1m&X-Amz-Signature=22bfd422ac8a82a1fd4b8e0bc486605a726f20f86371d032a9e36a23262ff3aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DID5KWU%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T092422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDoE8swMXhOql8V%2B6QpTCnlNhIFmoOPEeFGqypDXXJCmAiBsLnf2sPhYROxV1xQ6sWmExcSBeEu3V8FvR7huudTjlCqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbqSfh3Z%2Fe02eMLZpKtwDI8O46juk1x5hEx7SWSERMqQp68HfQIgYFkkS59FYYH3OC3%2FjtEt10mLF0O91sAw5rF%2F7XZ0ikW5itFiqd0IdtOJH6aAXtmeBSg16XjIG0zZ3mLrqENoKvHA0eXznV4fXepQOoJdBjI5%2FHU69%2BW3EBpWLxrRoWyuhyFYqCPrvdZCfBD8Xly9mnXMfybTMn%2BNSqoxFGn62d0g9ne9Qveub5iAY8Eh%2FjzDtRexiCeRKGTTTO2jdusMqO%2BUcL65P%2Bnd4xyZOk4Sw7ZAfxYXJv4%2BJfbOskPBC6qaVLY%2Fx%2BerDxETFn8tg51iaAqcSKfUTiefpZbacyoLW5i8GEbou%2Bdrxq6pt5rkzLfbwundveXiKITiPijrAZb0q4UnEHhjTYkXfUYgvDGFal8%2FKLOiA5ztvv1WIVURkKVbBYZlAZdaIwRCdcv4OoQ9DweZQkGnBJBOymp4Iu%2FKf8bu4%2F%2Br%2BIpad0N5X5ygZzez3EHAl%2FAYBSXmPUPh7JC2MTedldAEFlVWRElWJMF7KugQtEJyyHIpUFk5wpbeWCABjKRnfFIthbGTNXURln0s6oxFpFFM9EP2NrM2XEoNHCjBaKwtvvtLNq6k5gVn5noA6d5D7QYJy5cYXfLsC7kOcBh8gxI8wlsXfyQY6pgG4ic%2B1c8OY4KC%2FDRbrzitwn8BKxaJYKj8p3q7E0kEK%2Fwju1o3lR9nc9IEdjnb5hreShz8LaVBYS5cCuGN3YGnsPUD0L%2BVDWHlCnxx3MGltjC8SjmC6NoYWBiHKgJ4v8EH4PGcEFNWAQGXY84Ww%2FAPnVs6E5J8TGXggAhRv3I%2FgW4kmgrqHuSqBIl4omEheJZfEvMtTXeSS0jW5fTzc0hqmyAviCz1m&X-Amz-Signature=def69ba1890e779d92754a2f2964eca61da1b69b670d25409790ca7560fa34fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

