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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NXA54SN%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T113223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNJ94fcVjsK1z%2FsI4N%2FbB5%2BpUjcxO%2Brd1C0KXYG%2Fq8jQIhAIdUsqJ%2FHvZVOzDgK2frFUfat3%2FYw5E42qu6V%2FW2D8O%2FKv8DCHwQABoMNjM3NDIzMTgzODA1IgzKVxKsUa6MiW4ACRAq3APl7D32e1cvxtoM0M3HBJedl9HVWhAHP5hwyBfKsCZEnAp8AD8AMVf5OTnRoRv%2Ff646fViDyCda036kyUorXZOY1BWIQWJlgcRcUlv0WT%2FCT1IWFUm1wfpwvGRrMXA0IGzeIEqtroHDNV6F%2BUxVkOj3fXr7KsbHCCqqC4ooiOkKO4sbMjg7Tge92yA6%2FloqI2QNfzx03TjUc3rQmvNVMbcSj69PnawbG5r1M9AVqr72AayK7MRHXJaNZcx0dHn1sAbTHuOVBsje%2FTbc8kuC2TOqlagCF1P2g67AbLdARbtPZDeKzWaM84YJut8fJf5rVuF6OvD5cQ9%2FILCR%2FkeIAmWEhpAcxtRreZRHdgqdr3aet%2FEHKyquSO5jptExcX0SoNh5vub9gc15r8haZyW0KS2ZLnz%2Bg2mW0hyhBhXlVl3%2BDhMs973CjPBx%2FEI9oIAof3V9zbUuaKLzRkvHODB0QcmDt1K9V%2FL%2BnkjVlc5T0FcbYH1RuRne3z3mspwGhhCU7L7Cm3pvhjs5Pq9MX2CrEMvFpZF5q%2BvR%2BlSadpIhFM%2FCR0fWqrzAr36rq6yZlkRTQ7hovjxDl9x0CgeeTR6JbdXjKJ8mnhTN3FwKBx3JF4ytY1wCz0TfTXipuFalsjCdj4rKBjqkAVzaCSo1WeXXy1I8edok%2BfGzI676%2BOwFwlLeYQd0QAcoi4n79s5EoCPeF7yZv4Ai%2FDyx5FZ1OkkcWnWdnY7cop7V3wWbe4g0J%2B9ELAyCOgpH1dXa4mmGfepc8uRf3naE1V09nLWqmN%2BMYESTIIk0i78JyD5R8teVN7vsOVWWsWEc%2BujPOfsaIiz4ZV84iWso3roTJMWpP2ojp5fgw0k11xzijz6R&X-Amz-Signature=f6c839fc8dcef94a1e392387a2ad09707d5f055212fe980363020ef479907116&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NXA54SN%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T113223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNJ94fcVjsK1z%2FsI4N%2FbB5%2BpUjcxO%2Brd1C0KXYG%2Fq8jQIhAIdUsqJ%2FHvZVOzDgK2frFUfat3%2FYw5E42qu6V%2FW2D8O%2FKv8DCHwQABoMNjM3NDIzMTgzODA1IgzKVxKsUa6MiW4ACRAq3APl7D32e1cvxtoM0M3HBJedl9HVWhAHP5hwyBfKsCZEnAp8AD8AMVf5OTnRoRv%2Ff646fViDyCda036kyUorXZOY1BWIQWJlgcRcUlv0WT%2FCT1IWFUm1wfpwvGRrMXA0IGzeIEqtroHDNV6F%2BUxVkOj3fXr7KsbHCCqqC4ooiOkKO4sbMjg7Tge92yA6%2FloqI2QNfzx03TjUc3rQmvNVMbcSj69PnawbG5r1M9AVqr72AayK7MRHXJaNZcx0dHn1sAbTHuOVBsje%2FTbc8kuC2TOqlagCF1P2g67AbLdARbtPZDeKzWaM84YJut8fJf5rVuF6OvD5cQ9%2FILCR%2FkeIAmWEhpAcxtRreZRHdgqdr3aet%2FEHKyquSO5jptExcX0SoNh5vub9gc15r8haZyW0KS2ZLnz%2Bg2mW0hyhBhXlVl3%2BDhMs973CjPBx%2FEI9oIAof3V9zbUuaKLzRkvHODB0QcmDt1K9V%2FL%2BnkjVlc5T0FcbYH1RuRne3z3mspwGhhCU7L7Cm3pvhjs5Pq9MX2CrEMvFpZF5q%2BvR%2BlSadpIhFM%2FCR0fWqrzAr36rq6yZlkRTQ7hovjxDl9x0CgeeTR6JbdXjKJ8mnhTN3FwKBx3JF4ytY1wCz0TfTXipuFalsjCdj4rKBjqkAVzaCSo1WeXXy1I8edok%2BfGzI676%2BOwFwlLeYQd0QAcoi4n79s5EoCPeF7yZv4Ai%2FDyx5FZ1OkkcWnWdnY7cop7V3wWbe4g0J%2B9ELAyCOgpH1dXa4mmGfepc8uRf3naE1V09nLWqmN%2BMYESTIIk0i78JyD5R8teVN7vsOVWWsWEc%2BujPOfsaIiz4ZV84iWso3roTJMWpP2ojp5fgw0k11xzijz6R&X-Amz-Signature=5398bee8065992cb252c058d9e28b1562254d11bbbae4807eda61019deff9814&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

