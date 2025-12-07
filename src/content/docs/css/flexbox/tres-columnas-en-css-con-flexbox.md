---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666V5FVQ3D%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T084359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGl1yjJEq2NZs7UpHpMGkVLiMLlelm9CaDvOwI%2FlulYQIgViEhmvpOzGRAyvK49S8neLzWES8n%2Bz2cqF6HGK5T8PMqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPhItbhA7WjSvV9t9yrcA6mWDQLsVoWeSSubZ6ZSpByV8z9TXm7fC1TDoV6MGCZjNckVQsM3jZ%2B%2FJ62bG1NqygNiWgZ%2FchtZsfWR1oe2SKGANELAqXatXsOCjuGfD%2FoD7VNtu8dTWkiIBDDE2yXNkbJ6cai46vwCyfG38RUJoY5ns65kXAeQlUWeZyAa9GwACUxBJXDzb3I3PmBpywLzS3Oqv4TzC7bsjIW6wyI%2FBKx06hA2i9ECznXCyUzLEfZO7dAkR1P91BDs4vCmo9jyR%2FnD23vZGhnYNFNyTWM2YEaiJAwwHwtre1GNeYwCsE7hPfPksH0lZkef51MTYZ8E3ZbdzrTMZQmiWHiRuB8Pw%2FlzgrbCbHUSP2R1MP5c6CGrhAyjfD5d7m%2BaaeP%2FcDXxNgh%2FvSWZ6G5IlNbRB%2BM48xNffaqeuP8rhorJ%2BnebgrDU7c%2B1JGobO5C5hsIMzQ%2FDlRPwEE65xdmpjQ6Cj7mk1aWUavNWc3aNIvEUNRP5wN6LOfv5%2FVcI8qj3A1MbhBYzHA0%2BfxCmW%2FX%2FT6K7p1tEQ5wz12t9I0Tw9Y9v7BbsamaGQ8LNQIoVBvwPPSl7Y5uSaFmH1pLBXKcLgi7xRqGqSv9d5%2BoZ%2FIor%2BpR3WIqAupZCH9esy68CAIv7zYDNMIqc1MkGOqUB7uV86eSyBXx4twMkkLyfwjixcv1fSxjmROVe6yHSKpK9BUI5q11uHyVX1eD%2FSbEw7C9TVfkghgj42rYuO1Z%2FmYoirlxjcr2H9%2BH4NyGHIR%2FCPMqSme9N21reUJnJWL2lqohsmm9%2FuOFPxgsCkPI0%2BIv7o40YtaI07u2p13TH%2Fhur6CxWriusUUsnZyrBKeRaz0fuuk%2FiTDJV%2BjkNnToOs2Og9Wvt&X-Amz-Signature=1cc91392da0f0fea6edbd8da22f41bc98fcf0554b05f3bb2cc6e0379e8966353&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666V5FVQ3D%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T084359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGl1yjJEq2NZs7UpHpMGkVLiMLlelm9CaDvOwI%2FlulYQIgViEhmvpOzGRAyvK49S8neLzWES8n%2Bz2cqF6HGK5T8PMqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPhItbhA7WjSvV9t9yrcA6mWDQLsVoWeSSubZ6ZSpByV8z9TXm7fC1TDoV6MGCZjNckVQsM3jZ%2B%2FJ62bG1NqygNiWgZ%2FchtZsfWR1oe2SKGANELAqXatXsOCjuGfD%2FoD7VNtu8dTWkiIBDDE2yXNkbJ6cai46vwCyfG38RUJoY5ns65kXAeQlUWeZyAa9GwACUxBJXDzb3I3PmBpywLzS3Oqv4TzC7bsjIW6wyI%2FBKx06hA2i9ECznXCyUzLEfZO7dAkR1P91BDs4vCmo9jyR%2FnD23vZGhnYNFNyTWM2YEaiJAwwHwtre1GNeYwCsE7hPfPksH0lZkef51MTYZ8E3ZbdzrTMZQmiWHiRuB8Pw%2FlzgrbCbHUSP2R1MP5c6CGrhAyjfD5d7m%2BaaeP%2FcDXxNgh%2FvSWZ6G5IlNbRB%2BM48xNffaqeuP8rhorJ%2BnebgrDU7c%2B1JGobO5C5hsIMzQ%2FDlRPwEE65xdmpjQ6Cj7mk1aWUavNWc3aNIvEUNRP5wN6LOfv5%2FVcI8qj3A1MbhBYzHA0%2BfxCmW%2FX%2FT6K7p1tEQ5wz12t9I0Tw9Y9v7BbsamaGQ8LNQIoVBvwPPSl7Y5uSaFmH1pLBXKcLgi7xRqGqSv9d5%2BoZ%2FIor%2BpR3WIqAupZCH9esy68CAIv7zYDNMIqc1MkGOqUB7uV86eSyBXx4twMkkLyfwjixcv1fSxjmROVe6yHSKpK9BUI5q11uHyVX1eD%2FSbEw7C9TVfkghgj42rYuO1Z%2FmYoirlxjcr2H9%2BH4NyGHIR%2FCPMqSme9N21reUJnJWL2lqohsmm9%2FuOFPxgsCkPI0%2BIv7o40YtaI07u2p13TH%2Fhur6CxWriusUUsnZyrBKeRaz0fuuk%2FiTDJV%2BjkNnToOs2Og9Wvt&X-Amz-Signature=3c2b09c655de2fb527493f13cbdb5b4eb767fc36a114a7321defaafc13bf9dde&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

