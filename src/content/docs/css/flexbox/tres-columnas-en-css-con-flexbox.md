---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VACWMHRV%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T074937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA%2FIjPMHpgRxdKcb7%2BFDEdP8dDVesk6g3dDGXUC8r2IPAiEA4zr5zV8F6ItcFaKRIz1aNjos7eZZ4RkN4687LjfWu3Mq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDNgSnG1BhUq%2FlxkjEircA8fM3Y98kE4%2BhjUgpwlrimvKFL2gZs6JCMhe6JPpd5zFDprpcx2g0vOL9C1RNnZfZb0UyIndlcLHWkVt7NDNU8pubXOzg4l5mAadS8XFRkMM9FCqkA42SQ8LKqciTWWaa%2BgWqcy%2BK8Sg67zYML0B0msMLx1zX5hmYXLOjYxYmksKM2Lb5Izf2bs8Hs1Z%2F4qSxUA5z6CB5TPktwYGzi1K2S%2BLLEgej1BMd1leDJtV3Sx2zuNpAxZZfKRKUjrNVSDOfSFaZOU2QHOMRvv0qeWogr%2BQAGDS4hS3mDc4%2FRtP1XiuajeaJtFNLCbq4nfhCjbIQQOUsKYpv1dvi%2F5st1CJb3o0TwqDeZyJkxD5uwAqRiXULUJyJrtIbrI9nHTzYt6ZEtHrtUqKR9Ut5miep6RIVDqb6EUP2Te0gn21rciEufiaqOK9%2BOPGH1r%2BDNcKb6cg9oOUQV1%2FFe0Dn6BYZJEqB%2B0QwlAPgRtLWU46EqBORxhj6w5PKTRkW0y5AdLy84scuNO%2B0TSUYFFKmQr7Mys8yUApHrMgC4E3dlLE9RHXtQi3oCdnE7qCivOCC86MSnkSgxuanwcDrt%2BibYatUIa9sX6yqBAIo%2FyWw5nnWEKFHkdeIgoN7mJ1hAGJtnIWMIC9z8kGOqUBjCxJsPYN98pqanxbZK6drH1ldhd8aP2Rk9wbimS0C5GLTV3ZjC%2FP5NPX1IaV23wXmD4JjrIq%2BrraIRCQk0%2BiFPDx%2FZAQQ53SFSfnVkvsIU0PK33SHD78ECckM28LQvx0GmKS9hCyHFaevnkwMqmAPgn4E7baLc%2BV3cc3spAPXEQU9JJwkGtAg614AKs1V%2Bu4FAMxsv%2FoqJ8viGKr5yT7WpZo5uxh&X-Amz-Signature=34ee918cfa0c680245ffbb789db92b3e4a7263a4ad9fe2b077baa4e6be34f9ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VACWMHRV%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T074937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA%2FIjPMHpgRxdKcb7%2BFDEdP8dDVesk6g3dDGXUC8r2IPAiEA4zr5zV8F6ItcFaKRIz1aNjos7eZZ4RkN4687LjfWu3Mq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDNgSnG1BhUq%2FlxkjEircA8fM3Y98kE4%2BhjUgpwlrimvKFL2gZs6JCMhe6JPpd5zFDprpcx2g0vOL9C1RNnZfZb0UyIndlcLHWkVt7NDNU8pubXOzg4l5mAadS8XFRkMM9FCqkA42SQ8LKqciTWWaa%2BgWqcy%2BK8Sg67zYML0B0msMLx1zX5hmYXLOjYxYmksKM2Lb5Izf2bs8Hs1Z%2F4qSxUA5z6CB5TPktwYGzi1K2S%2BLLEgej1BMd1leDJtV3Sx2zuNpAxZZfKRKUjrNVSDOfSFaZOU2QHOMRvv0qeWogr%2BQAGDS4hS3mDc4%2FRtP1XiuajeaJtFNLCbq4nfhCjbIQQOUsKYpv1dvi%2F5st1CJb3o0TwqDeZyJkxD5uwAqRiXULUJyJrtIbrI9nHTzYt6ZEtHrtUqKR9Ut5miep6RIVDqb6EUP2Te0gn21rciEufiaqOK9%2BOPGH1r%2BDNcKb6cg9oOUQV1%2FFe0Dn6BYZJEqB%2B0QwlAPgRtLWU46EqBORxhj6w5PKTRkW0y5AdLy84scuNO%2B0TSUYFFKmQr7Mys8yUApHrMgC4E3dlLE9RHXtQi3oCdnE7qCivOCC86MSnkSgxuanwcDrt%2BibYatUIa9sX6yqBAIo%2FyWw5nnWEKFHkdeIgoN7mJ1hAGJtnIWMIC9z8kGOqUBjCxJsPYN98pqanxbZK6drH1ldhd8aP2Rk9wbimS0C5GLTV3ZjC%2FP5NPX1IaV23wXmD4JjrIq%2BrraIRCQk0%2BiFPDx%2FZAQQ53SFSfnVkvsIU0PK33SHD78ECckM28LQvx0GmKS9hCyHFaevnkwMqmAPgn4E7baLc%2BV3cc3spAPXEQU9JJwkGtAg614AKs1V%2Bu4FAMxsv%2FoqJ8viGKr5yT7WpZo5uxh&X-Amz-Signature=ac993e9c1747d0c0453c999bb0677a57893c62daa5c878c59101921248cc8fd2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

