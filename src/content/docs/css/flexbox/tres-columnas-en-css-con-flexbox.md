---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DENTCIP%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T171447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGxK2MRFoqa3zIuBErssO6yJ%2BV4Xvbj68O8Q4d0y%2B2r7AiEAwGVvs2hfNNcvvj71NiwG1DFPmByIEN3cn3zQiH2vwSUq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDHOxxuNWaqJMASPtACrcA10V6BvicoBtlNBxEtcm7J7FHUWWJAQxSy1qK9AMInHpoBwqldG7y6aFEhI5itXCRjNUK5%2FNRoMGo0i3Lz8iNQbaVrQyV1dpAhtNsHKpZLNBGrzWVWSPlPnQK98d1%2BAqY4u3vr7yK4pDt093nTdF8S21cHGPaFsLdQHegPUIIoBCaW2qq1gnqtGTl9C3jkf0HsdMajmevMrATrtQkIIKKkkgNic8wL42o8Q9o5fOxuUSsyxajkevCslMVUfqSp6noNx7dcrJymtz7cT1NugfcuNbYCXXBjJLLgVw8XQhkTIfyIKV%2B%2FxlYzUVLP4kXNyziSeWcAWEoyeKC1QRY9co5Tu16CUir4Ins5oGtvh5SXHHobdQtXuWYwM061zT7iX9Nlw9XZCSvvH3zkBro9SOgwN6E87%2BkUWrJVbTQt8MoRHIooIZPa1xnZTUOGnc0J5JfoWwKolXvpu6teq0OL3S7FobCnnEjdCJPoAojn45a1aBVoCGnbao2RcTzqRSpIgNUvVf8AZ3c8KvbOtm4TNcsqUBBvNpP7CKXhCXUrq6TEFUxJP1qUF9ESJCKaTNKf97YR6VUfcgituiIbQDOVI7ujTSDa6LspUNOil8TJMDA4WpXvSL%2FyZEyk1s66AhMMX5xskGOqUBFosflyZFPksQPC4mbBo0bN0sYkKmrtay4%2FojWEUKVrXt4xcTfP7wnS1ftg1HY87Zfqn%2BHDK15b0ty3gQKGT3%2BW%2FYRUS%2FQqDMteMW%2F3BfL4p1roQboSeLubUzIL%2BCw9rtUe9mbUt0FSc%2BKmZXMSA1BTQ9yYXjThjTPrgLnEpHWQtuVHo4Shb4Vt62hb0VFQ%2BD%2BPtqDpHV7fXwXWhjEfAoIWDk9zTW&X-Amz-Signature=0654b1ec8a52f41f5da3adf1d5b9a1c9772434cae2df3dfcf81c7248bc89050a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DENTCIP%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T171447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGxK2MRFoqa3zIuBErssO6yJ%2BV4Xvbj68O8Q4d0y%2B2r7AiEAwGVvs2hfNNcvvj71NiwG1DFPmByIEN3cn3zQiH2vwSUq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDHOxxuNWaqJMASPtACrcA10V6BvicoBtlNBxEtcm7J7FHUWWJAQxSy1qK9AMInHpoBwqldG7y6aFEhI5itXCRjNUK5%2FNRoMGo0i3Lz8iNQbaVrQyV1dpAhtNsHKpZLNBGrzWVWSPlPnQK98d1%2BAqY4u3vr7yK4pDt093nTdF8S21cHGPaFsLdQHegPUIIoBCaW2qq1gnqtGTl9C3jkf0HsdMajmevMrATrtQkIIKKkkgNic8wL42o8Q9o5fOxuUSsyxajkevCslMVUfqSp6noNx7dcrJymtz7cT1NugfcuNbYCXXBjJLLgVw8XQhkTIfyIKV%2B%2FxlYzUVLP4kXNyziSeWcAWEoyeKC1QRY9co5Tu16CUir4Ins5oGtvh5SXHHobdQtXuWYwM061zT7iX9Nlw9XZCSvvH3zkBro9SOgwN6E87%2BkUWrJVbTQt8MoRHIooIZPa1xnZTUOGnc0J5JfoWwKolXvpu6teq0OL3S7FobCnnEjdCJPoAojn45a1aBVoCGnbao2RcTzqRSpIgNUvVf8AZ3c8KvbOtm4TNcsqUBBvNpP7CKXhCXUrq6TEFUxJP1qUF9ESJCKaTNKf97YR6VUfcgituiIbQDOVI7ujTSDa6LspUNOil8TJMDA4WpXvSL%2FyZEyk1s66AhMMX5xskGOqUBFosflyZFPksQPC4mbBo0bN0sYkKmrtay4%2FojWEUKVrXt4xcTfP7wnS1ftg1HY87Zfqn%2BHDK15b0ty3gQKGT3%2BW%2FYRUS%2FQqDMteMW%2F3BfL4p1roQboSeLubUzIL%2BCw9rtUe9mbUt0FSc%2BKmZXMSA1BTQ9yYXjThjTPrgLnEpHWQtuVHo4Shb4Vt62hb0VFQ%2BD%2BPtqDpHV7fXwXWhjEfAoIWDk9zTW&X-Amz-Signature=c99504306bb0974b75b6d05e8c3c3b880a6ad749194b379f7a8f1c018071d315&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

