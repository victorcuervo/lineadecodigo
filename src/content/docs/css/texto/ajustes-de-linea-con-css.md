---
title: Ajustes de línea con CSS
description: "Uso de las propiedades overflow-wrap y word-wrap para poder realizar ajustes de línea con CSS y evitar texto desbordado."
lastUpdated: 2025-12-17
slug: css/ajustes-de-linea-con-css
author: victor_cuervo
---

Cuando estamos trabajando con bloques e insertando texto dentro de ellos, tenemos que estar al tanto de qué sucede con nuestro texto. Saber si nuestro texto se desborda en el bloque, o el contenedor se ajusta al tamaño del texto. Es por ello que vamos a ver cómo podemos controlar los ajustes de línea con [CSS](https://www.manualweb.net/css/).


Pero vayamos por partes. Lo primero es crear un bloque o una capa mediante el típico elemento [`div`](https://www.w3api.com/HTML/div/) de [HTML](https://www.manualweb.net/html/). Dentro del elemento [`div`](https://www.w3api.com/HTML/div/) vamos a colocar el texto que queremos que se visualice.


```html
<div class="columna">
  Puede que la tarea que me he impuesto de escribir una historia completa
  del pueblo romano desde el comienzo mismo de su existencia me recompense
  por el trabajo invertido en ella, no lo sé con certeza, ni creo que pueda
  aventurarlo.
</div>
```


Lo siguiente será darle un tamaño a este bloque. Para ello jugamos con los estilos de CSS y en concreto con la propiedad [`with`](https://www.w3api.com/CSS/width/) la cual utilizaremos para dar un tamaño pequeño a la columna que nos ayude con la visualización del ejemplo.


```css
.columna {
  width: 50px;
  background-color: lightcoral;            
  margin: auto;
}
```


Hemos aprovechado que habíamos definido la clase “columna” mediante el atributo [`class`](https://www.w3api.com/HTML/class/) para poder aplicar el estilo sobre el bloque. De igual manera hemos incorporado otras propiedades dentro de la clase, no necesarias para el ejemplo, pero que nos ayudan para la estética del mismo, como son [`background-color`](https://www.w3api.com/CSS/background-color/) que nos ayuda a poner un color al fondo del bloque y [`margin`](https://www.w3api.com/CSS/margin/) que nos permite ajustar los márgenes alrededor del bloque, en este caso centrándolo.


Si  lo cargamos en el navegador veremos que las líneas, al haber definido un bloque muy pequeño, desbordan el contenido de las palabras fuera del contenedor. Dejando un efecto no deseado.


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWYSV7XB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T141953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFsZv%2BAzE9D9Z2SCbTLOLa5pRIxeJop7yGoxQyfTRfVHAiBetf0LiZj%2BFa%2F1XDIoijtJKL%2BRv4WhLNItv2z7CQcPNyr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMSUcN%2BVy3LI9eZYM0KtwD%2F4ImfEzlqCWTvqSp2SytX%2BCl5mbmrl0uN9%2FUHiMXCZuDBFDYvOhOeCOZws4%2BoY589uvlloj2HphU2D5LwtjNyVl2miYrRrvb5OdLKOZ9yA2HePhJEp8AOKgJH9ndjFLKh3EVpKAR2rTBjupvkYlxHsu0pYYZThbuNHC5UdwluiFVygByvXYT1AfhNFEZUjAU93Nq9sXGtHBOl8NLWtibqw0Ov5EBEaQQYtIUUBj%2BW81lhA31B1orWENE9zGTE9LKW73K6djfuDw%2F3BI2Ah1bUjiaKAVdfUqRlS98ta7ljHyvVzWN87ewgqO41vwXIzq%2BSaGbGTNxvW2H8N6s4P6ygALxvkNX4w3mAmpWHVkXsrmvrbhvHYLxjXY1I4S4pCgRPdcl6kLfuxY38cSxPItzR9NzC%2B6WqIP%2FZRGKlXduoHJ3O4OV0OIWLhfYYVyUfl4ljQkAZX8o93PaelzGm2yapAEts6eHLainckODR83ByZx0jZljpz7V7b8Rx12bepvZfT%2BYbtR%2FnXJoUrnnlf2XAUP%2BFai8xXE8dlwaWcoJjaR5UZ0Q0VF%2FM3WtSJyIRI7U9to1LokodkjAgyUCr7wORbctCVfmdZ5v9Naw00Nv9El2%2F%2Bfkz6qPrPoZsPEw3eGKygY6pgGw3E3aJITQmyEWXxrNlmEB60fZ39aRb4WjK44Bgfsqb2aWm9draQZqV%2FfW5Fw3L%2BTciDzO3h9H8krXKO8ysPcAabQutMvBislAJRvg8Nc78rUj1aCsK8dm6MA8k20nd05bkSGBzw7P7I1s7hoXHzByPqC95qZ8mKJatEty51WUvwbkVhg0X9%2FnHzprMcIPCG5lq579YjI%2BnRPGoH500GJJqQPaNIzw&X-Amz-Signature=62a177231626196e8b54cc0d91cfcee50569d9b7b7ec93a206c9b3c9dbeaab50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Para poder solucionar esto tenemos que recurrir a la propiedad [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/), cuyo valor por defecto es **“normal”** y lo que está generando el anterior efecto. Y lo que tenemos que hacer es asignarle un valor de “break-word” que lo que hará será el dividir las palabras (cortarlas) cuando lleguen al borde de nuestro bloque.


Puede ser que el efecto sea raro en las palabras, pero gráficamente no veremos que se desbordan las líneas por fuera del contenedor.


Para ello definimos una nueva clase que la hemos llamado “texto-ajustado” de la siguiente forma:


```css
.texto-ajustado {
  overflow-wrap: break-word;
}

.texto-sinajustar {
  overflow-wrap: normal;
}
```


Ahora aplicamos estas clases sobre el bloque de texto, asignado la nueva clase en el atributo [`class`](https://www.w3api.com/HTML/class/) :


```html
<div class="columna texto-sin-ajustar">
  Puede que la tarea que me he impuesto de escribir una historia completa del
  pueblo romano desde el comienzo mismo de su existencia me recompense por el
  trabajo invertido en ella, no lo sé con certeza, ni creo que pueda
  aventurarlo.
</div>

<div class="columna texto-ajustado">
  Puede que la tarea que me he impuesto de escribir una historia completa del
  pueblo romano desde el comienzo mismo de su existencia me recompense por el
  trabajo invertido en ella, no lo sé con certeza, ni creo que pueda
  aventurarlo.
</div>
```


El efecto que veremos en el navegador será el siguiente:


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWYSV7XB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T141953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFsZv%2BAzE9D9Z2SCbTLOLa5pRIxeJop7yGoxQyfTRfVHAiBetf0LiZj%2BFa%2F1XDIoijtJKL%2BRv4WhLNItv2z7CQcPNyr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMSUcN%2BVy3LI9eZYM0KtwD%2F4ImfEzlqCWTvqSp2SytX%2BCl5mbmrl0uN9%2FUHiMXCZuDBFDYvOhOeCOZws4%2BoY589uvlloj2HphU2D5LwtjNyVl2miYrRrvb5OdLKOZ9yA2HePhJEp8AOKgJH9ndjFLKh3EVpKAR2rTBjupvkYlxHsu0pYYZThbuNHC5UdwluiFVygByvXYT1AfhNFEZUjAU93Nq9sXGtHBOl8NLWtibqw0Ov5EBEaQQYtIUUBj%2BW81lhA31B1orWENE9zGTE9LKW73K6djfuDw%2F3BI2Ah1bUjiaKAVdfUqRlS98ta7ljHyvVzWN87ewgqO41vwXIzq%2BSaGbGTNxvW2H8N6s4P6ygALxvkNX4w3mAmpWHVkXsrmvrbhvHYLxjXY1I4S4pCgRPdcl6kLfuxY38cSxPItzR9NzC%2B6WqIP%2FZRGKlXduoHJ3O4OV0OIWLhfYYVyUfl4ljQkAZX8o93PaelzGm2yapAEts6eHLainckODR83ByZx0jZljpz7V7b8Rx12bepvZfT%2BYbtR%2FnXJoUrnnlf2XAUP%2BFai8xXE8dlwaWcoJjaR5UZ0Q0VF%2FM3WtSJyIRI7U9to1LokodkjAgyUCr7wORbctCVfmdZ5v9Naw00Nv9El2%2F%2Bfkz6qPrPoZsPEw3eGKygY6pgGw3E3aJITQmyEWXxrNlmEB60fZ39aRb4WjK44Bgfsqb2aWm9draQZqV%2FfW5Fw3L%2BTciDzO3h9H8krXKO8ysPcAabQutMvBislAJRvg8Nc78rUj1aCsK8dm6MA8k20nd05bkSGBzw7P7I1s7hoXHzByPqC95qZ8mKJatEty51WUvwbkVhg0X9%2FnHzprMcIPCG5lq579YjI%2BnRPGoH500GJJqQPaNIzw&X-Amz-Signature=1af018b86181be1241481cca605db6a4e85297c17f100e14c3567e6f8505a328&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

