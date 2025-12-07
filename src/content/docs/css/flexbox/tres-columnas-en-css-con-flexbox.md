---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DMKJRGE%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T165219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6smt7K2SNLkRfVygA5w2cA1Qd6oZ75MnuOGz7yscz4QIgOHnCsCVfv34WdFgA7m9NmOqYDgXkgTVOoyOVTAkuBYQqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGF%2Bx84eUmYbe%2FmoLyrcA5pM8K%2BXBmLjslQ3zeM%2F05ybdmzHvyaXJZUF%2F3WSQXUBwcb7y1s3eDPTOZno1CDmeQyxX94u6cTvvatG2FWgAB0%2BL6V70VOZu5ktOQy9WReA2ROby3SzndqD6Uis8EGvOIicLtE0sWc2IYqnFm0sgbPvVB%2BvCZnsJQRs2iL5tPX4%2BvPI4D3SRg8PamL8OLdnGHgk8tcIu15VfH6%2Fts%2BawKBdQFX183mQ2MOJ%2FaLfjC1%2BUd%2FvZKZ06ppK8qUZa9sU6Kne04VSkdCztI8gBJ01ODUhUmgHWuWTzj0nk82ULogfrRq1vBAGukrsx3YqUyYm1RVb8Ddy2yAO5j3eh08OSZtCSmiPGCGeyTwQ70lNHaT5unEv1hK9phu5pMkfyzpY5xCA%2BB9hFSd%2BbCku4r02zptHemYFwSZzuKEqxrOZnvmk8r0rAlmjhgb6HrhZoMHOtqFiiYfRmCotR4VMQBW47d%2FmOkZ6PvgymK1EyrcWYWHFJTSbbppCUitjooe1kQlNb4VeT6ZKMkR%2BW2rk28hGgJrce%2FwDReSkCLHGPL4VSK%2Bt%2FjZ5xfuJDrvTDQlczmwFRRFsIpotYAqqOOMz3WnLRBtZ7tDpPapWvwHsS4kj9OItdfGNC2TqV7VHAKMMMOq11skGOqUBgui%2BvLpl4tLiStN0GZ0i2BDoMXXCiAmklFzlniKaybCEZQ3H2kVkQ4mHoxs3rO1Z%2F%2F10a75c2hnmr%2B8XXEFr7kHm1lHk2Z2y%2B%2F3TLLsslrkDC8dFt57b9%2FQxThBsc7itET4eq2i661lzqbVuY1ohLt%2B048gQbmWshrWF80quRlvSTmClp15ZkesyPidouS4GPjZwtlmPTGO4sLr0o69gQzZyMkWE&X-Amz-Signature=452c4129521fd266c38c777260f72078ddbff33403ab6fd6613a3729260f5192&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DMKJRGE%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T165219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6smt7K2SNLkRfVygA5w2cA1Qd6oZ75MnuOGz7yscz4QIgOHnCsCVfv34WdFgA7m9NmOqYDgXkgTVOoyOVTAkuBYQqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGF%2Bx84eUmYbe%2FmoLyrcA5pM8K%2BXBmLjslQ3zeM%2F05ybdmzHvyaXJZUF%2F3WSQXUBwcb7y1s3eDPTOZno1CDmeQyxX94u6cTvvatG2FWgAB0%2BL6V70VOZu5ktOQy9WReA2ROby3SzndqD6Uis8EGvOIicLtE0sWc2IYqnFm0sgbPvVB%2BvCZnsJQRs2iL5tPX4%2BvPI4D3SRg8PamL8OLdnGHgk8tcIu15VfH6%2Fts%2BawKBdQFX183mQ2MOJ%2FaLfjC1%2BUd%2FvZKZ06ppK8qUZa9sU6Kne04VSkdCztI8gBJ01ODUhUmgHWuWTzj0nk82ULogfrRq1vBAGukrsx3YqUyYm1RVb8Ddy2yAO5j3eh08OSZtCSmiPGCGeyTwQ70lNHaT5unEv1hK9phu5pMkfyzpY5xCA%2BB9hFSd%2BbCku4r02zptHemYFwSZzuKEqxrOZnvmk8r0rAlmjhgb6HrhZoMHOtqFiiYfRmCotR4VMQBW47d%2FmOkZ6PvgymK1EyrcWYWHFJTSbbppCUitjooe1kQlNb4VeT6ZKMkR%2BW2rk28hGgJrce%2FwDReSkCLHGPL4VSK%2Bt%2FjZ5xfuJDrvTDQlczmwFRRFsIpotYAqqOOMz3WnLRBtZ7tDpPapWvwHsS4kj9OItdfGNC2TqV7VHAKMMMOq11skGOqUBgui%2BvLpl4tLiStN0GZ0i2BDoMXXCiAmklFzlniKaybCEZQ3H2kVkQ4mHoxs3rO1Z%2F%2F10a75c2hnmr%2B8XXEFr7kHm1lHk2Z2y%2B%2F3TLLsslrkDC8dFt57b9%2FQxThBsc7itET4eq2i661lzqbVuY1ohLt%2B048gQbmWshrWF80quRlvSTmClp15ZkesyPidouS4GPjZwtlmPTGO4sLr0o69gQzZyMkWE&X-Amz-Signature=80e6dfad032006671f4b56814e2cc4801509ab3e7db6ccfac4b1a21d60e2b095&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

