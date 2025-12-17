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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7PP6Y5Q%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T015536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDP%2BdcBOuRP8oVG0yuVA3i401KE1qrQ2%2F9rWidiU%2FaXRwIgO98jMP%2BN83vvCEq9o8db532%2BiiprYhzIUiBgFRzBxPUq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDAWajAuF3z%2FC0BT9OCrcA%2FtkqO%2BgNqfMGxwwi9xj45dZ37g5VvbjODWtOvIPsIUci86EfeqCd6fF4fKZHi6%2Bt1qJH%2B12bTUpCUOutHP174CYTolp7OqLJ%2B5etb8DNvCIvVdghzxS7N6o5Og5P9WqGM7C4%2FD64TPmS0K0B%2BuhdjOeHQi9hi4i4o35IxQPWiyEOKZd9sY3KZBTT096YKWLWFztdSPPOQmTjhZXAgH7JMz0J5xN3U7S15lR2z01OvwPQcO4rn%2BtkXi52fTtYeXw8CIAznVKAYemnW%2BK%2FOM0GQRLA2G5FRcZ0sL19YRJRwL7ytIxoN%2FxUTPnKxv6hwTehcSSOQkGi7FSVbc84WyxyQwZgTSuaMiGVvW2eXHHvu%2FdJHHIXWbeTrEr5bAIG4FgFcz9RF%2FYT8y3iLqwR1HNKNGfkYgNJBRUyw0vNAQvpOazv9HdIxZ3hnygIT4%2FYqUATuKf%2FjCkWpl6uhIiobpXg%2FzQSpm6x3IKG7YH%2B5N899mD2F28OxEtynG%2BPF9NRoVOspIIRK4m%2FxDSCD1XVJoY80Z48zLtz3VUR1x2IFct3YK9LxBD5Jd%2BTobljoi2QQWPGB9fWWBd6g4180iR9a96U25VIvosRxThxIIp%2FKdkYvpw5uMYRB481r5SZ8CiMNiYiMoGOqUB5O1rcGq1BaxoNghtDd0wUkic7ZLZle6dfbYP2rVf%2B%2FaQYDZCbZaOofX1X1o4irwUHh%2FcR%2BEOb%2BjTY5wXUyZ9Jr4%2BmLlod1Y9IQqDjvqIauHMAQlrTb%2B%2BBR2fTqSWPJAJCGLyg8weZT7PSyozV%2FKjpkEBJSPvDncnbn7MyPjRijOyh5%2Fga%2F60nvxvw8U4cGDPZoxRjfVfrLkGweHfjL5bHAE984cZ&X-Amz-Signature=dd2ec5ad9f597027042570dd39b19dd19f3eda5d5b862b83555b73ea881ec141&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7PP6Y5Q%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T015536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDP%2BdcBOuRP8oVG0yuVA3i401KE1qrQ2%2F9rWidiU%2FaXRwIgO98jMP%2BN83vvCEq9o8db532%2BiiprYhzIUiBgFRzBxPUq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDAWajAuF3z%2FC0BT9OCrcA%2FtkqO%2BgNqfMGxwwi9xj45dZ37g5VvbjODWtOvIPsIUci86EfeqCd6fF4fKZHi6%2Bt1qJH%2B12bTUpCUOutHP174CYTolp7OqLJ%2B5etb8DNvCIvVdghzxS7N6o5Og5P9WqGM7C4%2FD64TPmS0K0B%2BuhdjOeHQi9hi4i4o35IxQPWiyEOKZd9sY3KZBTT096YKWLWFztdSPPOQmTjhZXAgH7JMz0J5xN3U7S15lR2z01OvwPQcO4rn%2BtkXi52fTtYeXw8CIAznVKAYemnW%2BK%2FOM0GQRLA2G5FRcZ0sL19YRJRwL7ytIxoN%2FxUTPnKxv6hwTehcSSOQkGi7FSVbc84WyxyQwZgTSuaMiGVvW2eXHHvu%2FdJHHIXWbeTrEr5bAIG4FgFcz9RF%2FYT8y3iLqwR1HNKNGfkYgNJBRUyw0vNAQvpOazv9HdIxZ3hnygIT4%2FYqUATuKf%2FjCkWpl6uhIiobpXg%2FzQSpm6x3IKG7YH%2B5N899mD2F28OxEtynG%2BPF9NRoVOspIIRK4m%2FxDSCD1XVJoY80Z48zLtz3VUR1x2IFct3YK9LxBD5Jd%2BTobljoi2QQWPGB9fWWBd6g4180iR9a96U25VIvosRxThxIIp%2FKdkYvpw5uMYRB481r5SZ8CiMNiYiMoGOqUB5O1rcGq1BaxoNghtDd0wUkic7ZLZle6dfbYP2rVf%2B%2FaQYDZCbZaOofX1X1o4irwUHh%2FcR%2BEOb%2BjTY5wXUyZ9Jr4%2BmLlod1Y9IQqDjvqIauHMAQlrTb%2B%2BBR2fTqSWPJAJCGLyg8weZT7PSyozV%2FKjpkEBJSPvDncnbn7MyPjRijOyh5%2Fga%2F60nvxvw8U4cGDPZoxRjfVfrLkGweHfjL5bHAE984cZ&X-Amz-Signature=efee06b1e89c5666015679d01ca1786ec243745f59084690e4685da46be069f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

