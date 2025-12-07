---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVIHUP7D%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T032958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAVk8M1UvneOz4uB2l5gAvaxL5LL2yzUIOCnJi9ALwJ9AiEAvmfwqizcIVwTEDoorjpHMssR9OIZoFniNLGn2H7rff4qiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNyFHmgAT6OpI3PMRircA%2BmsnlBYSSBoApQZ32UxDwyIdVl44zhykkkwp136EEmAfCxHrbrkvNFIBdYc7hGodqmvPoQTsOrqDFhyagmxKCpKRrC%2FdbAzj99HsGRMc2ttmGrJJwieIbBvvK4Ej1JeShWh%2FM2gWj4IhJPx7PkJfO%2FU89CSxes1I7EuRrIf6XUz4osaJKkjRhZ4rHSmPoouP99rQ8trcH74MOxC5Ah6ozBVx2OoEXYfpXJIBxqq1ox4mRTDv2KUWfDbxs9HYiFGiDHQnR6Mt0mh%2BOFeNGpu0TIs5KfYEXkVmgBCjsyt0R0sdIaY9pWM81BpDtGl0LRG6PaglZcnbopV05mp3zThbNV6Q07CicX7FaRmxEmt99fLF7kagr7zBJByn%2FTMhhP7yEG4G6e1IbFOmAa%2F33GTTteX1L1E7hMVIRIuGh38Zc9AximnVXFbsDYxW2BNGGWufQnpAPSb5n2riG8h%2BtO5dwQI0IwIUQD%2FwLL7yVIiNJzOF33S%2B%2BXWuPdwYaqJDLimzHSirnZRsI0b9vA8ibBatljKuzDQ0WFr0mpLiP3RnZyNMC93fpW4DaItnls6YhLPN0VrOeQQojbIiCWNXvgJXHFbzljXkFaG%2F0KTvrE7q9nKm%2FoQytKo3K7hvpP%2BMPj90skGOqUBDg9jfa76fKOh%2FGRiNREOa3AU37M%2FZfHvATkfFFwwfdw2c5TUm0k7L%2BaO6pWZ6r14zPruERM5eQWPOi2CWl9ppIV35griANq2ZPb5j8zFi9i10mDHmN%2BsKzvt7vG19%2FiL8t5AW4egtbkm9I6WzOJ%2Bi36klBUDjVzO59nha%2Fa6o0qf6Q5Hb2kw1Z5w7xpzaTjiGirWd8FC5kzFj%2FE4yLum6gtlqm5f&X-Amz-Signature=a4ba645722c95201cd3811d6cc6857cf587dad24d02f820852527b0334c7870e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVIHUP7D%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T032958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAVk8M1UvneOz4uB2l5gAvaxL5LL2yzUIOCnJi9ALwJ9AiEAvmfwqizcIVwTEDoorjpHMssR9OIZoFniNLGn2H7rff4qiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNyFHmgAT6OpI3PMRircA%2BmsnlBYSSBoApQZ32UxDwyIdVl44zhykkkwp136EEmAfCxHrbrkvNFIBdYc7hGodqmvPoQTsOrqDFhyagmxKCpKRrC%2FdbAzj99HsGRMc2ttmGrJJwieIbBvvK4Ej1JeShWh%2FM2gWj4IhJPx7PkJfO%2FU89CSxes1I7EuRrIf6XUz4osaJKkjRhZ4rHSmPoouP99rQ8trcH74MOxC5Ah6ozBVx2OoEXYfpXJIBxqq1ox4mRTDv2KUWfDbxs9HYiFGiDHQnR6Mt0mh%2BOFeNGpu0TIs5KfYEXkVmgBCjsyt0R0sdIaY9pWM81BpDtGl0LRG6PaglZcnbopV05mp3zThbNV6Q07CicX7FaRmxEmt99fLF7kagr7zBJByn%2FTMhhP7yEG4G6e1IbFOmAa%2F33GTTteX1L1E7hMVIRIuGh38Zc9AximnVXFbsDYxW2BNGGWufQnpAPSb5n2riG8h%2BtO5dwQI0IwIUQD%2FwLL7yVIiNJzOF33S%2B%2BXWuPdwYaqJDLimzHSirnZRsI0b9vA8ibBatljKuzDQ0WFr0mpLiP3RnZyNMC93fpW4DaItnls6YhLPN0VrOeQQojbIiCWNXvgJXHFbzljXkFaG%2F0KTvrE7q9nKm%2FoQytKo3K7hvpP%2BMPj90skGOqUBDg9jfa76fKOh%2FGRiNREOa3AU37M%2FZfHvATkfFFwwfdw2c5TUm0k7L%2BaO6pWZ6r14zPruERM5eQWPOi2CWl9ppIV35griANq2ZPb5j8zFi9i10mDHmN%2BsKzvt7vG19%2FiL8t5AW4egtbkm9I6WzOJ%2Bi36klBUDjVzO59nha%2Fa6o0qf6Q5Hb2kw1Z5w7xpzaTjiGirWd8FC5kzFj%2FE4yLum6gtlqm5f&X-Amz-Signature=9f97748cdaf249f13df0589ed1476d058dbe8b809eeb7695c1bd405e4b9df19e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

