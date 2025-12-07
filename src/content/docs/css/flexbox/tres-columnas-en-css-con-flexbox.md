---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNKF24UW%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T100134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfBbdKOUp7mwNDaUFl3rVq7Px4xYeUVHkEqRNYZsbGVgIgIc5icY4RoWskG%2B3v31TxzvFm%2BNL2RMKh53c4pVRU3xIqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCyXUkb7Nl%2BKmSxZKircA7BM2wDbWd1SY8roD1%2FlV8e95xt2qoyBc1f%2FRgO%2FLFGuqrAZhAOhh1d3VzKoJ39rJfeNXi%2B7Q1gf%2B6E%2FtJop7kQwDSFbSsHb0%2FbZxAX4hKaO31h8GEaIn%2BqTqn9FNmUXkjqlKKC1zwpuI9uh%2ByLneq4XK%2FU6iP8s0F%2Bgc1w33lCWR1MVAZzAhKgZGABHyfuW6TRiAyQY8aIMjUxmwmYetTUwT4o5za%2BugK8LYF%2BfIr9PkrankZCwI%2BmdSCuhkD2npkIGoZ9z8ZIBJbs1GTI6jyREwDZohEjTITW%2Fu1gae7ql%2BdsTOxA%2FljgGmd6osyjOjkEUqd46Opoq7rsE4jm0N0T5lyQQTQsaptStpOx5eZBKO0eiUNKfc2zb5lqhMqmx8gb049YotVwqfKKrS%2FJl7Hv%2FRUAr7wIRcw3mxaZ%2Fzk5zockHnHcLU80tnE8jZMeERAG4jSQYEl0qYgWciWGq17UwkLD6aOgaWCY4w8DPNRbGujKsbQCp3Y77Q2lv0iC8YlbP%2FYdqNfXXS5fDW1qPfSu%2FRt1%2B7tGzx4CEPpWAtQMPfhKBYRjwXn%2Fj0kKQLi1omuGW5JbOHdnsO4akxrZP7EuZ3aLoGmELoRnNhp6Zmxn0OWDmM%2Bp0BrSfMI1%2FMLKZ1ckGOqUBNztiU2qUfOB2llGGRa%2B%2BJeC%2BAzzNIEqhk9RB0oTgDxVaCWxMqskZSwW3QEbXGrAS3aCVLwHanPl4hNlPhbNMmEX%2FCWTLR1Z7BvZgse6qu%2BoybTJu65HZNJy7A68aiAf1O1%2B%2FU1q5RIRyiExe3GPBPcLj9ZK1GIxD2zomSueTaViTueE1hBYEL%2FApOWRj3RQ5NFgmFqtUiB67gIqiFThIUxkwqoit&X-Amz-Signature=096e48c8b3ae5ded5cde357236ce52edf85fc5c447fc056f17d43a0e49d39d64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNKF24UW%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T100134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfBbdKOUp7mwNDaUFl3rVq7Px4xYeUVHkEqRNYZsbGVgIgIc5icY4RoWskG%2B3v31TxzvFm%2BNL2RMKh53c4pVRU3xIqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCyXUkb7Nl%2BKmSxZKircA7BM2wDbWd1SY8roD1%2FlV8e95xt2qoyBc1f%2FRgO%2FLFGuqrAZhAOhh1d3VzKoJ39rJfeNXi%2B7Q1gf%2B6E%2FtJop7kQwDSFbSsHb0%2FbZxAX4hKaO31h8GEaIn%2BqTqn9FNmUXkjqlKKC1zwpuI9uh%2ByLneq4XK%2FU6iP8s0F%2Bgc1w33lCWR1MVAZzAhKgZGABHyfuW6TRiAyQY8aIMjUxmwmYetTUwT4o5za%2BugK8LYF%2BfIr9PkrankZCwI%2BmdSCuhkD2npkIGoZ9z8ZIBJbs1GTI6jyREwDZohEjTITW%2Fu1gae7ql%2BdsTOxA%2FljgGmd6osyjOjkEUqd46Opoq7rsE4jm0N0T5lyQQTQsaptStpOx5eZBKO0eiUNKfc2zb5lqhMqmx8gb049YotVwqfKKrS%2FJl7Hv%2FRUAr7wIRcw3mxaZ%2Fzk5zockHnHcLU80tnE8jZMeERAG4jSQYEl0qYgWciWGq17UwkLD6aOgaWCY4w8DPNRbGujKsbQCp3Y77Q2lv0iC8YlbP%2FYdqNfXXS5fDW1qPfSu%2FRt1%2B7tGzx4CEPpWAtQMPfhKBYRjwXn%2Fj0kKQLi1omuGW5JbOHdnsO4akxrZP7EuZ3aLoGmELoRnNhp6Zmxn0OWDmM%2Bp0BrSfMI1%2FMLKZ1ckGOqUBNztiU2qUfOB2llGGRa%2B%2BJeC%2BAzzNIEqhk9RB0oTgDxVaCWxMqskZSwW3QEbXGrAS3aCVLwHanPl4hNlPhbNMmEX%2FCWTLR1Z7BvZgse6qu%2BoybTJu65HZNJy7A68aiAf1O1%2B%2FU1q5RIRyiExe3GPBPcLj9ZK1GIxD2zomSueTaViTueE1hBYEL%2FApOWRj3RQ5NFgmFqtUiB67gIqiFThIUxkwqoit&X-Amz-Signature=522a694eccaef17689475993b8d803a91ce1344f15d7446a930a52b5de3c222a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

