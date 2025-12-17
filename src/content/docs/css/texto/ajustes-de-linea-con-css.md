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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NCNRKJV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T124747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAMHwZn0PUz2jYJDSaEuI83ie0%2FH33cjzHNAxxxqYd5WAiEAyDIC2UfuN684gh%2BFbGZtURCCgJbOT7A2DKXBEBhtYJgq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDBFOHYLyXwOYgTZCsSrcA%2BUJbsRp3YC%2Bz8gkwdzCrO1wfhg%2BqURu7%2BFcFG95a4dQbtfGjh%2BRRiVxAswhCU%2FOHuW4nkdQ%2BS0gI9dazi71IH9gK%2B4qxo0%2Fvupm1CmTv1YotaEhhs43H2g6SuKY%2FmC9WtnalhEr6pkMAkyj%2FU8n2p%2B0otA%2F0rKkK%2BGnrHcl204bloxEOL%2Fi%2BbAgFDv0xl%2Bd7aC5kkW1kfgpv65QikrJr65BsS0tw0ohanaw2CW%2F45vsIehH14RoQ3uECpcGds3QY%2FnS0JI%2BfKqRq9qmS4xD4T5wu8wlVl0kKJB5VVyJaHE2DsNBS4%2BmcdPJ59uYiMCK5%2FpBuH8EHtzsBj%2FTeofPk%2BG3Pts3pUmGTsqvoML5sDcFPEr6K%2BklaIgBIEefy8lM2eZRJEYh7KzDWGxQBgRiXJoO0rT%2BsGq0PX4hSVPxlwRAtQ%2FjxD6TbCuhzJqtyPKvVv09Nn7hEpFSSkPO%2B0bkgaWr7PtQX2KxMzjkc%2FFgPgldPOkuRYoIFQO3LqUjW4zmtGX2eigyHg6%2FWLFNEsTMuTLbM8%2B7e2IQwOZVD%2BvuTYf44KHqRpZd55cNWQJBb1cPdQmqX42Gwdp1uwW7mn%2BQ3VxOsDWTTMbcKRLYFXypN%2BxvPZArfsPayEm%2BXV5gMNTFisoGOqUBfTzM5gpgt2RKk15G0cU0DSPesvzZUp7EUA65qRG%2BaDXb0wuoHVCx9aHuY6Rm0mXm8o6gT64QZTX%2FfQQZma815OGgoiy8Xry%2BsPFe6BYzzey%2FlW5KAo6YgJuMqFICTm8SifwNzrKWDQ66JcRMLG%2FH4Hw%2FSENH82NOZ0zEiMF%2BFzJEX7KmTB%2Bn6ZUWq5l9hSCLtfaCVGK8T%2FplCyBQSycuKzk70%2FLt&X-Amz-Signature=1d8582bdfe2f64fca0abfb624dac744858d437114ad9c067a546bb9f6b7b5193&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NCNRKJV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T124747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAMHwZn0PUz2jYJDSaEuI83ie0%2FH33cjzHNAxxxqYd5WAiEAyDIC2UfuN684gh%2BFbGZtURCCgJbOT7A2DKXBEBhtYJgq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDBFOHYLyXwOYgTZCsSrcA%2BUJbsRp3YC%2Bz8gkwdzCrO1wfhg%2BqURu7%2BFcFG95a4dQbtfGjh%2BRRiVxAswhCU%2FOHuW4nkdQ%2BS0gI9dazi71IH9gK%2B4qxo0%2Fvupm1CmTv1YotaEhhs43H2g6SuKY%2FmC9WtnalhEr6pkMAkyj%2FU8n2p%2B0otA%2F0rKkK%2BGnrHcl204bloxEOL%2Fi%2BbAgFDv0xl%2Bd7aC5kkW1kfgpv65QikrJr65BsS0tw0ohanaw2CW%2F45vsIehH14RoQ3uECpcGds3QY%2FnS0JI%2BfKqRq9qmS4xD4T5wu8wlVl0kKJB5VVyJaHE2DsNBS4%2BmcdPJ59uYiMCK5%2FpBuH8EHtzsBj%2FTeofPk%2BG3Pts3pUmGTsqvoML5sDcFPEr6K%2BklaIgBIEefy8lM2eZRJEYh7KzDWGxQBgRiXJoO0rT%2BsGq0PX4hSVPxlwRAtQ%2FjxD6TbCuhzJqtyPKvVv09Nn7hEpFSSkPO%2B0bkgaWr7PtQX2KxMzjkc%2FFgPgldPOkuRYoIFQO3LqUjW4zmtGX2eigyHg6%2FWLFNEsTMuTLbM8%2B7e2IQwOZVD%2BvuTYf44KHqRpZd55cNWQJBb1cPdQmqX42Gwdp1uwW7mn%2BQ3VxOsDWTTMbcKRLYFXypN%2BxvPZArfsPayEm%2BXV5gMNTFisoGOqUBfTzM5gpgt2RKk15G0cU0DSPesvzZUp7EUA65qRG%2BaDXb0wuoHVCx9aHuY6Rm0mXm8o6gT64QZTX%2FfQQZma815OGgoiy8Xry%2BsPFe6BYzzey%2FlW5KAo6YgJuMqFICTm8SifwNzrKWDQ66JcRMLG%2FH4Hw%2FSENH82NOZ0zEiMF%2BFzJEX7KmTB%2Bn6ZUWq5l9hSCLtfaCVGK8T%2FplCyBQSycuKzk70%2FLt&X-Amz-Signature=1ef95cba186ae24270900279bcfee7e4263f11c85c0660b11211a32eef8d463e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

