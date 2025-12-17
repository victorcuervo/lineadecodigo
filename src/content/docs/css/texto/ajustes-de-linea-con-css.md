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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGQXUYK7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T040413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHrHQNiH3jPATixh9h3DImQv7wcHaNlX6J3Jo9ZgK%2FksAiEAkAqXIZaFjAg9MiM54Zq3GVOa6UBF6neJcnnxrl3baoEq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDPzDnvy6gcPjPMOc%2BSrcA0YlID1A27w%2F4YxaJwA7go2EajLK8pxHc14E6omIZH6pON0M2vOHw1oUWpQSuiEwTq%2BhzYYMgvnyWaqXFweK5ngisFWVsOP1sfUWuyZzVLLaobTpipKraV0cOC%2Bujmp6gy%2FK7gs8mwhULfkFrU%2BW093ZEYJyqJV6jGWRmU19iKSdkRQlInMC7EAFfgMY8bCi3uD0db972LwJCbfZnN5jGmZMPMeqpWvswfe0BGtyJdIO%2BPHBBmSXPfeKijXJ6RG6zFXxcA0tI58nYRu4TzZDrc2eVYEdlTsDcUy3rq3ioAFTWaPwerQ0SN4KeA0eifQbcvKZ%2BdTCN91ZT4gcXojpUxKEhSrBZtgpiL8GPKtBky5yLBiCXjct8wZeTs2lk9GNG9Zx9abBFsf6olzi2vWKNq3Je8uHqnO0lOYvtKCAye4mgjgtW%2Bp2d%2BJUKLFu7MjKXRMbi1pJ4%2BJW%2F5C68xuCCVl%2Fb3iYChmrxN2CR8A6YRnKUmE9NoMbL2l3hsgcZlEZFShldsb%2FtDIw4IEZWTIOw2D%2FQFquLFDB8AFGkfAb63D%2FYDUsRBc3a9A4ozCHGp%2Baz3L60ZfyXaqoaV6VBqdLkYKj66T2vrF8LoH5ZCqeUG5ocwl8BSHtBvnYGuD2MITOiMoGOqUB4zEERNstbzSyMwyN5rq9briz3gFkx4saoxnseDDfrKrZaSc0loTSsaQh6ptEJ1ukF8rw%2BZ11moMXz4w2%2BULaB%2B%2BqDOnjaJ87NTkOyZN5EsXZN1pw7ZkeYL3e0SUFb1L94OMlytEtY1sbPSUoUMdVf7mTccWmyhGdqoXGkwIwlxQgFYpj6hHgT7FoTV9kyBOmoCNDRA%2BjvslClM6X2SVcF%2F%2BNO%2B6N&X-Amz-Signature=726474e9b97ac81e771424544a94658e39b402963c2c5eab651d0eb0aeca8e7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGQXUYK7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T040413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHrHQNiH3jPATixh9h3DImQv7wcHaNlX6J3Jo9ZgK%2FksAiEAkAqXIZaFjAg9MiM54Zq3GVOa6UBF6neJcnnxrl3baoEq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDPzDnvy6gcPjPMOc%2BSrcA0YlID1A27w%2F4YxaJwA7go2EajLK8pxHc14E6omIZH6pON0M2vOHw1oUWpQSuiEwTq%2BhzYYMgvnyWaqXFweK5ngisFWVsOP1sfUWuyZzVLLaobTpipKraV0cOC%2Bujmp6gy%2FK7gs8mwhULfkFrU%2BW093ZEYJyqJV6jGWRmU19iKSdkRQlInMC7EAFfgMY8bCi3uD0db972LwJCbfZnN5jGmZMPMeqpWvswfe0BGtyJdIO%2BPHBBmSXPfeKijXJ6RG6zFXxcA0tI58nYRu4TzZDrc2eVYEdlTsDcUy3rq3ioAFTWaPwerQ0SN4KeA0eifQbcvKZ%2BdTCN91ZT4gcXojpUxKEhSrBZtgpiL8GPKtBky5yLBiCXjct8wZeTs2lk9GNG9Zx9abBFsf6olzi2vWKNq3Je8uHqnO0lOYvtKCAye4mgjgtW%2Bp2d%2BJUKLFu7MjKXRMbi1pJ4%2BJW%2F5C68xuCCVl%2Fb3iYChmrxN2CR8A6YRnKUmE9NoMbL2l3hsgcZlEZFShldsb%2FtDIw4IEZWTIOw2D%2FQFquLFDB8AFGkfAb63D%2FYDUsRBc3a9A4ozCHGp%2Baz3L60ZfyXaqoaV6VBqdLkYKj66T2vrF8LoH5ZCqeUG5ocwl8BSHtBvnYGuD2MITOiMoGOqUB4zEERNstbzSyMwyN5rq9briz3gFkx4saoxnseDDfrKrZaSc0loTSsaQh6ptEJ1ukF8rw%2BZ11moMXz4w2%2BULaB%2B%2BqDOnjaJ87NTkOyZN5EsXZN1pw7ZkeYL3e0SUFb1L94OMlytEtY1sbPSUoUMdVf7mTccWmyhGdqoXGkwIwlxQgFYpj6hHgT7FoTV9kyBOmoCNDRA%2BjvslClM6X2SVcF%2F%2BNO%2B6N&X-Amz-Signature=ae3ebda579479914b0d26cd11a287db7faefe43f9f7d5aee0f2ea776e4acfad5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

