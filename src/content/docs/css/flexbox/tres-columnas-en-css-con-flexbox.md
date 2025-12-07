---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XO5SRYMO%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T121416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAWgldi7z%2B62uwxbpMpzqxHVNsjbySNPEnh8cboGHdgcAiA7acoe7mquYzfuQWiPL76EwXYpBvizdRMEZgiwybC8tCqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsO6aGrDJtR1fn6tLKtwDBWujkWU6Y%2BbQeAGwED2Cy5WeSRMYq3gbQhBE%2BEWnsjE5DF88LeGgI%2BtZUg6SbPzlqOP2ph%2BIJkOvtNRw%2FFaKdMbJ%2BamazX3SdzYMKYrMLsCFbzwPurYU5hQzROOpQezfHZAuV5ZMmOHArFcBtb8y3cVwLZceLkJ0z4EBh4KYtT%2BInkScG8YS7gVDHItQw%2BaTF1iIXkfjinUN7qSO97CgxLOo%2B6xwsdbuWH8Vhhq7IHWXHd%2FMaJz5MwqZtk5JtaPwz3CcqZKfRmlRQpp2VzkCc%2BE6o1bz9ulxDBq4BcMxS74jED%2F0t5K04hK1WsvEMqSjwUVJVi0STaxo8KlBJHYF30bj9GdIZrMe5tdl0HqpbQa2Z6%2Fv2MAZTeCO9P6g9jlqgyRLmxC%2Bsddq%2FH3ouNwvt2W7D3%2FR0DA7cweyTssAHsMaObVmiC3Rd%2B6KHHzth9G0DqPTaQaTqSIG8giaJvrDUZxn0wkEQ88WwZqztQAm7AwkwvpJSYwIsQRUsBnBlXxJL6kl2WYj2DDdvkqrLsgtmOWwl1h4S5SmUb%2B5tB9iTeWrCjr0mehTt9Ot1%2FJ4h8NM%2B8ikWkJIhPimRMMWCzLqYExDGKTlgqCw9lidUlRNgZMpH7f9sBcXNvm2aM8wsZnVyQY6pgFtlqKf2Gs0XBFBN3Cer3CaTw2TR5M6eVHoqpQ%2FDdg7IZGruMR6zKhc1%2BvseunFZB2EmilxfM6KwU8fNk%2FlfN0Zn4mYv8ST0uhmNWKuNxWhVYPAREgtAPFIEr6lfAmoUQPceteP6%2Fvranf%2BfAt2JJD6yl7H3NhPNGWZW%2BvysG7A0v8ZxkQMAg9JwDZ5KBd20enY%2FJGGllRnEl4oCYHQhOY2CfG2IQTD&X-Amz-Signature=dc35ac4a2bf92712fa9951f6f2c72ee97b6db4a79c33647bfe3fdc8472b7cf84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XO5SRYMO%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T121416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAWgldi7z%2B62uwxbpMpzqxHVNsjbySNPEnh8cboGHdgcAiA7acoe7mquYzfuQWiPL76EwXYpBvizdRMEZgiwybC8tCqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsO6aGrDJtR1fn6tLKtwDBWujkWU6Y%2BbQeAGwED2Cy5WeSRMYq3gbQhBE%2BEWnsjE5DF88LeGgI%2BtZUg6SbPzlqOP2ph%2BIJkOvtNRw%2FFaKdMbJ%2BamazX3SdzYMKYrMLsCFbzwPurYU5hQzROOpQezfHZAuV5ZMmOHArFcBtb8y3cVwLZceLkJ0z4EBh4KYtT%2BInkScG8YS7gVDHItQw%2BaTF1iIXkfjinUN7qSO97CgxLOo%2B6xwsdbuWH8Vhhq7IHWXHd%2FMaJz5MwqZtk5JtaPwz3CcqZKfRmlRQpp2VzkCc%2BE6o1bz9ulxDBq4BcMxS74jED%2F0t5K04hK1WsvEMqSjwUVJVi0STaxo8KlBJHYF30bj9GdIZrMe5tdl0HqpbQa2Z6%2Fv2MAZTeCO9P6g9jlqgyRLmxC%2Bsddq%2FH3ouNwvt2W7D3%2FR0DA7cweyTssAHsMaObVmiC3Rd%2B6KHHzth9G0DqPTaQaTqSIG8giaJvrDUZxn0wkEQ88WwZqztQAm7AwkwvpJSYwIsQRUsBnBlXxJL6kl2WYj2DDdvkqrLsgtmOWwl1h4S5SmUb%2B5tB9iTeWrCjr0mehTt9Ot1%2FJ4h8NM%2B8ikWkJIhPimRMMWCzLqYExDGKTlgqCw9lidUlRNgZMpH7f9sBcXNvm2aM8wsZnVyQY6pgFtlqKf2Gs0XBFBN3Cer3CaTw2TR5M6eVHoqpQ%2FDdg7IZGruMR6zKhc1%2BvseunFZB2EmilxfM6KwU8fNk%2FlfN0Zn4mYv8ST0uhmNWKuNxWhVYPAREgtAPFIEr6lfAmoUQPceteP6%2Fvranf%2BfAt2JJD6yl7H3NhPNGWZW%2BvysG7A0v8ZxkQMAg9JwDZ5KBd20enY%2FJGGllRnEl4oCYHQhOY2CfG2IQTD&X-Amz-Signature=4f3b98dacbd6bfe8b82cb3286ee45421a91bd7112de6256c2b848e569a28070e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

