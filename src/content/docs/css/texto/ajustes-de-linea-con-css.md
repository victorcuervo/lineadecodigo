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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXBSC2GQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T081720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAlucja7UfldEQi7qhkVcE8Jjol1rkIvy8DA%2F40o8MIeAiEAnYFFbFNYZtr7E422gKb%2FpNfGcAmqosohQfYIL614jDwq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDP%2BA8DHZLuVCk8TOpSrcA824oEMZ0hDGvmqRRjqNZstmrFwoUvYdtaViWYdmywQr4CG%2B3RmCtDnTc8ho%2BhGLX9QL68KSdlRI2U7cd22Av6%2Bjq2DOPlt41nVwbTcLb9ZiFngjj14LmBJqCfadiF7MVcuLq9y9BScpqRuMgM44%2Bpr00%2F8JraIHz5n97G2Gxfj3%2BYvlPgcmKn%2ByqOo2iqLFut2B3JEBjaI1IdC4CNMDwP4XfqYeRgtgbRKfHrgE9G5lpTZ4WcE5cVVN7cVL0g42Ec9CNso85tcucF1k6S4qeoQD38YxnN0gQdfXEpTSptre2IPD91if263BBcfOlCc8RkT9L5aRwZiK2rQnucCNCnawxrfNHeKC%2BCcUsqUxAwN4abKPvY1KVjPg15ogZ0ThrZacSgIMF543XBaQEt6aTqcg4H5S5%2FD%2FM1H9HJwuVY4%2FTDxrF4gyXbe64KwMyiMS%2B71tUs%2FoykP1htIGc5iD0ZseBeebqg7WH5rXUmiC8MKvvWWLklWvABnQYnESd97PpBMCTwcKTzjIi6Wlkmqo9CCMrVn2kebqEXIKZmiFWbes%2FcG0PCkU8xCiXDHC5p%2FIP2VX3BvxHfRglnz72tNfQLBpHZ73tHOP3Z%2FF7thB2tV4kkpbULfX%2F4cmYgO3MMG4icoGOqUBYhUt7vEQNXx02JzY2oaphVQ%2BaAfiK7w5mCQFQ4IjTBBKUnu16wNsGo3CMc0IB9RQiE3dVqWoflkG4O%2F5UUyUl2TJJ8bZBh9lCOsayiyg1o4WFFw9%2FGXVahpVsqEio59f%2Bh%2BalnMklzh34BC1AAlTm4r%2BZPLx1amukmUZspno1q%2FHpbeXa3NZEzIX8FL%2BL18DH1E1kpnwwORz7FWIm890F8ONMPXz&X-Amz-Signature=a1c44f069da8ffbe25f3aafe79dd287bc6550d8a5c26f5fd91de382b61eed23b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXBSC2GQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T081720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAlucja7UfldEQi7qhkVcE8Jjol1rkIvy8DA%2F40o8MIeAiEAnYFFbFNYZtr7E422gKb%2FpNfGcAmqosohQfYIL614jDwq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDP%2BA8DHZLuVCk8TOpSrcA824oEMZ0hDGvmqRRjqNZstmrFwoUvYdtaViWYdmywQr4CG%2B3RmCtDnTc8ho%2BhGLX9QL68KSdlRI2U7cd22Av6%2Bjq2DOPlt41nVwbTcLb9ZiFngjj14LmBJqCfadiF7MVcuLq9y9BScpqRuMgM44%2Bpr00%2F8JraIHz5n97G2Gxfj3%2BYvlPgcmKn%2ByqOo2iqLFut2B3JEBjaI1IdC4CNMDwP4XfqYeRgtgbRKfHrgE9G5lpTZ4WcE5cVVN7cVL0g42Ec9CNso85tcucF1k6S4qeoQD38YxnN0gQdfXEpTSptre2IPD91if263BBcfOlCc8RkT9L5aRwZiK2rQnucCNCnawxrfNHeKC%2BCcUsqUxAwN4abKPvY1KVjPg15ogZ0ThrZacSgIMF543XBaQEt6aTqcg4H5S5%2FD%2FM1H9HJwuVY4%2FTDxrF4gyXbe64KwMyiMS%2B71tUs%2FoykP1htIGc5iD0ZseBeebqg7WH5rXUmiC8MKvvWWLklWvABnQYnESd97PpBMCTwcKTzjIi6Wlkmqo9CCMrVn2kebqEXIKZmiFWbes%2FcG0PCkU8xCiXDHC5p%2FIP2VX3BvxHfRglnz72tNfQLBpHZ73tHOP3Z%2FF7thB2tV4kkpbULfX%2F4cmYgO3MMG4icoGOqUBYhUt7vEQNXx02JzY2oaphVQ%2BaAfiK7w5mCQFQ4IjTBBKUnu16wNsGo3CMc0IB9RQiE3dVqWoflkG4O%2F5UUyUl2TJJ8bZBh9lCOsayiyg1o4WFFw9%2FGXVahpVsqEio59f%2Bh%2BalnMklzh34BC1AAlTm4r%2BZPLx1amukmUZspno1q%2FHpbeXa3NZEzIX8FL%2BL18DH1E1kpnwwORz7FWIm890F8ONMPXz&X-Amz-Signature=89d3d2baf0a20d3fac54c787fd2b5c7aeefed7edd64c056cb3ea5a7c62260d6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

