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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SB2E7ZIT%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T001456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrN51yQ1ZlS%2BdKy33xrjFvvqhGj86N4RS6oBEWGK9R5QIhAMt7YmXB2T4sfVIG1U3sMEA%2FeO0O%2Bvkt0DbMFPDfWApdKv8DCHEQABoMNjM3NDIzMTgzODA1IgyzNlAzKGa8X85J7KIq3AO5pZLE%2Fc2F1%2FN%2FXU3a77vCiqEDWWqaiaW4TZ8bTNVbMxYvfOfAaKlSZjrY%2F9oBq5%2FvTT1vd8PIlO3pRlRAvKQb3GxTaLoBja0VdnRyCFwy5KVD07HIjh0oWl6Nva2xL50u3REMWpNikRtdaNWjNVn9fRxkB%2BgR4ftlMxnrvnY30K3qsFncxoKRx6tRYsu6dg%2Bs1UeV2gjyGncMA%2BSrl6kYTUZY1YS%2FMF8Io%2BBM5vi4A8GBl90dpNJJKhOsv53Xa9IuElsHRIIGJia6rPlN15KLlSPtV6Bg%2F3HGda6Pnhr6UXiYHT1NpbitP9NBHKQDoa3CA1hUIrYUUGene2PsUihDY%2BEyEmVYe5%2BlHQOoMJu9eapZ3Tfqiiu0s6ql5Z%2ByvUb%2FjBqySwte2ABEqbMVfdjudSqPBftDRjSK0Yi0h9hkdRQVu%2F1BH3uSvTMne9httf9Gsk%2Bt%2FP1V01Ms%2FEtml1tA%2FpyW2NEUbCvzmgmYJkv5xLyVirvnGHLClfjy4PbI7bWSEhHrvrAGiLzR%2FaVqE24FaX6C4qp%2BP8Zab3gyPSCpfJ8K1kkX5tJ1il%2FuF%2FYsfwbRzdzbYVE5IxF%2FGF8QbJekcK9wQqMhtyoemx7GT84hbW04SjZMWhrf1ZW82jCV34fKBjqkAdO5LDfYSvNKgCNoGZuer2OZBUQuEMRG2HPBm5OPd7CmoPpt2STEoSHnTiRVjXpC7eTO7NOKTT%2B4cm76fdf38vmL7UjG1QK%2FrMUno4otY%2BUl%2FkyngjVWnIzA2gtOah2qjoPJt8PSd2COZe8XHpRNwY0HA7OEZtWaPnvFEJFZyPsSxPNkPJ8CxMOOORq7yzHyl2QnkOT6tMbtUCR9eCi%2FyAcRWtDJ&X-Amz-Signature=4355795bbd43cc3d6c26ee3a010ac46d18848e340944ee5657910db19734e344&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SB2E7ZIT%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T001456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrN51yQ1ZlS%2BdKy33xrjFvvqhGj86N4RS6oBEWGK9R5QIhAMt7YmXB2T4sfVIG1U3sMEA%2FeO0O%2Bvkt0DbMFPDfWApdKv8DCHEQABoMNjM3NDIzMTgzODA1IgyzNlAzKGa8X85J7KIq3AO5pZLE%2Fc2F1%2FN%2FXU3a77vCiqEDWWqaiaW4TZ8bTNVbMxYvfOfAaKlSZjrY%2F9oBq5%2FvTT1vd8PIlO3pRlRAvKQb3GxTaLoBja0VdnRyCFwy5KVD07HIjh0oWl6Nva2xL50u3REMWpNikRtdaNWjNVn9fRxkB%2BgR4ftlMxnrvnY30K3qsFncxoKRx6tRYsu6dg%2Bs1UeV2gjyGncMA%2BSrl6kYTUZY1YS%2FMF8Io%2BBM5vi4A8GBl90dpNJJKhOsv53Xa9IuElsHRIIGJia6rPlN15KLlSPtV6Bg%2F3HGda6Pnhr6UXiYHT1NpbitP9NBHKQDoa3CA1hUIrYUUGene2PsUihDY%2BEyEmVYe5%2BlHQOoMJu9eapZ3Tfqiiu0s6ql5Z%2ByvUb%2FjBqySwte2ABEqbMVfdjudSqPBftDRjSK0Yi0h9hkdRQVu%2F1BH3uSvTMne9httf9Gsk%2Bt%2FP1V01Ms%2FEtml1tA%2FpyW2NEUbCvzmgmYJkv5xLyVirvnGHLClfjy4PbI7bWSEhHrvrAGiLzR%2FaVqE24FaX6C4qp%2BP8Zab3gyPSCpfJ8K1kkX5tJ1il%2FuF%2FYsfwbRzdzbYVE5IxF%2FGF8QbJekcK9wQqMhtyoemx7GT84hbW04SjZMWhrf1ZW82jCV34fKBjqkAdO5LDfYSvNKgCNoGZuer2OZBUQuEMRG2HPBm5OPd7CmoPpt2STEoSHnTiRVjXpC7eTO7NOKTT%2B4cm76fdf38vmL7UjG1QK%2FrMUno4otY%2BUl%2FkyngjVWnIzA2gtOah2qjoPJt8PSd2COZe8XHpRNwY0HA7OEZtWaPnvFEJFZyPsSxPNkPJ8CxMOOORq7yzHyl2QnkOT6tMbtUCR9eCi%2FyAcRWtDJ&X-Amz-Signature=c26519e542c03eeabfe0388529ab6877f7eea71418947e0c3f6c926739ff03ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

