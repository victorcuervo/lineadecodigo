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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RM6PML7Q%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T081919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCn96RWEv70unJYtKwYt8f7Sbxc%2BZjQhS3KnKPpKq0KAIhAJ0SmPwHyo%2BV2adRWfxFnezCt9Ab1kDlZWgFNL183zOPKv8DCHkQABoMNjM3NDIzMTgzODA1IgwKgXVSlLXNX7EX9%2Bcq3ANmCiSFXB4GB1XlJ8ouh4P81mBufo2U50BOk5vx9kA8o5E7FGtA5eDqISngCz9DG1ZGpuUs808eKfo86OfgYvW6PRbu2HsR0jAl24C8OOQ05n2s17xsJI15eI7zo4bjsKs9GbInX5VMpgdb334SZuiCOHni5NOcAKYLrtJX7VFWsMpPf%2BlG2%2F7E363VfcTcbIQDzW2QqN9pL7g5yYNZPpBdb01dw1i39na93RlfEiTbV7Kz36e30r1V%2Bzr8hAPm64heDSZaEhalQDo2LUMJQfOQZ96dBQ2EqsNswKgRY%2BcLoqSUYEncsoFqeeVlAsOlEeGK1m%2Bryi3Kd2IsqX2Kl8KKbsBKWeiHmA6uxR06T4KMC355Ot7qc2C0ywdjEdss3pVRolhUo%2BrmjAWQwbvch7cDS5i37fLcZegec%2FIUTi4hPHerIM%2B3b57VKOzO6tMou1U%2B1QAYFgXHJwmgaPXOfV28stdUoI0POZFjuz8bK0JbuZImUuWZTutcIYjEVcpmrradoS%2Bf1q8lmWrLoaFrZCN1%2FP%2BV4GOlP%2FiFU%2FztRA6KeBAimNHH90n%2F5MUiBSENDkoLgeOo3qlYHJOds5EuoS0hJ5Y6aqHXfI60AYBy9hQ%2BNTn2QJh9zJpaJOy%2FZjCguInKBjqkARYKptOJZ0UD407tg18PDDHILKlnd2Ok64hBCjlV9ZnT9XwlRLzNOr6UpnLOFvSrI1lQ%2F13XXw5s5bgAvhd7ErXB3R0m8Vt%2BBz7vtYhQDf4rU7tTQzgNHGArRXdCyrQERtyCKZZsVBo7nj7fe4Yby9JVQtT9Lpk5%2B%2F3i%2FhZoQiAhlD%2BetWf4ae0kKehxWCDTdyCey8kjudcWcl8HRLAZxn%2Bg1%2BMf&X-Amz-Signature=c95a3d49c009a47716115dc0d490ca9178ef3af50608024e1db6817ec010fa20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RM6PML7Q%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T081919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCn96RWEv70unJYtKwYt8f7Sbxc%2BZjQhS3KnKPpKq0KAIhAJ0SmPwHyo%2BV2adRWfxFnezCt9Ab1kDlZWgFNL183zOPKv8DCHkQABoMNjM3NDIzMTgzODA1IgwKgXVSlLXNX7EX9%2Bcq3ANmCiSFXB4GB1XlJ8ouh4P81mBufo2U50BOk5vx9kA8o5E7FGtA5eDqISngCz9DG1ZGpuUs808eKfo86OfgYvW6PRbu2HsR0jAl24C8OOQ05n2s17xsJI15eI7zo4bjsKs9GbInX5VMpgdb334SZuiCOHni5NOcAKYLrtJX7VFWsMpPf%2BlG2%2F7E363VfcTcbIQDzW2QqN9pL7g5yYNZPpBdb01dw1i39na93RlfEiTbV7Kz36e30r1V%2Bzr8hAPm64heDSZaEhalQDo2LUMJQfOQZ96dBQ2EqsNswKgRY%2BcLoqSUYEncsoFqeeVlAsOlEeGK1m%2Bryi3Kd2IsqX2Kl8KKbsBKWeiHmA6uxR06T4KMC355Ot7qc2C0ywdjEdss3pVRolhUo%2BrmjAWQwbvch7cDS5i37fLcZegec%2FIUTi4hPHerIM%2B3b57VKOzO6tMou1U%2B1QAYFgXHJwmgaPXOfV28stdUoI0POZFjuz8bK0JbuZImUuWZTutcIYjEVcpmrradoS%2Bf1q8lmWrLoaFrZCN1%2FP%2BV4GOlP%2FiFU%2FztRA6KeBAimNHH90n%2F5MUiBSENDkoLgeOo3qlYHJOds5EuoS0hJ5Y6aqHXfI60AYBy9hQ%2BNTn2QJh9zJpaJOy%2FZjCguInKBjqkARYKptOJZ0UD407tg18PDDHILKlnd2Ok64hBCjlV9ZnT9XwlRLzNOr6UpnLOFvSrI1lQ%2F13XXw5s5bgAvhd7ErXB3R0m8Vt%2BBz7vtYhQDf4rU7tTQzgNHGArRXdCyrQERtyCKZZsVBo7nj7fe4Yby9JVQtT9Lpk5%2B%2F3i%2FhZoQiAhlD%2BetWf4ae0kKehxWCDTdyCey8kjudcWcl8HRLAZxn%2Bg1%2BMf&X-Amz-Signature=8b1eefebe5085a0d0c1f88d0c9c8c3f9c11fa16f2ccf2f8fedfe106c112d7471&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

