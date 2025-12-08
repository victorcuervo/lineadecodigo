---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OVH2QD4%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T205712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNIG9lNm6HwGU5jL3NbZVyvZdw%2BX%2Bc4QWEscMzrtsP7wIgDFBx0z7hmKDGvDYom%2FKn9EyN4foEaiXwTJXWtQqRgSsqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGwo%2Biw9Ukavrp5IjCrcA6WonEuzJ5ly%2BMPhd50p4o0EwVxxrfi7Ik6ZDCGm2jkXEe%2B%2B%2FHb72pqRh7uycvBBV4bol9Be%2BLILFpUWbQgIT7jIECjBggwoHOaGAh%2BWRgUvc6zAadYU8%2FTTykiyID7yWhrX%2B2%2F3xVTvR1O6f1TK0FcBybsnr9dRbnv8%2B0yIsGsvZXr69NhPAQdwzdwTTywns8NnlpOgwP9r%2BnLlOwJLOYVp8WyX7HHUqAusHVW0N0oTsJ58jNd7q%2FU%2B%2FAj4P3o0Y3xICAHNgHqM1ZOC9IVIqdlf0KVJ7ehhPOV738QKuP4OQsrOSW0tcvz%2FOsQJvHoc4d1FnxSFOOHpE8IcY86N50ssJE3Z9leVbWVlSWi1PGSAfApRe7P3Vb%2BQO%2FOlY5IHBhusmKAjmVyYpnLoK%2BLC0ivuPLHHIu%2BNG6vYFCHi3ezPQ0uKZVmI%2FQbtce%2Fii5%2FUijBOeOngZiSpYlMP0SaZfEvNF4XwFtyJ0c9%2Fb0%2F1zOfLtHFTc1BodaQlp2TqP6o0Ej%2FXKxofv9ZuSsssk0EYP%2FBe1eOXgllhfyg6Uw2%2Fg42gadO3ltvKtE5WPDXE58DPxSF1yz3qVpDM7Mvy8d%2BTgmHxiTnIeeUkaBPbNTkFjWoTvNrTJQtLuwudHVOpMNXc3MkGOqUBTokQ55HHKhno9xeFJTcdyLPOJQY6A4bfOwbvMCLZCTvBO5YlgmfIyjxxt7N3jTbRmFHBFeSYztubejcrHkx3F5dYgpJLgK76sEE0NJl4EGobUpa91CFImUBpdw449KAZFk%2FNtO3cI%2FywHoPfmhrLnxPkXfVHX3UTRNVhl8zV2eIqG6Cwe%2FTvWVVHLizY6vhOXjVCUfd6PPTVpyNiN8NPbVrIlPtE&X-Amz-Signature=5e94c108ea966cee555851d3e9e8a63188ff553299b5a1fcda8be94633d44af5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OVH2QD4%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T205712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNIG9lNm6HwGU5jL3NbZVyvZdw%2BX%2Bc4QWEscMzrtsP7wIgDFBx0z7hmKDGvDYom%2FKn9EyN4foEaiXwTJXWtQqRgSsqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGwo%2Biw9Ukavrp5IjCrcA6WonEuzJ5ly%2BMPhd50p4o0EwVxxrfi7Ik6ZDCGm2jkXEe%2B%2B%2FHb72pqRh7uycvBBV4bol9Be%2BLILFpUWbQgIT7jIECjBggwoHOaGAh%2BWRgUvc6zAadYU8%2FTTykiyID7yWhrX%2B2%2F3xVTvR1O6f1TK0FcBybsnr9dRbnv8%2B0yIsGsvZXr69NhPAQdwzdwTTywns8NnlpOgwP9r%2BnLlOwJLOYVp8WyX7HHUqAusHVW0N0oTsJ58jNd7q%2FU%2B%2FAj4P3o0Y3xICAHNgHqM1ZOC9IVIqdlf0KVJ7ehhPOV738QKuP4OQsrOSW0tcvz%2FOsQJvHoc4d1FnxSFOOHpE8IcY86N50ssJE3Z9leVbWVlSWi1PGSAfApRe7P3Vb%2BQO%2FOlY5IHBhusmKAjmVyYpnLoK%2BLC0ivuPLHHIu%2BNG6vYFCHi3ezPQ0uKZVmI%2FQbtce%2Fii5%2FUijBOeOngZiSpYlMP0SaZfEvNF4XwFtyJ0c9%2Fb0%2F1zOfLtHFTc1BodaQlp2TqP6o0Ej%2FXKxofv9ZuSsssk0EYP%2FBe1eOXgllhfyg6Uw2%2Fg42gadO3ltvKtE5WPDXE58DPxSF1yz3qVpDM7Mvy8d%2BTgmHxiTnIeeUkaBPbNTkFjWoTvNrTJQtLuwudHVOpMNXc3MkGOqUBTokQ55HHKhno9xeFJTcdyLPOJQY6A4bfOwbvMCLZCTvBO5YlgmfIyjxxt7N3jTbRmFHBFeSYztubejcrHkx3F5dYgpJLgK76sEE0NJl4EGobUpa91CFImUBpdw449KAZFk%2FNtO3cI%2FywHoPfmhrLnxPkXfVHX3UTRNVhl8zV2eIqG6Cwe%2FTvWVVHLizY6vhOXjVCUfd6PPTVpyNiN8NPbVrIlPtE&X-Amz-Signature=f882adeb1bead8576fd9a7286d72745e7cfd421dc161e3e6bd9f6313b1b3b053&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

