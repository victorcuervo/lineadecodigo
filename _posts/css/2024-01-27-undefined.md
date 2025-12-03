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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JGO267V%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T064023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIB32KRTlaLuMKWSCthJniaLM05475lUBDtJ7O0S0wnaOAiAiGTCVi3RVMGaj7qkpDa18T1Jv2VFZRBsRhoI2a3xNDSr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMk%2BYHCZlEpBwOU%2FUEKtwDgQlkejEeNPruZGDsnEXNhLGcdqU4ZW4kbRzimsgNaxcAcFgngO%2FDZvFv3Afxsge2R7acuMJPBuGsGS3ID1sR62kgSJOWSzx%2B0BigfcZ8ygJnT6LsXr45FsKmH6woRe%2BifIfFKy8ANeaGWcEBGC%2Fo%2Fo5pJ2LvoUB4qQ0WlfefBctkDozKVCDtt6paZq1%2Bxd8lJjbNneN4w9QIpcGtsf1DQV5Df0LCHZNmVP8t5QUGY1dzL0Oh9kqfOzPDC0C0jeoyeM8A79hAk9fEs0WppGsSLldeJj%2FQNCfq8OsF1ftKcTQw8YRPNFyrj7d%2F%2BOcTJ9O0nxK%2B0sOirNIDgxVGN4ljixb43Y%2BS1%2F96Vh8ZpC7nwarLnixn%2B%2B2R0%2FUpYKiZ3dKVBHZPvWUVw9Yi1GCsEhOsEJjJp0oLsNC7NEKxB6RiW2rPo9RC0GvJGuiPPrj9Fj7NhsrkT29cDdRU0kUs%2Bfy8NTgMP%2B7G812oUUowl7ACdU38%2B1O7vtjwo7mhYrXrEX%2FRF2i9k8A9NH1Xj9l%2FhqmIrVlKdGZG3KlzL1UORdtF3WFAfWLuJy9p0O7oTtctNkr%2FCe9N0U%2FOXAka326Go8lXtijLlD5mvrLntoA3igrh2TFAfksp%2BQcnDdTUpwswh5u%2FyQY6pgEy3eOG5X4nw0a%2FPCUlbFHzgXa4aT%2FIYVyJKaN4tw4jMaZiqKb4zdjAd3LULB9LjCuAq4G4tls053tKRa48L81D6o54ic5J3VzOO49fe0XjbhRdQgM96M%2BHYGVQz5LZ5uunTEmG7a%2FKT%2FsWM7m5nL7pt5UQeAdWEBgtl%2FJnjw3KwZOYGiEwvsCHIjLh74sgGprGY6BJl4zeqzt19DE5oP0FbFOJI5xZ&X-Amz-Signature=812be411f77032fd4ed93ad4c29b04920af3d97b608e72aea1de1f3872204709&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JGO267V%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T064023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIB32KRTlaLuMKWSCthJniaLM05475lUBDtJ7O0S0wnaOAiAiGTCVi3RVMGaj7qkpDa18T1Jv2VFZRBsRhoI2a3xNDSr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMk%2BYHCZlEpBwOU%2FUEKtwDgQlkejEeNPruZGDsnEXNhLGcdqU4ZW4kbRzimsgNaxcAcFgngO%2FDZvFv3Afxsge2R7acuMJPBuGsGS3ID1sR62kgSJOWSzx%2B0BigfcZ8ygJnT6LsXr45FsKmH6woRe%2BifIfFKy8ANeaGWcEBGC%2Fo%2Fo5pJ2LvoUB4qQ0WlfefBctkDozKVCDtt6paZq1%2Bxd8lJjbNneN4w9QIpcGtsf1DQV5Df0LCHZNmVP8t5QUGY1dzL0Oh9kqfOzPDC0C0jeoyeM8A79hAk9fEs0WppGsSLldeJj%2FQNCfq8OsF1ftKcTQw8YRPNFyrj7d%2F%2BOcTJ9O0nxK%2B0sOirNIDgxVGN4ljixb43Y%2BS1%2F96Vh8ZpC7nwarLnixn%2B%2B2R0%2FUpYKiZ3dKVBHZPvWUVw9Yi1GCsEhOsEJjJp0oLsNC7NEKxB6RiW2rPo9RC0GvJGuiPPrj9Fj7NhsrkT29cDdRU0kUs%2Bfy8NTgMP%2B7G812oUUowl7ACdU38%2B1O7vtjwo7mhYrXrEX%2FRF2i9k8A9NH1Xj9l%2FhqmIrVlKdGZG3KlzL1UORdtF3WFAfWLuJy9p0O7oTtctNkr%2FCe9N0U%2FOXAka326Go8lXtijLlD5mvrLntoA3igrh2TFAfksp%2BQcnDdTUpwswh5u%2FyQY6pgEy3eOG5X4nw0a%2FPCUlbFHzgXa4aT%2FIYVyJKaN4tw4jMaZiqKb4zdjAd3LULB9LjCuAq4G4tls053tKRa48L81D6o54ic5J3VzOO49fe0XjbhRdQgM96M%2BHYGVQz5LZ5uunTEmG7a%2FKT%2FsWM7m5nL7pt5UQeAdWEBgtl%2FJnjw3KwZOYGiEwvsCHIjLh74sgGprGY6BJl4zeqzt19DE5oP0FbFOJI5xZ&X-Amz-Signature=6c61773733c233ddf8ef48b63a47aabad98f04923e84702d29fa9750ed234bb7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

