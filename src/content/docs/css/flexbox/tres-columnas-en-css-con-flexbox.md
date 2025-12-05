---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SR4PKNCZ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T235148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAmX4JJ6expdDM9lDuHbLMaWGqQW32njecBZtwQfveZxAiEAsL9e2J0NsuPd%2FFA4HpNrqtz8t78scjfrHyOGridfEOwq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDP5yD6jnGN1Nyry3WircA5AG8IaA%2Fe3AwdSOHqbeencaLIvJUFKqO%2Bz0tqGkzcyRNQzt33fNev2FCwG9Jokw7gXUERc3sUfcAdnAX5dFP5FMI%2FIfbb9Ac46Z%2By5E7zmplw9tdegDFOunhgOLSE8d3LlQ%2Fl6fwro1pKunxaqIsA0gJpRUMyFNSWZl71xEHUIlVvENixBY%2Fg092PfkYLlc%2Byu%2B5BdnRuPO1Gf8GR6FvPg1Cz3yqR%2BaAlz89V6X%2BxsdJEyKKKL8jpCsqa%2F%2BVpAap5dGAuiLV%2F78ER9cXUFjZkQ8y7QPMLvXxj8fUFGjKGw7M%2B%2BlfYn05Gjw08lERLoKXoKgwxd5msCG9sQHzC43UV%2F0R3kOPlULcEOUhSS1eUpYN90j15uQtRAZdLfHiiSS5V6Kww9KGswqHtgP4sOCX7iYodBV1iFUky8neAX%2B0TBnyF%2BAXFb2fDeWn1RsPyWohF%2ByY2%2FKgn58E7BTD9NEFc8FdtyaNGbOzWfNghyNPflOSGgPfieZ5P9XUfcQxtiYpb2PA6CdcKcuw1AerZf3rJuagjSzYgHiICoJmhpsfMjOuLxh8fU37HGbQaCqKCUpJ63bHJL4H7Yzy5%2BrRk%2BH6ODeFzJXF0Rg%2FDnZdlKE%2BSwZq1F1JysRVZE6PONnMK7GzckGOqUB2Rs6Gde7swT1NTdUfRwcYNhk4ZkAg5uygtOaDboFJ5iG%2FnnkJqHG1%2BkG7nuU1PiSTQUysdmfDwT%2FoxOL0X51kkASQbkuJiJRuAlfFd9z%2BCqefquIu2MGdRnCMsCRA4JzNbLeJ6wYshAN6A0nbKKY9FTbbLnVQtndONQLr6H5HSuElI2wb2gKx1PvnbylpcH9ZteLBzem57%2BFocd0I2n00ZqqgNZQ&X-Amz-Signature=a78afb154d807a022bf0365eea80481252c87bf04f184d8b1ac4be4df158b2af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SR4PKNCZ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T235148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAmX4JJ6expdDM9lDuHbLMaWGqQW32njecBZtwQfveZxAiEAsL9e2J0NsuPd%2FFA4HpNrqtz8t78scjfrHyOGridfEOwq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDP5yD6jnGN1Nyry3WircA5AG8IaA%2Fe3AwdSOHqbeencaLIvJUFKqO%2Bz0tqGkzcyRNQzt33fNev2FCwG9Jokw7gXUERc3sUfcAdnAX5dFP5FMI%2FIfbb9Ac46Z%2By5E7zmplw9tdegDFOunhgOLSE8d3LlQ%2Fl6fwro1pKunxaqIsA0gJpRUMyFNSWZl71xEHUIlVvENixBY%2Fg092PfkYLlc%2Byu%2B5BdnRuPO1Gf8GR6FvPg1Cz3yqR%2BaAlz89V6X%2BxsdJEyKKKL8jpCsqa%2F%2BVpAap5dGAuiLV%2F78ER9cXUFjZkQ8y7QPMLvXxj8fUFGjKGw7M%2B%2BlfYn05Gjw08lERLoKXoKgwxd5msCG9sQHzC43UV%2F0R3kOPlULcEOUhSS1eUpYN90j15uQtRAZdLfHiiSS5V6Kww9KGswqHtgP4sOCX7iYodBV1iFUky8neAX%2B0TBnyF%2BAXFb2fDeWn1RsPyWohF%2ByY2%2FKgn58E7BTD9NEFc8FdtyaNGbOzWfNghyNPflOSGgPfieZ5P9XUfcQxtiYpb2PA6CdcKcuw1AerZf3rJuagjSzYgHiICoJmhpsfMjOuLxh8fU37HGbQaCqKCUpJ63bHJL4H7Yzy5%2BrRk%2BH6ODeFzJXF0Rg%2FDnZdlKE%2BSwZq1F1JysRVZE6PONnMK7GzckGOqUB2Rs6Gde7swT1NTdUfRwcYNhk4ZkAg5uygtOaDboFJ5iG%2FnnkJqHG1%2BkG7nuU1PiSTQUysdmfDwT%2FoxOL0X51kkASQbkuJiJRuAlfFd9z%2BCqefquIu2MGdRnCMsCRA4JzNbLeJ6wYshAN6A0nbKKY9FTbbLnVQtndONQLr6H5HSuElI2wb2gKx1PvnbylpcH9ZteLBzem57%2BFocd0I2n00ZqqgNZQ&X-Amz-Signature=bdd03e222ebb69657a030b534f329661badaaeed59881961b70efe988a8a1367&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

