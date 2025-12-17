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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YK22UGI2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T145735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRWCe6F7eEnKVtxjbiIBscW5fFDuWpNq%2F0PbIN62Kh1AIgDN%2F2mU7rFrnPLlr8uNdB7sgTRIjcjTS6lr8wZqsMZucqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDADjBEE%2FtQFaitYVuircA3y3MhZpvjswjLN0L%2FHORs%2FUZZM0QPsB2zo0XOFfn8hDSHuVn7BwGdjmNnt2DDMl7vt7nFmRpB3mrhnVclzSkmw6cEeuIiCQtorDByQh%2FhhF3Hx42uc3WebbsgNu7Ow5So4iK1pmSw5MqPkF5zi0O87kKDYoyu3OAiPGqqpQOS%2Bll7UCSYC0a3K0eozC2Ca3NhtNIxQx%2B393z77dkZwHLX8MO3iXNsP2O6WthNUaV1poO5nc6VPdRQQwWs1qcV0%2BkTjieBGgGlHsw%2Bvd0Rm4DP1zdSJOfiZJsMpOeVzdFfahR1HwfW0iK%2FtLM0MK1uSiD%2FJkpCZBGVXDaUD%2BNI%2Br9GbkRMT1F%2BSMOaYvhNCTejgztsrhcVHdKU7wV5WerOMIWENrjrgq9rXo%2FSZarowCyrr3fyiDXLr5%2BRJXM3n9DBus2Z5sOUHWtw%2Bst8K6114yWQZQtFWLvfhGcaBwPgzM3IXknLRAX%2BZzYKySMxcLzC40mycipRjArP5xV8dSQJ14UmUw7PB3vX97Bqn%2Bu1ivYd%2B8bRW5YdZEvA3%2Br7q6UEnOd%2FC73hPayHPnQkLuBJVCweTA5HSSN9wzjLEdEk%2BTQ4lryqNXkEFhNzu5BaCAt9lh6n0vtJfg4iyD2I6tMPH%2FisoGOqUBmh0YvoAfZjfl6vybuvBlTLHIirq5gDwGOCKT%2B50ysl1esKks1epTYxV5yxMyZnPIP7y%2FTDDpWz%2B47xKzg5gMjnq2qTNjRRPipwlXz93Bir3eSpcloosk%2BDuvE2njQ5iBSNO6GJl%2FsQTSIVcisVqZFT0lBa5yQQAdyuH8G47G46v8czX4Q3Wra6eezoWimlzX4utFKuuvG%2FzUxOk5J5zCV6VuzERE&X-Amz-Signature=227ec2cabf129219f836c472ac72840f281ed45b3bc517452288873a1a11d94d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YK22UGI2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T145735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRWCe6F7eEnKVtxjbiIBscW5fFDuWpNq%2F0PbIN62Kh1AIgDN%2F2mU7rFrnPLlr8uNdB7sgTRIjcjTS6lr8wZqsMZucqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDADjBEE%2FtQFaitYVuircA3y3MhZpvjswjLN0L%2FHORs%2FUZZM0QPsB2zo0XOFfn8hDSHuVn7BwGdjmNnt2DDMl7vt7nFmRpB3mrhnVclzSkmw6cEeuIiCQtorDByQh%2FhhF3Hx42uc3WebbsgNu7Ow5So4iK1pmSw5MqPkF5zi0O87kKDYoyu3OAiPGqqpQOS%2Bll7UCSYC0a3K0eozC2Ca3NhtNIxQx%2B393z77dkZwHLX8MO3iXNsP2O6WthNUaV1poO5nc6VPdRQQwWs1qcV0%2BkTjieBGgGlHsw%2Bvd0Rm4DP1zdSJOfiZJsMpOeVzdFfahR1HwfW0iK%2FtLM0MK1uSiD%2FJkpCZBGVXDaUD%2BNI%2Br9GbkRMT1F%2BSMOaYvhNCTejgztsrhcVHdKU7wV5WerOMIWENrjrgq9rXo%2FSZarowCyrr3fyiDXLr5%2BRJXM3n9DBus2Z5sOUHWtw%2Bst8K6114yWQZQtFWLvfhGcaBwPgzM3IXknLRAX%2BZzYKySMxcLzC40mycipRjArP5xV8dSQJ14UmUw7PB3vX97Bqn%2Bu1ivYd%2B8bRW5YdZEvA3%2Br7q6UEnOd%2FC73hPayHPnQkLuBJVCweTA5HSSN9wzjLEdEk%2BTQ4lryqNXkEFhNzu5BaCAt9lh6n0vtJfg4iyD2I6tMPH%2FisoGOqUBmh0YvoAfZjfl6vybuvBlTLHIirq5gDwGOCKT%2B50ysl1esKks1epTYxV5yxMyZnPIP7y%2FTDDpWz%2B47xKzg5gMjnq2qTNjRRPipwlXz93Bir3eSpcloosk%2BDuvE2njQ5iBSNO6GJl%2FsQTSIVcisVqZFT0lBa5yQQAdyuH8G47G46v8czX4Q3Wra6eezoWimlzX4utFKuuvG%2FzUxOk5J5zCV6VuzERE&X-Amz-Signature=52e5c88ccc6ee3ec9549b801e7794b1549a6dc65e2ecbe580d7ab5c534e0164d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

