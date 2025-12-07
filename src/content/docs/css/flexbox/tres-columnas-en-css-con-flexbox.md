---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGDV55R7%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T040346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF0UcowW%2F71HSCWKFwQQyFvoZaOrKbXlvqLkLzSlNz1nAiALeiBUsjPJDOXMS4pjJKLYDbSgFFCyRTahwTWDb9COiyqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLhCz1jvErjhJNBRRKtwDaEnljk5WqCEKK5juu2qxtpFSpWFiEDZN4qvKeG08x6Lj%2FKE2OZ5ifU5XyA%2Ff0TePEWdbc9A70sOPBZGm%2FdDHbatHZhD%2B2OJAZsuEPCao0ZqEIlv1IwErXhik7hMcMJmoXYuomgp2yeYHaEeTJdbbjejPp9sP%2FDx%2FTTPnqY%2FKNQ5Gi5WPYAEUOekeA3krix9ABjsZH8NbO1PDGCYpqj6%2F%2B49BfxAXjuRd5%2F1G4efaBBzVQcKHpz5y9x0kYvvU%2B6Bsf5FrMr%2FA%2FZAjSzCceoIyl6xvOjOE6QfhtVRGzskgNpa7p6o%2FglNDkhiz91WppdySC%2B93qE0cERVXzBz0nmiAvbM6qaErHnDqH2LwcmkK%2FJU1aLrD1aJdaVGvQXS76dHXAIrrL5cPWiw6FuLgnrTWwSr8Ps1VE5h4JQTXY0L0XMmAEZ1B9mEVlKVamu3qFYgSUR1tdJ3duLIP4rQXM4OvjTs0%2FCQUsZt5xCTxrGZw860GXtgYIPOti5TBwhQzOo58Gr2poENeiuH6afTiBrKp4eF7KU15QdZjVvWoAhHdp1SAVPdFukRhedhTrd2GkDzla6bW1SPcHVvmOhVkil3mUapXOCN0hWCrIYp5c42kwSNwyll165pbKk9KrQgwy%2F3SyQY6pgE5j5oKk2ORbyTozZzjkzKVrQw1azoIB3owYkesFUYdnqZUgblXhgUzqWkF48CpddJEZ09KGPl3LgpaN8g5z%2BrtWL1jGMrieokHLC%2FdIZLkVKpchwA2%2Fcf09pIu70A5WjHqmvx0r5Ey8C0%2B2ZYxFsWtCYvUM%2BLLMOtGdfk45lXIyDriAYEybzsyBgm9XHGuSgGeT81Z%2BVzOBwWMceFVlr%2B3MiSvIDiq&X-Amz-Signature=fae4464f95b1a6d872497854d6736f9cec61b240b5e544c06421fce296b6c7a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGDV55R7%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T040346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF0UcowW%2F71HSCWKFwQQyFvoZaOrKbXlvqLkLzSlNz1nAiALeiBUsjPJDOXMS4pjJKLYDbSgFFCyRTahwTWDb9COiyqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLhCz1jvErjhJNBRRKtwDaEnljk5WqCEKK5juu2qxtpFSpWFiEDZN4qvKeG08x6Lj%2FKE2OZ5ifU5XyA%2Ff0TePEWdbc9A70sOPBZGm%2FdDHbatHZhD%2B2OJAZsuEPCao0ZqEIlv1IwErXhik7hMcMJmoXYuomgp2yeYHaEeTJdbbjejPp9sP%2FDx%2FTTPnqY%2FKNQ5Gi5WPYAEUOekeA3krix9ABjsZH8NbO1PDGCYpqj6%2F%2B49BfxAXjuRd5%2F1G4efaBBzVQcKHpz5y9x0kYvvU%2B6Bsf5FrMr%2FA%2FZAjSzCceoIyl6xvOjOE6QfhtVRGzskgNpa7p6o%2FglNDkhiz91WppdySC%2B93qE0cERVXzBz0nmiAvbM6qaErHnDqH2LwcmkK%2FJU1aLrD1aJdaVGvQXS76dHXAIrrL5cPWiw6FuLgnrTWwSr8Ps1VE5h4JQTXY0L0XMmAEZ1B9mEVlKVamu3qFYgSUR1tdJ3duLIP4rQXM4OvjTs0%2FCQUsZt5xCTxrGZw860GXtgYIPOti5TBwhQzOo58Gr2poENeiuH6afTiBrKp4eF7KU15QdZjVvWoAhHdp1SAVPdFukRhedhTrd2GkDzla6bW1SPcHVvmOhVkil3mUapXOCN0hWCrIYp5c42kwSNwyll165pbKk9KrQgwy%2F3SyQY6pgE5j5oKk2ORbyTozZzjkzKVrQw1azoIB3owYkesFUYdnqZUgblXhgUzqWkF48CpddJEZ09KGPl3LgpaN8g5z%2BrtWL1jGMrieokHLC%2FdIZLkVKpchwA2%2Fcf09pIu70A5WjHqmvx0r5Ey8C0%2B2ZYxFsWtCYvUM%2BLLMOtGdfk45lXIyDriAYEybzsyBgm9XHGuSgGeT81Z%2BVzOBwWMceFVlr%2B3MiSvIDiq&X-Amz-Signature=27c84e6457f39dce2a04da2f96b51947e2e23b6db02826a8262e5052fa635821&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

