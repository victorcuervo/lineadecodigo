---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XTEUAL2%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T023626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEljXuchBFi4LAduImCZAlYZg%2BR05twN9hDkRokbpvE3AiBvs9bSKiYjZuLjRo3AslL30NszvpW%2F6oFfRa6wTtjqoyr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMslOC9JHVnZrPCIHRKtwDJeTRXTbe%2BAWPOHvuO7FlQ0tXA9%2BHhgjhT3G1rN8qWzpovDU8bGYQfLWpn80m%2FbHrwzNAJGtZjGPZ5egofDIBZmczZ%2FeYzLA0Fnclm5MmceVDHIh11SH7omeQFv%2BWxBqA6FNfIKkOJYdp2kFzgLcjuKtYtG6k16BwKTl%2BeHXHpSjNUe33O4xG5pEbJEG4qasM8jY46SiK%2BP%2B%2FKfdNcO5Vm5hOzZzElSm3NTYc3b%2F9qUZpxX3y34lGgFyTKRxISoO4lCijo4ykvMtM%2Bg18aniAx3WUL9QFg8ZoJsR9ty8yC830WEDSV1vI75oKNWND%2FVy6I0buwzoDDb97G2VkRilMfZS1Y3vAYkIJMt7lgmhjQ0Dy2HenOBgiQxaUs2QQm1i5zh9yH0C0cXf2hoZkKcJPXKoMfHk%2FGA44kNI8OpgR97GEe41u5YkuVjGNv3lCkWq7MZyDMbyLo6qKP%2FkyY84P0asB7z7AtFLrWkJt7NZV7%2Fe1kkTm1o3oGKvsrYpIdDazTsWc%2BhI7qZJMbbU%2FbREHGhUt9h4TMV%2BJ1FMm8hBV%2FxKAAc2EA1Sc1wULfa%2Boc6Fr4xGQFY3dXtmnoGq4%2FH3h%2Bq%2BOvVqdA%2Bhe%2FviDCvU5wEefPF2Zowc9JhJ3hrkwtIzIyQY6pgFwPRQS4BvTNGcewp4YbzybLUIElL1klDJUnP6eInYPBHdocQDYlcVN42mcNiBjrQ5tVXcB9ThW2pft9p0MqBBGvbPqDW7w491qrl5l7WE4x%2F14jYaOdUvhH8MEQYtrCBNA%2BGY9KHj9gzZ7MXzZ8XywIQ5t5d1q3JtAfpVgmIc%2BW2o%2BxkgQELUJ%2BQV%2F6YR2U4LrdBJzM2Ln6iU7EnhjENMiev6r1%2Bbp&X-Amz-Signature=fe860f7fbadc7e305ee05c830e454aae7bb3be6b3206c9e47f6f0733c86ac683&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XTEUAL2%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T023626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEljXuchBFi4LAduImCZAlYZg%2BR05twN9hDkRokbpvE3AiBvs9bSKiYjZuLjRo3AslL30NszvpW%2F6oFfRa6wTtjqoyr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMslOC9JHVnZrPCIHRKtwDJeTRXTbe%2BAWPOHvuO7FlQ0tXA9%2BHhgjhT3G1rN8qWzpovDU8bGYQfLWpn80m%2FbHrwzNAJGtZjGPZ5egofDIBZmczZ%2FeYzLA0Fnclm5MmceVDHIh11SH7omeQFv%2BWxBqA6FNfIKkOJYdp2kFzgLcjuKtYtG6k16BwKTl%2BeHXHpSjNUe33O4xG5pEbJEG4qasM8jY46SiK%2BP%2B%2FKfdNcO5Vm5hOzZzElSm3NTYc3b%2F9qUZpxX3y34lGgFyTKRxISoO4lCijo4ykvMtM%2Bg18aniAx3WUL9QFg8ZoJsR9ty8yC830WEDSV1vI75oKNWND%2FVy6I0buwzoDDb97G2VkRilMfZS1Y3vAYkIJMt7lgmhjQ0Dy2HenOBgiQxaUs2QQm1i5zh9yH0C0cXf2hoZkKcJPXKoMfHk%2FGA44kNI8OpgR97GEe41u5YkuVjGNv3lCkWq7MZyDMbyLo6qKP%2FkyY84P0asB7z7AtFLrWkJt7NZV7%2Fe1kkTm1o3oGKvsrYpIdDazTsWc%2BhI7qZJMbbU%2FbREHGhUt9h4TMV%2BJ1FMm8hBV%2FxKAAc2EA1Sc1wULfa%2Boc6Fr4xGQFY3dXtmnoGq4%2FH3h%2Bq%2BOvVqdA%2Bhe%2FviDCvU5wEefPF2Zowc9JhJ3hrkwtIzIyQY6pgFwPRQS4BvTNGcewp4YbzybLUIElL1klDJUnP6eInYPBHdocQDYlcVN42mcNiBjrQ5tVXcB9ThW2pft9p0MqBBGvbPqDW7w491qrl5l7WE4x%2F14jYaOdUvhH8MEQYtrCBNA%2BGY9KHj9gzZ7MXzZ8XywIQ5t5d1q3JtAfpVgmIc%2BW2o%2BxkgQELUJ%2BQV%2F6YR2U4LrdBJzM2Ln6iU7EnhjENMiev6r1%2Bbp&X-Amz-Signature=1801e4877e8128c75c99472ced422513d31caeb0b72463ed422abb8df7b97987&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

