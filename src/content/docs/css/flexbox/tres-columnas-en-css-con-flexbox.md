---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUDRVREA%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T171609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCeTPkNIDrzt1NR9hoL9rK8YwBFQOkDL6IzP4qwNfqNvAIgcCZyV3tW7L%2F9eCoGMRDUIZa4YYfKXksBQMXhd%2Brn2kIq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDLqtEOP9f7NYO8g3AircA9%2B48cvLqLzSI74eWc5QDn0w%2Bi9xlftXBUJV3mj%2Fgtu4s9FXphQQ%2FtOWcF%2BKnCVbCUXImSdjjJS%2B%2FrQn4VjfHUlfNPNhXGsWPSKNxxwLcNy8G1zaBmESgybZM6b1UHdVGw6Dmi5q0Jq%2FKtK6WlFBnZBwif2bPzZl15RRkMHzjmQmeWRvnL3tmQbwFujHUsGtSpttN4rdPkSBMX4KLkpc%2FJmG99Cuvol17m5%2BCxW8f%2FP7eyE6kboodO%2Bwo7%2FBCgZFoKhUSLtJgO%2BBzLAOxanwIFsg6ZoMMRRWrWic6unuejGT69VHmMpiN5nGxFhwxbKnuKODvTCNB%2FJjiTY3DTw1mcwRnfkBk4IeRMefKBuI0eZm7%2FXLWdbfJVtyATZuTgzFnUVOYyQ4ZMAhuD%2FEFsqwmriOJSN58BOYezcbXCaL4kTzJ12qQU2bJdAhKcdbr29fP6KChtZYqh4sc0DjF5KNts3%2FLU8ePH6tYKIj4J2D8IqzRkahVPiBwFCXy9vRmBgtrrfx054QyimfYc8vi6%2FUUvQJuHC4VF32nNYM53tJ8PtC8fsQKo6GstndMFCwIlmV3kXf4Prb4opWKDUr8qpefa%2FWSRmtYi7laBDB4nGi08%2FlKwt1iXbB73V04x%2FIMK36xskGOqUBLA2og%2FAzKt1E0jscSvum32IEfs4%2BJZ%2FHCAPw6oFrY%2BQNosB9hDFqA33xVnTX9hFFuomN2jhFKkMX0N9iXAIwolW3MPnCQwjyTQXixtNmuEskYu1lgoYdh3brlzsqBWG6TlDCnZtMl%2FdH%2F5PM7N5DjOYz4AaSstuzrx9GhKx61STyGeC8M400jkbE3qeSMw0PEPEvrZAKTr0CpNZ9SnxmVSrRycuF&X-Amz-Signature=fbfbac09b5100242641139049f751f8e3d3f4f177da153a5345c41e8b6cdc2e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUDRVREA%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T171609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCeTPkNIDrzt1NR9hoL9rK8YwBFQOkDL6IzP4qwNfqNvAIgcCZyV3tW7L%2F9eCoGMRDUIZa4YYfKXksBQMXhd%2Brn2kIq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDLqtEOP9f7NYO8g3AircA9%2B48cvLqLzSI74eWc5QDn0w%2Bi9xlftXBUJV3mj%2Fgtu4s9FXphQQ%2FtOWcF%2BKnCVbCUXImSdjjJS%2B%2FrQn4VjfHUlfNPNhXGsWPSKNxxwLcNy8G1zaBmESgybZM6b1UHdVGw6Dmi5q0Jq%2FKtK6WlFBnZBwif2bPzZl15RRkMHzjmQmeWRvnL3tmQbwFujHUsGtSpttN4rdPkSBMX4KLkpc%2FJmG99Cuvol17m5%2BCxW8f%2FP7eyE6kboodO%2Bwo7%2FBCgZFoKhUSLtJgO%2BBzLAOxanwIFsg6ZoMMRRWrWic6unuejGT69VHmMpiN5nGxFhwxbKnuKODvTCNB%2FJjiTY3DTw1mcwRnfkBk4IeRMefKBuI0eZm7%2FXLWdbfJVtyATZuTgzFnUVOYyQ4ZMAhuD%2FEFsqwmriOJSN58BOYezcbXCaL4kTzJ12qQU2bJdAhKcdbr29fP6KChtZYqh4sc0DjF5KNts3%2FLU8ePH6tYKIj4J2D8IqzRkahVPiBwFCXy9vRmBgtrrfx054QyimfYc8vi6%2FUUvQJuHC4VF32nNYM53tJ8PtC8fsQKo6GstndMFCwIlmV3kXf4Prb4opWKDUr8qpefa%2FWSRmtYi7laBDB4nGi08%2FlKwt1iXbB73V04x%2FIMK36xskGOqUBLA2og%2FAzKt1E0jscSvum32IEfs4%2BJZ%2FHCAPw6oFrY%2BQNosB9hDFqA33xVnTX9hFFuomN2jhFKkMX0N9iXAIwolW3MPnCQwjyTQXixtNmuEskYu1lgoYdh3brlzsqBWG6TlDCnZtMl%2FdH%2F5PM7N5DjOYz4AaSstuzrx9GhKx61STyGeC8M400jkbE3qeSMw0PEPEvrZAKTr0CpNZ9SnxmVSrRycuF&X-Amz-Signature=6541311ad97c01e2df39c46fd771e4c54160f333142b3334d901321e4a7804a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

