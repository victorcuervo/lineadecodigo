---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QS5DN62V%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T022015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnSWGqzv1NnnGkRWDfSg3OJ012pNDI9LSRO8e0TJnsZQIgcgn2slVmcyS641n8a7zcpR0mIT0XdarestuwIKtFNJEqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOUgE%2FTG9AcDfni3nyrcA2tMr8ClQ%2FN4KLWOZ%2FrSltcY1UoT6tPayo1aUZiGy%2BLhkyBduR895NL5qu%2BUg4uqoTWjBDlSs1JQzXy2b3CPk8pUs%2BNuMxjsrv6AB2bFmVOg3hYjDHk7MkceZiNstvWn8nsNypkylCGWljbx3nSm9sjSZAW1jbfYuzV5oxxDEXwbCB%2FXPuHYaSH6ak4%2F9n%2BAc00Ftyxvt6%2FOKeLuzJynHA6fZ7lhHHliL8t3%2FgGRKAkw1%2FpUZ%2BPSJ95DnRcOkKwigun3klDN2VvyRuqIdTy%2F02o7V0O24SlOcr5zKXJzxD%2BcMKYYOFODsft2socI6NDA%2FTPLrA8%2FFPj7flMck51B%2BDHtrbXOfC0pQNyx9DaZSD476L%2FtqCl5kNPXkE8GO17oVyXl3CsxuJJSpOYU97qVjjUK4et1KUkXIuZbVSQtBG%2Bo1ry8x9q4QrfUnYUn6XAsmwnwULQOy1AVMTulpi4H3UBFxi8y5C95YgkqyWm%2FkBymt3U87qizkZc2WeATs4ZBhwSy1Ex6JxWxu0JxvBfHoiwAkx%2FxfXqh3dRNiEmn1dKEWBKwqcKu2M4gTw6soCMusDEjYmYYzqi6%2BNDeyaqCErgP0tXe2zD8KlVCcu8kPU3TunGsqVBrXLG%2FCYugMIXp3ckGOqUBiS7QxkpcQ1CKf1ftcdikJg7elCEwXN8tTGo%2BJCs3KJNeAlTYIP7gSH%2F63GiZWJvvLUYEI0Y%2FN3oCRk0dCb8X77Tjq%2FdyxQbbxJEp6EXHIJ5G5MISk6yrhitQm0Dwigd8aypaWnYK03Ig5W1M%2F4JgfP0Z4P48Y%2F6bEEsMBCR%2B5X%2F8JVb8wLIj%2B%2Bwk%2Bmv2nOWxu5XEGKtxhHFMf%2BEwq0X66rZSj0yk&X-Amz-Signature=29ccada9e00de8873ae20d66e22f51ffdf430d21a4c782149a46137108ced647&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QS5DN62V%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T022015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnSWGqzv1NnnGkRWDfSg3OJ012pNDI9LSRO8e0TJnsZQIgcgn2slVmcyS641n8a7zcpR0mIT0XdarestuwIKtFNJEqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOUgE%2FTG9AcDfni3nyrcA2tMr8ClQ%2FN4KLWOZ%2FrSltcY1UoT6tPayo1aUZiGy%2BLhkyBduR895NL5qu%2BUg4uqoTWjBDlSs1JQzXy2b3CPk8pUs%2BNuMxjsrv6AB2bFmVOg3hYjDHk7MkceZiNstvWn8nsNypkylCGWljbx3nSm9sjSZAW1jbfYuzV5oxxDEXwbCB%2FXPuHYaSH6ak4%2F9n%2BAc00Ftyxvt6%2FOKeLuzJynHA6fZ7lhHHliL8t3%2FgGRKAkw1%2FpUZ%2BPSJ95DnRcOkKwigun3klDN2VvyRuqIdTy%2F02o7V0O24SlOcr5zKXJzxD%2BcMKYYOFODsft2socI6NDA%2FTPLrA8%2FFPj7flMck51B%2BDHtrbXOfC0pQNyx9DaZSD476L%2FtqCl5kNPXkE8GO17oVyXl3CsxuJJSpOYU97qVjjUK4et1KUkXIuZbVSQtBG%2Bo1ry8x9q4QrfUnYUn6XAsmwnwULQOy1AVMTulpi4H3UBFxi8y5C95YgkqyWm%2FkBymt3U87qizkZc2WeATs4ZBhwSy1Ex6JxWxu0JxvBfHoiwAkx%2FxfXqh3dRNiEmn1dKEWBKwqcKu2M4gTw6soCMusDEjYmYYzqi6%2BNDeyaqCErgP0tXe2zD8KlVCcu8kPU3TunGsqVBrXLG%2FCYugMIXp3ckGOqUBiS7QxkpcQ1CKf1ftcdikJg7elCEwXN8tTGo%2BJCs3KJNeAlTYIP7gSH%2F63GiZWJvvLUYEI0Y%2FN3oCRk0dCb8X77Tjq%2FdyxQbbxJEp6EXHIJ5G5MISk6yrhitQm0Dwigd8aypaWnYK03Ig5W1M%2F4JgfP0Z4P48Y%2F6bEEsMBCR%2B5X%2F8JVb8wLIj%2B%2Bwk%2Bmv2nOWxu5XEGKtxhHFMf%2BEwq0X66rZSj0yk&X-Amz-Signature=3198c0b78d6adecf268626c4fff7c84f95c04177111dffbae0cef85712d46f41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

