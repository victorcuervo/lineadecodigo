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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466546FU7VB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T013828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID7rYnCzxG1cNbcmOuIuHJW0z0CXlTUJSjrtxTXONctwAiEA6u3Iuae%2BNnoE22s5keDVYJQr%2BTucZ5bbwLTafIAuXZwq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDBk7gCtrK3RWlPbrCCrcA5c1Q8bg5vsCDdoLyTwdvy0YPY1DXLkIGBPvx2b5x8cCNUL43TrADyhd0nG9kU1FWH8a4Myn%2FBYfz5%2BjPwfopPCMOX3fdSjhNakiZ5srDySnZGONUcyEJ88lL2BSlqoSaAtPit98oNZY%2BxE0R5v%2BxmuDu%2Fmj7VnXkddjhjYYd4vndAgLo8XE1lW8hd2sn7HQKMzLcMj%2F2w9g20bPUJMd6S0nZQGI7LX4d5BYW2FHbUpuwo7OCCcwroRLqidBjNWUzZKIa5SpZ0%2FiWw1T5IWKnBw%2Fpr7zTWTUK4kD9BnshusjlOw326XVpj8iL1eNYhG%2FdDFkdjIUySv3E0aIyz7qoz4O7OLioYCyWI5uHI5Duvb7TYJ24o70v2lx%2FgNgHu94Xbu9TY6zIX1J9iDax3vBxARxld3ryX%2BLxOkel3DFxVfJPTPYKriQLybPhOcdEzD82b8qc2Ss3oe28JQhm5WLMg2IS%2FIDAISjJ2LCvKYz7%2FaGkEiIeXdkXUMLBo6HZqUwqoee9C%2FCC3So28n2OPP7Kq%2B2u03AMbgJ4LmVm1MMzXkMEAhRKDkOIcmeIhoe3zoFEbU61eBLqY%2FrmSdUN08dg1ERzl0jdTD7kBEdniVCDdGqYH4INs1RfWI6VFobMMz7h8oGOqUBnJLviKJdMRLOGqiNz%2BcgLbwljIJ6ZygfR29nC74efXjYRKOyOY9RbcKBS3ZLJh%2B%2Bqumft3aGO8%2BIDbnDjsn5%2FCswhBjhxlUg0fUbmt3zNpLUA8H7IgBglX2iZd8P9TSHMGEk%2BOfqEUgEThP%2F%2FWslh6YBg7Rtt5l0G0YRQf4BukszSh4bH9IfaEYhRM8obyaan3QJBhA1XmCPYaFDKZ%2BB%2BYs0zMp0&X-Amz-Signature=822daa60c3ddb70b359b0098a072e077a263fa3941cd2023df70c50dc556b870&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466546FU7VB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T013828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID7rYnCzxG1cNbcmOuIuHJW0z0CXlTUJSjrtxTXONctwAiEA6u3Iuae%2BNnoE22s5keDVYJQr%2BTucZ5bbwLTafIAuXZwq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDBk7gCtrK3RWlPbrCCrcA5c1Q8bg5vsCDdoLyTwdvy0YPY1DXLkIGBPvx2b5x8cCNUL43TrADyhd0nG9kU1FWH8a4Myn%2FBYfz5%2BjPwfopPCMOX3fdSjhNakiZ5srDySnZGONUcyEJ88lL2BSlqoSaAtPit98oNZY%2BxE0R5v%2BxmuDu%2Fmj7VnXkddjhjYYd4vndAgLo8XE1lW8hd2sn7HQKMzLcMj%2F2w9g20bPUJMd6S0nZQGI7LX4d5BYW2FHbUpuwo7OCCcwroRLqidBjNWUzZKIa5SpZ0%2FiWw1T5IWKnBw%2Fpr7zTWTUK4kD9BnshusjlOw326XVpj8iL1eNYhG%2FdDFkdjIUySv3E0aIyz7qoz4O7OLioYCyWI5uHI5Duvb7TYJ24o70v2lx%2FgNgHu94Xbu9TY6zIX1J9iDax3vBxARxld3ryX%2BLxOkel3DFxVfJPTPYKriQLybPhOcdEzD82b8qc2Ss3oe28JQhm5WLMg2IS%2FIDAISjJ2LCvKYz7%2FaGkEiIeXdkXUMLBo6HZqUwqoee9C%2FCC3So28n2OPP7Kq%2B2u03AMbgJ4LmVm1MMzXkMEAhRKDkOIcmeIhoe3zoFEbU61eBLqY%2FrmSdUN08dg1ERzl0jdTD7kBEdniVCDdGqYH4INs1RfWI6VFobMMz7h8oGOqUBnJLviKJdMRLOGqiNz%2BcgLbwljIJ6ZygfR29nC74efXjYRKOyOY9RbcKBS3ZLJh%2B%2Bqumft3aGO8%2BIDbnDjsn5%2FCswhBjhxlUg0fUbmt3zNpLUA8H7IgBglX2iZd8P9TSHMGEk%2BOfqEUgEThP%2F%2FWslh6YBg7Rtt5l0G0YRQf4BukszSh4bH9IfaEYhRM8obyaan3QJBhA1XmCPYaFDKZ%2BB%2BYs0zMp0&X-Amz-Signature=287a74cad8de1a9b2f5a50a8fb99fef147cec647b6bac89c2a16dd3e928f2f47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

