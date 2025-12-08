---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DOF4A75%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T005632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkpCAAqMFOUwwoYJ%2BTXD%2BYHoi78eVcnbzXIkbHoXjRJAIhAMgx63OxIMgBCYYsAaPL75RWVM4Rw%2FhJBUsOTIDviwniKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwqxl8K%2BjZt0XCBBzIq3APv5VAiPGIr4ft6yJBxK2W9fYGlJUkPLkppwUPayCJG3tksaLW04EVxIADHWJaB%2Byb5fmkVX63e%2BMA7SZFCj1S%2FcoqosYLJcHnTR%2F3rBbYX1kTA8NJ2J5z%2BaVz950aW9uMT1WIM%2FMFJ%2Fxw3GnkdUs6Nm8f3ITq7aJKB8xGUsf7ouwYINdviOC5vv7hDzWV3BPf%2F%2BQIUp%2BRP%2Ffpl9IomaB9wkyeX36ict8JAC2QEQRDoqU09M9VvTRcG7WnodYYBzMtM9fd0PLORDihcMgADpKiBDFF74WaeDFkDoLKQLDuoF1FigmJYMMxiF3%2Fq33zgZypfywFc2%2BlPXxgYep9WsDTT5feoTxm%2B9d8Zyl64wQn3%2BjfQ0aLbBA%2FUffyeBY3jxBiSVbJ8%2BKF8HCivDCARvjy7HHEOZzZt6uXd41Ea2LZb2sV%2FSh2VI8KYct%2FRG9UmU%2Fm%2B5ZRj1E%2F7YBfydtkImLdEePj8b8QItFMBxe9R6lSXH1UFDmKK4KNLJhN7eP8dbFI056kHgHcoNHhZaVQuisADxqRHdGKbP8fgFloAeKN6BoFT9K9Wk%2FnY3Hgu0%2B4Nb5airBoyiFxmKY%2BfIGfFrJ2VlLFa%2BvVFgQb7GSTw%2Bon6rb1LnFwTS56SWwbC0zDgodjJBjqkAR%2FKMZxJaWyX%2FcxiDcidWEnxcUtGuzu2p%2FZp%2FZdfJ7x1ABUXecDfNURDKDgZ8ONMNpKqb4SyRXE4OuRrMn%2BoM62CUXW%2BGXbnlnX4skMxu8OQR6ORs7rt5bADLxfEb2BQ%2F11pjB%2FqU92aZbpTDNtFuFt1mhNatmOazmfQK5RPVYPp6RXatGJ%2Ft7D6XqxQVgV6uKyrpL95hVNOpBTZ7J1T7%2BjcSQEN&X-Amz-Signature=5517fee57225bfe135ce117807506f038474028930514797f8998994fccb5067&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DOF4A75%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T005632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkpCAAqMFOUwwoYJ%2BTXD%2BYHoi78eVcnbzXIkbHoXjRJAIhAMgx63OxIMgBCYYsAaPL75RWVM4Rw%2FhJBUsOTIDviwniKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwqxl8K%2BjZt0XCBBzIq3APv5VAiPGIr4ft6yJBxK2W9fYGlJUkPLkppwUPayCJG3tksaLW04EVxIADHWJaB%2Byb5fmkVX63e%2BMA7SZFCj1S%2FcoqosYLJcHnTR%2F3rBbYX1kTA8NJ2J5z%2BaVz950aW9uMT1WIM%2FMFJ%2Fxw3GnkdUs6Nm8f3ITq7aJKB8xGUsf7ouwYINdviOC5vv7hDzWV3BPf%2F%2BQIUp%2BRP%2Ffpl9IomaB9wkyeX36ict8JAC2QEQRDoqU09M9VvTRcG7WnodYYBzMtM9fd0PLORDihcMgADpKiBDFF74WaeDFkDoLKQLDuoF1FigmJYMMxiF3%2Fq33zgZypfywFc2%2BlPXxgYep9WsDTT5feoTxm%2B9d8Zyl64wQn3%2BjfQ0aLbBA%2FUffyeBY3jxBiSVbJ8%2BKF8HCivDCARvjy7HHEOZzZt6uXd41Ea2LZb2sV%2FSh2VI8KYct%2FRG9UmU%2Fm%2B5ZRj1E%2F7YBfydtkImLdEePj8b8QItFMBxe9R6lSXH1UFDmKK4KNLJhN7eP8dbFI056kHgHcoNHhZaVQuisADxqRHdGKbP8fgFloAeKN6BoFT9K9Wk%2FnY3Hgu0%2B4Nb5airBoyiFxmKY%2BfIGfFrJ2VlLFa%2BvVFgQb7GSTw%2Bon6rb1LnFwTS56SWwbC0zDgodjJBjqkAR%2FKMZxJaWyX%2FcxiDcidWEnxcUtGuzu2p%2FZp%2FZdfJ7x1ABUXecDfNURDKDgZ8ONMNpKqb4SyRXE4OuRrMn%2BoM62CUXW%2BGXbnlnX4skMxu8OQR6ORs7rt5bADLxfEb2BQ%2F11pjB%2FqU92aZbpTDNtFuFt1mhNatmOazmfQK5RPVYPp6RXatGJ%2Ft7D6XqxQVgV6uKyrpL95hVNOpBTZ7J1T7%2BjcSQEN&X-Amz-Signature=6266d0478d26ff62cdf4d8f733c74edb5b8679c7301f2efa90dde994437320a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

