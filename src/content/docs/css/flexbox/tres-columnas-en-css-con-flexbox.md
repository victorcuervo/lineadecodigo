---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466US6QTSM7%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T213422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG3pJZ65nZoeAHu7Bcj1MfU59L5koRPyhRL8Xs8eaZbyAiBbxgZxWEt3Nxl2P6BVMmHeo7m74sL3Ajv7u7PpGYtMICr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMvWKJXtEdVb5FQs%2BfKtwDVZHxX%2FgSZHyPqmVD986nzj00XdSQhNjpFQ4C4jSu74UoCj%2BSnwunA8D%2FoTopO5nNG2uZ0CPFDf22WRODEnb7SmX4tbBI%2Fii8Ud0gZFUVz8%2F855v%2BeCE%2BX7zAxGYeRJNWVcdn3SsQb396SL5Rumxa%2FeAxTmFMWNV2CzxER%2FYo7l7Lof0e2xocwkRbEmGHbiPBo%2Fxx9FZ%2BbwXG%2BvaXm6DB3rkvXHvmv82fFPoTFBQ%2FkvDUWLyWMAleKIYMDVIl20bTupQXlDzuBGoLL72qAlizLayYkPYOr3trd3TxBjoLwAvsb02D3pUuXSKwiYeNgMEEg8OlDyLcff%2FPpv78rVqfRLT8HeUmh68HxZvT0vTis8Bda3E7BsTb%2BmDhF1shKiURfiDjyiB1IF09iYv4UTr1NgvPLCEVzzh3OAcR85quMcFznNtpq%2FuAnvmSjNeDXb8OiU%2BUqZDxEto8Gs18S5kPKm8QMZjSiVfpFrMvFbV6HA4XiwhlYMnzDzBYRkVn1WQ1ZtyNrdIFvtyJYbmTSlYThGqmzBSdEU1DEoHr3Ta7EyO8rGraBvEYAZaKtjWK%2F54q%2BYzSEDiGpuyxxVtvxBgjNLu5tCl9LZc332Y3MOnqvyextOoqz3mol8ViEQswqY%2FMyQY6pgHQIlFf5KhIutnSVpkhTUcmbE7BLR3U2Xz8tA5CGJCbHhAv923tkYPDC2%2FFgB7BUU1yFAUQl2NadHj7HkLm%2Bd3O3dp6fpE70%2FrkTt5d5yGwbKss4%2F89yr5nh7HFd8gHLgvPXyX3si9mhnsuyjdp8Lktk8TFwcMmSaRsLjbTmPDqxVyWsMAf34nJxRouzYiN0ADByHrG9lnt11YEH9SVLLldiNHMd1yo&X-Amz-Signature=85fe099be78dfd6fd468bbdf6219f52cea37827693c26cecf9288b379b8951d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466US6QTSM7%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T213422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG3pJZ65nZoeAHu7Bcj1MfU59L5koRPyhRL8Xs8eaZbyAiBbxgZxWEt3Nxl2P6BVMmHeo7m74sL3Ajv7u7PpGYtMICr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMvWKJXtEdVb5FQs%2BfKtwDVZHxX%2FgSZHyPqmVD986nzj00XdSQhNjpFQ4C4jSu74UoCj%2BSnwunA8D%2FoTopO5nNG2uZ0CPFDf22WRODEnb7SmX4tbBI%2Fii8Ud0gZFUVz8%2F855v%2BeCE%2BX7zAxGYeRJNWVcdn3SsQb396SL5Rumxa%2FeAxTmFMWNV2CzxER%2FYo7l7Lof0e2xocwkRbEmGHbiPBo%2Fxx9FZ%2BbwXG%2BvaXm6DB3rkvXHvmv82fFPoTFBQ%2FkvDUWLyWMAleKIYMDVIl20bTupQXlDzuBGoLL72qAlizLayYkPYOr3trd3TxBjoLwAvsb02D3pUuXSKwiYeNgMEEg8OlDyLcff%2FPpv78rVqfRLT8HeUmh68HxZvT0vTis8Bda3E7BsTb%2BmDhF1shKiURfiDjyiB1IF09iYv4UTr1NgvPLCEVzzh3OAcR85quMcFznNtpq%2FuAnvmSjNeDXb8OiU%2BUqZDxEto8Gs18S5kPKm8QMZjSiVfpFrMvFbV6HA4XiwhlYMnzDzBYRkVn1WQ1ZtyNrdIFvtyJYbmTSlYThGqmzBSdEU1DEoHr3Ta7EyO8rGraBvEYAZaKtjWK%2F54q%2BYzSEDiGpuyxxVtvxBgjNLu5tCl9LZc332Y3MOnqvyextOoqz3mol8ViEQswqY%2FMyQY6pgHQIlFf5KhIutnSVpkhTUcmbE7BLR3U2Xz8tA5CGJCbHhAv923tkYPDC2%2FFgB7BUU1yFAUQl2NadHj7HkLm%2Bd3O3dp6fpE70%2FrkTt5d5yGwbKss4%2F89yr5nh7HFd8gHLgvPXyX3si9mhnsuyjdp8Lktk8TFwcMmSaRsLjbTmPDqxVyWsMAf34nJxRouzYiN0ADByHrG9lnt11YEH9SVLLldiNHMd1yo&X-Amz-Signature=9314d0a6ce5b6448fca1d98d80cf515458c8a5cb5c776e7a0ce0eaf5229834a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

