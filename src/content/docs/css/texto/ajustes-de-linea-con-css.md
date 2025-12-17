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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UM7TW3XI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T082051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBlidlgRZVunsdexrRe1LjhyWAxLmTDyR7U%2BCd35QPzJAiEAqkxPslOqOqWmsuyVDe%2BXoEKgeJWWT0cR5mwItc3vxacq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDFkAeDqLldN8%2FvOwCCrcA8D8e8trAEY%2BMyRkN%2FV5duzU3ZpBipKh1pv%2Fb8XeC99TC42VsHSVME5ZKx4B%2BujwWzpj0H7bDDQINQ%2FsstSj7owb%2BEuWwnmepzbC2BwR3PfuXmaOPNlmtB5o8ClXsWkpivB1KYS%2BuG4YIoCU%2F936Mt9yZ86M3CrBjFV4ajzc5srM66vApfAPbWKXOpVLX%2FTOpS04orvgRlaDFV2xWLO9hpOGC0yipZjH%2BzTBRbghVPwupHnnECoX9Shx%2FZUdG4C10WLCOSOKAat12ziBpyqLa%2BJolo1x778ETqzzaYy1q%2BinoSSw87K%2B%2B8%2B604Y4Nle%2BdjoCP%2BrV7jkhTgjs6AYpjLP2ZISYCGj0ra2kE2lB9dhhaNQ0ICITKPzr560DuSc4AbhWs9SgQ44WHohLycNQNSSITcmNIVWxj1nuYU7NT9MGnJrtgf50JSb%2FfhnISjwN5l2UoKB%2BDeVpW473TCaMVHGZMNyKgeI7fus0IdUtaI9uZTtqglbLzIZMBAizeq0Owx84aO0zpS%2BF4ONShAnNCXuQrkGOz3QhH9AaAWmVc2BJCFNbONBaiyTXlYlBuAlbi4RdmTJBuJMzDe13ywZYqsvrnCYQLjOsmJy1UkHQX2%2ByMhavVEHhExY%2FfXCfMK%2B4icoGOqUBaDzdaiLuKD5m0uEXz%2F9rAeouHBBRMsaINrnbYQQU6W2l%2BSBceyrTzL6T%2FuGvV7rVxVIC8IKBiG6CjbhbdWu2sQ4aJr2Wsoo8m1ta1%2F4ih1hJrs%2BoYd8YbZ3RLWtiVvSfFHX26sYHmr803R7freJ%2BliJmwijpUfmAfzmdIrhfZx3TP0nqwbBCix4ezhnyc9xhS4y8KP1BaTnpXcplzBE5idOokdHX&X-Amz-Signature=324bc72879b760e96bb4dde55942259d80bd952f94baae528c287778c21b2b06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UM7TW3XI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T082051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBlidlgRZVunsdexrRe1LjhyWAxLmTDyR7U%2BCd35QPzJAiEAqkxPslOqOqWmsuyVDe%2BXoEKgeJWWT0cR5mwItc3vxacq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDFkAeDqLldN8%2FvOwCCrcA8D8e8trAEY%2BMyRkN%2FV5duzU3ZpBipKh1pv%2Fb8XeC99TC42VsHSVME5ZKx4B%2BujwWzpj0H7bDDQINQ%2FsstSj7owb%2BEuWwnmepzbC2BwR3PfuXmaOPNlmtB5o8ClXsWkpivB1KYS%2BuG4YIoCU%2F936Mt9yZ86M3CrBjFV4ajzc5srM66vApfAPbWKXOpVLX%2FTOpS04orvgRlaDFV2xWLO9hpOGC0yipZjH%2BzTBRbghVPwupHnnECoX9Shx%2FZUdG4C10WLCOSOKAat12ziBpyqLa%2BJolo1x778ETqzzaYy1q%2BinoSSw87K%2B%2B8%2B604Y4Nle%2BdjoCP%2BrV7jkhTgjs6AYpjLP2ZISYCGj0ra2kE2lB9dhhaNQ0ICITKPzr560DuSc4AbhWs9SgQ44WHohLycNQNSSITcmNIVWxj1nuYU7NT9MGnJrtgf50JSb%2FfhnISjwN5l2UoKB%2BDeVpW473TCaMVHGZMNyKgeI7fus0IdUtaI9uZTtqglbLzIZMBAizeq0Owx84aO0zpS%2BF4ONShAnNCXuQrkGOz3QhH9AaAWmVc2BJCFNbONBaiyTXlYlBuAlbi4RdmTJBuJMzDe13ywZYqsvrnCYQLjOsmJy1UkHQX2%2ByMhavVEHhExY%2FfXCfMK%2B4icoGOqUBaDzdaiLuKD5m0uEXz%2F9rAeouHBBRMsaINrnbYQQU6W2l%2BSBceyrTzL6T%2FuGvV7rVxVIC8IKBiG6CjbhbdWu2sQ4aJr2Wsoo8m1ta1%2F4ih1hJrs%2BoYd8YbZ3RLWtiVvSfFHX26sYHmr803R7freJ%2BliJmwijpUfmAfzmdIrhfZx3TP0nqwbBCix4ezhnyc9xhS4y8KP1BaTnpXcplzBE5idOokdHX&X-Amz-Signature=e8850bbc3285fb415284427db152017d5c40339ced18e50dbc84076f7b154faa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

