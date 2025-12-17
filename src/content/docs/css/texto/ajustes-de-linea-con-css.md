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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VC6RFUXP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T144251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNd4ZvjC8pQq%2Fmf3k3AgNLotcryBsb03dW5mX0K4xZOQIhAJDODZYFV%2BGQdsiUuD6AZF3uuwOnM82mLuNsAREeOAm1KogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzMLTIawvodVY7OPxYq3AMdqIyzBOaXgo7OBLbthlpHb0Q00Gp9m9anYp6Dyl8oneBejdgIrHXDP5WZqf%2BT8cVLPcK4L8k6iMZ9jTKTM9Ybp%2BwzjloFIIuD4odEWbilw9SF%2Fatl%2FiJdl4ot9GvxLRXn%2FDrF%2BYTDks7C5ghW%2FeucTz1mxkPJ0VfRIxuxSgRlmz9DlkRlRlO23Ukh3kdy25XmjIGqFd9WKuMSFQWPZJkFkDR9XaDNLxpekGseFzJq4voY%2Bc4t0chl8L0J1BMT%2F6BKesV9rwrI5LqhfylLXNwcpLPMXOHJcl4eIwQc6U53RZU3U3JwUk2tGpREWGg6QLutbTtZZjcOiNQA0TYDWaxjnLv9l3e4TDSHInbPLMAaa8LUYlg%2FBLXS8rTqT4maQyLpWyCGEVzKWF6YKyh%2F94YvhgogJNonpWrkugadDu1CePBE6t1oTl5g23jvFeR%2B%2BabQWnW8ZikQ6KNsXIpq%2Bet28oWKyRYAvQz1f%2B8QvvCiL2QHAv2elgA0r2unNyfGmZyx2ZA6ZdrV8T%2BsK6U7twa28EgR0807i52JsN1P4GKSkMC7YSyuIcElr0jVm5cKm4%2BPRyxNvzoHEAVo4MxB%2BZIBqp3vfajH6ol9wmcTWIiwkH36NU8ySVSWvjtAKTDc%2F4rKBjqkARloHrkrE8yYz%2FA1V7a62UofM9j9D7JpIKijflI18hHRZvCPLg0ZuLXg3n6jeWe27CURpa32rt2gbJu4aW2UsWnGMJCw5gANIgeesyYC13KMRRaXRatx5rXq9G4GctHNu5qQuikKo3cZRE157bEzGGYvoMFYWmp7qtRuvkGTiPMYfO%2FtvPSxfY6Pt7T70mi1MiTAlqCrbV34TQ4p9ulucl5EMY6P&X-Amz-Signature=6da77787a4afc426f63f7bc6634321d68dc4843ccc17986131dcb28c2ecebba8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VC6RFUXP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T144251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNd4ZvjC8pQq%2Fmf3k3AgNLotcryBsb03dW5mX0K4xZOQIhAJDODZYFV%2BGQdsiUuD6AZF3uuwOnM82mLuNsAREeOAm1KogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzMLTIawvodVY7OPxYq3AMdqIyzBOaXgo7OBLbthlpHb0Q00Gp9m9anYp6Dyl8oneBejdgIrHXDP5WZqf%2BT8cVLPcK4L8k6iMZ9jTKTM9Ybp%2BwzjloFIIuD4odEWbilw9SF%2Fatl%2FiJdl4ot9GvxLRXn%2FDrF%2BYTDks7C5ghW%2FeucTz1mxkPJ0VfRIxuxSgRlmz9DlkRlRlO23Ukh3kdy25XmjIGqFd9WKuMSFQWPZJkFkDR9XaDNLxpekGseFzJq4voY%2Bc4t0chl8L0J1BMT%2F6BKesV9rwrI5LqhfylLXNwcpLPMXOHJcl4eIwQc6U53RZU3U3JwUk2tGpREWGg6QLutbTtZZjcOiNQA0TYDWaxjnLv9l3e4TDSHInbPLMAaa8LUYlg%2FBLXS8rTqT4maQyLpWyCGEVzKWF6YKyh%2F94YvhgogJNonpWrkugadDu1CePBE6t1oTl5g23jvFeR%2B%2BabQWnW8ZikQ6KNsXIpq%2Bet28oWKyRYAvQz1f%2B8QvvCiL2QHAv2elgA0r2unNyfGmZyx2ZA6ZdrV8T%2BsK6U7twa28EgR0807i52JsN1P4GKSkMC7YSyuIcElr0jVm5cKm4%2BPRyxNvzoHEAVo4MxB%2BZIBqp3vfajH6ol9wmcTWIiwkH36NU8ySVSWvjtAKTDc%2F4rKBjqkARloHrkrE8yYz%2FA1V7a62UofM9j9D7JpIKijflI18hHRZvCPLg0ZuLXg3n6jeWe27CURpa32rt2gbJu4aW2UsWnGMJCw5gANIgeesyYC13KMRRaXRatx5rXq9G4GctHNu5qQuikKo3cZRE157bEzGGYvoMFYWmp7qtRuvkGTiPMYfO%2FtvPSxfY6Pt7T70mi1MiTAlqCrbV34TQ4p9ulucl5EMY6P&X-Amz-Signature=939684fce435388a4df6cac3e195d71815edbd487826c8a3c6c325631507726a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

