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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MDOTJZR%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T135719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBrgyB3hWQPKzT6n3slZVTeGLt%2BNXWfGVsuSJWro7aTaAiEA6HeBcgZw43o0qdK1eF7wHK40cDEAWGXtMSgk2XdoU%2Bgq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDCzq0MWKuFhpE0x8ByrcA0dgYgNfbqiwpKZR98PwTrRX2hufy2Fwf2XNsoVEHjNLIJ3NiiTGcnBIuPwjWUemsGt7TIA%2Fba4pe%2BhgbnRA2O0T2hcn3jlA8ytC25cI6%2BgrSI063gBHPztgzPfj9hQXld6LEFx%2Bmoh0aKYGvLaHm1JbrA9VAbFeUXkXyP08X7FXpRTY8z0OOOtzZ%2Fixp8Tx0yjct3C%2BMhTDB87n0w6AeZ5LTiW6RJibcIrJ9C65OU%2FtoOoVwMOWkwkTbqyrNSy4UnfMJIFGOgftCEEtgVY9k2sHClaQ8KUdVDywd7loFtJC1N8SCeMVUy%2F4gwUT1PHsp%2BeZ5uAeIsblv%2BMTwJYydKG7%2FxefBffEgdENqGjha0d4JmQ7zO0fSNmSuOD3YSpN8FBS1YFKv9dM3kgGyLZnwcIQDU0PKNmoKJaZci2bjH%2F4xnHPWkIzwjGQIqBc%2BYiFfPc0t8Qdq4dlgAaOYmexMSYtG3oT0rVxKQFM3UYhdAM2Gsm3bj0QbOlxd44NYQhQDvcF7kUEOxHzrDue12KlTRxX83jyHWs2WKjgra7oNN8iXwnFOUa5rRKrMb8rREJjefETWWWmraxd23%2BIq1Ox8F4RGm1xWKzwGwG98MC4FJAJW3yWGkPCX4oeu00OMNThisoGOqUBBVx9u6axxUt6RDkAtYxm8vG6T3lADIhYOPsW98UYTF%2F8fnBDoCayypNKOHqpAGG6skex5qBs3q1uRnlUdaSdT9YKyzcM4s99jNYAg7EtJ2Ww39zxb5w2bSZq%2FlP05SZBqtDJKtyL4MsmtdCt3uHEWL18NEOphhkUpH0xIur%2BXF91ktNokz%2F0dyALRw27cxICJAikte4lS0N1wVp8DI6XoDvivQdj&X-Amz-Signature=2a867a982cdd0f945eaed3a40cd25389e683aacf7ecc643fcdddc8ca80b04137&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MDOTJZR%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T135719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBrgyB3hWQPKzT6n3slZVTeGLt%2BNXWfGVsuSJWro7aTaAiEA6HeBcgZw43o0qdK1eF7wHK40cDEAWGXtMSgk2XdoU%2Bgq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDCzq0MWKuFhpE0x8ByrcA0dgYgNfbqiwpKZR98PwTrRX2hufy2Fwf2XNsoVEHjNLIJ3NiiTGcnBIuPwjWUemsGt7TIA%2Fba4pe%2BhgbnRA2O0T2hcn3jlA8ytC25cI6%2BgrSI063gBHPztgzPfj9hQXld6LEFx%2Bmoh0aKYGvLaHm1JbrA9VAbFeUXkXyP08X7FXpRTY8z0OOOtzZ%2Fixp8Tx0yjct3C%2BMhTDB87n0w6AeZ5LTiW6RJibcIrJ9C65OU%2FtoOoVwMOWkwkTbqyrNSy4UnfMJIFGOgftCEEtgVY9k2sHClaQ8KUdVDywd7loFtJC1N8SCeMVUy%2F4gwUT1PHsp%2BeZ5uAeIsblv%2BMTwJYydKG7%2FxefBffEgdENqGjha0d4JmQ7zO0fSNmSuOD3YSpN8FBS1YFKv9dM3kgGyLZnwcIQDU0PKNmoKJaZci2bjH%2F4xnHPWkIzwjGQIqBc%2BYiFfPc0t8Qdq4dlgAaOYmexMSYtG3oT0rVxKQFM3UYhdAM2Gsm3bj0QbOlxd44NYQhQDvcF7kUEOxHzrDue12KlTRxX83jyHWs2WKjgra7oNN8iXwnFOUa5rRKrMb8rREJjefETWWWmraxd23%2BIq1Ox8F4RGm1xWKzwGwG98MC4FJAJW3yWGkPCX4oeu00OMNThisoGOqUBBVx9u6axxUt6RDkAtYxm8vG6T3lADIhYOPsW98UYTF%2F8fnBDoCayypNKOHqpAGG6skex5qBs3q1uRnlUdaSdT9YKyzcM4s99jNYAg7EtJ2Ww39zxb5w2bSZq%2FlP05SZBqtDJKtyL4MsmtdCt3uHEWL18NEOphhkUpH0xIur%2BXF91ktNokz%2F0dyALRw27cxICJAikte4lS0N1wVp8DI6XoDvivQdj&X-Amz-Signature=de42ca117bd23a0738f13d82cfe0b597f04e9c7fc1368219590231b74172ef4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

