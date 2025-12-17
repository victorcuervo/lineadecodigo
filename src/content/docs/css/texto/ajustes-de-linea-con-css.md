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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667REECEPJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T055617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIsPQW828SbDfnVm5OzvunIVQg1S9N0cp5QSfI8VrttQIhAJqDfle0%2BhJGsve%2F9KaflguEpAb5rXOhwN1d5Bu4DCk5Kv8DCHcQABoMNjM3NDIzMTgzODA1IgzVsoJzBDbJaDSGjZYq3APVYssI1GhpMxlQpUQbzy%2FrXUgwKCUI7i%2B3lYnzKuLoCLKQbsrR8OOoVpx7k6e%2B98NBmV6lf2JmFG9Bd4Zxlxm3gSKm8yde1b%2B6bQZyc6gwLWutKQSez8y%2BlE%2B0Vdk9BiTXiWuEO5HiCVE27V%2FD%2Bl6mL6Aohi6PcFikGE07NuTOlBcabuqQ7dr2NA2JQRE18DN8kU0XmBoKU5I64PdDO2mw7zRJJdMaAn%2BgKz5egOPGI%2BYoZx3%2FZKJVHg4cOhu8VbTkfmMETefwXccaOaagZ5QE9RkD0e472qa9s%2BQV97qS4oCAU2f5Vayes7B5Hwk%2BYdUNvtSlwDe6ruZX8xVPz1oPieJkq165ek5hykLjZhBwmcJ4H0n9LcGQx0y1LcXcAvSaOSTHl1St8tcmcxL0Hqbun%2F7nMNnFLifB3phcuAV8ioeMHnvJQdZgmSV5S1LDvKlZ62%2FVpboagOaubw7BQDtmTltLW%2BTAC%2BuLaoCCs%2FGqK07bfK%2F5sY%2FPhVLTIOsfCw%2BOzU7npQ19gzzZP1H%2Fylwy8L9QaoGYroVR1rTK3qBmnV6%2BsoXHo0SoKI3UiXxFHUbKQp1DSMy7ri1lZVKUQZSAP7f7N0LE66fUj4WUNNOy7ojMne4ALoSOARqK5jDRg4nKBjqkAXPU8TbjXltNKvfXlD3mQThr1LkyedJ%2BDVCA%2FYtetxwXlWnH3k01HdGxIsnt2XlMhP6x7WTEfbJgQpwjsVhgur4KFKKdNJGUEuAfSVKMeZPayRwo4KxUWrNQiHki4WcqgVZJWBL3%2BgyvFB4dX0rTyMqOYmhjlbABQuzzoxX1V925jjVQ7K15irMyrpbJnF%2BuNyZNje%2FvQawBFBogHbzLedCGY4IC&X-Amz-Signature=326d72af1debba4885a37119da22cba4c777a0a4820b6c3dd3bec99f88fc7706&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667REECEPJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T055617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIsPQW828SbDfnVm5OzvunIVQg1S9N0cp5QSfI8VrttQIhAJqDfle0%2BhJGsve%2F9KaflguEpAb5rXOhwN1d5Bu4DCk5Kv8DCHcQABoMNjM3NDIzMTgzODA1IgzVsoJzBDbJaDSGjZYq3APVYssI1GhpMxlQpUQbzy%2FrXUgwKCUI7i%2B3lYnzKuLoCLKQbsrR8OOoVpx7k6e%2B98NBmV6lf2JmFG9Bd4Zxlxm3gSKm8yde1b%2B6bQZyc6gwLWutKQSez8y%2BlE%2B0Vdk9BiTXiWuEO5HiCVE27V%2FD%2Bl6mL6Aohi6PcFikGE07NuTOlBcabuqQ7dr2NA2JQRE18DN8kU0XmBoKU5I64PdDO2mw7zRJJdMaAn%2BgKz5egOPGI%2BYoZx3%2FZKJVHg4cOhu8VbTkfmMETefwXccaOaagZ5QE9RkD0e472qa9s%2BQV97qS4oCAU2f5Vayes7B5Hwk%2BYdUNvtSlwDe6ruZX8xVPz1oPieJkq165ek5hykLjZhBwmcJ4H0n9LcGQx0y1LcXcAvSaOSTHl1St8tcmcxL0Hqbun%2F7nMNnFLifB3phcuAV8ioeMHnvJQdZgmSV5S1LDvKlZ62%2FVpboagOaubw7BQDtmTltLW%2BTAC%2BuLaoCCs%2FGqK07bfK%2F5sY%2FPhVLTIOsfCw%2BOzU7npQ19gzzZP1H%2Fylwy8L9QaoGYroVR1rTK3qBmnV6%2BsoXHo0SoKI3UiXxFHUbKQp1DSMy7ri1lZVKUQZSAP7f7N0LE66fUj4WUNNOy7ojMne4ALoSOARqK5jDRg4nKBjqkAXPU8TbjXltNKvfXlD3mQThr1LkyedJ%2BDVCA%2FYtetxwXlWnH3k01HdGxIsnt2XlMhP6x7WTEfbJgQpwjsVhgur4KFKKdNJGUEuAfSVKMeZPayRwo4KxUWrNQiHki4WcqgVZJWBL3%2BgyvFB4dX0rTyMqOYmhjlbABQuzzoxX1V925jjVQ7K15irMyrpbJnF%2BuNyZNje%2FvQawBFBogHbzLedCGY4IC&X-Amz-Signature=a4f9e43fd436e4a1914eb1de2cad52708f05e6867de8e1758aaaea2088c9fb40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

