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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SE3ES66M%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T193936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDEX5Hlza6BtSMXYzsUKtykuWs10e7zl0FcbABJKG%2FQ2AiBS5E1ijiHoTI4Wb2q%2FOlnJWaVLL%2BzPXyBrMzrljs2KUCqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM47a9awVoMqukTEK1KtwD831SMAs5DjZvrkSn%2B0xRz%2BidC%2BT05uml3A23WxOHk%2BxvXuYwXHPFXkEh%2FngO%2Fn%2BVs4x546A7AQsyJsXA6tdt1UQEYnUJ1XPEHwgupi2RpaL7RulXGZ2f3Yjc3OO%2BQKH3cJks61iMgipFMOMc%2FICjmtGVRBcKcNsRvDYsLrrkmbOAe5VzZfFAuqNCugz%2FyjeGpaaNrjPN9CmpYIqovzlSgl1UUxTllDaHmD1zxu9N8eD0%2FHXpGbYpaE5xjwJOEqErkBUl0OiPUBNuGeE0LavWHO9qSTbUOScXQkFVxKP%2Faw5oidvSjTXk95LAz9B33HLxB7lt9Zwur8HnrfoRmWX%2FxLFdb0laXSJlBu9WmrAUazq2Sy%2FLo1SisCnOmp9u7E81quQkpx32ESY%2BX2NqjNmRv5ylvZ8gP7CEikQ7NLjGPUakK7O6hCbdCl8LnfDK3M6o3pAcPYXnM2gFDDGwiMIplB3FMQmhD1r%2BECrRjm1YkJQ%2FJ5tO12c4siAMOnw7OinB%2FdS4cnlMTgxPeGfL3ZoCQzi2wrkVAtLsiwQazaxmKhdUBVw1VuMfw9jHfPNcofeimczutE0zFRfWbesZNZwsBDAzfUV9cnNGqRNns6kjO0J3%2B%2FR%2FAcJ06qMt6U0wz4uMygY6pgHr8GvK1wD93qk3zRlZqEKtN4Tf12a3ktOmj6GS%2FsOfOdz84xwWkLhQ7csuaLJ%2F3knZzIR%2FJ8WEDXBwfA16O0%2F5bqhwWozodPED4jXbLMynBHM5PJ3EA0i%2B%2Fao8SYR1Q49V7o2N660hr%2BFUtY3G8sB1uAsulBBgm%2BuC4CM%2Fd%2FNi2CTQh%2Fdpic13pqUvBaPs7j53IfwmKwN3ASv7b2k30f4J6HX17BpN&X-Amz-Signature=7dd2ebef81c64326c710b5d1d7d0030c5bbfa1352facedb33890e4389d859a1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SE3ES66M%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T193936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDEX5Hlza6BtSMXYzsUKtykuWs10e7zl0FcbABJKG%2FQ2AiBS5E1ijiHoTI4Wb2q%2FOlnJWaVLL%2BzPXyBrMzrljs2KUCqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM47a9awVoMqukTEK1KtwD831SMAs5DjZvrkSn%2B0xRz%2BidC%2BT05uml3A23WxOHk%2BxvXuYwXHPFXkEh%2FngO%2Fn%2BVs4x546A7AQsyJsXA6tdt1UQEYnUJ1XPEHwgupi2RpaL7RulXGZ2f3Yjc3OO%2BQKH3cJks61iMgipFMOMc%2FICjmtGVRBcKcNsRvDYsLrrkmbOAe5VzZfFAuqNCugz%2FyjeGpaaNrjPN9CmpYIqovzlSgl1UUxTllDaHmD1zxu9N8eD0%2FHXpGbYpaE5xjwJOEqErkBUl0OiPUBNuGeE0LavWHO9qSTbUOScXQkFVxKP%2Faw5oidvSjTXk95LAz9B33HLxB7lt9Zwur8HnrfoRmWX%2FxLFdb0laXSJlBu9WmrAUazq2Sy%2FLo1SisCnOmp9u7E81quQkpx32ESY%2BX2NqjNmRv5ylvZ8gP7CEikQ7NLjGPUakK7O6hCbdCl8LnfDK3M6o3pAcPYXnM2gFDDGwiMIplB3FMQmhD1r%2BECrRjm1YkJQ%2FJ5tO12c4siAMOnw7OinB%2FdS4cnlMTgxPeGfL3ZoCQzi2wrkVAtLsiwQazaxmKhdUBVw1VuMfw9jHfPNcofeimczutE0zFRfWbesZNZwsBDAzfUV9cnNGqRNns6kjO0J3%2B%2FR%2FAcJ06qMt6U0wz4uMygY6pgHr8GvK1wD93qk3zRlZqEKtN4Tf12a3ktOmj6GS%2FsOfOdz84xwWkLhQ7csuaLJ%2F3knZzIR%2FJ8WEDXBwfA16O0%2F5bqhwWozodPED4jXbLMynBHM5PJ3EA0i%2B%2Fao8SYR1Q49V7o2N660hr%2BFUtY3G8sB1uAsulBBgm%2BuC4CM%2Fd%2FNi2CTQh%2Fdpic13pqUvBaPs7j53IfwmKwN3ASv7b2k30f4J6HX17BpN&X-Amz-Signature=c6727b323cedd3df1048e637211aa7bfb44fc2cb2df4005cfa0ffec7d101887b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

