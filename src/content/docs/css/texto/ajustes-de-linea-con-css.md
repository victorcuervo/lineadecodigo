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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XH64GDO%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T002536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID5jEyHNtHTRkjq7lXzyFv1GchlYWvCsBG14zOSCj9z0AiAA6cbRzmp2mIOq%2B0tlwq70kE%2F3jGfZWChRvpoHcYmaHyr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMEninwxASsX7NGoIeKtwDXbWhsBb%2B5L7uDHrWlBynVfgPfQGz9FECR7dUMwuGvCgP%2BrR2I9TRUjpmT8Mg%2BfZwLNi8XP8uxalK7AA1ppNkX3sSRq%2F%2FOg7Jbq%2FTD3wBbM3OC2cX0tGCMUSQXztco%2FJVu%2BlHM8GwHxNaVsUB%2FndT2nd3114aLPXGTrByMMNsAmNwr8a%2B%2BOyle%2F%2F7n%2BvCTus%2BqmIg%2F4VZs7mtkz8XRc%2FoS2%2Fq7YIrmErgRiKTtosdufRyRwssMV7kGRIM89cxmNveo2mKpgFpIKHYOXc7hZ1w6cNULdKEL4bm8r4qp2SHu5HU8dU8geFxBBPwOrOVhE9PvxPmctX9lRvefslY%2FK7R%2FjVwKaFqy3IDZ8RVCmFcQ0o2xIGFcT%2BNOhB2i%2B%2BmAjar5QHwjWEDH7qCYBvjxGIhRjFxlAd6euTWl3dzT9o%2FItqfRMM6NF9IoukxgmzezFLycrKkNykVMOIRy3Da5SgW3jQJO1AAn0hILuzZAd4arAZvIOsIJtBmFNoU9A74UXy52ZHsaswkv%2FWQGq2E6Q%2B4mqJDPoPN1XigRDAL4hQd58%2FHZaP%2FrzOuKV3S0mpM2HaX3Z5Fa2GGpSsROH%2BOzMWMteWDIX4j671LFxDvn0alW08K9%2Bo%2B7qP59eAnAiQwhN%2BHygY6pgE%2FYZV9b0N8cdiz00lvV4436GdEfOuijnE9At1ZrnBs%2BK1tTB80ZTRvpJ18KcMmW2EQvUImUT2BtidXHS0mw0wzOm%2FXzyxjm5GeOHZUO0XpaTJ0hqlEwzbVd09HV6Ayiz8QU1MfzAuetqCJ5jsSDCmelmc4w4OiSca4lR70LtLUrZJ%2FjilgBIP0QYpg%2FDxgI6KFPhO0QrIaCJVRbFp7oc7IXRk%2Brt4S&X-Amz-Signature=5b1dff654386ddb25976fff474a5edaeaf3d2aa95589b215eb016491791a3eff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XH64GDO%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T002536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID5jEyHNtHTRkjq7lXzyFv1GchlYWvCsBG14zOSCj9z0AiAA6cbRzmp2mIOq%2B0tlwq70kE%2F3jGfZWChRvpoHcYmaHyr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMEninwxASsX7NGoIeKtwDXbWhsBb%2B5L7uDHrWlBynVfgPfQGz9FECR7dUMwuGvCgP%2BrR2I9TRUjpmT8Mg%2BfZwLNi8XP8uxalK7AA1ppNkX3sSRq%2F%2FOg7Jbq%2FTD3wBbM3OC2cX0tGCMUSQXztco%2FJVu%2BlHM8GwHxNaVsUB%2FndT2nd3114aLPXGTrByMMNsAmNwr8a%2B%2BOyle%2F%2F7n%2BvCTus%2BqmIg%2F4VZs7mtkz8XRc%2FoS2%2Fq7YIrmErgRiKTtosdufRyRwssMV7kGRIM89cxmNveo2mKpgFpIKHYOXc7hZ1w6cNULdKEL4bm8r4qp2SHu5HU8dU8geFxBBPwOrOVhE9PvxPmctX9lRvefslY%2FK7R%2FjVwKaFqy3IDZ8RVCmFcQ0o2xIGFcT%2BNOhB2i%2B%2BmAjar5QHwjWEDH7qCYBvjxGIhRjFxlAd6euTWl3dzT9o%2FItqfRMM6NF9IoukxgmzezFLycrKkNykVMOIRy3Da5SgW3jQJO1AAn0hILuzZAd4arAZvIOsIJtBmFNoU9A74UXy52ZHsaswkv%2FWQGq2E6Q%2B4mqJDPoPN1XigRDAL4hQd58%2FHZaP%2FrzOuKV3S0mpM2HaX3Z5Fa2GGpSsROH%2BOzMWMteWDIX4j671LFxDvn0alW08K9%2Bo%2B7qP59eAnAiQwhN%2BHygY6pgE%2FYZV9b0N8cdiz00lvV4436GdEfOuijnE9At1ZrnBs%2BK1tTB80ZTRvpJ18KcMmW2EQvUImUT2BtidXHS0mw0wzOm%2FXzyxjm5GeOHZUO0XpaTJ0hqlEwzbVd09HV6Ayiz8QU1MfzAuetqCJ5jsSDCmelmc4w4OiSca4lR70LtLUrZJ%2FjilgBIP0QYpg%2FDxgI6KFPhO0QrIaCJVRbFp7oc7IXRk%2Brt4S&X-Amz-Signature=b09405a3118f35e59b4bca7c603a18b30bede3130aef9132c9084c13ded8b541&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

