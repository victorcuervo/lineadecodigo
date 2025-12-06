---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QNUNOSY%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T071603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4ef6MbNTg%2FmVSy4H0gRZVyFQDwwmwmKLwIfRqoyQ%2BuQIgBba0n96a18mFXmDHtlYe9bf97T7S0QxX67kOwr3KTpQq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDEgg%2Ble6SNq4SlCF8CrcA1TainJj1jcFcPW7HAvXa%2B1TbBzo3Tv9Px6Rrhwm2p8UF6%2FPrfK%2FarAo9R%2BCmzx7pVjfkDalWqG76rHOw%2F3dWTYdmh56SgUDU4q4khdxFb0HteAktYlxdvrL83BUab8jqpyt8ZmB2%2BdcidA62JQXalXWKzJPjpdkFQo%2Bp1oSo8cRSXlYDTb4yFMSpvk6sMO4FUYzzVu0VV1jrNztnAOn%2BQ5R%2BXdd6Hnwiccpu9JGfQNi%2FMbbG%2BPAEvvYG8S4p%2F1hHbzUdmY6dwqVAt9Yq8fIqNhdPWz%2BWFmUVxpJfrFjWG1ewopdvb%2FgQ7OwdPJIBYK%2Fj5595J2L%2FRIZ4Jl9r0rFsmFr88lmLNHC5yADbEbDM4npUYke5ffm8jKx3Mn8Y4LuEOEn3WobO295bxpQCIEExhQeomrF%2BDX7q7b%2FQZKaMZ2PUFYW%2BHOgt70KqT8nv%2FSOL2Q0uFnaVGkD%2FhNKPjAduMSSOZi3BOkpKGbksclnxOxbBJQvBc7UP%2B0gQeh7%2BRegQQY2RRnlYfwIJ%2FCDZScWC%2BL2T6GZd%2FVt2uGx7I8XnspTOA8b62MlDKpaTiSxy%2BIhFjGDG0t%2BqcKf5CPGbi7KFqFy41sAkiaK3XJ44ZQVoTXNKwn8I5PJ82SvN5SDMISfz8kGOqUBVZ4tHG7iFztN7eIwxv9P2%2F%2FSm9WDBqCWDhVgRJY9wa7XaPQcIVhqZFR6DhvYekLLfWKxJoQPKLNHctfCeLe9iFNfthc2tLXmGbdD2FXegn93Hydxgb5eDTrHt8VD6CgMHMxK7vfGJUmc9Ls3wDKUh%2Fs5urfJaSRhap6SB1kKF1fBbbPuP4LCY6h3C0WSaEdRPDTmI1N0m15wIcm%2F9U2JSXBORuVi&X-Amz-Signature=c9c6d85b05063122eb98eeb79f9b7e0b38139eee77a3bb99353a474f078a410d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QNUNOSY%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T071603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4ef6MbNTg%2FmVSy4H0gRZVyFQDwwmwmKLwIfRqoyQ%2BuQIgBba0n96a18mFXmDHtlYe9bf97T7S0QxX67kOwr3KTpQq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDEgg%2Ble6SNq4SlCF8CrcA1TainJj1jcFcPW7HAvXa%2B1TbBzo3Tv9Px6Rrhwm2p8UF6%2FPrfK%2FarAo9R%2BCmzx7pVjfkDalWqG76rHOw%2F3dWTYdmh56SgUDU4q4khdxFb0HteAktYlxdvrL83BUab8jqpyt8ZmB2%2BdcidA62JQXalXWKzJPjpdkFQo%2Bp1oSo8cRSXlYDTb4yFMSpvk6sMO4FUYzzVu0VV1jrNztnAOn%2BQ5R%2BXdd6Hnwiccpu9JGfQNi%2FMbbG%2BPAEvvYG8S4p%2F1hHbzUdmY6dwqVAt9Yq8fIqNhdPWz%2BWFmUVxpJfrFjWG1ewopdvb%2FgQ7OwdPJIBYK%2Fj5595J2L%2FRIZ4Jl9r0rFsmFr88lmLNHC5yADbEbDM4npUYke5ffm8jKx3Mn8Y4LuEOEn3WobO295bxpQCIEExhQeomrF%2BDX7q7b%2FQZKaMZ2PUFYW%2BHOgt70KqT8nv%2FSOL2Q0uFnaVGkD%2FhNKPjAduMSSOZi3BOkpKGbksclnxOxbBJQvBc7UP%2B0gQeh7%2BRegQQY2RRnlYfwIJ%2FCDZScWC%2BL2T6GZd%2FVt2uGx7I8XnspTOA8b62MlDKpaTiSxy%2BIhFjGDG0t%2BqcKf5CPGbi7KFqFy41sAkiaK3XJ44ZQVoTXNKwn8I5PJ82SvN5SDMISfz8kGOqUBVZ4tHG7iFztN7eIwxv9P2%2F%2FSm9WDBqCWDhVgRJY9wa7XaPQcIVhqZFR6DhvYekLLfWKxJoQPKLNHctfCeLe9iFNfthc2tLXmGbdD2FXegn93Hydxgb5eDTrHt8VD6CgMHMxK7vfGJUmc9Ls3wDKUh%2Fs5urfJaSRhap6SB1kKF1fBbbPuP4LCY6h3C0WSaEdRPDTmI1N0m15wIcm%2F9U2JSXBORuVi&X-Amz-Signature=48f07c7ee1772a5075934a7478616e269d2c09e395e5d5fe0aad69fa95439491&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

