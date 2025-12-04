---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JNOJBMU%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T075250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQDioz8b%2FekzPB6bQOSbhBPsTH2AqKERmSwBIahSVbB90AIgVcYcJPmD%2BJidRzJBl6gLKtsBMcmcQ%2B4wxlk1%2BanSG0Iq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDOgvxh9KvS27zNQpByrcA3zK%2Bz8%2BDjDONN8lpnxpiLj53d%2BS8BrG65SKsczPUKNzMI0cild5i%2BYicv9HVR6S59vJZya1cAU3DAOpIx7PXYmw8wmQFxRoXgpk7Mk%2F9cjUCrwfzQnP2SHKBeGKWSQvtoRLWAWQ%2FanuBgZxyq2h8%2BdOw%2Fa4dkZuJBvlVLA4qAQgd41hP4nhtUCfNTrKliLuFeH6FVPkcOzZaMg8Z9Tjug%2BzKk4mCc6eh7VNWVzBPG5NAjKHCJ81MRHpHk%2B7v75X50hEaDD8%2BzaSZMRozZqfLIFIGCGsmvrLrAwslp%2FORq7%2BuE%2FahNdvvfRUU%2BPmbjtfZ8Mm%2BewCw4MwvsAXxvF8Ls9F2FLxWkFGe3xM2pBxJa7iMvU09pgSTkdoaWmTxjqxxHW6R5w8uql%2B%2Bic2LGSDJFtQp9Tg2OoM4fIctn8TJybHEFSZMRUQw%2BVhDSwDUbFVHu4kNKESo25lH16CZkLwoe%2B9l7%2BTjtCZW7ZWxzBzdUN%2BcdTWN9J1xGlGSRI4kGiX6hb7a7WdgvKr%2BLQ40sbYvZ6uOEdK%2Bnb4EajuKCrJdxbIVis2sYO8CaIS23fA5XmeYQmf8vvtkGSj8Y%2Btft77oEBc1BAIdrUZ39Zv%2FicZ0pvq1ET56tUfCBGvX2%2BeMNbnxMkGOqUBkw7McK%2Boa9i9jfUQtRxwva9WPGvULiLNUWH9lLfzfY4lbJ8gPARXcVxeta04xEx1N9fWeMEDilbOXfFjbVK58ftgHXlWLgMYS%2BjnocZ5lMF%2FJsawJUiX3X7tO%2FfSaD5lED2Xto2fZfmlBjBv3gnpy%2FZEWEs85mlrkvdEd7UNZMYkWYADhXz5kibOiNMVB4yEa591dOwjDiZ9KH8hpsXY96gJMSY5&X-Amz-Signature=5710df85e740ddf2c32b4ec1fa8d1b7127dfffc80a4b76767274429353b7d2e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JNOJBMU%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T075250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQDioz8b%2FekzPB6bQOSbhBPsTH2AqKERmSwBIahSVbB90AIgVcYcJPmD%2BJidRzJBl6gLKtsBMcmcQ%2B4wxlk1%2BanSG0Iq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDOgvxh9KvS27zNQpByrcA3zK%2Bz8%2BDjDONN8lpnxpiLj53d%2BS8BrG65SKsczPUKNzMI0cild5i%2BYicv9HVR6S59vJZya1cAU3DAOpIx7PXYmw8wmQFxRoXgpk7Mk%2F9cjUCrwfzQnP2SHKBeGKWSQvtoRLWAWQ%2FanuBgZxyq2h8%2BdOw%2Fa4dkZuJBvlVLA4qAQgd41hP4nhtUCfNTrKliLuFeH6FVPkcOzZaMg8Z9Tjug%2BzKk4mCc6eh7VNWVzBPG5NAjKHCJ81MRHpHk%2B7v75X50hEaDD8%2BzaSZMRozZqfLIFIGCGsmvrLrAwslp%2FORq7%2BuE%2FahNdvvfRUU%2BPmbjtfZ8Mm%2BewCw4MwvsAXxvF8Ls9F2FLxWkFGe3xM2pBxJa7iMvU09pgSTkdoaWmTxjqxxHW6R5w8uql%2B%2Bic2LGSDJFtQp9Tg2OoM4fIctn8TJybHEFSZMRUQw%2BVhDSwDUbFVHu4kNKESo25lH16CZkLwoe%2B9l7%2BTjtCZW7ZWxzBzdUN%2BcdTWN9J1xGlGSRI4kGiX6hb7a7WdgvKr%2BLQ40sbYvZ6uOEdK%2Bnb4EajuKCrJdxbIVis2sYO8CaIS23fA5XmeYQmf8vvtkGSj8Y%2Btft77oEBc1BAIdrUZ39Zv%2FicZ0pvq1ET56tUfCBGvX2%2BeMNbnxMkGOqUBkw7McK%2Boa9i9jfUQtRxwva9WPGvULiLNUWH9lLfzfY4lbJ8gPARXcVxeta04xEx1N9fWeMEDilbOXfFjbVK58ftgHXlWLgMYS%2BjnocZ5lMF%2FJsawJUiX3X7tO%2FfSaD5lED2Xto2fZfmlBjBv3gnpy%2FZEWEs85mlrkvdEd7UNZMYkWYADhXz5kibOiNMVB4yEa591dOwjDiZ9KH8hpsXY96gJMSY5&X-Amz-Signature=af9b87686e753d8aa4ae623ff3be68d6e652f0ed487ce5e17d2a038ac873b687&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

