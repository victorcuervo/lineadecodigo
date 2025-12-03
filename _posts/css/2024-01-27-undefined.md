---
layout: post
title: Tres Columnas en CSS con Flexbox
excerpt: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
categories: CSS
tags: [css flexbox]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WIKZIVD%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T051612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIAFxeHC5nBnhqbD5wZW0nj7oyUROlY3YJfRCmZlwnkupAiAeohkfC%2BSRPtPBbbnz113iyzE%2BYSWz1zlbY80DCvpxvCr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMO8ELjvZiD%2FSiPgrsKtwDkYKS0yQ%2Fwi0mv1YPO8Ol%2FVPW21ufqHx%2BC8x9lYhclg7WW1JeJyOrSIPITkxqEAC3Hobz4mI1khv10lyICZ0PEQ2sySHLM9bzfj6wTma5YEuzmm6FFxDmnt0vDTr94h2JY5bJX2Ln%2BRbsb3JXfAaRDj6%2Fmrad4CA4ywK%2Bp6I6wOw%2BXoga7PignKa2p5Ot%2F1yweeeD3B%2BkcOXYS99fPekezyavl8ZjtO6R6xZFW%2FZqi2vrkIO0dZWBETJ951HnrBO7Tl%2BFxuAJyXaeoKPE8%2F%2FZUxMg199pxMfIdfiUUpu1qOmlgLg0I3Jfk4x513k5wYXBo%2BBgkmSu53BR%2FF%2BvzyBy3yDOlWs36KhBfVKr81IG8Nz5ZYp96tc1C7tW1lr8keWAO7VrGMsBcLszzhc7N1atVIT7EVGNEg1f5eKQ2K4Gqzc6RI2Ozfeen2dtJNsOOrIzNjPtaj0iH%2BM6KqdDvEj5DmartFF3bipj4YmyTFhdY4Z27x4fyCYGO70k5JiDGK7DrvbZp464ASD2cavww%2FNYp0M4dkJVvulOzHkPER63JvWNv0XJBN9VXWZvqLjBeEQCkDYCmMuot6bRl59N3DcY3Qw0bRbGq4WUEjoZRdQvrGUGvDhvjFcyO8oHUlYwp6G%2ByQY6pgFDZ1RxCSsBTHcVBgHJFpYLvGIPGI%2FXRg6GGrcHpwi1J%2FotDn9vUc42MMuFNgQz6Jzyl4cQu5zq%2F6PR1afux9%2BXN%2FYkQOZDcecxKvrhlgtFCaAUZvhET4tetn3%2FM2YESD2j27qDszZjiC4v47vxCbyDTsev3KNBvdKOipjXIvZdaxjSzbY5xjk3mCZQOjQSOF%2BWRx1pJ5pBxCY6XeTdqG4u9raaYxDO&X-Amz-Signature=9f2ab751572e92c192ed003239df0d74df85538bb6595ed554dad3392ca355fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WIKZIVD%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T051612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIAFxeHC5nBnhqbD5wZW0nj7oyUROlY3YJfRCmZlwnkupAiAeohkfC%2BSRPtPBbbnz113iyzE%2BYSWz1zlbY80DCvpxvCr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMO8ELjvZiD%2FSiPgrsKtwDkYKS0yQ%2Fwi0mv1YPO8Ol%2FVPW21ufqHx%2BC8x9lYhclg7WW1JeJyOrSIPITkxqEAC3Hobz4mI1khv10lyICZ0PEQ2sySHLM9bzfj6wTma5YEuzmm6FFxDmnt0vDTr94h2JY5bJX2Ln%2BRbsb3JXfAaRDj6%2Fmrad4CA4ywK%2Bp6I6wOw%2BXoga7PignKa2p5Ot%2F1yweeeD3B%2BkcOXYS99fPekezyavl8ZjtO6R6xZFW%2FZqi2vrkIO0dZWBETJ951HnrBO7Tl%2BFxuAJyXaeoKPE8%2F%2FZUxMg199pxMfIdfiUUpu1qOmlgLg0I3Jfk4x513k5wYXBo%2BBgkmSu53BR%2FF%2BvzyBy3yDOlWs36KhBfVKr81IG8Nz5ZYp96tc1C7tW1lr8keWAO7VrGMsBcLszzhc7N1atVIT7EVGNEg1f5eKQ2K4Gqzc6RI2Ozfeen2dtJNsOOrIzNjPtaj0iH%2BM6KqdDvEj5DmartFF3bipj4YmyTFhdY4Z27x4fyCYGO70k5JiDGK7DrvbZp464ASD2cavww%2FNYp0M4dkJVvulOzHkPER63JvWNv0XJBN9VXWZvqLjBeEQCkDYCmMuot6bRl59N3DcY3Qw0bRbGq4WUEjoZRdQvrGUGvDhvjFcyO8oHUlYwp6G%2ByQY6pgFDZ1RxCSsBTHcVBgHJFpYLvGIPGI%2FXRg6GGrcHpwi1J%2FotDn9vUc42MMuFNgQz6Jzyl4cQu5zq%2F6PR1afux9%2BXN%2FYkQOZDcecxKvrhlgtFCaAUZvhET4tetn3%2FM2YESD2j27qDszZjiC4v47vxCbyDTsev3KNBvdKOipjXIvZdaxjSzbY5xjk3mCZQOjQSOF%2BWRx1pJ5pBxCY6XeTdqG4u9raaYxDO&X-Amz-Signature=fb6651b0eafd4795f744fd1473ba3307016dd4cb09311a887210c079d4afe92d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

