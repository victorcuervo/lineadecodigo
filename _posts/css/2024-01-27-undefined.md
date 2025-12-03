---
layout: post
title: Tres Columnas en CSS con Flexbox
excerpt: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
categories: CSS
tags: [css flexbox]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YK2I6PV5%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T084307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJGMEQCIBnLxnATARGnJ7o129JvaUeb6l29fze9I1ZXemD6yHK4AiBBsRCipgL7MzjZ3MDeoZ25oIx3O8HAdqj0r8hkhnBjJCr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMIabITD2RH76upsPDKtwDMRTYAFUkwuFS6IwrmR83LKv%2FdW4A7Mw9NzaTLxlVu4Hs%2BmXOVT4aKOCuEJFaa%2FmEDKZlsanJ78KE4UOr7HIBrNpU29Qth48PBIaJ2uzKyt1yqrEsqlbqtajy6cQ25NVQKZyohtqoM%2Bct1%2FWqvWgl8VvG97SMNzxHQwSyzg98x%2FvKYKXeoqnXst0GxdNYbT64V3ZXG87zYTq9VTzkBpiKwGoKUbYPoWP%2Bcp4mWe7LPdog1WMlOfa%2FOlsB%2BDem8LU6iZtzSIHIhEsKugVWoqfr5JVPh3EBalqAIBbjOQF8BKrN9NmMzib6EW3b7kYPBuXBl1msGWmNkfu0UJzynm8Fp2UrOwohN0t1ktvk1JG6rI7mYQ%2BoEnBjsa2uZp4ZIxznJTwYewdyWuRL%2BCWPUDdNG7ECrvgobjJkqF769xVyHehYicNCVYkuZtsYnafblzFE6qd9jbDbgELqfHY9h8sPtJgRpvFQSdOPdwM%2F%2FdbGIWjV6FGjjO6Y2%2BmJD9YxY5XX4ZczXb4tHlmEENog31PEOTDLK5wUFKpHQEFWX4xcUOuLV%2B4AGHfmWpxC6bQ9hbSsA9fTJmDpvvwVuJnBi8QounYOK0D5pFmSShmcIbuCgfi%2BgPKTMR%2FSgQfAwtIwu9a%2FyQY6pgGJk7ceWgEnIZ2fH%2FZj2gQe6kB6gkbwVV1OsEjUvNvFPz1%2BzzMf%2B8UTqtCJs0ULYUXjrGdx%2FOjOBZSU58lVUUMLHvdJBm5ZFznlRHWspVf4L0KDnMjoqKEvBxvukSVIpw0AG%2F9DaUpX0KXnCn0n8JAvGcPoLfkZ9Tly8MnOt94PRc4oMwW2Dw1d57OyPHezS%2BMakaiLnZTDsL9%2FEsu0gQ0kjTofZliJ&X-Amz-Signature=9380aceb01ea4f015fda0495bea3efca92d303796fcca8f1890734b321373ee8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YK2I6PV5%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T084307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJGMEQCIBnLxnATARGnJ7o129JvaUeb6l29fze9I1ZXemD6yHK4AiBBsRCipgL7MzjZ3MDeoZ25oIx3O8HAdqj0r8hkhnBjJCr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMIabITD2RH76upsPDKtwDMRTYAFUkwuFS6IwrmR83LKv%2FdW4A7Mw9NzaTLxlVu4Hs%2BmXOVT4aKOCuEJFaa%2FmEDKZlsanJ78KE4UOr7HIBrNpU29Qth48PBIaJ2uzKyt1yqrEsqlbqtajy6cQ25NVQKZyohtqoM%2Bct1%2FWqvWgl8VvG97SMNzxHQwSyzg98x%2FvKYKXeoqnXst0GxdNYbT64V3ZXG87zYTq9VTzkBpiKwGoKUbYPoWP%2Bcp4mWe7LPdog1WMlOfa%2FOlsB%2BDem8LU6iZtzSIHIhEsKugVWoqfr5JVPh3EBalqAIBbjOQF8BKrN9NmMzib6EW3b7kYPBuXBl1msGWmNkfu0UJzynm8Fp2UrOwohN0t1ktvk1JG6rI7mYQ%2BoEnBjsa2uZp4ZIxznJTwYewdyWuRL%2BCWPUDdNG7ECrvgobjJkqF769xVyHehYicNCVYkuZtsYnafblzFE6qd9jbDbgELqfHY9h8sPtJgRpvFQSdOPdwM%2F%2FdbGIWjV6FGjjO6Y2%2BmJD9YxY5XX4ZczXb4tHlmEENog31PEOTDLK5wUFKpHQEFWX4xcUOuLV%2B4AGHfmWpxC6bQ9hbSsA9fTJmDpvvwVuJnBi8QounYOK0D5pFmSShmcIbuCgfi%2BgPKTMR%2FSgQfAwtIwu9a%2FyQY6pgGJk7ceWgEnIZ2fH%2FZj2gQe6kB6gkbwVV1OsEjUvNvFPz1%2BzzMf%2B8UTqtCJs0ULYUXjrGdx%2FOjOBZSU58lVUUMLHvdJBm5ZFznlRHWspVf4L0KDnMjoqKEvBxvukSVIpw0AG%2F9DaUpX0KXnCn0n8JAvGcPoLfkZ9Tly8MnOt94PRc4oMwW2Dw1d57OyPHezS%2BMakaiLnZTDsL9%2FEsu0gQ0kjTofZliJ&X-Amz-Signature=fa91a2be367cf45ff6b5ca266bf1870d85a68b09658ed595090f2b6717451440&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

