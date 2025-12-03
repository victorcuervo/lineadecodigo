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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJC2E73C%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T124645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQD%2BkDIYMKzPLUV8xsuCVXmJSxvwGiwdlffPQrSeLhLlNQIgLAsOOgISCmX78itCmQgwOovytcQsZrPkgchMZItPKJQq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDCMEzoLHlLhdRGoxkSrcA2nAGC2Qw83RRCdHiFnWyct5rKkYLIkVNzzJpj2qvL8i5S%2BroY3G1oDS0k1iPCS4J3uh8fFOGtwQ2CNF%2B0uH5sDh8DvHAwPouqQA%2B0LZQtacYQZhlsRpJPsoJVMs%2ByHkWHGACGa0lylbx0AjcCkBXdH%2BnnrvtsnchiOFRduwnX3A3PNVgBAy6Gjpy3SekxG3b1VoU2dTAK3lnvkySj368iP7repOpPQZp%2FC9JWTooP051qJbDdfw%2BP6RIT2%2FUfKs3seOSHRB7GZ%2FKrPrxkmeS112d0TEVBXeT5X8cL0hWSdv3tvOSDLDkPMu4kaLNVqe8jw4GKCgWzQhUc1mha0OrKmZDJRecoRwu8kTn5ikhXLKwIB7zBKLrexkLKV6KtgtNTx38p56irf%2BRe3LELhwPWCFm5Bp0dzVZKnLupLN0GmNnW7n5KCqx%2BYLAtSQdgk6N7IZLmTD3yi1BsEw12QuA7P4Jxdw3bh2FCQOJ2wgTEgkV4XuIDK9t64ga1aCjTqNUwgjcEzMw9NuGN7syPdvVaKehi5W4boc6qaJOjp3WMS89jM0lbNjDLVoqAIos0v04Z97b7o%2BR80xjGTigleIRhGziopKUbN3bmyZRP%2FoQOyrqqtts8XJVqlYs8UDMNTMwMkGOqUBEbFjS4oCe9%2BsF7QKct8cGm2XYXrDFX1ADasMT7wxjBna67uY5o0q%2FsFDMx3pxIU13HdZAAXLwOosqvm5Mar76ypqUCAGMARayyB8QNyOsS0H1NauaV6M8AxZXaohr3GY7ARrIM4It7THXyV53bKiyIjBE%2BH43emjqXYxx8qASkt9oWeyFOoPL1U2jzI6Q%2BLcPmZG1WFHyZQGCPJTVNzhidjdV7qb&X-Amz-Signature=bfb8342cc182e4b75c714cbfde37cef52108e1b3f4f359080754b4d633927694&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJC2E73C%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T124645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQD%2BkDIYMKzPLUV8xsuCVXmJSxvwGiwdlffPQrSeLhLlNQIgLAsOOgISCmX78itCmQgwOovytcQsZrPkgchMZItPKJQq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDCMEzoLHlLhdRGoxkSrcA2nAGC2Qw83RRCdHiFnWyct5rKkYLIkVNzzJpj2qvL8i5S%2BroY3G1oDS0k1iPCS4J3uh8fFOGtwQ2CNF%2B0uH5sDh8DvHAwPouqQA%2B0LZQtacYQZhlsRpJPsoJVMs%2ByHkWHGACGa0lylbx0AjcCkBXdH%2BnnrvtsnchiOFRduwnX3A3PNVgBAy6Gjpy3SekxG3b1VoU2dTAK3lnvkySj368iP7repOpPQZp%2FC9JWTooP051qJbDdfw%2BP6RIT2%2FUfKs3seOSHRB7GZ%2FKrPrxkmeS112d0TEVBXeT5X8cL0hWSdv3tvOSDLDkPMu4kaLNVqe8jw4GKCgWzQhUc1mha0OrKmZDJRecoRwu8kTn5ikhXLKwIB7zBKLrexkLKV6KtgtNTx38p56irf%2BRe3LELhwPWCFm5Bp0dzVZKnLupLN0GmNnW7n5KCqx%2BYLAtSQdgk6N7IZLmTD3yi1BsEw12QuA7P4Jxdw3bh2FCQOJ2wgTEgkV4XuIDK9t64ga1aCjTqNUwgjcEzMw9NuGN7syPdvVaKehi5W4boc6qaJOjp3WMS89jM0lbNjDLVoqAIos0v04Z97b7o%2BR80xjGTigleIRhGziopKUbN3bmyZRP%2FoQOyrqqtts8XJVqlYs8UDMNTMwMkGOqUBEbFjS4oCe9%2BsF7QKct8cGm2XYXrDFX1ADasMT7wxjBna67uY5o0q%2FsFDMx3pxIU13HdZAAXLwOosqvm5Mar76ypqUCAGMARayyB8QNyOsS0H1NauaV6M8AxZXaohr3GY7ARrIM4It7THXyV53bKiyIjBE%2BH43emjqXYxx8qASkt9oWeyFOoPL1U2jzI6Q%2BLcPmZG1WFHyZQGCPJTVNzhidjdV7qb&X-Amz-Signature=48b07cb22edc0606bb6b391184ee15a45d00969d6704dc41e14c2d63c7ac4848&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

