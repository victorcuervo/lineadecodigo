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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSL2UC7L%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T051031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFWA4efShtAPhiqLXLnW7pcWt3MzyD1AX1oZ3OMNX15CAiEA3nqOckTXr1usAYEF357yf5hBPYO32WRX1eEDmZ6yymkq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDP6eWf%2B4oTGp0ctRqircA2HmluVuGEX9CsHXkomwOpP4oV30Syxit21rWIS115mJSXvH34dHrIOwo8R4tN63qhcv%2BnXmULzlDkhTnA5DJQa4MwZfNE1knk8v46p8WfajPbmL16nrL2gq%2F%2BozX3PcMrkZgJ5MTnGFf0kaXRUZ87bqJvwcKM7A6wdKBbVY5eIlxv7BTF%2BsX2hnz2HEjShDSnLuA7z%2FQEkTg61TD63UzmdQMy4SyIWE3SRjCXhSb0GzIf3BUilYHhB6VRA7yiQlo6%2FaytUIjaBkjQjy%2FJLlpu1ruEpQedRN51eWSlQIzmpDDpCbMd%2B5Dy%2BEOpcFQqoS5Zxa%2Fj2U1KrjEQJWjzuH7GcOot9iOECpFRZm5FsCAKplALVhTs8kxYuiGj2osW6ik9GrY%2F6cJ18WcGy%2Bco2cma7Ffjxu1kxN3GI2LQ9Z7TD7B6Lzt4hM1YJXzY8n%2FecDJajOcOmyiFw6W6EmoKTYiknPdhgS5LxUMPcb495vkyB7cpzVjNG37Jrmxer%2FYvWOKbLxb0oUxD0%2BlwHKbCenqOVwxJHivpMl4%2BCuARvnfkf2grXqTa5EvDZByyDvxihbpaDJp%2F%2FBh9zlsyPmXYzYUlQ0XSI5dvKYQm43ntb%2F35XY7D21QRGflCVMOOQbMI7qiMoGOqUBjHvG%2BY7js1aU54JnyAOH9k6OByupGhVIkIckN3nTG%2FKe3jp%2FYuW5AiBpShjtFRx05BRwzXJ9pJxlvTLP4yDLZJgUnAfx8sZK99rvQN007rKAhkQ0mCb1EJ0%2BN1T4bBzRBtTewuL1hiHP0at12IIaDJi2cX8CRBxIYHHaKHCzyh54LK8%2FaaMOy3P4lCz6VqtsFX4rioq2Ojml7hlDOL%2FyXj0i0UfG&X-Amz-Signature=ed105bdba813dd969cc98f1e21dee7ed5d2afa46773054dfc70309f4d363ff0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSL2UC7L%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T051031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFWA4efShtAPhiqLXLnW7pcWt3MzyD1AX1oZ3OMNX15CAiEA3nqOckTXr1usAYEF357yf5hBPYO32WRX1eEDmZ6yymkq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDP6eWf%2B4oTGp0ctRqircA2HmluVuGEX9CsHXkomwOpP4oV30Syxit21rWIS115mJSXvH34dHrIOwo8R4tN63qhcv%2BnXmULzlDkhTnA5DJQa4MwZfNE1knk8v46p8WfajPbmL16nrL2gq%2F%2BozX3PcMrkZgJ5MTnGFf0kaXRUZ87bqJvwcKM7A6wdKBbVY5eIlxv7BTF%2BsX2hnz2HEjShDSnLuA7z%2FQEkTg61TD63UzmdQMy4SyIWE3SRjCXhSb0GzIf3BUilYHhB6VRA7yiQlo6%2FaytUIjaBkjQjy%2FJLlpu1ruEpQedRN51eWSlQIzmpDDpCbMd%2B5Dy%2BEOpcFQqoS5Zxa%2Fj2U1KrjEQJWjzuH7GcOot9iOECpFRZm5FsCAKplALVhTs8kxYuiGj2osW6ik9GrY%2F6cJ18WcGy%2Bco2cma7Ffjxu1kxN3GI2LQ9Z7TD7B6Lzt4hM1YJXzY8n%2FecDJajOcOmyiFw6W6EmoKTYiknPdhgS5LxUMPcb495vkyB7cpzVjNG37Jrmxer%2FYvWOKbLxb0oUxD0%2BlwHKbCenqOVwxJHivpMl4%2BCuARvnfkf2grXqTa5EvDZByyDvxihbpaDJp%2F%2FBh9zlsyPmXYzYUlQ0XSI5dvKYQm43ntb%2F35XY7D21QRGflCVMOOQbMI7qiMoGOqUBjHvG%2BY7js1aU54JnyAOH9k6OByupGhVIkIckN3nTG%2FKe3jp%2FYuW5AiBpShjtFRx05BRwzXJ9pJxlvTLP4yDLZJgUnAfx8sZK99rvQN007rKAhkQ0mCb1EJ0%2BN1T4bBzRBtTewuL1hiHP0at12IIaDJi2cX8CRBxIYHHaKHCzyh54LK8%2FaaMOy3P4lCz6VqtsFX4rioq2Ojml7hlDOL%2FyXj0i0UfG&X-Amz-Signature=f5b08a2bbf16eb105535a5d4d736e1e1b2955522bb8658c71bd7d706fc25d1f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

