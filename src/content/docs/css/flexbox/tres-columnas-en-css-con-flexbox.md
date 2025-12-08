---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XY3H2X26%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T200915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICOJKvhzUcRa%2FrJMpUCftA4eMbrbPouv%2B%2BY6VrHKWwq6AiEAkMJbj2G66WBBsENkXMqrrJbcoOkwK6CayPJ6dnNP6AQqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNbV7hnus2loI3cyHSrcA81fYCCMXo8A6rdzqFR8j4N8X4cdKq7f9LdQEDX1A30MCE85cz5hOvR0IHhZb4k7hY%2F2SnHhC6%2FYto58e%2F3rzz4MWi68y6VUCKvttb22R%2FdyetFA2JddEEFBBgfRAspXoyybqtOPSzxkqlpJrImwZsOKxfX31RC3NGgkDvi3BGtT0JWbKJRotRDvSzf4OB4u39%2BgFCGQZaPrap8sA9Pxe8DthXXLS%2BRI4uYE6H8xmxbOHi0y1sYCN91i76Fg7lCa5Qoq3yrGsrmsPVOg58XiBbhgirCEUTRPpYXn%2FK3hBWrqv%2F3oXF%2FjAngfKjL8czVEN99HfUsmQmFP3Ey9yHnZkHeK09PHjiJ%2BoY4BIkWMJJCekSAQ%2BO4EpM%2Fn0vzH0s3Uz4ezMdHtyZvi3fpw9I%2BN5FmzRcP%2Bl69zGm%2FbYIKVHGIrdvcX1KMziq5UCKOjM%2FIA39zxb0qd4mqi4YOswRy3OyA4Wc3EpjvNPYk8qstg7%2ByJAXRcDYTHcLjFUHucMRIswFG%2FlZNwz5zD5z3ayl50YyyxlmGNNY6koxxOeBR5S30vZx6LMdfz2iQk9Sw5yrt2bD%2Fexsl7wgmAM8K3WHE%2B053fjo%2BsR9EGq61CIycqYi6as%2FxGiDhEWQrAMDlRMMfc3MkGOqUBMsUmJQ8BHxalFHbPAukd%2BblpEUkce4K6rpvK6mQqSCF69zwuDJ2QZYkKI6WKex9Xh15JDk%2B8ID68yD%2FhDC4slG3yQ4acj49myhFbeTVxu613wTpTPs3CUnCGOYWoyVGV7RBDsn8vCitpsLwzTfo1nBMpXwHpITLYlpDIYJzYw5RuLSBmMaN819r2QKKyoVGawNQkvVOQeBQVVR8vhhJAtQNgICD2&X-Amz-Signature=27903f7f83949f86a05efcfae532b0553d73bedd0765a1dbab0ebe4de8ff255f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XY3H2X26%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T200915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICOJKvhzUcRa%2FrJMpUCftA4eMbrbPouv%2B%2BY6VrHKWwq6AiEAkMJbj2G66WBBsENkXMqrrJbcoOkwK6CayPJ6dnNP6AQqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNbV7hnus2loI3cyHSrcA81fYCCMXo8A6rdzqFR8j4N8X4cdKq7f9LdQEDX1A30MCE85cz5hOvR0IHhZb4k7hY%2F2SnHhC6%2FYto58e%2F3rzz4MWi68y6VUCKvttb22R%2FdyetFA2JddEEFBBgfRAspXoyybqtOPSzxkqlpJrImwZsOKxfX31RC3NGgkDvi3BGtT0JWbKJRotRDvSzf4OB4u39%2BgFCGQZaPrap8sA9Pxe8DthXXLS%2BRI4uYE6H8xmxbOHi0y1sYCN91i76Fg7lCa5Qoq3yrGsrmsPVOg58XiBbhgirCEUTRPpYXn%2FK3hBWrqv%2F3oXF%2FjAngfKjL8czVEN99HfUsmQmFP3Ey9yHnZkHeK09PHjiJ%2BoY4BIkWMJJCekSAQ%2BO4EpM%2Fn0vzH0s3Uz4ezMdHtyZvi3fpw9I%2BN5FmzRcP%2Bl69zGm%2FbYIKVHGIrdvcX1KMziq5UCKOjM%2FIA39zxb0qd4mqi4YOswRy3OyA4Wc3EpjvNPYk8qstg7%2ByJAXRcDYTHcLjFUHucMRIswFG%2FlZNwz5zD5z3ayl50YyyxlmGNNY6koxxOeBR5S30vZx6LMdfz2iQk9Sw5yrt2bD%2Fexsl7wgmAM8K3WHE%2B053fjo%2BsR9EGq61CIycqYi6as%2FxGiDhEWQrAMDlRMMfc3MkGOqUBMsUmJQ8BHxalFHbPAukd%2BblpEUkce4K6rpvK6mQqSCF69zwuDJ2QZYkKI6WKex9Xh15JDk%2B8ID68yD%2FhDC4slG3yQ4acj49myhFbeTVxu613wTpTPs3CUnCGOYWoyVGV7RBDsn8vCitpsLwzTfo1nBMpXwHpITLYlpDIYJzYw5RuLSBmMaN819r2QKKyoVGawNQkvVOQeBQVVR8vhhJAtQNgICD2&X-Amz-Signature=dc0004de484bed5c8abe752a6be8ad5cd779b235761c3c155a8702b8c06b8a64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

