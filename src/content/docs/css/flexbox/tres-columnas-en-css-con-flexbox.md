---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFLP6SHB%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T113715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVuvKugZ8p%2Fgz3zwmG0uqGQBvwuMRLEldC2sZ31lMnEQIgAQuwTrHUXQ97ZGja00ERLj9qjtOLGfSZrgn%2BxoBr5zgqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ0xkny4S61si96IzyrcA8JLsESTEL%2B6MWl7pdMHhLxwEHElqei8KT2OvLTl%2FS7TlPiFDGMQugVoX5N1Mjy0bblSWfK9iesM%2FsyC%2BA2g1o1ktrueci3lj9K9w0nEzSb6JBNDxPUqx5cqTa5vwp4VRc6myGJ6Gpj2C%2BOuZBvyvz2OAtqbVgkopT5R2IOq29z7Qsn9HbF%2Bq1N5yQtrA6xITN490YkK%2FkJ2pe%2FjUN%2B5p%2BDr%2FsGPORh7nw61s1p%2FRyG04yPuR7gZIWg%2Fnqy%2Bz9i%2Be5HJV92aB3oIh5%2BrkFtvnlDktqQek0WO2jFlAVpZCXGw%2BV1P169rbD6V%2FIEqLpy%2BiliuZhX463ZZ8dFe5ia8cmQZP8iSZ5kmawpIgumv5O9meqPilCq84VNUM33Sgf9fYLlkUQFQczeFzf5tKJS1XJjRf9Es0JUaJRvlWTyM%2F6WgFqYkFdlARP%2BR%2BBphH9OX5spSX%2Biy5IKLY5qOI4ZtnBCscWlY%2BkeIaFY5Yjyj0VRZFk1y7ZIy77tfqtAXc%2BZy1KepIzjreG8ELhh1%2BpYdrlPH41hr7PrzAoMuKa1kv10gZDwIwo8EPWBCx7rTau7d2GHU6FWe7T5xn0MS5rpV0KdolMHrHEEiiIgCP9hzxPbugxJXf03QajBCDZPgMMuZ1ckGOqUBeRyIGCmpcr6I6mWVKDFeeBsd6C7mGgmCoTQQ7A%2Fjst1%2BCX3mSpFi3Pcdxjamqf3YC4fRzPxCIyXJsw6%2B2oWPd%2B%2B6KxUS%2B%2BUmne2TWHrjys8hm5%2FldgFA88%2F7bi92ul2tXuXSXk39kksrf%2FVrb4B33dyGZe029Mv1mV%2FaHguwpfVXOKlHk5vb21LkQRZwMIiuvfsE2IbOI%2BIwpVnyZhiAvXssZabd&X-Amz-Signature=926a789a62fb08571cc1b9712e7bee2757aab055b5f269adfe39c91cd4c70e48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFLP6SHB%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T113715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVuvKugZ8p%2Fgz3zwmG0uqGQBvwuMRLEldC2sZ31lMnEQIgAQuwTrHUXQ97ZGja00ERLj9qjtOLGfSZrgn%2BxoBr5zgqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ0xkny4S61si96IzyrcA8JLsESTEL%2B6MWl7pdMHhLxwEHElqei8KT2OvLTl%2FS7TlPiFDGMQugVoX5N1Mjy0bblSWfK9iesM%2FsyC%2BA2g1o1ktrueci3lj9K9w0nEzSb6JBNDxPUqx5cqTa5vwp4VRc6myGJ6Gpj2C%2BOuZBvyvz2OAtqbVgkopT5R2IOq29z7Qsn9HbF%2Bq1N5yQtrA6xITN490YkK%2FkJ2pe%2FjUN%2B5p%2BDr%2FsGPORh7nw61s1p%2FRyG04yPuR7gZIWg%2Fnqy%2Bz9i%2Be5HJV92aB3oIh5%2BrkFtvnlDktqQek0WO2jFlAVpZCXGw%2BV1P169rbD6V%2FIEqLpy%2BiliuZhX463ZZ8dFe5ia8cmQZP8iSZ5kmawpIgumv5O9meqPilCq84VNUM33Sgf9fYLlkUQFQczeFzf5tKJS1XJjRf9Es0JUaJRvlWTyM%2F6WgFqYkFdlARP%2BR%2BBphH9OX5spSX%2Biy5IKLY5qOI4ZtnBCscWlY%2BkeIaFY5Yjyj0VRZFk1y7ZIy77tfqtAXc%2BZy1KepIzjreG8ELhh1%2BpYdrlPH41hr7PrzAoMuKa1kv10gZDwIwo8EPWBCx7rTau7d2GHU6FWe7T5xn0MS5rpV0KdolMHrHEEiiIgCP9hzxPbugxJXf03QajBCDZPgMMuZ1ckGOqUBeRyIGCmpcr6I6mWVKDFeeBsd6C7mGgmCoTQQ7A%2Fjst1%2BCX3mSpFi3Pcdxjamqf3YC4fRzPxCIyXJsw6%2B2oWPd%2B%2B6KxUS%2B%2BUmne2TWHrjys8hm5%2FldgFA88%2F7bi92ul2tXuXSXk39kksrf%2FVrb4B33dyGZe029Mv1mV%2FaHguwpfVXOKlHk5vb21LkQRZwMIiuvfsE2IbOI%2BIwpVnyZhiAvXssZabd&X-Amz-Signature=9627d3fdef1546dfefb9dbc6dc5546085dd936eb06d2109cc520403ce4f7f24c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

