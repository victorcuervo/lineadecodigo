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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOBTKIUX%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T003237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGGoabe9ijORYy9uaw5PqvCu09HorWyKPMU3YUs2ctH2AiEAya%2FwL3jTQnO5vgucccB%2F7ISgBumXAKBwF3bqxKDLsOQq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDCt9Bf228avw0E0OSyrcAxzEpmwLSR4UGw9PBu0IROLeriWNd72vrLBVpzn5k%2FlHAx4OHGiJ8F%2FxjEw1jy757UE9fzGvccEuQxPEUG6uY3oGtZECROqLSD60nH9QbecG0xvfufeubLKtQR33GvtUrsRPLV3uG2FbzmZEroVPm8%2Bl1OfGp9nAWMDKalRL%2BJKjzUlrFPw6BM%2F%2BOg9kJKm67WsH9qtZWegwx4oIRR%2B0UIz%2BJ81TZ416URoALhwTsXiBATQtGn3PZe2kumx7pDUe%2Fc8pbz3nVmodsmgGF7FW%2BPuaFG2x0NsJW66lGNMbEvkXFS6sf%2BUaZBs%2B1ljYBliQUusl6uCPOfEHBBFV0K8yv5kl4w9YdIamGfjRs2HeFByxpQodoZuJyO5AATb4%2FyOvAXZ9rClqJL5xuI7dE4AbUG%2FtrsSZ1su3nbto%2BXgOEHe51ZgLl0l12o1wru0zTFTTY81yTxS0h8Q%2B9GZEFZ6sgTVi8xgWN2rB2MmQNbU%2B10QvOtdgG39XznhOV7odId9h3C2kRFfAVtqcwLjSvwmsQgDjGRLU6pi10y0fXgOyZysdDIB5DgF8s8h4v7vyDCvkry3wMxT2nrfLgLXJ%2F%2F0X4GbrCW6bvY%2B0CMdJJmaGmjhPnHn%2FHfRCx1gKiMWXMLHfh8oGOqUB2v0wv6bDWxeziMEE5yJDRiabJGJcPua%2FyxqCGU52r%2BYSv72L2KxKeyXpiMcnDm3LM03YU4eBMjfEyyJ8HoAWOKTlOxHllsNwhAFZ39%2Bmkuds0nf2nQzcO6OkPxEUp7zZO3hb02cPE%2F6bGBcjrhC0XpIJ4L66m%2BOzDqDZW2VUehi2eam%2F4ExoWzeryVfEvRuht4cMXqsk2S53QOix31tLY%2BfUbE98&X-Amz-Signature=1f96af0ce7d0460bee4f81f2f464418eb76b0d1c55b0a019ede50bf9d454d04e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOBTKIUX%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T003237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGGoabe9ijORYy9uaw5PqvCu09HorWyKPMU3YUs2ctH2AiEAya%2FwL3jTQnO5vgucccB%2F7ISgBumXAKBwF3bqxKDLsOQq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDCt9Bf228avw0E0OSyrcAxzEpmwLSR4UGw9PBu0IROLeriWNd72vrLBVpzn5k%2FlHAx4OHGiJ8F%2FxjEw1jy757UE9fzGvccEuQxPEUG6uY3oGtZECROqLSD60nH9QbecG0xvfufeubLKtQR33GvtUrsRPLV3uG2FbzmZEroVPm8%2Bl1OfGp9nAWMDKalRL%2BJKjzUlrFPw6BM%2F%2BOg9kJKm67WsH9qtZWegwx4oIRR%2B0UIz%2BJ81TZ416URoALhwTsXiBATQtGn3PZe2kumx7pDUe%2Fc8pbz3nVmodsmgGF7FW%2BPuaFG2x0NsJW66lGNMbEvkXFS6sf%2BUaZBs%2B1ljYBliQUusl6uCPOfEHBBFV0K8yv5kl4w9YdIamGfjRs2HeFByxpQodoZuJyO5AATb4%2FyOvAXZ9rClqJL5xuI7dE4AbUG%2FtrsSZ1su3nbto%2BXgOEHe51ZgLl0l12o1wru0zTFTTY81yTxS0h8Q%2B9GZEFZ6sgTVi8xgWN2rB2MmQNbU%2B10QvOtdgG39XznhOV7odId9h3C2kRFfAVtqcwLjSvwmsQgDjGRLU6pi10y0fXgOyZysdDIB5DgF8s8h4v7vyDCvkry3wMxT2nrfLgLXJ%2F%2F0X4GbrCW6bvY%2B0CMdJJmaGmjhPnHn%2FHfRCx1gKiMWXMLHfh8oGOqUB2v0wv6bDWxeziMEE5yJDRiabJGJcPua%2FyxqCGU52r%2BYSv72L2KxKeyXpiMcnDm3LM03YU4eBMjfEyyJ8HoAWOKTlOxHllsNwhAFZ39%2Bmkuds0nf2nQzcO6OkPxEUp7zZO3hb02cPE%2F6bGBcjrhC0XpIJ4L66m%2BOzDqDZW2VUehi2eam%2F4ExoWzeryVfEvRuht4cMXqsk2S53QOix31tLY%2BfUbE98&X-Amz-Signature=15e066b981e5a04886eda075459ac66813a1c2d2fe4994af06d75a7cb4702bca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

