---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVRDGPHQ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T215118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGPCjrFeMX9jHL4tKDhV2VZsn5HX3O45MFdnaN0Zk11MAiBl6xKFqN7ZfUGKeh9Q%2BaQvxkzxjOHmb%2BRqmxN7RDqyECr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMIntmQh9Jas2427QIKtwDOxxIUDkgKIYB1%2F0Ovqi2WrutAjoQbNMTO5qN6N89vHD0HlZB7YjZpq9QGidHeoGmc%2FkFCfuSIYskjYED%2FQEfVXybTV5KzGQw5lItutnhFRmaJauNU58aZltzGETZX2qsTNrhQnp%2BMf%2F7sfb0g2zlLGsTf3t8j2vAt7npMC%2FrFzKryfKLfOufRekzhqJ7UeCILkTdOeRttnZqOWWDnz195wH8oBS2uN3ACs28Org%2BnfLEj7%2BMcKYWsTTeLbHL3NSyEFiKRO0w6Wvn1dSQzkZQHSKhzBElCTTsvri5gcZ7mfiBEm2EswrFHpw2TOHyBedFG%2FJXhQixbaJs4InpKDPvQz8FCOhe03I4G%2FIzuh8F%2FRXRB8S%2FaSic6c7pQMiDLF71mmEH7UIho0B0qQZRjQmKfVN5MiS96V8w0mmJ2EEU%2FeC2RnvcBebPJ%2Fb2DGQSQ1fGzuTRGGEqHCdHVPZgu7bRSMmxuWPan2rl88yNX%2F8rT8ZlxEvks48Ne6mc%2B7QUYHWYwwUtmiVHxVmQtHc%2F84FzUnkOlWwNu2mx0WKZ%2FS3QZbKFGlZKvfu2NVHeun9VxacxcFLjK9a%2BiJHhgxKQCBRA%2Fahwh3GMuG2hnnpqiOXWcmGsW6UhcS7SM9GH2vwwpIzNyQY6pgGt9kpbp4%2FDw%2Fh7%2FKF6aSuLbXa5JoNHKR6hXVF6u1kXqo7ukPiVAvcX%2Byd2JdKWJqh1M0%2F%2FYeHrJ8zAifwtYK9IiWN70Badn%2F%2BvoHMpDifHZN0OfovoqdwlpoNYnCwtCeFzTDP%2BLsjpkaWgpxs9GOPaE7OhpI6dxerTs9G0ztd%2BMua6N2CcKcCdSvy2Ycv6NJ4vz%2Fsf8u31npeuuua4Qk9T60IX84k6&X-Amz-Signature=64c30df2e35c8ac25b999b73b7112952e7b60a7643ea35405e78c3209070088b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVRDGPHQ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T215118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGPCjrFeMX9jHL4tKDhV2VZsn5HX3O45MFdnaN0Zk11MAiBl6xKFqN7ZfUGKeh9Q%2BaQvxkzxjOHmb%2BRqmxN7RDqyECr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMIntmQh9Jas2427QIKtwDOxxIUDkgKIYB1%2F0Ovqi2WrutAjoQbNMTO5qN6N89vHD0HlZB7YjZpq9QGidHeoGmc%2FkFCfuSIYskjYED%2FQEfVXybTV5KzGQw5lItutnhFRmaJauNU58aZltzGETZX2qsTNrhQnp%2BMf%2F7sfb0g2zlLGsTf3t8j2vAt7npMC%2FrFzKryfKLfOufRekzhqJ7UeCILkTdOeRttnZqOWWDnz195wH8oBS2uN3ACs28Org%2BnfLEj7%2BMcKYWsTTeLbHL3NSyEFiKRO0w6Wvn1dSQzkZQHSKhzBElCTTsvri5gcZ7mfiBEm2EswrFHpw2TOHyBedFG%2FJXhQixbaJs4InpKDPvQz8FCOhe03I4G%2FIzuh8F%2FRXRB8S%2FaSic6c7pQMiDLF71mmEH7UIho0B0qQZRjQmKfVN5MiS96V8w0mmJ2EEU%2FeC2RnvcBebPJ%2Fb2DGQSQ1fGzuTRGGEqHCdHVPZgu7bRSMmxuWPan2rl88yNX%2F8rT8ZlxEvks48Ne6mc%2B7QUYHWYwwUtmiVHxVmQtHc%2F84FzUnkOlWwNu2mx0WKZ%2FS3QZbKFGlZKvfu2NVHeun9VxacxcFLjK9a%2BiJHhgxKQCBRA%2Fahwh3GMuG2hnnpqiOXWcmGsW6UhcS7SM9GH2vwwpIzNyQY6pgGt9kpbp4%2FDw%2Fh7%2FKF6aSuLbXa5JoNHKR6hXVF6u1kXqo7ukPiVAvcX%2Byd2JdKWJqh1M0%2F%2FYeHrJ8zAifwtYK9IiWN70Badn%2F%2BvoHMpDifHZN0OfovoqdwlpoNYnCwtCeFzTDP%2BLsjpkaWgpxs9GOPaE7OhpI6dxerTs9G0ztd%2BMua6N2CcKcCdSvy2Ycv6NJ4vz%2Fsf8u31npeuuua4Qk9T60IX84k6&X-Amz-Signature=acab83b6888c3b979d1273b69e3cf6c520c6a8127baeff89d0a4ab08f97404a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

