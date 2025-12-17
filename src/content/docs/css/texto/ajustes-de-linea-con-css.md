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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RP6Q23CN%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T092843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBT5pWaw%2BCXTVAo33N0Po3TJxKfc9efZIy%2BuhJ4LuF4QAiA%2BulPkxDveP9muOIHlMxqWPZp4g6ykULRPGJ5%2BYlt%2BvCr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMSiuGrTNJl4pj9JFcKtwDcA5j3rBciK69z1db3foiPro1CN137jhzss8RHsIhFxUNRWNbkLbQe5tzf85DSm7P8PoZBnHMfP%2FF2p4obBSxiiMMK%2BXFV8zNkvLnT%2FLPZmZG2Voezu8NAau5wKXRN7Sx0vEfpMG3iY7SucCKRoMra88uLxJWxfD%2BoA%2FDDMeJN2ektANYo2QQSOSskMhAaZwxyTYbWakumq8uw0B1E6mKRIuDGis4tfBjtYTYwIRwf65Utw2AArU%2F3nqU49Q4YbKVmh7WKGJKqanOMFObz%2Bth67ol32w6B8DrDY2ztQX02Z72hdytizsv%2FTI%2BJYb2a4gqamY7Fvsnlfk0OzxRnouvoYU1MzPBhiKWbicbhCzsEKAbioz1%2BrXo%2FWn7m6UATyABhjg90saw5keDq1Mf5rsPRLoz5oJjWjZajVA6ujfhpCFvSjM1FSs7aWULp4YWT0trA6XePBNEDkbCqVQnI6FjSWdr0iLsRHjdLidXoXkL511ho15NBPQf9WIbnSWIBBNwvYLDljJmvhyOKZRlpz7sjmYkefQSIrq0w8JAPPilaQ1ecOBauzEaJgGNHLfwhseCW9WC88Topi51fjHrAY745AOdpx%2B%2BltJTzYWzSPSz6JjZQsS9pxt1yPF2fUkwvdGJygY6pgHlbCYigy30ffXLh3YVvQNEp60B%2B4T%2BLYwbqJOY0K7jHIAA9ir8wjj611vflubDFbwynytuMung1u%2FVT7Wov%2F2PrmLdP75ndGLnBkIhTl0mjRsbRAoBcg8eSbhNsjuTOTj%2Bsko3cABZmw%2FkWpLmHn8QvWh%2BxqYjILl3la9BcE4%2F%2FtTmYma0CRNGmF3H56VzwZ36Q%2FB0KP3%2BDQ1Mq3O53MYcZm4kFJjA&X-Amz-Signature=19fbd58ffe4db4c256bc7a552c8bbd87423fa7cbb76def72245d5a7f2c18e374&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RP6Q23CN%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T092843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBT5pWaw%2BCXTVAo33N0Po3TJxKfc9efZIy%2BuhJ4LuF4QAiA%2BulPkxDveP9muOIHlMxqWPZp4g6ykULRPGJ5%2BYlt%2BvCr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMSiuGrTNJl4pj9JFcKtwDcA5j3rBciK69z1db3foiPro1CN137jhzss8RHsIhFxUNRWNbkLbQe5tzf85DSm7P8PoZBnHMfP%2FF2p4obBSxiiMMK%2BXFV8zNkvLnT%2FLPZmZG2Voezu8NAau5wKXRN7Sx0vEfpMG3iY7SucCKRoMra88uLxJWxfD%2BoA%2FDDMeJN2ektANYo2QQSOSskMhAaZwxyTYbWakumq8uw0B1E6mKRIuDGis4tfBjtYTYwIRwf65Utw2AArU%2F3nqU49Q4YbKVmh7WKGJKqanOMFObz%2Bth67ol32w6B8DrDY2ztQX02Z72hdytizsv%2FTI%2BJYb2a4gqamY7Fvsnlfk0OzxRnouvoYU1MzPBhiKWbicbhCzsEKAbioz1%2BrXo%2FWn7m6UATyABhjg90saw5keDq1Mf5rsPRLoz5oJjWjZajVA6ujfhpCFvSjM1FSs7aWULp4YWT0trA6XePBNEDkbCqVQnI6FjSWdr0iLsRHjdLidXoXkL511ho15NBPQf9WIbnSWIBBNwvYLDljJmvhyOKZRlpz7sjmYkefQSIrq0w8JAPPilaQ1ecOBauzEaJgGNHLfwhseCW9WC88Topi51fjHrAY745AOdpx%2B%2BltJTzYWzSPSz6JjZQsS9pxt1yPF2fUkwvdGJygY6pgHlbCYigy30ffXLh3YVvQNEp60B%2B4T%2BLYwbqJOY0K7jHIAA9ir8wjj611vflubDFbwynytuMung1u%2FVT7Wov%2F2PrmLdP75ndGLnBkIhTl0mjRsbRAoBcg8eSbhNsjuTOTj%2Bsko3cABZmw%2FkWpLmHn8QvWh%2BxqYjILl3la9BcE4%2F%2FtTmYma0CRNGmF3H56VzwZ36Q%2FB0KP3%2BDQ1Mq3O53MYcZm4kFJjA&X-Amz-Signature=71001da56781420eb310d4cb1935033f39bd544fc52083e0cde495def30e1232&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

