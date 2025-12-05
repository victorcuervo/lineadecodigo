---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TD3LPAZ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T225119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA7C39%2F4ls1gBHuyWk%2BRs%2FCr%2FxJivg1X685wZXU6lzkTAiEAhDn%2FC2XfaqNmOZXJow3OTNFNXvEOQhLynXXHTCxA%2B18q%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDNZRJDRYc%2FfpYWQvCCrcA%2BMapkLw7n8IDMQyJU0JYDFE5XH6h8ktojOe3hYkwsSwO2iPxsFOjOY5dsjoATxdQcCi%2F5iRZLAAX3SgZasHF4ZIAnvnmHmLjNiYnR34NaeHmseKSLXl5TGlq3A66Ht3MHplYlUoAHsWp9Ycn8YWkjNMQdksRV69ItjG21vSA1KecMiltiMHJhXuq7VtV25Y8a4AzN18X54KZiI%2FV5aBsMGHx3R2k5fWC5S36ciUgZoIs2VspF9w8hgicX7qUSXpCSQlzu%2FLnfDEYKiuK3tVr0VvS9gyLFhDg4Gl1IrfLjF0VpxADXaQXG%2Ffiq9y6m5wWdI%2B8LZN220h%2F%2F9qDuzdaUghkv8Ey%2F8R6tlHWGYOj%2BA7IwmOrMwgj72jg8Cq%2BXFyti5AZYDeSgF0CfSRzqXiobJ1EN2mHrhxDphkzVcxf0MABLTcBTqfB2330m%2BWHtbHOfwj2J0%2B5WN3AuE4zX%2BGtTl1tcY%2B3tscHW%2FqCk0u0vJ%2BqmDrEyfaLXHiKPWFCS6soYjmkS7hM3L7Ugk3ml%2Fcb2PYFpBlZKWRGenE%2BMoYQohcBFED04%2Fae82vBD5gAzwzr%2FPc2iAyTRuDs%2BDpKc5KblIYIkQDDEy5Pe9mYAGvU97pTwS7vuaLmenV1qj5MJeYzckGOqUBXdnFsM5XHd%2BCGmOU34nLqJ%2BxiTFZyGkpjxZQONcAr2YAxbJRmDlOyPG8ogLveTVnlJuw0oEM5KU7Xw61PDAB%2BVqFAMvp7Ld73Sfi9utZveiYo3g1JTBQbAayvpiXnMlZfRH06D3gKnUtRY4QiiZNQUZ3T7N8kuDxY82b7pVxSM52Jbs9PbtW%2BxHZe%2BGk1%2BdkplLOsTfwNaip2pQQydK9GNdNkzi9&X-Amz-Signature=5ef880a1ef193c8e859e8e14d2a72e620ef0669dc17833c693d3521a5069899c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TD3LPAZ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T225119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA7C39%2F4ls1gBHuyWk%2BRs%2FCr%2FxJivg1X685wZXU6lzkTAiEAhDn%2FC2XfaqNmOZXJow3OTNFNXvEOQhLynXXHTCxA%2B18q%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDNZRJDRYc%2FfpYWQvCCrcA%2BMapkLw7n8IDMQyJU0JYDFE5XH6h8ktojOe3hYkwsSwO2iPxsFOjOY5dsjoATxdQcCi%2F5iRZLAAX3SgZasHF4ZIAnvnmHmLjNiYnR34NaeHmseKSLXl5TGlq3A66Ht3MHplYlUoAHsWp9Ycn8YWkjNMQdksRV69ItjG21vSA1KecMiltiMHJhXuq7VtV25Y8a4AzN18X54KZiI%2FV5aBsMGHx3R2k5fWC5S36ciUgZoIs2VspF9w8hgicX7qUSXpCSQlzu%2FLnfDEYKiuK3tVr0VvS9gyLFhDg4Gl1IrfLjF0VpxADXaQXG%2Ffiq9y6m5wWdI%2B8LZN220h%2F%2F9qDuzdaUghkv8Ey%2F8R6tlHWGYOj%2BA7IwmOrMwgj72jg8Cq%2BXFyti5AZYDeSgF0CfSRzqXiobJ1EN2mHrhxDphkzVcxf0MABLTcBTqfB2330m%2BWHtbHOfwj2J0%2B5WN3AuE4zX%2BGtTl1tcY%2B3tscHW%2FqCk0u0vJ%2BqmDrEyfaLXHiKPWFCS6soYjmkS7hM3L7Ugk3ml%2Fcb2PYFpBlZKWRGenE%2BMoYQohcBFED04%2Fae82vBD5gAzwzr%2FPc2iAyTRuDs%2BDpKc5KblIYIkQDDEy5Pe9mYAGvU97pTwS7vuaLmenV1qj5MJeYzckGOqUBXdnFsM5XHd%2BCGmOU34nLqJ%2BxiTFZyGkpjxZQONcAr2YAxbJRmDlOyPG8ogLveTVnlJuw0oEM5KU7Xw61PDAB%2BVqFAMvp7Ld73Sfi9utZveiYo3g1JTBQbAayvpiXnMlZfRH06D3gKnUtRY4QiiZNQUZ3T7N8kuDxY82b7pVxSM52Jbs9PbtW%2BxHZe%2BGk1%2BdkplLOsTfwNaip2pQQydK9GNdNkzi9&X-Amz-Signature=7b4be4f5c0a498dcd188848e971b2231c1e5727d5e3e227a8e0c18319f7b9a0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

