---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJXRMITZ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T045810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSObRAkWUwqh0G93Hq84agp8O2%2BVQD3yMQHD6H6PB67wIgT3ee0%2Bh%2Ffa6kQDay%2Bm0nyoQxkzU0yd24nvnduOjXPNoqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB61Q6ToKYKUrj1OuircA6tC%2F1qiA2NRRC4weJVBLF8yWlbrGU6QJGZfag55IJ5NL8WPpqw56QnrOP88j7Sg0vvjfB3wge4Allr7d%2FYeA%2BFkXP0c0%2F0BLmVrBixxIoebL7FX44RA1nrCPfCRlJbFzgCHp4uaj6KIunTUCxU3eA2PPuYGT10i0HvfmBfhxrHrH08tx1mXLNejs70CfKmx%2BxjcnmHpdoAqqm31XVygIr%2FjjfKmuFdENgSTB07SsoWx6Xa3RMkdHGkw7qui3Dwx80qCHW9mhlzbinAGbgpviQW9fuiS%2FL3ptA48OhaQ7OPwMljHo0vg%2F1bZnlkHwMh2GJN%2B4b0t%2FCp65vdZlcINItsoT5G1ZcWngonvF5e4ctg5BsVo8TbELWKvfSvIY0kHd4F2JxHhoFEZ16WqsQUiKUziYYLyq0cwJrGnYwQJ5wwYNuYB4IK%2F2wErv5wBclc2k6x2dgP8LbUsrdNUMx0SrBXfciHhsES%2BiPg%2FAoSD%2FIQOkob97fpW4e%2Bh6kF3EB1a%2BQSooprTkCQjkUoY%2FGcOLIwnddpFIJsdNdfhmqy2DD35mzttXSK7tkJHTKtdDouSEZBtyfH0MXN5wdeBYKkmFAaBlmwg1eRv9hNUeggEP%2Bio1gRpEOVoauLlrQGvMJPK3skGOqUBPKRwAmc1d8w3etUoLa8Q%2FNw9T710RM8FmvodAYJ9%2F%2B%2F3JlGbqEK6NvrM7pf0Yh9%2FOeB4ov7LZZEt6SuF2gnkZyIU8MYr2ya6jtFgmP3DKCUtWkxadakOewPwjyaYpYuaWNJy8brtgLkjxz0%2FaCDuLTI0YaAWI0VRrlkaVKhFSmOHsXrwdkBwHfJRsDTIFwuvSXVXC9FdPKwXQPyyb3nKzacQy1z8&X-Amz-Signature=f71efc76cf7d9058554aa8a333fdce60de6b5d0012e1850d951ac5d2ab55f57f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJXRMITZ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T045810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSObRAkWUwqh0G93Hq84agp8O2%2BVQD3yMQHD6H6PB67wIgT3ee0%2Bh%2Ffa6kQDay%2Bm0nyoQxkzU0yd24nvnduOjXPNoqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB61Q6ToKYKUrj1OuircA6tC%2F1qiA2NRRC4weJVBLF8yWlbrGU6QJGZfag55IJ5NL8WPpqw56QnrOP88j7Sg0vvjfB3wge4Allr7d%2FYeA%2BFkXP0c0%2F0BLmVrBixxIoebL7FX44RA1nrCPfCRlJbFzgCHp4uaj6KIunTUCxU3eA2PPuYGT10i0HvfmBfhxrHrH08tx1mXLNejs70CfKmx%2BxjcnmHpdoAqqm31XVygIr%2FjjfKmuFdENgSTB07SsoWx6Xa3RMkdHGkw7qui3Dwx80qCHW9mhlzbinAGbgpviQW9fuiS%2FL3ptA48OhaQ7OPwMljHo0vg%2F1bZnlkHwMh2GJN%2B4b0t%2FCp65vdZlcINItsoT5G1ZcWngonvF5e4ctg5BsVo8TbELWKvfSvIY0kHd4F2JxHhoFEZ16WqsQUiKUziYYLyq0cwJrGnYwQJ5wwYNuYB4IK%2F2wErv5wBclc2k6x2dgP8LbUsrdNUMx0SrBXfciHhsES%2BiPg%2FAoSD%2FIQOkob97fpW4e%2Bh6kF3EB1a%2BQSooprTkCQjkUoY%2FGcOLIwnddpFIJsdNdfhmqy2DD35mzttXSK7tkJHTKtdDouSEZBtyfH0MXN5wdeBYKkmFAaBlmwg1eRv9hNUeggEP%2Bio1gRpEOVoauLlrQGvMJPK3skGOqUBPKRwAmc1d8w3etUoLa8Q%2FNw9T710RM8FmvodAYJ9%2F%2B%2F3JlGbqEK6NvrM7pf0Yh9%2FOeB4ov7LZZEt6SuF2gnkZyIU8MYr2ya6jtFgmP3DKCUtWkxadakOewPwjyaYpYuaWNJy8brtgLkjxz0%2FaCDuLTI0YaAWI0VRrlkaVKhFSmOHsXrwdkBwHfJRsDTIFwuvSXVXC9FdPKwXQPyyb3nKzacQy1z8&X-Amz-Signature=179082b143c14c40b4a9072948a5982c4882a1f926b9c08017eafc735160129e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

