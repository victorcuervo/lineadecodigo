---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSNUJ6WE%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T170821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBLJntUOm1Ji9pOLu%2FZM8FS11ORbLDnftRwwe6hHpHavAiEAkPviqXW%2BH1fUg6KhWbOWL5%2BWnVS0szOHEQmX%2FGf%2Byegq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDKheSrQ%2BmCxcXBjb5CrcA1l7wWbgS7CydvN9zbB8XdoNBC2imCTIrtl%2FrqG%2F308axgPsu02Ul6dQF6TiBdXqFL5XHyb8VnvxlbIwWgpMpYOzKx%2FnFWbrKP7iNaZIqCt4F7AFBeeurJEr7yyH1rPalskTA0PoOWgnASbbe%2FTeundO%2FqbyLp%2FrJPZT6aPqDS5YgPSV%2BOs7Y1kdKo40k8YqJVAWY%2FlkOX7zTTillcNnT4lk01gWw2Z7pzuJS7p8kbzMoc0EMGBKK2wjERInbf6iz8SBjcvqAID4E1amPaoqjiZ7Xcm%2FyfgWMm%2FQLA7NLaeakaI2%2Fkc%2FWqDMnpmUKNwV9dTutLL5FiUNB%2FJ41m2VQz7NlmTirO4xwrQxFRC5%2F6OLgQUaiuSIX5TbtfuaDdo%2BCkupTbIUGaPzlVf0wO8dMSWofED7MPHa3Tb3VwPoxPMb2rJ5j8btvJWkFfWoVTMtlKHEkqvdWQoTdrOGz0f956aK4TEGv%2BdAnwjV2ZUVGo3OeNK2Ce1TmQ8XZZvMM0oEmWNowYc%2BwzW7yQ7t1SXkQv9KhzEgfR3tQGBHWtp9Avq5K69L9vmkM%2BB%2FWSkj4MKbBQ0%2BMlzX%2BTGuUKKi%2Fo%2BQWawVrS9ZruRN6utkiy7AxUgQHIOV9Mx03vMDxkFoMKz6xskGOqUBlt36fCM7WIE7tiZa9fFao7bqZZ3OJGsliaL5mvoZfVTljmys9lWZnwIEsocBZUGJGxWAwAlnb8phZyTAD%2BepdModtArHWQOc0ZoDe39ElXRFh9s5wxF2JwqqKK%2Fwl4kBs3Ceqe4GfJe1jR0mXz%2ByzLfq6Kx85QMjK%2F2FqhunplNDTE%2Fjc8%2BjWtbOq3AvwhNKwVdeDOmwatPEmK2L4tAf%2B4yzXuYD&X-Amz-Signature=c3d7938f7173013eac353ddac8375b72b3021dd620b35c0e73522fe6de5430c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSNUJ6WE%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T170821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBLJntUOm1Ji9pOLu%2FZM8FS11ORbLDnftRwwe6hHpHavAiEAkPviqXW%2BH1fUg6KhWbOWL5%2BWnVS0szOHEQmX%2FGf%2Byegq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDKheSrQ%2BmCxcXBjb5CrcA1l7wWbgS7CydvN9zbB8XdoNBC2imCTIrtl%2FrqG%2F308axgPsu02Ul6dQF6TiBdXqFL5XHyb8VnvxlbIwWgpMpYOzKx%2FnFWbrKP7iNaZIqCt4F7AFBeeurJEr7yyH1rPalskTA0PoOWgnASbbe%2FTeundO%2FqbyLp%2FrJPZT6aPqDS5YgPSV%2BOs7Y1kdKo40k8YqJVAWY%2FlkOX7zTTillcNnT4lk01gWw2Z7pzuJS7p8kbzMoc0EMGBKK2wjERInbf6iz8SBjcvqAID4E1amPaoqjiZ7Xcm%2FyfgWMm%2FQLA7NLaeakaI2%2Fkc%2FWqDMnpmUKNwV9dTutLL5FiUNB%2FJ41m2VQz7NlmTirO4xwrQxFRC5%2F6OLgQUaiuSIX5TbtfuaDdo%2BCkupTbIUGaPzlVf0wO8dMSWofED7MPHa3Tb3VwPoxPMb2rJ5j8btvJWkFfWoVTMtlKHEkqvdWQoTdrOGz0f956aK4TEGv%2BdAnwjV2ZUVGo3OeNK2Ce1TmQ8XZZvMM0oEmWNowYc%2BwzW7yQ7t1SXkQv9KhzEgfR3tQGBHWtp9Avq5K69L9vmkM%2BB%2FWSkj4MKbBQ0%2BMlzX%2BTGuUKKi%2Fo%2BQWawVrS9ZruRN6utkiy7AxUgQHIOV9Mx03vMDxkFoMKz6xskGOqUBlt36fCM7WIE7tiZa9fFao7bqZZ3OJGsliaL5mvoZfVTljmys9lWZnwIEsocBZUGJGxWAwAlnb8phZyTAD%2BepdModtArHWQOc0ZoDe39ElXRFh9s5wxF2JwqqKK%2Fwl4kBs3Ceqe4GfJe1jR0mXz%2ByzLfq6Kx85QMjK%2F2FqhunplNDTE%2Fjc8%2BjWtbOq3AvwhNKwVdeDOmwatPEmK2L4tAf%2B4yzXuYD&X-Amz-Signature=6dfefb6bf7ea0d5b5df8e0e4c9d55a6e7f1fbfe9dd4972544deebd51c51a900e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

