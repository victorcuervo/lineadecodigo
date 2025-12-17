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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662N3PU5PY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T070011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFOCNpfYVTni15LKzMEbSdh%2BinOduT6khWOX4VNF8MoxAiEAu%2FrQkaboziu4lyqj0W%2B6b9Bbvmf1EwLQ2wknktkMH10q%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDGA3rcyocaRTwVUQCircA6cIhfTevzT8DUGbdF6bfj517a6mnPxBT%2FtY43CWTHNRwTLGrnof4kbKWbQ8WYsSb%2F%2B5GZmKOthMoEfYoFuS68P8mHg5Vl3eq6kT7zfAj2FUesABzJwHuPu4R7Za4PxEjw1SYuX6k6%2BizJ7%2BcUm8sGaygzT6D9dBJ5dLRdZWtcoSTrQqxEO4HonLQN6BkwBkTuDkpKXIVE8RV%2BHxPoOMR856kPXxw8L%2FWbGl0UC4KvsNi8neA7YxGQXYpWJRI%2BxApjjVESb9qQ0VPFr5WVsn5nbx%2FJh4wH1hsQvbRkT%2BNEvz2WrH6gCLH1cS%2BkKo896VsQDwxeiRkkDmtYyu6OKjXy9BU%2BiRr%2Bqj8S3d4mmycbZ8ZJ255vwFx4IkW8LbATQE5PPLtEhWnmLdhIIEF%2FUcF6VQmfV12fZNHgBUHyYgXEe7Sw%2F4cFcv5eMQ6dhOYXA0wJzuwdOLyU%2FbhKEpG79c8BWUGwuhmS9xA2EoTQTe68VG2%2B%2FarJ8PWFl6qH8hajvPyJH7BVsLqbZlfplFN7%2B7fOp3n1aI41dklCi9Tq8ELWne%2F%2Ftxt3%2FJ%2B93h0rYL2byX45MY7zjh2VHYPomW5PaHxNkY6LvauxIHtTJE21MduHTxdC8TSJL1kw2qHz5yMMGdicoGOqUB6kUA0jRZC06r4qLhVGoQLF7V4%2F4ZzEo3V5XesSTPlufBenPzfPH7kb6h%2BwFxPYYxO19dppF2hq2CPOAXUiMefurY7o4hjc3HxH8nwJbBynyQ2cdOaNh4g5FpEHxITlCkLtOnJxPuu5O9407c%2B%2BfLaa1s88nqGSClIU%2Bne3NhFl0MnQ9UnVfAmaKEQAe41RJPV9yqfGLvMiJUydtQRCHt5yC8%2F7sK&X-Amz-Signature=4ea4fa6b87287c613d181fb8f73f68612984755c49a1e366880e92d55f80235b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662N3PU5PY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T070011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFOCNpfYVTni15LKzMEbSdh%2BinOduT6khWOX4VNF8MoxAiEAu%2FrQkaboziu4lyqj0W%2B6b9Bbvmf1EwLQ2wknktkMH10q%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDGA3rcyocaRTwVUQCircA6cIhfTevzT8DUGbdF6bfj517a6mnPxBT%2FtY43CWTHNRwTLGrnof4kbKWbQ8WYsSb%2F%2B5GZmKOthMoEfYoFuS68P8mHg5Vl3eq6kT7zfAj2FUesABzJwHuPu4R7Za4PxEjw1SYuX6k6%2BizJ7%2BcUm8sGaygzT6D9dBJ5dLRdZWtcoSTrQqxEO4HonLQN6BkwBkTuDkpKXIVE8RV%2BHxPoOMR856kPXxw8L%2FWbGl0UC4KvsNi8neA7YxGQXYpWJRI%2BxApjjVESb9qQ0VPFr5WVsn5nbx%2FJh4wH1hsQvbRkT%2BNEvz2WrH6gCLH1cS%2BkKo896VsQDwxeiRkkDmtYyu6OKjXy9BU%2BiRr%2Bqj8S3d4mmycbZ8ZJ255vwFx4IkW8LbATQE5PPLtEhWnmLdhIIEF%2FUcF6VQmfV12fZNHgBUHyYgXEe7Sw%2F4cFcv5eMQ6dhOYXA0wJzuwdOLyU%2FbhKEpG79c8BWUGwuhmS9xA2EoTQTe68VG2%2B%2FarJ8PWFl6qH8hajvPyJH7BVsLqbZlfplFN7%2B7fOp3n1aI41dklCi9Tq8ELWne%2F%2Ftxt3%2FJ%2B93h0rYL2byX45MY7zjh2VHYPomW5PaHxNkY6LvauxIHtTJE21MduHTxdC8TSJL1kw2qHz5yMMGdicoGOqUB6kUA0jRZC06r4qLhVGoQLF7V4%2F4ZzEo3V5XesSTPlufBenPzfPH7kb6h%2BwFxPYYxO19dppF2hq2CPOAXUiMefurY7o4hjc3HxH8nwJbBynyQ2cdOaNh4g5FpEHxITlCkLtOnJxPuu5O9407c%2B%2BfLaa1s88nqGSClIU%2Bne3NhFl0MnQ9UnVfAmaKEQAe41RJPV9yqfGLvMiJUydtQRCHt5yC8%2F7sK&X-Amz-Signature=2b48a7c20e12119010c7544bace1ed07c422421a6f886241a533a65261e089e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

