---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRI2NR6T%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T142942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDc4ZtkfgjsNNWqle%2B4yjXu7QtTqTaJVSASzJDcUEp6vgIgK6hbBW4wvyJJ2Qq0L2yq96yG240EcYxZTfk9a5EOAJMqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJGSzycEnNiGOwZcdSrcAzOXtiV4n94aDecZzqSvdb4AeIVnCSF3LSD40jASNM1sVESq9MNfH0IosfsK7n3SjAAdH3tc9u1HTxMPiFiYXaWVq6eVzrLy4L%2B2jOzmCGC%2BZBP%2BH7QWQ%2BOw6G5H4gYLTERWLpX%2Fbu%2F8ybpgohYs23rCHb8F1ZKJ6IQoOJPpfXMRRACyso2yQnjM4wTCLhI1Ahrk8XLEfEjJ%2BMNUi10zrE%2BzBEfMu19yBpA6M5OJG1DE5js2Cm11Vhq49rBRdT62gAvSwekPMseZr7Z%2FtzPwLV94bw9k83BbvvQPgz%2Bk26kyl5GcOCCGaM18IuHF8m0pTjSy267klhEuWYcCLNUOGKTgQ6pU%2FZ5mmE1rT8ihYa6p1tPGjHa1XckBDhkIGeo3IxvEQzBlTzwHehD5B26k4RZVro8KsA8T6KdherZuVQt6bmXXJATQ2AmQ%2Bi6wm%2FUyzYQzAC9mh1h9kPAqPA8eQq9CCEi00MaZZsYpnnxsdTHTt1nMRK4ggIlD5n7ZVoykWV0PHaBNoDN6MNK25Ml3DUanjzrLd0MNwCW2XlKlQqQ8kpH9xhM6X0%2FFCMYM3Mh81OPl6y%2FgfQBESInU3PE9jp%2F6118MFEBA988ygyVy2CJEYYArGeusfOY1cJgCMMSa1ckGOqUBdZJaDXalPLgcM7kSsE4q5Vx09LEtrS1UiVXS8wdKe%2BGDXFRApsTLTEScm5Zvg4jHgbPBlMZGR3Q%2BOoh5VbdBKeIxH3adgI%2B47K4tOVz02wsHQJgRpglcrEuv1SAAfuoCXyAsDofhCIQZW3Epc11sqhsodU3ocypADAFiXNSAdNNwF016gzFasnnjFJr47I3VgdnidSmUJ1eLwViccB50O3y2%2Biz2&X-Amz-Signature=d7380be55b30f0ceebda8edbbb80a0fd45e2a7e74288ba9df13a8ece78db05e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRI2NR6T%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T142942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDc4ZtkfgjsNNWqle%2B4yjXu7QtTqTaJVSASzJDcUEp6vgIgK6hbBW4wvyJJ2Qq0L2yq96yG240EcYxZTfk9a5EOAJMqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJGSzycEnNiGOwZcdSrcAzOXtiV4n94aDecZzqSvdb4AeIVnCSF3LSD40jASNM1sVESq9MNfH0IosfsK7n3SjAAdH3tc9u1HTxMPiFiYXaWVq6eVzrLy4L%2B2jOzmCGC%2BZBP%2BH7QWQ%2BOw6G5H4gYLTERWLpX%2Fbu%2F8ybpgohYs23rCHb8F1ZKJ6IQoOJPpfXMRRACyso2yQnjM4wTCLhI1Ahrk8XLEfEjJ%2BMNUi10zrE%2BzBEfMu19yBpA6M5OJG1DE5js2Cm11Vhq49rBRdT62gAvSwekPMseZr7Z%2FtzPwLV94bw9k83BbvvQPgz%2Bk26kyl5GcOCCGaM18IuHF8m0pTjSy267klhEuWYcCLNUOGKTgQ6pU%2FZ5mmE1rT8ihYa6p1tPGjHa1XckBDhkIGeo3IxvEQzBlTzwHehD5B26k4RZVro8KsA8T6KdherZuVQt6bmXXJATQ2AmQ%2Bi6wm%2FUyzYQzAC9mh1h9kPAqPA8eQq9CCEi00MaZZsYpnnxsdTHTt1nMRK4ggIlD5n7ZVoykWV0PHaBNoDN6MNK25Ml3DUanjzrLd0MNwCW2XlKlQqQ8kpH9xhM6X0%2FFCMYM3Mh81OPl6y%2FgfQBESInU3PE9jp%2F6118MFEBA988ygyVy2CJEYYArGeusfOY1cJgCMMSa1ckGOqUBdZJaDXalPLgcM7kSsE4q5Vx09LEtrS1UiVXS8wdKe%2BGDXFRApsTLTEScm5Zvg4jHgbPBlMZGR3Q%2BOoh5VbdBKeIxH3adgI%2B47K4tOVz02wsHQJgRpglcrEuv1SAAfuoCXyAsDofhCIQZW3Epc11sqhsodU3ocypADAFiXNSAdNNwF016gzFasnnjFJr47I3VgdnidSmUJ1eLwViccB50O3y2%2Biz2&X-Amz-Signature=708c65784b536d94808fa8a6b4c5ead787b10eba0bd744f0312917ee58335571&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

