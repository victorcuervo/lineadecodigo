---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXLHFDCC%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T060717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGsN9qQKpnBcAzx2qkKoSzbDB8Gq1M9Vb65cdQDqOnyAAiByKXMD5lodqNlHKrdZxIqXGxZz2EKHEtXC%2F3sfpEcJMSr%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIM54Zc7uYFUDDdXvIVKtwD39n4WenphbSCW3h9UjSzzjgw%2BK0Azx1gPbkPkXF4HcBDWuG7Yzd2FHZ%2F6lvMeyWF1UgTVjBSw4zXEniOeGcnsJU%2B5rqTe332Od15kOAJPf8nuJGyBnbtZMzPQj7ynHehVP5B%2B4oRShcTEbAXR1hdiUp4uhilXaRdRiKpwTsQ%2FlqRvdU%2BIiXd%2BLEjfwTtwfVIQ8LOgarXm7eVPZsjFiymv19uMSJjZ8dh7V7IUUmVzo5uw7GVxTfO9u0WrGYLcL2ZJj1hBCxdu2AnGceP1TIM0RTIlPDX3y0%2BI34ax%2B%2FvqXVWgv9rpceONfDKOL1lpcnVZGMqYKlXpkV9lbbN3fmRDxe2%2Bs4ZoFQI1l9butXvgl%2BFB720qxrXMxWLfrmUAPpgpts%2Ba0KZ1nQIfiFsHUJ9FKM8oKJ3igEfbEAkU5RGJf34Wq8SMdYomBJ6EGelfuU0pxEcHjenhMvBE5LOJA%2BAIANIzC8MgPAXqLnGGQxWGN2OBReWlHeccWOPktTVA%2FKxSX0U0RqVsmP%2Bqv1fMjwelR5xTUxiQkiOVcd2cXKFfGxOC3VTbbc8asxK7%2BIE6lIhHL3n5D81pb55KmywXPyLcKLnrc5ZtQluG4WPJXlRU6yMf8%2FMIIE1%2FxbbU5owwP3OyQY6pgFYzkVEnOFvBhhQWG%2FJfugSwGjaBXCHrYegxBnhSUUkI72sVYT0b9sUiexD5gzr%2FVvnda4ZujF9e3FJrDblf%2FdMabMnX4WDjY0obmwELjTRph5yeU4h0%2FNQrD0vEaYjspgFVSa6%2BbtBLrk7hoKvgMbExs%2F6xGF0hqFrdhulFTnvzYi4hsDy9MCksUGefCJhq6ZEiaXUgYW5ipqOfujDj%2F%2BZ6N24CIe9&X-Amz-Signature=cc242de25262012485f625c4e0f9ec07ee3f2849d09593983b50d5890b163402&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXLHFDCC%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T060717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGsN9qQKpnBcAzx2qkKoSzbDB8Gq1M9Vb65cdQDqOnyAAiByKXMD5lodqNlHKrdZxIqXGxZz2EKHEtXC%2F3sfpEcJMSr%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIM54Zc7uYFUDDdXvIVKtwD39n4WenphbSCW3h9UjSzzjgw%2BK0Azx1gPbkPkXF4HcBDWuG7Yzd2FHZ%2F6lvMeyWF1UgTVjBSw4zXEniOeGcnsJU%2B5rqTe332Od15kOAJPf8nuJGyBnbtZMzPQj7ynHehVP5B%2B4oRShcTEbAXR1hdiUp4uhilXaRdRiKpwTsQ%2FlqRvdU%2BIiXd%2BLEjfwTtwfVIQ8LOgarXm7eVPZsjFiymv19uMSJjZ8dh7V7IUUmVzo5uw7GVxTfO9u0WrGYLcL2ZJj1hBCxdu2AnGceP1TIM0RTIlPDX3y0%2BI34ax%2B%2FvqXVWgv9rpceONfDKOL1lpcnVZGMqYKlXpkV9lbbN3fmRDxe2%2Bs4ZoFQI1l9butXvgl%2BFB720qxrXMxWLfrmUAPpgpts%2Ba0KZ1nQIfiFsHUJ9FKM8oKJ3igEfbEAkU5RGJf34Wq8SMdYomBJ6EGelfuU0pxEcHjenhMvBE5LOJA%2BAIANIzC8MgPAXqLnGGQxWGN2OBReWlHeccWOPktTVA%2FKxSX0U0RqVsmP%2Bqv1fMjwelR5xTUxiQkiOVcd2cXKFfGxOC3VTbbc8asxK7%2BIE6lIhHL3n5D81pb55KmywXPyLcKLnrc5ZtQluG4WPJXlRU6yMf8%2FMIIE1%2FxbbU5owwP3OyQY6pgFYzkVEnOFvBhhQWG%2FJfugSwGjaBXCHrYegxBnhSUUkI72sVYT0b9sUiexD5gzr%2FVvnda4ZujF9e3FJrDblf%2FdMabMnX4WDjY0obmwELjTRph5yeU4h0%2FNQrD0vEaYjspgFVSa6%2BbtBLrk7hoKvgMbExs%2F6xGF0hqFrdhulFTnvzYi4hsDy9MCksUGefCJhq6ZEiaXUgYW5ipqOfujDj%2F%2BZ6N24CIe9&X-Amz-Signature=d0caef1d912853f3bd497fc044cc95017192b05882ba154d53d1f7e4548e17bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

