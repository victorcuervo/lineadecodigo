---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEFWPXKR%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T032232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWLhXArNje8nwVbU%2B7q8wsvd%2BkpVyj303lFpmAbVSsYgIgdL6fexLMhLNM048ZQCtETQyLk3vIZ0hQ3o3MtG9VlVIqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKVmt5Mg907Gbd3xkircA2sA%2BDNJ%2FtF3qj6%2BbXATNK8D5TUIkYefUIhpXA33GEBtwMUYXqRMCkA52MKZSlTKSnI8qjTFMeK0J0dUVdvYQJan%2FsotSlcp3mCQakdyxkgQRGP4IBa8QY2RhrF9XuoBIXSej0U54dMKXfcFZKN%2BnvD2FSQtBYOlaHARi%2FIbkYVAsMb28pOMaYSIe0LLU4%2BEOvbb8wVD%2Bbrvp94TwQub0LJpEYhXUqhxYjqbOS6fkuAWqMQd6bCB7%2FK3C0f5sAKHiy8u5QCVOytn8ptcJFYujKQYaIojikXTiP6GdeUxtfzRQwW1SqOgDJ7Y8TClales5jfSWwqBIr71WioVXNK9iTjHydfeOb2PQiQx%2FjIiXgQ6q2pDI7qZm0hPAiDDCgZZ4Lluc%2BwgXI3J9oKOmNwdfIzOBAeeJENjBXiyj%2BvrnJtGCkZdJ1ZPf59fUzYmkVgxebbaahLghdIPHoTxgLKO1R%2FUpjHaTEi%2BkVhM7LsEjVDajS0Z%2FfE05rmxtYudBlVqObAMaX6zSZiqKroQpZktxAxn1DXUKqwrfQAf8HSHGiIkC9y9I%2BUUTN%2Fg3orov2YskLv29DgI4Wn21JlCBaf%2FuOFxrUQl0HsmTj%2FUOPBDbdnnDHZOzRct566XWtwqMKPv2MkGOqUB2RQSHXVXvK3A9EVJ%2BjmhX20ezbyAispgpS5PwnN%2BVnUvKz67LP6%2FC5tTfq3vm0EjDzNF3wm5aYR6K81JkFI2vcW9xxlj7y4wJ%2FOiDIEbKmuledFxDTXJEF5zDCRxEibWFMXXjiRAFgr1oPcJEIzpkvtXgQKxBlQ87KziNLV6Ffe3pwrd07zVKGXhaWvK%2B27rFPu0GTSk%2BSGKp3c1JUuhK7UOLRlH&X-Amz-Signature=e2d14ef538688572676004d891deb8c0c5249d5217d2054c4ad5c87512979898&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEFWPXKR%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T032232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWLhXArNje8nwVbU%2B7q8wsvd%2BkpVyj303lFpmAbVSsYgIgdL6fexLMhLNM048ZQCtETQyLk3vIZ0hQ3o3MtG9VlVIqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKVmt5Mg907Gbd3xkircA2sA%2BDNJ%2FtF3qj6%2BbXATNK8D5TUIkYefUIhpXA33GEBtwMUYXqRMCkA52MKZSlTKSnI8qjTFMeK0J0dUVdvYQJan%2FsotSlcp3mCQakdyxkgQRGP4IBa8QY2RhrF9XuoBIXSej0U54dMKXfcFZKN%2BnvD2FSQtBYOlaHARi%2FIbkYVAsMb28pOMaYSIe0LLU4%2BEOvbb8wVD%2Bbrvp94TwQub0LJpEYhXUqhxYjqbOS6fkuAWqMQd6bCB7%2FK3C0f5sAKHiy8u5QCVOytn8ptcJFYujKQYaIojikXTiP6GdeUxtfzRQwW1SqOgDJ7Y8TClales5jfSWwqBIr71WioVXNK9iTjHydfeOb2PQiQx%2FjIiXgQ6q2pDI7qZm0hPAiDDCgZZ4Lluc%2BwgXI3J9oKOmNwdfIzOBAeeJENjBXiyj%2BvrnJtGCkZdJ1ZPf59fUzYmkVgxebbaahLghdIPHoTxgLKO1R%2FUpjHaTEi%2BkVhM7LsEjVDajS0Z%2FfE05rmxtYudBlVqObAMaX6zSZiqKroQpZktxAxn1DXUKqwrfQAf8HSHGiIkC9y9I%2BUUTN%2Fg3orov2YskLv29DgI4Wn21JlCBaf%2FuOFxrUQl0HsmTj%2FUOPBDbdnnDHZOzRct566XWtwqMKPv2MkGOqUB2RQSHXVXvK3A9EVJ%2BjmhX20ezbyAispgpS5PwnN%2BVnUvKz67LP6%2FC5tTfq3vm0EjDzNF3wm5aYR6K81JkFI2vcW9xxlj7y4wJ%2FOiDIEbKmuledFxDTXJEF5zDCRxEibWFMXXjiRAFgr1oPcJEIzpkvtXgQKxBlQ87KziNLV6Ffe3pwrd07zVKGXhaWvK%2B27rFPu0GTSk%2BSGKp3c1JUuhK7UOLRlH&X-Amz-Signature=42e75ffd4c480098fc06c0cc27d57c4fccd76041cb789bb4c71105d92d70b71b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

