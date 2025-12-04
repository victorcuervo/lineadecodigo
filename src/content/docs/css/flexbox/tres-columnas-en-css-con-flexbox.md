---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IFBULLB%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T150611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQDQpUq7wUiOvFr2Au63%2B5rVurqixVztqrdPMPp%2FOqoJPQIgHetMFw%2FVEx27LefGI%2BYLfBvXJPTdreU%2FWPp5JaVwKlsq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDPZV%2Fg8XQxXtjLnaUircAyKH24jTZS%2BMlMx3ww09Vg84Jsx24jgjlR2yov0MI8fqajDlo0Q753YzhfcqHlKQLk3IFAYUfCqzXCnqBmOkVTjVV83xf%2BNQ%2FxbbmvJVGTiyaP%2F%2FYHKcy9CrykXDNiU0XfEFBpnuUyiIu%2BKGIEp6KDR6FgKZ1Rmno8rvGSp%2B66d3cWdGktIexpskGB2lSkFcDFtVe%2Bocp8YHo58x0dKV5wExobdFttJFmTx5JspoAjYED%2Bd3RcxlMh4IgrbQRVE9lPSu7%2Bo0wS7CzJlUsgn9HACPlxjcPaxf5%2B1SR1AqLVG0ToTkOitc5CVbIz7LT1N2MdqrJ33TVae8%2BPMczE%2FCSz%2BxUOKac7nOVVtWaCRaRtEiLKaAigi2DVB9YCMBltk7ck4L5UcPje508ir%2B3irUZiocQhFtpb9AZTuBLyzHnZAD2OOqB7kNjZZ1v54UBHzukx8MjNPPKZ9fApk%2Be7apki%2F7e4FdTe81reWcGp2zjSntmb%2BCx1o2u9cWnONq06307N7gzPWBy4iJFVHFzN9FdESvNL%2Fgvu0szElC0vp40%2ByUvsJ6kizhzj1yAQNNX%2BkKVKffyF0qQJupEP%2BP27aFJs43YSoTFqsTyeThVZnSrkz1EgrgBRwF5TS9guY%2FMO2%2FxskGOqUBThl9a0lAwoyLNPJ9CNsyKVQcJQqOsl%2FnsS9arWVjEpKhjvnO1F4BmO03mrQFVFmOlxoYHl277VfFRJ%2BX9tTkrsoZp9QDL7lvkOwrftd3BVVH%2B%2FtHheml7ig5VHAEkpRqoeQ%2BTMqfIi87DerpMN2jYrRgNsR96fd7C9pM0HlRAGQlpu%2B1QA6JZiog6mZNnTNSgprPyAQYZoKwk5qqy2ADsArb%2F5cv&X-Amz-Signature=c529e614c3edf1981d9c173db9a278e5e5a4e52ed51ab767fd01848e0cd3f709&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IFBULLB%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T150611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQDQpUq7wUiOvFr2Au63%2B5rVurqixVztqrdPMPp%2FOqoJPQIgHetMFw%2FVEx27LefGI%2BYLfBvXJPTdreU%2FWPp5JaVwKlsq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDPZV%2Fg8XQxXtjLnaUircAyKH24jTZS%2BMlMx3ww09Vg84Jsx24jgjlR2yov0MI8fqajDlo0Q753YzhfcqHlKQLk3IFAYUfCqzXCnqBmOkVTjVV83xf%2BNQ%2FxbbmvJVGTiyaP%2F%2FYHKcy9CrykXDNiU0XfEFBpnuUyiIu%2BKGIEp6KDR6FgKZ1Rmno8rvGSp%2B66d3cWdGktIexpskGB2lSkFcDFtVe%2Bocp8YHo58x0dKV5wExobdFttJFmTx5JspoAjYED%2Bd3RcxlMh4IgrbQRVE9lPSu7%2Bo0wS7CzJlUsgn9HACPlxjcPaxf5%2B1SR1AqLVG0ToTkOitc5CVbIz7LT1N2MdqrJ33TVae8%2BPMczE%2FCSz%2BxUOKac7nOVVtWaCRaRtEiLKaAigi2DVB9YCMBltk7ck4L5UcPje508ir%2B3irUZiocQhFtpb9AZTuBLyzHnZAD2OOqB7kNjZZ1v54UBHzukx8MjNPPKZ9fApk%2Be7apki%2F7e4FdTe81reWcGp2zjSntmb%2BCx1o2u9cWnONq06307N7gzPWBy4iJFVHFzN9FdESvNL%2Fgvu0szElC0vp40%2ByUvsJ6kizhzj1yAQNNX%2BkKVKffyF0qQJupEP%2BP27aFJs43YSoTFqsTyeThVZnSrkz1EgrgBRwF5TS9guY%2FMO2%2FxskGOqUBThl9a0lAwoyLNPJ9CNsyKVQcJQqOsl%2FnsS9arWVjEpKhjvnO1F4BmO03mrQFVFmOlxoYHl277VfFRJ%2BX9tTkrsoZp9QDL7lvkOwrftd3BVVH%2B%2FtHheml7ig5VHAEkpRqoeQ%2BTMqfIi87DerpMN2jYrRgNsR96fd7C9pM0HlRAGQlpu%2B1QA6JZiog6mZNnTNSgprPyAQYZoKwk5qqy2ADsArb%2F5cv&X-Amz-Signature=b33b679c2ba1719dad7b83306e31813fe9ad6417b234501588ba73f517c1df99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

