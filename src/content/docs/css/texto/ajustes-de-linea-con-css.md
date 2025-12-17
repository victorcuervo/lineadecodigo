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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TQHWNY3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T032658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDJpUcxweUdreFrKEhMosr%2Fzw%2FN36pT0OC5%2BzPpYxkDdAiEAt1mq5If%2F8LhNiw5%2F5e1U497Mxi%2BZQHMgZ0LAWXZVYoQq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDGm%2B3yUI1WJNPIJpeircA8vwsLzypPv2bf9NcBDv%2F6tqlkQzSPF6SLm6BKc25fyc5FzOosyLqLgnPU%2Bm88Gmpl71VkVJOChfNwaz9CiaeSaF65pm9G03YwCQhno1AG8RiAWDGEtp0J%2FLntPnUR56fssfjYV3fbmE%2Fp99u5yKEbfnp42ola%2BfYgj1Szyo7%2B6%2FCLHw3oq4UM6K4CLDBLh7ETENZ9ABviZ%2B5T2Ex%2B19DpeRIEesaE0xAbFoTA1m9YmOjIiDRBVS8shgeg%2For81D7ND%2FooT3r7BOOF5wKiYC1KHRnCktbsuP2gQxwYZjv%2BA3dkRDXKX0UADGEnrzzoTYlcba3NyCw1WDXQgKg1ufLyP5H5kgI1CVWmf4qZte%2BsxBFk%2FHUKN5fOH6T%2BNnqU21xQceaf%2BGKbIL7iCKLZw2y4yvEd1bK5lhFc1NnsI2hRHsYNFgGVQmd52F3g%2Bt%2Bk3yDML5yVVAp8ChF9%2Fgk8AH7svhito34lSK6JMxj35niFUzsIoyI%2Fjl8nkeVeInf7wvT84T7%2Byd5Liux80sTXbeehyC%2FrPmp%2FaDPpkziJM4FZMPQ8A%2BbDAG8V7qTe5Inli4cTNcy76uCGyxkaVWMSH4U4z2zDiONQzhTJtwVyHHfaxubbyF3lKdrjCF4LtVMPmxiMoGOqUBYxa2xv7%2BzzxDwE%2FTPQmIReW604kQkm%2F1SOOzFp2D6lhWqGxYBrtMFWPyvdsqOGIBntSAjGcOGakLtm2%2F%2F0RFQ2Ce0uruNmQjt4jr%2Fbh6oKO0INs18hhwowyylnuSoHBCI5dYfaNEcwJNHB3W5Jxl1C%2B2VK9eFSXklU2TLuy8l1Hz9eEPgKwczStZno52DT%2BWG%2FW%2FYLQvyefhfrAUrDW2cXN7OhL2&X-Amz-Signature=08ab24e7e88ea205e4a482c95b9b43c929bff3d6ace1a04aed697525f387a0b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TQHWNY3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T032658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDJpUcxweUdreFrKEhMosr%2Fzw%2FN36pT0OC5%2BzPpYxkDdAiEAt1mq5If%2F8LhNiw5%2F5e1U497Mxi%2BZQHMgZ0LAWXZVYoQq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDGm%2B3yUI1WJNPIJpeircA8vwsLzypPv2bf9NcBDv%2F6tqlkQzSPF6SLm6BKc25fyc5FzOosyLqLgnPU%2Bm88Gmpl71VkVJOChfNwaz9CiaeSaF65pm9G03YwCQhno1AG8RiAWDGEtp0J%2FLntPnUR56fssfjYV3fbmE%2Fp99u5yKEbfnp42ola%2BfYgj1Szyo7%2B6%2FCLHw3oq4UM6K4CLDBLh7ETENZ9ABviZ%2B5T2Ex%2B19DpeRIEesaE0xAbFoTA1m9YmOjIiDRBVS8shgeg%2For81D7ND%2FooT3r7BOOF5wKiYC1KHRnCktbsuP2gQxwYZjv%2BA3dkRDXKX0UADGEnrzzoTYlcba3NyCw1WDXQgKg1ufLyP5H5kgI1CVWmf4qZte%2BsxBFk%2FHUKN5fOH6T%2BNnqU21xQceaf%2BGKbIL7iCKLZw2y4yvEd1bK5lhFc1NnsI2hRHsYNFgGVQmd52F3g%2Bt%2Bk3yDML5yVVAp8ChF9%2Fgk8AH7svhito34lSK6JMxj35niFUzsIoyI%2Fjl8nkeVeInf7wvT84T7%2Byd5Liux80sTXbeehyC%2FrPmp%2FaDPpkziJM4FZMPQ8A%2BbDAG8V7qTe5Inli4cTNcy76uCGyxkaVWMSH4U4z2zDiONQzhTJtwVyHHfaxubbyF3lKdrjCF4LtVMPmxiMoGOqUBYxa2xv7%2BzzxDwE%2FTPQmIReW604kQkm%2F1SOOzFp2D6lhWqGxYBrtMFWPyvdsqOGIBntSAjGcOGakLtm2%2F%2F0RFQ2Ce0uruNmQjt4jr%2Fbh6oKO0INs18hhwowyylnuSoHBCI5dYfaNEcwJNHB3W5Jxl1C%2B2VK9eFSXklU2TLuy8l1Hz9eEPgKwczStZno52DT%2BWG%2FW%2FYLQvyefhfrAUrDW2cXN7OhL2&X-Amz-Signature=24e31f56656a698cf8eb8d0192e619b723ad3b6f26b07f786553f927537dad40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

