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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626K3FANX%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T140440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6RU%2FIcumWsDJ%2FHlDiMEYIzf1RfzGH%2BE5RtnLr28vegwIgXBPv2e6jUIH665p1%2B8Uo%2BM0C5ixiuE0xZBvLVQjhJJIq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDGErc%2BeJ34Qo2hGlmyrcA51Jof8i6CyOqsqcj491whnwkiMyx17ft2k3O1Wy2eiVf5C9jtaZTX9Y0Ip3haldACXbjChxXLJEqox4gCktGDekgLCzgb%2FaRy%2B3HD32JYvD3bgHFaDeEk62ojymPAKu7troWzXEipFFiJ2zPgu%2FLMOXt2mcLHRmhAC24fWvKFi9kWOuURA9WivobxVnTf2hbk0brOX%2BatPwgVEXcIKCOiKQyFdzMQebFCsU4qQMNeqeZm2rZkTVT4fI9ythvotIoJ4EYdGyUKIwx%2B4zlZAHfVt7i8BuzlJ9E3Mfxp9CZVVafvUx6TJpgTuVbOKa0IeAqXE3Bq8E3kbP3127Qqgr5%2FOewLjGQoLBAQqYcdjhdEHdvMRvjoVxdMwMo5a9Bu4IebIT7dW8r%2Fyklo49GLJMstR30rtYK7brY7e%2FNjrOKdRYw1L7L8lPTjxEOz2NOuobCIFcW5RRVenwq11ZzDlHAjNPc90teYkbXi4qwL4ytX6l4cqhimCsGUVXsN6D1pJp1tZ5%2BqPrDcRCoRLLbwcK%2FspL%2BtpTFTF3ISTOwwQyJlS4obpF8hIsdM7qJxqkQGLZCw1CWcIMOScu%2FJSIbxJDpiEjEBCAaWordQU78BRs0z5rjytsLd%2F2B81zEuBCMMjhisoGOqUBe0SRjXzk%2BtVTrexmGpO6VThMlJrnXhlBg3eYFWJCuoUlDkB3BxNanZzQua%2FziBcPFVNVKaBYRCqnkD%2BQz54Oy9NA8Cw7uy4pmie3AIllM0p4VOfvauDeQI9VSV6f%2FiTE9P2jicGiYf85Htfy0dwJxD1lIRGOiqSVgRYxhnFtjanCYMoS8vHprYiXmFnReenmJucyUyn9MrfBiYMbKBvscIzWnUSb&X-Amz-Signature=be0944d6e1e3a1eea1f6a7eab9fe89713b3abd8b9946258bf128fa015dd7b5e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626K3FANX%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T140440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6RU%2FIcumWsDJ%2FHlDiMEYIzf1RfzGH%2BE5RtnLr28vegwIgXBPv2e6jUIH665p1%2B8Uo%2BM0C5ixiuE0xZBvLVQjhJJIq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDGErc%2BeJ34Qo2hGlmyrcA51Jof8i6CyOqsqcj491whnwkiMyx17ft2k3O1Wy2eiVf5C9jtaZTX9Y0Ip3haldACXbjChxXLJEqox4gCktGDekgLCzgb%2FaRy%2B3HD32JYvD3bgHFaDeEk62ojymPAKu7troWzXEipFFiJ2zPgu%2FLMOXt2mcLHRmhAC24fWvKFi9kWOuURA9WivobxVnTf2hbk0brOX%2BatPwgVEXcIKCOiKQyFdzMQebFCsU4qQMNeqeZm2rZkTVT4fI9ythvotIoJ4EYdGyUKIwx%2B4zlZAHfVt7i8BuzlJ9E3Mfxp9CZVVafvUx6TJpgTuVbOKa0IeAqXE3Bq8E3kbP3127Qqgr5%2FOewLjGQoLBAQqYcdjhdEHdvMRvjoVxdMwMo5a9Bu4IebIT7dW8r%2Fyklo49GLJMstR30rtYK7brY7e%2FNjrOKdRYw1L7L8lPTjxEOz2NOuobCIFcW5RRVenwq11ZzDlHAjNPc90teYkbXi4qwL4ytX6l4cqhimCsGUVXsN6D1pJp1tZ5%2BqPrDcRCoRLLbwcK%2FspL%2BtpTFTF3ISTOwwQyJlS4obpF8hIsdM7qJxqkQGLZCw1CWcIMOScu%2FJSIbxJDpiEjEBCAaWordQU78BRs0z5rjytsLd%2F2B81zEuBCMMjhisoGOqUBe0SRjXzk%2BtVTrexmGpO6VThMlJrnXhlBg3eYFWJCuoUlDkB3BxNanZzQua%2FziBcPFVNVKaBYRCqnkD%2BQz54Oy9NA8Cw7uy4pmie3AIllM0p4VOfvauDeQI9VSV6f%2FiTE9P2jicGiYf85Htfy0dwJxD1lIRGOiqSVgRYxhnFtjanCYMoS8vHprYiXmFnReenmJucyUyn9MrfBiYMbKBvscIzWnUSb&X-Amz-Signature=195de5bd7ed0ac1691aa02544e1c156c9bb88fd9de533ff01ca5e063b8b46f9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

