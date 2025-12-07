---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTHIAO6S%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T224837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5lM4IE5CvGxo%2B0dCzy%2B2ebx839MM861LM11yENLJOuAIgQ5dekJuL232GDEB3wUfrl84cbnCoZWpES6cY0fnZzNkqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIG2dLPsXUuWs6CCbCrcA2owF6jfgXZ0RAUOBGGYAgHWsG%2BAfjfMqkMf6bev%2BDD9Q3rmRDnoXEb0%2F6QFxIk99aiItRwQrq%2B0FbqZ3nZcLtWDECr%2FIc6YMyCL5aE2os6Qe9HXgZ5uH%2B03LIJiNnf6Xcm2oE6GIBEQiH%2FHzHc5OQLZITpuV8JLEUG2Zqn8F3UATqQX7g8u6WvnuEteyknZV%2B1uSRoasdBbWYljXN%2F%2FgYpQmISSoFKc5NCTbAyMSYEhhBs6cz26vbNwOq4%2BXMjoF0lKPEBvS9NBGUawiviKpoDHD6ySUI3u5z2nE0LS8TQCypVv%2FB0iEFLOKIIsd528%2BduwlQe2R6UUyXtVcfB4Sd6W2jQhlO3ZJHXBA90H%2BT7LdNcdVXv8eooU5ECqolpIOWA3Hv8NEq0DoyjjBDM5NEOK0iBbGTL%2BK19VCF37CuVEzZMZqMgazdb4Lc61yjaaVDBqkZSE0BCVFKCZtkwOncIKNyEJOja5koVunyG7abuCtIM1dLTpWv6pUpMatqPT82qHqYjcm%2BGumpqId8QKGsQvp7G%2FYL%2BEhkI%2Fyzduv3OhcCLUBxB8hDjuGijJ1ZlzVgtXjlJuTRYU7RPv%2BVv5enF0G6tG2mebw%2BS5%2BjHM7xJrpP4Cuz0%2FxYwkrdpDML2F2MkGOqUBpeaJbvvLimeFJZQulgihYXddy8cmvkY6tLnHEh3hWGJHH1wzyc%2BlIPq1l8Ucoj6CMf0zFZPFgSU7MNFSxfSah45r%2B4cvjwpolvRZCx2oa80PiRyCzSKNnFi0hCndpbhspZd4faeqjY7nRY%2FjikPSEWas7mcNZzxGQYIiVNcc%2F0oIwoMlwzcEVRWPDfcApe3caCfBJwK4rWTGYtPYW0c1MNdKvSPG&X-Amz-Signature=d0d814f47624e7a38b2b3df78b235f86eaef392481e77444a9ea4bbb1bb67521&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTHIAO6S%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T224837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5lM4IE5CvGxo%2B0dCzy%2B2ebx839MM861LM11yENLJOuAIgQ5dekJuL232GDEB3wUfrl84cbnCoZWpES6cY0fnZzNkqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIG2dLPsXUuWs6CCbCrcA2owF6jfgXZ0RAUOBGGYAgHWsG%2BAfjfMqkMf6bev%2BDD9Q3rmRDnoXEb0%2F6QFxIk99aiItRwQrq%2B0FbqZ3nZcLtWDECr%2FIc6YMyCL5aE2os6Qe9HXgZ5uH%2B03LIJiNnf6Xcm2oE6GIBEQiH%2FHzHc5OQLZITpuV8JLEUG2Zqn8F3UATqQX7g8u6WvnuEteyknZV%2B1uSRoasdBbWYljXN%2F%2FgYpQmISSoFKc5NCTbAyMSYEhhBs6cz26vbNwOq4%2BXMjoF0lKPEBvS9NBGUawiviKpoDHD6ySUI3u5z2nE0LS8TQCypVv%2FB0iEFLOKIIsd528%2BduwlQe2R6UUyXtVcfB4Sd6W2jQhlO3ZJHXBA90H%2BT7LdNcdVXv8eooU5ECqolpIOWA3Hv8NEq0DoyjjBDM5NEOK0iBbGTL%2BK19VCF37CuVEzZMZqMgazdb4Lc61yjaaVDBqkZSE0BCVFKCZtkwOncIKNyEJOja5koVunyG7abuCtIM1dLTpWv6pUpMatqPT82qHqYjcm%2BGumpqId8QKGsQvp7G%2FYL%2BEhkI%2Fyzduv3OhcCLUBxB8hDjuGijJ1ZlzVgtXjlJuTRYU7RPv%2BVv5enF0G6tG2mebw%2BS5%2BjHM7xJrpP4Cuz0%2FxYwkrdpDML2F2MkGOqUBpeaJbvvLimeFJZQulgihYXddy8cmvkY6tLnHEh3hWGJHH1wzyc%2BlIPq1l8Ucoj6CMf0zFZPFgSU7MNFSxfSah45r%2B4cvjwpolvRZCx2oa80PiRyCzSKNnFi0hCndpbhspZd4faeqjY7nRY%2FjikPSEWas7mcNZzxGQYIiVNcc%2F0oIwoMlwzcEVRWPDfcApe3caCfBJwK4rWTGYtPYW0c1MNdKvSPG&X-Amz-Signature=b32bc85e1e3ab753ce00a7d7e71c1622854766ab931c7dbd21ad46e752b0f8f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

