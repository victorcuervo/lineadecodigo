---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2UMY3XM%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T194047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC5n4PndlbbSXkKXqvc7FT0qRV039%2BalH1n472BT8hBoAiBkCZThR5apywM1oxReHDTN2i4VvDy5i9weeFGyZMP0uiqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMp%2BgGu9wSSr0tf3wIKtwDi9KyB0rm7IvB%2FDFH8N95atm8y%2FLPqgfML8b35R0TIDpNc598WfmSxzfM5gtC1S2ABK4KjIR%2BhLvr4sjSYly6KDl00mxqte%2FKkLltxCjC9xBfCmy%2B2DQyqxNlMB3NZLyoJ%2B44PhyhjcGIUqLXJ6h%2FYWb5vPhol%2FlqL7vJByYqQVix%2FABYNt8wsNMx5RGoqoMLRjkTeqG2F4HRbcLCO5DDwgHyvkrUtmK%2FlEt9TC7kvzJWsMMicLw77ZNs18o%2BpUARNQWqkejqrsdppdFYealqgOFox%2FYzBX77TBflCWEck638sAH%2BheqbRAWB1%2Bx5RUxFsLzIQ7RXh%2F9zAsOSiQVkbIyHvpz3Dva%2FJOdlVk6rJEkgt%2BYNlsScByZPoR1KUv7B5S2NoavTdYykxP0njI6PsP19MZfY7TSUfNjdetCSGlMgmKbir6oO%2F1j62Yv7YLiJ7iUu8LndozBukfCc%2FPi88ZMvP9PQotEB4gFn0TNHFCJFtnZKJgJER2Vu8UzVxqjGNzKtcIc4W18sMMAaoAc0hX0WUmV1HfS3DCe0TN26Bj5Hdon%2BXdCC3Db6Rig7wfcSs76I%2BRpmvpC0o5SO9tbtRDsxDIcFSMuMBWz2EfTvX7bExrrw2IMLrBeEjpkwganXyQY6pgFfIkSV14u3X22O1igxrFAiThreTzdbdiBqgiUdIzp6AMPj6swNF5uOWROIbHs2yNh%2F9kgXnVJLIqLr3ovWXeGXWBNtcYxsiq%2FlhW%2F85mA76Ayyxyl7PsQ53L%2BD77ZUljcJ2gDJPQDs52OShrFfXjwBSmBYdvueNDQYPev9WmXvbl0a%2BRgWu1x%2BeNhJdBOTuD2SjmC5jXE3WIUGNDY58nDGkgAEerkV&X-Amz-Signature=1587e5aee67f7c0f227405e8c5758a90fa27a0b569fd6a50f85f1980be02636d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2UMY3XM%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T194047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC5n4PndlbbSXkKXqvc7FT0qRV039%2BalH1n472BT8hBoAiBkCZThR5apywM1oxReHDTN2i4VvDy5i9weeFGyZMP0uiqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMp%2BgGu9wSSr0tf3wIKtwDi9KyB0rm7IvB%2FDFH8N95atm8y%2FLPqgfML8b35R0TIDpNc598WfmSxzfM5gtC1S2ABK4KjIR%2BhLvr4sjSYly6KDl00mxqte%2FKkLltxCjC9xBfCmy%2B2DQyqxNlMB3NZLyoJ%2B44PhyhjcGIUqLXJ6h%2FYWb5vPhol%2FlqL7vJByYqQVix%2FABYNt8wsNMx5RGoqoMLRjkTeqG2F4HRbcLCO5DDwgHyvkrUtmK%2FlEt9TC7kvzJWsMMicLw77ZNs18o%2BpUARNQWqkejqrsdppdFYealqgOFox%2FYzBX77TBflCWEck638sAH%2BheqbRAWB1%2Bx5RUxFsLzIQ7RXh%2F9zAsOSiQVkbIyHvpz3Dva%2FJOdlVk6rJEkgt%2BYNlsScByZPoR1KUv7B5S2NoavTdYykxP0njI6PsP19MZfY7TSUfNjdetCSGlMgmKbir6oO%2F1j62Yv7YLiJ7iUu8LndozBukfCc%2FPi88ZMvP9PQotEB4gFn0TNHFCJFtnZKJgJER2Vu8UzVxqjGNzKtcIc4W18sMMAaoAc0hX0WUmV1HfS3DCe0TN26Bj5Hdon%2BXdCC3Db6Rig7wfcSs76I%2BRpmvpC0o5SO9tbtRDsxDIcFSMuMBWz2EfTvX7bExrrw2IMLrBeEjpkwganXyQY6pgFfIkSV14u3X22O1igxrFAiThreTzdbdiBqgiUdIzp6AMPj6swNF5uOWROIbHs2yNh%2F9kgXnVJLIqLr3ovWXeGXWBNtcYxsiq%2FlhW%2F85mA76Ayyxyl7PsQ53L%2BD77ZUljcJ2gDJPQDs52OShrFfXjwBSmBYdvueNDQYPev9WmXvbl0a%2BRgWu1x%2BeNhJdBOTuD2SjmC5jXE3WIUGNDY58nDGkgAEerkV&X-Amz-Signature=0401b41bf218d0fe7301222aa55ea0d368d35e199bcaecec1569cd76a0b835b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

