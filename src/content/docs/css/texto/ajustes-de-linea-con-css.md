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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXXXVCZY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T193841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGj3sgtxIF1%2BqwWRONVD%2FDRpK%2FQ4Lf%2FKVDdFJW%2FF6pLgAiArDLqObtt4g%2BbD%2FpRytwJHSNcyqXsc1bEyf1gdkTOWvSqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhVaOgBkx%2FBjA0rzQKtwDE52GRL%2FW64Wqxd7WwQTtNXAzxhBgSDhHEu5DbCGZmghH0xtpOd6lX1VjYRGqZEh7h32MlBRoNj%2F2SK6pT%2BeYVh2mftRhTqvf7eGYo8FlUoSQ98UrJFOIgTWIJMV%2FcaV3PJwBsLb6qXXuVXjPyMNR66qRw3nRrSYZ8Ho8vA6uKClBOyucuaiR59XPI3PpNFkWzvIipbiBr6gQQUFEd0IhKZjNYXb39vii84mJS6G%2BNo2hw4R6%2B67zUMxQdGgM7o5t%2Bf0QI9K3hWssPs6S4GXoI5PM6pfkFTlM5XFK%2FMlgaLRoNFUd8KT5kUG2uqulGBxDGFl5ajhdyTFBIPzvyb46t2z0gwpjGhJETKty%2BAVha75XyGmsTDgzG3SsdRQamGaQlugOhzV13QhfDGkwvAYfWD0moM9%2FzFsXzhRM6WxGUITSsVoxQKLhDMISCNvcPnkZ8wyrUMppy2xQamjktFmt7Us7rd2xus7TQvjA%2FJcumhskPxztwbMXA1yPvXKI45YxjiNOUmK2%2BBUNW6YNQIvBW5eIQV7f5Qcn4JPlkyPKF2vDY1JzeIlSNmhOL17QFptDK5ppBmCtO%2BRjdOpZRriDe%2BF8r5VUtmHn3WiMAk%2Fu74s30jB1%2B1lEOyATKxMwuoqMygY6pgENlgaywydWmBCLb97XT8ScrPz8ul5M6JOarUhPlchoc2nXWcCqwX3vEJ8vf%2Fuib2%2FmyopRfO9P2YLWs4hZYnFHkq1O1St5OZVOhL0CWZF1RHHTy%2Ba7tjMePC6%2Fqs5rksuMUaBHA%2By60hsFB%2FruaeOJdTBYtf4SCx%2BptA4Tl0oKVz8YFcE09lNAg9JmOUg42p9L%2Fus29bICb%2F31rHemOKW%2BhGowq07t&X-Amz-Signature=b39ac91091df663de4f0ed772461c399aca81510fa4b74c4c62e55896b932027&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXXXVCZY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T193841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGj3sgtxIF1%2BqwWRONVD%2FDRpK%2FQ4Lf%2FKVDdFJW%2FF6pLgAiArDLqObtt4g%2BbD%2FpRytwJHSNcyqXsc1bEyf1gdkTOWvSqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhVaOgBkx%2FBjA0rzQKtwDE52GRL%2FW64Wqxd7WwQTtNXAzxhBgSDhHEu5DbCGZmghH0xtpOd6lX1VjYRGqZEh7h32MlBRoNj%2F2SK6pT%2BeYVh2mftRhTqvf7eGYo8FlUoSQ98UrJFOIgTWIJMV%2FcaV3PJwBsLb6qXXuVXjPyMNR66qRw3nRrSYZ8Ho8vA6uKClBOyucuaiR59XPI3PpNFkWzvIipbiBr6gQQUFEd0IhKZjNYXb39vii84mJS6G%2BNo2hw4R6%2B67zUMxQdGgM7o5t%2Bf0QI9K3hWssPs6S4GXoI5PM6pfkFTlM5XFK%2FMlgaLRoNFUd8KT5kUG2uqulGBxDGFl5ajhdyTFBIPzvyb46t2z0gwpjGhJETKty%2BAVha75XyGmsTDgzG3SsdRQamGaQlugOhzV13QhfDGkwvAYfWD0moM9%2FzFsXzhRM6WxGUITSsVoxQKLhDMISCNvcPnkZ8wyrUMppy2xQamjktFmt7Us7rd2xus7TQvjA%2FJcumhskPxztwbMXA1yPvXKI45YxjiNOUmK2%2BBUNW6YNQIvBW5eIQV7f5Qcn4JPlkyPKF2vDY1JzeIlSNmhOL17QFptDK5ppBmCtO%2BRjdOpZRriDe%2BF8r5VUtmHn3WiMAk%2Fu74s30jB1%2B1lEOyATKxMwuoqMygY6pgENlgaywydWmBCLb97XT8ScrPz8ul5M6JOarUhPlchoc2nXWcCqwX3vEJ8vf%2Fuib2%2FmyopRfO9P2YLWs4hZYnFHkq1O1St5OZVOhL0CWZF1RHHTy%2Ba7tjMePC6%2Fqs5rksuMUaBHA%2By60hsFB%2FruaeOJdTBYtf4SCx%2BptA4Tl0oKVz8YFcE09lNAg9JmOUg42p9L%2Fus29bICb%2F31rHemOKW%2BhGowq07t&X-Amz-Signature=9bb1a4a2f3259ddffa6b95444705472494eb023bb73337da834a07e18dfe71e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

