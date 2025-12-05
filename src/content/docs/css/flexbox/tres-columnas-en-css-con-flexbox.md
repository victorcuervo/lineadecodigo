---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2T6JPIX%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T232540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDhMMl0IXwyjhbgAxghejmHhCSVm7ltsDLRWGrBeG%2FXtAiBmX4bxAfVhvySVtU%2BrxIZzQWQwGklgC9Z6o5Ug8jeiPyr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIM4FBdS%2FnwoRvED9tCKtwD8upOtwZcdgkqyyrpoRnAqfJMgY9bNnyTUy%2FSzYq3D6rcxM4nGHZlEX57JYJ9W1rHVt4LPWYe8o%2BBMZP0ljsjEtuAf5V1hd4OZfzDzFBauyj%2BNFj24Htwu1XOm8aeX%2F%2BC3bG%2B5gDRPfHWdJi0PjoP7owikxheBhwBUYJstO1TKsdkeD8VzjLytlGlwQxr6XLwGfniMtVVlTVMMLbaCJl09EpIItOXCjpQ633JLMg4ZllGFmmhVxz9phLQZNxwes6tuDFM71lJSgShC5iICDAwuqp0BOBf38sJXQRRehp0SbMneXmdco2PPL3D9Ql983%2BDEinD2wxQ1Xq9LO8NVF48Y%2Bg3882aILXcQxebUJ1Fgn5o8H%2FAGDg9BqxybT19C%2BJ4Md3hN3xP733IzZLPTyU0Ybqgd%2F1RJ7wyB8gUS96O9pHwTnKAtKWEs0liqDaNz8tvnf%2Fo6c5wbM%2BI%2F5a1F6wCV2Ck3VRoXzL9OYA4omjJZxEFr%2Bm%2BxH4ZTP%2FXilmjG99NJH%2FuR0WAz8CPO9AJkpGrWPB%2Bf4UkmOSL2XYOZikAZMWreLD%2FL9VGNC6KXYBrj524mWo%2BbFZadEEWek8cCla%2FQSQMIuTvz0yztRhcew36SOHfZ%2BRmKEFrmlNs2OAw1sbNyQY6pgHQ4sL6tXW31F4mgzgkcPfTfg1l4bSdLy%2F5FRK%2BZ%2B3IAl3ZInR%2Fe1xHV1eritYElJDyAd0qttvphxJ0xrwV3los4rs8JHoa2zsLcH0qqwwLw%2B8NmHXFRO8i39E5HgPd4DDKxT197QZhSAaj7QJAn%2BGozCyDmR094UK3DVWNxr%2BlBfGzEIJQoV9NCSm3Ky3Wbycfvcnw8iKu2JUXxUv9lzvXgfmTEVzR&X-Amz-Signature=e1ec33a98359ef0b86f6e92119da52dc5ae832bbc1eb972179aed24aa6adace5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2T6JPIX%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T232540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDhMMl0IXwyjhbgAxghejmHhCSVm7ltsDLRWGrBeG%2FXtAiBmX4bxAfVhvySVtU%2BrxIZzQWQwGklgC9Z6o5Ug8jeiPyr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIM4FBdS%2FnwoRvED9tCKtwD8upOtwZcdgkqyyrpoRnAqfJMgY9bNnyTUy%2FSzYq3D6rcxM4nGHZlEX57JYJ9W1rHVt4LPWYe8o%2BBMZP0ljsjEtuAf5V1hd4OZfzDzFBauyj%2BNFj24Htwu1XOm8aeX%2F%2BC3bG%2B5gDRPfHWdJi0PjoP7owikxheBhwBUYJstO1TKsdkeD8VzjLytlGlwQxr6XLwGfniMtVVlTVMMLbaCJl09EpIItOXCjpQ633JLMg4ZllGFmmhVxz9phLQZNxwes6tuDFM71lJSgShC5iICDAwuqp0BOBf38sJXQRRehp0SbMneXmdco2PPL3D9Ql983%2BDEinD2wxQ1Xq9LO8NVF48Y%2Bg3882aILXcQxebUJ1Fgn5o8H%2FAGDg9BqxybT19C%2BJ4Md3hN3xP733IzZLPTyU0Ybqgd%2F1RJ7wyB8gUS96O9pHwTnKAtKWEs0liqDaNz8tvnf%2Fo6c5wbM%2BI%2F5a1F6wCV2Ck3VRoXzL9OYA4omjJZxEFr%2Bm%2BxH4ZTP%2FXilmjG99NJH%2FuR0WAz8CPO9AJkpGrWPB%2Bf4UkmOSL2XYOZikAZMWreLD%2FL9VGNC6KXYBrj524mWo%2BbFZadEEWek8cCla%2FQSQMIuTvz0yztRhcew36SOHfZ%2BRmKEFrmlNs2OAw1sbNyQY6pgHQ4sL6tXW31F4mgzgkcPfTfg1l4bSdLy%2F5FRK%2BZ%2B3IAl3ZInR%2Fe1xHV1eritYElJDyAd0qttvphxJ0xrwV3los4rs8JHoa2zsLcH0qqwwLw%2B8NmHXFRO8i39E5HgPd4DDKxT197QZhSAaj7QJAn%2BGozCyDmR094UK3DVWNxr%2BlBfGzEIJQoV9NCSm3Ky3Wbycfvcnw8iKu2JUXxUv9lzvXgfmTEVzR&X-Amz-Signature=8f427dcdfb2b170a1f4a7ac6f6607e9e5408efa0b7832efb197b54512993e6e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

