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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4HNBO5B%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T001852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDEr9hPkjQYfAIra7D6WVaTzJSojMQJNRPz10k%2F%2BQp5kAiBZErelW9%2BmpQ2%2F%2F2I5P%2BKI7EcBOZNx2wg0ScBDSNm3fir%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMjR4yFmMt0Pms4y%2BRKtwDhvqbzx6WZy%2B54Jsc1ff%2BgJqp8ZIj0i%2FEyJQTVvOsJneCmiZaOb7E1Qp36AMuKoBD%2BajTI8u%2BY1GALPcrKBroHvbi4WwKLuRyx%2BXwtZGPgJhWPef5C3JUGzcOesFKhB%2Fpo3s0lia0YBCWDsJuEPAHz1kiNlO%2BAsVKGHMAVCyARpoIwGYywfwlFRKUhtq8oXFt4PlDFlNDVLMGmWWHJ00U%2F6rjgX6AyMjfKpWkH0g%2BwV3ysz2zi1JHiAUUC6IgFDzFzHRPkEYZtSgO69fdrNWEzHfiizqSKHV2WrGCqyc6j91IoE3913O5S8bgSpyAJrEdFcneWcI%2Fo2NGRT%2B%2BPWm1Q2wpF%2B4xfXL0ZD8xxnzytiYEH9VCyOVmLk0UrePjbfeiGu9MUvvBmaBsORM6OqtN7dimXDo3Gb5BbfVa9BMpLYuJ7lQnPSi9cJo0sjAAAbzgkxKb%2FNZGDv9TwsWVx9gunKlvAYbt6enIEumDHPxWqB1SOutLQ3vQ2U5VcyyXwNt%2FxOjCLv4znxaRl5VzmUYUvIw3L9QgGbmeDrN%2BCQDFlXh332AM%2FGNwEeY6Tqz4gc8GXsxziasL6oum%2BfIPxSd%2B4BkIHSFNyn3HkQAHmboMuKOOeVQ%2BAjP2fdFSGwww1N6HygY6pgFR6zO0Avp4VIMHf7Omv7I9Y6D05xpu5sypZL%2FEgq3jcvEddkVOB4hpxU6S1dUayB%2F7V1qa%2FUP7V%2BFAY4J%2Fl7ODl8%2FZ8pHkOA5RqcgrOheMGuqma8xi%2BJ8w2rc3My868kRrNDxTqe%2B3Jh%2F3jP1y1XRv318liCN1iaSGGTv9IkwJNaDAJpvpzjTjVpUY%2FWsSHT9DmwzD%2BF3rvLRHMDeOzBMoY7fiz8Jk&X-Amz-Signature=c639d332f3f1d66bb41858779519203fcaa7621671c9430b9e5701b4e8a535e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4HNBO5B%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T001852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDEr9hPkjQYfAIra7D6WVaTzJSojMQJNRPz10k%2F%2BQp5kAiBZErelW9%2BmpQ2%2F%2F2I5P%2BKI7EcBOZNx2wg0ScBDSNm3fir%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMjR4yFmMt0Pms4y%2BRKtwDhvqbzx6WZy%2B54Jsc1ff%2BgJqp8ZIj0i%2FEyJQTVvOsJneCmiZaOb7E1Qp36AMuKoBD%2BajTI8u%2BY1GALPcrKBroHvbi4WwKLuRyx%2BXwtZGPgJhWPef5C3JUGzcOesFKhB%2Fpo3s0lia0YBCWDsJuEPAHz1kiNlO%2BAsVKGHMAVCyARpoIwGYywfwlFRKUhtq8oXFt4PlDFlNDVLMGmWWHJ00U%2F6rjgX6AyMjfKpWkH0g%2BwV3ysz2zi1JHiAUUC6IgFDzFzHRPkEYZtSgO69fdrNWEzHfiizqSKHV2WrGCqyc6j91IoE3913O5S8bgSpyAJrEdFcneWcI%2Fo2NGRT%2B%2BPWm1Q2wpF%2B4xfXL0ZD8xxnzytiYEH9VCyOVmLk0UrePjbfeiGu9MUvvBmaBsORM6OqtN7dimXDo3Gb5BbfVa9BMpLYuJ7lQnPSi9cJo0sjAAAbzgkxKb%2FNZGDv9TwsWVx9gunKlvAYbt6enIEumDHPxWqB1SOutLQ3vQ2U5VcyyXwNt%2FxOjCLv4znxaRl5VzmUYUvIw3L9QgGbmeDrN%2BCQDFlXh332AM%2FGNwEeY6Tqz4gc8GXsxziasL6oum%2BfIPxSd%2B4BkIHSFNyn3HkQAHmboMuKOOeVQ%2BAjP2fdFSGwww1N6HygY6pgFR6zO0Avp4VIMHf7Omv7I9Y6D05xpu5sypZL%2FEgq3jcvEddkVOB4hpxU6S1dUayB%2F7V1qa%2FUP7V%2BFAY4J%2Fl7ODl8%2FZ8pHkOA5RqcgrOheMGuqma8xi%2BJ8w2rc3My868kRrNDxTqe%2B3Jh%2F3jP1y1XRv318liCN1iaSGGTv9IkwJNaDAJpvpzjTjVpUY%2FWsSHT9DmwzD%2BF3rvLRHMDeOzBMoY7fiz8Jk&X-Amz-Signature=9afb97b81f25a731d13c9eb1f8789a24b949ff504fc8b1e259b97635ad9c3909&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

