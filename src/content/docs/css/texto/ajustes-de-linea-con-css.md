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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYTBZWWA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T144529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDI1%2FwKrW6rOCs4J54s8pwf9cJmGtme2vYdfn54hf95HAiBatenGUjo6BAb1jip9dTh0kCB3nYIMk1%2BjaZ7ff%2BTvOyqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUyf1SrmGCzvL%2FL6%2FKtwDMW8%2BuOnThPFKERGxaY3D%2F9KiZup%2FKI8kwPs4KHSFPG95MyprwsmNChPFmoak2h6EErcxjHPeE7zg1Afd%2F0E%2Fo0CftGHjdGiurTjQ9vQu4kCWxRSKXFDfF3tkDr%2B3dlKWyQS0PJFW8%2B97umSVQfBu0juw9SxwN%2BHl7SAR8aAKNydfr%2BYumKUf781tusoXhhS0WYESUAR3wpJ%2Fsrexg48tsYAFo6SXtBJ1o1cX5xQ3wfWUfD18f0CGnP53KvXxMVhgAFZAcAiJdsBdhSda%2B42%2FicnC7Jp4X5jgYL%2ByxuPb3pjK1oRG4ePQvvIsU02gHQfgjUZOEg6%2BrvV6%2FgkCKwjzpJRkF5VZVAe%2FY%2FL3wLXfKKd7bBkZLGCBy1ZTBBgoabwpozxNAYgpkRd1gKHo5yB7tZSMB8w2stb6sIdXf%2F9UMsPHj8RGT2MtA8hyxk9tjxstcZjpkkgAHAZAJ89UcqiEfYFiznPwiDzU6SWs51Cq0tDkUmBkYCI8nsKZLZUpdBUn4j6UIx74ADFEXOXXxsTkIFBPOvuolbmM%2FnpT%2F9j33sND768iqnaf2bBD%2B82%2FA1438d27kT%2FtIMNElIDAVIS%2B9Bcx7UDfDNN5FIBgPuoJuVrdE7Rvw%2Fx0JcQGgr0wzICLygY6pgGxJHx3llMjTCWnRHuF58ebOzJwNw03etpQwM%2FJ44tRzzJiIQDIlz8I%2FOLAQeAPFpO5qVCvqPFPr3WaS8LTNYHBbZqf2gem4%2FF8wbpwZ2Kvj%2BAR8%2FNEy5v8QpQ9rj5Ass9lsOeHRsgOp0tvXbkaIyq3ICcxg%2FxdhvARLOxYXdALXQsqCN7mZG7FLLDu2ADpGnbAYUwgFI9g6f8LQtkqjW8u3KMjqbnz&X-Amz-Signature=a85e50e5099efd1c07ece829bb54f31860a022b5ea117fc42378c7a9436e325b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYTBZWWA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T144529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDI1%2FwKrW6rOCs4J54s8pwf9cJmGtme2vYdfn54hf95HAiBatenGUjo6BAb1jip9dTh0kCB3nYIMk1%2BjaZ7ff%2BTvOyqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUyf1SrmGCzvL%2FL6%2FKtwDMW8%2BuOnThPFKERGxaY3D%2F9KiZup%2FKI8kwPs4KHSFPG95MyprwsmNChPFmoak2h6EErcxjHPeE7zg1Afd%2F0E%2Fo0CftGHjdGiurTjQ9vQu4kCWxRSKXFDfF3tkDr%2B3dlKWyQS0PJFW8%2B97umSVQfBu0juw9SxwN%2BHl7SAR8aAKNydfr%2BYumKUf781tusoXhhS0WYESUAR3wpJ%2Fsrexg48tsYAFo6SXtBJ1o1cX5xQ3wfWUfD18f0CGnP53KvXxMVhgAFZAcAiJdsBdhSda%2B42%2FicnC7Jp4X5jgYL%2ByxuPb3pjK1oRG4ePQvvIsU02gHQfgjUZOEg6%2BrvV6%2FgkCKwjzpJRkF5VZVAe%2FY%2FL3wLXfKKd7bBkZLGCBy1ZTBBgoabwpozxNAYgpkRd1gKHo5yB7tZSMB8w2stb6sIdXf%2F9UMsPHj8RGT2MtA8hyxk9tjxstcZjpkkgAHAZAJ89UcqiEfYFiznPwiDzU6SWs51Cq0tDkUmBkYCI8nsKZLZUpdBUn4j6UIx74ADFEXOXXxsTkIFBPOvuolbmM%2FnpT%2F9j33sND768iqnaf2bBD%2B82%2FA1438d27kT%2FtIMNElIDAVIS%2B9Bcx7UDfDNN5FIBgPuoJuVrdE7Rvw%2Fx0JcQGgr0wzICLygY6pgGxJHx3llMjTCWnRHuF58ebOzJwNw03etpQwM%2FJ44tRzzJiIQDIlz8I%2FOLAQeAPFpO5qVCvqPFPr3WaS8LTNYHBbZqf2gem4%2FF8wbpwZ2Kvj%2BAR8%2FNEy5v8QpQ9rj5Ass9lsOeHRsgOp0tvXbkaIyq3ICcxg%2FxdhvARLOxYXdALXQsqCN7mZG7FLLDu2ADpGnbAYUwgFI9g6f8LQtkqjW8u3KMjqbnz&X-Amz-Signature=462db3b47e89796c4955abff4ccb0586dc22a67bcb67e182f31ac66d072b7fa4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

