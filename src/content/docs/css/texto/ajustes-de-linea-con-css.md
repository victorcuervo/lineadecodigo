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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EGF4GEN%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T170220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICuqwFSFFrzFYQRNKz7%2BCqyK6J4eLpq%2BAxl69FbggQ4jAiBjfu7I%2F2kPXSfjkXlwzcQB%2FRQCPIzO6Mcr8rAoQeGcRSqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKPUO7ULN6vI3SqIQKtwDcFiJ41jRoyo8GzBQ3n6eMnhKivbpyUaQgrgiljk4euCz5vo8RzGPkVJsonhxl4pZeCizi8j30P43k%2BSwXeYFiDcZC2IqOwQNu2Td85GWo2ILs34Rf%2FI17srno%2Fg2Bx3ORzsHScYJbB%2F3WYZ0sBmvk8qwD%2FxmYMM7d2XK53y%2BvAPP6O21NcOX0tCp5qWhzvQjWWwIhHppqLAHr9HmgOU2QbyZv3eJ9EoQTd66sCYofDCZphSkox7q%2Fb6HRvYsdc%2BPO8HVKemuo0l3LRcZ8zt8yUB%2BdMUfiv7IInbpjjXyYRwgb1G1nriF7gs2YeTN6IK%2Bs5w%2Bv1dnt3rCGeu5AjlHJzeZ61A8rJqPHaN%2B6nhKg2R0XnvFtq9QPME8cYpNIyVmq9eJK2tpt0liF4idsKXJ0IhrRwfbLsxrpuo%2FIRfDNwVZFgBgoRoC3Inb176LaQJEH90wbZzM8mmkZupZRnCikqDTWdFOMQ1OMO5IrY8KiJlgA2TLJbZZu9NILmmFw1cz93%2FDa620WM4GhmEPYdlZjKFgNUhsn7Sp%2BQZqiY%2Fq6a119dtpWeBjhShJCFqdDkYO8A7%2BOfdlDXTlcHBkCoSfL8rWrtMH4FUCrm9ObTqI0toZz8GgJ4R996qPTdowxJ%2BLygY6pgGBNNQLISgrxSD52HYCjJ8UaliAwLq5tuou%2BwFvVuPZqgQXqAhdGVVLSfJlqKtSuKI%2FUrlxOfN%2Fy7dSJ5cXFsg0sdRXba5DYKCxGAVW71nsKIlDeLZtZV%2BZNavFDtaPJRclXJMJW1SqCsv2FaeyGqzwzueOFM3YWWHKuJo0bFuao0wu9FkU0Hx3Cgojzq0rdTmMKdyw65HGzJ4vZta3CmuRPTr7Mq%2Fh&X-Amz-Signature=8ea2fb1f5ce493c970b6cc8036dbedd782547a7ab93b87e5cde4cb3ddd9cf266&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EGF4GEN%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T170220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICuqwFSFFrzFYQRNKz7%2BCqyK6J4eLpq%2BAxl69FbggQ4jAiBjfu7I%2F2kPXSfjkXlwzcQB%2FRQCPIzO6Mcr8rAoQeGcRSqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKPUO7ULN6vI3SqIQKtwDcFiJ41jRoyo8GzBQ3n6eMnhKivbpyUaQgrgiljk4euCz5vo8RzGPkVJsonhxl4pZeCizi8j30P43k%2BSwXeYFiDcZC2IqOwQNu2Td85GWo2ILs34Rf%2FI17srno%2Fg2Bx3ORzsHScYJbB%2F3WYZ0sBmvk8qwD%2FxmYMM7d2XK53y%2BvAPP6O21NcOX0tCp5qWhzvQjWWwIhHppqLAHr9HmgOU2QbyZv3eJ9EoQTd66sCYofDCZphSkox7q%2Fb6HRvYsdc%2BPO8HVKemuo0l3LRcZ8zt8yUB%2BdMUfiv7IInbpjjXyYRwgb1G1nriF7gs2YeTN6IK%2Bs5w%2Bv1dnt3rCGeu5AjlHJzeZ61A8rJqPHaN%2B6nhKg2R0XnvFtq9QPME8cYpNIyVmq9eJK2tpt0liF4idsKXJ0IhrRwfbLsxrpuo%2FIRfDNwVZFgBgoRoC3Inb176LaQJEH90wbZzM8mmkZupZRnCikqDTWdFOMQ1OMO5IrY8KiJlgA2TLJbZZu9NILmmFw1cz93%2FDa620WM4GhmEPYdlZjKFgNUhsn7Sp%2BQZqiY%2Fq6a119dtpWeBjhShJCFqdDkYO8A7%2BOfdlDXTlcHBkCoSfL8rWrtMH4FUCrm9ObTqI0toZz8GgJ4R996qPTdowxJ%2BLygY6pgGBNNQLISgrxSD52HYCjJ8UaliAwLq5tuou%2BwFvVuPZqgQXqAhdGVVLSfJlqKtSuKI%2FUrlxOfN%2Fy7dSJ5cXFsg0sdRXba5DYKCxGAVW71nsKIlDeLZtZV%2BZNavFDtaPJRclXJMJW1SqCsv2FaeyGqzwzueOFM3YWWHKuJo0bFuao0wu9FkU0Hx3Cgojzq0rdTmMKdyw65HGzJ4vZta3CmuRPTr7Mq%2Fh&X-Amz-Signature=c4da8a346d67b6a25210d34ad3f0433cf4cd6a94dafafc21a4715a9aa8367dcd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

