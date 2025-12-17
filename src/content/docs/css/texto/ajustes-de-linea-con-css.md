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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPDRUXRK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T135405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF0gdjf9sbpzbPVdLgNZOEPeMfAd04A6S3Sw2XTRMQDaAiA%2FqdF6vaITmZkkLBV1BR9f1kiehVVPBVcJ06Yr7fNyoir%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMjkvbI2txf1ubXkWuKtwDrqYV3r5BL94b2S6Z94MKVhjTXdCDQ5R88FF8flNYU4wEwWz%2FQ3Yht2FUS%2FToIGo45wt0Zd09tcRQGC7sLYO%2BENBSoXdlqd54c0qkW2NGBLNFwCxGyrUCUOOSO4YaerEKJycSXoWbeX2PSvapIaDTyOl9An3J9KMjFX8TgEXGHPdnwBcSl66zj3wW4Kd4EATdQpnAm63tqCJNdemGA7RYfAdE7kiJYOHH3UnrzZFtaZC0QDz97NMNRDvtvIY2bncPz9QpzJ3wrc3kxqvE24wyGHUHsMiGXYhG8Z2haiIsi9yg9YFUd5thnr3qzDhtaHw4oXvR1wURpjvCOOgogueOF0EvhoKXaSQWNVFyZ4FQIvHQb%2BKemtCf7G0uOWk2S2OTKk0Rprfypn1sSv2Sb8PWflPHaxBGaDnivPv2l8iC6RB7K0weu5xggvTAiRrgpFR7fQTwG9xT%2Fl7WfZG0mUgqOiL4Iy%2FZzGZbMKN7a3vRSKHB%2BeK2RjS2WyKAt6d33uwwULD5jaH847z5OGA4lSTu5epMSKq1dYpT6Ywpv7CDLShTpSupo5vBzOXXFvBFA5lmzqOXhJfs0BqAXDS3rh%2FJc%2BsJoD%2F8QBGv1TMmamFBosHT2R8R7aAaZk4c5%2FYwtuGKygY6pgFV9CD%2FlMlkUaIcA%2FBY%2B4Lyg%2Ft%2Fg8CxWT3O8p9%2BeXrVIoMOshwGfbUbeG1XRoRkK0c%2FLbQcFsWt2RhvSuIgxm%2BnCFcGlyDBfFWXiflTcrrURnPUIxhMxWtMmzDATHlbQj1XqIuOXEPwpYblCj7a3QDsmhEyId6aADXOGpgFcXRWFQlOjoZnBmLOutt9BBpFBb%2B%2FU73PsbrRnp%2FptCH6r7TYD72znF%2FA&X-Amz-Signature=69dc8174a038c886c6aa657a307b17f34f93e34ab2af3ad614a96befd8d65b78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPDRUXRK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T135405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF0gdjf9sbpzbPVdLgNZOEPeMfAd04A6S3Sw2XTRMQDaAiA%2FqdF6vaITmZkkLBV1BR9f1kiehVVPBVcJ06Yr7fNyoir%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMjkvbI2txf1ubXkWuKtwDrqYV3r5BL94b2S6Z94MKVhjTXdCDQ5R88FF8flNYU4wEwWz%2FQ3Yht2FUS%2FToIGo45wt0Zd09tcRQGC7sLYO%2BENBSoXdlqd54c0qkW2NGBLNFwCxGyrUCUOOSO4YaerEKJycSXoWbeX2PSvapIaDTyOl9An3J9KMjFX8TgEXGHPdnwBcSl66zj3wW4Kd4EATdQpnAm63tqCJNdemGA7RYfAdE7kiJYOHH3UnrzZFtaZC0QDz97NMNRDvtvIY2bncPz9QpzJ3wrc3kxqvE24wyGHUHsMiGXYhG8Z2haiIsi9yg9YFUd5thnr3qzDhtaHw4oXvR1wURpjvCOOgogueOF0EvhoKXaSQWNVFyZ4FQIvHQb%2BKemtCf7G0uOWk2S2OTKk0Rprfypn1sSv2Sb8PWflPHaxBGaDnivPv2l8iC6RB7K0weu5xggvTAiRrgpFR7fQTwG9xT%2Fl7WfZG0mUgqOiL4Iy%2FZzGZbMKN7a3vRSKHB%2BeK2RjS2WyKAt6d33uwwULD5jaH847z5OGA4lSTu5epMSKq1dYpT6Ywpv7CDLShTpSupo5vBzOXXFvBFA5lmzqOXhJfs0BqAXDS3rh%2FJc%2BsJoD%2F8QBGv1TMmamFBosHT2R8R7aAaZk4c5%2FYwtuGKygY6pgFV9CD%2FlMlkUaIcA%2FBY%2B4Lyg%2Ft%2Fg8CxWT3O8p9%2BeXrVIoMOshwGfbUbeG1XRoRkK0c%2FLbQcFsWt2RhvSuIgxm%2BnCFcGlyDBfFWXiflTcrrURnPUIxhMxWtMmzDATHlbQj1XqIuOXEPwpYblCj7a3QDsmhEyId6aADXOGpgFcXRWFQlOjoZnBmLOutt9BBpFBb%2B%2FU73PsbrRnp%2FptCH6r7TYD72znF%2FA&X-Amz-Signature=d80550e9301cd99e20f8b16858df452e1ab026941d1e02093fcd6e6040a25193&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

