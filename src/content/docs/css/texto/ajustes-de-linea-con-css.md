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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UKCLLH4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T194406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEWNmAOUAUZgSCvkbr5FYov2b6eLt1%2Ff6sEic1L4Zf0GAiEAmgSkYmqgpD2QuWDvPqFgTaen74INWSkmmk21d6YyvDsqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJMwmSVElM3%2Bj%2BnDtCrcA1N2RRAtY7tPWH2T12xkCSOtum%2BpuRqvq7aEHjuFVFOuND1Gj9bW55pwSP42D79wdI%2B9Gg%2BmB%2Fa3HBMNOggR%2Fjdj%2Fn511sx8xvlj%2BsTJGDQWscTMQYchbf5USpJCi28AcfhVI6uwWCt6wlJB%2Bj8NivSqNfZXiN6Dx6wm36p9iAe2%2BOV0VN9L3DmpvF%2B8hWdZjTYSjXh0gi1ZQSfrtbemGSatW3AnVgNqtljAOaBGfhs56u4KYjCO1lZBaZ9jN%2BZBKV90lJaBasbRoFSTJvtjcwf%2BXXN9Iz62u0gJp3EmjaE%2B3GSzP4GTmQVzML9MtsOx%2BogSZ0iTWwLnfWH7HUE8NHCg6az%2B2V%2FlRh9ELESWgIL9Or7WLPctfonPpTsTABsaG5f2fu%2BU6pKIkO%2B93lsQoc4ufsNqySi16PLrjNCY6x3lVkAPlF2lecs6be%2FJKh22GMyxFQgA1v6HC4jg1iEVTua3l8oHwFjZlOQ%2FFs1CATrYyEl9G10yRTNbu6YhMTAv9%2FTBevpbAPfYdTOsTCCmOzdjyDIOj2CdIu9X61bhF3fPa7sgmsEWo1yvZWLQh4xE1feB4U%2FaUNs3jXKaJArGFAOEDlBGqqJGo6NE6ibNI8RJsRIVfTg92QR77EjSMMSKjMoGOqUBKw%2FgCPaZoCHrcBjnI4DXA7KheCy7biw6tfgyNGsgnOcSBkvhKTP4imyrhfIDKbpbCI4GgB5jVCjgjBgjFWKElZ3Db4eV0w4dw6VmYC%2F86Zy9OmzXQckbu2rNdBmEYRSYPWSGSN94mj4ibpck9Slq9wcoETgElDb5%2FClNvN1A%2FEvv6RQ77LLNRMoCXoK14pozkWI76VtaKGV4J9fPAtzLUJpi2dRs&X-Amz-Signature=61ba0a50d70db5a03d34cee3abf633bdf4663b66199047e340bf904a801e9c76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UKCLLH4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T194406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEWNmAOUAUZgSCvkbr5FYov2b6eLt1%2Ff6sEic1L4Zf0GAiEAmgSkYmqgpD2QuWDvPqFgTaen74INWSkmmk21d6YyvDsqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJMwmSVElM3%2Bj%2BnDtCrcA1N2RRAtY7tPWH2T12xkCSOtum%2BpuRqvq7aEHjuFVFOuND1Gj9bW55pwSP42D79wdI%2B9Gg%2BmB%2Fa3HBMNOggR%2Fjdj%2Fn511sx8xvlj%2BsTJGDQWscTMQYchbf5USpJCi28AcfhVI6uwWCt6wlJB%2Bj8NivSqNfZXiN6Dx6wm36p9iAe2%2BOV0VN9L3DmpvF%2B8hWdZjTYSjXh0gi1ZQSfrtbemGSatW3AnVgNqtljAOaBGfhs56u4KYjCO1lZBaZ9jN%2BZBKV90lJaBasbRoFSTJvtjcwf%2BXXN9Iz62u0gJp3EmjaE%2B3GSzP4GTmQVzML9MtsOx%2BogSZ0iTWwLnfWH7HUE8NHCg6az%2B2V%2FlRh9ELESWgIL9Or7WLPctfonPpTsTABsaG5f2fu%2BU6pKIkO%2B93lsQoc4ufsNqySi16PLrjNCY6x3lVkAPlF2lecs6be%2FJKh22GMyxFQgA1v6HC4jg1iEVTua3l8oHwFjZlOQ%2FFs1CATrYyEl9G10yRTNbu6YhMTAv9%2FTBevpbAPfYdTOsTCCmOzdjyDIOj2CdIu9X61bhF3fPa7sgmsEWo1yvZWLQh4xE1feB4U%2FaUNs3jXKaJArGFAOEDlBGqqJGo6NE6ibNI8RJsRIVfTg92QR77EjSMMSKjMoGOqUBKw%2FgCPaZoCHrcBjnI4DXA7KheCy7biw6tfgyNGsgnOcSBkvhKTP4imyrhfIDKbpbCI4GgB5jVCjgjBgjFWKElZ3Db4eV0w4dw6VmYC%2F86Zy9OmzXQckbu2rNdBmEYRSYPWSGSN94mj4ibpck9Slq9wcoETgElDb5%2FClNvN1A%2FEvv6RQ77LLNRMoCXoK14pozkWI76VtaKGV4J9fPAtzLUJpi2dRs&X-Amz-Signature=3ccb3269bed840f18483898dbe5049fc8f5f548e21557ef122efbad72637ec9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

