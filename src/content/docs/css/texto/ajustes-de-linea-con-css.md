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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJIL42BA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T133135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGL3GYyYZkH%2B8M0mGI6j6GD%2FHwkhoBN%2B1ig%2Ftnt08bxhAiEA18u3mV45hL5FgBSzSKGEbPomR%2FO4hpvx0rpZJ7IrVHsq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDE3Yxt0omnIK9AEPZCrcA6B%2FBY22qtmOxWLlEDnATRdn%2F8INyWBFh1ov0r5Z43WqxkNM8YNKRO3izHWbbdfZ3d6RxMgHmq4ZxwJGV3t9DfN8aifgQtFmz0%2FQKfPwhtSgb2bKPDLtHle7h1yj9Oc48K2kW77d7rvfx7C6m6Fw3NPF24vsYNt430zRNbZFDRLquHGWDmx7%2FZ%2BIkPqlQjD4nMDopvEDG5qHyNFqKHsZm2CxggWWUUtBjrVJR3Fv2FNSQXVryFu2FCi9KHKt%2FHiehii4wq013W5hwf1rvVsLkp1gxYu0tL%2FJkPOWrsIW2UPLu7KehDsrY5SCVgNtDwio3idcO0TUHD4FeAWWGgGJTa01raGptoswb%2F4dH%2BtLFPJD9LW6kIkNouYKPygBpj52rFo%2FtwlSXT3yRFV89bVj1iorMsX4ZMAKmSrOFUbOqAH53bC1k%2FfjqVmxPg9mbmFWncitcyvSNUUDw2VlHyJLOzae1BzMfaUlSW0saAfB6XzScFsC2gYRy7mq5g7VWaaqIDzYZdB6Vk8809T4U4YkNpSNE8IfmQYoOXcKVRBiKeswxtJs569TFVdXxBrLiDbdMQsyx0aept2kjA9cuygtyRvVhLsGKdChq24MQcQD3xfmh8WO5j8CiCEkCxL8MPHFisoGOqUBmNZac%2BXvzgcBtsNmMzjuyzvyMffc4LtbneNcq%2F5dDjGv%2Fs1INliD41gxH3%2B0i5MPYQjNjmoDmx%2FLa7OlnSWYlIsh%2BN6nk92cWQcvlwDyIT4YicMxZ2nke4gUeLAp8exp2WWXvUh1MiyVpjObtg7PlJPMbvtN02o48pcxYxArKpOMkkTUgFqgW34gFmYfaDEyJxGCxUFdQLXoI9z%2FJAnbTQ0z2HIS&X-Amz-Signature=fa81afb3aab522c9260fca578bd73ac2fefad49cf7d60e60289eff71cab9a385&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJIL42BA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T133135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGL3GYyYZkH%2B8M0mGI6j6GD%2FHwkhoBN%2B1ig%2Ftnt08bxhAiEA18u3mV45hL5FgBSzSKGEbPomR%2FO4hpvx0rpZJ7IrVHsq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDE3Yxt0omnIK9AEPZCrcA6B%2FBY22qtmOxWLlEDnATRdn%2F8INyWBFh1ov0r5Z43WqxkNM8YNKRO3izHWbbdfZ3d6RxMgHmq4ZxwJGV3t9DfN8aifgQtFmz0%2FQKfPwhtSgb2bKPDLtHle7h1yj9Oc48K2kW77d7rvfx7C6m6Fw3NPF24vsYNt430zRNbZFDRLquHGWDmx7%2FZ%2BIkPqlQjD4nMDopvEDG5qHyNFqKHsZm2CxggWWUUtBjrVJR3Fv2FNSQXVryFu2FCi9KHKt%2FHiehii4wq013W5hwf1rvVsLkp1gxYu0tL%2FJkPOWrsIW2UPLu7KehDsrY5SCVgNtDwio3idcO0TUHD4FeAWWGgGJTa01raGptoswb%2F4dH%2BtLFPJD9LW6kIkNouYKPygBpj52rFo%2FtwlSXT3yRFV89bVj1iorMsX4ZMAKmSrOFUbOqAH53bC1k%2FfjqVmxPg9mbmFWncitcyvSNUUDw2VlHyJLOzae1BzMfaUlSW0saAfB6XzScFsC2gYRy7mq5g7VWaaqIDzYZdB6Vk8809T4U4YkNpSNE8IfmQYoOXcKVRBiKeswxtJs569TFVdXxBrLiDbdMQsyx0aept2kjA9cuygtyRvVhLsGKdChq24MQcQD3xfmh8WO5j8CiCEkCxL8MPHFisoGOqUBmNZac%2BXvzgcBtsNmMzjuyzvyMffc4LtbneNcq%2F5dDjGv%2Fs1INliD41gxH3%2B0i5MPYQjNjmoDmx%2FLa7OlnSWYlIsh%2BN6nk92cWQcvlwDyIT4YicMxZ2nke4gUeLAp8exp2WWXvUh1MiyVpjObtg7PlJPMbvtN02o48pcxYxArKpOMkkTUgFqgW34gFmYfaDEyJxGCxUFdQLXoI9z%2FJAnbTQ0z2HIS&X-Amz-Signature=987a0b4e83ad5248d4d8ab7dd4c2113a206d548fd689c57cb36bff6caa31a784&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

