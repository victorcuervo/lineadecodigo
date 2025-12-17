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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGJL6W4G%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T215057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1evUHsVjAA1Rtdxy30fVLrzk%2BI84O6j6TkM6FcOycUgIhAIaTUjV%2BOwDN5RItkYXo6l0QTINr0Y63mjHn2z1qBSz1KogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyYZuMuFvbpNHwFZxwq3AN%2BadjJh%2F5VVPC27ODfNh65LagTLkdXyXFAHOnDLhAN1xdMwqpF8IpE7wRJBf9OiAwB4FxC9I4bx3ke9PFS%2FUOCO%2BGmhTHphfcp063wuJFSycj8S4ktyGOlmo5oRxNPLkP1FAgpM1o0D04Bf%2Bldwl82ExUOIKcSYIHLT03k36Oo%2FR2H4MuSA0VnbUYhTtVouKxJInLPAoGO7n%2Fu7gqXdkTu%2FpJrknIfJqOQgUpwCXKodw4WghCmz7kHAN7eKOlaB%2BjC1nJYS5iR%2Fi%2FDrwLgbtIp3liGTBUNubmghGsNfB7rGdpM3UIdekMdZ1wzl6wa3gn7lMjGyi5uMwoR4hTfSdHTHVs0ynqxCDtfljoOaaG2RLgiMSOqT%2FE69YeO2B5gionk2AzL81YyV0SyZR7Jhr6GjyTCydQs%2FgA2eekb9pxiRYUWoCiBZy4%2BkOVJKBxFPqS4eLkGidtCYQgrSyJz8Ol2dAoM%2BhjYxxS3V1mkEqpUjtMoD7DB5fd15CaO3n6uJZrA13XPjnC9ZGN%2B4ikr434wfIdopPqCyexXWfTJq9op9Q%2F0nNppKjPmujyCAjJnqsG9%2BwUv9yBaMrpLZYScbwqKiLiFGz1QpRWd1iHViAiAp1zaLQj2BW5834cmCTDorYzKBjqkAahMDweoLvfAFuYqhCl0%2BkhdRSBCBPA1naENk0ylViD%2Boj%2FrSdqLaVkuqLITDAcqUath2iEQJa301BEF74zsni4EYFSA37qWkCLXxVN%2F1jfhxr3pobSL%2FtHol0WrUxbdug36b2wvJK4eB84Wn4jXuWjPS%2F5j4sxamkJ25taXOaSUJsOyAEwcH8i1ZAoJwHCHUzG8Q3buHXDIOI7SH4JR%2BGOhHgei&X-Amz-Signature=3197bc128c5cc8bc77f9e386f9f1c3d20ecbcdd72e567eab1ab5af38e320d1d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGJL6W4G%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T215057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1evUHsVjAA1Rtdxy30fVLrzk%2BI84O6j6TkM6FcOycUgIhAIaTUjV%2BOwDN5RItkYXo6l0QTINr0Y63mjHn2z1qBSz1KogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyYZuMuFvbpNHwFZxwq3AN%2BadjJh%2F5VVPC27ODfNh65LagTLkdXyXFAHOnDLhAN1xdMwqpF8IpE7wRJBf9OiAwB4FxC9I4bx3ke9PFS%2FUOCO%2BGmhTHphfcp063wuJFSycj8S4ktyGOlmo5oRxNPLkP1FAgpM1o0D04Bf%2Bldwl82ExUOIKcSYIHLT03k36Oo%2FR2H4MuSA0VnbUYhTtVouKxJInLPAoGO7n%2Fu7gqXdkTu%2FpJrknIfJqOQgUpwCXKodw4WghCmz7kHAN7eKOlaB%2BjC1nJYS5iR%2Fi%2FDrwLgbtIp3liGTBUNubmghGsNfB7rGdpM3UIdekMdZ1wzl6wa3gn7lMjGyi5uMwoR4hTfSdHTHVs0ynqxCDtfljoOaaG2RLgiMSOqT%2FE69YeO2B5gionk2AzL81YyV0SyZR7Jhr6GjyTCydQs%2FgA2eekb9pxiRYUWoCiBZy4%2BkOVJKBxFPqS4eLkGidtCYQgrSyJz8Ol2dAoM%2BhjYxxS3V1mkEqpUjtMoD7DB5fd15CaO3n6uJZrA13XPjnC9ZGN%2B4ikr434wfIdopPqCyexXWfTJq9op9Q%2F0nNppKjPmujyCAjJnqsG9%2BwUv9yBaMrpLZYScbwqKiLiFGz1QpRWd1iHViAiAp1zaLQj2BW5834cmCTDorYzKBjqkAahMDweoLvfAFuYqhCl0%2BkhdRSBCBPA1naENk0ylViD%2Boj%2FrSdqLaVkuqLITDAcqUath2iEQJa301BEF74zsni4EYFSA37qWkCLXxVN%2F1jfhxr3pobSL%2FtHol0WrUxbdug36b2wvJK4eB84Wn4jXuWjPS%2F5j4sxamkJ25taXOaSUJsOyAEwcH8i1ZAoJwHCHUzG8Q3buHXDIOI7SH4JR%2BGOhHgei&X-Amz-Signature=b98ec3014290fd7ed17c1715cc82595a0f5ae448b732ff5acba9fb6c41c37fc7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

